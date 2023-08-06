export default function getAge(dateString) {
  const today = new Date();
  const birthday = new Date(dateString);
  const age = today.getFullYear() - birthday.getFullYear();
  const m = today.getMonth() - birthday.getMonth();
  const hasDatePassed = m < 0 || (m === 0 && today.getDate() < birthday.getDate());
  return hasDatePassed ? age - 1 : age;
}