import { Field, InputType } from "type-graphql";
@InputType()
export class PropertyInput {
  @Field({nullable: true})
  code?: string;
  @Field({nullable: true})
  name?: string;
  @Field({nullable: true})
  price?: number;
  @Field({nullable: true})
  square?: number;
  @Field({nullable: true})
  bedroom?: number;
  @Field({nullable: true})
  bathroom?: number;
}