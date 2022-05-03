import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "us-east-1_i0lD10sNr",
  ClientId: "9pbgncaurpik47nllb5ak8tvr",
};

export default new CognitoUserPool(poolData);
