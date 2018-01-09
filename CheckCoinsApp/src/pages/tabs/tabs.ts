import { Component } from '@angular/core';

import { NewsPage } from '../news/news';
import { ReminderPage } from '../reminder/reminder';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = NewsPage;
  tab3Root = ReminderPage;

  constructor() {

  }
}
