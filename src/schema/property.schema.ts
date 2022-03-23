import { getModelForClass, prop } from '@typegoose/typegoose';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class Property {
  @Field()
  @prop()
  code?: string;
  @Field()
  @prop()
  name?: string;
  @Field()
  @prop()
  price?: number;
  @Field()
  @prop()
  square?: number;
  @Field()
  @prop()
  bedroom?: number;
  @Field()
  @prop()
  bathroom?: number;
}

export const PropertyModel = getModelForClass<typeof Property>(Property);