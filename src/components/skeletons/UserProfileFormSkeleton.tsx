import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";

type Props = {
  title?: string;
  buttonText?: string;
};

const UserProfileFormSkeleton = ({
  title = "User Profile Form",
  buttonText = "Submit",
}: Props) => {
  return (
    <form className="space-y-4 bg-gray-100 dark:bg-gray-900 rounded-lg p-5 md:p-10">
      <div>
        <h2 className="font-bold text-2xl">{title}</h2>
        <p className="text-sm">View and change your profile information here</p>
      </div>
      <div className="flex flex-col space-y-2">
        <label>Email</label>
        <Skeleton className="h-9 bg-background" />
      </div>
      <div className="flex flex-col space-y-2">
        <label>Name</label>
        <Skeleton className="h-9 bg-background" />
      </div>
      <div className="flex flex-col md:flex-row gap-4 ">
        <div className="flex flex-col flex-1 space-y-2">
          <label>Address Line 1</label>
          <Skeleton className="h-9 bg-background" />
        </div>
        <div className="flex flex-col flex-1 space-y-2">
          <label>City</label>
          <Skeleton className="h-9 bg-background" />
        </div>
        <div className="flex flex-col flex-1 space-y-2">
          <label>Country</label>
          <Skeleton className="h-9 bg-background" />
        </div>
      </div>
      <Button type="submit" className="bg-blue-500 dark:bg-blue-700 text-md" disabled>
        {buttonText}
      </Button>
    </form>
  );
};

export default UserProfileFormSkeleton;
