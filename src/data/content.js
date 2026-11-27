export const profile = {
  name: '卢冠彤',
  nameEn: 'LU GUANTONG',
  role: '云计算 / 网络运维',
  status: 'OPEN TO WORK',
  school: '桂林理工大学',
  degree: '本科 · 2027 届',
  location: '桂林 · 中国',
  coordinates: '25.27N / 110.29E',
  phone: '147 7776 3531',
  phoneHref: 'tel:+8614777763531',
  email: '3082840750@qq.com',
  target: '寻找 2027 届云计算 / 网络运维 / SRE 实习',
  intro:
    '从 Linux 与网络底座出发，做过高可用 Web 架构、Git 版本化交付、容器化部署和监控告警，也习惯把每一次排障写成可以复用的复盘。',
  introSecondary:
    '比起罗列工具名，我更在意能否说清楚：请求从哪来、在哪一层断掉、下一次怎样更快恢复。',
  stats: [
    { value: '03', label: '完整实战项目' },
    { value: '06', label: '台实验节点' },
    { value: '16', label: '累计运行容器' },
    { value: '04', label: '类监控组件' },
  ],
  contacts: [
    { label: '邮箱', value: '3082840750@qq.com', href: 'mailto:3082840750@qq.com', icon: 'mail' },
    { label: '电话', value: '147 7776 3531', href: 'tel:+8614777763531', icon: 'phone' },
    { label: '学校', value: '桂林理工大学 · 本科 2027 届', href: null, icon: 'pin' },
  ],
}

export const experience = [
  {
    period: '2025.11 — 2026.06',
    org: '通信与信息工程学院 ICT 实验室',
    role: '运维学员',
    points: [
      '协助维护实验室 Linux 服务器环境，完成系统安装、网络配置、用户权限管理与常用服务部署。',
      '使用 Ping / Traceroute / Wireshark 定位 IP、路由与端口问题，编写 Shell 巡检脚本检查服务、日志与磁盘。',
    ],
  },
  {
    period: '2023.09 — 2027.06',
    org: '桂林理工大学',
    role: '本科 · 2027 届',
    points: [
      '软考中级备考中 · ACA 阿里云初级认证 · CET-4。',
      'SERS 项目负责人：带 5 人团队完成从调研到落地，获挑战杯广西赛区铜奖。',
      '全国大学生节能减排竞赛全国三等奖（核心成员）。',
    ],
  },
  {
    period: '2023.10 — 2025.09',
    org: '校团委 · 学生部',
    role: '副主席',
    points: [
      '负责 100+ 人考勤管理，设计电子考勤流程，推动出勤率提升 40%。',
      '统筹 8 场校内外活动，参与人数 1000+，累计推动 5 项校级合作落地。',
    ],
  },
]

export const credentials = [
  { label: '网络工程师', note: '软考中级 · 备考中' },
  { label: 'ACA', note: '阿里云初级认证' },
  { label: 'CET-4', note: '大学英语四级' },
  { label: '挑战杯', note: '广西赛区铜奖' },
  { label: '节能减排', note: '全国三等奖' },
]

