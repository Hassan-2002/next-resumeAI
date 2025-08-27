# Next.js Frontend for Resume Builder

## Overview
This is the frontend application for the Resume Builder project, built using **Next.js**. It provides a modern, responsive, and user-friendly interface for creating and optimizing resumes. The frontend integrates seamlessly with the backend API to deliver features like ATS scoring, resume creation, and PDF export.

---

## Features
- **User Authentication**: Secure login and signup functionality.
- **Resume Builder**: Interactive UI for creating and customizing resumes.
- **ATS Scoring**: Analyze resumes against job descriptions for optimization.
- **PDF Export**: Download resumes in PDF format.
- **Responsive Design**: Optimized for both desktop and mobile devices.

---

## Tech Stack
- **Framework**: Next.js (React-based framework for server-side rendering and static site generation)
- **Styling**: Tailwind CSS and HeroUI for utility-first and component-based styling
- **State Management**: React Context API for managing global state
- **API Integration**: Fetches data from the backend API for dynamic functionality

---

## Installation
### Prerequisites:
- Node.js (v16 or higher)
- npm or yarn

### Steps:
1. Clone the repository:
   ```bash
   git clone https://github.com/Hassan-2002/resume_backend.git
   ```
2. Navigate to the `next-frontend` directory:
   ```bash
   cd resume_backend/next-frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open the application in your browser:
   ```
   http://localhost:3000
   ```

---

## Folder Structure
```
next-frontend/
├── app/                # Next.js app directory (file-based routing)
│   ├── login/          # Login page
│   ├── dashboard/      # Dashboard page
│   └── layout.tsx      # Root layout for the app
├── components/         # Reusable React components
├── public/             # Static assets (images, icons, etc.)
├── styles/             # Global and component-specific styles
├── utils/              # Utility functions
└── README.md           # Project documentation
```

---

## Scripts
- **`npm run dev`**: Start the development server
- **`npm run build`**: Build the application for production
- **`npm run start`**: Start the production server
- **`npm run lint`**: Run ESLint to check for code quality issues

---

## Environment Variables
Create a `.env.local` file in the root of the `next-frontend` directory and add the following:
```env
NEXT_PUBLIC_API_URL=http://localhost:5100
```
- `NEXT_PUBLIC_API_URL`: The base URL for the backend API

---

## Contributing
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

---

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact
For questions or feedback, please contact:
- **Name**: Abdullah Ibrahim
- **GitHub**: [Hassan-2002](https://github.com/Hassan-2002)
- **Email**: abdullah.softwaredev@gmail.com
