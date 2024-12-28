import { GeoJson, Markdown } from "./types.ts";

const generateMarkdown = (geojson: GeoJson): Markdown => {
  return `# Your CI/CD route from Tokyo to Osaka

\`\`\`geojson
${geojson}
\`\`\`
`;
};

export { generateMarkdown };
