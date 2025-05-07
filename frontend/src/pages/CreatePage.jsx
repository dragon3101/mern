import { Box, Button, Container, Heading, Input, useColorModeValue, useToast, VStack, Select, Radio, RadioGroup,Stack  } from "@chakra-ui/react";
import { useState } from "react";
import { useProductStore } from "../store/product";

const CreatePage = () => {
	const [newProduct, setNewProduct] = useState({
		name: "",
		price: "",
		image: "",
		description: "",
		targetGender: "",
		ageGroup: ""
	});
	const toast = useToast();

	const { createProduct } = useProductStore();

	const handleAddProduct = async () => {
		const { success, message } = await createProduct(newProduct);
		if (!success) {
			toast({
				title: "Error",
				description: message,
				status: "error",
				isClosable: true,
			});
		} else {
			toast({
				title: "Success",
				description: message,
				status: "success",
				isClosable: true,
			});
		}
		setNewProduct({ name: "", price: "", image: "", description: "", targetGender: "", ageGroup: "" });
	};

	return (
		<Container maxW={"container.sm"}>
			<VStack spacing={8}>
				<Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
					Create New Product
				</Heading>

				<Box w={"full"} bg={useColorModeValue("white", "gray.800")} p={6} rounded={"lg"} shadow={"md"}>
					<VStack spacing={4}>
						<Input
							placeholder='Product Name'
							name='name'
							value={newProduct.name}
							onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
						/>
						<Input
							placeholder='Price'
							name='price'
							type='number'
							value={newProduct.price}
							onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
						/>
						<Input
							placeholder='Image URL'
							name='image'
							value={newProduct.image}
							onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
						/>
						<Input
							placeholder='Description'
							name='description'
							value={newProduct.description} 
							onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
						/>
						<RadioGroup value={newProduct.targetGender}
							onChange={(value) => setNewProduct({ ...newProduct, targetGender: value })}>
							<Stack direction='row'>
								<Radio value='male'>Male</Radio>
								<Radio value='female'>Female</Radio>
							</Stack>
						</RadioGroup>
						<Select placeholder='Select Age Group' value={newProduct.ageGroup}
							onChange={(e) => setNewProduct({ ...newProduct, ageGroup:e.target.value }) }> 
							<option value='kid'>Kid (less than 10 years old)</option>
							<option value='juvenile'>Juvenile (10 to 20)</option>
							<option value='young'>Young (20-40)</option>
							<option value='middleage'>Middle age (40-60)</option>
							<option value='old'>Old (older than 60)</option>
						</Select>

						<Button colorScheme='blue' onClick={handleAddProduct} w='full'>
							Add Product
						</Button>
					</VStack>
				</Box>
			</VStack>
		</Container>
	);
};
export default CreatePage;