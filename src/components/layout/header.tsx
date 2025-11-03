
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
                <DialogTitle className="text-3xl font-headline font-bold mb-2">🧭 About Vidura</DialogTitle>
              </DialogHeader>
              <div className="prose dark:prose-invert max-w-none text-muted-foreground h-[70vh] overflow-y-auto pr-4">
                <h2 className="text-2xl font-headline font-semibold mt-4 mb-2">What is Vidura?</h2>
                <p>
                  Vidura is an independent cybersecurity research initiative dedicated to systematically documenting cyber incidents in India over the past 25 years (2000–2025). It serves as a centralized knowledge base that captures verified details of cyberattacks, data breaches, and security lapses that have shaped India’s digital security landscape.
                </p>
                <p>
                  Through structured data, credible sources, and transparent documentation, Vidura aims to preserve the nation’s cyber history while supporting research, awareness, and policy development.
                </p>

                <h2 className="text-2xl font-headline font-semibold mt-8 mb-2">Who created Vidura?</h2>
                <p>
                  Vidura was conceptualized, researched, and developed by <a href="https://github.com/aayush-xid-su" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Ayush das</a>, an independent cybersecurity researcher and technology enthusiast passionate about building a safer digital future for India. Driven by a vision to make cybersecurity knowledge accessible and verifiable, Ayush designed Vidura as a public-interest research platform to document India’s evolving cyber threat landscape over the last 25 years. Through meticulous research, structured data design, and technical implementation, Ayush has created a first-of-its-kind open database that bridges the gap between cybersecurity incidents, academic research, and public awareness.
                </p>
                <p>Ayush's work reflects a deep commitment to:</p>
                <ul>
                  <li>🧠 <strong>Knowledge Transparency</strong> – Making credible cyber incident data publicly available.</li>
                  <li>🛡️ <strong>National Cyber Awareness</strong> – Educating citizens and professionals about India’s digital vulnerabilities.</li>
                  <li>⚙️ <strong>Open Research Collaboration</strong> – Encouraging data-driven study and community contributions to cyber defense efforts.</li>
                </ul>

                <h2 className="text-2xl font-headline font-semibold mt-8 mb-2">Why Vidura Was Created</h2>
                <p>
                  India’s rapid digital transformation has brought both innovation and vulnerability. Despite numerous incidents affecting government bodies, corporations, and individuals, there was no single, reliable repository documenting these events in a structured and research-friendly manner.
                </p>
                <p>
                  Vidura was created to fill this gap — to ensure that no major cybersecurity incident in India is forgotten, overlooked, or undocumented.
                </p>
                <p>Our goals are:</p>
                <ul>
                    <li>🗂️ <strong>Comprehensive Documentation</strong> — Record major cyber incidents from credible sources.</li>
                    <li>📈 <strong>Research & Analysis</strong> — Enable trend studies, threat pattern analysis, and risk modeling.</li>
                    <li>🧠 <strong>Education & Awareness</strong> — Help students, journalists, and policymakers understand India’s evolving threat landscape.</li>
                    <li>🛡️ <strong>Strategic Insight</strong> — Support informed cybersecurity decisions through historical context.</li>
                </ul>

                <h2 className="text-2xl font-headline font-semibold mt-8 mb-2">How Vidura Works</h2>
                <p>Vidura compiles verified information from:</p>
                <ul>
                    <li>CERT-In advisories and government reports</li>
                    <li>Academic research papers and threat intelligence publications</li>
                    <li>Verified news sources and public disclosures</li>
                </ul>
                <p>Each incident is:</p>
                <ul>
                    <li>Collected from multiple credible sources</li>
                    <li>Cross-verified with at least two independent references</li>
                    <li>Categorized by type, sector, and impact</li>
                    <li>Documented in a structured JSON/CSV dataset with complete metadata</li>
                </ul>
                <p>The result is a publicly accessible database that researchers, educators, and professionals can explore through our website’s searchable interface.</p>
                
                <h2 className="text-2xl font-headline font-semibold mt-8 mb-2">Our Methodology</h2>
                <p>Vidura follows a standardized, transparent methodology for consistency and credibility:</p>
                <ul>
                    <li><strong>Source Collection:</strong> Only verifiable and publicly available information is included.</li>
                    <li><strong>Verification:</strong> Every incident is validated using ≥2 credible references.</li>
                    <li><strong>Classification:</strong> Incidents are categorized by year, sector, method, and impact.</li>
                    <li><strong>Documentation:</strong> Each record includes description, sources, and verification status.</li>
                </ul>
                <p>This approach ensures academic reliability and long-term research value.</p>
                
                <h2 className="text-2xl font-headline font-semibold mt-8 mb-2">Scope of Coverage</h2>
                <ul>
                    <li><strong>Timeline:</strong> 2000–2025 and continue</li>
                    <li><strong>Sectors:</strong> Government, Banking, Healthcare, Telecom, Defense, Energy, IT, Education, and more</li>
                    <li><strong>Incidents Covered:</strong> Over 200 verified cases involving 120+ organizations</li>
                </ul>
                
                <h2 className="text-2xl font-headline font-semibold mt-8 mb-2">Ethics & Transparency</h2>
                <p>
                    Vidura is built on a foundation of open knowledge and ethical research. All information is sourced from publicly available reports and official statements. The data and analysis provided on this website are for educational and informational purposes only.
                </p>
                <p>
                    We do not publish sensitive or classified data, nor do we attribute blame or liability to any organization.
                </p>
                
                <h2 className="text-2xl font-headline font-semibold mt-8 mb-2">Who Can Use Vidura</h2>
                <ul>
                    <li>🧑‍🎓 <strong>Students & Educators:</strong> For coursework, projects, and cybersecurity education.</li>
                    <li>🧑‍💼 <strong>Researchers & Analysts:</strong> For studying trends and building data-driven insights.</li>
                    <li>📰 <strong>Journalists:</strong> For referencing verified historical data in news reports.</li>
                    <li>🧑‍⚖️ <strong>Policy Makers & Security Professionals:</strong> To understand past attack patterns and build better defenses.</li>
                </ul>

                <h2 className="text-2xl font-headline font-semibold mt-8 mb-2">The Vision Ahead</h2>
                <p>Vidura aims to grow into a comprehensive open-source repository of India’s cybersecurity history, with tools for visualization, analytics, and collaboration. By learning from the past, we can help build a more secure digital future for India.</p>
                
                <blockquote className="border-l-4 border-primary pl-4 italic my-4">
                    “Cybersecurity history is national history. By documenting where we’ve been attacked, we learn how to defend what matters most. Vidura exists to ensure that India’s cyber lessons are never lost to time.”
                    <cite className="block not-italic mt-2">— <a href="https://github.com/aayush-xid-su" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Ayush</a>, Creator of Vidura</cite>
                </blockquote>
                
                <h2 className="text-2xl font-headline font-semibold mt-8 mb-2">🛡️ Disclaimer</h2>
                <p>
                  All information is sourced from publicly available reports and official statements. The data and analysis provided on this website are for educational and informational purposes only.
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

    