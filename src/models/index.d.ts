import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type UserInformationMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class UserInformation {
  readonly id: string;
  readonly UserName?: string | null;
  readonly Quiz0?: number | null;
  readonly RC4Quiz?: number | null;
  readonly SavedEncryptions?: (string | null)[] | null;
  readonly email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<UserInformation, UserInformationMetaData>);
  static copyOf(source: UserInformation, mutator: (draft: MutableModel<UserInformation, UserInformationMetaData>) => MutableModel<UserInformation, UserInformationMetaData> | void): UserInformation;
}