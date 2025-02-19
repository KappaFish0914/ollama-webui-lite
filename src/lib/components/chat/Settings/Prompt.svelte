<script lang="ts">
  import { _ } from "svelte-i18n";
  import toast from "svelte-french-toast";
  import "./Prompt.css";
  /**
   * @description 新增提示词
   */
  function addPrompt() {
    // TODO 新增提示词
    toast.success('新增提示词')

  }
</script>

<div class="flex flex-col h-full justify-between space-y-3 text-sm mb-6 library">
  <div class="space-y-3">
    <div>
      <button
        class="py-2 px-4 bg-emerald-600 hover:bg-emerald-700 text-gray-100 transition rounded"
        on:click={() => {
          addPrompt();
        }}
      >
        {$_("SettingModal.Prompt.Add")}
      </button>
      <div class=" mb-1 text-sm font-medium">
        <table class="prompt-table">
          <thead>
            <tr>
              <th class="prompt-table-th" scope="col">{$_("SettingModal.Prompt.TableThTitle")}</th>
              <th class="prompt-table-th" scope="col">{$_("SettingModal.Prompt.TableThContent")}</th>
              <th class="prompt-table-th" scope="col">{$_("SettingModal.Prompt.TableThCreateTime")}</th>
              <th class="prompt-table-th" scope="col">{$_("SettingModal.Prompt.TableThOperation")}</th>
            </tr>
          </thead>
          <tbody>
            
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
