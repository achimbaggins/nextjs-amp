import Link from "next/link";
import { useRouter } from "next/router";
const Sidebar = ({ categories, posts }) => {
  const router = useRouter();

  return (
    <>
      <amp-sidebar
        id="sidebar"
        className="sidebar"
        layout="nodisplay"
        width="250px"
      >
        <button on="tap:sidebar.toggle" className="sidebar-trigger">
          ✕
        </button>
        <nav toolbar="(min-width: 767px)" toolbar-target="desktop-sidebar">
          <ul className="menu">
            <li>
              <div className="sidebar-header">
                <Link href={"/"}>
                  <h2>Private Blog Network</h2>
                </Link>
                <div className="side-border" />
              </div>
              <div style={{ display: "flex", marginBottom: 20 }}>
                <button className="btn-outline">Daftar</button>
                <button className="btn-default">Masuk</button>
              </div>
            </li>
            {posts ? (
              <li>
                <h2 className="submenu-header">Berita Terbaru</h2>
                <ul className="sub-menu">
                  {posts.map((val, key) => {
                    return (
                      <Link key={key} href={`/post/${val.slug}`}>
                        <div className="item">
                          <h2 className="item-title">{val.title.rendered}</h2>
                          <p style={{ color: "orange" }}>Selengkapnya...</p>
                        </div>
                      </Link>
                    );
                  })}
                  <li className="item-more">
                    <Link href={"/"}>Berita Lainnya &rarr;</Link>
                  </li>
                </ul>
              </li>
            ) : (
              <li>
                <h2 className="submenu-header">Kategori</h2>
                <ul className="sub-menu">
                  {categories.map?.((cat, index) => {
                    return (
                      <li key={index}>
                        <Link
                          href={`/categories/${cat.slug}/${cat.id}`}
                          className={
                            router.query.name === cat.slug ? "active" : ""
                          }
                        >
                          &#10551; {cat?.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            )}
          </ul>
        </nav>
      </amp-sidebar>

      <aside id="desktop-sidebar"></aside>

      <style jsx global>
        {`
          .sidebar {
            background-color: #fafafa;
            color: #333;
          }

          .sidebar-trigger {
            background: transparent;
            border: 0;
            outline: none;
            padding: 15px 20px;
            cursor: pointer;
            font-size: 22px;
          }

          #desktop-sidebar {
            width: 250px;
            height: 100vh;
            background: #fafafa;
            padding: 0px 20px;
          }

          #desktop-sidebar .menu {
            display: flex;
            flex-direction: column;
          }

          .sidebar-header {
            display: flex;
            flex-direction: column;
            margin-bottom: 20px;
            margin: 4rem 0px;
          }

          .sidebar-header h2 {
            margin: 0px;
          }

          a > h2 {
            font-size: 2.5rem;
          }

          .sidebar-header .side-border {
            width: 60px;
            height: 2px;
            border-radius: 20px;
            background-color: #04aa6d;
          }

          .sub-menu {
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            justify-content: start;
          }

          .sub-menu .item {
            margin-bottom: 5px;
            background-color: white;
            border: 1px solid #f5f5f5;
            padding: 5px;
            border-radius: 5px;
          }

          .item-more {
            text-decoration: none;
            font-size: 1.2rem;
            text-align: center;
          }

          .item .item-title {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            font-size: 1.2rem;
            margin: 0;
          }

          .item p {
            font-size: 1rem;
            margin: 0;
            color: gray;
          }

          button {
            margin-right: 10px;
            border-radius: 10px;
          }

          button:last-child {
            margin-right: 0px;
          }

          .btn-outline {
            background-color: white;
            border: 1px solid #04aa6d;
            color: #04aa6d;
            padding: 8px;
            flex: 1;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
          }

          .btn-default {
            background-color: #04aa6d;
            border: 1px solid #04aa6d;
            color: white;
            padding: 8px;
            flex: 1;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
          }

          ul {
            margin: 0px;
            padding: 0px;
          }

          ul li {
            list-style-type: none;
            color: black;
            margin: 0;
          }

          ul li .submenu-header {
            margin: 0px;
            padding: 0px;
            font-size: 2.2rem;
          }

          .sub-menu a {
            font-size: 1.5rem;
          }

          ul li > a.active {
            color: orange;
          }

          @media screen and (max-width: 767px) {
            .sidebar {
              padding: 0 20px;
            }

            .menu {
              padding: 0px 20px;
            }

            .menu li a {
              font-size: 14px;
            }
          }
        `}
      </style>
    </>
  );
};

export default Sidebar;
