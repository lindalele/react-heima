<template>
  <div class="app-container">
    <!-- form表单 -->
    <form class="form-inline">
      <div class="input-group mb-2">
        <div class="input-group-prepend">
          <div class="input-group-text">人员名称</div>
        </div>
        <!-- 输入框 -->
        <input v-model="username" type="text" class="form-control">
      </div>
      <!-- 按钮 -->
      <button @click.prevent="addFn" type="submit" class="btn btn-primary mb-2">添加</button>
    </form>

    <!-- 表格区域 -->
    <table class="table table-bordered table-hover mt-2">
      <thead>
        <tr>
          <th>#</th>
          <th>人员名称</th>
          <th>账号状态</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in list" :key="item.id">
          <td>{{ index + 1}}</td>
          <td>{{ item.name }}</td>
          <td>
            <!-- 开关 -->
            <div class="custom-control custom-switch">
              <input type="checkbox" class="custom-control-input" :id="'switch' + item.id" v-model="item.status">
              <label class="custom-control-label" :for="'switch' + item.id">
                {{ item.status ? '已启用' : '已禁用' }}
              </label>
            </div>
          </td>
          <td>
            <a href="javascript:;" @click="delFn(item.id)">删除</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  setup () {
    const state = reactive({
      list: [
        { id: 1, name: '张飞', status: true },
        { id: 2, name: '关羽', status: false },
        { id: 3, name: '马超', status: true }
      ],
      username: ''
    })
    const delFn = (id) => {
      state.list = state.list.filter(item => item.id !== id)
    }
    const addFn = () => {
      if (state.username.trim() === '') return
      state.list.push({
        id: +new Date(),
        name: state.username,
        state: false
      })
      state.username = ''
    }

    return {
      ...toRefs(state),
      delFn,
      addFn
    }
  }
}
</script>

<style>
.app-container {
  padding: 20px;
}
.app-container .input-group {
  margin-right: 10px;
}
</style>