import Head from "next/head";
import {Box} from "@chakra-ui/react"
import MainContact from "../../Component/Contact/MainContact";
import Map from "../../Component/Contact/Map";

export default function Contact() {
  return (
    <div className="contact-page">
      <Head>
        <title>CCI Inventory / contact</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Box>
        <MainContact />
      </Box>
      <Box>
        <Map />
      </Box>
    </div>
  );
}
