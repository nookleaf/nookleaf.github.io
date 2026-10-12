// tetoOS editions and downloads configuration

window.TETO_EDITIONS_CONFIG = {
    // Windows 10 (sorted newest to oldest)
    win10: {
        name: 'Windows 10',
        builds: [
            { id: '2021ltsc', label: '2021 LTSC' },
            { id: '2019ltsc', label: '2019 LTSC' }
        ],
        editions: {
            '2021ltsc': {
                sl: {
                    supported: [
                        {
                            name: 'tetoOS 10 Superlite 2021 LTSC',
                            disabled: true,
                            url: '',
                            changelog: [
                                'Official Windows 10 2021 LTSC Superlite edition',
                                'Ultra-stripped background telemetry & services for maximum gaming responsiveness',
                                'DirectX, Visual C++ Redistributables & gaming runtimes ready',
                                'Verified anti-cheat & low-latency kernel tuning'
                            ]
                        }
                    ],
                    unsupported: [
                        {
                            name: 'tetoOS 10 Superlite Early Access March 2026',
                            disabled: false,
                            url: 'https://sfl.gl/HQfCtx',
                            isEa: true,
                            changelog: [
                                'Early Access March 2026 public testing ISO',
                                'Heavy-debloated Windows components',
                                'CAUTION: So many bugs.'
                            ]
                        }
                    ]
                },
                normal: {
                    supported: [
                        {
                            name: 'tetoOS 10 Normal 2021 LTSC',
                            disabled: true,
                            url: '',
                            changelog: [
                                'Official Windows 10 2021 LTSC Normal edition',
                                'Full Windows features preserved (Microsoft Store, Xbox Identity, Bluetooth, Printing)',
                                'Balanced debloat with core telemetry and bloatware disabled'
                            ]
                        }
                    ],
                    unsupported: []
                }
            },
            '2019ltsc': {
                sl: {
                    supported: [
                        {
                            name: 'tetoOS 10 Superlite 2019 LTSC',
                            disabled: true,
                            url: '',
                            changelog: [
                                'Official Windows 10 2019 LTSC Superlite edition',
                                'Ultra-stripped background telemetry & services for maximum legacy stability & gaming responsiveness',
                                'DirectX, Visual C++ Redistributables & gaming runtimes ready',
                                'Verified anti-cheat & low-latency kernel tuning'
                            ]
                        }
                    ],
                    unsupported: []
                },
                normal: {
                    // Normal edition is not available for 2019 LTSC (Superlite only)
                    supported: [],
                    unsupported: []
                }
            }
        }
    },

    // Windows 11 (sorted newest to oldest)
    win11: {
        name: 'Windows 11',
        builds: [
            { id: '26h2', label: '26H2' },
            { id: '25h2_24h2', label: '25H2 Pro + 24H2 LTSC' },
            { id: '23h2', label: '23H2' }
        ],
        editions: {
            '26h2': {
                sl: {
                    // Superlite is not available for 26H2 (Active Microsoft Support)
                    supported: [],
                    unsupported: []
                },
                normal: {
                    supported: [
                        {
                            name: 'tetoOS 11 Normal 26H2',
                            disabled: true,
                            url: '',
                            changelog: [
                                'Windows 11 26H2 Next-Gen Normal edition',
                                'Built for future Windows 11 milestone update',
                                'Full Microsoft support & core platform compliance'
                            ]
                        }
                    ],
                    unsupported: []
                }
            },
            '25h2_24h2': {
                sl: {
                    supported: [],
                    unsupported: []
                },
                normal: {
                    supported: [
                        {
                            name: 'tetoOS 11 Normal 25H2 Pro + 24H2 LTSC',
                            disabled: true,
                            url: '',
                            changelog: [
                                'Windows 11 25H2 Pro & 24H2 LTSC combined Normal edition',
                                'Enterprise LTSC & Pro base with consumer bloatware stripped',
                                'Full compatibility with Windows security features and gaming peripherals'
                            ]
                        }
                    ],
                    unsupported: []
                }
            },
            '23h2': {
                sl: {
                    supported: [
                        {
                            name: 'tetoOS 11 Superlite 23H2',
                            disabled: true,
                            url: '',
                            changelog: [
                                'Windows 11 23H2 Superlite edition',
                                'Modern Windows 11 UI stripped of all AI/Copilot and background telemetry daemons',
                                'DirectStorage and modern GPU scheduler optimizations',
                                'Ultra-low idle RAM consumption'
                            ]
                        }
                    ],
                    unsupported: []
                },
                normal: {
                    supported: [
                        {
                            name: 'tetoOS 11 Normal 23H2',
                            disabled: true,
                            url: '',
                            changelog: [
                                'Windows 11 23H2 Normal edition',
                                'Complete security suite, Windows Defender & WSL compatibility',
                                'Latency tweaks with zero broken dependencies or store features'
                            ]
                        }
                    ],
                    unsupported: []
                }
            }
        }
    }
};
