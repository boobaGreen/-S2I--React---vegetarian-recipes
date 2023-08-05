function WinePhoto({ productMatches }) {
  const length = productMatches?.length;

  if (length < 1) return null;
  const title = productMatches[0]?.title; // mettere random!
  const image = productMatches[0]?.imageUrl;
  const url = "url(" + image + ")";

  // const description = productMatches[index].description;
  return (
    <div
      style={{
        backgroundImage: url,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        height: "100%",
      }}
    >
      {title}
    </div>
  );
}

export default WinePhoto;
