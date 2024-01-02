import Link from "next/link";
import { useRouter } from "next/router";

const ITEMS_PER_PAGE = 5;

export default function Pagination({ totalPages }) {
  const router = useRouter();
  const { page } = router.query;
  const currentPage = parseInt(page) || 1;
  const startPage = Math.max(
    1,
    currentPage - (currentPage % ITEMS_PER_PAGE) + 1
  );
  const endPage = Math.min(startPage + ITEMS_PER_PAGE - 1, totalPages);

  console.log(router.asPath);
  return (
    <>
      <div className="container-pagination">
        <div className="pagination">
          <Link
            href={{
              href: router.asPath,
              query: { page: startPage - ITEMS_PER_PAGE },
            }}
          >
            &laquo;
          </Link>
          {Array.from({ length: ITEMS_PER_PAGE }, (_, index) => {
            const pageNumber = startPage + index;
            const isActive = pageNumber === currentPage;

            if (pageNumber > totalPages) {
              return null;
            }

            console.log(router.asPath);

            return (
              <Link
                key={pageNumber}
                href={{
                  query: { ...router.query, page: pageNumber },
                }}
                className={isActive ? "active" : ""}
              >
                {pageNumber}
              </Link>
            );
          })}
          {endPage < totalPages && (
            <Link
              href={{
                href: router.asPath,
                query: { page: endPage + 1 },
              }}
            >
              &raquo;
            </Link>
          )}
        </div>
      </div>
      <style jsx global>
        {`
          .container-pagination {
            margin: 0 auto;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 20px 0px;
          }

          .pagination {
            display: inline-block;
          }

          .pagination a {
            color: black;
            float: left;
            padding: 5px 16px;
            text-decoration: none;
          }

          .pagination a.active {
            background-color: #4caf50;
            color: white;
            border-radius: 10px;
          }
        `}
      </style>
    </>
  );
}
