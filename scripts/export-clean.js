
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

/**
 * Script de exportação limpa
 * Prepara o projeto para exportação removendo arquivos desnecessários
 */

console.log('🚀 Iniciando exportação limpa...');

// Diretórios e arquivos a serem excluídos da exportação
const excludePatterns = [
  'node_modules',
  '.git',
  'dist',
  '.env',
  '.env.local',
  '.env.example',
  'bun.lockb',
  'package-lock.json',
  '.DS_Store',
  'Thumbs.db',
  '*.log',
  '.vscode',
  '.idea',
  'coverage',
  '.nyc_output'
];

// Criar diretório de exportação
const exportDir = path.join(process.cwd(), 'export-clean');
const timestamp = new Date().toISOString().replace(/[:.]/g, '-').split('T')[0];
const projectName = `erp-cloud-market-${timestamp}`;
const finalExportDir = path.join(exportDir, projectName);

// Limpar diretório de exportação existente
if (fs.existsSync(exportDir)) {
  fs.rmSync(exportDir, { recursive: true, force: true });
}

// Criar estrutura de exportação
fs.mkdirSync(exportDir, { recursive: true });
fs.mkdirSync(finalExportDir, { recursive: true });

// Função para copiar arquivos recursivamente, excluindo padrões
function copyFiles(src, dest, excludePatterns) {
  const items = fs.readdirSync(src, { withFileTypes: true });
  
  for (const item of items) {
    const srcPath = path.join(src, item.name);
    const destPath = path.join(dest, item.name);
    
    // Verificar se o item deve ser excluído
    const shouldExclude = excludePatterns.some(pattern => {
      if (pattern.includes('*')) {
        const regex = new RegExp(pattern.replace('*', '.*'));
        return regex.test(item.name);
      }
      return item.name === pattern;
    });
    
    if (shouldExclude) {
      console.log(`⏭️  Excluindo: ${item.name}`);
      continue;
    }
    
    if (item.isDirectory()) {
      fs.mkdirSync(destPath, { recursive: true });
      copyFiles(srcPath, destPath, excludePatterns);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

console.log('📁 Copiando arquivos...');
copyFiles(process.cwd(), finalExportDir, excludePatterns);

// Criar arquivo de instruções de instalação
const installInstructions = `# ERP Cloud Market - Instruções de Instalação

## Instalação Rápida

1. Instalar dependências:
   \`\`\`bash
   npm install
   \`\`\`

2. Iniciar desenvolvimento:
   \`\`\`bash
   npm run dev
   \`\`\`

3. Build para produção:
   \`\`\`bash
   npm run build
   \`\`\`

## Estrutura do Projeto

- \`src/\` - Código fonte principal
- \`src/components/\` - Componentes React
- \`src/pages/\` - Páginas da aplicação
- \`src/hooks/\` - Custom hooks
- \`src/services/\` - Serviços de dados
- \`src/types/\` - Definições TypeScript
- \`src/utils/\` - Funções utilitárias

## Tecnologias

- React 18 + TypeScript
- Vite (build tool)
- Tailwind CSS (styling)
- React Router (navegação)
- React Query (estado)
- Shadcn/UI (componentes)

## Deploy

O projeto está pronto para deploy em:
- Vercel
- Netlify
- GitHub Pages

Exportado em: ${new Date().toLocaleString('pt-BR')}
`;

fs.writeFileSync(path.join(finalExportDir, 'INSTALL.md'), installInstructions);

// Criar package.json limpo (sem scripts de desenvolvimento específicos)
const originalPackage = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'package.json'), 'utf8'));
const cleanPackage = {
  ...originalPackage,
  scripts: {
    dev: "vite",
    build: "tsc && vite build",
    preview: "vite preview",
    lint: "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0"
  }
};

fs.writeFileSync(
  path.join(finalExportDir, 'package.json'),
  JSON.stringify(cleanPackage, null, 2)
);

// Gerar relatório de exportação
const exportReport = {
  projectName: 'ERP Cloud Market',
  exportDate: new Date().toISOString(),
  version: originalPackage.version || '1.0.0',
  totalFiles: countFiles(finalExportDir),
  excludedPatterns: excludePatterns,
  structure: generateStructure(finalExportDir)
};

function countFiles(dir) {
  let count = 0;
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    if (item.isDirectory()) {
      count += countFiles(path.join(dir, item.name));
    } else {
      count++;
    }
  }
  return count;
}

function generateStructure(dir, level = 0, maxLevel = 3) {
  if (level > maxLevel) return {};
  
  const structure = {};
  const items = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const item of items) {
    if (item.isDirectory()) {
      structure[item.name + '/'] = generateStructure(
        path.join(dir, item.name),
        level + 1,
        maxLevel
      );
    } else {
      structure[item.name] = 'file';
    }
  }
  
  return structure;
}

fs.writeFileSync(
  path.join(finalExportDir, 'export-report.json'),
  JSON.stringify(exportReport, null, 2)
);

console.log('✅ Exportação concluída!');
console.log(`📦 Arquivos exportados para: ${finalExportDir}`);
console.log(`📊 Total de arquivos: ${exportReport.totalFiles}`);
console.log('\n📋 Para criar ZIP:');
console.log(`   cd export-clean && zip -r ${projectName}.zip ${projectName}/`);
console.log('\n🚀 Projeto pronto para distribuição!');
