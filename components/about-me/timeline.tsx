import React from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import styled from "styled-components";

import { PointList, SubPointList } from "../../styles/styles";
import { mediaQueries } from "../../styles/mediaQueries";
import timeline_items from "../../config/about-me/timeline_items";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 0;
`;

export const Timeline = styled.ul`
  width: 90%;
  height: auto;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  list-style: none;

  //this is the line in the center of the timeline      //this is the line in the center of the timeline

  @media ${mediaQueries.mobile} {
    :before {
      content: "";
      position: absolute;
      top: 0;
      left: 2%;
      transform: translateX(-50%);
      width: 2px;
      height: 100%;
      background-color: gray;
    }
  }

  @media ${mediaQueries.nonmobile} {
    :before {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 2px;
      height: 100%;
      background-color: gray;
    }
  }
`;

export const Point = styled.li`
  font-size: 16px;
  line-height: 30px;
  font-weight: 350;
  @media ${mediaQueries.nonmobile} {
    padding-bottom: 3%;
  }
`;

export const SubPoint = styled(Point)`
  font-size: 15px;
  line-height: 22px;
  font-weight: 250;
  @media ${mediaQueries.mobile} {
    line-height: 22px;
    margin-top: 2%;
    margin-bottom: 2%;
  }
`;

export const TimelineContent = styled(motion.li)`
  padding: 20px;
  background-color: #343434;
  color: white;
  border-radius: 10px;
  margin-bottom: 10px;
  :last-child {
    margin-bottom: 0;
  }
  @media ${mediaQueries.nonmobile} {
    width: 50%;
    margin-bottom: 50px;
    position: relative;

    :nth-child(odd) {
      float: left;
      clear: right;
      transform: translateX(-70px);
      border-radius: 20px 0px 20px 20px;
    }

    :nth-child(even) {
      float: right;
      clear: left;
      transform: translateX(30px);
      border-radius: 0px 20px 20px 20px;
    }

    //This is the small button next to each event //This is the small button next to each event
    ::before {
      content: "";
      position: absolute;
      height: 20px;
      width: 20px;
      border-radius: 50%;
      background-color: gray;
      top: 0px;
    }

    :nth-child(odd)::before {
      transform: translate(50%, -50%);
      right: -30px;
    }
    :nth-child(even)::before {
      transform: translate(-50%, -50%);
      left: -30px;
    }

    :hover::before {
      background-color: aqua;
    }
  }
`;

export const Heading = styled.h1`
  font-weight: 500;
  font-size: 25px;
  line-height: 30px;
  margin-bottom: 6%;
`;

export const Date = styled(motion.h3)`
  font-size: 12px;
  font-weight: 300;
  margin-bottom: 10px;
  letter-spacing: 2px;
  @media ${mediaQueries.nonmobile} {
    position: absolute;
    top: -30px;
  }
`;

export default function TimelineComponent() {
  const variantstext = {
    hidden: { opacity: 0 },
  };
  return (
    <Container>
      <Timeline>
        {timeline_items.map((item, index) => (
          <InView key={index} threshold={0.25}>
            {({ ref, inView }) => (
              <TimelineContent
                ref={ref}
                initial={variantstext.hidden}
                animate={{ opacity: inView ? 1 : 0 }}
              >
                <Date>{item.date}</Date>
                <Heading> {item.heading}</Heading>
                <PointList>
                  {item.points.map((point, index) => {
                    if (typeof point === "string")
                      return <Point key={index}>{point}</Point>;
                    else
                      return (
                        <>
                          <Point key={index}>{point[0]} </Point>
                          <SubPointList>
                            {point[1].map((subpoint, index) => {
                              return (
                                <SubPoint key={index}>{subpoint}</SubPoint>
                              );
                            })}
                          </SubPointList>
                        </>
                      );
                  })}
                </PointList>
              </TimelineContent>
            )}
          </InView>
        ))}
      </Timeline>
    </Container>
  );
}
