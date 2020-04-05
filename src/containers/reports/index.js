import React, { Component, Fragment } from 'react'

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
    return (
      <Fragment>
        <TitleCampaing>
          <p>NOME DA CAMPANHA</p>
          <PrintOutlinedIcon />
        </TitleCampaing>
        <ContentReports>
          <Chart>
            <h2>Base</h2>
            <PieChart />
            <ChartLegends>
              <StopIcon/>
              <span>Válidos</span>
              <StopIcon/>
              <span>Inválidos</span>
            </ChartLegends>
          </Chart>
          <Chart>
            <h2>Contas</h2>
            <PieChart />
            <ChartLegends>
              <StopIcon/>
              <span>Válidos</span>
              <StopIcon/>
              <span>Whatsapp</span>
            </ChartLegends>
          </Chart>
          <Chart >
            <h2>Metricas</h2>
            <ColumnChart>
              <div></div>
              <div></div>
              <div></div>
            </ColumnChart>
            <ChartLegends>
              <LegendMetrics>                 
                <div><span>Opt-out</span></div>
                <div><span>Respostas</span></div>
                <div><span>Abertura</span></div>
              </LegendMetrics>
            </ChartLegends>
          </Chart>
        </ContentReports>
      </Fragment>
    )
  }
}

export default Reports