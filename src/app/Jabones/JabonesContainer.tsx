import { Card } from "../components/Card";
import { jabones } from "@/data";

const JabonesContainer = () => {
  return (
    <div className="flex justify-center flex-wrap sm:pt-10 md:pt-1">
      {jabones.map((p, index) => {
        return <Card product={p} key={index} />;
      })}
    </div>
  );
};

export { JabonesContainer };
