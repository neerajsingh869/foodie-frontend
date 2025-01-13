import { useNavigate } from "react-router-dom";

import SearchBar, { SearchForm } from "@/components/SearchBar";
import appDownloadImage from "../assets/appDownload.png";
import landingImage from "../assets/landing.png";

const Home = () => {
  const navigate = useNavigate();

  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };

  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white text-center rounded-xl shadow-md flex flex-col gap-5 py-8 -mt-16 md:mx-32 md:px-16 dark:bg-gray-900">
        <h1 className="text-4xl font-bold text-blue-500">
          Dive into a takeaway meal today
        </h1>
        <p className="text-lg">Delicious food is just a click away!</p>
        <SearchBar
          placeholder="Search by City or Town"
          onSubmit={handleSearchSubmit}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImage} alt="Foodie mobile app screenshots" />
        <div className="flex flex-col text-center justify-center items-center gap-4">
          <p className="text-3xl font-bold">Order takeaway even faster!</p>
          <p>
            Download the Foodie App for faster ordering and personalized
            recommendations
          </p>
          <img src={appDownloadImage} alt="Foodie app download link" />
        </div>
      </div>
    </div>
  );
};

export default Home;
