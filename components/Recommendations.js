import React from "react";

export default function Recommendations() {
  const images =
    "https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  return (
    <div className="recommendations">
      <h3>Recommendations</h3>
      <amp-carousel
        width="auto"
        height="160"
        layout="fixed-height"
        type="carousel"
      >
        <a href="#" role="listitem">
          <amp-img
            width="640"
            height="426"
            layout="responsive"
            alt="Apple"
            src={images}
          ></amp-img>
          <p className="name">Apple</p>
          <p className="star">★★★★★</p>
          <p className="price">$1.99</p>
        </a>
        <a href="#" role="listitem">
          <amp-img
            width="640"
            height="426"
            layout="responsive"
            alt="Apple"
            src={images}
          ></amp-img>
          <p className="name">Apple</p>
          <p className="star">★★★★★</p>
          <p className="price">$1.99</p>
        </a>
        <a href="#" role="listitem">
          <amp-img
            width="640"
            height="426"
            layout="responsive"
            alt="Apple"
            src={images}
          ></amp-img>
          <p className="name">Apple</p>
          <p className="star">★★★★★</p>
          <p className="price">$1.99</p>
        </a>
        <a href="#" role="listitem">
          <amp-img
            width="640"
            height="426"
            layout="responsive"
            alt="Apple"
            src={images}
          ></amp-img>
          <p className="name">Apple</p>
          <p className="star">★★★★★</p>
          <p className="price">$1.99</p>
        </a>
        <a href="#" role="listitem">
          <amp-img
            width="640"
            height="426"
            layout="responsive"
            alt="Apple"
            src={images}
          ></amp-img>
          <p className="name">Apple</p>
          <p className="star">★★★★★</p>
          <p className="price">$1.99</p>
        </a>
        <a href="#" role="listitem">
          <amp-img
            width="640"
            height="426"
            layout="responsive"
            alt="Apple"
            src={images}
          ></amp-img>
          <p className="name">Apple</p>
          <p className="star">★★★★★</p>
          <p className="price">$1.99</p>
        </a>
        <a href="#" role="listitem">
          <amp-img
            width="640"
            height="426"
            layout="responsive"
            alt="Apple"
            src={images}
          ></amp-img>
          <p className="name">Apple</p>
          <p className="star">★★★★★</p>
          <p className="price">$1.99</p>
        </a>
        <a href="#" role="listitem">
          <amp-img
            width="640"
            height="426"
            layout="responsive"
            alt="Apple"
            src={images}
          ></amp-img>
          <p className="name">Apple</p>
          <p className="star">★★★★★</p>
          <p className="price">$1.99</p>
        </a>
        <a href="#" role="listitem">
          <amp-img
            width="640"
            height="426"
            layout="responsive"
            alt="Apple"
            src={images}
          ></amp-img>
          <p className="name">Apple</p>
          <p className="star">★★★★★</p>
          <p className="price">$1.99</p>
        </a>
        <a href="#" role="listitem">
          <amp-img
            width="640"
            height="426"
            layout="responsive"
            alt="Apple"
            src={images}
          ></amp-img>
          <p className="name">Apple</p>
          <p className="star">★★★★★</p>
          <p className="price">$1.99</p>
        </a>
        <a href="#" role="listitem">
          <amp-img
            width="640"
            height="426"
            layout="responsive"
            alt="Orange"
            src={images}
          ></amp-img>
          <p className="name">Orange</p>
          <p className="star">★★★★☆</p>
          <p className="price">$0.99</p>
        </a>
        <a href="#" role="listitem">
          <amp-img
            width="640"
            height="426"
            layout="responsive"
            alt="Pear"
            src={images}
          ></amp-img>
          <p className="name">Pear</p>
          <p className="star">★★★☆☆</p>
          <p className="price">$1.50</p>
        </a>
        <a href="#" role="listitem">
          <amp-img
            width="640"
            height="426"
            layout="responsive"
            alt="Banana"
            src={images}
          ></amp-img>
          <p className="name">Banana</p>
          <p className="star">★★★★★</p>
          <p className="price">$1.50</p>
        </a>
        <a href="#" role="listitem">
          <amp-img
            width="640"
            height="426"
            layout="responsive"
            alt="Apple"
            src={images}
          ></amp-img>
          <p className="name">Apple 2</p>
          <p className="star">★★★★★</p>
          <p className="price">$1.99</p>
        </a>
        <a href="#" role="listitem">
          <amp-img
            width="640"
            height="426"
            layout="responsive"
            alt="Orange"
            src={images}
          ></amp-img>
          <p className="name">Orange 2</p>
          <p className="star">★★★★☆</p>
          <p className="price">$0.99</p>
        </a>
        <a href="#" role="listitem">
          <amp-img
            width="640"
            height="426"
            layout="responsive"
            alt="Pear"
            src={images}
          ></amp-img>
          <p className="name">Pear 2</p>
          <p className="star">★★★☆☆</p>
          <p className="price">$1.50</p>
        </a>
        <a href="#" role="listitem">
          <amp-img
            width="640"
            height="426"
            layout="responsive"
            alt="Banana"
            src={images}
          ></amp-img>
          <p className="name">Banana 2</p>
          <p className="star">★★★★★</p>
          <p className="price">$1.50</p>
        </a>
      </amp-carousel>
      <style jsx>
        {`
          :root {
            --color-primary: #005af0;
            --color-secondary: #00dcc0;
            --color-text-light: #fff;
            --color-text-dark: #000;
            --color-bg-light: #fafafc;
            --color-bg-grey: rgba(0, 0, 0, 0.8);

            --space-1: 0.5rem; /* 8px */
            --space-2: 1rem; /* 16px */
            --space-3: 1.5rem; /* 24px */
            --space-4: 2rem; /* 32px */
            --box-shadow-1: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
              0 1px 1px -1px rgba(0, 0, 0, 0.14),
              0 1px 5px 0 rgba(0, 0, 0, 0.12);
          }
          p {
            margin: 0;
            font-size: 16px;
          }
          span {
            font-size: 12px;
            margin: 0;
          }
          .item {
            padding-bottom: 10px;
          }

          .recommendations {
            max-width: 65%;
            margin: auto;
          }

          @media screen and (max-width: 767px) {
            .recommendations {
              max-width: 85%;
            }
          }
        `}
      </style>
    </div>
  );
}
