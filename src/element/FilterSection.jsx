import Select from "react-select";
import { styled } from "styled-components";
import { useQueryCust } from "../contexts/QueryContext";

const optionsArray = [
  { value: 6, label: "6" },
  { value: 12, label: "12-results/page" },
  { value: 24, label: "24" },
  { value: 48, label: "48" },
  { value: 96, label: "96" },
];
const dietArray = [
  { value: "vegetarian", label: "diet-vegetarian" },
  { value: "lacto-vegetarian", label: "lacto-vegetarian" },
  { value: "vegan", label: "vegan" },
];
const intolerancesArray = [
  { value: "", label: "Intolerances...", disabled: true },
  { value: "gluten", label: "gluten" },
  { value: "egg", label: "egg" },
  { value: "peanut", label: "peanut" },
  { value: "seafood", label: "seafood" },
  { value: "shellfish", label: "shellfish" },
  { value: "sesame", label: "sesame" },
  { value: "soy", label: "soy" },
  { value: "sulfite", label: "sulfite" },
  { value: "wheat", label: "wheat" },
  { value: "tree nut", label: "tree nut" },
  { value: "grain", label: "grain" },
];
const typeArray = [
  { value: "", label: "Type...", disabled: true },
  { value: "main course", label: "main course" },
  { value: "side dish", label: "side dish" },
  { value: "dessert", label: "dessert" },
  { value: "appetizer", label: "appetizer" },
  { value: "salad", label: "salad" },
  { value: "bread", label: "bread" },
  { value: "soup", label: "soup" },
  { value: "sauce", label: "sauce" },
  { value: "marinade", label: "marinade" },
  { value: "fingerfood", label: "fingerfood" },
  { value: "snack", label: "snack" },
];
const timeArray = [
  { value: 999999, label: "Max Ready Time...", disabled: true },
  { value: 5, label: "5 mins" },
  { value: 15, label: "15 mins" },
  { value: 30, label: "30 mins" },
  { value: 45, label: "45 mins" },
  { value: 60, label: "1 hour" },
  { value: 999999, label: "No Limit" },
];
const orderArray = [
  { value: "", label: "Order...", disabled: true },
  { value: "random", label: "random" },
  { value: "price", label: "price" },
  { value: "time", label: "time" },
  { value: "calories", label: "calories" },
  { value: "max-used-ingredients", label: "max-used-ingredients" },
];
const StyledFilterSectionMain = styled.div`
  color: black;
  margin-top: 2.5rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const StyledFilterSectionSub = styled.div`
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 2rem;
`;

function FilterSection() {
  const { dispatch } = useQueryCust();
  const handleChangeNumber = (selectedOption) => {
    dispatch({
      type: "filter/number",
      payload: selectedOption.value,
    });
  };
  const handleChangeDiet = (selectedOption) => {
    dispatch({
      type: "filter/diet",
      payload: selectedOption.value,
    });
  };
  const handleChangeIntolerances = (selectedOption) => {
    dispatch({
      type: "filter/intolerances",
      payload: selectedOption.value,
    });
  };
  const handleChangeType = (selectedOption) => {
    dispatch({
      type: "filter/type",
      payload: selectedOption.value,
    });
  };
  const handleChangeTime = (selectedOption) => {
    dispatch({
      type: "filter/time",
      payload: selectedOption.value,
    });
  };
  const handleChangeOrder = (selectedOption) => {
    dispatch({
      type: "filter/order",
      payload: selectedOption.value,
    });
  };
  return (
    <StyledFilterSectionMain>
      <StyledFilterSectionSub>
        <Select
          onChange={handleChangeNumber}
          autoFocus={true}
          className="basic-single"
          classNamePrefix="select"
          defaultValue={optionsArray[1]}
          isDisabled={false}
          isLoading={false}
          isClearable={false}
          isRtl={false}
          isSearchable={false}
          name="Result per page"
          options={optionsArray}
        />
        <Select
          onChange={handleChangeDiet}
          autoFocus={true}
          className="basic-single"
          classNamePrefix="select"
          defaultValue={dietArray[0]}
          isDisabled={false}
          isLoading={false}
          isClearable={false}
          isRtl={false}
          isSearchable={false}
          name="Diet"
          options={dietArray}
        />
      </StyledFilterSectionSub>
      <StyledFilterSectionSub>
        <Select
          onChange={handleChangeIntolerances}
          autoFocus={true}
          className="basic-single"
          classNamePrefix="select"
          defaultValue={intolerancesArray[0]}
          isDisabled={false}
          isLoading={false}
          isClearable={false}
          isRtl={false}
          isSearchable={false}
          name="Intollerances"
          options={intolerancesArray}
        />
        <Select
          onChange={handleChangeType}
          autoFocus={true}
          className="basic-single"
          classNamePrefix="select"
          defaultValue={typeArray[0]}
          isDisabled={false}
          isLoading={false}
          isClearable={false}
          isRtl={false}
          isSearchable={false}
          name="Type"
          options={typeArray}
        />
      </StyledFilterSectionSub>
      <StyledFilterSectionSub>
        <Select
          onChange={handleChangeTime}
          autoFocus={true}
          className="basic-single"
          classNamePrefix="select"
          defaultValue={timeArray[0]}
          isDisabled={false}
          isLoading={false}
          isClearable={false}
          isRtl={false}
          isSearchable={false}
          name="Type"
          options={timeArray}
        />
        <Select
          onChange={handleChangeOrder}
          autoFocus={true}
          className="basic-single"
          classNamePrefix="select"
          defaultValue={orderArray[0]}
          isDisabled={false}
          isLoading={false}
          isClearable={false}
          isRtl={false}
          isSearchable={false}
          name="Type"
          options={orderArray}
        />
      </StyledFilterSectionSub>
    </StyledFilterSectionMain>
  );
}

export default FilterSection;
