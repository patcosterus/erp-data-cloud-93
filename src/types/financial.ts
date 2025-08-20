
export interface Cost {
  id: string;
  name: string;
  type: "fixed" | "variable";
  amount: number;
  dueDate: string;
  status: "overdue" | "due_soon" | "on_time";
  category?: string;
  description?: string;
}

export interface Revenue {
  id: string;
  amount: number;
  source: string;
  date: string;
  status: "paid" | "pending" | "overdue";
  projectId?: string;
  clientId?: string;
}

export interface Project {
  id: string;
  name: string;
  client: string;
  status: "active" | "completed" | "paused" | "cancelled";
  budget: number;
  spent: number;
  startDate: string;
  endDate?: string;
  type: "seo" | "ads" | "development";
  profitability: number;
}

export interface Client {
  id: string;
  name: string;
  company: string;
  email: string;
  phone?: string;
  status: "active" | "inactive" | "prospect";
  totalRevenue: number;
  activeProjects: number;
  lastPayment?: string;
}

export interface FinancialKPI {
  title: string;
  value: string;
  subtitle: string;
  trend: {
    value: number;
    isPositive: boolean;
  };
}

export interface ExpenseData {
  month: string;
  fixed: number;
  variable: number;
  ads: number;
}

export type CostStatus = Cost['status'];
export type ProjectStatus = Project['status'];
export type ClientStatus = Client['status'];
