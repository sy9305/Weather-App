const weatherThemes = {
  sunny: {
    keywords: ["sunny", "clear"],
    image: "/weatherImages/sunny.jpg",
    color: "#FFD54F" // Amber
  },
  cloudy: {
    keywords: ["cloudy", "overcast", "partly cloudy"],
    image: "/weatherImages/cloudy.jpg",
    color: "#90A4AE" // Blue Grey
  },
  foggy: {
    keywords: ["mist", "fog", "freezing fog"],
    image: "/weatherImages/mist.jpg",
    color: "#B0BEC5" // Light Grey
  },
  rainy: {
    keywords: ["rain", "drizzle", "showers", "patchy rain"],
    image: "/weatherImages/rainy.jpg",
    color: "#4FC3F7" // Light Blue
  },
  snowy: {
    keywords: ["snow", "sleet", "blizzard", "ice", "freezing"],
    image: "/weatherImages/snowy.jpg",
    color: "#E1F5FE" // Pale Blue
  },
  thunder: {
    keywords: ["thunder", "storm"],
    image: "/weatherImages/thunderstorm.jpg",
    color: "#B39DDB" // Light Purple
  },
  default: {
    image: "/weatherImages/default.jpg",
    color: "#ECEFF1" // Default light grey
  }
};

export default weatherThemes;
