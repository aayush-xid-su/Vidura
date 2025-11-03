'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ViduraLogo } from '@/components/icons';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sun, Moon, Info, FileText, Scale, Menu } from 'lucide-react';
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
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { useState, useEffect } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';


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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 max-w-screen-2xl items-center">
                <Link href="/" className="mr-6 flex items-center space-x-2">
                    <ViduraLogo className="h-6 w-6 text-primary" />
                    <span className="font-bold inline-block">Vidura</span>
                </Link>
            </div>
        </header>
    )
  }


  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <ViduraLogo className="h-6 w-6 text-primary" />
          <span className="font-bold inline-block">Vidura</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm flex-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'transition-colors hover:text-primary',
                (pathname === item.href)
                  ? 'text-primary font-semibold'
                  : 'text-foreground/60'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end md:flex-none gap-2">
           <Dialog>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <DialogTrigger asChild>
                    <Button variant="ghost" size="icon" className="hidden md:inline-flex">
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
            <DialogContent className="sm:max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-3xl font-headline font-bold mb-2">🧭 About Vidura</DialogTitle>
              </DialogHeader>
              <ScrollArea className="h-96 pr-6">
                <div className="text-sm text-muted-foreground space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">What is Vidura?</h3>
                  <p>
                    Vidura is an independent cybersecurity research initiative dedicated to systematically documenting cyber incidents in India over the past 25 years (2000–2025). It serves as a centralized knowledge base that captures verified details of cyberattacks, data breaches, and security lapses that have shaped India’s digital security landscape.
                  </p>
                  <p>
                    Through structured data, credible sources, and transparent documentation, Vidura aims to preserve the nation’s cyber history while supporting research, awareness, and policy development.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground">Who created Vidura?</h3>
                  <p>
                    Vidura was conceptualized, researched, and developed by <a href="https://github.com/aayush-xid-su" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Ayush das</a>, an independent cybersecurity researcher and technology enthusiast passionate about building a safer digital future for India. Driven by a vision to make cybersecurity knowledge accessible and verifiable, Ayush designed Vidura as a public-interest research platform to document India’s evolving cyber threat landscape over the last 25 years. Through meticulous research, structured data design, and technical implementation, Ayush has created a first-of-its-kind open database that bridges the gap between cybersecurity incidents, academic research, and public awareness.
                  </p>
                  <p>Ayush's work reflects a deep commitment to:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>🧠 Knowledge Transparency – Making credible cyber incident data publicly available.</li>
                    <li>🛡️ National Cyber Awareness – Educating citizens and professionals about India’s digital vulnerabilities.</li>
                    <li>⚙️ Open Research Collaboration – Encouraging data-driven study and community contributions to cyber defense efforts.</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-foreground">Why Vidura Was Created</h3>
                  <p>
                    India’s rapid digital transformation has brought both innovation and vulnerability. Despite numerous incidents affecting government bodies, corporations, and individuals, there was no single, reliable repository documenting these events in a structured and research-friendly manner.
                  </p>
                  <p>
                    Vidura was created to fill this gap — to ensure that no major cybersecurity incident in India is forgotten, overlooked, or undocumented.
                  </p>
                  <p>Our goals are:</p>
                  <ul className="list-disc pl-5 space-y-1">
                      <li>🗂️ Comprehensive Documentation — Record major cyber incidents from credible sources.</li>
                      <li>📈 Research & Analysis — Enable trend studies, threat pattern analysis, and risk modeling.</li>
                      <li>🧠 Education & Awareness — Help students, journalists, and policymakers understand India’s evolving threat landscape.</li>
                      <li>🛡️ Strategic Insight — Support informed cybersecurity decisions through historical context.</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-foreground">How Vidura Works</h3>
                  <p>Vidura compiles verified information from:</p>
                  <ul className="list-disc pl-5 space-y-1">
                      <li>CERT-In advisories and government reports</li>
                      <li>Academic research papers and threat intelligence publications</li>
                      <li>Verified news sources and public disclosures</li>
                  </ul>
                  <p>Each incident is:</p>
                  <ul className="list-disc pl-5 space-y-1">
                      <li>Collected from multiple credible sources</li>
                      <li>Cross-verified with at least two independent references</li>
                      <li>Categorized by type, sector, and impact</li>
                      <li>Documented in a structured JSON/CSV dataset with complete metadata</li>
                  </ul>
                  <p>The result is a publicly accessible database that researchers, educators, and professionals can explore through our website’s searchable interface.</p>
                  
                  <h3 className="text-xl font-semibold text-foreground">Our Methodology</h3>
                  <p>Vidura follows a standardized, transparent methodology for consistency and credibility:</p>
                  <ul className="list-disc pl-5 space-y-1">
                      <li><strong>Source Collection:</strong> Only verifiable and publicly available information is included.</li>
                      <li><strong>Verification:</strong> Every incident is validated using ≥2 credible references.</li>
                      <li><strong>Classification:</strong> Incidents are categorized by year, sector, method, and impact.</li>
                      <li><strong>Documentation:</strong> Each record includes description, sources, and verification status.</li>
                  </ul>
                  <p>This approach ensures academic reliability and long-term research value.</p>
                  
                  <h3 className="text-xl font-semibold text-foreground">Scope of Coverage</h3>
                  <ul className="list-disc pl-5 space-y-1">
                      <li><strong>Timeline:</strong> 2000–2025 and continue</li>
                      <li><strong>Sectors:</strong> Government, Banking, Healthcare, Telecom, Defense, Energy, IT, Education, and more</li>
                      <li><strong>Incidents Covered:</strong> Over 200 verified cases involving 120+ organizations</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold text-foreground">Ethics & Transparency</h3>
                  <p>
                      Vidura is built on a foundation of open knowledge and ethical research. All information is sourced from publicly available reports and official statements. The data and analysis provided on this website are for educational and informational purposes only.
                  </p>
                  <p>
                      We do not publish sensitive or classified data, nor do we attribute blame or liability to any organization.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-foreground">Who Can Use Vidura</h3>
                  <ul className="list-disc pl-5 space-y-1">
                      <li>🧑‍🎓 Students & Educators: For coursework, projects, and cybersecurity education.</li>
                      <li>🧑‍💼 Researchers & Analysts: For studying trends and building data-driven insights.</li>
                      <li>📰 Journalists: For referencing verified historical data in news reports.</li>
                      <li>🧑‍⚖️ Policy Makers & Security Professionals: To understand past attack patterns and build better defenses.</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-foreground">The Vision Ahead</h3>
                  <p>Vidura aims to grow into a comprehensive open-source repository of India’s cybersecurity history, with tools for visualization, analytics, and collaboration. By learning from the past, we can help build a more secure digital future for India.</p>
                  
                  <blockquote className="border-l-2 pl-6 italic">
                      “Cybersecurity history is national history. By documenting where we’ve been attacked, we learn how to defend what matters most. Vidura exists to ensure that India’s cyber lessons are never lost to time.”
                      <cite className="block not-italic mt-2">— <a href="https://github.com/aayush-xid-su" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Ayush</a>, Creator of Vidura</cite>
                  </blockquote>
                  
                  <h3 className="text-xl font-semibold text-foreground">🛡️ Disclaimer</h3>
                  <p>
                    All information is sourced from publicly available reports and official statements. The data and analysis provided on this website are for educational and informational purposes only.
                  </p>

                </div>
              </ScrollArea>
            </DialogContent>
          </Dialog>

          <Dialog>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <DialogTrigger asChild>
                    <Button variant="ghost" size="icon" className="hidden md:inline-flex">
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
            <DialogContent className="sm:max-w-2xl">
              <DialogHeader>
                <DialogTitle className="flex items-center text-2xl font-headline font-bold mb-1">
                    <Scale className="mr-2 h-6 w-6"/> Vidura – Terms &amp; Conditions
                </DialogTitle>
              </DialogHeader>
                <div className="text-sm text-muted-foreground mb-4">Effective Date: 5 November 2025</div>
                <ScrollArea className="h-96 pr-6">
                <div className="text-sm text-muted-foreground space-y-4">
                  <p>
                    Welcome to Vidura. By accessing or using this Website, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use this Website.
                  </p>
                  <h3 className="text-lg font-semibold text-foreground">1. Purpose of the Website</h3>
                  <p>Vidura is an independent cybersecurity research initiative that documents and analyzes cyber incidents in India from 2000–2025. The Website aims to:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Preserve publicly known cyber incident data for research and education.</li>
                    <li>Support awareness, academic work, and policy-making related to cybersecurity in India.</li>
                    <li>All information is sourced from publicly available reports and official statements.</li>
                    <li>The data and analysis provided on this Website are for educational and informational purposes only.</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-foreground">2. Educational Purpose</h3>
                   <p>
                    The data and analysis provided on this website are for educational and informational purposes only. The creators are not liable for any decisions made based on this information. All data is provided "as is" without warranty of any kind. This project is a demonstration and should not be used for real-world decision-making.
                  </p>

                  <h3 className="text-lg font-semibold text-foreground">3. Use of Information</h3>
                    <p>You may:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>View, cite, and share information from Vidura for research, educational, or journalistic purposes, with proper attribution.</li>
                        <li>Download structured datasets (JSON, CSV) for academic and non-commercial analysis.</li>
                    </ul>
                    <p>You may not:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Use the Website or its content for any unlawful, defamatory, or misleading activity.</li>
                        <li>Copy or redistribute large portions of data without written permission.</li>
                        <li>Claim ownership or authorship of the content published on Vidura.</li>
                    </ul>
                  
                  <h3 className="text-lg font-semibold text-foreground">4. Accuracy and Verification</h3>
                  <p>
                    While every effort has been made to ensure accuracy, Vidura cannot guarantee that all information is complete, current, or free from error. Each incident entry is verified using multiple credible sources; however, cybersecurity incident reporting is dynamic and may change as new details emerge. Vidura shall not be held liable for any reliance placed on the information provided.
                  </p>

                  <h3 className="text-lg font-semibold text-foreground">5. Third-Party Links and Sources</h3>
                    <p>
                        The Website contains links to third-party articles, advisories, and reports. These links are provided for reference only and do not imply endorsement or affiliation. Vidura has no control over the content, accuracy, or availability of external websites.
                    </p>
                  
                  <h3 className="text-lg font-semibold text-foreground">6. Intellectual Property</h3>
                  <p>
                    Unless otherwise stated, the Website’s design, logo, structure, and metadata schema are the intellectual property of the creators of Vidura. All third-party materials (news reports, advisories, research papers) remain the property of their respective owners and are cited in accordance with fair use principles.
                  </p>

                  <h3 className="text-lg font-semibold text-foreground">7. Limitation of Liability</h3>
                    <p>
                        Under no circumstances shall Vidura, its contributors, or affiliates be held liable for: Any direct, indirect, incidental, or consequential damages arising from the use or inability to use the Website. Any errors, omissions, or inaccuracies in the provided information. Use of the Website is entirely at your own risk.
                    </p>

                  <h3 className="text-lg font-semibold text-foreground">8. Data and Privacy</h3>
                    <p>
                        Vidura does not collect personal data from visitors except for minimal analytics or submission forms (if any). No personally identifiable information is stored, sold, or shared. For submissions or contact forms, user-provided information will be used solely for verification or communication related to the project.
                    </p>

                  <h3 className="text-lg font-semibold text-foreground">9. Changes to the Terms</h3>
                  <p>
                    Vidura reserves the right to update or modify these Terms and Conditions at any time without prior notice. Continued use of the Website constitutes acceptance of the updated terms.
                  </p>

                  <h3 className="text-lg font-semibold text-foreground">10. Governing Law</h3>
                    <p>
                        These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes shall fall under the jurisdiction of the courts of Nuapada, odisha,India.
                    </p>
                    
                    <h3 className="text-lg font-semibold text-foreground">11. Contact Information</h3>
                    <p>For questions, corrections, or data removal requests, please contact:<br/>
                    📧 aayushxidsu.11am@gmail.com</p>

                </div>
                </ScrollArea>
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

          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle className="sr-only">Main Menu</SheetTitle>
              </SheetHeader>
              <Link href="/" className="mr-6 flex items-center space-x-2 mb-6" onClick={() => setMobileMenuOpen(false)}>
                <ViduraLogo className="h-6 w-6 text-primary" />
                <span className="font-bold">Vidura</span>
              </Link>
              <nav className="flex flex-col gap-4 text-lg">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      'transition-colors hover:text-primary',
                      pathname === item.href ? 'text-primary font-semibold' : 'text-foreground/60'
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
