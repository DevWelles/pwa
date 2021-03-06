import pwaManifest, { write } from '@pwa/manifest';
 
(async () => {
    const manifest = await pwaManifest({
        name: 'Nas prvo PWA',
        short_name: 'prviPWA',
        start_url: '/index.html',
        display: 'standalone',
        background_color: '#EFEFEF',
        theme_color: '#FFEEFF'
    })
    // dump new generated manifest file if you want
    await write('./', manifest);
})();