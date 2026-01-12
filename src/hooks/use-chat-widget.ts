// Global event for opening chat widget
export const OPEN_CHAT_EVENT = "open-chat-widget";

export const openChatWidget = () => {
  window.dispatchEvent(new CustomEvent(OPEN_CHAT_EVENT));
};
