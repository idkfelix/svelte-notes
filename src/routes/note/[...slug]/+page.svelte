<script lang="ts">
  import './markdown.css'
  export let data: any = {
      content: '' };
</script>

<div class="markdown-body">
  {@html data.content?.code}
</div>
