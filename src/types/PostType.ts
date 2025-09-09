type UserDetails = {
  fullName: string;
  shortName: string;
  avatar: string;
  firstName: string;
  lastName: string;
  middleName: string;
};

type User = {
  _id: string;
  username: string;
  email: string;
  details: UserDetails;
  __typename: "User";
};

type ClientPortalUser = {
  _id: string;
  fullName: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  customer: {
    avatar: string;
    __typename: "Customer";
  };
  __typename: "ClientPortalUser";
};

type Author = User | ClientPortalUser;

type Category = {
  _id: string;
  name: string;
  __typename: "Category";
};

type Tag = {
  _id: string;
  name: string;
  __typename: "Tag";
};

type Thumbnail = {
  url: string;
  __typename: "Thumbnail";
};

export type TPost = {
  _id: string;
  authorKind: "User" | "ClientPortalUser";
  author: Author;
  categoryIds: string[];
  categories: Category[];
  featured: boolean;
  status: string;
  content: string;
  tagIds: string[];
  tags: Tag[];
  authorId: string;
  createdAt: string;
  autoArchiveDate: string | null;
  scheduledDate: string | null;
  thumbnail: Thumbnail;
  title: string;
  images?: {url: string, name: string}[];
  updatedAt: string;
  slug: string;
  __typename: "Post";
};
