import React from "react";
import { Box } from "@chakra-ui/layout";
import { ChatState } from "../Context/ChatProvider";

import { useState } from "react";
import Chatbox from "../components/misscellaneous/Chatbox"
import MyChats from "../components/misscellaneous/MyChats"
import SideDrawer from "../components/misscellaneous/SideDrawer"

const Chatpages = () => {
// //   const [fetchAgain, setFetchAgain] = useState(false);
  const {user} = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats />}
        {user && <Chatbox />}
      </Box>
    </div>
  );
};

export default Chatpages;

