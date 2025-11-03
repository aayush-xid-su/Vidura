import { incidents } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import type { Incident } from '@/lib/types';
import { Calendar, Tag, Shield, List, Building, Link as LinkIcon, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import { IncidentSimilarity } from './incident-similarity';

export function generateStaticParams() {
  return incidents.map((incident) => ({
    id: incident.id,
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
    const incident = incidents.find((p) => p.id === params.id);
    if (!incident) {
      return { title: 'Incident Not Found | Vidura' };
    }
    return { title: `${incident.title} | Vidura` };
}

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

export default function IncidentDetailPage({ params }: { params: { id: string } }) {
  const incident = incidents.find((p) => p.id === params.id);

  if (!incident) {
    notFound();
  }
  
  const otherIncidents = incidents.filter(p => p.id !== params.id);

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link href="/incidents" className="text-sm text-primary hover:underline mb-2 inline-block">
            &larr; Back to all incidents
          </Link>
          <h1 className="text-4xl font-headline font-bold mb-2">{incident.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{new Date(incident.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="h-4 w-4" />
              <span>{incident.sector}</span>
            </div>
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" />
              <span>{incident.incident_type}</span>
            </div>
          </div>
        </div>

        <div className="prose dark:prose-invert max-w-none mb-8">
            <p className="lead text-lg text-muted-foreground">{incident.summary}</p>
            <p>{incident.description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="rounded-lg border bg-card text-card-foreground p-6">
                <h3 className="font-headline text-lg font-semibold mb-4 flex items-center"><Shield className="mr-2 h-5 w-5 text-primary" />Details</h3>
                <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Severity:</span>
                        <Badge variant={getSeverityBadge(incident.severity)}>{incident.severity}</Badge>
                    </div>
                     <div className="flex justify-between">
                        <span className="text-muted-foreground">Sector:</span>
                        <span>{incident.sector}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Incident Type:</span>
                        <span>{incident.incident_type}</span>
                    </div>
                </div>
            </div>
             <div className="rounded-lg border bg-card text-card-foreground p-6">
                <h3 className="font-headline text-lg font-semibold mb-4 flex items-center"><Building className="mr-2 h-5 w-5 text-primary" />Affected Entities</h3>
                <ul className="space-y-2 text-sm">
                    {incident.affected_entities.map(entity => (
                        <li key={entity} className="flex items-center">{entity}</li>
                    ))}
                </ul>
            </div>
        </div>

        <div className="mb-8">
            <h3 className="font-headline text-lg font-semibold mb-4 flex items-center"><LinkIcon className="mr-2 h-5 w-5 text-primary" />Sources</h3>
            <ul className="space-y-2">
                {incident.sources.map(source => (
                    <li key={source.url}>
                        <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-2">
                           <LinkIcon className="h-4 w-4" /> {source.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
        
        <IncidentSimilarity currentIncident={incident} allIncidents={otherIncidents} />
      </div>
    </div>
  );
}
