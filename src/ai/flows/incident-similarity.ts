'use server';
/**
 * @fileOverview A Genkit flow for finding incidents similar to a selected incident using AI analysis.
 */
import { config } from 'dotenv';
config();

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const IncidentSimilarityInputSchema = z.object({
  incidentDetails: z.string().describe('Detailed information about the incident, including its title and description.'),
  knownIncidentDetails: z.array(z.string()).describe('A list of known incidents to compare against, each formatted with its ID, title, and description.'),
});

export type IncidentSimilarityInput = z.infer<typeof IncidentSimilarityInputSchema>;

const IncidentSimilarityOutputSchema = z.array(z.string()).describe('An array of the string IDs of the top 3 most similar incidents.');

export type IncidentSimilarityOutput = z.infer<typeof IncidentSimilarityOutputSchema>;

export async function findSimilarIncidents(input: IncidentSimilarityInput): Promise<IncidentSimilarityOutput> {
  return incidentSimilarityFlow(input);
}

const incidentSimilarityPrompt = ai.definePrompt({
  name: 'incidentSimilarityPrompt',
  input: {schema: IncidentSimilarityInputSchema},
  output: {schema: IncidentSimilarityOutputSchema},
  prompt: `You are an AI assistant specializing in cybersecurity incident analysis.
  Your task is to identify the known incidents that are most similar to a specific incident based on the provided details.

  Incident to Analyze:
  {{{incidentDetails}}}

  List of Known Incidents (with their IDs):
  {{#each knownIncidentDetails}}
  - {{{this}}}
  {{/each}}

  Compare the "Incident to Analyze" with the "List of Known Incidents".
  Based on your analysis of the attack vectors, targets, and methods, return a JSON array containing the string IDs of the top 3 most similar incidents.
  For example: ["incident-id-1", "incident-id-2", "incident-id-3"].
  Return an empty array if no similar incidents are found.
  `,
});

const incidentSimilarityFlow = ai.defineFlow(
  {
    name: 'incidentSimilarityFlow',
    inputSchema: IncidentSimilarityInputSchema,
    outputSchema: IncidentSimilarityOutputSchema,
  },
  async input => {
    const {output} = await incidentSimilarityPrompt(input);
    return output!;
  }
);
