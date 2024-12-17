"use client";
import { useWindowSize } from "../screen";
import { NavLink } from "./NavLink";

const NavBar = ({ selectedTag, setSelectedTag }: Props) => {
  const { width } = useWindowSize();
  return (
    <div className="navbar bg-base-100 lg:pt-4 shadow-lg shadow-blue-300 lg:h-24 h-10 fixed z-40">
      <div className="lg:w-[10vw] w-[20vw] rounded-full z-42 lg:translate-x-5 lg:translate-y-10 shadow-lg shadow-blue-300">
        <img alt="logo" src="/img/logo.webp" className="rounded-full" />
      </div>
      <div className="navbar-start lg:ml-8 ml-4">
        <span className="h-auto font-bold text-blue-700 font-serif lg:text-6xl md:text-4xl">
          Ayabba Omi Store
        </span>
      </div>
      {width && width < 915 ? (
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow "
            >
              <NavLink
                label="Jabones"
                onClick={setSelectedTag}
                selected={selectedTag}
              />
              <NavLink
                label="Tapices"
                onClick={setSelectedTag}
                selected={selectedTag}
              />
              <NavLink
                label="Velas"
                onClick={setSelectedTag}
                selected={selectedTag}
              />
              <NavLink
                label="Cases"
                onClick={setSelectedTag}
                selected={selectedTag}
              />
              <NavLink
                label="Combos"
                onClick={setSelectedTag}
                selected={selectedTag}
              />
              <NavLink
                label="Contact us"
                onClick={setSelectedTag}
                selected={selectedTag}
              />
            </ul>
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1">
          <NavLink
            label="Jabones"
            onClick={setSelectedTag}
            selected={selectedTag}
          />
          <NavLink
            label="Tapices"
            onClick={setSelectedTag}
            selected={selectedTag}
          />
          <NavLink
            label="Velas"
            onClick={setSelectedTag}
            selected={selectedTag}
          />
          <NavLink
            label="Cases"
            onClick={setSelectedTag}
            selected={selectedTag}
          />
          <NavLink
            label="Combos"
            onClick={setSelectedTag}
            selected={selectedTag}
          />
          <NavLink
            label="Contact us"
            onClick={setSelectedTag}
            selected={selectedTag}
          />
        </ul>
      </div>
    </div>
  );
};

type Props = {
  selectedTag: string;
  setSelectedTag(tag: string): void;
};

export { NavBar };
