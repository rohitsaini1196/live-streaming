import { Tabs, Tab, Box, Typography, Paper } from "@material-ui/core";
import React from "react";

function ProfileTabs({ child1, child2 }) {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div style={{ padding: "0.3rem 0rem" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Previous Posts" style={{ textTransform: "none" }} />
        <Tab label="Scheduled Streams" style={{ textTransform: "none" }} />
      </Tabs>

      <div>
        <TabPanel value={value} index={0}>
          {child1}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {child2}
        </TabPanel>
      </div>
    </div>
  );
}

export default ProfileTabs;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}
