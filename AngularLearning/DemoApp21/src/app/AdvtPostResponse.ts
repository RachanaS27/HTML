import { ICategory } from "./Category"

export interface IAdvtPostResponse{
    id:number,
    title:string,
    price:number,
    category:ICategory,
    description:string,
    userName:string,
    createdDate:Date,
    modifiedDate:Date,
    status:string
}