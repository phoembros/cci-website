import Image from "next/image";
import { Box, Center } from "@chakra-ui/react";
import {
  Text,
  List,
  ListItem,
  ListIcon,
  SimpleGrid,
} from "@chakra-ui/react";
import logo from "../../public/logo.svg";
import { BsTelephoneInboundFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { MdFacebook } from "react-icons/md";
import {FiInstagram} from "react-icons/fi";

export default function Footer() {
  return (
    <div className="footer-page">
      <div className="container">
        <SimpleGrid
          minChildWidth="120px"
          columns={6}
          spacingX="40px"
          spacingY="20px"
          className="list"
        >
          <Box className="logo" height="auto">
            <Center>
              <Image  src={logo}  width="120px" height="120px"/>
            </Center>
            <Text className="text">CCI</Text>
          </Box>
          <Box className="box-mark" >
            <List spacing={1} className="list">
              <Text className="text-style">ទំនាក់ទំនង</Text>

              <ListItem className="list_item">
                <ListIcon className="icon-phone" as={BsTelephoneInboundFill} />
                  012 899 890
              </ListItem>

              <ListItem className="list_item">
                <ListIcon className="icon-item" as={HiOutlineMail} />
                info@cci.com
              </ListItem>
            </List>
          </Box>
          <Box className="box-mark">
            
            <List spacing={1} className="list">
              <Text className="text-style">បណ្តាញសង្គម</Text>
              <ListItem className="list_item">
                <ListIcon className="icon-item" as={MdFacebook} />
                CCI Official
              </ListItem>

              <ListItem className="list_item">
                <ListIcon className="icon-item" as={FiInstagram} />
                cci_officail
              </ListItem>
            </List>
           
          </Box>
          <Box className="box-mark">
            <Text className="text">@រក្សាសិទ្ធដោយក្រុមហ៊ុន CCI</Text>
          </Box>
          
        </SimpleGrid>
       
      </div>
    </div>
  );
}
