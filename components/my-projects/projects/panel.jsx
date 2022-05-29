import React from "react";
import PropTypes from "prop-types";
import { isMobile } from "react-device-detect";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import projectTabs from "../../../config/my-projects/projects-tabs";
import styled from "styled-components";
import { mediaQueries } from "../../../styles/mediaQueries";
import ProjectTab from "./tab";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const Component = styled.div`
  flex-grow: 1;
  background-color: #f5f5f5;
  width: 90%;
  margin: auto;

  @media ${mediaQueries.desktop} {
    margin-top: 2%;
  }
  @media ${mediaQueries.mobile} {
    margin-top: 12%;
    width: 100%;
  }
`;

export default function ProjectsPanel() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Component style={{ backgroundColor: "rgba(0, 0, 0, 0.00)" }}>
      <Tabs
        variant={isMobile ? "scrollable" : ""}
        value={value}
        onChange={handleChange}
        aria-label="project tabs"
        scrollButtons={isMobile ? "on" : "off"}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        {projectTabs.map((tab, index) => {
          return (
            <Tab
              label={tab.label}
              {...a11yProps(projectTabs.length - index)}
              style={{ color: "white" }}
              key={index}
            />
          );
        })}
      </Tabs>
      {projectTabs.map((tab, index) => {
        return (
          <TabPanel key={index} value={value} index={index}>
            <ProjectTab items={tab.items} />
          </TabPanel>
        );
      })}
    </Component>
  );
}
