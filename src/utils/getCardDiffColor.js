export const getCardColorDependOnTitle = (category) => {
    switch (category.toLowerCase()) {
      case "education":
        return "lightblue";
      case "food":
        return "lightgreen";
      case "health":
        return "lightcyan";
      case "clothing":
        return "lightgray";
      default:
        return "lawngreen"; // Default color if title doesn't match any case
    }
  };
  