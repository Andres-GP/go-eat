import { getPostDetails } from "@/services";
import PostClient from "./PostClient";

export default async function PostPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const post = await getPostDetails(slug);

  if (!post) return null;

  return <PostClient post={post} />;
}
