import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";

const MenuSectionSkeleton = () => {
  return (
    <div className="space-y-2">
      <div>
        <h2 className="font-bold text-2xl">Menu</h2>
        <p className="text-sm">
          Create your menu and give each item a name and a price
        </p>
      </div>
      <div className="flex flex-col gap-2">
        {new Array(5).fill(0).map((_, index) => (
          <div className="flex gap-2 items-end" key={index}>
            <div className="flex flex-col gap-1 grow sm:grow-0">
              <label>Name</label>
              <Skeleton className="h-9 bg-background sm:w-40" />
            </div>
            <div className="flex flex-col gap-1 grow sm:grow-0">
              <label>Price (₹)</label>
              <Skeleton className="h-9 bg-background sm:w-40" />
            </div>
            <Button className="self-end" variant="destructive" disabled>
              Remove
            </Button>
          </div>
        ))}
      </div>
      <Button type="button" disabled>Add Menu Item</Button>
    </div>
  );
};

export default MenuSectionSkeleton;
