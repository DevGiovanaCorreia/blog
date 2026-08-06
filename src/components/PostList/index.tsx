import { postRepository } from "@/repositories/post";

export async function PostList() {
    const posts = await postRepository.findAll();

    console.log(posts);

    return (
        <div>
         {posts.map((post) => {
  return <p key={post.id}>{post.title}</p>;
})}
        </div>
    );

}
