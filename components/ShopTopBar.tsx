import { Box, Pressable, Text, Input, InputSlot, InputField, InputIcon, SearchIcon,Select, SelectTrigger, SelectInput, SelectIcon, Icon, ChevronDownIcon, SelectPortal, SelectBackdrop, SelectContent, SelectDragIndicatorWrapper, SelectDragIndicator, SelectItem} from "@gluestack-ui/themed";
import getProducts from "../services/getProducts";
import getCategories from "../services/getCategories";

export const ShopTopBar = ({ changeSearch, changeCategory }:any) => {

    const { data: categories } = getCategories();

    const resetFilter = () => {
        changeSearch("");
        changeCategory("");
    }

    return (
        <Box bg="$light100" pt="$4" pb="$1" px="$2">
                <Box>
                    <Input>
                        <InputSlot pl='$3'>
                            <InputIcon as={SearchIcon} />
                        </InputSlot>
                        <InputField
                            onChangeText={(value) => changeSearch(value)}
                            placeholder="Search..."
                        />
                    </Input>
                </Box>
                <Box mt="$2">
                    <Select  onValueChange={(value) => changeCategory(value)}>
                        <SelectTrigger variant="outline" size="md">
                            <SelectInput placeholder="Select option"/>
                            <SelectIcon mr="$3">
                                <Icon as={ChevronDownIcon} />
                            </SelectIcon>
                        </SelectTrigger>
                        <SelectPortal>
                            <SelectBackdrop />
                            <SelectContent>
                                <SelectDragIndicatorWrapper>
                                    <SelectDragIndicator />
                                </SelectDragIndicatorWrapper>
                                {
                                    categories?.map((category, index) => (
                                        <SelectItem key={index} label={category} value={category} />
                                    ))
                                }
                            </SelectContent>
                        </SelectPortal>
                    </Select>
                </Box>
                <Box mt="$3">
                    <Pressable onPress={() => resetFilter()}>
                        <Text color="$red500">Reset</Text>
                    </Pressable>
                </Box>
        </Box>
    )
}