import * as core from '@actions/core';

import {Client} from 'znotify';


const userID = core.getInput('user_id');
const content = core.getInput('content');
const title = core.getInput('title');
const long = core.getInput('long');
const priority = core.getInput('priority');
const apiEndpoint = core.getInput('api_endpoint');

const possiblePriorities = ['low', 'normal', 'high'];

if (!possiblePriorities.includes(priority)) {
    core.setFailed(`Priority must be one of ${possiblePriorities.join(', ')}`);
    process.exit(1);
}

Client.create(userID, apiEndpoint)
    .then(client => client.send({
        title: title,
        content: content,
        long: long,
        priority: priority as any,
    }))
