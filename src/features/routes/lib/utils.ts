export const getEcoScoreColor = (score: number) => {
  if (score >= 90) return "text-green-500";
  if (score >= 70) return "text-yellow-500";
  return "text-red-500";
};
