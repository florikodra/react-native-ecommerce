import { Badge, BadgeText, Box, Card, HStack, Heading, Image, Pressable, Text } from "@gluestack-ui/themed";
import AddToCartButton from '@/components/AddToCartButton';
import { router } from 'expo-router';
import Product from "../types/Product";

export const ProductCard: React.FC<Product> = (props) => {
    const { id, title, description, category, price, image } = props;
    return (
      <Pressable
        onPress={() => router.push(`/shop/product/${id}`)}
      >
        <Badge
          w="auto"
          bg="$warmGray400"
          borderRadius="$sm"
          mb={-15}
          ml={10}
          zIndex={10}
          variant="solid"
          alignSelf="flex-start"
        >
          <BadgeText color="$white">{category}</BadgeText>
        </Badge>
        <Card size="md" my="$2">
          <HStack space="sm" reversed={false}>
            <Box w="$1/4">
              <Image
                size="md"
                source={{
                  uri: image,
                }}
                alt={title}
              />
            </Box>
            <Box w="$3/4">
              <Box w="$1/2">
  
              </Box>
              <Heading mb="$1" size="sm" isTruncated>{title}</Heading>
              <Text size="xs" isTruncated>{description}</Text>
              <HStack space="sm" reversed={false} px="$3" mt="$3">
                <Box w="$1/3">
                  <Heading size="md">$ {price}</Heading>
                </Box>
                <Box w="$2/3">
                  <AddToCartButton product={props} />
                </Box>
              </HStack>
            </Box>
          </HStack>
        </Card>
      </Pressable>
    )
  }