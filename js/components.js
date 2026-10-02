/**
 * ============================================================================
 * SHARED COMPONENTS MODULE - Nookleaf & tetoOS
 * Provides reusable Navbar, Footer, Community Section, and Modals
 * ============================================================================
 */

const NookleafComponents = {
    /**
     * Render the unified Navbar into #main-nav placeholder
     */
    renderNavbar: function() {
        const navContainer = document.getElementById('main-nav');
        if (!navContainer) return;

        const currentFile = window.location.pathname.split('/').pop() || 'index.html';
        const isIndex = currentFile === 'index.html' || currentFile === '';
        const isNews = currentFile === 'news.html';
        const isTeto = currentFile === 'teto.html';
        const isTeto11 = currentFile === 'teto11.html';
        const isZenth = currentFile === 'zenth.html';
        const isDocs = currentFile === 'docs_setup.html' || currentFile === 'docs_debloat.html' || currentFile === 'docs.html';
        const isPolicy = currentFile === 'policy.html';

        navContainer.outerHTML = `
    <!-- NAVBAR -->
    <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="index.html">🌿 Nook<span class="brand-highlight">leaf</span></a>
            <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" style="filter: invert(1);">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul class="navbar-nav align-items-center">
                    <li class="nav-item"><a class="nav-link ${isIndex ? 'active' : ''}" href="index.html" data-i18n="nav_overview">Overview</a></li>
                    <li class="nav-item"><a class="nav-link ${isNews ? 'active' : ''}" href="news.html" data-i18n="nav_news">News</a></li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle ${isTeto || isTeto11 || isZenth ? 'active' : ''}" href="#" id="navbarProjects" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-i18n="nav_projects">Projects</a>
                        <ul class="dropdown-menu glass-dropdown" aria-labelledby="navbarProjects">
                            <li>
                                <a class="dropdown-item d-flex align-items-center rickroll-trigger" href="#">
                                    <div class="project-icon-box icon-archleaf">🌸</div>
                                    <div>
                                        <div class="dropdown-title"><span data-i18n="nav_item_hana">Hana Chan Mascot</span> <span class="badge badge-comingsoon" data-i18n="badge_coming_soon">COMING SOON</span></div>
                                        <p class="dropdown-desc" data-i18n="nav_item_hana_desc">Mascot in development</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item d-flex align-items-center ${isZenth ? 'active' : ''}" href="zenth.html">
                                    <div class="project-icon-box icon-zenth">🐧</div>
                                    <div>
                                        <div class="dropdown-title">tetoOS Zenth <span class="badge ms-2" style="background: rgba(59, 130, 246, 0.2); color: #60a5fa; border: 1px solid rgba(59, 130, 246, 0.4); font-size: 0.65rem;" data-i18n="badge_coming_soon">COMING SOON</span></div>
                                        <p class="dropdown-desc" data-i18n="nav_item_zenth_desc">Linux (Fedora Base) • In Progress</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item d-flex align-items-center ${isTeto11 ? 'active' : ''}" href="teto11.html">
                                    <div class="project-icon-box icon-teto11">⚡</div>
                                    <div>
                                        <div class="dropdown-title">tetoOS 11 <span class="badge bg-warning text-dark ms-2" style="font-size: 0.65rem;" data-i18n="badge_soon">SOON</span></div>
                                        <p class="dropdown-desc" data-i18n="teto11_subtitle">Next Generation Experience</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item d-flex align-items-center ${isTeto ? 'active' : ''}" href="teto.html">
                                    <div class="project-icon-box icon-teto">🥖</div>
                                    <div>
                                        <div class="dropdown-title">tetoOS 10 <span class="badge badge-comingsoon" data-i18n="badge_in_progress">IN PROGRESS</span></div>
                                        <p class="dropdown-desc" data-i18n="nav_item_teto10_desc">Target Release: 2027 • Final in Progress</p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <!-- li class="nav-item"><a class="nav-link ${isDocs ? 'active' : ''}" href="docs_setup.html" data-i18n="nav_docs">Docs</a></li -->
                    <li class="nav-item"><a class="nav-link ${isPolicy ? 'active' : ''}" href="policy.html" data-i18n="nav_credits">Policy</a></li>

                    <!-- Mobile Controls -->
                    <li class="nav-item d-lg-none mt-3 pt-3 border-top border-secondary w-100 text-center">
                        <div class="d-flex justify-content-center align-items-center gap-2 flex-wrap">
                            <div class="dropdown">
                                <button class="btn btn-lang-bright dropdown-toggle" type="button" id="langDropdownMobile" data-bs-toggle="dropdown" aria-expanded="false" style="padding: 7px 16px; border-radius: 8px;">
                                    <img src="https://flagcdn.com/20x15/us.png" width="20" height="15" alt="EN" style="vertical-align:middle;display:inline-block;">
                                </button>
                                <ul class="dropdown-menu glass-dropdown shadow" aria-labelledby="langDropdownMobile" style="min-width: 160px;">
                                    <li><a class="dropdown-item" href="#" onclick="setLanguage('en'); return false;"><img src="https://flagcdn.com/16x12/us.png" width="16" height="12" alt="EN" style="vertical-align:middle;margin-right:5px;"> English (US)</a></li>
                                    <li><a class="dropdown-item" href="#" onclick="setLanguage('ja'); return false;"><img src="https://flagcdn.com/16x12/jp.png" width="16" height="12" alt="JA" style="vertical-align:middle;margin-right:5px;"> 日本語</a></li>
                                    <li><a class="dropdown-item" href="#" onclick="setLanguage('ru'); return false;"><img src="https://flagcdn.com/16x12/ru.png" width="16" height="12" alt="RU" style="vertical-align:middle;margin-right:5px;"> Русский</a></li>
                                    <li><a class="dropdown-item" href="#" onclick="setLanguage('zh'); return false;"><img src="https://flagcdn.com/16x12/cn.png" width="16" height="12" alt="ZH" style="vertical-align:middle;margin-right:5px;"> 中文</a></li>
                                    <li><a class="dropdown-item" href="#" onclick="setLanguage('ko'); return false;"><img src="https://flagcdn.com/16x12/kr.png" width="16" height="12" alt="KO" style="vertical-align:middle;margin-right:5px;"> 한국어</a></li>
                                    <li><a class="dropdown-item" href="#" onclick="setLanguage('ar'); return false;"><img src="https://flagcdn.com/16x12/sa.png" width="16" height="12" alt="AR" style="vertical-align:middle;margin-right:5px;"> العربية</a></li>
                                </ul>
                            </div>
                            <button class="btn btn-outline-green" onclick="toggleTheme()" style="padding: 7px 16px; border-radius: 8px;">☀️ / 🌙</button>
                        </div>
                    </li>
                </ul>
            </div>

            <!-- Desktop Controls -->
            <div class="d-flex gap-2 d-none d-lg-flex align-items-center">
                <a href="https://donatekasaneproject.vercel.app" target="_blank" class="btn btn-donate oobe-link" data-i18n="nav_support">Donate</a>

                <div class="dropdown">
                    <button class="btn btn-lang-bright dropdown-toggle d-flex align-items-center justify-content-center" type="button" id="langDropdown" data-bs-toggle="dropdown" aria-expanded="false" style="border-radius: 8px;">
                        <img src="https://flagcdn.com/20x15/us.png" width="20" height="15" alt="EN" style="vertical-align:middle;display:inline-block;">
                    </button>
                    <ul class="dropdown-menu dropdown-menu-end glass-dropdown" aria-labelledby="langDropdown" style="min-width: 150px; margin-top: 10px !important;">
                        <li><a class="dropdown-item" href="#" onclick="setLanguage('en'); return false;"><img src="https://flagcdn.com/16x12/us.png" width="16" height="12" alt="EN" style="vertical-align:middle;margin-right:5px;"> English (US)</a></li>
                        <li><a class="dropdown-item" href="#" onclick="setLanguage('ja'); return false;"><img src="https://flagcdn.com/16x12/jp.png" width="16" height="12" alt="JA" style="vertical-align:middle;margin-right:5px;"> 日本語</a></li>
                        <li><a class="dropdown-item" href="#" onclick="setLanguage('ru'); return false;"><img src="https://flagcdn.com/16x12/ru.png" width="16" height="12" alt="RU" style="vertical-align:middle;margin-right:5px;"> Русский</a></li>
                        <li><a class="dropdown-item" href="#" onclick="setLanguage('zh'); return false;"><img src="https://flagcdn.com/16x12/cn.png" width="16" height="12" alt="ZH" style="vertical-align:middle;margin-right:5px;"> 中文</a></li>
                        <li><a class="dropdown-item" href="#" onclick="setLanguage('ko'); return false;"><img src="https://flagcdn.com/16x12/kr.png" width="16" height="12" alt="KO" style="vertical-align:middle;margin-right:5px;"> 한국어</a></li>
                        <li><a class="dropdown-item" href="#" onclick="setLanguage('ar'); return false;"><img src="https://flagcdn.com/16x12/sa.png" width="16" height="12" alt="AR" style="vertical-align:middle;margin-right:5px;"> العربية</a></li>
                    </ul>
                </div>

                <button class="btn btn-outline-green d-flex align-items-center justify-content-center" onclick="toggleTheme()" id="theme-btn" style="border-radius: 8px;">☀️</button>
            </div>
        </div>
    </nav>`;
    },

    /**
     * Render shared bottom sections (Community for index, Special Thanks for teto, direct footer for news)
     */
    renderSharedBottom: function() {
        const bottomContainer = document.getElementById('shared-bottom-sections');
        if (!bottomContainer) return;

        const currentFile = window.location.pathname.split('/').pop() || 'index.html';
        const isIndex = currentFile === 'index.html' || currentFile === '';
        const isTeto = currentFile === 'teto.html';
        const isNews = currentFile === 'news.html';
        const isTeto11 = currentFile === 'teto11.html';
        const isZenth = currentFile === 'zenth.html';

        if (isTeto11 || isZenth) {
            bottomContainer.innerHTML = '';
            return;
        }

        let sectionHTML = '';

        if (isIndex) {
            sectionHTML = `
        <!-- COMMUNITY SECTION -->
        <section class="shared-bg-2" id="community-section">
            <div class="container text-center">
                <span class="system-label" style="letter-spacing: 2px; font-weight: 700; color: #64748b; margin-bottom: 20px; display: block;" data-i18n="comm_label">JOIN OUR COMMUNITY</span>
                <h2 class="main-title" style="margin-bottom: 20px; font-size: 3.5rem;" data-i18n="comm_title">Be part of the <span class="text-gradient">Nookleaf Community</span></h2>
                <p class="hero-desc mx-auto" style="max-width: 600px;" data-i18n="comm_desc">Join our official Discord community for real-time support, updates, and discussions.</p>

                <div class="row justify-content-center mt-4" style="max-width: 400px; margin: 0 auto;">
                    <div class="col-12 p-0">
                        <a href="https://discord.gg/3hXCNdHQ2" target="_blank" class="btn btn-community btn-discord w-100 oobe-link" data-i18n="comm_btn_discord">Discord Server</a>
                    </div>
                </div>
            </div>
        </section>`;
        } else if (isTeto) {
            sectionHTML = `
        <!-- SPECIAL THANKS VTUBER SECTION -->
        <section class="shared-bg-2" id="thanks-section">
            <div class="container">
                <div style="text-align: center; margin-bottom: 60px;">
                    <h2 class="section-title" data-i18n="thanks_title">Special Thanks to</h2>
                    <p class="section-subtitle" data-i18n="thanks_subtitle">Content Creator yang telah mencoba tetoOS 10</p>
                </div>
                <div style="display: flex; justify-content: center; gap: 30px; flex-wrap: wrap;">
                    <div class="dev-card" style="max-width: 350px; width: 100%; padding: 40px;">
                        <img src="https://files.catbox.moe/92jb5l.jpg" alt="LortLimbah" style="width: 180px; height: 180px; border: 4px solid rgba(239, 68, 68, 0.3);">
                        <h4 style="font-size: 1.3rem;"><a href="https://www.youtube.com/watch?v=mMEjachbxcA&t=32s" target="_blank" style="color: #fff; text-decoration: none; transition: 0.3s;" onmouseover="this.style.color='#ef4444'" onmouseout="this.style.color='inherit'">LortLimbah</a></h4>
                        <p style="color: #ef4444; font-weight: 600; font-size: 1rem; margin-bottom: 15px;" data-i18n="thanks_creator_vtuber">VTuber Content Creator</p>
                        <p style="font-size: 0.95rem;" data-i18n="thanks_desc">Terima kasih telah mencoba dan memberikan ulasan tetoOS 10. Masukan kreator sangat berarti!</p>
                        <a href="https://www.youtube.com/watch?v=mMEjachbxcA&t=32s" target="_blank" class="oobe-link" style="display: inline-block; margin-top: 20px; padding: 10px 24px; background-color: rgba(239, 68, 68, 0.1); color: #ef4444; border: 2px solid rgba(239, 68, 68, 0.3); border-radius: 8px; text-decoration: none; font-weight: 600; transition: 0.3s;" data-i18n="thanks_watch">
                            📺 Watch Video Review
                        </a>
                    </div>
                    <div class="dev-card" style="max-width: 350px; width: 100%; padding: 40px;">
                        <img src="https://files.catbox.moe/hmlf9b.jpg" alt="Bootloop ID" style="width: 180px; height: 180px; border: 4px solid rgba(239, 68, 68, 0.3);">
                        <h4 style="font-size: 1.3rem;"><a href="https://www.youtube.com/watch?v=mkSsxN0BWwk&t=600s" target="_blank" style="color: #fff; text-decoration: none; transition: 0.3s;" onmouseover="this.style.color='#ef4444'" onmouseout="this.style.color='inherit'">Bootloop ID</a></h4>
                        <p style="color: #ef4444; font-weight: 600; font-size: 1rem; margin-bottom: 15px;" data-i18n="thanks_creator_tech">Tech Content Creator</p>
                        <p style="font-size: 0.95rem;" data-i18n="thanks_desc">Terima kasih telah mencoba dan memberikan ulasan tetoOS 10. Masukan kreator sangat berarti!</p>
                        <a href="https://www.youtube.com/watch?v=mkSsxN0BWwk&t=600s" target="_blank" class="oobe-link" style="display: inline-block; margin-top: 20px; padding: 10px 24px; background-color: rgba(239, 68, 68, 0.1); color: #ef4444; border: 2px solid rgba(239, 68, 68, 0.3); border-radius: 8px; text-decoration: none; font-weight: 600; transition: 0.3s;" data-i18n="thanks_watch">
                            📺 Watch Video Review
                        </a>
                    </div>
                </div>
            </div>
        </section>`;
        }

        bottomContainer.innerHTML = sectionHTML + `
        <!-- FOOTER -->
        <footer class="footer-nookleaf">
            <div class="container">
                <div class="row mb-5">
                    <div class="col-lg-6 mb-4 mb-lg-0">
                        <div class="d-flex align-items-center mb-3">
                            <span class="footer-heading" style="font-size: 1.8rem; font-weight: 800; color: #fff; letter-spacing: normal; text-transform: none;">🌿 Nookleaf</span>
                        </div>
                        <p class="footer-text" style="color: #94a3b8; font-size: 0.95rem; line-height: 1.8; max-width: 400px;" data-i18n="footer_desc">
                            Built for speed. Tuned for gaming.<br>
                            Research-backed Windows & Linux optimizations.
                        </p>
                    </div>
                    <div class="col-lg-3 col-6">
                        <h6 class="footer-heading" data-i18n="footer_heading_products">PRODUCTS</h6>
                        <ul class="list-unstyled" style="line-height: 2.2; font-size: 0.95rem;">
                            <li><a href="zenth.html" class="footer-link">tetoOS Zenth (Linux)</a></li>
                            <li><a href="teto11.html" class="footer-link">tetoOS 11</a></li>
                            <li><a href="#" class="footer-link rickroll-trigger" data-i18n="nav_item_hana">Hana Chan Mascot</a></li>
                            <li><a href="teto.html" class="footer-link">tetoOS 10 (2027)</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-3 col-6">
                        <h6 class="footer-heading" data-i18n="footer_heading_community">COMMUNITY</h6>
                        <ul class="list-unstyled" style="line-height: 2.2; font-size: 0.95rem;">
                            <li><a href="https://discord.gg/3hXCNdHQ2" class="footer-link">Discord</a></li>
                        </ul>
                    </div>
                </div>

                <!-- Footer Language Picker -->
                <div class="d-flex flex-column flex-md-row justify-content-between align-items-center pt-3">
                    <div class="footer-text text-center text-md-start mb-3 mb-md-0">
                        <p style="color: #64748b; font-size: 0.9rem; margin: 0; margin-bottom: 5px;" data-i18n="footer_copyright">© 2026 <strong style="color: #10b981;">Nookleaf</strong> — This site is a work in progress and subject to change.</p>
                        <a href="policy.html" style="color: #94a3b8; font-size: 0.85rem; text-decoration: underline;" data-i18n="footer_privacy">Privacy Policy & Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>`;
    },

    /**
     * Render shared Global Modals (Docs, Policy, Privacy) into #shared-modals
     */
    renderSharedModals: function() {
        const modalsContainer = document.getElementById('shared-modals');
        if (!modalsContainer) return;

        modalsContainer.innerHTML = `
    <!-- Docs Modal -->
    <div class="modal fade" id="docsModal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content glass-modal text-light border-0">
                <div class="modal-header border-0 pb-0">
                    <h5 class="modal-title fw-bold" style="color: #fbbf24;" data-i18n="modal_docs_title">🚧 Docs Coming Soon</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body system-font text-center pt-2">
                    <div style="font-size: 3rem; margin-bottom: 10px;">📄</div>
                    <h4 style="font-weight: 700; color: #fff; margin-bottom: 15px;" data-i18n="modal_docs_heading">Documentation Temporarily Closed</h4>
                    <p style="color: #cbd5e1; font-size: 0.95rem; margin-bottom: 20px;" data-i18n="modal_docs_desc1">
                        Official tetoOS documentation & FAQ are currently in preparation and temporarily closed until the final release.
                    </p>
                    <p style="color: #94a3b8; font-size: 0.9rem; line-height: 1.6; margin-bottom: 30px;" data-i18n="modal_docs_desc2">
                        Please stay tuned for updates in our community channels or the News wire.
                    </p>
                    <button type="button" class="btn w-100" data-bs-dismiss="modal" style="background-color: transparent; border: 1px solid rgba(255,255,255,0.2); color: #cbd5e1; padding: 12px; font-size: 1rem; border-radius: 8px;" data-i18n="btn_close">Close</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Policy / License Modal (No personal names for privacy) -->
    <div class="modal fade" id="creditsModal" tabindex="-1">
        <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content glass-modal text-light border-0">
                <div class="modal-header">
                    <h5 class="modal-title fw-bold" data-i18n="modal_credits_title">📜 PROJECT POLICY & LICENSE</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body system-font">
                    <h6 class="fw-bold mb-3" style="color: #10b981;" data-i18n="modal_credits_heading">Nookleaf & tetoOS Project Guidelines</h6>
                    <p data-i18n="modal_credits_welcome">Official policy, terms of distribution, and usage guidelines for Nookleaf & tetoOS modifications.</p>
                    <div class="warning-box">
                        <div class="fw-bold mb-2" style="color: #fca5a5;" data-i18n="modal_credits_license_title">📜 License Terms</div>
                        <ul class="mb-0 ps-3" style="color: #fecaca; font-size: 0.9rem;">
                            <li data-i18n="modal_credits_lic1">Redistribution or re-uploading of ISO files without explicit authorization is strictly prohibited.</li>
                            <li data-i18n="modal_credits_lic2">All original visual and audio assets are copyright of their respective creators.</li>
                            <li data-i18n="modal_credits_lic3">This custom mod is entirely free for personal use and must never be distributed behind paid shortlinks or paywalls.</li>
                        </ul>
                    </div>
                </div>
                <div class="modal-footer justify-content-between">
                    <span class="text-muted" style="font-size: 0.85rem;">Copyright (c) 2026 Nookleaf Project</span>
                    <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal" data-i18n="btn_close">Close</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Privacy Modal -->
    <div class="modal fade" id="privacyModal" tabindex="-1">
        <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content glass-modal text-light border-0">
                <div class="modal-header">
                    <h5 class="modal-title fw-bold" data-i18n="modal_privacy_title">📜 PRIVACY POLICY & TERMS OF SERVICE</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body system-font">
                    <p style="color: #10b981; font-weight: bold; margin-bottom: 5px;">NOOKLEAF PROJECT (tetoOS)</p>
                    <p style="color: #64748b; font-size: 0.85rem; margin-bottom: 20px;" data-i18n="modal_privacy_updated">Last Updated: July 18, 2026</p>
                    <p style="color: #cbd5e1; line-height: 1.7;" data-i18n="modal_privacy_intro">By downloading, installing, and using <strong>tetoOS</strong> or any other Nookleaf Project software, you agree to these terms.</p>
                    <div class="changelog-section">
                        <div class="changelog-title" data-i18n="modal_privacy_sec1_title">🔒 SECTION 1: PRIVACY POLICY</div>
                        <ul class="list-unstyled text-light" style="font-size: 0.95rem;">
                            <li class="mb-3" data-i18n="modal_privacy_sec1_p1"><strong>1. User Data Security:</strong> Nookleaf Project will never bundle malware, keyloggers, or trackers into custom OS images.</li>
                            <li class="mb-3" data-i18n="modal_privacy_sec1_p2"><strong>2. Telemetry & Tracking:</strong> Most native telemetry services are deactivated to protect user privacy and maximize frame pacing.</li>
                        </ul>
                    </div>
                    <div class="changelog-section mb-0">
                        <div class="changelog-title" data-i18n="modal_privacy_sec2_title">🛡️ SECTION 2: DISCLAIMER</div>
                        <ul class="list-unstyled text-light" style="font-size: 0.95rem;">
                            <li class="mb-0" data-i18n="modal_privacy_sec2_p1"><strong>Use at Your Own Risk:</strong> Custom operating systems involve core system alterations. Please verify compatibility before daily driving.</li>
                        </ul>
                    </div>
                </div>
                <div class="modal-footer justify-content-between">
                    <span class="text-muted" style="font-size: 0.85rem;" data-i18n="modal_privacy_thanks">Thank you for respecting Nookleaf Project guidelines.</span>
                    <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal" data-i18n="btn_close">Close</button>
                </div>
            </div>
        </div>
    </div>`;
    },

    /**
     * Initialize all shared components
     */
    init: function() {
        this.renderNavbar();
        this.renderSharedBottom();
        this.renderSharedModals();
    }
};

// Auto-run when DOM is ready, BEFORE translations run
document.addEventListener('DOMContentLoaded', () => {
    NookleafComponents.init();
    if (typeof setLanguage === 'function') {
        let savedLang = localStorage.getItem('nookleaf_lang') || 'en';
        if (savedLang === 'id') savedLang = 'en';
        setLanguage(savedLang);
    }
});