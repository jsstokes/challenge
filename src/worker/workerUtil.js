const {
    userInfoWorker,
    sendEmailWorker,
    sendSmsWorker,
    findSumWorker,
} = require("./workers");

const { clientPromise } = require("../client/apiUtil")
const { TaskManager } = require("@io-orkes/conductor-javascript");

async function createTaskManager() {
    const client = await clientPromise;
    return new TaskManager(client, [
        // userInfoWorker(),
        // sendEmailWorker(),
        // sendSmsWorker(),
        findSumWorker(),
    ], { logger: console, options: { concurrency: 5, pollInterval: 100 } });
}

module.exports = {
    createTaskManager: createTaskManager,
}
