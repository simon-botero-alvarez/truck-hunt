# Truck Hunt - Discover San Francisco's Best Food Trucks

## 1. Project Description

Truck Hunt is a front-end application built to help users discover food trucks in the San Francisco area. Users can view food trucks displayed as cards or on an interactive map, providing detailed information such as the truck’s name, food description, address, facility type (truck or push cart), status, and permits.

Designed for food enthusiasts, this app also acts as a marketing tool for food truck owners, displaying locations and allowing new applicants to easily add their trucks to the map. With features like proximity search and filtering by truck status or facility type, the app delivers an excellent user experience for discovering food trucks.


## 2. Tech Stack

The application was created using Next.js, React, and Tailwind CSS, along with additional packages such as shadcn/ui for UI elements, Lucide Icons for iconography, Formik for form management, @react-google-maps/api for map visualization and adding markers, and react-google-places-autocomplete to easily implement Google Places Autocomplete.

Supabase was used to manage the database, where the project's CSV data was imported. It also enables users to create and update food trucks within the application.

- Next.js was chosen for its server-side rendering capabilities, SEO benefits, and easy routing management, which streamline development and improve the application's performance and user experience. Additionally, it offers fast builds, which is crucial for efficiently developing production-ready projects.

- React allows modular and reusable components, making the development process more efficient and the codebase easier to maintain.

- Tailwind CSS provides a utility-first approach to styling, allowing for faster UI development and a more consistent design system across the application

- Supabase was chosen for its ease of use as a backend-as-a-service (BaaS) platform. It provides instant APIs, authentication, and real-time updates, simplifying database management. Its integration with PostgreSQL ensures scalability and flexibility, while real-time capabilities make it ideal for managing updates like adding or editing food trucks.

## 3. Installation and Setup

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

To run the project locally:

1. Clone the repository: `git clone <repo_url>`
2. Navigate to the project directory: `cd truck-hunt`
3. Install the dependencies: `npm install`
4. Add the `.env` file attached in the email sent to Ileana (or contact the project owner to request the file) to the root of the project. This file contains the Supabase credentials and Google API keys.
5. Run the development server: `npm run dev`
6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
7. You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.
8. Recommended Visual Studio Code plugins:
   - **Tailwind CSS IntelliSense**: Provides intelligent autocomplete, linting, and hover preview for Tailwind CSS.
   - **ESLint**: Helps enforce consistent code formatting and catch errors during development.
   - **Prettier**: A code formatter that ensures a consistent style across your codebase.

## 4. Testing

Basic testing was done to ensure the app works as expected, including checking Google Maps integration and form handling via Formik. Future improvements could involve more unit tests and integration tests to handle edge cases like missing data or API errors.

## 5. Trade-offs and Future Improvements

Given the limited time, the focus was on building a functional and intuitive user interface for discovering food trucks. While performance optimizations were implemented, with more time, I would add:

UX/UI Enhancements

- Improve Google Maps and marker interactions (e.g., close previous marker when opening a new one).
- Add favicon.
- Include skeleton loading states for a smoother user experience during data fetch.
- Add images of the food trucks to enhance the visual appeal.
- Add breadcrumb navigation on food truck detail pages for better user flow.
- Design a dedicated loading and 404 page.
- Enhance overall UX/UI for a more polished experience.

New Features

- Standardize the address input using Google Autocomplete.
- Introduce a food category filter to make it easier to find specific types of cuisine.
- Implement pagination on the listing module for better navigation through results.
- Add individual links to each food truck’s detail page.
- Make the share button functional on the individual food truck pages.
- Include price ranges for food truck menus.
- Enable internationalization (i18n) for multi-language support.
- Implement a login system with different account types and roles, allowing users to create food trucks and manage their listings based on their permissions.
- Integrate a third-party service to allow users to leave reviews and comments for each food truck.
- Add working hours and days to the listing and map markers so foodies can see if a food truck is currently open.
- Improve the documentation in the README.md file.

Performance Optimizations

- Optimize SEO.
- More detailed validation on the food truck creation form.
- Optimize handling of large datasets for better map performance.
- Add automated tests for better coverage and reliability.
- Enhance the Google map experience by refining markers and interactions.
- Clean up the map to remove unnecessary clutter.
- Add a formatting and ESLint configuration document to maintain code consistency.
- Improve the search functionality to allow searching by food truck description, not just address.
- Add TypeScript to improve code maintainability and reduce bugs.
- Add comments throughout the code to explain what is being done in different sections.

## 6. Deployment

The app is deployed on [Vercel](https://vercel.com), making it easy to access from any device. It integrates seamlessly with the Next.js framework for fast builds and automatic deployments.

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.