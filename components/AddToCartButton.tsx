import { Button, ButtonText, ButtonIcon, AddIcon, useToast, Box, Text, HStack } from "@gluestack-ui/themed"
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/slices/cartSlice";
import Product from "../types/Product";
import { getCartItemById } from "../store/slices/cartSlice";
import { CartItemButtons } from "./CartItemButtons";
export default function ({ product }) {

    const dispatch = useDispatch();
    const cardItem = useSelector(getCartItemById(product.id));

    const onAddToCart = (product: Product) => {
        dispatch(addToCart(product));

    };

    return (
        <Box alignItems="flex-end">
            {
                cardItem ?
                    <>
                        <CartItemButtons item={cardItem} />
                        <HStack space="$5">
                            <Text size="xs" fontWeight="$bold">Qty: {cardItem?.quantity}</Text>
                            <Text size="xs" ml="$3" fontWeight="$bold">Total: ${(cardItem?.price * cardItem?.quantity).toFixed(2)}</Text>
                        </HStack>
                    </>
                    :
                    <Button
                        size="xs"
                        variant="solid"
                        bg="$orange400"
                        borderColor="$orange400"
                        $hover-bg="$orange600"
                        $active-bg="$orange600"
                        isDisabled={false}
                        isFocusVisible={false}
                        borderRadius="$xl"
                        onPress={() => onAddToCart(product)}
                    >
                        <ButtonText>Add to Cart</ButtonText>
                        <ButtonIcon as={AddIcon} />
                    </Button>
            }
        </Box>
    )
}