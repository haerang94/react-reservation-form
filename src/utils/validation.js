const validEnglishName = (name) => {
  if (!name || name.length < 2 || !/^([a-zA-Z]+)$/.test(name)) {
    return "영어로 2자 이상 입력해주세요.";
  }
  return;
};

const valid = (current, { firstName, lastName }) => {
  const errors = {};
  if (current === "firstName") {
    errors.firstName = validEnglishName(firstName);
  }
  if (current === "lastName") {
    errors.lastName = validEnglishName(lastName);
  }
  return errors;
};

export default valid;
