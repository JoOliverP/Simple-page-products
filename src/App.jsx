import { useEffect, useState } from "react";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import ImgStar1 from "./assets/star.png";

import ImgStar2 from "./assets/star2.png";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProduct() {
      await fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => setProducts(data.products));
    }

    fetchProduct();
  }, []);

  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20 p-2">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div key={product.id} className="bg-slate-50 p-8 rounded-lg ">
            <img
              src={product.thumbnail}
              alt=""
              className="w-64 h-64 object-contain m-auto"
            />
            <h2 className=" mt-2 text-lg text-gray-800">{product.title}</h2>
            {/* <p>⭐⭐⭐⭐⭐ 156</p> */}
            <div className="flex items-center">
              <Rating
                readonly
                initialRating={product.rating}
                emptySymbol={<img src={ImgStar1} className="w-4 h-4" />}
                fullSymbol={<img src={ImgStar2} className="w-4 h-4" />}
              />
              <p>255</p>
            </div>

            <p className="mt-1 text-xs line-through text-gray-500">
              de: R$ 1.659,00 por:
            </p>
            <h1 className="text-2xl font-bold">
              {formatter.format(Number(product.price))}
            </h1>
            <p className="text-sm break-all">{product.description}</p>
            <p className="text-sm font-extralight	mt-3">
              no PIX <span className="text-green-600">(10% de desconto)</span>
            </p>
            <p className="text-sm font-extralight	">
              ou 4x de R$ 84,00 sem juros
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
