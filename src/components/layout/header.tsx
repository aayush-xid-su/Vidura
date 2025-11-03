'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ViduraLogo } from '@/components/icons';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { Sun, Moon, Info } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/incidents', label: 'Browse Incidents' },
  { href: '/timeline', label: 'Timeline' },
  { href: '/sources', label: 'Sources' },
  { href: '#', label: 'Author' },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <ViduraLogo className="h-6 w-6 text-primary" />
          <span className="font-bold inline-block">Vidura</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'transition-colors hover:text-foreground/80',
                pathname === item.href ? 'text-foreground font-semibold text-primary' : 'text-foreground/60'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end gap-2">
            <Button variant="ghost" size="icon">
                <Info className="h-5 w-5" />
                <span className="sr-only">About</span>
            </Button>
            <Button variant="ghost" size="icon">
                <Moon className="h-5 w-5" />
                <span className="sr-only">Toggle theme</span>
            </Button>
             <Button variant="ghost" size="icon">
                <Sun className="h-5 w-5" />
                <span className="sr-only">Toggle theme</span>
            </Button>
        </div>
      </div>
    </header>
  );
}
