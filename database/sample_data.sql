-- Sample Data for TicketCool Booking Platform Database

-- Inserting sample users
INSERT INTO users (username, password_hash, email) VALUES
('john_doe', 'hashed_password_1', 'john@example.com'),
('jane_smith', 'hashed_password_2', 'jane@example.com'),
('alice_johnson', 'hashed_password_3', 'alice@example.com');

-- Inserting sample flights
INSERT INTO flights (flight_number, departure_city, arrival_city, departure_time, arrival_time, price, available_seats) VALUES
('TC100', 'New York', 'Los Angeles', '2026-05-01 08:00:00', '2026-05-01 11:00:00', 300.00, 50),
('TC101', 'San Francisco', 'Chicago', '2026-05-02 09:00:00', '2026-05-02 13:00:00', 200.00, 100),
('TC102', 'Miami', 'Seattle', '2026-05-03 10:00:00', '2026-05-03 15:00:00', 150.00, 75);

-- Inserting sample bookings
INSERT INTO bookings (user_id, flight_id, total_amount, status) VALUES
(1, 1, 300.00, 'confirmed'),
(2, 2, 200.00, 'pending'),
(1, 3, 150.00, 'canceled');

-- Inserting sample payments
INSERT INTO payments (booking_id, amount, payment_method, status) VALUES
(1, 300.00, 'credit_card', 'completed'),
(2, 200.00, 'paypal', 'failed'),
(3, 150.00, 'credit_card', 'refunded');