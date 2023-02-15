import * as core from '@actions/core';

import { Client } from 'znotify';


const userSecret = core.getInput('user_secret');
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

if (!userSecret) {
    core.setFailed('User secret is required');
    process.exit(1);
}

if (!content) {
    core.setFailed('Content is required');
    process.exit(1);
}

Client.create(userSecret, apiEndpoint)
    .then(client => client.send({
        title: title,
        content: content,
        long: long,
        priority: priority as any,
    }))
