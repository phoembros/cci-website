import { Box } from "@chakra-ui/react";
import Head from "next/head";
import CleaningProduct from "../../Component/Cleaning/CleaningProduct";

export default function Cleaning(){
    return(
        <>
        <div className="contact-page">
            <Head>
                <title>CCI Inventory / Cleaning</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <Box>
                <CleaningProduct/>
            </Box>
          
        </div>
        </>
    )
}