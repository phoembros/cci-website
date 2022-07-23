import Head from "next/head";
// Chakra
import {
  SimpleGrid,
  Box,
  Heading,
  Text,
  Image,
  Center,
} from "@chakra-ui/react";

export default function About() {
  return (
    <div className="about-page">
      <Head>
        <title>CCI Inventory / about</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Box className="main-container">
        <Box className="box-container">
          <SimpleGrid
            columns={[1, null, 2, null, 3]}
            spacingX="40px"
            spacingY="20px"
            className="container-Grid"
          >
            <Box className="container-text">
              <Heading className="header-title">អំពីយើង</Heading>
              <Text className="header-discraption">
                ៨០%
                នៃស្រ្តីក្នុងបណ្ដាញសង្គមបានប្រើប្រាស់ផលិតផលរបស់យើងពួកគាត់បាននិយាយថា
                "សម្រស់ជាផ្នែកមួយនៃជីវិតរបស់គាត់"យើងនៅទីនេះគឺដើម្បីសម្រាស់ និង
                សុខភាពស្បែករបស់អ្នក សូមចូលរូមទាំងអស់គ្នាដើម្បីសម្រស់យើង។
              </Text>
            </Box>
            <Box className="container-img">
              <Image
                src="/Image/about-image.svg"
                alt="header-img"
                className="header-img"
              />
            </Box>
          </SimpleGrid>

          {/* Responsive image */}
          <Box className="container-img-phone">
            <Image
              src="/Image/about-image.svg"
              alt="header-img-phone"
              className="header-img-phone"
            />
          </Box>
        </Box>
      </Box>

      {/* body section */}
      <Box className="container-body">
        <Box className="box-container-body">
          <Center color="white">
            <Heading className="title-vision"> ចក្ខុវិស័យ </Heading>
          </Center>
          <Center>
            <Text className="subtitle-vision">
              ថែរក្សាស្បែករបស់អ្នកជាមួយនឹងឡេលាបខ្លួន
              លីចេលដែលបានផ្សំឡើងដោយធម្មជាតិ។
            </Text>
          </Center>

          <SimpleGrid
            columns={[1, null, 2, null, 3]}
            spacing={6}
            className="container-grid-viston"
          >
            <Box className="container-img-vision">
              <Image
                src="/Image/section-two.svg"
                alt="image-vision"
                className="img-vision"
              />
            </Box>
            <Box className="container-text-vision">
              <Heading className="sub-title"> បេសកម្មរបស់យើង </Heading>
              <Text className="discraption-vision">
                ថែរក្សាស្បែករបស់អ្នកជាមួយនឹងឡេលាបខ្លួន
                លីចេលដែលបានផ្សំឡើងដោយធម្មជាតិ។
              </Text>
            </Box>
          </SimpleGrid>

          <Heading className="title-history"> ប្រវត្តិរបស់យើង </Heading>
          <Text className="subtitle-history">
            ថែរក្សាស្បែករបស់អ្នកជាមួយនឹងឡេលាបខ្លួន
            លីចេលដែលបានផ្សំឡើងដោយធម្មជាតិ។
          </Text>

          <SimpleGrid
            columns={[1, null, 2, null, 3]}
            spacing={10}
            className="container-grid-history"
          >
            <Box className="container-text-history">
              <Image
                src="Image/our story.svg"
                alt="image-history"
                className="img-history"
              />
              <Heading className="subtitle-history">
                ក្រុមស្ថាបនឹកយើងក្នុងឆ្នាំ ២០២២
              </Heading>
              <Text className="discraption">
                ឆ្នាំ ២០២២
                ថែរក្សារស្បែករបស់អ្នកជាមួយនឹងឡេលាបខ្លួនថែរក្សាស្បែករបស់អ្នក និង
                ឡេលាបខ្លួន លីចេលដែលបានផ្សំឡើងដោយធម្មជាតិ។
                ថែរក្សាស្បែករបស់អ្នកជាមួយនឹងឡេលាបខ្លួន
                លីចេលដែលបានផ្សំឡើងដោយធម្មជាតិ។ លីចេលដែលបានផ្សំឡើងដោយធម្មជាតិ។
                ថែរក្សារស្បែករបស់អ្នកជាមួយនឹងឡេលាបខ្លួនថែរក្សាស្បែករបស់អ្នក
                លីចេលដែលបានផ្សំឡើងដោយធម្មជាតិ។
                ថែរក្សារស្បែករបស់អ្នកជាមួយនឹងឡេលាបខ្លួនថែរក្សាស្បែករបស់អ្នក
              </Text>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>

      <Center h="100px" className="container-title">
        <Heading className="member-title">ថ្នាក់ដឹកនាំយើង</Heading>
      </Center>
      
      <Box className="container-member">
        <Box className="box-container-member">
          <SimpleGrid
            columns={[1, null, 2, null, 3]}
            spacing={10}
            className="container-grid-memeber"
          >
            <Box className="member-box">
              <Image
                borderRadius="full"
                boxSize="200px"
                src="/Image/ProfileMember01.png"
                alt="Dan Abramov"
                className="member-img"
              />
              <Heading className="memeber-name">ចាន់ សម្បិត្ត</Heading>
              <Text className="memeber-position">នាយកគ្រប់គ្រង</Text>
            </Box>
            <Box className="member-box">
              <Image
                borderRadius="full"
                boxSize="200px"
                src="/Image/ProfileMember01.png"
                alt="Dan Abramov"
                className="member-img"
              />
              <Heading className="memeber-name">ចាន់ សម្បិត្ត</Heading>
              <Text className="memeber-position">នាយកគ្រប់គ្រង</Text>
            </Box>
            <Box className="member-box">
              <Image
                borderRadius="full"
                boxSize="200px"
                src="/Image/ProfileMember01.png"
                alt="Dan Abramov"
                className="member-img"
              />
              <Heading className="memeber-name">ចាន់ សម្បិត្ត</Heading>
              <Text className="memeber-position">នាយកគ្រប់គ្រង</Text>
            </Box>

            <Box className="member-box">
              <Image
                borderRadius="full"
                boxSize="200px"
                src="/Image/ProfileMember01.png"
                alt="Dan Abramov"
                className="member-img"
              />
              <Heading className="memeber-name">ចាន់ សម្បិត្ត</Heading>
              <Text className="memeber-position">នាយកគ្រប់គ្រង</Text>
            </Box>
            <Box className="member-box">
              <Image
                borderRadius="full"
                boxSize="200px"
                src="/Image/ProfileMember01.png"
                alt="Dan Abramov"
                className="member-img"
              />
              <Heading className="memeber-name">ចាន់ សម្បិត្ត</Heading>
              <Text className="memeber-position">នាយកគ្រប់គ្រង</Text>
            </Box>
            <Box className="member-box">
              <Image
                borderRadius="full"
                boxSize="200px"
                src="/Image/ProfileMember01.png"
                alt="Dan Abramov"
                className="member-img"
              />
              <Heading className="memeber-name">ចាន់ សម្បិត្ត</Heading>
              <Text className="memeber-position">នាយកគ្រប់គ្រង</Text>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </div>
  );
}
