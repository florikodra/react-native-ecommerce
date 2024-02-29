import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import Route from '../constants/Route';

const getProducts = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [search, setSearch] = useState<string>("");
    const [category, setCategory] = useState<string>("");

    const changeSearch = (searchValue:string) => {
        setSearch(searchValue);
        setCurrentPage(1);
    }

    const changeCategory = (categoryValue:string) => {
        setCategory(categoryValue);
        setCurrentPage(1);
    }

    const query = useInfiniteQuery({
        queryKey: ['shop-list', category, search],
        queryFn: async ({ pageParam }) => {
            setCurrentPage(pageParam);
            const response = await axios.get(Route.products.getWithParams({category: category, page: pageParam, search: search}));
            return response.data;
        },
        initialPageParam: currentPage, // Start with the current page state
        getNextPageParam: () => currentPage + 1,
    });

    return { currentPage, setCurrentPage, search, changeSearch, category, changeCategory, ...query }
}


export default getProducts;