// chakra UI
import { Heading, SimpleGrid, Box, Image, Stack, Text } from "@chakra-ui/react";

export default function ProductHightlight() {
  return (
    <div className="hightlight-page">
      <Box className="container">
          <Box className="box-title">
            <Heading as="h2" className="title">
              សារប៊ូរដុះខ្លួនកំចាត់បាតេរី
            </Heading>
          </Box>
          {/* image when responsive */}
          <Box className="image-phone">
            <Image
              src="/Image/product-highlight.svg"
              alt="Main"
              className="hl-image"
            />
          </Box>

          <Box className="main-grid">
            <SimpleGrid columns={[1, null, 1, 3]} spacing={10}>
              <Box className="text-container">
                <Stack spacing={6}>
                  <Heading className="sub-titile">
                    សារប៊ូរដុះខ្លួនកំចាត់បាតេរី
                  </Heading>
                  <Text className="discraption-one">
                    ថែរក្សាស្បែករបស់អ្នកជាមួយនឹងឡេលាបខ្លួន មានសរធាតិចញ្ចឹម
                    និងខូលីចេលដែលបានផ្សំឡើងដោយធម្មជាតិ។
                  </Text>

                  <Heading className="sub-titile">
                    សារប៊ូរដុះខ្លួនកំចាត់បាតេរី
                  </Heading>
                  <Text className="discraption-one">
                    ថែរក្សាស្បែករបស់អ្នកជាមួយនឹងឡេលាបខ្លួន មានសរធាតិចញ្ចឹម
                    និងខូលីចេលដែលបានផ្សំឡើងដោយធម្មជាតិ។
                  </Text>
                </Stack>
              </Box>

              {/* image */}
              <Box className="image-container">
                <Image
                  src="/Image/product-highlight.svg"
                  alt="Main"
                  className="hl-image"
                />
              </Box>

              <Box className="text-container2">
                <Stack spacing={6} className="stack-container">
                  <Heading className="sub-title2">
                    សារប៊ូរដុះខ្លួនកំចាត់បាតេរី
                  </Heading>
                  <Text className="discraption-two">
                    ថែរក្សាស្បែករបស់អ្នកជាមួយនឹងឡេលាបខ្លួន មានសរធាតិចញ្ចឹម
                    និងខូលីចេលដែលបានផ្សំឡើងដោយធម្មជាតិ។
                  </Text>

                  <Heading className="sub-title2">
                    សារប៊ូរដុះខ្លួនកំចាត់បាតេរី
                  </Heading>
                  <Text className="discraption-two">
                    ថែរក្សាស្បែករបស់អ្នកជាមួយនឹងឡេលាបខ្លួន មានសរធាតិចញ្ចឹម
                    និងខូលីចេលដែលបានផ្សំឡើងដោយធម្មជាតិ។
                  </Text>
                </Stack>
              </Box>
            </SimpleGrid>
          </Box>
        </Box>
    </div>
  );
}
