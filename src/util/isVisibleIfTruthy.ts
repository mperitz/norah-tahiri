export default function(...args: boolean[]): string {
  return args.reduce(
  (bool: boolean, current: boolean): boolean => bool && current,
  true
) ?
  'visible':
  'hidden';
}
