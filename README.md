# timesheet
This is a Node.js application for managing timesheet entries using MongoDB as the database. It provides APIs to enter and retrieve time entries, along with the capability to calculate available capacity by week, month, and quarter assuming a person is full-time.

# Features
Create Time Entry: API to create a new time entry with fields like userId, date, hours, and description.
Retrieve Time Entries: API to fetch existing time entries.
Calculate Available Capacity: Stretch goal feature to calculate available capacity by week, month, and quarter based on assumed full-time hours.
# Technologies Used
Node.js: JavaScript runtime environment.
Express: Web framework for Node.js.
MongoDB: NoSQL database for storing timesheet data.
Mongoose: MongoDB object modeling for Node.js.
Joi: Schema validation library for JavaScript.
Express Validator: Middleware for input validation in Express applications.
