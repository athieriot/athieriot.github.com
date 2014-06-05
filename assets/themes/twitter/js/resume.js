 $(document).ready(function(){
    $('#spybar').scrollspy();

    skillsChart = new Highcharts.Chart({
       chart: {
          renderTo: 'skills',
          type: 'column',
          backgroundColor: '#F5F5F5'
       },
       title: {text: ''},
       subtitle: {text: ''},
       xAxis: {
          reversed: true,
          min: 0,
          title: {text: ''},
          labels: {enabled: false}
       },
       yAxis: {
          gridLineWidth: 0,
          min: 0,
          title: {
             text: '',
             align: 'high'
          },
          labels: {enabled: false}
       },
       tooltip: {
          formatter: function() {
             switch(this.y){ 
                case 1: 
                case 2: 
                  return this.series.name + ' : Improving'; 
                case 3: 
                  return this.series.name + ' : Intermediate'; 
                case 4: 
                  return this.series.name + ' : Good knowledge'; 
                case 5: 
                  return this.series.name + ' : Experienced'; 
                case 6: 
                  return this.series.name + ' : Proficient'; 
                break; 
             }
          }
       },
       plotOptions: {
          column: {
             groupPadding: 0,                   
             dataLabels: {
                enabled: true,
                rotation: 290,
                x: 2,
                y: -30,
                formatter: function() {return this.series.name;}
             }
          }
       },
       legend: {enabled: false},
       credits: {enabled: false},
       series: [
          {name: 'CSS',          data: [2]}, 
          {name: 'SCRUM',        data: [3]}, 
          {name: 'TDD',          data: [3]}, 
          {name: 'Scala',        data: [4]}, 
          {name: 'Java',         data: [5]},
          {name: 'Javascript',   data: [6]}, 
          {name: 'Git',          data: [6]}, 
          {name: 'Linux',        data: [5]}, 
          {name: 'Tooling',      data: [5]}, 
          {name: 'Symfony2',     data: [3]}, 
          {name: 'SQL',          data: [2]}, 
          {name: 'Ruby',         data: [2]}, 
       ],
       exporting: {
          buttons: {
             exportButton: {enabled: false},
             printButton: {enabled: false}
          }
       }
    });
 
    timelineChart = new Highcharts.Chart({
       chart: {
          renderTo: 'timeline',
          type: 'column',
          backgroundColor: '#F5F5F5',
          height: 500,
          spacingTop: 0
       },
       title: {text: ''},
       xAxis: {
          title: {text: ''},
          labels: {enabled: false}
       },
       yAxis: {
          gridLineWidth: 1,
          gridLineDashStyle: 'dash',
          showLastLabel: false,
          //showFirstLabel: false,
          min: -2,
          title: {text: ''},
          labels: {
             enabled: true,
             x: 300,
             y: -3,
             style: {
                color: '#6D869F',
                fontWeight: 'bold'
             },
             formatter: function() {
                if (this.value === -2) return 'School'
                else return this.value + ' years'
             }
          }
       },
       legend: {enabled: false},
       credits: {enabled: false},
       tooltip: {
          formatter: function() {
             return this.series.name + ' : ' + this.y +' years';
          }
       },
       plotOptions: {
          column: {
             animation: false,
             pointWidth: 40,
             stacking: 'normal',
             dataLabels: {
                rotation: 350,
                x: 2,
                enabled: true,
                formatter: function() {
                   return this.series.name;
                },
                x: -45,
                align: 'right'
             }
          }
       },
       series: [{
               name: 'Scalaris',
               data: [1],
               events: {
                   click: function(event) {
                       $.scrollTo('#scalaris', 300, {offset: -40})
                   }
               }
       },{
               name: 'Box UK',
               data: [1],
               events: {
                   click: function(event) {
                       $.scrollTo('#box', 300, {offset: -40})
                   }
               }
           },{
               name: 'Evergig',
               data: [0.1],
               events: {
                   click: function(event) {
                       $.scrollTo('#evergig', 300, {offset: -40})
                   }
               }
           },{
            name: 'Vidal',
            data: [2],
            events: {
               click: function(event) {
                  $.scrollTo('#vidal', 300, {offset: -40})
              }
            }
          }, {
            name: 'Safig Dataway',
            data: [5],
            events: {
               click: function(event) {
                  $.scrollTo('#safig2', 300, {offset: -40})
              }
            }
          }, {
            name: 'Safig Dataway',
            data: [1],
            events: {
               click: function(event) {
                  $.scrollTo('#safig1', 300, {offset: -40})
              }
            }
          }, {
            name: 'DESA Logiciel',
            data: [0.5],
            events: {
               click: function(event) {
                  $.scrollTo('#desa', 300, {offset: -40})
              }
            }
          }, {
            name: 'IUT Reims',
            data: [-2],
            color: '#EAEA86',
            events: {
               click: function(event) {
                  $.scrollTo('#iut', 300, {offset: -40})
              }
            }
       }],
       exporting: {
          buttons: {
             exportButton: {enabled: false},
             printButton: {enabled: false}
          }
       }
    });
 });
