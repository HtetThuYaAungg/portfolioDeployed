import React, { useState } from "react";
import Radial from "../components/Radial";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import TabsPopup from "./TabsPopup";
import RadialPopup from "./RadialPopup";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Tab } from "@mui/material";
import StepList from "../components/StepList";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green, orange } from "@mui/material/colors";
import Training from "../components/Training";

const drawerBleeding = 56;

const Root = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor:
    theme.palette.mode === "light"
      ? grey[100]
      : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "white" : grey[900],
  padding: "0%",
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? grey[400] : grey[900],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
}));

const outerTheme = createTheme({
  palette: {
    primary: {
      main: green[900],
    },
  },
});

const Popup = ({ window, open, setOpen, toggleDrawer }) => {
  const today = new Date();
  // This is used only for the example
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(60% - ${drawerBleeding}px)`,
            overflow: "visible",
          },
        }}
      />

      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: "absolute",
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: "visible",
            right: 0,
            left: 0,
            height: "60px",
          }}
        >
          <Puller />
          <TabContext value={value}>
            <Typography
              className=" justify-center flex space-x-7"
              sx={{ p: 2, color: "text.secondary" }}
            >
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <ThemeProvider theme={outerTheme}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                    sx={{ color: "white" }}
                  >
                    <Tab label="Programming" value="1" />
                    <Tab label="Languages" value="2" />
                    <Tab label="Training" value="3" />
                  </TabList>
                </ThemeProvider>
              </Box>
            </Typography>

            <StyledBox
              sx={{
                pb: 2,
                height: {
                  xs: "calc(100vh - 300px - 110px)",
                  sm: "calc(100vh - 200px - 10px)",
                  md: "calc(100vh - 200px - 100px)",
                },
                overflow: "auto",
              }}
            >
              <TabPanel className="" value="1">
                <RadialPopup />
              </TabPanel>
              <TabPanel value="2">
                <p className=" mb-6 px-5 font-bold text-green-900 sm:px-20 lg:px-36">
                  Burmese
                </p>
                <StepList
                  activeStep={2}
                  level1={"Beginner"}
                  level2={"Junior"}
                  level3={"Intermediate"}
                  level4={"Pro"}
                />
                <p className=" mb-6 px-5 mt-10 font-bold text-green-900 sm:px-20 lg:px-36">
                  English
                </p>
                <StepList
                  activeStep={1}
                  level1={"Beginner"}
                  level2={"Junior"}
                  level3={"Intermediate"}
                  level4={"Pro"}
                />
                <p className=" mb-6 px-5 mt-10 font-bold text-green-900 sm:px-20 lg:px-36">
                  Japanese
                </p>
                <StepList
                  activeStep={1}
                  level1={"N5"}
                  level2={"N4"}
                  level3={"N3"}
                  level4={"N2"}
                />
              </TabPanel>
              <TabPanel value="3">
                <Training/>
              </TabPanel>
            </StyledBox>
          </TabContext>
          {/* <Typography className=" justify-center flex space-x-7" sx={{ p: 2, color: 'text.secondary' }}><p className='text-green-900 hover:text-green-700'>Skills and Tools &copy; {today.getFullYear()}</p></Typography> */}
        </StyledBox>
      </SwipeableDrawer>
    </div>
  );
};

export default Popup;
