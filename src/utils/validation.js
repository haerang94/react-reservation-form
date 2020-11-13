// 유효성 검사를 담당하는 함수 모음

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
  return null;
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
  return null;
};

const validGender = (gender) => {
  if (gender !== "여" && gender !== "남") {
    return "성별을 선택해주세요.";
  }
  return null;
};

const validBirthdate = (birthdate) => {
  if (!birthdate || birthdate.length !== 6) {
    return "6자리의 생년월일을 입력해 주세요.";
  }
  if (!/^([0-9]+)$/.test(birthdate)) {
    return "숫자만 입력 가능합니다.";
  }
  return null;
};

const validOtherInfo = (otherInfo) => {
  if (!otherInfo) {
    return "기타 예약 정보를 입력해주세요.";
  }
  if (otherInfo.length > 200) {
    return "최대 200자까지 입력 가능합니다.";
  }
  return null;
};

const validPhoneNumber = (phoneNumber) => {
  if (!phoneNumber || phoneNumber.length < 2) {
    return "최소 2자 이상 입력해주세요.";
  }
  if (phoneNumber.length > 20) {
    return "최대 20자까지 입력 가능합니다.";
  }
  if (!/^([0-9]+)$/.test(phoneNumber)) {
    return "숫자만 입력 가능합니다.";
  }
  return null;
};

// 현재 onChange가 일어나는 input창에서만 경고 메세지를 띄우고 싶어 current로 현재 input이 일어나는 태그를 표시했습니다.
// onSubmit의 경우 current는 null입니다.
const valid = (
  {
    firstName,
    lastName,
    koreanName,
    gender,
    birthdate,
    username,
    otherInfo,
    phoneNumber,
    hour,
    minute,
  },
  current,
  info_errors,
  idx
) => {
  // 결제하기 버튼을 눌러 전체를 검사하거나 현재 input하는 위치에 해당하는 요소 검사
  const errors = { ...info_errors };
  if (!current || current === "firstName") {
    errors.firstName = validEnglishName(firstName);
  }
  if (!current || current === "lastName") {
    errors.lastName = validEnglishName(lastName);
  }
  if (!current || current === "koreanName") {
    errors.koreanName = validKorean(koreanName);
  }
  if (!current || current === "gender") {
    errors.gender = validGender(gender);
  }
  if (!current || current === "birthdate") {
    errors.birthdate = validBirthdate(birthdate);
  }
  if (!current || current === "hour") {
    if (hour === "시") errors.hour = "숙소 도착 예정 시간을 선택해주세요.";
    else errors.hour = null;
  }
  if (!current || current === "minute") {
    if (minute === "분") errors.minute = "숙소 도착 예정 시간을 선택해주세요.";
    else errors.minute = null;
  }
  // 아래 세 요소는 index 0에만 존재하는 공통 정보이다
  if ((!idx && !current) || current === "username") {
    errors.username = validEnglishName(username);
  }
  if ((!idx && !current) || current === "phoneNumber") {
    errors.phoneNumber = validPhoneNumber(phoneNumber);
  }
  if ((!idx && !current) || current === "otherInfo") {
    errors.otherInfo = validOtherInfo(otherInfo);
  }

  return errors;
};

export { valid };
