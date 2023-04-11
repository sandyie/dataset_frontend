import React, { Component, useState, useRef } from 'react';
import axios from 'axios';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { contextMenuItems } from '../data/dummy';
import {Excess_Deaths_Grid,
    MdRace_Grid, ProvisionalHHSSchema_Grid,
    AHProvisionalEducation_Grid, AhProvisionalHispanic_Grid,
} from '../data/DeathNumberDataset';

import { Header } from '../components';

export default class DeathCharacterDatasets extends Component {
    constructor(props) {
      super(props);

      this.state = {
        confirmRace: [],
        hhs: [],
        provisionalHis : [],
        provisionalEdu : [],
        editing: {allowDeleting: true, allowEditing: true,},
      };
    
    }


    componentDidMountConfirmRace() {
    axios.get(`${process.env.REACT_APP_BASE_URL}/mdconfirmedrace/`)
    .then(response => {
        this.setState({ confirmRace: response.data })
    })
    .catch((error) => {
        console.log(error);
    })
    }

    componentDidMountHhs() {
    axios.get(`${process.env.REACT_APP_BASE_URL}/provisionalhhs/`)
      .then(response => {
          this.setState({ hhs: response.data })
      })
      .catch((error) => {
          console.log(error);
      })
      }

    componentDidMountConfirmHis() {
    axios.get(`${process.env.REACT_APP_BASE_URL}/ahprovisionalhis/`)
    .then(response => {
        this.setState({ provisionalHis: response.data })
    })
    .catch((error) => {
        console.log(error);
    })
    }

    componentDidMountConfirmEdu() {
    axios.get(`${process.env.REACT_APP_BASE_URL}/ahprovisionaledu/`)
      .then(response => {
          this.setState({ provisionalEdu: response.data })
      })
      .catch((error) => {
          console.log(error);
      })
      }

    componentDidMount() {
        this.componentDidMountConfirmRace();
        this.componentDidMountHhs();
        this.componentDidMountConfirmHis();
        this.componentDidMountConfirmEdu();
    }
  
    render() {
      return (
        <div>
            <Header title="death characteristic dataset" />
            <Header title="MD COVID-19 - Confirmed Deaths by Race and Ethnicity Distribution" />
            <GridComponent
                id="gridcomp"
                dataSource={this.state.confirmRace}
                allowPaging
                allowSorting
                allowExcelExport
                allowPdfExport
                contextMenuItems={contextMenuItems}
                editSettings={this.state.editing}
            >
                <ColumnsDirective>
                    {MdRace_Grid.map((item, index) => (
                    <ColumnDirective key={index} {...item} width="150" />
                    ))}
                </ColumnsDirective>
                <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
            </GridComponent>

            <Header title="Provisional COVID-19 Deaths by HHS Region, Race, and Age" />
            <GridComponent
                id="gridcomp"
                dataSource={this.state.hhs}
                allowPaging
                allowSorting
                allowExcelExport
                allowPdfExport
                contextMenuItems={contextMenuItems}
                editSettings={this.state.editing}
            >
                <ColumnsDirective>
                    {ProvisionalHHSSchema_Grid.map((item, index) => (
                    <ColumnDirective key={index} {...item} width="150" />
                    ))}
                </ColumnsDirective>
                <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
            </GridComponent>


            <Header title="AH Provisional COVID-19 Deaths and Contributing Conditions by Sex, Race and Hispanic Origin, and Age, 2020" />
            <GridComponent
                id="gridcomp"
                dataSource={this.state.provisionalHis}
                allowPaging
                allowSorting
                allowExcelExport
                allowPdfExport
                contextMenuItems={contextMenuItems}
                editSettings={this.state.editing}
            >
                <ColumnsDirective>
                    {AhProvisionalHispanic_Grid.map((item, index) => (
                    <ColumnDirective key={index} {...item} width="150" />
                    ))}
                </ColumnsDirective>
                <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
            </GridComponent>



            <Header title="AH Provisional COVID-19 Deaths by Race and Educational Attainment" />
            <GridComponent
                id="gridcomp"
                dataSource={this.state.provisionalEdu}
                allowPaging
                allowSorting
                allowExcelExport
                allowPdfExport
                contextMenuItems={contextMenuItems}
                editSettings={this.state.editing}
            >
                <ColumnsDirective>
                    {AHProvisionalEducation_Grid.map((item, index) => (
                    <ColumnDirective key={index} {...item} width="150" />
                    ))}
                </ColumnsDirective>
                <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
            </GridComponent>


        </div>
      );
    }
}