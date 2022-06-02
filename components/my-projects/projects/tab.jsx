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
import { Chip } from "@material-ui/core";
import { blue, green, orange, red } from "@material-ui/core/colors";

function ProjectTab({ items }) {
  return (
    <motion.div
      intial={{ opacity: 0 }}
      animate={{ opacity: [0, 0, 1] }}
      transition={{ times: [0, 0.5, 1.1], ease: "easeInOut" }}
    >
      <ProjectPage>
        {items.map((item, index) => (
          <ProjectCard key={index}>
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
                  height: "auto",
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
                  style={{}}
                >
                  {item.subTitle}
                </Typography>
                <TechnologiesSection>
                  {item.technologies.map((technology, index) => (
                    <Technology
                      key={index}
                      title={technology.name}
                      src={technology.image.src}
                    />
                  ))}
                </TechnologiesSection>

                <Chip
                  label={item.status}
                  style={{
                    marginTop: 20,
                    color: "white",
                    backgroundColor:
                      item.statusCode === 1
                        ? blue["900"]
                        : item.statusCode === 2
                        ? orange["900"]
                        : item.statusCode === 3
                        ? red["900"]
                        : green["900"],
                  }}
                />
              </CardContent>
            </CardActionArea>
          </ProjectCard>
        ))}
      </ProjectPage>
    </motion.div>
  );
}

export default ProjectTab;
