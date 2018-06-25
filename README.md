Instructions to Run
===


### 1. Check if you have node.js installed.

**1.1.** Press 'Win+R', type in 'cmd' and press Enter to open Command Prompt.  
  
**1.2.** In the command prompt type 'node -v'.
  
**1.3.** If a version number shows up, then you have node.js installed.
  
**1.4.** In case it does'nt show then simply install it from [here](https://nodejs.org/en/) and follow the instruction for the installation. After it is done, check for the version in command prompt once again. It should show the appropriate version number.

### 2. Run the application. 

**2.1.** Download the repository.  

**2.2.** Open Command Prompt.  

**2.3.** Navigate to the directory where you downloaded the repository.  

**2.4.** Now, run the command 'node .' in the root directory of the repo.

Design
===

The app provides endpoints for the REST API which allows to insert, update and delete the blog post and user details.  

There are 2 different object models present:
1. Blog  
2. BlogUser  

####Blog is structured as:
[
  {
    "accessLevel": 0,
    "specificAccess": [
      0
    ],
    "content": "string",
    "author": "string",
    "id": "string"
  }
]

**accessLevel:** Specifies the read access for the users i.e. whether anyone can access or only paid subscibers.

**specificAccess:** Specifies the id of the user that are specifically given access to read.

**content:** The actual content of the Blog.

**author:** The id of the BlogUser that is the author of the Blog.

**id:** ID of the Blog post.

*further detailed can be found in ./common/models/Blog.json*


####BlogUser:

[
  {
    "userName": "string",
    "age": 0,
    "gender": true,
    "name": "string",
    "id": "string",
    "password": "string"
  }
]

**userName:** This is the displayed name of the user.

**age:** Age of the user.

**gender:** The Gender of the User [0 = Male, 1 = Female].

**name:** The actual name of user.

**id:** Unique ID of the user.

**password:** Password of the user.

*further detailed can be found in ./common/models/BlogUser.json*


####The endpoints are as follows:  
**PATCH** /Blogs  *Patch an existing model instance or insert a new one into the data source.*  

**GET** /Blogs  *Find all instances of the model matched by filter from the data source.*  

**PUT** /Blogs *Patch an existing model instance or insert a new one into the data source.*  

**POST** /Blogs *Create a new instance of the model and persist it into the data source.*  

**PATCH** /Blogs/{id} *Patch attributes for a model instance and persist it into the data source.*  

**GET** /Blogs/{id} *Find a model instance by {{id}} from the data source.*  

**HEAD** /Blogs/{id} *Check whether a model instance exists in the data source.*  

**PUT** /Blogs/{id} *Patch attributes for a model instance and persist it into the data source.*  

**DELETE** /Blogs/{id} *Delete a model instance by {{id}} from the data source.*  

**GET** /Blogs/{id}/authorship *Fetches belongsTo relation authorship.*  

**GET** /Blogs/{id}/exists *Check whether a model instance exists in the data source.*  

**POST** /Blogs/{id}/replace *Replace attributes for a model instance and persist it into the data source.*  

**GET** /Blogs/change-stream *Create a change stream.*  

**POST** /Blogs/change-stream *Create a change stream.*  

**GET** /Blogs/count *Count instances of the model matched by where from the data source.*  

**GET** /Blogs/findOne *Find first instance of the model matched by filter from the data source.*  

**POST** /Blogs/replaceOrCreate *Replace an existing model instance or insert a new one into the data source.*  

**POST** /Blogs/update *Update instances of the model matched by {{where}} from the data source.*  

**POST** /Blogs/upsertWithWhere *Update an existing model instance or insert a new one into the data source based on the where criteria.*  


**PATCH** /BlogUsers  *Patch an existing model instance or insert a new one into the data source.*  

**GET** /BlogUsers  *Find all instances of the model matched by filter from the data source.*  

**PUT** /BlogUsers *Patch an existing model instance or insert a new one into the data source.*  

**POST** /BlogUsers *Create a new instance of the model and persist it into the data source.*  

**PATCH** /BlogUsers/{id} *Patch attributes for a model instance and persist it into the data source.*  

**GET** /BlogUsers/{id} *Find a model instance by {{id}} from the data source.*  

**HEAD** /BlogUsers/{id} *Check whether a model instance exists in the data source.*  

**PUT** /BlogUsers/{id} *Patch attributes for a model instance and persist it into the data source.*  

**DELETE** /BlogUsers/{id} *Delete a model instance by {{id}} from the data source.*  

**GET** /BlogUsers/{id}/authorship *Fetches belongsTo relation authorship.*  

**GET** /BlogUsers/{id}/exists *Check whether a model instance exists in the data source.*  

**POST** /BlogUsers/{id}/replace *Replace attributes for a model instance and persist it into the data source.*  

**GET** /BlogUsers/change-stream *Create a change stream.*  

**POST** /BlogUsers/change-stream *Create a change stream.*  

**GET** /BlogUsers/count *Count instances of the model matched by where from the data source.*  

**GET** /BlogUsers/findOne *Find first instance of the model matched by filter from the data source.*  

**POST** /BlogUsers/replaceOrCreate *Replace an existing model instance or insert a new one into the data source.*  

**POST** /BlogUsers/update *Update instances of the model matched by {{where}} from the data source.*  

**POST** /BlogUsers/upsertWithWhere *Update an existing model instance or insert a new one into the data source based on the where criteria.*  
