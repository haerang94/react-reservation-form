const valid = (values) => {
  const errors = {};
  const firstName = values.firstName;
  console.log(firstName);
  if (!firstName) errors.firstName = "영어로 2자 이상 입력해주세요.";
  else if (
    !firstName ||
    firstName.length < 2 ||
    !/^([a-zA-Z]+)$/.test(firstName)
  ) {
    errors.firstName = "영어로 2자 이상 입력해주세요.";
  }
  return errors;
};

export default valid;
