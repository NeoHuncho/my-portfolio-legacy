import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import Image from "next/image";
import {
  FullPage,
  Title,
  IndexPageTitleSection,
  LineBottom,
  LineTop,
  Scrooldown,
  GridHorizontal,
  ImageSection,
} from "../../styles/styles.js";
import { mediaQueries } from "../../styles/mediaQueries";

const SubTitle = styled.h2`
  font-family: Roboto;
  font-style: normal;
  font-weight: 100;
  color: #ffffff;

  @media ${mediaQueries.nondesktop} {
    font-size: 6vw;
    line-height: 6vw;
  }

  @media ${mediaQueries.desktop} {
    font-size: 2.5vw;
    line-height: 3vw;
  }
`;

function IndexPageHeader() {
  const variantstext = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <FullPage>
      <Scrooldown>
        <Image
          src={"/assets/ui_img/scroll_down_bar.svg"}
          style={{ zIndex: 1 }}
          width={100}
          height={150}
        />
      </Scrooldown>
      <GridHorizontal>
        <ImageSection
          initial={{ opacity: 0, x: 50, y: -50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 5,
              ease: "easeInOut",
              loop: Infinity,
            }}
          >
            <Image
              src={"/assets/main_img/computer.svg"}
              width={600}
              height={600}
            />
          </motion.div>
        </ImageSection>

        <IndexPageTitleSection
          initial="hidden"
          animate="visible"
          variants={variantstext}
          transition={{ ease: "easeOut", duration: 1.5 }}
        >
          <Title>
            WILLIAM
            <br /> GUINAUDIE
          </Title>
          <LineTop />
          <LineBottom />
          <SubTitle>Full Stack Developer</SubTitle>
        </IndexPageTitleSection>
      </GridHorizontal>
    </FullPage>
  );
}

export default IndexPageHeader;
