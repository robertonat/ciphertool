import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type UserProgressMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserLoginMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class UserProgress {
  readonly id: string;
  readonly Quiz0?: number | null;
  readonly UserProgress?: UserLogin | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userProgressUserProgressId?: string | null;
  constructor(init: ModelInit<UserProgress, UserProgressMetaData>);
  static copyOf(source: UserProgress, mutator: (draft: MutableModel<UserProgress, UserProgressMetaData>) => MutableModel<UserProgress, UserProgressMetaData> | void): UserProgress;
}

export declare class UserLogin {
  readonly id: string;
  readonly userName?: string | null;
  readonly email?: string | null;
  readonly password?: string | null;
  readonly userID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<UserLogin, UserLoginMetaData>);
  static copyOf(source: UserLogin, mutator: (draft: MutableModel<UserLogin, UserLoginMetaData>) => MutableModel<UserLogin, UserLoginMetaData> | void): UserLogin;
}