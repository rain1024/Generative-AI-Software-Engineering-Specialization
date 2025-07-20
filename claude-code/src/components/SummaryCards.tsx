'use client';

import { ExpenseSummary } from '@/types/expense';
import { formatCurrency } from '@/utils/format';

interface SummaryCardsProps {
  summary: ExpenseSummary;
}

const SummaryCards = ({ summary }: SummaryCardsProps) => {
  const cards = [
    {
      title: 'Total Expenses',
      value: formatCurrency(summary.totalAmount),
      icon: '💰',
      color: 'bg-blue-500',
    },
    {
      title: 'This Month',
      value: formatCurrency(summary.monthlyAmount),
      icon: '📅',
      color: 'bg-green-500',
    },
    {
      title: 'Total Transactions',
      value: summary.expenseCount.toString(),
      icon: '📊',
      color: 'bg-purple-500',
    },
    {
      title: 'Top Category',
      value: summary.topCategory || 'None',
      icon: '🏆',
      color: 'bg-orange-500',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {cards.map((card, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className={`${card.color} rounded-full p-3 mr-4`}>
              <span className="text-white text-xl">{card.icon}</span>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">{card.title}</p>
              <p className="text-2xl font-bold text-gray-900">{card.value}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;