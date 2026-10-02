/**
 * ============================================================================
 * DOWNLOAD MODULE - KernelOS Style Modal Edition Selection & Handlers
 * ============================================================================
 */

const editionsData = {
    'sl': {
        'supported': [
            { name: 'tetoOS Superlite Final (Target 2027)', disabled: true },
            { name: 'tetoOS Superlite RC1 21H2 (On Proses)', disabled: true }
        ],
        'unsupported': [
            { name: 'tetoOS Superlite EA Maret (Available)', disabled: false, url: 'https://sfl.gl/HQfCtx', isEa: true },
            { name: 'tetoOS CBT v6 (Legacy / Unsupported)', disabled: false, url: 'https://sfl.gl/Tnj58g', isEa: true }
        ]
    },
    'normal': {
        'supported': [
            { name: 'tetoOS Normal Final (Target 2027)', disabled: true },
            { name: 'tetoOS Normal RC1 21H2 (On Proses)', disabled: true }
        ],
        'unsupported': [
            { name: 'tetoOS CBT v6 (Legacy / Unsupported)', disabled: false, url: 'https://sfl.gl/Tnj58g', isEa: true }
        ]
    }
};

let currentVersion = 'sl';
let currentTab = 'supported';
let selectedEditionObj = null;

function renderEditions() {
    const listContainer = document.getElementById('edition-list');
    const helperText = document.getElementById('helper-text-choose');
    if (!listContainer || !helperText) return;

    listContainer.innerHTML = '';

    const items = (editionsData[currentVersion] && editionsData[currentVersion][currentTab]) || [];
    const currentLang = localStorage.getItem('nookleaf_lang') || 'en';

    if (items.length === 0) {
        const noDataMsg = document.createElement('p');
        noDataMsg.className = 'helper-text';
        noDataMsg.style.color = '#ef4444';
        noDataMsg.style.fontWeight = '600';
        noDataMsg.style.marginTop = '10px';

        noDataMsg.innerHTML = (typeof translations !== 'undefined' && translations[currentLang] && translations[currentLang]['dl_no_iso'])
            ? translations[currentLang]['dl_no_iso']
            : (translations && translations['en'] ? translations['en']['dl_no_iso'] : 'ISO is not available.');

        listContainer.appendChild(noDataMsg);
        helperText.style.display = 'none';
    } else {
        items.forEach(item => {
            const btn = document.createElement('button');
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
                displayName = displayName.replace('(On Proses)', inProgressText[currentLang] || '(In Progress)');
            }
            btn.textContent = displayName;

            if (item.disabled) {
                btn.disabled = true;
            } else {
                btn.addEventListener('click', () => {
                    document.querySelectorAll('.ed-btn').forEach(b => b.classList.remove('selected'));
                    btn.classList.add('selected');

                    selectedEditionObj = item;
                    const footerStatus = document.querySelector('.footer-status');
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

            listContainer.appendChild(btn);
        });

        helperText.style.display = selectedEditionObj ? 'none' : 'block';
    }
}

function resetSelection() {
    selectedEditionObj = null;
    const footerStatus = document.querySelector('.footer-status');
    const finalDownloadBtn = document.getElementById('finalDownloadBtn');
    const helperText = document.getElementById('helper-text-choose');
    const currentLang = localStorage.getItem('nookleaf_lang') || 'en';

    if (footerStatus) {
        footerStatus.textContent = (typeof translations !== 'undefined' && translations[currentLang] && translations[currentLang]['dl_modal_no_selection'])
            ? translations[currentLang]['dl_modal_no_selection']
            : 'No edition selected.';
    }
    if (finalDownloadBtn) finalDownloadBtn.classList.add('disabled');

    const items = editionsData[currentVersion] && editionsData[currentVersion][currentTab];
    if (items && items.length > 0 && helperText) {
        helperText.style.display = 'block';
    }
}

function switchToSupportedTab() {
    const dlModalEl = document.getElementById('downloadModal');
    if (dlModalEl && typeof bootstrap !== 'undefined') {
        const dlModal = new bootstrap.Modal(dlModalEl);
        dlModal.show();
    }

    const supportedTab = document.querySelector('.teto-tab[data-tab="supported"]');
    if (supportedTab) supportedTab.click();
}

document.addEventListener('DOMContentLoaded', () => {
    const versionBtns = document.querySelectorAll('.teto-btn-outline');
    const tabBtns = document.querySelectorAll('.teto-tab');
    const finalDownloadBtn = document.getElementById('finalDownloadBtn');

    versionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            versionBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentVersion = btn.getAttribute('data-version');
            resetSelection();
            renderEditions();
        });
    });

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentTab = btn.getAttribute('data-tab');
            resetSelection();
            renderEditions();
        });
    });

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

    const edFaqModalEl = document.getElementById('editionFaqModal');
    if (edFaqModalEl) {
        edFaqModalEl.addEventListener('hidden.bs.modal', () => {
            const dlModalEl = document.getElementById('downloadModal');
            if (dlModalEl && dlModalEl.classList.contains('show')) {
                document.body.classList.add('modal-open');
                document.body.style.overflow = 'hidden';
            }
        });
    }

    renderEditions();
});
