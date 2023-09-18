import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
  ButtonGroup,
  AvatarGroup,
  Modal,
  ModalContent,
  ModalFooter,
  Input,
  useDisclosure,
  Link,
} from "@nextui-org/react";
import { ModalHeader, ModalBody } from "@nextui-org/react";
import { fonts } from "../pages/_app";
import { AiOutlineClockCircle } from "react-icons/ai";
import { LiaFacebookMessenger } from "react-icons/lia";
import BottomNav from "../components/BottomNav";
import Image from "next/image";
import { useRouter } from "next/router";
// import { Link } from "@nextui-org/react";

export default function MyClasses() {
  const jostFontStyle = {
    fontFamily: fonts.jost, // Use the "jost" font from the fonts object
  };

  const initialClass = { title: "", date: "", attendees: [] };
  const [classes, setClasses] = useState([
    // Your initial class objects here
    {
      title: "English Class",
      date: "12 Sep 2022",
      attendees: [
        "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        "https://i.pravatar.cc/150?u=a04258a2462d826712d",
        "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      ],
    },
    {
      title: "Mathematics Class",
      date: "15 Sep 2022",
      attendees: [
        "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        "https://i.pravatar.cc/150?u=a04258a2462d826712d",
        "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      ],
    },
    {
      title: "Mathematics Class",
      date: "15 Sep 2022",
      attendees: [
        "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        "https://i.pravatar.cc/150?u=a04258a2462d826712d",
        "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      ],
    },
    {
      title: "Mathematics Class",
      date: "15 Sep 2022",
      attendees: [
        "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        "https://i.pravatar.cc/150?u=a04258a2462d826712d",
        "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      ],
    },
    {
      title: "Mathematics Class",
      date: "15 Sep 2022",
      attendees: [
        "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        "https://i.pravatar.cc/150?u=a04258a2462d826712d",
        "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      ],
    },
    {
      title: "Mathematics Class",
      date: "15 Sep 2022",
      attendees: [
        "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        "https://i.pravatar.cc/150?u=a04258a2462d826712d",
        "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      ],
    },
  ]);
  //   const [modalVisible, setModalVisible] = useState(false);
  //   const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [newClass, setNewClass] = useState(initialClass);

  //   const openModal = () => {
  //     setModalVisible(true);
  //   };

  //   const closeModal = () => {
  //     setModalVisible(false);
  //     setNewClass(initialClass);
  //   };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setNewClass({
      ...newClass,
      [name]: value,
    });
  };

  const handleFormSubmit = () => {
    setClasses([...classes, newClass]);
    // setNewClass(initialClass);
    // closeModal();
    onOpenChange();
  };
  //   const classes = [
  //     {
  //       title: "English Class",
  //       date: "12 Sep 2022",
  //       attendees: [
  //         "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  //         "https://i.pravatar.cc/150?u=a04258a2462d826712d",
  //         "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  //       ],
  //     },
  //     {
  //       title: "Mathematics Class",
  //       date: "15 Sep 2022",
  //       attendees: [
  //         "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  //         "https://i.pravatar.cc/150?u=a04258a2462d826712d",
  //         "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  //       ],
  //     },
  //     {
  //       title: "History Class",
  //       date: "18 Sep 2022",
  //       attendees: [
  //         "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  //         "https://i.pravatar.cc/150?u=a04258a2462d826712d",
  //         "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  //       ],
  //     },
  //     {
  //       title: "Physics Class",
  //       date: "20 Sep 2022",
  //       attendees: [
  //         "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  //         "https://i.pravatar.cc/150?u=a04258a2462d826712d",
  //         "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  //       ],
  //     },
  //     {
  //       title: "Chemistry Class",
  //       date: "22 Sep 2022",
  //       attendees: [
  //         "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  //         "https://i.pravatar.cc/150?u=a04258a2462d826712d",
  //         "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  //       ],
  //     },
  //     {
  //       title: "Biology Class",
  //       date: "25 Sep 2022",
  //       attendees: [
  //         "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  //         "https://i.pravatar.cc/150?u=a04258a2462d826712d",
  //         "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  //       ],
  //     },
  //     // {
  //     //   title: "Geography Class",
  //     //   date: "28 Sep 2022",
  //     //   attendees: [
  //     //     "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  //     //     "https://i.pravatar.cc/150?u=a04258a2462d826712d",
  //     //     "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  //     //   ],
  //     // },
  //     // {
  //     //   title: "Computer Science Class",
  //     //   date: "30 Sep 2022",
  //     //   attendees: [
  //     //     "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  //     //     "https://i.pravatar.cc/150?u=a04258a2462d826712d",
  //     //     "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  //     //   ],
  //     // },
  //     // {
  //     //   title: "Art Class",
  //     //   date: "3 Oct 2022",
  //     //   attendees: [
  //     //     "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  //     //     "https://i.pravatar.cc/150?u=a04258a2462d826712d",
  //     //     "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  //     //   ],
  //     // },
  //     // {
  //     //   title: "Music Class",
  //     //   date: "5 Oct 2022",
  //     //   attendees: [
  //     //     "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  //     //     "https://i.pravatar.cc/150?u=a04258a2462d826712d",
  //     //     "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  //     //   ],
  //     // },
  //   ];
  return (
    <div className="max-w-[1024px] mx-auto px-6 pt-5 ">
      <div className="flex justify-between">
        <p className="text-[32px] text-black font-medium" style={jostFontStyle}>
          My Classes
        </p>
        <div className="flex">
          <Button
            color="danger"
            className=" mr-2 font-semibold" // hidden xl:flex
            style={jostFontStyle}
          >
            Join Class
          </Button>
          <Button
            color="danger"
            className=" font-semibold" //hidden xl:flex
            style={jostFontStyle}
            // onClick={openModal}
            // onClick={onOpen}
            onPress={onOpen}
          >
            Create Class
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 justify-center mt-8 ">
        {classes.map((classInfo, index) => (
          <Link href="/individualClass">
            <Card
              key={index}
              className="max-w-[340px] p-2"
              style={{ width: "340px" }}
            >
              <CardHeader className="justify-between">
                <div className="flex gap-5">
                  <div className="flex flex-col gap-1 items-start">
                    <h4
                      className="text-large font-medium leading-none text-default-600"
                      style={jostFontStyle}
                    >
                      {classInfo.title}
                    </h4>
                    <div className="flex items-center gap-2">
                      <AiOutlineClockCircle
                        className="text-[#8A8586]"
                        style={{ color: "#8A8586" }}
                      />
                      <h5 className="text-small tracking-tight text-default-400">
                        {classInfo.date}
                      </h5>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardBody className="px-3 py-0 text-small text-default-400">
                {/* Add class description or content here */}
              </CardBody>
              <CardFooter className="flex justify-between">
                <div className="flex gap-1">
                  {/* <AvatarGroup isBordered radius="sm" size="sm" color="warning">
                  {classInfo.attendees.map((attendee, attendeeIndex) => (
                    <Avatar key={attendeeIndex} src={attendee} />
                  ))}
                </AvatarGroup> */}
                  <AvatarGroup
                    //   isBordered
                    //   imgProps={{ style: { border: "2px solid #000000" } }}
                    //   max={3}
                    total={6}
                    radius="lg"
                    color="danger"
                  >
                    <Avatar
                      src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                      style={{ border: "2px solid #FFEAEE" }}
                    />
                    <Avatar
                      src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
                      style={{ border: "2px solid #FFEAEE" }}
                    />
                    <Avatar
                      src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                      style={{ border: "2px solid #FFEAEE" }}
                    />
                    <Avatar
                      src="https://i.pravatar.cc/150?u=a04258114e29026302d"
                      style={{ border: "2px solid #FFEAEE" }}
                    />
                    <Avatar
                      src="https://i.pravatar.cc/150?u=a04258114e29026702d"
                      style={{ border: "2px solid #FFEAEE" }}
                    />
                    <Avatar
                      src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                      style={{ border: "2px solid #FFEAEE" }}
                    />
                  </AvatarGroup>
                </div>
                <div className="flex">
                  {/* Add any additional information or icons here */}
                  <LiaFacebookMessenger
                    style={{ color: "#8A8586", fontSize: "20px" }}
                  />
                  <p className="text-default-400 text-small ml-1">3</p>
                </div>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
      {/* Create Class Modal */}
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        // className="absolute"
        placement="auto"
        className=""
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col" style={jostFontStyle}>
                <Image
                  src="/createClass.svg"
                  width="75"
                  height="75"
                  alt="create class"
                  className="self-center"
                />
                Create Class
              </ModalHeader>
              <ModalBody style={jostFontStyle}>
                <Input
                  label="Class Name"
                  placeholder="Enter class name"
                  name="title"
                  value={newClass.title}
                  onChange={handleFormChange}
                />
                <Input
                  label="Time" // Add label for time
                  placeholder="Enter time" // Customize the placeholder as needed
                  name="date" // Use the new "time" field
                  value={newClass.date} // Use the new "time" field value
                  onChange={handleFormChange} // Handle changes for the "time" field
                />
              </ModalBody>
              <ModalFooter style={jostFontStyle}>
                {/* <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button> */}
                <Button
                  color="danger"
                  onPress={handleFormSubmit}
                  className="w-full mt-3 font-bold"
                >
                  Create Class
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
