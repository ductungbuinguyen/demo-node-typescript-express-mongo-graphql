import { Property } from "./../schema/property.schema"
import { Field, ObjectType } from "type-graphql"
import { IResponse } from "./mutationResponse"

@ObjectType({implements: IResponse})
export class PropertyMutationResponse implements IResponse {
  code: number
  success: boolean
  message?: string

  @Field({nullable: true})
  property?: Property
}