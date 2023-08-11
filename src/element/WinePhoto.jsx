import Heading from "../ui/Heading";
function WinePhoto({ productMatches }) {
  if (!productMatches) return null;
  const length = productMatches?.length;

  if (length < 1) return null;
  const title = productMatches[0]?.title; // mettere random!
  const image = productMatches[0]?.imageUrl;
  const url = "url(" + image + ")";

  // const description = productMatches[index].description;
  return (
    <div
      style={{
        backgroundImage: "url(/paper.jpg)",
        borderRadius: "4rem",
        padding: "2rem",
        height: "30rem",
        width: "15rem",
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
          backgroundImage: url,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          height: "80%",
        }}
      ></div>
    </div>
  );
}

export default WinePhoto;
