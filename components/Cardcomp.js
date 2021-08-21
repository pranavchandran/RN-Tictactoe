import React from "react";
import { VStack, HStack, Avatar, Image, Text, NativeBaseProvider,
AspectRatio, Center, Box, Stack, Heading } from "native-base";

const Cardcomp = (props) => {
  return (
    <Box
      style={{
        width: "30%",
        height: "30%",
        borderRadius: 10,
        backgroundColor: "#fff",
        shadowColor: "#000",
        // shadowOffset: {
        //   width: 0,
        //   height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,
        elevation: 5,
      }}
    >
        <Text>{props.icon}</Text>
    </Box>
  );
};


export default Cardcomp;