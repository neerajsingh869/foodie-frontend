import { Checkbox } from "../ui/checkbox";
import { Skeleton } from "../ui/skeleton";

const CousineSectionSkeleton = () => {
  return (
    <div className="space-y-2">
      <div>
        <h2 className="font-bold text-2xl">Cuisines</h2>
        <p className="text-sm">
          Create a menu and give each item a name and a price
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-1">
        {new Array(20).fill(0).map((_, index) => (
          <div
            key={index}
            className="flex flex-row-reverse items-center gap-2 space-y-0 mt-2 justify-end"
          >
            <Skeleton className="w-24 lg:w-36 h-4 bg-background" />
            <Checkbox className="bg-background" disabled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CousineSectionSkeleton;
