import { useQuery } from "@tanstack/react-query";
import Route from "../constants/Route";
import axios from "axios";

const getCategories = () => {

    const query = useQuery({
        queryKey: ['shop-categories'], queryFn: async () => {
            const response = await axios.get(Route.categories.getAll);
            return response.data;
        }
    });

    return query;
}

export default getCategories;