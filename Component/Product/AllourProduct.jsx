import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Box,
  Image,
  Text,
  Link,
} from "@chakra-ui/react";
// import MainProductsImage from "../../public/Image/main-products.svg"

export default function AllourProduct() {
  var slideshow = {
    dots: false,
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
          dots: false,
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
    <div className="center-allourproduct">
      <Box className="main-items" direction="column">
        <Box className="all-product" mt="5%">
          <Text className="slide-title">
            ផលិតផលសម្រាប់សម្រស់
          </Text>

          <Link href="/Product/DetailProduct">
            <Box className="slide-items">
              <Slider {...slideshow} className="our-product">
                {data.map((d) => (
                  <Box className="product-container">
                    <Box className="box-layout">
                      <Image
                        src="/Image/cream.svg"
                        alt="Main"
                        className="main-image"
                      />
                      <Text  className="text-title">
                        សាប៊ូរដុះខ្លួនកំចាត់បាតេរី
                      </Text>

                      <Text
                        
                        className="name-productdetail"
                      >
                        ថែរក្សាស្បែករបស់អ្នកជាមួយនឹងឡេលាបខ្លួន
                        លីចេលដែលបានផ្សំឡើងដោយធម្មជាតិ។
                      </Text>
                    </Box>
                  </Box>
                ))}
              </Slider>
            </Box>
          </Link>
        </Box>

        <Box className="all-product2">
          <Text className="slide-title2" mt="5%">ផលិតផលសម្រាប់សម្រស់</Text>
          <Box className="slide-items1">
            <Slider {...slideshow} className="our-product">
              {data.map((d) => (
                <Box className="product-container">
                  <Box className="box-layout">
                    <Image
                      src="/Image/cream.svg"
                      alt="Main"
                      className="main-image"
                    />
                    <Text className="text-title">
                      សាប៊ូរដុះខ្លួនកំចាត់បាតេរី
                    </Text>
                    <Text  className="name-productdetail">
                      ថែរក្សាស្បែករបស់អ្នកជាមួយនឹងឡេលាបខ្លួន
                      លីចេលដែលបានផ្សំឡើងដោយធម្មជាតិ។
                    </Text>
                  </Box>

                  <Box className="slide-point"></Box>
                </Box>
              ))}
            </Slider>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
