/**
 * Scrolls smoothly to a section of the page with the given ID.
 * @param sectionId - The ID of the section to scroll to.
 */
export function goToSection(sectionId: string) {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}
