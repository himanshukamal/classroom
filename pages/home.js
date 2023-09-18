import { Navbar } from "@nextui-org/react";
import React from "react";
import Header from "../components/BottomNav";
import HeaderWeb from "../components/HeaderWeb";
import MyClasses from "../modules/MyClasses";
import BottomNav from "../components/BottomNav";

export default function home() {
  return (
    <div>
      <HeaderWeb />
      <div className="pb-[10rem]">
        <MyClasses />

        <div className="md:hidden xl:hidden">
          <BottomNav />
        </div>
      </div>
    </div>
  );
}
