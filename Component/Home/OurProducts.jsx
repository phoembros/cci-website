import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Stack, Image, Button, SimpleGrid } from "@chakra-ui/react";
// import MainProductsImage from "../../public/Image/main-products.svg"

export default function OurProducts() {
  var slideshow = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 1000,
    autoSpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const data = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="center-ourproduct">
      <Box className="slide-title">ផលិតផលរបស់យើង</Box>
      <Box className="slide-items">
        <Slider {...slideshow} dots={true} className="our-product">
          {data.map((d) => (
            <Box className="product-container">
              <Box className="box-layout">
                <Image
                  src="/Image/cream.svg"
                  alt="Main"
                  className="main-image"
                />
              </Box>
              <Box className="slide-point"></Box>
            </Box>
          ))}
        </Slider>
      </Box>
      <Box className="box-button">
        <Button className="btn-view">មើលបន្ថែម</Button>
      </Box>
    </div>
  );
}
