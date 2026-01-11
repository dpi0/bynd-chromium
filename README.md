# <img src="https://github.com/user-attachments/assets/90144cb7-9287-4110-8e41-2224ac476641" width="45" align="left"> bynd

<div align="left">

<p align="left">
  <img alt="GitHub Actions Workflow Status" src="https://img.shields.io/github/actions/workflow/status/dpi0/bynd-chromium/ci.yml?branch=main">
  <img alt="GitHub Forks" src="https://img.shields.io/github/forks/dpi0/bynd-chromium?style=flat">
  <img alt="GitHub Contributors" src="https://img.shields.io/github/contributors/dpi0/bynd-chromium?style=flat&color=pink">
  <img alt="GitHub License" src="https://img.shields.io/github/license/dpi0/bynd-chromium">
</p>

<h4>Keybinds for Chromium</h4>

<a href="https://github.com/dpi0/bynd-chromium/releases/latest">
  <img src="https://labels.tahoe.be/chrome_download_dark.svg" alt="Get it on Chromium" width="120">
</a>

</p>

</div>

To install on chromium based browsers

1. Click the above "Download for Chrome" button and head to the latest release
2. Download the "Source code (zip)" which will be a zip file like `bynd-chromium-1.0.0.zip`
3. Extract the zip file
4. On `chrome://extensions`, Toggle on `Developer Mode`
5. Hit `Load unpacked` and select this extracted directory.

The term `chrome://` will change based on the chromium variant. Like Brave Browser uses `brave://`, Helium Browser uses `helium://` etc.

## Default Keybinds

> [!NOTE]
> Chromium based browsers only allow [upto](https://issues.chromium.org/issues/40958408) 4 default keyboard shortcuts.

| Shortcut | Action |
|----------|--------|
| `Alt+H` | Switch to previous tab |
| `Alt+L` | Switch to next tab |
| `Alt+U` | Open new tab |
| `Alt+B` | Reload page |

## Suggested Keybinds

### Tab Management

| Shortcut | Action |
|----------|--------|
| `Alt+W` | Close current tab |
| `Alt+A` | Switch to last used tab |
| `Alt+V` | Reopen last closed tab |
| `Alt+N` | Duplicate current tab |
| `Alt+M` | Copy current tab's URL to clipboard |

### Tab Organization

| Shortcut | Action |
|----------|--------|
| `Alt+P` | Pin/unpin current tab |
| `Alt+Shift+N` | Open current tab in new window |
| `Alt+Ctrl+H` | Move current tab left |
| `Alt+Ctrl+L` | Move current tab right |
| `Alt+Shift+M` | Toggle mute for current tab |

### Page Navigation

| Shortcut | Action |
|----------|--------|
| `Alt+Shift+B` | Hard reload page (bypass cache) |
| `Alt+Shift+H` | Go back to previous page |
| `Alt+Shift+L` | Go forward to next page |

### Scrolling

| Shortcut | Action |
|----------|--------|
| `Alt+J` | Scroll down by a bit |
| `Alt+K` | Scroll up by a bit |
| `Alt+Shift+J` | Scroll to bottom of page |
| `Alt+Shift+K` | Scroll to top of page |
| `Alt+Ctrl+J` | Page down |
| `Alt+Ctrl+K` | Page up |

## Configuration

Manage keybinds via Chromium's native `chrome://extensions/shortcuts` page.
