import { compile } from "mdsvex";
import { KEY } from "$env/static/private"
export async function load ({ params }:{params:any}) {
    const { slug } = params;
    const res = await fetch(`https://api.github.com/repos/idkfelix/notes/git/blobs/${slug}`, {
    headers: {
      Authorization: 'Bearer '+KEY
    }
  });
    const mdBlob = await res.json();
    const mdContent = atob(mdBlob.content)
    const content = await compile(mdContent)
    return { content: content };
}
