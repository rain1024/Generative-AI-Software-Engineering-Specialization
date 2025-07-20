import { Expense, ExpenseCategory, ExpenseSummary } from '@/types/expense';

export const calculateExpenseSummary = (expenses: Expense[]): ExpenseSummary => {
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  const monthlyExpenses = expenses.filter(expense => {
    const expenseDate = new Date(expense.date);
    return expenseDate.getMonth() === currentMonth && 
           expenseDate.getFullYear() === currentYear;
  });

  const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const monthlyAmount = monthlyExpenses.reduce((sum, expense) => sum + expense.amount, 0);

  const categoryBreakdown = expenses.reduce((breakdown, expense) => {
    breakdown[expense.category] = (breakdown[expense.category] || 0) + expense.amount;
    return breakdown;
  }, {} as Record<ExpenseCategory, number>);

  const topCategory = Object.entries(categoryBreakdown).length > 0
    ? (Object.entries(categoryBreakdown)
        .sort(([, a], [, b]) => b - a)[0]?.[0] as ExpenseCategory) || null
    : null;

  return {
    totalAmount,
    monthlyAmount,
    categoryBreakdown,
    topCategory,
    expenseCount: expenses.length,
  };
};

export const filterExpenses = (
  expenses: Expense[],
  filters: {
    category?: ExpenseCategory | 'All';
    dateFrom?: string;
    dateTo?: string;
    searchQuery?: string;
  }
): Expense[] => {
  return expenses.filter(expense => {
    if (filters.category && filters.category !== 'All' && expense.category !== filters.category) {
      return false;
    }

    if (filters.dateFrom && expense.date < filters.dateFrom) {
      return false;
    }

    if (filters.dateTo && expense.date > filters.dateTo) {
      return false;
    }

    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      return expense.description.toLowerCase().includes(query) ||
             expense.category.toLowerCase().includes(query);
    }

    return true;
  });
};

export const exportToCSV = (expenses: Expense[]): string => {
  const headers = ['Date', 'Category', 'Amount', 'Description'];
  const rows = expenses.map(expense => [
    expense.date,
    expense.category,
    expense.amount.toString(),
    expense.description
  ]);

  const csvContent = [headers, ...rows]
    .map(row => row.map(cell => `"${cell}"`).join(','))
    .join('\n');

  return csvContent;
};