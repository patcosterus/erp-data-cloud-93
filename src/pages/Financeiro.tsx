import { Suspense } from "react";
import { DollarSign, TrendingUp, Users, Briefcase, Target, BarChart3 } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { FinancialCard } from "@/components/financial/FinancialCard";
import { ClientsTable } from "@/components/financial/ClientsTable";
import { CostsList } from "@/components/financial/CostsList";
import { ExpensesChart } from "@/components/financial/ExpensesChart";
import { ProjectsGrid } from "@/components/financial/ProjectsGrid";
export default function Financeiro() {
  return <div className="space-y-generous">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Financeiro</h1>
        <p className="text-muted-foreground">
          Gestão completa dos aspectos financeiros da agência - SEO, ADS e projetos integrados
        </p>
      </div>

      {/* KPIs Grid */}
      <div className="grid gap-generous md:grid-cols-2 lg:grid-cols-4">
        <FinancialCard title="Receita Total" value="R$ 324.500" subtitle="Este mês" icon={DollarSign} trend={{
        value: 12.5,
        isPositive: true
      }} />
        <FinancialCard title="Custos de Campanhas" value="R$ 89.200" subtitle="Investimento em ADS" icon={Target} trend={{
        value: 8.3,
        isPositive: false
      }} />
        <FinancialCard title="Lucratividade Média" value="28.7%" subtitle="Margem por projeto" icon={TrendingUp} trend={{
        value: 3.2,
        isPositive: true
      }} />
        <FinancialCard title="Clientes Ativos" value="47" subtitle="12 projetos em andamento" icon={Users} trend={{
        value: 5.1,
        isPositive: true
      }} />
      </div>

      {/* Charts Section */}
      <div className="grid gap-generous lg:grid-cols-2">
        <Suspense fallback={<Skeleton className="h-[240px] md:h-[300px]" />}>
          <CostsList />
        </Suspense>
        <Suspense fallback={<Skeleton className="h-[240px] md:h-[300px]" />}>
          <ExpensesChart />
        </Suspense>
      </div>

      {/* Projects Grid */}
      <ProjectsGrid />

      {/* Clients Table */}
      <ClientsTable />

      {/* AI Insights Placeholder */}
      <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/20 p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Insights com IA</h3>
            <p className="text-sm text-muted-foreground">
              Análises inteligentes e sugestões de otimização em breve
            </p>
          </div>
        </div>
        <div className="bg-muted/30 rounded-lg p-4 text-center">
          <p className="text-muted-foreground text-sm">
            🚀 Em desenvolvimento: Integração com OpenAI para relatórios automatizados,
            sugestões de otimização e scores de projetos baseados em IA.
          </p>
        </div>
      </div>
    </div>;
}