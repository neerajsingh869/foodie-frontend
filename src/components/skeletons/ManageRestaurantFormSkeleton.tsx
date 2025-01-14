import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import CousineSectionSkeleton from "./CousineSectionSkeleton";
import DetailsSectionSkeleton from "./DetailsSectionSkeleton";
import ImageSectionSkeleton from "./ImageSectionSkeleton";
import MenuSectionSkeleton from "./MenuSectionSkeleton";

const ManageRestaurantFormSkeleton = () => {
  return (
    <form
      className="space-y-8 bg-gray-100 dark:bg-gray-900 rounded-lg p-4 sm:p-7 md:p-10"
    >
      <DetailsSectionSkeleton />
      <Separator />
      <CousineSectionSkeleton />
      <Separator />
      <MenuSectionSkeleton />
      <Separator />
      <ImageSectionSkeleton />
      <Button type="submit" className="bg-blue-500 dark:bg-blue-700 text-md" disabled>
        Submit
      </Button>
    </form>
  );
};

export default ManageRestaurantFormSkeleton;
