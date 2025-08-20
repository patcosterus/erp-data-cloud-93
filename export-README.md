
# ERP Cloud Market - Guia de Exportação

## 🚀 Exportação Completa

Este projeto inclui scripts automatizados para exportação limpa e criação de ZIP para distribuição.

### Comandos de Exportação

```bash
# 1. Preparar exportação limpa
npm run export:clean

# 2. Criar arquivo ZIP
npm run export:zip

# 3. Exportação completa (limpa + ZIP)
npm run export:full
```

### O que é Exportado

✅ **Incluído:**
- Código fonte completo (`src/`)
- Configurações essenciais (`vite.config.ts`, `tailwind.config.ts`)
- Scripts de build otimizados
- Documentação (`README.md`, `INSTALL.md`)
- Arquivos de tipos TypeScript
- Componentes UI e layouts

❌ **Excluído:**
- `node_modules/` (dependências)
- `.git/` (histórico de versão)
- `dist/` (build anterior)
- Arquivos de ambiente (`.env`)
- Cache e logs
- Arquivos temporários

### Estrutura da Exportação

```
erp-cloud-market-YYYY-MM-DD/
├── src/                    # Código fonte
├── public/                 # Assets públicos
├── scripts/               # Scripts de build
├── package.json           # Dependências limpas
├── vite.config.ts         # Configuração Vite
├── tailwind.config.ts     # Configuração Tailwind
├── tsconfig.json          # Configuração TypeScript
├── README.md              # Documentação principal
├── INSTALL.md             # Instruções de instalação
└── export-report.json     # Relatório de exportação
```

### Instalação do Projeto Exportado

1. **Extrair ZIP**
   ```bash
   unzip erp-cloud-market-YYYY-MM-DD.zip
   cd erp-cloud-market-YYYY-MM-DD/
   ```

2. **Instalar Dependências**
   ```bash
   npm install
   ```

3. **Iniciar Desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Build para Produção**
   ```bash
   npm run build
   ```

### Características do Projeto

- ⚡ **Vite** - Build tool moderno e rápido
- 🎨 **Tailwind CSS** - Styling utility-first
- 📱 **Responsive Design** - Interface adaptável
- 🔧 **TypeScript** - Tipagem estática
- 🎯 **React Query** - Gerenciamento de estado
- 🧩 **Shadcn/UI** - Componentes modernos
- 🛡️ **Error Boundaries** - Tratamento de erros
- 📊 **Recharts** - Gráficos interativos

### Deploy

O projeto está otimizado para deploy em:
- **Vercel** (recomendado)
- **Netlify**
- **GitHub Pages**
- **Servidor próprio**

### Suporte

Para dúvidas sobre instalação ou configuração, consulte:
- `README.md` - Documentação completa
- `INSTALL.md` - Instruções de instalação
- `export-report.json` - Detalhes da exportação

---

**Desenvolvido com ❤️ para agências digitais**
