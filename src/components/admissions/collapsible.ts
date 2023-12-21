export const openCollapsible = (collapsible: HTMLElement) => {
  if (!collapsible) return
  const collapsibleContent = collapsible.querySelector('.collapsible-content') as HTMLElement
  const collapseIcon = collapsible.querySelector('.collapse-icon')
  if (!collapseIcon) return

  collapsibleContent.style.maxHeight = '100vh'
  collapseIcon.innerHTML = '-'
}

export const closeCollapsible = (collapsible: HTMLElement) => {
  if (!collapsible) return

  const collapsibleContent = collapsible.querySelector('.collapsible-content') as HTMLElement
  const collapseIcon = collapsible.querySelector('.collapse-icon')
  const collapseTitle = collapsible.querySelector('.collapsible-title')
  if (!collapseIcon) return

  collapsibleContent.style.maxHeight = '0px'
  collapseIcon.innerHTML = '+'
  collapseTitle?.classList.remove('text-accent')

}

const toggleCollapsible = (collapsible: HTMLElement) => {
  if (!collapsible) return
  const collapsibleContent = collapsible.querySelector('.collapsible-content') as HTMLElement
  const collapseIcon = collapsible.querySelector('.collapse-icon')
  const collapseTitle = collapsible.querySelector('.collapsible-title')
  if (!collapseIcon) return

  const isOpened = collapseIcon.innerHTML === '-'
  if (isOpened) {
    collapsibleContent.style.maxHeight = '0px'
    collapseIcon.innerHTML = '+'
    collapseTitle?.classList.remove('text-accent')
  } else {
    console.log('open')
    collapsibleContent.style.maxHeight = '100vh'
    collapseIcon.innerHTML = '-'
    collapseTitle?.classList.add('text-accent')
  }
}

const collapsible = (collapseGroupClassName: string, defaultOpen = 0) => {
  const collapsibles = document.querySelectorAll<HTMLElement>(collapseGroupClassName)

  collapsibles.forEach((collapsible: HTMLElement, i: number) => {
    const collapsibleContent = collapsible.querySelector('.collapsible-content')
    const collapsibleTarget = collapsible.querySelector('div:first-child')
    const collapseIcon = document.querySelector('.collapse-icon')
    if (collapsibleContent && collapseIcon) {
      collapsibleTarget.addEventListener('click', () => {
        collapsibles.forEach((collapsible: HTMLElement, n: number) => {
          if (i !== n) {
            closeCollapsible(collapsible)
            return
          }
          toggleCollapsible(collapsible)
        })
      })
    }
  })

  if (defaultOpen >= 0 && defaultOpen < collapsibles.length) {
    openCollapsible(collapsibles[defaultOpen])
  }
}

export default collapsible