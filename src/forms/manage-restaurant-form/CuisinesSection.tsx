import { useFormContext } from "react-hook-form";

const CousineSection = () => {
  const {control} = useFormContext();

  return (
    <>
      <div>
        <h2 className="font-bold text-2xl">Cuisines</h2>
        <p className="text-sm">
          Create a menu and give each item a name and a price
        </p>
      </div>
    </>
  )
}

export default CousineSection;