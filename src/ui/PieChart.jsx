import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function PieChart({ healthScore }) {
  return (
    <CircularProgressbar
      value={healthScore}
      text={`${healthScore}%`}
      styles={{
        // Customize the root svg element
        root: {},
        // Customize the path, i.e. the "completed progress"
        path: {
          // Path color
          stroke: `rgba(4, 120, 87, ${healthScore / 100})`,
          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
          strokeLinecap: "round",
          // Customize transition animation
          transition: "stroke-dashoffset 0.5s ease 0s",
          // Rotate the path
          // transform: "rotate(0.25turn)",
          transformOrigin: "center center",
        },
        // Customize the circle behind the path, i.e. the "total progress"
        trail: {
          // Trail color
          stroke: "#d6d6d6",
          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
          strokeLinecap: "butt",
          // Rotate the trail
          transform: "rotate(0.25turn)",
          transformOrigin: "center center",
        },
        // Customize the text
        text: {
          // Text color
          fill: " #047857",
          // Text size
          fontSize: "22px",
        },
        // Customize background - only used when the `background` prop is true
        background: {
          fill: "#3e98c7",
        },
      }}
    />
  );
}

export default PieChart;
