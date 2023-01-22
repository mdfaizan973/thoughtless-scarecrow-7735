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
// const [input, setInput] = useState("");

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
