import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');
const exists = (p) => fs.existsSync(path.join(root, p));
const failures = [];
const check = (condition, message) => { if (!condition) failures.push(message); };

const requiredSkills = [
  'visual-production-router',
  'picture-handoff-consumer',
  'disney-animation-principles',
  'character-consistency',
  'mascot-motion',
  'character-effects-language',
  'concept-and-style',
  'awful-sprite-production',
  'story-character-writing',
  'storyboard-and-directing',
  'ai-video-production',
  'game-asset-production',
  'visual-quality-review'
];

const names = new Set();
for (const id of requiredSkills) {
  const skillPath = `.agents/skills/${id}/SKILL.md`;
  check(exists(skillPath), `missing required skill: ${skillPath}`);
  if (!exists(skillPath)) continue;
  const body = read(skillPath);
  const frontmatter = body.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  check(Boolean(frontmatter), `${skillPath} must start with YAML frontmatter`);
  if (!frontmatter) continue;
  const name = frontmatter[1].match(/^name:\s*([^\r\n]+)$/m)?.[1]?.trim();
  const description = frontmatter[1].match(/^description:\s*([^\r\n]+)$/m)?.[1]?.trim();
  check(name === id, `${skillPath} frontmatter name must equal ${id}; got ${name ?? 'missing'}`);
  check(Boolean(description), `${skillPath} needs a description`);
  check(!names.has(name), `duplicate skill name: ${name}`);
  if (name) names.add(name);
}

const requiredDocs = [
  'README.md',
  'AGENTS.md',
  'START_HERE.md',
  'docs/disney-12-principles.md',
  'docs/animation-review-checklist.md',
  'docs/mascot-motion-bible-template.md',
  'docs/picture-motion-handoff.md',
  'schemas/picture-motion-handoff.schema.json',
  'docs/visual-skill-catalog.md',
  'docs/visual-production-pipelines.md',
  'skills/vendor/registry.json',
  'skills/vendor/registry.extra.json',
  'skills/vendor/README.md',
  'scripts/vendor_skills.py',
  'scripts/check_registry.py',
  'evals/routing.yaml'
];
for (const file of requiredDocs) check(exists(file), `missing required file: ${file}`);

try {
  const handoff = JSON.parse(read('schemas/picture-motion-handoff.schema.json'));
  check(handoff.$schema === 'https://json-schema.org/draft/2020-12/schema', 'handoff schema must use JSON Schema 2020-12');
  check(handoff.type === 'object', 'handoff schema root must be object');
  for (const field of ['version','artifact_id','canonical_references','preserve','vary','avoid','identity','style','delivery','delegated_to_motion']) {
    check(handoff.required?.includes(field), `handoff schema must require ${field}`);
  }
  check(handoff.properties?.version?.const === 1, 'handoff schema consumer must explicitly support version 1');
} catch (error) {
  failures.push(`unable to parse handoff schema: ${error.message}`);
}

const vendorIds = new Set();
for (const registryPath of ['skills/vendor/registry.json', 'skills/vendor/registry.extra.json']) {
  try {
    const vendor = JSON.parse(read(registryPath));
    check(vendor.version === 1, `${registryPath} version must be 1`);
    check(Array.isArray(vendor.skills) && vendor.skills.length > 0, `${registryPath} needs non-empty skills array`);
    for (const skill of vendor.skills ?? []) {
      check(typeof skill.id === 'string' && skill.id.length > 0, `${registryPath}: every vendor skill needs id`);
      check(!vendorIds.has(skill.id), `duplicate vendor skill id across registries: ${skill.id}`);
      vendorIds.add(skill.id);
      check(typeof skill.repo === 'string' && /^https:\/\/github\.com\//.test(skill.repo), `vendor ${skill.id} needs GitHub repo`);
      check(typeof skill.source_path === 'string' && skill.source_path.length > 0, `vendor ${skill.id} needs source_path`);
      check(Array.isArray(skill.categories) && skill.categories.length > 0, `vendor ${skill.id} needs categories`);
      check(['core', 'recommended', 'optional', 'reference'].includes(skill.tier), `vendor ${skill.id} has invalid tier`);
      check(typeof skill.portable === 'boolean', `vendor ${skill.id} needs portable boolean`);
      if (skill.tier === 'reference') check(skill.portable === false, `reference vendor ${skill.id} must be non-portable`);
    }
  } catch (error) {
    failures.push(`unable to parse ${registryPath}: ${error.message}`);
  }
}

const agents = read('AGENTS.md');
for (const token of ['START_HERE.md','visual-production-router','mascot-motion','character-effects-language','awful-picture-skills','skills/vendor/registry.json','scripts/vendor_skills.py','visual-quality-review']) {
  check(agents.includes(token), `AGENTS.md must reference ${token}`);
}

const start = read('START_HERE.md');
for (const id of ['visual-production-router','picture-handoff-consumer','mascot-motion','awful-sprite-production','ai-video-production']) {
  check(start.includes(id), `START_HERE.md must reference ${id}`);
}
check(start.includes('awful-picture-skills'), 'START_HERE.md must preserve the picture-skills handoff');

const handoffSkill = read('.agents/skills/picture-handoff-consumer/SKILL.md');
for (const token of ['canonical','preserve','vary','avoid','identity','style','delegated','awful-picture-skills']) {
  check(handoffSkill.includes(token), `picture-handoff-consumer must define ${token}`);
}

const router = read('.agents/skills/visual-production-router/SKILL.md');
for (const token of ['mascot-motion','character-effects-language','openai-sprite-pipeline','inference-ai-video-generation','comfyui-video-pipeline','higgsfield-product-photoshoot','video-shotcraft','greybox-harness','hyperframes-animation']) {
  check(router.includes(token), `visual-production-router must route ${token}`);
}

const catalog = read('docs/visual-skill-catalog.md');
check(catalog.includes('openai-sprite-pipeline'), 'visual skill catalog must document sprite vendor routing');
check(catalog.includes('comfyui-video-pipeline'), 'visual skill catalog must document local ComfyUI video routing');

const pipelines = read('docs/visual-production-pipelines.md');
for (const token of ['Living pet / mascot','AI animated short / cartoon','Local ComfyUI video production','Game asset pack']) {
  check(pipelines.includes(token), `visual production pipelines must include ${token}`);
}

const vendorManager = read('scripts/vendor_skills.py');
check(vendorManager.includes('registry.extra.json'), 'vendor manager must merge registry.extra.json');

const evalText = read('evals/routing.yaml');
const refs = [...evalText.matchAll(/(?:must_load|may_load|must_not_load):\s*\[([^\]]*)\]/g)]
  .flatMap((m) => m[1].split(',').map((x) => x.trim()).filter(Boolean));
for (const ref of refs) check(requiredSkills.includes(ref), `routing eval references unknown local skill: ${ref}`);

if (failures.length) {
  console.error('AWFUL Motion Skills verification failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`AWFUL Motion Skills verification passed: ${requiredSkills.length} required local skills, ${vendorIds.size} reviewed vendor entries, Picture handoff v1 supported.`);
