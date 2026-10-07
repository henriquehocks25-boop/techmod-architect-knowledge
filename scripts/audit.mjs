import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const writing = process.argv.includes('--write-report');
const errors = [], warnings = [];
const fail = (file, message) => errors.push({ file, message });
const relative = absolute => path.relative(root, absolute).split(path.sep).join('/');
const fence = String.fromCharCode(96).repeat(3);
const reportBody = result => [
  '# Auditoria final da Knowledge Base V2', '',
  'Data desta edição: 2026-10-06. Auditoria documental reproduzível, sem executar mods Minecraft.', '',
  '## Resultado', '',
  '**' + (result.ok ? 'APROVADA' : 'REPROVADA') + '**: ' + result.errors.length + ' erros estruturais; ' + result.warnings.length + ' avisos mecânicos.', '',
  '| Medida | Quantidade |', '|---|---|',
  ...Object.entries(result.counts).map(([label, count]) => '| ' + label + ' | ' + count + ' |'), '',
  '## Verificações executadas', '',
  '- Links internos e anchors, caminhos sensíveis à caixa e sem saída do repositório.',
  '- Índice completo, arquivos não vazios, headings, fences e duplicação integral.',
  '- Áreas, templates, checklists, playbooks, estudos e mapa de skills requeridos.',
  '- Tags taxonômicas e marcação dos símbolos de API enumerados.',
  '- Registro das fontes citadas, data, escopo e integridade dos pins de commit.',
  '- Ausência de Java de gameplay e blocos de implementação nos estudos.', '',
  'Resultado estruturado: [audit-results.json](research/audit-results.json). Cobertura: [coverage-map](research/coverage-map.md).', '',
  '## Revisão cruzada manual', '',
  'Separação revista entre servidor e cliente, simulação e reserva, saldo e snapshot, cache e persistência. Load/unload, split/merge e reload invalidam projeções; protocolos de terceiros não receberam garantia de atomicidade sem contrato.', '',
  'Docs NeoForge 26.1 e históricas 1.21.1 foram separadas. Nenhuma versão patch ou matriz testada foi inventada. XNet 1.16, Thermal histórico, livro Integrated Dynamics 1.21.1 e ramos 26 permanecem distintos. A divergência de tiers Mekanism e seções IC2 foi registrada. Uma URL genérica de worldgen sem página foi substituída pelo documento oficial de biome modifiers.', '',
  'Treze estudos fixam source em commits; IndustrialCraft usa wiki histórica e não recebeu arquitetura interna sem evidência. Licenças de código, assets e terceiros são distintas. Pipez e IC2 permanecem com termos não verificados. A matriz usa NE quando não houve inspeção e não publica ranking de performance.', '',
  'O conteúdo é síntese e recomendação original; source e docs foram consultados sem importar código ou assets. A checagem de linguagem/fence não é comparação de plágio; a conclusão depende também da revisão da autoria.', '',
  '## Limites', '',
  'O auditor não prova correção técnica completa, licença jurídica, disponibilidade futura de URL externa ou compilação de API. Fontes móveis precisam de nova consulta no alvo real. Cenários de testes dos mods foram especificados, não executados. Contagens excluem .git; palavras excluem este relatório gerado.', '',
  'Reproduzir com Node.js 18 ou superior: node scripts/audit.mjs. Para atualizar os resultados: node scripts/audit.mjs --write-report. O processo retorna código 1 se houver erro.', '',
  ...result.errors.map(e => '- ERRO: ' + e.file + ': ' + e.message),
  ...result.warnings.map(e => '- AVISO: ' + e.file + ': ' + e.message), ''
].join('\n');

