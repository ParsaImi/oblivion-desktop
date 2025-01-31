import { Language } from './type';

const english: Language = {
    global: {},
    status: {
        connecting: 'Connecting ...',
        connected: 'Connected',
        connected_confirm: 'Connected',
        disconnecting: 'Disconnecting ...',
        disconnected: 'Disconnected',
        ip_check: 'Checking Ip ...'
    },
    home: {
        title_warp_based: 'Warp Based',
        drawer_settings_warp: 'Warp Settings',
        drawer_settings_routing_rules: 'Routing Rules',
        drawer_settings_app: 'App Settings',
        drawer_settings_scanner: 'Scanner Settings',
        drawer_settings_network: 'Network Settings',
        drawer_log: 'App Log',
        drawer_update: 'Update',
        drawer_update_label: 'New Update',
        drawer_speed_test: 'Speed Test',
        drawer_about: 'About App',
        drawer_lang: 'Language Change'
    },
    toast: {
        ip_check_please_wait: 'Please wait a few seconds to retry the check!',
        ir_location:
            'Cloudflare has connected to an IP with an Iranian location, which is different from your actual IP. You can use it to bypass filtering, but not sanctions. Don\'t worry! You can change the location in the settings using the "Gool" or "psiphon" option.',
        btn_submit: 'Understood',
        copied: 'Copied!',
        cleared: 'The log has been cleared!',
        please_wait: 'Please Wait ...',
        offline: 'You Are Offline!',
        settings_changed: 'Applying settings requires reconnecting.'
    },
    settings: {
        title: 'Warp Settings',
        more: 'More Settings',
        method_warp: 'Warp',
        method_warp_desc: 'Enable Warp',
        method_gool: 'Gool',
        method_gool_desc: 'Enable WarpInWarp',
        method_psiphon: 'Psiphon',
        method_psiphon_desc: 'Enable Psiphon',
        method_psiphon_location: 'Country',
        method_psiphon_location_auto: 'Automatic',
        method_psiphon_location_desc: 'Select the desired country IP',
        endpoint: 'Endpoint',
        endpoint_desc: 'Combination of IP or domain name, along with port',
        license: 'License',
        license_desc: 'The license consumption is doubled',
        option: 'Application Settings',
        network: 'Network Settings',
        proxy_mode: 'Configuration',
        proxy_mode_desc: 'Defining Proxy Settings',
        port: 'Proxy Port',
        port_desc: 'Define application proxy port',
        share_vpn: 'Share (LAN)',
        share_vpn_desc: 'Share a proxy on the network',
        dns: 'Change DNS',
        dns_desc: 'Use Google Public DNS',
        ip_data: 'IP Check',
        ip_data_desc: 'Display IP & location after connection',
        dark_mode: 'Dark Mode',
        dark_mode_desc: 'Specify the display mode of the application',
        lang: 'Language',
        lang_desc: 'Change application interface language',
        open_login: 'Start at login',
        open_login_desc: 'Open at system startup',
        auto_connect: 'Auto Connection',
        auto_connect_desc: 'Connect when app opens',
        system_tray: 'System Tray',
        system_tray_desc: 'Not placing the program icon in the taskbar',
        restore: 'Restore',
        restore_desc: 'Apply default application settings',
        scanner: 'Scanner Settings',
        scanner_alert: 'The scanner is activated if you are using the default endpoint address.',
        scanner_ip_type: 'Endpoint type',
        scanner_ip_type_auto: 'Automatic',
        scanner_ip_type_desc: 'To find endpoint IP',
        scanner_rtt: 'Interval',
        scanner_rtt_default: 'Default',
        scanner_rtt_desc: 'Scanner RTT limit',
        scanner_reserved: 'Reserved',
        scanner_reserved_desc: 'Override wireguard reserved value',
        routing_rules: 'Blacklist',
        routing_rules_desc: 'Prevent traffic from going through warp',
        routing_rules_disabled: 'Disabled',
        routing_rules_items: 'Items'
    },
    tabs: {
        home: 'Connect',
        warp: 'Warp',
        network: 'Network',
        scanner: 'Scanner',
        app: 'App'
    },
    modal: {
        endpoint_title: 'Endpoint',
        license_title: 'License',
        license_desc:
            'The program does not necessarily need a Warp license to run, but if you wish, you can enter your license here.',
        license_clear: 'Clear',
        port_title: 'Proxy Port',
        restore_title: 'Restore Changes',
        restore_desc:
            'By confirming the operation of restoring the changes, all program settings will return to the default state and your connection will be disconnected.',
        routing_rules_sample: 'Sample',
        endpoint_default: 'Default',
        endpoint_suggested: 'Suggested',
        endpoint_latest: 'Latest',
        confirm: 'I confirm',
        update: 'Update',
        cancel: 'Cancel'
    },
    log: {
        title: 'App Log',
        desc: 'If a log is created by the program, it will be displayed here.',
        error_invalid_license: 'The entered license is not valid; Remove it.',
        error_too_many_connected: 'The license usage limit is filled; Remove it.',
        error_access_denied: 'Run the program as Run as Administrator.',
        error_failed_set_endpoint: 'Check or replace the endpoint value, or try again.',
        error_warp_identity: 'Authentication error in cloudflare; Try again.',
        error_script_failed: 'The program encountered an error; Try again.',
        error_object_null: 'The program encountered an error; Try again.',
        error_port_already_in_use: (value) =>
            `Port ${value} is being used by another program; Change it.`,
        error_port_socket: 'Use another port.',
        error_unknown_flag: 'An invalid command was executed in the background.',
        error_deadline_exceeded: 'Connection timed out; Try again.',
        error_configuration_encountered: 'Proxy configuration encountered an error!',
        error_desktop_not_supported: 'Desktop environment is not supported!',
        error_configuration_not_supported:
            'Proxy configuration is not supported in your operating system, but you can use Warp Proxy manually.',
        error_configuring_proxy: (value) => `Error configuring proxy for ${value}!`,
        error_wp_not_found: 'The warp-plus file is not located alongside the application package!'
    },
    about: {
        title: 'About App',
        desc: 'This program is an unofficial, but reliable version of the Oblivion app for Windows, Linux, and Mac.\nThe Oblivion Desktop program is modeled after the user interface of the original version developed by Yousef Ghobadi. It was written, it was prepared for the purpose of free access to the Internet, and any name change or commercial use of it is not allowed.',
        slogan: 'Internet, for all or none!'
    },
    systemTray: {
        connect: 'Connect',
        connecting: 'Connecting ...',
        connected: 'Connected',
        disconnecting: 'Disconnecting ...',
        settings: 'Settings',
        settings_warp: 'Warp',
        settings_network: 'Network',
        settings_scanner: 'Scanner',
        settings_app: 'Application',
        about: 'About',
        log: 'Log',
        exit: 'Exit'
    },
    update: {
        available: 'Update Available',
        available_message: (value) =>
            `A new version of the ${value} is available. Do you want to update now?`,
        ready: 'Update Ready',
        ready_message: (value) =>
            `A new version of the ${value} is ready. It will be installed after a restart. Do you want to restart now?`
    }
};
export default english;
