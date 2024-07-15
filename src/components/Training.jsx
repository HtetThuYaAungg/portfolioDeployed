import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import { green } from "@mui/material/colors";
import { Typography } from "@mui/material";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import JavascriptIcon from "@mui/icons-material/Javascript";

const Training = () => {
  const text = {
    color: green[900],
  };

  return (
    <div>
      <div className="py-2 flex flex-wrap md:flex md:flex-wrap  md:gap-4 lg:flex lg:flex-wrap lg:gap-6  px-3 ">
        <List sx={{ width: "100%", maxWidth: 360 }}>
          <ListItem>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: "blue" }}>
                <JavascriptIcon />
              </Avatar>
            </ListItemAvatar>

            <ListItemText
              primary={
                <Typography variant="h7" style={{ color: "blue" }}>
                  React JS
                </Typography>
              }
              secondary="Full Course"
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: "red" }}>
                <ManageAccountsIcon />
              </Avatar>
            </ListItemAvatar>

            <ListItemText
              primary={
                <Typography variant="h7" style={{ color: "red" }}>
                  System Adminstration
                </Typography>
              }
              secondary="Fundamentals"
            />
          </ListItem>

          <ListItem>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: " #dd4814" }}>
                <WorkspacePremiumIcon />
              </Avatar>
            </ListItemAvatar>

            <ListItemText
              primary={
                <Typography variant="h7" style={{ color: " #dd4814" }}>
                  Linux
                </Typography>
              }
              secondary="Ubuntu"
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: "green" }}>
                <WorkIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="h7" style={{ color: "green" }}>
                  Microsoft Excel
                </Typography>
              }
              secondary="Advanced"
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: "purple" }}>
                <BeachAccessIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="h7" style={{ color: "purple" }}>
                  VarCamp(Mub)
                </Typography>
              }
              secondary="Volunteer "
            />
          </ListItem>
        </List>
      </div>
    </div>
  );
};

export default Training;
