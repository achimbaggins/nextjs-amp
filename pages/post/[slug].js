import { Inter } from "next/font/google";
import Layout from "../../components/Layout";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
export const config = { amp: true };

function Home({ post, categories, lastPosts }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{post.title.rendered}</title>
        <meta property="og:title" content={post.title.rendered} key="title" />
        <link rel="canonical" href={router.asPath} />
      </Head>
      <Layout categories={categories} posts={lastPosts}>
        <div className={`${inter.className} content-detail `}>
          <ul className="breadcrumb">
            <li>
              <Link href={"/"}>Home &#8250;</Link>{" "}
            </li>
            <li>{post.slug}</li>
          </ul>
          <h1>{post.title.rendered}</h1>
          <p
            dangerouslySetInnerHTML={{
              __html: post?.content?.rendered,
            }}
          ></p>
        </div>
      </Layout>
      <style jsx global>
        {`
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
  const res = await fetch(
    `https://kampung-media.com/wp-json/wp/v2/posts?slug=${context.query.slug}`
  );

  const resLastPosts = await fetch(
    `https://kampung-media.com/wp-json/wp/v2/posts?_embed&page=${1}&per_page=${5}`
  );

  const resCat = await fetch(
    `https://kampung-media.com/wp-json/wp/v2/categories`
  );

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

  return { post: post[0], categories: customeCat, lastPosts: lastPosts };
};

export default Home;
