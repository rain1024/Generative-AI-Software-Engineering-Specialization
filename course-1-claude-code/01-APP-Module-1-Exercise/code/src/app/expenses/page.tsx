'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useExpenses } from '@/hooks/useExpenses';
import { filterExpenses, exportToCSV } from '@/utils/calculations';
import ExpenseFilters from '@/components/ExpenseFilters';
import ExpenseList from '@/components/ExpenseList';
import { ExpenseCategory, Expense } from '@/types/expense';

const ExpensesPage = () => {
  const { expenses, loading, deleteExpense } = useExpenses();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ExpenseCategory | 'All'>('All');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  const filteredExpenses = useMemo(() => {
    return filterExpenses(expenses, {
      category: selectedCategory,
      dateFrom,
      dateTo,
      searchQuery,
    });
  }, [expenses, selectedCategory, dateFrom, dateTo, searchQuery]);

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setDateFrom('');
    setDateTo('');
  };

  const handleExportCSV = () => {
    const csv = exportToCSV(filteredExpenses);
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', `expenses-${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const handleEdit = (expense: Expense) => {
    router.push(`/edit-expense/${expense.id}`);
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Expenses</h1>
        <div className="flex space-x-4">
          <button
            onClick={handleExportCSV}
            disabled={filteredExpenses.length === 0}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Export CSV
          </button>
          <Link
            href="/add-expense"
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Add Expense
          </Link>
        </div>
      </div>

      <ExpenseFilters
        searchQuery={searchQuery}
        category={selectedCategory}
        dateFrom={dateFrom}
        dateTo={dateTo}
        onSearchChange={setSearchQuery}
        onCategoryChange={setSelectedCategory}
        onDateFromChange={setDateFrom}
        onDateToChange={setDateTo}
        onClearFilters={handleClearFilters}
      />

      <div className="mb-4">
        <p className="text-sm text-gray-600">
          Showing {filteredExpenses.length} of {expenses.length} expenses
        </p>
      </div>

      <ExpenseList
        expenses={filteredExpenses}
        onEdit={handleEdit}
        onDelete={deleteExpense}
      />
    </div>
  );
};

export default ExpensesPage;