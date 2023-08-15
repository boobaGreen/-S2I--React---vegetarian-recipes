import Select from "react-select";
import { styled } from "styled-components";
import { useQueryCust } from "../contexts/QueryContext";
import { devices } from "../const/constants";
import * as filter from "../const/filter";

const StyledFilterSectionMain = styled.div`
  margin-top: 1rem;
  margin-left: 3rem;
  border: solid 1rem var(--color-my-700);
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media ${devices.md} {
    flex-direction: row;
  }
`;
const StyledFilterSectionSub = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
    const newIntolerances = selectedOption
      ?.map((el) => {
        if (el.value === "") {
          return "";
        }
        return el.value;
      })
      ?.filter((word) => word !== "")
      ?.join(",");

    dispatch({
      type: "filter/intolerances",
      payload: newIntolerances,
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
    <StyledFilterSectionMain style={{ color: `var(--color-vegan-logo)` }}>
      <StyledFilterSectionSub>
        <Select
          onChange={handleChangeNumber}
          autoFocus={true}
          className="basic-single"
          classNamePrefix="select"
          defaultValue={filter.optionsArray[1]}
          isDisabled={false}
          isLoading={false}
          isClearable={false}
          isRtl={false}
          isSearchable={false}
          name="Result per page"
          options={filter.optionsArray}
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary25: "var(--color-my-700)",
              primary: "var(--color-nav-hover)",
            },
          })}
        />
        <Select
          onChange={handleChangeDiet}
          autoFocus={true}
          className="basic-single"
          classNamePrefix="select"
          defaultValue={filter.dietArray[0]}
          isDisabled={false}
          isLoading={false}
          isClearable={false}
          isRtl={false}
          isSearchable={false}
          name="Diet"
          options={filter.dietArray}
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary25: "var(--color-my-700)",
              primary: "var(--color-nav-hover)",
            },
          })}
        />
      </StyledFilterSectionSub>
      <StyledFilterSectionSub>
        <Select
          isMulti
          onChange={handleChangeIntolerances}
          autoFocus={true}
          multiple={true}
          className="basic-single"
          classNamePrefix="select"
          defaultValue={[filter.intolerancesArray[0]]}
          isDisabled={false}
          isLoading={false}
          isClearable={false}
          isRtl={false}
          isSearchable={false}
          name="Intolerances"
          options={filter.intolerancesArray}
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary25: "var(--color-my-700)",
              primary: "var(--color-nav-hover)",
            },
          })}
        />
        <Select
          onChange={handleChangeType}
          autoFocus={true}
          className="basic-single"
          classNamePrefix="select"
          defaultValue={filter.typeArray[0]}
          isDisabled={false}
          isLoading={false}
          isClearable={false}
          isRtl={false}
          isSearchable={false}
          name="Type"
          options={filter.typeArray}
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary25: "var(--color-my-700)",
              primary: "var(--color-nav-hover)",
            },
          })}
        />
      </StyledFilterSectionSub>
      <StyledFilterSectionSub>
        <Select
          onChange={handleChangeTime}
          autoFocus={true}
          className="basic-single"
          classNamePrefix="select"
          defaultValue={filter.timeArray[0]}
          isDisabled={false}
          isLoading={false}
          isClearable={false}
          isRtl={false}
          isSearchable={false}
          name="Time"
          options={filter.timeArray}
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary25: "var(--color-my-700)",
              primary: "var(--color-nav-hover)",
            },
          })}
        />
        <Select
          onChange={handleChangeOrder}
          autoFocus={true}
          className="basic-single"
          classNamePrefix="select"
          defaultValue={filter.orderArray[0]}
          isDisabled={false}
          isLoading={false}
          isClearable={false}
          isRtl={false}
          isSearchable={false}
          name="Order"
          options={filter.orderArray}
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary25: "var(--color-my-700)",
              primary: "var(--color-nav-hover)",
            },
          })}
        />
      </StyledFilterSectionSub>
    </StyledFilterSectionMain>
  );
}

export default FilterSection;
