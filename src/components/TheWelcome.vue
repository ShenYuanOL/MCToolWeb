<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>游戏数据</template>
    内有大量基本游戏数据,可以在这找到任何关于Minecraft基岩版的内容
  </WelcomeItem>
  
  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>辅助工具</template>
    内置各种实用小工具
  </WelcomeItem>
  
  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>技术支持</template>
    提供一些有关游戏开发的文章与一些关键文档查询
  </WelcomeItem>
  
  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>完备社区</template>
    可以在这里畅所欲言！
  </WelcomeItem>
  
  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>长期支持</template>
    致力于打造优秀的 Minecraft 基岩版社区
  </WelcomeItem>
</template>


