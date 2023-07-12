<script lang='ts'>
  import '../app.css'
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
    <label for="my-drawer-2" class="btn drawer-button lg:hidden m-10 mb-0">Open File Tree</label>
    <slot/>
  
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 w-64 h-full bg-base-200 text-base-content">
      <a href="/" class="text-3xl text-center font-bold">Svelte Notes</a>
      <br/>
      {#each files as file}
        <li><a class="font-semibold" href={`/note/${file.sha}`}>{file.path.replace('.md', '')}</a></li>
      {/each}
      {#each [...folderMap] as [folder, items]}
        <details class="menu">
          <summary class="menu-title text-base-content">{folder}</summary>
          <ul class="menu">
            {#each items as item}
              <li><a class="font-semibold" href={`/note/${item.sha}`}>{item.path.split('/')[1].replace('.md', '')}</a></li>
            {/each}
          </ul>
        </details>
      {/each}
    </ul>
  </div>
</div>
