<template>
<div>
  <n-layout-header bordered class="nav" :style="style">
this is top
  </n-layout-header>
</div>
</template>

<script>
import { defineComponent } from 'vue'
import { NLayoutHeader } from 'naive-ui'

export default defineComponent({
  components: {
    NLayoutHeader
    },
  setup () {
    return {
    }
  }
})
</script>

<style scoped>
.nav {
  display: grid;
  grid-template-rows: calc(var(--header-height) - 1px);
  align-items: center;
  padding: 0 var(--side-padding);
}

.ui-logo {
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 18px;
}

.ui-logo > img {
  margin-right: 12px;
  height: 32px;
  width: 32px;
}

.nav-menu {
  padding-left: 36px;
}

.nav-picker {
  margin-right: 24px;
}

.nav-picker:last-child {
  margin-right: 0;
}

.nav-end {
  display: flex;
  align-items: center;
}
</style>
