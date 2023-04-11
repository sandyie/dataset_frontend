import React, { Component, useState, useRef } from 'react';
import axios from 'axios';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { contextMenuItems } from '../data/dummy';
import {MDConfirmedAge_Grid,
    ConditionAgeGroup_Grid, NVSSProvisional_Grid,} from '../data/DeathNumberDataset';

import { Header } from '../components';

export default class DeathAgeDatasets extends Component {
    constructor(props) {
      super(props);

      this.state = {
        conditionals: [],
        nvss: [],
        md : [],
        editing: {allowDeleting: true, allowEditing: true,},
      };
    
    }


    componentDidMountConditionals() {
    axios.get(`${process.env.REACT_APP_BASE_URL}/conditional/`)
    .then(response => {
        this.setState({ conditionals: response.data })
    })
    .catch((error) => {
        console.log(error);
    })
    }

    componentDidMountNvss() {
    axios.get(`${process.env.REACT_APP_BASE_URL}/nvssprovisional/`)
    .then(response => {
        this.setState({ nvss: response.data })
    })
    .catch((error) => {
        console.log(error);
    })
    }

    componentDidMountMd() {
        axios.get(`${process.env.REACT_APP_BASE_URL}/mdconfirmage/`)
        .then(response => {
            this.setState({ md: response.data })
            
            console.log(this.state.md)

        })
        .catch((error) => {
            console.log(error);
        })
        }

    componentDidMount() {
        this.componentDidMountConditionals();
        this.componentDidMountNvss();
        this.componentDidMountMd();
    }
  
    render() {
      return (
        <div>
            <Header title="Death age group dataset" />
            <Header title="Conditions Contributing to COVID-19 Deaths, by State and Age, Provisional 2020-2023" />
            <GridComponent
                id="gridcomp"
                dataSource={this.state.conditionals}
                allowPaging
                allowSorting
                allowExcelExport
                allowPdfExport
                contextMenuItems={contextMenuItems}
                editSettings={this.state.editing}
            >
                <ColumnsDirective>
                    {ConditionAgeGroup_Grid.map((item, index) => (
                    <ColumnDirective key={index} {...item} width="150" />
                    ))}
                </ColumnsDirective>
                <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
            </GridComponent>


            <Header title="Provisional COVID-19 Deaths by Sex and Age" />
            <GridComponent
                id="gridcomp"
                dataSource={this.state.nvss}
                allowPaging
                allowSorting
                allowExcelExport
                allowPdfExport
                contextMenuItems={contextMenuItems}
                editSettings={this.state.editing}
            >
                <ColumnsDirective>
                    {NVSSProvisional_Grid.map((item, index) => (
                    <ColumnDirective key={index} {...item} width="150" />
                    ))}
                </ColumnsDirective>
                <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
            </GridComponent>

            <Header title="MD COVID-19 - Confirmed Deaths by Age Distribution" />
            <GridComponent
                id="gridcomp"
                dataSource={this.state.md}
                allowPaging
                allowSorting
                allowExcelExport
                allowPdfExport
                contextMenuItems={contextMenuItems}
                editSettings={this.state.editing}
            >
                <ColumnsDirective>
                    {MDConfirmedAge_Grid.map((item, index) => (
                    <ColumnDirective key={index} {...item} width="150" />
                    ))}
                </ColumnsDirective>
                <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
            </GridComponent>

        </div>
      );
    }
}