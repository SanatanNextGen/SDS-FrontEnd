import { Metadata } from 'next'
import PrivacyPage from '@/app/components/Privacy'

export const metadata: Metadata = {
  title: 'SDS | Privacy',
  description: 'Sanatan Digital System',
}

export default function Privacy() {
  return <PrivacyPage />
}