if (writing) {
  await mkdir(path.join(root, 'research'), { recursive: true });
  await writeFile(path.join(root, 'research/audit-results.json'), '{}\n');
  await writeFile(path.join(root, 'AUDIT_REPORT.md'), reportBody({ ok: false, errors: [], warnings: [], counts: {} }));
}
async function walk(dir) {
  const results = [];
  for (const item of await readdir(dir, { withFileTypes: true })) {
    if (['.git', 'node_modules'].includes(item.name)) continue;
    const absolute = path.join(dir, item.name);
    if (item.isSymbolicLink()) { fail(relative(absolute), 'Symlink fora da política'); continue; }
    if (item.isDirectory()) results.push(...await walk(absolute));
    else results.push(relative(absolute));
  }
  return results.sort();
}
const files = await walk(root), fileSet = new Set(files);
const markdown = files.filter(p => p.endsWith('.md'));
const texts = new Map(await Promise.all(markdown.map(async p => [p, (await readFile(path.join(root, p), 'utf8')).replace(/\r\n/g, '\n')])));
const slug = title => title.toLowerCase().replace(/<[^>]*>/g, '').replace(/[^\p{L}\p{N}\s_-]/gu, '').replace(/\s/g, '-');
const anchorMap = new Map(), hashes = new Map(), localTargets = new Map();
let words = 0, links = 0, externalLinks = 0;
const externalURLs = new Set();
for (const [file, text] of texts) {
  if (!text.trim()) fail(file, 'Arquivo vazio');
  if (!/^#\s+\S/m.test(text)) fail(file, 'Falta título principal');
  if ((text.match(new RegExp('^' + fence, 'gm')) || []).length % 2) fail(file, 'Fence não fechado');
  if (/^\s*(TODO|TBD|FIXME)\b/m.test(text)) fail(file, 'Placeholder sem decisão/evidência');
  const anchors = new Set(), seen = new Map();
  for (const match of text.matchAll(/^#{1,6}\s+(.+)$/gm)) {
    const base = slug(match[1].replace(/\s+#+$/, ''));
    const repeat = seen.get(base) || 0; seen.set(base, repeat + 1);
    anchors.add(base + (repeat ? '-' + repeat : ''));
  }
  anchorMap.set(file, anchors);
  const digest = createHash('sha256').update(text.trim()).digest('hex');
  if (hashes.has(digest)) fail(file, 'Duplicação integral de ' + hashes.get(digest));
  hashes.set(digest, file);
  if (file !== 'AUDIT_REPORT.md') words += (text.match(/\p{L}[\p{L}\p{N}'’-]*/gu) || []).length;
  if (file.startsWith('knowledge/') && !/\[(STABLE|VERSION-SPECIFIC|CASE-STUDY|RECOMMENDATION|ANTI-PATTERN|OPEN-QUESTION|SECURITY|PERFORMANCE|COMPATIBILITY)\]/.test(text)) fail(file, 'Falta classificação taxonômica');
  if (file.startsWith('knowledge/case-studies/') && new RegExp('^' + fence + '(java|groovy|kotlin|js|javascript)\\s*$', 'm').test(text)) fail(file, 'Implementação em estudo: revisar originalidade');
}
for (const [file, text] of texts) {
  const targets = new Set();
  for (const match of text.matchAll(/\[[^\]\n]+\]\((<[^>]+>|[^\s)]+)(?:\s+"[^"]*")?\)/g)) {
    const target = match[1].replace(/^<|>$/g, '');
    if (/^https?:\/\//.test(target)) { externalLinks++; externalURLs.add(target); continue; }
    if (/^[a-z][a-z0-9+.-]*:/i.test(target)) { fail(file, 'Esquema não suportado: ' + target); continue; }
    links++;
    const [rawPath, rawAnchor] = target.split('#');
    let decodedPath, decodedAnchor;
    try { decodedPath = decodeURIComponent(rawPath); decodedAnchor = rawAnchor === undefined ? undefined : decodeURIComponent(rawAnchor); }
    catch { fail(file, 'Escape inválido: ' + target); continue; }
    const absolute = rawPath ? path.resolve(root, path.dirname(file), decodedPath) : path.join(root, file);
    const rel = relative(absolute);
    if (rel === '..' || rel.startsWith('../') || path.isAbsolute(rel)) { fail(file, 'Link fora do repositório: ' + target); continue; }
    targets.add(rel);
    if (!fileSet.has(rel)) { fail(file, 'Destino inexistente ou caixa diferente: ' + target); continue; }
    if (decodedAnchor && (!anchorMap.has(rel) || !anchorMap.get(rel).has(decodedAnchor))) fail(file, 'Anchor inexistente: ' + target);
  }
  localTargets.set(file, targets);
}
const requireFiles = (folder, names) => {
  for (const name of names) if (!fileSet.has(folder + name + '.md')) fail(folder, 'Obrigatório ausente: ' + name);
};
requireFiles('', ['README','KNOWLEDGE_INDEX','TOPIC_ROUTER','GLOSSARY','SOURCES','CONTRIBUTING_KNOWLEDGE','CHANGELOG','RESEARCH_BACKLOG','AUDIT_REPORT']);
const templates = ['PROJECT_BRIEF','INTERVIEW_QUICK','INTERVIEW_STANDARD','INTERVIEW_DEEP','MOD_SPEC','ARCHITECTURE','ROADMAP','PROGRESSION','MACHINE_SPEC','MACHINE_FAMILY_SPEC','ENERGY_SPEC','LOGISTICS_SPEC','FLUID_SPEC','MULTIBLOCK_SPEC','NUCLEAR_SPEC','STORAGE_NETWORK_SPEC','WORLDGEN_SPEC','UX_SPEC','PERFORMANCE_BUDGET','TESTING','DEPENDENCY_REVIEW','COMPATIBILITY_REVIEW','MIGRATION_PLAN','RELEASE_CHECKLIST','ADR','TASK','MILESTONE','AGENTS'];
requireFiles('templates/', templates);
const checks = ['machine','machine-lifecycle','machine-state','machine-performance','energy','logistics','fluids','multiblock','nuclear','storage-network','worldgen','ui-ux','networking','performance','persistence','migration','compatibility','testing','release'];
requireFiles('checklists/', checks);
const plays = ['create-simple-machine','create-addon','create-full-tech-mod','answer-codex-question','debug-build-failure','analyze-crash-report','audit-performance','migrate-neoforge-version','prepare-release'];
requireFiles('playbooks/', plays);
const areas = ['fundamentals','neoforge','java-gradle','architecture','machines','recipes-processing','energy','logistics','fluids-chemicals','multiblocks','mining-automation','nuclear','heat-thermodynamics','storage-networks','automation','redstone-control','wireless','worldgen','rendering','ui-ux','audio-particles','assets-blockbench','compatibility','modpacks','multiplayer','performance','profiling-debugging','testing-quality','persistence-migrations','security-maintenance','release-packaging','codex','anti-patterns','case-studies'];
for (const area of areas) if (!markdown.some(p => p.startsWith('knowledge/' + area + '/'))) fail('knowledge/', 'Área ausente: ' + area);
const studies = ['mekanism','ae2','create','laserio','industrialcraft','gregtech','modern-industrialization','thermal','ender-io','refined-storage','integrated-dynamics','integrated-tunnels','xnet','pipez'];
for (const study of studies) {
  const prefix = 'knowledge/case-studies/' + study + '/';
  requireFiles(prefix, ['overview','lessons-for-architect','what-not-to-generalize','sources']);
  const source = texts.get(prefix + 'sources.md') || '';
  if (!source.includes('2026-10-06') || !/licen[çc]a/i.test(source)) fail(prefix, 'Fontes sem data/licença');
  if (study !== 'industrialcraft' && !/[a-f0-9]{40}/.test(source)) fail(prefix, 'Falta source pin');
}
const skillNames = ['classify-project','interview-project','resolve-version','research-tech','design-tech-mod','design-machine','design-progression','design-energy','design-logistics','design-fluids','design-multiblock','design-nuclear','design-storage-network','design-worldgen','spec-blockbench','balance-system','audit-architecture','audit-performance','audit-networking','dependency-review','compatibility-review','plan-testing','answer-codex','review-codex-output','analyze-build','analyze-crash','prepare-codex','plan-migration','plan-release'];
for (const skill of skillNames) if (!(texts.get('knowledge/codex/skill-context-map.md') || '').includes('| ' + skill + ' |')) fail('knowledge/codex/skill-context-map.md', 'Skill ausente: ' + skill);
const concrete = /\b(DeferredRegister|RegisterEvent|Identifier|ResourceLocation|ItemStacksResourceHandler|IItemHandler|IFluidHandler|IEnergyStorage|RecipeType|RecipeSerializer|SavedData|IGrid|IStorageService|KineticNetwork|LaserNodeBE|MachineDefinition|GTRecipeType|ConduitNetwork|INetwork|IItemNetwork|DistributionCache|TileEntityFactory|DynamicNetwork|MachinePulverizerBlockEntity|TileEntityController)\b/;
for (const [file, text] of texts) {
  if (file.startsWith('knowledge/') && concrete.test(text.replace(/\]\([^)]*\)/g, ']')) && !text.includes('[VERSION-SPECIFIC]')) fail(file, 'Símbolo de API sem VERSION-SPECIFIC');
}
const indexed = localTargets.get('KNOWLEDGE_INDEX.md') || new Set();
for (const file of markdown) if (!indexed.has(file)) fail('KNOWLEDGE_INDEX.md', 'Documento fora do índice: ' + file);
for (const file of files) if (/\.(java|class|jar)$/i.test(file)) fail(file, 'Gameplay/binário não pertence à biblioteca');
let sourceCount = 0;
try {
  const manifest = JSON.parse(await readFile(path.join(root, 'research/source-manifest.json'), 'utf8'));
  const ids = new Set(), registered = new Set();
  for (const source of manifest.sources) {
    sourceCount++;
    if (ids.has(source.id)) fail('research/source-manifest.json', 'ID duplicado: ' + source.id);
    ids.add(source.id); registered.add(source.url);
    for (const key of ['project','url','ref','license','queried_date','subject','status']) if (!source[key]) fail('research/source-manifest.json', 'Campo ausente: ' + source.id + '/' + key);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(source.queried_date)) fail(source.id, 'Data inválida');
    if (!/^https:\/\//.test(source.url)) fail(source.id, 'URL não HTTPS');
    if (source.commit && (!/^[a-f0-9]{40}$/.test(source.commit) || !source.url.includes('/' + source.commit + '/'))) fail(source.id, 'Pin não corresponde ao link');
  }
  for (const url of externalURLs) if (!registered.has(url) && !url.includes('/henriquehocks25-boop/techmod-architect-knowledge')) fail('SOURCES.md', 'URL citada sem registro: ' + url);
} catch (error) { fail('research/source-manifest.json', 'Manifesto ilegível: ' + error.message); }
for (const category of ['architecture','performance','networking','game-design','dependencies','codex-workflow']) {
  const text = texts.get('knowledge/anti-patterns/' + category + '.md') || '';
  for (const field of ['problema','sintoma','consequência','alternativa','exceção']) if (!text.toLowerCase().includes(field)) fail(category, 'Anti-pattern sem campo: ' + field);
}
const result = {
  schema: 1, edition_date: '2026-10-06', ok: errors.length === 0,
  counts: {
    'Arquivos (sem .git)': files.length, 'Markdown': markdown.length,
    'Palavras (sem relatório gerado)': words, 'Áreas knowledge': areas.length,
    'Templates': templates.length, 'Checklists': checks.length, 'Playbooks': plays.length,
    'Case studies': studies.length, 'Skills mapeadas': skillNames.length,
    'Rotas operacionais': (texts.get('TOPIC_ROUTER.md') || '').split('\n').filter(line => /^\| [^|]+ \| (LIGHT|STANDARD|DEEP|AUDIT) \|/.test(line)).length,
    'Referências no manifesto': sourceCount, 'Links internos verificados': links,
    'Links externos citados': externalLinks, 'URLs externas distintas': externalURLs.size
  },
  errors, warnings,
  limits: ['Não executa mods ou benchmarks.', 'Não verifica disponibilidade remota futura.', 'Revisão semântica e licenças dependem de evidência.']
};
if (writing) {
  await writeFile(path.join(root, 'research/audit-results.json'), JSON.stringify(result, null, 2) + '\n');
  await writeFile(path.join(root, 'AUDIT_REPORT.md'), reportBody(result));
}
process.stdout.write(JSON.stringify(result, null, 2) + '\n');
process.exitCode = result.ok ? 0 : 1;

