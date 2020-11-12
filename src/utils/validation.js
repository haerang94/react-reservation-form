const validEnglishName = (name) => {
  if (!name || name.length < 2 || !/^([a-zA-Z]+)$/.test(name)) {
    return "영어로 2자 이상 입력해주세요.";
  }
  return;
};

const validKorean = (name) => {
  if (!name || name.length < 2 || !/^([ㄱ-ㅎ|ㅏ-ㅣ|가-힣]+)$/.test(name)) {
    return "한글로 2자 이상 입력해주세요.";
  }
  return;
};

const validGender = (checked) => {
  if (!checked) {
    return "성별을 선택해주세요";
  }
  return;
};

const valid = (
  current,
  { firstName, lastName, koreanName, gender },
  checked
) => {
  const errors = {};
  if (current === "firstName") {
    errors.firstName = validEnglishName(firstName);
  }
  if (current === "lastName") {
    errors.lastName = validEnglishName(lastName);
  }
  if (current === "koreanName") {
    errors.koreanName = validKorean(koreanName);
  }
  if (current === "gender") {
    errors.gender = validGender(checked);
  }
  return errors;
};

export default valid;
