import { Skeleton } from "../ui/skeleton";
import CuisineFilterSkeleton from "./CuisineFilterSkeleton";
import SearchResultCardSkeleton from "./SearchResultCardSkeleton";

const SearchPageSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-5">
      <div id="cuisines-list">
        {/* cuisines */}
        <CuisineFilterSkeleton />
      </div>
      <div id="main-content" className="flex flex-col gap-5">
        {/* search bar */}
        <Skeleton className="border-2 rounded-full h-16 flex justify-end items-center px-4 gap-4">
          <Skeleton className="w-24 h-9 rounded-full bg-background" />
          <Skeleton className="w-24 h-9 rounded-full bg-background" />
        </Skeleton>
        {/* search results */}
        {new Array(5).fill(0).map((_, index) => (
          <SearchResultCardSkeleton key={index} />
        ))}
        {/* pagination tabs */}
        <div className="flex justify-center gap-2">
          {new Array(5).fill(0).map((_, index) => (
            <Skeleton key={index} className="border-2 rounded-lg w-9 h-9" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPageSkeleton;
