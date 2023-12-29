import Link from "next/link";
import { useEffect } from "react";

const Post = ({ post }) => {
  useEffect(() => {
    console.log("use effect");
  }, []);

  return (
    <div className="post">
      <h2>{post?.yoast_head_json?.title}</h2>
      <div className="category">
        {/* <Link href="/category/[cid]" as={`/category/${post.category.id}`}>
          {post.category.title}
        </Link> */}
      </div>

      <div className="text">
        <p
          dangerouslySetInnerHTML={{
            __html: post?.yoast_head_json?.og_description,
          }}
        ></p>
        {"... "}
        <Link href="/post/[pid]" as={`/post/${post.id}`}>
          <div className="readmore">read more</div>
        </Link>
      </div>
      <style jsx>{`
        .post {
          margin-bottom: 60px;
          max-width: 65%;
          margin: auto;
        }

        @media screen and (max-width: 767px) {
          .post {
            max-width: 85%;
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
