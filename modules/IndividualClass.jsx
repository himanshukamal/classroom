// import Image from "next/image";
import { Image } from "@nextui-org/react";

import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
} from "@nextui-org/react";
import { fonts } from "../pages/_app";
import { AiOutlineClockCircle } from "react-icons/ai";
import { Divider } from "@nextui-org/react";
import { LiaFacebookMessenger } from "react-icons/lia";

export default function IndividualClass() {
  const jostFontStyle = {
    fontFamily: fonts.jost, // Use the "jost" font from the fonts object
  };

  return (
    <Card className="max-w-[1024px] mx-auto">
      <div className="px-4 pt-2">
        <p className="text-[24px] font-semibold" style={jostFontStyle}>
          History Class
        </p>
        <div className=" pt-[200px] xl:pt-4 xl:w-[1024px]  ">
          <Image
            src="/historyHome.svg"
            // layout="fill"
            width={1024}
            // objectFit="cover"
            className="object-cover"
            alt="history-home"
          />
        </div>
        <div className="flex gap-2 pt-4">
          <AiOutlineClockCircle
            size="18"
            className="text-[#8A8586]"
            style={{ color: "#8A8586" }}
          />
          <h5 className="text-small tracking-tight text-default-400">
            12 Dec 2023
          </h5>
        </div>
        <h6
          className="text-black text-[24px] font-regular"
          style={jostFontStyle}
        >
          Add onboarding in Travel booking app desin.
        </h6>
        <p className="text-black text-[14px] pt-4" style={jostFontStyle}>
          Add onboarding in Travel booking app desin. Travel booking app desin
          Add onboarding desin Add onboarding in Travel in Travel.
        </p>
        <div className="pt-2">
          <Divider className="my-4" />
        </div>
        <div className="flex py-3 justify-between">
          <div className="flex ">
            <Avatar
              src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
              style={{ border: "2px solid #FFEAEE" }}
              radius="lg"
              size="lg"
            />
            <p
              className="tracking-tight text-default-400 self-center pl-4"
              style={jostFontStyle}
            >
              Bianca Rachel
            </p>
          </div>
          <div className="flex self-center">
            {/* Add any additional information or icons here */}
            <LiaFacebookMessenger
              style={{ color: "#8A8586", fontSize: "24px" }}
            />
            <p className="text-default-400 text-medium ml-1">3</p>
          </div>
        </div>
      </div>
    </Card>
  );
}
