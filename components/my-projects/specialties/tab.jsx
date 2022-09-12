import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { mediaQueries } from "../../../styles/mediaQueries";
import {isMobile} from 'react-device-detect';
const Image = styled(motion.img)`
  max-width: 85px;
  height: fit-content;

 
`;

const Grid = styled(motion.div)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background-color: whitesmoke;
  padding:10px;
 
`;

function BackEndTab({ items }) {
  return (
    <Grid
      intial={{ opacity: 0 }}
      animate={{ opacity: [0, 0, 2] }}
      transition={{ times: [0, 0.5, 1.2], ease: "easeInOut" }}
      style={{gap:isMobile?'20px':'0px', marginTop:isMobile?'30px':'0px', alignItems:'center', minHeight:isMobile?'230px':'0px'}}
    >
      {items.map((item, index) => (
        <Image key={index} src={item.image.src} alt={item.image.name} />
      ))}
    </Grid>
  );
}

export default BackEndTab;
