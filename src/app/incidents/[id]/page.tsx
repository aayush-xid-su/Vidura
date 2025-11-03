import { incidents } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import type { Incident } from '@/lib/types';
import { 
    Calendar, 
    Tag, 
    Shield, 
    Building, 
    ArrowLeft,
    AlertTriangle, 
    Server,
    CheckCircle2
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { IncidentDetailClient } from './incident-detail-client';

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
  
  const allIncidents = incidents;

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <Link href="/incidents" className="text-sm text-primary hover:underline mb-4 inline-flex items-center gap-2 transition-transform duration-200 hover:translate-x-[-2px]">
            <ArrowLeft className="h-4 w-4" /> Back to Browse
        </Link>
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-headline font-bold mb-2 text-primary">{incident.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span>{incident.incident_type}</span>
            <span>&bull;</span>
            <span>{new Date(incident.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <Badge variant={getSeverityBadge(incident.severity)} className="ml-2 text-xs">{incident.severity} Severity</Badge>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
                {/* Incident Description */}
                <Card className="transition-shadow duration-300 hover:shadow-lg">
                    <CardHeader><CardTitle className="text-2xl font-headline">Incident Description</CardTitle></CardHeader>
                    <CardContent><p className="text-base text-muted-foreground">{incident.description}</p></CardContent>
                </Card>

                 {/* Impact */}
                <Card className="transition-shadow duration-300 hover:shadow-lg">
                    <CardHeader><CardTitle className="flex items-center"><AlertTriangle className="mr-2 text-destructive"/>Impact</CardTitle></CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <h4 className="font-semibold">Summary</h4>
                            <p className="text-muted-foreground text-sm">{incident.summary}</p>
                        </div>
                    </CardContent>
                </Card>

                 {/* Verification Status */}
                <Card className="transition-shadow duration-300 hover:shadow-lg">
                    <CardHeader><CardTitle className="flex items-center gap-2 text-2xl font-headline"><CheckCircle2 className="text-green-500"/>Verification Status</CardTitle></CardHeader>
                    <CardContent>
                         <div>
                            <p className="font-semibold text-base">Verified</p>
                            <p className="text-sm text-muted-foreground">This incident has been verified against multiple public sources.</p>
                         </div>
                    </CardContent>
                </Card>
                
                <IncidentDetailClient incident={incident} allIncidents={allIncidents} />
            </div>

            <div className="space-y-8">
                {/* Incident Details */}
                <Card className="transition-shadow duration-300 hover:shadow-lg">
                    <CardHeader><CardTitle className="text-2xl font-headline">Incident Details</CardTitle></CardHeader>
                    <CardContent className="space-y-4 text-sm">
                        <div className="flex items-start gap-3">
                            <Calendar className="h-4 w-4 mt-1 text-muted-foreground" />
                            <div>
                                <p className="text-muted-foreground text-sm">Date of Incident</p>
                                <p className="font-semibold text-base">{new Date(incident.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <Building className="h-4 w-4 mt-1 text-muted-foreground" />
                            <div>
                                <p className="text-muted-foreground text-sm">Organization</p>
                                <p className="font-semibold text-base">{incident.affected_entities.join(', ')}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <Tag className="h-4 w-4 mt-1 text-muted-foreground" />
                            <div>
                                <p className="text-muted-foreground text-sm">Sector</p>
                                <p className="font-semibold text-base">{incident.sector}</p>
                            </div>
                        </div>
                         <div className="flex items-start gap-3">
                            <AlertTriangle className="h-4 w-4 mt-1 text-muted-foreground" />
                            <div>
                                <p className="text-muted-foreground text-sm">Incident Type</p>
                                <p className="font-semibold text-base">{incident.incident_type}</p>
                            </div>
                        </div>
                         <div className="flex items-start gap-3">
                            <Server className="h-4 w-4 mt-1 text-muted-foreground" />
                            <div>
                                <p className="text-muted-foreground text-sm">Attack Method</p>
                                <p className="font-semibold text-base">{incident.attack_method}</p>
                            </div>
                        </div>
                         <div className="flex items-start gap-3">
                            <Shield className="h-4 w-4 mt-1 text-muted-foreground" />
                            <div>
                                <p className="text-muted-foreground text-sm">Root Cause</p>
                                <p className="font-semibold text-base">{incident.root_cause}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <IncidentDetailClient incident={incident} allIncidents={allIncidents} isQuickActions />

            </div>
        </div>
      </div>
    </div>
  );
}
