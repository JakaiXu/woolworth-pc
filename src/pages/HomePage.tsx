import Home from "../components/Home/Home";
import Layout from "../components/Layout";
import { ShoppingCartProvider } from "../store/ShoppingCartContext";

const HomePage = () => {
  return (
    <ShoppingCartProvider>
      <Layout>
        <Home />
      </Layout>
    </ShoppingCartProvider>
  );
};

export default HomePage;
