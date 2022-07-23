import "../styles/globals.css";
import "../Layout/layout.scss";
import "../pages/About/about.scss";
import "../pages/Product/product.scss";
import "../pages/Contact/contact.scss";
import "../pages/Portfolio/portfolio.scss";
import "../Component/Navbar/navbarrespon.scss";
//components
import "../Component/Home/mainproducts.scss";
import "../Component/Home/producthightlight.scss";
import "../Component/Home/customer.scss";
import "../Component/Navbar/navbar.scss";
import "../Component/Footer/footer.scss";
import "../Component/Home/ourproducts.scss";
import "../Component/Product/allourProduct.scss";
import "../Component/Contact/maincontact.scss";
import "../Component/Contact/map.scss";
import "../Component/Product/production.scss";
import "../Component/Portfolio/mainportfolio.scss";
import "../Component/Portfolio/portfolioitems.scss";
import "../Component/Cleaning/cleaningproduct.scss";

import Layout from "../Layout/Layout";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
export default MyApp;
