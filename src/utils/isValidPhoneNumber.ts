export function isValidPhoneNumber(phone: string) {
  const regexCharacters = /[a-zA-Z]/;
  const isValidPhone = !regexCharacters.test(phone) && phone.length === 11;

  return isValidPhone;
}
