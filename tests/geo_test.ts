import { assertEquals } from "@std/assert";
import { calculateEndGeoPoint, generateGeoJSON } from "../core/geo.ts";

Deno.test("generateGeoJSON() generates correct JSON", () => {
  const start = {
    latitude: 0.0,
    longitude: 1.0,
  };
  const end = {
    latitude: 1.0,
    longitude: 2.0,
  };
  const geojson = generateGeoJSON(start, end);

  assertEquals(
    geojson,
    '{"type":"FeatureCollection","features":[{"type":"Feature","id":1,"geometry":{"type":"LineString","coordinates":[[1,0],[2,1]]}}]}',
  );
});

Deno.test("calculateEndGeoPoint() calculates correct end point", () => {
  const start = {
    latitude: 0.0,
    longitude: 0.0,
  };
  const end = {
    latitude: 1.0,
    longitude: 0.0,
  };
  const distance = 111.0;
  const endGeoPoint = calculateEndGeoPoint(start, end, distance);

  assertEquals(endGeoPoint, {
    latitude: 1.0,
    longitude: 0.0,
  });
});
