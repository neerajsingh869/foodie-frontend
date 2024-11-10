import { Link } from "react-router-dom";

type Props = {
  total: number;
  city: string;
};

const SearchResultInfo = ({ total, city }: Props) => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center text-lg font-bold gap-3 justify-between">
      <span>
        {total} Restaurants found in {city}
        <Link
          to="/"
          className="ml-1 text-base font-semibold underline cursor-pointer text-blue-500"
        >
          Choose Location
        </Link>
      </span>
    </div>
  );
};

export default SearchResultInfo;
