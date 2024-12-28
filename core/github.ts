import { getOctokit } from "npm:@actions/github@6.0.0";
import { Hour } from "./types.ts";

const getWorkflowRunTime = async (
  owner: string,
  repo: string,
  runId: number,
  token: string,
): Promise<Hour> => {
  const octokit = getOctokit(token);
  const { data } = await octokit.actions.getWorkflowRun({
    owner,
    repo,
    run_id: runId,
  });
  const startedAt = new Date(data.created_at);
  const completedAt = new Date(data.updated_at);
  const duration = completedAt.getTime() - startedAt.getTime();
  return duration / 1000 / 60 / 60;
};

export { getWorkflowRunTime };
