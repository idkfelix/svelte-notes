<script lang='ts'>
  import { page } from "$app/stores";
  const { slug } = $page.params
  export let data:{tree:any}
  const {tree} = data
 
  let folderMap = new Map();
  let files:any = [];
  
  tree.forEach((item:any) => {
    if (item.path.includes('/')) {
      let folderName = item.path.split('/')[0];
      if (!folderMap.has(folderName)) {
        folderMap.set(folderName, []);
      }
      folderMap.get(folderName).push(item);
    } else {
      files.push(item);
    }
  });
</script>

<div class="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col">
    <slot/>
    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 w-64 h-full bg-base-200 text-base-content">
        {#each files as file}
    <li><a href={`/note/${file.sha}`}>{file.path.replace('.md', '')}</a></li>
  {/each}
  {#each [...folderMap] as [folder, items]}
    <details class="menu">
      <summary class="menu-title">{folder}</summary>
      <ul class="menu">
        {#each items as item}
          <li><a href={`/note/${item.sha}`}>{item.path.split('/')[1].replace('.md', '')}</a></li>
        {/each}
      </ul>
    </details>
  {/each}
    </ul>
  
  </div>
</div>
