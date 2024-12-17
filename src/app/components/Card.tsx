import { Product } from "@/types";

const Card = ({ product }: Props) => {
  return (
    <div
      className="card card-compact bg-base-100 lg:w-96 sm:w-50 shadow-xl m-4 lg:h-[20vw] md:h-[40vw] sm:h-[35vw]"
      key={product.id}
    >
      <figure>
        <img src={product.images?.[0]} alt={product.name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p>{`Precio: ${product.price} USD`}</p>
        <div className="card-actions justify-end">
          <button className="btn bg-blue-700 text-white">Ver más</button>
        </div>
      </div>
    </div>
  );
};

type Props = {
  product: Product;
};

export { Card };
