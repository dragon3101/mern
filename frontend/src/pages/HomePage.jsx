import { Container, SimpleGrid, Text, VStack, HStack, Button } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";


const HomePage = () => {
	const { fetchProducts, products } = useProductStore();

	useEffect(() => {
		fetchProducts();
	}, [fetchProducts]);	
	console.log("products", products);
	// const fakeProduct ={
	// 	_id: "1001",
	// 	name: "Product 1",
	// 	price: 100,
	// 	description: "This is product 1",
	// 	image: "https://via.placeholder.com/150",
	// 	ageGroup: "young",
	// 	targetGender:"male"
	// }
	// if(products.length ==0) products.push(fakeProduct);

	return (
		<Container maxW='container.xl' py={12}>
			<VStack spacing={8}>
					<Text
						fontSize={"30"}
						fontWeight={"bold"}
						bgGradient={"linear(to-r, cyan.400, blue.500)"}
						bgClip={"text"}
						textAlign={"center"}
					>
						All Presents
					</Text>

				<SimpleGrid
					columns={{
						base: 1,
						md: 2,
						lg: 3,
					}}
					spacing={10}
					w={"full"}
				>
					{products.map((product) => (
						<ProductCard key={product._id} product={product} />
					))}
				</SimpleGrid>

				{products.length === 0 && (
					<Text fontSize='xl' textAlign={"center"} fontWeight='bold' color='gray.500'>
						No products found 😢{" "}
						<Link to={"/create"}>
							<Text as='span' color='blue.500' _hover={{ textDecoration: "underline" }}>
								Create a product
							</Text>
						</Link>
					</Text>
				)}
			</VStack>
		</Container>
	);
};
export default HomePage;