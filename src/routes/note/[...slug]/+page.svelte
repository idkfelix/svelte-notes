<script lang="ts">
  import './markdown.css'
  export let data: any = {
      content: '' };
</script>

<svelte:head>
  <title>{data.content?.data.fm.title}</title>
</svelte:head>

<div class="markdown-body p-5 m-10 rounded-xl">
  {@html data.content?.code}
</div>
