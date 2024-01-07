import Layout from "../components/Layout";
import Post from "../components/Post";
import Recommendations from "@/components/Recommendations";
import Head from "next/head";
import Search from "@/components/Search";
import Pagination from "@/components/Pagination";
import { useRouter } from "next/router";
import Empty from "@/components/Empty";

export const config = { amp: true };
function Home({ posts, categories, search, totalPages, lastPosts, urlRandom }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Home | Private Blog Network</title>
        <meta name="description" content="Private blog adalah bagian da" />
        <link rel="canonical" href={router.pathname}></link>
      </Head>
      <Layout categories={categories} urlRandom={urlRandom}>
        <Search value={search} action={"/"} />
        {posts.length > 0 ? (
          <>
            <Recommendations posts={lastPosts} />
            <div className="post-list">
              {posts.map((post) => (
                <Post key={post.id} post={post} />
              ))}
            </div>
          </>
        ) : (
          <Empty />
        )}
        <Pagination totalPages={totalPages} />
      </Layout>
    </>
  );
}

Home.getInitialProps = async (context) => {
  const urlRandom = () => {
    const value = Math.floor(Math.random() * 10);
    return value;
  };

  const searchParam = context.query.search
    ? `&search=${encodeURIComponent(context.query.search)}`
    : "";

  const pageParam = context.query.page
    ? `&page=${context.query.page}&per_page=${10}`
    : `&page=${1}&per_page=${10}`;

  const res = await fetch(
    `https://kampung-media.com/wp-json/wp/v2/posts?_embed&${searchParam}${pageParam}`
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
          "thumbnail"
        ]?.["source_url"]
      : "https://d12v9rtnomnebu.cloudfront.net/oursite/logo_white.png";
    return val;
  });

  const customResLastPosts = lastPosts.map((val) => {
    val.cover = val._embedded["wp:featuredmedia"]
      ? val._embedded["wp:featuredmedia"][0]["media_details"]["sizes"][
          "thumbnail"
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
    urlRandom: urlRandom,
  };
};

export default Home;
