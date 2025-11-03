'use client';

import { useState, useMemo, useTransition } from 'react';
import type { Incident } from '@/lib/types';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { exportToCsv, exportToJson } from '@/lib/utils';
import Link from 'next/link';
import { PaginationControls } from '@/components/pagination-controls';
import { FileJson, FileText, Search, Link as LinkIcon } from 'lucide-react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

const ITEMS_PER_PAGE = 10;

type SortKey = 'title' | 'sector' | 'severity';
type SortDirection = 'asc' | 'desc';

export function IncidentsTable({ data }: { data: Incident[] }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const [keyword, setKeyword] = useState(() => searchParams.get('search') || '');
  const [year, setYear] = useState(() => searchParams.get('year') || 'all');
  const [sector, setSector] = useState(() => searchParams.get('sector') || 'all');
  const [type, setType] = useState(() => searchParams.get('type') || 'all');
  const [severity, setSeverity] = useState(() => searchParams.get('severity') || 'all');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortKey, setSortKey] = useState<SortKey>('title');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');

  const uniqueSectors = useMemo(() => [...new Set(data.map((d) => d.sector))], [data]);
  const uniqueYears = useMemo(() => [...new Set(data.map((d) => new Date(d.date).getFullYear().toString()))].sort((a,b) => b.localeCompare(a)), [data]);
  const uniqueTypes = useMemo(() => [...new Set(data.map((d) => d.incident_type))], [data]);
  const uniqueSeverities = ['Critical', 'High', 'Medium', 'Low'];


  const updateURLParams = (params: Record<string, string>) => {
    const currentParams = new URLSearchParams(searchParams.toString());
    Object.entries(params).forEach(([key, value]) => {
      if (value && value !== 'all') {
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
    setter(value);
    setCurrentPage(1);
    updateURLParams({ [paramName]: value });
  };
  
  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
    setCurrentPage(1);
    updateURLParams({ 'search': e.target.value });
  };


  const filteredData = useMemo(() => {
    let filtered = data.filter((item) => {
      const itemYear = new Date(item.date).getFullYear().toString();
      return (
        (keyword === '' ||
          item.title.toLowerCase().includes(keyword.toLowerCase()) ||
          item.description.toLowerCase().includes(keyword.toLowerCase()) ||
          item.sector.toLowerCase().includes(keyword.toLowerCase())) &&
        (year === 'all' || itemYear === year) &&
        (sector === 'all' || item.sector === sector) &&
        (type === 'all' || item.incident_type === type) &&
        (severity === 'all' || item.severity === severity)
      );
    });

    // Sorting logic
    filtered.sort((a, b) => {
      let valA, valB;
      if (sortKey === 'severity') {
        const severityOrder = { Critical: 4, High: 3, Medium: 2, Low: 1 };
        valA = severityOrder[a.severity];
        valB = severityOrder[b.severity];
      } else {
        valA = a[sortKey];
        valB = b[sortKey];
      }

      if (valA < valB) {
        return sortDirection === 'asc' ? -1 : 1;
      }
      if (valA > valB) {
        return sortDirection === 'asc' ? 1 : -1;
      }
      return 0;
    });

    return filtered;
  }, [data, keyword, year, sector, type, severity, sortKey, sortDirection]);

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortDirection('asc');
    }
  };

  const getSeverityBadge = (severity: Incident['severity']) => {
    switch (severity) {
      case 'Critical':
        return 'destructive';
      case 'High':
        return 'default';
      case 'Medium':
        return 'secondary';
      case 'Low':
        return 'outline';
      default:
        return 'outline';
    }
  };

  return (
    <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
            <div className="relative flex-grow min-w-[200px]">
               <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
               <Input placeholder="Search by keyword..." value={keyword} onChange={handleKeywordChange} className="pl-10" />
            </div>
            
            <Select value={year} onValueChange={handleFilterChange(setYear, 'year')}>
              <SelectTrigger className="flex-grow min-w-[120px]"><SelectValue placeholder="Year" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Years</SelectItem>
                {uniqueYears.map((y) => (<SelectItem key={y} value={y}>{y}</SelectItem>))}
              </SelectContent>
            </Select>

            <Select value={sector} onValueChange={handleFilterChange(setSector, 'sector')}>
              <SelectTrigger className="flex-grow min-w-[120px]"><SelectValue placeholder="Sector" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sectors</SelectItem>
                {uniqueSectors.map((s) => (<SelectItem key={s} value={s}>{s}</SelectItem>))}
              </SelectContent>
            </Select>

            <Select value={type} onValueChange={handleFilterChange(setType, 'type')}>
              <SelectTrigger className="flex-grow min-w-[120px]"><SelectValue placeholder="Incident Type" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                {uniqueTypes.map((t) => (<SelectItem key={t} value={t}>{t}</SelectItem>))}
              </SelectContent>
            </Select>

            <Select value={severity} onValueChange={handleFilterChange(setSeverity, 'severity')}>
              <SelectTrigger className="flex-grow min-w-[120px]"><SelectValue placeholder="Severity" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Severities</SelectItem>
                {uniqueSeverities.map((s) => (<SelectItem key={s} value={s}>{s}</SelectItem>))}
              </SelectContent>
            </Select>
            <Button variant="outline" size="sm" onClick={() => exportToJson('incidents', filteredData)}><FileJson className="mr-2 h-4 w-4"/>JSON</Button>
            <Button variant="outline" size="sm" onClick={() => exportToCsv('incidents', filteredData)}><FileText className="mr-2 h-4 w-4"/>CSV</Button>
        </div>

      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead onClick={() => handleSort('title')}>Incident</TableHead>
              <TableHead>Organization</TableHead>
              <TableHead onClick={() => handleSort('sector')}>Sector</TableHead>
              <TableHead>Incident Type</TableHead>
              <TableHead>Attack Method</TableHead>
              <TableHead>Root Cause</TableHead>
              <TableHead onClick={() => handleSort('severity')}>Severity</TableHead>
              <TableHead>Source</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.length > 0 ? (
              paginatedData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <Link href={`/incidents/${item.id}`} className="font-medium text-primary hover:underline">
                      {item.title}
                    </Link>
                  </TableCell>
                  <TableCell>{item.affected_entities[0]}</TableCell>
                  <TableCell><Badge variant="secondary">{item.sector}</Badge></TableCell>
                  <TableCell>{item.incident_type}</TableCell>
                  <TableCell>{item.attack_method}</TableCell>
                  <TableCell>{item.root_cause}</TableCell>
                  <TableCell>
                    <Badge variant={getSeverityBadge(item.severity)}>{item.severity}</Badge>
                  </TableCell>
                  <TableCell>
                    <Link href={`/incidents/${item.id}`} className="flex items-center gap-1 text-sm hover:underline">
                        <LinkIcon className="h-3 w-3" />
                        Link
                    </Link>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={8} className="text-center h-24">
                  No results found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
