import {
  AppBar,
  Typography,
  Tabs,
  Tab,
  BottomNavigation,
  BottomNavigationAction,
} from "@material-ui/core";
import "../scss/navbar.scss";
import { routes } from "../utils/routeData";
import { useState } from "react";

export default () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newVal) => {
    setValue(newVal);
  };

  return (
    <React.Fragment>
      <AppBar className="navigation">
        <div className="logo-container">
          <Typography className="main-title">MOHSIN MEMON</Typography>
        </div>
        <div className="bottomContainer">
          <BottomNavigation value={value} showLabels onChange={handleChange}>
            {routes.map(({ label, icon }) => (
              <BottomNavigationAction icon={icon} />
            ))}
          </BottomNavigation>
        </div>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          className="navTabs"
        >
          {routes.map(({ label }) => (
            <Tab label={label} />
          ))}
        </Tabs>
      </AppBar>
    </React.Fragment>
  );
};
