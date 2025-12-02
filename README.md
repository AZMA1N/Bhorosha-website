# Bhorosha - Agri-Tech Land Management Platform

Bhorosha is a modern, high-trust digital land leasing platform designed to connect landowners with agricultural experts to optimize land potential. The platform features a unique "Anti-Gravity" and "Glassmorphism" aesthetic to inspire trust and growth.

![Bhorosha Landing Page](./public/vite.svg) 
*(Note: Replace with actual screenshot)*

## 🚀 Features

- **Landing Page**: Stunning "Anti-Gravity" design with parallax effects, floating cards, and interactive "How it Works" flow.
- **Authentication**: Secure login portals for Landowners (Phone/OTP) and Admins (Email/Password).
- **Landowner Dashboard**:
  - **Command Center**: Overview of earnings and active projects.
  - **Live Feed**: Real-time visual updates from on-ground agents.
  - **Earnings Widget**: Visual trend analysis of income.
- **List Your Land Wizard**: Frictionless multi-step form for listing new properties.
- **Admin Dashboard**:
  - **Resource Management**: Assign Agriculture, Legal, and Weather experts.
  - **Financial Overview**: Track B2B sales and payouts.

## 🛠 Tech Stack

- **Frontend**: React (Vite)
- **Styling**: Tailwind CSS (v4)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM

## 📦 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/bhorosha-website.git
   ```
2. Navigate to the project directory:
   ```bash
   cd bhorosha-website
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Project

Start the development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

Build the project for production:
```bash
npm run build
```

## 📂 Project Structure

```
src/
├── components/
│   ├── admin/          # Admin dashboard components
│   ├── dashboard/      # Landowner dashboard components
│   └── ui/             # Reusable UI components (GlassCard, Button)
├── pages/              # Page components (Landing, Login, Dashboards)
├── App.tsx             # Main application component with routing
└── index.css           # Global styles and Tailwind configuration
```

## 🔮 Future Roadmap

- [ ] **Backend Integration**: Connect to Node.js/PostgreSQL backend.
- [ ] **Real-time Maps**: Integrate Google Maps or Leaflet for land visualization.
- [ ] **Authentication**: Implement real JWT-based authentication.
- [ ] **Payment Gateway**: Integrate payment processing for payouts.

## 📄 License

This project is licensed under the MIT License.
