import { unique, chunk, flatten, average } from './operations.js';

const nums = [1, 2, 2, 3, 4, 4, 5];
console.log('unique:', unique(nums));
console.log('chunk:', chunk(nums, 3));
console.log('flatten:', flatten([1, [2, [3, 4]], 5]));
console.log('average:', average(nums));
