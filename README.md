# Pizza Restaurant Website

## Overview
This project is a custom-built website for a pizza restaurant, developed using Next.js with integrated authentication. It features a dynamic menu display, location information, user authentication, and an admin panel to manage content and user interactions.

## Features
* **User Authentication**: Secure login and signup functionality.
* **Dynamic Menu**: Display of the restaurant's menu, updated dynamically.
* **Location Information**: Interactive map and contact details.
* **Push Notifications**: Ability to send custom notifications to users.
* **Blog Section**: Users can read and engage with blog posts.
* **Admin Panel**: Integrated admin panel to manage blog posts, view contact requests, and handle notifications.

## Installation

### Prerequisites
Make sure you have the following installed on your system:
* Node.js (v14.x or higher)
* npm or yarn

### Clone the Repository
```bash
git clone https://github.com/pankajkhuswaha/epizzaexpress.git
cd pizza-restaurant-website
```

### Install Dependencies
Using npm:
```bash
npm install
```
Using yarn:
```bash
yarn install
```
### Set Up Environment Variables
Create a .env.local file in the root directory and add your environment variables:
```bash
MONGODB_CONNECTION_URI
JWT_SECRET
EMAIL_ID
EMAIL_PASSWORD
WEB_URL
APPLICATION_NAME
```
### Run the Project Locally
Using npm:
```bash
npm run dev
```
Using yarn:
```bash
yarn dev
```
Your application should now be running on http://localhost:3000.

## Usage
### Login and Signup
Users can register and log in to access personalized features like notifications and interacting with blog posts.

### Admin Panel
Admins can log in to access the admin panel where they can:

* **Manage Blog Posts** : Create, edit, and delete blog posts.
* **View Contact Requests** : See and respond to contact requests submitted through the website.
* **Send Notifications** : Send push notifications to all registered users.

### Push Notifications
Admins can send custom push notifications to users, which will be delivered directly to their browsers or devices.

## Contributing
If you'd like to contribute to this project, feel free to submit a pull request or open an issue.

