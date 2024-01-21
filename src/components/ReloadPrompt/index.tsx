/* eslint-disable no-console */
import './styles.css';
import { useRegisterSW } from 'virtual:pwa-register/react';

function ReloadPrompt() {
  // replaced dynamically
  const buildDate = '__DATE__';

  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegisteredSW(swScriptUrl: string, registration: ServiceWorkerRegistration | undefined) {
      console.log(`SW Registered: ${swScriptUrl} ${registration}`);
    },
    onRegisterError(error: Error) {
      console.log(`SW registration error ${error}`);
    },
  });

  const close = () => {
    setOfflineReady(false);
    setNeedRefresh(false);
  };

  return (
    <div className='ReloadPrompt-container'>
      { (offlineReady || needRefresh)
                && (
                  <div className='ReloadPrompt-toast'>
                    <div className='ReloadPrompt-message'>
                      { offlineReady
                                ? <span>App ready to work offline</span>
                                : <span>New content available, click on reload button to update.</span>}
                    </div>
                    { needRefresh && <button className='ReloadPrompt-toast-button' onClick={ () => updateServiceWorker(true) }>Reload</button> }
                    <button className='ReloadPrompt-toast-button' onClick={ () => close() }>Close</button>
                  </div>
                )}
      <div className='ReloadPrompt-date'>{buildDate}</div>
    </div>
  );
}

export default ReloadPrompt;