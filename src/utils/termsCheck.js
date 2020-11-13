//  약관을 토글하는 기능을 구현하는 함수
// current는 지금 체크한 약관이고 newValues는 새로 받은 약관 체크 여부 객체
const checkingTerms = (current, newValues) => {
  // 불변성을 위해 새로운 객체를 생성
  const result = { ...newValues };
  // 전체 동의시 다른 약관도 항상 true
  if (current === "allTerms") {
    if (result.allTerms) {
      result.travelerTerm = true;
      result.bargainTerm = true;
    } else {
      // 전체 약관 해제
      result.travelerTerm = false;
      result.bargainTerm = false;
    }
  }
  // 여행자 약관을 해지했다면 전체 약관 항상 false
  if (current === "travelerTerm" && !result.travelerTerm) {
    result.allTerms = false;
  }
  // 특가 약관을 해지했다면 전체 약관 항상 false
  if (current === "bargainTerm" && !result.bargainTerm) {
    result.allTerms = false;
  }
  return result;
};

export default checkingTerms;
