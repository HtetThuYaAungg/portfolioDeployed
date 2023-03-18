import React, { useContext, useEffect, useState } from "react";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Fab,
  Tooltip,
  Typography,
} from "@mui/material";
import { UserContext } from "../contexts/user.context";
import { Link, redirect, useNavigate } from "react-router-dom";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import AddCardIcon from "@mui/icons-material/AddCard";
import LockIcon from "@mui/icons-material/Lock";
import NavigationIcon from "@mui/icons-material/Navigation";
import EditIcon from "@mui/icons-material/Edit";
import { green, red } from "@mui/material/colors";
import { color, Stack } from "@mui/system";
import AddPopup from "./AddPopup";
import axios from "axios";
import Swal from "sweetalert2";
import SignUpPopup from "./SignUpPopup";

const AddProject = (props) => {
  const { window } = props;

  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);

  const [data, setData] = useState([]);

  const getProjectData = async () => {
    const res = await axios.get("http://localhost:8005/getdata", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.data.status === 401 || !res.data) {
      console.log("error");
    } else {
      setData(res.data.getProject);
    }
  };

  useEffect(() => {
    getProjectData();
  }, [data]);

  const delProject = async (id) => {
    const res = await axios.delete(`http://localhost:8005/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.data.status === 401 || !res.data) {
      Swal.fire({
        toast: true,
        icon: "error",
        title: "Ooops!",
        position: "top",
        showConfirmButton: false,
        timer: 1500,
        text: error.text,
      });
    } else {
      Swal.fire({
        toast: true,
        icon: "success",
        title: "Deleted!",
        position: "top",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const toggleDrawer1 = (newOpen) => () => {
    setOpen1(newOpen);
  };

  const navigate = useNavigate();

  const { logOutUser } = useContext(UserContext);

  const logOut = async () => {
    try {
      // Calling the logOutUser function from the user context.
      const loggedOut = await logOutUser();
      localStorage.clear();
      // Now we will refresh the page, and the user will be logged out and
      // redirected to the login page because of the <PrivateRoute /> component.
    } catch (error) {
      alert(error);
    }
    navigate("/");
  };

  return (
    <div className="ADDPROJECT">
      <div className="py-2 gap-4 justify-center flex flex-wrap md:flex md:flex-wrap md:justify-center lg:flex lg:flex-wrap  lg:justify-center px-1">
        <Tooltip title="Log Out" placement="top" arrow sx={{ marginRight: 2 }}>
          <Fab aria-label="add" onClick={logOut}>
            <LockIcon sx={{ color: green[900] }} />
          </Fab>
        </Tooltip>

        <Tooltip
          title="Admin Registration"
          placement="top"
          arrow
          sx={{ marginRight: 2 }}
        >
          <Fab aria-label="add" onClick={toggleDrawer1(true)}>
            <SupervisorAccountIcon sx={{ color: green[900] }} />
          </Fab>
        </Tooltip>

        <Tooltip
          title="Add New Project"
          placement="top"
          arrow
          sx={{ marginRight: 2 }}
        >
          <Fab aria-label="add" onClick={toggleDrawer(true)}>
            <AddCardIcon sx={{ color: green[900] }} />
          </Fab>
        </Tooltip>
      </div>
      <div className="py-2 md:flex md:flex-wrap md:justify-center gap-5 lg:flex lg:flex-wrap  lg:justify-center px-1">
        {data?.length > 0
          ? data.map((data) => {
              return (
                <Card
                  key={data._id}
                  sx={{ width: 345, maxHeight: 250, marginBottom: 2 }}
                >
                  <CardMedia
                    sx={{ height: 140 }}
                    image={data.imgpath} 
                    title="green iguana"
                  />

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {data.title}
                    </Typography>
                    <CardActions>
                      <Button size="small" href={data.demo}>
                        Demo
                      </Button>
                      <Button size="small" href={data.code}>
                        SourceCode
                      </Button>
                      <Button size="small" sx={{ color: "Purple" }}>
                        Edit
                      </Button>
                      <Button
                        size="small"
                        sx={{ color: "red" }}
                        onClick={() => delProject(data._id)}
                      >
                        Delete
                      </Button>
                    </CardActions>
                  </CardContent>
                </Card>
              );
            })
          : ""}
      </div>
      <SignUpPopup
        window={window}
        open={open1}
        setOpen={setOpen1}
        toggleDrawer1={toggleDrawer1}
      />
      <AddPopup
        window={window}
        open={open}
        setOpen={setOpen}
        toggleDrawer={toggleDrawer}
      />
      <div className=" float-right pr-4 relative"></div>
    </div>
  );
};

export default AddProject;
