export type Post = {
  slug: string;
  title: string;
  excerpt?: string;
  featuredImage?: { url: string };
  cookTime: string;
  servings: string | number;
  difficultly: string;
  createdAt?: string;
  categories?: Category[];
  id: string;
  author?: Author | string;
  content?: { raw?: any } | string;
};

export interface Author {
  name: string;
  bio?: string;
  photo?: { url: string };
}

export interface Category {
  name: string;
  slug: string;
}

export type Edge = {
  node: Post;
};

export interface PostClientProps {
  post: Post;
}

export interface PostCardProps {
  post: Post;
}

export interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  categories: Category[];
}

export interface SectionCardProps {
  title: string;
  children: React.ReactNode;
}

export interface InfoCardProps {
  icon: React.ReactElement;
  label: string;
  value?: string | number;
}
