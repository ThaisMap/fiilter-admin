import { Operation } from "../entities/operation"
import { OperationTypes } from "../enums/operationTypes"

const compras: Operation[] = [
  new Operation({
    id: "1",
    fund: "IRDM11",
    amount: 3,
    price: 123.2,
    date: new Date(2019, 8, 23),
    type: OperationTypes.buy
  }),
  new Operation({
    id: "2",
    fund: "XPML11",
    amount: 3,
    price: 110.6,
    date: new Date(2019, 9, 26),
    type: OperationTypes.buy
  }),
  new Operation({
    id: "3",
    fund: "IRDM11",
    amount: 1,
    price: 100.61,
    date: new Date(2019, 11, 18),
    type: OperationTypes.buy
  }),
  new Operation({
    id: "4",
    fund: "IRDM11",
    amount: 2,
    price: 101.35,
    date: new Date(2020, 2, 20),
    type: OperationTypes.buy
  }),
  new Operation({
    id: "5",
    fund: "IRDM11",
    amount: 1,
    price: 101.8,
    date: new Date(2020, 5, 7),
    type: OperationTypes.buy
  }),
  new Operation({
    id: "6",
    fund: "IRDM11",
    amount: 1,
    price: 123.35,
    date: new Date(2020, 10, 2),
    type: OperationTypes.buy
  }),
  new Operation({
    id: "7",
    fund: "IRDM11",
    amount: 3,
    price: 98.24,
    date: new Date(2020, 12, 3),
    type: OperationTypes.buy
  }),
  new Operation({
    id: "8",
    fund: "IRDM11",
    amount: 3,
    price: 102.69,
    date: new Date(2021, 3, 23),
    type: OperationTypes.buy
  }),
  new Operation({
    id: "9",
    fund: "IRDM11",
    amount: 1,
    price: 102.69,
    date: new Date(2021, 4, 1),
    type: OperationTypes.buy
  }),
  new Operation({
    id: "10",
    fund: "XPML11",
    amount: 2,
    price: 99.92,
    date: new Date(2021, 6, 25),
    type: OperationTypes.buy
  }),
  new Operation({
    id: "11",
    fund: "CPFF11",
    amount: 4,
    price: 81.71,
    date: new Date(2021, 7, 26),
    type: OperationTypes.buy
  }),
  new Operation({
    id: "12",
    fund: "CPFF11",
    amount: 3,
    price: 81.6,
    date: new Date(2021, 7, 26),
    type: OperationTypes.buy
  }),
  new Operation({
    id: "13",
    fund: "XPML11",
    amount: 2,
    price: 102.3,
    date: new Date(2021, 7, 27),
    type: OperationTypes.buy
  }),
  new Operation({
    id: "14",
    fund: "IRDM11",
    amount: 3,
    price: 101.41,
    date: new Date(2021, 8, 4),
    type: OperationTypes.buy
  }),
  new Operation({
    id: "15",
    fund: "IRDM11",
    amount: 1,
    price: 101.41,
    date: new Date(2021, 8, 12),
    type: OperationTypes.buy
  }),
  new Operation({
    id: "16",
    fund: "CPFF11",
    amount: 1,
    price: 80.0,
    date: new Date(2021, 8, 17),
    type: OperationTypes.buy
  }),
  new Operation({
    id: "17",
    fund: "CPFF11",
    amount: 5,
    price: 80.1,
    date: new Date(2021, 9, 9),
    type: OperationTypes.buy
  }),
  new Operation({
    id: "18",
    fund: "XPML11",
    amount: 1,
    price: 101.45,
    date: new Date(2021, 9, 16),
    type: OperationTypes.buy
  }),
  new Operation({
    id: "19",
    fund: "BTAL11",
    amount: 3,
    price: 97.71,
    date: new Date(2021, 10, 14),
    type: OperationTypes.buy
  }),
  new Operation({
    id: "20",
    fund: "BTAL11",
    amount: 2,
    price: 95.97,
    date: new Date(2021, 11, 5),
    type: OperationTypes.buy
  }),
  new Operation({
    id: "21",
    fund: "XPML11",
    amount: 1,
    price: 97.71,
    date: new Date(2021, 11, 5),
    type: OperationTypes.buy
  }),
  new Operation({
    id: "22",
    fund: "BTAL11",
    amount: 5,
    price: 93.25,
    date: new Date(2021, 11, 12),
    type: OperationTypes.buy
  }),
  new Operation({
    id: "23",
    fund: "IRDM11",
    amount: 3,
    price: 99.75,
    date: new Date(2021, 12, 6),
    type: OperationTypes.buy
  }),
  new Operation({
    id: "24",
    fund: "CPFF11",
    amount: 7,
    price: 71.04,
    date: new Date(2021, 12, 6),
    type: OperationTypes.buy
  }),
  new Operation({
    id: "25",
    fund: "XPML11",
    amount: 3,
    price: 91.62,
    date: new Date(2021, 12, 15),
    type: OperationTypes.buy
  }),
  new Operation({
    id: "26",
    fund: "CPFF11",
    amount: 2,
    price: 69.9,
    date: new Date(2021, 12, 21),
    type: OperationTypes.buy
  }),
  new Operation({
    id: "27",
    fund: "CPFF11",
    amount: 6,
    price: 69.9,
    date: new Date(2022, 1, 7),
    type: OperationTypes.buy
  }),
  new Operation({
    id: "28",
    fund: "XPML11",
    amount: 2,
    price: 92.79,
    date: new Date(2022, 1, 13),
    type: OperationTypes.buy
  }),
  new Operation({
    id: "29",
    fund: "XPML11",
    amount: 1,
    price: 91.2,
    date: new Date(2022, 1, 13),
    type: OperationTypes.buy
  })
]

export { compras }
