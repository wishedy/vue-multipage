<template>
<div id="app">
	<section class="test">1111</section>
	测试页面{{msg}}
</div>
</template>

<script>

export default {
  data () {
    return {
    	msg: 'index'
    }
  },
  // 实例初始化最之前，无法获取到data里的数据
  beforeCreate () {
  },
  // 在挂载开始之前被调用
  beforeMount () {

  },
  // 已成功挂载，相当ready()
  mounted () {

  },
  // 相关操作事件
  methods: {

  }
}
</script>
<style lang="scss" scoped>
	.test{
		font-size: 20px;
	}
</style>
