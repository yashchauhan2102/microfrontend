# Microfrontend

### ctrl+k+backspace - To terminate all tasks (added in keyboard shortcuts for vs code)

### ctrl+shift+b - To see available build tasks (custom tasks added in tasks.json)

For AWS Deployment

1. Create a S3 bucket in amazon management console
2. Allow access to all users
3. Generate S3 bucket policy and add it in policy
4. Setup Amzon Cloud Front Distribution (CDN) in Amazon Management console
5. Create Distribution -> Web
6. Origin name -> S3 bucket name
7. Default Cache Policy -> Redirect HTTP to HTTPS
8. Distribution Settings -> Default CloudFront Certificate
9. Create Distribution
10. Distribution -> General -> Edit -> Default Root Object -> /container/latest/index.html -> Yes, Edit
11. Origins and Origin Groups -> Edit -> Create Custom Error Response -> HTPP Error Code - > 403: Forbidden, Custom Error       Response -> Yes, Response Page Path -> /container/latest/index.html, HTTP Response Code -> 200: OK -> Create
12. General Tab -> Domain Name (URL that we can access on our browser)
13. 