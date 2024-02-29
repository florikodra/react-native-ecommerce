const baseUrl = 'https://fakestoreapi.com';

interface ProductParams {
    category: string,
    page: number,
    search: string,
}

export default {
    products: {
        getAll: baseUrl + '/products',
        getWithPage: (page: number) => `${baseUrl}/products?page=${page}`,
        getWithParams: ({ category, page, search }: ProductParams) => {
            let categoryPath = "";

            if(category){
                categoryPath = `/category/${category}`
            }

            return `${baseUrl}/products${categoryPath}?page=${page}&search=${search}`
        },
        getSingle: (id: number) => baseUrl + '/products/' + id,
    },
    categories: {
        getAll: baseUrl + '/products/categories',
    },
};
