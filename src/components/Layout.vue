<template>
    <a-layout>
        <a-layout-header class="header">
            <div class="logo" />
            <!-- <a-menu v-model:selectedKeys="selectedKeys1" theme="dark" mode="horizontal" :style="{ lineHeight: '64px' }">
                <a-menu-item key="1">nav 1</a-menu-item>
                <a-menu-item key="2">nav 2</a-menu-item>
                <a-menu-item key="3">nav 3</a-menu-item>
            </a-menu> -->
        </a-layout-header>
        <a-layout>
            <a-layout-sider width="200" style="background: #fff">
                <a-menu mode="inline" :style="{ height: '100%', borderRight: 0 }" v-model:openKeys="openKeys"
                    v-model:selectedKeys="selectedKeys" @click="handleClick">
                    <a-sub-menu key="status">
                        <template #title>
                            <span>
                                <user-outlined />
                                状态
                            </span>
                        </template>
                        <a-menu-item key="overview">概览</a-menu-item>
                    </a-sub-menu>
                    <a-sub-menu key="sub3">
                        <template #title>
                            <span>
                                <notification-outlined />
                                服务
                            </span>
                        </template>
                        <a-menu-item key="9">zpan</a-menu-item>
                        <a-menu-item key="10">rslocal</a-menu-item>
                        <a-menu-item key="11">rsshub</a-menu-item>
                        <a-menu-item key="12">uploader</a-menu-item>
                        <a-menu-item key="11">京东签到</a-menu-item>
                    </a-sub-menu>
                    <a-sub-menu key="system">
                        <template #title>
                            <span>
                                <laptop-outlined />
                                系统
                            </span>
                        </template>
                        <a-menu-item key="appstore">软件商店</a-menu-item>
                        <a-menu-item key="components">组件管理</a-menu-item>
                        <a-menu-item key="gateways">网关管理</a-menu-item>
                        <a-menu-item key="storage">存储管理</a-menu-item>
                        <a-menu-item key="config">配置管理</a-menu-item>
                    </a-sub-menu>
                </a-menu>
            </a-layout-sider>
            <a-layout style="padding: 0 24px 24px">
                <a-breadcrumb style="margin: 16px 0">
                    <a-breadcrumb-item>Home</a-breadcrumb-item>
                    <a-breadcrumb-item>List</a-breadcrumb-item>
                    <a-breadcrumb-item>App</a-breadcrumb-item>
                </a-breadcrumb>
                <a-layout-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
                    <slot></slot>
                </a-layout-content>
            </a-layout>
        </a-layout>
    </a-layout>
</template>
<script>
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons-vue';
import { defineComponent, onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
export default defineComponent({
    components: {
        UserOutlined,
        LaptopOutlined,
        NotificationOutlined,
    },

    setup() {
        const route = useRoute()
        const router = useRouter()
        const openKeys = ref([]);
        const selectedKeys = ref([])
        const handleClick = e => {
            console.log(e.keyPath)
            openKeys.value = e.keyPath;
            router.push(`/${e.keyPath.join('/')}`)
        };

        watch(route, (to) => {
            let keyPath = route.path.split('/').slice(1)
            console.log(keyPath, 222)
            selectedKeys.value = [keyPath.at(-1)]
        })

        onMounted(() => {
            let keyPath = route.path.split('/').slice(1)
            console.log(keyPath, 222)
            selectedKeys.value = [keyPath.at(-1)]
            openKeys.value = [keyPath.at(0)]
        })

        return {
            selectedKeys,
            openKeys,
            handleClick,
        };
    },

});
</script>
<style>
#components-layout-demo-top-side-2 .logo {
    float: left;
    width: 120px;
    height: 31px;
    margin: 16px 24px 16px 0;
    background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side-2 .logo {
    float: right;
    margin: 16px 0 16px 24px;
}

.site-layout-background {
    background: #fff;
}
</style>