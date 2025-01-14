import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import { Skeleton } from "../ui/skeleton";

const OrderItemCardSkeleton = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex flex-row gap-4 justify-between mb-3">
          <div className="flex gap-3 items-center">
            Customer Name:
            <Skeleton className="w-36 h-6" />
          </div>
          <div className="flex gap-3 items-center">
            Delivery Address:
            <Skeleton className="w-20 h-6" />
            <Skeleton className="w-20 h-6" />
          </div>
          <div className="flex gap-3 items-center">
            Time:
            <Skeleton className="w-12 h-6" />
          </div>
          <div className="flex gap-3 items-center">
            Total Cost:
            <Skeleton className="w-12 h-6" />
          </div>
        </CardTitle>
        <Separator />
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div className="space-y-2">
          {new Array(5).fill(0).map((_, index) => (
            <div key={index} className="flex gap-2">
              <Skeleton className="w-6 h-6" />
              <Skeleton className="w-36 h-6" />
            </div>
          ))}
        </div>
        <div className="flex flex-col space-y-4">
          <Label htmlFor="status">What is the status of this order?</Label>
          <Skeleton className="h-9" />
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderItemCardSkeleton;
