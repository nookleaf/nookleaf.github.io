// tetoOS download modal and edition selector

let currentOS = 'win10';
let currentBuild = '2021ltsc';
let currentType = 'sl';
let currentTab = 'supported';
let selectedEditionObj = null;

/**
 * Get active database from window.TETO_EDITIONS_CONFIG
 */
function getDatabase() {
    return window.TETO_EDITIONS_CONFIG || {};
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
 * Handle SSD/NVMe warning for Windows 11 24H2 and above (24H2, 25H2, 26H2)
 */
function updateSSDWarning() {
    const ssdBox = document.getElementById('ssd-warning-box');
    if (!ssdBox) return;

    const isWin11Newer = currentOS === 'win11' && ['25h2_24h2', '24h2_25h2', '24h2', '25h2', '26h2'].includes(currentBuild);
    if (isWin11Newer) {
        ssdBox.classList.remove('d-none');
    } else {
        ssdBox.classList.add('d-none');
    }
}

/**
 * Handle restrictions:
 * - 24H2 to 26H2 (Windows 11) has NO Superlite (Normal only due to Windows Update mechanism)
 * - 2019 LTSC (Windows 10) has NO Normal (Superlite only)
 */
function updateTypeRestrictions() {
    const slBtn = document.querySelector('.teto-type-btn[data-type="sl"]');
    const normalBtn = document.querySelector('.teto-type-btn[data-type="normal"]');
    const notice26H2 = document.getElementById('build-notice-box');
    const notice2019 = document.getElementById('win10-2019-notice-box');

    const isWin11NoSL = currentOS === 'win11' && ['25h2_24h2', '24h2_25h2', '24h2', '25h2', '26h2'].includes(currentBuild);
    const is2019LTSC = currentOS === 'win10' && currentBuild === '2019ltsc';

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

    if (isWin11NoSL) {
        if (slBtn) {
            slBtn.disabled = true;
            slBtn.classList.remove('active');
            slBtn.title = 'Superlite is not available for 24H2 - 26H2';
        }
        if (normalBtn) {
            normalBtn.classList.add('active');
        }
        if (currentType === 'sl') {
            currentType = 'normal';
        }
        if (notice26H2) {
            notice26H2.classList.remove('d-none');
        }
    } else if (is2019LTSC) {
        if (normalBtn) {
            normalBtn.disabled = true;
            normalBtn.classList.remove('active');
            normalBtn.title = 'Normal Edition is not available for 2019 LTSC';
        }
        if (slBtn) {
            slBtn.classList.add('active');
        }
        if (currentType === 'normal') {
            currentType = 'sl';
        }
        if (notice2019) {
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
                    if (dlBtn) dlBtn.classList.remove('disabled');
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
    const footerStatus = document.getElementById('dl-status-text');
    const finalDownloadBtn = document.getElementById('finalDownloadBtn');
    const helperText = document.getElementById('helper-text-choose');
    const currentLang = localStorage.getItem('moedev_lang') || 'en';

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
 * Setup Event Listeners
 */
document.addEventListener('DOMContentLoaded', () => {
    const osBtns = document.querySelectorAll('.teto-os-btn');
    const typeBtns = document.querySelectorAll('.teto-type-btn');
    const tabBtns = document.querySelectorAll('.teto-tab');
    const finalDownloadBtn = document.getElementById('finalDownloadBtn');

    // OS buttons (Windows 10 / 11)
    osBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            osBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentOS = btn.getAttribute('data-os');
            renderBuildPills();
            resetSelection();
            renderEditions();
        });
    });

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
                    if (continueBtn) continueBtn.href = selectedEditionObj.url;
                } else if (selectedEditionObj.url) {
                    window.open(selectedEditionObj.url, '_blank');
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

    // Initial render
    renderBuildPills();
    renderEditions();
});
