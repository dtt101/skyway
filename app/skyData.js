// Example router query
// query RouterQuery {
//   router(id: "2") {
//     id
//     microfilter
//   }
// }
// Example customer query
// query CustomerQuery {
//   customer(id: "2") {
//     id
// 		 firstName
//     lastName
//   }
// }

let tracey = {
  id: 1,
  firstName: 'Tracey',
  lastName: 'Testname'
};

let phil = {
  id: 2,
  firstName: 'Phil',
  lastName: 'Potts'
};

let sam = {
  id: 3,
  firstName: 'Sam',
  lastName: 'Blam'
};

let customerData = {
  1: tracey,
  2: phil,
  3: sam
};

let typeOneRouter = {
  id: 1,
  model: 'SR-101',
  serialNumber: '12345'
};

let typeTwoRouter = {
  id: 2,
  model: 'SR-202',
  serialNumber: '54321'
};

let routerData = {
  1: typeOneRouter,
  2: typeTwoRouter
};

export function getCustomer(id) {
  return customerData[id];
}

export function getRouter(id) {
  return routerData[id];
}

export function getMicrofilter(router) {
  if (router.model === 'SR-202') {
    return true;
  }
  return false;
}
