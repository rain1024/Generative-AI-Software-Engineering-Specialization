## Part 3: Your First Big Prompt - Building an Expense Tracker

### Step 1: Initialize the Project with The Big Prompt Approach

Instead of asking Claude to "create a component" or "add a function," we're going to use a big prompt that describes our entire vision. This is the key to leveraging AI as labor rather than just a coding assistant.

---

**Prompt Example:**

```
I want you to create a modern, professional NextJS expense tracking application. Here's my vision:

APPLICATION OVERVIEW:
Build a complete expense tracking web app that helps users manage their personal finances. The app should feel modern, intuitive, and professional.

CORE FEATURES:
- Add expenses with date, amount, category, and description
- View expenses in a clean, organized list
- Filter expenses by date range and category
- Dashboard with spending summaries and basic analytics
- Categories: Food, Transportation, Entertainment, Shopping, Bills, Other
- Data persistence using localStorage for this demo

TECHNICAL REQUIREMENTS:
- NextJS 14 with App Router
- TypeScript for type safety
- Tailwind CSS for styling with a modern, clean design
- Responsive design that works on desktop and mobile
- Use React hooks for state management
- Form validation for expense inputs
- Date picker for expense dates
- Currency formatting for amounts

DESIGN REQUIREMENTS:
- Clean, modern interface with a professional color scheme
- Intuitive navigation and user experience
- Visual feedback for user actions
- Loading states and error handling
- Mobile-responsive design

SPECIFIC FUNCTIONALITY:
- Expense form with validation
- Expense list with search and filter capabilities
- Summary cards showing total spending, monthly spending, top categories
- Basic charts or visual representations of spending patterns
- Export functionality (at least CSV)
- Delete and edit existing expenses

Please create this as a complete, production-ready application. Set up the project structure, implement all features, and make sure everything works together seamlessly. Focus on creating something that looks professional and that I could actually use to track my expenses.

When you're done, provide instructions on how to run the application and test all features.
```

---

### Step 3: Watch Claude Work

After sending this prompt, Claude will:

- **Plan the approach:** Outline how it will build the application
- **Create the project structure:** Set up NextJS with TypeScript and Tailwind
- **Build components:** Create all the necessary React components
- **Implement features:** Add all the functionality you requested
- **Test and verify:** Make sure everything works together  
  _(It may forget to do this... if so, remind it with something like "please compile and make sure the application runs...")_

**Important:** Claude will ask for permissions to:

- Run terminal commands (`npm create-next-app`, `npm install`, etc.)
- Create and edit files
- Install dependencies

_Always review what it's asking to do and approve safe operations._

---

### Step 4: Understanding the Output

As Claude works, pay attention to:

- **File structure:** How it organizes the project
- **Component architecture:** How it breaks down the application
- **State management:** How it handles data flow
- **Styling approach:** How it implements the design

---

Step 4: Understanding the Output
As Claude works, pay attention to:

File structure: How it organizes the project

Component architecture: How it breaks down the application

State management: How it handles data flow

Styling approach: How it implements the design

## Step 5: Testing Your Application

Once Claude finishes, follow these steps to test your app:

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to test all features.

## Part 4: Understanding What Just Happened

### The Power of Big Prompts

What you just experienced is fundamentally different from traditional coding:

- **Vision-Level Instructions:** Instead of writing code, you described your vision.
- **Complete Implementation:** Claude built an entire application, not just pieces.
- **Holistic Approach:** It considered architecture, design, and user experience together.
- **Professional Quality:** The result should be production-ready code.

---

### AI as Labor, Not Just a Tool

This demonstrates the core concept from the course:

- **Traditional approach:** "Write me a function to calculate totals."
- **AI Labor approach:** "Build me a complete expense tracking application."

### Human Time Efficiency

Notice how much you got for a single prompt:

- **Complete NextJS application**
- **Multiple components and features**
- **Professional styling**
- **Type safety and validation**
- **Responsive design**