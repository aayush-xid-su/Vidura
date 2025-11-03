
'use client';

import { IncidentsTable } from './incidents-table';
import type { Incident } from '@/lib/types';
import { useSearchParams } from 'next/navigation';
import { useState, useMemo, useTransition } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function IncidentsTableClient({ data }: { data: Incident[] }) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();

    const [keyword, setKeyword] = useState(() => searchParams.get('search') || '');
    const [year, setYear] = useState(() => searchParams.get('year') || '');
    const [sector, setSector] = useState(() => searchParams.get('sector') || '');
    const [type, setType] = useState(() => searchParams.get('type') || '');
    const [severity, setSeverity] = useState(() => searchParams.get('severity') || '');
    const [currentPage, setCurrentPage] = useState(1);
    
    const updateURLParams = (params: Record<string, string>) => {
        const currentParams = new URLSearchParams(searchParams.toString());
        Object.entries(params).forEach(([key, value]) => {
          if (value) {
            currentParams.set(key, value);
          } else {
            currentParams.delete(key);
          }
        });
        startTransition(() => {
            router.replace(`${pathname}?${currentParams.toString()}`);
        });
    };
    
    const handleFilterChange = (setter: (value: string) => void, paramName: string) => (value: string) => {
        const newValue = value === 'all' ? '' : value;
        setter(newValue);
        setCurrentPage(1);
        updateURLParams({ [paramName]: newValue });
    };
      
    const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(e.target.value);
        setCurrentPage(1);
        updateURLParams({ 'search': e.target.value });
    };

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
            setCurrentPage={setCurrentPage}
            allIncidents={data}
        />
    );
}
