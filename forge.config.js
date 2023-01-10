
const path = require('path');

const os = require('os');
let iconFile;
let platform = os.platform();

const iconFileWindows = path.resolve(__dirname,  "src/icons/win/icon.ico");
const installerGifWindows = path.resolve(__dirname,  "src/icons/win/installerGif.gif");
const cpDate = "Copyright (c) 2016, MIT";

const iconFileMac = path.resolve(__dirname,  "src/icons/mac/icon.icns");
const iconFileLinux = path.resolve(__dirname,  "src/icons/png/512x512.png");
if (platform === 'darwin') {
    iconFile = iconFileMac;
}
else if (platform === 'win32') {
     iconFile =   iconFileWindows;
}
else if (platform === 'linux') {
	iconFile = iconFileLinux;
}

module.exports = {
	"packagerConfig": {
        "icon": iconFile,
		appCopyright: "Copyright (c) 2016, MIT"
      },
	"makers": [
        {
          "name": "@electron-forge/maker-squirrel",
          "config": {
            "name": "ScratchJr"
          }
        },
        {
          "name": "@electron-forge/maker-zip",
          "platforms": [
            "darwin",
            "win32"
          ]
        },
        {
          "name": "@electron-forge/maker-deb",
          "config": {
            "options": {
              "icon": iconFile
            }
          }
        },
        {
          "name": "@electron-forge/maker-rpm",
          "config": {
            "options": {
              "icon": iconFile
            }
          }
        },
        {
          "name": "@reforged/maker-appimage",
          "config": {
            "options": {
              "name": "ScratchJr",
			  "bin": "ScratchJr",
              "productName": "ScratchJr",
              "genericName": "ScratchJr",
              "icon": iconFile,
              "categories": [
                "Education"
              ],
              "AppImageKitRelease": "continuous"
            }
          }
        }
      ]

}
  