import { QueryHookOptions, useQuery } from "@apollo/client";
import { GET_PRODUCT_CATEGORIES } from "@/graphql/queries/getProductCategories";
import { IProductCategory } from "@/types";

interface ProductCategoriesResponse {
  productCategories: IProductCategory[];
}

export const useProductCategories = (options?: QueryHookOptions) => {
  const PARENT_ID = "9aAmTj0z299DqXkE5d0mW";
  const { data, loading, error } = useQuery<ProductCategoriesResponse>(
    GET_PRODUCT_CATEGORIES,
    {
      variables: { parentId: PARENT_ID, ...options?.variables },
      ...options,
    }
  );

  return {
    categories: data?.productCategories || [],
    loading,
    error,
  };
};
