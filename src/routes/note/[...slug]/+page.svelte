<script lang="ts">
  import './markdown.css'
  export let data: any
  $: content = data?.content
  $: metadata = data?.metadata?.fm
</script>

<div class="m-10">
  {#if metadata?.topics || metadata?.date}
    <div class="p-5 rounded-xl bg-base-300 flex flex-row text-xl font-semibold">
      {#if metadata?.topics}
        <h1 class="w-full">Topics: {metadata?.topics}</h1>
      {/if}
      {#if metadata?.date}
        <h1 class="w-full text-right">Date: {metadata?. date}</h1>
      {/if}
    </div>
  {/if}
  <br class="p-5">
  <div class="markdown-body p-5 rounded-xl bg-base-300">
    {@html content}
  </div>
</div>
