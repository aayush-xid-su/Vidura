
import { Metadata } from 'next';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, User } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Author | Vidura',
};

export default function AuthorPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-headline font-bold text-primary">About the Author</h1>
        <p className="text-base text-muted-foreground mt-2">A little bit about the creator of this application.</p>
      </div>
      <div className="w-full max-w-2xl mx-auto">
        <div className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-xl shadow-lg p-8 text-center flex flex-col items-center transition-shadow duration-300 hover:shadow-2xl">
            <Avatar className="w-24 h-24 mb-4 border-4 border-primary/20">
                <AvatarFallback>AD</AvatarFallback>
            </Avatar>
            <h2 className="text-2xl font-bold font-headline text-foreground">Ayush Das</h2>
            <p className="text-primary font-medium mb-6 text-base">cybersecurity enthusiast</p>
            <p className="text-base text-muted-foreground max-w-md mx-auto mb-8">
                I am a passionate cybersecurity enthusiast and web developer with a love for creating innovative and impactful applications. This project is a demonstration of how to analyze and understand complex datasets like cybersecurity incidents.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                <Button variant="secondary" asChild>
                    <a href="https://github.com/aayush-xid-su" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                    </a>
                </Button>
                <Button variant="secondary" asChild>
                    <a href="https://linkedin.com/in/ayushdas-11am" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        <Linkedin className="mr-2 h-4 w-4" />
                        LinkedIn
                    </a>
                </Button>
                <Button variant="secondary" asChild>
                     <a href="https://ayush11profile.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        <User className="mr-2 h-4 w-4" />
                        Portfolio
                    </a>
                </Button>
            </div>
        </div>
      </div>
    </div>
  );
}
