import { useRouter } from "next/router";

export default function CategoryPage() {
  const router = useRouter();
  const { id } = router.query;

  return <div>صفحه دسته‌بندی شماره {id}</div>;
}