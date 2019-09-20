import { Component } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  columnDefs = [
    { headerName: '', field: 'type', sortable: true,   filter: true },
    { headerName: 'JAN', field: 'Jan', sortable: true, filter: true },
    { headerName: 'FEB', field: 'Feb', sortable: true, filter: true },
    { headerName: 'MAR', field: 'Mar', sortable: true, filter: true },
    { headerName: 'APR', field: 'Apr', sortable: true, filter: true },
    { headerName: 'MAY', field: 'May', sortable: true, filter: true },
    { headerName: 'JUN', field: 'Jun', sortable: true, filter: true }
  ];
  // rowData = {
  //   "submission_count": [
  //     {
  //       "month": "Mar",
  //       "type": "parts_submission_count",
  //       "count": 61
  //     },
  //     {
  //       "month": "Apr",
  //       "type": "parts_submission_count",
  //       "count": 80
  //     },
  //     {
  //       "month": "Jul",
  //       "type": "parts_submission_count",
  //       "count": 95
  //     },
  //     {
  //       "month": "Aug",
  //       "type": "parts_submission_count",
  //       "count": 90
  //     },
  //     {
  //       "month": "Sep",
  //       "type": "parts_submission_count",
  //       "count": 41
  //     },
  //     {
  //       "month": "May",
  //       "type": "parts_submission_count",
  //       "count": 68
  //     },
  //     {
  //       "month": "Jan",
  //       "type": "parts_submission_count",
  //       "count": 73
  //     },
  //     {
  //       "month": "Feb",
  //       "type": "parts_submission_count",
  //       "count": 58
  //     },
  //     {
  //       "month": "Jun",
  //       "type": "parts_submission_count",
  //       "count": 75
  //     },
  //     {
  //       "month": "Mar",
  //       "type": "labor_submission_count",
  //       "count": 31
  //     },
  //     {
  //       "month": "Apr",
  //       "type": "labor_submission_count",
  //       "count": 54
  //     },
  //     {
  //       "month": "Jul",
  //       "type": "labor_submission_count",
  //       "count": 61
  //     },
  //     {
  //       "month": "Aug",
  //       "type": "labor_submission_count",
  //       "count": 68
  //     },
  //     {
  //       "month": "Sep",
  //       "type": "labor_submission_count",
  //       "count": 31
  //     },
  //     {
  //       "month": "May",
  //       "type": "labor_submission_count",
  //       "count": 45
  //     },
  //     {
  //       "month": "Jan",
  //       "type": "labor_submission_count",
  //       "count": 34
  //     },
  //     {
  //       "month": "Feb",
  //       "type": "labor_submission_count",
  //       "count": 33
  //     },
  //     {
  //       "month": "Jun",
  //       "type": "labor_submission_count",
  //       "count": 63
  //     }
  //   ],
  //   "sales_person_count": [
  //     {
  //       "month": "Apr",
  //       "total_submission_invoices": 17,
  //       "assignedto_cn": "Eric Rubinstein"
  //     },
  //     {
  //       "month": "Aug",
  //       "total_submission_invoices": 17,
  //       "assignedto_cn": "Eric Rubinstein"
  //     },
  //     {
  //       "month": "Feb",
  //       "total_submission_invoices": 24,
  //       "assignedto_cn": "Eric Rubinstein"
  //     },
  //     {
  //       "month": "Jan",
  //       "total_submission_invoices": 15,
  //       "assignedto_cn": "Eric Rubinstein"
  //     },
  //     {
  //       "month": "Jul",
  //       "total_submission_invoices": 27,
  //       "assignedto_cn": "Eric Rubinstein"
  //     },
  //     {
  //       "month": "Jun",
  //       "total_submission_invoices": 24,
  //       "assignedto_cn": "Eric Rubinstein"
  //     },
  //     {
  //       "month": "Mar",
  //       "total_submission_invoices": 13,
  //       "assignedto_cn": "Eric Rubinstein"
  //     },
  //     {
  //       "month": "May",
  //       "total_submission_invoices": 16,
  //       "assignedto_cn": "Eric Rubinstein"
  //     },
  //     {
  //       "month": "Sep",
  //       "total_submission_invoices": 9,
  //       "assignedto_cn": "Eric Rubinstein"
  //     },
  //     {
  //       "month": "Apr",
  //       "total_submission_invoices": 30,
  //       "assignedto_cn": "Evan Kilchenstein"
  //     },
  //     {
  //       "month": "Aug",
  //       "total_submission_invoices": 33,
  //       "assignedto_cn": "Evan Kilchenstein"
  //     },
  //     {
  //       "month": "Feb",
  //       "total_submission_invoices": 13,
  //       "assignedto_cn": "Evan Kilchenstein"
  //     },
  //     {
  //       "month": "Jan",
  //       "total_submission_invoices": 21,
  //       "assignedto_cn": "Evan Kilchenstein"
  //     },
  //     {
  //       "month": "Jul",
  //       "total_submission_invoices": 43,
  //       "assignedto_cn": "Evan Kilchenstein"
  //     },
  //     {
  //       "month": "Jun",
  //       "total_submission_invoices": 35,
  //       "assignedto_cn": "Evan Kilchenstein"
  //     },
  //     {
  //       "month": "Mar",
  //       "total_submission_invoices": 15,
  //       "assignedto_cn": "Evan Kilchenstein"
  //     },
  //     {
  //       "month": "May",
  //       "total_submission_invoices": 30,
  //       "assignedto_cn": "Evan Kilchenstein"
  //     },
  //     {
  //       "month": "Sep",
  //       "total_submission_invoices": 14,
  //       "assignedto_cn": "Evan Kilchenstein"
  //     },
  //     {
  //       "month": "Aug",
  //       "total_submission_invoices": 14,
  //       "assignedto_cn": "Jeremy Dedmon"
  //     },
  //     {
  //       "month": "Jul",
  //       "total_submission_invoices": 7,
  //       "assignedto_cn": "Jeremy Dedmon"
  //     },
  //     {
  //       "month": "Jun",
  //       "total_submission_invoices": 2,
  //       "assignedto_cn": "Jeremy Dedmon"
  //     },
  //     {
  //       "month": "May",
  //       "total_submission_invoices": 1,
  //       "assignedto_cn": "Jeremy Dedmon"
  //     },
  //     {
  //       "month": "Sep",
  //       "total_submission_invoices": 7,
  //       "assignedto_cn": "Jeremy Dedmon"
  //     },
  //     {
  //       "month": "Feb",
  //       "total_submission_invoices": 8,
  //       "assignedto_cn": "Jerry Marion"
  //     },
  //     {
  //       "month": "Jan",
  //       "total_submission_invoices": 7,
  //       "assignedto_cn": "Jerry Marion"
  //     },
  //     {
  //       "month": "Mar",
  //       "total_submission_invoices": 5,
  //       "assignedto_cn": "Jerry Marion"
  //     },
  //     {
  //       "month": "Apr",
  //       "total_submission_invoices": 51,
  //       "assignedto_cn": "Michael Kilchenstein"
  //     },
  //     {
  //       "month": "Aug",
  //       "total_submission_invoices": 63,
  //       "assignedto_cn": "Michael Kilchenstein"
  //     },
  //     {
  //       "month": "Feb",
  //       "total_submission_invoices": 33,
  //       "assignedto_cn": "Michael Kilchenstein"
  //     },
  //     {
  //       "month": "Jan",
  //       "total_submission_invoices": 34,
  //       "assignedto_cn": "Michael Kilchenstein"
  //     },
  //     {
  //       "month": "Jul",
  //       "total_submission_invoices": 57,
  //       "assignedto_cn": "Michael Kilchenstein"
  //     },
  //     {
  //       "month": "Jun",
  //       "total_submission_invoices": 62,
  //       "assignedto_cn": "Michael Kilchenstein"
  //     },
  //     {
  //       "month": "Mar",
  //       "total_submission_invoices": 35,
  //       "assignedto_cn": "Michael Kilchenstein"
  //     },
  //     {
  //       "month": "May",
  //       "total_submission_invoices": 51,
  //       "assignedto_cn": "Michael Kilchenstein"
  //     },
  //     {
  //       "month": "Sep",
  //       "total_submission_invoices": 34,
  //       "assignedto_cn": "Michael Kilchenstein"
  //     },
  //     {
  //       "month": "Apr",
  //       "total_submission_invoices": 36,
  //       "assignedto_cn": "Roland Jewett"
  //     },
  //     {
  //       "month": "Aug",
  //       "total_submission_invoices": 23,
  //       "assignedto_cn": "Roland Jewett"
  //     },
  //     {
  //       "month": "Feb",
  //       "total_submission_invoices": 13,
  //       "assignedto_cn": "Roland Jewett"
  //     },
  //     {
  //       "month": "Jan",
  //       "total_submission_invoices": 30,
  //       "assignedto_cn": "Roland Jewett"
  //     },
  //     {
  //       "month": "Jul",
  //       "total_submission_invoices": 22,
  //       "assignedto_cn": "Roland Jewett"
  //     },
  //     {
  //       "month": "Jun",
  //       "total_submission_invoices": 15,
  //       "assignedto_cn": "Roland Jewett"
  //     },
  //     {
  //       "month": "Mar",
  //       "total_submission_invoices": 24,
  //       "assignedto_cn": "Roland Jewett"
  //     },
  //     {
  //       "month": "May",
  //       "total_submission_invoices": 15,
  //       "assignedto_cn": "Roland Jewett"
  //     },
  //     {
  //       "month": "Sep",
  //       "total_submission_invoices": 5,
  //       "assignedto_cn": "Roland Jewett"
  //     },
  //     {
  //       "month": "Aug",
  //       "total_submission_invoices": 8,
  //       "assignedto_cn": "Ryan McKee"
  //     },
  //     {
  //       "month": "Sep",
  //       "total_submission_invoices": 3,
  //       "assignedto_cn": "Ryan McKee"
  //     }
  //   ]
  // }
alert('HI');
}
