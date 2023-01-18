import { ReactNode } from "react";
import { Image } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { Input } from "@chakra-ui/react";
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuGroup,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Text,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);
// https://cdn-icons-png.flaticon.com/512/263/263142.png
// <Image src="./logo.png.png" alt="Dan Abramov" width="60%" />
//
export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <RouterLink to="/">
            <Box>
              <Text>faizan</Text>
            </Box>
          </RouterLink>

          <Input
            bg={useColorModeValue("shyblue", "gray")}
            width="60%"
            placeholder="Search your products..."
          />
          <Flex alignItems={"center"} marginLeft={"30px"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode} width="20px">
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Menu>
                <RouterLink to="/cartpage">
                  <Center>
                    <Avatar
                      size={"sm"}
                      src={
                        "https://cdn-icons-png.flaticon.com/512/263/263142.png"
                      }
                    />
                  </Center>
                </RouterLink>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={
                      "https://avatars.githubusercontent.com/u/106812942?v=4"
                    }
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />

                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={
                        "https://avatars.githubusercontent.com/u/106812942?v=4"
                      }
                    />
                  </Center>

                  <br />
                  <Center>
                    <p>Md Faizan</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <RouterLink to="/login">
                    {" "}
                    <MenuItem>New Account</MenuItem>
                  </RouterLink>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
                <Menu>
                  <MenuButton as={Button} bg="gray.300" variant="outline">
                    ≡
                  </MenuButton>
                  <MenuList>
                    <MenuGroup title="Menu">
                      <MenuItem></MenuItem>
                      <RouterLink to="/mens_pro">
                        {" "}
                        <MenuItem>Mens.... </MenuItem>{" "}
                      </RouterLink>
                      <RouterLink to="/womens_pro">
                        {" "}
                        <MenuItem>Wmens.... </MenuItem>{" "}
                      </RouterLink>
                      <RouterLink to="/kids_pro">
                        {" "}
                        <MenuItem>Kids.... </MenuItem>{" "}
                      </RouterLink>
                      <RouterLink to="/brands">
                        {" "}
                        <MenuItem>Top_Brands.... </MenuItem>{" "}
                      </RouterLink>
                      <RouterLink to="/cartpage">
                        {" "}
                        <MenuItem>Cart..... </MenuItem>{" "}
                      </RouterLink>
                      <RouterLink to="/single_pro/:id">
                        {" "}
                        <MenuItem>single..... </MenuItem>{" "}
                      </RouterLink>
                    </MenuGroup>
                    <MenuDivider />

                    <RouterLink to="/signup">
                      {" "}
                      <MenuItem>Account</MenuItem>{" "}
                    </RouterLink>
                    <MenuItem>FAQ</MenuItem>
                  </MenuList>
                </Menu>{" "}
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </div>
  );
}
