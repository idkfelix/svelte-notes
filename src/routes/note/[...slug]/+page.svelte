<script lang="ts">
  import './markdown.css'
  export let data: any
  $: content = data.content
  $: meta = data.content.data.fm
  
</script>

<svelte:head>
  {#if meta.title}
    <title>{meta.title}</title>
  {:else}
    <title>Svelte Notes</title>
  {/if}
</svelte:head>

<div class="m-10">
  <div class="markdown-body p-5 rounded-xl bg-base-300">
    {@html content?.code}
  </div>
</div>
