const navList = [
  {
    name: 'B-INCOMESSF',
    nav: 10.0548,
  },
  {
    name: 'BM70SSF',
    nav: 9.9774,
  },
  {
    name: 'BEQSSF',
    nav: 11.247,
  },
  {
    name: 'B-FUTURESSF',
    nav: 11.443,
  },
];

const searchFund = process.argv[2];

if (!searchFund) {
  throw new Error('Please provide the fund name');
}

const target = navList.find(({ name }) => name === searchFund);

if (!target) {
  throw new Error('No data for this fund');
}

console.log(target.nav);
