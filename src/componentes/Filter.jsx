const FilterContainer = ({ children }) => {
  return <div>{children}</div>;
};
const ItemsLeft = ({ total = 0 }) => {
  return <p className="text-green too test-sm">{total}ItemsLeft</p>;
};

const FilterButtonContainer = ({ children }) => {
  return <div className="flex items-center space-x-2">{children}</div>;
};
const FilterButton = ({ action, active, filter }) => {
  return (
    <>
      <button
        className={
          "hover:text-whitecursor-pointer transition-allduration-300 ease-in-out " +
          (active ? "text-blue-400" : "text-gran-400")
        }
      >
        {filter}
      </button>
    </>
  );
};
export { FilterContainer, ItemsLeft, FilterButtonContainer, FilterButton };
