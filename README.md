# Cookie-Compliance-Consent-Management

Running Server:
===============
Navigate to project_root/fastify-server and run the following command:

```shell
node server
```

Serving Admin Dashboard(flutter web):
=====================================
Navigate project_root/cookie_pro_ui/build/web and run the following command:

```shell
python -m http.server <PORT_NUMBER>
```
Deployment:
===========
- Cient-side UI can be displayed by import "componenentInit.js" and then "script.js" at the end of the client's website.
- Contents in the "project_root/cookie_proj_ui/build/web/" directory must be served with a static http server when deploying.
- Contents in the "project_root/fastify-server" needs to served in a seperate a instance while deployment.
