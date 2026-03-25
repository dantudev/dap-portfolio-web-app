/**
 * Opens a given URL in a new browser tab.
 * @param url - The URL to be opened in a new tab.
 */
export function openInNewTab(url: string) {
  window.open(url, '_blank', 'noopener,noreferrer')
}
