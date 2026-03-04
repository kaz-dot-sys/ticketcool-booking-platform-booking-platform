# Deployment Instructions for TicketCool Booking Platform

## Prerequisites
- Docker and Docker Compose installed on your local machine.
- An account on Docker Hub to push images.
- SSH access to the production server.

## Build and Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/kaz-dot-sys/ticketcool-booking-platform-booking-platform.git
   cd ticketcool-booking-platform
   ```
2. Build the Docker images:
   ```bash
   docker-compose build
   ```
3. Run the application:
   ```bash
   docker-compose up
   ```
4. Access the application at `http://localhost:5000`.

## Deployment to Production
1. Ensure your code is pushed to the `main` branch.
2. The CI/CD pipeline will automatically build and deploy the application to the production server.
3. Monitor the deployment process in the GitHub Actions tab.

## Rollback
In case of a failed deployment, the previous version will automatically be restored by the CI/CD pipeline. Check logs for details on failures.