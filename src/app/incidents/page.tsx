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
      <div className="mb-6">
        <h1 className="text-3xl font-headline font-bold text-primary">Incident Database</h1>
        <p className="text-muted-foreground">Search and filter through cybersecurity incidents in India (2000-2025).</p>
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
