import { useSearchRestaurants } from "@/api/RestaurantApi";
import { useParams } from "react-router-dom";

const SearchPage = () => {
  const { city } = useParams();
  const { results } = useSearchRestaurants(city);
  return (
    <div>
      Search city is {city}
      <div>
        {results?.data.map((result) => (
          <div key={result._id}>Restaurant details: {result.restaurantName}</div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
