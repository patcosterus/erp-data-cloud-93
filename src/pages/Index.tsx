import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Target, Users, TrendingUp, CheckCircle2, ArrowRight, Globe, Zap, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
export default function Index() {
  const navigate = useNavigate();
  const features = [{
    icon: BarChart3,
    title: "Dashboard Inteligente",
    description: "Visão completa dos seus KPIs e métricas de performance em tempo real"
  }, {
    icon: Target,
    title: "Gestão de Projetos",
    description: "Controle total sobre projetos SEO e ADS com acompanhamento detalhado"
  }, {
    icon: Users,
    title: "CRM Integrado",
    description: "Gerencie clientes, contratos e relacionamentos em um só lugar"
  }, {
    icon: TrendingUp,
    title: "Relatórios Avançados",
    description: "Análises profundas e insights acionáveis para otimizar resultados"
  }];
  const benefits = ["Interface otimizada para usuários com TDAH", "Organização clara e navegação intuitiva", "Feedback visual imediato para todas as ações", "Espaçamento generoso para reduzir sobrecarga", "Paleta de cores calmante e alto contraste", "Hierarquia visual bem definida"];
  return <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:py-[30px]">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg bg-blue-500">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold text-foreground">
                Cloud Market <span className="text-primary">ERP</span>
              </h1>
            </div>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              Sistema robusto e moderno para agências especializadas em 
              <span className="font-semibold text-primary"> SEO </span>
              e 
              <span className="font-semibold text-accent"> ADS</span>. 
              Interface otimizada para produtividade e foco.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button size="lg" onClick={() => navigate('/dashboard')} className="bg-gradient-primary hover:scale-105 transition-all duration-200 shadow-lg text-slate-800">
                Acessar ERP
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="hover:bg-muted/50">
                Ver Demonstração
              </Button>
            </div>

            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-accent" />
                <span>Seguro e Confiável</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                <span>Ultra Rápido</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-accent" />
                <span>Acesso em Qualquer Lugar</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-[50px]">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Funcionalidades Principais
          </Badge>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Tudo que sua agência precisa
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Gerencie clientes, projetos, tarefas e relatórios com eficiência 
            máxima em uma interface pensada para o seu bem-estar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => <Card key={index} className="card-gradient hover:shadow-lg transition-all duration-300 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>)}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-muted/30 py-[50px]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
                Interface TDAH-Friendly
              </Badge>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Projetado para seu bem-estar e produtividade
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Nossa interface foi cuidadosamente desenvolvida para ser amigável 
                a usuários com TDAH, promovendo foco, clareza e eficiência no 
                gerenciamento das suas operações.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>)}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="card-gradient">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">24 Clientes</h3>
                  <p className="text-sm text-muted-foreground">Gerenciados ativamente</p>
                </CardContent>
              </Card>

              <Card className="card-gradient">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Target className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">18 Projetos</h3>
                  <p className="text-sm text-muted-foreground">Em andamento</p>
                </CardContent>
              </Card>

              <Card className="card-gradient">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">+67% ROI</h3>
                  <p className="text-sm text-muted-foreground">Crescimento médio</p>
                </CardContent>
              </Card>

              <Card className="card-gradient">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">R$ 45.5K</h3>
                  <p className="text-sm text-muted-foreground">Receita mensal</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-[50px]">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Pronto para transformar sua agência?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Comece hoje mesmo a usar o ERP mais intuitivo e eficiente para 
            agências de SEO e ADS
          </p>
          
          <Button size="lg" onClick={() => navigate('/dashboard')} className="bg-gradient-primary hover:scale-105 transition-all duration-200 shadow-lg text-slate-600">
            Acessar ERP Agora
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </div>;
}