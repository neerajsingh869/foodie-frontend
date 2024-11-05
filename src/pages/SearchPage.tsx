import { useParams } from "react-router-dom"

const SearchPage = () => {
  const {city} = useParams();
  return (
    <div>Search city is {city}</div>
  )
}

export default SearchPage;