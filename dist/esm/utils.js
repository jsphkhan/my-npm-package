export function utilSum(a, b) {
  console.log('** easy to locate **');
  return a + b;
}
export function utilMultuply(a, b) {
  console.log('** should tree shake **');
  return a * b;
}