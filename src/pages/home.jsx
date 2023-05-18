import { Box, Heading, Text } from "@chakra-ui/react";
import PresentationCard from "../components/ui/presentation-card";

export default function Home() {
    return (
        <Box>
            <PresentationCard />

            <Box marginTop={"20px"}>
                <Heading size={"xl"}>Who am I?</Heading>
                <Text>
                    My name is Denys, I am a 22yo programmer from Spain who enjoys crafting 📖 libraries, 💻 APIs, 🎮 games, 🛍️ web stores and 🧬 bioinformatics applications.
                </Text>

                <Text marginTop={"20px"}>
                    I am incredibly passionate about programming and 🌱 sustainability. Though I am a fullstack developer, my preference lies with backend development.
                </Text>

                <Text marginTop={"20px"}>
                    My go-to programming languages are 💛 JavaScript and 🐍 Python. Outside of coding, I have a liking for 🍵 tea, 🏋️‍♂️ calisthenics, 📺 anime, 🎵 music, and 📚 books.
                </Text>

            </Box>

        </Box>
    )
}