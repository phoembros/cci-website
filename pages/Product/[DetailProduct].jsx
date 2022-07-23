import { Box, Image, SimpleGrid, Text, Center, Link } from "@chakra-ui/react";
import { List, ListItem, ListIcon } from "@chakra-ui/react";

export default function Product() {
  return (
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
              <Box className="divider" mb="20px"></Box>
            </Box>

            <Box className="products-between">
              <Image src="/Image/product1.svg" className="main-image" />
            </Box>
          </SimpleGrid>
        </Box>
      </Box>

      <Box className="main-center">
        <Box className="sub-main">
          <Box className="content">
            <Text className="make-title" align="center">
              អត្ថប្រយោជន៍
            </Text>
            <Box className="devider"></Box>
          </Box>

          <SimpleGrid className="main-benif" columns={5} spacing="20px">

            <Box className="guide-under">
              <Center className="avatar-text">
                <Image
                  className="image-size"
                  src="/Image/productsdetails/Group 42.svg"
                />
              </Center>
              <Text className="text">ការពារកម្តៅថ្ងៃ</Text>
            </Box>

            <Box className="guide-under">
              <Center className="avatar-text">
                <Image
                  className="image-size"
                  src="/Image/productsdetails/Group 43.svg"
                />
              </Center>
              <Text className="text">ការពារបាតេរី</Text>
            </Box>

            <Box className="guide-under">
              <Center className="avatar-text">
                <Image
                  className="image-size"
                  src="/Image/productsdetails/Group 44.svg"
                />
              </Center>
              <Text className="text">មានរនាំង</Text>
            </Box>

            <Box className="guide-under">
              <Center className="avatar-text">
                <Image
                  className="image-size"
                  src="/Image/productsdetails/Group 45.svg"
                />
              </Center>
              <Text className="text">បែបធម្មជាតិ</Text>
            </Box>

            <Box className="guide-under">
              <Center className="avatar-text">
                <Image
                  className="image-size"
                  src="/Image/productsdetails/Group 46.svg"
                />
              </Center>
              <Text className="text">គុណភាពអូលីវ</Text>
            </Box>

          </SimpleGrid>

          
        </Box>
      </Box>
    </div>
  );
}
