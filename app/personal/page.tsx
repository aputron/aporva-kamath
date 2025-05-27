import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Personal',
  description: 'My day-to-day life',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Projects no one asked for</h1>
      <BlogPosts />
    </section>
  )
}
