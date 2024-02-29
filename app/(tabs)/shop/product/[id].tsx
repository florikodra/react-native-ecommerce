import { View, Image } from '@gluestack-ui/themed';
import { Stack, useLocalSearchParams } from 'expo-router';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Route from '@/constants/Route';
import ProductScreenInfo from '@/components/ProductScreenInfo';

export default function ProductScreen() {

  const { id } = useLocalSearchParams();

  const { data, isLoading, isFetched } = useQuery({
    queryKey: ['shop-product-single', id], queryFn: async () => {
      const response = await axios.get(Route.products.getSingle(id));
      return response.data;
    }
  });

  return (
    <>
      <Stack.Screen options={{ title: data?.title }} />
      {isFetched && <ProductScreenInfo {...data} />}
    </>
  );
}