import * as turf from "@turf/turf";
import worldData from "@/data/world.json";

export const getCountryCenter = (countryName: string) => {
  const feature = (worldData as any).features.find(
    (f: any) => f.properties.name === countryName
  );
  if (!feature) return null;

  if (feature.properties.label_x && feature.properties.label_y) {
    return [feature.properties.label_y, feature.properties.label_x];
  }

  const centroid = turf.centerOfMass(feature);
  return centroid.geometry.coordinates.reverse() as [number, number];
  // reverse vì Leaflet dùng [lat, lng], còn GeoJSON là [lng, lat]
};
