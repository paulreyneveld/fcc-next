import { useRouter } from 'next/router'
import posts from '../../posts.json'

const ID = () => {
  const router = useRouter()
  console.log(router.query.id) 
  const post = posts[router.query.id]
  console.log(posts)
  console.log(post)
  return (
    <>
      <h1></h1>
      <p>{post.title}</p>
    </>
  )
}

export default ID