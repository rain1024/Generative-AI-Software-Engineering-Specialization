'use client';

import Link from 'next/link';
import { Expense } from '@/types/expense';
import { formatCurrency, formatDate } from '@/utils/format';

interface RecentExpensesProps {
  expenses: Expense[];
  limit?: number;
}

const RecentExpenses = ({ expenses, limit = 5 }: RecentExpensesProps) => {
  const recentExpenses = expenses
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, limit);

  const getCategoryColor = (category: string) => {
    const colors = {
      Food: 'bg-green-100 text-green-800',
      Transportation: 'bg-blue-100 text-blue-800',
      Entertainment: 'bg-purple-100 text-purple-800',
      Shopping: 'bg-pink-100 text-pink-800',
      Bills: 'bg-red-100 text-red-800',
      Other: 'bg-gray-100 text-gray-800',
    };
    return colors[category as keyof typeof colors] || colors.Other;
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Recent Expenses</h3>
        <Link
          href="/expenses"
          className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
        >
          View All
        </Link>
      </div>

      {recentExpenses.length === 0 ? (
        <div className="text-center py-8">
          <div className="text-gray-400 text-4xl mb-2">📝</div>
          <p className="text-gray-600 mb-4">No expenses yet</p>
          <Link
            href="/add-expense"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Add Your First Expense
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {recentExpenses.map((expense) => (
            <div key={expense.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex-1">
                <h4 className="text-sm font-medium text-gray-900 mb-1">
                  {expense.description}
                </h4>
                <div className="flex items-center space-x-2">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getCategoryColor(expense.category)}`}>
                    {expense.category}
                  </span>
                  <span className="text-xs text-gray-500">
                    {formatDate(expense.date)}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-sm font-semibold text-gray-900">
                  {formatCurrency(expense.amount)}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecentExpenses;