import { Metadata } from 'next'
import VacanciesPage from '../../components/VacanciesPage'

export const metadata: Metadata = {
  title: 'SDS | Vacancies',
  description: 'Sanatan Digital System',
}

export default function Vacancies() {
  return <VacanciesPage />
}
