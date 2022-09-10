import React from "react";
import { InView } from "react-intersection-observer";
import { InnerGrid, ImageSection, Paragraph, Svg } from "./styles";
import main_img from "../../public/assets/main_img/main_img";
import information_items from "../../config/about-me/information_items";
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
        <div style={{display:'flex', flexDirection:'column',gap:'10'}}>
        {information_items.map((item, index) => (
          <p key={index}>{item}</p>
          ))}
        </div>
      </Paragraph>
    </InnerGrid>
  );
}
