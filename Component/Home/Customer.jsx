import { Text, Stack, Box, SimpleGrid, Image } from "@chakra-ui/react";

import { Avatar } from "@chakra-ui/react";

export default function Customer() {
  return (
    <div className="customer">
      <div className="container">
        <Box className="guide" w="100%" p={4} color="white">
          <Text className="title">អតិថិជនរបស់យើង</Text>
          <SimpleGrid
            className="container-image"
            columns={[1, null, 2,null, 4]}
            rowGap={2}
          >
            <Box className="image-style">
              <Image  width="150px" className="image-item" src="/Image/group/Lexus-Logo.svg" />
            </Box>
            <Box className="image-style">
              <Image
                className="image-item"
                width="100px"
                src="/Image/group/Audi-logo-ED84DFE2E3-seeklogo.com.svg"
              />
            </Box>

            <Box className="image-style">
              <Image
                className="image-item"
                src="/Image/group/cp-logo-6736414FBE-seeklogo.com.svg"
                width="70px"
              />
            </Box>

            <Box className="image-style">
              <Image
                className="image-item"
                width="150px"
                src="/Image/group/adidas-logo-photo-png-3.svg"
              />
            </Box>

            <Box className="image-style">
              <Image
                className="image-item"
                width="150px"
                src="/Image/group/Amazon_logo.svg.svg"
              />
            </Box>

            <Box className="image-style">
              <Image  width="200px" className="image-item" src="/Image/group/image0.svg" />
            </Box>

            <Box className="image-style">
              <Image  width="150px" className="image-item" src="/Image/group/Nivea_Logo.svg" />
            </Box>

            <Box className="image-style">
              <Image  width="150px" className="image-item" src="/Image/group/Agoda_logo.svg" />
            </Box>
          </SimpleGrid>

          <Text noOfLines={[1, 2, 3]} className="title" >
            ថ្នាក់ដឹកនាំយើង
          </Text>

          <SimpleGrid
            columns={[1, null, 2, null, 3]}
            spacing="40px"
            className="simple-grid"
          >
            <Box className="image-style">
              <Box className="container-image">
                <Image
                  className="image-item"
                  src="https://img.freepik.com/free-photo/image-handsome-happy-guy-christmas-sweater-smiling-looking-camera-celebrating-xmas-holidays-standing-red-background_1258-63133.jpg?t=st=1658223189~exp=1658223789~hmac=92866a7f5ba4c34464ec38b17cfcdbe376b5060be5a88cea5b22b70413d13abd"
                />
              </Box>
              <Box mt={5}>
                <Text noOfLines={[1, 2, 3]} className="title-context">
                  ចាន់ សម្បិត្ត
                </Text>
                <Text noOfLines={[1, 2, 3]} className="context" fontSize="xs">
                  នាយកគ្រប់គ្រង
                </Text>
              </Box>
            </Box>

            <Box className="image-style">
              <Box className="container-image">
                <Image
                  className="image-item"
                  src="https://img.freepik.com/free-photo/beauty-lifestyle-concept-close-up-dreamy-asian-girl-smiling-looking-left-thinking-making-choice-standing-pink-background_1258-75728.jpg?t=st=1658199643~exp=1658200243~hmac=06f6440d1e73fe9cfee9fe1a576fb556bc1d67c0f149bea30a2fc772e21c503c"
                />
              </Box>
              <Box mt={5}>
                <Text noOfLines={[1, 2, 3]} className="title-context">
                  គង់ ចាន់រីតា
                </Text>
                <Text noOfLines={[1, 2, 3]} className="context" fontSize="xs">
                  នាយកផ្នែកផលិត
                </Text>
              </Box>
            </Box>

            <Box className="image-style">
              <Box className="container-image">
                <Image
                  className="image-item"
                  src="https://img.freepik.com/free-photo/image-handsome-caucasian-man-party-suit-smiling-pleased-attend-formal-event-standing-white-background_1258-64650.jpg?t=st=1658204302~exp=1658204902~hmac=b0c55146dcfdcbb7069d5814e7e7b2211bef285d2b116c473b4a295603819fda"
                />
              </Box>
              <Box mt={5}>
                <Text noOfLines={[1, 2, 3]} className="title-context">
                  គង់ ចាន់រីតា
                </Text>
                <Text noOfLines={[1, 2, 3]} className="context" fontSize="xs">
                  នាយកផ្នែកផលិត
                </Text>
              </Box>
            </Box>
     
          </SimpleGrid>
        </Box>
      </div>
    </div>
  );
}
