
'use client';

import { IncidentsTable } from './incidents-table';
import type { Incident } from '@/lib/types';

export default function IncidentsTableClient({ data }: { data: Incident[] }) {
    return <IncidentsTable data={data} />;
}
