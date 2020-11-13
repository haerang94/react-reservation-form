const checkingTerms = (current, newValues) => {
  const result = { ...newValues };
  if (current === "allTerms") {
    if (result.allTerms) {
      result.travelerTerm = true;
      result.bargainTerm = true;
    } else {
      result.travelerTerm = false;
      result.bargainTerm = false;
    }
  }
  if (current === "travelerTerm" && !result.travelerTerm) {
    result.allTerms = false;
  }
  if (current === "bargainTerm" && !result.bargainTerm) {
    result.allTerms = false;
  }
  return result;
};

export default checkingTerms;
