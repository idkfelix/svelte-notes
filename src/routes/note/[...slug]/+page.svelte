<script lang="ts">
  import './markdown.css'
  export let data: any = {
      content: '' };
</script>

<div class="m-10">
  <div class="markdown-body p-5 rounded-xl bg-base-300">
    {@html data.content?.code}
  </div>
</div>
