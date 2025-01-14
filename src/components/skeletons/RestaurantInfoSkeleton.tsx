import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const RestaurantInfoSkeleton = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-bold text-3xl">
          <Skeleton className="w-48 sm:w-80 h-9" />
        </CardTitle>
        <CardDescription className="flex gap-2">
          <Skeleton className="w-16 h-5" /> <Skeleton className="w-16 h-5" />
        </CardDescription>
      </CardHeader>
      <CardContent className="flex gap-2 flex-wrap">
        {new Array(3).fill(0).map((_, index) => (
          <Skeleton key={index} className="w-20 h-6" />
        ))}
      </CardContent>
    </Card>
  );
};

export default RestaurantInfoSkeleton;
