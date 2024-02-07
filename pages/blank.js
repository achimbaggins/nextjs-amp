import { useRouter } from "next/router";
import React, { useEffect } from "react";

export const config = { amp: false };
const BlankPage = ({ urlRandom }) => {
  const router = useRouter();

  useEffect(() => {
    const urlRandom = () => Math.floor(Math.random() * 10) + 1; // Fungsi untuk mendapatkan angka acak antara 1 dan 10

    if (urlRandom() > 5) {
      router.replace("https://google.com");
    } else {
      router.replace("https://facebook.com");
    }
  }, []);
  return <div></div>;
};

export default BlankPage;
