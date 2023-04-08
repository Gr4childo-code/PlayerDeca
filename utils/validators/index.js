export const validatePassword = (currentPassword, password, passwordConfirmation) => {
  const passwordRegEx = /(?=.*[0-9])[0-9a-zA-Z!@#$%^&*]{6,20}/g;
  if (password === passwordConfirmation && password !== currentPassword) {
    return passwordRegEx.test(password);
  } else {
    return ''
  }
}
