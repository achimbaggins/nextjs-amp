import { Inter } from "next/font/google";
import Layout from "../../components/Layout";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
export const config = { amp: true };

function Home({ post, categories }) {
  return (
    <>
      <Head>
        <title>{post.title.rendered}</title>
        <meta property="og:title" content={post.title.rendered} key="title" />
      </Head>
      <Layout categories={categories}>
        <div className={`${inter.className} content `}>
          <h1>{post.title.rendered}</h1>
          <p
            dangerouslySetInnerHTML={{
              __html: post?.content?.rendered,
            }}
          ></p>
        </div>
      </Layout>
      <style jsx>
        {`
          .content {
            max-width: 65%;
            margin: auto;
            padding: 30px 0px;
          }

          @media screen and (max-width: 767px) {
            .content {
              max-width: 85%;
            }
          }
        `}
      </style>
    </>
  );
}

Home.getInitialProps = async (context) => {
  console.log(context.query);
  const res = await fetch(
    `https://kampung-media.com/wp-json/wp/v2/posts/${context.query.slug}`
  );
  const resCat = await fetch(
    `https://kampung-media.com/wp-json/wp/v2/categories`
  );
  const categories = await resCat.json();

  const post = await res.json();

  const customeCat = categories.map((val) => {
    const data = {};
    data.id = val.id;
    data.name = val.name;
    data.slug = val.slug;

    return data;
  });

  return { post, categories: customeCat };
};

export default Home;
