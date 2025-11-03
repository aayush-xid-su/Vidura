import { incidents } from '@/lib/data';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import type { Incident } from '@/lib/types';
import { Building, Tag, AlertCircle, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const metadata = {
    title: 'Incident Timeline | Vidura',
};

const getSeverityIcon = (severity: Incident['severity']) => {
    switch (severity) {
      case 'Critical':
        return <AlertCircle className="h-4 w-4 text-destructive" />;
      case 'High':
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      case 'Medium':
        return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      case 'Low':
        return <AlertCircle className="h-4 w-4 text-gray-500" />;
      default:
        return <AlertCircle className="h-4 w-4 text-gray-500" />;
    }
};

const getSeverityClass = (severity: Incident['severity']) => {
    switch (severity) {
        case 'Critical': return 'text-destructive';
        case 'High': return 'text-red-500';
        case 'Medium': return 'text-yellow-500';
        case 'Low': return 'text-muted-foreground';
        default: return 'text-muted-foreground';
    }
};


type GroupedIncidents = {
    [year: string]: Incident[];
};

export default function TimelinePage() {
  const sortedIncidents = [...incidents].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  const groupedIncidents = sortedIncidents.reduce((acc, incident) => {
    const year = new Date(incident.date).getFullYear().toString();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(incident);
    return acc;
  }, {} as GroupedIncidents);

  const years = Object.keys(groupedIncidents).sort((a, b) => Number(b) - Number(a));

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-7xl font-bold font-headline tracking-tighter text-primary">
          Incident Timeline
        </h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          A visual representation of the most significant cybersecurity incidents in India over time.
        </p>
      </div>

      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-9 md:left-1/2 -translate-x-1/2 h-full w-0.5 bg-border" aria-hidden="true"></div>
        
        {years.map(year => (
            <div key={year} className="relative mb-12">
                <div className="absolute left-9 md:left-1/2 -translate-x-1/2 -top-2 z-10">
                     <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                        {year}
                     </div>
                </div>

                <div className="pt-24 space-y-8">
                     {groupedIncidents[year].map(incident => (
                         <div key={incident.id} className="relative flex items-start gap-4 md:gap-8">
                            <div className="hidden md:block w-1/2 text-right pr-8">
                                {/* Empty for alignment */}
                            </div>
                             <div className="absolute top-5 left-9 md:left-1/2 -translate-x-1/2 z-10">
                                 <div className="h-3 w-3 rounded-full bg-primary border-2 border-background"></div>
                             </div>
                             <div className="w-full md:w-1/2 md:pl-8">
                                <Link href={`/incidents/${incident.id}`} className="block">
                                    <Card className="hover:border-primary/50 hover:shadow-lg transition-all">
                                        <CardContent className="p-4">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="font-bold text-lg text-card-foreground">{incident.title}</h3>
                                                <Badge variant="outline" className="text-xs whitespace-nowrap">{new Date(incident.date).toLocaleDateString('en-US', { day: '2-digit', month: 'short' })}</Badge>
                                            </div>
                                            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground mb-3">
                                                <span className="flex items-center gap-1.5"><Building className="h-3 w-3" />{incident.affected_entities[0]}</span>
                                                <span className="flex items-center gap-1.5"><Tag className="h-3 w-3" />{incident.incident_type}</span>
                                            </div>
                                            <p className="text-sm text-muted-foreground mb-3">{incident.summary}</p>
                                            <div className={`flex items-center gap-2 text-sm font-medium ${getSeverityClass(incident.severity)}`}>
                                                {getSeverityIcon(incident.severity)}
                                                {incident.severity} Severity
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                             </div>
                         </div>
                     ))}
                </div>

            </div>
        ))}

      </div>
    </div>
  );
}
