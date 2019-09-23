import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  public columnDefs = [
    { headerName: '', field: 'type', sortable: true,   filter: true },
    { headerName: 'JAN', field: 'Jan', sortable: true, filter: true },
    { headerName: 'FEB', field: 'Feb', sortable: true, filter: true },
    { headerName: 'MAR', field: 'Mar', sortable: true, filter: true },
    { headerName: 'APR', field: 'Apr', sortable: true, filter: true },
    { headerName: 'MAY', field: 'May', sortable: true, filter: true },
    { headerName: 'JUN', field: 'Jun', sortable: true, filter: true },
    { headerName: 'JUL', field: 'Jul', sortable: true, filter: true },
    { headerName: 'AUG', field: 'Aug', sortable: true, filter: true },
    { headerName: 'SEP', field: 'Sep', sortable: true, filter: true },
    { headerName: 'OCT', field: 'Oct', sortable: true, filter: true },
    { headerName: 'NOV', field: 'Nov', sortable: true, filter: true },
    { headerName: 'DEC', field: 'Dec', sortable: true, filter: true }
  ];
  rowData: any;

  constructor() {
    var title = 'app';
  }
  public ngOnInit() {
    var jos,mos,sub_type,sale_type;
    var idata = {
      "submission_count": [
        {
          "month": "Jan",
          "type": "parts_submission_count",
          "count": 61
        },
        {
          "month": "Feb",
          "type": "parts_submission_count",
          "count": 80
        },
        {
          "month": "Mar",
          "type": "parts_submission_count",
          "count": 95
        },
        {
          "month": "Apr",
          "type": "parts_submission_count",
          "count": 90
        },
        {
          "month": "May",
          "type": "parts_submission_count",
          "count": 41
        },
        {
          "month": "Jun",
          "type": "parts_submission_count",
          "count": 68
        }
      ],
      "sales_person_count": [
        {
          "month": "Apr",
          "total_submission_invoices": 17,
          "assignedto_cn": "Eric Rubinstein"
        },
        {
          "month": "Aug",
          "total_submission_invoices": 17,
          "assignedto_cn": "Eric Rubinstein"
        },
        {
          "month": "Feb",
          "total_submission_invoices": 24,
          "assignedto_cn": "Eric Rubinstein"
        },
        {
          "month": "Jan",
          "total_submission_invoices": 15,
          "assignedto_cn": "Eric Rubinstein"
        },
        {
          "month": "Jul",
          "total_submission_invoices": 27,
          "assignedto_cn": "Eric Rubinstein"
        },
        {
          "month": "Jun",
          "total_submission_invoices": 24,
          "assignedto_cn": "Eric Rubinstein"
        },
        {
          "month": "Mar",
          "total_submission_invoices": 13,
          "assignedto_cn": "Eric Rubinstein"
        },
        {
          "month": "May",
          "total_submission_invoices": 16,
          "assignedto_cn": "Eric Rubinstein"
        },
        {
          "month": "Sep",
          "total_submission_invoices": 9,
          "assignedto_cn": "Eric Rubinstein"
        },
        {
          "month": "Apr",
          "total_submission_invoices": 30,
          "assignedto_cn": "Evan Kilchenstein"
        },
        {
          "month": "Aug",
          "total_submission_invoices": 33,
          "assignedto_cn": "Evan Kilchenstein"
        },
        {
          "month": "Feb",
          "total_submission_invoices": 13,
          "assignedto_cn": "Evan Kilchenstein"
        },
        {
          "month": "Jan",
          "total_submission_invoices": 21,
          "assignedto_cn": "Evan Kilchenstein"
        },
        {
          "month": "Jul",
          "total_submission_invoices": 43,
          "assignedto_cn": "Evan Kilchenstein"
        },
        {
          "month": "Jun",
          "total_submission_invoices": 35,
          "assignedto_cn": "Evan Kilchenstein"
        },
        {
          "month": "Mar",
          "total_submission_invoices": 15,
          "assignedto_cn": "Evan Kilchenstein"
        },
        {
          "month": "May",
          "total_submission_invoices": 30,
          "assignedto_cn": "Evan Kilchenstein"
        },
        {
          "month": "Sep",
          "total_submission_invoices": 14,
          "assignedto_cn": "Evan Kilchenstein"
        },
        {
          "month": "Aug",
          "total_submission_invoices": 14,
          "assignedto_cn": "Jeremy Dedmon"
        },
        {
          "month": "Jul",
          "total_submission_invoices": 7,
          "assignedto_cn": "Jeremy Dedmon"
        },
        {
          "month": "Jun",
          "total_submission_invoices": 2,
          "assignedto_cn": "Jeremy Dedmon"
        },
        {
          "month": "May",
          "total_submission_invoices": 1,
          "assignedto_cn": "Jeremy Dedmon"
        },
        {
          "month": "Sep",
          "total_submission_invoices": 7,
          "assignedto_cn": "Jeremy Dedmon"
        },
        {
          "month": "Feb",
          "total_submission_invoices": 8,
          "assignedto_cn": "Jerry Marion"
        },
        {
          "month": "Jan",
          "total_submission_invoices": 7,
          "assignedto_cn": "Jerry Marion"
        },
        {
          "month": "Mar",
          "total_submission_invoices": 5,
          "assignedto_cn": "Jerry Marion"
        },
        {
          "month": "Apr",
          "total_submission_invoices": 51,
          "assignedto_cn": "Michael Kilchenstein"
        },
        {
          "month": "Aug",
          "total_submission_invoices": 63,
          "assignedto_cn": "Michael Kilchenstein"
        },
        {
          "month": "Feb",
          "total_submission_invoices": 33,
          "assignedto_cn": "Michael Kilchenstein"
        },
        {
          "month": "Jan",
          "total_submission_invoices": 34,
          "assignedto_cn": "Michael Kilchenstein"
        },
        {
          "month": "Jul",
          "total_submission_invoices": 57,
          "assignedto_cn": "Michael Kilchenstein"
        },
        {
          "month": "Jun",
          "total_submission_invoices": 62,
          "assignedto_cn": "Michael Kilchenstein"
        },
        {
          "month": "Mar",
          "total_submission_invoices": 35,
          "assignedto_cn": "Michael Kilchenstein"
        },
        {
          "month": "May",
          "total_submission_invoices": 51,
          "assignedto_cn": "Michael Kilchenstein"
        },
        {
          "month": "Sep",
          "total_submission_invoices": 34,
          "assignedto_cn": "Michael Kilchenstein"
        },
        {
          "month": "Apr",
          "total_submission_invoices": 36,
          "assignedto_cn": "Roland Jewett"
        },
        {
          "month": "Aug",
          "total_submission_invoices": 23,
          "assignedto_cn": "Roland Jewett"
        },
        {
          "month": "Feb",
          "total_submission_invoices": 13,
          "assignedto_cn": "Roland Jewett"
        },
        {
          "month": "Jan",
          "total_submission_invoices": 30,
          "assignedto_cn": "Roland Jewett"
        },
        {
          "month": "Jul",
          "total_submission_invoices": 22,
          "assignedto_cn": "Roland Jewett"
        },
        {
          "month": "Jun",
          "total_submission_invoices": 15,
          "assignedto_cn": "Roland Jewett"
        },
        {
          "month": "Mar",
          "total_submission_invoices": 24,
          "assignedto_cn": "Roland Jewett"
        },
        {
          "month": "May",
          "total_submission_invoices": 15,
          "assignedto_cn": "Roland Jewett"
        },
        {
          "month": "Sep",
          "total_submission_invoices": 5,
          "assignedto_cn": "Roland Jewett"
        },
        {
          "month": "Aug",
          "total_submission_invoices": 8,
          "assignedto_cn": "Ryan McKee"
        },
        {
          "month": "Sep",
          "total_submission_invoices": 3,
          "assignedto_cn": "Ryan McKee"
        }
      ]
    };

    const allmonths = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    allmonths.forEach(month => {
      const item = idata.submission_count.find(item => item.month === month);
      if (item) {
        jos += ',"'+item.month+'":'+'\"'+item.count+'\"';
        sub_type = item.type;
      } else {
        jos += ',"'+month+'":'+'\"Nil\"';
      }
    });

    allmonths.forEach(month => {
      const item = idata.sales_person_count.find(item => item.month === month);
      if (item) {
        mos += ',"'+item.month+'":'+'\"'+item.total_submission_invoices+'\"';
        sale_type = item.assignedto_cn;
      } else {
        mos += ',"'+month+'":'+'\"Nil\"';
      }
    });

    var uy = jos.replace(/^[^,]+, */, '');
    var sy = mos.replace(/^[^,]+, */, '');
    var ty ='[{ "type" :"'+sub_type+'", ' + uy + '},{ "type" :"'+sale_type+'", ' + sy + '}]';
    var os = JSON.parse(ty);
    this.rowData = os;

  }
}
