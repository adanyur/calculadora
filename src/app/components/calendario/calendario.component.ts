import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css'],
})
export class CalendarioComponent implements OnInit {
  week: string[] = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
    'Domingo',
  ];
  constructor() {}

  monthSelect: object[];
  data: object[] = [];
  dateSelect: any;
  yearMonth: string;
  changeModo: boolean = true;

  ngOnInit(): void {
    this.getDays();
  }

  getDays(
    year: number = moment().year(),
    month: number = moment().month() + 1
  ) {
    this.dateSelect = moment(`${year}-${month}-01`, 'YYYY-MM-DD');
    const endDay = moment
      .utc(`${year}-${month}-01`, 'YYYY-MM-DD')
      .endOf('month')
      .format('DD');
    const arrayDays = Object.keys([...Array(parseInt(endDay))]).map(
      (day: any) => {
        day = +day + 1;
        const dayObject = moment(`${year}-${month}-${day}`, 'YYYY-MM-DD');
        const date = dayObject.format('YYYY-MM-DD');
        const today = moment().format('YYYY-MM-DD');
        const status = date === today ? true : false;
        return {
          date,
          day: day,
          Week: dayObject.isoWeekday(),
          status,
        };
      }
    );
    this.yearMonth = moment(`${year},${month}`, 'YYYY-MM').format('MMMM,YYYY');
    this.monthSelect = arrayDays;
  }

  changeMonth(flag: number) {
    if (flag < 0) {
      const prev = this.dateSelect.subtract(1, 'month');
      this.getDays(prev.format('YYYY'), prev.format('MM'));
    } else {
      const next = this.dateSelect.add(1, 'month');
      this.getDays(next.format('YYYY'), next.format('MM'));
    }
  }

  onToday() {
    this.changeModo = true;
    this.getDays();
  }

  onDay(fecha: string, evento: MouseEvent) {
    const { ctrlKey } = evento;
    this.changeModo = !ctrlKey ? true : false;

    if (this.changeModo) this.onAleatorio(fecha);
  }

  onAleatorio(fecha: string) {
    const object = Object.assign({}, { fecha });
    console.log(object);
  }

  onRangoFecha(fecha: string) {
    const object = Object.assign({}, { fecha });
  }

  validacioFecha(fecha: string) {
    return this.data.some(
      (code) => JSON.stringify(code) === JSON.stringify({ fecha })
    );
  }
}
