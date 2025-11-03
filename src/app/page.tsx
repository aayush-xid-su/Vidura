import { Search, User } from 'lucide-react';
import { SearchBar } from '@/components/search-bar';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col items-center justify-center text-foreground p-4">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl md:text-7xl font-bold font-headline tracking-tighter text-primary">
          Vidura: Cybersecurity Incident Record
        </h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Search and filter through cybersecurity incidents in India (2000-2025). This is a static snapshot; in a real-world application, this data would be connected to a live feed for automatic updates.
        </p>
        <div className="mt-8 max-w-xl mx-auto">
          <SearchBar />
        </div>
        <div className="mt-6 flex justify-center gap-4">
          <Button asChild variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/incidents">Browse All Incidents</Link>
          </Button>
          <Button variant="outline" asChild className="bg-transparent border-white/20 hover:bg-white/10 hover:text-foreground">
            <Link href="/about"><User className="mr-2 h-4 w-4" /> About The Project</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
