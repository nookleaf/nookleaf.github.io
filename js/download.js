window.TETO_WORKER_URL = window.TETO_WORKER_URL || 'https://teto-download-gate.vincntshn.workers.dev';
window.TETO_TURNSTILE_SITEKEY = window.TETO_TURNSTILE_SITEKEY || '0x4AAAAAAFWNmXv2tbtJ8vKM';

let currentOS = 'win10';
let currentBuild = '2021ltsc';
let currentType = 'sl';
let currentTab = 'supported';
let selectedEditionObj = null;
let turnstileWidgetId = null;
let currentTurnstileToken = null;

/**
 * Get active database from window.TETO_EDITIONS_CONFIG
 */
function getDatabase() {
    return window.TETO_EDITIONS_CONFIG || {};
}

/**
 * Render dynamic OS buttons based on database
 */
function renderOSButtons() {
    const container = document.getElementById('os-buttons-container');
    if (!container) return;

    container.innerHTML = '';
    const db = getDatabase();
    const osKeys = Object.keys(db);
    if (osKeys.length === 0) return;

    if (!db[currentOS]) {
        currentOS = osKeys[0];
    }

    osKeys.forEach(osKey => {
        const osData = db[osKey];
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `teto-btn-outline teto-os-btn ${osKey === currentOS ? 'active' : ''}`;
        btn.dataset.os = osKey;
        btn.textContent = osData.name || osKey.toUpperCase();

        btn.addEventListener('click', () => {
            container.querySelectorAll('.teto-os-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentOS = osKey;
            renderBuildPills();
            resetSelection();
            renderEditions();
        });

        container.appendChild(btn);
    });
}

/**
 * Render dynamic build pills based on active OS
 */
function renderBuildPills() {
    const container = document.getElementById('build-pills-container');
    if (!container) return;

    container.innerHTML = '';
    const db = getDatabase();
    const osInfo = db[currentOS];
    if (!osInfo || !osInfo.builds) return;

    // Check if currentBuild is valid for this OS
    const validBuild = osInfo.builds.some(b => b.id === currentBuild);
    if (!validBuild) {
        currentBuild = osInfo.builds[0].id;
    }

    osInfo.builds.forEach(build => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `teto-pill-btn ${build.id === currentBuild ? 'active' : ''}`;
        btn.textContent = build.label;
        btn.dataset.build = build.id;

        btn.addEventListener('click', () => {
            container.querySelectorAll('.teto-pill-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentBuild = build.id;
            updateTypeRestrictions();
            updateSSDWarning();
            resetSelection();
            renderEditions();
        });

        container.appendChild(btn);
    });

    updateTypeRestrictions();
    updateSSDWarning();
}

/**
 * Handle SSD/NVMe warning for Windows 11 24H2 and above (or any future OS like Windows 12 / 27H2)
 */
function updateSSDWarning() {
    const ssdBox = document.getElementById('ssd-warning-box');
    if (!ssdBox) return;

    const db = getDatabase();
    const osData = db[currentOS]?.editions || db[currentOS]?.data;
    const buildData = osData ? osData[currentBuild] : null;

    // Direct flag from data if specified, otherwise rule-based for Win 11 (24H2+) & future Win12+
    let isSSDRecommended = false;
    if (buildData && typeof buildData.ssdRecommended === 'boolean') {
        isSSDRecommended = buildData.ssdRecommended;
    } else {
        const isWin11Newer = currentOS === 'win11' && ['25h2_24h2', '24h2_25h2', '24h2', '25h2', '26h2', '27h2'].includes(currentBuild);
        const isFutureOS = currentOS !== 'win10' && currentOS !== 'win11'; // Windows 12 etc.
        isSSDRecommended = isWin11Newer || isFutureOS;
    }

    if (isSSDRecommended) {
        ssdBox.classList.remove('d-none');
    } else {
        ssdBox.classList.add('d-none');
    }
}

/**
 * Handle edition availability dynamically based on editions data in config:
 * - If a build has NO 'sl' editions -> disable Superlite & select Normal
 * - If a build has NO 'normal' editions -> disable Normal & select Superlite
 */
function updateTypeRestrictions() {
    const slBtn = document.querySelector('.teto-type-btn[data-type="sl"]');
    const normalBtn = document.querySelector('.teto-type-btn[data-type="normal"]');
    const notice26H2 = document.getElementById('build-notice-box');
    const notice2019 = document.getElementById('win10-2019-notice-box');

    const db = getDatabase();
    const osData = db[currentOS]?.editions || db[currentOS]?.data;
    const buildData = osData ? osData[currentBuild] : null;

    const hasSl = buildData && buildData.sl && (
        (buildData.sl.supported && buildData.sl.supported.length > 0) ||
        (buildData.sl.unsupported && buildData.sl.unsupported.length > 0)
    );

    const hasNormal = buildData && buildData.normal && (
        (buildData.normal.supported && buildData.normal.supported.length > 0) ||
        (buildData.normal.unsupported && buildData.normal.unsupported.length > 0)
    );

    // Determine lock state dynamically from JSON config:
    // If superliteLocked is explicitly set in JSON (true/false), honor it directly.
    // Otherwise fallback to checking if sl editions are available.
    let isSuperliteLocked = false;
    if (buildData && typeof buildData.superliteLocked === 'boolean') {
        isSuperliteLocked = buildData.superliteLocked;
    } else {
        isSuperliteLocked = !hasSl && hasNormal;
    }

    let isNormalLocked = false;
    if (buildData && typeof buildData.normalLocked === 'boolean') {
        isNormalLocked = buildData.normalLocked;
    } else {
        isNormalLocked = !hasNormal && hasSl;
    }

    // Reset default button states & notices
    if (slBtn) {
        slBtn.disabled = false;
        slBtn.title = '';
    }
    if (normalBtn) {
        normalBtn.disabled = false;
        normalBtn.title = '';
    }
    if (notice26H2) notice26H2.classList.add('d-none');
    if (notice2019) notice2019.classList.add('d-none');

    if (isSuperliteLocked) {
        // Superlite locked -> auto switch to Normal
        if (slBtn) {
            slBtn.disabled = true;
            slBtn.classList.remove('active');
            slBtn.title = 'Superlite is not available for this build';
        }
        if (normalBtn) {
            normalBtn.classList.add('active');
        }
        currentType = 'normal';
        if (notice26H2) {
            if (buildData && buildData.notice) {
                notice26H2.textContent = buildData.notice;
            } else {
                const currentLang = localStorage.getItem('moedev_lang') || 'en';
                const t = window.translations || {};
                notice26H2.textContent = (t[currentLang] && t[currentLang]['dl_26h2_notice'])
                    ? t[currentLang]['dl_26h2_notice']
                    : 'Superlite is unavailable for this edition. Normal Edition is selected.';
            }
            notice26H2.classList.remove('d-none');
        }
    } else if (isNormalLocked) {
        // Normal locked -> auto switch to Superlite
        if (normalBtn) {
            normalBtn.disabled = true;
            normalBtn.classList.remove('active');
            normalBtn.title = 'Normal Edition is not available for this build';
        }
        if (slBtn) {
            slBtn.classList.add('active');
        }
        currentType = 'sl';
        if (notice2019) {
            if (buildData && buildData.normalNotice) {
                notice2019.textContent = buildData.normalNotice;
            } else {
                const currentLang = localStorage.getItem('moedev_lang') || 'en';
                const t = window.translations || {};
                notice2019.textContent = (t[currentLang] && t[currentLang]['dl_2019ltsc_notice'])
                    ? t[currentLang]['dl_2019ltsc_notice']
                    : 'Normal Edition is unavailable for this edition. Superlite Edition is selected.';
            }
            notice2019.classList.remove('d-none');
        }
    } else {
        if (currentType === 'sl') {
            if (slBtn) slBtn.classList.add('active');
            if (normalBtn) normalBtn.classList.remove('active');
        } else {
            if (normalBtn) normalBtn.classList.add('active');
            if (slBtn) slBtn.classList.remove('active');
        }
    }
}

/**
 * Show Changelog Modal for a specific edition
 */
function openChangelogModal(item) {
    const modalEl = document.getElementById('changelogModal');
    const titleEl = document.getElementById('changelogModalTitle');
    const bodyEl = document.getElementById('changelogModalBody');
    if (!modalEl || !titleEl || !bodyEl) return;

    titleEl.textContent = `Changelog: ${item.name}`;

    if (item.changelog && Array.isArray(item.changelog) && item.changelog.length > 0) {
        bodyEl.innerHTML = `
            <ul class="changelog-list">
                ${item.changelog.map(log => `<li>${log}</li>`).join('')}
            </ul>
        `;
    } else if (item.changelog && typeof item.changelog === 'string') {
        bodyEl.innerHTML = `<p class="m-0" style="color: #cbd5e1; line-height: 1.6;">${item.changelog}</p>`;
    } else {
        bodyEl.innerHTML = `<p class="m-0 text-muted" style="font-style: italic;">No changelog notes available yet for this build.</p>`;
    }

    if (typeof bootstrap !== 'undefined') {
        const modalInstance = bootstrap.Modal.getOrCreateInstance(modalEl);
        modalInstance.show();
    }
}

/**
 * Initialize or reset Cloudflare Turnstile verification widget
 */
function initTurnstile() {
    const wrapper = document.getElementById('turnstile-wrapper');
    const box = document.getElementById('turnstile-box');
    const dlBtn = document.getElementById('finalDownloadBtn');
    if (!wrapper || !box) return;

    wrapper.classList.remove('d-none');

    function renderWidget() {
        if (!window.turnstile || typeof window.turnstile.render !== 'function') {
            // Jika Turnstile tidak termuat (misal offline/tanpa internet), tombol unduh tetap aktif pada mode lokal
            if (!window.TETO_WORKER_URL && dlBtn && selectedEditionObj) {
                dlBtn.classList.remove('disabled');
            }
            return;
        }

        if (turnstileWidgetId !== null) {
            try {
                window.turnstile.reset(turnstileWidgetId);
                currentTurnstileToken = null;
            } catch (e) {
                console.warn('Turnstile reset error:', e);
            }
        } else {
            try {
                turnstileWidgetId = window.turnstile.render('#turnstile-box', {
                    sitekey: window.TETO_TURNSTILE_SITEKEY,
                    theme: 'dark',
                    callback: function(token) {
                        currentTurnstileToken = token;
                        if (dlBtn && selectedEditionObj) {
                            dlBtn.classList.remove('disabled');
                        }
                    },
                    'expired-callback': function() {
                        currentTurnstileToken = null;
                        if (dlBtn && window.TETO_WORKER_URL) {
                            dlBtn.classList.add('disabled');
                        }
                    },
                    'error-callback': function() {
                        currentTurnstileToken = null;
                        if (!window.TETO_WORKER_URL && dlBtn && selectedEditionObj) {
                            dlBtn.classList.remove('disabled');
                        }
                    }
                });
            } catch (e) {
                console.warn('Turnstile render error:', e);
                if (dlBtn && selectedEditionObj) {
                    dlBtn.classList.remove('disabled');
                }
            }
        }
    }

    if (window.turnstile) {
        renderWidget();
    } else {
        let count = 0;
        const checkTurnstile = setInterval(() => {
            count++;
            if (window.turnstile) {
                clearInterval(checkTurnstile);
                renderWidget();
            } else if (count >= 10) {
                clearInterval(checkTurnstile);
                if (!window.TETO_WORKER_URL && dlBtn && selectedEditionObj) {
                    dlBtn.classList.remove('disabled');
                }
            }
        }, 200);
    }
}

/**
 * Render edition items in the download list
 */
function renderEditions() {
    const listContainer = document.getElementById('edition-list');
    const helperText = document.getElementById('helper-text-choose');
    if (!listContainer || !helperText) return;

    listContainer.innerHTML = '';

    const db = getDatabase();
    const osData = db[currentOS]?.editions || db[currentOS]?.data;
    const buildData = osData ? osData[currentBuild] : null;
    const typeData = buildData ? buildData[currentType] : null;
    const items = typeData ? typeData[currentTab] : [];

    const currentLang = localStorage.getItem('moedev_lang') || 'en';

    if (!items || items.length === 0) {
        const noDataMsg = document.createElement('p');
        noDataMsg.className = 'helper-text';
        noDataMsg.style.color = '#ef4444';
        noDataMsg.style.fontWeight = '600';
        noDataMsg.style.marginTop = '10px';

        noDataMsg.innerHTML = (typeof translations !== 'undefined' && translations[currentLang] && translations[currentLang]['dl_no_iso'])
            ? translations[currentLang]['dl_no_iso']
            : (translations && translations['en'] ? translations['en']['dl_no_iso'] : 'ISO is not available for this selection.');

        listContainer.appendChild(noDataMsg);
        helperText.style.display = 'none';
    } else {
        items.forEach(item => {
            const row = document.createElement('div');
            row.className = 'ed-row';

            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'ed-btn';

            let displayName = item.name;
            if (item.disabled) {
                const inProgressText = {
                    id: '(On Proses)',
                    en: '(In Progress)',
                    ja: '(進行中)',
                    ko: '(진행 중)',
                    ru: '(В процессе)',
                    zh: '(进行中)',
                    ar: '(قيد التنفيذ)'
                };
                if (displayName.includes('(On Proses)')) {
                    displayName = displayName.replace('(On Proses)', inProgressText[currentLang] || '(In Progress)');
                } else if (!displayName.includes('(In Progress)')) {
                    displayName += ' ' + (inProgressText[currentLang] || '(In Progress)');
                }
            }
            btn.textContent = displayName;

            if (item.disabled) {
                btn.disabled = true;
            } else {
                btn.addEventListener('click', () => {
                    document.querySelectorAll('.ed-btn').forEach(b => b.classList.remove('selected'));
                    btn.classList.add('selected');

                    selectedEditionObj = item;
                    const footerStatus = document.getElementById('dl-status-text');
                    const selectedWord = (typeof translations !== 'undefined' && translations[currentLang] && translations[currentLang]['dl_selected'])
                        ? translations[currentLang]['dl_selected']
                        : 'selected.';

                    if (footerStatus) {
                        footerStatus.textContent = `${item.name} ${selectedWord}`;
                    }

                    helperText.style.display = 'none';
                    const dlBtn = document.getElementById('finalDownloadBtn');

                    // Inisialisasi widget Turnstile
                    initTurnstile();

                    // Pada mode lokal tanpa Worker, aktifkan langsung tombol unduh
                    if (!window.TETO_WORKER_URL && dlBtn) {
                        dlBtn.classList.remove('disabled');
                    } else if (window.TETO_WORKER_URL && dlBtn && !currentTurnstileToken) {
                        dlBtn.classList.add('disabled');
                    }
                });
            }

            if (selectedEditionObj && selectedEditionObj.name === item.name) {
                btn.classList.add('selected');
            }

            // Changelog Button on the right
            const changelogBtn = document.createElement('button');
            changelogBtn.type = 'button';
            changelogBtn.className = 'ed-changelog-btn';
            changelogBtn.title = `View Changelog for ${item.name}`;
            changelogBtn.innerHTML = `
                <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
                    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                </svg>
                <span>Changelog</span>
            `;

            changelogBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                openChangelogModal(item);
            });

            row.appendChild(btn);
            row.appendChild(changelogBtn);
            listContainer.appendChild(row);
        });

        helperText.style.display = selectedEditionObj ? 'none' : 'block';
    }
}

