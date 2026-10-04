"""Dependency-free structural checks. These do not replace a device test."""
import json
from pathlib import Path
root = Path(__file__).resolve().parents[1]
load = lambda name: json.loads((root / name).read_text(encoding='utf-8'))
c = load('content/catalog.json')
r = load('content/reference.json')
w = load('content/workbench.json')
j = load('content/journal.json')
ids = [x['id'] for x in c['lessons']]
assert len(ids) == len(set(ids))
assert c['currentLesson'] in ids
for l in c['lessons']:
    assert all(p in ids for p in l['prerequisites'])
    assert all(ids.index(p) < ids.index(l['id']) for p in l['prerequisites']), 'Prerequisites must precede the lesson'
    if l['state'] == 'ready':
        lesson = load(l['file'])
        assert lesson['id'] == l['id']
        for key in ['assignment','setup','why','steps','hints','check','keep','recovery']:
            assert lesson.get(key), (l['id'],key)
        assert all(s in r['sources'] for s in lesson['sources'])
    else:
        assert l['state'] == 'planned'
for group in ['definitions','techniques']:
    for item in r[group]:
        assert all(s in r['sources'] for s in item['sources'])
assert isinstance(j['entries'],list)
assert len(w['items']) == len({x['id'] for x in w['items']})
assert all(s['url'].startswith('https://') for s in r['sources'].values())
for path in ['index.html','assets/app.js','assets/core.mjs','assets/style.css','assets/mark.svg','.nojekyll']:
    assert (root/path).is_file(), path
assert 'localStorage' in (root/'assets/app.js').read_text()
assert 'public-consent' in (root/'assets/app.js').read_text()
print(f'PASS: {len(ids)} lesson outlines; {sum(x["state"]=="ready" for x in c["lessons"])} assignment briefs; {len(w["items"])} inventory records; sources and prerequisites valid.')
