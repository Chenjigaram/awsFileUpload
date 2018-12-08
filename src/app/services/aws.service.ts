import {Injectable} from '@angular/core';
import * as AWS from 'aws-sdk';
import {AWS_REGION,BUCKET_NAME,IDENTITY_POOL_ID} from './aws.constants';
@Injectable()
export class AWSService {
    AWSService = AWS;
    constructor() {
    }
    createAWS():Object{
        const AWSService = AWS;
        AWSService.config.update({
            region: AWS_REGION,
            credentials: new AWSService.CognitoIdentityCredentials({
              IdentityPoolId: IDENTITY_POOL_ID
            })
        });
        return new AWSService.S3({
            apiVersion: '2006-03-01',
            params: { Bucket: BUCKET_NAME}
          });
    }
}