import Link from "next/link";

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="post-img">
        <amp-img
          width="300"
          height="200"
          layout="fill"
          alt="Apple"
          className="item-img"
          src={post.cover}
        />
      </div>
      <div style={{ flex: 1 }}>
        <h2
          className="post-header"
          dangerouslySetInnerHTML={{
            __html: post?.title?.rendered,
          }}
        />

        <p
          className="content"
          dangerouslySetInnerHTML={{
            __html: post?.excerpt?.rendered,
          }}
        ></p>
        <Link href="/post/[pid]" as={`/post/${post.id}`}>
          <div className="readmore">read more</div>
        </Link>
      </div>
      <style jsx global>
        {`
          @media screen and (max-width: 767px) {
            .post p {
              margin: 0;
              font-size: 1.3rem;
            }
          }
        `}
      </style>
      <style jsx>{`
        .post {
          margin-bottom: 60px;
          max-width: 65%;
          margin: auto;
          display: flex;
          flex-direction: row;
          margin-bottom: 20px;
        }

        .post-img {
          width: 30%;
          margin-right: 20px;
          position: relative;
        }

        .post-header {
          margin: 0;
        }

        p {
          margin: 0;
        }

        @media screen and (max-width: 767px) {
          .post {
            max-width: 85%;
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
          font-size: 1.6rem;
        }
      `}</style>
    </div>
  );
};

export default Post;
