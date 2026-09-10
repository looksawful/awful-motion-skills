import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');
const exists = (p) => fs.existsSync(path.join(root, p));
const failures = [];
const check = (condition, message) => { if (!condition) failures.push(message); };

const requiredSkills = [
  'visual-production-router',
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
  'skills/vendor/registry.json',
  'evals/routing.yaml'
];
for (const file of requiredDocs) check(exists(file), `missing required file: ${file}`);

try {
  const vendor = JSON.parse(read('skills/vendor/registry.json'));
  check(Array.isArray(vendor.skills), 'vendor registry needs skills array');
  const vendorIds = new Set();
  for (const skill of vendor.skills ?? []) {
    check(typeof skill.id === 'string' && skill.id.length > 0, 'every vendor skill needs id');
    check(!vendorIds.has(skill.id), `duplicate vendor skill id: ${skill.id}`);
    vendorIds.add(skill.id);
    check(typeof skill.repo === 'string' && /^https:\/\/github\.com\//.test(skill.repo), `vendor ${skill.id} needs GitHub repo`);
  }
} catch (error) {
  failures.push(`unable to parse skills/vendor/registry.json: ${error.message}`);
}

const agents = read('AGENTS.md');
check(agents.includes('START_HERE.md'), 'AGENTS.md must route through START_HERE.md');
check(agents.includes('mascot-motion'), 'AGENTS.md must document mascot-motion');
check(agents.includes('character-effects-language'), 'AGENTS.md must document character-effects-language');
check(agents.includes('awful-picture-skills'), 'AGENTS.md must define awful-picture-skills handoff');

const start = read('START_HERE.md');
for (const id of ['visual-production-router', 'mascot-motion', 'awful-sprite-production', 'ai-video-production']) {
  check(start.includes(id), `START_HERE.md must reference ${id}`);
}

const evalText = read('evals/routing.yaml');
const refs = [...evalText.matchAll(/(?:must_load|may_load|must_not_load):\s*\[([^\]]*)\]/g)]
  .flatMap((m) => m[1].split(',').map((x) => x.trim()).filter(Boolean));
for (const ref of refs) check(requiredSkills.includes(ref), `routing eval references unknown local skill: ${ref}`);

if (failures.length) {
  console.error('AWFUL Motion Skills verification failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`AWFUL Motion Skills verification passed: ${requiredSkills.length} required local skills.`);
