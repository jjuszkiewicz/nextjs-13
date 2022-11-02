import axios from "axios";
import Link from "next/link";
import Counter from "../../components/Counter";
import { Posts } from "../../interfaces/posts";
import { wait } from "../../utils/helper";
import counterStyle from "../../components/counter.module.css";

export default async function PostsPage() {
  // await wait(2);
  const { data: posts } = await axios.get<Posts>(
    `https://jsonplaceholder.typicode.com/posts`
  );

  return (
    <>
      <h1>Strona posts</h1>
      <Counter />
      <hr className={counterStyle.empty}/>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/posts/${post.id}`}>Artykuł {post.id}</Link>
        </li>
      ))}
    </>
  );
}
