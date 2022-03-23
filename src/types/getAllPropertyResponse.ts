import { Property } from "./../schema/property.schema"
import { Field, ObjectType } from "type-graphql"
import { IResponse } from "./mutationResponse"

@ObjectType({implements: IResponse})
export class GetAllPropertyResponse implements IResponse {
  code: number
  success: boolean
  message?: string

  @Field(()=> [Property], {nullable: true})
  properties?: Array<Property>
}