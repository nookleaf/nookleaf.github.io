/**
 * ============================================================================
 * TPKG DOCUMENTATION TRANSLATIONS MODULE - Nookleaf & tetoOS
 * Contains translations specifically for docs_tpkg.html
 * Multi-language support: EN, JA, RU, ZH, KO, AR, ID
 * ============================================================================
 */

(function() {
    const docsTpkgTranslations = {
        en: {
            tpkg_badge: "PACKAGE MANAGER & USER GUIDE",
            tpkg_main_title: "tpkg — Teto Package Manager",
            tpkg_main_subtitle: "A blazing-fast, Arch Linux-style package manager designed for Windows. Install, upgrade, and manage your applications effortlessly from the command line.",
            
            tpkg_toc_title: "📑 TABLE OF CONTENTS",
            tpkg_toc_1: "1. What is tpkg?",
            tpkg_toc_2: "2. Beginner Quick Start",
            tpkg_toc_3: "3. Recommended: Winget & MS Store",
            tpkg_toc_4: "4. Installing & Upgrading (-S)",
            tpkg_toc_5: "5. Searching & Inspecting (-Q)",
            tpkg_toc_6: "6. Uninstalling Cleanly (-R)",
            tpkg_toc_7: "7. Community Repo (TETAUR)",
            tpkg_toc_8: "8. Building Packages (-B)",
            tpkg_toc_9: "9. Quick Command Cheat Sheet",

            tpkg_sec1_title: '<span class="icon">⚡</span> 1. What is tpkg?',
            tpkg_sec1_lead: "<strong>tpkg</strong> (Teto Package Manager) is a modern package management system built natively in <strong>Rust</strong> for tetoOS and Windows.",
            tpkg_sec1_p1: "If you've ever used <strong>Arch Linux</strong> (pacman) or <strong>Void Linux</strong> (xbps), you'll feel right at home. Instead of opening a web browser, hunting down download buttons, dodging installer adware, and clicking \"Next, Next, Agree, Finish\", <code>tpkg</code> lets you install, update, and manage all your software with single, concise terminal commands.",
            tpkg_sec1_arch_title: "Under the Hood Highlights:",
            tpkg_sec1_arch1: "<strong>Native Speed:</strong> Built from scratch in Rust with zero heavy runtime overhead.",
            tpkg_sec1_arch2: "<strong>PubGrub Dependency Resolver:</strong> Automatically detects and resolves required libraries and dependencies before installing.",
            tpkg_sec1_arch3: "<strong>.tetopkg Format:</strong> Ultra-fast compression using Zstandard (zstd) and tar archives for instantaneous decompression.",
            tpkg_sec1_arch4: "<strong>Atomic Safety:</strong> If an installation fails mid-way, <code>tpkg</code> rolls back changes automatically to prevent broken states.",
            tpkg_sec1_arch5: "<strong>Windows GUI Sync:</strong> Automatically syncs with Windows <strong>Apps & features</strong> and Control Panel so you can still uninstall apps the standard way.",

            tpkg_sec2_title: '<span class="icon">🚀</span> 2. Beginner Quick Start',
            tpkg_sec2_lead: "You don't need to memorize dozens of flags. Here are the 3 most essential commands you'll use 95% of the time:",

            tpkg_sec3_title: '<span class="icon">⭐</span> 3. Best & Recommended: Winget & MS Store Integration',
            tpkg_sec3_lead: "For daily computer use, pairing <code>tpkg</code> with the vast <strong>Winget</strong> and <strong>Microsoft Store</strong> ecosystem is the easiest and most powerful method to get your software!",

            tpkg_sec4_title: '<span class="icon">📥</span> 4. Installing & Upgrading Native Packages (-S / Sync)',
            tpkg_sec4_lead: "The <code>-S</code> (Sync) mode interacts with official tetoOS repositories to download, verify, install, and update native <code>.tetopkg</code> packages.",

            tpkg_sec5_title: '<span class="icon">🔍</span> 5. Searching & Inspecting (-Q / Query)',
            tpkg_sec5_lead: "The <code>-Q</code> (Query) mode lets you inspect your local system to see what is currently installed, search local apps, and trace files.",

            tpkg_sec6_title: '<span class="icon">🗑️</span> 6. Uninstalling Software Cleanly (-R / Remove)',
            tpkg_sec6_lead: "When you remove software with <code>tpkg</code>, it tracks installed files precisely to prevent leaving orphaned junk or bloated directories behind.",
            tpkg_sec6_gui_sync: "<strong>Prefer Using the Windows Interface?</strong><br>Don't worry if you ever feel uncomfortable using the command line! All software installed through <code>tpkg</code> is automatically registered with Windows. You can open <strong>Windows Settings &rarr; Apps &rarr; Installed apps</strong> (or the classic <strong>Control Panel &rarr; Programs and Features</strong>) and uninstall or modify any application the traditional Windows way whenever you wish.",

            tpkg_sec7_title_tetaur: '<span class="icon">🌐</span> 7. Community Repository (TETAUR)',
            tpkg_sec7_lead_tetaur: "<strong>TETAUR</strong> (Teto User Repository) is the community repository system, inspired directly by Arch Linux's AUR.",

            tpkg_sec8_title: '<span class="icon">📦</span> 8. Building Packages (-B / TETOBUILD)',
            tpkg_sec8_lead: "Building packages in <code>tpkg</code> is straightforward. Instead of complex bash scripts, recipes use clean, human-readable <strong>TOML</strong> format.",

            tpkg_sec9_title: '<span class="icon">📋</span> 9. Quick Command Cheat Sheet',
            tpkg_sec9_lead: "Bookmark or save this cheat sheet for fast reference whenever you're using the terminal:"
        },
        ja: {
            tpkg_badge: "パッケージマネージャー & ユーザーガイド",
            tpkg_main_title: "tpkg — Teto Package Manager",
            tpkg_main_subtitle: "Windows向けに設計された、Arch Linux（pacman）スタイルの超高速パッケージマネージャー。コマンドラインから簡単にアプリをインストール、更新、管理できます。",
            
            tpkg_toc_title: "📑 目次",
            tpkg_toc_1: "1. tpkg とは？",
            tpkg_toc_2: "2. 初心者向けクイックスタート",
            tpkg_toc_3: "3. 推奨：Winget & MS Store連携",
            tpkg_toc_4: "4. 公式パッケージの導入と更新 (-S)",
            tpkg_toc_5: "5. パッケージの検索と確認 (-Q)",
            tpkg_toc_6: "6. クリーンなアンインストール (-R)",
            tpkg_toc_7: "7. コミュニティリポジトリ (TETAUR)",
            tpkg_toc_8: "8. パッケージのビルド (-B)",
            tpkg_toc_9: "9. コマンドチートシート",

            tpkg_sec1_title: '<span class="icon">⚡</span> 1. tpkg とは？',
            tpkg_sec1_lead: "<strong>tpkg</strong>（Teto Package Manager）は、tetoOS および Windows のために <strong>Rust</strong> でゼロから開発された最新のパッケージ管理システムです。",
            tpkg_sec1_p1: "<strong>Arch Linux</strong>（pacman）や <strong>Void Linux</strong>（xbps）を使ったことがある方なら、すぐに使いこなせます。ブラウザを開いてダウンロードリンクを探したり、広告付きインストーラーを警戒しながら『次へ、同意、完了』を連打する時代は終わりました。<code>tpkg</code> なら単一の簡潔なコマンドですべてのソフトウェアを管理できます。",
            tpkg_sec1_arch_title: "内部アーキテクチャの特徴:",
            tpkg_sec1_arch1: "<strong>ネイティブの高速性:</strong> ランタイムのオーバーヘッドがない純粋な Rust 製。",
            tpkg_sec1_arch2: "<strong>PubGrub 依存関係リゾルバー:</strong> 必要なライブラリや依存関係を自動的に解析・解決。",
            tpkg_sec1_arch3: "<strong>.tetopkg フォーマット:</strong> Zstandard (zstd) と tar アーカイブによる瞬時の展開と極小サイズ。",
            tpkg_sec1_arch4: "<strong>アトミックな安全性:</strong> インストールが途中で失敗した場合でも、自動ロールバックによりシステムの破損を防止。",
            tpkg_sec1_arch5: "<strong>Windows GUI との自動同期:</strong> Windows の『インストールされているアプリ』やコントロールパネルに自動登録されるため、通常通りの画面からも削除可能。",

            tpkg_sec2_title: '<span class="icon">🚀</span> 2. 初心者向けクイックスタート',
            tpkg_sec2_lead: "無数のフラグを暗記する必要はありません。日常的に使う基本コマンドは以下の3つだけです:",

            tpkg_sec3_title: '<span class="icon">⭐</span> 3. 最もおすすめ：Winget & MS Store 連携',
            tpkg_sec3_lead: "日常利用において、<code>tpkg</code> を <strong>Winget</strong> や <strong>Microsoft Store</strong> と連携させるのが最も手軽で強力な方法です！",

            tpkg_sec4_title: '<span class="icon">📥</span> 4. 公式パッケージの導入と更新 (-S / Sync)',
            tpkg_sec4_lead: "<code>-S</code>（Sync）モードは、リモートリポジトリと通信して公式の <code>.tetopkg</code> パッケージのダウンロード、検証、インストール、一括更新を行います。",

            tpkg_sec5_title: '<span class="icon">🔍</span> 5. パッケージの検索と確認 (-Q / Query)',
            tpkg_sec5_lead: "<code>-Q</code>（Query）モードを使用すると、現在ローカルにインストールされているアプリの確認、ファイル検索、パッケージ情報の参照が可能です。",

            tpkg_sec6_title: '<span class="icon">🗑️</span> 6. クリーンなアンインストール (-R / Remove)',
            tpkg_sec6_lead: "<code>tpkg</code> はインストールされたファイルを正確に追跡するため、アンインストール時に不要な残骸や孤立した依存関係を残しません。",
            tpkg_sec6_gui_sync: "<strong>Windows の画面から操作したい場合:</strong><br>コマンドラインでの操作に慣れていなくても安心してください。<code>tpkg</code> でインストールしたアプリはすべて Windows に自動登録されます。通常通り <strong>Windows 設定 &rarr; アプリ &rarr; インストールされているアプリ</strong>（またはクラシックな <strong>コントロール パネル &rarr; プログラムと機能</strong>）からいつでもアンインストールや変更が可能です。",

            tpkg_sec7_title_tetaur: '<span class="icon">🌐</span> 7. コミュニティリポジトリ (TETAUR)',
            tpkg_sec7_lead_tetaur: "<strong>TETAUR</strong>（Teto User Repository）は、Arch Linux の AUR に着想を得たコミュニティ主導のリポジトリシステムです。",

            tpkg_sec8_title: '<span class="icon">📦</span> 8. パッケージのビルド (-B / TETOBUILD)',
            tpkg_sec8_lead: "<code>tpkg</code> のパッケージビルドは非常に明快です。複雑なシェルスクリプトの代わりに、人間が読みやすい <strong>TOML</strong> 形式のレシピを使用します。",

            tpkg_sec9_title: '<span class="icon">📋</span> 9. コマンドチートシート',
            tpkg_sec9_lead: "ターミナル操作時にすぐ参照できるよう、このチートシートをお役立てください:"
        },
        ru: {
            tpkg_badge: "ПАКЕТНЫЙ МЕНЕДЖЕР И РУКОВОДСТВО",
            tpkg_main_title: "tpkg — Пакетный менеджер Teto",
            tpkg_main_subtitle: "Сверхбыстрый пакетный менеджер в стиле Arch Linux (pacman) для Windows. Устанавливайте, обновляйте и управляйте программами через командную строку.",
            
            tpkg_toc_title: "📑 СОДЕРЖАНИЕ",
            tpkg_toc_1: "1. Что такое tpkg?",
            tpkg_toc_2: "2. Быстрый старт для новичков",
            tpkg_toc_3: "3. Рекомендуется: Winget и MS Store",
            tpkg_toc_4: "4. Установка и обновление (-S)",
            tpkg_toc_5: "5. Поиск и локальная база (-Q)",
            tpkg_toc_6: "6. Чистое удаление программ (-R)",
            tpkg_toc_7: "7. Репозиторий сообщества (TETAUR)",
            tpkg_toc_8: "8. Сборка пакетов (-B)",
            tpkg_toc_9: "9. Шпаргалка по командам",

            tpkg_sec1_title: '<span class="icon">⚡</span> 1. Что такое tpkg?',
            tpkg_sec1_lead: "<strong>tpkg</strong> (Teto Package Manager) — современная система управления пакетами, написанная на <strong>Rust</strong> специально для tetoOS и Windows.",
            tpkg_sec1_p1: "Если вы когда-либо использовали <strong>Arch Linux</strong> (pacman) или <strong>Void Linux</strong> (xbps), вы почувствуете себя как дома. Больше не нужно открывать браузер, искать кнопки загрузки, опасаться рекламы и нажимать «Далее, Далее, Готово». <code>tpkg</code> позволяет управлять программами лаконичными командами терминала.",
            tpkg_sec1_arch_title: "Ключевые особенности архитектуры:",
            tpkg_sec1_arch1: "<strong>Максимальная скорость:</strong> Написан с нуля на Rust без тяжелых зависимостей.",
            tpkg_sec1_arch2: "<strong>Резолвер PubGrub:</strong> Автоматически находит и разрешает зависимости перед установкой.",
            tpkg_sec1_arch3: "<strong>Формат .tetopkg:</strong> Быстрое сжатие Zstandard (zstd) и архивы tar для мгновенной распаковки.",
            tpkg_sec1_arch4: "<strong>Атомарная безопасность:</strong> При сбое установки происходит автоматический откат изменений.",
            tpkg_sec1_arch5: "<strong>Синхронизация с GUI Windows:</strong> Автоматически регистрируется в «Параметрах Windows» и Панели управления, позволяя удалять программы стандартным способом.",

            tpkg_sec2_title: '<span class="icon">🚀</span> 2. Быстрый старт для новичков',
            tpkg_sec2_lead: "Вам не нужно учить десятки флагов. Вот 3 главные команды, которые вы будете использовать в 95% случаев:",

            tpkg_sec3_title: '<span class="icon">⭐</span> 3. Лучший выбор: Интеграция с Winget и MS Store',
            tpkg_sec3_lead: "Для повседневного использования связка <code>tpkg</code> с каталогами <strong>Winget</strong> и <strong>Microsoft Store</strong> — самый простой и удобный способ установки программ!",

            tpkg_sec4_title: '<span class="icon">📥</span> 4. Установка и обновление нативных пакетов (-S / Sync)',
            tpkg_sec4_lead: "Режим <code>-S</code> (Sync) связывается с официальными репозиториями tetoOS для загрузки, проверки, установки и полного обновления пакетов <code>.tetopkg</code>.",

            tpkg_sec5_title: '<span class="icon">🔍</span> 5. Поиск и локальная база (-Q / Query)',
            tpkg_sec5_lead: "Режим <code>-Q</code> (Query) позволяет просматривать установленные программы, искать файлы и проверять информацию о пакетах.",

            tpkg_sec6_title: '<span class="icon">🗑️</span> 6. Чистое удаление программ (-R / Remove)',
            tpkg_sec6_lead: "При удалении через <code>tpkg</code> система точно отслеживает все файлы, не оставляя мусора в реестре и лишних зависимостей.",
            tpkg_sec6_gui_sync: "<strong>Предпочитаете графический интерфейс Windows?</strong><br>Если вам неудобно работать в командной строке — не переживайте! Все программы, установленные через <code>tpkg</code>, автоматически регистрируются в Windows. Вы можете открыть <strong>Параметры &rarr; Приложения &rarr; Установленные приложения</strong> (или классическую <strong>Панель управления &rarr; Программы и компоненты</strong>) и удалить программу привычным способом.",

            tpkg_sec7_title_tetaur: '<span class="icon">🌐</span> 7. Репозиторий сообщества (TETAUR)',
            tpkg_sec7_lead_tetaur: "<strong>TETAUR</strong> (Teto User Repository) — репозиторий пользовательских рецептов сборки, созданный по аналогии с Arch AUR.",

            tpkg_sec8_title: '<span class="icon">📦</span> 8. Сборка пакетов (-B / TETOBUILD)',
            tpkg_sec8_lead: "Создание пакетов в <code>tpkg</code> предельно просто. Вместо сложных скриптов используются понятные рецепты в формате <strong>TOML</strong>.",

            tpkg_sec9_title: '<span class="icon">📋</span> 9. Шпаргалка по командам',
            tpkg_sec9_lead: "Сохраните эту шпаргалку для быстрого обращения при работе в терминале:"
        },
        zh: {
            tpkg_badge: "包管理器与使用指南",
            tpkg_main_title: "tpkg — Teto 包管理器",
            tpkg_main_subtitle: "专为 Windows 打造的超快 Arch Linux (pacman) 风格包管理器。通过命令行轻松安装、升级与管理各类应用软件。",
            
            tpkg_toc_title: "📑 目录导航",
            tpkg_toc_1: "1. 什么是 tpkg？",
            tpkg_toc_2: "2. 新手快速上手",
            tpkg_toc_3: "3. 推荐方案：Winget 与微软商店",
            tpkg_toc_4: "4. 官方包安装与升级 (-S)",
            tpkg_toc_5: "5. 本地查询与检索 (-Q)",
            tpkg_toc_6: "6. 干净卸载软件 (-R)",
            tpkg_toc_7: "7. 社区源 (TETAUR)",
            tpkg_toc_8: "8. 构建软件包 (-B)",
            tpkg_toc_9: "9. 常用指令速查表",

            tpkg_sec1_title: '<span class="icon">⚡</span> 1. 什么是 tpkg？',
            tpkg_sec1_lead: "<strong>tpkg</strong>（Teto Package Manager）是采用 <strong>Rust</strong> 语言为 tetoOS 及 Windows 原生开发的现代包管理工具。",
            tpkg_sec1_p1: "如果您熟悉 <strong>Arch Linux</strong> (pacman) 或 <strong>Void Linux</strong> (xbps)，您会感到倍感亲切。无需再打开网页搜寻下载链接、提防捆绑流氓软件或反复点击“下一步、同意、完成”。<code>tpkg</code> 让您仅需单行命令即可掌控全局。",
            tpkg_sec1_arch_title: "底层核心优势：",
            tpkg_sec1_arch1: "<strong>原生极致速度：</strong> 纯 Rust 打造，无臃肿运行环境开销。",
            tpkg_sec1_arch2: "<strong>PubGrub 依赖解析器：</strong> 自动智能解析安装所需的所有组件与库依赖。",
            tpkg_sec1_arch3: "<strong>.tetopkg 格式：</strong> 基于 Zstandard (zstd) 与 tar 架构的高速压缩格式。",
            tpkg_sec1_arch4: "<strong>原子性事务安全：</strong> 安装意外中断时自动安全回滚，杜绝系统半损坏状态。",
            tpkg_sec1_arch5: "<strong>Windows 图形界面双向同步：</strong> 自动注册至 Windows“已安装应用”及控制面板，随时可用常规界面卸载。",

            tpkg_sec2_title: '<span class="icon">🚀</span> 2. 新手快速上手',
            tpkg_sec2_lead: "无需死记硬背繁琐参数，日常 95% 的操作仅需以下 3 个基础命令：",

            tpkg_sec3_title: '<span class="icon">⭐</span> 3. 首选推荐：Winget 与微软商店无缝联动',
            tpkg_sec3_lead: "在日常使用中，将 <code>tpkg</code> 与 <strong>Winget</strong> 及 <strong>Microsoft Store</strong> 配合使用是获取海量软件的最快途径！",

            tpkg_sec4_title: '<span class="icon">📥</span> 4. 官方包安装与升级 (-S / Sync)',
            tpkg_sec4_lead: "<code>-S</code>（Sync）模式用于连接官方软件源，进行 <code>.tetopkg</code> 包的下载、校验、批量安装与全系统升级。",

            tpkg_sec5_title: '<span class="icon">🔍</span> 5. 本地查询与检索 (-Q / Query)',
            tpkg_sec5_lead: "<code>-Q</code>（Query）模式用于检查本地已安装的软件、查询文件归属包以及查看详细信息。",

            tpkg_sec6_title: '<span class="icon">🗑️</span> 6. 干净卸载软件 (-R / Remove)',
            tpkg_sec6_lead: "使用 <code>tpkg</code> 卸载软件时，系统会精准清理关联文件，杜绝残留孤儿依赖与注册表垃圾。",
            tpkg_sec6_gui_sync: "<strong>偏好使用 Windows 设置界面？</strong><br>如果您不习惯命令行操作，完全不必担心！所有通过 <code>tpkg</code> 安装的软件都会自动注册到系统中。您可以随时打开 <strong>Windows 设置 &rarr; 应用 &rarr; 安装的应用</strong>（或传统的 <strong>控制面板 &rarr; 程序和功能</strong>）像平常一样进行卸载或修改。",

            tpkg_sec7_title_tetaur: '<span class="icon">🌐</span> 7. 社区源 (TETAUR)',
            tpkg_sec7_lead_tetaur: "<strong>TETAUR</strong>（Teto User Repository）是参考 Arch AUR 机制建立的社区构建配方仓库。",

            tpkg_sec8_title: '<span class="icon">📦</span> 8. 构建软件包 (-B / TETOBUILD)',
            tpkg_sec8_lead: "在 <code>tpkg</code> 中打包极为轻松。无需编写复杂的 Shell 脚本，而是采用清晰直观的 <strong>TOML</strong> 配置文件。",

            tpkg_sec9_title: '<span class="icon">📋</span> 9. 常用指令速查表',
            tpkg_sec9_lead: "请保存此速查表，方便在终端中快速检索对应指令："
        },
        ko: {
            tpkg_badge: "패키지 매니저 & 사용자 가이드",
            tpkg_main_title: "tpkg — Teto 패키지 매니저",
            tpkg_main_subtitle: "Windows 환경을 위해 설계된 초고속 Arch Linux(pacman) 스타일 패키지 매니저. 명령줄 하나로 앱 설치, 업그레이드, 관리를 간편하게 수행하세요.",
            
            tpkg_toc_title: "📑 목차",
            tpkg_toc_1: "1. tpkg란 무엇인가요?",
            tpkg_toc_2: "2. 초보자를 위한 빠른 시작",
            tpkg_toc_3: "3. 추천: Winget & MS Store 연동",
            tpkg_toc_4: "4. 공식 패키지 설치 및 업데이트 (-S)",
            tpkg_toc_5: "5. 로컬 패키지 조회 (-Q)",
            tpkg_toc_6: "6. 깔끔한 프로그램 제거 (-R)",
            tpkg_toc_7: "7. 커뮤니티 저장소 (TETAUR)",
            tpkg_toc_8: "8. 패키지 빌드 (-B)",
            tpkg_toc_9: "9. 명령어 요약표",

            tpkg_sec1_title: '<span class="icon">⚡</span> 1. tpkg란 무엇인가요?',
            tpkg_sec1_lead: "<strong>tpkg</strong>(Teto Package Manager)는 tetoOS 및 Windows 환경을 위해 <strong>Rust</strong>로 개발된 차세대 패키지 관리 도구입니다.",
            tpkg_sec1_p1: "<strong>Arch Linux</strong>(pacman)나 <strong>Void Linux</strong>(xbps)를 사용해본 경험이 있다면 매우 익숙할 것입니다. 브라우저에서 다운로드 링크를 찾거나 광고성 설치 프로그램을 일일이 '다음, 동의, 완료' 누를 필요 없이, <code>tpkg</code>의 간결한 명령어 하나로 모든 소프트웨어를 관리할 수 있습니다.",
            tpkg_sec1_arch_title: "핵심 기술적 특징:",
            tpkg_sec1_arch1: "<strong>네이티브 속도:</strong> 무거운 런타임 오버헤드 없이 순수 Rust로 제작.",
            tpkg_sec1_arch2: "<strong>PubGrub 의존성 해결사:</strong> 설치 전 필요한 라이브러리와 의존성을 자동 분석.",
            tpkg_sec1_arch3: "<strong>.tetopkg 포맷:</strong> Zstandard (zstd) 압축과 tar 아카이브 기반의 즉각적인 압축 해제.",
            tpkg_sec1_arch4: "<strong>원자적 안정성:</strong> 설치 도중 오류 발생 시 자동 롤백으로 시스템 손상 방지.",
            tpkg_sec1_arch5: "<strong>Windows GUI 자동 동기화:</strong> Windows의 '설치된 앱' 및 제어판에 자동 등록되어 일반 화면에서도 삭제 가능.",

            tpkg_sec2_title: '<span class="icon">🚀</span> 2. 초보자를 위한 빠른 시작',
            tpkg_sec2_lead: "수많은 옵션을 외울 필요가 없습니다. 일상 작업의 95%는 아래 3가지 명령어로 해결됩니다:",

            tpkg_sec3_title: '<span class="icon">⭐</span> 3. 가장 추천하는 방식: Winget & MS Store 연동',
            tpkg_sec3_lead: "일상적인 PC 사용에서는 <code>tpkg</code>와 방대한 <strong>Winget</strong> 및 <strong>Microsoft Store</strong> 생태계를 함께 사용하는 것이 가장 편리합니다!",

            tpkg_sec4_title: '<span class="icon">📥</span> 4. 공식 패키지 설치 및 업데이트 (-S / Sync)',
            tpkg_sec4_lead: "<code>-S</code> (Sync) 모드는 공식 저장소와 통신하여 <code>.tetopkg</code> 패키지를 다운로드, 검증, 일괄 설치 및 전체 업그레이드합니다.",

            tpkg_sec5_title: '<span class="icon">🔍</span> 5. 로컬 패키지 조회 (-Q / Query)',
            tpkg_sec5_lead: "<code>-Q</code> (Query) 모드는 현재 시스템에 설치된 소프트웨어를 확인하고 파일 소유권을 추적합니다.",

            tpkg_sec6_title: '<span class="icon">🗑️</span> 6. 깔끔한 프로그램 제거 (-R / Remove)',
            tpkg_sec6_lead: "<code>tpkg</code>로 프로그램을 삭제하면 설치된 파일과 불필요한 의존성까지 깔끔하게 정리되어 시스템이 항상 쾌적하게 유지됩니다.",
            tpkg_sec6_gui_sync: "<strong>Windows 기본 설정 창에서 삭제하고 싶으신가요?</strong><br>명령줄 사용이 낯설더라도 걱정하지 마세요. <code>tpkg</code>로 설치한 모든 소프트웨어는 Windows에 자동 등록됩니다. 평소처럼 <strong>Windows 설정 &rarr; 앱 &rarr; 설치된 앱</strong>(또는 클래식 <strong>제어판 &rarr; 프로그램 및 기능</strong>)에서 언제든지 프로그램을 삭제하거나 수정할 수 있습니다.",

            tpkg_sec7_title_tetaur: '<span class="icon">🌐</span> 7. 커뮤니티 저장소 (TETAUR)',
            tpkg_sec7_lead_tetaur: "<strong>TETAUR</strong> (Teto User Repository)는 Arch AUR에서 영감을 받은 커뮤니티 빌드 레시피 저장소입니다.",

            tpkg_sec8_title: '<span class="icon">📦</span> 8. 패키지 빌드 (-B / TETOBUILD)',
            tpkg_sec8_lead: "<code>tpkg</code>의 패키징은 간결합니다. 복잡한 셸 스크립트 대신 읽기 쉬운 <strong>TOML</strong> 파일로 빌드 레시피를 작성합니다.",

            tpkg_sec9_title: '<span class="icon">📋</span> 9. 명령어 요약표',
            tpkg_sec9_lead: "터미널 작업 시 빠르게 찾아볼 수 있도록 이 요약표를 참고하세요:"
        },
        ar: {
            tpkg_badge: "مدير الحزم ودليل الاستخدام",
            tpkg_main_title: "tpkg — مدير حزم Teto",
            tpkg_main_subtitle: "مدير حزم فائق السرعة بأسلوب Arch Linux (pacman) مصمم لنظام Windows. قم بتثبيت التطبيقات وتحديثها وإدارتها بسهولة عبر سطر الأوامر.",
            
            tpkg_toc_title: "📑 فهرس المحتويات",
            tpkg_toc_1: "1. ما هو tpkg؟",
            tpkg_toc_2: "2. البداية السريعة للمبتدئين",
            tpkg_toc_3: "3. موصى به: التكامل مع Winget و MS Store",
            tpkg_toc_4: "4. تثبيت الحزم وتحديثها (-S)",
            tpkg_toc_5: "5. فحص والبحث في الحزم (-Q)",
            tpkg_toc_6: "6. إزالة البرامج بنظافة (-R)",
            tpkg_toc_7: "7. مستودع المجتمع (TETAUR)",
            tpkg_toc_8: "8. بناء الحزم (-B)",
            tpkg_toc_9: "9. جدول الأوامر السريع",

            tpkg_sec1_title: '<span class="icon">⚡</span> 1. ما هو tpkg؟',
            tpkg_sec1_lead: "<strong>tpkg</strong> (Teto Package Manager) هو نظام إدارة حزم حديث مبني بلغة <strong>Rust</strong> خصيصاً لـ tetoOS و Windows.",
            tpkg_sec1_p1: "إذا سبق لك استخدام <strong>Arch Linux</strong> (pacman) أو <strong>Void Linux</strong> (xbps)، فستشعر بالألفة التامة. بدلاً من فتح المتصفح والبحث عن روابط التنزيل ومواجهة برامج الإعلانات والنقر المتكرر على 'التالي'، يتيح لك <code>tpkg</code> إدارة جميع برامجك بأوامر طرفية مقتضبة.",
            tpkg_sec1_arch_title: "أبرز مميزات البنية التحتية:",
            tpkg_sec1_arch1: "<strong>سرعة فائقة:</strong> مبني من الصفر بلغة Rust بدون استهلاك زائد لموارد النظام.",
            tpkg_sec1_arch2: "<strong>محلل الاعتماديات PubGrub:</strong> يكتشف ويحل متطلبات البرامج والمكتبات تلقائياً قبل التثبيت.",
            tpkg_sec1_arch3: "<strong>صيغة .tetopkg:</strong> ضغط فائق السرعة باستخدام Zstandard (zstd) وأرشيف tar لفك الضغط الفوري.",
            tpkg_sec1_arch4: "<strong>أمان ذري:</strong> في حال فشل التثبيت، يتم التراجع عن التغييرات تلقائياً لمنع أي تلف في النظام.",
            tpkg_sec1_arch5: "<strong>مزامنة مع واجهة Windows:</strong> يتم تسجيل البرامج تلقائياً في لوحة تحكم Windows وقائمة التطبيقات المثبتة.",

            tpkg_sec2_title: '<span class="icon">🚀</span> 2. البداية السريعة للمبتدئين',
            tpkg_sec2_lead: "لا تحتاج لحفظ عشرات الأوامر المعقدة. إليك الأوامر الثلاثة الأساسية التي ستستخدمها في 95% من الأوقات:",

            tpkg_sec3_title: '<span class="icon">⭐</span> 3. الخيار الأفضل والموصى به: التكامل مع Winget و MS Store',
            tpkg_sec3_lead: "للاستخدام اليومي، يعد ربط <code>tpkg</code> بمستودعات <strong>Winget</strong> و <strong>Microsoft Store</strong> الطريقة الأسهل والأقوى للحصول على برامجك المفضلة!",

            tpkg_sec4_title: '<span class="icon">📥</span> 4. تثبيت وتحديث الحزم الرسمية (-S / Sync)',
            tpkg_sec4_lead: "يتصل وضع <code>-S</code> (Sync) بالمستودعات الرسمية لتنزيل حزم <code>.tetopkg</code> والتحقق منها وتثبيتها وتحديث النظام بالكامل.",

            tpkg_sec5_title: '<span class="icon">🔍</span> 5. فحص والبحث في الحزم (-Q / Query)',
            tpkg_sec5_lead: "يتيح لك وضع <code>-Q</code> (Query) فحص البرامج المثبتة محلياً والبحث عن الملفات ومعرفة تفاصيل الحزم.",

            tpkg_sec6_title: '<span class="icon">🗑️</span> 6. إزالة البرامج بنظافة (-R / Remove)',
            tpkg_sec6_lead: "عند إزالة البرامج عبر <code>tpkg</code>، يتتبع النظام الملفات بدقة لمنع ترك أي بقايا أو اعتماديات غير مستخدمة.",
            tpkg_sec6_gui_sync: "<strong>هل تفضل استخدام واجهة Windows التقليدية؟</strong><br>لا تقلق إذا كنت لا تفضل استخدام سطر الأوامر! جميع البرامج المثبتة عبر <code>tpkg</code> مسجلة تلقائياً في Windows. يمكنك فتح <strong>إعدادات Windows &rarr; التطبيقات &rarr; التطبيقات المثبتة</strong> (أو <strong>لوحة التحكم &rarr; البرامج والميزات</strong>) وإلغاء تثبيت أي برنامج بالطريقة المعتادة في أي وقت.",

            tpkg_sec7_title_tetaur: '<span class="icon">🌐</span> 7. مستودع المجتمع (TETAUR)',
            tpkg_sec7_lead_tetaur: "<strong>TETAUR</strong> (Teto User Repository) هو مستودع حزم المجتمع المستوحى من AUR في Arch Linux.",

            tpkg_sec8_title: '<span class="icon">📦</span> 8. بناء الحزم (-B / TETOBUILD)',
            tpkg_sec8_lead: "بناء الحزم في <code>tpkg</code> بسيط للغاية، حيث يعتمد على ملفات تكوين <strong>TOML</strong> الواضحة بدلاً من السكربتات المعقدة.",

            tpkg_sec9_title: '<span class="icon">📋</span> 9. جدول الأوامر السريع',
            tpkg_sec9_lead: "احفظ هذا الجدول المرجعي للرجوع إليه بسرعة أثناء العمل في الطرفية:"
        },
        id: {
            tpkg_badge: "PACKAGE MANAGER & PANDUAN PENGGUNA",
            tpkg_main_title: "tpkg — Teto Package Manager",
            tpkg_main_subtitle: "Package manager super cepat bergaya Arch Linux (pacman) untuk Windows. Instal, perbarui, dan kelola software favorit Anda dengan mudah melalui command line.",
            
            tpkg_toc_title: "📑 DAFTAR ISI",
            tpkg_toc_1: "1. Apa itu tpkg?",
            tpkg_toc_2: "2. Panduan Cepat Pemula",
            tpkg_toc_3: "3. Rekomendasi: Integrasi Winget & MS Store",
            tpkg_toc_4: "4. Instalasi & Update Paket Asli (-S)",
            tpkg_toc_5: "5. Mencari & Memeriksa Paket (-Q)",
            tpkg_toc_6: "6. Uninstall Bersih Tanpa Sisa (-R)",
            tpkg_toc_7: "7. Repositori Komunitas (TETAUR)",
            tpkg_toc_8: "8. Membangun Paket (-B)",
            tpkg_toc_9: "9. Lembar Contekan Perintah (Cheat Sheet)",

            tpkg_sec1_title: '<span class="icon">⚡</span> 1. Apa itu tpkg?',
            tpkg_sec1_lead: "<strong>tpkg</strong> (Teto Package Manager) adalah sistem manajemen paket modern yang dibangun secara native menggunakan bahasa <strong>Rust</strong> untuk tetoOS dan Windows.",
            tpkg_sec1_p1: "Jika Anda pernah menggunakan <strong>Arch Linux</strong> (pacman) atau <strong>Void Linux</strong> (xbps), Anda akan langsung terbiasa. Tidak perlu lagi membuka browser, mencari link download, menghindari installer berisi adware, atau menekan 'Next, Next, Agree, Finish' berkali-kali. Dengan <code>tpkg</code>, satu perintah terminal singkat sudah cukup untuk mengelola seluruh software Anda.",
            tpkg_sec1_arch_title: "Keunggulan Arsitektur Sistem:",
            tpkg_sec1_arch1: "<strong>Kecepatan Native:</strong> Dibuat murni dari nol dengan Rust tanpa runtime berat yang membebani sistem.",
            tpkg_sec1_arch2: "<strong>PubGrub Dependency Resolver:</strong> Otomatis mendeteksi dan menyelesaikan seluruh dependensi pustaka sebelum proses instalasi.",
            tpkg_sec1_arch3: "<strong>Format .tetopkg:</strong> Kompresi super kencang berbasis Zstandard (zstd) dan arsip tar untuk ekstraksi instan.",
            tpkg_sec1_arch4: "<strong>Keamanan Atomik:</strong> Jika proses instalasi terganggu atau gagal di tengah jalan, sistem akan otomatis melakukan rollback agar Windows tidak rusak.",
            tpkg_sec1_arch5: "<strong>Sinkronisasi GUI Windows:</strong> Otomatis terdaftar di menu 'Apps & features' dan Control Panel Windows agar Anda tetap bisa menghapus aplikasi lewat tampilan grafis biasa.",

            tpkg_sec2_title: '<span class="icon">🚀</span> 2. Panduan Cepat Pemula',
            tpkg_sec2_lead: "Anda tidak perlu menghafal puluhan flag perintah. Berikut 3 perintah utama yang akan Anda gunakan 95% dari waktu:",

            tpkg_sec3_title: '<span class="icon">⭐</span> 3. Paling Direkomendasikan: Integrasi Winget & MS Store',
            tpkg_sec3_lead: "Untuk penggunaan harian, menggabungkan <code>tpkg</code> dengan katalog raksasa <strong>Winget</strong> dan <strong>Microsoft Store</strong> adalah cara termudah dan terbaik untuk memasang software!",

            tpkg_sec4_title: '<span class="icon">📥</span> 4. Instalasi & Update Paket Asli (-S / Sync)',
            tpkg_sec4_lead: "Mode <code>-S</code> (Sync) terhubung ke repositori resmi tetoOS untuk mengunduh, memverifikasi, memasang, dan meng-upgrade paket <code>.tetopkg</code>.",

            tpkg_sec5_title: '<span class="icon">🔍</span> 5. Mencari & Memeriksa Paket Lokal (-Q / Query)',
            tpkg_sec5_lead: "Mode <code>-Q</code> (Query) memungkinkan Anda melihat software apa saja yang sudah terpasang, memeriksa informasi paket, dan melacak kepemilikan file.",

            tpkg_sec6_title: '<span class="icon">🗑️</span> 6. Uninstall Bersih Tanpa Sisa (-R / Remove)',
            tpkg_sec6_lead: "Saat menghapus software dengan <code>tpkg</code>, seluruh file terpasang dilacak secara akurat sehingga tidak meninggalkan sampah registry atau dependensi terbengkalai.",
            tpkg_sec6_gui_sync: "<strong>Lebih Nyaman Menggunakan Tampilan Biasa Windows?</strong><br>Jangan khawatir jika Anda sewaktu-waktu merasa canggung menggunakan command line! Semua software yang diinstal via <code>tpkg</code> otomatis terdaftar di sistem Windows. Anda dapat membuka <strong>Windows Settings &rarr; Apps &rarr; Installed apps</strong> (atau <strong>Control Panel &rarr; Programs and Features</strong>) dan meng-uninstall aplikasi secara tradisional kapan saja.",

            tpkg_sec7_title_tetaur: '<span class="icon">🌐</span> 7. Repositori Komunitas (TETAUR)',
            tpkg_sec7_lead_tetaur: "<strong>TETAUR</strong> (Teto User Repository) adalah repositori komunitas yang terinspirasi langsung dari AUR pada Arch Linux.",

            tpkg_sec8_title: '<span class="icon">📦</span> 8. Membangun Paket (-B / TETOBUILD)',
            tpkg_sec8_lead: "Membuat paket di <code>tpkg</code> sangat mudah. Daripada script shell yang rumit, resep pembuatan paket menggunakan format <strong>TOML</strong> yang bersih dan mudah dibaca manusia.",

            tpkg_sec9_title: '<span class="icon">📋</span> 9. Lembar Contekan Perintah (Cheat Sheet)',
            tpkg_sec9_lead: "Simpan atau tandai contekan cepat ini untuk referensi instan saat Anda membuka terminal:"
        }
    };

    // Merge into global translations object
    window.translations = window.translations || {};
    for (const lang in docsTpkgTranslations) {
        window.translations[lang] = Object.assign(window.translations[lang] || {}, docsTpkgTranslations[lang]);
    }

    if (typeof setLanguage === 'function') {
        const currentLang = localStorage.getItem('nookleaf_lang') || 'en';
        setLanguage(currentLang);
    }
})();
