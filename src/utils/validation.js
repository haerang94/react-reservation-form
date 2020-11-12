const validEnglishName = (name) => {
  if (!name || name.length < 2) {
    return "최소 2자 이상 입력해주세요.";
  }
  if (name.length > 20) {
    return "최대 20자까지 입력 가능합니다.";
  }
  if (!/^([a-zA-Z ]+)$/.test(name)) {
    return "영어와 띄워쓰기만 입력 가능합니다.";
  }
  return;
};

const validKorean = (name) => {
  if (!name || name.length < 2) {
    return "한글로 2자 이상 입력해주세요.";
  }
  if (name.length > 20) {
    return "최대 20자까지 입력 가능합니다.";
  }
  if (!/^([ㄱ-ㅎ|ㅏ-ㅣ|가-힣]+)$/.test(name)) {
    return "한글만 입력 가능합니다.";
  }
  return;
};

const validGender = (checked) => {
  if (!checked) {
    return "성별을 선택해주세요.";
  }
  return;
};

const validBirthdate = (birthdate) => {
  if (!birthdate || birthdate.length !== 6) {
    return "6자리의 생년월일을 입력해 주세요.";
  }
  if (!/^([0-9]+)$/.test(birthdate)) {
    return "숫자만 입력 가능합니다.";
  }
  return;
};

const valid = (
  current,
  { firstName, lastName, koreanName, gender, birthdate },
  checked
) => {
  const errors = {};
  if (current === "firstName") {
    errors.firstName = validEnglishName(firstName);
  } else if (current === "lastName") {
    errors.lastName = validEnglishName(lastName);
  } else if (current === "koreanName") {
    errors.koreanName = validKorean(koreanName);
  } else if (current === "gender") {
    errors.gender = validGender(checked);
  } else if (current === "birthdate") {
    errors.birthdate = validBirthdate(birthdate);
  }
  return errors;
};

export default valid;
