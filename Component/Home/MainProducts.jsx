import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Stack, Image, Button, Center } from "@chakra-ui/react";
import Link from "next/link";
import { translateLauguage } from "../Translate/Fn";
// import MainProductsImage from "../../public/Image/main-products.svg"

export default function MainProducts() {
  
  const language = "kh";
  const { t } = translateLauguage(language);

  var slideshow = {
    dots: true,
    infinite: true,
    // prevArrow: false,
    // nextArrow: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 1000,
    autoSpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
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
  
  const data = [1, 2, 3, 4];

  return (
    <Box className="box-product">
      <Slider {...slideshow} dots={true} className="slide-product">
        {data.map((d) => (
          <Box className="box-main-product">
            <Box className="box-stack">
              <Box className="stack-main-product">
                <Box className="products-title">
                  <Box className="slide-title">
                    ធ្វើឱ្យប្រសើរឡើងនូវការថែទាំស្បែករបស់អ្នក។
                  </Box>
                  <Box className="slide-body">
                    ថែរក្សាស្បែករបស់អ្នកជាមួយនឹងឡេលាបខ្លួន
                    មានសរធាតិចញ្ចឹមនិងខូលីចេលដែលបានផ្សំឡើង ដោយធម្មជាតិ។
                  </Box>
                  <Button className="btn-viewmore">
                    <Link href="/Product/DetailProduct" passHref>
                      {t("more")}
                    </Link>
                  </Button>
                </Box>
                <Box className="products-picture">
                  <Image
                    src="/Image/main-products.png"
                    alt="Main"
                    className="main-image"
                  />
                </Box>
              </Box>
            </Box>
            <Box className="slide-point"></Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
