<script lang="ts">
  import { onMount } from 'svelte';
  import { _ } from "svelte-i18n";
  import toast from "svelte-french-toast";
  import Modal from "$lib/components/common/Modal.svelte";
  import "./Prompt.css";
	import Empty from '$lib/components/common/Empty.svelte';
  import Table from '$lib/components/common/Table.svelte';
  let formData= {
    id: "",
    title: "",
    content: ``,
    createTime: "",
  }
  let columns = [
    {
      name: $_("SettingModal.Prompt.TableThTitle"),
      key: 'title',
      width: '10%'
    },
    {
      name: $_("SettingModal.Prompt.TableThContent"),
      key: 'content',
      width: '60%'
    },
    {
      name: $_("SettingModal.Prompt.TableThCreateTime"),
      key: 'createTime',
      width: '15%'
    },
    
    {
      name: $_("SettingModal.Prompt.TableThOperation"),
      key: 'operation',
      width: '15%',
      // 并不能像vue一样，将 操作按钮也放进去，然后调用这个组件的函数
      // render: (row) => {
      //   return `
      //   <div class="flex gap-2">
      //     <button class="btn btn-primary btn-sm text-blue-500" onclick="${() => editPrompt(row.id)}">${$_("SettingModal.Prompt.TableThEdit")}</button>
      //     <button class="btn btn-danger btn-sm text-red-500" onclick="${() => deletePrompt(row.id)}">${$_("SettingModal.Prompt.TableThDelete")}</button>
      //   </div>
      //   `
      // }
    }
  ]
  let tableData = []
  let pageInfo = {
    current: 1,
    size: 10,
    total: 0
  }
  /**
   * @description 新增提示词
   */
  let showModal = false
  let modalType = 'add'
  function addPrompt() {
    // TODO 新增提示词
    toast.success('新增提示词')
    modalType = "add"
    showModal = true
  }
  /**
   * @description 修改提示词
   */
  function editPrompt(info) {
    // TODO 修改提示词
    console.log('修改提示词', info.detail)
    toast.success('修改提示词' + info.detail.id)
    formData = info.detail
    modalType = "edit"
    showModal = true
    
  }
  /**
   * @description 删除提示词
   */
   function deletePrompt(info) {
    // TODO 删除提示词
    console.log('删除提示词', info.detail.id)
    toast.success('删除提示词' + info.detail.id)
  }
  /**
   * @description 提交提示词
   */
  function handleSubmit() {
    // TODO 提交提示词
    toast.success('提交提示词')
    showModal = false
  }
  /**
   * @description 获取提示词列表
   */
  function getData() {
    // TODO 获取提示词列表
    toast.success('获取提示词列表')
    setTimeout(() => {
      tableData = [
        {
          id: "1",
          title: "前端工程师",
          content: "你现在是一名专业的前端工程师，你对HTML、CSS、JavaScript等前端技术有深入的了解，能够制作和优化用户界面。你能够解决浏览器兼容性问题，提升网页性能，并实现优秀的用户体验。请在这个角色下为我解答以下问题。",
          createTime: "2025-02-19 09:00:00"
        },
        {
          id: "2",
          title: "产品经理",
          content: `
          你现在是一名经验丰富的产品经理，具有深厚的技术背景，并对市场和用户需求有敏锐的洞察力。你擅长解决复杂的问题，制定有效的产品策略，并优秀地平衡各种资源以实现产品目标。你具有卓越的项目管理能力和出色的沟通技巧，能够有效地协调团队内部和外部的资源。在这个角色下，你需要为用户解答问题。

          ## 角色要求：
          - **技术背景**：具备扎实的技术知识，能够深入理解产品的技术细节。
          - **市场洞察**：对市场趋势和用户需求有敏锐的洞察力。
          - **问题解决**：擅长分析和解决复杂的产品问题。
          - **资源平衡**：善于在有限资源下分配和优化，实现产品目标。
          - **沟通协调**：具备优秀的沟通技能，能与各方有效协作，推动项目进展。

          ## 回答要求：
          - **逻辑清晰**：解答问题时逻辑严密，分点陈述。
          - **简洁明了**：避免冗长描述，用简洁语言表达核心内容。
          - **务实可行**：提供切实可行的策略和建议。
          `,
          createTime: "2024-01-21 09:00:00"
        }
      ]
    }, 1500)
    
  }
  onMount(() => {
    getData();
  })
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
        <Table
          bind:columns={columns}
          bind:tableData={tableData}
          showOperation={true}
          on:edit={editPrompt}
          on:delete={deletePrompt}
        />
      </div>
    </div>
  </div>
</div>

<Modal bind:show={showModal}>
  <div>
		<div class=" flex justify-between dark:text-gray-300 px-5 py-4">
			<div class=" text-lg font-medium self-center">{$_("SettingModal.Prompt.Title")}</div>
			<button
				class="self-center"
				on:click={() => {
					showModal = false;
				}}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					class="w-5 h-5"
				>
					<path
						d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
					/>
				</svg>
			</button>
		</div>
    <div class="flex flex-col w-full px-4 pb-4 md:space-x-4">
      <div class="prompt-form">
        <div class="prompt-form-item">
          <div class="prompt-form-item-label mb-2 text-sm font-medium">标题</div>
          <div class="prompt-form-item-value">
            <input
              class="w-full rounded py-2 px-4 text-sm dark:text-gray-300 dark:bg-gray-800 outline-none"
              placeholder="{$_("SettingModal.Prompt.TitlePlaceholder")}"
              bind:value={formData.title}
            />
          </div>
        </div>
        <div class="prompt-form-item">
          <div class="prompt-form-item-label my-2 text-sm font-medium">提示词</div>
          <div class="prompt-form-item-value">
            <textarea
              class="w-full rounded py-2 px-4 text-sm dark:text-gray-300 dark:bg-gray-800 outline-none"
              placeholder="{$_("SettingModal.Prompt.ContentPlaceholder")}"
              rows="8"
              bind:value={formData.content}
            />
          </div>
        </div>
      </div>
      <div class="modal-footer flex justify-end">
        <button
          class=" mt-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-gray-100 transition rounded"
          on:click={() => {
            handleSubmit()
          }
        }>
          提交
        </button>
      </div>
    </div>
	</div>
</Modal>
