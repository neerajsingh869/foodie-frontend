import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi";
import UserProfileFormSkeleton from "@/components/skeletons/UserProfileFormSkeleton";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";

const UserProfilePage = () => {
  const { updateUser, isPending: isUpdateLoading } = useUpdateMyUser();
  const { currentUser, isLoading: isGetLoading } = useGetMyUser();

  if (isGetLoading) {
    return <UserProfileFormSkeleton />;
  }

  if (!currentUser) {
    return <span>Unable to get your details.</span>;
  }

  return (
    <UserProfileForm
      currentUser={currentUser}
      onSave={updateUser}
      isLoading={isUpdateLoading}
    />
  );
};

export default UserProfilePage;
