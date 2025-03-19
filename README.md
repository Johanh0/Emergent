# Emergent

A web application that connects people with essential resources, disaster relief, and safety education to support communities in times of crisis.

<!-- ABOUT THE PROJECT -->

## About The Project

This web application is designed to assist communities before, during, and after natural disasters by providing essential resources and connections. Users can access educational materials on disaster preparedness, find nearby hospitals, food banks, and shelters via our integrated API, and register as volunteers by selecting available opportunities.

Additionally, users can donate to support various causes, ensuring continuous aid for those in need.

For administrators, a dedicated dashboard provides insights into donations, user data, and messages. From this panel, admins can manage user interactions and respond to inquiries directly via email, streamlining communication and support efforts.

## Built With

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Node Badge](https://img.shields.io/badge/Node.js-5FA04E.svg?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express Badge](https://img.shields.io/badge/Express-000000.svg?style=for-the-badge&logo=Express&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![MySql Badge](https://img.shields.io/badge/MySQL-4479A1.svg?style=for-the-badge&logo=MySQL&logoColor=white)

<br>

## Screen Shot

[![Product Name Screen Shot][product-screenshot]](https://example.com)

<br>

<!-- GETTING STARTED -->

## Getting Started

> [!IMPORTANT]  
> Follow these steps to get a local copy of **Emergent** up and running. This project is split into two main folders: one for the **src** (front-end) and one for the **server** (back-end). You'll need to run in two terminals the front-end and the back-end.

### Prerequisites

Before you begin, make sure you have the following tools installed:

- **Node.js** and **npm**: You need Node.js and npm to install dependencies and run the project.
  - Install Node.js and npm from [nodejs.org](https://nodejs.org/).

### Install Emergent with npm

```bash
  git clone https://github.com/Johanh0/Emergent.git

```

```bash
  cd Emergent
```

```bash
  npm install
```

<br>

> [!IMPORTANT]  
> You will need two separate terminals to run both the front-end and the back-end simultaneously.

#### Terminal - 1

```bash
  npm run dev
```

#### Terminal - 2

```bash
  npm run server
```

<br>

## **Environment Variables**

To run this project, you need to add the following environment variables to your `.env` file.

### **Database**

> **Note:**  
> This project requires a MySQL database. You will need a database management tool like MySQL Workbench to create and manage the database.
>
> - Ensure that MySQL is installed and running on your system.
> - Create a new database and provide its credentials below.

- `DB_HOST` - The hostname of your MySQL server (e.g., `localhost` or a remote IP).
- `DB_USER` - The username to access the database.
- `DB_PASSWORD` - The password associated with the database user.
- `DB_NAME` - The name of the database you created for this project.

### **Google Email**

> **Note:**  
> This project uses a Google email account (Gmail) to send automated emails, such as notifications and user confirmations.
>
> - Enable **Less Secure Apps** or use **App Passwords** in your Google account settings.
> - Enter the email credentials below.

- `EMAIL_USER` - Your Gmail address (e.g., `example@gmail.com`).
- `EMAIL_PASS` - Your Gmail app password (not your regular password).

### **JWT Token**

> **Note:**  
> JSON Web Tokens (JWT) are used for user authentication and session management.
>
> - This secret key is used to sign and verify tokens.
> - Use a strong and unique key to enhance security.
> - You can generate a secure key using node:
>   ```bash
>   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
>   ```

- `JWT_SECRET_KEY` - A secure secret key for signing JWTs.

<br>

### API Links/Documentation

[shelter]()

<br>

## **Database Setup**

> [!IMPORTANT]  
> For this application to function properly, you need to set up the database and import the required schema.

### Create the Database

Before running the project, ensure that MySQL is installed and running on your system. Then, follow these steps in **MySQL Workbench** to create your database:

1. Open **MySQL Workbench** and connect to your MySQL server.
2. In the **Navigator** panel, go to the "Schemas" section and right-click on an empty space.
3. Select **Create Schema**, enter the name of your database (must match `DB_NAME` in the `.env` file), and click **Apply**.

### Import the Database Schema

> **Note:**  
> The database structure, including tables and relationships, is already defined in `server/db/schema.sql`. You must import this schema into MySQL Workbench to create the necessary tables.

#### Steps to Import the Schema

1. In **MySQL Workbench**, go to **File > Open SQL Script**.
2. Navigate to `server/db/schema.sql` and open the file.
3. Click the **Execute** button to run the script.
4. Once executed, refresh the "Schemas" section to verify that the tables have been created.

### Verify the Database

After importing the schema, confirm that the necessary tables were created:

1. Open a new SQL tab in MySQL Workbench.
2. Run the following query:
   ```sql
   SHOW TABLES;
   ```

<!-- CONTRIBUTING -->

<br>

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Top contributors:

<a href="https://github.com/Johanh0">
    <img src="https://avatars.githubusercontent.com/u/69118220" alt="User 1" style="border-radius: 50%; width: 100px; height: 100px;" />
</a>
<a href="https://github.com/CierraGaddy">
    <img src="https://avatars.githubusercontent.com/u/142933217" alt="User 1" style="border-radius: 50%; width: 100px; height: 100px;" />
</a>
<a href="https://github.com/BKotay">
    <img src="https://avatars.githubusercontent.com/u/164114802" alt="User 1" style="border-radius: 50%; width: 100px; height: 100px;" />
</a>

<!-- LICENSE -->

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support or Contact

For support or if you wish to contact us, feel free to email us at [johanherrera20000@gmail.com](mailto:johanherrera20000@gmail.com).

<!-- MARKDOWN LINKS & IMAGES -->

[product-screenshot]: /public/product-screenshot-1.png
