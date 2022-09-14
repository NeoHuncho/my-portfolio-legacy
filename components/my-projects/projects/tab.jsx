import React from "react";
import { motion } from "framer-motion";
import {
  TechnologiesSection,
  ProjectPage,
  Technology,
  TitleSection,
} from "./card_styles";
import { Carousel } from '@mantine/carousel';
import { Card, Divider, Button, Image ,Group,Title,ActionIcon} from '@mantine/core';
import { useHover,useMediaQuery } from '@mantine/hooks';
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import technologies from "../../../public/assets/technologies/logo_full";
import { Chip } from "@material-ui/core";
import { blue, green, orange, red } from "@material-ui/core/colors";




function ProjectTab({ items }) {
const isMobile=  useMediaQuery('(max-width: 500px)');
  return (
    <motion.div
      intial={{ opacity: 0 }}
      animate={{ opacity: [0, 0, 1] }}
      transition={{ times: [0, 0.5, 1.1], ease: "easeInOut" }}
      style={{marginLeft:isMobile?'5%':0, marginTop:'30px'}}
      
    >
    <CarouselComponent items={items} isMobile={isMobile} />
    </motion.div>
  );
}

const ProjectCard=({item})=>{
  const isMobile= useMediaQuery({maxWidth: 500});
  const {hovered, ref}=useHover();

  return(
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
    <Group align={'center'} position='center' spacing={'xl'} style={{padding:10,marginTop:10, backgroundColor:'snow',width:'fit-content', borderRadius:10}} >
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

  )
}

const CarouselComponent = ({ items, isMobile }) => { 
  if(!isMobile)
  return( <Carousel    
  withControls
 height={580}
slideSize={'45%'}
 slideGap={ 'xl'}
 align="start">    
   {items.map((item) =>   
   <Carousel.Slide key={item.title} style={{borderRadius:'40px'}}>
   <ProjectCard item={item} index={item.title}/>
   </Carousel.Slide>      
   
   )}
 </Carousel>)
 else return (
  <Carousel    
  withControls

  height={730}
  slideSize={ '90%'}
   slideGap={'sm'}
   align="start">    
   {items.map((item) =>   
   <Carousel.Slide key={item.title} style={{borderRadius:'40px'}}>
   <ProjectCard item={item} index={item.title}/>
   </Carousel.Slide>      
   
   )}
 </Carousel>
 )

}

export default ProjectTab;


 
