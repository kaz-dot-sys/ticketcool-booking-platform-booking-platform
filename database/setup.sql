-- Setup Instructions for TicketCool Booking Platform Database

1. **Create Database**: 
   Run the following SQL command to create the database:
   ```sql
   CREATE DATABASE ticketcool_booking;
   ```

2. **Connect to Database**: 
   Use the following command to connect to the database:
   ```sql
   \\c ticketcool_booking
   ```

3. **Run Schema Script**: 
   Execute the schema script to create the necessary tables:
   ```sql
   \\i path/to/schema.sql
   ```

4. **Insert Sample Data**: 
   Populate the database with sample data:
   ```sql
   \\i path/to/sample_data.sql
   ```

5. **Verify Tables and Data**: 
   Check if the tables and sample data are correctly set up:
   ```sql
   SELECT * FROM users;
   SELECT * FROM flights;
   SELECT * FROM bookings;
   SELECT * FROM payments;
   ```

**Note**: Make sure to replace `path/to/` with the actual path where the SQL files are stored. Ensure PostgreSQL is installed and running on your machine before executing these commands.