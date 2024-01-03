import { Inter } from "next/font/google";
import Layout from "../../../components/Layout";
import Post from "../../../components/Post";
import Recommendations from "@/components/Recommendations";
import Head from "next/head";
import Search from "@/components/Search";
import { useRouter } from "next/router";
import Pagination from "@/components/Pagination";

const inter = Inter({ subsets: ["latin"] });
export const config = { amp: true };

function Home({ posts, categories, search, totalPages, lastPosts }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>All Categories</title>
        <link rel="canonical" href={router.asPath} />
      </Head>
      <Layout categories={categories}>
        <Search
          value={search}
          action={`/categories/${router.query.name}/${router.query.id}`}
        />
        {posts.length > 0 ? (
          <>
            <Recommendations posts={lastPosts} />
            <div className="post-list">
              {posts.map((post) => (
                <Post key={post.id} post={post} />
              ))}
            </div>
            <Pagination totalPages={totalPages} />
          </>
        ) : (
          <div>Data Kosong...</div>
        )}
      </Layout>
    </>
  );
}

Home.getInitialProps = async (context) => {
  const searchParam = context.query.search
    ? `&search=${encodeURIComponent(context.query.search)}`
    : "";

  const pageParam = context.query.page
    ? `&page=${context.query.page}&per_page=${10}`
    : `&page=${1}&per_page=${10}`;

  const res = await fetch(
    `https://kampung-media.com/wp-json/wp/v2/posts?categories=${context.query.id}&_embed${searchParam}${pageParam}`
  );

  const resLastPosts = await fetch(
    `https://kampung-media.com/wp-json/wp/v2/posts?_embed&page=${1}&per_page=${10}`
  );

  const resCat = await fetch(
    `https://kampung-media.com/wp-json/wp/v2/categories`
  );
  const categories = await resCat.json();
  const posts = await res.json();
  const lastPosts = await resLastPosts.json();

  const customeCat = categories.map((val) => {
    const data = {};
    data.id = val.id;
    data.name = val.name;
    data.slug = val.slug;
    return data;
  });

  const customePosts = posts.map((val) => {
    val.cover = val._embedded["wp:featuredmedia"]
      ? val._embedded["wp:featuredmedia"][0]["media_details"]["sizes"][
          "medium"
        ]?.["source_url"]
      : "https://d12v9rtnomnebu.cloudfront.net/oursite/logo_white.png";
    return val;
  });

  const customResLastPosts = lastPosts.map((val) => {
    val.cover = val._embedded["wp:featuredmedia"]
      ? val._embedded["wp:featuredmedia"][0]["media_details"]["sizes"][
          "medium"
        ]?.["source_url"]
      : "https://d12v9rtnomnebu.cloudfront.net/oursite/logo_white.png";
    return val;
  });

  const wpTotal = res.headers.get("x-wp-total");
  const wpTotalPages = res.headers.get("X-WP-TotalPages");

  return {
    wpTotal: wpTotal,
    totalPages: wpTotalPages,
    posts: customePosts,
    lastPosts: customResLastPosts,
    categories: customeCat,
    search: context.query?.search ?? "",
  };
};

export default Home;
