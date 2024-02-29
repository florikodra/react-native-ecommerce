import React from "react";
import { useDispatch } from "react-redux";
import { ButtonGroup,  AddIcon, RemoveIcon, TrashIcon, Button, ButtonIcon } from '@gluestack-ui/themed';


import { increaseQuantity, decreaseQuantity, removeItem } from '../store/slices/cartSlice';
import CartItem from "../types/CartItem";

interface CartItemCardProps {
    item: CartItem;
}
export const CartItemButtons: React.FC<CartItemCardProps> = ({ item }) => {
    
    const { id } = item;
    
    const dispatch = useDispatch();

    const onIncreaseQuantity = (productId: number) => {
        dispatch(increaseQuantity({ id: productId }));
    };

    const onDecreaseQuantity = (productId: number) => {
        dispatch(decreaseQuantity({ id: productId }));
    };

    const onRemoveItem = (productId: number) => {
        dispatch(removeItem({ id: productId }));
    };

    return (
        <ButtonGroup isAttached mb="$2">
            <Button
                variant="outline"
                size="xs"
                borderColor="$backgroundLight300"
                $dark-borderColor="$backgroundDark70"
                onPress={() => onDecreaseQuantity(id)}
            >
                <ButtonIcon
                    as={RemoveIcon}
                    color="$textLight900"
                    $dark-color="$textDark300"
                />
            </Button>
            <Button
                variant="outline"
                size="xs"
                borderColor="$backgroundLight300"
                $dark-borderColor="$backgroundDark70"
                onPress={() => onIncreaseQuantity(id)}
            >
                <ButtonIcon
                    as={AddIcon}
                    color="$textLight900"
                    $dark-color="$textDark300"
                />
            </Button>
            <Button
                variant="solid"
                action="negative"
                size="xs"

                onPress={() => onRemoveItem(id)}
            >
                <ButtonIcon
                    as={TrashIcon}
                />
            </Button>
        </ButtonGroup>
    )
}