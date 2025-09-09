export interface IProduct {
  _id: string;
  shortName: string;
  name: string;
  type: string;
  code: string;
  categoryId: string;
  status: string;
  description: string;
  unitPrice: number;
  category?: IProductCategory;
  getTags?: ITag[];
  attachment?: {
    url: string;
    name: string;
    size: number;
    __typename?: string;
  };
  attachmentMore?: {
    url: string;
    name: string;
    size: number;
    type?: string;
    __typename?: string;
  };
}

export interface ITag {
  _id: string;
  name: string;
}

export interface IProductCategory {
  _id: string;
  name: string;
}
