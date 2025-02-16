"use strict";
// type details=string|number
// interface details{
//     username:string | number
// }
// let obj:details={
//     username:123
// }
// let sample:number=123
// type details=string|number
// let sample2:details=123
// sample2='alsdjfh'
// username=123
// function getUserName(userDetails:userDetails,admindetails?:userDetails){
//     return userDetails.name
// }
// type userDetails={
//     name:string;
//     age:number|string;
//     salary?:2000
// }
// let userDetails:userDetails={
//     name:'aswin',
//     age:20
// }
// getUserName(userDetails)
// function getUsername({name,age}:{name:string;age?:number}){
//     return name
// }
// getUsername({name:'ahjksdf',age:20})
// type details={
//     name:string;
//     age:number | string;
//     salary?:6000
//     getName?:()=> void
// }
// function userDetails(userDetails:details):string{
//     return userDetails.name
// }
// let detailOfUser:details={
//     name:'aswin',
//     age:21
// }
// userDetails(detailOfUser)
// type namedTypes='pending'|'accepted'
// let OrderStatus:namedTypes="accepted"
// ----------------------------------function overloading----------------------------
// function findSum(num1:string,num2:string):string
// function findSum(num1:number,num2:number):number
// function findSum(num1:any,num2:any):any{
//         return num1+num2
// }
// findSum(2,2)
// findSum('2','2')
// type details = {
//     name: string;
//     age: number | string;
//     salary?: 6000
//     getName?: () => void
// }
// type adminDetails=details & {
//     role:string
// }
// let detailOfUser: details = {
//     name: 'aswin',
//     age: 21
// }
// let detailsOfAdmin: adminDetails = {
//     name: 'admin',
//     age: 21,
//     role:"ADMIN"
// }
// function getUserDetails<T>(userDetails: T): T {
//     return userDetails
// }
// const de = getUserDetails<details>(detailOfUser)
// console.log(de)
// interface user {
//     name: string;
//     age: number | string;
//     salary?: 6000
//     getName?: () => void
// }
// interface admin extends user{
//     role:string
// }
// --------------------------------------------enums---------------------------------
// type status='pending' | 'accepted' | 'rejected'
// -----------------------------------------keyof typeof---------------------------------------------
// const statusType={
//     PENDING:"pending",
//     ACCEPTED:"accepted",
//     REJECTED:'rejected'
// }
// function getStatus(orderId:string,status:keyof typeof statusType)
// {
//     console.log(orderId,'==',status);
// }
// getStatus('123','PENDING')
// type statusType='pending'|'accepted'
// function getStatus(orderId:string,status:statusType)
// {
//     console.log(orderId,'==',status);
// }
// getStatus('123',"accepted")
// ------------------------------------------------utility types----------------------------------------------------
// type users={
//     name:string;
//     age:number;
// }
// const userDetails:Readonly<users>={
//     name:'aswin',
//     age:20
// }
// userDetails.name='jsdhfb'
// console.log(userDetails)
