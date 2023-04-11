import React, { Component, useState, useRef } from 'react';
import axios from 'axios';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { contextMenuItems } from '../data/dummy';
import {Excess_Deaths_Grid, ProvisionalDeathsGrid} from '../data/DeathNumberDataset';
import { Header } from '../components';

export default class DataTest extends Component {
    constructor(props) {
      super(props);

      this.state = {
        exercises: [],
        sexagestate: [],
        editing: {allowDeleting: true, allowEditing: true,},
      };
    
    }


    componentDidMountExercises() {
    axios.get(`${process.env.REACT_APP_BASE_URL}/exercises/`)
    .then(response => {
        this.setState({ exercises: response.data })
    })
    .catch((error) => {
        console.log(error);
    })
    }

    componentDidMountSexAgeState() {
    axios.get(`${process.env.REACT_APP_BASE_URL}/sexagestate/`)
    .then(response => {
        this.setState({ sexagestate: response.data })
    })
    .catch((error) => {
        console.log(error);
    })
    }

    componentDidMount() {
        this.componentDidMountExercises();
        this.componentDidMountSexAgeState();
    }
  
    render() {
      return (
        <div>
            <Header title="sample dataset" />
            <Header title="Excess Deaths Associated with COVID-19" />
            <GridComponent
                id="gridcomp"
                dataSource={this.state.exercises}
                allowPaging
                allowSorting
                allowExcelExport
                allowPdfExport
                contextMenuItems={contextMenuItems}
                editSettings={this.state.editing}
            >
                <ColumnsDirective>
                    {Excess_Deaths_Grid.map((item, index) => (
                    <ColumnDirective key={index} {...item} width="150" />
                    ))}
                </ColumnsDirective>
                <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
            </GridComponent>


            <Header title="Provisional COVID-19 Deaths by Sex and Age" />
            <GridComponent
                id="gridcomp"
                dataSource={this.state.sexagestate}
                allowPaging
                allowSorting
                allowExcelExport
                allowPdfExport
                contextMenuItems={contextMenuItems}
                editSettings={this.state.editing}
            >
                <ColumnsDirective>
                    {ProvisionalDeathsGrid.map((item, index) => (
                    <ColumnDirective key={index} {...item} width="150" />
                    ))}
                </ColumnsDirective>
                <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
            </GridComponent>

        </div>
      );
    }
}
