import { AspectRatio } from "../ui/aspect-ratio";
import { Skeleton } from "../ui/skeleton";

const SearchResultCardSkeleton = () => {
  return (
    <div className="grid lg:grid-cols-[2fr_3fr] gap-5 group">
      <AspectRatio ratio={16 / 6}>
        <Skeleton className="rounded-xl w-full h-full" />
      </AspectRatio>
      <div>
        <h3 className="text-xl font-bold mb-4 group-hover:underline">
          <Skeleton className="w-60 h-7" />
        </h3>
        <div id="card-content" className="grid lg:grid-cols-2 gap-2">
          <div className="flex flex-row flex-wrap gap-2">
            {new Array(3).fill(0).map((_, index) => (
              <span className="flex" key={index}>
                <Skeleton className="w-16 h-6" />
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1 text-greeen-600">
              <Skeleton className="w-24 h-6" />
            </div>
            <div className="flex items-center gap-1">
              <Skeleton className="w-48 h-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultCardSkeleton;
