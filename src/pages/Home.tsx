import { useEffect, useState } from "react";
import { Product } from "../types/types";
import SideBarSearch from "../components/SideBarSearch";
import ProductCard from "../components/ProductCard";

const Home: React.FunctionComponent = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=20")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="d-md-flex ">
      <SideBarSearch />
      <article className="d-flex flex-wrap justify-content-center">
        {products.map((item: Product) => (
          <ProductCard {...item} key={item.id} />
        ))}
      </article>
    </div>
  );
};

export default Home;
