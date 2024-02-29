import React from "react";
import { Box, Card, HStack, Heading, Text } from '@gluestack-ui/themed';

import CartItem from "../types/CartItem";
import { CartItemButtons } from "./CartItemButtons";

interface CartItemCardProps {
    item: CartItem;
}

export const CartItemCard: React.FC<CartItemCardProps> = ({ item }) => {
    const { id, title, quantity, price } = item;

    return (
        <Card size="md" variant="elevated" my="$1">
            <HStack space="$2">
                <Box w="$3/5">
                    <Text fontWeight="$black" size="sm">
                        {title}
                    </Text>
                </Box>
                <Box w="$2/5" alignItems="flex-end">

                    <CartItemButtons item={item} />

                    <Text fontWeight="$normal" size="sm">
                        {quantity} x {price}
                    </Text>
                    <Heading mb="$1" size="xs">
                        Total: {(quantity * price).toFixed(2)}
                    </Heading>
                </Box>
            </HStack>
        </Card>
    )
}