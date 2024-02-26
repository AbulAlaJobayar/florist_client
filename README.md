# Florist Management Dashboard

## Table of Contents

- [Introduction](#introduction)
- [Live URL](#live-url)
- [Features](#features)
- [Technology Used](#technology-used)
- [Setup](#setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## Introduction

Flori is a comprehensive Florist Management Dashboard designed to streamline the process of creating and managing sales, products, and user profiles. With features like creating sales, managing products, user authentication, and a sale dashboard, Flori provides a comprehensive solution for your sales management needs.

---

## Live URL

Visit the live Flori application at [Flories Live](https://incredible-sunshine-b6f9ea.netlify.app).

---

## Features

- **Authentication:** Users can register and log in with JWT (JSON Web Tokens) for secure authentication. Two roles are supported: Manager and Seller.
- **Flower Management:** CRUD operations for adding, deleting, updating, and viewing flowers in the inventory. Robust filtering system for narrowing down flower selections based on various criteria.
- **Sales Management:** Salesmen can search for products, sell them with quantity, buyer's name, and sale date. Automatic removal of products from inventory when quantity reaches zero.
- **Sales History:** View sales history categorized by weekly, daily, monthly, and yearly.
- **Flower Filtering:** Comprehensive filter system based on price, bloom date, color, type, size, fragrance, and other relevant parameters.
- **User Interface Features:** Real-time UI updates, efficient CRUD operations with RTK Query, re-fetching functionality for data accuracy and consistency.
- **State Management:** Utilization of Redux for maintaining consistent application state.
- **Bulk Delete Product Options:** Managers can efficiently manage inventory by deleting multiple flower options simultaneously.
- **Coupon & Discount Functionality:** Customers can provide coupon code for discounts. Managers can create coupon codes and verify them via API calls.
- **Duplicate & Edit Feature:** Managers can duplicate existing products and modify them to create new ones.
- **Customer Membership & Points on Purchase:** Introduce a membership system where customers earn points on purchases. Point redemption functionality for discounts or rewards.

---

## Technology Used

- **React**: A powerful JavaScript library for building user interfaces.
- **Vite**: A fast build tool for modern web development.
- **TypeScript**: Adds static typing to JavaScript for improved code quality.
- **Ant Design**: A design system with a set of high-quality React components.
- **Redux**: A predictable state container for JavaScript applications.
- **Redux Toolkit Query**: Simplifies data fetching and state management.
- **JWT (JSON Web Tokens)**: Used for secure user authentication.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Zod**: For form validation use Zod.
- **React hook Form**: use form.

---

## Setup

Follow these steps to set up the Flori project locally:

1. Clone the repository: `git clone [repository-url]`
2. Navigate to the project directory: `cd flori`

