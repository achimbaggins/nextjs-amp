import { Inter } from "next/font/google";
import Layout from "../components/Layout";
import Link from "next/link";
import Post from "../components/Post";
import categories from "../data/categories.json";
import Recommendations from "@/components/Recommendations";

const inter = Inter({ subsets: ["latin"] });
export const config = { amp: true };

function Home({ posts }) {
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

Home.getInitialProps = async () => {
  const res = await fetch(`https://kampung-media.com/wp-json/wp/v2/posts`);

  const posts = await res.json();

  return { posts };
};

export default Home;
