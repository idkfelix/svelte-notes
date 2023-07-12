<script lang="ts">
  import './markdown.css'
  export let data: any = {
      content: '' };
</script>

<div class="markdown-body p-5 m-10 rounded-xl">
  {@html data.content?.code}
</div>
