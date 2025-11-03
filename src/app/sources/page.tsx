import { incidents } from '@/lib/data';
import { type Source } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Globe, Link as LinkIcon } from 'lucide-react';

export const metadata = {
    title: 'Data Sources | Vidura',
};

const getSources = (): Source[] => {
  const sourceMap = new Map<string, Source>();

  incidents.forEach(incident => {
    incident.sources.forEach(sourceRef => {
      try {
        const url = new URL(sourceRef.url);
        const domain = url.hostname.replace(/^www\./, '');

        if (!sourceMap.has(domain)) {
          sourceMap.set(domain, { domain, references: [] });
        }

        sourceMap.get(domain)?.references.push({
          ...sourceRef,
          incidentId: incident.id,
          incidentTitle: incident.title,
        });
      } catch (e) {
        console.warn(`Invalid URL found: ${sourceRef.url}`);
      }
    });
  });

  return Array.from(sourceMap.values()).sort((a,b) => a.domain.localeCompare(b.domain));
};

export default function SourcesPage() {
  const sources = getSources();

  return (
    <div className="container mx-auto py-6 px-4 md:px-6">
      <div className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-headline font-bold text-primary">Data Sources</h1>
        <p className="text-base text-muted-foreground mt-2">A categorized list of all sources referenced in the incident reports.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sources.map(source => (
          <Card key={source.domain}>
            <CardHeader>
              <CardTitle className="flex items-center text-lg font-headline">
                <Globe className="mr-3 h-5 w-5 text-primary" />
                {source.domain}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {source.references.map((ref, index) => (
                  <li key={`${ref.url}-${index}`}>
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-primary hover:underline"
                    >
                      {ref.title}
                    </a>
                    <p className="text-xs text-muted-foreground mt-1">
                      Referenced in: <Link href={`/incidents/${ref.incidentId}`} className="hover:underline">{ref.incidentTitle}</Link>
                    </p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
