import Link from "next/link";
const Sidebar = ({ categories }) => {
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
                <h2 style={{ textAlign: "right", marginBottom: 0 }}>
                  Private Blog Network
                </h2>
                <div
                  style={{
                    width: 60,
                    height: 2,
                    borderRadius: 20,
                    backgroundColor: "#04aa6d",
                  }}
                ></div>
              </div>
              <div style={{ display: "flex", marginBottom: 20 }}>
                <button className="btn-outline">Daftar</button>
                <button className="btn-default">Masuk</button>
              </div>
            </li>
            <li>
              <h2 style={{ textAlign: "right" }}>Categories</h2>
              <ul
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  flexDirection: "column",
                }}
              >
                {categories.map?.((cat, index) => {
                  return (
                    <li key={index} style={{ textAlign: "right" }}>
                      <Link href={`/categories/${cat.id}`}>{cat?.name}</Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          </ul>
        </nav>
      </amp-sidebar>

      <aside id="desktop-sidebar"></aside>

      <style jsx>
        {`
          .sidebar {
            background-color: #fafafa;
            color: #333;
            padding-right: 20px;
          }

          #desktop-sidebar {
            width: 250px;
            background: #fafafa;
            padding: 0px 20px;
          }

          @media screen and (max-width: 767px) {
            #desktop-sidebar {
              padding-right: 20px;
            }
          }

          #desktop-sidebar .menu {
            display: flex;
            flex-direction: column;
          }

          .sidebar-header {
            display: flex;
            flex-direction: column;
            justify-items: flex-end;
            align-items: flex-end;
            margin-bottom: 20px;
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

          ul > li > ul > li {
            list-style-type: none;
            color: black;
          }

          a {
            color: black;
            font-size: 12px;
          }
        `}
      </style>
    </>
  );
};

export default Sidebar;
