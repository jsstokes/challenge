const {
  GET_USER_INFO,
  SEND_EMAIL,
  SEND_SMS,
  FIND_SUM
} = require("../constants");

//
// This will eventually be the only worker
//     and will find return the index of 
//     2 integers that sum to the target
//
const findSum = () => {
  return {
    taskDefName: FIND_SUM,
    execute: async({inputData}) => {
    var result = null
    for (let x = 0; (x < inputData.numbers.length) && !result; x++) {
        for (let y = x + 1; y < inputData.numbers.length; y++) {
          if ( (inputData.numbers[x] + inputData.numbers[y]) == inputData.target) {
              result = [x,y]
              break
          }
        }
      }
      return {
        outputData: {
          result: result,
        },
        status: "COMPLETED"
      }
    }
  }
}


const userInfo = () => {
  return {
    taskDefName: GET_USER_INFO,
    execute: async ({ inputData }) => {
      const userId = inputData?.userId;
      return {
        outputData: {
          email: `${userId}@email.com`,
          phoneNumber: "555-555-5555",
        },
        status: "COMPLETED",
      };
    },
  };
};

const sendEmail = () => {
  return {
    taskDefName: SEND_EMAIL,
    execute: async ({ inputData }) => {
      console.log(`Sent email to: ${inputData?.email}`);
      return {
        status: "COMPLETED",
      };
    },
  };
};

const sendSms = () => {
  return {
    taskDefName: SEND_SMS,
    execute: async ({ inputData }) => {
      console.log(`Sent SMS to: ${inputData?.phoneNumber}`);
      return {
        status: "COMPLETED",
      };
    },
  };
};


module.exports = {
  userInfoWorker: userInfo,
  sendEmailWorker: sendEmail,
  sendSmsWorker: sendSms,
  findSumWorker: findSum,
}
