import axios from "axios";
import { Post } from "../../../interfaces/posts";
import { wait } from "../../../utils/helper";

export default async function PostPage({
  params,
}: {
  params: { postId: number };
}) {
  await wait(3);
  const { data: post } = await axios.get<Post>(
    `https://jsonplaceholder.typicode.com/posts/${+params.postId}`
  );

  return (
    <>
      <h1>Post: {post.title}</h1>
      <p>{post.body}</p>
    </>
  );
}
