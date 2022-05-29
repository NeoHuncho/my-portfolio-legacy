import React from "react";
import PropTypes from "prop-types";
//import { makeStyles } from '@material-ui/core/styles';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

//import { motion } from "framer-motion";

import styled from "styled-components";
import { mediaQueries } from "../../../styles/mediaQueries";
import specialtiesTabs from "../../../config/my-projects/specialties-tabs";
import SpecialtyTab from "./tab";
//import { mediaQueries } from '../../../styling/mediaQueries';

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
  width: 80%;
  margin: auto;

  @media ${mediaQueries.desktop} {
    margin-top: 7%;
    height: 13vw;
  }
  @media ${mediaQueries.ipadAndIpadPro} {
    margin-top: 7%;
    height: 20vw;
  }
  @media ${mediaQueries.mobile} {
    margin-top: 12%;
    height: 70vh;
    width: 90%;
  }
`;

export default function SpecialtiesComponent() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Component>
      <Tabs
        orientation="horizontal"
        variant="scrollable"
        scrollButtons="on"
        value={value}
        onChange={handleChange}
        aria-label="Horizontal tabs example"
      >
        {specialtiesTabs.map((tab, index) => {
          return (
            <Tab
              label={tab.label}
              {...a11yProps(specialtiesTabs.length - index)}
              style={{ color: "black" }}
              key={index}
            />
          );
        })}
      </Tabs>
      {specialtiesTabs.map((tab, index) => {
        return (
          <TabPanel value={value} index={index} key={index}>
            <SpecialtyTab items={tab.items} />
          </TabPanel>
        );
      })}
    </Component>
  );
}
