import Head from "next/head";
import React from "react";
import Header from "../components/header";

import NavBar from "../components/nav_bar";
import Section from "../components/section";
import main_img from "../public/assets/main_img/main_img";
import Timeline from "../components/about-me/timeline";
import MoreInformation from "../components/about-me/more_information";
const AboutMe = () => {
  return (
    <div>
      <Head>
        <title>William Guinaudie: About Me</title>
        <meta name="description" content="William Guinaudie: About Me" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Header
        title={"WHO AM I?"}
        image={{ src: main_img.me_back, width: 657, height: 506 }}
      />
      <Section title={"More Information"} Component={MoreInformation} />
      <Section title={"Timeline"} Component={Timeline} />   
    </div>
  );
};

export default AboutMe;
