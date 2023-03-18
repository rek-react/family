class UtilsFunctions {
  isMobile() {
    const Android = () => {
      return navigator.userAgent.match(/Android/i);
    };
    const BlackBerry = () => {
      return navigator.userAgent.match(/BlackBerry/i);
    };
    const IOS = () => {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    };
    const Opera = () => {
      return navigator.userAgent.match(/Opera Mini/i);
    };
    const Windows = () => {
      return navigator.userAgent.match(/IEMobile/i);
    };
    return Android() || BlackBerry() || IOS() || Opera() || Windows();
  }
  bodyLock() {
    const body = document.body;
    if (body.classList.contains("_lock")) {
      document.body.classList.remove("_lock");
    } else {
      document.body.classList.add("_lock");
    }
  }
  slideUp(target: HTMLElement, duration: number = 500): void {
    if (!target.classList.contains("_slide")) {
      target.classList.add("_slide");
      target.style.transitionProperty = "height, margin, padding";
      target.style.transitionDuration = duration + "ms";
      target.style.height = target.offsetHeight + "px";
      target.style.overflow = "hidden";
      target.style.height = "0";
      target.style.paddingTop = "0";
      target.style.paddingBottom = "0";
      target.style.marginTop = "0";
      target.style.marginBottom = "0";
      setTimeout(() => {
        target.hidden = true;
        target.style.removeProperty("height");
        target.style.removeProperty("padding-top");
        target.style.removeProperty("padding-bottom");
        target.style.removeProperty("margin-top");
        target.style.removeProperty("margin-bottom");
        target.style.removeProperty("overflow");
        target.style.removeProperty("transition-duration");
        target.style.removeProperty("transition-property");
        target.classList.remove("_slide");
      }, duration);
    }
  }
  slideDown(target: HTMLElement, duration: number = 500): void {
    if (!target.classList.contains("_slide")) {
      target.classList.add("_slide");
      if (target.hidden) {
        target.hidden = false;
      }
      let height = target.offsetHeight;
      target.style.overflow = "hidden";
      target.style.height = "0";
      target.style.paddingTop = "0";
      target.style.paddingBottom = "0";
      target.style.marginTop = "0";
      target.style.marginBottom = "0";
      target.style.transitionProperty = "height, margin, padding";
      target.style.transitionDuration = duration + "ms";
      target.style.height = height + "px";
      target.style.removeProperty("padding-top");
      target.style.removeProperty("padding-bottom");
      target.style.removeProperty("margin-top");
      target.style.removeProperty("margin-bottom");
      setTimeout(() => {
        target.style.removeProperty("height");
        target.style.removeProperty("overflow");
        target.style.removeProperty("transition-duration");
        target.style.removeProperty("transition-property");
        target.classList.remove("_slide");
      }, duration);
    }
  }
  slideToggle(target: HTMLElement, duration: number = 500): void {
    if (target.hidden) {
      return this.slideDown(target, duration);
    } else {
      return this.slideUp(target, duration);
    }
  }
}
export default new UtilsFunctions();
