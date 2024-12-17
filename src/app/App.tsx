"use client";
import { useState } from "react";

import { NavBar } from "./components";
import { JabonesContainer } from "./Jabones/JabonesContainer";
import { tags } from "./data";

const App = () => {
  const [selectetTag, setSelectedTag] = useState(tags[0]);

  return (
    <div>
      <NavBar selectedTag={selectetTag} setSelectedTag={setSelectedTag} />
      <div className=" items-center justify-items-center min-h-screen pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="lg:mt-6 sm:mt-22">
          <JabonesContainer />
        </div>
      </div>
    </div>
  );
};

export { App };
