import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Suspense } from 'react';
import { ArrowRight } from 'lucide-react';

function PageContent() {
    return (
    <div className="flex flex-col items-center justify-center text-center flex-1 p-4">
      <h1 className="text-5xl md:text-7xl font-bold font-headline tracking-tighter text-primary">
        Vidura
      </h1>
      <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
        An open-source platform for tracking and analyzing cybersecurity incidents across India.
      </p>
      <div className="mt-8 flex gap-4">
        <Button asChild size="lg">
          <Link href="/incidents">
            Browse Incidents <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
            <a href="https://github.com/aayush-xid-su/vidura" target="_blank" rel="noopener noreferrer">
                View on GitHub
            </a>
        </Button>
      </div>
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
