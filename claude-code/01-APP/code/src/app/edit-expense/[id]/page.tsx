'use client';

import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import ExpenseForm from '@/components/ExpenseForm';
import { useExpenses } from '@/hooks/useExpenses';
import { ExpenseFormData, Expense } from '@/types/expense';

const EditExpensePage = () => {
  const router = useRouter();
  const params = useParams();
  const { expenses, updateExpense } = useExpenses();
  const [expense, setExpense] = useState<Expense | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const expenseId = params.id as string;
    const foundExpense = expenses.find(exp => exp.id === expenseId);
    
    if (foundExpense) {
      setExpense(foundExpense);
    } else if (expenses.length > 0) {
      router.push('/expenses');
      return;
    }
    
    setLoading(false);
  }, [expenses, params.id, router]);

  const handleSubmit = (formData: ExpenseFormData) => {
    if (!expense) return;
    
    updateExpense(expense.id, formData);
    router.push('/expenses');
  };

  if (loading) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  if (!expense) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Expense Not Found</h1>
          <p className="text-gray-600 mb-6">The expense you're trying to edit doesn't exist.</p>
          <button
            onClick={() => router.push('/expenses')}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Back to Expenses
          </button>
        </div>
      </div>
    );
  }

  const initialData: ExpenseFormData = {
    amount: expense.amount.toString(),
    description: expense.description,
    category: expense.category,
    date: expense.date,
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Edit Expense</h1>
        <ExpenseForm 
          onSubmit={handleSubmit}
          initialData={initialData}
          submitLabel="Update Expense"
          onCancel={() => router.back()}
        />
      </div>
    </div>
  );
};

export default EditExpensePage;