export function formatCoordinate(coordinate?: number) {
  if (!coordinate) return undefined;

  return coordinate.toFixed(8);
}
