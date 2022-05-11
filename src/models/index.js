// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { UserInformation } = initSchema(schema);

export {
  UserInformation
};