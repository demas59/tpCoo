#!/usr/bin/env node
import express from 'express'
import Server from './classes/Server';
import Appli from './classes/App'

const application = express()
const app = new Appli(application);
const serveur = new Server(1234,application);





