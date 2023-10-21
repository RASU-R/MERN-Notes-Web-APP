import mongoose from "mongoose";
import { nanoid } from 'nanoid';

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const users = [
  {
    _id: userIds[0],
    firstName: "Virat",
    lastName: "Kohli",
    email: "virat18@gmail.com",
    password: "virat18",
    picturePath: "p0.jpeg",
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
  {
    _id: userIds[1],
    firstName: "Steve",
    lastName: "Smith",
    email: "smith46@gmail.com",
    password: "smith46",
    picturePath: "p1.jpeg",
    createdAt: 1595589072,
    updatedAt: 1595589072,
    __v: 0,
  },
  {
    _id: userIds[2],
    firstName: "Rohit",
    lastName: "Sharma",
    email: "rohit45@gmail.com",
    password: "rohit45",
    picturePath: "p2.jpeg",
    createdAt: 1288090662,
    updatedAt: 1288090662,
    __v: 0,
  },
  {
    _id: userIds[3],
    firstName: "Shikhar",
    lastName: "Dhawan",
    email: "shikhar23@gmail.com",
    password: "shikhar23",
    picturePath: "p3.jpeg",
    createdAt: 1219214568,
    updatedAt: 1219214568,
    __v: 0,
  },
  {
    _id: userIds[4],
    firstName: "Apsal",
    lastName: "Dummy",
    email: "apsal@gmail.com",
    password: "apsal",
    picturePath: "p4.jpeg",
    createdAt: 1493463661,
    updatedAt: 1493463661,
    __v: 0,
  },
  {
    _id: userIds[5],
    firstName: "Jaya",
    lastName: "Kajji",
    email: "jaya@gmail.com",
    password: "jaya",
    picturePath: "p5.jpeg",
    createdAt: 1381326073,
    updatedAt: 1381326073,
    __v: 0,
  },
  {
    _id: userIds[6],
    firstName: "Bumrah",
    lastName: "Jasprit",
    email: "bumrah@gmail.com",
    password: "bumrah",
    picturePath: "p6.jpeg",
    createdAt: 1714704324,
    updatedAt: 1642716557,
    __v: 0,
  },
  {
    _id: userIds[7],
    firstName: "Bhuvi",
    lastName: "kumar",
    email: "bhuvi15@gmail.com",
    password: "bhuvi15",
    picturePath: "p7.jpeg",
    createdAt: 136990844,
    updatedAt: 1359322268,
    __v: 0,
  },
];

export const notes = [
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[1],
    firstName: "Steve",
    lastName: "Smith",
  note: [{
    id:nanoid(),
    text:"cricket",
    date:new Date().toLocaleDateString(),
  },
  {
    id:nanoid(),
    text:"leg spin",
    date:new Date().toLocaleDateString(),
  },
  {
    id:nanoid(),
    text:"ball temper",
    date:new Date().toLocaleDateString(),
  },
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[3],
    firstName: "Shikhar",
    lastName: "Dhawan",
  note: [
    {
      id:nanoid(),
      text:"dhawan cool",
      date:new Date().toLocaleDateString(),
    },
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[4],
    firstName: "Apsal",
    lastName: "Dummy",
    note: [
      {
        id:nanoid(),
        text:"Mokka dummy",
        date:new Date().toLocaleDateString(),
      },
    
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[5],
    firstName: "Jaya",
    lastName: "Kajji",
    note: [
      {
        id:nanoid(),
        text:"keral fan boy",
        date:new Date().toLocaleDateString(),
      },
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[6],
    firstName: "Bumrah",
    lastName: "Jasprit",
    note: [
      {
        id:nanoid(),
        text:"sanajana",
        date:new Date().toLocaleDateString(),
      },
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[7],
    firstName: "Bhuvi",
    lastName: "Kumar",
    note: [
      {
        id:nanoid(),
        text:"Swing king",
        date:new Date().toLocaleDateString(),
      },
    ],
  },
];
