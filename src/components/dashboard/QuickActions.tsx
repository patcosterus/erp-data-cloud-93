import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, FileText, Users, Calendar, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function QuickActions() {
  const navigate = useNavigate();

  const actions = [
    {
      icon: Plus,
      title: "Novo Projeto",
      description: "Criar novo projeto SEO/ADS",
      onClick: () => navigate("/projects"),
      variant: "default" as const
    },
    {
      icon: Users,
      title: "Novo Cliente", 
      description: "Adicionar cliente",
      onClick: () => navigate("/clients"),
      variant: "secondary" as const
    },
    {
      icon: FileText,
      title: "Relatório",
      description: "Gerar relatório",
      onClick: () => navigate("/reports"),
      variant: "ghost" as const
    },
    {
      icon: Calendar,
      title: "Agenda",
      description: "Ver calendário",
      onClick: () => {},
      variant: "outline" as const
    }
  ];

  return (
    <Card className="bg-gradient-card border-border/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-primary" />
          Ações Rápidas
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-3">
        {actions.map((action, index) => (
          <Button
            key={index}
            variant={action.variant}
            className="h-auto p-4 flex flex-col items-center gap-2 text-center"
            onClick={action.onClick}
          >
            <action.icon className="w-6 h-6" />
            <div>
              <div className="font-medium text-sm">{action.title}</div>
              <div className="text-xs opacity-70">{action.description}</div>
            </div>
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}