export const projects = [
  {
    id: 'lnmp',
    index: '01',
    year: '2026.09 — 10',
    kicker: 'HIGH AVAILABILITY / CLOUD MIGRATION',
    title: '高可用 LNMP 架构与云迁移',
    subtitle: '6 台虚拟机上的入口、Web、数据库全链路冗余',
    summary:
      '用 HAProxy + Keepalived 做统一入口与 VIP 漂移，Nginx + PHP 提供双节点 Web 服务，MySQL 8.4 主从复制保障数据，再把架构简化迁移到腾讯云 ECS。',
    image: '/media/project-lnmp.webp',
    imageAlt: '高可用 LNMP 实验架构图，展示客户端、VIP、HAProxy、Web 集群与 MySQL 主从链路',
    metrics: [
      { value: '6', label: '台 Ubuntu 节点' },
      { value: '5', label: '类故障演练' },
      { value: '2', label: '个 Web 副本' },
    ],
    tags: ['HAProxy', 'Keepalived', 'Nginx', 'MySQL 8.4', 'Ubuntu 26.04', 'Shell'],
    detail: {
      background:
        '单节点 Web 服务一旦故障，业务入口与数据链路会同时中断。这个项目用 6 台 VMware 虚拟机模拟企业 Web 架构，从请求入口一路搭到数据库，再把完整环境简化迁移到腾讯云 ECS。',
      actions: [
        '规划 192.168.100.0/24 网段、hosts 与静态 IP，完成 6 台节点的系统初始化和 SSH 配置。',
        '配置 HAProxy 3.2 反向代理与健康检查，Keepalived 2.3 VRRP；主节点故障后 VIP 在 5 秒内漂移到备节点。',
        '部署 Nginx 1.28 + PHP 8.5，完成静态页、动态页和 HTTPS 自签证书，配置 HTTP 强制跳转。',
        '配置 MySQL 8.4 主从复制，编写 Web / 主从巡检、数据库备份、日志清理脚本。',
        '模拟 Nginx 宕机、Keepalived 主备切换、MySQL 同步异常等场景，按「日志 → 进程 → 端口 → 链路」逐层定位。',
      ],
      results: [
        'VIP 在主备节点间自动切换，HAProxy 健康检查能自动剔除故障 Web 节点，双节点轮询生效。',
        'SHOW REPLICA STATUS 中 IO / SQL 线程均为 Yes，复制延迟 0。',
        '完成腾讯云 ECS 简化迁移，安全组仅开放 22 / 80 / 443，数据库不对公网暴露。',
      ],
      incident: {
        title: 'MySQL 1062 主键冲突',
        text: '主从复制中断后，先比对 binlog 位点与冲突行，确认写入顺序，再重建复制链路并用校验查询确认数据一致。处理过程让我意识到：复制不是「配完就完了」，数据一致性需要持续验证。',
      },
      reflection:
        'Keepalived + VIP 是二层方案，公有云不能直接漂移；生产环境的高可用要交给 CLB / 多可用区。下一步补 MySQL 备份恢复演练，并接入 Prometheus 监控。',
      evidence: [
        {
          src: '/media/project1/mysql-replica-status.webp',
          alt: 'MySQL SHOW REPLICA STATUS 截图，两个复制线程均为 Yes，延迟为 0',
          label: 'MySQL 主从状态',
          caption:
            'SHOW REPLICA STATUS：Replica_IO_Running / Replica_SQL_Running 均为 Yes，Seconds_Behind_Source = 0。',
          group: 'verify',
          wide: true,
        },
        {
          src: '/media/project1/load-balance-terminal.webp',
          alt: '连续 6 次 curl 请求返回 node3 与 node4 交替的终端截图',
          label: '负载均衡验证',
          caption: '连续 6 次 curl https://www.lnmp.lab，node3 / node4 交替返回，轮询生效。',
          group: 'verify',
          wide: true,
        },
        {
          src: '/media/project1/browser-node4.webp',
          alt: '浏览器访问高可用 LNMP 实验站点，当前 Web 节点显示为 node4',
          label: '浏览器访问',
          caption: '通过 HTTPS 访问实验站点，当前 Web 节点显示为 node4。',
          group: 'verify',
          wide: true,
        },
        {
          src: '/media/project1/nginx-tls-curl.webp',
          alt: '本机 curl 访问 Nginx HTTPS 返回 200 的终端截图',
          label: 'Nginx TLS 自检',
          caption:
            '本机 curl -kI https://127.0.0.1/index.html 返回 HTTP/1.1 200 OK，并带 HSTS 安全头。',
          group: 'verify',
          wide: true,
        },
        {
          src: '/media/project1/haproxy-both-up.webp',
          alt: 'HAProxy Statistics Report 截图，web-01 与 web-02 均为 UP',
          label: 'HAProxy 双节点状态',
          caption: 'Statistics Report：web-01 / web-02 均为 UP，前端 80 / 443 正常监听。',
          group: 'verify',
          wide: true,
        },
        {
          src: '/media/project1/haproxy-web01-down.webp',
          alt: 'HAProxy Statistics Report 截图，web-01 为 DOWN，web-02 为 UP',
          label: '故障剔除',
          caption: '关闭 web-01 后，HAProxy 健康检查将其标记为 DOWN，流量保留在 web-02。',
          group: 'incident',
          wide: true,
        },
        {
          src: '/media/project1/db-connection-timeout.webp',
          alt: '实验站点页面显示数据库 Connection timed out 的报错截图',
          label: '数据库连接超时',
          caption:
            '页面显示 SQLSTATE[HY000] [2002] Connection timed out；Web 节点仍在轮询，问题定位到数据库链路。',
          group: 'incident',
          wide: false,
        },
        {
          src: '/media/project1/db-driver-error.webp',
          alt: '实验站点页面显示数据库 could not find driver 的报错截图',
          label: '数据库驱动异常',
          caption:
            '页面显示 could not find driver，进一步排查 PHP PDO / MySQL 扩展与容器内运行环境。',
          group: 'incident',
          wide: false,
        },
      ],
    },
  },
  {
    id: 'platform',
    index: '02',
    year: '2026',
    kicker: 'AI-ASSISTED BUILD / GIT DELIVERY / OBSERVABILITY',
    title: '运维技术交流平台',
    subtitle: 'AI 辅助开发 × Git 版本化 × 9 容器交付',
    summary:
      '面向运维知识沉淀的 B/S 平台，支持登录、文章与需求发布。用 DeepSeek Harness 拆解需求，V4 Pro / Flash 辅助前后端；代码通过 Git 推送到远程仓库，再用 Docker Compose 编排 5 个业务容器与 4 个监控容器上线。',
    image: '/media/project-platform.webp',
    imageAlt: '运维技术交流平台部署架构图，展示 Nginx 网关、前后端、MySQL 与 Redis 容器',
    metrics: [
      { value: '09', label: '个容器服务' },
      { value: '01', label: '个 Git 仓库' },
      { value: '03', label: '个运维脚本' },
    ],
    tags: ['DeepSeek Harness', 'Vue 3', 'Node.js', 'Git', 'GitHub / Gitee', 'Docker Compose', 'MySQL', 'Redis', 'Prometheus', 'Grafana'],
    detail: {
      background:
        '项目最初只是 /opt/ops-platform 下的一组本地文件：代码没有版本记录，部署依赖手工操作，也没有监控。这个项目把「AI 辅助开发 → Git 版本化 → 5 个业务容器上线 → 4 个监控容器接入」串成了一条完整的交付链路。',
      actions: [
        '用 DeepSeek Harness 把需求拆成 10 项任务，V4 Pro 生成登录、文章列表、发布文章、需求广场、发布需求 5 个前端页面；Flash 辅助 4 类 REST API 并完成联调。',
        '配置 Git 用户名与 SSH 密钥，编写 .gitignore / .env.example，完成首次提交、main 分支推送与 v1.0.0 标签。',
        '编写前后端 Dockerfile，构建 2 个镜像；Compose 编排 nginx / frontend / backend / mysql / redis 5 个业务服务。',
        '配置 Nginx 按 location 分流：/ 转发 frontend，/api/ 转发 backend，只暴露 80 / 443；Redis 缓存文章列表 30 秒，会话 TTL 7200 秒。',
        '编写巡检、数据库备份、日志清理 3 个 Shell 脚本并接入 crontab；在 ECS 上使用只读部署公钥 git clone / git pull --rebase 更新代码。',
        '在原 Compose 上增加 Prometheus、Grafana、Node Exporter、cAdvisor 4 个监控容器，统一加入 ops-net；Prometheus 抓取 prometheus / node / cadvisor 三个 job。',
        'Grafana 配置 4 块主机面板并验证数据持久化；Prometheus 规则覆盖 CPU / 内存，最后处理「容器 healthy 但页面 502」的故障。',
      ],
      results: [
        '远程仓库包含 backend / frontend / nginx / docker-compose.yml，.env、node_modules、日志与备份均未进入版本库。',
        '5 个业务容器 + 4 个监控容器均为 Up / healthy，公网完成「登录 → 发布文章 → 需求浏览」闭环。',
        'Prometheus Targets 中 prometheus / node / cadvisor 全部 UP；Grafana 主机面板有 CPU、磁盘、负载与内存曲线。',
        'Redis 缓存文章列表 30 秒、会话 TTL 7200 秒；巡检 / 备份 / 清理 3 个脚本接入 cron。',
      ],
      incident: {
        title: '容器 healthy，但页面 502',
        text: '健康检查只证明进程活着，不代表网关到后端可达。进入 nginx 容器执行 wget 访问 backend:3000/api/health，再查 upstream 错误日志，最终定位到容器网络与启动顺序问题。',
      },
      reflection:
        '单机 Compose 适合交付验证，但 MySQL、Redis 和宿主机仍是单点。下一步接 RDS、补 HTTPS 与 Alertmanager 通知，并把 Git 标签与发布流程串起来，把「能部署」推进到「可持续运行」。',
      git: {
        eyebrow: 'GIT / 项目上 Git',
        title: '把服务器上的代码，变成可追溯的仓库。',
        intro:
          '项目从 /opt/ops-platform 的本地目录开始。通过 SSH 密钥、.gitignore 与首次提交，把代码推到远程仓库，再用只读部署公钥在 ECS 上拉取更新。',
        stats: [
          { value: '01', label: '个远程仓库' },
          { value: '01', label: '条 main 分支' },
          { value: '01', label: '个版本标签' },
          { value: '01', label: '套提交规范' },
        ],
        actions: [
          '配置 user.name / user.email / init.defaultBranch=main，生成 ed25519 SSH 密钥并把公钥添加到代码平台。',
          '编写 .gitignore 与 .env.example，排除 node_modules、dist、.env、日志、备份和密钥文件。',
          '初始化仓库并确认 main 分支，git add . 后提交 chore: initial commit of ops platform。',
          '关联 origin 并推送 main；创建 feature/git-guide 分支、合并回主分支，再打 v1.0.0 标签。',
          '在 ECS 上生成只读部署公钥，用 git clone / git pull --rebase 拉取更新，不覆盖服务器上的 .env。',
        ],
      },
      evidence: [
        {
          src: '/media/git/git-status.webp',
          alt: 'git status 显示 backend、frontend、nginx 与 docker-compose.yml 已进入暂存区的终端截图',
          label: '首次提交暂存区',
          caption:
            'git status 显示 backend / frontend / nginx / docker-compose.yml 已进入暂存区，.env 不在其中。',
          group: 'git',
          wide: true,
        },
        {
          src: '/media/git/gitignore-check.webp',
          alt: 'git check-ignore 验证 .env 与 node_modules 被忽略的终端截图',
          label: '.gitignore 生效',
          caption:
            'git check-ignore -v 确认 .env 与 node_modules 被忽略，git status --short 不再出现敏感文件。',
          group: 'git',
          wide: true,
        },
        {
          src: '/media/git/ssh-test.webp',
          alt: 'ssh -T git@github.com 成功认证并返回用户名的终端截图',
          label: 'SSH 认证',
          caption:
            'ssh -T git@github.com 返回 Hi lgt667! You\'ve successfully authenticated，远程认证通过。',
          group: 'git',
          wide: true,
        },
        {
          src: '/media/git/deploy-key.webp',
          alt: 'GitHub 仓库部署公钥设置页面截图',
          label: 'ECS 部署公钥',
          caption:
            '在仓库设置中添加只读部署公钥，让 ECS 能拉取代码但不具备写权限。',
          group: 'git',
          wide: false,
        },
        {
          src: '/media/git/create-repo.webp',
          alt: '创建 ops-platform 私有远程仓库的页面截图',
          label: '远程仓库',
          caption:
            '新建私有仓库 ops-platform，保持空仓库，再通过本地首次提交推送。',
          group: 'git',
          wide: false,
        },
        {
          src: '/media/platform/nginx-gateway.webp',
          alt: 'Nginx 网关配置截图，展示 / 与 /api/ 的 location 分流',
          label: 'Nginx 网关',
          caption:
            'nginx.conf：/ 转发 frontend:80，/api/ 转发 backend:3000，并透传 Host / X-Forwarded-*。',
          group: 'platform',
          wide: true,
        },
        {
          src: '/media/platform/health-check.webp',
          alt: 'curl /api/health 返回 MySQL 与 Redis 已连接的健康检查截图',
          label: '健康检查',
          caption:
            'curl /api/health 返回 {"status":"ok","mysql":"connected","redis":"connected"}。',
          group: 'platform',
          wide: true,
        },
        {
          src: '/media/platform/compose-business-ps.webp',
          alt: 'docker compose ps 显示五个业务容器均为 Up 的终端截图',
          label: '五个业务容器',
          caption:
            'docker compose ps：nginx / frontend / backend / mysql / redis 全部 Up，MySQL 为 healthy。',
          group: 'platform',
          wide: true,
        },
        {
          src: '/media/platform/project-layout.webp',
          alt: '运维平台项目目录结构截图',
          label: '项目目录',
          caption:
            'backend、frontend、nginx、scripts 与 docker-compose.yml 的目录结构。',
          group: 'platform',
          wide: false,
        },
        {
          src: '/media/platform/image-size.webp',
          alt: 'docker images 显示后端 289MB、前端 38MB 的终端截图',
          label: '镜像体积',
          caption:
            '后端镜像 289MB、前端镜像 38MB；前端采用多阶段构建，只保留 Nginx 与静态文件。',
          group: 'platform',
          wide: true,
        },
        {
          src: '/media/platform/schema-sql.webp',
          alt: 'init.sql 创建 users、articles、requirements 三张表的代码截图',
          label: '数据库初始化',
          caption:
            'init.sql 创建 users / articles / requirements 三张表，并写入默认管理员。',
          group: 'platform',
          wide: false,
        },
        {
          src: '/media/platform/ai-backend.webp',
          alt: 'DeepSeek 生成 Node.js 后端接口的对话截图',
          label: 'AI 后端接口',
          caption:
            '用 Flash 生成登录、文章、需求、健康检查接口；数据库连接从环境变量读取。',
          group: 'platform',
          wide: true,
        },
        {
          src: '/media/platform/ai-frontend.webp',
          alt: 'DeepSeek 生成 Vue 3 前端页面的对话截图',
          label: 'AI 前端页面',
          caption:
            '用 V4 Pro 生成 Vue 3 单页应用，登录后以 tab 切换文章列表、发布、需求广场和发布需求。',
          group: 'platform',
          wide: true,
        },
        {
          src: '/media/platform/ai-task-breakdown.webp',
          alt: 'AI 生成的前后端任务拆解表截图',
          label: '任务拆解',
          caption:
            '前端 F1–F5、后端接口与部署任务逐项列出输入、输出与验收标准。',
          group: 'platform',
          wide: true,
        },
        {
          src: '/media/platform/project-tree.webp',
          alt: '运维平台完整项目目录树截图',
          label: '代码与脚本',
          caption:
            '项目根目录包含前后端、nginx、prometheus、grafana 与巡检 / 备份 / 清理脚本。',
          group: 'platform',
          wide: true,
        },
        {
          src: '/media/project-platform.webp',
          alt: '运维技术交流平台五个业务容器的部署架构图',
          label: '整体架构',
          caption:
            'Nginx 网关、frontend / backend、MySQL / Redis 组成 5 个业务容器；监控栈在后续章节接入。',
          group: 'platform',
          wide: true,
        },
        {
          src: '/media/platform/grafana-dashboard.webp',
          alt: 'Grafana 主机监控面板截图，展示 CPU、根分区、负载和内存',
          label: 'Grafana 主机面板',
          caption:
            '主机 CPU、根分区、1 分钟负载、内存四块面板，数据源为 Prometheus。',
          group: 'monitor',
          wide: true,
        },
        {
          src: '/media/platform/monitoring-containers.webp',
          alt: 'docker compose ps 显示四个监控容器均为 Up 的终端截图',
          label: '监控容器',
          caption:
            'docker compose ps：Prometheus、Grafana、Node Exporter、cAdvisor 四个监控容器均为 Up。',
          group: 'monitor',
          wide: true,
        },
        {
          src: '/media/platform/prometheus-targets.webp',
          alt: 'Prometheus Targets 页面显示 prometheus、node、cadvisor 三个 job 全部 UP',
          label: 'Prometheus Targets',
          caption: 'prometheus、node、cadvisor 三个 job 全部 UP。',
          group: 'monitor',
          wide: true,
        },
      ],
    },
  },
  {
    id: 'docker',
    index: '03',
    year: '2026.10 — 11',
    kicker: 'CONTAINER OPS / OBSERVABILITY',
    title: 'Docker Compose 博客与监控',
    subtitle: '7 个容器、6 块面板、2 条告警的部署闭环',
    summary:
      '在阿里云 ECS 上用 Compose 编排 Nginx + WordPress + MySQL，配置 Certbot HTTPS；接入 Prometheus、Grafana、Node Exporter 与 cAdvisor，完成主机 / 容器监控与 502 排障。',
    image: '/media/project-docker.webp',
    imageAlt: '博客系统监控链路图，展示 Node Exporter、cAdvisor、Prometheus、Grafana 与告警规则',
    metrics: [
      { value: '7', label: '个运行容器' },
      { value: '6', label: '块监控面板' },
      { value: '2', label: '条告警规则' },
    ],
    tags: ['阿里云 ECS', 'Docker Compose', 'WordPress', 'Certbot', 'Node Exporter', 'Prometheus', 'Grafana', 'cAdvisor'],
    detail: {
      background:
        '把一套现成博客真正跑起来，并证明自己会做部署、安全、监控、排障四件事。项目以 WordPress 为业务，完整走了一遍从 ECS 初始化到告警验证的单机运维闭环。',
      actions: [
        '配置 ECS 安全组仅开放 22 / 80 / 443，3000 / 9090 限制来源 IP；创建 ops 运维用户并关闭密码登录。',
        'Compose 编排 Nginx、WordPress、MySQL 及监控组件共 7 个容器，配置数据卷、健康检查与 depends_on。',
        '用 Certbot 申请 Let\'s Encrypt 证书，Nginx 配置 HTTP 301、TLS 1.2 / 1.3 与自动续期。',
        'Prometheus 每 15 秒抓取 Node Exporter / cAdvisor，Grafana 制作 6 块主机与容器面板。',
        '配置 CPU > 80%、内存 > 85% 持续 5 分钟告警，记录「停止 WordPress → 502 → 定位 → 恢复」全过程。',
      ],
      results: [
        '主机 CPU、内存、磁盘、网络与容器资源指标可视化，Prometheus Targets 全部 UP。',
        '告警规则从 pending 到 firing 验证通过，HTTP 自动 301 跳转 HTTPS。',
        '形成容器退出 / 502 的固定排查顺序，并保留命令与日志证据。',
      ],
      incident: {
        title: '容器退出导致 502',
        text: 'docker compose ps 发现 WordPress 容器已退出，logs 显示数据库连接失败。回溯启动顺序与 MySQL 健康检查，补上依赖条件与重启策略后恢复。结论：网关报 502 时，先看上游容器，不要先改 Nginx。',
      },
      reflection:
        '单机 ECS 没有高可用，cAdvisor 的 privileged 权限也需要在生产环境评估。下一步接 Alertmanager、把数据库迁到 RDS，并补 ECS 快照与恢复演练。',
      evidence: [
        {
          src: '/media/docker/architecture.webp',
          alt: '博客系统部署架构图，展示浏览器、Nginx、WordPress 与 MySQL 的请求链路',
          label: '部署架构',
          caption:
            '浏览器 → Nginx 80/443 → WordPress PHP-FPM 9000 → MySQL 8.4；数据库不对公网开放。',
          group: 'docker',
          wide: true,
        },
        {
          src: '/media/docker/compose-ps.webp',
          alt: 'docker compose ps 显示七个博客与监控容器均为 Up 的终端截图',
          label: '七个容器',
          caption:
            'docker compose ps：nginx、wordpress、mysql、prometheus、grafana、node-exporter、cadvisor 全部 Up。',
          group: 'docker',
          wide: true,
        },
        {
          src: '/media/docker/docker-version-tree.webp',
          alt: 'ECS 终端中查看 Docker 版本与 /opt/blog 项目目录的截图',
          label: 'Docker 与目录',
          caption:
            'ECS 上使用 Docker 29.1.3 / Compose 2.40.3，项目目录 /opt/blog 按服务拆分配置与数据卷。',
          group: 'docker',
          wide: true,
        },
        {
          src: '/media/docker/monitoring-chain.webp',
          alt: '监控链路图，展示 Node Exporter 与 cAdvisor 采集到 Prometheus、Grafana 和告警规则',
          label: '监控链路',
          caption:
            'Node Exporter / cAdvisor → Prometheus → Grafana；CPU > 80%、内存 > 85% 持续 5 分钟触发告警。',
          group: 'monitor',
          wide: true,
        },
        {
          src: '/media/docker/prometheus-targets.webp',
          alt: 'Prometheus Targets 页面显示 node 与 cadvisor 两个抓取目标均为 UP',
          label: 'Targets 全部 UP',
          caption: 'node 与 cadvisor 两个抓取目标均为 UP。',
          group: 'monitor',
          wide: true,
        },
        {
          src: '/media/docker/grafana-cpu.webp',
          alt: 'Grafana 主机 CPU 面板在 stress-ng 压测后的曲线截图',
          label: 'CPU 压测面板',
          caption:
            'stress-ng 压测后，Grafana CPU 曲线明显上升，用于验证采集与告警。',
          group: 'monitor',
          wide: true,
        },
        {
          src: '/media/docker/alert-rules.webp',
          alt: 'Prometheus Alerts 页面显示两条主机 CPU 与内存告警规则处于 inactive',
          label: '告警规则',
          caption:
            'Prometheus Alerts：HostHighCpuUsage / HostHighMemoryUsage 两条规则处于 inactive，等待阈值触发。',
          group: 'monitor',
          wide: true,
        },
        {
          src: '/media/docker/grafana-dashboard.webp',
          alt: 'Grafana 主机与容器监控面板截图',
          label: 'Grafana 面板',
          caption: '主机 CPU、磁盘、内存与容器资源共 6 块面板。',
          group: 'monitor',
          wide: true,
        },
        {
          src: '/media/docker/cadvisor-up.webp',
          alt: 'cAdvisor 容器启动成功并处于 Up healthy 状态的终端截图',
          label: 'cAdvisor',
          caption: 'cAdvisor 容器为 Up (healthy)，8080 端口提供容器指标。',
          group: 'monitor',
          wide: true,
        },
      ],
    },
  },
]

