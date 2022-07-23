import { Box, Image, SimpleGrid, Text, Center, Link ,Heading} from "@chakra-ui/react";

export default function Production() {
  return (
    // <>
    //   <Center className="production" direction="row" justifyContent="center">
    //     <SimpleGrid columns={3} spacing={10} mt="10%" className="product-layout">
    //       <Box className="guide">
    //         <Center className="products-picture">
    //           <Image src="/Image/product2.svg" className="main-image" />
    //         </Center>
    //       </Box>

    //       <Box className="guide">
    //         <Box className="grid-title-top">
    //         <Text className="make-title" align="center">
    //           សាប៊ូរដុះខ្លួន
    //           <br />
    //           កំចាត់បាតេរី
    //         </Text>
    //         <Center className="main-product">
    //           <Text className="make-body" align="center">
    //             ថែរក្សាស្បែករបស់អ្នកជាមួយនឹងឡេលាបខ្លួន
    //             <br />
    //             លីចេលដែលបានផ្សំឡើងដោយធម្មជាតិ។
    //           </Text>
    //         </Center>

    //         <Box className="divider"></Box>
    //         </Box>
    //       </Box>

    //       <Box className="guide">
    //         <Center className="products-between ">
    //           <Image src="/Image/product1.svg" className="main-image" />
    //         </Center>
    //       </Box>
    //     </SimpleGrid>
    //   </Center>
    // </>

    <div className="allproduct">
      <Box className="main-containner">
        <Box className="box-containner">
          <SimpleGrid
            columns={[1, null, 2, null, 3]}
            spacingX="40px"
            spacingY="20px"
            className="container-Grid"
          >
            <Box className="container-img">
              <Image
                src="/Image/product2.svg"
                alt="header-img"
                className="header-img"
              />
            </Box>

            <Box className="container-text">
              <Heading className="header-title">សាប៊ូរដុះខ្លួនកំចាត់បាតេរី</Heading>
              <Text className="header-discraption">
              ថែរក្សាស្បែករបស់អ្នកជាមួយនឹងឡេលាបខ្លួនលីចេលដែលបានផ្សំឡើងដោយធម្មជាតិ។
              </Text>
            </Box>

            <Box>
              <Image
                src="/Image/product1.svg"
                alt="header-img"
                className="header-img"
              />
            </Box>

          </SimpleGrid>

          <Box className="container-img-phone">
            <Image
              src="/Image/product2.svg"
              alt="header-img-phone"
              className="header-img-phone"
            />
          </Box>

        </Box>
      </Box>
    </div>
  );
}
