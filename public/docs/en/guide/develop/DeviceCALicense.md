# Device CA Certificate

This document describes how to upload a device CA certificate.

The device can access Developer Center by using X.509 certificate as the authentication type.

## Upload CA

### Operation Steps

1.After logging in to the Developer Center, click "**Device CA Certificate**" in the "Product Development" drop-down box on the left upper corner, and the CA certificate list will be displayed on the page.

<a data-fancybox title="img" href="/en/guide/clip_image002.png">![img](/en/guide/clip_image002.png)</a>

2.By clicking "**Upload CA**" on the right, you can upload the superior CA certificate that issues the device certificate. The certificate file must be in the format of CER, CET or PEM and the file size cannot exceed 1M.

Requirements for a device CA certificate are listed as follows:

* It should be in the format of DER or PEM.

* Its version should be 3.

* It must be the direct superior CA that issues the device certificate.

* It should have extensions of Authority Key Identifier, Subject Key Identifier, and Basic Constraints.

* The device certificate must have extensions of Authority Key Identifier and Subject Key Identifier.

## Verify CA Certificate

For an uploaded CA certificate, you need to prove you legally own it and it can be used after being verified.

### Operation Steps

1.After uploading the CA certificate successfully, click "**Verify Certificate**" on the device CA certificate list.

2.Copy the randomly generated verification code in the pop-up "Certificate Verification" window.

<a data-fancybox title="img" href="/en/guide/clip_image004.png">![img](/en/guide/clip_image004.png)</a>

Note: The validity period of the verification code is seven days. Please complete the verification in time. You can get a new verification code by clicking "**Generate Verification Code**".

3.Use OpenSSL tool to generate a key pair for certificate verification.

openssl genrsa -out verificationCert.key 2048

4.Use the above-mentioned verification code to generate a CSR file.

openssl req -new -key verificationCert.key -out verificationCert.csr

Note: Please use the above-mentioned verification code for Common Name in the CSR file.

5.Create a verification certificate by using CA certificate, CA certificate Secret and the CSR file generated in the last step.

openssl x509 -req -in verificationCert.csr -CA rootCA.cer -CAkey rootCA.key -CAcreateserial -out verificationCert.crt -days 36500 -sha256

Note: rootCA.cer and rootCA.key are the CA certificate key pair files required when you upload the CA certificate to Developer Center. "-days" indicates the valid days of the certificate. You can adjust the value based on actual service scenarios.

6.Upload verification certificate to complete device CA certificate verification.

<a data-fancybox title="img" href="/en/guide/clip_image006.png">![img](/en/guide/clip_image006.png)</a>

