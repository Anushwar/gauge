const raisedCapital = {
  labels: ['Company 1', 'Company 2', 'Company 3', 'Company 4', 'Company 5'],
  datasets: [
    {
      label: 'Raised Capital',
      data: [120000, 500000, 300000, 700000, 800000],
      borderWidth: 1,
    },
  ],
};

const accountStatus = {
  labels: ['Active', 'Inactive', 'Closed'],
  datasets: [
    {
      data: [5, 3, 2],
      borderWidth: 1,
    },
  ],
};

const netProfit = {
  labels: ['2019', '2020', '2021', '2022'],
  datasets: [
    {
      label: 'Company 1',
      data: [100000, 200000, 300000, 400000],
      fill: false,
    },
    // Add more datasets for other companies...
  ],
};

const projectCompletion = {
  labels: ['Project 1', 'Project 2', 'Project 3', 'Project 4', 'Project 5'],
  datasets: [
    {
      label: 'Completed',
      data: [12, 19, 3, 5, 2],
      backgroundColor: 'rgb(75, 192, 192)',
    },
    {
      label: 'In Progress',
      data: [2, 3, 20, 5, 1],
      backgroundColor: 'rgb(255, 99, 132)',
    },
  ],
};

const employeePerformance = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Employee Performance',
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: 'rgb(75, 192, 192)',
      borderColor: 'rgba(75, 192, 192, 0.2)',
    },
  ],
};

export {
  raisedCapital,
  accountStatus,
  netProfit,
  projectCompletion,
  employeePerformance,
};
