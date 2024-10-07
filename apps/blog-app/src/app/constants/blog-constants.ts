export type BlogCategoryType = {
  category: string;
  title: string;
};

export type CommentsType = {
  author: string;
  comment: string;
};

export type PostInfoType = {
  title: string;
  imgUrl: string;
  category: string;
  id: string;
  content: string;
  comments: CommentsType[];
}

export type PostType = {
  posts: PostInfoType[]
};

export const blogCategories = [
  {
    category: 'all',
    title: 'All',
  },
  {
    category: 'travel',
    title: 'Travel',
  },
  {
    category: 'lifestyle',
    title: 'Lifestyle',
  },
  {
    category: 'food',
    title: 'Food',
  },
  {
    category: 'business',
    title: 'Business',
  },
  {
    category: 'work',
    title: 'Work',
  },
];
