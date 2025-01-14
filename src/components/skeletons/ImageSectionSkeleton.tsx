import { AspectRatio } from "../ui/aspect-ratio";
import { Skeleton } from "../ui/skeleton";

const ImageSectionSkeleton = () => {
  return (
    <div className="space-y-2">
      <div>
        <h2 className="font-bold text-2xl">Image</h2>
        <p className="text-sm">
          Add an image that will be displayed on your restaurant listing in the
          search results. Adding a new image will overwrite the existing one.
        </p>
      </div>
      <div className="sm:w-[450px]">
        <AspectRatio ratio={16 / 9}>
          <Skeleton className="w-full h-full bg-background" />
        </AspectRatio>
      </div>
      <div className="w-[100%] sm:w-80">
        <Skeleton className="h-9 bg-background" />
      </div>
    </div>
  );
};

export default ImageSectionSkeleton;