/**
 * Reset selected download option
 */
function resetSelection() {
    selectedEditionObj = null;
    currentTurnstileToken = null;
    const footerStatus = document.getElementById('dl-status-text');
    const finalDownloadBtn = document.getElementById('finalDownloadBtn');
    const helperText = document.getElementById('helper-text-choose');
    const currentLang = localStorage.getItem('moedev_lang') || 'en';

    const turnstileWrapper = document.getElementById('turnstile-wrapper');
    if (turnstileWrapper) turnstileWrapper.classList.add('d-none');
    if (window.turnstile && turnstileWidgetId !== null) {
        try {
            window.turnstile.reset(turnstileWidgetId);
        } catch (e) {}
    }

    if (footerStatus) {
        footerStatus.textContent = (typeof translations !== 'undefined' && translations[currentLang] && translations[currentLang]['dl_modal_no_selection'])
            ? translations[currentLang]['dl_modal_no_selection']
            : 'No edition selected.';
    }
    if (finalDownloadBtn) finalDownloadBtn.classList.add('disabled');

    const db = getDatabase();
    const osData = db[currentOS]?.editions || db[currentOS]?.data;
    const buildData = osData ? osData[currentBuild] : null;
    const typeData = buildData ? buildData[currentType] : null;
    const items = typeData ? typeData[currentTab] : [];

    if (items && items.length > 0 && helperText) {
        helperText.style.display = 'block';
    }
}

