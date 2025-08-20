
import { useState, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Search, Filter, Eye, Edit, Trash2 } from "lucide-react";

interface Client {
  id: string;
  name: string;
  company: string;
  email: string;
  revenue: number;
  status: "active" | "inactive" | "pending";
  projects: number;
  lastPayment: string;
  profitability: number;
}

const mockClients: Client[] = [
  {
    id: "1",
    name: "João Silva",
    company: "Tech Solutions",
    email: "joao@techsolutions.com",
    revenue: 15000,
    status: "active",
    projects: 3,
    lastPayment: "2024-01-15",
    profitability: 25.5
  },
  {
    id: "2",
    name: "Maria Santos",
    company: "E-commerce Plus",
    email: "maria@ecommerceplus.com",
    revenue: 8500,
    status: "active",
    projects: 2,
    lastPayment: "2024-01-10",
    profitability: 18.2
  },
  {
    id: "3",
    name: "Carlos Oliveira",
    company: "Startup Inovadora",
    email: "carlos@startup.com",
    revenue: 22000,
    status: "pending",
    projects: 4,
    lastPayment: "2024-01-05",
    profitability: 32.1
  }
];

export function ClientsTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<keyof Client>("revenue");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const filteredAndSortedClients = useMemo(() => {
    let filtered = mockClients.filter(
      (client) =>
        client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filtered.sort((a, b) => {
      const aValue = a[sortBy];
      const bValue = b[sortBy];
      
      if (typeof aValue === "string" && typeof bValue === "string") {
        return sortOrder === "asc" 
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }
      
      if (typeof aValue === "number" && typeof bValue === "number") {
        return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
      }
      
      return 0;
    });
  }, [searchTerm, sortBy, sortOrder]);

  const getStatusBadge = (status: Client["status"]) => {
    switch (status) {
      case "active":
        return <Badge className="status-active">Ativo</Badge>;
      case "inactive":
        return <Badge className="status-paused">Inativo</Badge>;
      case "pending":
        return <Badge className="status-pending">Pendente</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(value);
  };

  return (
    <Card className="card-gradient">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Clientes - Visão Financeira</span>
          <Button className="bg-primary hover:bg-primary/90">
            + Novo Cliente
          </Button>
        </CardTitle>
        <div className="flex gap-4 mt-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Buscar clientes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filtros
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead 
                  className="cursor-pointer hover:bg-muted/50"
                  onClick={() => {
                    setSortBy("name");
                    setSortOrder(sortBy === "name" && sortOrder === "asc" ? "desc" : "asc");
                  }}
                >
                  Cliente
                </TableHead>
                <TableHead 
                  className="cursor-pointer hover:bg-muted/50"
                  onClick={() => {
                    setSortBy("revenue");
                    setSortOrder(sortBy === "revenue" && sortOrder === "desc" ? "asc" : "desc");
                  }}
                >
                  Receita Total
                </TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Projetos</TableHead>
                <TableHead>Último Pagamento</TableHead>
                <TableHead 
                  className="cursor-pointer hover:bg-muted/50"
                  onClick={() => {
                    setSortBy("profitability");
                    setSortOrder(sortBy === "profitability" && sortOrder === "desc" ? "asc" : "desc");
                  }}
                >
                  Lucratividade
                </TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredAndSortedClients.map((client) => (
                <TableRow key={client.id} className="hover:bg-muted/30">
                  <TableCell>
                    <div>
                      <div className="font-medium">{client.name}</div>
                      <div className="text-sm text-muted-foreground">{client.company}</div>
                      <div className="text-sm text-muted-foreground">{client.email}</div>
                    </div>
                  </TableCell>
                  <TableCell className="font-mono font-medium">
                    {formatCurrency(client.revenue)}
                  </TableCell>
                  <TableCell>{getStatusBadge(client.status)}</TableCell>
                  <TableCell>{client.projects}</TableCell>
                  <TableCell className="text-sm">
                    {new Date(client.lastPayment).toLocaleDateString("pt-BR")}
                  </TableCell>
                  <TableCell>
                    <span className="font-medium text-green-600">
                      +{client.profitability}%
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <TooltipProvider>
                      <div className="flex justify-end gap-1">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0" aria-label={`Ver detalhes de ${client.name}`}>
                              <Eye className="h-4 w-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>Ver detalhes</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0" aria-label={`Editar ${client.name}`}>
                              <Edit className="h-4 w-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>Editar</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-destructive hover:text-destructive" aria-label={`Excluir ${client.name}`}>
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>Excluir</TooltipContent>
                        </Tooltip>
                      </div>
                    </TooltipProvider>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
