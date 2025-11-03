'use client';

import { useState } from 'react';
import type { Incident } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { findSimilarIncidents } from '@/ai/flows/incident-similarity';
import { useToast } from '@/hooks/use-toast';
import { Sparkles, Loader2, Eye } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

interface IncidentSimilarityProps {
  currentIncident: Incident;
  allIncidents: Incident[];
  isPrimaryButton?: boolean;
}

export function IncidentSimilarity({ currentIncident, allIncidents, isPrimaryButton = false }: IncidentSimilarityProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [similarIncidents, setSimilarIncidents] = useState<Incident[]>([]);
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);

  const handleFindSimilar = async () => {
    setIsLoading(true);
    setSimilarIncidents([]);
    try {
      const otherIncidents = allIncidents.filter(inc => inc.id !== currentIncident.id);
      const knownIncidentDetails = otherIncidents.map(
        (inc) => `ID: ${inc.id}\nTitle: ${inc.title}\nDescription: ${inc.description}`
      );

      const result = await findSimilarIncidents({
        incidentDetails: `Title: ${currentIncident.title}\nDescription: ${currentIncident.description}`,
        knownIncidentDetails,
      });
      
      const foundIncidents = allIncidents.filter(inc => result.includes(inc.id));
      setSimilarIncidents(foundIncidents);
      if (foundIncidents.length > 0) {
        setIsOpen(true);
      } else {
         toast({
            title: 'No Similar Incidents Found',
            description: 'The AI analysis could not find any similar incidents.',
        });
      }

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
      case 'Critical': return 'destructive';
      case 'High': return 'default';
      case 'Medium': return 'secondary';
      case 'Low': return 'outline';
      default: return 'outline';
    }
  };
  
  const triggerButton = (
    <Button 
        onClick={handleFindSimilar} 
        disabled={isLoading} 
        variant={isPrimaryButton ? "default" : "outline"} 
        className={isPrimaryButton ? "w-full text-lg py-6" : "w-full justify-start"}
    >
        {isLoading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
            isPrimaryButton ? <Sparkles className="mr-2 h-4 w-4" /> : <Sparkles className="mr-2 h-4 w-4" />
        )}
        {isLoading ? 'Analyzing...' : 'Find Similar Incidents'}
    </Button>
  );

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {triggerButton}
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center">
             <Sparkles className="mr-2 h-5 w-5 text-primary" /> AI-Generated Similarity Report
          </DialogTitle>
        </DialogHeader>
        <div className="max-h-[60vh] overflow-y-auto pr-4">
            <p className="text-muted-foreground text-sm mb-4">Based on the details of "{currentIncident.title}", the following incidents were found to have similar characteristics.</p>
            <div className="space-y-4">
                {similarIncidents.map(incident => (
                    <div key={incident.id} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                        <Link href={`/incidents/${incident.id}`} className="block" onClick={() => setIsOpen(false)}>
                            <div className="flex justify-between items-start">
                                <h4 className="font-semibold text-primary">{incident.title}</h4>
                                <Badge variant={getSeverityBadge(incident.severity)}>{incident.severity}</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">{incident.summary}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
