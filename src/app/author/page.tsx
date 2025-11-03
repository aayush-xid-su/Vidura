import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Author | Vidura',
};

export default function AuthorPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-headline font-bold mb-4">About the Author</h1>
        <div className="prose dark:prose-invert max-w-none text-muted-foreground">
            <p>This application was created by a passionate developer to showcase modern web development and AI integration skills.</p>
        </div>
      </div>
    </div>
  );
}