export const strengths = [
  {
    num: '01',
    title: 'Linux 与网络底座',
    lede: '遇到问题先分层，不先重启。',
    body:
      '熟悉 CentOS / Ubuntu / Rocky 的系统管理、用户权限、磁盘与服务配置；能用 Ping / Traceroute / Wireshark 逐段定位 DNS、路由、端口与 TLS 问题。',
    tags: ['CentOS', 'Ubuntu', 'Rocky', 'TCP/IP', 'Wireshark', 'TLS'],
    proof: '6 台节点 / 3 套系统',
  },
  {
    num: '02',
    title: '高可用与云上部署',
    lede: '让入口有备份，让切换可验证。',
    body:
      '能部署 Nginx、Tomcat 与四层 / 七层负载均衡，结合 Keepalived 实现 VIP 高可用；熟悉腾讯云 / 阿里云 ECS、VPC、安全组与公网访问配置。',
    tags: ['Nginx', 'HAProxy', 'Keepalived', 'ECS', 'VPC', '安全组'],
    proof: 'VIP 漂移 / 5 类故障演练',
  },
  {
    num: '03',
    title: '容器与可观测性',
    lede: '不只装面板，要能回答哪里坏了。',
    body:
      '用 Docker / Compose 完成多服务编排、数据卷与健康检查；能配置 Prometheus + Grafana + Node Exporter + cAdvisor，也了解 Kubernetes 基础资源、Zabbix 与 ELK 日志链路。',
    tags: ['Docker', 'Compose', 'Kubernetes', 'Prometheus', 'Grafana', 'cAdvisor'],
    proof: '16 个容器 / 2 条告警',
    accent: true,
  },
  {
    num: '04',
    title: '自动化与复盘',
    lede: '把一次解决，变成下次更快。',
    body:
      '编写 Shell 巡检、备份、清理脚本并接入 cron；使用 Git / Gitee / GitHub 管理代码与配置；能用 Codex、Claude 辅助脚本、配置与故障日志分析。',
    tags: ['Shell', 'cron', 'Git', 'Jenkins', 'AI 辅助', '技术文档'],
    proof: '3 个脚本 / 1 个 Git 仓库',
  },
]

export const learning = ['Kubernetes 生产实践', 'Ansible', 'VLAN / OSPF / ACL', 'Alertmanager']
