import { Button, Container, Flex, HStack, Text, useColorMode, Modal, useDisclosure, 
	ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalFooter, ModalBody, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { PlusSquareIcon } from "@chakra-ui/icons";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { MdHelp } from "react-icons/md"

const Navbar = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	const { isOpen, onOpen, onClose } = useDisclosure()

	return (
		<Container maxW={"1140px"} px={4}>
			<Flex
				h={16}
				alignItems={"center"}
				justifyContent={"space-between"}
				flexDir={{
					base: "column",
					sm: "row",
				}}
			>
				<Text
					fontSize={{ base: "22", sm: "28" }}
					fontWeight={"bold"}
					textTransform={"uppercase"}
					textAlign={"center"}
					bgGradient={"linear(to-r, cyan.400, blue.500)"}
					bgClip={"text"}
				>
					<Link to={"/"}>Gift Store 🛒</Link>
				</Text>

				<HStack spacing={2} alignItems={"center"}>
					<Link to={"/create"}>
						<Button>
							<PlusSquareIcon fontSize={20} />
						</Button>
					</Link>
					<Button onClick={toggleColorMode}>
						{colorMode === "light" ? <IoMoon /> : <LuSun size='20' />}
					</Button>
					
					<Button leftIcon={<MdHelp/>} colorScheme='blue' variant='solid' onClick={onOpen}>
						Read Me
					</Button>
					<Modal isOpen={isOpen} onClose={onClose} size='xl'>
						<ModalOverlay />
						<ModalContent>
						<ModalHeader>Read Me</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							Hi, This is my MERN (MongoDB, Express, React, Node) project.
							<br/>
							It's a simple gift store application where you can create, read, update, and delete products (As an employee). 
							<br/>
							Plus, it has a web AI chatbot that can recommend gifts based on your preferences (As a customer).
							<br/><br/>
							<Heading size="md">Guide for the Web Application</Heading>
							<br/>
							- To create a new product, click on the plus icon [+] in the top right corner.
							<br/>	
							- To update or delete a product, click on the edit or delete icon on the product card.	
							<br/>
							- You can also change the theme of the application by clicking on the moon/sun icon.
							<br/>
							- The application is responsive and works well on mobile devices.
							<br/>
							<br/>

							<Heading size="md">Here is the Web AI Chatbot guide</Heading>
							<br/>
							- The chatbot can recommend gifts (which are in the database) based on your preferences: <i>gender, age group, and price range</i>.
							<br/>
							- The chatbot is not perfect, but it can give you some ideas for gifts.
							<br/>
							For example, you can ask:
							<br/>
							- "Can you recommend me a gift for my girlfriend?"
							<br/>
							- "What is a good gift for a 65 year old person?"
							<br/>
							<br/>
							Try it out and see what it can do! 
							<br/>
							<br/>
							<i>Thank you !</i>
						</ModalBody>

						<ModalFooter>
							<Button colorScheme='blue' mr={3} onClick={onClose}>
							Close
							</Button>
						</ModalFooter>
						</ModalContent>
					</Modal>
				</HStack>
			</Flex>
		</Container>
	);
};
export default Navbar;