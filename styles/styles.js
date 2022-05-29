import styled from "styled-components";
import { motion } from "framer-motion";
import Button from "@material-ui/core/Button";
import { mediaQueries } from "./mediaQueries";
import Link from "next/link";
export const GridHorizontal = styled.div`
  @media ${mediaQueries.nondesktop} {
    width: 100vw;
  }

  @media ${mediaQueries.desktop} {
    display: grid;
    grid-template-columns: repeat(2, 50vw);
    grid-template-rows: 100%;
    gap: 0px 0px;
    grid-template-areas: "title image";
    justify-content: center;
    align-items: center;
  }
`;

export const Page = styled.section`
  overflow: hidden;
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  background: radial-gradient(
    50% 98.88% at 50% 50%,
    #16045e 18.23%,
    #0e021e 100%
  );
  @media ${mediaQueries.mobile} {
    height: 90%;
  }
`;

export const FullPage = styled(Page)`
  //for opening pages

  height: 100vh;
`;

export const StyledLink = styled.a`
  &:hover {
    text-decoration: none !important;
  }
`;

export const StyledButton = styled(Button)`
  color: white !important;

  @media ${mediaQueries.ipad} {
    font-size: 3vw !important;
  }

  @media ${mediaQueries.ipadPro} {
    margin-top: 1vh !important;
    font-size: 3vw !important;
  }

  @media ${mediaQueries.desktop} {
    font-size: 1.5vw !important;
  }

  &:hover {
    text-decoration: none;
  }
`;

export const PointList = styled.ul`
  @media ${mediaQueries.nonmobile} {
    padding-left: 8%;
  }
`;

export const SubPointList = styled(PointList)`
  @media ${mediaQueries.nonmobile} {
    padding-left: 12%;
  }
  @media ${mediaQueries.mobile} {
    padding-left: 10%;
  }
`;

export const Scrooldown = styled.div`
  position: fixed;
  z-index: 1;

  @media ${mediaQueries.mobile} {
    height: auto;
    bottom: 0vh;
    right: 3vw;
    width: 14vw;
  }

  @media ${mediaQueries.ipadAndIpadPro} {
    height: auto;
    bottom: 0vh;
    right: 3vw;
    width: 13vw;
  }

  @media ${mediaQueries.desktop} {
    height: auto;
    width: 9vh;
    bottom: 0vh;
    left: 0vw;
  }
`;
/*position:absolute;
top:115vw;
left:8vw;
width:77.5%;*/

export const TitleSection = styled(motion.div)`
  @media ${mediaQueries.mobile} {
    margin-left: 6%;
    width: 77.5%;
    padding-top: 10%;
  }

  @media ${mediaQueries.ipadAndIpadPro} {
    margin-left: 6%;
    width: 68%;
  }

  @media ${mediaQueries.desktop} {
    grid-area: title;
    margin-left: 3vw;
  }
`;
export const IndexPageTitleSection = styled(TitleSection)`
  @media ${mediaQueries.mobile} {
    position: absolute;
    top: 105vw;
    left: 2vw;
    width: 77.5%;
  }
`;

export const Title = styled.h1`
  font-family: Roboto;
  font-weight: 700;
  color: #ffffff;
  font-style: normal;

  @media ${mediaQueries.mobile} {
    font-size: 15vw;
    line-height: 8vh;
  }

  @media ${mediaQueries.ipad} {
    font-size: 13vw;
    line-height: 11vh;
  }

  @media ${mediaQueries.ipadPro} {
    font-size: 13vw;
    line-height: 10vh;
  }

  @media ${mediaQueries.desktop} {
    font-size: 8vw;
    line-height: 8vw;
  }
`;

export const SecondaryTitle = styled(Title)`
  @media ${mediaQueries.desktop} {
    font-size: 6vw;
    line-height: 7vw;
  }
  margin-top: 0px;
`;

export const ImageSection = styled(motion.div)`
  @media ${mediaQueries.mobile} {
    margin-top: 30%;
  }
  @media ${mediaQueries.ipadAndIpadPro} {
    margin-top: 5%;
  }

  @media ${mediaQueries.desktop} {
    grid-area: image;

    margin-right: 5%;
  }
`;

export const LineTop = styled.span`
  background: #cf749c;
  display: block;
  margin-top: 2vh;
  width: 30vw;
  height: 0.26vh;
  border-radius: 5px;

  @media ${mediaQueries.mobile} {
  }

  @media ${mediaQueries.ipad} {
  }

  @media ${mediaQueries.ipadPro} {
  }

  @media ${mediaQueries.desktop} {
    margin-top: 3vh;
    width: 25vw;
  }
`;

export const LineBottom = styled.span`
  background: #cf749c;
  display: block;
  border-radius: 5px;
  height: 0.26vh;
  margin-top: 2vh;
  margin-bottom: 2vh;
  margin-left: 15vw;
  width: 30vw;

  @media ${mediaQueries.mobile} {
  }

  @media ${mediaQueries.ipad} {
  }

  @media ${mediaQueries.ipadPro} {
  }

  @media ${mediaQueries.desktop} {
    margin-top: 3vh;
    width: 25vw;
  }
`;
