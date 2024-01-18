import { formattedDate } from "@/utils/formatter";
import Link from "next/link";
import React from "react";

export default function Recommendations({ posts }) {
  return (
    <div className="recommendations">
      <h3>Berita Terbaru</h3>

      <amp-carousel
        width="auto"
        height="180"
        layout="fixed-height"
        type="carousel"
      >
        {posts.map((val, index) => {
          return (
            <Link href="/post/[slug]" as={`/post/${val.slug}`} key={index}>
              <div className="item-post">
                <amp-img
                  width="250"
                  height="140"
                  layout="responsive"
                  alt={val.title.rendered}
                  className="item-img"
                  src={val.cover}
                ></amp-img>
                <div className="item-content">
                  <h2>{val.title.rendered}</h2>
                  <span>{formattedDate(val.date)}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </amp-carousel>
      <style jsx global>
        {`
          .recommendations {
            margin-bottom: 20px;
          }

          .recommendations h3 {
            font-size: 1.8rem;
            margin: 0;
            margin-bottom: 10px;
            color: black;
          }

          .recommendations .item-post {
            display: flex;
            flex-direction: column;
            background-color: #fafafa;
            margin-bottom: 20px;
            border-radius: 10px;
            height: 160px;
            object-fit: cover;
          }

          .item-post amp-img {
            border-radius: 10px;
            height: 100%;
            border-width: 1;
            border-color: yellow;
          }

          .item-content {
            max-width: 120px;
            padding: 10px;
            line-height: 0.8;
          }

          .item-post h2 {
            margin: 0;
            font-size: 1rem;
            font-weight: bold;
            text-overflow: ellipsis;
            overflow: hidden;
          }
          .recommendations span {
            font-size: 1rem;
            margin: 0;
          }

          @media screen and (max-width: 767px) {
            .recommendations {
              // max-width: 90%;
            }
          }
        `}
      </style>
    </div>
  );
}
