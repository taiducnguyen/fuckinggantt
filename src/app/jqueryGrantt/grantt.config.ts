declare var RadiantQ;
export class GranttConfig {
    public static get GranttColumns(): Object {
        return[
            {
                field: "Activity_M().ID_M()",
                title: "ID",
                width: 20,
                iseditable: false
            },
            {
                field: "Activity_M().ActivityName_M()",
                title: "Activity Name",
                width: 150,
                editor: RadiantQ.Default.Template.ProjectGanttExpandableTextboxEditor(),
                template: RadiantQ.Default.Template.ProjectGanttExpandableTextBlockTemplate()
            },
            {
                field: "Activity_M().StartTime_M()",
                title: "StartTime",
                width: 150,
                format: "MM/dd/yy",
                editor: "<input data-bind='ActivityTimeBinder:Activity_M().StartTime_M' />"
            },
            {
                field: "Activity_M().EndTime_M()",
                title: "EndTime",
                width: 150,
                format: "MM/dd/yy",
                editor: "<input data-bind='value:Activity_M().EndTime_M' data-getvalueName='getDate' data-setvaluename='setDate'  data-valueUpdate='onBlur'  data-role=\"DateTimePicker\"  />"
            },
           {
               field: "Activity_M().Effort_M()",
               title: "Effort",
               width: 100,
               template: '<div> ${ data.Activity_M().CumulativeEffort_M().toString() } </div>',
               editor: "<input data-bind='value:Activity_M().Effort_M'  data-role=\"DurationPicker\"  />"
           },
            {
                field: "Activity_M().ProgressPercent_M()",
                title: "ProgressPercent",
                width: 125,
                editor: "<input style='height:18px'  data-bind='value:Activity_M().ProgressPercent_M' data-role=\"spinner\" data-options='{\"min\":0, \"max\": 100}' />"
            },
            {
                field: "Activity_M().Assignments_M()",
                title: "Resource",
                isParentEditable: false,
                template: '<div> ${ RadiantQ.Gantt.ValueConverters.ConverterUtils.GetResourcesText(data.Activity_M().Assignments_M(), false) } </div>',
                editor: "<input data-bind='ResourcePickerBinder:Activity_M().Assignments_M'  />",
                width: 150
            },
             {
                 field: "Activity_M().PredecessorIndexString_M()",
                 title: "PredecessorIndex",
                 isParentEditable: false,
                 template: "<div>${data.PredecessorIndexString_M() || '' }</div>",
                 editor: "<input data-bind='value:Activity_M().PredecessorIndexString_M'/>",
                 width: 150
             }];
    }
}