import { Metadata } from 'next'
import TermsPage from '@/app/components/Terms'

export const metadata: Metadata = {
  title: 'SDS | Terms',
  description: 'Sanatan Digital System',
}

export default function Terms() {
  return <TermsPage />
}
