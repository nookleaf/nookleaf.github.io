/**
 * ============================================================================
 * HOME / INDEX TRANSLATIONS MODULE
 * ============================================================================
 */

(function() {
    const indexTranslations = {
    "en": {
        "global_update_notice": "<strong>Update:</strong> The final build of tetoOS is in active development. Early Access (EA) ISOs are available below.",
        "hero_title": "A cleaner, faster<br><span class=\"text-gradient\">desktop experience.</span>",
        "hero_desc": "Lightweight Windows and Linux distributions tuned for lower input latency, minimal background load, and gaming stability.",
        "btn_explore": "Explore tetoOS",
        "btn_explore_win": "Explore tetoOS (Windows)",
        "btn_explore_linux": "Explore Zenth (Linux)",
        "btn_license": "Free Windows License",
        "card_teto10_label": "Featured Edition",
        "card_teto10_desc": "Windows 10 LTSC stripped of bloatware: responsive and reliable on low-spec hardware and gaming rigs.",
        "btn_explore_teto10": "Explore tetoOS 10 &rarr;",
        "card_teto11_label": "Next-Gen Edition",
        "btn_explore_short": "Learn More &rarr;"
    },
    "ja": {
        "global_update_notice": "<strong>更新:</strong> tetoOS 正式版は現在開発進行中です。アーリーアクセス版ISOは下記よりダウンロード可能です。",
        "hero_title": "より軽快で快適な、<br><span class=\"text-gradient\">デスクトップ体験へ。</span>",
        "hero_desc": "低遅延、省メモリ、そしてゲームプレイ時の安定性を追求したOS最適化プロジェクト。",
        "btn_explore": "tetoOS を見る",
        "btn_explore_win": "tetoOS (Windows) を見る",
        "btn_explore_linux": "Zenth (Linux) を見る",
        "btn_license": "無料 Windows ライセンス",
        "card_teto10_label": "主力エディション",
        "card_teto10_desc": "Windows 10 LTSC をベースに徹底軽量化。低スペックPCや競技ゲームに最適。",
        "btn_explore_teto10": "tetoOS 10 を見る &rarr;",
        "card_teto11_label": "次世代エディション",
        "btn_explore_short": "詳細を見る &rarr;"
    },
    "ru": {
        "global_update_notice": "<strong>Обновление:</strong> Финальная версия tetoOS находится в разработке. Сборка раннего доступа (EA) доступна ниже.",
        "hero_title": "Быстрая и чистая<br><span class=\"text-gradient\">ОС для вашего ПК.</span>",
        "hero_desc": "Оптимизированные сборки Windows и Linux с минимальной задержкой ввода, экономией ОЗУ и стабильностью в играх.",
        "btn_explore": "Узнать о tetoOS",
        "btn_explore_win": "Обзор tetoOS (Windows)",
        "btn_explore_linux": "Обзор Zenth (Linux)",
        "btn_license": "Бесплатная лицензия Windows",
        "card_teto10_label": "Основное издание",
        "card_teto10_desc": "Windows 10 LTSC без лишних служб: быстрая и стабильная на слабых ПК и в играх.",
        "btn_explore_teto10": "Обзор tetoOS 10 &rarr;",
        "card_teto11_label": "Новое поколение",
        "btn_explore_short": "Подробнее &rarr;"
    },
    "zh": {
        "global_update_notice": "<strong>更新：</strong>tetoOS 正式版正在开发中。抢先体验版 (EA) 可在下方下载。",
        "hero_title": "更纯净、更流畅的<br><span class=\"text-gradient\">桌面操作体验。</span>",
        "hero_desc": "专注于低输入延迟、极低内存占用与高稳定性的系统优化开发项目。",
        "btn_explore": "探索 tetoOS",
        "btn_explore_win": "探索 tetoOS (Windows)",
        "btn_explore_linux": "探索 Zenth (Linux)",
        "btn_license": "获取免费 Windows 许可证",
        "card_teto10_label": "主力版本",
        "card_teto10_desc": "基于 Windows 10 LTSC 深度精简：专为低配电脑与电竞游戏打造。",
        "btn_explore_teto10": "探索 tetoOS 10 &rarr;",
        "card_teto11_label": "次世代版本",
        "btn_explore_short": "了解更多 &rarr;"
    },
    "ko": {
        "global_update_notice": "<strong>업데이트:</strong> tetoOS 정식 빌드는 현재 개발 중입니다. 얼리 액세스(EA) ISO는 아래에서 다운로드할 수 있습니다.",
        "hero_title": "더 가볍고 빠른<br><span class=\"text-gradient\">데스크톱 경험.</span>",
        "hero_desc": "낮은 입력 지연, 최소한의 RAM 점유율, 게이밍 안정성을 위해 최적화된 OS 개발 프로젝트.",
        "btn_explore": "tetoOS 살펴보기",
        "btn_explore_win": "tetoOS (Windows) 탐색",
        "btn_explore_linux": "Zenth (Linux) 탐색",
        "btn_license": "무료 Windows 라이선스",
        "card_teto10_label": "메인 에디션",
        "card_teto10_desc": "불필요한 요소를 걷어낸 Windows 10 LTSC: 저사양 PC와 게이밍에 최적화.",
        "btn_explore_teto10": "tetoOS 10 살펴보기 &rarr;",
        "card_teto11_label": "차세대 에디션",
        "btn_explore_short": "자세히 보기 &rarr;"
    },
    "ar": {
        "global_update_notice": "<strong>تحديث:</strong> بناء tetoOS النهائي قيد التطوير النشط. نسخة الوصول المبكر (EA) متاحة للتنزيل أدناه.",
        "hero_title": "تجربة سطح مكتب<br><span class=\"text-gradient\">أخف وأسرع.</span>",
        "hero_desc": "أنظمة تشغيل مخصصة ومبنية لتقليل زمن الاستجابة، وتوفير الذاكرة، وضمان استقرار الألعاب.",
        "btn_explore": "استكشف tetoOS",
        "btn_explore_win": "استكشف tetoOS (Windows)",
        "btn_explore_linux": "استكشف Zenth (Linux)",
        "btn_license": "ترخيص Windows مجاني",
        "card_teto10_label": "الإصدار الرئيسي",
        "card_teto10_desc": "Windows 10 LTSC خفيف وخالٍ من البرامج الزائدة: سريع ومستقر للأجهزة الضعيفة والألعاب.",
        "btn_explore_teto10": "استكشف tetoOS 10 &rarr;",
        "card_teto11_label": "إصدار الجيل القادم",
        "btn_explore_short": "معرفة المزيد &rarr;"
    },
    "id": {
        "global_update_notice": "<strong>Pembaruan:</strong> Versi final tetoOS tengah aktif dikembangkan. Berkas ISO Early Access (EA) sudah dapat diunduh di bawah.",
        "hero_title": "Standar Baru untuk<br><span class=\"text-gradient\">Pengalaman Desktop.</span>",
        "hero_desc": "Pusat pengembangan sistem operasi kustom: latensi rendah, efisiensi RAM optimal, dan stabilitas tinggi saat bermain game.",
        "btn_explore": "Jelajahi tetoOS",
        "btn_explore_win": "Jelajahi tetoOS (Windows)",
        "btn_explore_linux": "Jelajahi Zenth (Linux)",
        "btn_license": "Lisensi Windows Gratis",
        "card_teto10_label": "Edisi Utama",
        "card_teto10_desc": "Windows 10 LTSC: sangat ringan, responsif, dan stabil untuk PC spesifikasi rendah maupun kebutuhan gaming kompetitif.",
        "btn_explore_teto10": "Jelajahi tetoOS 10 &rarr;",
        "card_teto11_label": "Edisi Generasi Baru",
        "btn_explore_short": "Lihat Selengkapnya &rarr;"
    }
};

    // Merge into global translations object
    window.translations = window.translations || {};
    for (const lang in indexTranslations) {
        window.translations[lang] = Object.assign(window.translations[lang] || {}, indexTranslations[lang]);
    }

    if (typeof setLanguage === 'function') {
        const currentLang = localStorage.getItem('moedev_lang') || 'en';
        setLanguage(currentLang);
    }
})();
