import {gn} from '../utils/lib.js';
import Localization from '../utils/Localization.js';
import iOS from '../iPad/iOS.js';
import Lobby from '../lobby/Lobby.js';

export function homeMain () {  // eslint-disable-line import/prefer-default-export
    gn('logotab').onmousedown = homeGoBack;
    homeStrings();
    iOS.getsettings(doNext);
    function doNext (str) {
        var list = str.split(',');
        iOS.path = list[1] == '0' ? list[0] + '/' : undefined;
        Lobby.appinit(window.Settings.scratchJrVersion);
    }
}

function homeGoBack () {
    window.location.href = 'index.html?back=yes';
}

function homeStrings () {
    gn('abouttab-text').textContent = Localization.localize('ABOUT_SCRATCHJR');
    gn('interfacetab-text').textContent = Localization.localize('INTERFACE_GUIDE');
    gn('painttab-text').textContent = Localization.localize('PAINT_EDITOR_GUIDE');
    gn('blockstab-text').textContent = Localization.localize('BLOCKS_GUIDE');
}
