import { Search } from 'lucide-react';
import { SearchBar } from '@/components/search-bar';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-background text-foreground p-4">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl md:text-7xl font-bold font-headline tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">
          Vidura
        </h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground">
          India Cyber Incident Tracker
        </p>
        <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">
          Your central hub for tracking, analyzing, and understanding the landscape of cybersecurity incidents across India.
        </p>
        <div className="mt-8 max-w-xl mx-auto">
          <SearchBar />
        </div>
        <div className="mt-4 flex justify-center gap-4">
          <Button asChild>
            <Link href="/incidents">Browse Incidents</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/timeline">View Timeline</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
