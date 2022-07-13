import Head from "next/head";
import Image from "next/image";
import AboutMeCover from "../components/index_page/about_me_cover";
import IndexPageHeader from "../components/index_page/index_page_header";
import MyProjectsCover from "../components/index_page/my_projects_cover";
import NavBar from "../components/nav_bar";
import React from "react";
export default function Home() {
  return (
    <div style={{ margin: 0 }}>
      <Head>
        <title>William Guinaudie</title>
        <meta name="description" content="William Guinaudie Portfolio" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <IndexPageHeader />
      <MyProjectsCover />
      <AboutMeCover />
    </div>
  );
}
