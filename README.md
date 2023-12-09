# Challenge
This repository contains the results of my Orkes Challenge.

## Object
Create a workflow
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

