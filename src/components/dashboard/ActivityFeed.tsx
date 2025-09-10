import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell, CheckCircle, AlertTriangle, Users, FileText } from "lucide-react";

interface Activity {
  id: string;
  type: "success" | "warning" | "info";
  message: string;
  time: string;
  icon: any;
}

export function ActivityFeed() {
  const activities: Activity[] = [
    {
      id: "1",
      type: "success",
      message: "Relatório SEO da TechCorp foi concluído",
      time: "2 min atrás",
      icon: CheckCircle
    },
    {
      id: "2", 
      type: "warning",
      message: "Prazo do projeto RetailPlus se aproxima",
      time: "15 min atrás",
      icon: AlertTriangle
    },
    {
      id: "3",
      type: "info",
      message: "Novo cliente StartupInc foi adicionado",
      time: "1 hora atrás", 
      icon: Users
    },
    {
      id: "4",
      type: "info",
      message: "Proposta enviada para EcommerceX",
      time: "2 horas atrás",
      icon: FileText
    }
  ];

  const getActivityColor = (type: Activity["type"]) => {
    switch (type) {
      case "success": return "text-accent";
      case "warning": return "text-warning";
      default: return "text-primary";
    }
  };

  return (
    <Card className="bg-gradient-card border-border/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bell className="w-5 h-5 text-primary" />
          Atividades Recentes
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-3 p-3 bg-background/50 rounded-lg border border-border/30">
            <div className={`p-1.5 rounded-full bg-background ${getActivityColor(activity.type)}`}>
              <activity.icon className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground mb-1">
                {activity.message}
              </p>
              <p className="text-xs text-muted-foreground">{activity.time}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}