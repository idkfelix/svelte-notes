<script lang="ts">
  import './markdown.css'
  export let data = {
      content: ''
  };
</script>

<div class="markdown-body">
  {@html data.content}
</div>
