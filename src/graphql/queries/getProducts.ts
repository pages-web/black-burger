import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query products(
    $categoryId: String
    $tag: String
    $perPage: Int
    $status: String
    $page: Int
    $ids: [String]
    $excludeIds: Boolean
    $pipelineId: String
    $boardId: String
    $image: String
  ) {
    products(
      categoryId: $categoryId
      tag: $tag
      status: $status
      perPage: $perPage
      page: $page
      ids: $ids
      excludeIds: $excludeIds
      pipelineId: $pipelineId
      boardId: $boardId
      image: $image
    ) {
      _id
      name
      shortName
      type
      code
      categoryId
      status
      description
      unitPrice
      category {
        _id
        name
      }
      getTags {
        _id
        name
      }
      attachment {
        url
        name
        size
        __typename
      }
      attachmentMore {
        url
        name
        size
        type
        __typename
      }
      __typename
    }
  }
`;
