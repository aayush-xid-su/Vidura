import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Vidura',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-headline font-bold mb-4">About Vidura</h1>
        <div className="prose dark:prose-invert max-w-none text-muted-foreground">
          <p>
            Vidura is a fictional project created to demonstrate the capabilities of a cybersecurity incident tracking and analysis platform. The name "Vidura" is inspired by a wise figure from the Indian epic, the Mahabharata, known for his foresight and counsel.
          </p>
          <p>
            This application provides a browsable, searchable, and filterable database of mock cybersecurity incidents in India from 2000-2025. It is intended as a portfolio piece and a technical showcase, not a source of real-world, up-to-the-minute threat intelligence.
          </p>
          <h2 className="text-2xl font-headline font-semibold mt-8 mb-2">Technical Stack</h2>
          <p>
            This application is built with modern web technologies to ensure a fast, responsive, and maintainable user experience.
          </p>
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
      </div>
    </div>
  );
}
