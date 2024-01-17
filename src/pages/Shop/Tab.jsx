import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Card from "./Card";
import Category from "/src/pages/Shop/Category";
import { useSelector } from "react-redux";
import JSON_DATA from "/data/data.json";

export default function LabTabs() {
   const [value, setValue] = React.useState("1");
   const [filteredProducts, setFilteredProducts] =
      React.useState(null);

   const chosenCategory = useSelector(
      (state) => state.filterSlice.category
   );
   const priceStart = useSelector(
      (state) => state.filterSlice.priceStart
   );
   const priceEnd = useSelector(
      (state) => state.filterSlice.priceEnd
   );

   const handleChange = (event, newValue) => {
      setValue(newValue);
   };
   function handleFilter() {
      let filtered = JSON_DATA.filter(
         (product) =>
            product.price >= priceStart && product.price <= priceEnd
      );
      if (chosenCategory != "all") {
         filtered = filtered.filter((product) =>
            product.categories.some(
               (category) => category == chosenCategory
            )
         );
      }
      setFilteredProducts(filtered);
   }
   return (
      <div className="mt-10">
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
                           <Tab label="All Plants" value="1" />
                           <Tab label="New Arrivals" value="2" />
                           <Tab label="Sale" value="3" />
                        </TabList>
                     </Box>
                     {/* Category */}
                     <Category handleFilter={handleFilter} />
                  </div>
                  <div>
                     <TabPanel value="1">
                        <Card
                           value={value}
                           filteredProducts={filteredProducts}
                        />
                     </TabPanel>
                     <TabPanel value="2">
                        <Card
                           value={value}
                           filteredProducts={filteredProducts}
                        />
                     </TabPanel>
                     <TabPanel value="3">
                        <Card
                           value={value}
                           filteredProducts={filteredProducts}
                        />
                     </TabPanel>
                  </div>
               </div>
            </TabContext>
         </Box>
      </div>
   );
}
