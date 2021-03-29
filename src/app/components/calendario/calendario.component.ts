import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css'],
})
export class CalendarioComponent implements OnInit {
  week: any = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
    'Domingo',
  ];
  constructor() {}

  monthSelect: any[];
  data = [];
  dateSelect: any;
  yearMonth: string;

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
        return {
          date: dayObject.format('YYYY-MM-DD'),
          day: day,
          Week: dayObject.isoWeekday(),
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

  onDay(a: any) {
    const object = Object.assign({}, { fecha: a });
    this.data.push(object);
    console.log(this.data);
  }

  // onMethod(method: string) {
  //   switch (method) {
  //     case 'A': {
  //       Object.keys([...method]);
  //     }
  //     case 'R': {
  //     }
  //     case 'D': {
  //     }
  //   }
  // }
}
