import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = (props) => {
  return (
    <div className="site-wrapper">
      <Navbar />
      <Sidebar categories={props.categories} posts={props.posts} />
      <div className="content-wrapper">{props.children}</div>

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
          font-size: 2rem;
          font-weight: 400;
          line-height: 1.8;
          background: #fff;
          color: #7a7a7a;
          font-family: -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI",
            "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif;
          text-rendering: optimizeLegibility;
        }

        h1,
        h2 {
          color: #333;
          margin: 50px 0 25px;
          line-height: 1.3;
        }
        h1 {
          font-weight: 700;
          margin: 0 0 30px;
          font-size: 3.2rem;
        }
        h2 {
          font-size: 2.8rem;
        }
        ul li > a {
          color: black;
          text-decoration: none;
          background-color: transparent;
        }

        ul li > a.active {
          color: orange;
        }

        .recommendations a {
          color: black;
          text-decoration: none;
        }

        .site-wrapper {
          display: flex;
        }

        .container {
          flex: 1;
          display: flex;
          flex-direction: row;
        }

        .content-wrapper {
          flex: 1;
          max-height: 100vh;
          overflow-y: scroll;
          margin: auto;
        }

        @media screen and (max-width: 767px) {
          .site-wrapper {
            display: block;
          }
        }

        .sidebar-trigger {
          background: transparent;
          border: 0;
          outline: none;
          padding: 15px 20px;
          cursor: pointer;
          font-size: 22px;
        }
      `}</style>
    </div>
  );
};

export default Layout;
