import { Metadata } from 'next'
import TermsPage from '@/app/components/Terms'

export const metadata: Metadata = {
  title: 'SDS | Terms',
  description: 'Generated by create next app',
}

export default function Terms() {
  return <TermsPage />
}
