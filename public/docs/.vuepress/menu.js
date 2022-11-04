module.exports = {
  title: '开发者中心', // 设置网站标题
  description: 'Just playing around',
  locales: {
    'zh': {
      sidebar: [
        {
          title: '首页',
          path: '/homepage/',
        },
        {
          title: '平台介绍',

          children: [
            { title: '平台概述', path: '/introduction/page-01' },
            { title: '产品优势', path: '/introduction/page-02' },
            { title: '名词解析', path: '/introduction/page-03' },
            { title: '最新动态', path: '/introduction/page-04' },
          ],
        },
        {
          title: '快速入门',
          initialOpenGroupIndex: -1,
          children: [
            { title: '概述', path: '/quickStart/Overview' },
            { title: '平台注册', path: '/quickStart/register' },
            { title: '产品开发', path: '/quickStart/ProductDevelop' },
            { title: 'App应用开发', path: '/quickStart/App' },
            { title: 'SaaS应用开发', path: '/quickStart/Saas' },
          ],
        },
        {
          title: '设备开发',
          initialOpenGroupIndex: -1,
          children: [
            { title: '准备工作', path: '/deviceDevelop/preliminaries' },
            { title: '设备接入方案', path: '/deviceDevelop/AccessPlan'},
            {
              title: '2G/3G/4G/5G',

              children: [
                {
                  title: '快速接入指引',

                  children: [
                    {
                      title: '创建产品',
                      path: '/deviceDevelop/cellular/speediness/speediness-01',
                    },
                    {
                      title: '功能定义',
                      path: '/deviceDevelop/cellular/speediness/speediness-02',
                    },
                    {
                      title: 'AT接入方案',

                      children: [
                        {
                          title: 'AT指令说明',
                          path: '/deviceDevelop/cellular/speediness/AT/speediness-at-01',
                        },
                        {
                          title: '设备硬件配置',
                          path: '/deviceDevelop/cellular/speediness/AT/speediness-at-02',
                        },
                        {
                          title: '快速上云',
                          path: '/deviceDevelop/cellular/speediness/AT/speediness-at-03',
                        },
                        {
                          title: '数据业务交互',
                          path: '/deviceDevelop/cellular/speediness/AT/speediness-at-04',
                        },
                      ],
                    },
                    {
                      title: 'QuecOpen接入方案',

                      children: [
                        {
                          title: '开发环境配置',
                          path: '/deviceDevelop/cellular/speediness/QuecOpen/speediness-quecopen-01',
                        },
                        {
                          title: 'SDK说明',
                          path: '/deviceDevelop/cellular/speediness/QuecOpen/speediness-quecopen-02',
                        },
                        {
                          title: '程序编码',
                          path: '/deviceDevelop/cellular/speediness/QuecOpen/speediness-quecopen-03',
                        },
                        {
                          title: '效果呈现',
                          path: '/deviceDevelop/cellular/speediness/QuecOpen/speediness-quecopen-04',
                        },
                      ],
                    },
                    {
                      title: 'QuecPython接入方案',

                      children: [
                        {
                          title: '开发环境配置',
                          path: '/deviceDevelop/cellular/speediness/QuecPython/speediness-quecpython-01',
                        },
                        {
                          title: 'Python脚本编写',
                          path: '/deviceDevelop/cellular/speediness/QuecPython/speediness-quecpython-02',
                        },
                        {
                          title: '效果呈现',
                          path: '/deviceDevelop/cellular/speediness/QuecPython/speediness-quecpython-03',
                        },
                      ],
                    },
                  ],
                },
                {
                  title: 'AT指令接入方案',

                  children: [
                    {
                      title: 'AT指令',

                      children: [
                        {
                          title: 'AT指令格式',
                          path: '/deviceDevelop/cellular/AT/API/cellular-at-01',
                        },
                        {
                          title: 'AT指令概览',
                          path: '/deviceDevelop/cellular/AT/API/cellular-at-02',
                        },
                        {
                          title: '产品配置 相关指令',
                          path: '/deviceDevelop/cellular/AT/API/cellular-at-03',
                        },
                        {
                          title: '数据业务交互 相关指令',
                          path: '/deviceDevelop/cellular/AT/API/cellular-at-04',
                        },
                        {
                          title: 'OTA 相关指令',
                          path: '/deviceDevelop/cellular/AT/API/cellular-at-05',
                        },
                        {
                          title: 'GNSS&LBS&WiFi定位 相关指令',
                          path: '/deviceDevelop/cellular/AT/API/cellular-at-07',
                        },
                        {
                          title: '设备授权 相关指令',
                          path: '/deviceDevelop/cellular/AT/API/cellular-at-08',
                        },
                        {
                          title: '设备与平台交互 相关事件',
                          path: '/deviceDevelop/cellular/AT/API/cellular-at-09',
                        },
                      ],
                    },
                    {
                      title: '示例概览',

                      children: [
                        {
                          title: '产品配置及快速上云示例',
                          path: '/deviceDevelop/cellular/AT/example/cellular-at-example-01',
                        },
                        {
                          title: '物模型格式数据业务交互示例',
                          path: '/deviceDevelop/cellular/AT/example/cellular-at-example-02-1',
                        },
                        {
                          title: '透传格式数据业务交互示例',
                          path: '/deviceDevelop/cellular/AT/example/cellular-at-example-02-2',
                        },
                        {
                          title: 'FOTA示例',
                          path: '/deviceDevelop/cellular/AT/example/cellular-at-example-03-1',
                        },
                        {
                          title: 'SOTA示例',
                          path: '/deviceDevelop/cellular/AT/example/cellular-at-example-03-2',
                        },
                        {
                          title: 'GNSS&LBS&WiFi定位示例',
                          path: '/deviceDevelop/cellular/AT/example/cellular-at-example-04',
                        },
                      ],
                    },
                    {
                      title: '常见问题',
                      path: '/deviceDevelop/cellular/AT/cellular-at-F_Q',
                    },
                    {
                      title: '更新历史',
                      path: '/deviceDevelop/cellular/AT/changelog',
                    },
                  ],
                },
                {
                  title: 'QuecOpen接入方案',

                  children: [
                    {
                      title: 'API概览',

                      children: [
                        {
                          title: 'API概述',
                          path: '/deviceDevelop/cellular/QuecOpen/api/cellular-quecopen-api-01',
                        },
                        {
                          title: '产品配置 相关接口',
                          path: '/deviceDevelop/cellular/QuecOpen/api/cellular-quecopen-api-02',
                        },
                        {
                          title: '数据业务交互 相关接口',
                          path: '/deviceDevelop/cellular/QuecOpen/api/cellular-quecopen-api-03',
                        },
                        {
                          title: 'TTLV数据处理 相关接口',
                          path: '/deviceDevelop/cellular/QuecOpen/api/cellular-quecopen-api-04',
                        },
                        {
                          title: 'OTA 相关接口',
                          path: '/deviceDevelop/cellular/QuecOpen/api/cellular-quecopen-api-05',
                        },
                        {
                          title: 'GNSS&LBS&WiFi定位 相关接口',
                          path: '/deviceDevelop/cellular/QuecOpen/api/cellular-quecopen-api-07',
                        },
                        {
                          title: '设备授权 相关接口',
                          path: '/deviceDevelop/cellular/QuecOpen/api/cellular-quecopen-api-08',
                        },
                        {
                          title: 'DTU-Modbus 相关接口',
                          path: '/deviceDevelop/cellular/QuecOpen/api/cellular-quecopen-api-09',
                        },
                        {
                          title: '设备与平台交互 相关事件',
                          path: '/deviceDevelop/cellular/QuecOpen/api/cellular-quecopen-api-10',
                        },
                      ],
                    },
                    {
                      title: '示例概览',

                      children: [
                        {
                          title: '产品配置及快速上云示例',
                          path: '/deviceDevelop/cellular/QuecOpen/example/cellular-quecopen-example-01',
                        },
                        {
                          title: '物模型格式数据业务交互示例',
                          path: '/deviceDevelop/cellular/QuecOpen/example/data/cellular-quecopen-example-01',
                        },
                        {
                          title: '透传格式数据业务交互示例',
                          path: '/deviceDevelop/cellular/QuecOpen/example/data/cellular-quecopen-example-02',
                        },
                        {
                          title: 'FOTA升级示例',
                          path: '/deviceDevelop/cellular/QuecOpen/example/ota/cellular-quecopen-example-01',
                        },
                        {
                          title: 'SOTA升级示例',
                          path: '/deviceDevelop/cellular/QuecOpen/example/ota/cellular-quecopen-example-02',
                        },
                        {
                          title: 'GNSS&LBS&WiFi定位示例',
                          path: '/deviceDevelop/cellular/QuecOpen/example/cellular-quecopen-example-02',
                        },
                        {
                          title: 'DTU-Modbus示例',
                          path: '/deviceDevelop/cellular/QuecOpen/example/cellular-quecopen-example-03',
                        },
                      ],
                    },
                    {
                      title: '常见问题',
                      path: '/deviceDevelop/cellular/QuecOpen/cellular-quecopen-F_Q',
                    },
                    {
                      title: '更新历史',
                      path: '/deviceDevelop/cellular/QuecOpen/changelog',
                    },
                  ],
                },
                {
                  title: 'QuecPython接入方案',

                  children: [
                    {
                      title: 'API概览',

                      children: [
                        {
                          title: 'API概述',
                          path: '/deviceDevelop/cellular/QuecPython/api/cellular-quecpython-api-01',
                        },
                        {
                          title: '产品配置 相关接口',
                          path: '/deviceDevelop/cellular/QuecPython/api/cellular-quecpython-api-02',
                        },
                        {
                          title: '数据业务交互 相关接口',
                          path: '/deviceDevelop/cellular/QuecPython/api/cellular-quecpython-api-03',
                        },
                        {
                          title: 'OTA 相关接口',
                          path: '/deviceDevelop/cellular/QuecPython/api/cellular-quecpython-api-04',
                        },
                        {
                          title: 'GNSS&LBS&WiFi定位 相关接口',
                          path: '/deviceDevelop/cellular/QuecPython/api/cellular-quecpython-api-06',
                        },
                        {
                          title: '设备授权 相关接口',
                          path: '/deviceDevelop/cellular/QuecPython/api/cellular-quecpython-api-07',
                        },
                        {
                          title: 'DTU-Modbus 相关接口',
                          path: '/deviceDevelop/cellular/QuecPython/api/cellular-quecpython-api-08',
                        },
                        {
                          title: '设备与平台交互 相关事件',
                          path: '/deviceDevelop/cellular/QuecPython/api/cellular-quecpython-api-09',
                        },
                      ],
                    },
                    {
                      title: '示例概览',

                      children: [
                        {
                          title: '产品配置及快速上云示例',
                          path: '/deviceDevelop/cellular/QuecPython/example/cellular-quecpython-example-01',
                        },
                        {
                          title: '物模型格式数据业务交互示例',
                          path: '/deviceDevelop/cellular/QuecPython/example/data/cellular-quecpython-example-01',
                        },
                        {
                          title: '透传格式数据业务交互示例',
                          path: '/deviceDevelop/cellular/QuecPython/example/data/cellular-quecpython-example-02',
                        },
                        {
                          title: 'FOTA升级示例',
                          path: '/deviceDevelop/cellular/QuecPython/example/ota/cellular-quecpython-example-01',
                        },
                        {
                          title: 'SOTA升级示例',
                          path: '/deviceDevelop/cellular/QuecPython/example/ota/cellular-quecpython-example-02',
                        },
                        {
                          title: 'GNSS&LBS&WiFi定位示例',
                          path: '/deviceDevelop/cellular/QuecPython/example/cellular-quecpython-example-02',
                        },
                        {
                          title: 'DTU-Modbus示例',
                          path: '/deviceDevelop/cellular/QuecPython/example/cellular-quecpython-example-03',
                        },
                      ],
                    },
                    {
                      title: '常见问题',
                      path: '/deviceDevelop/cellular/QuecPython/cellular-quecpython-F_Q',
                    },
                    {
                      title: '更新历史',
                      path: '/deviceDevelop/cellular/QuecPython/changelog',
                    },
                  ],
                },
                {
                  title: 'DTU-Modbus接入方案',

                  children: [
                    {
                      title: 'DTU快速接入指引',


                      children: [
                        {
                          title: '平台侧操作',
                          path: '/deviceDevelop/cellular/DTU/speediness/cellular-dtu-01',
                        },
                        {
                          title: '配置工具操作',
                          path: '/deviceDevelop/cellular/DTU/speediness/cellular-dtu-02',
                        },
                        {
                          title: '设备侧操作',
                          path: '/deviceDevelop/cellular/DTU/speediness/cellular-dtu-03',
                        },
                        {
                          title: '效果呈现',
                          path: '/deviceDevelop/cellular/DTU/speediness/cellular-dtu-04',
                        },
                      ],
                    },
                    {
                      title: '常见问题',
                      path: '/deviceDevelop/cellular/DTU/cellular-dtu-01',
                    },
                  ],
                },
              ],
            },
            {
              title: 'WiFi',

              children: [
                {
                  title: '快速接入指引',

                  children: [
                    {
                      title: '创建产品',
                      path: '/deviceDevelop/wifi/speediness/speediness-01',
                    },
                    {
                      title: '功能定义',
                      path: '/deviceDevelop/wifi/speediness/speediness-02',
                    },
                    {
                      title: 'AT接入方案',

                      children: [
                        {
                          title: 'AT指令说明',
                          path: '/deviceDevelop/wifi/speediness/AT/speediness-at-01',
                        },
                        {
                          title: '设备硬件配置',
                          path: '/deviceDevelop/wifi/speediness/AT/speediness-at-02',
                        },
                        {
                          title: '快速上云',
                          path: '/deviceDevelop/wifi/speediness/AT/speediness-at-03',
                        },
                        {
                          title: '数据业务交互',
                          path: '/deviceDevelop/wifi/speediness/AT/speediness-at-04',
                        },
                      ],
                    },
                    {
                      title: 'QuecOpen接入方案',

                      children: [
                        {
                          title: '开发环境配置',
                          path: '/deviceDevelop/wifi/speediness/QuecOpen/speediness-quecopen-01',
                        },
                        {
                          title: 'SDK说明',
                          path: '/deviceDevelop/wifi/speediness/QuecOpen/speediness-quecopen-02',
                        },
                        {
                          title: '程序编码',
                          path: '/deviceDevelop/wifi/speediness/QuecOpen/speediness-quecopen-03',
                        },
                        {
                          title: '效果呈现',
                          path: '/deviceDevelop/wifi/speediness/QuecOpen/speediness-quecopen-04',
                        },
                      ],
                    },
                    {
                      title: 'QuecPython接入方案',

                      children: [
                        {
                          title: '开发环境配置',
                          path: '/deviceDevelop/wifi/speediness/QuecPython/speediness-quecpython-01',
                        },
                        {
                          title: 'Python脚本编写',
                          path: '/deviceDevelop/wifi/speediness/QuecPython/speediness-quecpython-02',
                        },
                        {
                          title: '效果呈现',
                          path: '/deviceDevelop/wifi/speediness/QuecPython/speediness-quecpython-03',
                        },
                      ],
                    },
                  ],
                },
                {
                  title: 'AT指令接入方案',

                  children: [
                    {
                      title: 'AT命令',

                      children: [
                        {
                          title: 'AT指令格式',
                          path: '/deviceDevelop/wifi/AT/API/wifi-at-01',
                        },
                        {
                          title: 'AT指令概览',
                          path: '/deviceDevelop/wifi/AT/API/wifi-at-02',
                        },
                        {
                          title: '产品配置 相关指令',
                          path: '/deviceDevelop/wifi/AT/API/wifi-at-03',
                        },
                        {
                          title: '数据业务交互 相关指令',
                          path: '/deviceDevelop/wifi/AT/API/wifi-at-04',
                        },
                        {
                          title: 'OTA 相关指令',
                          path: '/deviceDevelop/wifi/AT/API/wifi-at-05',
                        },
                        {
                          title: 'GNSS&LBS&WiFi定位 相关指令',
                          path: '/deviceDevelop/wifi/AT/API/wifi-at-07',
                        },
                        {
                          title: '设备授权 相关指令',
                          path: '/deviceDevelop/wifi/AT/API/wifi-at-08',
                        },
                        {
                          title: '设备与平台交互 相关事件',
                          path: '/deviceDevelop/wifi/AT/API/wifi-at-09',
                        },
                      ],
                    },
                    {
                      title: '示例概览',

                      children: [
                        {
                          title: '产品配置及一键上云示例',
                          path: '/deviceDevelop/wifi/AT/example/wifi-at-example-01',
                        },
                        {
                          title: '物模型格式数据交互示例',
                          path: '/deviceDevelop/wifi/AT/example/wifi-at-example-02-1',
                        },
                        {
                          title: '透传格式数据业务交互示例',
                          path: '/deviceDevelop/wifi/AT/example/wifi-at-example-02-2',
                        },
                        {
                          title: 'FOTA示例',
                          path: '/deviceDevelop/wifi/AT/example/wifi-at-example-03-1',
                        },
                        {
                          title: 'SOTA示例',
                          path: '/deviceDevelop/wifi/AT/example/wifi-at-example-03-2',
                        },
                        {
                          title: 'GNSS&LBS&WiFi示例',
                          path: '/deviceDevelop/wifi/AT/example/wifi-at-example-04',
                        },
                      ],
                    },
                    {
                      title: '常见问题',
                      path: '/deviceDevelop/wifi/AT/wifi-at-F_Q',
                    },
                    {
                      title: '更新历史',
                      path: '/deviceDevelop/wifi/AT/changelog',
                    },
                  ],
                },
                {
                  title: 'QuecOpen接入方案',

                  children: [
                    {
                      title: 'API概览',

                      children: [
                        {
                          title: 'API概述',
                          path: '/deviceDevelop/wifi/QuecOpen/api/wifi-quecopen-api-01',
                        },
                        {
                          title: '产品配置 相关接口',
                          path: '/deviceDevelop/wifi/QuecOpen/api/wifi-quecopen-api-02',
                        },
                        {
                          title: '数据业务交互 相关接口',
                          path: '/deviceDevelop/wifi/QuecOpen/api/wifi-quecopen-api-03',
                        },
                        {
                          title: 'TTLV数据处理 相关接口',
                          path: '/deviceDevelop/wifi/QuecOpen/api/wifi-quecopen-api-04',
                        },
                        {
                          title: 'OTA 相关接口',
                          path: '/deviceDevelop/wifi/QuecOpen/api/wifi-quecopen-api-05',
                        },
                        {
                          title: 'GNSS&LBS&WiFi定位 相关接口',
                          path: '/deviceDevelop/wifi/QuecOpen/api/wifi-quecopen-api-07',
                        },
                        {
                          title: '设备授权 相关接口',
                          path: '/deviceDevelop/wifi/QuecOpen/api/wifi-quecopen-api-08',
                        },
                        {
                          title: 'DTU-Modbus 相关接口',
                          path: '/deviceDevelop/wifi/QuecOpen/api/wifi-quecopen-api-09',
                        },
                        {
                          title: '设备与平台交互 相关事件',
                          path: '/deviceDevelop/wifi/QuecOpen/api/wifi-quecopen-api-10',
                        },
                      ],
                    },
                    {
                      title: '示例概览',

                      children: [
                        {
                          title: '产品配置及快速上云示例',
                          path: '/deviceDevelop/wifi/QuecOpen/example/wifi-quecopen-example-01',
                        },
                        {
                          title: '物模型格式数据业务交互示例',
                          path: '/deviceDevelop/wifi/QuecOpen/example/data/wifi-quecopen-example-01',
                        },
                        {
                          title: '透传格式数据业务交互示例',
                          path: '/deviceDevelop/wifi/QuecOpen/example/data/wifi-quecopen-example-02',
                        },
                        {
                          title: 'FOTA升级示例',
                          path: '/deviceDevelop/wifi/QuecOpen/example/ota/wifi-quecopen-example-01',
                        },
                        {
                          title: 'SOTA升级示例',
                          path: '/deviceDevelop/wifi/QuecOpen/example/ota/wifi-quecopen-example-02',
                        },
                        {
                          title: 'GNSS&LBS&WiFi定位示例',
                          path: '/deviceDevelop/wifi/QuecOpen/example/wifi-quecopen-example-02',
                        },
                        {
                          title: 'DTU-Modbus示例',
                          path: '/deviceDevelop/wifi/QuecOpen/example/wifi-quecopen-example-03',
                        },
                      ],
                    },
                    {
                      title: '常见问题',
                      path: '/deviceDevelop/wifi/QuecOpen/wifi-quecopen-F_Q',
                    },
                    {
                      title: '更新历史',
                      path: '/deviceDevelop/wifi/QuecOpen/changelog',
                    },
                  ],
                },
                {
                  title: 'QuecPython接入方案',

                  children: [
                    {
                      title: 'API概览',

                      children: [
                        {
                          title: 'API概述',
                          path: '/deviceDevelop/wifi/QuecPython/api/wifi-quecpython-api-01',
                        },
                        {
                          title: '产品配置 相关接口',
                          path: '/deviceDevelop/wifi/QuecPython/api/wifi-quecpython-api-02',
                        },
                        {
                          title: '数据业务交互 相关接口',
                          path: '/deviceDevelop/wifi/QuecPython/api/wifi-quecpython-api-03',
                        },
                        {
                          title: 'OTA 相关接口',
                          path: '/deviceDevelop/wifi/QuecPython/api/wifi-quecpython-api-04',
                        },
                        {
                          title: 'GNSS&LBS&WiFi定位 相关接口',
                          path: '/deviceDevelop/wifi/QuecPython/api/wifi-quecpython-api-06',
                        },
                        {
                          title: '设备授权 相关接口',
                          path: '/deviceDevelop/wifi/QuecPython/api/wifi-quecpython-api-07',
                        },
                        {
                          title: 'DTU-Modbus 相关接口',
                          path: '/deviceDevelop/wifi/QuecPython/api/wifi-quecpython-api-08',
                        },
                        {
                          title: '设备与平台交互 相关事件',
                          path: '/deviceDevelop/wifi/QuecPython/api/wifi-quecpython-api-09',
                        },
                      ],
                    },
                    {
                      title: '示例概览',

                      children: [
                        {
                          title: '产品配置及快速上云示例',
                          path: '/deviceDevelop/wifi/QuecPython/example/wifi-quecpython-example-01',
                        },
                        {
                          title: '物模型格式数据业务交互示例',
                          path: '/deviceDevelop/wifi/QuecPython/example/data/wifi-quecpython-example-01',
                        },
                        {
                          title: '透传格式数据业务交互示例',
                          path: '/deviceDevelop/wifi/QuecPython/example/data/wifi-quecpython-example-02',
                        },
                        {
                          title: 'FOTA升级示例',
                          path: '/deviceDevelop/wifi/QuecPython/example/ota/wifi-quecpython-example-01',
                        },
                        {
                          title: 'SOTA升级示例',
                          path: '/deviceDevelop/wifi/QuecPython/example/ota/wifi-quecpython-example-02',
                        },
                        {
                          title: 'GNSS&LBS&WiFi定位示例',
                          path: '/deviceDevelop/wifi/QuecPython/example/wifi-quecpython-example-02',
                        },
                        {
                          title: 'DTU-Modbus示例',
                          path: '/deviceDevelop/wifi/QuecPython/example/wifi-quecpython-example-03',
                        },
                      ],
                    },
                    {
                      title: '常见问题',
                      path: '/deviceDevelop/wifi/QuecPython/wifi-quecpython-F_Q',
                    },
                    {
                      title: '更新历史',
                      path: '/deviceDevelop/wifi/QuecPython/changelog',
                    },
                  ],
                },
              ],
            },
            {
              title: 'NB-IoT',

              children: [
                {
                  title: '快速接入指引(电信AEP版)',

                  children: [
                    {
                      title: '概述',
                      path: '/deviceDevelop/nb/speediness_ctwing/speediness-01',
                    },
                    {
                      title: '平台侧操作指引',
                      path: '/deviceDevelop/nb/speediness_ctwing/speediness-02',
                    },
                    {
                      title: 'AT指令接入方案',

                      children: [
                        {
                          title: '概述',
                          path: '/deviceDevelop/nb/speediness_ctwing/AT/speediness-AT-01',
                        },
                        {
                          title: '搭建开发环境',
                          path: '/deviceDevelop/nb/speediness_ctwing/AT/speediness-AT-02',
                        },
                        {
                          title: '快速上云',
                          path: '/deviceDevelop/nb/speediness_ctwing/AT/speediness-AT-03',
                        },
                        {
                          title: '数据业务交互',
                          path: '/deviceDevelop/nb/speediness_ctwing/AT/speediness-AT-04',
                        },
                      ],
                    },
                  ],
                },
                {
                  title: '快速接入指引(移动&联通版)',

                  children: [
                    {
                      title: '创建产品',
                      path: '/deviceDevelop/nb/speediness_cmcc&cucc/speediness-01',
                    },
                    {
                      title: '功能定义',
                      path: '/deviceDevelop/nb/speediness_cmcc&cucc/speediness-02',
                    },
                    {
                      title: 'AT指令接入方案',

                      children: [
                        {
                          title: 'AT指令说明',
                          path: '/deviceDevelop/nb/speediness_cmcc&cucc/AT/speediness-AT-01',
                        },
                        {
                          title: '搭建开发环境',
                          path: '/deviceDevelop/nb/speediness_cmcc&cucc/AT/speediness-AT-02',
                        },
                        {
                          title: '快速上云',
                          path: '/deviceDevelop/nb/speediness_cmcc&cucc/AT/speediness-AT-03',
                        },
                        {
                          title: '数据业务交互',
                          path: '/deviceDevelop/nb/speediness_cmcc&cucc/AT/speediness-AT-04',
                        },
                      ],
                    },
                    {
                      title: 'QuecOpen接入方案',

                      children: [
                        {
                          title: '开发环境配置',
                          path: '/deviceDevelop/nb/speediness_cmcc&cucc/QuecOpen/speediness-quecopen-01',
                        },
                        {
                          title: 'SDK说明',
                          path: '/deviceDevelop/nb/speediness_cmcc&cucc/QuecOpen/speediness-quecopen-02',
                        },
                        {
                          title: '程序编码',
                          path: '/deviceDevelop/nb/speediness_cmcc&cucc/QuecOpen/speediness-quecopen-03',
                        },
                        {
                          title: '效果呈现',
                          path: '/deviceDevelop/nb/speediness_cmcc&cucc/QuecOpen/speediness-quecopen-04',
                        },
                      ],
                    },
                    {
                      title: 'QuecPython接入方案',

                      children: [
                        {
                          title: '开发环境配置',
                          path: '/deviceDevelop/nb/speediness_cmcc&cucc/QuecPython/speediness-quecpython-01',
                        },
                        {
                          title: 'Python脚本编写',
                          path: '/deviceDevelop/nb/speediness_cmcc&cucc/QuecPython/speediness-quecpython-02',
                        },
                        {
                          title: '效果呈现',
                          path: '/deviceDevelop/nb/speediness_cmcc&cucc/QuecPython/speediness-quecpython-03',
                        },
                      ],
                    },
                  ],
                },
                {
                  title: 'AT指令接入方案',

                  children: [
                    {
                      title: 'AT指令',

                      children: [
                        {
                          title: 'AT指令格式',
                          path: '/deviceDevelop/nb/AT/API/nb-at-01',
                        },
                        {
                          title: 'AT指令概览',
                          path: '/deviceDevelop/nb/AT/API/nb-at-02',
                        },
                        {
                          title: '产品配置 相关指令',
                          path: '/deviceDevelop/nb/AT/API/nb-at-03',
                        },
                        {
                          title: '数据业务交互 相关指令',
                          path: '/deviceDevelop/nb/AT/API/nb-at-04',
                        },
                        {
                          title: 'OTA 相关指令',
                          path: '/deviceDevelop/nb/AT/API/nb-at-05',
                        },
                        {
                          title: 'GNSS&LBS定位 相关指令',
                          path: '/deviceDevelop/nb/AT/API/nb-at-06',
                        },
                        {
                          title: '设备与平台交互 相关事件',
                          path: '/deviceDevelop/nb/AT/API/nb-at-07',
                        },
                      ],
                    },
                    {
                      title: '示例概览',

                      children: [
                        {
                          title: '产品配置及快速上云示例',
                          path: '/deviceDevelop/nb/AT/example/nb-at-example-01',
                        },
                        {
                          title: '物模型格式数据业务交互示例',
                          path: '/deviceDevelop/nb/AT/example/nb-at-example-02-1',
                        },
                        {
                          title: '透传格式数据业务交互示例',
                          path: '/deviceDevelop/nb/AT/example/nb-at-example-02-2',
                        },
                        {
                          title: 'FOTA示例',
                          path: '/deviceDevelop/nb/AT/example/nb-at-example-03-1',
                        },
                        {
                          title: 'SOTA示例',
                          path: '/deviceDevelop/nb/AT/example/nb-at-example-03-2',
                        },
                        {
                          title: 'GNSS&LBS定位示例',
                          path: '/deviceDevelop/nb/AT/example/nb-at-example-04',
                        },
                      ],
                    },
                    {
                      title: '常见问题',
                      path: '/deviceDevelop/nb/AT/nb-at-F_Q',
                    },
                    {
                      title: '更新历史',
                      path: '/deviceDevelop/nb/AT/changelog',
                    },
                  ],
                },
                {
                  title: 'QuecOpen接入方案',

                  children: [
                    {
                      title: 'API概览',

                      children: [
                        {
                          title: 'API概述',
                          path: '/deviceDevelop/nb/QuecOpen/api/nb-quecopen-api-01',
                        },
                        {
                          title: '产品配置 相关接口',
                          path: '/deviceDevelop/nb/QuecOpen/api/nb-quecopen-api-02',
                        },
                        {
                          title: '数据业务交互 相关接口',
                          path: '/deviceDevelop/nb/QuecOpen/api/nb-quecopen-api-03',
                        },
                        {
                          title: 'TTLV数据处理 相关接口',
                          path: '/deviceDevelop/nb/QuecOpen/api/nb-quecopen-api-04',
                        },
                        {
                          title: 'OTA 相关接口',
                          path: '/deviceDevelop/nb/QuecOpen/api/nb-quecopen-api-05',
                        },
                        {
                          title: 'GNSS&LBS定位 相关接口',
                          path: '/deviceDevelop/nb/QuecOpen/api/nb-quecopen-api-06',
                        },
                        {
                          title: '设备与平台交互 相关事件',
                          path: '/deviceDevelop/nb/QuecOpen/api/nb-quecopen-api-07',
                        },
                      ],
                    },
                    {
                      title: '示例概览',

                      children: [
                        {
                          title: '产品配置及快速上云示例',
                          path: '/deviceDevelop/nb/QuecOpen/example/nb-quecopen-example-01',
                        },
                        {
                          title: '物模型格式数据业务交互示例',
                          path: '/deviceDevelop/nb/QuecOpen/example/data/nb-quecopen-example-01',
                        },
                        {
                          title: '透传格式数据业务交互示例',
                          path: '/deviceDevelop/nb/QuecOpen/example/data/nb-quecopen-example-02',
                        },
                        {
                          title: 'FOTA升级示例',
                          path: '/deviceDevelop/nb/QuecOpen/example/ota/nb-quecopen-example-01',
                        },
                        {
                          title: 'SOTA升级示例',
                          path: '/deviceDevelop/nb/QuecOpen/example/ota/nb-quecopen-example-02',
                        },
                        {
                          title: 'GNSS&LBS定位示例',
                          path: '/deviceDevelop/nb/QuecOpen/example/nb-quecopen-example-02',
                        },
                      ],
                    },
                    {
                      title: '常见问题',
                      path: '/deviceDevelop/nb/QuecOpen/nb-quecopen-F_Q',
                    },
                    {
                      title: '更新历史',
                      path: '/deviceDevelop/nb/QuecOpen/changelog',
                    },
                  ],
                },
                {
                  title: 'QuecPython接入方案',

                  children: [
                    {
                      title: 'API概览',

                      children: [
                        {
                          title: 'API概述',
                          path: '/deviceDevelop/nb/QuecPython/api/nb-quecpython-api-01',
                        },
                        {
                          title: '产品配置 相关接口',
                          path: '/deviceDevelop/nb/QuecPython/api/nb-quecpython-api-02',
                        },
                        {
                          title: '数据业务交互 相关接口',
                          path: '/deviceDevelop/nb/QuecPython/api/nb-quecpython-api-03',
                        },
                        {
                          title: 'OTA 相关接口',
                          path: '/deviceDevelop/nb/QuecPython/api/nb-quecpython-api-04',
                        },
                        {
                          title: 'GNSS&LBS定位 相关接口',
                          path: '/deviceDevelop/nb/QuecPython/api/nb-quecpython-api-05',
                        },
                        {
                          title: '设备与平台交互 相关事件',
                          path: '/deviceDevelop/nb/QuecPython/api/nb-quecpython-api-06',
                        },
                      ],
                    },
                    {
                      title: '示例概览',

                      children: [
                        {
                          title: '产品配置及快速上云示例',
                          path: '/deviceDevelop/nb/QuecPython/example/nb-quecpython-example-01',
                        },
                        {
                          title: '物模型格式数据业务交互示例',
                          path: '/deviceDevelop/nb/QuecPython/example/data/nb-quecpython-example-01',
                        },
                        {
                          title: '透传格式数据业务交互示例',
                          path: '/deviceDevelop/nb/QuecPython/example/data/nb-quecpython-example-02',
                        },
                        {
                          title: 'FOTA升级示例',
                          path: '/deviceDevelop/nb/QuecPython/example/ota/nb-quecpython-example-01',
                        },
                        {
                          title: 'SOTA升级示例',
                          path: '/deviceDevelop/nb/QuecPython/example/ota/nb-quecpython-example-02',
                        },
                        {
                          title: 'GNSS&LBS定位示例',
                          path: '/deviceDevelop/nb/QuecPython/example/nb-quecpython-example-02',
                        },
                      ],
                    },
                    {
                      title: '常见问题',
                      path: '/deviceDevelop/nb/QuecPython/nb-quecpython-F_Q',
                    },
                    {
                      title: '更新历史',
                      path: '/deviceDevelop/nb/QuecPython/changelog',
                    },
                  ],
                },
              ],
            },
            {
              title: 'BLE',

              children: [
                {
                  title: '快速指引(QuecOpen方案)',
                  path: '/deviceDevelop/ble/page-01',
                },
                {
                  title: 'BLE通讯协议文档',
                  path: '/deviceDevelop/ble/page-02',
                },
              ],
            },
            {
              title: '网关子设备',

              children: [
                {
                  title: '网关子设备概述',
                  path: '/deviceDevelop/subDevice/page-01',
                },
                {
                  title: 'AT接入方案',

                  children: [
                    {
                      title: 'AT指令概览',
                      path: '/deviceDevelop/subDevice/d_c_sub/AT/sub-at-01',
                    },
                    {
                      title: '快速接入云示例',
                      path: '/deviceDevelop/subDevice/d_c_sub/AT/sub-at-example-01',
                    },
                    {
                      title: '常见问题',
                      path: '/deviceDevelop/subDevice/d_c_sub/AT/sub-at-F_Q',
                    },
                  ],
                },
                {
                  title: 'QuecOpen接入方案',


                  children: [
                    {
                      title: 'API接口概览',
                      path: '/deviceDevelop/subDevice/d_c_sub/QuecOpen/sub-quecopen-api-01',
                    },
                    {
                      title: '快速接入云示例',
                      path: '/deviceDevelop/subDevice/d_c_sub/QuecOpen/sub-quecopen-example-01',
                    },
                    {
                      title: '常见问题',
                      path: '/deviceDevelop/subDevice/d_c_sub/QuecOpen/sub-quecopen-F_Q',
                    },
                  ],
                },
                {
                  title: 'QuecPython接入方案',


                  children: [
                    {
                      title: 'API接口概览',
                      path: '/deviceDevelop/subDevice/d_c_sub/QuecPython/sub-quecpython-api-01',
                    },
                    {
                      title: '快速接入云示例',
                      path: '/deviceDevelop/subDevice/d_c_sub/QuecPython/sub-quecpython-example-01',
                    },
                    {
                      title: '常见问题',
                      path: '/deviceDevelop/subDevice/d_c_sub/QuecPython/sub-quecpython-F_Q',
                    },
                  ],
                },
              ],
            },
            {
              title: '模组接入',

              children: [
                {
                  title: '概述',
                  path: '/deviceDevelop/ModuleAccess/page-01',
                },
                {
                  title: 'SDK架构',
                  path: '/deviceDevelop/ModuleAccess/page-02',
                },
                {
                  title: '移植步骤',
                  path: '/deviceDevelop/ModuleAccess/page-03',
                },
                {
                  title: 'API说明 ',

                  children: [
                    {
                      title: '适配层API说明 ',
                      path: '/deviceDevelop/ModuleAccess/api/page-01',
                    },
                    {
                      title: 'AT命令封装模块相关API ',
                      path: '/deviceDevelop/ModuleAccess/api/page-02',
                    },
                    {
                      title: 'Dev硬件模块相关API',
                      path: '/deviceDevelop/ModuleAccess/api/page-03',
                    },
                    {
                      title: '数据存储相关API',
                      path: '/deviceDevelop/ModuleAccess/api/page-04',
                    },
                    {
                      title: '设备属性相关API',
                      path: '/deviceDevelop/ModuleAccess/api/page-05',
                    },
                    {
                      title: 'Socket通信相关API',
                      path: '/deviceDevelop/ModuleAccess/api/page-06',
                    },
                  ],
                },
                {
                  title: '功能开关',
                  path: '/deviceDevelop/ModuleAccess/page-04',
                },
                {
                  title: '附录',
                  path: '/deviceDevelop/ModuleAccess/page-05',
                },
              ],
            },
          ],
        },
        {
          title: 'App应用开发',

          children: [
            { title: 'App数据通信概览', path: '/appDevelop/ready' },
            { title: 'OpenAPI使用指导', path: '/appDevelop/OpenAPI' },
            {
              title: 'WebSocket使用指导',

              children: [
                {
                  title: 'WebSocket接入指导',
                  path: '/appDevelop/websocket/guide',
                },
                {
                  title: 'WebSocket消息格式定义',
                  path: '/appDevelop/websocket/formatDefinition',
                },
              ],
            },
            { title: 'Android SDK使用指导', path: '/appDevelop/AndroidSDK' },
            { title: 'iOS SDK使用指导', path: '/appDevelop/iosSDK' },
            {
              title: '设备配网流程说明',
              path: '/appDevelop/networkDescription',
            },
            { title: '错误码集合', path: '/appDevelop/errorCode' },
          ],
        },
        {
          title: 'SaaS应用开发',

          children: [
            {
              title: 'SaaS数据通信概述',
              path: '/saasDevelop/CommunicatOverview',
            },
            {
              title: 'OpenAPI使用指导',


              children: [
                {
                  title: 'OpenAPI概述',
                  path: '/saasDevelop/OpenAPI/Overview',
                },
                {
                  title: 'OpenAPI SDK接入示例',
                  path: '/saasDevelop/OpenAPI/Example',
                },
              ],
            },
            {
              title: '消息订阅使用指导',

              children: [
                {
                  title: 'AMQP消息订阅概述',
                  path: '/saasDevelop/subscription/AMQPinfo',
                },
                {
                  title: 'AMQP客户端接入说明',
                  path: '/saasDevelop/subscription/AMQPtoC',
                },
                {
                  title: 'AMQP SDK接入示例',
                  path: '/saasDevelop/subscription/AMQPSDK',
                },
              ],
            },
            {
              title: '数据格式',


              children: [
                {
                  title: '数据格式概述',
                  path: '/saasDevelop/DataFormat/overview',
                },
                {
                  title: '数据格式定义',
                  path: '/saasDevelop/DataFormat/definition',
                },
              ],
            },
            { title: '错误码集合', path: '/saasDevelop/errorCode' },
          ],
        },
        {
          title: '用户指南',

          children: [
            {
              title: '产品开发',

              children: [
                { title: '项目管理', path: '/guide/develop/ProjectManage' },
                { title: '产品管理', path: '/guide/develop/ProductManage' },
                { title: '设备CA证书', path: '/guide/develop/DeviceCALicense' },
                {
                  title: '功能定义',
                  children: [
                    {
                      title: '物模型概述',
                      path: '/guide/develop/definition/page-01',
                    },
                    {
                      title: '标准功能',
                      path: '/guide/develop/definition/page-02',
                    },
                    {
                      title: '自定义功能',
                      path: '/guide/develop/definition/page-03',
                    },
                    {
                      title: '物模型应用',
                      path: '/guide/develop/definition/page-04',
                    },
                  ],
                },
                { title: '设备开发', path: '/guide/develop/DeviceDev' },
                { title: '设备调试', path: '/guide/develop/DeviceDebug' },
                { title: '生产测试', path: '/guide/develop/ProductionTest' },
                { title: '产品发布', path: '/guide/develop/ProductRelease' },
              ],
            },
            {
              title: 'App开发',

              children: [
                { title: 'App开发', path: '/guide/app/dev' },
                { title: '短信配置', path: '/guide/app/SMS' },
              ],
            },
            {
              title: 'SaaS开发',

              children: [
                /*{ title: '功能开通', path: '/guide/saas/FunctionOpen' },*/
                /*{ title: '安全中心', path: '/guide/saas/SecurityCenter' },*/
                { title: 'SaaS管理', path: '/guide/saas/SaasManage' },
                { title: '服务市场', path: '/guide/saas/ServiceMarket' },
                { title: '消息订阅', path: '/guide/saas/NewsSubscription' },
                { title: '资源统计', path: '/guide/saas/ResourcePack' },
              ],
            },
            {
              title: '行业应用',

              children: [
                {
                  title: '行业解决方案概述',
                  path: '/guide/IndustryApplication/Overview',
                },
                {
                  title: '行业解决方案',
                  path: '/guide/IndustryApplication/solution',
                },
              ],
            },
            {
              title: '设备管理',

              children: [
                {
                  title: '设备运维',

                  children: [
                    {
                      title: '设备列表',
                      path: '/guide/deviceManage/operation/List',
                    },
                    {
                      title: '设备信息',
                      path: '/guide/deviceManage/operation/Info',
                    },
                    {
                      title: '数据日志',
                      path: '/guide/deviceManage/operation/DataLog',
                    },
                    {
                      title: '事件日志',
                      path: '/guide/deviceManage/operation/EventLog',
                    },
                    {
                      title: '运行状态',
                      path: '/guide/deviceManage/operation/Run',
                    },
                    {
                      title: '服务调用',
                      path: '/guide/deviceManage/operation/Serve',
                    },
                    {
                      title: '设备调试',
                      path: '/guide/deviceManage/operation/Debugger',
                    },
                    {
                      title: '设备定位',
                      path: '/guide/deviceManage/operation/Location',
                    },
                  ],
                },
                {
                  title: 'OTA升级',

                  children: [
                    {
                      title: 'OTA概述',
                      path: '/guide/deviceManage/ota/page-01',
                    },
                    {
                      title: '升级计划',
                      path: '/guide/deviceManage/ota/page-02',
                    },
                    {
                      title: '监控统计',
                      path: '/guide/deviceManage/ota/page-03',
                    },
                  ],
                },
                {
                  title: '虚拟设备',
                  path: '/guide/deviceManage/virtual/VirtualDevice',
                },
              ],
            },
            {
              title: '用量监控',
              path: '/guide/statistics/page-01',
            },
            {
              title: '个人中心',

              children: [
                { title: '个人账户', path: '/guide/personalCenter/accout' },
                // {
                //   title: '统计分析',
                //   path: '/guide/personalCenter/Statistics',
                // },
                { title: '角色权限', path: '/guide/personalCenter/Role' },
                { title: '审计日志', path: '/guide/personalCenter/audit' },
                // {
                //   title: '系统设置',
                //   path: '/guide/personalCenter/systemSettings', 2.15.1隐藏
                // },
                { title: '消息中心', path: '/guide/personalCenter/Info' },
                { title: '短信配置', path: '/guide/personalCenter/Message' },
              ],
            },
          ],
        },
        {
          title: '量产说明',

          children: [
            { title: '量产流程', path: '/massProduct/process' },
            { title: '设备二维码', path: '/massProduct/QRcode' },
            {
              title: 'License介绍',
              path: '/massProduct/LicenseIntroduction',
            },
            { title: '如何购买License', path: '/massProduct/buy' },
          ],
        },
        {
          title: '工具',

          children: [
            {
              title: '调试工具',

              children: [
                {
                  title: 'MCU仿真工具',

                  children: [
                    {
                      title: '概述',
                      path: '/tool/QthTools-debug/QthTools-MCU_Simulator/summary',
                    },
                    {
                      title: '用户说明',
                      path: '/tool/QthTools-debug/QthTools-MCU_Simulator/UserManual',
                    },
                  ],
                },
                {
                  title: 'QPYcom调试工具',

                  children: [
                    {
                      title: '概述',
                      path: '/tool/QthTools-debug/QthTools-QpyCOM/summary',
                    },
                  ],
                },
              ],
            },
            {
              title: '开发工具',

              children: [
                {
                  title: 'DTU-Modbus配置工具',

                  children: [
                    {
                      title: '概述',
                      path: '/tool/QthTools-develop/QthTools-DTU_Modbus/summary',
                    },
                    {
                      title: '用户说明',
                      path: '/tool/QthTools-develop/QthTools-DTU_Modbus/UserManual',
                    },
                  ],
                },
              ],
            },
            {
              title: '生产工具',

              children: [
                {
                  title: 'SN&IMEI绑定工具',

                  children: [
                    {
                      title: '概述',
                      path: '/tool/QthTools-factory/QthTools-SN2IMEI_Binding/summary',
                    },
                    {
                      title: '用户说明',
                      path: '/tool/QthTools-factory/QthTools-SN2IMEI_Binding/UserManual',
                    },
                  ],
                },
                {
                  title: 'QMultiDownload烧录工具',

                  children: [
                    {
                      title: '概述',
                      path: '/tool/QthTools-factory/QthTools-QMultiDownload/summary',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          title: '常见问题',

          children: [
            { title: '产品使用问题', path: '/problem/page-01' },
            { title: '商务咨询问题', path: '/problem/page-02' },
            { title: '业务问题', path: '/problem/page-03' },
          ],
        },
        {
          title: '联系我们',
          path: '/contactUs/',
        },
        {
          title: '服务条款',

          children: [
            { title: '移远服务协议', path: '/agreement/service' },
            { title: '移远隐私政策', path: '/agreement/privacy' },
          ],
        },
      ]
    },

    'en': {
      // 在sidebar配置侧导航栏
      sidebar: [
        {
          title: 'Home Page',
          path: '/en/homepage/',
        },
        {
          title: 'Product Introduction',

          children: [
            {
              title: 'What is Developer Center',
              path: '/en/introduction/page-01',
            },
            { title: 'Features', path: '/en/introduction/page-02' },
            { title: 'Terms', path: '/en/introduction/page-03' },
            { title: 'Platform Updates', path: '/en/introduction/page-04' },
          ],
        },
        {
          title: 'Quick Start',

          children: [
            { title: 'Overview', path: '/en/quickStart/Overview' },
            {
              title: 'Registration Guidance',
              path: '/en/quickStart/register',
            },
            {
              title: 'Product Development',
              path: '/en/quickStart/ProductDevelop',
            },
            { title: 'Mobile App Development', path: '/en/quickStart/App' },
            {
              title: 'SaaS Application Development',
              path: '/en/quickStart/Saas',
            },
          ],
        },
        {
          title: 'Device Development',

          children: [
            { title: 'Preparation', path: '/en/deviceDevelop/preliminaries' },
            { title: 'Device Access Solutions', path: '/en/deviceDevelop/AccessPlan' },
            {
              title: '2G/3G/4G/5G',

              children: [
                {
                  title: 'Quick Access',

                  children: [
                    {
                      title: 'Create a Product',
                      path: '/en/deviceDevelop/cellular/speediness/speediness-01',
                    },
                    {
                      title: 'Define Feature',
                      path: '/en/deviceDevelop/cellular/speediness/speediness-02',
                    },
                    {
                      title: 'AT Command Solution',

                      children: [
                        {
                          title: 'AT Command',
                          path: '/en/deviceDevelop/cellular/speediness/AT/speediness-at-01',
                        },
                        {
                          title: 'Device Hardware Configuration',
                          path: '/en/deviceDevelop/cellular/speediness/AT/speediness-at-02',
                        },
                        {
                          title: 'Quick Access to Developer Center',
                          path: '/en/deviceDevelop/cellular/speediness/AT/speediness-at-03',
                        },
                        {
                          title: 'Data Interaction',
                          path: '/en/deviceDevelop/cellular/speediness/AT/speediness-at-04',
                        },
                      ],
                    },
                    {
                      title: 'QuecOpen Solution',

                      children: [
                        {
                          title: 'Development Environment Configuration',
                          path: '/en/deviceDevelop/cellular/speediness/QuecOpen/speediness-quecopen-01',
                        },
                        {
                          title: 'SDK Description',
                          path: '/en/deviceDevelop/cellular/speediness/QuecOpen/speediness-quecopen-02',
                        },
                        {
                          title: 'Program Code',
                          path: '/en/deviceDevelop/cellular/speediness/QuecOpen/speediness-quecopen-03',
                        },
                        {
                          title: 'Presentation',
                          path: '/en/deviceDevelop/cellular/speediness/QuecOpen/speediness-quecopen-04',
                        },
                      ],
                    },
                    {
                      title: 'QuecPython Solution',

                      children: [
                        {
                          title: 'Development Environment Configuration',
                          path: '/en/deviceDevelop/cellular/speediness/QuecPython/speediness-quecpython-01',
                        },
                        {
                          title: 'Write Python Script',
                          path: '/en/deviceDevelop/cellular/speediness/QuecPython/speediness-quecpython-02',
                        },
                        {
                          title: 'Presentation',
                          path: '/en/deviceDevelop/cellular/speediness/QuecPython/speediness-quecpython-03',
                        },
                      ],
                    },
                  ],
                },
                {
                  title: 'AT Command Solution',

                  children: [
                    {
                      title: 'AT Command',

                      children: [
                        {
                          title: 'AT Command Introduction',
                          path: '/en/deviceDevelop/cellular/AT/API/cellular-at-01',
                        },
                        {
                          title: 'AT Command Overview',
                          path: '/en/deviceDevelop/cellular/AT/API/cellular-at-02',
                        },
                        {
                          title: 'Product Configuration Command',
                          path: '/en/deviceDevelop/cellular/AT/API/cellular-at-03',
                        },
                        {
                          title: 'Data Interaction Command',
                          path: '/en/deviceDevelop/cellular/AT/API/cellular-at-04',
                        },
                        {
                          title: 'OTA Upgrade Command',
                          path: '/en/deviceDevelop/cellular/AT/API/cellular-at-05',
                        },
                        {
                          title: 'GNSS&LBS&WiFi Positioning Command',
                          path: '/en/deviceDevelop/cellular/AT/API/cellular-at-07',
                        },
                        {
                          title: 'Device Authorization Command',
                          path: '/en/deviceDevelop/cellular/AT/API/cellular-at-08',
                        },
                        {
                          title: 'Interaction Event',
                          path: '/en/deviceDevelop/cellular/AT/API/cellular-at-09',
                        },
                      ],
                    },
                    {
                      title: 'Example',

                      children: [
                        {
                          title:
                            'Example of Product Configuration and Quick Access',
                          path: '/en/deviceDevelop/cellular/AT/example/cellular-at-example-01',
                        },
                        {
                          title: 'Example of TSL Data Interaction',
                          path: '/en/deviceDevelop/cellular/AT/example/cellular-at-example-02-1',
                        },
                        {
                          title:
                            'Example of Transparent Transmission Data Interaction',
                          path: '/en/deviceDevelop/cellular/AT/example/cellular-at-example-02-2',
                        },
                        {
                          title: 'FOTA Upgrade Example',
                          path: '/en/deviceDevelop/cellular/AT/example/cellular-at-example-03-1',
                        },
                        {
                          title: 'SOTA Upgrade Example',
                          path: '/en/deviceDevelop/cellular/AT/example/cellular-at-example-03-2',
                        },
                        {
                          title: 'GNSS&LBS&WiFi Positioning Example',
                          path: '/en/deviceDevelop/cellular/AT/example/cellular-at-example-04',
                        },
                      ],
                    },
                    {
                      title: 'FAQ',
                      path: '/en/deviceDevelop/cellular/AT/cellular-at-F_Q',
                    },
                    {
                      title: 'Revision History',
                      path: '/en/deviceDevelop/cellular/AT/changelog',
                    },
                  ],
                },
                {
                  title: 'QuecOpen Solution',

                  children: [
                    {
                      title: 'API',

                      children: [
                        {
                          title: 'API Overview',
                          path: '/en/deviceDevelop/cellular/QuecOpen/api/cellular-quecopen-api-01',
                        },
                        {
                          title: 'Product Configuration API',
                          path: '/en/deviceDevelop/cellular/QuecOpen/api/cellular-quecopen-api-02',
                        },
                        {
                          title: 'Data Interaction API',
                          path: '/en/deviceDevelop/cellular/QuecOpen/api/cellular-quecopen-api-03',
                        },
                        {
                          title: 'TTLV Data API',
                          path: '/en/deviceDevelop/cellular/QuecOpen/api/cellular-quecopen-api-04',
                        },
                        {
                          title: 'OTA Upgrade API',
                          path: '/en/deviceDevelop/cellular/QuecOpen/api/cellular-quecopen-api-05',
                        },

                        {
                          title: 'GNSS&LBS&WiFi Positioning API',
                          path: '/en/deviceDevelop/cellular/QuecOpen/api/cellular-quecopen-api-07',
                        },
                        {
                          title: 'Device Authorization API',
                          path: '/en/deviceDevelop/cellular/QuecOpen/api/cellular-quecopen-api-08',
                        },
                        {
                          title: 'DTU-Modbus API',
                          path: '/en/deviceDevelop/cellular/QuecOpen/api/cellular-quecopen-api-09',
                        },
                        {
                          title: 'Interaction Event',
                          path: '/en/deviceDevelop/cellular/QuecOpen/api/cellular-quecopen-api-10',
                        },
                      ],
                    },
                    {
                      title: 'Example',

                      children: [
                        {
                          title:
                            'Example of Product Configuration and Quick Access',
                          path: '/en/deviceDevelop/cellular/QuecOpen/example/cellular-quecopen-example-01',
                        },
                        {
                          title: 'Example of TSL Data Interaction',
                          path: '/en/deviceDevelop/cellular/QuecOpen/example/data/cellular-quecopen-example-01',
                        },
                        {
                          title:
                            'Example of Transparent Transmission Data Interaction',
                          path: '/en/deviceDevelop/cellular/QuecOpen/example/data/cellular-quecopen-example-02',
                        },
                        {
                          title: 'FOTA Upgrade Example',
                          path: '/en/deviceDevelop/cellular/QuecOpen/example/ota/cellular-quecopen-example-01',
                        },
                        {
                          title: 'SOTA Upgrade Example',
                          path: '/en/deviceDevelop/cellular/QuecOpen/example/ota/cellular-quecopen-example-02',
                        },
                        {
                          title: 'GNSS&LBS&WiFi Positioning Example',
                          path: '/en/deviceDevelop/cellular/QuecOpen/example/cellular-quecopen-example-02',
                        },
                        {
                          title: 'DTU-Modbus Example',
                          path: '/en/deviceDevelop/cellular/QuecOpen/example/cellular-quecopen-example-03',
                        },
                      ],
                    },
                    {
                      title: 'FAQ',
                      path: '/en/deviceDevelop/cellular/QuecOpen/cellular-quecopen-F_Q',
                    },
                    {
                      title: 'Revision History',
                      path: '/en/deviceDevelop/cellular/QuecOpen/changelog',
                    },
                  ],
                },
                {
                  title: 'QuecPython Solution',

                  children: [
                    {
                      title: 'API',

                      children: [
                        {
                          title: 'API Overview',
                          path: '/en/deviceDevelop/cellular/QuecPython/api/cellular-quecpython-api-01',
                        },
                        {
                          title: 'Product Configuration API',
                          path: '/en/deviceDevelop/cellular/QuecPython/api/cellular-quecpython-api-02',
                        },
                        {
                          title: 'Data Interaction API',
                          path: '/en/deviceDevelop/cellular/QuecPython/api/cellular-quecpython-api-03',
                        },
                        {
                          title: 'OTA Upgrade API',
                          path: '/en/deviceDevelop/cellular/QuecPython/api/cellular-quecpython-api-04',
                        },
                        {
                          title: 'GNSS&LBS&WiFi Positioning API',
                          path: '/en/deviceDevelop/cellular/QuecPython/api/cellular-quecpython-api-06',
                        },
                        {
                          title: 'Device Authorization API',
                          path: '/en/deviceDevelop/cellular/QuecPython/api/cellular-quecpython-api-07',
                        },
                        {
                          title: 'DTU-Modbus API',
                          path: '/en/deviceDevelop/cellular/QuecPython/api/cellular-quecpython-api-08',
                        },
                        {
                          title: 'Interaction Event',
                          path: '/en/deviceDevelop/cellular/QuecPython/api/cellular-quecpython-api-09',
                        },
                      ],
                    },
                    {
                      title: 'Example',

                      children: [
                        {
                          title:
                            'Example of Product Configuration and Quick Access',
                          path: '/en/deviceDevelop/cellular/QuecPython/example/cellular-quecpython-example-01',
                        },
                        {
                          title: 'Example of TSL Data Interaction',
                          path: '/en/deviceDevelop/cellular/QuecPython/example/data/cellular-quecpython-example-01',
                        },
                        {
                          title:
                            'Example of Transparent Transmission Data Interaction',
                          path: '/en/deviceDevelop/cellular/QuecPython/example/data/cellular-quecpython-example-02',
                        },
                        {
                          title: 'FOTA Upgrade Example',
                          path: '/en/deviceDevelop/cellular/QuecPython/example/ota/cellular-quecpython-example-01',
                        },
                        {
                          title: 'SOTA Upgrade Example',
                          path: '/en/deviceDevelop/cellular/QuecPython/example/ota/cellular-quecpython-example-02',
                        },
                        {
                          title: 'GNSS&LBS&WiFi Positioning Example',
                          path: '/en/deviceDevelop/cellular/QuecPython/example/cellular-quecpython-example-02',
                        },
                        {
                          title: 'DTU-Modbus Example',
                          path: '/en/deviceDevelop/cellular/QuecPython/example/cellular-quecpython-example-03',
                        },
                      ],
                    },
                    {
                      title: 'FAQ',
                      path: '/en/deviceDevelop/cellular/QuecPython/cellular-quecpython-F_Q',
                    },
                    {
                      title: 'Revision History',
                      path: '/en/deviceDevelop/cellular/QuecPython/changelog',
                    },
                  ],
                },
                {
                  title: 'DTU-Modbus Solution',

                  children: [
                    {
                      title: 'Quick Start',


                      children: [
                        {
                          title: 'Operations on Developer Center',
                          path: '/en/deviceDevelop/cellular/DTU/speediness/cellular-dtu-01',
                        },
                        {
                          title: 'Operations on QthTools-DTU Modbus',
                          path: '/en/deviceDevelop/cellular/DTU/speediness/cellular-dtu-02',
                        },
                        {
                          title: 'Operations on Device',
                          path: '/en/deviceDevelop/cellular/DTU/speediness/cellular-dtu-03',
                        },
                        {
                          title: 'Presentation',
                          path: '/en/deviceDevelop/cellular/DTU/speediness/cellular-dtu-04',
                        },
                      ],
                    },
                    {
                      title: 'FAQ',
                      path: '/en/deviceDevelop/cellular/DTU/cellular-dtu-01',
                    },
                  ],
                },
              ],
            },
            {
              title: 'WiFi',

              children: [
                {
                  title: 'Quick Access',

                  children: [
                    {
                      title: 'Create a Product',
                      path: '/en/deviceDevelop/wifi/speediness/speediness-01',
                    },
                    {
                      title: 'Define Feature',
                      path: '/en/deviceDevelop/wifi/speediness/speediness-02',
                    },
                    {
                      title: 'AT Command Solution',

                      children: [
                        {
                          title: 'AT Command',
                          path: '/en/deviceDevelop/wifi/speediness/AT/speediness-at-01',
                        },
                        {
                          title: 'Device Hardware Configuration',
                          path: '/en/deviceDevelop/wifi/speediness/AT/speediness-at-02',
                        },
                        {
                          title: 'Quick Access to Developer Center',
                          path: '/en/deviceDevelop/wifi/speediness/AT/speediness-at-03',
                        },
                        {
                          title: 'Data Interaction',
                          path: '/en/deviceDevelop/wifi/speediness/AT/speediness-at-04',
                        },
                      ],
                    },
                    {
                      title: 'QuecOpen Solution',

                      children: [
                        {
                          title: 'Development Environment Configuration',
                          path: '/en/deviceDevelop/wifi/speediness/QuecOpen/speediness-quecopen-01',
                        },
                        {
                          title: 'SDK Description',
                          path: '/en/deviceDevelop/wifi/speediness/QuecOpen/speediness-quecopen-02',
                        },
                        {
                          title: 'Program Code',
                          path: '/en/deviceDevelop/wifi/speediness/QuecOpen/speediness-quecopen-03',
                        },
                        {
                          title: 'Presentation',
                          path: '/en/deviceDevelop/wifi/speediness/QuecOpen/speediness-quecopen-04',
                        },
                      ],
                    },
                    {
                      title: 'QuecPython Solution',

                      children: [
                        {
                          title: 'Development Environment Configuration',
                          path: '/en/deviceDevelop/wifi/speediness/QuecPython/speediness-quecpython-01',
                        },
                        {
                          title: 'Write Python Script',
                          path: '/en/deviceDevelop/wifi/speediness/QuecPython/speediness-quecpython-02',
                        },
                        {
                          title: 'Presentation',
                          path: '/en/deviceDevelop/wifi/speediness/QuecPython/speediness-quecpython-03',
                        },
                      ],
                    },
                  ],
                },
                {
                  title: 'AT Command Solution',

                  children: [
                    {
                      title: 'AT Command Reference',

                      children: [
                        {
                          title: 'AT Command Introduction',
                          path: '/en/deviceDevelop/wifi/AT/API/wifi-at-01',
                        },
                        {
                          title: 'AT Command Overview',
                          path: '/en/deviceDevelop/wifi/AT/API/wifi-at-02',
                        },
                        {
                          title: 'Product Configuration Command',
                          path: '/en/deviceDevelop/wifi/AT/API/wifi-at-03',
                        },
                        {
                          title: 'Data Interaction Command',
                          path: '/en/deviceDevelop/wifi/AT/API/wifi-at-04',
                        },
                        {
                          title: 'OTA Upgrade Command',
                          path: '/en/deviceDevelop/wifi/AT/API/wifi-at-05',
                        },
                        {
                          title: 'GNSS&LBS&WiFi Positioning Command',
                          path: '/en/deviceDevelop/wifi/AT/API/wifi-at-07',
                        },
                        {
                          title: 'Device Authorization Command',
                          path: '/en/deviceDevelop/wifi/AT/API/wifi-at-08',
                        },
                        {
                          title: 'Interaction Event',
                          path: '/en/deviceDevelop/wifi/AT/API/wifi-at-09',
                        },
                      ],
                    },
                    {
                      title: 'Example',

                      children: [
                        {
                          title:
                            'Example of Product Configuration and Quick Access',
                          path: '/en/deviceDevelop/wifi/AT/example/wifi-at-example-01',
                        },
                        {
                          title: 'Example of TSL Data Interaction',
                          path: '/en/deviceDevelop/wifi/AT/example/wifi-at-example-02-1',
                        },
                        {
                          title:
                            'Example of Transparent Transmission Data Interaction',
                          path: '/en/deviceDevelop/wifi/AT/example/wifi-at-example-02-2',
                        },
                        {
                          title: 'FOTA Upgrade Example',
                          path: '/en/deviceDevelop/wifi/AT/example/wifi-at-example-03-1',
                        },
                        {
                          title: 'SOTA Upgrade Example',
                          path: '/en/deviceDevelop/wifi/AT/example/wifi-at-example-03-2',
                        },

                        {
                          title: 'GNSS&LBS&WiFi Positioning Example',
                          path: '/en/deviceDevelop/wifi/AT/example/wifi-at-example-04',
                        },
                      ],
                    },
                    {
                      title: 'FAQ',
                      path: '/en/deviceDevelop/wifi/AT/wifi-at-F_Q',
                    },
                    {
                      title: 'Revision History',
                      path: '/en/deviceDevelop/wifi/AT/changelog',
                    },
                  ],
                },
                {
                  title: 'QuecOpen Solution',

                  children: [
                    {
                      title: 'API',

                      children: [
                        {
                          title: 'API Overview',
                          path: '/en/deviceDevelop/wifi/QuecOpen/api/wifi-quecopen-api-01',
                        },
                        {
                          title: 'Product Configuration API',
                          path: '/en/deviceDevelop/wifi/QuecOpen/api/wifi-quecopen-api-02',
                        },
                        {
                          title: 'Data Interaction API',
                          path: '/en/deviceDevelop/wifi/QuecOpen/api/wifi-quecopen-api-03',
                        },
                        {
                          title: 'TTLV Data API',
                          path: '/en/deviceDevelop/wifi/QuecOpen/api/wifi-quecopen-api-04',
                        },
                        {
                          title: 'OTA Upgrade API',
                          path: '/en/deviceDevelop/wifi/QuecOpen/api/wifi-quecopen-api-05',
                        },
                        {
                          title: 'GNSS&LBS&WiFi Positioning API',
                          path: '/en/deviceDevelop/wifi/QuecOpen/api/wifi-quecopen-api-07',
                        },
                        {
                          title: 'Device Authorization API',
                          path: '/en/deviceDevelop/wifi/QuecOpen/api/wifi-quecopen-api-08',
                        },
                        {
                          title: 'DTU-Modbus API',
                          path: '/en/deviceDevelop/wifi/QuecOpen/api/wifi-quecopen-api-09',
                        },
                        {
                          title: 'Interaction Event',
                          path: '/en/deviceDevelop/wifi/QuecOpen/api/wifi-quecopen-api-10',
                        },
                      ],
                    },
                    {
                      title: 'Example',

                      children: [
                        {
                          title:
                            'Example of Product Configuration and Quick Access',
                          path: '/en/deviceDevelop/wifi/QuecOpen/example/wifi-quecopen-example-01',
                        },
                        {
                          title: 'Example of TSL Data Interaction',
                          path: '/en/deviceDevelop/wifi/QuecOpen/example/data/wifi-quecopen-example-01',
                        },
                        {
                          title:
                            'Example of Transparent Transmission Data Interaction',
                          path: '/en/deviceDevelop/wifi/QuecOpen/example/data/wifi-quecopen-example-02',
                        },
                        {
                          title: 'FOTA Upgrade Example',
                          path: '/en/deviceDevelop/wifi/QuecOpen/example/ota/wifi-quecopen-example-01',
                        },
                        {
                          title: 'SOTA Upgrade Example',
                          path: '/en/deviceDevelop/wifi/QuecOpen/example/ota/wifi-quecopen-example-02',
                        },
                        {
                          title: 'GNSS&LBS&WiFi Positioning Example',
                          path: '/en/deviceDevelop/wifi/QuecOpen/example/wifi-quecopen-example-02',
                        },
                        {
                          title: 'DTU-Modbus Example',
                          path: '/en/deviceDevelop/wifi/QuecOpen/example/wifi-quecopen-example-03',
                        },
                      ],
                    },
                    {
                      title: 'FAQ',
                      path: '/en/deviceDevelop/wifi/QuecOpen/wifi-quecopen-F_Q',
                    },
                    {
                      title: 'Revision History',
                      path: '/en/deviceDevelop/wifi/QuecOpen/changelog',
                    },
                  ],
                },
                {
                  title: 'QuecPython Solution',

                  children: [
                    {
                      title: 'API',

                      children: [
                        {
                          title: 'API Overview',
                          path: '/en/deviceDevelop/wifi/QuecPython/api/wifi-quecpython-api-01',
                        },
                        {
                          title: 'Product Configuration API',
                          path: '/en/deviceDevelop/wifi/QuecPython/api/wifi-quecpython-api-02',
                        },
                        {
                          title: 'Data Interaction API',
                          path: '/en/deviceDevelop/wifi/QuecPython/api/wifi-quecpython-api-03',
                        },
                        {
                          title: 'OTA Upgrade API',
                          path: '/en/deviceDevelop/wifi/QuecPython/api/wifi-quecpython-api-04',
                        },
                        {
                          title: 'GNSS&LBS&WiFi Positioning API',
                          path: '/en/deviceDevelop/wifi/QuecPython/api/wifi-quecpython-api-06',
                        },
                        {
                          title: 'Device Authorization API',
                          path: '/en/deviceDevelop/wifi/QuecPython/api/wifi-quecpython-api-07',
                        },
                        {
                          title: 'DTU-Modbus API',
                          path: '/en/deviceDevelop/wifi/QuecPython/api/wifi-quecpython-api-08',
                        },
                        {
                          title: 'Interaction Event',
                          path: '/en/deviceDevelop/wifi/QuecPython/api/wifi-quecpython-api-09',
                        },
                      ],
                    },
                    {
                      title: 'Example',

                      children: [
                        {
                          title:
                            'Example of Product Configuration and Quick Access',
                          path: '/en/deviceDevelop/wifi/QuecPython/example/wifi-quecpython-example-01',
                        },
                        {
                          title: 'Example of TSL Data Interaction',
                          path: '/en/deviceDevelop/wifi/QuecPython/example/data/wifi-quecpython-example-01',
                        },
                        {
                          title:
                            'Example of Transparent Transmission Data Interaction',
                          path: '/en/deviceDevelop/wifi/QuecPython/example/data/wifi-quecpython-example-02',
                        },
                        {
                          title: 'FOTA Upgrade Example',
                          path: '/en/deviceDevelop/wifi/QuecPython/example/ota/wifi-quecpython-example-01',
                        },
                        {
                          title: 'SOTA Upgrade Example',
                          path: '/en/deviceDevelop/wifi/QuecPython/example/ota/wifi-quecpython-example-02',
                        },
                        {
                          title: 'GNSS&LBS&WiFi Positioning Example',
                          path: '/en/deviceDevelop/wifi/QuecPython/example/wifi-quecpython-example-02',
                        },
                        {
                          title: 'DTU-Modbus Example',
                          path: '/en/deviceDevelop/wifi/QuecPython/example/wifi-quecpython-example-03',
                        },
                      ],
                    },
                    {
                      title: 'FAQ',
                      path: '/en/deviceDevelop/wifi/QuecPython/wifi-quecpython-F_Q',
                    },
                    {
                      title: 'Revision History',
                      path: '/en/deviceDevelop/wifi/QuecPython/changelog',
                    },
                  ],
                },
              ],
            },
            {
              title: 'NB-IoT',

              children: [
                {
                  title: 'Quick Access (China Telecom)',

                  children: [
                    {
                      title: 'Overview',
                      path: '/en/deviceDevelop/nb/speediness_ctwing/speediness-01',
                    },
                    {
                      title: 'Operations on Developer Center',
                      path: '/en/deviceDevelop/nb/speediness_ctwing/speediness-02',
                    },
                    {
                      title: 'AT Command Solution',

                      children: [
                        {
                          title: 'Overview',
                          path: '/en/deviceDevelop/nb/speediness_ctwing/AT/speediness-AT-01',
                        },
                        {
                          title: 'Build Development Environment',
                          path: '/en/deviceDevelop/nb/speediness_ctwing/AT/speediness-AT-02',
                        },
                        {
                          title: 'Quick Access to Developer Center',
                          path: '/en/deviceDevelop/nb/speediness_ctwing/AT/speediness-AT-03',
                        },
                        {
                          title: 'Data Interaction',
                          path: '/en/deviceDevelop/nb/speediness_ctwing/AT/speediness-AT-04',
                        },
                      ],
                    },
                  ],
                },
                {
                  title: 'Quick Access (China Mobile & China Unicom)',

                  children: [
                    {
                      title: 'Create a Product',
                      path: '/en/deviceDevelop/nb/speediness_cmcc&cucc/speediness-01',
                    },
                    {
                      title: 'Define Feature',
                      path: '/en/deviceDevelop/nb/speediness_cmcc&cucc/speediness-02',
                    },
                    {
                      title: 'AT Command Solution',

                      children: [
                        {
                          title: 'AT Command',
                          path: '/en/deviceDevelop/nb/speediness_cmcc&cucc/AT/speediness-AT-01',
                        },
                        {
                          title: 'Build Development Environment',
                          path: '/en/deviceDevelop/nb/speediness_cmcc&cucc/AT/speediness-AT-02',
                        },
                        {
                          title: 'Quick Access to Developer Center',
                          path: '/en/deviceDevelop/nb/speediness_cmcc&cucc/AT/speediness-AT-03',
                        },
                        {
                          title: 'Data Interaction',
                          path: '/en/deviceDevelop/nb/speediness_cmcc&cucc/AT/speediness-AT-04',
                        },
                      ],
                    },
                    {
                      title: 'QuecOpen Solution',

                      children: [
                        {
                          title: 'Development Environment Configuration',
                          path: '/en/deviceDevelop/nb/speediness_cmcc&cucc/QuecOpen/speediness-quecopen-01',
                        },
                        {
                          title: 'SDK Description',
                          path: '/en/deviceDevelop/nb/speediness_cmcc&cucc/QuecOpen/speediness-quecopen-02',
                        },
                        {
                          title: 'Program Code',
                          path: '/en/deviceDevelop/nb/speediness_cmcc&cucc/QuecOpen/speediness-quecopen-03',
                        },
                        {
                          title: 'Presentation',
                          path: '/en/deviceDevelop/nb/speediness_cmcc&cucc/QuecOpen/speediness-quecopen-04',
                        },
                      ],
                    },
                    {
                      title: 'QuecPython Solution',

                      children: [
                        {
                          title: 'Development Environment Configuration',
                          path: '/en/deviceDevelop/nb/speediness_cmcc&cucc/QuecPython/speediness-quecpython-01',
                        },
                        {
                          title: 'Write Python Script',
                          path: '/en/deviceDevelop/nb/speediness_cmcc&cucc/QuecPython/speediness-quecpython-02',
                        },
                        {
                          title: 'Presentation',
                          path: '/en/deviceDevelop/nb/speediness_cmcc&cucc/QuecPython/speediness-quecpython-03',
                        },
                      ],
                    },
                  ],
                },
                {
                  title: 'AT Command Solution',

                  children: [
                    {
                      title: 'AT Command',

                      children: [
                        {
                          title: 'AT Command Introduction',
                          path: '/en/deviceDevelop/nb/AT/API/nb-at-01',
                        },
                        {
                          title: 'AT Command Overview',
                          path: '/en/deviceDevelop/nb/AT/API/nb-at-02',
                        },
                        {
                          title: 'Product Configuration Command',
                          path: '/en/deviceDevelop/nb/AT/API/nb-at-03',
                        },
                        {
                          title: 'Data Interaction Command',
                          path: '/en/deviceDevelop/nb/AT/API/nb-at-04',
                        },
                        {
                          title: 'OTA Upgrade Command',
                          path: '/en/deviceDevelop/nb/AT/API/nb-at-05',
                        },
                        {
                          title: 'GNSS&LBS Positioning Command',
                          path: '/en/deviceDevelop/nb/AT/API/nb-at-06',
                        },
                        {
                          title: 'Interaction Event',
                          path: '/en/deviceDevelop/nb/AT/API/nb-at-07',
                        },
                      ],
                    },
                    {
                      title: 'Example',

                      children: [
                        {
                          title:
                            'Example of Product Configuration and Quick Access',
                          path: '/en/deviceDevelop/nb/AT/example/nb-at-example-01',
                        },
                        {
                          title: 'Example of TSL Data Interaction',
                          path: '/en/deviceDevelop/nb/AT/example/nb-at-example-02-1',
                        },
                        {
                          title:
                            'Example of Transparent Transmission Data Interaction',
                          path: '/en/deviceDevelop/nb/AT/example/nb-at-example-02-2',
                        },
                        {
                          title: 'FOTA Upgrade Example',
                          path: '/en/deviceDevelop/nb/AT/example/nb-at-example-03-1',
                        },
                        {
                          title: 'SOTA Upgrade Example',
                          path: '/en/deviceDevelop/nb/AT/example/nb-at-example-03-2',
                        },
                        {
                          title: 'GNSS&LBS Positioning Example',
                          path: '/en/deviceDevelop/nb/AT/example/nb-at-example-04',
                        },
                      ],
                    },
                    {
                      title: 'FAQ',
                      path: '/en/deviceDevelop/nb/AT/nb-at-F_Q',
                    },
                    {
                      title: 'Revision History',
                      path: '/en/deviceDevelop/nb/AT/changelog',
                    },
                  ],
                },
                {
                  title: 'QuecOpen Solution',

                  children: [
                    {
                      title: 'API',

                      children: [
                        {
                          title: 'API Overview',
                          path: '/en/deviceDevelop/nb/QuecOpen/api/nb-quecopen-api-01',
                        },
                        {
                          title: 'Product Configuration API',
                          path: '/en/deviceDevelop/nb/QuecOpen/api/nb-quecopen-api-02',
                        },
                        {
                          title: 'Data Interaction API',
                          path: '/en/deviceDevelop/nb/QuecOpen/api/nb-quecopen-api-03',
                        },
                        {
                          title: 'TTLV Data API',
                          path: '/en/deviceDevelop/nb/QuecOpen/api/nb-quecopen-api-04',
                        },
                        {
                          title: 'OTA Upgrade API',
                          path: '/en/deviceDevelop/nb/QuecOpen/api/nb-quecopen-api-05',
                        },
                        {
                          title: 'GNSS&LBS Positioning API',
                          path: '/en/deviceDevelop/nb/QuecOpen/api/nb-quecopen-api-06',
                        },
                        {
                          title: 'Interaction Event',
                          path: '/en/deviceDevelop/nb/QuecOpen/api/nb-quecopen-api-07',
                        },
                      ],
                    },
                    {
                      title: 'Example',

                      children: [
                        {
                          title:
                            'Example of Product Configuration and Quick Access',
                          path: '/en/deviceDevelop/nb/QuecOpen/example/nb-quecopen-example-01',
                        },
                        {
                          title: 'Example of TSL Data Interaction',
                          path: '/en/deviceDevelop/nb/QuecOpen/example/data/nb-quecopen-example-01',
                        },
                        {
                          title:
                            'Example of Transparent Transmission Data Interaction',
                          path: '/en/deviceDevelop/nb/QuecOpen/example/data/nb-quecopen-example-02',
                        },
                        {
                          title: 'FOTA Upgrade Example',
                          path: '/en/deviceDevelop/nb/QuecOpen/example/ota/nb-quecopen-example-01',
                        },
                        {
                          title: 'SOTA Upgrade Example',
                          path: '/en/deviceDevelop/nb/QuecOpen/example/ota/nb-quecopen-example-02',
                        },
                        {
                          title: 'GNSS&LBS Positioning Example',
                          path: '/en/deviceDevelop/nb/QuecOpen/example/nb-quecopen-example-02',
                        },
                      ],
                    },
                    {
                      title: 'FAQ',
                      path: '/en/deviceDevelop/nb/QuecOpen/nb-quecopen-F_Q',
                    },
                    {
                      title: 'Revision History',
                      path: '/en/deviceDevelop/nb/QuecOpen/changelog',
                    },
                  ],
                },
                {
                  title: 'QuecPython Solution',

                  children: [
                    {
                      title: 'API',

                      children: [
                        {
                          title: 'API Overview',
                          path: '/en/deviceDevelop/nb/QuecPython/api/nb-quecpython-api-01',
                        },
                        {
                          title: 'Product Configuration API',
                          path: '/en/deviceDevelop/nb/QuecPython/api/nb-quecpython-api-02',
                        },
                        {
                          title: 'Data Interaction API',
                          path: '/en/deviceDevelop/nb/QuecPython/api/nb-quecpython-api-03',
                        },
                        {
                          title: 'OTA Upgrade API',
                          path: '/en/deviceDevelop/nb/QuecPython/api/nb-quecpython-api-04',
                        },
                        {
                          title: 'GNSS&LBS Positioning API',
                          path: '/en/deviceDevelop/nb/QuecPython/api/nb-quecpython-api-05',
                        },
                        {
                          title: 'Interaction Event',
                          path: '/en/deviceDevelop/nb/QuecPython/api/nb-quecpython-api-06',
                        },
                      ],
                    },
                    {
                      title: 'Example',

                      children: [
                        {
                          title:
                            'Example of Product Configuration and Quick Access',
                          path: '/en/deviceDevelop/nb/QuecPython/example/nb-quecpython-example-01',
                        },
                        {
                          title: 'Example of TSL Data Interaction',
                          path: '/en/deviceDevelop/nb/QuecPython/example/data/nb-quecpython-example-01',
                        },
                        {
                          title:
                            'Example of Transparent Transmission Data Interaction',
                          path: '/en/deviceDevelop/nb/QuecPython/example/data/nb-quecpython-example-02',
                        },
                        {
                          title: 'FOTA Upgrade Example',
                          path: '/en/deviceDevelop/nb/QuecPython/example/ota/nb-quecpython-example-01',
                        },
                        {
                          title: 'SOTA Upgrade Example',
                          path: '/en/deviceDevelop/nb/QuecPython/example/ota/nb-quecpython-example-02',
                        },
                        {
                          title: 'GNSS&LBS Positioning Example',
                          path: '/en/deviceDevelop/nb/QuecPython/example/nb-quecpython-example-02',
                        },
                      ],
                    },
                    {
                      title: 'FAQ',
                      path: '/en/deviceDevelop/nb/QuecPython/nb-quecpython-F_Q',
                    },
                    {
                      title: 'Revision History',
                      path: '/en/deviceDevelop/nb/QuecPython/changelog',
                    },
                  ],
                },
              ],
            },
            {
              title: 'BLE',

              children: [
                {
                  title: 'Quick Start (QuecOpen)',
                  path: '/en/deviceDevelop/ble/page-01',
                },
                {
                  title: 'BLE Communication Protocol',
                  path: '/en/deviceDevelop/ble/page-02',
                },
              ],
            },
            {
              title: 'Gateway Sub-device',

              children: [
                {
                  title: 'Overview',
                  path: '/en/deviceDevelop/subDevice/page-01',
                },
                {
                  title: 'AT Command Solution',

                  children: [
                    {
                      title: 'AT Command Overview',
                      path: '/en/deviceDevelop/subDevice/d_c_sub/AT/sub-at-01',
                    },
                    {
                      title: 'Quick Access to Developer Center',
                      path: '/en/deviceDevelop/subDevice/d_c_sub/AT/sub-at-example-01',
                    },
                    {
                      title: 'FAQ',
                      path: '/en/deviceDevelop/subDevice/d_c_sub/AT/sub-at-F_Q',
                    },
                  ],
                },
                {
                  title: 'QuecOpen Solution',

                  children: [
                    {
                      title: 'API Overview',
                      path: '/en/deviceDevelop/subDevice/d_c_sub/QuecOpen/sub-quecopen-api-01',
                    },
                    {
                      title: 'Quick Access to Developer Center',
                      path: '/en/deviceDevelop/subDevice/d_c_sub/QuecOpen/sub-quecopen-example-01',
                    },
                    {
                      title: 'FAQ',
                      path: '/en/deviceDevelop/subDevice/d_c_sub/QuecOpen/sub-quecopen-F_Q',
                    },
                  ],
                },
                {
                  title: 'QuecPython Solution',

                  children: [
                    {
                      title: 'API Overview',
                      path: '/en/deviceDevelop/subDevice/d_c_sub/QuecPython/sub-quecpython-api-01',
                    },
                    {
                      title: 'Quick Access to Developer Center',
                      path: '/en/deviceDevelop/subDevice/d_c_sub/QuecPython/sub-quecpython-example-01',
                    },
                    {
                      title: 'FAQ',
                      path: '/en/deviceDevelop/subDevice/d_c_sub/QuecPython/sub-quecpython-F_Q',
                    },
                  ],
                },
              ],
            },
            {
              title: 'QuecThing SDK Porting',

              children: [
                {
                  title: 'Introduction',
                  path: '/en/deviceDevelop/ModuleAccess/page-01',
                },
                {
                  title: 'SDK Directory',
                  path: '/en/deviceDevelop/ModuleAccess/page-02',
                },
                {
                  title: 'Porting Procedure',
                  path: '/en/deviceDevelop/ModuleAccess/page-03',
                },
                {
                  title: 'API ',

                  children: [
                    {
                      title: 'Adaption Layer API Description',
                      path: '/en/deviceDevelop/ModuleAccess/api/page-01',
                    },
                    {
                      title: 'AT Commands Parsing API',
                      path: '/en/deviceDevelop/ModuleAccess/api/page-02',
                    },
                    {
                      title: 'Device Driver API',
                      path: '/en/deviceDevelop/ModuleAccess/api/page-03',
                    },
                    {
                      title: 'Data Storage API',
                      path: '/en/deviceDevelop/ModuleAccess/api/page-04',
                    },
                    {
                      title: 'Device Attribute API',
                      path: '/en/deviceDevelop/ModuleAccess/api/page-05',
                    },
                    {
                      title: 'Socket Communication API',
                      path: '/en/deviceDevelop/ModuleAccess/api/page-06',
                    },
                  ],
                },
                {
                  title: 'Macro Switch',
                  path: '/en/deviceDevelop/ModuleAccess/page-04',
                },
                {
                  title: 'Appendix',
                  path: '/en/deviceDevelop/ModuleAccess/page-05',
                },
              ],
            },
          ],
        },
        {
          title: 'Mobile App Development',

          children: [
            {
              title: 'Overview of App Data Communication',
              path: '/en/appDevelop/ready',
            },
            { title: 'OpenAPI User Guide', path: '/en/appDevelop/OpenAPI' },
            {
              title: 'WebSocket User Guide',

              children: [
                {
                  title: 'WebSocket Access Guide',
                  path: '/en/appDevelop/websocket/guide',
                },
                {
                  title: 'WebSocket Message Format Definition',
                  path: '/en/appDevelop/websocket/formatDefinition',
                },
              ],
            },
            {
              title: 'Android SDK User Guide',
              path: '/en/appDevelop/AndroidSDK',
            },
            { title: 'iOS SDK User Guide', path: '/en/appDevelop/iosSDK' },
            {
              title: 'Device Network Provisioning Process',
              path: '/en/appDevelop/networkDescription',
            },
            { title: 'Error Code Summary', path: '/en/appDevelop/errorCode' },
          ],
        },
        {
          title: 'SaaS Application Development',

          children: [
            {
              title: 'SaaS Application Data Communication',
              path: '/en/saasDevelop/CommunicatOverview',
            },
            {
              title: 'OpenAPI User Guide',

              children: [
                {
                  title: 'OpenAPI Overview',
                  path: '/en/saasDevelop/OpenAPI/Overview',
                },
                {
                  title: 'OpenAPI Example',
                  path: '/en/saasDevelop/OpenAPI/Example',
                },
              ],
            },
            {
              title: 'Message Subscription Guide',

              children: [
                {
                  title: 'AMQP Message Subscription Overview',
                  path: '/en/saasDevelop/subscription/AMQPinfo',
                },
                {
                  title: 'Connect an AMQP Client to Developer Center',
                  path: '/en/saasDevelop/subscription/AMQPtoC',
                },
                {
                  title:
                    'Connect a AMQP Client to Developer Center by Using the SDK',
                  path: '/en/saasDevelop/subscription/AMQPSDK',
                },
              ],
            },
            {
              title: 'Data Format',

              children: [
                {
                  title: 'Data Format Overview',
                  path: '/en/saasDevelop/DataFormat/overview',
                },
                {
                  title: 'Data Format Definition',
                  path: '/en/saasDevelop/DataFormat/definition',
                },
              ],
            },
            {
              title: 'Error Code Summary',
              path: '/en/saasDevelop/errorCode',
            },
          ],
        },
        {
          title: 'User Guide',

          children: [
            {
              title: 'Develop Product',

              children: [
                {
                  title: 'Manage Project',
                  path: '/en/guide/develop/ProjectManage',
                },
                {
                  title: 'Manage Product',
                  path: '/en/guide/develop/ProductManage',
                },
                { title: 'Device CA Certificate', path: '/en/guide/develop/DeviceCALicense' },
                {
                  title: 'Feature Definition',

                  children: [
                    {
                      title: 'TSL Overview',
                      path: '/en/guide/develop/definition/page-01',
                    },
                    {
                      title: 'Standard Features',
                      path: '/en/guide/develop/definition/page-02',
                    },
                    {
                      title: 'Self-Defined Features',
                      path: '/en/guide/develop/definition/page-03',
                    },
                    {
                      title: 'Save a TSL Model',
                      path: '/en/guide/develop/definition/page-04',
                    },
                  ],
                },
                {
                  title: 'Develop Device',
                  path: '/en/guide/develop/DeviceDev',
                },
                {
                  title: 'Debug Device',
                  path: '/en/guide/develop/DeviceDebug',
                },
                {
                  title: 'Test in Production',
                  path: '/en/guide/develop/ProductionTest',
                },
                {
                  title: 'Product Release',
                  path: '/en/guide/develop/ProductRelease',
                },
              ],
            },
            {
              title: 'Develop App',

              children: [
                { title: 'App Development', path: '/en/guide/app/dev' },
                { title: 'SMS Settings', path: '/en/guide/app/SMS' },
              ],
            },
            {
              title: 'Develop SaaS Application',

              children: [
                {
                  title: 'SaaS Management',
                  path: '/en/guide/saas/SaasManage',
                },
                {
                  title: 'Service Market',
                  path: '/en/guide/saas/ServiceMarket',
                },
                {
                  title: 'Message Subscription',
                  path: '/en/guide/saas/NewsSubscription',
                },
                {
                  title: 'Resource Statistics',
                  path: '/en/guide/saas/ResourcePack',
                },
              ],
            },
            {
              title: 'Industry and Services',

              children: [
                {
                  title: 'Overview',
                  path: '/en/guide/IndustryApplication/Overview',
                },
                {
                  title: 'Solutions By Industry',
                  path: '/en/guide/IndustryApplication/solution',
                },
              ],
            },
            {
              title: 'Device Management',

              children: [
                {
                  title: 'Device Maintenance',

                  children: [
                    {
                      title: 'Device List',
                      path: '/en/guide/deviceManage/operation/List',
                    },
                    {
                      title: 'Device Information',
                      path: '/en/guide/deviceManage/operation/Info',
                    },
                    {
                      title: 'Data Logs',
                      path: '/en/guide/deviceManage/operation/DataLog',
                    },
                    {
                      title: 'Event Logs',
                      path: '/en/guide/deviceManage/operation/EventLog',
                    },
                    {
                      title: 'Running State',
                      path: '/en/guide/deviceManage/operation/Run',
                    },
                    {
                      title: 'Service Calls',
                      path: '/en/guide/deviceManage/operation/Serve',
                    },
                    {
                      title: 'Device Debugging',
                      path: '/en/guide/deviceManage/operation/Debugger',
                    },
                    {
                      title: 'Location',
                      path: '/en/guide/deviceManage/operation/Location',
                    },
                  ],
                },
                {
                  title: 'OTA Upgrade',

                  children: [
                    {
                      title: 'OTA Overview',
                      path: '/en/guide/deviceManage/ota/page-01',
                    },
                    {
                      title: 'Upgrade Plan',
                      path: '/en/guide/deviceManage/ota/page-02',
                    },
                    {
                      title: 'Monitoring and Statistics',
                      path: '/en/guide/deviceManage/ota/page-03',
                    },
                  ],
                },
                {
                  title: 'Virtual Device',
                  path: '/en/guide/deviceManage/virtual/VirtualDevice',
                },
              ],
            },
            {
              title: 'Usage Monitoring',
              path: '/en/guide/statistics/page-01',
            },
            {
              title: 'Personal Center',

              children: [
                {
                  title: 'Personal Account',
                  path: '/en/guide/personalCenter/accout',
                },
                // {
                //   title: 'Statistical Analysis',
                //   path: '/en/guide/personalCenter/Statistics',
                // },
                {
                  title: 'Permission Management',
                  path: '/en/guide/personalCenter/Role',
                },
                { title: 'Logs', path: '/en/guide/personalCenter/audit' },
                // {
                //   title: 'System Management',
                //   path: '/en/guide/personalCenter/systemSettings', 2.15.1隐藏
                // },
                {
                  title: 'Message Center',
                  path: '/en/guide/personalCenter/Info',
                },
                {
                  title: 'SMS Settings',
                  path: '/en/guide/personalCenter/Message',
                },
              ],
            },
          ],
        },
        {
          title: 'Mass Production',

          children: [
            {
              title: 'Mass Production Process',
              path: '/en/massProduct/process',
            },
            { title: 'Device QR Code', path: '/en/massProduct/QRcode' },
            {
              title: 'License Overview',
              path: '/en/massProduct/LicenseIntroduction',
            },
            {
              title: 'How to purchase a license',
              path: '/en/massProduct/buy',
            },
          ],
        },

        {
          title: 'Tool',

          children: [
            {
              title: 'Debugging Tool',

              children: [
                {
                  title: 'QthTools-MCU Simulator',

                  children: [
                    {
                      title: 'Overview',
                      path: '/en/tool/QthTools-debug/QthTools-MCU_Simulator/summary',
                    },
                    {
                      title: 'User Manual',
                      path: '/en/tool/QthTools-debug/QthTools-MCU_Simulator/UserManual',
                    },
                  ],
                },
                {
                  title: 'QPYcom',

                  children: [
                    {
                      title: 'Overview',
                      path: '/en/tool/QthTools-debug/QthTools-QpyCOM/summary',
                    },
                  ],
                },
              ],
            },
            {
              title: 'Development Tool',

              children: [
                {
                  title: 'QthTools-DTU Modbus',

                  children: [
                    {
                      title: 'Overview',
                      path: '/en/tool/QthTools-develop/QthTools-DTU_Modbus/summary',
                    },
                    {
                      title: 'User Manual',
                      path: '/en/tool/QthTools-develop/QthTools-DTU_Modbus/UserManual',
                    },
                  ],
                },
              ],
            },
            {
              title: 'Production Tool',

              children: [
                {
                  title: 'SN&IMEI Binding Tool',

                  children: [
                    {
                      title: 'Overview',
                      path: '/en/tool/QthTools-factory/QthTools-SN2IMEI_Binding/summary',
                    },
                    {
                      title: 'User Manual',
                      path: '/en/tool/QthTools-factory/QthTools-SN2IMEI_Binding/UserManual',
                    },
                  ],
                },
                {
                  title: 'QMultiDownload',

                  children: [
                    {
                      title: 'Overview',
                      path: '/en/tool/QthTools-factory/QthTools-QMultiDownload/summary',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          title: 'FAQ',

          children: [
            {
              title: 'FAQs About Product Usage',
              path: '/en/problem/page-01',
            },
            { title: 'FAQs About Consultation', path: '/en/problem/page-02' },
            { title: 'FAQs About Business', path: '/en/problem/page-03' },
          ],
        },
        {
          title: 'Contact Us',
          path: '/en/contactUs/',
        },
        {
          title: 'Terms of Service',

          children: [
            {
              title: 'Quectel Service Agreement',
              path: '/en/agreement/service',
            },
            {
              title: 'Quectel Privacy Policy',
              path: '/en/agreement/privacy',
            },
          ],
        },
      ]
    },
  }
}
