import Link from "next/link";
import Sidebar from "./Sidebar";
import Search from "./Search";
import { useRouter } from "next/router";

const LayoutCleanSide = (props) => {
  const url = "/blank";
  const router = useRouter();
  const params = new URLSearchParams(router.query);

  return (
    <>
      <header>
        <div className="header-container">
          <div className="header-brand">
            <button on="tap:sidebar.toggle" className={"sidebar-trigger"}>
              ☰
            </button>
            <Link href={`/?theme=${params.get("theme")}`} className="brand">
              Blog Network
            </Link>
          </div>
          {!props.withoutSearch && (
            <div className="search-wrapper">
              <Search action={router.asPath} value={props.search} />
            </div>
          )}
          <div className="btn-group hide">
            <button
              className="btn btn-outline"
              on={`tap:AMP.navigateTo(url="${url}", target=_blank)`}
            >
              Daftar
            </button>
            <button
              className="btn btn-default"
              on={`tap:AMP.navigateTo(url="${url}", target=_blank)`}
            >
              Masuk
            </button>
          </div>
        </div>
      </header>
      <div className="site-content">
        <div className="site-wrapper">
          <div className="sidebar-wrapper">
            <Sidebar
              categories={props.categories}
              posts={props.posts}
              urlRandom={props.urlRandom}
              isHeader={false}
            />
          </div>
          <div className="post-wrapper">{props.children}</div>
        </div>
      </div>
      <style jsx global>{`
        html {
          box-sizing: border-box;
          font-size: 10px;
        }
        *,
        *::after,
        *::before {
          box-sizing: inherit;
        }

        body {
          margin: 0;
          padding: 0;
          font-weight: 400;
          line-height: 1.8;
          color: #7a7a7a;
          font-family: -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI",
            "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif;
          text-rendering: optimizeLegibility;
          background-color: #ffffff;
        }

        h1,
        h2 {
          color: #333;
          margin: 0;
          line-height: 1.3;
        }

        h1 {
          font-weight: 700;
          font-size: 3.2rem;
        }

        .site-content {
          max-height: 100vh;
          overflow-y: scroll;
          padding-top: 60px;
        }

        .site-wrapper {
          display: grid;
          grid-template-columns: 22% 78%;
          padding-top: 20px;
        }

        .sidebar-wrapper {
          padding-top: 20px;
        }

        .post-wrapper {
          padding: 0px 20px;
          padding-top: 20px;
          border-radius: 5px;
        }

        a {
          text-decoration: none;
          color: black;
        }

        header {
          background: #ffffff;
          box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 999;
        }

        .header-container {
          max-width: 1024px;
          margin: 0 auto;
          height: 60px;
          padding: 10px 0px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .header-brand {
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        a.brand {
          font-size: 2.2rem;
          font-weight: 700;
        }

        .search-wrapper {
          flex: 0.8;
          margin: 0px 80px;
        }

        .btn {
          font-size: 1.2rem;
          font-weight: 400;
          padding: 8px 20px;
          border-radius: 5px;
        }

        .btn-default {
          border: 1px solid black;
          background: black;
        }

        .btn-outline {
          border: 1px solid black;
          color: black;
        }

        .sidebar-trigger {
          display: none;
          padding: 0px;
          font-size: 20px;
        }

        .grid-view {
          display: grid;
          grid-template-columns: auto auto;
          grid-gap: 10px;
        }

        //responsive layout
        @media screen and (min-width: 1025px) {
          .site-wrapper {
            max-width: 1024px;
            margin: 0 auto;
          }
        }

        @media screen and (max-width: 1024px) {
          .header-container {
            padding: 0px 20px;
          }

          .site-wrapper {
            margin: 0 auto;
            display: grid;
            grid-template-columns: 25% 75%;
            padding-right: 20px;
            padding-left: 20px;
          }
        }

        @media screen and (max-width: 768px) {
          .site-wrapper {
            display: grid;
            grid-template-columns: 30% 70%;
            padding-right: 20px;
            padding-left: 20px;
          }
        }

        @media screen and (max-width: 425px) {
          .site-wrapper {
            display: grid;
            grid-template-columns: 100%;
            padding-right: 5px;
            padding-left: 5px;
          }

          .header-container {
            padding: 0px 15px;
          }

          .sidebar-trigger {
            display: block;
          }

          .search-wrapper {
            flex: 1;
            margin: 0px;
          }

          .btn {
            padding: 5px 10px;
            font-size: 1rem;
            font-weight: 300;
          }

          .btn-outline {
            margin-right: 5px;
          }

          a.brand {
            display: none;
          }

          .btn-group.hide {
            display: none;
          }

          .grid-view {
            display: grid;
            grid-template-columns: auto;
          }
        }
      `}</style>
    </>
  );
};

export default LayoutCleanSide;
