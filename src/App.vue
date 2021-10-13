<template>
<NConfigProvider :theme="theme">
<NLayout>
  <NLayoutHeader>Head Layout
    <NSpace>
          <n-button @click="theme = darkTheme">Dark</n-button>
          <n-button @click="theme = null">Light</n-button>
    </NSpace>
    <topbar/>
  </NLayoutHeader>

  <NLayout has-sider>
    <NLayoutSider
        collapse-mode="width"
        :collapsed-width="30"
        :width="240"
        :show-collapsed-content="false"
        show-trigger="arrow-circle"
        content-style="padding: 24px;"
        bordered
    >Sidebar
    </NLayoutSider>

    <NLayoutContent content-style="padding: 24px;">Contents Layout here <br/>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      <router-view />
    </NLayoutContent>

  </NLayout>

  <NLayoutFooter>Footer Layout</NLayoutFooter>

</NLayout>
</NConfigProvider>

</template>

<script>
import { defineComponent,ref } from 'vue'

import { NConfigProvider,darkTheme, NButton,NSpace } from 'naive-ui'
import { NLayoutHeader,NLayoutFooter,NLayoutSider,NLayout,NLayoutContent } from 'naive-ui'

import topbar from './views/Topbar.vue'
export default defineComponent({
  components: {
    topbar,
    NButton,
    // NCard,
    NConfigProvider,
    NSpace,
    NLayoutHeader,NLayoutFooter,NLayoutSider,NLayout,NLayoutContent
    },
  setup () {
    return {
      darkTheme,
      theme: ref(null)
    }
  }
})
</script>

<style>
.n-layout-header,
.n-layout-footer {
  background: rgba(128, 128, 128, 0.2);
  padding: 24px;
}

.n-layout-sider {
  background: rgba(128, 128, 128, 0.3);
}

.n-layout-content {
  background: rgba(128, 128, 128, 0.4);
}
</style>
