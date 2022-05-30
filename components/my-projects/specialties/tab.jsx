import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { mediaQueries } from "../../../styles/mediaQueries";

const Image = styled(motion.img)`
  max-width: 85px;

  @media ${mediaQueries.nondesktop} {
    max-width: 13vh;
    margin-left: auto;
    margin-right: auto;
    display: block;
    margin-bottom: 3vh;
  }
`;

const Grid = styled(motion.div)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

function BackEndTab({ items }) {
  return (
    <Grid
      intial={{ opacity: 0 }}
      animate={{ opacity: [0, 0, 2] }}
      transition={{ times: [0, 0.5, 1.2], ease: "easeInOut" }}
    >
      {items.map((item, index) => (
        <Image key={index} src={item.image.src} alt={item.image.name} />
      ))}
    </Grid>
  );
}

export default BackEndTab;
