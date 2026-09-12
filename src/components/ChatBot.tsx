import { useEffect, type FC } from 'react';

declare global {
  interface Window {
    VG_CONFIG?: Record<string, unknown>;
  }
}

const ChatBot: FC = () => {
  useEffect(() => {
    if (document.getElementById('vg_bundle_script')) return;

    window.VG_CONFIG = {
      ID: 'pCKLFgnMUr7ITbTKd7gF',
      region: 'eu',
      render: 'bottom-right',
    };

    const script = document.createElement('script');
    script.id = 'vg_bundle_script';
    script.src = 'https://cdn.convocore.ai/vg_live_build/vg_bundle.js';
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return null;
};

export default ChatBot;
