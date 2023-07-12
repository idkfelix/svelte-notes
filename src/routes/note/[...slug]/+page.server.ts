import { compile } from "mdsvex";
export async function load ({ params }:{params:any}) {
    const { slug } = params;
    const res = await fetch(`https://raw.githubusercontent.com/idkfelix/notes/main/${slug}.md`);
    const mdContent = await res.text();
    const content = await compile(mdContent)
    return { content: content };
}
