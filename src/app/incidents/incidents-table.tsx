
'use client';

import { useState, useMemo } from 'react';
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

const ITEMS_PER_PAGE = 10;

type SortKey = 'title' | 'sector' | 'severity' | 'date';
type SortDirection = 'asc' | 'desc';

interface IncidentsTableProps {
    data: Incident[];
    allIncidents: Incident[];
    keyword: string;
    year: string;
    sector: string;
    type: string;
    severity: string;
    currentPage: number;
    handleKeywordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleFilterChange: (setter: (value: string) => void, paramName: string) => (value: string) => void;
    setCurrentPage: (page: number) => void;
}


export function IncidentsTable({ 
    data,
    allIncidents,
    keyword,
    year,
    sector,
    type,
    severity,
    currentPage,
    handleKeywordChange,
    handleFilterChange,
    setCurrentPage
}: IncidentsTableProps) {
  
  const [sortKey, setSortKey] = useState<SortKey>('date');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');

  const uniqueSectors = useMemo(() => [...new Set(allIncidents.map((d) => d.sector))], [allIncidents]);
  const uniqueYears = useMemo(() => [...new Set(allIncidents.map((d) => new Date(d.date).getFullYear().toString()))].sort((a,b) => b.localeCompare(a)), [allIncidents]);
  const uniqueTypes = useMemo(() => [...new Set(allIncidents.map((d) => d.incident_type))], [allIncidents]);
  const uniqueSeverities = ['Critical', 'High', 'Medium', 'Low'];

  const sortedData = useMemo(() => {
    let sorted = [...data];
    // Sorting logic
    sorted.sort((a, b) => {
      let valA, valB;
      if (sortKey === 'severity') {
        const severityOrder = { Critical: 4, High: 3, Medium: 2, Low: 1 };
        valA = severityOrder[a.severity as keyof typeof severityOrder] || 0;
        valB = severityOrder[b.severity as keyof typeof severityOrder] || 0;
      } else if (sortKey === 'date') {
        valA = new Date(a.date).getTime();
        valB = new Date(b.date).getTime();
      }
      else {
        valA = a[sortKey as 'title' | 'sector'];
        valB = b[sortKey as 'title' | 'sector'];
      }

      if (valA < valB) {
        return sortDirection === 'asc' ? -1 : 1;
      }
      if (valA > valB) {
        return sortDirection === 'asc' ? 1 : -1;
      }
      return 0;
    });

    return sorted;
  }, [data, sortKey, sortDirection]);

  const totalPages = Math.ceil(sortedData.length / ITEMS_PER_PAGE);
  const paginatedData = sortedData.slice(
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

  const getSeverityBadge = (severityValue: Incident['severity']) => {
    switch (severityValue) {
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

  const handleYearChange = handleFilterChange(d => {}, 'year');
  const handleSectorChange = handleFilterChange(d => {}, 'sector');
  const handleTypeChange = handleFilterChange(d => {}, 'type');
  const handleSeverityChange = handleFilterChange(d => {}, 'severity');

  return (
    <div className="space-y-4">
      <div className="p-4 border rounded-lg bg-card">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-2">
          <div className="relative md:col-span-2 lg:col-span-2">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by keyword..."
              value={keyword}
              onChange={handleKeywordChange}
              className="pl-10 bg-background w-full"
            />
          </div>

          <Select value={year} onValueChange={handleYearChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Years</SelectItem>
              {uniqueYears.map((y) => (
                <SelectItem key={y} value={y}>
                  {y}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={sector} onValueChange={handleSectorChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Sector" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Sectors</SelectItem>
              {uniqueSectors.map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={type} onValueChange={handleTypeChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Incident Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              {uniqueTypes.map((t) => (
                <SelectItem key={t} value={t}>
                  {t}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={severity} onValueChange={handleSeverityChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Severity" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Severities</SelectItem>
              {uniqueSeverities.map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
        </div>
        <div className="flex items-center gap-2 mt-2 justify-end">
            <Button
              variant="outline"
              size="sm"
              onClick={() => exportToJson('incidents', sortedData)}
            >
              <FileJson className="mr-2 h-4 w-4" />
              JSON
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => exportToCsv('incidents', sortedData)}
            >
              <FileText className="mr-2 h-4 w-4" />
              CSV
            </Button>
          </div>
      </div>

      <div className="rounded-lg border">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead onClick={() => handleSort('title')}>Incident</TableHead>
                <TableHead>Organization</TableHead>
                <TableHead onClick={() => handleSort('sector')}>Sector</TableHead>
                <TableHead onClick={() => handleSort('date')}>Date</TableHead>
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
                    <TableCell>{new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</TableCell>
                    <TableCell>
                      <Badge variant={getSeverityBadge(item.severity)}>{item.severity}</Badge>
                    </TableCell>
                    <TableCell>
                      {item.sources.length > 0 ? (
                          <a href={item.sources[0].url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm hover:underline text-primary">
                              <LinkIcon className="h-3 w-3" />
                              Link
                          </a>
                      ) : (
                          <span className="text-sm text-muted-foreground">N/A</span>
                      )}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="text-center h-24">
                    No results found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
