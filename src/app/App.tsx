import { NavBar } from "./components/NavBar";
import { JabonesContainer } from "./Jabones/JabonesContainer";

const App = () => {
  return (
    <div>
      <NavBar />
      <div className=" items-center justify-items-center min-h-screen pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="mt-6">
          <JabonesContainer />
        </div>
      </div>
    </div>
  );
};

export { App };
