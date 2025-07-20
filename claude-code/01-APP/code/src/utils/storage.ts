import { Expense } from '@/types/expense';

const STORAGE_KEY = 'expense-tracker-expenses';

export const getExpensesFromStorage = (): Expense[] => {
  if (typeof window === 'undefined') return [];
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error reading expenses from localStorage:', error);
    return [];
  }
};

export const saveExpensesToStorage = (expenses: Expense[]): void => {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
  } catch (error) {
    console.error('Error saving expenses to localStorage:', error);
  }
};

export const addExpenseToStorage = (expense: Expense): void => {
  const expenses = getExpensesFromStorage();
  expenses.push(expense);
  saveExpensesToStorage(expenses);
};

export const updateExpenseInStorage = (updatedExpense: Expense): void => {
  const expenses = getExpensesFromStorage();
  const index = expenses.findIndex(exp => exp.id === updatedExpense.id);
  
  if (index !== -1) {
    expenses[index] = updatedExpense;
    saveExpensesToStorage(expenses);
  }
};

export const deleteExpenseFromStorage = (expenseId: string): void => {
  const expenses = getExpensesFromStorage();
  const filteredExpenses = expenses.filter(exp => exp.id !== expenseId);
  saveExpensesToStorage(filteredExpenses);
};