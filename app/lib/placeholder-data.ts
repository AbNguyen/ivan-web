// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
  },
];

const customers = [
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Evil Rabbit',
    email: 'evil@rabbit.com',
    image_url: '/customers/evil-rabbit.png',
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Delba de Oliveira',
    email: 'delba@oliveira.com',
    image_url: '/customers/delba-de-oliveira.png',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Lee Robinson',
    email: 'lee@robinson.com',
    image_url: '/customers/lee-robinson.png',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Michael Novotny',
    email: 'michael@novotny.com',
    image_url: '/customers/michael-novotny.png',
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Amy Burns',
    email: 'amy@burns.com',
    image_url: '/customers/amy-burns.png',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Balazs Orban',
    email: 'balazs@orban.com',
    image_url: '/customers/balazs-orban.png',
  },
];



const invoices = [
  {
    customer_id: customers[0].id,
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
  },
  {
    customer_id: customers[1].id,
    amount: 20348,
    status: 'pending',
    date: '2022-11-14',
  },
  {
    customer_id: customers[4].id,
    amount: 3040,
    status: 'paid',
    date: '2022-10-29',
  },
  {
    customer_id: customers[3].id,
    amount: 44800,
    status: 'paid',
    date: '2023-09-10',
  },
  {
    customer_id: customers[5].id,
    amount: 34577,
    status: 'pending',
    date: '2023-08-05',
  },
  {
    customer_id: customers[2].id,
    amount: 54246,
    status: 'pending',
    date: '2023-07-16',
  },
  {
    customer_id: customers[0].id,
    amount: 666,
    status: 'pending',
    date: '2023-06-27',
  },
  {
    customer_id: customers[3].id,
    amount: 32545,
    status: 'paid',
    date: '2023-06-09',
  },
  {
    customer_id: customers[4].id,
    amount: 1250,
    status: 'paid',
    date: '2023-06-17',
  },
  {
    customer_id: customers[5].id,
    amount: 8546,
    status: 'paid',
    date: '2023-06-07',
  },
  {
    customer_id: customers[1].id,
    amount: 500,
    status: 'paid',
    date: '2023-08-19',
  },
  {
    customer_id: customers[5].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-03',
  },
  {
    customer_id: customers[2].id,
    amount: 1000,
    status: 'paid',
    date: '2022-06-05',
  },
];

const revenue = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 3500 },
  { month: 'Aug', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3000 },
  { month: 'Dec', revenue: 4800 },
];

const latestInvoices = [
  {
    amount: '$448.00',
    name: 'Michael Novotny',
    image_url: '/customers/michael-novotny.png',
    email: 'michael@novotny.com',
    id: 'e3174954-66fc-4182-a1a4-031907f6bafa'
  },
  {
    amount: '$5.00',
    name: 'Delba de Oliveira',
    image_url: '/customers/delba-de-oliveira.png',
    email: 'delba@oliveira.com',
    id: '22007f10-fc76-4ac2-b6d1-accb9847bb7f'
  },
  {
    amount: '$345.77',
    name: 'Balazs Orban',
    image_url: '/customers/balazs-orban.png',
    email: 'balazs@orban.com',
    id: '92e8cbba-f36c-42e5-9313-f4cbf885001e'
  },
  {
    amount: '$542.46',
    name: 'Lee Robinson',
    image_url: '/customers/lee-robinson.png',
    email: 'lee@robinson.com',
    id: 'acf4e299-fc60-4593-aa79-220324b9cb3d'
  },
  {
    amount: '$6.66',
    name: 'Evil Rabbit',
    image_url: '/customers/evil-rabbit.png',
    email: 'evil@rabbit.com',
    id: 'f511442a-d2b9-4087-8042-d05de1a8c52a'
  }
];

const invoicesTable = [
  {
    id: 'e3174954-66fc-4182-a1a4-031907f6bafa',
    amount: 44800,
    date: '2023-09-09T17:00:00.000Z',
    status: 'paid',
    name: 'Michael Novotny',
    email: 'michael@novotny.com',
    image_url: '/customers/michael-novotny.png'
  },
  {
    id: '22007f10-fc76-4ac2-b6d1-accb9847bb7f',
    amount: 500,
    date: '2023-08-18T17:00:00.000Z',
    status: 'paid',
    name: 'Delba de Oliveira',
    email: 'delba@oliveira.com',
    image_url: '/customers/delba-de-oliveira.png'
  },
  {
    id: '92e8cbba-f36c-42e5-9313-f4cbf885001e',
    amount: 34577,
    date: '2023-08-04T17:00:00.000Z',
    status: 'pending',
    name: 'Balazs Orban',
    email: 'balazs@orban.com',
    image_url: '/customers/balazs-orban.png'
  },
  {
    id: 'acf4e299-fc60-4593-aa79-220324b9cb3d',
    amount: 54246,
    date: '2023-07-15T17:00:00.000Z',
    status: 'pending',
    name: 'Lee Robinson',
    email: 'lee@robinson.com',
    image_url: '/customers/lee-robinson.png'
  },
  {
    id: 'f511442a-d2b9-4087-8042-d05de1a8c52a',
    amount: 666,
    date: '2023-06-26T17:00:00.000Z',
    status: 'pending',
    name: 'Evil Rabbit',
    email: 'evil@rabbit.com',
    image_url: '/customers/evil-rabbit.png'
  },
  {
    id: '6042c78a-786a-49af-98b8-21351304c4cc',
    amount: 1250,
    date: '2023-06-16T17:00:00.000Z',
    status: 'paid',
    name: 'Amy Burns',
    email: 'amy@burns.com',
    image_url: '/customers/amy-burns.png'
  }
]

export { users, customers, invoices, 
  revenue, latestInvoices, invoicesTable };
