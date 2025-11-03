
import { incidents } from '@/lib/data';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';

export const metadata = {
  title: 'Incident Database | Vidura',
};

const IncidentsTableClient = dynamic(() => import('./incidents-table-client'), {
  ssr: false,
  loading: () => (
    <div className="space-y-4">
      <Skeleton className="h-24 w-full" />
      <Skeleton className="h-96 w-full" />
    </div>
  )
});

// This component will be wrapped in a Suspense boundary
// so the page can render while search params are being read.
function PageContent() {
  return (
    <div className="container mx-auto py-6 px-4 md:px-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold font-headline tracking-tighter text-primary">
          Incident Database
        </h1>
        <p className="mt-4 text-base text-muted-foreground max-w-3xl mx-auto">
          Search and filter through cybersecurity incidents in India (2000-2025). This is a static snapshot; in a real-world application, this data would be connected to a live feed for automatic updates.
        </p>
      </div>
      <IncidentsTableClient data={incidents} />
    </div>
  );
}

export default function IncidentsPage() {
    return (
        <Suspense fallback={<div className="container mx-auto py-6 px-4 md:px-6 text-center">Loading...</div>}>
            <PageContent />
        </Suspense>
    );
}
