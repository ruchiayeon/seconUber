export const typeDefs = ["type Chat {\n  id: Int!\n  messages: [Message]!\n  participant: [User]!\n  createAt: String!\n  updateAt: String\n}\n\ntype Message {\n  id: Int!\n  text: String!\n  chat: Chat!\n  user: User!\n  createAt: String!\n  updateAt: String\n}\n\ntype Place {\n  id: Int!\n  name: String!\n  lastLng: Float!\n  lastLnt: Float!\n  adress: String!\n  favorite: Boolean!\n  createAt: String!\n  updateAt: String\n}\n\ntype Ride {\n  id: Int!\n  status: String!\n  customer: User!\n  driver: User!\n  pickUpAddress: String!\n  pickUpLng: Float!\n  pickUpLat: Float!\n  dropOffAddress: String!\n  dropOffLng: Float!\n  dropOffLat: Float!\n  price: Float!\n  duration: String!\n  distance: String!\n  createAt: String!\n  updateAt: String\n}\n\ntype FacebookConnectResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype Mutation {\n  FacebookConnect(email: String, firstName: String!, lastName: String!, phoneNumber: String, profilePhoto: String, facebokId: String!): FacebookConnectResponse!\n}\n\ntype User {\n  id: Int!\n  email: String\n  verifiedEmail: Boolean!\n  firstName: String!\n  lastName: String!\n  fullName: String\n  age: Int\n  password: String\n  phoneNumber: String\n  verifiedPhoneNumber: Boolean!\n  facebokId: String\n  profilePhoto: String\n  createAt: String!\n  updateAt: String\n  chat: Chat\n  messages: [Message]\n  rideCustomer: [Ride]\n  rideDirver: [Ride]\n  verifications: [Verification]\n  # #앱의 특성에 따라 가감이 있는부분 \n  isRiding: Boolean!\n  isDriving: Boolean!\n  isTaken: Boolean!\n  lastLng: Float\n  lastLat: Float\n  lastOrientation: Float\n}\n\ntype Query {\n  user: User\n}\n\ntype Verification {\n  id: Int!\n  user: User!\n  target: String!\n  payload: String!\n  key: String!\n  used: Boolean!\n  createAt: String!\n  updateAt: String\n}\n"];
/* tslint:disable */

export interface Query {
  user: User | null;
}

export interface User {
  id: number;
  email: string | null;
  verifiedEmail: boolean;
  firstName: string;
  lastName: string;
  fullName: string | null;
  age: number | null;
  password: string | null;
  phoneNumber: string | null;
  verifiedPhoneNumber: boolean;
  facebokId: string | null;
  profilePhoto: string | null;
  createAt: string;
  updateAt: string | null;
  chat: Chat | null;
  messages: Array<Message> | null;
  rideCustomer: Array<Ride> | null;
  rideDirver: Array<Ride> | null;
  verifications: Array<Verification> | null;
  isRiding: boolean;
  isDriving: boolean;
  isTaken: boolean;
  lastLng: number | null;
  lastLat: number | null;
  lastOrientation: number | null;
}

export interface Chat {
  id: number;
  messages: Array<Message>;
  participant: Array<User>;
  createAt: string;
  updateAt: string | null;
}

export interface Message {
  id: number;
  text: string;
  chat: Chat;
  user: User;
  createAt: string;
  updateAt: string | null;
}

export interface Ride {
  id: number;
  status: string;
  customer: User;
  driver: User;
  pickUpAddress: string;
  pickUpLng: number;
  pickUpLat: number;
  dropOffAddress: string;
  dropOffLng: number;
  dropOffLat: number;
  price: number;
  duration: string;
  distance: string;
  createAt: string;
  updateAt: string | null;
}

export interface Verification {
  id: number;
  user: User;
  target: string;
  payload: string;
  key: string;
  used: boolean;
  createAt: string;
  updateAt: string | null;
}

export interface Mutation {
  FacebookConnect: FacebookConnectResponse;
}

export interface FacebookConnectMutationArgs {
  email: string | null;
  firstName: string;
  lastName: string;
  phoneNumber: string | null;
  profilePhoto: string | null;
  facebokId: string;
}

export interface FacebookConnectResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface Place {
  id: number;
  name: string;
  lastLng: number;
  lastLnt: number;
  adress: string;
  favorite: boolean;
  createAt: string;
  updateAt: string | null;
}
