import React from "react";
import { motion } from "framer-motion";
import {
  ProjectCard,
  TechnologiesSection,
  ProjectPage,
  Technology,
  TitleSection,
  Github,
  GithubLink,
} from "./card_styles";
import { Carousel } from '@mantine/carousel';
import { Card, Image } from '@mantine/core';

import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import technologies from "../../../public/assets/technologies/logo_full";
import { Chip } from "@material-ui/core";
import { blue, green, orange, red } from "@material-ui/core/colors";

function ProjectTab({ items }) {
  return (
    <motion.div
      intial={{ opacity: 0 }}
      animate={{ opacity: [0, 0, 1] }}
      transition={{ times: [0, 0.5, 1.1], ease: "easeInOut" }}
      style={{marginTop:'30px'}}
    >
      <Carousel    
       withIndicators
       withControls={false}
      height={550}
     slideSize='45%'
      slideGap="xl"
      align="start">    
        {items.map((item, index) => (
          <Carousel.Slide key={index} style={{borderRadius:'40px'}}>
        <Card>
          <Card.Section>
            <Image alt={item.image.name}height={300} src={item.image.image.src} />
          </Card.Section>
        </Card>
          </Carousel.Slide>
        ))}
      </Carousel>
    </motion.div>
  );
}

export default ProjectTab;

// <CardActionArea
// href={item.link}
// target="_blank"
// style={{ textDecoration: "none",  width:'100%' }}
// >
// <CardMedia
//   component="img"
//   alt={item.image.name}
//   height="280"
//   image={item.image.image.src}
//   title={item.image.name}
 
  
// />

// <CardContent
//   style={{
//   height: "200px",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "space-between",
//     backgroundColor:'whitesmoke'
//   }}
// >
//   <TitleSection>
//     <Typography gutterBottom variant="h5" component="h2">
//       {item.title}
//       {item.github && (
//         <GithubLink href={item.github} target="_blank">
//           <Github src={technologies.github.image.src} />
//         </GithubLink>
//       )}
//     </Typography>
//   </TitleSection>

//   <Typography
//     variant="body2"
//     color="textSecondary"
//     component="p"
//     style={{}}
//   >
//     {item.subTitle}
//   </Typography>
//   <TechnologiesSection>
//     {item.technologies.map((technology, index) => {

//     return  <Technology
//         key={index}
//         title={technology.name}
//         src={technology.image.src}
//       />
//     }
//     )}
//   </TechnologiesSection>

//   <Chip
//     label={item.status}
//     style={{
//       marginTop: 20,
//       color: "white",
//       backgroundColor:
//         item.statusCode === 1
//           ? blue["700"]
//           : item.statusCode === 2
//           ? orange["700"]
//           : item.statusCode === 3
//           ? red["700"]
//           : green["700"],
//     }}
//   />
// </CardContent>
// </CardActionArea>