const obj1 = { firstName: 'Philip',lastName: 'Fry' };
const details = {job: 'Delivery Boy',employer: 'Planet Express'};
let merged={...details,...obj1};
console.log('mergedobject',merged);

/**
 * output
 * const obj1 = { firstName: 'Philip',lastName: 'Fry' };
const details = {job: 'Delivery Boy',employer: 'Planet Express'};
let merged={...details,...obj1};
console.log('mergedobject',merged);
 */