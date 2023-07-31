import { useQueryCust } from "../contexts/QueryContext";

function Settings() {
  const min = 1;
  const max = 100;
  const { dispatch, number } = useQueryCust();
  return (
    <input
      className="settings"
      type="number"
      placeholder="insert number of recipes per page"
      value={number}
      onChange={(e) =>
        dispatch({
          type: "filter/number",
          payload: Math.max(min, Math.min(max, Number(e.target.value))),
        })
      }
    />
  );
}

export default Settings;
