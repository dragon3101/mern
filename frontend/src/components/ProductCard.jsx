import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
	Box,
	Button,
	Heading,
	HStack,
	IconButton,
	Image,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
	useColorModeValue,
	useDisclosure,
	useToast,
	VStack,
	Select, Radio, RadioGroup,Stack 
} from "@chakra-ui/react";
import { useProductStore } from "../store/product";
import { useState } from "react";

const ProductCard = ({ product }) => {
	const [updatedProduct, setUpdatedProduct] = useState(product);

	const textColor = useColorModeValue("gray.600", "gray.200");
	const bg = useColorModeValue("white", "gray.800");

	const { deleteProduct, updateProduct } = useProductStore();
	const toast = useToast();
	const { isOpen, onOpen, onClose } = useDisclosure();

	const handleDeleteProduct = async (pid) => {
		const { success, message } = await deleteProduct(pid);
		if (!success) {
			toast({
				title: "Error",
				description: message,
				status: "error",
				duration: 3000,
				isClosable: true,
			});
		} else {
			toast({
				title: "Success",
				description: message,
				status: "success",
				duration: 3000,
				isClosable: true,
			});
		}
	};

	const handleUpdateProduct = async (pid, updatedProduct) => {
		const { success, message } = await updateProduct(pid, updatedProduct);
		onClose();
		if (!success) {
			toast({
				title: "Error",
				description: message,
				status: "error",
				duration: 3000,
				isClosable: true,
			});
		} else {
			toast({
				title: "Success",
				description: "Product updated successfully",
				status: "success",
				duration: 3000,
				isClosable: true,
			});
		}
	};

	return (
		<Box
			shadow='lg'
			rounded='lg'
			overflow='hidden'
			transition='all 0.3s'
			_hover={{ transform: "translateY(-5px)", shadow: "xl" }}
			bg={bg}
		>
			<Image src={product.image} alt={product.name} h={64} w='full' objectFit='cover' />

			<Box p={4}>
				<Heading as='h3' size='md' mb={2}>
					{product.name}
				</Heading>

				<Text fontWeight='bold' fontSize='xl' color={textColor} mb={4}>
					${product.price}
				</Text>

				<HStack spacing={2}>
					<IconButton icon={<EditIcon />} onClick={onOpen} colorScheme='blue' />
					<IconButton
						icon={<DeleteIcon />}
						onClick={() => handleDeleteProduct(product._id)}
						colorScheme='red'
					/>
				</HStack>
			</Box>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />

				<ModalContent>
					<ModalHeader>Update Product</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<VStack spacing={4}>
							<Input
								placeholder='Product Name'
								name='name'
								value={updatedProduct.name}
								onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
							/>
							<Input
								placeholder='Price'
								name='price'
								type='number'
								value={updatedProduct.price}
								onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
							/>
							<Input
								placeholder='Image URL'
								name='image'
								value={updatedProduct.image}
								onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
							/>
							<Input
								placeholder='Description'
								name='description'
								value={updatedProduct.description}
								onChange={(e) => setUpdatedProduct({ ...updatedProduct, description: e.target.value })}
							/>
							<RadioGroup value={updatedProduct.targetGender}
								onChange={(value) => setUpdatedProduct({ ...updatedProduct, targetGender: value })}>
								<Stack direction='row'>
									<Radio value='male'>Male</Radio>
									<Radio value='female'>Female</Radio>
								</Stack>
							</RadioGroup>
							<Select placeholder='Select Age Group' value={updatedProduct.ageGroup}
								onChange={(e) => setUpdatedProduct({ ...updatedProduct, ageGroup:e.target.value }) }> 
								<option value='kid'>Kid (less than 10 years old)</option>
								<option value='juvenile'>Juvenile (10 to 20)</option>
								<option value='young'>Young (20-40)</option>
								<option value='middleage'>Middle age (40-60)</option>
								<option value='old'>Old (older than 60)</option>
							</Select>
						</VStack>
					</ModalBody>

					<ModalFooter>
						<Button
							colorScheme='blue'
							mr={3}
							onClick={() => handleUpdateProduct(product._id, updatedProduct)}
						>
							Update
						</Button>
						<Button variant='ghost' onClick={onClose}>
							Cancel
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</Box>
	);
};
export default ProductCard;