import React, { useState } from "react";
import { Form, Input, TextArea } from "semantic-ui-react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
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
import { Stack, Tab } from "@mui/material";
import StepList from "../components/StepList";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green, orange } from "@mui/material/colors";
import Training from "../components/Training";
import axios from "axios";

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

const AddPopup = ({ window, open, toggleDrawer }) => {
  const [title, setTitle] = useState("");

  const [image, setImage] = useState("");

  const [demo, setDemo] = useState("");

  const [code, setCode] = useState("");

  const imageFromInputChange = (e) => {
    // console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };

  const resetHandle = (event) => {
    event.preventDefault();
    setImage(""), setDemo(""), setCode(""), setTitle("");
  };
  const addProjectData = async (e) => {
    e.preventDefault();

    var formData = new FormData();
    formData.append("photo", image);
    formData.append("title", title);
    formData.append("demo", demo);
    formData.append("code", code);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const res = await axios.post(
      "http://localhost:8005/project",
      formData,
      config
    );
    console.log(res);
  };

  const today = new Date();
  // This is used only for the example
  const container =
    window !== undefined ? () => window().document.body : undefined;

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
            visibility: "false",
            right: 0,
            left: 0,
            height: "60px",
          }}
        >
          <Puller />

          <Typography
            className="  justify-center flex space-x-7"
            sx={{ p: 2, color: green[900] }}
          >
            Add New Project
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
            <div className=" lg:pt-9 ">
              <Form
                className="contact_1 drop-shadow-2xl"
                onSubmit={addProjectData}
              >
                <div className=" gap-4 justify-center flex flex-wrap md:flex md:flex-wrap md:justify-center lg:flex lg:flex-wrap  lg:justify-center px-1 ">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white">Image</span>
                    </label>
                    <input
                      type="file"
                      id="image"
                      name="image"
                      accept="image/png, image/gif, image/jpeg"
                      onChange={imageFromInputChange}
                      placeholder=""
                      className=" w-64 input input-bordered bg-white text-green-900"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white">Title</span>
                    </label>
                    <input
                      id="title"
                      name="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Title Name..."
                      className=" w-64 input input-bordered bg-white text-green-900"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white">Demo</span>
                    </label>
                    <input
                      id="demo"
                      name="demo"
                      value={demo}
                      onChange={(e) => setDemo(e.target.value)}
                      placeholder="Demo Link..."
                      className=" w-64 input input-bordered bg-white text-green-900"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white">Source Code</span>
                    </label>
                    <input
                      id="source_code"
                      name="code"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      placeholder="Source Code Link..."
                      className=" w-64 input input-bordered  bg-white text-green-900"
                      required
                    />
                  </div>
                </div>
                <div className="form-control justify-center mt-6 flex-row">
                  <Stack spacing={2} direction="row">
                    <button className="btn btn-primary">ADDED</button>
                    <button className="btn btn-primary" onClick={resetHandle}>
                      CANCEL
                    </button>
                  </Stack>
                </div>
              </Form>
            </div>
          </StyledBox>
        </StyledBox>
      </SwipeableDrawer>
    </div>
  );
};

export default AddPopup;
