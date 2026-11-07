/**
 * ============================================================================
 * ZENTH TEASER TRANSLATIONS MODULE
 * ============================================================================
 */

(function() {
    const zenthTranslations = {
    "en": {
        "zenth_badge": "Linux • Base Fedora",
        "zenth_dev_status": "Status: <strong style=\"color: #60a5fa;\">Internal / In Progress</strong><br><br>Zenth is a <strong>Linux (Fedora Base)</strong> OS currently in core module development.",
        "btn_closed_access": "Closed Access (Coming Soon)",
        "btn_back_home": "← Back to moedev Home"
    },
    "ja": {
        "zenth_badge": "Linux • Base Fedora",
        "zenth_dev_status": "ステータス: <strong style=\"color: #60a5fa;\">開発中・非公開</strong><br><br>Zenth は <strong>Linux (Fedora Base)</strong> OS です。現在コアモジュール開発中。",
        "btn_closed_access": "非公開アクセス (近日公開)",
        "btn_back_home": "← moedev ホームに戻る"
    },
    "ru": {
        "zenth_badge": "Linux • Base Fedora",
        "zenth_dev_status": "Статус: <strong style=\"color: #60a5fa;\">В разработке / Закрытый доступ</strong><br><br>Zenth - ОС на базе <strong>Linux (Fedora)</strong>. В стадии разработки ядра.",
        "btn_closed_access": "Закрытый доступ (Скоро)",
        "btn_back_home": "← На главную moedev"
    },
    "zh": {
        "zenth_badge": "Linux • Base Fedora",
        "zenth_dev_status": "状态：<strong style=\"color: #60a5fa;\">内部研发中</strong><br><br>Zenth 是基于 <strong>Linux (Fedora)</strong> 的操作系统，核心模块正在构建中。",
        "btn_closed_access": "封闭访问 (即将推出)",
        "btn_back_home": "← 返回 moedev 首页"
    },
    "ko": {
        "zenth_badge": "Linux • Base Fedora",
        "zenth_dev_status": "상태: <strong style=\"color: #60a5fa;\">개발 중 / 내부 프로젝트</strong><br><br>Zenth는 <strong>Linux (Fedora Base)</strong> 운영체제이며 핵심 모듈을 개발 중입니다.",
        "btn_closed_access": "비공개 접근 (곧 제공)",
        "btn_back_home": "← moedev 홈으로 돌아가기"
    },
    "ar": {
        "zenth_badge": "Linux • Base Fedora",
        "zenth_dev_status": "الحالة: <strong style=\"color: #60a5fa;\">مشروع داخلي / قيد التطوير</strong><br><br>Zenth هو نظام تشغيل مبني على <strong>Linux (Fedora)</strong> في مرحلة تطوير النواة.",
        "btn_closed_access": "وصول مغلق (قريباً)",
        "btn_back_home": "← العودة للرئيسية"
    },
    "id": {
        "zenth_badge": "Linux • Basis Fedora",
        "zenth_dev_status": "Status: <strong style=\"color: #60a5fa;\">Pengembangan Internal</strong><br><br>Zenth adalah distribusi <strong>Linux (berbasis Fedora)</strong> yang saat ini tengah berada dalam tahap perancangan modul inti.",
        "btn_closed_access": "Akses Terbatas (Segera Hadir)",
        "btn_back_home": "← Kembali ke Beranda moedev"
    }
};

    // Merge into global translations object
    window.translations = window.translations || {};
    for (const lang in zenthTranslations) {
        window.translations[lang] = Object.assign(window.translations[lang] || {}, zenthTranslations[lang]);
    }

    if (typeof setLanguage === 'function') {
        const currentLang = localStorage.getItem('moedev_lang') || 'en';
        setLanguage(currentLang);
    }
})();
