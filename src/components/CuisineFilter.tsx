import { ChangeEvent } from "react";
import { Button } from "./ui/button";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { cuisineList } from "@/config/restaurant-options-config";
import { Label } from "./ui/label";

type Props = {
  selectedCuisines: string[];
  onChange: (cuisines: string[]) => void;
  isExpanded: boolean;
  onExpandedClick: () => void;
};

const CuisineFilter = ({
  selectedCuisines,
  onChange,
  isExpanded,
  onExpandedClick,
}: Props) => {
  const handleCuisinesChange = (event: ChangeEvent<HTMLInputElement>) => {
    const clickedCuisine = event.target.value;
    const isChecked = event.target.checked;

    const newCuisineList = isChecked
      ? [...selectedCuisines, clickedCuisine]
      : selectedCuisines.filter((cuisine) => cuisine !== clickedCuisine);

    onChange(newCuisineList);
  };

  const handleCuisineReset = () => onChange([]);

  return (
    <>
      <div className="flex justify-between items-center px-2">
        <div className="font-semibold text-md mb-2">Filter By Cuisine</div>
        <div
          className="text-sm font-semibold mb-2 underline cursor-pointer text-blue-500"
          onClick={handleCuisineReset}
        >
          Reset Filters
        </div>
      </div>
      <div className="space-y-2 flex flex-col">
        {cuisineList
          .slice(0, isExpanded ? cuisineList.length : 6)
          .map((cuisine) => {
            const isSelected = selectedCuisines.includes(cuisine);

            return (
              <div className="flex">
                <input
                  type="checkbox"
                  className="hidden"
                  onChange={handleCuisinesChange}
                  checked={isSelected}
                  value={cuisine}
                  id={`cuisine_${cuisine}`}
                />
                <Label
                  htmlFor={`cuisine_${cuisine}`}
                  className={`flex flex-1 items-center cursor-pointer text-sm rounded-full px-4 py-2 font-semibold ${
                    isSelected
                      ? "border border-green-600 text-green-600"
                      : "border border-slate-300"
                  }`}
                >
                  {isSelected && <Check size={20} strokeWidth={3} />}
                  {cuisine}
                </Label>
              </div>
            );
          })}
        <Button
          className="mt-4 flex-1"
          onClick={onExpandedClick}
          variant="link"
        >
          {isExpanded ? (
            <span className="flex items-center">
              View Less <ChevronUp />
            </span>
          ) : (
            <span className="flex items-center">
              View More <ChevronDown />
            </span>
          )}
        </Button>
      </div>
    </>
  );
};

export default CuisineFilter;
