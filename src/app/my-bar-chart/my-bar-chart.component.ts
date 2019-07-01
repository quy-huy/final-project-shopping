import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-bar-chart',
  templateUrl: './my-bar-chart.component.html',
  styleUrls: ['./my-bar-chart.component.css']
})
export class MyBarChartComponent implements OnInit {
public barCharOptions = {
  scaleShowVerticalLines: false,
  responsive: true
};
public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
public barChartType = "bar";
public barChartLegend = true;
public barChartData = [
  {data: [65,59,80,56,55,40], label: 'Series A'},
  {data: [25,48,40,86,27,90], label: 'Series B'},
];
public barChartOptions = [
  
];
  constructor() { }

  ngOnInit() {
  }

}
