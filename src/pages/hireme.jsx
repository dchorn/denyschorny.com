import { Box, Heading, Text, UnorderedList } from "@chakra-ui/react";

export default function HireMe() {
    return (
        <Box>
            <Heading size={"xl"}>Hire me</Heading>
            <Text>
                Looking to hire my services as a freelancer? I can build you a website, online store, custom software for your company, or a bioinformatics application. You can reach out to me on <b>Discord</b> or <b>Twitter</b> with a brief summary of the project along with a list of key details in a Word document (docx) or PDF. Here's an example:
            </Text>

            <Heading color={"gray.500"} margin={"20px 0"} size={"md"}>Project Name</Heading>
            <Text color={"gray.500"}>
                Hello, I want a __________ software that allows me to do __________. It needs to be customizable, configurable, and translatable. Here's a list of features that the project must have:
            </Text>
            <UnorderedList color={"gray.500"} margin={"10px"} paddingLeft={"25px"}>
                <li>Feature #1</li>
                <li>Feature #2</li>
                <li>Feature #3</li>
                <li>Feature #4</li>
                <li>Feature #5</li>
            </UnorderedList>
            <Text color={"gray.500"}>
                The project should be completed by __________ date. It's inspired by _________, which you can refer to for reference.
            </Text>
            <Text marginTop={"20px"}>
                Once I understand all the details, I can provide a price estimate and a proposed delivery date.
            </Text>
            <Text color={"orange"}>Half of the payment is required upfront before work begins, with the remaining half due upon completion.</Text>
            <Text color={"red"}>I can't issue refunds unless the software isn't functioning and I'm unable to fix it.</Text>
        </Box>
    )
}
