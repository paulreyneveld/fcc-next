import { useRouter } from 'next/router'
import posts from '../../posts.json'

const ID = () => {
  const router = useRouter()
  const post = posts[router.query.id]
  
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </>
  )
}

export default ID