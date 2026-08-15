# 🛒 skyMart - E-Commerce Platform

A modern, full-featured e-commerce web application built with React, Redux Toolkit, and Vite. skyMart provides a seamless shopping experience with product browsing, filtering, cart management, and user authentication.

---

## 🎯 Project Overview

skyMart is a responsive e-commerce platform that demonstrates modern web development practices with React. It features:

- **User Authentication**: Secure login and registration system
- **Product Catalog**: Browse products with search and filtering capabilities
- **Shopping Cart**: Add/remove items and manage purchases
- **Product Details**: Detailed information and specifications for each product
- **Responsive Design**: Mobile-friendly interface built with Tailwind CSS

---

## 🛠 Tech Stack

### Core Technologies

- **React** (v19.2.8) - UI library
- **Vite** (v8.2.0) - Lightning-fast build tool and dev server
- **Redux Toolkit** (v2.12.0) - State management for auth and cart

### Styling & UI

- **Tailwind CSS** (v4.3.3) - Utility-first CSS framework
- **Lucide React** (v1.31.0) - Icon library

### Data & Forms

- **Axios** (v1.19.0) - HTTP client for API requests
- **React Query** (TanStack) (v5.101.4) - Server state management
- **React Hook Form** (v7.85.0) - Efficient form handling
- **React Toastify** (v11.1.0) - Toast notifications

### Routing & Navigation

- **React Router** (v8.3.0) - Client-side routing

### Development Tools

- **ESLint** (v10.8.0) - Code quality and consistency
- **Vite React Plugin** (v6.0.4) - React support in Vite

---

## 📁 Project Structure

```
skyMart/
├── src/
│   ├── features/
│   │   ├── Auth/                    # Authentication feature
│   │   │   ├── hooks/               # Custom auth hooks
│   │   │   ├── pages/               # Login & Register pages
│   │   │   └── state/               # Redux auth slice
│   │   ├── Cart/                    # Shopping cart feature
│   │   │   ├── hooks/               # Cart management hooks
│   │   │   ├── state/               # Redux cart slice
│   │   │   └── ui/                  # Cart UI components
│   │   └── Products/                # Products feature
│   │       ├── api/                 # Product API calls
│   │       ├── hooks/               # Product hooks
│   │       └── ui/
│   │           ├── components/      # Reusable components (Filter, ProductCard)
│   │           └── pages/           # Products, Shop, ProductDetails pages
│   ├── Layouts/
│   │   ├── AuthLayout.jsx          # Auth pages layout
│   │   └── MainLayout.jsx          # Main app layout
│   ├── protectedRoutes/
│   │   ├── mainProtected.jsx       # Protected routes wrapper
│   │   └── PublicProtected.jsx     # Public routes wrapper
│   ├── shared/                      # Shared components
│   │   ├── About.jsx
│   │   ├── Hero.jsx
│   │   ├── Loader.jsx
│   │   ├── MainPage.jsx
│   │   └── Navbar.jsx
│   ├── config/
│   │   └── AxiosInstance.jsx       # Axios configuration
│   ├── App.jsx                     # Main app component with routing
│   ├── main.jsx                    # Entry point
│   ├── store.jsx                   # Redux store configuration
│   └── index.css                   # Global styles
├── public/                         # Static assets
├── package.json
├── vite.config.js
├── eslint.config.js
└── index.html
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository** (if applicable)

   ```bash
   git clone <repository-url>
   cd skyMart
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173` (or the port Vite assigns)

### Building for Production

```bash
npm run build
```

This generates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

### Code Quality

```bash
npm run lint
```

Runs ESLint to check code quality and consistency.

---

## 📱 Features & Routes

### Authentication Routes (`/`)

- **`/`** - Login page
- **`/register`** - Registration page
- Protected by `PublicProtected` route (redirects authenticated users to main app)

### Main Application Routes (`/main`)

Protected by `MainProtected` route (redirects unauthenticated users to login)

- **`/main`** - Homepage with hero section
- **`/main/shop`** - Product listing with filters and search
- **`/main/productdetails/:id`** - Detailed product information
- **`/main/cart`** - Shopping cart management
- **`/main/about`** - About page

---

## 🔄 State Management

### Redux Store Structure

**Auth State** (`authSlice`)

- User login/registration status
- User credentials management
- Authentication tokens

**Cart State** (`cartSlice`)

- Items in cart
- Cart totals and quantities
- Add/remove/update cart operations

### API Integration

The app uses **DummyJSON API** (`https://dummyjson.com`) for mock product data:

- Fetch all products
- Search products by query
- Filter by category
- Sort by price and rating
- Get product details

---

## 🎨 Key Components

### Authentication

- **Login.jsx** - User login form with validation
- **Register.jsx** - User registration form
- **AuthHook.jsx** - Custom hook for auth logic

### Products

- **Shop.jsx** - Main shopping page
- **ProductCard.jsx** - Individual product display
- **ProductDetails.jsx** - Detailed product view
- **Filter.jsx** - Category and sorting filters
- **ProductsApi.jsx** - API functions for product operations

### Cart

- **Cart.jsx** - Main cart page
- **CartItems.jsx** - Cart items list
- **CartItemCard.jsx** - Individual cart item component

### Shared Components

- **Navbar.jsx** - Navigation header
- **Hero.jsx** - Hero section banner
- **Loader.jsx** - Loading spinner
- **MainPage.jsx** - Homepage

---

## ⚙️ Configuration

### Vite Config (`vite.config.js`)

- React plugin for JSX support
- Tailwind CSS Vite plugin for styling

### Axios Config (`src/config/AxiosInstance.jsx`)

- Base URL: `https://dummyjson.com`
- Credentials: enabled with `withCredentials: true`

---

## 📦 Dependencies Overview

| Package         | Version | Purpose          |
| --------------- | ------- | ---------------- |
| React           | 19.2.8  | UI library       |
| Redux Toolkit   | 2.12.0  | State management |
| Vite            | 8.2.0   | Build tool       |
| Tailwind CSS    | 4.3.3   | Styling          |
| Axios           | 1.19.0  | HTTP requests    |
| React Router    | 8.3.0   | Routing          |
| React Query     | 5.101.4 | Server state     |
| React Hook Form | 7.85.0  | Form handling    |
| React Toastify  | 11.1.0  | Notifications    |
| Lucide React    | 1.31.0  | Icons            |

---

## 🔐 Security Features

- **Protected Routes**: Main app routes require authentication
- **Public Routes**: Login/Register pages only accessible when logged out
- **Form Validation**: React Hook Form for input validation
- **Secure API Calls**: Axios with credentials support

---

## 🎯 Development Workflow

1. **Feature Development**: Add features in feature-specific folders
2. **State Management**: Add Redux slices in feature `state/` directories
3. **API Calls**: Keep API functions in feature `api/` directories
4. **Custom Hooks**: Create reusable logic in feature `hooks/` directories
5. **Components**: Build UI in feature `ui/` directories
6. **Shared Code**: Place common components in `shared/` directory

---

## 📝 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

---

## 🤝 Contributing

When contributing to skyMart:

1. Follow the existing project structure
2. Use ESLint to maintain code quality
3. Keep components modular and reusable
4. Update Redux state for global data
5. Use React Hook Form for all form inputs

---

## 📄 License

This project is part of the Cohort 3.0 program.

---

## 💡 Future Enhancements

- User profile management
- Order history
- Payment integration
- Product reviews and ratings
- Wishlist functionality
- Admin dashboard
- Performance optimizations
- TypeScript migration

---

**Built with ❤️ using React + Vite + Tailwind CSS**
