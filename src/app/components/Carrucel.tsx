import { Product } from "@/types";
import { Card } from "./Card";

const Carrucel = ({ products }: Props) => {
  return (
    <>
      <div className="carousel w-full">
        {products.map((p) => {
          return <Card product={p} key={p.id} />;
        })}
      </div>
      <div className="flex w-full justify-center gap-2 py-1">
        {products.map((p, index) => {
          return (
            <a href={`#${p.id}`} className="btn btn-xs" key={p.id}>
              {index}
            </a>
          );
        })}
      </div>
    </>
  );
};

type Props = {
  products: Product[];
};

export { Carrucel };
