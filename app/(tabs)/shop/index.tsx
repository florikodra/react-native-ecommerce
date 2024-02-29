import { Box, StatusBar } from "@gluestack-ui/themed";
import { FlashList } from '@shopify/flash-list';
import { Stack } from 'expo-router';

// TODO: Add index.ts so import all components from @/components
import { ProductCard } from '@/components/ProductCard';
import { ShopTopBar } from "@/components/ShopTopBar";


import getProducts from '@/services/getProducts';

export default function ShopScreen() {
  // const { data, isFetched } = useQuery({
  //   queryKey: ['shop-list'], queryFn: async () => {
  //     const response = await axios.get(Route.products.getAll);
  //     return response.data;
  //   }
  // });
  const {
    data,
    fetchNextPage,
    isFetchingNextPage,
    changeSearch,
    changeCategory,
  } = getProducts();

  return (
    <Box flex={1} pt="$3" h="100%">
    <StatusBar />
      <Stack.Screen options={{ title: "Shop", headerShown: false }} />
      <ShopTopBar changeSearch={changeSearch} changeCategory={changeCategory}/>
      <FlashList
        data={data?.pages?.flatMap((page) => page)}
        renderItem={({ item }: any) => <ProductCard {...item} />}
        estimatedItemSize={200}
        onEndReached={() => !isFetchingNextPage && fetchNextPage()}
        onEndReachedThreshold={1}
      />
    </Box>
  );
}