/**
 * Switch from EA Warning to Supported Tab
 */
function switchToSupportedTab() {
    const dlModalEl = document.getElementById('downloadModal');
    if (dlModalEl && typeof bootstrap !== 'undefined') {
        const dlModal = new bootstrap.Modal(dlModalEl);
        dlModal.show();
    }

    const supportedTab = document.querySelector('.teto-tab[data-tab="supported"]');
    if (supportedTab) supportedTab.click();
}

/**
 * Execute download flow (supports Cloudflare Worker verification & local fallback)
 */
async function executeDownload(item) {
    if (!item) return;

    // Mode Cloudflare Worker (Production)
    if (window.TETO_WORKER_URL) {
        const dlBtn = document.getElementById('finalDownloadBtn');
        const originalContent = dlBtn ? dlBtn.innerHTML : '';
        if (dlBtn) {
            dlBtn.classList.add('disabled');
            dlBtn.innerHTML = `
                <div class="spinner-border spinner-border-sm text-light me-2" role="status"></div>
                <span>Verifying...</span>
            `;
        }

        try {
            const res = await fetch(`${window.TETO_WORKER_URL}/api/download`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    token: currentTurnstileToken || '',
                    editionId: item.id || item.name
                })
            });

            const data = await res.json();
            if (data.success && data.url) {
                window.open(data.url, '_blank');
            } else {
                alert(data.error || 'Verification failed. Please complete captcha.');
                if (window.turnstile && turnstileWidgetId !== null) {
                    window.turnstile.reset(turnstileWidgetId);
                    currentTurnstileToken = null;
                }
            }
        } catch (err) {
            console.error('Download verification error:', err);
            alert('Failed to connect to verification server. Please try again.');
        } finally {
            if (dlBtn) {
                dlBtn.innerHTML = originalContent;
                if (!window.TETO_WORKER_URL || currentTurnstileToken) {
                    dlBtn.classList.remove('disabled');
                }
            }
        }
        return;
    }

    // Mode Fallback Lokal (Laragon / Direct Download via data/editions.json)
    if (item.url) {
        window.open(item.url, '_blank');
    } else {
        alert('Download link not configured for this edition.');
    }
}

