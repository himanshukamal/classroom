import React from "react";
import { Input, Button } from "@nextui-org/react";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { fonts } from "../pages/_app";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Signin() {
  const router = useRouter();
  const toast = useToast();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      // Check if the password matches a predefined value (you can change this)
      if (values.password === "himanshu'sassignment") {
        // Store the email in localStorage (you may want to use a more secure approach for production)
        localStorage.setItem("email", values.email);

        // Redirect to the home page

        // Show a success toast
        toast({
          title: "Login Successful",
          position: "top",
          description: "You have successfully logged in.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        router.push("/home");
      } else {
        // Show an error toast
        console.log("password incorrect");
        toast({
          title: "Login Failed",
          position: "top",
          description: "Invalid email or password.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    },
  });

  const handleLogin = () => {
    // Define the validation schema for the form
    // Initialize Formik
    // router.push("/home");
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
      <div className="flex flex-col w-full  xl:w-[50%] h-screen">
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
          {/* <Input
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
            label="Password"
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
          </Button> */}
          <form onSubmit={formik.handleSubmit}>
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
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-600">{formik.errors.email}</div>
            )}
            <Input
              type="password"
              label="Password"
              placeholder="Enter your password"
              className="mt-4"
              style={jostFontStyle}
              variant={"bordered"}
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-600">{formik.errors.password}</div>
            )}
            <Button
              color="danger"
              className="mt-4 w-full font-medium text-[18px]"
              type="submit"
              style={jostFontStyle}
            >
              Sign In
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
