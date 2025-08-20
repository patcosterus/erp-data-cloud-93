
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const expensesData = [
  { category: "ADS Spend", value: 25000, color: "hsl(var(--primary))" },
  { category: "Ferramentas", value: 8500, color: "hsl(var(--secondary))" },
  { category: "Pessoal", value: 45000, color: "hsl(var(--accent))" },
  { category: "Outros", value: 3200, color: "hsl(var(--muted-foreground))" },
];

export function ExpensesChart() {
  return (
    <Card className="card-gradient">
      <CardHeader>
        <CardTitle>Custos por Categoria</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[240px] md:h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={expensesData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted/20" />
              <XAxis 
                dataKey="category" 
                className="text-xs fill-muted-foreground"
                tick={{ fontSize: 12 }}
                interval={0}
                angle={-45}
                textAnchor="end"
                height={80}
              />
              <YAxis 
                className="text-xs fill-muted-foreground"
                tickFormatter={(value) => `R$ ${(value / 1000).toFixed(0)}k`}
              />
              <Tooltip 
                formatter={(value: number) => [
                  new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                  }).format(value),
                  "Valor"
                ]}
                labelStyle={{ color: "hsl(var(--foreground))" }}
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "6px"
                }}
              />
              <Bar 
                dataKey="value" 
                fill="hsl(var(--primary))"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
