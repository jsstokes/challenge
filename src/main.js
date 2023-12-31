const { createAndRegisterWorkflow } = require("./workflow/workflowCreator")
const { createTaskManager } = require("./worker/workerUtil")
const {
    executeWorkflowSync,
    executeWorkflowAsync,
} = require("./workflow/workflowUtil")
const { getWorkflowExecutionUrl } = require("./client/apiUtil")

async function main() {
    // const wf = await createAndRegisterWorkflow();
    const taskManager = await createTaskManager();
    taskManager.startPolling();
    // await runSync();
    // await runAsync();
    // await taskManager.stopPolling();
    console.log(taskManager.isPolling)
    await sleep(1000)

    // process.exit(0);
    
}


function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
async function runSync() {
    const workflowRun = await executeWorkflowSync();
    if (workflowRun.status != 'COMPLETED') {
        throw new Error(`workflow not completed, workflowId: ${workflowRun.workflowId}`);
    }
    console.log();
    console.log("=======================================================================================");
    console.log("Workflow Execution Completed");
    console.log(`Workflow Id: ${workflowRun.workflowId}`);
    console.log(`Workflow Status: ${workflowRun.status}`);
    console.log(`Workflow Output: ${workflowRun.output}`);
    console.log(`Workflow Execution Flow UI: ${getWorkflowExecutionUrl(workflowRun.workflowId)}`);
    console.log("=======================================================================================");
}

async function runAsync() {
    const workflowStatus = await executeWorkflowAsync();
    if (workflowStatus.status != 'COMPLETED') {
        throw new Error(`workflow not completed, workflowId: ${workflowStatus.workflowId}`);
    }
    console.log();
    console.log("=======================================================================================");
    console.log("Workflow Execution Completed");
    console.log(`Workflow Id: ${workflowStatus.workflowId}`);
    console.log(`Workflow Status: ${workflowStatus.status}`);
    console.log(`Workflow Output: ${workflowStatus.output}`);
    console.log(`Workflow Execution Flow UI: ${getWorkflowExecutionUrl(workflowStatus.workflowId)}`);
    console.log("=======================================================================================");
}

/*  DON'T FORGET TO SET THE FOLLOWING ENVIRONMENT VARIABLES
    export CONDUCTOR_SERVER_URL=https://play.orkes.io/api
    export KEY=dccbffd7-bab3-4f50-8aaf-d05cb489f3ce
    export SECRET=SFuC2GjB0RqYrvczVRX6osWj8hpmaNRDK3Z8oTMVW9XRuoke
*/
main()
