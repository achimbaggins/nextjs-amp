import { Inter } from "next/font/google";
import Layout from "../../components/Layout";
import Post from "../../components/Post";
import Recommendations from "@/components/Recommendations";

const inter = Inter({ subsets: ["latin"] });
export const config = { amp: true };

function Categories({ posts }) {
  return (
    <>
      <Recommendations />
      <div className="post-list">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}

Categories.getInitialProps = async (context) => {
  const res = await fetch(
    `https://kampung-media.com/wp-json/wp/v2/posts?categories=${context.query?.id}`
  );
  const posts = await res.json();
  return { posts };
};

export default Categories;
