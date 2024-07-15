import React, { useState } from "react";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Radial from "../components/Radial";
import RadialPopup from "./RadialPopup";



const TabsPopup = () => {

    const [value, setValue] = useState('1');

    const handleChange = (event,newValue) => {
      setValue(newValue);
    };

  return (
    <div>
        <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext  value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Programming" value="1" />
            <Tab label="Languages" value="2" />
            <Tab label="Training" value="3" />
          </TabList>
        </Box>
                  <TabPanel scroll={'paper'} className="" value="1">
                      
             <RadialPopup/>
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
    </div>
  )
}

export default TabsPopup
