import classNames from 'classnames';
import { FC } from 'react';
import { defaultSettings } from '../../../../defaultSettings';
import useEndpointModal from './useEndpointModal';
import Input from '../../Input';

interface EndpointModalProps {
    title: string;
    isOpen: boolean;
    onClose: () => void;
    defValue?: string;
    endpoint: string;
    setEndpoint: (value: string) => void;
}

const EndpointModal: FC<EndpointModalProps> = ({
    title,
    isOpen,
    onClose,
    defValue = defaultSettings.endpoint,
    endpoint,
    setEndpoint
}) => {
    const {
        appLang,
        endpointInput,
        handleCancelButtonClick,
        handleCancelButtonKeyDown,
        handleEndpointInputChange,
        handleOnClose,
        onSaveModal,
        onUpdateKeyDown,
        setEndpointDefault,
        setEndpointSuggestion,
        setShowSuggestion,
        showModal,
        scanResult,
        showSuggestion,
        suggestion,
        suggestionRef
    } = useEndpointModal({
        isOpen,
        onClose,
        defValue,
        endpoint,
        setEndpoint
    });

    if (!isOpen) return <></>;

    return (
        <div className={classNames('dialog', !showModal ? 'no-opacity' : '')}>
            <div className='dialogBg' onClick={handleOnClose} role='presentation' />
            <div className='dialogBox'>
                <div className='container'>
                    <div className='line'>
                        <div className='miniLine' />
                    </div>
                    <h3>
                        {title}
                        <div className='labels'>
                            {scanResult &&
                                !suggestion.ipv4.includes(scanResult) &&
                                !suggestion.ipv6.includes(scanResult) && (
                                    <>
                                        <div
                                            role='presentation'
                                            className={classNames(
                                                'label',
                                                'label-primary',
                                                scanResult === endpointInput ? 'disabled' : ''
                                            )}
                                            onClick={() => {
                                                setEndpointSuggestion(scanResult);
                                            }}
                                        >
                                            <i className='material-icons'>&#xe145;</i>
                                            {appLang?.modal?.endpoint_latest}
                                        </div>
                                    </>
                                )}
                            <div
                                role='presentation'
                                className={classNames('label', 'label-danger')}
                                onClick={() => {
                                    setShowSuggestion((pre) => !pre);
                                }}
                                ref={suggestionRef}
                            >
                                <i className='material-icons'>&#xe145;</i>
                                {appLang?.modal?.endpoint_suggested}
                                <div
                                    className={classNames(
                                        'dropDownInLabel',
                                        showSuggestion ? '' : 'hidden',
                                        suggestion.ipv4.length > 0 && suggestion.ipv6.length > 0
                                            ? 'splitter'
                                            : ''
                                    )}
                                >
                                    <div className='split'>
                                        {[...suggestion.ipv4.keys()].map((key) => (
                                            <>
                                                <div
                                                    className={classNames(
                                                        'item',
                                                        suggestion.ipv4[key] === endpointInput
                                                            ? 'disabled'
                                                            : ''
                                                    )}
                                                    role='presentation'
                                                    key={key}
                                                    onClick={() => {
                                                        setEndpointSuggestion(suggestion.ipv4[key]);
                                                        //setShowSuggestion(false);
                                                    }}
                                                >
                                                    #{key + 1}
                                                    <small> IPv4</small>
                                                </div>
                                            </>
                                        ))}
                                    </div>
                                    <div className='split'>
                                        {[...suggestion.ipv6.keys()].map((key) => (
                                            <>
                                                <div
                                                    className={classNames(
                                                        'item',
                                                        suggestion.ipv6[key] === endpointInput
                                                            ? 'disabled'
                                                            : ''
                                                    )}
                                                    role='presentation'
                                                    key={key}
                                                    onClick={() => {
                                                        setEndpointSuggestion(suggestion.ipv6[key]);
                                                        //setShowSuggestion(false);
                                                    }}
                                                >
                                                    #{key + 1}
                                                    <small> IPv6</small>
                                                </div>
                                            </>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div
                                role='presentation'
                                className={classNames(
                                    'label',
                                    'label-warning',
                                    endpointInput === defValue ? 'disabled' : ''
                                )}
                                onClick={setEndpointDefault}
                            >
                                <i className='material-icons'>&#xe145;</i>
                                {appLang?.modal?.endpoint_default}
                            </div>
                        </div>
                    </h3>
                    <Input
                        id='modal_endpoint_input'
                        value={endpointInput}
                        tabIndex={0}
                        onChange={handleEndpointInputChange}
                        type='text'
                    />
                    <div className='clearfix' />
                    <div
                        className={classNames('btn', 'btn-cancel')}
                        onClick={handleCancelButtonClick}
                        onKeyDown={handleCancelButtonKeyDown}
                        role='button'
                        tabIndex={0}
                    >
                        {appLang?.modal?.cancel}
                    </div>
                    <div
                        role='button'
                        className={classNames('btn', 'btn-save')}
                        onClick={onSaveModal}
                        onKeyDown={onUpdateKeyDown}
                        tabIndex={0}
                    >
                        {appLang?.modal?.update}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EndpointModal;
