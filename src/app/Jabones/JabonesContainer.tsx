import { Card } from "../components/Card";
import { jabones } from "@/data";

const JabonesContainer = () => {
  return (
    <div className="flex justify-center flex-wrap">
      {jabones.map((p) => {
        return <Card product={p} />;
      })}
    </div>
  );
};

export { JabonesContainer };
