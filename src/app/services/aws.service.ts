import {Injectable} from '@angular/core';
import * as AWS from 'aws-sdk';
import {AWS_REGION,BUCKET_NAME,IDENTITY_POOL_ID} from './aws.constants';
@Injectable()
export class AWSService {
    constructor() {
    }
    createAWS():Object{
        AWS.config.update({
            region: AWS_REGION,
            credentials: new AWS.CognitoIdentityCredentials({
              IdentityPoolId: IDENTITY_POOL_ID
            })
        });
        return new AWS.S3({
            apiVersion: '2006-03-01',
            params: { Bucket: BUCKET_NAME}
          });
    }
}