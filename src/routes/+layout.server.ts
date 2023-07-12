import { KEY, GIT_URL } from "$env/static/private"

export async function load() {
  const res = await fetch(GIT_URL, {
    headers: { 
      Authorization: 'Bearer '+KEY
    }
  });
  const data = await res.json()
  const filteredData = data.tree.filter((item:any) => item.path.endsWith('.md'));
    
  const finalData = filteredData.map((item:any) => {
  const url = new URL(item.url);
  const pathParts = url.pathname.split('/');
  const lastPart = pathParts[pathParts.length - 1];

  return {
    path: item.path,
    sha: lastPart
  };
});

return {
  tree: finalData
  };
}
