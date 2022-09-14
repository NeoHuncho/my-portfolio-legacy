import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Carousel } from '@mantine/carousel';

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
const isServer = () => typeof window === 'undefined';
function BackEndTab({ items }) {
  const limit = isMobile?4:9;
  if(items.length< limit || isServer())
  return (
    <Grid
      intial={{ opacity: 0 }}
      animate={{ opacity: [0, 0, 2] }}
      transition={{ times: [0, 0.5, 1.2], ease: "easeInOut" }}
      style={{gap:isMobile?'20px':'0px', marginTop:isMobile?'30px':'0px', alignItems:'center'}}
    >
      {items.map((item, index) => (
        <Image style={{marginTop:isMobile?10:20}} key={index} src={item.image.src} alt={item.image.name} />
      ))}
    </Grid>
  )
  else return(  
    <motion.div  intial={{ opacity: 0 }}
    animate={{ opacity: [0, 0, 2] }}
    transition={{ times: [0, 0.5, 1.2], ease: "easeInOut" }}>

  <Carousel withControls={false} withIndicators  styles={{viewport:{paddingBottom:40},indicators:{bottom:12}, indicator:{backgroundColor:'black'}, container:{alignItems:'center', marginTop:'1%'}}}  slideSize={isMobile?'33%': '11.5%'} slideGap={isMobile?'xl':'sm'} align={'start'}>
  {items.map((item, index) => (
    <Carousel.Slide key={index}>
    <Image style={{marginTop:isMobile?10:0}}key={index} src={item.image.src} alt={item.image.name} />
    </Carousel.Slide>
    ))}
    </Carousel>
    </motion.div>)
}

export default BackEndTab;
