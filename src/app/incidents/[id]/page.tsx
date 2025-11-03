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
import { IncidentSimilarity } from './incident-similarity-client';
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
        <Link href="/incidents" className="text-sm text-primary hover:underline mb-4 inline-flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Back to Browse
        </Link>
        <div className="mb-6">
          <h1 className="text-4xl md:text-5xl font-headline font-bold mb-2 text-primary">{incident.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
            <span>{incident.incident_type}</span>
            <span>&bull;</span>
            <span>{new Date(incident.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <Badge variant={getSeverityBadge(incident.severity)} className="ml-2">{incident.severity} Severity</Badge>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
                {/* Incident Description */}
                <Card>
                    <CardHeader><CardTitle>Incident Description</CardTitle></CardHeader>
                    <CardContent><p className="text-muted-foreground">{incident.description}</p></CardContent>
                </Card>

                 {/* Verification Status */}
                <Card>
                    <CardHeader><CardTitle className="flex items-center gap-2"><CheckCircle2 className="text-green-500"/>Verification Status</CardTitle></CardHeader>
                    <CardContent>
                         <div>
                            <p className="font-semibold">Verified</p>
                            <p className="text-sm text-muted-foreground">Verified by CERT-In and international cybersecurity agencies.</p>
                         </div>
                    </CardContent>
                </Card>
                <IncidentDetailClient incident={incident} allIncidents={allIncidents} />
            </div>

            <div className="space-y-8">
                {/* Incident Details */}
                <Card>
                    <CardHeader><CardTitle>Incident Details</CardTitle></CardHeader>
                    <CardContent className="space-y-4 text-sm">
                        <div className="flex items-start gap-3">
                            <Calendar className="h-4 w-4 mt-1 text-muted-foreground" />
                            <div>
                                <p className="text-muted-foreground">Date of Incident</p>
                                <p className="font-semibold">{new Date(incident.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <Building className="h-4 w-4 mt-1 text-muted-foreground" />
                            <div>
                                <p className="text-muted-foreground">Organization</p>
                                <p className="font-semibold">{incident.affected_entities.join(', ')}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <Tag className="h-4 w-4 mt-1 text-muted-foreground" />
                            <div>
                                <p className="text-muted-foreground">Sector</p>
                                <p className="font-semibold">{incident.sector}</p>
                            </div>
                        </div>
                         <div className="flex items-start gap-3">
                            <AlertTriangle className="h-4 w-4 mt-1 text-muted-foreground" />
                            <div>
                                <p className="text-muted-foreground">Incident Type</p>
                                <p className="font-semibold">{incident.incident_type}</p>
                            </div>
                        </div>
                         <div className="flex items-start gap-3">
                            <Server className="h-4 w-4 mt-1 text-muted-foreground" />
                            <div>
                                <p className="text-muted-foreground">Attack Method</p>
                                <p className="font-semibold">{incident.attack_method}</p>
                            </div>
                        </div>
                         <div className="flex items-start gap-3">
                            <Shield className="h-4 w-4 mt-1 text-muted-foreground" />
                            <div>
                                <p className="text-muted-foreground">Root Cause</p>
                                <p className="font-semibold">{incident.root_cause}</p>
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
