import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

import {
  Page,
  Title,
  TitleSection,
  LineBottom,
  LineTop,
  StyledLink,
  StyledButton,
  ImageSection,
  GridHorizontal,
} from "../../styles/styles";
import { mediaQueries } from "../../styles/mediaQueries";

import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";

const ThisImageSection = styled(ImageSection)`
  @media ${mediaQueries.desktop} {
    margin-left: 10vw;
  }

  @media ${mediaQueries.mobile} {
    margin-left: 12%;
    margin-top: 15%;
  }

  @media ${mediaQueries.ipadAndIpadPro} {
    margin-left: 12%;
    margin-top: 10%;
  }
`;

const ThisTitleSection = styled(TitleSection)`
  @media ${mediaQueries.mobile} {
    margin-top: 10%;
    margin-bottom: 10%;
  }

  @media ${mediaQueries.ipadAndIpadPro} {
    margin-bottom: 15%;
  }
`;

function AboutMeCover() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  return (
    <Page style={{ zIndex: 1 }}>
      <GridHorizontal>
        <ThisImageSection
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
        >
          <Link href="/about-me" passHref>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 5,
                ease: "easeInOut",
                loop: Infinity,
              }}
            >
              <Image
                src={"/assets/main_img/astronaut.svg"}
                alt="Computer"
                width={400}
                height={500}
              />
              /
            </motion.div>
          </Link>
        </ThisImageSection>

        <ThisTitleSection
          ref={ref}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Link href="/about-me" passHref>
            <Title>
              {" "}
              About
              <br />
              Me
            </Title>
          </Link>
          <LineTop />
          <LineBottom />
          <Link href="/about-me" passHref>
            <StyledButton variant="contained" size="large" color="primary">
              Show me more!
            </StyledButton>
          </Link>
        </ThisTitleSection>
      </GridHorizontal>
    </Page>
  );
}

export default AboutMeCover;
