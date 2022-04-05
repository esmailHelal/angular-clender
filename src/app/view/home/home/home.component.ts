import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  months = [
    {
      name_ar: 'يناير',
      name_en: 'January',
      active: false,
    },
    {
      name_ar: 'فبراير',
      name_en: 'February',
      active: false,
    },
    {
      name_ar: 'مارس',
      name_en: 'March',
      active: false,
    },
    {
      name_ar: 'ابريل',
      name_en: 'April',
      active: false,
    },
    {
      name_ar: 'مايو',
      name_en: 'May',
      active: false,
    },
    {
      name_ar: 'يونيه',
      name_en: 'June',
      active: false,
    },
    {
      name_ar: 'يوليو',
      name_en: 'July',
      active: false,
    },
    {
      name_ar: 'اغسطس',
      name_en: 'August',
      active: false,
    },
    {
      name_ar: 'سبتمبر',
      name_en: 'September',
      active: false,
    },
    {
      name_ar: 'أكتوبر',
      name_en: 'October',
      active: false,
    },
    {
      name_ar: 'نوفمبر',
      name_en: 'November',
      active: false,
    },
    {
      name_ar: 'ديسمبر',
      name_en: 'December',
      active: false,
    },
  ];
  obj_days: any = {
    الجمعة: {
      class: 'day_1',
    },
    السبت: {
      class: 'day_2',
    },
    الأحد: {
      class: 'day_3',
    },
    الاثنين: {
      class: 'day_4',
    },
    الثلاثاء: {
      class: 'day_5',
    },
    الأربعاء: {
      class: 'day_6',
    },
    الخميس: {
      class: 'day_7',
    },
  };
  year: number = new Date().getFullYear();
  month: number = new Date().getMonth() + 1;
  month_number!: number;
  date = new Date();
  lastDay = new Date(
    this.date.getFullYear(),
    this.date.getMonth() + 1,
    0
  ).getDate();
  days: Array<any> = [];
  constructor() {}

  ngOnInit(): void {
    this.month_number = this.month - 1;
    this.months[this.month_number].active = true;
    for (let i = 1; i <= this.lastDay; i++) {
      let date_name = new Date(
        `${this.month}/${i}/${this.year}`
      ).toLocaleString('ar-EG', { weekday: 'long' });
      let obj = {
        number_day: i,
        name_ar: date_name,
        class: this.obj_days[date_name].class,
        day: `${this.month}/${i}/${this.year}`,
      };
      this.days.push(obj);
    }
  }
  renderCalendar(index: number) {
    this.lastDay = new Date(this.year, index + 1, 0).getDate();
    this.days = [];
    for (let i = 1; i <= this.lastDay; i++) {
      let date_name = new Date(`${index + 1}/${i}/${this.year}`).toLocaleString(
        'ar-EG',
        { weekday: 'long' }
      );
      let obj = {
        number_day: i,
        name_ar: date_name,
        class: this.obj_days[date_name].class,
        day: `${index + 1}/${i}/${this.year}`,
      };
      this.days.push(obj);
    }
  }
  AddYear() {
    this.year += 1;
    this.renderCalendar(this.month_number);
  }
  MinYear() {
    this.year -= 1;
    this.renderCalendar(this.month_number);
  }
  AddActive(item: any, index: number) {
    item.active = true;
    this.month_number = index;
    this.renderCalendar(index);
    this.months.forEach((element) => {
      element.name_ar != item.name_ar ? (element.active = false) : null;
    });
  }
}
