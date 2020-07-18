export default function getValueFromString(left: string): number {
  const pixels: string = left.split(/(px)/g)[0];
  return +pixels;
}
