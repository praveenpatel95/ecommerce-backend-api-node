# Node JS Backend API for Ecommerce #

## Setup

Clone the repository:

```
git clone https://github.com/praveenpatel95/ecommerce-backend-api-node.git
```

Then cd into the folder with this command:
```
cd ecommerce-backend-api-node
```


## Installation

1. Install dependencies:

   ```npm install```
   
2. Create a .env file and update the following values:
   ``` bash
        HOST=<your_host>
        LOCALHOST=<your_localhost>`
   ```


3. Create a new MySQL database and update the connection details in config/config.json file.
4. Run migrations to set up your database schema:
   ```bash
   npx sequelize-cli db:migrate

5. Populate default data (Categories & Products):
    ```bash
   npx sequelize-cli db:seed:all
   ```

# Starting the Application #
   - To start your application, run:

   ```bash
   npm start
   ```
    
## Need any help ##
Ping me on my email id
