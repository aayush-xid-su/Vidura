import { incidents } from '@/lib/data';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import type { Incident } from '@/lib/types';
import { Calendar } from 'lucide-react';

export const metadata = {
    title: 'Incident Timeline | Vidura',
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

export default function TimelinePage() {
  const sortedIncidents = [...incidents].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="container mx-auto py-6 px-4 md:px-6">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-headline font-bold">Incident Timeline</h1>
        <p className="text-muted-foreground mt-2">A chronological overview of major cybersecurity incidents in India.</p>
      </div>

      <div className="relative max-w-2xl mx-auto">
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border" aria-hidden="true"></div>
        
        {sortedIncidents.map((incident, index) => (
          <div key={incident.id} className="relative mb-8 flex items-center justify-between">
            <div className={`w-[calc(50%-2rem)] ${index % 2 === 0 ? 'text-right' : 'order-3 text-left'}`}>
              <p className="text-sm font-medium text-primary">{new Date(incident.date).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })}</p>
            </div>

            <div className="z-10 bg-background p-1 rounded-full border">
                <div className="h-3 w-3 rounded-full bg-primary"></div>
            </div>

            <div className={`w-[calc(50%-2rem)] ${index % 2 === 0 ? 'text-left' : 'order-1 text-right'}`}>
              <div className="p-4 rounded-lg border bg-card shadow-sm hover:shadow-md transition-shadow">
                <Badge variant={getSeverityBadge(incident.severity)} className="mb-2">{incident.severity}</Badge>
                <h3 className="font-semibold mb-1">
                    <Link href={`/incidents/${incident.id}`} className="hover:underline text-card-foreground">
                        {incident.title}
                    </Link>
                </h3>
                <p className="text-sm text-muted-foreground">{incident.summary}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
