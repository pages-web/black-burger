import { GET_PRODUCTS } from "@/graphql/queries/getProducts";
import { useQuery } from "@apollo/client";
import { QueryHookOptions } from "@apollo/client";
import { IProduct } from "@/types";


export const useProducts = (options?: QueryHookOptions) => {
  interface productsResponse {
    products: IProduct[];
  }
  const { data, loading, error } = useQuery<productsResponse>(GET_PRODUCTS, {
    variables: {
      page: 1,
      perPage: 20,
      ...options?.variables,
    },
    ...options,
  });
  return {
    products: data?.products || [],
    loading,
    error,
  };
};
