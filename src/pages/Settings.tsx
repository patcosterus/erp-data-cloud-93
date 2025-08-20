import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/hooks/use-toast";
import { Settings as SettingsIcon, Building, MapPin, Bell, DollarSign } from "lucide-react";

interface SettingsData {
  // Company
  companyName: string;
  cnpj: string;
  email: string;
  phone: string;
  
  // Address
  address: string;
  city: string;
  state: string;
  zipCode: string;
  
  // Preferences
  currency: string;
  timezone: string;
  language: string;
  
  // Financial
  defaultTax: string;
  paymentTerms: string;
  
  // Notifications
  emailNotifications: boolean;
  pushNotifications: boolean;
  reportReminders: boolean;
}

export default function Settings() {
  const [settings, setSettings] = useState<SettingsData>(() => {
    const saved = localStorage.getItem('erp-settings');
    return saved ? JSON.parse(saved) : {
      companyName: "Cloud Market",
      cnpj: "",
      email: "contato@cloudmarket.com.br",
      phone: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      currency: "BRL",
      timezone: "America/Sao_Paulo",
      language: "pt-BR",
      defaultTax: "18",
      paymentTerms: "30",
      emailNotifications: true,
      pushNotifications: true,
      reportReminders: true
    };
  });

  const handleInputChange = (field: keyof SettingsData, value: string | boolean) => {
    setSettings(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    localStorage.setItem('erp-settings', JSON.stringify(settings));
    toast({
      title: "Configurações salvas",
      description: "Suas configurações foram atualizadas com sucesso.",
    });
  };

  return (
    <div className="space-y-generous">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Configurações</h1>
        <p className="text-muted-foreground mt-2">
          Gerencie as configurações do sistema e preferências da empresa
        </p>
      </div>

      <div className="grid gap-generous lg:grid-cols-2">
        {/* Company Information */}
        <Card className="card-gradient">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building className="w-5 h-5 text-primary" />
              Informações da Empresa
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="companyName">Nome da Empresa</Label>
              <Input
                id="companyName"
                value={settings.companyName}
                onChange={(e) => handleInputChange('companyName', e.target.value)}
                placeholder="Nome da sua empresa"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="cnpj">CNPJ</Label>
              <Input
                id="cnpj"
                value={settings.cnpj}
                onChange={(e) => handleInputChange('cnpj', e.target.value)}
                placeholder="00.000.000/0000-00"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                value={settings.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="contato@empresa.com"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Telefone</Label>
              <Input
                id="phone"
                value={settings.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="(11) 99999-9999"
              />
            </div>
          </CardContent>
        </Card>

        {/* Address */}
        <Card className="card-gradient">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              Endereço
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="address">Endereço</Label>
              <Input
                id="address"
                value={settings.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                placeholder="Rua, número, complemento"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city">Cidade</Label>
                <Input
                  id="city"
                  value={settings.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  placeholder="São Paulo"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="state">Estado</Label>
                <Select
                  value={settings.state}
                  onValueChange={(value) => handleInputChange('state', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="SP">São Paulo</SelectItem>
                    <SelectItem value="RJ">Rio de Janeiro</SelectItem>
                    <SelectItem value="MG">Minas Gerais</SelectItem>
                    <SelectItem value="RS">Rio Grande do Sul</SelectItem>
                    <SelectItem value="PR">Paraná</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="zipCode">CEP</Label>
              <Input
                id="zipCode"
                value={settings.zipCode}
                onChange={(e) => handleInputChange('zipCode', e.target.value)}
                placeholder="00000-000"
              />
            </div>
          </CardContent>
        </Card>

        {/* Financial Settings */}
        <Card className="card-gradient">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-primary" />
              Configurações Financeiras
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="currency">Moeda</Label>
              <Select
                value={settings.currency}
                onValueChange={(value) => handleInputChange('currency', value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="BRL">BRL - Real Brasileiro</SelectItem>
                  <SelectItem value="USD">USD - Dólar Americano</SelectItem>
                  <SelectItem value="EUR">EUR - Euro</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="defaultTax">Taxa de Imposto Padrão (%)</Label>
              <Input
                id="defaultTax"
                type="number"
                value={settings.defaultTax}
                onChange={(e) => handleInputChange('defaultTax', e.target.value)}
                placeholder="18"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="paymentTerms">Prazo de Pagamento (dias)</Label>
              <Input
                id="paymentTerms"
                type="number"
                value={settings.paymentTerms}
                onChange={(e) => handleInputChange('paymentTerms', e.target.value)}
                placeholder="30"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="timezone">Fuso Horário</Label>
              <Select
                value={settings.timezone}
                onValueChange={(value) => handleInputChange('timezone', value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="America/Sao_Paulo">São Paulo (BRT)</SelectItem>
                  <SelectItem value="America/Manaus">Manaus (AMT)</SelectItem>
                  <SelectItem value="America/Recife">Recife (BRT)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card className="card-gradient">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="w-5 h-5 text-primary" />
              Notificações
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="emailNotifications">Notificações por E-mail</Label>
                <p className="text-sm text-muted-foreground">
                  Receber atualizações importantes por e-mail
                </p>
              </div>
              <Switch
                id="emailNotifications"
                checked={settings.emailNotifications}
                onCheckedChange={(checked) => handleInputChange('emailNotifications', checked)}
              />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="pushNotifications">Notificações Push</Label>
                <p className="text-sm text-muted-foreground">
                  Receber notificações em tempo real no navegador
                </p>
              </div>
              <Switch
                id="pushNotifications"
                checked={settings.pushNotifications}
                onCheckedChange={(checked) => handleInputChange('pushNotifications', checked)}
              />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="reportReminders">Lembretes de Relatórios</Label>
                <p className="text-sm text-muted-foreground">
                  Receber lembretes para gerar relatórios mensais
                </p>
              </div>
              <Switch
                id="reportReminders"
                checked={settings.reportReminders}
                onCheckedChange={(checked) => handleInputChange('reportReminders', checked)}
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button onClick={handleSave} className="px-8">
          Salvar Configurações
        </Button>
      </div>
    </div>
  );
}