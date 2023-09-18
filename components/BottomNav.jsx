import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Image from "next/image";
import AutoAwesomeSharpIcon from "@mui/icons-material/AutoAwesomeSharp";
import AddBoxSharpIcon from "@mui/icons-material/AddBoxSharp";
import AutoStoriesSharpIcon from "@mui/icons-material/AutoStoriesSharp";
import GroupsIcon from "@mui/icons-material/Groups";
import { Badge, Avatar } from "@nextui-org/react";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

export default function BottomNav() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#ffffff",
      },
    },
  });

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <div style={{ position: "relative" }}>
        <AppBar
          position="fixed"
          color="primary"
          className="md:hidden xl:hidden"
          style={{ top: "auto", bottom: 0, zIndex: 1000, width: "100%" }}
        >
          <Toolbar style={{ height: "92px" }}>
            {/* <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerOpen}
            >
              <Image
                src="/menuIcon.svg"
                width="42"
                height="42"
                alt="menuIcon"
              />
            </IconButton> */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <div className="flex">
                <IconButton
                  color="inherit"
                  aria-label="icon1"
                  className="flex flex-col items-center text-black hover:text-[#FF3059]"
                  style={{ borderRadius: 3 }}
                >
                  <GroupsIcon className="" />
                  <p className="text-[13.5px]">Groups</p>
                </IconButton>
              </div>
              <div className="flex">
                <IconButton
                  color="inherit"
                  aria-label="icon2"
                  className="flex flex-col items-center text-black hover:text-[#FF3059]"
                  style={{ borderRadius: 3 }}
                >
                  <AutoAwesomeSharpIcon />
                  <p className="text-[13.5px]">Join</p>
                </IconButton>
              </div>
              <div className="flex">
                <IconButton
                  color="inherit"
                  aria-label="icon3"
                  className="flex flex-col items-center text-black hover:text-[#FF3059]"
                  style={{ borderRadius: 3 }}
                >
                  <AddBoxSharpIcon />
                  <p className="text-[13.5px]">Create</p>
                </IconButton>
              </div>
              <div className="flex">
                <IconButton
                  color="inherit"
                  aria-label="resources"
                  className="flex flex-col items-center text-black hover:text-[#FF3059]"
                  style={{ borderRadius: 3 }}
                >
                  <AutoStoriesSharpIcon />
                  <p className="text-[13.5px]">Resources</p>
                </IconButton>
              </div>

              {/* <Badge content="5" color="danger">
                <NotificationsActiveIcon style={{ color: "#FF3059" }} />
              </Badge> */}
            </div>
          </Toolbar>
        </AppBar>

        {/* <Drawer anchor="left" open={open} onClose={handleDrawerClose}>
          <List>
            <ListItem button onClick={handleDrawerClose}>
              <ListItemText primary="Home" />
            </ListItem>
          </List>
        </Drawer> */}
      </div>
    </ThemeProvider>
  );
}
