interface IDynamicAdapt {
  element: HTMLElement;
  parent: ParentNode | HTMLElement;
  destination: HTMLElement;
  breakpoint: string;
  place: number | string;
  index: number;
}

export default class DynamicAdapt {
  оbjects: Array<IDynamicAdapt> = [];
  daClassname: string = "_dynamic_adapt_";
  mediaQueries: Array<any> = [] as Array<string>;
  nodes: NodeListOf<HTMLElement> = document.querySelectorAll("[data-da]")!;
  constructor(protected type: string) {
    this.init()
  }
  arraySort(arr: Array<IDynamicAdapt>) {
    if (this.type === "min") {
      Array.prototype.sort.call(arr, function (a, b) {
        if (a.breakpoint === b.breakpoint) {
          if (a.place === b.place) {
            return 0;
          }

          if (a.place === "first" || b.place === "last") {
            return -1;
          }

          if (a.place === "last" || b.place === "first") {
            return 1;
          }

          return a.place - b.place;
        }

        return a.breakpoint - b.breakpoint;
      });
    } else {
      Array.prototype.sort.call(arr, function (a, b) {
        if (a.breakpoint === b.breakpoint) {
          if (a.place === b.place) {
            return 0;
          }

          if (a.place === "first" || b.place === "last") {
            return 1;
          }

          if (a.place === "last" || b.place === "first") {
            return -1;
          }

          return b.place - a.place;
        }

        return b.breakpoint - a.breakpoint;
      });
      return;
    }
  }
  init(): void {
    const _this = this;
    for (let i = 0; i < this.nodes.length; i++) {
      if (this.nodes[i] instanceof HTMLElement) {
        const node: HTMLElement = this.nodes[i];
        const data: string = node.dataset.da!.trim();
        const dataArray: Array<string> = data.split(",");
        const оbject: IDynamicAdapt = {} as IDynamicAdapt;
        оbject.element = node;
        оbject.parent = node.parentNode!;
        оbject.destination = document.querySelector(dataArray[0].trim())!;
        оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
        оbject.place = dataArray[2] ? dataArray[2].trim() : 'last';


        оbject.index = this.indexInParent(оbject.parent, оbject.element);
        this.оbjects.push(оbject);
      }
    }

    this.arraySort(this.оbjects);

    // массив уникальных медиа-запросов
    this.mediaQueries = Array.prototype.map.call(
      this.оbjects,
      (item) => {
        return (
          "(" +
          this.type +
          "-width: " +
          item.breakpoint +
          "px)," +
          item.breakpoint
        );
      },
      this
    );
    this.mediaQueries = Array.prototype.filter.call(
      this.mediaQueries,
      function (item, index, self) {
        return Array.prototype.indexOf.call(self, item) === index;
      }
    );

    // навешивание слушателя на медиа-запрос
    // и вызов обработчика при первом запуске
    for (let i = 0; i < this.mediaQueries.length; i++) {
      const media: string = this.mediaQueries[i];
      const mediaSplit: Array<string> = media.split(",");
      const matchMedia: MediaQueryList = window.matchMedia(mediaSplit[0]);
      const mediaBreakpoint: string = mediaSplit[1];

      // массив объектов с подходящим брейкпоинтом
      const оbjectsFilter = Array.prototype.filter.call(
        this.оbjects,
        function (item) {
          return item.breakpoint === mediaBreakpoint;
        }
      );
      matchMedia.addListener(function () {
        _this.mediaHandler(matchMedia, оbjectsFilter);
      });
      this.mediaHandler(matchMedia, оbjectsFilter);
    }
  }
  mediaHandler(
    matchMedia: MediaQueryList,
    оbjects: Array<IDynamicAdapt>
  ): void {
    if (matchMedia.matches) {
      for (let i = 0; i < оbjects.length; i++) {
        const оbject: IDynamicAdapt = оbjects[i];
        оbject.index = this.indexInParent(оbject.parent, оbject.element);
        this.moveTo(оbject.place, оbject.element, оbject.destination);
      }
    } else {
      for (let i = 0; i < оbjects.length; i++) {
        const оbject: IDynamicAdapt = оbjects[i];
        if (оbject.element.classList.contains(this.daClassname)) {
          this.moveBack(оbject.parent, оbject.element, оbject.index);
        }
      }
    }
  }
  indexInParent(parent: ParentNode, element: HTMLElement): number {
    const array = Array.prototype.slice.call(parent.children);
    return Array.prototype.indexOf.call(array, element);
  }
  moveTo(
    place: string | number,
    element: HTMLElement,
    destination: HTMLElement
  ): void {
    element.classList.add(this.daClassname);
    if (place === "last" || place >= destination.children.length) {
      destination.insertAdjacentElement("beforeend", element);
      return;
    }
    if (place === "first") {
      destination.insertAdjacentElement("afterbegin", element);
      return;
    }
    place = Number(place)
    if (typeof place === "number") {
      destination.children[`${place}`].insertAdjacentElement(
        "beforebegin",
        element
      );
    }
  }
  moveBack(
    parent: ParentNode | HTMLElement,
    element: HTMLElement,
    index: number
  ): void {
    element.classList.remove(this.daClassname);
    if (parent.children[index] !== undefined) {
      parent.children[index].insertAdjacentElement("beforebegin", element);
    } else if (parent instanceof HTMLElement) {
      parent.insertAdjacentElement("beforeend", element);
    }
  }
}