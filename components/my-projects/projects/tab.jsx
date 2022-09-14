import React from "react";
import { motion } from "framer-motion";
import {
  ProjectCard,
  TechnologiesSection,
  ProjectPage,
  Technology,
  TitleSection,
} from "./card_styles";
import { Carousel } from '@mantine/carousel';
import { Card, Divider, Button, Image ,Group,Title,ActionIcon} from '@mantine/core';
import { useHover } from '@mantine/hooks';
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import technologies from "../../../public/assets/technologies/logo_full";
import { Chip } from "@material-ui/core";
import { blue, green, orange, red } from "@material-ui/core/colors";
import {isMobile} from 'react-device-detect';
function ProjectTab({ items }) {

  return (
    <motion.div
      intial={{ opacity: 0 }}
      animate={{ opacity: [0, 0, 1] }}
      transition={{ times: [0, 0.5, 1.1], ease: "easeInOut" }}
      style={{marginLeft:isMobile?'5%':0, marginTop:'30px'}}
      
    >
      <Carousel    
       withControls
      height={isMobile?730:580}
     slideSize={isMobile?'93%': '45%'}
      slideGap="xl"
      align="start">    
        {items.map((item, index) => {
            const {hovered, ref}=useHover()
          return(
          <Carousel.Slide key={index} style={{borderRadius:'40px'}}>
        <Card radius={'lg'} shadow='xl' withBorder style={hovered && item.link?{transform: "scale(0.98)",transitionDuration:'0.5s'}:{transform: "scale(1)",transitionDuration:'0.5s'}}  >
          <Card.Section ref={ref}>
            <a href={item.link} target="_blank" rel="noreferrer">
              
            <Image  alt={item.image.name}height={300} src={item.image.image.src} />
            </a>
          </Card.Section>
          <div style={{display:'flex', flexDirection:'column', minHeight:isMobile? '340px':0, justifyContent:'space-around'}}>
          
          <div>

          <Group align='center' style={{marginTop:10}}>
            <Title order={3} >
              {item.title}
            </Title>
           {item.github &&

           <ActionIcon    href={item.github}  target="_blank" >
            <Image src={"/assets/socials/github_white.svg"}   height={20} width={20} />
            </ActionIcon>
           } 
          </Group >
          <Title order={5} style={{marginTop:5}}>
            
            {item.subTitle}
            </Title>
            <Divider style={{marginTop:5}} size={'md'}/>
          </div>
            <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-around', height:'100%'}}>
            <Group align={'center'} position='center' spacing={'xl'} style={{padding:10,marginTop:10, marginRight:isMobile?0:-15,marginLeft:isMobile?0:-15, backgroundColor:'snow',width:'fit-content', borderRadius:10}} >
            {item.technologies.map((technology, index) => 
            <Image
                    key={index}
                    alt={technology.name}
                    src={technology.image.src}
                    width={40}
                    fit="contain" 
                  />
            )}  
            </Group>
            
            <Button
              radius={'md'}
              style={{
                marginTop: 20,
                color: "white",
                width:'100%',
                backgroundColor:
                  item.statusCode === 1
                    ? blue["800"]
                    : item.statusCode === 2
                    ? orange["800"]
                    : item.statusCode === 3
                    ? red["800"]
                    : green["800"],
              }}
            >
              {item.status}
            </Button>

            </div>
          </div>
         
        </Card>
          </Carousel.Slide>
        )})}
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