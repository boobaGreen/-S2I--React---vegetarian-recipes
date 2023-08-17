export const optionsArray = [
  { value: 6, label: "6 per page" },
  { value: 12, label: "12 per page" },
  { value: 24, label: "24 per page" },
  { value: 48, label: "48 per page" },
  { value: 96, label: "96 per page" },
];
export const dietArray = [
  { value: "vegetarian", label: "diet-vegetarian" },
  { value: "lacto-vegetarian", label: "lacto-vegetarian" },
  { value: "vegan", label: "vegan" },
];
export const intolerancesArray = [
  { value: "", label: "Intolerances...", disabled: true },
  { value: "dairy", label: "dairy" },
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
export const typeArray = [
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
export const timeArray = [
  { value: 999999, label: "Max Ready Time...", disabled: true },
  { value: 5, label: "5 mins" },
  { value: 15, label: "15 mins" },
  { value: 30, label: "30 mins" },
  { value: 45, label: "45 mins" },
  { value: 60, label: "1 hour" },
  { value: 999999, label: "No Limit" },
];
export const orderArray = [
  { value: "", label: "Order...", disabled: true },
  { value: "random", label: "random" },
  {
    value: { order: "price", direction: "asc" },
    label: "↑ price",
  },
  {
    value: { order: "price", direction: "desc" },
    label: "↓ price",
  },
  {
    value: { order: "time", direction: "asc" },
    label: "↑ time",
  },
  {
    value: { order: "time", direction: "desc" },
    label: "↓ time",
  },
  {
    value: { order: "calories", direction: "asc" },
    label: "↑ calories",
  },
  {
    value: { order: "calories", direction: "desc" },
    label: "↓ calories",
  },
  {
    value: { order: "max-used-ingredients", direction: "asc" },
    label: "↑ nº ingredients",
  },
  {
    value: { order: "max-used-ingredients", direction: "desc" },
    label: "↓ nº ingredients",
  },
];
