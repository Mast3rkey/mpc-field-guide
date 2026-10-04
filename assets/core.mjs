// Pure helpers: no DOM, storage, credentials, or network side effects.
export const STATUSES = ['New', 'Practiced', 'Reliable', 'Ready to perform'];
export const MARKER = '<!-- mpc-practice:v1 -->';
export function escapeHTML(value = '') {
  return String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
export function safeURL(value) {
  try { const u = new URL(value); return u.protocol === 'https:' ? u.href : '#'; } catch { return '#'; }
}
export function localDate(date = new Date()) {
  return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
}
export function sessionBody(draft) {
  const status = STATUSES.includes(draft.status) ? draft.status : 'New';
  const lesson = /^L\d{2}$/.test(draft.lesson || '') ? draft.lesson : 'Independent';
  const date = /^\d{4}-\d{2}-\d{2}$/.test(draft.date || '') ? draft.date : localDate();
  return [MARKER, `Date: ${date}`, `Lesson: ${lesson}`, `Status: ${status}`, `Kind: ${draft.kind || 'Practice'}`, `Draft-ID: ${String(draft.id || '').replace(/[^a-zA-Z0-9-]/g,'')}`, '',
    '## Intention', draft.intention || 'Not recorded.', '',
    '## Setup / source material', draft.setup || 'Not recorded.', '',
    '## What I did and heard', draft.result || 'Not recorded.', '',
    '## What I understand now', draft.takeaway || 'Not recorded.', '',
    '## Next experiment', draft.next || 'Not recorded.', '',
    '## Saved work / evidence', draft.evidence || 'Not recorded.', '',
    'Status is my own practice assessment, not an automatic certification.'].join('\n');
}
export function issueURL(repository, draft) {
  if (!/^[\w.-]+\/[\w.-]+$/.test(repository)) throw new Error('Invalid repository');
  const url = new URL(`https://github.com/${repository}/issues/new`);
  url.searchParams.set('title', `[Practice] ${draft.title || 'Session'} — ${draft.date || localDate()}`);
  url.searchParams.set('body', sessionBody(draft));
  if (url.href.length > 7500) throw new Error('This entry is too long for a safe prefilled link. Copy or download it, then paste it into a new GitHub issue. Your draft is still here.');
  return url.href;
}
export function parseIssue(issue, owner, repository) {
  if (issue.pull_request || issue.user?.login?.toLowerCase() !== owner.toLowerCase()) return null;
  if (!Number.isSafeInteger(issue.number) || issue.number < 1) return null;
  const body = typeof issue.body === 'string' ? issue.body : '';
  if (!body.startsWith(MARKER)) return null;
  // Only parse the header. A quotation in a later reflection cannot change metadata.
  const header = body.split(/\n## /, 1)[0];
  const field = name => header.match(new RegExp(`^${name}: (.+)$`, 'm'))?.[1]?.trim() || '';
  const lesson = field('Lesson');
  const status = field('Status');
  return {id:`issue-${issue.number}`, number:issue.number, title:String(issue.title || 'Practice session'),
    lesson:/^L\d{2}$/.test(lesson)?lesson:'Independent', status:STATUSES.includes(status)?status:'New',
    date:/^\d{4}-\d{2}-\d{2}$/.test(field('Date'))?field('Date'):String(issue.created_at || '').slice(0,10),
    created:issue.created_at || '', body:body.replace(MARKER,'').trim(),
    url:`https://github.com/${repository}/issues/${issue.number}`};
}
export function progressFor(entries, lesson) {
  const matches = entries.filter(e => e.lesson === lesson && STATUSES.includes(e.status));
  matches.sort((a,b) => `${b.date || ''} ${b.created || ''}`.localeCompare(`${a.date || ''} ${a.created || ''}`));
  return matches[0]?.status || 'Not assessed';
}
