'use client';

import { useRouter } from 'next/navigation';
import ExpenseForm from '@/components/ExpenseForm';
import { useExpenses } from '@/hooks/useExpenses';
import { ExpenseFormData } from '@/types/expense';

const AddExpensePage = () => {
  const router = useRouter();
  const { addExpense } = useExpenses();

  const handleSubmit = (formData: ExpenseFormData) => {
    addExpense(formData);
    router.push('/expenses');
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Add New Expense</h1>
        <ExpenseForm 
          onSubmit={handleSubmit} 
          onCancel={() => router.back()}
        />
      </div>
    </div>
  );
};

export default AddExpensePage;