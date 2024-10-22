import { PostMock } from '@/mocks/Post'
import CardPost from '@/app/components/CardPost'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SDS | Blog',
  description: 'Sanatan Digital System',
}

export default function Post() {
  return (
    <CardPost
      key={PostMock.id}
      title={PostMock.title}
      image={PostMock.image}
      subtitle={PostMock.subtitle}
      createdAt={PostMock.createdAt}
      description={PostMock.description}
    />
  )
}
