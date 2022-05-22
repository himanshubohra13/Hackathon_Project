## Project Name: HomeCare.ai 
_An Artificial Intelligence driven Health Checkup web application_


## Theme: Healthcare and Medicine

<br> 

## Video Link of Working Model

[Project Demonstration](https://youtu.be/KTUk36V9gVY)

## Presentation Link

[ProtoType Presentation](https://docs.google.com/presentation/d/1TltreuXAtLskXs2qJt5Mcg4oFUtidEXm/edit?usp=sharing&ouid=105964107564662824667&rtpof=true&sd=true)

<br> 

## Motivation

- Whenever a patient visits a hospital it takes a significant amount of time before the updated health reports of the patient arrives making it difficult for the proper detection and hence decision making for the health official.
- Also, it has now become unsafe to go to the hospital every time we feel unwell, since there is a risk of getting affected by COVID 19. The pandemic has caused an influx in hospital cases, and the limitations on hospital beds have people wondering whether their symptoms are severe enough to warrant a doctor's appointment.
- Meanwhile, others experience ailments but are unable to afford a visit to the doctor due to a lack of proper health care. Further, if the patient recognizes his/her symptoms, and if somehow we can tell him what is the disease he is likely to be affected with then accordingly precautions can be taken at home only. 
- Since, everyone should have easy access to great health care there is a need to connect patients virtually with doctors in an efficient manner. 
- In a digital world affected by COVID 19, telemedicine is more necessary than ever to improve the quality and accessibility of medical care to distant users and also improve the decision making process of clinicians as well as help people know what disease they are likely to be infected with and what precautionary measures can be taken with the help of Artificial Intelligence.


## Objective

The application mainly consists of the following features:

- Multi-disease Computer-Aided Diagnosis system where users can get to know whether they are infected with a particular disease or not using machine/deep learning. For this, they are required to enter their medical details on the form or upload X-Ray/MRI image.
- Disease prediction based on symptoms of the patient and symptom duration followed by providing appropriate precaution recommendations 
- Remote diagnosis of the patients through doctor appointment system wherein patients can not only search doctors based on region or specialization, but also connect virtually with the doctors around the globe.
- Provide accurate drug recommendations for the patients suffering from various diseases.
- Use of AI to generate appropriate recommendations for the patients suffering from cardiac, common cold, fever, obesity etc 
Lab test appointment facility 
- App will enable users to regularly check up on their physical and mental well being without needing to visit a doctor.

<br> 

## Getting Started with the Application

**Step 1. Clone the repository into a new folder and then switch to code directory**

```
git clone https://github.com/himanshubohra13/Hackathon_Project.git
cd Hackathon_Project
```

**Step 2. Create a Virtual Environment to install all the packages and dependencies**

```
pip install virtualenv
```

Create a new Virtual Environment for the project and activate the environment to install the libraries.

```
virtualenv env
env\Scripts\activate
```

Once the virtual environment is activated, the name of your virtual environment will appear on left side of terminal.

Next, we need to install the project dependencies in this virtual environment, which are listed in `requirements.txt`.

```
pip install -r requirements.txt
```

**Step3 . Download the trained models and include them in the models folder of the root directory**

The trained deep learning models can be downloaded from [here](https://drive.google.com/drive/folders/163JRZedKin6Zwp3SesTronP7fV1n3iZN?usp=sharing).

**Step 4. Set up Amazon Transcribe API for speech to text conversion**

- Create an AWS free tier account.
- Sign in to your Amazon console, create a _S3 bucket_ and give it a unique name. Note your AWS region as it will be required later.
- Go to _IAM dashboard_, add a new User. Then click on add permissions and grant the following two permissions - _AmazonTranscribeFullAccess_ and _AmazonS3FullAccess_.
- Then under Security Credentials, click on _Create access key_ to get your credentials i.e, 'aws_access_key_id' and 'aws_secret_access_key'.

**Step 5. Update environment variables**

To run the project, you need to configure the application to run locally. This will require updating a set of environment variables specific to your environment.

In the same directory, create a local environment file, named - `.env`.

_Now simply duplicate the variables in **.env.sample** file and just insert your credentials into local environment file - `.env`._

**Step 6. Getting Started with React App**

In the frontend folder, run the following command to install the required node modules and run the app in the developmenet mode.
```
npm install
npm start
```

**Step 7. Run Django Project.**

- Make migrations to create/apply changes to the models into the database schema.

```
python manage.py makemigrations
python manage.py migrate
```

- Create a superuser for django admin panel.

```
python manage.py createsuperuser
```

- Run the server code.

```
python manage.py runserver
```
