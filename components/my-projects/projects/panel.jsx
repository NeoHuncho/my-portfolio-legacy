import React,{useState,useEffect} from "react";
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
    height:90vh;
  }
  @media ${mediaQueries.mobile} {
    margin-top: 12%;
    width: 100%;
  }
`;

export default function ProjectsPanel() {
  const [activeTab, setActiveTab] = useState(projectTabs[0].label);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  
  useEffect(() => {
    projectTabs.map((tab, index) => {
      if (tab.label === activeTab) {
        setActiveTabIndex(index);
      }
    })
  }, [activeTab])
  
  return (
    <Component style={{ backgroundColor: "rgba(0, 0, 0, 0.00)" }}>
        <Tabs  value={activeTab} onTabChange={setActiveTab} styles={{tabsList:{justifyContent:'center'}}}  defaultValue={activeTab.label}>
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
       
          <Tabs.Panel value={projectTabs[activeTabIndex].label} key={projectTabs[activeTabIndex].label} >
            <ProjectTab items={projectTabs[activeTabIndex].items} />
          </Tabs.Panel>

      
    </Tabs>
    </Component>
  );
}
