import { Component, OnInit } from '@angular/core';

export interface Details {
  imagen: string;
  denominacion: string;
  cantidad: string;
}

const DETAILS_DATA: Details[] = [
  { imagen: 'https://i.guim.co.uk/img/media/1cc91736bbb07183d0e563e77be10761a5952bae/0_322_3654_3650/master/3654.jpg?width=300&quality=45&auto=format&fit=max&dpr=2&s=1109e67ebf04008852c32bf2c5c85972', denominacion: 'Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item 1', cantidad: '1' },
  { imagen: 'https://asset.slimmingworld.co.uk/content/media/8869/tuna-and-sweetcorn-jacket-potato_sw_recipe.webp?v1=JGXiore20qg9NNIj0tmc3Z6q8pp8PkJLQ__u6_6lOnXL8PmNDIRJUWZbVHsyScXGDHON3JhpKk6Kxee-3sreBBHEbJXNZ6HAnUFkP0z-rJfPK7_EpQ102BTl2i06ywXk&width=378&height=378', denominacion: 'Item 2', cantidad: '2' },
  { imagen: 'https://www.flatironsquare.co.uk/content/_mobile/Food_Hero_Image.jpg', denominacion: 'Item 3', cantidad: '1' }
];

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  detailColumns: string[] = ['imagen', 'denominacion', 'cantidad'];
  detailDataSource = DETAILS_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
