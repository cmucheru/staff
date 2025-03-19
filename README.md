
# **Staff Management App**  

## **Overview**  
A simple **React + PHP + MySQL** application for managing staff records. Users can **add, view, edit, and delete** staff information via a user-friendly interface.

---

## **Setup Instructions**  

### **Backend Setup:**  
1. Ensure **MySQL** is running (you can use Docker or a local MySQL instance).  
2. Import the database schema:  
   ```sh
   mysql -u your_username -p your_database < requirements/db_structure.sql
   ```  
3. Configure database connection in:  
   ```sh
   backend/config/db.php  
   ```  
4. Start the PHP server:  
   ```sh
   cd backend
   php -S localhost:8000
   ```  

---

### **Frontend Setup:**  
1. Navigate to the frontend directory:  
   ```sh
   cd frontend  
   ```  
2. Install dependencies:  
   ```sh
   npm install  
   ```  
3. Start the React development server:  
   ```sh
   npm start  
   ```  

---

## **Access the Application**  
| Feature | URL |
|---------|-----|
| **Frontend** | [http://localhost:3000](http://localhost:3000) |
| **Backend API** | [http://localhost/backend](http://localhost/backend) |
| **Add Staff** | [http://localhost:3000/staff-form](http://localhost:3000/staff-form) |
| **View / Manage Staff** | [http://localhost:3000/staff-list](http://localhost:3000/staff-list) |

---

## **API Endpoints**  
| Method | Endpoint | Description |
|--------|----------|-------------|
| **GET** | `/api/staff_api.php` | Fetch all staff members |
| **POST** | `/api/staff_api.php` | Add a new staff member |
| **PUT** | `/api/staff_api.php` | Update staff details |
| **DELETE** | `/api/staff_api.php` | Delete a staff member |

---
