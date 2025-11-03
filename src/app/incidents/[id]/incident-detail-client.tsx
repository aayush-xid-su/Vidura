'use client';

import type { Incident } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { exportToJson } from '@/lib/utils';
import { AlertTriangle, Eye, FileJson, FileText, Link as LinkIcon, Sparkles } from 'lucide-react';
import { IncidentSimilarity } from './incident-similarity-client';
import { Badge } from '@/components/ui/badge';

interface IncidentDetailClientProps {
  incident: Incident;
  allIncidents: Incident[];
  isQuickActions?: boolean;
}

export function IncidentDetailClient({ incident, allIncidents, isQuickActions = false }: IncidentDetailClientProps) {

  const handleExport = () => {
    exportToJson(`incident-${incident.id}`, incident);
  };
  
  if (isQuickActions) {
    return (
        <>
            <Card>
                <CardHeader><CardTitle>Quick Actions</CardTitle></CardHeader>
                <CardContent className="space-y-2">
                    <IncidentSimilarity currentIncident={incident} allIncidents={allIncidents} />
                    <Button variant="outline" className="w-full justify-start">
                        <Eye className="mr-2 h-4 w-4" /> Browse {incident.sector} Incidents
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                         <AlertTriangle className="mr-2 h-4 w-4" /> Similar Attack Types
                    </Button>
                </CardContent>
            </Card>
            <Card>
                <CardHeader><CardTitle>Incident ID</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                    <Badge variant="secondary">{incident.id}</Badge>
                    <Button variant="outline" className="w-full justify-start" onClick={handleExport}>
                       <FileJson className="mr-2 h-4 w-4" /> Export JSON
                    </Button>
                </CardContent>
            </Card>
        </>
    );
  }

  return (
    <>
      {/* Source References */}
      <Card>
          <CardHeader><CardTitle>Source References</CardTitle></CardHeader>
          <CardContent>
               <ul className="space-y-3">
                  {incident.sources.map(source => (
                      <li key={source.url} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                          <div className="flex items-center gap-3">
                              <FileText className="h-5 w-5 text-primary" />
                              <div>
                                  <p className="font-semibold">{source.title}</p>
                                  <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground flex items-center gap-1 hover:underline">
                                    <LinkIcon className="h-3 w-3" />
                                    {new URL(source.url).hostname}
                                  </a>
                              </div>
                          </div>
                          <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                              View &rarr;
                          </a>
                      </li>
                  ))}
              </ul>
          </CardContent>
      </Card>
      
      <IncidentSimilarity currentIncident={incident} allIncidents={allIncidents} isPrimaryButton={true}/>
    </>
  );
}
