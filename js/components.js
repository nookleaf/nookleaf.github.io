// Reusable UI components
const moedevComponents = {
    renderNavbar: function() {
        const navContainer = document.getElementById('main-nav');
        if (!navContainer) return;

        const currentFile = window.location.pathname.split('/').pop() || 'index.html';
        const isIndex = currentFile === 'index.html' || currentFile === '';
        const isNews = currentFile === 'news.html';
        const isTeto = currentFile === 'teto.html';
        const isTeto11 = currentFile === 'teto11.html';
        const isZenth = currentFile === 'zenth.html';
        const isDocs = currentFile === 'docs_setup.html' || currentFile === 'docs_debloat.html' || currentFile === 'docs_tpkg.html' || currentFile === 'docs.html';
        const isPolicy = currentFile === 'policy.html';

        navContainer.outerHTML = `
    <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container-fluid d-flex align-items-center justify-content-between">
            <a class="navbar-brand me-auto me-lg-4" href="index.html"><span class="brand-highlight">moe</span>dev</a>

            <div class="collapse navbar-collapse justify-content-center order-3 order-lg-2" id="navbarNav">
                <ul class="navbar-nav align-items-center my-2 my-lg-0">
                    <li class="nav-item"><a class="nav-link ${isNews ? 'active' : ''}" href="news.html" data-i18n="nav_news">News</a></li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle ${isTeto || isZenth ? 'active' : ''}" href="#" id="navbarProjects" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-i18n="nav_projects">Projects</a>
                        <ul class="dropdown-menu glass-dropdown" aria-labelledby="navbarProjects">
                            <li>
                                <a class="dropdown-item d-flex align-items-center ${isTeto ? 'active' : ''}" href="teto.html">
                                    <div class="project-icon-box icon-teto">
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
                                    </div>
                                    <div>
                                        <div class="dropdown-title">tetoOS <span class="badge badge-comingsoon" data-i18n="badge_in_progress">IN PROGRESS</span></div>
                                        <p class="dropdown-desc" data-i18n="nav_item_teto10_desc">Windows Edition • In Final Tuning</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item d-flex align-items-center ${isZenth ? 'active' : ''}" href="zenth.html">
                                    <div class="project-icon-box icon-zenth">
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>
                                    </div>
                                    <div>
                                        <div class="dropdown-title">tetoOS Zenth <span class="badge ms-2" style="background: rgba(59, 130, 246, 0.2); color: #60a5fa; border: 1px solid rgba(59, 130, 246, 0.4); font-size: 0.65rem;" data-i18n="badge_coming_soon">COMING SOON</span></div>
                                        <p class="dropdown-desc" data-i18n="nav_item_zenth_desc">Linux (Fedora Base) • In Progress</p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item"><a class="nav-link ${isPolicy ? 'active' : ''}" href="policy.html" data-i18n="nav_credits">Policy</a></li>
                    <li class="nav-item"><a class="nav-link" href="https://donatekasaneproject.vercel.app" target="_blank" data-i18n="nav_support">Support Us</a></li>
                </ul>
            </div>

            <!-- Navbar Action Controls (Desktop & Mobile: Single unified row on top bar, icon-only) -->
            <div class="d-flex align-items-center gap-2 order-2 order-lg-3 nav-actions-wrap">
                <!-- Language Selector -->
                <div class="dropdown d-inline-flex align-items-center position-relative">
                    <button class="btn-lang-bright dropdown-toggle d-flex align-items-center justify-content-center" type="button" id="langDropdown" data-bs-toggle="dropdown" aria-expanded="false" title="Change Language">
                        <img src="https://flagcdn.com/20x15/us.png" width="20" height="15" alt="EN" style="display:block; border-radius: 2px;">
                    </button>
                    <ul class="dropdown-menu dropdown-menu-end glass-dropdown lang-dropdown-menu" aria-labelledby="langDropdown">
                        <li><a class="dropdown-item" href="#" onclick="setLanguage('en'); return false;"><img src="https://flagcdn.com/16x12/us.png" width="16" height="12" alt="EN" style="vertical-align:middle;margin-right:8px;"> English (US)</a></li>
                        <li><a class="dropdown-item" href="#" onclick="setLanguage('ja'); return false;"><img src="https://flagcdn.com/16x12/jp.png" width="16" height="12" alt="JA" style="vertical-align:middle;margin-right:8px;"> 日本語</a></li>
                        <li><a class="dropdown-item" href="#" onclick="setLanguage('ru'); return false;"><img src="https://flagcdn.com/16x12/ru.png" width="16" height="12" alt="RU" style="vertical-align:middle;margin-right:8px;"> Русский</a></li>
                        <li><a class="dropdown-item" href="#" onclick="setLanguage('zh'); return false;"><img src="https://flagcdn.com/16x12/cn.png" width="16" height="12" alt="ZH" style="vertical-align:middle;margin-right:8px;"> 中文</a></li>
                        <li><a class="dropdown-item" href="#" onclick="setLanguage('ko'); return false;"><img src="https://flagcdn.com/16x12/kr.png" width="16" height="12" alt="KO" style="vertical-align:middle;margin-right:8px;"> 한국어</a></li>
                        <li><a class="dropdown-item" href="#" onclick="setLanguage('ar'); return false;"><img src="https://flagcdn.com/16x12/sa.png" width="16" height="12" alt="AR" style="vertical-align:middle;margin-right:8px;"> العربية</a></li>
                    </ul>
                </div>

                <!-- Theme Toggle Button (Clean SVG, Icon Only, Standard Navbar Color) -->
                <button class="btn-theme-toggle d-flex align-items-center justify-content-center" onclick="toggleTheme()" id="theme-btn" title="Toggle Theme" aria-label="Toggle Theme">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                </button>

                <!-- Mobile Hamburger Menu Toggle Button (Clean SVG, Icon Only) -->
                <button class="navbar-toggler d-lg-none d-flex align-items-center justify-content-center" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </button>
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
        <div class="shared-bottom-wrapper">
            <!-- COMMUNITY SECTION -->
            <section class="shared-bg-2" id="community-section">
                <div class="container text-center">
                    <span class="system-label" style="letter-spacing: 2px; font-weight: 700; color: #64748b; margin-bottom: 20px; display: block;" data-i18n="comm_label">JOIN OUR COMMUNITY</span>
                    <h2 class="main-title" style="margin-bottom: 20px; font-size: 3.5rem;" data-i18n="comm_title">Be part of the <span class="text-gradient">moedev Community</span></h2>
                    <p class="hero-desc mx-auto" style="max-width: 600px;" data-i18n="comm_desc">Join our official Discord community for real-time support, updates, and discussions.</p>

                    <div class="row justify-content-center mt-4" style="max-width: 400px; margin: 0 auto;">
                        <div class="col-12 p-0">
                            <a href="https://discord.gg/3hXCNdHQ2" target="_blank" class="btn btn-community btn-discord w-100" data-i18n="comm_btn_discord">Discord Server</a>
                        </div>
                    </div>
                </div>
            </section>
            <!-- FOOTER -->
            <footer class="footer-moedev text-center py-3">
                <div class="container">
                    <p class="mb-1 footer-text" style="color: #64748b; font-size: 0.9rem;" data-i18n="footer_copyright">
                        © 2026 <strong style="color: #10b981;">moedev</strong> - This site is a work in progress and subject to change.
                    </p>
                    <a href="policy.html" style="color: #94a3b8; font-size: 0.85rem; text-decoration: underline;" data-i18n="footer_privacy">Privacy Policy & Terms of Service</a>
                </div>
            </footer>
        </div>`;
        } else if (isTeto) {
            sectionHTML = `
        <div class="shared-bottom-wrapper">
            <!-- SPECIAL THANKS VTUBER SECTION -->
            <section class="shared-bg-2" id="thanks-section">
                <div class="container">
                    <div style="text-align: center; margin-bottom: 35px;">
                        <h2 class="section-title" data-i18n="thanks_title">Special Thanks to</h2>
                        <p class="section-subtitle" data-i18n="thanks_subtitle">Content creators who have reviewed & tested tetoOS.</p>
                    </div>
                    <div style="display: flex; justify-content: center; gap: 24px; flex-wrap: wrap;">
                        <div class="dev-card" style="max-width: 340px; width: 100%; padding: 25px 20px;">
                            <img src="https://files.catbox.moe/92jb5l.jpg" alt="LortLimbah" style="width: 130px; height: 130px; border: 3px solid rgba(239, 68, 68, 0.3);">
                            <h4 style="font-size: 1.2rem;"><a href="https://www.youtube.com/watch?v=mMEjachbxcA&t=32s" target="_blank" style="color: #fff; text-decoration: none; transition: 0.3s;" onmouseover="this.style.color='#ef4444'" onmouseout="this.style.color='inherit'">LortLimbah</a></h4>
                            <p style="color: #ef4444; font-weight: 600; font-size: 0.9rem; margin-bottom: 10px;" data-i18n="thanks_creator_vtuber">VTuber Content Creator</p>
                            <p style="font-size: 0.88rem; line-height: 1.5;" data-i18n="thanks_desc">Creator feedback is vital to our development!</p>
                            <a href="https://www.youtube.com/watch?v=mMEjachbxcA&t=32s" target="_blank" style="display: inline-block; margin-top: 15px; padding: 8px 20px; background-color: rgba(239, 68, 68, 0.1); color: #ef4444; border: 2px solid rgba(239, 68, 68, 0.3); border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 0.88rem; transition: 0.3s;" data-i18n="thanks_watch">
                                Watch Video Review
                            </a>
                        </div>
                        <div class="dev-card" style="max-width: 340px; width: 100%; padding: 25px 20px;">
                            <img src="https://files.catbox.moe/hmlf9b.jpg" alt="Bootloop ID" style="width: 130px; height: 130px; border: 3px solid rgba(239, 68, 68, 0.3);">
                            <h4 style="font-size: 1.2rem;"><a href="https://www.youtube.com/watch?v=mkSsxN0BWwk&t=600s" target="_blank" style="color: #fff; text-decoration: none; transition: 0.3s;" onmouseover="this.style.color='#ef4444'" onmouseout="this.style.color='inherit'">Bootloop ID</a></h4>
                            <p style="color: #ef4444; font-weight: 600; font-size: 0.9rem; margin-bottom: 10px;" data-i18n="thanks_creator_tech">Tech Content Creator</p>
                            <p style="font-size: 0.88rem; line-height: 1.5;" data-i18n="thanks_desc">Creator feedback is vital to our development!</p>
                            <a href="https://www.youtube.com/watch?v=mkSsxN0BWwk&t=600s" target="_blank" style="display: inline-block; margin-top: 15px; padding: 8px 20px; background-color: rgba(239, 68, 68, 0.1); color: #ef4444; border: 2px solid rgba(239, 68, 68, 0.3); border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 0.88rem; transition: 0.3s;" data-i18n="thanks_watch">
                                Watch Video Review
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <!-- FOOTER -->
            <footer class="footer-moedev text-center py-3">
                <div class="container">
                    <p class="mb-1 footer-text" style="color: #64748b; font-size: 0.9rem;" data-i18n="footer_copyright">
                        © 2026 <strong style="color: #10b981;">moedev</strong> - This site is a work in progress and subject to change.
                    </p>
                    <a href="policy.html" style="color: #94a3b8; font-size: 0.85rem; text-decoration: underline;" data-i18n="footer_privacy">Privacy Policy & Terms of Service</a>
                </div>
            </footer>
        </div>`;
        } else {
            sectionHTML = `
        <!-- FOOTER -->
        <footer class="footer-moedev text-center py-4">
            <div class="container">
                <p class="mb-1 footer-text" style="color: #64748b; font-size: 0.9rem;" data-i18n="footer_copyright">
                    © 2026 <strong style="color: #10b981;">moedev</strong> - This site is a work in progress and subject to change.
                </p>
                <a href="policy.html" style="color: #94a3b8; font-size: 0.85rem; text-decoration: underline;" data-i18n="footer_privacy">Privacy Policy & Terms of Service</a>
            </div>
        </footer>`;
        }

        bottomContainer.innerHTML = sectionHTML;
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
                    <h5 class="modal-title fw-bold" style="color: #fbbf24;" data-i18n="modal_docs_title">Docs Coming Soon</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body system-font text-center pt-2">
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
                    <h5 class="modal-title fw-bold" data-i18n="modal_credits_title">PROJECT POLICY & LICENSE</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body system-font">
                    <h6 class="fw-bold mb-3" style="color: #10b981;" data-i18n="modal_credits_heading">moedev & tetoOS Project Guidelines</h6>
                    <p data-i18n="modal_credits_welcome">Official policy, terms of distribution, and usage guidelines for moedev & tetoOS modifications.</p>
                    <div class="warning-box">
                        <div class="fw-bold mb-2" style="color: #fca5a5;" data-i18n="modal_credits_license_title">License Terms</div>
                        <ul class="mb-0 ps-3" style="color: #fecaca; font-size: 0.9rem;">
                            <li data-i18n="modal_credits_lic1">Redistribution or re-uploading of ISO files without explicit authorization is strictly prohibited.</li>
                            <li data-i18n="modal_credits_lic2">All original visual and audio assets are copyright of their respective creators.</li>
                            <li data-i18n="modal_credits_lic3">This custom mod is entirely free for personal use and must never be distributed behind paid shortlinks or paywalls.</li>
                        </ul>
                    </div>
                </div>
                <div class="modal-footer justify-content-between">
                    <span class="text-muted" style="font-size: 0.85rem;">Copyright (c) 2026 moedev Project</span>
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
                    <h5 class="modal-title fw-bold" data-i18n="modal_privacy_title">PRIVACY POLICY & TERMS OF SERVICE</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body system-font">
                    <p style="color: #10b981; font-weight: bold; margin-bottom: 5px;">MOEDEV PROJECT (tetoOS)</p>
                    <p style="color: #64748b; font-size: 0.85rem; margin-bottom: 20px;" data-i18n="modal_privacy_updated">Last Updated: July 18, 2026</p>
                    <p style="color: #cbd5e1; line-height: 1.7;" data-i18n="modal_privacy_intro">By downloading, installing, and using <strong>tetoOS</strong> or any other moedev Project software, you agree to these terms.</p>
                    <div class="changelog-section">
                        <div class="changelog-title" data-i18n="modal_privacy_sec1_title">SECTION 1: PRIVACY POLICY</div>
                        <ul class="list-unstyled text-light" style="font-size: 0.95rem;">
                            <li class="mb-3" data-i18n="modal_privacy_sec1_p1"><strong>1. User Data Security:</strong> moedev Project will never bundle malware, keyloggers, or trackers into custom OS images.</li>
                            <li class="mb-3" data-i18n="modal_privacy_sec1_p2"><strong>2. Telemetry & Tracking:</strong> Most native telemetry services are deactivated to protect user privacy and maximize frame pacing.</li>
                        </ul>
                    </div>
                    <div class="changelog-section mb-0">
                        <div class="changelog-title" data-i18n="modal_privacy_sec2_title">SECTION 2: DISCLAIMER</div>
                        <ul class="list-unstyled text-light" style="font-size: 0.95rem;">
                            <li class="mb-0" data-i18n="modal_privacy_sec2_p1"><strong>Use at Your Own Risk:</strong> Custom operating systems involve core system alterations. Please verify compatibility before daily driving.</li>
                        </ul>
                    </div>
                </div>
                <div class="modal-footer justify-content-between">
                    <span class="text-muted" style="font-size: 0.85rem;" data-i18n="modal_privacy_thanks">Thank you for respecting moedev Project guidelines.</span>
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
    moedevComponents.init();
    if (typeof setLanguage === 'function') {
        let savedLang = localStorage.getItem('moedev_lang') || localStorage.getItem('moedev_lang') || 'en';
        if (savedLang === 'id') savedLang = 'en';
        setLanguage(savedLang);
    }
});