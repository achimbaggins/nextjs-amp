import React from "react";

export default function Empty() {
  return (
    <>
      <div className="empty">Data Kosong...</div>
      <style jsx global>
        {`
          .empty {
            max-width: 65%;
            margin: 0px auto;
          }
        `}
      </style>
    </>
  );
}
