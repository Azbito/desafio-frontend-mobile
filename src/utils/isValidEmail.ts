export function isValidEmail(email: string): boolean {
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  return validEmail;
}
