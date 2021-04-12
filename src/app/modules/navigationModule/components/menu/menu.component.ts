import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.component.html',
})
export class MenuComponent{
  navigation:any[] = [
    { name: 'Admin', link: 'admin'},
    { name: 'Survey', link: 'survey'}
  ]


}
