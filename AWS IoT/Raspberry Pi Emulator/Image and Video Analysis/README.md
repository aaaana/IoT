# Facial Recognition on Raspberry Pi with AWS Rekognition

## Step 1: Test Laptop Camera with Raspberry Pi Desktop on VirtualBox
 
### Install the VirtualBox Extension Pack  
* [Download link](https://www.virtualbox.org/wiki/Downloads)
* Select attach existing policies and type “polly” in search area, select and attach
* User created successfully, download the .csv file for records
* copy the AWS access key ID from your IAM user. You can find it under the Security credentials tab. You can create an AWS access key if you don't have it. This AWS access key ID will be used in our program.

### Open Raspberry Pi Desktop and enable Camera
### Open VLC Media Player
## Step 2: Facial Recognition on Raspberry Pi with AWS Rekognition
### AWS Rekognition setup
## Step 3: Test 
* Prepare:
```
$ pip install boto3
$ pip install opencv-python
```
* Prepare codes:
```
$ indexing.py
$ match_face.py
```
* Run codes:
```
$ python indexing.py
$ python match_face.py
```
