export default function accessImmutableObject(object, array) {
  let currentValue = object;
  for (let i = 0; i < array.length; i++) {
    if (!currentValue || currentValue[array[i]] === undefined) {
      return undefined;
    }
    currentValue = currentValue[array[i]];
  }
  return currentValue;
}
