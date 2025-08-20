
# Dashboard Financeiro - Agência Digital

Um dashboard completo para gestão financeira de agências digitais, com foco em projetos SEO, ADS e desenvolvimento web.

## 🚀 Tecnologias

- **React 18** - Biblioteca principal
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Vite** - Build tool
- **React Query** - Gerenciamento de estado e cache
- **React Router** - Roteamento
- **Shadcn/UI** - Componentes UI
- **Lucide React** - Ícones
- **Recharts** - Gráficos

## 🏗️ Arquitetura

```
src/
├── components/
│   ├── ui/              # Componentes base do Shadcn
│   ├── layout/          # Componentes de layout
│   └── financial/       # Componentes específicos do financeiro
├── hooks/               # Custom hooks
├── services/            # Camada de dados e APIs
├── types/               # Definições TypeScript
├── utils/               # Funções utilitárias
├── pages/               # Páginas da aplicação
└── integrations/        # Integrações externas (Supabase)
```

## 📊 Funcionalidades

### Dashboard Financeiro
- **KPIs em tempo real**: Receita, custos, lucratividade, clientes ativos
- **Gestão de custos**: Fixos e variáveis com alertas de vencimento
- **Acompanhamento de projetos**: Status, orçamento, gastos
- **Análise de clientes**: Receita por cliente, projetos ativos
- **Gráficos interativos**: Despesas mensais, tendências

### Otimizações Implementadas
- **React Query**: Cache inteligente e sincronização de dados
- **Lazy Loading**: Componentes carregados sob demanda
- **Error Boundaries**: Tratamento robusto de erros
- **TypeScript**: Tipagem completa para maior confiabilidade
- **Custom Hooks**: Lógica reutilizável e separação de responsabilidades

## 🛠️ Instalação e Desenvolvimento

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone <url-do-repositorio>

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

### Scripts Disponíveis
```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build para produção
npm run preview      # Preview do build
npm run lint         # Verificação de código
```

## 🎨 Personalização

### Tema
O projeto usa um sistema de cores baseado em HSL definido no `tailwind.config.ts`. Para personalizar:

1. Edite as variáveis CSS em `src/index.css`
2. Ajuste as cores no `tailwind.config.ts`
3. Use apenas as classes semânticas (primary, secondary, accent, etc.)

### Componentes
Todos os componentes seguem o padrão Shadcn/UI e podem ser personalizados através das classes Tailwind.

## 📈 Performance

### Otimizações Implementadas
- **Code Splitting**: Divisão automática do código
- **Tree Shaking**: Remoção de código não utilizado
- **Memoização**: React.memo em componentes críticos
- **Lazy Loading**: Carregamento sob demanda
- **Bundle Optimization**: Configuração otimizada do Vite

### Métricas de Performance
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 🔒 Segurança

- **TypeScript**: Tipagem estática previne erros comuns
- **Error Boundaries**: Isolamento de falhas
- **Sanitização**: Dados validados antes da renderização
- **HTTPS**: Comunicação segura (em produção)

## 📦 Deploy

### Build para Produção
```bash
npm run build
```

### Deploy Automático
O projeto está configurado para deploy automático em plataformas como:
- Vercel
- Netlify
- GitHub Pages

### Variáveis de Ambiente
Copie `.env.example` para `.env` e configure:
```env
VITE_SUPABASE_URL=sua_url_supabase
VITE_SUPABASE_ANON_KEY=sua_chave_supabase
```

## 🧪 Testes

### Executar Testes
```bash
npm run test          # Testes unitários
npm run test:e2e      # Testes end-to-end
npm run test:coverage # Cobertura de testes
```

### Estrutura de Testes
```
tests/
├── unit/            # Testes unitários
├── integration/     # Testes de integração
└── e2e/            # Testes end-to-end
```

## 📋 Roadmap

### Próximas Funcionalidades
- [ ] Relatórios PDF automatizados
- [ ] Integração com OpenAI para insights
- [ ] Sistema de notificações push
- [ ] Dashboard mobile nativo
- [ ] Integração com bancos (Open Banking)
- [ ] Previsões financeiras com IA

### Melhorias Técnicas
- [ ] Service Worker para cache offline
- [ ] PWA (Progressive Web App)
- [ ] Internacionalização (i18n)
- [ ] Tema dark/light automático
- [ ] Acessibilidade (WCAG 2.1)

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👥 Equipe

- **Desenvolvedor Principal**: [Seu Nome]
- **Designer**: [Nome do Designer]
- **Product Owner**: [Nome do PO]

## 📞 Suporte

Para suporte, envie um email para suporte@agencia.com ou abra uma issue no GitHub.

---

**Desenvolvido com ❤️ para agências digitais que querem crescer com dados.**
