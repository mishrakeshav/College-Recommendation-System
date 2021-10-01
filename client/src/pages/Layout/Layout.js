import React from "react";
import {
    Avatar,
    Box,
    Collapse,
    DrawerContent,
    DrawerOverlay,
    Flex,
    Icon,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    Text,
    useColorModeValue,
    useDisclosure,
    useColorMode,
    Button,
    Drawer,
} from "@chakra-ui/react";
import {AddIcon} from '@chakra-ui/icons';
import { FaBell, FaClipboardCheck, FaRss } from "react-icons/fa";
import { FaMoon, FaSun } from "react-icons/fa";
import { AiFillGift } from "react-icons/ai";
import { BsGearFill } from "react-icons/bs";
import { FiMenu, FiSearch } from "react-icons/fi";
import { HiCode, HiCollection } from "react-icons/hi";
import { MdHome, MdKeyboardArrowRight } from "react-icons/md";
import { BrowserRouter, Switch, Route,useRouteMatch,Link } from 'react-router-dom';
    
import Recommendation from "../Recommendation/Recommendation";
import ViewColleges from "../ViewColleges/ViewColleges";


export default function Swibc() {
      const sidebar = useDisclosure();
      const integrations = useDisclosure();
        
      // Create campaign drawer hooks
      const { isOpen, onOpen, onClose } = useDisclosure();
      const btnRef = React.useRef();

      let { path, url } = useRouteMatch();
      const { toggleColorMode: toggleMode } = useColorMode();
      const SwitchIcon = useColorModeValue(FaMoon, FaSun);
      const NavItem = (props) => {
        const { icon, children, ...rest } = props;
        return (
          <Flex
            align="center"
            px="4"
            pl="4"
            py="3"
            cursor="pointer"
            color={useColorModeValue("inherit", "gray.400")}
            _hover={{
              bg: useColorModeValue("gray.100", "gray.900"),
              color: useColorModeValue("gray.900", "gray.200"),
            }}
            role="group"
            fontWeight="semibold"
            transition=".15s ease"
            {...rest}
          >
            {icon && (
              <Icon
                mr="2"
                boxSize="4"
                as={icon}
              />
            )}
            {children}
          </Flex>
        );
      };
    
      const SidebarContent = (props) => (
        <Box
          as="nav"
          pos="fixed"
          top="0"
          left="0"
          zIndex="sticky"
          h="full"
          pb="10"
          overflowX="hidden"
          overflowY="auto"
          bg={useColorModeValue("white", "gray.800")}
          borderColor={useColorModeValue("inherit", "gray.700")}
          borderRightWidth="1px"
          w="60"
          {...props}
        >
          <Flex px="4" py="5" align="center">
            <Link to="/">
              <Text
                fontSize="2xl"
                ml="2"
                color={useColorModeValue("brand.500", "white")}
                fontWeight="semibold"
              >
                CRS
              </Text>
            </Link>
          </Flex>
          <Flex
            direction="column"
            as="nav"
            fontSize="sm"
            color="gray.600"
            aria-label="Main Navigation"
          >
            <Link to={path}>
            <NavItem icon={MdHome}>Home</NavItem>
            </Link>
            <NavItem icon={FaRss}>Search College</NavItem>
            <NavItem icon={FaClipboardCheck}>Recommendation</NavItem>
           
          </Flex>
        </Box>
      );
      return (
        <>
        
        <Box
          as="section"
          bg={useColorModeValue("gray.50", "gray.700")}
          minH="100vh"
        >
          <SidebarContent display={{ base: "none", md: "unset" }} />
         
          <Drawer
            isOpen={sidebar.isOpen}
            onClose={sidebar.onClose}
            placement="left"
          >
            <DrawerOverlay />
            <DrawerContent>
              <SidebarContent w="full" borderRight="none" />
            </DrawerContent>
          </Drawer>
          <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
            <Flex
              as="header"
              align="center"
              justify="space-between"
              w="full"
              px="4"
              bg={useColorModeValue("white", "gray.800")}
              borderBottomWidth="1px"
              borderColor={useColorModeValue("inherit", "gray.700")}
              h="14"
            >
              <IconButton
                aria-label="Menu"
                display={{ base: "inline-flex", md: "none" }}
                onClick={sidebar.onOpen}
                icon={<FiMenu />}
                size="sm"
              />
              <InputGroup w="96" display={{ base: "none", md: "flex" }}>
                <InputLeftElement color="gray.500" children={<FiSearch />} />
                <Input  placeholder="Search for college..." />
                
              </InputGroup>
    
              <Flex align="center">
                {/* <Link to={`${path}/new`}>
                  <Button 
                    colorScheme="brand" 
                    size="sm" 
                    mr={[1,1,3]}
                    ref={btnRef}
                  > 
                    Create <AddIcon ml={[1,1,2]} /> 
                  </Button>
                </Link> */}
                
                <Avatar
                  mr="4"
                  size="sm"
                  name="anubra266"
                  src="https://avatars.githubusercontent.com/u/30869823?v=4"
                  cursor="pointer"
                />
                <Icon mr={4} ml={4} color="gray.500" as={SwitchIcon} cursor="pointer" onClick={toggleMode}/>
              </Flex>
            </Flex>
    
            <Box as="main" p="4">
              <Switch>
                <Route path={path} exact>
                    
                </Route>
                <Route path={`${path}/recommendation`}>
                    <Recommendation />
                </Route>
                <Route path={`${path}/colleges`}>
                    <ViewColleges />
                </Route>
              </Switch>
            </Box>
          </Box>
        </Box>
        
        </>
      );
    }