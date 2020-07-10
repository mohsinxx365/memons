import {
  AppBar,
  Typography,
  Tabs,
  Tab,
  BottomNavigation,
  BottomNavigationAction,
} from "@material-ui/core";
import styled from "styled-components";
import { routes } from "../utils/routeData";
import { useState } from "react";
import { respondTo } from "../utils/styledUtils";

export default () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newVal) => {
    setValue(newVal);
  };

  return (
    <Container>
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
    </Container>
  );
};

const Container = styled.div`
  .navigation {
    background-color: var(--main);
    box-shadow: var(--shadow);
    flex-direction: row;

    .main-title {
      letter-spacing: 2px;
      font-weight: bold;
    }

    .logo-container {
      display: flex;
      align-items: center;
      flex-grow: 1;
      margin-left: 20px;
      height: 48px;
    }

    .bottomContainer {
      display: block;
      width: 100%;
      position: fixed;
      bottom: 0;
      z-index: 2;
    }

    .navTabs {
      display: none;
    }

    ${respondTo("mdUp")} {
      .bottomContainer {
        display: none;
      }

      .navTabs {
        display: flex;
      }
    }
  }
`;
