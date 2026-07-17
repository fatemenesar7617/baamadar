import { useRouter } from "next/router";

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;

  return <div>صفحه محصول شماره {id}</div>;
}