import { Button, Flex, Icon, Image, Stack, Text } from "@chakra-ui/react";
import { TSizes } from "@definitions/chakra/theme/constants";
import Link from "next/link";
import React, { FC } from "react";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
const detail = {
    category: "MEN'S T-SHIRTS",
    title: "SKYMOD T-SHIRT",
    price: "37.97 ",
    details:
        "Our new collection designer tees from SkyMod Digital Production. Show yourself!",
    section: ["Men", "T-SHIRT", "SKYMOD T-SHIRT"],
    sizes: [true, true, true, true, false, true, false, false, true, true],
    colors: ["yellow.400", "white", "limegreen", "blue.900", "gray.300"],
};
interface dataInterface {
    data: typeof detail;
}
interface S1Props extends dataInterface {
    base: number;
}

export const S1: FC<S1Props> = ({ base, data = detail }) => {
    return (
        <Flex
            h="100vh"
            w={"full"}
            maxW={"1200px"}
            bg="gray.900"
            align={"center"}
            px="2rem"
        >
            <Section1 data={data} />
            <Section2 data={data} />
            <Section3 data={data} />
        </Flex>
    );
};

interface Section2Props extends dataInterface {}

export const Section2: FC<Section2Props> = ({ data }) => {
    return (
        <Flex
            flex={1}
            direction="column"
            align={"center"}
            h="100%"
            mt="40"
            px="1rem"
            pos={"relative"}
        >
            <Flex pos={"absolute"} w="140%">
                <Image
                    mt="20"
                    mr="4"
                    width="120%"
                    src="/image/tshirt.png"
                />
            </Flex>
        </Flex>
    );
};

interface Section3Props extends dataInterface {}

export const Section3: FC<Section2Props> = ({ data }) => {
    return (
        <Flex flex={1} direction="column">
            <Flex direction={"column"} flex="1">
                <Text fontWeight={"semibold"} fontFamily={"JetBrains Mono"}>
                    SELECT SIZE (US)
                </Text>
                <Flex flexWrap={"wrap"} width="100%" fontFamily={"Jet"}>
                    {TSizes.map((item, i) => {
                        return (
                            <Flex key={i + "sizes"} flexBasis="20%" my="0.5">
                                <Button
                                    variant={"outline"}
                                    w="100%"
                                    mx="0.5"
                                    disabled={!data.sizes[i]}
                                >
                                    {item}
                                </Button>
                            </Flex>
                        );
                    })}
                    <Flex direction={"column"}>
                        <Text
                            mt="4"
                            fontWeight={"semibold"}
                            fontFamily={"JetBrains Mono"}
                        >
                            SELECT COLOR
                        </Text>
                        <Stack spacing={4} direction="row">
                            {data.colors.map((item, i) => {
                                return (
                                    <Button
                                        key={i + "colors"}
                                        bg={item}
                                        h="3rem"
                                        w={"3rem"}
                                        shadow="lg"
                                        borderRadius={"full"}
                                    ></Button>
                                );
                            })}
                        </Stack>
                    </Flex>
                </Flex>
            </Flex>
            <Flex flex="1" pt="16" justify={"end"}>
                <Stack spacing={"6"}>
                    <Link href={"#"}>
                        <Icon as={FiInstagram} h="1.25rem" w={"1.25rem"}></Icon>
                    </Link>
                    <Link href={"#"}>
                        <Icon as={FiTwitter} h="1.25rem" w={"1.25rem"}></Icon>
                    </Link>
                    <Link href={"#"}>
                        <Icon as={FiFacebook} h="1.25rem" w={"1.25rem"}></Icon>
                    </Link>
                </Stack>
            </Flex>
        </Flex>
    );
};

interface Section1Props extends dataInterface {}

export const Section1: FC<Section1Props> = ({ data = detail }) => {
    return (
        <Flex direction="column" flex="1" h="100%">
            {/* <Flex pt="2rem">
                {data.section.map((item, i) => {
                    return (
                        <Text fontSize={"sm"}>
                            &nbsp;
                            {item} {i !== data.section.length - 1 ? "/" : ""}
                        </Text>
                    );
                })}
            </Flex> */}
            <Flex
                direction={"column"}
                flex={1}
                justify="center"
                transform={"auto"}
                translateY="-5rem"
                align={"start"}
            >
                <Text fontWeight={"semibold"} mb="0">
                    {data.category}
                </Text>
                <Text
                    fontFamily={"JetBrains Mono"}
                    fontSize={"3xl"}
                    mb="0"
                    fontWeight="bold"
                >
                    {data.title}
                </Text>
                <Text fontWeight={"semibold"} mb="1rem">
                    ${data.price}
                </Text>
                <Text fontSize={"sm"} w="400px">
                    {data.details}
                </Text>
                <Button
                    variant={"outline"}
                    mt="4"
                    py="6"
                    px="8"
                    colorScheme="white"
                >
                    Add To Cart
                </Button>
            </Flex>
        </Flex>
    );
};
