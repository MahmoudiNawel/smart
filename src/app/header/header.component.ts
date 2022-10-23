import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { languages, notifications, userItems } from './header-dummy-data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  //@Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  @Input() collapsed = false;
  @Input() screenWidth = 0;

  languages = languages;
  notifications = notifications; 
  userItems = userItems;

  canShowSearchAsOverlay = false;
  selectedLanguage: any;
  constructor(private router: Router) {}

  @HostListener('window.resize' , ['$event'])
onResize(event : any){
  this.checkcanShowSearchAsOverlay(window.innerWidth);
  }

  ngOnInit(): void {
    this.checkcanShowSearchAsOverlay(window.innerWidth);
    this.selectedLanguage = this.languages[0];
  }
  

  // toggleSidebar() {
  //   this.toggleSidebarForMe.emit();
  // }
  getHeadClass(): string {
    let styleClass = '';
    if(this.collapsed && this.screenWidth > 768){
      styleClass = 'head-trimmed';
    } else {
      styleClass = 'head-md-screen';
    }
    return styleClass
  }
  checkcanShowSearchAsOverlay(innerWidth: number): void {
   if(innerWidth < 845) {
    this.canShowSearchAsOverlay = true;
   } else {
    this.canShowSearchAsOverlay = false;
   }
  }
}
