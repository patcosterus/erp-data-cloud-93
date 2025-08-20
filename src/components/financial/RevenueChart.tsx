
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const revenueData = [
  { month: "Jan", receita: 45000, meta: 50000 },
  { month: "Fev", receita: 52000, meta: 50000 },
  { month: "Mar", receita: 48000, meta: 55000 },
  { month: "Abr", receita: 61000, meta: 55000 },
  { month: "Mai", receita: 55000, meta: 60000 },
  { month: "Jun", receita: 67000, meta: 60000 },
];

export function RevenueChart() {
  return (
    <Card className="card-gradient">
      <CardHeader>
        <CardTitle>Receita vs Meta Mensal</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[240px] md:h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted/20" />
              <XAxis 
                dataKey="month" 
                className="text-xs fill-muted-foreground"
              />
              <YAxis 
                className="text-xs fill-muted-foreground"
                tickFormatter={(value) => `R$ ${(value / 1000).toFixed(0)}k`}
              />
              <Tooltip 
                formatter={(value: number, name: string) => [
                  new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                  }).format(value),
                  name === "receita" ? "Receita" : "Meta"
                ]}
                labelStyle={{ color: "hsl(var(--foreground))" }}
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "6px"
                }}
              />
              <Line 
                type="monotone" 
                dataKey="receita" 
                stroke="hsl(var(--primary))" 
                strokeWidth={3}
                dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="meta" 
                stroke="hsl(var(--muted-foreground))" 
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={{ fill: "hsl(var(--muted-foreground))", strokeWidth: 2, r: 3 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
