import { Flex, Progress, Text } from "@chakra-ui/react";
import { motion, useSpring } from "framer-motion";
import React, { FC, useEffect, useState } from "react";
import { ClipContainer } from "./clipping";
interface LoadingProps {}

export const Loading: FC<LoadingProps> = ({}) => {
    return (
        <Flex
            pos={"fixed"}
            h="100vh"
            w="100vw"
            bg="white"
            as={motion.div}
            animate={{
                opacity: [1, 0.7, 0.3, 0],
                transition: {
                    duration: 1,
                    delay: 3,
                },
            }}
            align="center"
            justify={"center"}
        >
            <Flex
                as={motion.div}
                initial={{ height: "0px" }}
                animate={{
                    height: "100vh",
                    transition: {
                        duration: 1,
                        delay: 3,
                    },
                }}
                w="100vw"
                pos={"absolute"}
                h="100vh"
                bg="black"
            ></Flex>
            <Flex direction={"column"} pos="relative">
                <Flex
                    pos={"absolute"}
                    top="-6rem"
                    w="100vw"
                    h="100px"
                    justify={"center"}
                    align={"center"}
                >
                    <ClipContainer w="100%" justify={"center"}>
                        <Text
                            as={motion.h3}
                            animate={{ scale: [4, 1], opacity: [0.2, 1] }}
                            fontFamily={"JetBrains Mono"}
                            fontWeight="500"
                            fontSize={"3xl"}
                            mb="0"
                            color={"black"}
                            letterSpacing="wider"
                        >
                            SIDHARTH & RUPA
                        </Text>
                    </ClipContainer>
                </Flex>
                <LoadProgress />
            </Flex>
        </Flex>
    );
};
const LoadProgress = () => {
    // const [val, setVal] = useState(0);
    const duration = 1500;
    const val = useSpring("0%", { duration: duration });
    useEffect(() => {
        setTimeout(() => {
            val.set("100%");
        }, 500);
    }, []);
    return (
        <Flex
            w="100vw"
            h="4px"
            align={"center"}
            borderRadius={"md"}
            justify={"center"}
        >
            <Flex
                as={motion.div}
                initial={{ width: "300px", height: "4px" }}
                animate={{
                    width: "100vw",
                    height: "2px",
                    transition: { delay: 2, duration: 1 },
                }}
                w="250px"
                borderRadius="lg"
                h="100%"
                bg="gray.400"
            >
                <Flex
                    as={motion.div}
                    bg="black"
                    style={{ width: val }}
                    // animate={{ width: val.get() + "%" }}
                    h="100%"
                ></Flex>
            </Flex>
        </Flex>
    );
};
