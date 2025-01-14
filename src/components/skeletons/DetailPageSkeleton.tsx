import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Skeleton } from "../ui/skeleton";
import OrderInfoSkeleton from "./OrderInfoSkeleton";
import RestaurantInfoSkeleton from "./RestaurantInfoSkeleton";

const DetailPageSkeleton = () => {
  return (
    <div className="flex flex-col gap-10">
      <AspectRatio ratio={16 / 5}>
        <Skeleton className="rounded-md w-full h-full" />
      </AspectRatio>
      <div className="grid md:grid-cols-[4fr_2fr] gap-5 lg:px-28">
        <div className="flex flex-col gap-4">
          <RestaurantInfoSkeleton />
          <span className="font-bold text-2xl">Menu</span>
          {new Array(5).fill(0).map((_, index) => (
            <Skeleton
              key={index}
              className="w-full h-28 p-4 flex flex-col justify-between"
            >
              <Skeleton className="w-40 h-6 bg-background" />
              <Skeleton className="w-40 h-6 bg-background" />
            </Skeleton>
          ))}
        </div>
        <div>
          <OrderInfoSkeleton />
        </div>
      </div>
    </div>
  );
};

export default DetailPageSkeleton;
