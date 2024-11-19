import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDivider } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListItem, MatNavList } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { Menu } from '../../interfaces/Menu';
@Component({
  selector: 'app-full',
  standalone: true,
  imports: [CommonModule,MatToolbarModule,MatSidenavModule,
    MatIconModule, MatDivider, MatNavList, MatListItem, MatExpansionModule, RouterModule],
  templateUrl: './full.component.html',
  styleUrl: './full.component.css'
})
export class FullComponent {
  public listaMenu: Array<Menu> = [
    {icono:"home",nombre:"Home",url:"brand"},
    {icono:"home",nombre:"Home",url:"brand"},
    {icono:"home",nombre:"Home",url:"brand"}
  ]
}
