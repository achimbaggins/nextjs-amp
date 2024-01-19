import Link from "next/link";
import { useRouter } from "next/router";
import Search from "./Search";
const Sidebar = ({ categories, posts, urlRandom, isHeader = false }) => {
  const router = useRouter();
  const url = urlRandom() > 5 ? "https://google.com" : "https://facebook.com";

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
            <li className={`menu-header ${!isHeader && "hide"}`}>
              <div>
                <Link href={"/"}>
                  <h2>Private Blog Network</h2>
                </Link>
                <div className="side-border" />
              </div>
              <div style={{ display: "flex", marginBottom: 20, marginTop: 20 }}>
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
            </li>

            {posts ? (
              <li className="last-post">
                <h2 className="submenu-header">Berita Terbaru</h2>
                <ul className="sub-menu ">
                  {posts.map((val, key) => {
                    return (
                      <li key={key}>
                        <Link href={`/post/${val.slug}`} className="item-title">
                          {val.title.rendered}
                        </Link>
                      </li>
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
            position: absolute;
            max-width: 240px;
          }

          #desktop-sidebar .menu {
            display: flex;
            flex-direction: column;
          }

          a > h2 {
            font-size: 2.5rem;
          }

          .menu-header.hide {
            display: none;
          }

          .menu-header .side-border {
            width: 60px;
            height: 2px;
            border-radius: 20px;
            background-color: black;
            margin-top: 10px;
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
            border: 1px solid #f2f2f2;
            padding: 10px;
            border-radius: 5px;
            text-wrap: wrap;
          }

          .item-more {
            text-decoration: none;
            font-size: 1.2rem;
            text-align: center;
          }

          .last-post {
            padding-right: 25px;
          }

          .sub-menu {
            margin-top: 15px;
          }

          .sub-menu .item-title {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            font-size: 1.2rem;
            font-weight: 600;
            margin: 0;
            margin-bottom: 10px;
            color: #121212;
          }

          .item p {
            font-size: 1rem;
            margin: 0;
            color: gray;
          }

          button {
            margin-right: 10px;
            border-radius: 10px;
            cursor: pointer;
          }

          button:last-child {
            margin-right: 0px;
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
            color: white;
          }

          .btn-outline {
            border: 1px solid black;
            color: black;
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

            .menu li a {
              font-size: 14px;
            }
          }

          .sidebar-search {
            display: none;
          }

          @media screen and (max-width: 425px) {
            .sidebar {
              padding-top: 20px;
            }
            .menu-header.hide {
              display: block;
            }
          }
        `}
      </style>
    </>
  );
};

export default Sidebar;
