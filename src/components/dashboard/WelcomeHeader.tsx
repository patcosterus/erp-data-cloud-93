import { BarChart3, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

export function WelcomeHeader() {
  const currentDate = new Intl.DateTimeFormat('pt-BR', {
    weekday: 'long',
    year: 'numeric', 
    month: 'long',
    day: 'numeric'
  }).format(new Date());

  const currentTime = new Intl.DateTimeFormat('pt-BR', {
    hour: '2-digit',
    minute: '2-digit'
  }).format(new Date());

  return (
    <Card className="bg-gradient-to-r from-primary/10 via-secondary/5 to-transparent p-6 border border-border/50 overflow-hidden relative">
      <div className="absolute top-0 right-0 opacity-5">
        <BarChart3 className="w-32 h-32 text-primary" />
      </div>
      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2 animate-fade-in">
              Painel de Controle
            </h1>
            <p className="text-muted-foreground mb-1">
              Bem-vindo de volta! Aqui está um resumo das suas operações hoje.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span className="capitalize">{currentDate} - {currentTime}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}