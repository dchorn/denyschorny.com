import { Box, Flex } from "@chakra-ui/react";

import { BsHouse, BsFolder, BsHammer } from "react-icons/bs"
import { BsDiscord, BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs"

import SocialButton from "./social-button";

import styles from "./navbar.module.css";
import PageButton from "./page-button";

export default function Navbar() {
    return (
        <Box className={styles["navbar"]}>
            <Box className={styles["content"]} backgroundColor={"purple.900"}>
                <Box>
                    <PageButton Icon={BsHouse} link={"/"}>Me</PageButton>
                    <PageButton Icon={BsFolder} link={"/projects"}>Projects</PageButton>
                    <PageButton Icon={BsHammer} link={"/hireme"}>Hire Me</PageButton>
                </Box>
                <Flex className={styles["social"]}>
                    <SocialButton Icon={BsDiscord} link="https://discord.gg/u2mpj5zJW2" scheme="teal" />
                    <SocialButton Icon={BsGithub} link="https://github.com/dchorn" scheme="gray" />
                    <SocialButton Icon={BsLinkedin} link="https://www.linkedin.com/in/dchorny/" scheme="linkedin" />
                    <SocialButton Icon={BsTwitter} link="https://twitter.com/kasukitsuu" scheme="twitter" />
                </Flex>
            </Box>
        </Box>
    )
}