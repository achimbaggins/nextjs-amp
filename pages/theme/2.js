import Post from "../../components/Post";
import Recommendations from "@/components/Recommendations";
import Head from "next/head";
import Pagination from "@/components/Pagination";
import { useRouter } from "next/router";
import Empty from "@/components/Empty";
import { baseUrl } from "@/services/url";
import Gridpost from "@/components/GridPost";
import LayoutFirst from "@/components/LayoutFirst";

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
      <LayoutFirst
        categories={categories}
        urlRandom={urlRandom}
        search={search}
      >
        {posts.length > 0 ? (
          <>
            <Recommendations posts={lastPosts} />
            <div className="grid-view">
              {posts.map((post) => (
                <Gridpost key={post.id} post={post} />
              ))}
            </div>
          </>
        ) : (
          <Empty />
        )}
        <Pagination totalPages={totalPages} />
      </LayoutFirst>
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

  const res = await fetch(`${baseUrl}/posts?_embed&${searchParam}${pageParam}`);

  const resLastPosts = await fetch(
    `${baseUrl}/posts?_embed&page=${1}&per_page=${10}`
  );

  const resCat = await fetch(`${baseUrl}/categories`);
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
