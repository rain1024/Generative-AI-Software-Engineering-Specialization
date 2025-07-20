'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { useExpenses } from '@/hooks/useExpenses';
import { calculateExpenseSummary, exportToCSV } from '@/utils/calculations';
import SummaryCards from '@/components/SummaryCards';
import CategoryChart from '@/components/CategoryChart';
import RecentExpenses from '@/components/RecentExpenses';

export default function Dashboard() {
  const { expenses, loading } = useExpenses();

  const summary = useMemo(() => {
    return calculateExpenseSummary(expenses);
  }, [expenses]);

  const handleExportData = () => {
    if (expenses.length === 0) return;
    
    const csv = exportToCSV(expenses);
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
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Track your expenses and financial insights</p>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={handleExportData}
            disabled={expenses.length === 0}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Export Data
          </button>
          <Link
            href="/add-expense"
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Add Expense
          </Link>
        </div>
      </div>

      <SummaryCards summary={summary} />

      {expenses.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-12 text-center">
          <div className="text-gray-400 text-6xl mb-4">💰</div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Welcome to ExpenseTracker</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Start tracking your expenses to get insights into your spending habits and take control of your finances.
          </p>
          <Link
            href="/add-expense"
            className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Add Your First Expense
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <CategoryChart 
            categoryBreakdown={summary.categoryBreakdown} 
            totalAmount={summary.totalAmount} 
          />
          <RecentExpenses expenses={expenses} />
        </div>
      )}
    </div>
  );
}