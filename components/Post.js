import Link from "next/link";

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="post-img">
        <amp-img
          width="auto"
          height="200"
          layout="fill"
          alt="Apple"
          className="item-img"
          src={post.cover}
        />
      </div>
      <div style={{ flex: 1 }}>
        <Link href="/post/[slug]" as={`/post/${post.slug}`}>
          <h1
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
          h1 {
            margin: 0;
          }

          a {
            margin: 0;
          }

          .post {
            margin: auto;
            display: flex;
            flex-direction: row;
            margin-bottom: 20px;
            font-size: 1.5rem;
          }

          .post-header {
            margin: 0;
          }

          .post-img {
            position: relative;
            width: 100%;
            margin-right: 20px;
          }

          .post-img img {
            object-fit: cover;
          }

          .post p {
            margin: 0;
          }

          @media screen and (min-width: 1025px) {
            .post {
              max-width: 65%;
            }
            .post-img {
              height: 200px;
              width: 35%;
            }
          }

          @media screen and (max-width: 1024px) {
            .post {
              max-width: 65%;
              display: flex;
              flex-direction: column;
            }

            .post-img {
              height: 200px;
              width: 100%;
            }

            .post h2 {
              font-size: 1.8rem;
              margin-top: 10px;
            }

            p {
              margin: 0;
              font-size: 1.3rem;
            }
          }

          @media screen and (max-width: 425px) {
            .post {
              max-width: 90%;
              display: flex;
              flex-direction: column;
            }

            .post-img {
              height: 200px;
              width: 100%;
            }
          }

          .post h2 {
            text-transform: capitalize;
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
          @media screen and (max-width: 1024px) {
            .post p {
              margin: 0;
              font-size: 1.3rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Post;
