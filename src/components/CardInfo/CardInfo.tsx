import { Box, Text } from "@chakra-ui/react";

interface ICardInfo{
    mainContent: string;
    content: string;
}

const CardInfo = ({mainContent, content}: ICardInfo) => {
  return (
    <Box backgroundColor="white" width={320} minHeight="25vh" padding={8} borderRadius="25px">
        <Text fontSize="2xl" fontWeight="bold">{mainContent}</Text>
        <Text fontSize="xl" fontWeight="bold">{content}</Text>
    </Box>
  );
};

export default CardInfo;
