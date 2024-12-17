const NavLink = ({ label, selected, onClick }: Props) => {
  return (
    <>
      <li
        onClick={() => onClick(label)}
        className={`hover:bg-gray-300 hover:font-bold rounded-lg ${
          selected === label ? "bg-blue-600 text-white font-bold" : ""
        }`}
      >
        <a>{label}</a>
      </li>
    </>
  );
};

type Props = {
  label: string;
  selected: string;
  onClick(tag: string): void;
};

export { NavLink };
