export default (...args: boolean[]): string => args.reduce(
  (bool: boolean, current: boolean): boolean => bool && current,
  true
) ?
  'visible':
  'hidden';
