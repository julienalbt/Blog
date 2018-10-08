import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts = [
    {
      title: 'Premier article',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima omnis beatae quas, eius a sunt. Iste sed cumque nulla amet reprehenderit excepturi, sunt unde omnis natus aperiam temporibus non!',
      created_at: new Date(),
    },
    {
      title: 'Deuxième article',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima omnis beatae quas, eius a sunt. Iste sed cumque nulla amet reprehenderit excepturi, sunt unde omnis natus aperiam temporibus non! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima omnis beatae quas, eius a sunt. Iste sed cumque nulla amet reprehenderit excepturi, sunt unde omnis natus aperiam temporibus non!',
      created_at: new Date(),
    },
    {
      title: 'Troisième article',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima omnis beatae quas, eius a sunt. Iste sed cumque nulla amet reprehenderit excepturi, sunt unde omnis natus aperiam temporibus non!',
      created_at: new Date(),
    }
  ];

}
