exports.formats = {
  // personName: faker => faker.name.findName(),
  companyName: faker => faker.company.companyName(),
  longInteger: faker => faker.random.number({min:10000, max:90000}),
  projectName: faker => 'Project ' + faker.company.companyName(),
  projectStatus: faker => faker.random.arrayElement(['active','inactive'])
};
