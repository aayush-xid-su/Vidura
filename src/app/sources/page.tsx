import { sourceCategories } from '@/lib/sources-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

export const metadata = {
    title: 'Data Sources | Vidura',
};

export default function SourcesPage() {
  return (
    <div className="container mx-auto py-6 px-4 md:px-6">
      <div className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-headline font-bold text-primary">Data Sources</h1>
        <p className="text-base text-muted-foreground mt-2 max-w-2xl mx-auto">A comprehensive list of all sources used for collecting incident data, categorized for clarity and ease of access.</p>
      </div>

      <div className="space-y-12">
        {sourceCategories.map(category => (
          <Card key={category.name} className="bg-card/50 backdrop-blur-sm border border-border/20">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-headline">
                <category.icon className="mr-4 h-8 w-8 text-primary" />
                <div>
                    {category.name}
                    <p className="text-sm font-body font-normal text-muted-foreground mt-1">{category.description}</p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {category.sources.map((source, index) => (
                  <a
                    key={index}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between border-b border-border/10 pb-3 group hover:bg-accent/50 p-2 rounded-lg transition-colors"
                  >
                    <div>
                      <p className="font-semibold text-foreground group-hover:text-primary">{source.title}</p>
                      <Badge variant="secondary" className="mt-1">{source.type}</Badge>
                    </div>
                    <div
                      className="flex items-center gap-2 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      Visit <ExternalLink className="h-4 w-4" />
                    </div>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
