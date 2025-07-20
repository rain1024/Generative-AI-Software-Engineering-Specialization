# 💰 ExpenseTracker - Personal Finance Management

A modern, professional expense tracking web application built with Next.js 14, TypeScript, and Tailwind CSS. Track your personal expenses, get insights into your spending habits, and take control of your finances.

## ✨ Features

### Core Functionality
- **📝 Add Expenses**: Easy-to-use form with validation for adding new expenses
- **📊 Dashboard**: Visual summary of your spending with analytics and insights
- **📋 Expense Management**: View, edit, and delete expenses with intuitive controls
- **🔍 Smart Filtering**: Search and filter expenses by category, date range, and description
- **📤 Data Export**: Export your expense data to CSV format for external analysis

### Categories Supported
- 🍔 Food
- 🚗 Transportation  
- 🎬 Entertainment
- 🛒 Shopping
- 💡 Bills
- 📦 Other

### Technical Features
- **💾 Data Persistence**: Uses localStorage for demo purposes (no backend required)
- **📱 Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **⚡ Real-time Updates**: Instant feedback and live data updates
- **✅ Form Validation**: Comprehensive client-side validation
- **♿ Accessibility**: Built with accessibility best practices
- **🎨 Modern UI**: Clean, professional interface with smooth animations

## 🚀 Quick Start

### Prerequisites
- Node.js 18.0 or later
- npm, yarn, pnpm, or bun

### Installation

1. **Clone or download the project**
   ```bash
   # If cloning from git
   git clone <repository-url>
   cd expense-tracker-ai
   
   # Or if you have the project files
   cd expense-tracker-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📖 How to Use

### Getting Started
1. **Welcome Screen**: When you first open the app, you'll see a welcome screen with an empty dashboard
2. **Add Your First Expense**: Click "Add Your First Expense" or navigate to "Add Expense" in the navigation

### Adding Expenses
1. Navigate to **Add Expense** from the navigation menu
2. Fill out the form:
   - **Amount**: Enter the expense amount (must be greater than 0)
   - **Description**: Provide a description of the expense
   - **Category**: Select from predefined categories
   - **Date**: Choose the expense date (defaults to today)
3. Click **Add Expense** to save

### Viewing and Managing Expenses
1. Go to the **Expenses** page to see all your expenses
2. Use the **filters** at the top to:
   - Search by description or category
   - Filter by specific category
   - Filter by date range
   - Clear all filters
3. **Edit** an expense by clicking the "Edit" button
4. **Delete** an expense by clicking "Delete" (you'll need to confirm)

### Dashboard Analytics
The dashboard provides:
- **Total Expenses**: Sum of all your expenses
- **This Month**: Current month's spending
- **Total Transactions**: Number of expense entries
- **Top Category**: Your highest spending category
- **Category Breakdown**: Visual chart showing spending by category
- **Recent Expenses**: Your latest expense entries

### Exporting Data
1. Go to the **Expenses** page
2. Click **Export CSV** to download your expense data
3. The file will include date, description, category, and amount for all filtered expenses

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── add-expense/       # Add expense page
│   ├── edit-expense/[id]/ # Edit expense page (dynamic route)
│   ├── expenses/          # Expenses list page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Dashboard (home page)
├── components/            # Reusable React components
│   ├── CategoryChart.tsx  # Category spending chart
│   ├── ExpenseFilters.tsx # Filtering component
│   ├── ExpenseForm.tsx    # Add/edit expense form
│   ├── ExpenseList.tsx    # Expense list with actions
│   ├── Navigation.tsx     # Main navigation
│   ├── RecentExpenses.tsx # Recent expenses widget
│   └── SummaryCards.tsx   # Dashboard summary cards
├── hooks/                 # Custom React hooks
│   └── useExpenses.ts     # Expense management hook
├── types/                 # TypeScript type definitions
│   └── expense.ts         # Expense-related types
└── utils/                 # Utility functions
    ├── calculations.ts    # Summary and filtering logic
    ├── format.ts         # Formatting utilities
    └── storage.ts        # localStorage operations
```

## 🛠️ Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS for responsive, modern design
- **State Management**: React hooks (useState, useEffect, custom hooks)
- **Data Storage**: localStorage (client-side persistence)
- **Icons**: Unicode emojis for lightweight, accessible icons
- **Development**: ESLint for code quality

## 🎨 Design Philosophy

- **Clean & Modern**: Minimalist design with focus on usability
- **Professional**: Suitable for actual personal finance tracking
- **Responsive**: Mobile-first approach with desktop optimization
- **Accessible**: Semantic HTML and keyboard navigation support
- **Consistent**: Unified color scheme and spacing throughout

## 📊 Features Walkthrough

### Dashboard Overview
- Visual summary cards showing key metrics
- Category breakdown chart with percentages
- Recent expenses list with quick access
- Quick action buttons for adding expenses

### Expense Management
- Comprehensive form validation
- Intuitive edit/delete workflows
- Confirmation dialogs for destructive actions
- Real-time search and filtering

### Data Export
- CSV export with proper formatting
- Respects current filter settings
- Automatic filename with current date

## 🔧 Customization

### Adding New Categories
1. Edit `src/types/expense.ts`
2. Add new category to `ExpenseCategory` type
3. Update `EXPENSE_CATEGORIES` array
4. Add color mapping in components that use categories

### Styling Changes
- Modify Tailwind classes in components
- Update `src/app/globals.css` for global styles
- Customize color scheme in component files

### Storage Backend
To replace localStorage with a database:
1. Modify functions in `src/utils/storage.ts`
2. Update `useExpenses` hook to handle async operations
3. Add loading states and error handling

## 🧪 Testing

The application has been tested for:
- ✅ Form validation and error handling
- ✅ Data persistence across browser sessions
- ✅ Responsive design on various screen sizes
- ✅ Navigation and routing
- ✅ CRUD operations (Create, Read, Update, Delete)
- ✅ Filtering and search functionality
- ✅ CSV export functionality

## 🚀 Production Deployment

### Build for Production
```bash
npm run build
npm run start
```

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Other Deployment Options
- **Netlify**: Static site deployment
- **Railway**: Full-stack deployment
- **DigitalOcean**: App platform deployment

## 🤝 Contributing

This is a demo application, but feel free to:
1. Fork the repository
2. Create feature branches
3. Submit pull requests
4. Report issues or suggest improvements

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙋‍♂️ Support

If you encounter any issues or have questions:
1. Check the browser console for errors
2. Ensure localStorage is enabled in your browser
3. Try clearing browser cache and localStorage
4. Verify you're using a supported Node.js version (18+)

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**