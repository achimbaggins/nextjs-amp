import { Inter } from "next/font/google";
import Layout from "../../components/Layout";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import { baseUrl } from "@/services/url";

const inter = Inter({ subsets: ["latin"] });
export const config = { amp: true };
function Home({ post, categories, lastPosts, urlRandom, relatedNews }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{post.title.rendered}</title>
        <meta property="og:title" content={post.title.rendered} key="title" />
        <link rel="canonical" href={router.asPath} />
      </Head>
      <Layout categories={categories} posts={lastPosts} urlRandom={urlRandom}>
        <div className={`${inter.className} content-detail `}>
          <ul className="breadcrumb">
            <li>
              <Link href={"/"}>Home &#8250;</Link>{" "}
            </li>
            <li>{post.slug}</li>
          </ul>
          <h1
            dangerouslySetInnerHTML={{
              __html: post?.title?.rendered,
            }}
          />
          <p
            dangerouslySetInnerHTML={{
              __html: post?.content?.rendered,
            }}
          ></p>

          <h3>Related News</h3>
          {relatedNews.map((val, key) => {
            return (
              <div key={key}>
                <Link href={`/post/${val.slug}`}>{val.title.rendered}</Link>
              </div>
            );
          })}
        </div>
      </Layout>
      <style jsx global>
        {`
          h3 {
            font-weight: 700;
            font-size: 2rem;
            margin: 0;
          }

          h4 {
            font-weight: 700;
            font-size: 1.5rem;
            margin: 0;
          }

          a {
            font-size: 1.8rem;
            color: orange;
          }

          .content-detail {
            max-width: 65%;
            margin: auto;
            padding: 30px 0px;
          }

          .content-detail p {
            font-size: 1.8rem;
          }

          @media screen and (max-width: 767px) {
            .content-detail {
              max-width: 85%;
            }
          }

          ul.breadcrumb {
            padding: 10px 0;
            list-style: none;
            margin: 0;
          }

          ul.breadcrumb li {
            display: inline;
            font-size: 12px;
            text-indent: 10px;
            margin: 0;
            padding: 0;
          }

          ul.breadcrumb li a {
            color: orange;
            text-decoration: none;
            font-weight: 500;
            font-size: 1.5rem;
          }

          /* Add a color on mouse-over */
          ul.breadcrumb li a:hover {
            color: #01447e;
            text-decoration: none;
          }
        `}
      </style>
    </>
  );
}

Home.getInitialProps = async (context) => {
  const urlRandom = () => {
    const value = Math.floor(Math.random() * 10);
    return value;
  };
  const res = await fetch(`${baseUrl}/posts?slug=${context.query.slug}`);

  const resLastPosts = await fetch(
    `${baseUrl}/posts?_embed&page=${1}&per_page=${5}`
  );

  const resCat = await fetch(`${baseUrl}/categories`);

  const categories = await resCat.json();
  const post = await res.json();
  const posts = await resLastPosts.json();

  const customeCat = categories.map((val) => {
    const data = {};
    data.id = val.id;
    data.name = val.name;
    data.slug = val.slug;

    return data;
  });

  const lastPosts = posts.map((val) => {
    val.cover = val._embedded["wp:featuredmedia"]
      ? val._embedded["wp:featuredmedia"][0]["media_details"]["sizes"][
          "thumbnail"
        ]?.["source_url"]
      : "https://d12v9rtnomnebu.cloudfront.net/oursite/logo_white.png";
    return val;
  });

  const postByCat = await fetch(
    `${baseUrl}/posts?categories=${post[0]["categories"][0]}`
  );
  const relatedNews = await postByCat.json();

  return {
    post: post[0],
    categories: customeCat,
    lastPosts: lastPosts,
    urlRandom,
    relatedNews,
  };
};

export default Home;
