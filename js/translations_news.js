/**
 * ============================================================================
 * NEWS TRANSLATIONS MODULE
 * ============================================================================
 */

(function() {
    const newsTranslations = {
    "en": {
        "news_main_title": "moedev <span class=\"text-gradient\">Newswire</span>",
        "news_main_desc": "Latest updates, release notes, and news from the moedev ecosystem.",
        "news0_title": "TetoOS 10 Final Launch Set for 2027",
        "news1_title": "tetoOS 11 Development Begins",
        "news2_title": "Archleaf Project Enters EOS Phase",
        "news3_title": "Linux-style Repo Arrives!",
        "news4_title": "tetoOS 10 EA Released to Public",
        "news5_title": "Review: Bootloop ID & LortLimbah",
        "cat_announcement": "ANNOUNCEMENT",
        "cat_development": "DEVELOPMENT",
        "cat_update": "UPDATE",
        "cat_feature": "FEATURE",
        "cat_release": "RELEASE",
        "cat_community": "COMMUNITY"
    },
    "ja": {
        "news_main_title": "moedev <span class=\"text-gradient\">ニューズワイヤー</span>",
        "news_main_desc": "moedev エコシステムからの最新アップデート、リリースノート、重要情報。",
        "news0_title": "tetoOS 10 正式版は 2027 年リリースへ",
        "news1_title": "tetoOS 11 の開発が正式スタート",
        "news2_title": "Archleaf プロジェクトが EOS フェーズへ移行",
        "news3_title": "moedev 独自リポジトリが登場！",
        "news4_title": "tetoOS 10 EA が一般公開",
        "news5_title": "レビュー: Bootloop ID & LortLimbah",
        "cat_announcement": "告知",
        "cat_development": "開発",
        "cat_update": "更新",
        "cat_feature": "機能",
        "cat_release": "リリース",
        "cat_community": "コミュニティ"
    },
    "ru": {
        "news_main_title": "moedev <span class=\"text-gradient\">Новости</span>",
        "news_main_desc": "Свежие обновления, примечания к выпуску и новости экосистемы moedev.",
        "news0_title": "Релиз tetoOS 10 Final намечен на 2027",
        "news1_title": "Старт разработки tetoOS 11",
        "news2_title": "Проект Archleaf переходит в стадию EOS",
        "news3_title": "Linux-репозиторий для moedev готов!",
        "news4_title": "tetoOS 10 EA доступна для всех",
        "news5_title": "Обзор: Bootloop ID и LortLimbah",
        "cat_announcement": "ОБЪЯВЛЕНИЕ",
        "cat_development": "РАЗРАБОТКА",
        "cat_update": "ОБНОВЛЕНИЕ",
        "cat_feature": "ФУНКЦИЯ",
        "cat_release": "РЕЛИЗ",
        "cat_community": "СООБЩЕСТВО"
    },
    "zh": {
        "news_main_title": "moedev <span class=\"text-gradient\">新闻动态</span>",
        "news_main_desc": "来自 moedev 生态系统的最新动态、更新日志与重要发布。",
        "news0_title": "tetoOS 10 正式版定于 2027 年推出",
        "news1_title": "tetoOS 11 开发正式启动",
        "news2_title": "Archleaf 项目进入生命周期终止 (EOS) 阶段",
        "news3_title": "Linux 风格软件包源正式上线！",
        "news4_title": "tetoOS 10 EA 正式公开发布",
        "news5_title": "评测：Bootloop ID 与 LortLimbah",
        "cat_announcement": "公告",
        "cat_development": "开发",
        "cat_update": "更新",
        "cat_feature": "特性",
        "cat_release": "发布",
        "cat_community": "社区"
    },
    "ko": {
        "news_main_title": "moedev <span class=\"text-gradient\">뉴스레터</span>",
        "news_main_desc": "moedev 생태계의 최신 업데이트, 릴리스 노트 및 공지사항.",
        "news0_title": "tetoOS 10 정식 버전 2027년 출시",
        "news1_title": "tetoOS 11 개발 공식 착수",
        "news2_title": "Archleaf 프로젝트 EOS(지원 종료) 단계 진입",
        "news3_title": "Linux 스타일 저장소 공식 출시!",
        "news4_title": "tetoOS 10 EA 공개 배포",
        "news5_title": "리뷰: Bootloop ID & LortLimbah",
        "cat_announcement": "공지사항",
        "cat_development": "개발",
        "cat_update": "업데이트",
        "cat_feature": "기능",
        "cat_release": "출시",
        "cat_community": "커뮤니티"
    },
    "ar": {
        "news_main_title": "أخبار <span class=\"text-gradient\">moedev</span>",
        "news_main_desc": "آخر التحديثات، وملاحظات الإصدار، وأخبار بيئة moedev.",
        "news0_title": "إطلاق tetoOS 10 النهائي في 2027",
        "news1_title": "بدء العمل على تطوير tetoOS 11",
        "news2_title": "مشروع Archleaf يدخل مرحلة نهاية الدعم (EOS)",
        "news3_title": "مستودع moedev أصبح متوفراً!",
        "news4_title": "إطلاق tetoOS 10 EA للعامة",
        "news5_title": "مراجعة: Bootloop ID و LortLimbah",
        "cat_announcement": "إعلان",
        "cat_development": "تطوير",
        "cat_update": "تحديث",
        "cat_feature": "ميزة",
        "cat_release": "إصدار",
        "cat_community": "مجتمع"
    },
    "id": {
        "news_main_title": "moedev <span class=\"text-gradient\">Newswire</span>",
        "news_main_desc": "Pembaruan berkala, catatan rilis, dan kabar terbaru dari ekosistem moedev.",
        "news0_title": "TetoOS 10 Final Rilis Tahun 2027",
        "news1_title": "Pengembangan tetoOS 11 Resmi Dimulai",
        "news2_title": "Proyek Archleaf Resmi Memasuki Fase Purnadukungan (EOS)",
        "news3_title": "Repositori Paket moedev Hadir!",
        "news4_title": "tetoOS 10 EA Dirilis untuk Publik",
        "news5_title": "Review: Bootloop ID & LortLimbah",
        "cat_announcement": "PENGUMUMAN",
        "cat_development": "PENGEMBANGAN",
        "cat_update": "PEMBARUAN",
        "cat_feature": "FITUR",
        "cat_release": "RILIS",
        "cat_community": "KOMUNITAS"
    }
};

    // Merge into global translations object
    window.translations = window.translations || {};
    for (const lang in newsTranslations) {
        window.translations[lang] = Object.assign(window.translations[lang] || {}, newsTranslations[lang]);
    }

    if (typeof setLanguage === 'function') {
        const currentLang = localStorage.getItem('moedev_lang') || 'en';
        setLanguage(currentLang);
    }
})();
