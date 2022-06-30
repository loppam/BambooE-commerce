import "../src/Layouts/Default/DefaultLayout";
import DefaultLayout from "../src/Layouts/Default/DefaultLayout";
import "../src/styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
}

export default MyApp;
