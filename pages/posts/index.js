import Link from "next/link";

var url = `https://jsonplaceholder.typicode.com/posts`;
const PostList = ({ posts }) => {
  console.log(posts);
  return (
    <div>
      <h1>List of Posts</h1>
      <br />
      {posts.map((post, index) => {
        return (
          <div key={post.id}>
            <Link href={`posts/${post.id}`}>
              <h3> 
              
                {index + 1}. {post.title}
              </h3>
            </Link>
            <br />
            <hr />
          </div>
        );
      })}
      <br />
    </div>
  );
};

export default PostList;


  

export async function getStaticProps() {
  const response = await fetch(url);
  const data = await response.json();

  return {
    props: {
      posts: data,
    },
  };
}
