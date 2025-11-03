import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Vidura',
};

export default function TermsPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-headline font-bold mb-4">Terms & Conditions</h1>
        <div className="prose dark:prose-invert max-w-none text-muted-foreground space-y-4">
          <h2 className="text-2xl font-headline font-semibold mt-6 mb-2">1. Acceptance of Terms</h2>
          <p>
            By accessing and using the Vidura application ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. This Service is provided for demonstration and portfolio purposes only.
          </p>

          <h2 className="text-2xl font-headline font-semibold mt-6 mb-2">2. Description of Service</h2>
          <p>
            The Service provides a fictional database of cybersecurity incidents. All data, including but not limited to incident reports, company names, dates, and source links, is fabricated and does not represent real events or entities.
          </p>

          <h2 className="text-2xl font-headline font-semibold mt-6 mb-2">3. Disclaimer of Accuracy</h2>
          <p>
            The information provided by the Service is for demonstration purposes only. We make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.
          </p>
          
          <h2 className="text-2xl font-headline font-semibold mt-6 mb-2">4. Intellectual Property</h2>
          <p>
            The underlying source code, design, and framework of this application are the property of its creators. The fictional data is for illustrative use within the application only.
          </p>

          <h2 className="text-2xl font-headline font-semibold mt-6 mb-2">5. Limitation of Liability</h2>
          <p>
            In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from the use of this application. This is a non-commercial, educational project.
          </p>
          
           <h2 className="text-2xl font-headline font-semibold mt-6 mb-2">6. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms from time to time at our sole discretion. Therefore, you should review this page periodically. Your continued use of the Website or our service after any such change constitutes your acceptance of the new Terms.
          </p>
        </div>
      </div>
    </div>
  );
}
