import { UpdatePropertyInput } from './../types/updatePropertyInput';
import { PropertyInput } from '../types/propertyInput';
import { PropertyMutationResponse } from './../types/propertyMutationResponse';

import PropertyService from "./../service/property.service";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { GetAllPropertyResponse } from './../types/getAllPropertyResponse';

@Resolver()
export default class PropertyResolver {
  constructor(private propertyService: PropertyService) {
    this.propertyService = new PropertyService();
  }
  @Mutation(() => PropertyMutationResponse)
  async CreateProperty(
    @Arg("input") input: PropertyInput
  ): Promise<PropertyMutationResponse> {
    try {
      const property = await this.propertyService.createProperty(input);
      return {
        code: 200,
        success: true,
        message: "Property successfully created",
        property: property
      }
    } catch (error) {
      console.log(error);
      return {
        code: 500,
        success: false,
        message: `Internal server error ${error.message}`,
      };
    }
  }

  @Query(() =>GetAllPropertyResponse)
  async GetAllProperty(
  ): Promise<GetAllPropertyResponse> {
    try {
      const properties = await this.propertyService.getAllProperty();
      return {
        code: 200,
        success: true,
        properties: properties
      }
    } catch (error) {
      console.log(error);
      return {
        code: 500,
        success: false,
        message: `Internal server error ${error.message}`,
      };
    }
  }

  @Mutation(() => PropertyMutationResponse)
  async UpdateProperty(
    @Arg("input") input: UpdatePropertyInput
  ): Promise<PropertyMutationResponse> {
    try {
      const property = await this.propertyService.updateProperty(input.updateId, input.updateProperty);
      return {
        code: 200,
        success: true,
        message: "Property successfully updated",
        property: property
      }
    } catch (error) {
      console.log(error);
      return {
        code: 500,
        success: false,
        message: `Internal server error ${error.message}`,
      };
    }
  }

  @Mutation(() => PropertyMutationResponse)
  async DeleteProperty(
    @Arg("id") id: string
  ): Promise<PropertyMutationResponse> {
    try {
      await this.propertyService.deleteProperty(id);
      return {
        code: 200,
        success: true,
        message: "Property successfully deleted"
      }
    } catch (error) {
      console.log(error);
      return {
        code: 500,
        success: false,
        message: `Internal server error ${error.message}`,
      };
    }
  }
}