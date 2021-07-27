class Accordion {
  constructor() {
    this.initAccordionGroup();
    this.initAccordionIeFallback();
  }

  /**
   * @desc func for closing other accordions in same group
   */
  initAccordionGroup = () => {
    let accordions = Array.from(document.querySelectorAll('details'));

    accordions.forEach(accordion => {
      accordion.querySelector('summary').addEventListener('click', () => {
        if(accordion.getAttribute('data-group')) {
          let accordionGroupIndicator = accordion.getAttribute('data-group'),
              accordionGroup = Array.from(document.querySelectorAll('details[data-group="' + accordionGroupIndicator + '"]'));

          accordionGroup.forEach(item => {
            if (item !== accordion) {
              item.removeAttribute('open');
            }
          })
        }
      })
    })
  }

  /**
   * @desc fallback func for IE
   */
  initAccordionIeFallback = () => {
    if(this.msIeVersion()) {
      let accordions = Array.from(document.querySelectorAll('details'));

      accordions.forEach(accordion => {
        if(accordion.getAttribute('open')) {
          accordion.setAttribute('aria-expanded', 'true');
        } else {
          accordion.setAttribute('aria-expanded', 'false');
        }

        accordion.querySelector('summary').addEventListener('click', () => {
          if(accordion.getAttribute('open')) {
            accordion.removeAttribute('open');
            accordion.setAttribute('aria-expanded', 'false');
          } else {
            accordion.setAttribute('open', '');
            accordion.setAttribute('aria-expanded', 'true');
          }
        })
      });
    }
  }

  /**
   * @desc func for detecting IE
   * @returns {boolean}
   */
  msIeVersion = () => {
    let ua = window.navigator.userAgent,
        msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
      console.log(parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))));
      return true;
    }

    return false;
  }
}
