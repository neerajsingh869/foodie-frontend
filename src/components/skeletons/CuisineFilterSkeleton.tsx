import { Skeleton } from "../ui/skeleton";

const CuisineFilterSkeleton = () => {
  return (
    <>
      <div className="space-y-2 flex flex-col">
        {new Array(10).fill(0).map((_, index) => {
          return (
            <Skeleton key={index} className="w-full md:w-60 h-9 rounded-full" />
          );
        })}
        <div className="flex justify-center w-full">
          <Skeleton className="h-6 w-20" />
        </div>
      </div>
    </>
  );
};

export default CuisineFilterSkeleton;
