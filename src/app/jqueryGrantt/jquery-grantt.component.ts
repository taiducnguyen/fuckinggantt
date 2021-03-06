import { Component, Inject, ElementRef, NgZone } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { GanttControl } from '../libs/jquery-grantt/models/RadiantQGantt.d.ts';

import { GranttConfig } from './grantt.config';

declare var $;
declare var RadiantQ;

@Component({
    selector: 'test-grantt',
    templateUrl: './jquery-grantt.component.html',
    styleUrls: ['./jquery-grantt.component.scss']
})

export class JqueryGranttComponent {

    constructor( @Inject(Http) private http: Http,
        @Inject(ElementRef) private el: ElementRef,
        @Inject(NgZone) private zone: NgZone) {

    }

    ngOnInit() {
    }
    ngAfterViewInit() {
        this.zone.runOutsideAngular(() => {
            this.loadDataToGrantt();
        })
    }
    loadDataToGrantt() {
        let $granttContainer = $(this.el.nativeElement.querySelector('#gantt_container'));
        // this.getDataSource().subscribe(res => console.log(res));
        let dataSource = $.parseJSON(`
                [{
                "Name": "Task 2",
                "ID": 10,
                "SortOrder": 2,
                "PredecessorIndices": "9",
                "StartTime": "2014-02-02T00:00:00Z",
                "Effort": "16:00:00",
                "Description": "Description of Task 2"
            },
            {
                "Name": "Task 1",
                "ID": 9,
                "SortOrder": 1,
                "StartTime": "2014-02-02T00:00:00Z",
                "Effort": "8:00:00",
                "ProgressPercent": 100,
                "Description": "Description of Task 1"
            },
            {
                "Name": "Task 3",
                "ID": 11,
                "SortOrder": 3,
                "StartTime": "2014-02-02T00:00:00Z",
                "Effort": "12:30:00",
                "ProgressPercent": 90,
                "Description": "Description of Task 3"
            },
            {
                "Name": "Child Task 1",
                "ID": 12,
                "SortOrder": 4,
                "Resources": "1, 2",
                "IndentLevel": 1,
                "StartTime": "2014-02-02T00:00:00Z",
                "Effort": "1.16:00:00",
                "ProgressPercent": 25,
                "Description": "Description of Task 3/Child Task 1"
            },
            {
                "Name": "Child Task 2",
                "ID": 13,
                "SortOrder": 5,
                "IndentLevel": 1,
                "PredecessorIndices": "12+8",
                "Description": "Description of Task 3/Child Task 2"
            },
            {
                "Name": "Grand Child Task 1",
                "ID": 14,
                "SortOrder": 6,
                "IndentLevel": 2,
                "Resources": "2, 3",
                "StartTime": "2014-02-02T00:00:00Z",
                "Effort": "8:00:00",
                "Description": "Description of Task 3/Child Task 1/Grand Child 1"
            },
            {
                "Name": "Grand Child Task 2",
                "ID": 15,
                "SortOrder": 7,
                "IndentLevel": 2,
                "StartTime": "2014-02-02T00:00:00Z",
                "Effort": "16:00:00",
                "Description": "Description of Task 3/Child Task 1/Grand Child 2"
            },
            {
                "Name": "Child Task 3",
                "ID": 1,
                "SortOrder": 8,
                "IndentLevel": 1,
                "StartTime": "2014-02-02T00:00:00Z",
                "Effort": "16:00:00",
                "Description": "Description of Task 3/Child Task 3"
            },
            {
                "Name": "Task 4",
                "ID": 2,
                "SortOrder": 9,
                "StartTime": "2014-02-02T00:00:00Z",
                "ProgressPercent": 60,
                "Effort": "8:00:00",
                "Description": "Description of Task 4"
            },
            {
                "Name": "Task 5",
                "ID": 3,
                "SortOrder": 10,
                "PredecessorIndices": "11+8, 2",
                "Description": "Description of Task 5"
            },
            {
                "Name": "Child Task 1",
                "ID": 4,
                "SortOrder": 11,
                "IndentLevel": 1,
                "StartTime": "2014-02-02T00:00:00Z",
                "Effort": "1.16:00:00",
                "Description": "Description of Task 5/Child Task 1"
            },
            {
                "Name": "Child Task 2",
                "ID": 5,
                "SortOrder": 12,
                "PredecessorIndices": "4+8",
                "IndentLevel": 1,
                "StartTime": "2014-02-02T00:00:00Z",
                "Effort": "8:00:00",
                "Description": "Description of Task 5/Child Task 2"
            },
            {
                "Name": "Task 6",
                "ID": 6,
                "SortOrder": 13,
                "StartTime": "2014-02-02T00:00:00Z",
                "Effort": "16:00:00",
                "Description": "Description of Task 6"
            },
            {
                "Name": "Child Task 1",
                "ID": 7,
                "SortOrder": 14,
                "IndentLevel": 1,
                "StartTime": "2014-02-02T00:00:00Z",
                "Effort": "20:00:00",
                "Description": "Description of Task 6/Child Task 1"
            },
            {
                "Name": "Grand Child Task 1",
                "ID": 8,
                "SortOrder": 15,
                "StartTime": "2014-02-02T00:00:00Z",
                "Effort": "8:00:00",
                "IndentLevel": 2,
                "Resources": "2",
                "Description": "Description of Task 6/Child Task 2"
            }
        ]
        `, true, true);
        console.log('jquery:', dataSource);
        let dataJson = JSON.parse(` [{
                "Name": "Task 2",
                "ID": 10,
                "SortOrder": 2,
                "PredecessorIndices": "9",
                "StartTime": "2014-02-02T00:00:00Z",
                "Effort": "16:00:00",
                "Description": "Description of Task 2"
            },
            {
                "Name": "Task 1",
                "ID": 9,
                "SortOrder": 1,
                "StartTime": "2014-02-02T00:00:00Z",
                "Effort": "8:00:00",
                "ProgressPercent": 100,
                "Description": "Description of Task 1"
            },
            {
                "Name": "Task 3",
                "ID": 11,
                "SortOrder": 3,
                "StartTime": "2014-02-02T00:00:00Z",
                "Effort": "12:30:00",
                "ProgressPercent": 90,
                "Description": "Description of Task 3"
            },
            {
                "Name": "Child Task 1",
                "ID": 12,
                "SortOrder": 4,
                "Resources": "1, 2",
                "IndentLevel": 1,
                "StartTime": "2014-02-02T00:00:00Z",
                "Effort": "1.16:00:00",
                "ProgressPercent": 25,
                "Description": "Description of Task 3/Child Task 1"
            },
            {
                "Name": "Child Task 2",
                "ID": 13,
                "SortOrder": 5,
                "IndentLevel": 1,
                "PredecessorIndices": "12+8",
                "Description": "Description of Task 3/Child Task 2"
            },
            {
                "Name": "Grand Child Task 1",
                "ID": 14,
                "SortOrder": 6,
                "IndentLevel": 2,
                "Resources": "2, 3",
                "StartTime": "2014-02-02T00:00:00Z",
                "Effort": "8:00:00",
                "Description": "Description of Task 3/Child Task 1/Grand Child 1"
            },
            {
                "Name": "Grand Child Task 2",
                "ID": 15,
                "SortOrder": 7,
                "IndentLevel": 2,
                "StartTime": "2014-02-02T00:00:00Z",
                "Effort": "16:00:00",
                "Description": "Description of Task 3/Child Task 1/Grand Child 2"
            },
            {
                "Name": "Child Task 3",
                "ID": 1,
                "SortOrder": 8,
                "IndentLevel": 1,
                "StartTime": "2014-02-02T00:00:00Z",
                "Effort": "16:00:00",
                "Description": "Description of Task 3/Child Task 3"
            },
            {
                "Name": "Task 4",
                "ID": 2,
                "SortOrder": 9,
                "StartTime": "2014-02-02T00:00:00Z",
                "ProgressPercent": 60,
                "Effort": "8:00:00",
                "Description": "Description of Task 4"
            },
            {
                "Name": "Task 5",
                "ID": 3,
                "SortOrder": 10,
                "PredecessorIndices": "11+8, 2",
                "Description": "Description of Task 5"
            },
            {
                "Name": "Child Task 1",
                "ID": 4,
                "SortOrder": 11,
                "IndentLevel": 1,
                "StartTime": "2014-02-02T00:00:00Z",
                "Effort": "1.16:00:00",
                "Description": "Description of Task 5/Child Task 1"
            },
            {
                "Name": "Child Task 2",
                "ID": 5,
                "SortOrder": 12,
                "PredecessorIndices": "4+8",
                "IndentLevel": 1,
                "StartTime": "2014-02-02T00:00:00Z",
                "Effort": "8:00:00",
                "Description": "Description of Task 5/Child Task 2"
            },
            {
                "Name": "Task 6",
                "ID": 6,
                "SortOrder": 13,
                "StartTime": "2014-02-02T00:00:00Z",
                "Effort": "16:00:00",
                "Description": "Description of Task 6"
            },
            {
                "Name": "Child Task 1",
                "ID": 7,
                "SortOrder": 14,
                "IndentLevel": 1,
                "StartTime": "2014-02-02T00:00:00Z",
                "Effort": "20:00:00",
                "Description": "Description of Task 6/Child Task 1"
            },
            {
                "Name": "Grand Child Task 1",
                "ID": 8,
                "SortOrder": 15,
                "StartTime": "2014-02-02T00:00:00Z",
                "Effort": "8:00:00",
                "IndentLevel": 2,
                "Resources": "2",
                "Description": "Description of Task 6/Child Task 2"
            }
        ]`);
        console.log('JsonP: ', dataJson);
        var resources = new Array(
            {
                ResourceID: 1,
                ResourceName: "Resource 1"
            },
            {
                ResourceID: 2,
                ResourceName: "Resource 2"
            },
            {
                ResourceID: 3,
                ResourceName: "Resource 3"
            }
        );

        var anchorTime = new Date(2014, 1, 2, 0, 0, 0);
        var $gantt_container = $granttContainer;
        $gantt_container.GanttControl({
            ProjectStartDate: anchorTime,
            DataSource: dataSource,
            IDBinding: new RadiantQ.BindingOptions("ID"),
            CanUserReorderRows: true,
            UseVirtualization: true,
            NameBinding: new RadiantQ.BindingOptions("Name"),
            AssignedResourcesBinding: new RadiantQ.BindingOptions("Resources"),
            ResourceItemsSource: resources,
            ResourceIDBinding: new RadiantQ.BindingOptions("ResourceID"),
            ResourceNameBinding: new RadiantQ.BindingOptions("ResourceName"),
            IndentLevelBinding: new RadiantQ.BindingOptions("IndentLevel"),
            StartTimeBinding: new RadiantQ.BindingOptions("StartTime"),
            EffortBinding: new RadiantQ.BindingOptions("Effort"),
            SortOrderBinding: new RadiantQ.BindingOptions("SortOrder"),
            PredecessorIndicesBinding: new RadiantQ.BindingOptions("PredecessorIndices"),
            ProgressPercentBinding: new RadiantQ.BindingOptions("ProgressPercent"),
            DescriptionBinding: new RadiantQ.BindingOptions("Description"),
            GanttTableOptions: {
                columns: GranttConfig.GranttColumns
            },
            CanInsertPropertyChangeTriggeringPropertiesInData: true,
            GanttChartTemplateApplied: function (sender, args) {
                var $GanttChart = args.element;
                $GanttChart.GanttChart({ AnchorTime: anchorTime });
            }
        });
    }

    public getDataSource(): Observable<any> {
        return this.http.get('./data-binding.config.json')
            .map(res => {
                return res.json();
            })
            .catch(err => Observable.throw(err));
    }

}