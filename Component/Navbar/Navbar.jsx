import * as React from "react";
import {Box,Center, Flex, Image, Spacer, Square, Text, Heading, HStack, Stack, Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { translateLauguage } from "../Translate/Fn";
import NavbarRespon from "./NavbarRespon";
import { useRouter } from "next/router";

export default function Navbar() {

  const router = useRouter();
  const pathname = router.pathname;
  const splitePath = router.asPath.split("/");
 
  // Change Language
  const [language,setLanguage] = React.useState("kh");
  const { t } = translateLauguage(language);

  // Menu Scroll
  const [stickyNav, setStickyNav] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
      setStickyNav(window.pageYOffset === 0 ? false : true);
      return () => (window.onscroll = null);
    };
  }, []);

  // Resize width
  const [width, setWidth]= useState(0);
  const updateDimensions = () => {
      setWidth(window.innerWidth);      
  }  
  React.useEffect( () => {
    updateDimensions()
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);


  return (
    <div className="navbar-page" >
      <Box className={stickyNav ? "container-scroll" : "container"}>

        {
          width > 1024 ?

            <Flex className="menu-flex">          
              <Box className="logo">
                <Image src="/Logo.svg" alt="Vercel Logo" />
              </Box>                  
              <Spacer />
              <Box className="menu-item">
                <Link href="/" passHref>
                  <Text 
                      className="menu-title" 
                      opacity={ splitePath[1] === "" || splitePath[1] === "Home" ? "1" : "0.6"}                      
                  >
                    {t("home")}
                  </Text>
                </Link>
              </Box>
              <Box className="menu-item">
                
                <Menu>
                    <MenuButton >
                        <Text 
                          className="menu-title"
                          opacity={ splitePath[1] === "Product" || splitePath[1] === "Cleaning" ? "1" : "0.6"}   
                        >
                          {t("product")}
                        </Text>
                    </MenuButton>
                    <MenuList className="sub-menu">
                        <MenuItem className="sub-menu-item">
                            <Link href="/Product" passHref>
                              <Text 
                                  className="menu-title"
                                  opacity={ splitePath[1] === "Product" ? "1" : "0.6"}
                              >
                                {t('cosmitec')}
                              </Text>
                            </Link>
                        </MenuItem>
                        <MenuItem className="sub-menu-item">
                            <Link href="/Cleaning" passHref>
                              <Text 
                                className="menu-title"
                                opacity={ splitePath[1] === "Cleaning" ? "1" : "0.6"}
                              >{t('cleaning')}</Text>
                            </Link>
                        </MenuItem>
                                
                    </MenuList>
                </Menu>

              </Box>
              <Box className="menu-item">
                <Link href="/Portfolio" passHref>
                  <Text 
                      className="menu-title"
                      opacity={ splitePath[1] === "Portfolio" ? "1" : "0.6"}
                  >
                      {t("portfolio")}
                  </Text>
                </Link>
              </Box>
              <Box className="menu-item">
                <Link href="/About" passHref>
                  <Text 
                    className="menu-title"
                    opacity={ splitePath[1] === "About" ? "1" : "0.6"}
                  >
                    {t("about")}
                  </Text>
                </Link>
              </Box>
              <Box className="menu-item">
                <Link href="/Contact" passHref>
                  <Text 
                    className="menu-title"
                    opacity={ splitePath[1] === "Contact" ? "1" : "0.6"}
                  >
                    {t("contact")}
                  </Text>
                </Link>
              </Box>
              <Box className="menu-item">
                  <Flex>
                      {
                        language === "kh" ?
                          <>
                            <Box
                              whileHover="hover"
                              w="40%"
                              ml={"5px"}
                              mr={"5px"}
                              cursor={"pointer"}                         
                              onClick={() => setLanguage("en")}
                            >
                                <Image
                                    src="/United_Kingdom.png"
                                    borderRadius="50%"
                                    w="22px"
                                    h="22px"
                                    alt="Camflag"
                                />
                              
                            </Box>                       
                            <Text>Eng</Text>                         
                          </>
                      :
                          <>
                            <Box
                                whileHover="hover"
                                w="40%"
                                ml={"5px"}
                                mr={"5px"}
                                cursor={"pointer"}                         
                                onClick={() => setLanguage("kh")}
                            >
                                <Image
                                    src="/cambodia-flag.png"
                                    borderRadius="50%"
                                    w="22px"
                                    h="22px"
                                    alt="Camflag"
                                />                                
                            </Box>                       
                            <Text>ខ្មែរ</Text>
                          </>
                      }
                                                
                  </Flex>
              </Box>
            </Flex>
        :
            <Flex className="menu-flex">         
                <Box className="menu-item">
                    <NavbarRespon lang={language}/>
                </Box>
                <Spacer />
                <Box className="logo-mobile">
                  <Image src="/Logo.svg" alt="Vercel Logo" />
                </Box> 
                <Spacer />
                <Box className="menu-item">
                    <Box className="flat-translate">
                    <Flex>
                        {
                          language === "kh" ?
                            <>
                              <Box
                                whileHover="hover"
                                w="40%"
                                ml={"5px"}
                                mr={"5px"}
                                cursor={"pointer"}                         
                                onClick={() => setLanguage("en")}
                              >
                                  <Image
                                      src="/United_Kingdom.png"
                                      borderRadius="50%"
                                      w="22px"
                                      h="22px"
                                      alt="Camflag"
                                  />
                                
                              </Box>                       
                              <Text>Eng</Text>                         
                            </>
                        :
                            <>
                              <Box
                                  whileHover="hover"
                                  w="40%"
                                  ml={"5px"}
                                  mr={"5px"}
                                  cursor={"pointer"}                         
                                  onClick={() => setLanguage("kh")}
                              >
                                  <Image
                                      src="/cambodia-flag.png"
                                      borderRadius="50%"
                                      w="22px"
                                      h="22px"
                                      alt="Camflag"
                                  />                                
                              </Box>                       
                              <Text>ខ្មែរ</Text>
                            </>
                        }
                                                  
                        </Flex>
                    </Box>
                </Box>
            </Flex>
        }
        

        

      </Box>
      <Spacer />
    </div>
  );
}
