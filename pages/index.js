import Head from "next/head";
import {Box} from "@chakra-ui/react"
//components
import MainProducts from "../Component/Home/MainProducts";
import ProductHightlight from "../Component/Home/ProductHightlight";
import OurProducts from "../Component/Home/OurProducts";
import Customer from "../Component/Home/Customer";

export default function Home() {
  return (
    <div className="home-page">
      <Head>
        <title>CCI Inventory / home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      
      <Box>
        <MainProducts />
      </Box>

      <Box>
        <ProductHightlight />
      </Box>

      <Box>
        <OurProducts />
      </Box>

      <Box>
        <Customer />
      </Box>

      {/* <h3>ថ្នាក់ដឹកនាំយើង</h3> */}
    </div>
  );
}
