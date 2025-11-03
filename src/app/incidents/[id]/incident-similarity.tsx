'use client';

import { useState } from 'react';
import type { Incident } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { findSimilarIncidents } from '@/ai/flows/incident-similarity';
import { useToast } from '@/hooks/use-toast';
import { Sparkles, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

interface IncidentSimilarityProps {
  currentIncident: Incident;
  allIncidents: Incident[];
}

export function IncidentSimilarity({ currentIncident, allIncidents }: IncidentSimilarityProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [similarIncidents, setSimilarIncidents] = useState<Incident[]>([]);
  const { toast } = useToast();

  const handleFindSimilar = async () => {
    setIsLoading(true);
    setSimilarIncidents([]);
    try {
      const knownIncidentDetails = allIncidents.map(
        (inc) => `ID: ${inc.id}\nTitle: ${inc.title}\nDescription: ${inc.description}`
      );

      const result = await findSimilarIncidents({
        incidentDetails: `Title: ${currentIncident.title}\nDescription: ${currentIncident.description}`,
        knownIncidentDetails,
      });

      // The AI returns an array of strings. We need to parse the ID from them.
      const similarIds = result.map(res => {
        const match = res.match(/ID: ([\w-]+)/);
        return match ? match[1] : null;
      }).filter(Boolean);

      const foundIncidents = allIncidents.filter(inc => similarIds.includes(inc.id));
      setSimilarIncidents(foundIncidents);

    } catch (error) {
      console.error('Error finding similar incidents:', error);
      toast({
        variant: 'destructive',
        title: 'AI Analysis Failed',
        description: 'Could not retrieve similar incidents at this time.',
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const getSeverityBadge = (severity: Incident['severity']) => {
    switch (severity) {
      case 'Critical':
        return 'destructive';
      case 'High':
        return 'default';
      case 'Medium':
        return 'secondary';
      case 'Low':
        return 'outline';
      default:
        return 'outline';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
            <div className="flex items-center">
              <Sparkles className="mr-2 h-5 w-5 text-accent" />
              <span>AI-Powered Similarity Analysis</span>
            </div>
            <Button onClick={handleFindSimilar} disabled={isLoading}>
                {isLoading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                    <Sparkles className="mr-2 h-4 w-4" />
                )}
                Find Similar Incidents
            </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading && (
            <div className="flex items-center justify-center p-8">
                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                <p className="ml-4 text-muted-foreground">Analyzing incidents...</p>
            </div>
        )}
        {!isLoading && similarIncidents.length === 0 && (
            <p className="text-center text-sm text-muted-foreground py-4">
                Click the button to find incidents with similar characteristics.
            </p>
        )}
        {!isLoading && similarIncidents.length > 0 && (
            <div className="space-y-4">
                {similarIncidents.map(incident => (
                    <div key={incident.id} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                        <Link href={`/incidents/${incident.id}`} className="block">
                            <div className="flex justify-between items-start">
                                <h4 className="font-semibold text-primary">{incident.title}</h4>
                                <Badge variant={getSeverityBadge(incident.severity)}>{incident.severity}</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">{incident.summary}</p>
                        </Link>
                    </div>
                ))}
            </div>
        )}
      </CardContent>
    </Card>
  );
}
