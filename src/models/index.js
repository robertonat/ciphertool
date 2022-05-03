// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { UserProgress, UserLogin } = initSchema(schema);

export {
  UserProgress,
  UserLogin
};