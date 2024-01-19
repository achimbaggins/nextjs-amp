import Link from "next/link";

const Gridpost = ({ post }) => {
  return (
    <div>
      <div className="post">
        <Link href="/post/[slug]" as={`/post/${post.slug}`}>
          <h2
            dangerouslySetInnerHTML={{
              __html: post?.title?.rendered,
            }}
          />
        </Link>

        <div style={{ color: "black" }}>
          Category - {post?._embedded?.["wp:term"][0][0]["name"]}
        </div>

        <p
          className="content"
          dangerouslySetInnerHTML={{
            __html: post?.excerpt?.rendered,
          }}
        />
        {/* <p>{post?.excerpt?}</p> */}
        <Link href="/post/[slug]" as={`/post/${post.slug}`}>
          <div className="readmore">Selengkapnya &rarr;</div>
        </Link>
      </div>
      <style jsx global>
        {`
          a {
            margin: 0;
          }

          .post {
            margin: auto;
            display: flex;
            flex-direction: column;
            margin-bottom: 20px;
            font-size: 1.5rem;
            align-items: start;
            justify-content: start;
          }

          .post h2 {
            font-size: 1.8rem;
          }

          .avatar {
            float: left;
            width: 35px;
            height: 35px;
            margin: 0 10px 10px 0;
            border-radius: 50%;
          }
          .author {
            color: #333;
          }
          .category {
            clear: left;
          }
          .category a {
            font-size: 1.3rem;
            color: #555;
            background: #eee;
            padding: 2px 6px;
            border-radius: 3px;
          }

          .category a:hover {
            background: #ddd;
          }
          .readmore {
            font-size: 1.2rem;
            color: orange;
          }

          .post p {
            margin: 0;
          }

          @media screen and (max-width: 1024px) {
            .post p {
              margin: 0;
              font-size: 1.3rem;
            }
          }

          @media screen and (max-width: 768px) {
            .post {
              display: flex;
              flex-direction: column;
            }

            .post h2 {
              margin-top: 10px;
            }
          }

          @media screen and (max-width: 425px) {
            .post {
              display: flex;
              flex-direction: column;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Gridpost;
