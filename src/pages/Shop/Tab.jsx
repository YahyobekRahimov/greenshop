import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Card from "./Card";
import Category from "/src/pages/Shop/Category";

export default function LabTabs() {
   const [value, setValue] = React.useState("1");
   const [newData, setNewData] = React.useState([]);

   const handleChange = (event, newValue) => {
      setValue(newValue);
   };

   return (
      <div>
         <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
               <div>
                  <div className="flex">
                     <Box
                        sx={{
                           borderBottom: 1,
                           borderColor: "white",
                        }}
                     >
                        <TabList
                           onChange={handleChange}
                           aria-label="lab API tabs example"
                           sx={{
                              "& .Mui-selected": {
                                 font: "36px",
                                 borderBottomStyle: "green",
                                 color: "green",
                                 backgroundColor: "green",
                              },
                              "& .MuiTab-root": {
                                 color: "green",
                                 backgroundColor: "white",
                              },
                           }}
                        >
                           <Tab label="All Planets" value="1" />
                           <Tab label="New Arrivals" value="2" />
                           <Tab label="Sale" value="3" />
                        </TabList>
                     </Box>
                     {/* Category */}
                     <Category />
                  </div>
                  <div>
                     <TabPanel value="1">
                        <Card value={value} />
                     </TabPanel>
                     <TabPanel value="2">
                        <Card value={value} />
                     </TabPanel>
                     <TabPanel value="3">
                        <Card value={value} />
                     </TabPanel>
                  </div>
               </div>
            </TabContext>
         </Box>
      </div>
   );
}
