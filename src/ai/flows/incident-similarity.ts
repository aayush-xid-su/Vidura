// This file contains the Genkit flow for finding incidents similar to a selected incident using AI analysis.

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const IncidentSimilarityInputSchema = z.object({
  incidentDetails: z.string().describe('Detailed information about the incident.'),
  knownIncidentDetails: z.array(z.string()).describe('Details of known incidents to compare against.'),
});

export type IncidentSimilarityInput = z.infer<typeof IncidentSimilarityInputSchema>;

const IncidentSimilarityOutputSchema = z.array(z.string()).describe('An array of similar incident details.');

export type IncidentSimilarityOutput = z.infer<typeof IncidentSimilarityOutputSchema>;

export async function findSimilarIncidents(input: IncidentSimilarityInput): Promise<IncidentSimilarityOutput> {
  return incidentSimilarityFlow(input);
}

const incidentSimilarityPrompt = ai.definePrompt({
  name: 'incidentSimilarityPrompt',
  input: {schema: IncidentSimilarityInputSchema},
  output: {schema: IncidentSimilarityOutputSchema},
  prompt: `You are an AI assistant specializing in cybersecurity incident analysis.

  Given the details of a specific incident and a list of known incidents, your task is to identify the known incidents that are most similar to the specific incident.

  Incident Details: {{{incidentDetails}}}

  Known Incidents:
  {{#each knownIncidentDetails}}
  - {{{this}}}
  {{/each}}

  Provide a JSON array containing only the details of the incidents most similar to the Incident Details provided. Explain why each incident you selected is considered similar. Limit the output to the top 3 most similar incidents, if that many exist. Return an empty array if there are no similar incidents.
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
