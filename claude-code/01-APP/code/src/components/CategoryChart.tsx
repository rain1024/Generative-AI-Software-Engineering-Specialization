'use client';

import { ExpenseCategory } from '@/types/expense';
import { formatCurrency } from '@/utils/format';

interface CategoryChartProps {
  categoryBreakdown: Record<ExpenseCategory, number>;
  totalAmount: number;
}

const CategoryChart = ({ categoryBreakdown, totalAmount }: CategoryChartProps) => {
  const getCategoryColor = (category: ExpenseCategory) => {
    const colors = {
      Food: 'bg-green-500',
      Transportation: 'bg-blue-500',
      Entertainment: 'bg-purple-500',
      Shopping: 'bg-pink-500',
      Bills: 'bg-red-500',
      Other: 'bg-gray-500',
    };
    return colors[category];
  };

  const categories = Object.entries(categoryBreakdown)
    .filter(([, amount]) => amount > 0)
    .sort(([, a], [, b]) => b - a);

  if (categories.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Spending by Category</h3>
        <div className="text-center py-8">
          <div className="text-gray-400 text-4xl mb-2">📊</div>
          <p className="text-gray-600">No expense data to display</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Spending by Category</h3>
      
      <div className="space-y-4">
        {categories.map(([category, amount]) => {
          const percentage = totalAmount > 0 ? (amount / totalAmount) * 100 : 0;
          
          return (
            <div key={category} className="flex items-center">
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium text-gray-700">{category}</span>
                  <span className="text-sm text-gray-600">
                    {formatCurrency(amount)} ({percentage.toFixed(1)}%)
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${getCategoryColor(category as ExpenseCategory)}`}
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-700">Total</span>
          <span className="text-lg font-semibold text-gray-900">{formatCurrency(totalAmount)}</span>
        </div>
      </div>
    </div>
  );
};

export default CategoryChart;