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
import { useNavigate } from "react-router-dom";

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
export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  let navigate = useNavigate();
  const handlSearch = (e) => {
    if (e.key === "Enter") {
      let searchResult = e.target.value;
      navigate(`/all_pro/?query=${searchResult}`);
    }
  };
  let anser = localStorage.getItem("totalcart") || 0;
  console.log("sdfasjfdsjfksjfksjfkjskdfa:- ", anser);

  return (
    <div>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        width="100%"
        top={0}
        position="fixed"
        style={{ zIndex: 1 }}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <RouterLink to="/">
            <Box>
              <Image
                src=".\Minari_Bao-removebg-preview.png"
                alt="Dan Abramov"
                width="60%"
              />
            </Box>
          </RouterLink>

          <Input
            bg={useColorModeValue("shyblue", "gray")}
            width="60%"
            placeholder="Search your products..."
            onKeyDown={(e) => handlSearch(e)}
          />
          <Flex alignItems={"center"} marginLeft={"30px"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode} width="20px">
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Menu>
                <RouterLink to="/cartpage">
                  <Center>
                    {" "}
                    <Text
                      fontWeight="700"
                      position="absolute"
                      top="2px"
                      color="red"
                    >
                      {anser}
                    </Text>
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
                    src={"https://cdn-icons-png.flaticon.com/512/21/21104.png"}
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />

                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={
                        "https://cdn-icons-png.flaticon.com/512/21/21104.png"
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
                  <RouterLink to="/signup">
                    {" "}
                    <MenuItem>New Account</MenuItem>
                  </RouterLink>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
                <Menu zIndex="1">
                  <MenuButton as={Button} bg="gray.300" variant="outline">
                    ≡
                  </MenuButton>
                  <MenuList zIndex="1">
                    <MenuGroup zIndex="1" title="Menu">
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
                      <RouterLink to="/blogs">
                        {" "}
                        <MenuItem>Blogs..... </MenuItem>{" "}
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
