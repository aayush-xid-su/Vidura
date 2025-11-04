
import { Suspense } from 'react';
import { HomeClient } from './home-client';
import { Skeleton } from '@/components/ui/skeleton';

function SearchFallback() {
  return (
    <div className="mt-8 flex w-full max-w-2xl items-center space-x-2">
      <div className="relative flex-grow">
        <Skeleton className="h-12 w-full" />
      </div>
      <Skeleton className="h-12 w-24" />
    </div>
  )
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center flex-1 p-4">
      <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight text-primary">
        Vidura: Cybersecurity Incident Record
      </h1>
      <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
        Search and filter through cybersecurity incidents in India (2000-2025). This is a static snapshot; in a real-world application, this data would be connected to a live feed for automatic updates.
      </p>
      
      <Suspense fallback={<SearchFallback />}>
        <HomeClient />
      </Suspense>

    </div>
  );
}
