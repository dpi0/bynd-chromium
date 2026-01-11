chrome.commands.onCommand.addListener(async (command) => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab) return;

  switch (command) {
    case "prev-tab":
      chrome.tabs.query({ currentWindow: true }, (tabs) => {
        const i = (tab.index - 1 + tabs.length) % tabs.length;
        chrome.tabs.update(tabs[i].id, { active: true });
      });
      break;

    case "next-tab":
      chrome.tabs.query({ currentWindow: true }, (tabs) => {
        const i = (tab.index + 1) % tabs.length;
        chrome.tabs.update(tabs[i].id, { active: true });
      });
      break;

    case "new-tab":
      chrome.tabs.create({});
      break;

    case "close-tab":
      chrome.tabs.remove(tab.id);
      break;

    case "reload-page":
      chrome.tabs.reload(tab.id);
      break;

    case "hard-reload-page":
      chrome.tabs.reload(tab.id, { bypassCache: true });
      break;

    case "reopen-tab":
      chrome.sessions.restore();
      break;

    case "duplicate-tab":
      chrome.tabs.duplicate(tab.id);
      break;

    case "pin-tab":
      chrome.tabs.update(tab.id, { pinned: !tab.pinned });
      break;

    case "open-in-new-window":
      chrome.windows.create({ tabId: tab.id });
      break;

    case "move-tab-left":
      chrome.tabs.move(tab.id, { index: Math.max(tab.index - 1, 0) });
      break;

    case "move-tab-right":
      chrome.tabs.move(tab.id, { index: tab.index + 1 });
      break;

    case "toggle-mute":
      chrome.tabs.update(tab.id, { muted: !tab.mutedInfo.muted });
      break;

    case "switch-to-last-tab":
      chrome.tabs.query(
        { currentWindow: true, lastFocusedWindow: true },
        (tabs) => {
          const recent = tabs.filter((t) => t.id !== tab.id).pop();
          if (recent) chrome.tabs.update(recent.id, { active: true });
        },
      );
      break;

    case "go-back":
      chrome.tabs.goBack(tab.id);
      break;

    case "go-forward":
      chrome.tabs.goForward(tab.id);
      break;

    case "copy-url":
      navigator.clipboard.writeText(tab.url);
      break;
  }
});
