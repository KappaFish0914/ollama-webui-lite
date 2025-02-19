<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { _ } from 'svelte-i18n';
  import Empty from '$lib/components/common/Empty.svelte';
  import './Table.css';
  let dispatch = createEventDispatcher()
  // 列信息
  export let columns = []
  // 数据信息
  export let tableData = []
  // 显示操作按钮
  export let showOperation = false

  export let loading = false
  
  function handleEdit(info) {
    dispatch('edit', info)
  }

  function handleDelete(info) {
    dispatch('delete', info)
  }
</script>

<div class="table w-full">
  {#if tableData.length === 0}
    <table class="table border-2">
      <thead>
        {#each columns as column}
        <th
          class="table-th border-r-2 w-[10%] py-1 px-2"
          scope="col"
          style="width:{column.width};"
        >
          {column.name}
        </th>
        {/each}
      </thead>
    </table>
    <div class="border-2 border-t-0 text-center flex justify-center">
      <Empty description="暂无数据"/>
    </div>
  {:else}
  <table>
    <thead>
      {#each columns as column}
      <th
        class="table-th border-r-2 w-[10%] py-1 px-2"
        scope="col"
        style="width:{column.width};"
      >
        {column.name}
      </th>
      {/each}
    </thead>
    <tbody>
      {#each tableData as row, i}
      <tr class="table-tr { i === (tableData.length-1) ? '' : 'border-b-2'}">
        {#each columns as column}
        {#if column.key !== 'operation'}
        <td class="table-td border-r-2 py-1 px-2">
          {row[column.key]}
        </td>
        {:else}
        <td class="table-td operation border-r-2 py-1 px-2">
          <div class="flex justify-center items-center">
            <div class="flex gap-2">
              <button class="btn btn-primary btn-sm text-blue-500" on:click={() => handleEdit(row)}>{$_("SettingModal.Prompt.TableThEdit")}</button>
              <button class="btn btn-danger btn-sm text-red-500" on:click="{() => handleDelete(row)}">{$_("SettingModal.Prompt.TableThDelete")}</button>
            </div>
          </div>
        </td>
        {/if}
        {/each}
      </tr>
      {/each}
    </tbody>
  </table>
  {/if}  
</div>

