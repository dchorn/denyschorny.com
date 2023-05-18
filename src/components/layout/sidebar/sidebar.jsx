import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";

import styles from "./sidebar.module.css";

function AboutMeSection({ label, value }) {
    return (
        <Flex justifyContent={"space-between"} margin={"10px 0"}>
            <Text fontWeight={"bold"}>{label}</Text>
            <Text>{value}</Text>
        </Flex>
    )
}

export default function Sidebar() {
    return (
        <Box className={styles["sidebar"]}>
            <Box className={styles["content"]} backgroundColor={"purple.900"}>
                <Heading margin={"10px 0"} size={"md"}>🌱 About me</Heading>
                <AboutMeSection label={"Age"} value={"22"}/>
                <AboutMeSection label={"Birthday"} value={"Feb, 20"}/>
                <AboutMeSection label={"Country"} value={"Spain"}/>
                <AboutMeSection label={"State"} value={"Barcelona"}/>
            </Box>

            <Box marginTop={"25px"} className={styles["content"]} backgroundColor={"purple.900"}>
                <Heading margin={"10px 0"} size={"md"}>🎁 Support my work</Heading>
                <Text margin={"10px 0"}>
                    If you appreciate the work I'm doing and would like to see more, consider supporting me. This helps me continue to contribute to the open source community.
                </Text>

                <Button
                    as={"a"}
                    margin={"10px 0"}
                    colorScheme={"red"}
                    href={"https://patreon.com/DenysChorny"}
                    target={"_blank"}
                    referrerPolicy={"no-referrer"}
                >Patreon</Button>
            </Box>
        </Box>
    )
}
