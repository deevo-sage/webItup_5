import { Flex, FlexProps } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { FC } from "react";

interface ClippingContainerProps extends FlexProps {
    duration?: number;
    mode?: 0 | 1;
    delay?: number;
}

export const ClipContainer: FC<ClippingContainerProps> = ({
    duration = 1,
    mode = 0,
    delay = 1.5,
    ...props
}) => {
    return (
        <Flex
            as={motion.div}
            initial={{ height: "auto" }}
            animate={{
                height: "0px",
                overflow: "hidden",
                transition: { duration, delay: 1.5 },
            }}
            align="center"
            {...props}
        ></Flex>
    );
};
