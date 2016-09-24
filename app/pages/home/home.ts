import {Component} from '@angular/core';
import {MySlide} from "../../components/my-slide/my-slide";

@Component({
  templateUrl: 'build/pages/home/home.html',
  directives: [MySlide]
})
export class HomePage {

  pageIndex: number = 0;
  pageContent: string;
  pageSlides: string[] = ["测试1", "测试2", "测试3", "测试4", "测试5", "测试6", "测试7", "测试8"];

  constructor() {
    this.setPageContent();
  }

  onSlideClick(index) {
    this.pageIndex = index;
    this.setPageContent();
  }

  setPageContent() {
    this.pageContent = this.pageSlides[this.pageIndex];
  }
}
