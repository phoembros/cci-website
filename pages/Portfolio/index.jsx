import Head from "next/head";
import { Box } from "@chakra-ui/react";
import MainPortfolio from "../../Component/Portfolio/MainPortfolio";
import PortfolioItems from "../../Component/Portfolio/PortfolioItems";



export default function Portfolio() {
  return (
    <div className="portfolio-page">
      <Head>
        <title>CCI Inventory / portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Box>
        <MainPortfolio />
      </Box>
       
      <Box>
        <PortfolioItems />
      </Box>
    </div>
  );
}
