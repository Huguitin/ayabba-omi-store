const NavBar = () => {
  return (
    <div className="navbar bg-stone-200 pt-4 shadow-lg shadow-blue-300 h-24 fixed z-40">
      <div className="w-[10vw]  rounded-full z-42 translate-x-5 translate-y-10 shadow-lg shadow-blue-300">
        <img alt="logo" src="/img/logo.webp" className="rounded-full" />
      </div>
      <div className="navbar-start ml-8">
        <span className="h-auto font-bold text-blue-700 font-serif text-6xl">
          Ayabba Omi Store
        </span>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1">
          <li className="hover:bg-blue-600 hover:text-white hover:font-bold rounded-lg">
            <a>Jabones</a>
          </li>
          <li className="hover:bg-blue-600 hover:text-white rounded-lg hover:font-bold ">
            <a>Tapices</a>
          </li>
          <li className="hover:bg-blue-600 hover:text-white rounded-lg hover:font-bold ">
            <a>Velas</a>
          </li>
          <li className="hover:bg-blue-600 hover:text-white rounded-lg hover:font-bold ">
            <a>Cases</a>
          </li>
          <li className="hover:bg-blue-600 hover:text-white rounded-lg hover:font-bold ">
            <a>Combos</a>
          </li>
          <li className="hover:bg-blue-600 hover:text-white rounded-lg hover:font-bold ">
            <a>Contact us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { NavBar };
