import Head from "next/head";
//component
import Production from "../../Component/Product/Production";
import AllourProduct from "../../Component/Product/AllourProduct";
import { Box } from "@chakra-ui/react";

export default function Product() {
  return (
    <div className="product-page">
      <Head>
        <title>CCI Inventory / product</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      
       <Box>
        <Production />
      </Box>
       
      <Box>
        <AllourProduct />
      </Box>
    </div>
  );
}
