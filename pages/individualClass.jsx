import React from "react";
import HeaderWeb from "../components/HeaderWeb";
import BottomNav from "../components/BottomNav";
import IndividualClass from "../modules/IndividualClass";

export default function individualClass() {
  return (
    <div>
      <div>
        <HeaderWeb />
        <div className="pb-[10rem]">
          {/* <MyClasses /> */}
          <div className="p-4 px-8">
            <IndividualClass />
          </div>

          <div className="md:hidden xl:hidden">
            <BottomNav />
          </div>
        </div>
      </div>
    </div>
  );
}
