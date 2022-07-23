import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Stack, Image, Button, Flex } from "@chakra-ui/react";
import { BsTelephoneInboundFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { GoLocation } from "react-icons/go";
import { MdFacebook } from "react-icons/md";

export default function MainContact() {
  return (
    <Box className="contact-container">
      <Box direction="column" className="stack-main-contact">
        <Box className="main-contact">
          <Box className="contact-title">
            <Box className="slide-title">ទំនាក់ទំនងយើងខ្ញុំ</Box>
            <Flex className="flex-top-details">
              <GoLocation className="location-icon" />
              <Stack direction="column" justifyContent="center">
                <Box className="slide-body">
                  សង្កាត់២ ឃុំ៣ ផ្លូវលេខ៤ ក្រុងសៀមរាប ខេត្តសៀរាម
                </Box>
              </Stack>
            </Flex>
            <Flex className="flex-contact-details">
              <BsTelephoneInboundFill className="details-icon" />
              <Box className="details-title">012 899 890</Box>
            </Flex>
            <Flex className="flex-contact-details">
              <HiOutlineMail className="details-icon" />
              <Box className="details-title">info@gmail.com</Box>
            </Flex>
            <Flex className="flex-contact-details">
              <MdFacebook className="details-icon" />
              <Box className="details-title">CCI Officail</Box>
            </Flex>
          </Box>
          <Box className="contact-picture">
            <Image
              src="/Image/container-image.svg"
              alt="Main"
              className="main-image"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
