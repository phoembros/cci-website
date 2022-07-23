import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Box,
  Stack,
  Image,
  Button,
  SimpleGrid,
  Text,
  Link,
} from "@chakra-ui/react";

export default function CleaningProduct() {
  var slideshow = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 1000,
    autoSpeed: 1000,
    scrollbars: false,
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
    <>
      <div className="detailProduct">
        <Box className="main-subdetail">
          <Box className="guide">
            <SimpleGrid
              className="guide-center"
              columns={[1, null, 2, null, 3]}
              spacing="20px"
            >
              <Box className="products-picture">
                <Image src="/Image/product2.svg" className="main-image" />
              </Box>

              <Box className="content">
                <Box>
                  <Text className="make-title" align="center">
                    សាប៊ូរដុះខ្លួន
                    <br />
                    កំចាត់បាតេរី
                  </Text>

                  <Text className="make-body" align="center">
                    ថែរក្សាស្បែករបស់អ្នកជាមួយនឹងឡេលាបខ្លួន
                    <br />
                    លីចេលដែលបានផ្សំឡើងដោយធម្មជាតិ។
                  </Text>
                </Box>
                <Box className="divider" mb="10px"></Box>
              </Box>

              <Box className="products-between">
                <Image src="/Image/product1.svg" className="main-image" />
              </Box>
            </SimpleGrid>
          </Box>
        </Box>
      </div>

      <div className="center-allourproduct">
        <Box className="main-items" direction="column">
          <Box className="all-product">
            <Text className="slide-title">ផលិតផលសម្រាប់សម្រស់</Text>

            <Box className="center-ourproduct">
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
                          <Text className="name-product">
                            សាប៊ូរដុះខ្លួនកំចាត់បាតេរី
                          </Text>
                          <Text className="name-productdetail">
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
          </Box>

          <Box className="all-product">
            <Text className="slide-title" color="red">
              ផលិតផលសម្រាប់សម្រស់
            </Text>
            <Box className="center-ourproduct">
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
                        <Text className="name-product">
                          {" "}
                          សាប៊ូរដុះខ្លួនកំចាត់បាតេរី
                        </Text>
                        <Text className="name-productdetail">
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
        </Box>
      </div>
    </>
  );
}
