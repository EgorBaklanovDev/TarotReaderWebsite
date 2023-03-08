import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat, Cormorant_Garamond } from "@next/font/google";

const mont = Montserrat({
  variable: "--roboto-font",
  weight: ["700"],
  style: ["normal"],
  subsets: ["cyrillic"],
});

const font = Cormorant_Garamond({
  variable: "--font",
  weight: ["300", "400"],
  style: ["normal"],
  subsets: ["cyrillic", "latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <style jsx global>{`
        body,
        button {
          font-family: ${font.style.fontFamily};
          font-weight: 300;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        label {
          font-family: ${mont.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </Layout>
  );
}
