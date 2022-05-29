import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

import {
  Page,
  Title,
  TitleSection,
  LineBottom,
  LineTop,
  StyledButton,
  ImageSection,
  GridHorizontal,
} from "../../styles/styles.js";
import { mediaQueries } from "/styles/mediaQueries.js";
import Image from "next/image";
import Link from "next/link";
import main_img from "../../public/assets/main_img/main_img.js";

const nextLink = () => <Link href="/projects/next-project" />;
const Svg = styled(motion.img)`
  position: relative;

  @media ${mediaQueries.mobile} {
    width: 90vw;
  }
  @media ${mediaQueries.ipadAndIpadPro} {
    width: 90vw;
  }

  @media ${mediaQueries.desktop} {
    width: 45vw;
  }
`;

const ThisImageSection = styled(ImageSection)`
  @media ${mediaQueries.nondesktop} {
    margin-left: 2.5%;
    margin-top: 15%;
    margin-right: 5%;
  }
`;

const ThisTitleSection = styled(TitleSection)`
  @media ${mediaQueries.nondesktop} {
    margin-top: 10%;
    margin-bottom: 10%;
  }
`;

export default function MyProjects() {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <Page style={{ zIndex: 2 }}>
      <GridHorizontal>
        <Link href="/my-projects" passHref>
          <ThisImageSection
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
          >
            <ImageSection
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 5,
                ease: "easeInOut",
                loop: Infinity,
              }}
            >
              <Image
                src={main_img.workspace}
                width={10}
                height={6}
                layout="responsive"
                
              />
            </ImageSection>
          </ThisImageSection>
        </Link>

        <ThisTitleSection
          ref={ref}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Link href="/my-projects" passHref>
            <Title>
              My
              <br /> Projects
            </Title>
          </Link>
          <LineTop style={{ marginTop: "4vh" }} />
          <LineBottom />
          <Link href="/my-projects" passHref>
            <StyledButton variant="contained" size="large" color="primary">
              Show me more!
            </StyledButton>
          </Link>
        </ThisTitleSection>
      </GridHorizontal>
    </Page>
  );
}
