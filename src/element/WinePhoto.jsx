import Heading from "../ui/Heading";
function WinePhoto({ productMatches }) {
  if (!productMatches) return null;
  const length = productMatches?.length;

  if (length < 1) return null;
  const title = productMatches[0]?.title; // mettere random!
  const image = productMatches[0]?.imageUrl;
  const url = "url(" + image + ")";

  return (
    <div
      style={{
        margin: "auto",
        backgroundImage: "url(/paper.jpg)",
        borderRadius: "4rem",
        padding: "2rem",
        height: "30rem",
        width: "15rem",
        border: "solid 0.5rem var(--color-my-back)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Heading
        style={{
          fontSize: "1.5rem",
        }}
      >
        <p
          style={{
            display: "flex",
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          {title}
        </p>
      </Heading>
      <div
        style={{
          marginTop: "2.5rem",
          marginLeft: "2.5rem",
          backgroundImage: url,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          height: "100%",
          borderRadius: "20px",
        }}
      ></div>
    </div>
  );
}

export default WinePhoto;
