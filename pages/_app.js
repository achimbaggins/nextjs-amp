import App from "next/app";
import Layout from "@/components/Layout";
import "@/styles/globals.css";

export default function MyApp({ Component, pageProps, categories }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <Layout categories={categories}>
      <Component {...pageProps} />
    </Layout>
  );
}

MyApp.getInitialProps = async (context) => {
  const ctx = await App.getInitialProps(context);
  const resCat = await fetch(
    `https://kampung-media.com/wp-json/wp/v2/categories`
  );
  const categories = await resCat.json();

  const customeCat = categories.map((val) => {
    const data = {};
    data.id = val.id;
    data.name = val.name;

    return data;
  });
  return { ...ctx, categories: customeCat };
};
