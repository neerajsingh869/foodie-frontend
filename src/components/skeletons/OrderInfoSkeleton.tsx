import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { Skeleton } from "../ui/skeleton";

const OrderInfoSkeleton = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between">
          <Skeleton className="h-7 w-24" />
          <Skeleton className="h-7 w-20" />
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        {new Array(3).fill(0).map((_, index) => (
          <div className="flex justify-between" key={index}>
            <Skeleton className="h-6 w-20" />
            <Skeleton className="h-6 w-16" />
          </div>
        ))}
        <Separator />
        <div className="flex justify-between">
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-6 w-16" />
        </div>
        <Separator />
      </CardContent>
      <div className="px-6">
        <Button disabled className="bg-blue-500 dark:bg-blue-700 flex-1 mb-6 w-full">
          Go to checkout
        </Button>
      </div>
    </Card>
  );
};

export default OrderInfoSkeleton;
