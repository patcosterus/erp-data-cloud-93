
import { Cost, Revenue, Project, Client, ExpenseData } from '@/types/financial';

// Mock data with proper typing
const mockCosts: Cost[] = [
  {
    id: "1",
    name: "Aluguel do Escritório",
    type: "fixed",
    amount: 3500,
    dueDate: "2024-01-05",
    status: "overdue",
    category: "facilities"
  },
  {
    id: "2", 
    name: "Google Ads Budget",
    type: "variable",
    amount: 8000,
    dueDate: "2024-01-08",
    status: "due_soon",
    category: "advertising"
  },
  {
    id: "3",
    name: "Software Licenses",
    type: "fixed", 
    amount: 1200,
    dueDate: "2024-01-15",
    status: "on_time",
    category: "software"
  },
  {
    id: "4",
    name: "Facebook Ads Budget",
    type: "variable",
    amount: 5500,
    dueDate: "2024-01-10",
    status: "due_soon",
    category: "advertising"
  },
  {
    id: "5",
    name: "Internet e Telefone",
    type: "fixed",
    amount: 450,
    dueDate: "2024-01-20",
    status: "on_time",
    category: "utilities"
  },
  {
    id: "6",
    name: "Materiais de Marketing",
    type: "variable",
    amount: 2300,
    dueDate: "2024-01-03",
    status: "overdue",
    category: "marketing"
  }
];

const mockProjects: Project[] = [
  {
    id: "1",
    name: "E-commerce SEO Campaign",
    client: "TechStore Ltd",
    status: "active",
    budget: 15000,
    spent: 8500,
    startDate: "2024-01-01",
    type: "seo",
    profitability: 28.5
  },
  {
    id: "2",
    name: "Google Ads Management",
    client: "FashionBrand Co",
    status: "active",
    budget: 25000,
    spent: 18200,
    startDate: "2023-12-15",
    type: "ads",
    profitability: 32.1
  },
  {
    id: "3",
    name: "Website Development",
    client: "LocalBusiness Inc",
    status: "completed",
    budget: 12000,
    spent: 11800,
    startDate: "2023-11-01",
    endDate: "2024-01-15",
    type: "development",
    profitability: 15.2
  }
];

const mockClients: Client[] = [
  {
    id: "1",
    name: "João Silva",
    company: "TechStore Ltd",
    email: "joao@techstore.com",
    phone: "+55 11 99999-9999",
    status: "active",
    totalRevenue: 45000,
    activeProjects: 2,
    lastPayment: "2024-01-15"
  },
  {
    id: "2",
    name: "Maria Santos",
    company: "FashionBrand Co",
    email: "maria@fashionbrand.com",
    status: "active",
    totalRevenue: 78000,
    activeProjects: 1,
    lastPayment: "2024-01-20"
  }
];

const mockExpenses: ExpenseData[] = [
  { month: "Jan", fixed: 12000, variable: 18500, ads: 15000 },
  { month: "Fev", fixed: 12000, variable: 22000, ads: 18200 },
  { month: "Mar", fixed: 12000, variable: 19800, ads: 16500 },
  { month: "Abr", fixed: 12500, variable: 24000, ads: 19800 },
  { month: "Mai", fixed: 12500, variable: 21500, ads: 17200 },
  { month: "Jun", fixed: 12500, variable: 26000, ads: 21000 }
];

// Service functions
export const financialService = {
  // Costs
  getCosts: async (): Promise<Cost[]> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockCosts;
  },

  getCostById: async (id: string): Promise<Cost | null> => {
    await new Promise(resolve => setTimeout(resolve, 200));
    return mockCosts.find(cost => cost.id === id) || null;
  },

  // Projects
  getProjects: async (): Promise<Project[]> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockProjects;
  },

  // Clients
  getClients: async (): Promise<Client[]> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockClients;
  },

  // Expenses
  getExpenses: async (): Promise<ExpenseData[]> => {
    await new Promise(resolve => setTimeout(resolve, 200));
    return mockExpenses;
  },

  // Analytics
  getKPIs: async () => {
    await new Promise(resolve => setTimeout(resolve, 200));
    
    const totalRevenue = mockClients.reduce((sum, client) => sum + client.totalRevenue, 0);
    const totalCosts = mockCosts.reduce((sum, cost) => sum + cost.amount, 0);
    const activeClients = mockClients.filter(client => client.status === 'active').length;
    const activeProjects = mockProjects.filter(project => project.status === 'active').length;

    return {
      totalRevenue,
      totalCosts,
      activeClients,
      activeProjects,
      profitability: ((totalRevenue - totalCosts) / totalRevenue) * 100
    };
  }
};
