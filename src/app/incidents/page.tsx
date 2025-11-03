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
