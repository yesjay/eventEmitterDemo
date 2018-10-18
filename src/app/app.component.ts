import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  strToChild = '我是父模板的資料'; //父親模板的初始值
  strToMedium = 'hello';
  strFormChild = ''; //<==兒子的回傳值的顯示屬性
  strFormChild1 = '';

  constructor(private http: HttpClient){}
  //Child模板事件發生時，會呼叫此方法回傳值
  onListenChild($event: any) {
    this.strFormChild = $event as string;
  }
  onListenChild1($event: any) {
    this.strFormChild1 = $event as string;
  }
  ngOnInit(): void {
    this.http.get('api/itme').subscribe(
      data => {},
      err => {console.log('Not working!');
    });
  }
}