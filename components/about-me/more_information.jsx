import React from "react";
import { InView } from "react-intersection-observer";
import { InnerGrid, ImageSection, Paragraph, Svg } from "./styles";
import main_img from "../../public/assets/main_img/main_img";
export default function MoreInformation() {
  return (
    <InnerGrid>
      <ImageSection
        initial={{ opacity: 0 }}
        transition={{ ease: "easeOut", duration: 1.25 }}
        animate={{ opacity: InView ? 1 : 0 }}
      >
        <Svg
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            loop: Infinity,
          }}
          src={main_img.me_front.src}
          alt="Computer"
        />
      </ImageSection>
      <Paragraph
        initial={{ opacity: 0 }}
        transition={{ ease: "easeOut", duration: 1.25 }}
        animate={{ opacity: InView ? 1 : 0 }}
      >
        I have a driving license, but I prefer to bike/public transport{" "}
        <span role="img" aria-label="image">
          🚴
        </span>{" "}
        <br /> <br />I live in Lille, France. (Quartier Fives){" "}
        <span role="img" aria-label="image">
          🏠
        </span>{" "}
        <br /> <br />
        Before coding daily, I wanted to become a motion designer. I am
        therefore competent in Adobe After Effect & Illustrator.{" "}
        <span role="img" aria-label="image">
          💻
        </span>{" "}
        <br /> <br />I am a big fan of virtual reality and own an Oculus Quest 2
        right now.{" "}
        <span role="img" aria-label="image">
          🎮
        </span>{" "}
        <br /> <br />I am vegetarian.{" "}
        <span role="img" aria-label="image">
          🥦
        </span>{" "}
        <br /> <br />I am concerned about climate change.{" "}
        <span role="img" aria-label="image">
          🔥
        </span>{" "}
        <br /> <br />I enjoy coding as it allows to learn and improve every day{" "}
        <span role="img" aria-label="image">
          💻
        </span>{" "}
        <br /> <br />
      </Paragraph>
    </InnerGrid>
  );
}
