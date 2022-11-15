import * as core from '@actions/core';
import {Client} from 'znotify';


const userID = core.getInput('user_id');
const content = core.getInput('content');
const title = core.getInput('title');
const long = core.getInput('long');
const apiEndpoint = core.getInput('api_endpoint');

Client.create(userID, apiEndpoint)
    .then(client => client.send(content, title, long))
