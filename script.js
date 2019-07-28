                var doughnutData = [
                    {
                      value: 11,
                      color:"#9bcad0",
                      highlight: "#a7d7de",
                      label: "育児"
                    },
                    {
                      value: 6,
                      color: "#d5a87f",
                      highlight: "#e4b68a",
                      label: "睡眠"
                    },
                    {
                      value: 4,
                      color: "#edef9c",
                      highlight: "#fcfea6",
                      label: "FREETIME"
                    },
                   {
                      value: 2,
                      color: "#cca9ca",
                      highlight: "#dcb7da",
                      label: "炊事洗濯"
                    },
                   {
                      value: 1,
                      color: "#99FF99",
                      highlight: "#CCFF99",
                      label: "その他(移動、病院等)"
                    }
                  ];
                  window.onload = function(){
                    var ctx = document.getElementById("chart").getContext("2d");
                    window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, {
                      responsive : true
                    });
                  }
