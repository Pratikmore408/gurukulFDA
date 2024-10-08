Flow Distribution Algorithm
Overview
This backend application connects users with astrologers using a flow distribution algorithm. It ensures fair distribution of users among astrologers while allowing adjustments for top astrologers.

Technologies
Node.js
Express.js
MongoDB

Installation
Clone the repository to your local machine.

Navigate to the project directory.

Install the project dependencies using your preferred package manager.

Create a .env file in the root directory with the following contents:

MONGO_URI= add your mongodb atlas uri
PORT=3000
Replace your-database-name with the name of your MongoDB database.

Start the application. For development, use a tool that supports auto-reloading on file changes.

API Routes
Astrologer Routes
Get All Astrologers

URL: /api/astrologers
Method: GET
Description: Retrieves a list of all astrologers.
Toggle Top Astrologer Status

URL: /api/astrologers/:id/toggle-top
Method: PATCH
Description: Toggles the isTop status of an astrologer with the given id.
User Routes
Distribute User Flow

URL: /api/users/distribute/:userId
Method: POST
Description: Distributes the user with the given userId to an astrologer based on the flow distribution algorithm.
Models
Astrologer Model (src/models/Astrologer.js)

Represents an astrologer with fields such as name, isTop, and maxConnections.

User Model (src/models/User.js)

Represents a user with a name field.

Services
Astrologer Service (src/services/astrologerService.js)

Contains business logic for managing astrologers, including methods to get all astrologers and toggle top status.

Flow Distribution Service (src/services/flowDistributionService.js)

Contains logic for distributing users to astrologers.

Controllers
Astrologer Controller (src/controllers/astrologerController.js)

Handles HTTP requests related to astrologers, including getting all astrologers and toggling status.

User Controller (src/controllers/userController.js)

Handles HTTP requests related to users, including distributing user flow.

Notes
Ensure MongoDB is running and accessible using the URI specified in the .env file.
Customize the .env file with the correct MongoDB connection string and any other environment variables as needed.
