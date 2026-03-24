import {
	Avatar,
	Badge,
	Box,
	Button,
	Container,
	Flex,
	Heading,
	HStack,
	Icon,
	Image,
	ListItem,
	SimpleGrid,
	Stack,
	Text,
	UnorderedList,
	useColorModeValue,
	VStack,
} from "@chakra-ui/react";
import { ChatIcon, EditIcon, EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import profileImage from "../assets/profile_image.jpg";
import {
	SiAngular,
	SiChakraui,
	SiCss3,
	SiGithub,
	SiExpress,
	SiGit,
	SiHtml5,
	SiJavascript,
	SiMongodb,
	SiMysql,
	SiNodedotjs,
	SiPhp,
	SiPostgresql,
	SiPython,
	SiReact,
	SiLinkedin,
	SiVite,
} from "react-icons/si";

const skillGroups = [
	{
		title: "Languages",
		items: ["PHP", "JavaScript", "SQL", "Python", "HTML5", "CSS3"],
	},
	{
		title: "Frameworks & Libraries",
		items: ["React", "ExtJS", "TCPDF", "Zustand", "D3.js", "Angular"],
	},
	{
		title: "Backend & APIs",
		items: ["REST APIs", "MVC patterns", "JSON", "HTTP fundamentals"],
	},
	{
		title: "Databases & Tools",
		items: ["MySQL", "PostgreSQL", "MongoDB", "Git", "Apache", "Agile/Scrum"],
	},
];

const experienceItems = [
	{
		title: "Hilltop Ranch Inc",
		role: "Web Developer / Maintainer",
		period: "Aug 2021 - Feb 2022, Feb 2023 - Dec 2025",
		points: [
			"Maintained and enhanced internal ERP web applications for business and finance teams in Agile sprint cycles.",
			"Refactored a legacy PHP codebase from PHP 5.4 to 8.1 and ExtJS 4.2 to 7.6 to improve performance, security, and maintainability.",
			"Designed RESTful APIs and optimized MySQL queries to improve reporting and workflow efficiency.",
			"Worked with stakeholders and developers to translate evolving business requirements into practical technical solutions.",
		],
	},
	{
		title: "T3 Direct Marketing",
		role: "Web Developer",
		period: "Jun 2019 - Sep 2019",
		points: [
			"Built DOCX and PDF upload and download functionality in an Angular-based ERP system integrated with a PHP backend.",
			"Proposed a new system architecture with mockups and cost estimates to improve performance and scalability.",
		],
	},
	{
		title: "Intelligent Digital Solution",
		role: "Mobile Developer",
		period: "Apr 2017 - Sep 2017",
		points: [
			"Developed Android applications using Java, Android Studio, and RESTful APIs.",
			"Contributed to a Spring-based e-commerce platform by building login functionality and supporting frontend integration.",
		],
	},
];

const educationItems = [
	"California State University, Long Beach - Master's Degree in Computer Science (2019 - 2021)",
	"HCMC University of Technology - Bachelor's Degree in Computer Science (2012 - 2017)",
	"Coursera - Certificate in Deep Learning (2018)",
];

const techStack = [
	{ label: "React", icon: SiReact, color: "blue.400" },
	{ label: "Node.js", icon: SiNodedotjs, color: "green.500" },
	{ label: "Express", icon: SiExpress, color: "gray.500" },
	{ label: "MongoDB", icon: SiMongodb, color: "green.600" },
	{ label: "JavaScript", icon: SiJavascript, color: "yellow.400" },
	{ label: "PHP", icon: SiPhp, color: "purple.400" },
	{ label: "MySQL", icon: SiMysql, color: "blue.500" },
	{ label: "PostgreSQL", icon: SiPostgresql, color: "blue.600" },
	{ label: "Python", icon: SiPython, color: "yellow.500" },
	{ label: "Angular", icon: SiAngular, color: "red.500" },
	{ label: "Chakra UI", icon: SiChakraui, color: "teal.400" },
	{ label: "Vite", icon: SiVite, color: "yellow.500" },
	{ label: "Voiceflow", icon: ChatIcon, color: "pink.400" },
	{ label: "Git", icon: SiGit, color: "orange.500" },
	{ label: "Codex", icon: EditIcon, color: "gray.700" },
	{ label: "HTML5", icon: SiHtml5, color: "orange.400" },
	{ label: "CSS3", icon: SiCss3, color: "blue.400" },
];

const SectionCard = ({ title, children }) => (
	<Box
		bg={useColorModeValue("white", "gray.800")}
		borderWidth='1px'
		borderColor={useColorModeValue("gray.200", "gray.700")}
		rounded='2xl'
		p={6}
		shadow='sm'
	>
		<Heading size='md' mb={4}>
			{title}
		</Heading>
		{children}
	</Box>
);

const AboutMePage = () => {
	const heroBg = useColorModeValue("white", "gray.800");
	const heroBorder = useColorModeValue("gray.200", "gray.700");
	const mutedText = useColorModeValue("gray.600", "gray.300");
	const panelBg = useColorModeValue("gray.50", "whiteAlpha.100");

	return (
		<Container maxW='container.xl' py={{ base: 8, md: 12 }}>
			<VStack spacing={8} align='stretch'>
				<Box
					bg={heroBg}
					borderWidth='1px'
					borderColor={heroBorder}
					rounded='3xl'
					p={{ base: 6, md: 10 }}
					shadow='md'
					backgroundImage={useColorModeValue(
						"linear-gradient(135deg, rgba(49,151,149,0.08), rgba(49,130,206,0.10))",
						"linear-gradient(135deg, rgba(49,151,149,0.18), rgba(49,130,206,0.16))"
					)}
				>
					<SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems='center'>
						<Stack spacing={5}>
							<Badge colorScheme='teal' w='fit-content' px={3} py={1} rounded='full'>
								About Me
							</Badge>
							<Heading size='2xl'>Thien Dang</Heading>
							<Text fontSize='xl' color={mutedText} fontWeight='semibold'>
								Full-Stack Web Developer
							</Text>
							<Text color={mutedText}>
								Full-stack developer with 4+ years of experience building and improving internal business
								applications, modernizing legacy systems, and delivering reliable web solutions across the
								full stack.
							</Text>
							<Stack spacing={3}>
								<HStack align='start'>
									<EmailIcon mt={1} color='teal.400' />
									<Text>dragon31194@gmail.com</Text>
								</HStack>
								<HStack align='start'>
									<PhoneIcon mt={1} color='teal.400' />
									<Text>(209) 324-2079</Text>
								</HStack>
								<HStack align='start'>
									<Avatar size='xs' name='Thien Dang' bg='teal.500' />
									<Text>Lathrop, CA</Text>
								</HStack>
							</Stack>
							<HStack spacing={3} wrap='wrap'>
								<Button
									as='a'
									href='https://www.linkedin.com/in/thiendang94/'
									target='_blank'
									rel='noreferrer'
									leftIcon={<Icon as={SiLinkedin} />}
									bg='blue.500'
									color='white'
									_hover={{ bg: "blue.600" }}
								>
									LinkedIn
								</Button>
								<Button
									as='a'
									href='https://github.com/dragon3101'
									target='_blank'
									rel='noreferrer'
									leftIcon={<Icon as={SiGithub} />}
									colorScheme='gray'
									variant='outline'
								>
									GitHub
								</Button>
							</HStack>
						</Stack>

						<Flex justify={{ base: "center", md: "flex-end" }}>
							<Image
								src={profileImage}
								alt='Thien Dang profile'
								objectFit='cover'
								boxSize={{ base: "260px", md: "320px" }}
								rounded='3xl'
								shadow='xl'
								borderWidth='4px'
								borderColor={useColorModeValue("white", "gray.700")}
							/>
						</Flex>
					</SimpleGrid>
				</Box>

				<SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6}>
					<SectionCard title='Professional Summary'>
						<Text color={mutedText} lineHeight='tall'>
							Strong background in maintaining and upgrading legacy ERP systems, designing RESTful APIs,
							debugging frontend and backend issues, and collaborating with cross-functional teams to deliver
							secure and maintainable software in Agile environments.
						</Text>
					</SectionCard>

					<SectionCard title='Portfolio Tech Stack'>
						<SimpleGrid columns={{ base: 2, sm: 3, md: 4 }} spacing={4}>
							{techStack.map((item) => (
								<VStack
									key={item.label}
									spacing={2}
									bg={panelBg}
									rounded='xl'
									p={4}
									borderWidth='1px'
									borderColor={heroBorder}
								>
									<Icon as={item.icon} boxSize={7} color={item.color} />
									<Text fontSize='sm' textAlign='center'>
										{item.label}
									</Text>
								</VStack>
							))}
						</SimpleGrid>
					</SectionCard>
				</SimpleGrid>

				<SectionCard title='Experience'>
					<Stack spacing={6}>
						{experienceItems.map((item) => (
							<Box key={`${item.title}-${item.period}`}>
								<Heading size='sm'>{item.title}</Heading>
								<Text fontWeight='semibold' mt={1}>
									{item.role}
								</Text>
								<Text color={mutedText} mb={3}>
									{item.period}
								</Text>
								<UnorderedList spacing={2}>
									{item.points.map((point) => (
										<ListItem key={point} color={mutedText}>
											{point}
										</ListItem>
									))}
								</UnorderedList>
							</Box>
						))}
					</Stack>
				</SectionCard>

				<SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6}>
					<SectionCard title='Core Skills'>
						<Stack spacing={4}>
							{skillGroups.map((group) => (
								<Box key={group.title}>
									<Text fontWeight='bold' mb={2}>
										{group.title}
									</Text>
									<Flex wrap='wrap' gap={2}>
										{group.items.map((item) => (
											<Badge key={item} colorScheme='blue' px={3} py={1} rounded='full'>
												{item}
											</Badge>
										))}
									</Flex>
								</Box>
							))}
						</Stack>
					</SectionCard>

					<SectionCard title='Projects & Education'>
						<Stack spacing={5}>
							<Box>
								<Text fontWeight='bold' mb={2}>
									Featured Project
								</Text>
								<Text color={mutedText} lineHeight='tall'>
									AI-Powered Gift Recommendation Web App built with React, Node.js, Express, MongoDB,
									Zustand, Chakra UI, Voiceflow, Make.com, Vite, and Codex. It delivers personalized gift
									recommendations through an AI-powered assistant and responsive user workflows.
								</Text>
							</Box>
							<Box>
								<Text fontWeight='bold' mb={2}>
									Education
								</Text>
								<UnorderedList spacing={2}>
									{educationItems.map((item) => (
										<ListItem key={item} color={mutedText}>
											{item}
										</ListItem>
									))}
								</UnorderedList>
							</Box>
						</Stack>
					</SectionCard>
				</SimpleGrid>
			</VStack>
		</Container>
	);
};

export default AboutMePage;
