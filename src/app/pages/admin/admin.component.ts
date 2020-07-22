import { Component, OnInit } from '@angular/core';
import { ModeloGrafico } from 'src/app/core/models/reportes/modelo-grafico';
import { ReportsService } from 'src/app/shared/services/reports.service';


const STOCK = [
  {
    name: 'Hungary',
    value: 3
  },
  {
    name: 'Uzbekistan',
    value: 21
  },
  {
    name: 'Côte D\'Ivoire',
    value: 46
  },
  {
    name: 'Australia',
    value: 70
  },
  {
    name: 'Brazil',
    value: 19
  },
  {
    name: 'Spain',
    value: 31
  },
  {
    name: 'Belgium',
    value: 52
  },
  {
    name: 'American Samoa',
    value: 107
  },
  {
    name: 'Christmas Island',
    value: 52
  },
  {
    name: 'India',
    value: 50
  },
  {
    name: 'Tuvalu',
    value: 56
  },
  {
    name: 'Western Sahara',
    value: 13
  },
  {
    name: 'Guernsey',
    value: 27
  },
  {
    name: 'Gabon',
    value: 59
  },
  {
    name: 'Solomon Islands',
    value: 48
  },
  {
    name: 'Gambia',
    value: 24
  },
  {
    name: 'Faroe Islands',
    value: 51
  },
  {
    name: 'Lao People\'s Democratic Republic',
    value: 11
  }
];

const INGRESOS = [
  {
    name: 'FACTURAS',
    value: 34
  },
  {
    name: 'INGRESOS',
    value: 20432
  }
];

const MAS_VENDIDOS = [
  {
    name: 'Pizza',
    series: [
      {
        value: 39,
        name: 'Lunes'
      },
      {
        value: 61,
        name: 'Martes'
      },
      {
        value: 66,
        name: 'Miércoles'
      },
      {
        value: 25,
        name: 'Jueves'
      },
      {
        value: 40,
        name: 'Viernes'
      },
      {
        value: 79,
        name: 'Sábado'
      }
    ]
  },
  {
    name: 'Hamburguesa',
    series: [
      {
        value: 50,
        name: 'Lunes'
      },
      {
        value: 30,
        name: 'Martes'
      },
      {
        value: 50,
        name: 'Miércoles'
      },
      {
        value: 55,
        name: 'Jueves'
      },
      {
        value: 61,
        name: 'Viernes'
      },
      {
        value: 59,
        name: 'Sábado'
      }
    ]
  },
  {
    name: 'Pancho',
    series: [
      {
        value: 65,
        name: 'Lunes'
      },
      {
        value: 64,
        name: 'Martes'
      },
      {
        value: 35,
        name: 'Miércoles'
      },
      {
        value: 35,
        name: 'Jueves'
      },
      {
        value: 21,
        name: 'Viernes'
      },
      {
        value: 58,
        name: 'Sábado'
      }
    ]
  },
  {
    name: 'Milanesa',
    series: [
      {
        value: 64,
        name: 'Lunes'
      },
      {
        value: 42,
        name: 'Martes'
      },
      {
        value: 59,
        name: 'Miércoles'
      },
      {
        value: 22,
        name: 'Jueves'
      },
      {
        value: 65,
        name: 'Viernes'
      },
      {
        value: 73,
        name: 'Sábado'
      }
    ]
  },
  {
    name: 'Helado',
    series: [
      {
        value: 44,
        name: 'Lunes'
      },
      {
        value: 36,
        name: 'Martes'
      },
      {
        value: 23,
        name: 'Miércoles'
      },
      {
        value: 48,
        name: 'Jueves'
      },
      {
        value: 38,
        name: 'Viernes'
      },
      {
        value: 74,
        name: 'Sábado'
      }
    ]
  }
];


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  stock: ModeloGrafico[];
  ingresos: ModeloGrafico[];
  masVendidos = MAS_VENDIDOS;

  ingresosColorScheme = {
    domain: ['#ffc107', '#ffa000']
  };

  masVendidosColorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor(private resportsService: ReportsService) { }

  ngOnInit(): void {
    this.getInsumosStock();
    this.getIngresos();
  }

  /* onSelect(event) {
    console.log(event);
  } */

  getInsumosStock(){
    this.resportsService.getInsumosOutOfStock().subscribe(
      res => {
        this.stock = res;
        console.log(this.stock);
      }
    );
  }

  getIngresos(){
    this.resportsService.getIngresosPorPeriodo().subscribe(
      res => {
        this.ingresos = res;
      }
    );
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  format(c): string {
    switch (c.label) {
      case 'GANANCIAS':
        return `\$${c.value.toLocaleString()}`;
      default:
        return c.value.toLocaleString();
    }
  }
}