/**
 * Setup Event Listeners
 */
document.addEventListener('DOMContentLoaded', () => {
    const typeBtns = document.querySelectorAll('.teto-type-btn');
    const tabBtns = document.querySelectorAll('.teto-tab');
    const finalDownloadBtn = document.getElementById('finalDownloadBtn');

    // Type buttons (Superlite / Normal)
    typeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.disabled) return;
            typeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentType = btn.getAttribute('data-type');
            resetSelection();
            renderEditions();
        });
    });

    // Channel tab buttons (Supported / Unsupported)
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentTab = btn.getAttribute('data-tab');
            resetSelection();
            renderEditions();
        });
    });

    // Final download button handler
    if (finalDownloadBtn) {
        finalDownloadBtn.addEventListener('click', () => {
            if (selectedEditionObj) {
                if (selectedEditionObj.isEa) {
                    const dlModalEl = document.getElementById('downloadModal');
                    if (dlModalEl && typeof bootstrap !== 'undefined') {
                        const dlModalInstance = bootstrap.Modal.getInstance(dlModalEl);
                        if (dlModalInstance) dlModalInstance.hide();
                    }

                    const eaModalEl = document.getElementById('eaWarningModal');
                    if (eaModalEl && typeof bootstrap !== 'undefined') {
                        const eaModalInstance = new bootstrap.Modal(eaModalEl);
                        eaModalInstance.show();
                    }

                    const continueBtn = document.getElementById('continue-ea-dl');
                    if (continueBtn) {
                        continueBtn.onclick = (e) => {
                            e.preventDefault();
                            if (typeof bootstrap !== 'undefined') {
                                const eaModalInstance = bootstrap.Modal.getInstance(eaModalEl);
                                if (eaModalInstance) eaModalInstance.hide();
                            }
                            executeDownload(selectedEditionObj);
                        };
                    }
                } else {
                    executeDownload(selectedEditionObj);
                }
            }
        });
    }

    // Keep body scroll lock when closing nested modals (FAQ & Changelog)
    ['editionFaqModal', 'changelogModal'].forEach(modalId => {
        const modalEl = document.getElementById(modalId);
        if (modalEl) {
            modalEl.addEventListener('hidden.bs.modal', () => {
                const dlModalEl = document.getElementById('downloadModal');
                if (dlModalEl && dlModalEl.classList.contains('show')) {
                    document.body.classList.add('modal-open');
                    document.body.style.overflow = 'hidden';
                }
            });
        }
    });

    // Initial render (support async API loading)
    if (typeof window.loadEditionsConfig === 'function') {
        window.loadEditionsConfig().then(() => {
            renderOSButtons();
            renderBuildPills();
            renderEditions();
        });
    } else {
        renderOSButtons();
        renderBuildPills();
        renderEditions();
    }
});
