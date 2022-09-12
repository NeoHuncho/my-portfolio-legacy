import React from "react";
import PropTypes from "prop-types";
import { isMobile } from "react-device-detect";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import projectTabs from "../../../config/my-projects/projects-tabs";
import styled from "styled-components";
import { mediaQueries } from "../../../styles/mediaQueries";
import ProjectTab from "./tab";
import{ Tabs } from '@mantine/core';

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
        <Tabs styles={{tabsList:{justifyContent:'center'}}}  defaultValue={projectTabs[0].label}>
          <Tabs.List>
          {projectTabs.map((tab, index) => {
          return (
            <Tabs.Tab
              value={tab.label}
              key={index}
            >
              {tab.label}
            </Tabs.Tab>
          );
        })}
          </Tabs.List>

   
      {projectTabs.map((tab, index) => {
        return (
          <Tabs.Panel value={tab.label} key={index} >
            <ProjectTab items={tab.items} />
          </Tabs.Panel>
        );
      })}
    </Tabs>
    </Component>
  );
}
