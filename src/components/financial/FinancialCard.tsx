
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FinancialCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
  onClick?: () => void;
}

export function FinancialCard({ 
  title, 
  value, 
  subtitle, 
  icon: Icon, 
  trend, 
  className,
  onClick 
}: FinancialCardProps) {
  return (
    <Card 
      className={cn(
        "card-gradient border-border/50 hover:shadow-md transition-all duration-200 cursor-pointer",
        onClick && "hover:scale-[1.02]",
        className
      )}
      onClick={onClick}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <Icon className="h-5 w-5 text-primary" />
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="text-2xl font-bold text-foreground">{value}</div>
        {subtitle && (
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        )}
        {trend && (
          <div className="flex items-center text-sm">
            <span
              className={cn(
                "font-medium",
                trend.isPositive ? "text-green-600" : "text-red-600"
              )}
            >
              {trend.isPositive ? "+" : ""}{trend.value}%
            </span>
            <span className="text-muted-foreground ml-1">vs. mês anterior</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
