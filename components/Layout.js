import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = (props) => {
  return (
    <div className="site-wrapper">
      <Navbar />
      <Sidebar
        categories={props.categories}
        posts={props.posts}
        urlRandom={props.urlRandom}
      />
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
          margin: 0 0 0px;
          font-size: 3.2rem;
        }

        .site-wrapper {
          display: flex;
          overflow-y: scroll;
        }

        .content-wrapper {
          flex: 1;
          max-height: 100vh;
          position: relative;
          margin: 0 auto;
          max-width: 65%;
        }

        @media screen and (max-width: 767px) {
          .site-wrapper {
            display: block;
          }
        }

        a {
          text-decoration: none;
          color: black;
        }
      `}</style>
    </div>
  );
};

export default Layout;
