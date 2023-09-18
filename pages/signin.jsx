import React from "react";
import { Input, Button } from "@nextui-org/react";
import { useRouter } from "next/router";
import { fonts } from "../pages/_app";

export default function signin() {
  const router = useRouter();
  const handleLogin = () => {
    router.push("/home");
  };
  const jostFontStyle = {
    fontFamily: fonts.jost, // Use the "jost" font from the fonts object
  };

  const lightBackgroundStyle = {
    backgroundColor: "#ffffff", // Set to your desired light color
  };

  return (
    <div className="flex flex-col xl:flex-row">
      {/* First half (hidden on mobile) */}
      <div className="hidden xl:flex w-[50%] bg-gradient-to-b from-[#FF3059] to-white">
        {/* Your background image code here */}
      </div>

      {/* Second half */}
      <div className="flex flex-col w-full bg-white xl:w-[50%] h-screen">
        <div className="mx-auto my-auto h-[400px] w-4/5">
          <p
            className="text-center font-bold text-[#FF3059] text-[24px]"
            style={jostFontStyle}
          >
            Classroom
          </p>
          <p
            className="text-center text-[32px] text-[#000000] font-regular"
            style={jostFontStyle}
          >
            Login
          </p>
          <Input
            type="email"
            label="Email"
            placeholder="Enter your email"
            className={{
              backgroundColor: "#F1F1F1",
            }}
            style={jostFontStyle}
            variant={"bordered"}
            labelPlacement="inside"
          />
          <Input
            type="password"
            label="password"
            placeholder="Enter your password"
            className="mt-4"
            style={jostFontStyle}
            variant={"bordered"}
          />
          <Button
            color="danger"
            className="mt-4 w-full font-medium text-[18px]"
            onClick={handleLogin}
            style={jostFontStyle}
          >
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
}
