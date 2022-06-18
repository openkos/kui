<template>
    <a-table :dataSource="dataSource" :columns="columns">
        <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'name'">
                <a>
                    {{ record.name }}
                </a>
            </template>
            <template v-else-if="column.key === 'action'">
                <span>
                    <a>安装</a>
                </span>
            </template>
        </template>
    </a-table>
</template>
<script>
import { AppServiceApi, Configuration } from '../../libs/apiclient';
export default {
    setup() {
        const cfg = new Configuration()
        cfg.basePath = "http://localhost:3000/api"
        const appc = new AppServiceApi(cfg);
        appc.appServiceList().then(ret => {
            console.log(ret);
        })

        return {
            dataSource: [],
            columns: [
                {
                    title: '名称',
                    dataIndex: 'name',
                    key: 'name',
                },
                {
                    title: '描述',
                    dataIndex: 'intro',
                    key: 'intro',
                },
                {
                    title: '版本',
                    dataIndex: 'version',
                    key: 'version',
                },
                {
                    title: '操作',
                    key: 'action',
                },
            ],
        };
    },
};
</script>