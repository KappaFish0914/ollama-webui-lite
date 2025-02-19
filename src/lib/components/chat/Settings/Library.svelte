<script lang="ts">
import { _ } from 'svelte-i18n';
import toast from "svelte-french-toast";
import "./Library.css";
/**
 * @description 添加新知识
 */
  const addLibraryHandler = async () => {
    // TODO 添加新知识
    toast.success('添加新知识');
  }

</script>

<div class="flex flex-col h-full justify-between space-y-3 text-sm mb-6 library">
  <div class="space-y-3">
    <div>
      <button
        class="py-2 px-4 bg-emerald-600 hover:bg-emerald-700 text-gray-100 transition rounded"
        on:click={() => {
          addLibraryHandler();
        }}
      >
        {$_("SettingModal.Library.Add")}
      </button>
      <div class=" mb-1 text-sm font-medium">
        <table class="library-table">
          <thead>
            <tr>
              <th class="library-table-th" scope="col">{$_("SettingModal.Library.TableThTitle")}</th>
              <th class="library-table-th" scope="col">{$_("SettingModal.Library.TableThStatus")}</th>
              <th class="library-table-th" scope="col">{$_("SettingModal.Library.TableThModel")}</th>
              <th class="library-table-th" scope="col">{$_("SettingModal.Library.TableThCreateTime")}</th>
              <th class="library-table-th" scope="col">{$_("SettingModal.Library.TableThOperation")}</th>
            </tr>
          </thead>
          <tbody>
            
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>