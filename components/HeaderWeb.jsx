import React from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import { fonts } from "../pages/_app";
import { Badge } from "@nextui-org/react";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

// import { AcmeLogo } from "./AcmeLogo.jsx";

export default function HeaderWeb() {
  const jostFontStyle = {
    fontFamily: fonts.jost, // Use the "jost" font from the fonts object
  };
  return (
    <Navbar isBordered height="6rem">
      <NavbarBrand>
        {/* <AcmeLogo /> */}
        <p
          className="font-bold text-[#FF3059] text-[24px]"
          style={jostFontStyle}
        >
          Classroom
        </p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        <NavbarItem>
          <Link
            color="foreground"
            href="#"
            style={jostFontStyle}
            className="text-[black] hover:text-[#FF3059]"
          >
            Groups
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="#"
            aria-current="page"
            color="secondary"
            style={jostFontStyle}
            className="text-[black] hover:text-[#FF3059]"
          >
            Create Class
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#"
            style={jostFontStyle}
            className="text-[black] hover:text-[#FF3059]"
          >
            Join Class
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <Badge content="5" color="danger">
          <NotificationsActiveIcon style={{ color: "#FF3059" }} />
        </Badge>
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
