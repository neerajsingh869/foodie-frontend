# 🍔 Foodie Frontend

A modern food ordering platform built with React that connects food lovers with their favorite restaurants. Order delicious meals with just a few clicks!

## 🚀 Live Demo
- [Live Demo](https://foody-frontend-27vz.onrender.com/)

## 📝 TODO
- Project Demo

## ✨ Features

- ### Customer Features
  - **Authentication & Authorization**
    - Sign up/Sign in with email or Auth0
    - Protected routes and user profiles
  - **Restaurant Experience**
    - Browse restaurants with advanced search and filters
    - View restaurant menus and details
    - Real-time menu item availability
  - **Ordering System**
    - Smart cart management
    - Secure checkout with Stripe integration
    - Real-time order tracking
  - **User Profile**
    - Customizable user profiles
    - Order history and tracking
    - Saved delivery addresses

- ### Restaurant Owner Features
  - **Restaurant Management**
    - Create and update restaurant profiles
    - Menu management with Cloudinary image integration
    - Order management system
  - **Order Processing**
    - Real-time order notifications
    - Order status updates
    - Customer communication system
  
  ###### **NOTE**: As of now, all Customer can become Restaurant Owner

## 🛠️ Technologies Used

- **Core**
  - React
  - TypeScript
  - React Router v6
  - Auth0 Authentication

- **Styling & UI**
  - Tailwind CSS
  - React Hot Toast
  - shadcn/ui

- **Payment Processing**
  - Stripe Integration

- **Image Management**
  - Cloudinary

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/neerajsingh869/foody-frontend.git
   cd foodie-frontend
   ```
2. **Install dependencies**
    
    ```bash
    npm install
    ```
    
3. **Environment Setup**
    
    Go [here](#-environment-variables) for Envrironment setup
    
4. **Start development server**
    
    ```bash
    npm run dev
    ```

## 🔒 Environment Variables

  ```env
  VITE_AUTH0_DOMAIN=your_auth0_domain
  VITE_AUTH0_CLIENT_ID=your_auth0_client_id
  VITE_AUTH0_CALLBACK_URL=your_auth0_callback_url
  VITE_AUTH0_AUDIENCE=your_auth0_audience
  VITE_API_BASE_URL=http://localhost:4000
  ```

## 🚀 Deployment

This backend is deployed on [Render](https://render.com/). For deployment:

1. Push your changes to GitHub
2. Connect your Render account to GitHub
3. Configure environment variables
4. Deploy!

## 🔗 API Integration

This frontend application connects to our [Foodie Backend](https://github.com/neerajsingh869/foody-backend). Ensure the backend server is running for full functionality.

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repo, develop, and make code changes.
2. Make sure that your commit messages clearly describe the changes.
3. Send a pull request.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](https://choosealicense.com/licenses/mit/) file for details.