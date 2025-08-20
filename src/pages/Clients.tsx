import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Plus, 
  Users, 
  Phone, 
  Mail, 
  MapPin,
  Filter,
  MoreHorizontal
} from "lucide-react";

export default function Clients() {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data - dados de exemplo
  const clients = [
    {
      id: 1,
      name: "TechCorp Solutions",
      contact: "João Silva",
      email: "joao@techcorp.com",
      phone: "(11) 99999-9999",
      location: "São Paulo, SP",
      status: "active",
      projects: 3,
      monthlyValue: "R$ 5.500",
      joinDate: "Jan 2024"
    },
    {
      id: 2,
      name: "RetailPlus Ltda",
      contact: "Maria Santos",
      email: "maria@retailplus.com",
      phone: "(21) 88888-8888",
      location: "Rio de Janeiro, RJ",
      status: "active",
      projects: 2,
      monthlyValue: "R$ 3.200",
      joinDate: "Mar 2024"
    },
    {
      id: 3,
      name: "StartupInc",
      contact: "Pedro Costa",
      email: "pedro@startupinc.com",
      phone: "(31) 77777-7777",
      location: "Belo Horizonte, MG",
      status: "pending",
      projects: 1,
      monthlyValue: "R$ 2.800",
      joinDate: "Mai 2024"
    },
    {
      id: 4,
      name: "E-commerce Brasil",
      contact: "Ana Oliveira",
      email: "ana@ecommercebr.com",
      phone: "(47) 66666-6666",
      location: "Blumenau, SC",
      status: "completed",
      projects: 5,
      monthlyValue: "R$ 7.200",
      joinDate: "Nov 2023"
    }
  ];

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.contact.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="status-active">Ativo</Badge>;
      case 'pending':
        return <Badge className="status-pending">Aguardando</Badge>;
      case 'completed':
        return <Badge className="status-completed">Concluído</Badge>;
      default:
        return <Badge className="status-paused">Inativo</Badge>;
    }
  };

  return (
    <div className="space-y-generous">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Clientes</h1>
          <p className="text-muted-foreground mt-2">
            Gerencie seus clientes e relacionamentos
          </p>
        </div>
        <Button className="bg-gradient-primary">
          <Plus className="w-4 h-4 mr-2" />
          Novo Cliente
        </Button>
      </div>

      {/* Filters and Search */}
      <Card className="card-gradient">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Buscar por nome ou contato..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="w-full sm:w-auto">
              <Filter className="w-4 h-4 mr-2" />
              Filtros
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="card-gradient">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total de Clientes</p>
                <p className="text-2xl font-bold text-foreground">{clients.length}</p>
              </div>
              <Users className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="card-gradient">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Clientes Ativos</p>
                <p className="text-2xl font-bold text-foreground">
                  {clients.filter(c => c.status === 'active').length}
                </p>
              </div>
              <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                <Users className="w-4 h-4 text-accent" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-gradient">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Projetos Totais</p>
                <p className="text-2xl font-bold text-foreground">
                  {clients.reduce((sum, client) => sum + client.projects, 0)}
                </p>
              </div>
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                <Users className="w-4 h-4 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-gradient">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Receita Mensal</p>
                <p className="text-xl font-bold text-foreground">R$ 18.700</p>
              </div>
              <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                <Users className="w-4 h-4 text-accent" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Clients Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredClients.map((client) => (
          <Card key={client.id} className="card-gradient hover:shadow-lg transition-all duration-200">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg text-foreground">{client.name}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">{client.contact}</p>
                </div>
                <div className="flex items-center gap-2">
                  {getStatusBadge(client.status)}
                  <Button variant="ghost" size="icon" className="w-8 h-8">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {/* Contact Info */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{client.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{client.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{client.location}</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/50">
                <div className="text-center">
                  <p className="text-lg font-semibold text-foreground">{client.projects}</p>
                  <p className="text-xs text-muted-foreground">Projetos</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-semibold text-foreground">{client.monthlyValue}</p>
                  <p className="text-xs text-muted-foreground">Mensal</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-semibold text-foreground">{client.joinDate}</p>
                  <p className="text-xs text-muted-foreground">Cliente desde</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-2">
                <Button size="sm" className="flex-1">Ver Detalhes</Button>
                <Button size="sm" variant="outline" className="flex-1">Projetos</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredClients.length === 0 && (
        <Card className="card-gradient">
          <CardContent className="text-center py-12">
            <Users className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Nenhum cliente encontrado
            </h3>
            <p className="text-muted-foreground mb-6">
              Tente ajustar os filtros ou adicione um novo cliente
            </p>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Adicionar Cliente
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}