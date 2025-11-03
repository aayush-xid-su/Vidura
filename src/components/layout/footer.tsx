'use client';

import { Github, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <div className="text-sm text-muted-foreground">
          <p>
            Made with <span className="text-red-500">❤️</span> by{' '}
            <a
              href="https://github.com/aayush-xid-su"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              aayush_xid_su
            </a>
          </p>
          <p>All rights reserved © Xidotic 2025</p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/aayush-xid-su"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground hover:text-foreground"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/ayushdas-11am"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-foreground"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://instagram.com/aayush_xid_su"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-muted-foreground hover:text-foreground"
          >
            <Instagram className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
