
import { Metadata } from 'next';
import { AuthorClient } from './author-client';

export const metadata: Metadata = {
  title: 'Author | Vidura',
};

export default function AuthorPage() {
  return <AuthorClient />;
}
