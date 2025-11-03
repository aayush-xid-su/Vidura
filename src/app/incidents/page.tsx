import { incidents } from '@/lib/data';
import { IncidentsTable } from './incidents-table';
import { Suspense } from 'react';

export const metadata = {
  title: 'Incident Database | Vidura',
};

// This component will be wrapped in a Suspense boundary
// so the page can render while search params are being read.
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
  );
}

export default function IncidentsPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <PageContent />
        </Suspense>
    );
}
