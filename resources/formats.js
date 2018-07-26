exports.formats = {
  // personName: faker => faker.name.findName(),
  companyName: faker => faker.company.companyName(),
  email: faker => faker.internet.email(),
  longInteger: faker => faker.random.number({min:10000, max:90000}),
  personName: faker => `${faker.name.firstName()} ${faker.name.lastName()}`,
  projectName: faker => 'Project ' + faker.company.companyName(),
  projectStatus: faker => faker.random.arrayElement(['active','inactive']),
  user: faker => faker.internet.userName(),
  userRol: faker => faker.random.arrayElement(['admin', 'Team Leader', 'Developer'])
};
