import { useRouter } from "next/router";
import React from "react";

export default function Search({ value, action }) {
  const router = useRouter();
  const params = new URLSearchParams(router.query);
  params.delete("page");

  return (
    <>
      <form
        className="search-form"
        method="get"
        action={`${action}`}
        target="_top"
      >
        <input
          type="search"
          placeholder="Search..."
          name="search"
          className="search-field"
          defaultValue={value}
        />
        <input type="submit" value="Search" className="search-submit" />
      </form>
      <style jsx>
        {`
          form {
            margin: 0;
          }
          .search-form {
            display: flex;
            aligni-items: center;
            border: 1px solid #141414;
            border-radius: 5px;
          }

          @media screen and (max-width: 767px) {
            .search-form {
              margin: auto;
              display: flex;
            }
          }

          .search-field {
            padding: 5px 15px;
            margin: auto;
            font-size: 1.2rem;
            line-height: 1.5em;
            color: #373d41;
            background-color: #fff;
            background-clip: padding-box;
            border-radius: 6px;
            -webkit-box-shadow: none;
            box-shadow: none;
            flex-grow: 1;
            border: 0;
            outline: none;
          }
          .search-submit {
            background-color: #141414;
            color: #ffffff;
            font-weight: 400;
            text-decoration: none;
            white-space: normal;
            -webkit-transition: none;
            transition: none;
            cursor: pointer;
            outline: 0;
            padding: 5px 10px;
            font-size: 1rem;
            line-height: 1.25rem;
            border-width: 0;
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
          }
          .search-form .input-group {
            text-align: center;
            flex: 1;
          }
        `}
      </style>
    </>
  );
}
