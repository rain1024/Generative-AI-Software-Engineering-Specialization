'use client';

import { useState, useEffect } from 'react';
import { Expense, ExpenseFormData } from '@/types/expense';
import { 
  getExpensesFromStorage, 
  addExpenseToStorage, 
  updateExpenseInStorage, 
  deleteExpenseFromStorage 
} from '@/utils/storage';
import { generateId, formatDateForInput } from '@/utils/format';

export const useExpenses = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadExpenses = () => {
      const storedExpenses = getExpensesFromStorage();
      setExpenses(storedExpenses);
      setLoading(false);
    };

    loadExpenses();
  }, []);

  const addExpense = (formData: ExpenseFormData) => {
    const newExpense: Expense = {
      id: generateId(),
      amount: parseFloat(formData.amount),
      description: formData.description,
      category: formData.category,
      date: formData.date,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    addExpenseToStorage(newExpense);
    setExpenses(prev => [newExpense, ...prev]);
  };

  const updateExpense = (id: string, formData: ExpenseFormData) => {
    const existingExpense = expenses.find(exp => exp.id === id);
    if (!existingExpense) return;

    const updatedExpense: Expense = {
      ...existingExpense,
      amount: parseFloat(formData.amount),
      description: formData.description,
      category: formData.category,
      date: formData.date,
      updatedAt: new Date().toISOString(),
    };

    updateExpenseInStorage(updatedExpense);
    setExpenses(prev => prev.map(exp => exp.id === id ? updatedExpense : exp));
  };

  const deleteExpense = (id: string) => {
    deleteExpenseFromStorage(id);
    setExpenses(prev => prev.filter(exp => exp.id !== id));
  };

  return {
    expenses,
    loading,
    addExpense,
    updateExpense,
    deleteExpense,
  };
};