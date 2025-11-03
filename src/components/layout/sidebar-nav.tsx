'use client';

import {
  Sidebar,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  useSidebar,
} from '@/components/ui/sidebar';
import { ViduraLogo } from '@/components/icons';
import { Home, List, Clock, Database, PanelLeft } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/incidents', label: 'Incidents', icon: List },
  { href: '/timeline', label: 'Timeline', icon: Clock },
  { href: '/sources', label: 'Sources', icon: Database },
];

export function SidebarNav() {
  const pathname = usePathname();
  const { state, toggleSidebar } = useSidebar();

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border bg-sidebar-background">
      <SidebarHeader>
        <div className="flex items-center justify-between p-2">
            <div className="flex items-center gap-2 overflow-hidden">
                <ViduraLogo className="size-7 shrink-0 text-sidebar-primary" />
                <span className="font-headline text-lg font-semibold text-sidebar-foreground">Vidura</span>
            </div>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleSidebar}>
                <PanelLeft />
            </Button>
        </div>
      </SidebarHeader>
      <SidebarMenu className="flex-1 p-2">
        {navItems.map((item) => (
          <SidebarMenuItem key={item.href}>
            <Button
              asChild
              variant={pathname === item.href ? 'secondary' : 'ghost'}
              className="w-full justify-start"
              aria-current={pathname === item.href ? 'page' : undefined}
            >
              <Link href={item.href}>
                <item.icon className="mr-2 h-4 w-4" />
                <span className={state === 'collapsed' ? 'hidden' : ''}>{item.label}</span>
              </Link>
            </Button>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
      <SidebarFooter>
        <div className={`p-2 ${state === 'collapsed' ? 'hidden' : ''}`}>
            <p className="text-xs text-sidebar-foreground/50">&copy; {new Date().getFullYear()} Vidura</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
