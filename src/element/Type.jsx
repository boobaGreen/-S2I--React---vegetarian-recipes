function Type({ dishTypes }) {
  let dishTypeExists = false;
  if (dishTypes.length > 0) {
    dishTypeExists = true;
  }
  if (!dishTypeExists) return null;
  return (
    <div>
      {dishTypes.map((type, i) => (
        <p key={i}>{type}</p>
      ))}
    </div>
  );
}

export default Type;
