import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Stack, Image, Button, Flex } from "@chakra-ui/react";

export default function MainPortfolio() {
  return (
    <Box className="portfolio-container">
      <Box direction="column" className="stack-main-contact">
        <Box className="main-contact">
          <Box className="contact-title">
            <Box className="slide-title">ផលប័ត្រ</Box>
            <Box className="slide-body">
              80% នៃស្រ្ដីក្នុងបណ្ដាញសង្គមបានប្រើប្រាស់ផលិតផលរបស់យើង
              ពួកគាត់បាននិយាយថា ៉៉"សម្រស់ជាផ្នែកមួយនៃជីវិតគាត់"
              យើងនៅទីនេះគឺដើម្បីសម្រស់ ​និងសុខភាពស្បែករបស់អ្នក
              សូមចូលរួបទាំងអស់គ្នាដើម្បីសម្រស់យើង។
            </Box>
          </Box>
          <Box className="contact-picture">
            <Image
              src="/Image/nurse.svg"
              alt="Main"
              className="main-image"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
