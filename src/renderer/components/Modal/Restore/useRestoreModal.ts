import { KeyboardEvent, useCallback, useEffect, useMemo, useState } from 'react';
import { defaultSettings } from '../../../../defaultSettings';
import { settings } from '../../../lib/settings';
import { ipcRenderer } from '../../../lib/utils';
import { changeLang, getDirectionByLang, LanguageType } from '../../../../localization';
import useTranslate from '../../../../localization/useTranslate';

interface RestoreModalProps {
    isOpen: boolean;
    onClose: () => void;
    setTheme: (value: string) => void;
    setLang: (value: string) => void;
    setOpenAtLogin: (value: boolean) => void;
    setAutoConnect: (value: boolean) => void;
}

const useRestoreModal = (props: RestoreModalProps) => {
    const { isOpen, onClose, setTheme, setLang, setOpenAtLogin, setAutoConnect } = props;
    const detectingSystemTheme = useMemo(
        () => window?.matchMedia('(prefers-color-scheme: dark)')?.matches,
        []
    );

    const [showModal, setShowModal] = useState<boolean>(isOpen);

    useEffect(() => setShowModal(isOpen), [isOpen]);

    const appLang = useTranslate();

    const handleOnClose = useCallback(() => {
        setShowModal(false);
        setTimeout(onClose, 300);
    }, [onClose]);

    const onCancelKeyDown = useCallback(
        (e: KeyboardEvent<HTMLDivElement>) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleOnClose();
            }
        },
        [handleOnClose]
    );

    const onSaveModal = useCallback(async () => {
        // in this page
        //setSystemTray(defaultSettings.systemTray);
        setLang(defaultSettings.lang);
        setOpenAtLogin(defaultSettings.openAtLogin);
        setAutoConnect(defaultSettings.autoConnect);
        // TODO Promise.all
        await settings.set('theme', detectingSystemTheme ? 'dark' : 'light');
        setTheme(detectingSystemTheme ? 'dark' : 'light');
        document.documentElement.setAttribute(
            'data-bs-theme',
            detectingSystemTheme ? 'dark' : 'light'
        );
        //await settings.set('systemTray', defaultSettings.systemTray);
        await settings.set('lang', defaultSettings.lang);
        changeLang(defaultSettings.lang);
        document.documentElement.setAttribute('lang', defaultSettings.lang);
        document.documentElement.setAttribute(
            'dir',
            getDirectionByLang(defaultSettings.lang as LanguageType)
        );
        await settings.set('openAtLogin', defaultSettings.openAtLogin);
        await settings.set('autoConnect', defaultSettings.autoConnect);
        handleOnClose();
        // other settings
        //await settings.set('scan', defaultSettings.scan);
        await settings.set('endpoint', defaultSettings.endpoint);
        //await settings.set('psiphon', defaultSettings.psiphon);
        await settings.set('location', defaultSettings.location);
        await settings.set('license', defaultSettings.license);
        //await settings.set('gool', defaultSettings.gool);
        await settings.set('method', defaultSettings.method);
        await settings.set('hostIP', defaultSettings.hostIP);
        await settings.set('ipType', defaultSettings.ipType);
        await settings.set('rtt', defaultSettings.rtt);
        await settings.set('ipData', defaultSettings.ipData);
        await settings.set('port', defaultSettings.port);
        await settings.set('proxyMode', defaultSettings.proxyMode);
        await settings.set('shareVPN', defaultSettings.shareVPN);
        await settings.set('routingRules', defaultSettings.routingRules);
        await settings.set('reserved', defaultSettings.reserved);
        //
        ipcRenderer.sendMessage('wp-end');
        ipcRenderer.sendMessage('localization', defaultSettings.lang);
    }, [detectingSystemTheme, setTheme, setLang, setOpenAtLogin, setAutoConnect, handleOnClose]);

    const onConfirmKeyDown = useCallback(
        (e: KeyboardEvent<HTMLDivElement>) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                onSaveModal();
            }
        },
        [onSaveModal]
    );

    return {
        showModal,
        handleOnClose,
        onSaveModal,
        onConfirmKeyDown,
        onCancelKeyDown,
        appLang
    };
};

export default useRestoreModal;
