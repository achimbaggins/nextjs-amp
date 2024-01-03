import { useRouter } from "next/router";
import React from "react";

export default function Search({ value, action }) {
  return (
    <>
      <form className="search-form" method="GET" action={action} target="_top">
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
          .search-form {
            max-width: 65%;
            margin: 0px auto;
            display: flex;
            padding: 20px 0px;
          }

          @media screen and (max-width: 767px) {
            .search-form {
              max-width: 90%;
              margin: auto;
              display: flex;
              padding: 20px 0px;
            }
          }

          .search-field {
            padding: 10px 15px;
            margin: auto;
            font-size: 1.2rem;
            line-height: 1.5em;
            color: #373d41;
            background-color: #fff;
            background-clip: padding-box;
            border: 1px solid #c5c5c7;
            border-radius: 6px;
            -webkit-box-shadow: none;
            box-shadow: none;
            flex-grow: 1;
            border-right: none;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
            outline: none;
          }
          .search-submit {
            background-color: #1a1a1a;
            color: #ffffff;
            font-weight: 700;
            text-decoration: none;
            white-space: normal;
            -webkit-transition: none;
            transition: none;
            cursor: pointer;
            outline: 0;
            padding: 10px;
            font-size: 1rem;
            line-height: 1.25rem;
            border-radius: 6px;
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
