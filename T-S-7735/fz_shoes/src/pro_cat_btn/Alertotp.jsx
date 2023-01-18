import React, { useState } from "react";
import { PinInput, PinInputField } from "@chakra-ui/react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  HStack,
  Button,
} from "@chakra-ui/react";

function Alertotp() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const [otp, setOtp] = useState("");

  const otpgenret = () => {
    let ot = Math.floor(Math.random() * 100000);
    setOtp(ot);
  };

  console.log(otp);

  return (
    <div>
      <Button colorScheme="blue" onClick={otpgenret}>
        <Button colorScheme="blue" onClick={onOpen}>
          OTP
        </Button>
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              ENTER YOUR OTP
            </AlertDialogHeader>

            <AlertDialogBody fontSize="md">
              This is your genereted OTP <br />
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                {otp}
              </AlertDialogHeader>
              <HStack>
                <PinInput>
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                </PinInput>
              </HStack>
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button colorScheme="green" onClick={onClose} ml={3}>
                OK.
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </div>
  );
}
export default Alertotp;
