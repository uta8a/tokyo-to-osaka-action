import { GeoJson, GeoPoint, Hour, Km } from "./types.ts";

function _generateGeoJSON(t: Hour) {
  const distance = 60 * t; // distance in km
  const startX = 139.7673068;
  const startY = 35.6809591;
  const targetX = 135.5023;
  const targetY = 34.6937;
}

const calculateEndGeoPoint = (
  start: GeoPoint,
  target: GeoPoint,
  distance: Km,
): GeoPoint => {
  const directionX = target.longitude - start.longitude;
  const directionY = target.latitude - start.latitude;
  const length = Math.sqrt(directionX ** 2 + directionY ** 2);
  const unitX = directionX / length;
  const unitY = directionY / length;

  // NOTE: approximate 1 degree longitude/latitude as 111 km
  const endX = start.longitude + (unitX * distance / 111);
  const endY = start.latitude + (unitY * distance / 111);

  return { latitude: endY, longitude: endX };
};

const generateGeoJSON = (start: GeoPoint, end: GeoPoint): GeoJson => {
  const coordinates = [
    [start.longitude, start.latitude],
    [end.longitude, end.latitude],
  ];
  const content = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        id: 1,
        geometry: {
          type: "LineString",
          coordinates,
        },
      },
    ],
  };
  return JSON.stringify(content);
};

export { calculateEndGeoPoint, generateGeoJSON };
