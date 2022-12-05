import { Avatar, Box,  Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import me from "../assets/logo3.jpeg";
import { } from "react-icons/ai";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillGoogleCircle,
} from "react-icons/ai";


// const avatarSrc = "https://avatars.githubusercontent.com/u/25058652";
<section>
<img src={me} alt="Parthiv" />
</section>



const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"lightYellow"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We are the best crypto trading app in India, we provide our guidance
            at a very cheap price.
          </Text>
          <aside>

<article boxSize={"center"} mt={["10", "3"]}>
  <a href="https://myaccount.google.com/?tab=kk" >
    <AiFillGoogleCircle />
  </a>
  <a href="https://www.instagram.com/parthiv.__1/" target={"blank"}boxSize={"center"} mt={["10", "3"]}>
    <AiFillInstagram />
  </a>
  <a href="https://github.com/bhatti-parthiv-au26" target={"blank"} margin-top={"1rem"} display={"flex"}  >
    <AiFillGithub />
  </a>
</article>
</aside>
        </VStack>

        <VStack>
          <Avatar boxSize={"28"} mt={["10", "3"]} src={me} />
          <Text>Our Founder</Text>

        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;

