<script lang="ts">
import { _ } from 'svelte-i18n';
import toast from "svelte-french-toast";
import Table from '$lib/components/common/Table.svelte';
import Modal from '$lib/components/common/Modal.svelte';
import Upload from '$lib/components/common/Upload.svelte';
import { models } from "$lib/stores";
import "./Library.css";
import { onMount } from 'svelte';
let columns = [
  {
    name: $_("SettingModal.Library.TableThTitle"),
    key: "title",
    width: "10%"
  },
  {
    name: $_("SettingModal.Library.TableThModel"),
    key: "model",
    width: "10%"
  },
  {
    name: $_("SettingModal.Library.TableThCreateTime"),
    key: "createTime",
    width: "10%"
  },
  {
      name: $_("SettingModal.Library.TableThOperation"),
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
let loading = false
let pageInfo = {
  current: 1,
  size: 10,
  total: 0
}
/**
 * @description 编辑知识库
 */
function handleEdit() {
  // TODO 编辑知识库
}

/**
 * @description 删除知识库
 */
 function handleDelete() {
  // TODO 删除知识库
}
/**
 * @description 获取知识库列表
 */
function getData() {
  // TODO 获取知识库列表
  loading = true
  setTimeout(() =>{
    loading = false
    tableData = [
      {
        title: "知识库1",
        model: "bge-large:latest",
        createTime: "2025-02-20 22:00"
      },
      {
        title: "知识库2",
        model: "deepseek-r1:32b",
        createTime: "2025-02-20 21:00"
      }
    ]
  }, 1500)
}

/**
 * @description 添加新知识
 */
let showModal = false;
let formData = {
  title: "",
  model: "",  // 嵌入模型
  fileList: [
    {
      filename: '如何零成本云端部署deepseek.pdf',
      fileurl: 'https://www.baidu.com',
      status: 'finished', // 状态 finished 上传完成, fail 上传失败, pending 上传中
    },
    {
      filename: '支持DeepSeek-R1的国产云平台及应用.xlsx',
      fileurl: 'https://www.baidu.com',
      status: 'pending', // 状态 finished 上传完成, fail 上传失败, pending 上传中
    },
    {
      filename: '啦拉拉.pdf',
      fileurl: 'https://www.sina.com',
      status: 'fail', // 状态 finished 上传完成, fail 上传失败, pending 上传中
    },
    
  ], // 文件
  directory: [],  // 文件目录
  url: [],  // 网址
  siteMap: '',  // 站点地图
  note: []  // 笔记
}
function addLibraryHandler() {
  // TODO 添加新知识
  showModal = true;
  toast.success('添加新知识');
}
/**
 * @description 提交知识库表单
 */
function handleSubmit() {
  // TODO 提交知识库表单
  showModal = false;
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
          addLibraryHandler();
        }}
      >
        {$_("SettingModal.Library.Add")}
      </button>
      <div class=" mb-1 text-sm font-medium">
        <Table
          bind:columns={columns}
          bind:tableData={tableData}
          bind:loading={loading}
          on:edit={handleEdit}
          on:delete={handleDelete}
        >
        </Table>
      </div>
    </div>
  </div>
</div>
<!--  -->
<Modal bind:show={showModal}>
  <div>
		<div class=" flex justify-between dark:text-gray-300 px-5 py-4">
			<div class=" text-lg font-medium self-center">{$_("SettingModal.Library.Title")}</div>
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
              placeholder="{$_("SettingModal.Library.Modal.TitlePlaceholder")}"
              bind:value={formData.title}
            />
          </div>
        </div>
        <div class="prompt-form-item">
          <div class="prompt-form-item-label my-2 text-sm font-medium">{$_("SettingModal.Library.Modal.Model")}</div>
          <div class="prompt-form-item-value">
            <select
                class="w-full rounded py-2 px-4 text-sm dark:text-gray-300 dark:bg-gray-800 outline-none"
                bind:value={formData.model}
                placeholder="{$_("SettingModal.SelectModel")}"
              >
                {#each $models.filter((m) => m.size != null) as model}
                  <option value={model.name} class="bg-gray-100 dark:bg-gray-700"
                    >{model.name + " (" + (model.size / 1024 ** 3).toFixed(1) + " GB)"}</option
                  >
                {/each}
              </select>
          </div>
        </div>
        <div class="prompt-form-item">
          <div class="prompt-form-item-label my-2 text-sm font-medium">{$_("SettingModal.Library.Modal.Upload")}</div>
          <div class="prompt-form-item-value">
            <Upload bind:fileList={formData.fileList}/>
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