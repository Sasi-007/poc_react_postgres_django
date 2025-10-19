# My Django + React Project

This is a full-stack project with a **Django** backend (REST API) and a **React** frontend. The project allows you to manage products and orders for an e-commerce system.

## Prerequisites

Before you start, ensure you have the following software installed:

1. **Node.js** (for React frontend)
   - You can download it from [nodejs.org](https://nodejs.org/).
   - To check if you have Node.js installed:
     ```bash
     node -v
     ```

2. **Python** (for Django backend)
   - You can download it from [python.org](https://www.python.org/downloads/).
   - To check if you have Python installed:
     ```bash
     python --version
     ```

3. **PostgreSQL** (for the database)
   - Install PostgreSQL from [postgresql.org](https://www.postgresql.org/download/).
   - Ensure PostgreSQL is running and accessible on port 5432 (default).

## Getting Started

### 1. Clone the repository:

```bash
git clone https://github.com/your-username/your-repository-name.git
cd your-repository-name

pip install -r backend/requirements.txt

cd backend
python manage.py migrate

python manage.py createsuperuser

python manage.py runserver

cd frontend

npm install

npm start

Now that both the backend and frontend servers are running, open two browser tabs:

Django Admin: http://127.0.0.1:8000/admin/ (log in with the superuser account you created).

React App: http://127.0.0.1:3000/ (should display your products).






Sample links:

http://127.0.0.1:8000/api/products/

http://127.0.0.1:8000/admin/products/product/

http://127.0.0.1:8000/admin/

<img width="865" height="590" alt="image" src="https://github.com/user-attachments/assets/3a954c8b-b1cb-4b88-976d-a82cbcdc1b4b" />
