# Ambitube

A lightweight chrome extension that makes a few simple changes in YouTube's CSS to force theatre mode to expand vertically, making use of all the available height.

## How to install

### Install from Chrome Web Store

Go to [Ambitube](https://chrome.google.com/webstore/) on the Chrome Web Store and click **"Add to Chrome"**.

### Install from Source Code

1. Go to the [GitHub Repository](https://github.com/SimenMH/better-youtube-theatre-mode), click on the green **"<> Code"** button and **"Download ZIP"**.
2. Find your downloaded ZIP file and extract the containing folder anywhere on your computer.
3. Open Chrome and go to [Chrome's extension settings](chrome://extensions/)
4. In the top right, enable Developer mode
5. Click **"Load unpacked"** and select the extracted folder containing the extension.

Installing the extension from source code will not automatically update the extension. When there's a new version, you will have to follow the same steps as above to manually update the extension.

```txt
/html/body/ytd-app/div[1]/ytd-page-manager/ytd-watch-flexy/div[5]/div[1]/div/div/div[2]/div/div[2]/ytd-player/div/div
//*[@id="movie_player"]
# movie_player
```

## Tasks

1. TODO Fix theatre mode conflicts
2. TODO Ensure some horizontal padding in full screen mode
3. TODO Fix seek bar sizing when the video has chapters
