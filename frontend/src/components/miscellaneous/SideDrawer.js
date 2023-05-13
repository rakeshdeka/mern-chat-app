import { Box, Text } from "@chakra-ui/layout";
import { Menu, MenuButton, MenuDivider, MenuItem, MenuList, Tooltip } from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Avatar } from "@chakra-ui/avatar"
import { ChatState } from "../../context/ChatProvider";
import ProfileModal from "./ProfileModal";
import { useHistory } from "react-router-dom";




// import React, { useState } from 'react'


const SideDrawer = () => {

    // const [serach, setSearch] = useState("")
    // const [searchResult, setSearchResult] = useState([])
    // const [loading, setLoading] = useState(false)
    // const [loadingChat, setLoadingChat] = useState()
    const { user } = ChatState();
    const history = useHistory()


    const logoutHandler = () => {
        localStorage.removeItem("userInfo");
        history.go("/");
    };

    return <>
        <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            bg="white"
            w="100%"
            p="5px 10px 5px 10px"
            borderWidth="5px">
            <Tooltip label="Search Users to chat"
                hasArrow
                placement="bottom-end"
            >
                <Button variant="ghost">
                    <i class="fas fa-search"></i>
                    <Text display={{ base: "md", md: "flex" }} p="4">
                        Serach User
                    </Text>
                </Button>

            </Tooltip>

            <Text fontSize="2xl" fontFamily="Work sans">
                Chat App
            </Text>
            <div>
                <Menu>
                    <MenuButton p={1}>
                        <BellIcon fontSize="2xl" m={1} />
                    </MenuButton>
                    {/* <MenuList></MenuList> */}
                </Menu>
                <Menu>
                    <MenuButton
                        as={Button}
                        rightIcon={<ChevronDownIcon />}>
                        <Avatar size="sm" cursor="pointer" name={user.name}
                            src={user.pic} />
                    </MenuButton>
                    <MenuList>
                        <ProfileModal user={user}>
                            <MenuItem>My Profile</MenuItem>{" "}
                        </ProfileModal>


                        <MenuDivider />
                        <MenuItem onClick={logoutHandler}>Logout</MenuItem>
                    </MenuList>

                </Menu>


            </div>

        </Box>
    </>;
}


export default SideDrawer;