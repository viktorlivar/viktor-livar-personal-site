import * as cdk from 'aws-cdk-lib';
// import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';
// import * as route53 from 'aws-cdk-lib/aws-route53';
// import { CloudFrontTarget, Route53RecordTarget } from 'aws-cdk-lib/aws-route53-targets';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

const DOMAIN_NAME = 'v2.viktorlivar.net';
// const HOSTED_ZONE_ID = 'Z01675341RIGAFCPY8LBH';

export class MainStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const siteBucket = new s3.Bucket(this, 'WebSiteBucket', {
      bucketName: DOMAIN_NAME,
      websiteIndexDocument: 'index.html',
      websiteErrorDocument: '404.html',
      publicReadAccess: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
      blockPublicAccess: new s3.BlockPublicAccess({
        blockPublicAcls: false,
        blockPublicPolicy: false,
        ignorePublicAcls: false,
        restrictPublicBuckets: false,
      }),
    });

    new s3.Bucket(this, 'S3BucketForWwwRedirection', {
      bucketName: `www.${DOMAIN_NAME}`,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      websiteRedirect: {
        hostName: DOMAIN_NAME,
      },
    });

    // const hostedZone = route53.HostedZone.fromHostedZoneAttributes(this, 'HostedZone', {
    //   hostedZoneId: HOSTED_ZONE_ID,
    //   zoneName: DOMAIN_NAME,
    // });

    // const certificate = new acm.Certificate(this, 'DistributionCertificate', {
    //   domainName: DOMAIN_NAME,
    //   validation: acm.CertificateValidation.fromDns(hostedZone),
    // });

    const distribution = new cloudfront.Distribution(this, 'CloudfrontDistribution', {
      comment: `Distribution for viktor-livar-personal-site`,
      // domainNames: [DOMAIN_NAME],
      // certificate,
      sslSupportMethod: cloudfront.SSLMethod.SNI,
      defaultRootObject: 'index.html',
      defaultBehavior: {
        origin: new origins.HttpOrigin(siteBucket.bucketWebsiteDomainName, {
          protocolPolicy: cloudfront.OriginProtocolPolicy.HTTP_ONLY,
        }),
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        compress: true,
      },
      errorResponses: [
        {
          httpStatus: 404,
          responseHttpStatus: 404,
          responsePagePath: '/404.html',
          ttl: cdk.Duration.minutes(5),
        },
      ],
    });

    // const route53Record = new route53.ARecord(this, 'Route53Record', {
    //   recordName: DOMAIN_NAME,
    //   zone: hostedZone,
    //   target: route53.RecordTarget.fromAlias(new CloudFrontTarget(distribution)),
    // });

    // new route53.ARecord(this, 'Route53RecordRedirect', {
    //   recordName: `www.${DOMAIN_NAME}`,
    //   zone: hostedZone,
    //   target: route53.RecordTarget.fromAlias(new Route53RecordTarget(route53Record)),
    // });

    new cdk.CfnOutput(this, 'CloudFrontURL', {
      value: `https://${distribution.distributionDomainName}`,
      description: 'URL to access the deployed site',
    });
  }
}
