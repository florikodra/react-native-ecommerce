import { View, ScrollView, Image, Heading, Text, Box, HStack, Badge, BadgeText } from '@gluestack-ui/themed';
import AddToCartButton from './AddToCartButton';

export default function ProductScreenInfo(product) {
    const { title, description, price, image, category } = product;
    return (
        <ScrollView>
            <Image
                size="full"
                height={300}
                source={{
                    uri: image,
                }}
                alt={title}
            />
            <Box pb="$10">
                <Box p="$3">
                    <Badge w="auto"
                        bg="$blue100"
                        variant="solid"
                        alignSelf="flex-start">
                        <BadgeText>{category}</BadgeText>
                    </Badge>
                    <Heading>{title}</Heading>
                </Box>

                <HStack p="$5" bg="$light200">
                    <Box w="$1/3">
                        <Text size="sm" fontWeight="$bold">Price:</Text>
                        <Heading>$ {price}</Heading>

                    </Box>
                    <Box w="$2/3">
                        <AddToCartButton product={product} />
                    </Box>
                </HStack>
                <Box p="$3">
                    <Text>{description}</Text>
                </Box>
            </Box>
        </ScrollView>
    )
}