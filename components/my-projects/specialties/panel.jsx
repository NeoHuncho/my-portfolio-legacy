import React,{useEffect,useState} from "react";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import{ Tabs } from '@mantine/core';

import styled from "styled-components";
import { mediaQueries } from "../../../styles/mediaQueries";
import specialtiesTabs from "../../../config/my-projects/specialties-tabs";
import SpecialtyTab from "./tab";
import { useSetState } from "@mantine/hooks";
//import { mediaQueries } from '../../../styling/mediaQueries';
import {isMobile} from 'react-device-detect';
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
    height: 23vw;
  }
  @media ${mediaQueries.ipadAndIpadPro} {
    margin-top: 7%;
    height: 40vh;
  }
  @media ${mediaQueries.mobile} {
    margin-top: 12%;
    height: 50vh;
    width: 90%;
  }
`;

export default function SpecialtiesComponent() {
  const [activeTab, setActiveTab] =useState(specialtiesTabs[0].label);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  useEffect(() => {
    specialtiesTabs.map((tab, index) => {
      if (tab.label === activeTab) {
        console.log(tab.label, activeTab,index)
        setActiveTabIndex(index);
      }
    })
  }, [activeTab])
  return (
    <Component style={{ backgroundColor: "rgba(0, 0, 0, 0.00)" }}>
        <Tabs  value={activeTab} onTabChange={setActiveTab} styles={{tabsList:{justifyContent:'center'},tabLabel:{fontSize:'13px'}}}  defaultValue={activeTab.label}>
          <Tabs.List>
          {specialtiesTabs.map((tab, index) => {
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
        <div style={{  backgroundColor: 'whitesmoke',minHeight:isMobile?'230px':'120px'}}>
          <Tabs.Panel  value={specialtiesTabs[activeTabIndex].label} key={specialtiesTabs[activeTabIndex].label} >
            <SpecialtyTab items={specialtiesTabs[activeTabIndex].items} />
          </Tabs.Panel>
        </div>

      
    </Tabs>
    </Component>
  );
  
}

// export default function SpecialtiesComponent() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Component>
//       <Tabs
//         orientation="horizontal"
//         variant="scrollable"
//         scrollButtons="on"
//         value={value}
//         onChange={handleChange}
//         aria-label="Horizontal tabs example"
//       >
//         {specialtiesTabs.map((tab, index) => {
//           return (
//             <Tab
//               label={tab.label}
//               {...a11yProps(specialtiesTabs.length - index)}
//               style={{ color: "black" }}
//               key={index}
//             />
//           );
//         })}
//       </Tabs>
//       {specialtiesTabs.map((tab, index) => {
//         return (
//           <TabPanel value={value} index={index} key={index}>
//             <SpecialtyTab items={tab.items} />
//           </TabPanel>
//         );
//       })}
//     </Component>
//   );
// }
