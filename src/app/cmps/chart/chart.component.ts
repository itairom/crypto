import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import 'chartjs-adapter-moment';
Chart.register(...registerables);


@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit, OnChanges {
  @Input() chartData: any
  options: any;
  localChartData: any;
  myChart:Chart =null

  constructor() { }

  ngOnInit(): void {
    this.localChartData = this.chartData
    this.setChart()
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.localChartData = changes.chartData.currentValue
    if(this.myChart!==null){
      this.myChart.destroy()
    }
    
    this.setChart()
  }


  setChart = () => {
    let _date = this.chartData.map(res => res.date_time)
    let _price = this.chartData.map(res => res.price)

     this.myChart = new Chart("chart", {
      type: 'line',
      data: {
        labels: _date, 

        datasets: [{
          pointRadius: 0,
          animations: {
            tension: {
              duration: 5000,
              easing: 'linear',
              from: 1,
              to: 0,
              loop: true
            }
          },
          label: _date,
          data: _price,
          borderWidth: 0.5,
          borderColor: '#9694F2',
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
            , ticks: {
              callback: function (value: any) {
                if (parseInt(value) >= 1000) {
                  return '$' + value.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                } else {
                  return '$' + value.toFixed(2);
                }
              },
            }
          },
          x: {
            type: 'time',
            time: {
              minUnit: 'hour'
            },
            ticks: {


            },
          }
        }
      }
    });
  }




}
