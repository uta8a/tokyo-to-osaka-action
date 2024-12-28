import { context } from "npm:@actions/github@6.0.0";
import { getInput, info, summary } from "npm:@actions/core@1.11.1";
import { getWorkflowRunTime } from "../core/github.ts";
import { calculateEndGeoPoint, generateGeoJSON } from "../core/geo.ts";
import { GeoPoint } from "../core/types.ts";
import { generateMarkdown } from "../core/markdown.ts";

const tokyo: GeoPoint = { latitude: 35.6809591, longitude: 139.7673068 };
const osaka: GeoPoint = { latitude: 34.6937, longitude: 135.5023 };

const main = async () => {
  const token = getInput("github-token", { required: true });
  const hour = await getWorkflowRunTime(
    context.repo.owner,
    context.repo.repo,
    context.runId,
    token,
  );
  info(`Workflow run time: ${hour} hour(s)`);
  const distance = 60 * hour;
  info(`Distance: ${distance} km`);
  const end = calculateEndGeoPoint(
    tokyo,
    osaka,
    distance,
  );
  const geoJson = generateGeoJSON(tokyo, end);
  const content = generateMarkdown(geoJson);
  info(content);
  await summary.addRaw(content).write();
};

main();
