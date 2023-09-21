import { Component, Input } from '@angular/core';

import { PainelComponent } from '../painel/painel.component';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent {

  @Input() public prog: number = 0

}
