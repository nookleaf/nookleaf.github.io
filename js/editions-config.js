// tetoOS editions and downloads data provider
// Central data source: data/editions.json

window.TETO_EDITIONS_CONFIG = {};

/**
 * Async API fetcher to load central editions data
 */
window.loadEditionsConfig = async function() {
    try {
        const response = await fetch('data/editions.json');
        if (response.ok) {
            const data = await response.json();
            window.TETO_EDITIONS_CONFIG = data;
            return data;
        }
    } catch (e) {
        console.error('Failed to load data/editions.json:', e);
    }
    return window.TETO_EDITIONS_CONFIG;
};

/**
 * Helper to collect all unsupported/archived builds across all OS & editions
 */
window.getArchivedBuilds = function() {
    const db = window.TETO_EDITIONS_CONFIG || {};
    const archives = [];

    for (const [osKey, osObj] of Object.entries(db)) {
        const editions = osObj.editions || {};
        for (const [buildKey, buildObj] of Object.entries(editions)) {
            for (const [typeKey, typeObj] of Object.entries(buildObj)) {
                const unsuppList = typeObj.unsupported || [];
                unsuppList.forEach(item => {
                    archives.push({
                        ...item,
                        os: osObj.name || osKey,
                        buildKey: buildKey,
                        typeKey: typeKey,
                        filename: item.filename || (item.name ? item.name.replace(/\s+/g, '_') + '.iso' : 'tetoOS_archive.iso'),
                        date: item.date || '2026-03-15 14:32',
                        size: item.size || '2.6 GB'
                    });
                });
            }
        }
    }
    return archives;
};
