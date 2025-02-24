<script lang="ts">
  import { onMount } from 'svelte';
  import { _ } from 'svelte-i18n'
  import toast from 'svelte-french-toast';
  export let tips = $_("Common.Upload.Tips")
  export let accept = [
  ".text",".md",
  ".html", ".pdf",
  ".doc",".docx",
  ".ppt", ".pptx",
  ".xls", ".xlsx",
  ".epub"]
  export let fileList = []
  /**
   * @description 文件下载/文件预览
   */
  function handleFileClick(file) {
    // TODO 文件下载/文件预览
    window.open(file.fileurl)
  }
  /**
   * @description 文件删除
   */
  function handleFileDel(file, ind: Number) {
    // TODO 文件删除
    toast.error('删除失败' + ind)
  }


</script>

<div class="upload">
  <div class="upload-content border-2 border-dotted p-4 r-4 text-center cursor-pointer relative">
    <div class="font-bold text-base">{$_("Common.Upload.Title")}</div>
    <div class="font-medium text-xs text-gray-400">
      {tips}
    </div>
    <input
      type="file"
      class="w-full h-full z-10 opacity-0 absolute top-0 left-0"
      accept={accept.join(',')}
    />
  </div>
  <div class="file-list mt-4">
    {#each fileList as file, ind}
      <div class="file flex justify-between my-1">
        <div class="filename text-sm cursor-pointer" on:click={() => handleFileClick(file)}>{file.filename}</div>
        <div class="operation text-sm cursor-pointer text-red-500" on:click={() => handleFileDel(file, ind)}>删除</div>
      </div>
    {/each}
  </div>
</div>