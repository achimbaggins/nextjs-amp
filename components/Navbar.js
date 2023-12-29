import Head from "next/head";
import Link from "next/link";
export const config = { amp: true };

export default function Navbar() {
  return (
    <>
      <div className="header-wrapper">
        <button on="tap:sidebar.toggle" className={"sidebar-trigger"}>
          ☰
        </button>
        <style jsx>{`
          .header-wrapper {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            height: 60px;
            min-width: 330px;
            align-items: center;
          }
          .logo {
            padding: 10px 20px;
          }
          .logo a {
            font-weight: 900;
            color: #111;
          }
          .logo a:hover {
            font-weight: 900;
            border-bottom: 2px solid #111;
          }
          .sidebar-trigger {
            color: red;
          }

          @media screen and (min-width: 767px) {
            .sidebar-trigger {
              display: none;
            }
            .header-wrapper {
              display: none;
            }
          }
        `}</style>
      </div>
    </>
  );
}
