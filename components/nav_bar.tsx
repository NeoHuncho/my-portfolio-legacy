import React from "react";
import styled from "styled-components";

import { mediaQueries } from "../styles/mediaQueries";

import Link from "next/link";
import Image from "next/image";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export const Navbar = styled.header`
  position: fixed;
  top: 2%;
  left: 2%;
  width: 100%;
  align-items: center;
  color: white;
  font-family: Roboto;
  font-weight: 500;
  z-index: 3;
  @media ${mediaQueries.mobile} {
    margin-left: 3%;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-rows: 100%;
  gap: 0px 0px;
  grid-template-areas: "Home Email Github FCC myProjects aboutMe";
  @media ${mediaQueries.desktop} {
    grid-template-columns: 55% 5% 5% 15% 10% 10%;
  }

  @media ${mediaQueries.ipad} {
    grid-template-columns: 34% 6% 6% 13% 21% 22%;
  }

  @media ${mediaQueries.ipadPro} {
    grid-template-areas: "Home Email Github FCC Menu";
    grid-template-columns: 30% 6% 6% 11% 23% 22%;
  }

  @media ${mediaQueries.mobile} {
    grid-template-areas: "Home Email Github FCC Menu";
    grid-template-columns: 40% 12% 12% 17% 0%;
  }
`;

export const StyledLink = styled.a`
  text-decoration: "none";

  &:hover {
    text-decoration: none;
  }
`;

export const NavBarItem = styled.div`
  color: white !important;
  @media ${mediaQueries.mobile} {
    margin-right: auto;
    font-size: 5vw;
  }

  @media ${mediaQueries.ipad} {
    margin-right: auto;
    font-size: 150%;
    padding: 12px 16px;
  }

  @media ${mediaQueries.ipadPro} {
    padding: 16px 16px;
    font-size: 225%;
    vertical-align: middle;
    margin-right: auto;
  }

  @media ${mediaQueries.desktop} {
    cursor: pointer;
    font-size: 125%;
  }
`;
export const TitleItem = styled(NavBarItem)`
  grid-area: Home;
  text-decoration: "none";
  color: "white";

  @media ${mediaQueries.ipadAndIpadPro} {
    margin-right: auto;
    font-size: 100%;
    padding: 12px 16px;
  }

  @media ${mediaQueries.desktop} {
    margin-right: auto;
    font-size: 130%;
  }
`;

export const NotMobileLink = styled(NavBarItem)`
  text-decoration: "none";
  color: "white";

  @media ${mediaQueries.mobile} {
    display: none;
  }
`;
export const Email = styled.a`
  height: auto;
  grid-area: Email;
  @media ${mediaQueries.mobile} {
    width: 6vw;
  }

  @media ${mediaQueries.ipad} {
    width: 4vw;
  }

  @media ${mediaQueries.ipadPro} {
    width: 3.5vw;
  }

  @media ${mediaQueries.desktop} {
    width: 1.7vw;
  }
`;

export const FCC = styled.a`
  height: auto;
  grid-area: FCC;
  @media ${mediaQueries.mobile} {
    width: 8vw;
  }

  @media ${mediaQueries.ipad} {
    width: 5.5vw;
  }

  @media ${mediaQueries.ipadPro} {
    width: 5vw;
  }

  @media ${mediaQueries.desktop} {
    width: 2.5vw;
  }
`;

export const Github = styled.a`
  height: auto;
  grid-area: Github;
  @media ${mediaQueries.mobile} {
    width: 6vw;
  }

  @media ${mediaQueries.ipad} {
    width: 4vw;
  }

  @media ${mediaQueries.ipadPro} {
    width: 3.5vw;
  }

  @media ${mediaQueries.desktop} {
    width: 2vw;
  }
`;

export const HamburgerMobile = styled.a`
  @media ${mediaQueries.mobile} {
    width: 8vw;
    grid-area: Menu;
  }

  @media ${mediaQueries.nonmobile} {
    display: none;
    width: 0px;
    height: 0px;
  }
`;
//for menu dropdown on mobile
export const ThisMenu = styled(Menu)`
  @media ${mediaQueries.desktop} {
    display: none;
  }

  @media ${mediaQueries.ipadAndIpadPro} {
    display: none;
  }

  @media ${mediaQueries.mobile} {
    margin-top: 7%;
  }
`;
//for menu dropdown on mobile
export const ThisMenuItem = styled(MenuItem)`
  color: black !important;
  @media ${mediaQueries.desktop} {
    display: none;
  }

  @media ${mediaQueries.ipadAndIpadPro} {
    display: none;
  }
`;

export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Navbar>
      <Grid>
        <TitleItem>
          <Link href="/">
            <NavBarItem> W.G</NavBarItem>
          </Link>
        </TitleItem>

        <NavBarItem>
          <Email
            href="mailto: william.guinaudie@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image height={22} width={22} src={"/assets/socials/email.png"} />
          </Email>
        </NavBarItem>

        <NavBarItem>
          <Github
            href="https://github.com/NeoHuncho"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              src={"/assets/socials/github_white.svg"}
              alt="Github link"
              height={22}
              width={22}
            />
          </Github>
        </NavBarItem>
        <NavBarItem>
          <FCC
            href="https://www.freecodecamp.org/neohuncho"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              src={"/assets/socials/fcc.png"}
              alt="Free Code Camp link"
              height={22}
              width={30}
            />
          </FCC>
        </NavBarItem>
        <HamburgerMobile
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <Image
            src={"/assets/ui_img/hamburger.svg"}
            alt="menu"
            width={23}
            height={23}
          />
        </HamburgerMobile>
        <ThisMenu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <Link href="/">
            <ThisMenuItem onClick={handleClose}>Home</ThisMenuItem>
          </Link>
          <Link href="/my-projects">
            <ThisMenuItem
              style={{ gridArea: "myProjects" }}
              onClick={handleClose}
            >
              My Projects
            </ThisMenuItem>
          </Link>
          <Link href="/about-me">
            <ThisMenuItem style={{ gridArea: "aboutMe" }} onClick={handleClose}>
              About Me
            </ThisMenuItem>
          </Link>
        </ThisMenu>

        <Link href="/my-projects">
          <NotMobileLink>My Projects</NotMobileLink>
        </Link>
        <Link href="/about-me">
          <NotMobileLink>About Me</NotMobileLink>
        </Link>
      </Grid>
    </Navbar>
  );
}
