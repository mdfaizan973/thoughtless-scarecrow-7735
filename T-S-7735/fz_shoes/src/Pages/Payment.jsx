// import React from "react";
// import { useState } from "react";
// import {
//   border,
//   Box,
//   Heading,
//   Stack,
//   Input,
//   setInput,
//   FormHelperText,
//   FormControl,
//   FormLabel,
//   FormErrorMessage,
//   Select,
//   Button,
// } from "@chakra-ui/react";
// export default function Payment() {
//   const [input, setInput] = useState("");

//   const handleInputChange = (e) => setInput(e.target.value);

//   const isError = input === "";
//   return (
//     <div style={{ marginTop: " 100px", border: "2px solid grey" }}>
//       <Stack spacing={6}>
//         <Heading as="h2" size="xl">
//           Shipping Information
//         </Heading>

//         <Stack width={"50%"} margin={"auto"} border={"2px solid grey"}>
//           <FormControl isRequired>
//             <FormLabel>First name</FormLabel>
//             <Input placeholder="First name" />
//           </FormControl>
//           <FormControl isRequired>
//             <FormLabel>First name</FormLabel>
//             <Input placeholder="First name" />
//           </FormControl>
//           <FormControl isRequired>
//             <FormLabel>First name</FormLabel>
//             <Input placeholder="First name" />
//           </FormControl>
//           <FormControl isRequired>
//             <FormLabel>First name</FormLabel>
//             <Input placeholder="First name" />
//           </FormControl>
//           <FormControl>
//             <FormLabel>Country</FormLabel>
//             <Select placeholder="Select country">
//               <option>United Arab Emirates</option>
//               <option>Nigeria</option>
//             </Select>

//             <Button colorScheme="teal" type="submit">
//               Submit
//             </Button>
//           </FormControl>
//         </Stack>
//       </Stack>
//     </div>
//   );
// }
import React from "react";
import { useState } from "react";
import {
  border,
  Box,
  Heading,
  Stack,
  Input,
  setInput,
  FormHelperText,
  FormControl,
  FormLabel,
  FormErrorMessage,
  HStack,
  Select,
  Button,
} from "@chakra-ui/react";
import { MdLocalShipping } from "react-icons/md";

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  useDisclosure,
  AlertDialogContent,
  AlertDialogOverlay,
  Image,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { Router } from "react-router-dom";
export default function Payment() {
  const [input, setInput] = useState("");

  //   const handleInputChange = (e) => setInput(e.target.value);

  //   const isError = input === "";

  const handleOk = () => {
    // <AlertDialogExample />;
  };

  return (
    <div
      style={{
        textAlign: "center",
        margin: " auto",
        marginTop: "80px",
        // paddingLeft: "200px",
      }}
    >
      <Stack spacing={6}>
        <Heading as="h2" size="xl">
          Shipping Information
        </Heading>
        <Stack display="flex">
          <Stack
            width={"40%"}
            padding={"50px"}
            borderRadius={"20px"}
            margin={"auto"}
            // marginLeft={"500px"}
            border={"2px solid grey"}
          >
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input placeholder="First name" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input placeholder="Email" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel> Phone No</FormLabel>
              <Input placeholder=" Phone No" />
            </FormControl>
            <FormControl isRequired>
              <HStack>
                <FormLabel>Address</FormLabel>
                <Input placeholder="Address" />
                <FormLabel>Pin Code</FormLabel>
                <Input placeholder="Pin Code" />
              </HStack>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Amount</FormLabel>
              <Input placeholder="Amount" />
            </FormControl>
            <FormControl>
              <FormLabel>State</FormLabel>
              <Select placeholder="Select country">
                <option>Delhi</option>
                <option>Jharkhand</option>
                <option>Benglore</option>
                <option>Panjab</option>
                <option>Bihar</option>
                <option>Mumbai</option>
                <option>Udisa</option>
                <option>Haryana</option>
                <option>Keral</option>
                <option>Uttar Pradesh</option>
              </Select>

              <br />
              <hr />
              <br />
              <Stack
                border={"2px solid grey"}
                padding={"30px"}
                borderRadius={"20px"}
              >
                <FormControl isRequired>
                  <FormLabel>Card Owner </FormLabel>
                  <Input placeholder="Name" />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Card No</FormLabel>
                  <Input placeholder="Card No" />
                </FormControl>

                <FormControl isRequired>
                  <HStack>
                    <FormControl isRequired>
                      <FormLabel>Ex Date</FormLabel>
                      <Input placeholder="Ex Date" />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>CVV</FormLabel>
                      <Input placeholder="CVV" />
                    </FormControl>
                  </HStack>
                </FormControl>
              </Stack>
              <br />
              <hr />
              <br />
              <Button onClick={handleOk} colorScheme="green" type="submit">
                <AlertDialogExample />
              </Button>
            </FormControl>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
}

function AlertDialogExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  return (
    <>
      <Button colorScheme="green" onClick={onOpen}>
        Submit
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Payment Successful
            </AlertDialogHeader>
            <AlertDialogBody>
              <MdLocalShipping /> Your Order Is Placed. 🎊🎉🎊🎉
            </AlertDialogBody>
            <Image src="https://cdn.dribbble.com/users/1751799/screenshots/5512482/check02.gif" />{" "}
            <AlertDialogFooter>
              <RouterLink to="/">
                <Button colorScheme="green" onClick={onClose} ml={3}>
                  OK
                </Button>
              </RouterLink>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
