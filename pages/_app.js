import "@/styles/globals.css";
import Footer from "@/components/Footer/Footer";
import { CartProvider } from "@/components/CartContext";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const showFooter = router.pathname !== "/login";

  return (
    <CartProvider>
      <Component {...pageProps} />
      {showFooter && <Footer />}
    </CartProvider>
  );
}
