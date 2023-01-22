import React from "react";
import { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  CardFooter,
  HStack,
} from "@chakra-ui/react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import { DeleteIcon } from "@chakra-ui/icons";
import axios from "axios";
export default function SingleCart({ element, arr }) {
  console.log("arr: ", arr);

  const [ndata, setNdata] = useState([arr]);
  const [countt, setCountt] = useState(1);

  const handleinc = (val) => {
    setCountt(countt + val);
  };

  const handledec = (val) => {
    setCountt(countt + val);
  };

  const deleteCartData = (id) => {
    <useDisclosure />;
    axios
      .delete(`http://localhost:3040/cartitems/${id}`)
      .then((response) => {
        console.log(response.data);
        setNdata(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // arr
  //   console.log("arr: ", arr);

  //   console.log("sdfasfsfsafsafasfasfsaf", arr.price);
  //   let access = arr.reduce((acc, els) => {
  //     acc + els.price;
  //   }, 0);
  //   console.log("totalAmount: ", access);

  useEffect(() => {}, [ndata]);
  return (
    <div>
      <div>
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          textAlign="center"
          width="90%"
          border="1px solid grey"
          marginTop="10px"
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px" }}
            src={element.image2}
            alt="Caffe Latte"
          />
          <Stack textAlign="center">
            <CardBody>
              <Heading size="lg">{element.title}</Heading>

              <Text py="1">{element.discription.substring(0, 120)}+...</Text>
              <Heading size="md">{element.brand}</Heading>

              <HStack display="flex" justifyContent="center" textAlign="center">
                <Text size="md"> ₹ {element.price} </Text>
                <Text size="md" textDecoration="line-through">
                  {" "}
                  ₹ {element.price * 1.7}{" "}
                </Text>
              </HStack>
            </CardBody>

            <CardFooter
              display="flex"
              justifyContent="space-around"
              textAlign="center"
              margin="auto"
            >
              <HStack>
                <Button
                  colorScheme="teal"
                  variant="solid"
                  boxSize={10}
                  onClick={() => handleinc(-1)}
                  isDisabled={countt == 1}
                >
                  -
                </Button>
                <Button variant="solid" colorScheme="teal" boxSize={6}>
                  {countt}
                </Button>
                <Button
                  variant="solid"
                  colorScheme="teal"
                  boxSize={10}
                  onClick={() => handledec(1)}
                >
                  +
                </Button>
              </HStack>

              <Button
                variant="solid"
                colorScheme="red"
                backgroundColor="red"
                onClick={() => deleteCartData(element.id)}
              >
                <TransitionExample />
              </Button>
            </CardFooter>
          </Stack>{" "}
        </Card>
      </div>
    </div>
  );
}
// function ToastStatusExample() {
//   const toast = useToast();
//   const statuses = ["success"];

//   return (
//     <Wrap>
//       {statuses.map((status, i) => (
//         <WrapItem key={i}>
//           <Button
//             colorScheme="teal"
//             onClick={() =>
//               toast({
//                 title: `success add`,
//                 status: status,
//                 isClosable: true,
//               })
//             }
//           ></Button>
//         </WrapItem>
//       ))}
//     </Wrap>
//   );
// }
// // , "error", "warning", "info"
// function ToastStatusExamples() {
//   const toast = useToast();
//   const statuses = ["error"];

//   return (
//     <Wrap>
//       {statuses.map((status, i) => (
//         <WrapItem key={i}>
//           <Button
//             colorScheme="teal"
//             onClick={() =>
//               toast({
//                 title: `successfully dec`,
//                 status: status,
//                 colorScheme: "teal",

//                 isClosable: true,
//               })
//             }
//           >
//             Show {status} toast
//           </Button>
//         </WrapItem>
//       ))}
//     </Wrap>
//   );
// }
// function UpdatingToastExample() {
//   const toast = useToast();
//   const toastIdRef = React.useRef();

//   //   function update() {
//   //     if (toastIdRef.current) {
//   //       toast.update(toastIdRef.current, { description: "new text" });
//   //     }
//   //   }

//   function addToast() {
//     toastIdRef.current = toast({ description: "Add" });
//   }

//   return (
//     <Stack isInline spacing={2}>
//       <Button backgroundColor="teal" onClick={addToast} type="button">
//         +
//       </Button>
//     </Stack>
//   );
// }
// {
/*  <Button onClick={update} type="button" variant="outline">
        Update last toast
      </Button>
*/
// }
function TransitionExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  const yesDelete = (id) => {
    // axios
    //   .delete(`http://localhost:3040/cartitems/${id}`)
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };
  useEffect(() => {
    yesDelete();
  }, []);
  return (
    <>
      <Button onClick={onOpen} backgroundColor="red">
        {" "}
        <DeleteIcon boxSize={6} /> Delete
      </Button>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>
            <DeleteIcon boxSize={6} /> Delete ?
          </AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            Are you sure you want to delete your cartItem?
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              No
            </Button>
            <Button colorScheme="red" ml={3} onClick={onClose}>
              <Button onClick={yesDelete}>Yes</Button>
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
