Step-by-Step Instructions to Run the Project
Prerequisites
1. Install Node.js: Ensure that you have Node.js installed on your machine. You can download it from nodejs.org.
2. Install MongoDB: Ensure that MongoDB is installed locally. You can download it from mongodb.com or ensure you have a MongoDB URI if using a cloud service (e.g., MongoDB Atlas).

Instructions

Step 1: Clone the Project Repository
1. Open your terminal (Command Prompt, PowerShell, or terminal in your IDE).
2. Navigate to the directory where you want to clone the project.
3. Run the following command to clone the repository (replace <repository-url> with the actual URL of your repository): git clone <repository-url>

Step 2: Navigate to the Project Directory
1. Change your current directory to the project folder using the following command: cd <project-directory>
2. Replace <project-directory> with the name of the cloned project folder.

Step 3: Install Project Dependencies
Run the following command to install the required dependencies specified in package.json: npm install

Step 4: Update MongoDB URI
1. Open the db.js file in your project directory. This file is typically responsible for establishing a connection to the MongoDB database.
2. Update the MongoDB URI in db.js. If you have MongoDB installed locally, it might look something like this: const mongoURI= "mongodb://localhost:27017/";

If you are using a cloud MongoDB service (like MongoDB Atlas), replace it with your URI:
const mongoURI= 'your_mongodb_uri';

Step 5: Update the Port Number (Optional)
If you want to change the default port from 4000 to another port, do so in the index.js file. Look for a line that sets the port and change it as needed

Step 6: Run the Project
Start the application by running the following command in your terminal: node index
Expected Console Messages
Upon successful execution, you should see the following messages in your console:

Successful connection with the database: This confirms that your application has connected to MongoDB.
Listening on port 4000 (or your specified port): This indicates that the server is running and ready to accept requests.

Step 7: Test the Project
1. Open Postman (or any API client) or use curl in your terminal to send a POST request.
2. Set the request method to POST.
3. Enter the URL for the request:  http://localhost:4000/
4. In the request body, select raw and JSON, then input the following JSON:
   {
  "name": "https://www.google.co.in/"
  }
5. Click Send to execute the request.

Expected Output
If the request is successful, you should receive a response similar to this:

{
  "data": {
    "url": "/littleone/pDscBhS6e"
  }
}

Step 8: Access the Short URL
To test the generated short URL:

1. Open your browser and navigate to: http://localhost:4000/littleone/pDscBhS6e
   /littleone/hash can be updated as per the output

2. This URL will redirect you to the original URL (https://www.google.co.in/) up to 3 times. After that, the link will expire, and you will need to generate a new short URL.


Conclusion
By following these steps, you should be able to clone the project, set it up with MongoDB, run the server, and test the functionality of hashing URLs. If you encounter any issues, ensure you check the console for error messages that can provide hints for troubleshooting.








  




