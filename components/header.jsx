import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

import {
  FullPage,
  Title,
  FrontPageTitleSection,
  LineBottom,
  LineTop,
  Scrooldown,
  GridHorizontal,
  ImageSection,
} from "../styles/styles";
import { mediaQueries } from "../styles/mediaQueries";

import Image from "next/image";

const ThisTitleSection = styled(motion.div)`
  @media ${mediaQueries.mobile} {
    margin-right: 15%;
    margin-left: 10%;
    margin-top: 30%;
  }
  @media ${mediaQueries.ipadAndIpadPro} {
    margin-bottom: 15%;
    margin-top: 5%;
  }
  margin-left: 4%;
`;

const ThisImageSection = styled(ImageSection)`
  @media ${mediaQueries.mobile} {
    margin-top: 40%;
    margin-left: 4%;
    margin-right: 10%;
  }

  @media ${mediaQueries.ipadAndIpadPro} {
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 20%;
  }
`;

const Svg = styled(motion.img)`
  @media ${mediaQueries.mobile} {
    width: 90vw;
  }
  @media ${mediaQueries.ipadAndIpadPro} {
    width: 80vw;
  }

  @media ${mediaQueries.desktop} {
    width: 45vw;
    margin-left: 4%;
  }
`;
export default function Header({ title, image }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const variantstext = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <FullPage>
      <Scrooldown>
        <Image
          src={"/assets/ui_img/scroll_down_bar.svg"}
          width={250}
          height={450}
        />
      </Scrooldown>
      <GridHorizontal>
        <ThisImageSection
          initial={{ opacity: 0, x: 0 }}
          animate={imageLoaded && { opacity: [0, 0, 2] }}
          transition={
            imageLoaded && { times: [0, 0.6, 1.2], ease: "easeInOut" }
          }
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
              src={image.src}
              alt="Computer"
              width={image.width}
              height={image.height}
              layout="responsive"
              priority={true}
              onLoadingComplete={() => setImageLoaded(true)}
            />
          </motion.div>
        </ThisImageSection>

        <ThisTitleSection
          initial="hidden"
          animate="visible"
          variants={variantstext}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <Title>{title}</Title>
          <LineTop />
          <LineBottom />
        </ThisTitleSection>
      </GridHorizontal>
    </FullPage>
  );
}
