import { AspectRatio } from "../ui/aspect-ratio";
import { Progress } from "../ui/progress";
import { Separator } from "../ui/separator";
import { Skeleton } from "../ui/skeleton";

const OrderStatusCardSkeleton = () => {
  return (
    <div className="space-y-10 bg-gray-50 dark:bg-gray-900 p-10 rounded-lg">
      <h1 className="flex flex-col md:flex-row md:justify-between text-3xl font-bold gap-5">
        <div className="flex gap-2">
          <span>Order Status:</span> <Skeleton className="h-12 w-80" />
        </div>
        <div className="flex gap-2">
          <span>Expected by:</span> <Skeleton className="h-12 w-20" />
        </div>
      </h1>
      <Progress className="animate-pulse" value={25} />
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-5">
          <div className="flex flex-col gap-2">
            <div className="font-bold">Delivering to:</div>
            <Skeleton className="h-6 w-48" />
            <div className="flex gap-2">
              <Skeleton className="h-6 w-40" /> <Skeleton className="h-6 w-40" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-bold">Your Order</div>
            <ul className="flex flex-col gap-2">
              {new Array(5).fill(0).map((_, index) => (
                <li key={index} className="flex gap-2">
                  <Skeleton className="h-6 w-40" /> x <Skeleton className="h-6 w-6" />
                </li>
              ))}
            </ul>
          </div>
          <Separator />
          <div className="flex flex-col gap-2">
            <div className="font-bold">Total</div>
            <Skeleton className="h-6 w-24" />
          </div>
        </div>
        <AspectRatio ratio={16 / 5}>
          <Skeleton className="w-full h-full rounded-md" />
        </AspectRatio>
      </div>
    </div>
  );
};

export default OrderStatusCardSkeleton;
