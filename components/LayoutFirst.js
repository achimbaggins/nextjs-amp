import Sidebar from "./Sidebar";
import Search from "./Search";
import { useRouter } from "next/router";

const LayoutFirst = (props) => {
  const url =
    props.urlRandom() > 5 ? "https://google.com" : "https://facebook.com";

  const router = useRouter();

  return (
    <>
      <header className="navbar">
        <button on="tap:sidebar.toggle" className={"sidebar-trigger"}>
          ☰
        </button>
        <Search action={router.asPath} value={props.search} />
      </header>
      <div className="site-content">
        <div className="site-wrapper">
          <div className="sidebar-wrapper">
            <Sidebar
              categories={props.categories}
              posts={props.posts}
              urlRandom={props.urlRandom}
              isHeader={true}
            />
          </div>
          <div className="post-wrapper">
            <div style={{ height: 40 }} />
            {props.children}
            <div className="search-wrapper">
              <label style={{ fontSize: "1.8rem", color: "black" }}>
                Search :{" "}
              </label>
              <Search action={router.asPath} value={props.search} />
            </div>
          </div>
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
          background: #f2f2f2;
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
        }

        .site-wrapper {
          display: grid;
          grid-template-columns: 250px auto;
          background-color: #ffffff;
        }

        .sidebar-wrapper {
          padding-top: 20px;
          background-color: #fafafa;
          padding-left: 20px;
          padding-right: 20px;
        }

        .post-wrapper {
          position: relative;
          max-width: 65%;
          padding: 0px 20px;
          margin: 0px auto;
          padding-top: 50px;
        }

        .search-wrapper {
          top: 0;
          position: fixed;
          background: white;
          display: flex;
          flexdirection: row;
          alignitems: center;
          zindex: 1111111;
          padding-top: 20px;
          padding-bottom: 20px;
          width: 80%;
        }

        .search-wrapper label {
          margin-right: 20px;
        }

        a {
          text-decoration: none;
          color: black;
        }

        .sidebar-trigger {
          display: none;
          padding: 0px;
          font-size: 20px;
        }

        .navbar {
          display: none;
        }

        //responsive LayoutFirst
        @media screen and (min-width: 1025px) {
          .site-wrapper {
            margin: 0 auto;
          }
        }

        @media screen and (max-width: 1024px) {
          .site-wrapper {
            margin: 0 auto;
            display: grid;
            grid-template-columns: 25% 75%;
          }
        }

        @media screen and (max-width: 768px) {
          .site-wrapper {
            display: grid;
            grid-template-columns: 30% 70%;
          }

          .post-wrapper {
            max-width: 90%;
          }
        }

        @media screen and (max-width: 425px) {
          .site-content {
            max-height: calc(100vh - 60px);
          }
          .site-wrapper {
            display: grid;
            grid-template-columns: 100%;
          }

          .sidebar-trigger {
            display: block;
          }

          .post-wrapper {
            padding: 0px 20px;
            padding-top: 20px;
            border-left: 0px;
            padding-top: 0px;
          }

          .search-wrapper {
            display: none;
          }

          .navbar {
            height: 60px;
            padding: 0px 20px;
            display: flex;
            align-items: center;
          }
        }
      `}</style>
    </>
  );
};

export default LayoutFirst;
