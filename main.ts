import { build as dnt } from "jsr:@deno/dnt@0.41.3";
import { build as esbuild } from "https://deno.land/x/esbuild@v0.24.2/mod.js";

// reference: https://zenn.dev/proudust/articles/2022-12-02-gh-action-with-deno

await dnt({
  entryPoints: [
    "./src/main.ts",
    "./src/post.ts",
  ],
  outDir: "./dnt",
  shims: {
    deno: true,
  },
  typeCheck: false,
  test: false,
  declaration: false,
  scriptModule: false,
  skipSourceOutput: true,
  package: {
    name: "tokyo-to-osaka-action",
    description:
      "Joke action: Visualize CI/CD time to line from Tokyo to Osaka on geojson",
    version: "0.1.0",
    repository: {
      type: "git",
      url: "git+https://github.com/uta8a/tokyo-to-osaka-action.git",
    },
    keywords: [
      "actions",
    ],
    author: "Masanori Tani (uta8a)",
    license: "MIT",
    bugs: {
      url: "https://github.com/uta8a/tokyo-to-osaka-action/issues",
    },
    homepage: "https://github.com/uta8a/tokyo-to-osaka-action#readme",
  },
});

console.log("$ esbuild");
await Promise.all([
  esbuild({
    bundle: true,
    entryPoints: ["./dnt/esm/src/main.js"],
    outfile: "./dist/main.js",
    platform: "node",
    target: "es2021",
  }),
  esbuild({
    bundle: true,
    entryPoints: ["./dnt/esm/src/post.js"],
    outfile: "./dist/post.js",
    platform: "node",
    target: "es2021",
  }),
]);

Deno.exit();
