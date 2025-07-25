import weatherThemes from './weatherThemes';

export const getWeatherTheme = (conditionText) => {
  const lower = conditionText.toLowerCase();

  for (const theme in weatherThemes) {
    if (theme === "default") continue;

    const { keywords } = weatherThemes[theme];
    if (keywords.some((word) => lower.includes(word))) {
      return weatherThemes[theme];
    }
  }

  return weatherThemes.default;
};
