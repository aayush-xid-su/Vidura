'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ViduraLogo } from '@/components/icons';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sun, Moon, Info, FileText, Scale } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTheme } from 'next-themes';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';


const navItems = [
  { href: '/', label: 'Home' },
  { href: '/incidents', label: 'Browse Incidents' },
  { href: '/timeline', label: 'Timeline' },
  { href: '/sources', label: 'Sources' },
  { href: '/author', label: 'Author' },
];

export function Header() {
  const pathname = usePathname();
  const { setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <ViduraLogo className="h-6 w-6 text-primary" />
          <span className="font-bold inline-block">Vidura</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm flex-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'transition-colors hover:text-foreground/80',
                (pathname === item.href)
                  ? 'text-primary font-semibold'
                  : 'text-foreground/60'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Dialog>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <DialogTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Info className="h-5 w-5" />
                      <span className="sr-only">About</span>
                    </Button>
                  </DialogTrigger>
                </TooltipTrigger>
                <TooltipContent>
                  <p>About</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <DialogContent className="max-w-3xl">
              <DialogHeader>
                <DialogTitle className="text-3xl font-headline font-bold mb-2">About Vidura</DialogTitle>
              </DialogHeader>
              <div className="prose dark:prose-invert max-w-none text-muted-foreground">
                <p>
                  Vidura is a fictional project created to demonstrate the capabilities of a cybersecurity incident tracking and analysis platform. The name "Vidura" is inspired by a wise figure from the Indian epic, the Mahabharata, known for his foresight and counsel.
                </p>
                <p>
                  This application provides a browsable, searchable, and filterable database of mock cybersecurity incidents in India from 2000-2025. It is intended as a portfolio piece and a technical showcase, not a source of real-world, up-to-the-minute threat intelligence.
                </p>
                <h2 className="text-2xl font-headline font-semibold mt-8 mb-2">Technical Stack</h2>
                <ul>
                  <li><strong>Framework:</strong> Next.js (App Router)</li>
                  <li><strong>Language:</strong> TypeScript</li>
                  <li><strong>Styling:</strong> Tailwind CSS</li>
                  <li><strong>UI Components:</strong> shadcn/ui</li>
                  <li><strong>AI/Generative Features:</strong> Google Genkit</li>
                </ul>
                <h2 className="text-2xl font-headline font-semibold mt-8 mb-2">Disclaimer</h2>
                <p>
                  All data within this application, including incident details, dates, affected entities, and sources, is entirely fictional and generated for demonstration purposes. It should not be used for professional analysis or decision-making. Any resemblance to real incidents or entities is purely coincidental.
                </p>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <DialogTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <FileText className="h-5 w-5" />
                      <span className="sr-only">Terms & Conditions</span>
                    </Button>
                  </DialogTrigger>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Terms & Conditions</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <DialogContent className="max-w-3xl">
              <DialogHeader>
                <DialogTitle className="flex items-center text-2xl font-headline font-bold mb-1">
                    <Scale className="mr-2 h-6 w-6"/> Vidura - Terms & Conditions
                </DialogTitle>
              </DialogHeader>
                <div className="text-sm text-muted-foreground mb-4">Effective Date: 5 November 2025</div>
                <div className="prose dark:prose-invert max-w-none text-muted-foreground h-[60vh] overflow-y-auto pr-4">
                  <p>
                    Welcome to Vidura. By accessing or using this Website, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use this Website.
                  </p>
                  <h3 className="text-xl font-headline font-semibold mt-4 mb-2">1. Purpose of the Website</h3>
                  <p>Vidura is an independent cybersecurity research initiative that documents and analyzes cyber incidents in India from 2000-2025. The Website aims to:</p>
                  <ul>
                    <li>Preserve publicly known cyber incident data for research and education.</li>
                    <li>Support awareness, academic work, and policy-making related to cybersecurity in India.</li>
                    <li>All information is sourced from publicly available reports and official statements.</li>
                    <li>The data and analysis provided on this Website are for educational and informational purposes only.</li>
                  </ul>

                  <h3 className="text-xl font-headline font-semibold mt-6 mb-2">2. Educational Purpose</h3>
                   <p>
                    The data and analysis provided on this website are for educational and informational purposes only. The creators are not liable for any decisions made based on this data.
                  </p>

                  <h3 className="text-xl font-headline font-semibold mt-6 mb-2">3. Disclaimer of Accuracy</h3>
                  <p>
                    The information provided by the Service is for demonstration purposes only. We make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.
                  </p>
                  
                  <h3 className="text-xl font-headline font-semibold mt-6 mb-2">4. Intellectual Property</h3>
                  <p>
                    The underlying source code, design, and framework of this application are the property of its creators. The fictional data is for illustrative use within the application only.
                  </p>

                  <h3 className="text-xl font-headline font-semibold mt-6 mb-2">5. Limitation of Liability</h3>
                  <p>
                    In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from the use of this application. This is a non-commercial, educational project.
                  </p>
                  
                  <h3 className="text-xl font-headline font-semibold mt-6 mb-2">6. Changes to Terms</h3>
                  <p>
                    We reserve the right to modify these terms from time to time at our sole discretion. Therefore, you should review this page periodically. Your continued use of the Website or our service after any such change constitutes your acceptance of the new Terms.
                  </p>
                </div>
            </DialogContent>
          </Dialog>

          <DropdownMenu>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                      <span className="sr-only">Toggle theme</span>
                    </Button>
                  </DropdownMenuTrigger>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Toggle theme</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme('light')}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('dark')}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('system')}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
