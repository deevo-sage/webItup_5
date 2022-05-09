import React, { Suspense, useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";

import { Loading } from "@components";
import { S1 } from "@components/s1";

const Home: React.FC = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 4000);
    }, []);
    return (
        <Flex direction="column" minH="100vh" bg="gray.900" align={"center"}>
            <S1 />
            {loading ? <Loading /> : <></>}
        </Flex>
    );
};

export default Home;
