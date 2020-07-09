import {
  AppBar,
  Typography,
  Tabs,
  Tab,
  BottomNavigation,
  BottomNavigationAction,
} from "@material-ui/core";
import { routes } from "../utils/routeData";
import { useState } from "react";
import "../scss/navbar.scss";

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
            {routes.map(({ label, icon, key }) => (
              <BottomNavigationAction icon={icon} key={key} />
            ))}
          </BottomNavigation>
        </div>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          className="navTabs"
        >
          {routes.map(({ label, key }) => (
            <Tab label={label} key={key} />
          ))}
        </Tabs>
      </AppBar>
    </React.Fragment>
  );
};
