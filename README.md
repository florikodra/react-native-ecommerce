# React Native Task Repository

## Overview

Welcome to the React Native Task Repository! This repository contains the source code for a React Native project aimed at fulfilling a specific task. The project leverages Expo with Expo Router v3 (built on top of React Navigation) for navigation, Tanstack Query for API state management, Glustack UI for UI components, and Redux Toolkit for managing product cards.

## Requirements
- Implement a screen that displays a list of products from a pre-defined dataset (or you can use this API - https://fakestoreapi.com/). Each product should have a name, image, price, category and other relevant information.
- Allow users to search for products by name or category. Implement a search bar and update the product list dynamically based on the search query.
- Implement pagination or infinite scrolling to efficiently load and display a large number of products from the API.
- Display the details of a selected product when the user taps on it. Include the product's name, image, price, description, and any other relevant information.
- Provide the ability to add products to a shopping cart and update the cart count visually. Implement the functionality to add, remove, and update quantities of products in the cart.
- Implement a shopping cart screen that shows a summary of the selected products, their quantities, and the total price. Allow users to remove items from the cart and update quantities.
- Implement navigation between different screens using React Navigation or a similar library. Include appropriate headers, tabs, or drawers for seamless navigation within the app.
- Write clean and maintainable code, following best practices for React Native development. Use appropriate design patterns and component separation for modularity and reusability.
- Include error handling and provide meaningful error messages or notifications to users in case of any failures or network issues.
- Create a visually appealing user interface (UI) with appropriate styling, utilizing modern design principles and components.
- Include a README file with instructions on how to run the app and any additional setup steps required.


## Installation

To get started with the project, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/florikodra/react-native-ecommerce.git
    cd react-native-ecommerce
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

## Usage

Once the installation is complete, you can run the project locally by executing the following command:

```bash
npx expo start
```

Don't forget to install Expo Go on your mobile device to preview the app.
