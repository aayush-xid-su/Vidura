
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FileText, User, Search } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

export function HomeClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/incidents?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push('/incidents');
    }
  };

  return (
    <>
      <form onSubmit={handleSearch} className="mt-8 flex w-full max-w-2xl items-center space-x-2">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search by organization, sector, or incident type..."
            className="pl-10 h-12 text-base"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button type="submit" size="lg" className="h-12">Search</Button>
      </form>

      <div className="mt-6 flex flex-col sm:flex-row gap-4">
        <Button asChild size="lg">
          <Link href="/incidents">
            <FileText className="mr-2 h-5 w-5" />
            Browse All Incidents
          </Link>
        </Button>
        <Button asChild variant="secondary" size="lg">
          <Link href="/author">
            <User className="mr-2 h-5 w-5" />
            About Author
          </Link>
        </Button>
      </div>
    </>
  );
}
