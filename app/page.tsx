import HomePage from "@/components/home";
import { getPosts, getCategories } from "@/services";
import { Edge, Category } from "@/types";

export default async function Page() {
  const postsData: Edge[] = await getPosts();
  const posts = postsData.map((edge: Edge) => edge.node);
  const categories: Category[] = await getCategories();

  return <HomePage posts={posts} categories={categories} />;
}
