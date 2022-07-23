import React from "react";
import { Box, Icon, Image, SimpleGrid } from "@chakra-ui/react";

export default function PortfolioItems() {
  let data = [1, 2, 3, 4];
  return (
    <div className="portfolio-items-container">
      <div className="items-container">
        <SimpleGrid
          columns={[1, null, 2]}
          spacing="50px"
          className="siplegrid-map"
        >
          {data.map((d) => (
            <Box className="map-container">
              <Box className="box-image">
                <Image
                  src="/Image/portfolio/portfolio-02.svg"
                  alt="Portfolio Items"
                  className="image-items"
                />
              </Box>
              <Box className="box-details">
                <Box className="title-image">AGORa Shop</Box>
                <Box className="details-image">
                  ឆ្នាំ២០២២ ថែរក្សាស្បែករបស់អ្នកជាមួយនឹងឡេលាបខ្លួនថែរក្សា
                  ស្បែករបស់អ្នកជាមួយនឹងឡេលាបខ្លួនលីចេលដែលបានផ្សំឡើង ដោយធម្មជាតិ។
                </Box>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </div>
    </div>
  );
}
