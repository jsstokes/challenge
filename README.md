# Challenge
This repository contains the results of my Orkes Challenge. It is a clone of the Orkes javascript-sdk-examples repo with minimal changes required for the challenge.  

## Objective
Create a workflow that calls a worker. 

The Workflow takes two parameters:
1. numbers - an array of integers
2. target - the targeted value 

The objective is to search the array and return the indices of the 2 elements whose sum is equal to the value in "target"

## Output
The results are shown in the Output variable **result** of the task named *JSS_sumNumbers* 



## Export variables
Please export the appropriate variables (below) ***before*** executing the worker script
```shell
  export CONDUCTOR_SERVER_URL=https://play.orkes.io/api
  export KEY=dccbffd7-bab3-4f50-8aaf-d05cb489f3ce
  export SECRET=SFuC2GjB0RqYrvczVRX6osWj8hpmaNRDK3Z8oTMVW9XRuoke
```

Run the main program
```shell
npm install
node src/main.js
```

## Workflow

We create a simple 2-step workflow that fetches the user details and sends an email.

<table><tr><th>Visual</th><th>Code</th></tr>
<tr>
<td width="50%"><img src="resources/workflow.png" width="250px"></td>
<td>
<pre>

const getUserDetailsTask = simpleTask(GET_USER_INFO, GET_USER_INFO, {
  userId: "${workflow.input.userId}",
});
const emailOrSmsTask = switchTask("emailorsms", "${workflow.input.notificationPref}", {
  email: [
    simpleTask(SEND_EMAIL, SEND_EMAIL, {
      email: "${get_user_info.output.email}",
    })
  ],
  sms: [
    simpleTask(SEND_SMS, SEND_SMS, {
      phoneNumber: "${get_user_info.output.phoneNumber}",
    })
  ],
});
const wf = workflow(COMPLEX_WORKFLOW_NAME, [
  getUserDetailsTask,
  emailOrSmsTask,
]);
wf.inputParameters = ['userId', 'notificationPref']

</pre>
</td>
</tr>
</table>

## Worker

Workers are implemented as simple functions with sample implementation.  
See [workers.js](src/worker/workers.js) for details.

## Executing Workflows

There are two ways to execute a workflow:

1. Synchronously - useful for short duration workflows that completes within a few second.
2. Asynchronously - workflows that runs for longer period

### Synchronous Workflow Execution
```javascript
WorkflowExecutor#executeWorkflow(...)
```

### Asynchronous Workflow Execution

```javascript
WorkflowExecutor#startWorkflow(...)
```

See [main.js](src/main.js) for complete code sample of workflow execution.
