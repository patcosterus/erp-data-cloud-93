
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

/**
 * Script para criar ZIP do projeto exportado
 */

console.log('📦 Criando arquivo ZIP...');

const exportDir = path.join(process.cwd(), 'export-clean');
const timestamp = new Date().toISOString().replace(/[:.]/g, '-').split('T')[0];
const projectName = `erp-cloud-market-${timestamp}`;
const projectDir = path.join(exportDir, projectName);

if (!fs.existsSync(projectDir)) {
  console.error('❌ Diretório de exportação não encontrado. Execute primeiro:');
  console.error('   npm run export:clean');
  process.exit(1);
}

try {
  // Navegar para o diretório de exportação e criar ZIP
  process.chdir(exportDir);
  
  const zipCommand = process.platform === 'win32' 
    ? `powershell Compress-Archive -Path "${projectName}" -DestinationPath "${projectName}.zip" -Force`
    : `zip -r "${projectName}.zip" "${projectName}/"`;
  
  execSync(zipCommand, { stdio: 'inherit' });
  
  const zipPath = path.join(exportDir, `${projectName}.zip`);
  const stats = fs.statSync(zipPath);
  const fileSizeInMB = (stats.size / (1024 * 1024)).toFixed(2);
  
  console.log('✅ ZIP criado com sucesso!');
  console.log(`📍 Local: ${zipPath}`);
  console.log(`📏 Tamanho: ${fileSizeInMB} MB`);
  console.log('\n🎉 Projeto pronto para distribuição!');
  
} catch (error) {
  console.error('❌ Erro ao criar ZIP:', error.message);
  process.exit(1);
}
