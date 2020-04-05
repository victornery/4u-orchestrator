import React, { Component, Fragment } from 'react'
import { Bar, Pie } from 'react-chartjs-2';
import StopIcon from '@material-ui/icons/Stop'
import PrintOutlinedIcon from '@material-ui/icons/PrintOutlined'

import {
  ContentReports,
  PieChart,
  TitleCampaing,
  Chart,
  ChartLegends,
  ColumnChart,
  LegendMetrics
} from './style'

class Reports extends Component {
  render() {

    const dataPieBase = {
      labels: [
        'Válidos',
        'Inválidos',
      ],
      datasets: [{
        data: [300, 50],
        backgroundColor: [
          '#C4C4C4',
          '#a39e9e',
        ],
        hoverBackgroundColor: [
          '#d3d3d3',
          '#d3d3d3',
        ]
      }]
    };

    const dataPieAcconts = {
      labels: [
        'Validos',
        'Whatsapp',
      ],
      datasets: [{
        data: [300, 50],
        backgroundColor: [
          '#C4C4C4',
          '#a39e9e',
        ],
        hoverBackgroundColor: [
          '#d3d3d3',
          '#d3d3d3',
        ]
      }]
    };

    const dataBarMetrics = {
      labels: ['Opt-out', 'Respostas', 'Abertura'],
      datasets: [
        {
          label: 'Métricas',
          backgroundColor: '#C4C4C4',
          borderColor: '#C4C4C4',
          borderWidth: 1,
          hoverBackgroundColor: '#d6d6d6',
          hoverBorderColor: '#d6d6d6',
          data: [40, 60, 80],
          minBarLength: 0,
          offset: true,
        }
      ]
    };

    const options = {
      legend: {
          display: true,
          position: 'bottom'
      },
    };

    return (
      <Fragment>
        <TitleCampaing>
          <p>NOME DA CAMPANHA</p>
          <PrintOutlinedIcon />
        </TitleCampaing>
        <ContentReports>
          <Chart>
            <h2>Base</h2>
            <ColumnChart>
              <Pie 
                data={dataPieBase} 
                height={300}  
                options={options}                                        
              />
            </ColumnChart>
          </Chart>
          <Chart>
            <h2>Contas</h2>
            <ColumnChart>
              <Pie 
                data={dataPieAcconts}
                height={300}
                options={options} 
              />
            </ColumnChart>
          </Chart>
          <Chart >
            <h2>Métricas</h2>
            <ColumnChart>
              <Bar
                data={dataBarMetrics}
                options={{ maintainAspectRatio: false }}
              />
            </ColumnChart>            
          </Chart>
        </ContentReports>
      </Fragment>
    )
  }
}

export default Reports