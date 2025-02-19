<script>
  import toast from "svelte-french-toast";
  import { _ } from 'svelte-i18n';
  import Switch from "$lib/components/common/Switch.svelte";
  
  let state = false
  let engineInfo = ''
  let webSearchEngines = [		
		'google',
		'baidu',
		'bing'
	];

  function handleStateChange() {
    engineInfo = ''
  }
  
  function saveSettings() {
    toast.success('保存')
  }
</script>

<div class="flex flex-col space-y-3 w-full">
  <div>
    <div class=" mb-1 text-sm font-medium">{$_("SettingModal.Network.Title")}</div>
  </div>
  <div class="flex flex-row justify-between w-full">
    <div class="text-sm font-medium">{$_("SettingModal.Network.Enable")}</div>
    <div>
      <Switch bind:state={state} on:change={() => {handleStateChange()}}/>
    </div>
  </div>
  {#if state}
  <div class="flex flex-row justify-between w-full">
    <div class="text-sm font-medium">
      {$_("SettingModal.Network.Engine")}
    </div>
    <div>
      <select
        class="dark:bg-gray-900 w-fit pr-8 rounded-sm px-2 p-1 text-xs bg-transparent outline-hidden text-right"
        bind:value={engineInfo}
        placeholder={$_('SettingModal.Network.Select a engine')}
        required
      >
        <option disabled selected value="">{$_('SettingModal.Network.Select a engine')}</option>
        {#each webSearchEngines as engine}
          <option value={engine}>{engine}</option>
        {/each}
      </select>
    </div>
  </div>
  {/if}
  <div class="flex justify-end pt-3 text-sm font-medium">
    <button
      class=" px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-gray-100 transition rounded"
      on:click={() => {
        saveSettings()
      }}
    >
      {$_("SettingModal.Save")}
    </button>
  </div>
  
</div>