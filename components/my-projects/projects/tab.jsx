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

import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import technologies from "../../../public/assets/technologies/logo_full";

function ProjectTab({ items }) {
  console.log(1, technologies.github.image);
  return (
    <motion.div
      intial={{ opacity: 0 }}
      animate={{ opacity: [0, 0, 1] }}
      transition={{ times: [0, 0.5, 1.1], ease: "easeInOut" }}
    >
      <ProjectPage>
        {items.map((item) => (
          <ProjectCard>
            {console.log(item)}
            <CardActionArea
              href={item.link}
              target="_blank"
              style={{ textDecoration: "none", height: "100%" }}
            >
              <CardMedia
                component="img"
                alt={item.image.name}
                height="223"
                image={item.image.image.src}
                title={item.image.name}
              />
              <CardContent
                style={{
                  height: "145px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <TitleSection>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.title}
                    {item.github && (
                      <GithubLink href={item.github} target="_blank">
                        <Github src={technologies.github.image.src} />
                      </GithubLink>
                    )}
                  </Typography>
                </TitleSection>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  style={{ marginTop: -15 }}
                >
                  {item.subTitle}
                </Typography>
                <TechnologiesSection>
                  {item.technologies.map((technology) => (
                    <Technology
                      title={technology.name}
                      src={technology.image.src}
                    />
                  ))}
                </TechnologiesSection>
              </CardContent>
            </CardActionArea>
          </ProjectCard>
        ))}
      </ProjectPage>
    </motion.div>
  );
}

export default ProjectTab;
