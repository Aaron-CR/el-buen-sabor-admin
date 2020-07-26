import { Injectable } from '@angular/core';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  constructor() { }

  exportExcel(excelData) {

    // Title, Header & Data
    const title = excelData.title;
    const header = excelData.headers;
    const data = excelData.data;
    const periodo = excelData.periodo;

    // Create a workbook with a worksheet
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('Data');


    // Add Row and formatting
    const titleRow = worksheet.getCell('A1');
    titleRow.value = title;
    titleRow.font = {
      name: 'Calibri',
      size: 18,
      underline: 'single',
      bold: true,
      color: { argb: '222222' }
    };
    titleRow.alignment = { vertical: 'middle', horizontal: 'center' };

    // Date
    const d = new Date();
    const date = d.toISOString().slice(0, 10);
    const dateCell = worksheet.getCell('B1');
    dateCell.value = date;
    dateCell.font = {
      name: 'Calibri',
      size: 12,
      bold: true
    };
    dateCell.alignment = { vertical: 'middle', horizontal: 'center' };

    // Blank Row
    worksheet.addRow([]);

    if (periodo !== ''){
      const periodCell = worksheet.getCell('A3');
      periodCell.value = 'Periodo: ' + periodo;
      worksheet.addRow([]);
    }

    // Adding Header Row
    const headerRow = worksheet.addRow(header);
    headerRow.eachCell((cell, number) => {
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FF8F00' },
        bgColor: { argb: '' }
      };
      cell.font = {
        bold: true,
        color: { argb: 'FFFFFF' },
        size: 12
      };
    });

    // Adding Data with Conditional Formatting
    data.forEach(d => {
      const row = worksheet.addRow(d);
    }
    );

    worksheet.getColumn(1).width = 50;
    worksheet.getColumn(2).width = 30;
    worksheet.getRow(1).height = 50;
    worksheet.addRow([]);

    // Footer Row
    const footerRow = worksheet.addRow(['Reporte generado por ©El Buen Sabor el día ' + date]);
    footerRow.getCell(1).fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FF8F00' }
    };

    footerRow.getCell(1).font = {
      bold: true,
      color: { argb: 'FFFFFF' },
      size: 12
    };

    footerRow.height = 30;

    footerRow.alignment = { vertical: 'middle', horizontal: 'center' };

    // Merge Cells
    worksheet.mergeCells(`A${footerRow.number}:B${footerRow.number}`);

    // Generate & Save Excel File
    workbook.xlsx.writeBuffer().then((data) => {
      const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, title + ' - El Buen Sabor - ' + date + '.xlsx');
    });

  }
}
