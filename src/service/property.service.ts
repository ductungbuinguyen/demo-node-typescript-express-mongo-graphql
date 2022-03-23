import { Property, PropertyModel } from './../schema/property.schema';
import { PropertyInput } from '../types/propertyInput';
class PropertyService {
  async createProperty(input: PropertyInput): Promise<Property> {
    const result = (await PropertyModel.create(input)).toJSON();
    console.log(result);
    return result;
  }

  async getAllProperty(): Promise<Array<Property>> {
    const result = await (await PropertyModel.find()).map(x => x.toJSON());
    console.log(result);
    return result;
  }

  async updateProperty(updateId: string, updateValue: Property): Promise<Property | undefined> {
    const result = (await PropertyModel.findOneAndUpdate({_id: updateId}, updateValue))?.toJSON();
    console.log(result);
    return result;
  }

  async deleteProperty(deleteId: string){
    const result = await PropertyModel.deleteOne({_id: deleteId});
    console.log(result);
  }
}

export default PropertyService;