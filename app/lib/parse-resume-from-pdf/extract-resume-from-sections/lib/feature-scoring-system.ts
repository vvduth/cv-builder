import { FeatureSet, TextItems, TextScores } from "../../types";

const computeFeatureScores = (
  textItems: TextItems,
  featureSets: FeatureSet[]
): TextScores => {
  const textScores = textItems.map((item) => ({
    text: item.text,
    score: 0,
    match: false,
  }));

  for (let i = 0; i < textItems.length; i++) {
    const textItem = textItems[i];

    for (const featureSet of featureSets) {
      const [hasFeature, score, returnMatchingText] = featureSet;
      const result = hasFeature(textItem);
      if (result) {
        let text = textItem.text;
        if (returnMatchingText && typeof result === "object") {
          text = result[0];
        }

        const textScore = textScores[i];
        if (textItem.text === text) {
          textScore.score += score;
          if (returnMatchingText) {
            textScore.match = true;
          }
        } else {
          textScores.push({ text, score, match: true });
        }
      }
    }
  }
  return textScores;
};

export const getTextWithHighestFeatureScore = (
  textItems: TextItems,
  featureSets: FeatureSet[],
  returnEmptyStringIfHighestScoreIsNotPositive = true,
  returnConcatenatedStringForTextsWithSameHighestScore = false
) => {
  const textScores = computeFeatureScores(textItems, featureSets);

  let textsWithHighestFeatureScore: string[] = [];
  let highestScore = -Infinity;
  for (const { text, score } of textScores) {
    if (score >= highestScore) {
      if (score > highestScore) {
        textsWithHighestFeatureScore = [];
      }

      textsWithHighestFeatureScore.push(text);
      highestScore = score;
    }
  }

  if (returnEmptyStringIfHighestScoreIsNotPositive && highestScore <= 0) {
    return ["", textScores] as const;
  }

  const text = !returnConcatenatedStringForTextsWithSameHighestScore
    ? textsWithHighestFeatureScore[0] ?? ""
    : textsWithHighestFeatureScore.map((s) => s.trim()).join(" ");

  return [text, textScores] as const;
};