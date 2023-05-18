import { Avatar, Badge, Box, Flex, Heading, Text } from "@chakra-ui/react";

function TechIcon({ id }) {
    return (
        <Box height={"32px"} marginRight={"5px"}>
            <img height={"100%"} src={"/icons/technologies/" + id + ".webp"} alt={id + " icon"} />
        </Box>
    )
}

export default function PresentationCard() {
    return (
        <Flex>
            <Box>
                <Box>
                    <Avatar size="2xl" src="https://avatars.githubusercontent.com/u/58813333?v=4" />
                </Box>
                <Box textAlign={"center"}>
                    <Badge colorScheme={"pink"}>Available to Hire</Badge>
                </Box>
            </Box>
            <Box marginLeft={"20px"}>
                <Heading size={"xl"}>Denys</Heading>
                <Text>⚛️ React frontend dev, backend on Next.js.</Text>
                <Text>🐍 Python and Bioinformatics dev with 1 year of experience.</Text>
                <Text>📚 Learning is a form of life.</Text>

                <Flex marginTop={"5px"}>
                    <TechIcon id={"html"} />
                    <TechIcon id={"java"} />
                    <TechIcon id={"javascript"} />
                    <TechIcon id={"mongodb"} />
                    <TechIcon id={"mysql"} />
                    <TechIcon id={"nextjs"} />
                    <TechIcon id={"nginx"} />
                    <TechIcon id={"nodejs"} />
                    <TechIcon id={"python"} />
                    <TechIcon id={"react"} />
                    <TechIcon id={"typescript"} />
                </Flex>
            </Box>

        </Flex>
    )
}