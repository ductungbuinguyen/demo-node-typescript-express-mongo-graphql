import { Field, InterfaceType } from "type-graphql";

@InterfaceType()
export class IProject {
  @Field()
  name?: number

  @Field()
  address?: boolean

  @Field()
  developer?: string
}