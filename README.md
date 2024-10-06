# Microfrontend

### ctrl+k+backspace - To terminate all tasks (added in keyboard shortcuts for vs code)

### ctrl+shift+b - To see available build tasks (custom tasks added in tasks.json)

## For AWS Deployment

1. Create a S3 bucket in amazon management console
2. Allow access to all users
3. Generate S3 bucket policy and add it in policy
4. Setup Amazon Cloud Front Distribution (CDN) in Amazon Management console
5. Create Distribution -> Web
6. Origin name -> S3 bucket name
7. Default Cache Policy -> Redirect HTTP to HTTPS
8. Distribution Settings -> Default CloudFront Certificate
9. Create Distribution
10. Distribution > General > Edit > Default Root Object -> /container/latest/index.html > Yes, Edit
11. Origins and Origin Groups > Edit > Create Custom Error Response > HTTP Error Code -> 403: Forbidden, Custom Error Response -> Yes, Response Page Path -> /container/latest/index.html, HTTP Response Code -> 200: OK > Create
12. General Tab > Domain Name (URL that we can access on our browser)
13. Set AWS env variables -> AWS_S3_BUCKET_NAME, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY
14. Setup IAM in AWS Management Console to generate access keys
15. Users Section > Add user > User name -> mfe-github-action, Access type -> Programmatic access > Next: Permissions > Attaching existing Policies > search S3 -> Amazon S3 Full Access, search cloudfront -> CloudFront Full Access > Next: Tags > Next: Review > Create User > It will show Access Key Id and Secret Access Key (copy and paste this somewhere need to use this in github )
16. In Github > navigate to you repo > settings > secrets and variables > Actions > New Repository Secret
    -> AWS_ACCESS_KEY_ID : Value of Access Key Id that you copied > Add Secret
    -> AWS_SECRET_ACCESS_KEY : Value of Secret Access Key that you copied > Add Secret
    -> AWS_S3_BUCKET_NAME : S3 bucket name
