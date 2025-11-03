import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { IncidentsTable } from './incidents/incidents-table';
import { incidents } from '@/lib/data';
import { Suspense } from 'react';

function PageContent() {
    return (
    <div className="container mx-auto py-6 px-4 md:px-6">
      <div className="text-center mb-8">
        <h1 className="text-5xl md:text-7xl font-bold font-headline tracking-tighter text-primary">
          Incident Database
        </h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Search and filter through cybersecurity incidents in India (2000-2025). This is a static snapshot; in a real-world application, this data would be connected to a live feed for automatic updates.
        </p>
      </div>
      <IncidentsTable data={incidents} />
    </div>
    )
}

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <PageContent />
    </Suspense>
  );
}
