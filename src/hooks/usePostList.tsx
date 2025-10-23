import { useQuery, OperationVariables } from "@apollo/client";
import { GET_POSTLIST } from "@/graphql/queries/queries";
import { TPost } from "@/types/PostType";
export const usePostList = (options?: OperationVariables) => {
  const { data, loading, error } = useQuery(GET_POSTLIST, {
    ...options,
    variables: {
      perPage: 100,
      clientPortalId: process.env.CLIENT_PORTAL_ID,
      ...options?.variables,
    },
  });
  const posts: TPost[] = data?.cmsPostList?.posts;
  return {
    posts,
    loading,
    error,
  };
};