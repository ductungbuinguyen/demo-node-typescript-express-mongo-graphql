import { Field, InputType } from "type-graphql";
import { PropertyInput } from './propertyInput';
@InputType()
export class UpdatePropertyInput {
  @Field({nullable: false})
  updateId: string;
  @Field(()=> PropertyInput, {nullable: false})
  updateProperty: PropertyInput;
}