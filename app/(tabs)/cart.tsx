import { useSelector } from "react-redux";
import { FlashList } from '@shopify/flash-list';
import { CartItemCard } from '../../components/CartItemCard';
import { Tabs } from 'expo-router';
import { Box, Button, HStack, Heading, ButtonText } from "@gluestack-ui/themed"
import { getCartItems, getCartTotalQuantity, getCartTotalSum } from '../../store/services/cardService';

export default function CartScreen() {

    const cartItems = useSelector(getCartItems);
    const totalQuantity = useSelector(getCartTotalQuantity);
    const totalSum = useSelector(getCartTotalSum);


    return (
        <>
            <Tabs.Screen options={{ tabBarBadge: totalQuantity }} />
            <FlashList
                data={cartItems}
                renderItem={({ item }: any) => <CartItemCard item={item} />}
                estimatedItemSize={200}
            />
            <Box bg="$warmGray300" p="$3">
                <HStack space="$3">
                    <Box w="$3/5">
                        <Heading size="md">Qty: {totalQuantity}</Heading>
                        <Heading size="md">Total: $ {totalSum.toFixed(2)}</Heading>
                    </Box>
                    <Box w="$2/5" py="$2">
                        <Button size="sm" bg="$green800">
                            <ButtonText>Checkout</ButtonText>
                        </Button>
                    </Box>
                </HStack>
                
            </Box>
        </>
    );
}