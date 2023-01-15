
const path = require('path');
const os = require('os');
let iconFile;
let platform = os.platform();
let {version} = require('./package.json');
const iconFileWindows = path.resolve(__dirname, "src/icons/win/icon.ico");
const installerGifWindows = path.resolve(__dirname, "src/icons/win/installerGif.gif");
const copyrightDate = "Copyright (c) 2016, MIT";

const iconFileMac = path.resolve(__dirname, "src/icons/mac/icon.icns");
const iconFileLinux = path.resolve(__dirname, "src/icons/png/512x512.png");
if (platform === 'darwin') {
  iconFile = iconFileMac;
}
else if (platform === 'win32') {
  iconFile = iconFileWindows;
}
else if (platform === 'linux') {
  iconFile = iconFileLinux;
}

module.exports = {
  "packagerConfig": {
    "icon": iconFile,
    appCopyright: copyrightDate
  },
  "makers": [
    {
      "name": "@electron-forge/maker-wix",
      "config": {
        "icon": iconFile,
        "upgradeCode": "{E4346E7F-98B4-4602-9FAA-5AF8C9844BA7}",
        "arch": "x64"
      }
    },
    {
      "name": "@electron-forge/maker-zip",
      "platforms": [
        "darwin",
        "win32",
        "linux"
      ]
    },
    {
      "name": "@electron-forge/maker-deb",
      "config": {
        "options": {
          "icon": iconFile,
          "categories": ["Education"]
        }
      }
    },
    {
      "name": "@electron-forge/maker-rpm",
      "config": {
        "options": {
          "icon": iconFile,
          "categories": ["Education"]
        }
      }
    }
  ]

}
