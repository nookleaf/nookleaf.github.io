/**
 * ============================================================================
 * TETO11 TEASER TRANSLATIONS MODULE
 * ============================================================================
 */

(function() {
    const teto11Translations = {
    "en": {
        "teto_final_soon": "Final Version",
        "teto11_subtitle": "Next Generation Experience",
        "teto11_dev_status": "Status: <strong>In Development</strong><br><br>Building next-generation tetoOS 11 ecosystem. Stay tuned for future updates.",
        "btn_preregister": "Pre-Register Now",
        "btn_back_home": "← Back to moedev Home"
    },
    "ja": {
        "teto_final_soon": "正式版",
        "teto11_subtitle": "次世代のエクスペリエンス",
        "teto11_dev_status": "ステータス: <strong>開発中</strong><br><br>次世代 tetoOS 11 エコシステムを構築中です。続報をお待ちください。",
        "btn_preregister": "今すぐ事前登録",
        "btn_back_home": "← moedev ホームに戻る"
    },
    "ru": {
        "teto_final_soon": "Финальная версия",
        "teto11_subtitle": "Опыт Нового Поколения",
        "teto11_dev_status": "Статус: <strong>В разработке</strong><br><br>Создаем экосистему tetoOS 11 нового поколения. Следите за обновлениями.",
        "btn_preregister": "Предварительная регистрация",
        "btn_back_home": "← На главную moedev"
    },
    "zh": {
        "teto_final_soon": "正式版",
        "teto11_subtitle": "次世代操作体验",
        "teto11_dev_status": "状态：<strong>开发阶段</strong><br><br>正在构建次世代 tetoOS 11 生态，敬请期待后续发布。",
        "btn_preregister": "立即预约体验",
        "btn_back_home": "← 返回 moedev 首页"
    },
    "ko": {
        "teto_final_soon": "정식 버전",
        "teto11_subtitle": "차세대 운영체제 경험",
        "teto11_dev_status": "상태: <strong>개발 진행 중</strong><br><br>차세대 tetoOS 11 생태계를 구축하고 있습니다. 곧 추가 정보가 공개됩니다.",
        "btn_preregister": "지금 사전 등록",
        "btn_back_home": "← moedev 홈으로 돌아가기"
    },
    "ar": {
        "teto_final_soon": "الإصدار النهائي",
        "teto11_subtitle": "تجربة الجيل القادم",
        "teto11_dev_status": "الحالة: <strong>قيد التطوير</strong><br><br>يجري حالياً بناء نظام tetoOS 11 القادم. ترقبوا المزيد من التفاصيل.",
        "btn_preregister": "سجل مسبقاً الآن",
        "btn_back_home": "← العودة للرئيسية"
    },
    "id": {
        "teto_final_soon": "Versi Final",
        "teto11_subtitle": "Pengalaman Desktop Generasi Baru",
        "teto11_dev_status": "Status: <strong>Dalam Tahap Pengembangan</strong><br><br>Kami tengah merancang ekosistem tetoOS 11 generasi baru. Nantikan informasi dan pengumuman berikutnya.",
        "btn_preregister": "Daftar Akses Awal",
        "btn_back_home": "← Kembali ke Beranda moedev"
    }
};

    // Merge into global translations object
    window.translations = window.translations || {};
    for (const lang in teto11Translations) {
        window.translations[lang] = Object.assign(window.translations[lang] || {}, teto11Translations[lang]);
    }

    if (typeof setLanguage === 'function') {
        const currentLang = localStorage.getItem('moedev_lang') || 'en';
        setLanguage(currentLang);
    }
})();
