import { useRouter } from "next/router";
import Script from "next/script";
import React, { useState } from "react";

export const config = { amp: false };

export default function Search({ value, action }) {
  const router = useRouter();
  const params = new URLSearchParams(router.query);
  params.delete("page");
  params.delete("search");

  return (
    <>
      <form
        method="get"
        className="search-form"
        action={`${action}`}
        target="_top"
        id="myForm"
      >
        <input
          type="text"
          name="theme"
          on="input-throttled:formData.name"
          defaultValue={params.get("theme")}
          hidden
        />
        <input
          type="search"
          name="search"
          className="search-field"
          on="input-throttled:formData.search"
          defaultValue={value}
          placeholder="Search..."
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
