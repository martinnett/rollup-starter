import random from './lib';
import debug from 'debug';

const log = debug('app:log');
const rd = random();
debug.enable('*');
log(rd);

document.write(rd);
