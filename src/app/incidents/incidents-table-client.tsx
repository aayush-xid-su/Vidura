
'use client';

import { IncidentsTable } from './incidents-table';
import type { Incident } from '@/lib/types';
import { useSearchParams } from 'next/navigation';
import { useState, useMemo, useTransition, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton';

export default function IncidentsTableClient({ data }: { data: Incident[] }) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();

    const [hasMounted, setHasMounted] = useState(false);

    const [keyword, setKeyword] = useState('');
    const [year, setYear] = useState('');
    const [sector, setSector] = useState('');
    const [type, setType] = useState('');
    const [severity, setSeverity] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setKeyword(searchParams.get('search') || '');
        setYear(searchParams.get('year') || '');
        setSector(searchParams.get('sector') || '');
        setType(searchParams.get('type') || '');
        setSeverity(searchParams.get('severity') || '');
        setCurrentPage(Number(searchParams.get('page')) || 1);
        setHasMounted(true);
    }, [searchParams]);
    
    const updateURLParams = (params: Record<string, string>) => {
        const currentParams = new URLSearchParams(searchParams.toString());
        Object.entries(params).forEach(([key, value]) => {
          if (value) {
            currentParams.set(key, value);
          } else {
            currentParams.delete(key);
          }
        });
        // Add page to params
        if (params.page) {
            currentParams.set('page', params.page);
        } else {
            currentParams.delete('page');
        }

        startTransition(() => {
            router.replace(`${pathname}?${currentParams.toString()}`);
        });
    };
    
    const handleFilterChange = (setter: (value: string) => void, paramName: string) => (value: string) => {
        const newValue = value === 'all' ? '' : value;
        setter(newValue);
        setCurrentPage(1);
        updateURLParams({ [paramName]: newValue, page: '1' });
    };
      
    const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(e.target.value);
        setCurrentPage(1);
        updateURLParams({ 'search': e.target.value, page: '1' });
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        updateURLParams({ page: page.toString() });
    }

    const filteredData = useMemo(() => {
        return data.filter((item) => {
          const itemYear = new Date(item.date).getFullYear().toString();
          return (
            (keyword === '' ||
              item.title.toLowerCase().includes(keyword.toLowerCase()) ||
              item.description.toLowerCase().includes(keyword.toLowerCase()) ||
              item.sector.toLowerCase().includes(keyword.toLowerCase())) &&
            (year === '' || itemYear === year) &&
            (sector === '' || item.sector === sector) &&
            (type === '' || item.incident_type === type) &&
            (severity === '' || item.severity === severity)
          );
        });
    }, [data, keyword, year, sector, type, severity]);

    if (!hasMounted) {
      return (
        <div className="space-y-4">
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-96 w-full" />
        </div>
      );
    }

    return (
        <IncidentsTable 
            data={filteredData}
            keyword={keyword}
            year={year}
            sector={sector}
            type={type}
            severity={severity}
            currentPage={currentPage}
            handleKeywordChange={handleKeywordChange}
            handleFilterChange={handleFilterChange}
            setCurrentPage={handlePageChange}
            allIncidents={data}
        />
    );
}
