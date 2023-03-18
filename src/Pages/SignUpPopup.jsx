import React from "react";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/user.context";
import { ImSpinner2 } from "react-icons/im";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import Swal from "sweetalert2";
import { grey } from "@mui/material/colors";
import { Form } from "semantic-ui-react";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green } from "@mui/material/colors";

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

const SignUpPopup = ({ window, open, toggleDrawer1 }) => {
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const navigate = useNavigate();
  const location = useLocation();

  const [isLoading, setIsLoading] = useState(false);
  // As explained in the Login page.
  const { emailPasswordSignup } = useContext(UserContext);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // As explained in the Login page.
  const onFormInputChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  // As explained in the Login page.
  const redirectNow = () => {
    const redirectTo = location.search.replace("?redirectTo=", "");
    navigate(redirectTo ? redirectTo : "/add");
  };

  const resetHandle = (event) => {
    event.preventDefault();
    setForm({
      email: "",
      password: "",
    });
  };
  // As explained in the Login page.
  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const user = await emailPasswordSignup(form.email, form.password);
      if (user) {
        setIsLoading(false);
        Swal.fire({
          toast: true,
          icon: "success",
          title: "Success!",
          position: "top",
          showConfirmButton: false,
          timer: 1500,
        });
        setForm({
          email: "",
          password: "",
        });
      }
    } catch (error) {
      if (error.statusCode === 400) {
        Swal.fire({
          toast: true,
          icon: "error",
          title: "Invalid Name or Password!",
          position: "top",
          showConfirmButton: false,
          timer: 3000,
          width: "350px",
        });
      } else if (error.statusCode === 409) {
        Swal.fire({
          toast: true,
          icon: "error",
          title: "Already Taken!",
          position: "top",
          showConfirmButton: false,
          timer: 3000,
          width: "350px",
        });
      }
      setIsLoading(false);
    }
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
        onClose={toggleDrawer1(false)}
        onOpen={toggleDrawer1(true)}
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
            Registration For New Admin
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
            {" "}
            <div className=" lg:pt-14  pt-10">
              <Form
                className="card-body contact_1 drop-shadow-2xl"
                onSubmit={onSubmit}
              >
                <div className=" gap-4 justify-center flex flex-wrap md:flex md:flex-wrap md:justify-center lg:flex lg:flex-wrap  lg:justify-center px-1 ">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white">E-Mail</span>
                    </label>
                    <input
                      label="Email"
                      type="email"
                      variant="outlined"
                      name="email"
                      autoComplete="email"
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                      value={form.email}
                      onChange={onFormInputChange}
                      placeholder="Admin E-mail Address"
                      className="input input-bordered bg-white text-green-900"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white">Password</span>
                    </label>
                    <input
                      label="Password"
                      type="password"
                      variant="outlined"
                      name="password"
                      autoComplete="current-password"
                      value={form.password}
                      onChange={onFormInputChange}
                      placeholder="password"
                      className="input input-bordered bg-white text-green-900"
                      required
                    />
                  </div>
                  <div className="form-control mt-9 lg:mt-9  flex-row">
                    <button
                      variant={"contained"}
                      className={`btn btn-primary ${
                        isLoading && "btn-disabled"
                      } mr-2`}
                    >
                      {isLoading ? (
                        <ImSpinner2 className="animate-spin" />
                      ) : (
                        "SignUp" 
                      )}
                    </button>

                    <button className="btn btn-primary" onClick={resetHandle}>
                      Cancel
                    </button>
                  </div>
                </div>
              </Form>
            </div>
          </StyledBox>
        </StyledBox>
      </SwipeableDrawer>
    </div>
  );
};

export default SignUpPopup;
