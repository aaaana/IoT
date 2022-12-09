import time
import boto3
import cv2

# open camera

cap = cv2.VideoCapture(0)

collectionId='recognition' #collection name
rek_client=boto3.client('rekognition',
    aws_access_key_id='AKIARZ3VU3SDPNO2V62H',# add the aws access key
    aws_secret_access_key='',# add the aws secret access key
    region_name='us-west-1')
n=1
while True:
 time.sleep(2)
 #milli = int(round(time.time() * 1000))
 # set dimensions
 cap.set(cv2.CAP_PROP_FRAME_WIDTH, 2560)
 cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 1440)
 image = 'image'+str(n)+'.jpg'
 n=n+1
 # take frame
 ret, frame = cap.read()
 # write frame to file
 cv2.imwrite(image, frame)
 print('captured '+image)
 with open(image, 'rb') as image:
    try: #match the captured images against the indexed faces
        match_response =rek_client.search_faces_by_image(CollectionId=collectionId,
Image={'Bytes':image.read()}, MaxFaces=1, FaceMatchThreshold=85)
        if match_response['FaceMatches']:
            print('Hello, ',match_response['FaceMatches'][0]['Face']['ExternalImageId'])
            print('Similarity: ',match_response['FaceMatches'][0]['Similarity'])
            print('Confidence:',match_response['FaceMatches'][0]['Face']['Confidence'])
        else:
            print('No faces matched')
    except:
        print('No face detected')
 time.sleep(10)
