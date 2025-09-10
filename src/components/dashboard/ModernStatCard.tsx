import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ModernStatCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
  variant?: "default" | "primary" | "success" | "purple";
}

export function ModernStatCard({ 
  title, 
  value, 
  description, 
  icon: Icon, 
  trend,
  className,
  variant = "default"
}: ModernStatCardProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return "bg-gradient-to-br from-primary/10 to-primary-glow/5 border-primary/20";
      case "success":
        return "bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20";
      case "purple":
        return "bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20";
      default:
        return "bg-gradient-to-br from-card to-muted/30 border-border/50";
    }
  };

  return (
    <Card className={cn(
      "transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border",
      getVariantStyles(),
      className
    )}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 rounded-lg bg-background/50">
            <Icon className="h-6 w-6 text-foreground" />
          </div>
          {trend && (
            <div className={cn(
              "text-sm font-medium px-2 py-1 rounded-full",
              trend.isPositive 
                ? "text-accent bg-accent/10" 
                : "text-destructive bg-destructive/10"
            )}>
              {trend.isPositive ? "+" : ""}{trend.value}%
            </div>
          )}
        </div>
        
        <div className="space-y-1">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-2xl font-bold text-foreground">{value}</p>
          {description && (
            <p className="text-xs text-muted-foreground">{description}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}