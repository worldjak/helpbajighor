/* eslint-disable import/no-anonymous-default-export */ 
export default function (array: FAQItem[], language: string) {
  const allTranslatedFaqs = array.map((item: FAQItem) => {
    const translatedQuestion =
      language === "bn" ? item.question.bn : item.question.en;
    const translatedAnswer =
      language === "bn" ? item.answer.bn : item.answer.en;
    return {
      id: item.id,
      question: translatedQuestion,
      answer: translatedAnswer,
    };
  });
  return allTranslatedFaqs;
}
