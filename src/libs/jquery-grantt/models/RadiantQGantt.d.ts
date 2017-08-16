/// <reference path="jquery.d.ts" />

declare var Binder: any;
interface JQuery {

    /**
    An interactive Gantt control that lets you create, edit and visualize project
    task schedules via a grid and chart.The Gantt control can be bound to either an collection via it's ItemsSource
    property. 

    When binding to collections, the following bindings should be specified
    mandatorily:
    - IDBinding
    - NameBinding
    - IndentLevelBinding
    - StartTimeBinding
    - EffortBinding
    - PredecessorIndicesBinding.

    You can optionally specify the following bindings as well:
    - ProgressPercentBinding
    - AssignedResourcesBinding
    - DescriptionBinding
    - SortOrderBinding
    - PreferredStartTimeBinding
	 
    */
    VWGrid(options: any): JQuery;
    VWGrid(optionLiteral: string, options: any): JQuery;
    VWGrid(optionLiteral: string, optionName: string, optionValue: any): JQuery;
    VWGrid(optionLiteral: string, optionName: string): any;
    GanttControl(options: GanttControlOptions): JQuery;
    GanttControl(optionLiteral: string, options: GanttControlOptions): JQuery;
    GanttControl(optionLiteral: string, optionName: string, optionValue: any): JQuery;
    GanttControl(optionLiteral: string, optionName: string): any;
    GanttChart(options: GanttChartOptions): GanttChart;

    GanttChart(optionLiteral: string, options: GanttChartOptions): GanttChart;
    GanttChart(optionLiteral: string, optionName: string, optionValue: any): GanttChart;
    GanttChart(optionLiteral: string, optionName: string): any;
    GanttChart<T>(optionLiteral: string, optionName: string): T;
    /**
   A light-weight, flexible and intuitive gantt control that display your
   hierarchical project or resource list in a multi-column tree list on the left
   and lets you visualize the assigned tasks and summary tasks over a time-scale on
   the right. This gantt has no built-in scheduling functionality.

   The FlexyGantt is built to let you bind to any kind of flat or
   hierarchical lists of project or resource data. Common with resource
   views, you can optionally show multiple tasks in the same row in the gantt
   chart on the right.

   If your leaf node has a list of tasks (as in a resource view), 
   then set the TaskListBinding property to return a list of tasks from the leaf-nodes in the tree defined
   above via templates. (If the leaf nodes in the tree are themselves tasks, then
   you do not have to set the TaskListBinding property.).
   Set the TaskStartTimeBinding to specify how to retrieve the start time of a task from the bound data.
   Set the TaskEndTimeBinding to specify how to retrieve the duration of a task from the bound data..
   If you want to visualize the summary tasks then similarly set the ParentTaskStartTimeBinding and ParentTaskEndTimeBinding properties

   */
    FlexyGantt(options: FlexyGanttOptions): JQuery;
    FlexyGantt(optionLiteral: string, options: GanttControlOptions): JQuery;
    FlexyGantt(optionLiteral: string, optionName: string, optionValue: any): JQuery;
    FlexyGantt(optionLiteral: string, optionName: string): any;
    /**
   Widget used to create a hierarchy in GanttTable
   */
    ExpandableTextBox(options: ExpandableTextBox): JQuery;
    /**
    Widget used to edit in GanttTable cells
   */
    
    /**
  utlity to bind the grid cell with object.
 */
    BindCellToData(bindCellToData: BindCellToData): void;
    /**
   * Gets the content for the tooltip.
   */
    tooltip(tooltipContent: TooltipContent): void;
    /**
   * Gets the value of the Jquery element.
   */
    val(value: any): JQuery;
    map(elems: RadiantQ.Gantt.Model.IActivity, callback: any, arg: any): any;
    value: any;
    ExpandableTextBlock(converter: converter): any;
    scrollLeft(value?: any): any;
    /**
  * To print the Gantt.
  */
    ganttPrintDialog(ganttPrintDialog: ganttPrintDialog): void;
    /**
   * To print the specified Gantt with the customized options.
   */
    ganttPrintDialog(option: string, gantt: JQuery): void;
    /**
   * To print the Gantt with customized options.
   */
    ganttPrintDialog(option: string): void;

}

interface Array<T> {
    remove(item?: T);
}
interface ganttPrintDialog {
    /**
   * Opens the gantt printing dialog.
   */
    open? (ganttWidget: JQuery): void;
    /**
   * Gets or sets the options to print the gantt.
   */
    getSelectedOptions? (): PrintOptions;
    /**
   * Closes the gantt printing dialog.
   */
    close? (): void;
    autoOpen?: boolean;
    width?: number;
    modal?: boolean;
    buttons?: any;
}
/**
* Gantt Printing options.
*/
interface PrintOptions {
    /**
   * Gets or sets the title of the page.
   */
    Title?: string;
    /**
   * Gets or sets a value that specifies the number of columns to be printed.
   */
    VisibleColumnIndices?: Array<number>;
    /**
   * The start time of the view.
   */
    ViewStartTime?: Date;
    /**
   * The end time of the view.
   */
    ViewEndTime?: Date;
    /**
   * Gets or sets a value that specifies whether the Grid is to be printed. Default is true.
   */
    IsGridVisible?: boolean;
    /**
   * Gets or sets a value that specifies the format in which the image has to be exported. Default is png.
   */
    Format?: string;
}

interface converter {
    Converter: any;
}
interface setGradientAsBackgroundCoOrdinates {
    /**
   * Specifies the x1 coordinate of the gradient.
   */
    x1?: number;
    /**
    * Specifies the y1 coordinate of the gradient.
    */
    y1?: number;
    /**
    * Specifies the x2 coordinate of the gradient.
    */
    x2?: number;
    /**
    * Specifies the y2 coordinate of the gradient.
    */
    y2?: number;
}

interface setGradientAsBackgroundStops {
    /**
    * Specifies the offset values of the gradient.
    */
    offset?: string;
    /**
    * Specifies the stop-colors of the gradient.
    */
    'stop-color'?: string;
}

interface ContextMenu {
    /**
   * Event triggers when the bound object is clicked.
   */
    ItemClicked?: ObjectEvent;
    /**
   * Event triggers before the context menu.
   */
    BeforeContextMenu?: ObjectEvent;
    /**
    * Specifies the selector string.
    */
    selector?: string;
    /**
    * Specifies the Position (x and y coordinates).
    */
    position?: Position;
    Items?: Array<ContextMenuItems>;
    /**
    * Add new items to the context menu.
    */
    AddNewItems? (menuItems: ContextMenuItems, enableDefaultItems?: boolean): ContextMenu;
    /**
    * Sets the progress percent value to 100.
    */
    MarkAsCompleted?: boolean;
}
interface Position {
    /**
    * Specifies the x coordinate value.
    */
    x: number;
    /**
    * Specifies the y coordinate value.
    */
    y: number;
}
interface ContextMenuItems {
    /** 
    * The key name of the context menu.
    */
    keyName?: string;
    /**
    * Name of the context menu.
    */
    name?: string;
    /**
    * Icon string of the context menu.
    */
    icon?: string;
    /**
   * Callback finction.
   */
    callback? (key: string, options?: ContextMenuOptions): void;
}
interface TooltipContent {
    /**
   * Gets or sets the tooltip content value.
   */
    content? (value: any): void;
}
/**
* Context menu options
*/
interface ContextMenuOptions {
    $layer?: JQuery;
    $menu?: JQuery;
    $selected?: JQuery;
    $trigger?: JQuery;
    accesskeys?: any;
    /**
    * Specifies animation options.
    */
    animation: AnimationOptions;
    appendTo?: any;
    autoHide?: boolean;
    callbacks(key: string, options?: ContextMenuOptions): void;
    commands?: any;
    /**
    Delay of context menu.
    */
    delay?: number;
    /** 
    * Events in context menu.
    */
    events?: any;
    /**
    * Boolean value represents whether hovering is enabled.
    */
    hovering?: boolean;
    inputs?: any;
    items?: any;
    ns?: string;
    selector?: string;
    trigger?: string;
    /**
    * Specifies z-index of the context menu.
    */
    zIndex?: number;
}
/**
* Animation options.
*/
interface AnimationOptions {
    /**
   * Specifies the duration of the animation.
   */
    duration: number;
    /**
    * Hides the animation.
    */
    hide: string;
    /**
    * Shows the animation.
    */
    show: string;
}

interface BindCellToData {
    /**
    * Specifies the name of the property to bind.
    */
    PropName: string;
    /**
    * DataSource value to bind.
    */
    Source: any;
    /**
    * Converts or Converts back the value.
    */
    Converter?: Converter;
}

interface Converter {
    /**
    * Converts the given value to the required value.
    */
    Convert? (value: number, src: RadiantQ.Gantt.Model.IActivity, tar: JQuery): void;
    /**
    * Converts back to the original value.
    */
    ConvertBack? (value: number, src: RadiantQ.Gantt.Model.IActivity, tar: JQuery): void;
}

interface JQueryStatic {
    /**
   * Takes a well-formed JSON string and returns the resulting JavaScript object.
   */
    parseJSON(data: any, covertToDateObject: boolean, convertToLocaldates: boolean, fn?: any);
    /**
   * Converts simple XML into JSON object.
   */
    xml2json(data: any);
    observable(data: any): observableInstance;
    /**
   * jQuery template
   */
    template(name: string, template: any): any;
}

interface observableInstance {
    /**
    * To add a new item.
    */
    add(item: any): void;
    /**
    * Takes the id of an item and removes the item.
    */
    remove(item: number): void;
    /**
    * Takes the id of an item and removes the item.
    */
    remove(item: any): void;
    /**
    * To bind an event.
    */
    bind(event: string, callBack: any);
    /**
    * To insert new item in between the existing items.
    */
    insert(length: number, task: any);
    /**
    * To insert new item.
    */
    insert(task: any);
}

interface GanttChartOptions {
    /**
    * Specifies the StartTime of the ganttchart.
    */
    AnchorTime?: Date;
    /**
    * Specifies the view width of the chart area.
    */
    ViewWidth?: number;
    /**
    * Will resize the chart to fit the view. Users can then use then ctrl + mouse drag the headers to pan the view and mouse drag to zoom.
    */
    ResizeToFit?: boolean;
    /**
    * GanttChart Starttime.
    */
    ComputedStartTime?: Date;
    /**
   * GanttChart endTime.
   */
    ComputedEndTime?: Date;
    BindModelToTaskBars?: boolean;
}

interface JSON {
    /**
    * Converts the JSON data to XML data.
    */
    toXML(jsonData: any, listName: string, collectionOf: string);
    /**
    * Converts the JSON data to string.
    */
    stringify(jsonData: any, list: Array<string>);
}

interface Window {
    /**
    * Specifies the JSON object.
    */
    JSON?: JSON;
    msie?: any;
}

interface GanttChart extends JQuery {
    /**
    * Options of the Gantt chart.
    */
    options: GanttChartOptions;
    /**
    * To move the Gantt rows.
    */
    MoveRows? (start: number, count: number, insertBelowIndex: number): void;
    /**
    * To get the ScrollViewer element in chart.
    */
    GetScrollableElement? (): JQuery;
    /*
        Converts a specified time to it's X location in the gantt chart.

        Parameters: 
        time - The time to convert.

        Returns:  
        The specified time's X location.
    */
    ConvertTimeToX? (time: Date): number;
    /**
        Converts a specified X-location to it's corresponding time value.

        Parameters: 
        xPos - An x-position

        Returns:  
        The corresponding DateTime.
        */
    ConvertXToTime? (xPos: number): Date;

    TransformToVisual(xPos: number): number;
    GetDataFromRow(element: JQuery): any;
    GetRowFromData(data: any): JQuery;
}

interface GanttTableInstance extends JQuery {
    /**
    * Options of the Gantt table.
    */
    (options: any): void;
    /**
    * To move the Table rows.
    */
    MoveRows(start: number, count: number, insertBelowIndex: number): void;
    /**
   * Sets options for the radiantqGanttTable.
   */
    $uiGridBodyActualContent?: JQuery;
    bindings?: Array<Binding>;
    document?: JQuery;
    element?: JQuery;
    eventNamespace?: string;
    focusable?: any;
    HeaderScrollBorder?: Array<JQuery>;
    Headwraper?: JQuery;
    hoverable?: Array<JQuery>;
    options?: GanttTableOptions;
    previousRow?: JQuery;
    uiGrid?: JQuery;
    uiGridBody?: JQuery;
    uiGridBodyTable?: JQuery;
    uiGridFoot?: JQuery;
    uiGridFootTable?: JQuery;
    uiGridHead?: JQuery;
    uiGridHeadAndFoot?: JQuery;
    uiGridHeadTable?: JQuery;
    uiGridHeadTableAndFootTable?: JQuery;
    uuid?: number;
    visiblity?: boolean;
    window?: any;
    showColumn(headerId: number): void;
    hideColumn(headerId: number): void;
    LockColumn(headerId: number): void;
    UnlockColumn(headerId: number): void;
    InsertColumn(headerId: number): void;
    RemoveColumn(headerId: number): void;
}

/**
* The visual representation of an IActivity. This will be rendered in the the gantt table and in the gantt chart.
*/
interface ActivityView {
    /**
    * The underlying activity that this view represents.
    */
    Activity: RadiantQ.Gantt.Model.IActivity;
}

interface ActivityViews {
    /**
    * The underlying activity that this view represents.
    */
    Activity?: RadiantQ.Gantt.Model.IActivity;
}

interface iActivityViews extends Array<ActivityView> {
    /**
    * Occurs when an item in the collection changes, or the entire collection changes. (inherited from ObservableCollection<T>).
    */
    CollectionChanged?: ObjectEvent;
    /**
    * Gets the activity view of the underlying activity.
    */
    GetIActivityView? (activity: RadiantQ.Gantt.Model.IActivity): any;
}
interface FlexyGantt extends GanttBaseInstance {
    options: FlexyGanttOptions;
    /**
   * Gets the options for the gantt dependency line.
   */
    GanttDependencyLine: GanttDependencyLine;
    /**
   * Used to redraw the particular chartRow.
   */
    RedrawChartRow(activityview: RadiantQ.Gantt.Model.IActivity): void;
    /**
    * Returns the GanttChart Widget instance.

    Returns:  
    Widget instance.

    */
    GetGanttChartInstance(): FlexyGantt;

    /*
     Events fires while changing start and endTime of taskBar.
   */
    TaskTimeChanging: ObjectEvent;
    /* 
      Events fires after start and endTime of taskBar changed.
    */
    TaskTimeChanged: ObjectEvent;


    /**
   * Returns a selected Index.
   */
    SelectedIndex: number;
    /**
 * Returns a selected item.
 */
    SelectedItem: FlexyNodeData;

    /**
  * Returns a selected items.
  */
    SelectedItems: Array<FlexyNodeData>;

    SelectedRowsDropped: ObjectEvent;
    BeforeRowsDragStart: ObjectEvent;
    SelectedRowsDrag: ObjectEvent;
    SelectedRowsDrop: ObjectEvent;
    FlatHierarchicalItemsList: Array<any>;
     DependencyContextMenu: ContextMenu;
}

interface GanttBaseInstance {
    /**
   * GanttControl options.
   */
    options: GanttBase;
    /**Returns the Layout element.

    Returns:
    jQuery Wrapped set.
    */
    GetLayoutElement(): JQuery;
    /**
  * Gets the context menu for a row.
  */
    RowContextMenu: ContextMenu;
    /**
   * Returns Instance of GanttChart.
   */
    GetGanttChart(): JQuery;
    /**
   * A list of FlexyNodeData instances representing the hierarchical tree resolved into a flat list.
   */
    FlatItemsSource: FlatItemsSource;
    /**
    * Returns the GanttTable element.

    Returns:  
    jQuery Wrapped set.
    */
    GetGanttTable(): GanttTableInstance;
    /**
    * Gets or sets a property that specifies how end-user specified time values should be rounded to.
    */
    RoundTimeEditsTo(options: string): void;
    /**
   * To bind an event.
   */
    bind(str: string, fn: any): void;
    /**
    * Use this utility in GanttChart to determine the location of the past due bar.
    */
    ConvertTimeToX(time: Date);
    /**
   * To refresh the gantt height.
   */
    
    UpdateLayout(): void;
    /**
    * Scrolls the horizontal scrollbar so that the AnchorTime is aligned to the splitter on the left. This method is typically called after setting a new AnchorTime.
    */
    ScrollToAnchorTime(): void;
    /**
    * Returns a value that specifies whether a header will be viewable for the current settings and for the specified TimeScaleType.

    Parameters: 
    def - The header whose visibility is to be determined.<
    baseTimeScaleType - he base TimeScaleType for which we want to determine the header visibility. 

    Returns:  
    True or false.
    */
    IsHeaderViewable(Header: RadiantQ.Gantt.TimeScaleHeaderDefinition, type: RadiantQ.Gantt.TimeScaleType): boolean;
    /**
   * Prints the Gantt with customized options.
   */
    Print(options?: PrintOptions);
    /**
    * Exports the Gantt to an image with customized options.
    */
    ExportToImage(options?: PrintOptions);
    /**
   * Sets options for the radiantqGanttTable.
   */
    radiantqGanttTable: GanttTableInstance;
    /**
    * Gets or sets the TaskContextMenu.
    */
    TaskContextMenu: ContextMenu;
    /**
  * Gets or sets the TableContextMenu.
  */
    TableContextMenu: ContextMenu;
}
interface GanttControl extends GanttBaseInstance {
    /**
    * Gets a list of GanttActivityView instance
    */
    options: GanttControlOptions;
    ActivityViews: iActivityViews;
    /**
    * Use this method to add a new activity to the gantt. In data bound scenario, the argument should be the object
    * representing the activity and this object will be added to the bound list.
    */
    AddNewItem(options: any): void;
    /**
    * Use this method to select rows in  gantt.
    */
    AddSelectedItem(options: any): void;
    /**
    * Call this method to insert a new activity to the gantt as a sibling of the specified activity. In data bound scenario, the argument should be the object
    * representing the activity and this object will be added to the bound list.
    */
    InsertNewItemAsSiblingBelow(optionalArgument: any, index: number, addToList: boolean): void;
    /**
    * Call this method to insert a new activity to the gantt as a child of the specified activity. In data bound scenario, the argument should be the object
    * representing the activity and this object will be added to the bound list.
    */
    InsertNewItemAsChildOf(optionalArgument: any, destParentIndex: number, addToList: boolean): void;
    /**
    * Removes the activity and all it's children with the specified id from the model and the view.
    */
    RemoveActivity(activityId: number): void;
    /**
    * Indents the specified activity by 1 level.
    */
    Indent(activityView: any): void;
    /**
    * Outdents the specified activity by 1 level.
    */
    Outdent(activityView: any): void;
    /**
    * Returns a IActivity instance representing the selected activity.
    */
    SelectedActivity: RadiantQ.Gantt.Model.IActivity;
    /**
   * Returns a selected Index.
   */
    SelectedIndex: number;
    /**
 * Returns a selected item.
 */
    SelectedItem: ActivityView;
    /**
    * Returns the IGanttModel instance associated with this control.
    */
    ActionManager: ActionManager;
    Model: GanttModel;
    /** 
     * Returns a list of activities that contribute to the critical path.
   
     Parameters:

     timeBuffer - Can be TimeSpan.Zero. If adding this time span to an activity's end-time would affect the project end time, then that activity is marked as Critical as well.
    
     Returns:
      A list of critical activities.
   
    */
    GetCriticalPathActivities(TimeSpan: RQTimeSpan): Array<RadiantQ.Gantt.Model.IActivity>;
    /**
    * Used to redraw the all chartRows.
    */
    RedrawChartRows(): void;
    /**
    * Filters the activities.
    */
    Filter(): void;
    /**
    * To reset the filters.
    */
    ResetFilters(): void;
    /**
   * Gets or sets the DependencyContextMenu.
   */
    DependencyContextMenu: ContextMenu;
   
    /**
   * Gets the options for the gantt dependency line.
   */
    GanttDependencyLine: GanttDependencyLine;
    /**
     * Levels the resources to avoid overallocation on the resources.
   
     Parameters:

     includeCompletingTasks -Specifies whether in-progress tasks should be leveled too.
     start - Specifies the time to which to level pending tasks to.
   */
    LevelResources(isLevel: boolean, anchorTime: Date): void;
    /** 
   * A "new" public PropertyChanged event that reflects the protected PropertyChanged event in the base class. 
    */
    PropertyChanged: ObjectEvent;
    radiantqGanttTable: GanttTableInstance;
    /*Function: ExpandAll 
    * Expands all summary tasks. All tasks will now be visible.
    */
    ExpandAll(): void;
    /*Function: CollapseAll 
    * Collapses all summary tasks and only the top-level summary tasks are visible.
    */
    CollapseAll(): void;

    ShouldEnforceDependencyConstraintsOnActivity: ObjectEvent;
    CanShiftActivity: ObjectEvent;
    CanIndent(activityview?:any): boolean;
}
/**
* Gantt Dependency line options.
*/
interface GanttDependencyLine {
    /**
   * Sets the dependenvy line bar stroke style.
   */
    DependencyLineBarStroke?: any;
    /**
   * Sets the color for the dependency line.
   */
    CustomColor?: string;
    /**
   * Sets the StartTime.
   */
    StartTime?: Date;
    /**
   * Sets the EndTime.
   */
    EndTime?: Date;
    /**
   * Sets the row height.
   */
    RowHeight?: number;
    /**
   * Sets the visibility of the dependency line.
   */
    Visibility?: string;
    PolylineGeometry? ; any;
    ArrowGeometry?: any;
    /**
    * Sets the highlighting effects for the dependency line.
    */
    HighlightEffect?: any;
    /**
    * Sets the boolean value that specifies whether the template is applied or not.
    */
    IsTemplateApplied?: boolean;
    /**
    * Sets the dependency view.
    */
    DependencyView?: any;
    GanttChart?: GanttChartOptions;
    /**
    * Sets the tooltip for the dependency line.
    */
    DependencyTooltipTemplate?: string;
    VirtualizationHeightOffset?: number;
    Parent?: any;
}
/**
* Gantt table options.
*/
interface GanttTableOptions {
    /**
    * List of columns in the gantt table.
    */
    columns?: Array<columns>
    create?: any;
    /**
    * List of the data fields in the gantt table.
    */
    dataFields?: Array<string>;
    /**
    * Boolean value represents whether the table is disabled.
    */
    disabled?: boolean;
    /**
    * Gets or sets the bool value that is used to control the odd-numbered rows background color.
    */
    EnableAlternativeRowBackground?: boolean;
    /**
    * Sets the height of the table header..
    */
    HeaderHeight?: number;
    /**
    * Sets the height style of the table header.
    */
    heightStyle?: string;
    /**
    * Boolean value represents whether the table is for ProjectGantt.
    */
    IsProjectGantt?: boolean;
    /**
   * Gantt base element.
   */
    Parent?: any;
    /**
    * Sets the height for each row in the gantt table.
    */
    RowHeight?: number;
    /**
    * Boolean value represents whether the grid virtualization is used.
    */
    UseGridVirtualization?: boolean;
    /**
    * Sets the source for the gantt table.
    */
    source?: GanttTableSource;
    iseditable?: boolean;
    editmode?: string;
}

interface GanttTableSource extends JQuery {
    /**
    * Occurs when an item in the collection changes, or the entire collection changes. (inherited from ObservableCollection<T>).
    */
    CollectionChanged: ObjectEvent;
    /**
    * Specifies the gantt widget.
    */
    gantt?: GanttControl;
    /**
    * Model of the gantt chart widget.
    */
    model?: RadiantQ.Gantt.Model.IActivity;
    /**
    * Event triggers when the visibility of the row changes.
    */
    RowVisiblityChanged?: ObjectEvent;
}
/**
* RadiantQ table column options.
*/
interface columns {
    /**
    * Culture of the table.
    */
    field?: string;
    width?: number;
    title?: string;
    isParentEditable?: boolean;
    culture?: any;
    /**
   * editor used to edit the column.
   */
    editor?: any;
    /**
    * Specifies the editor element.
    */
    editorElement?: any;
    /**
    * Specifies options of the editor.
    */
    editorOptions?: any;
    /**
    * format.
    */
    format?: any;
    /**
    * Boolean value represents whether the column is editable.
    */
    iseditable?: boolean;
    /**
    * Boolean value represents whether the parent cell is editable.
    */
    isparentcelleditable?: boolean;
    /**
    * Label for the column.
    */
    label?: string;
    /**
  * property to edit.
  */
    property?: string;
    /**
  * template to name.
  */
    template?: string;
    /**
   * property's datatype.
   */
    type?: any;
}

interface FlatItemsSource {
    /**
    * Returns the resource.
    */
    GetItemFromDataSource(resource: Resource)
}
interface Resource {
    /**
    * Sets the Project StartTime.
    */
    PEndTime?: Date;
    /**
    * Sets the Project EndTime.
    */
    PStartTime?: Date;
    /**
    * Sets the Resource Name.
    */
    RName?: string;
    /**
    * Sets the Tasks for the resource.
    */
    Tasks?: RadiantQ.Gantt.Model.IActivity;
}
interface ActionManager {
    EnableRecordingActions: boolean;
    RecordAction(addAction?: any): void;
    Undo(): void;
    Redo(): void;
}
interface GanttModel {
    /**
    * Event triggers when the bound object value changes.
    */
    ActivityUpdated: ObjectEvent;
    /**
    * To generate a new id.
    */
    GetNewID(): number;
    ResourceCapacityProvider: ObjectEvent;
    /**
    * The underlying activity that this view represents.
    */
    IActivity: RadiantQ.Gantt.Model.IActivity;
    /**
    * Takes id of the activity and returns the activity.
    */
    GetActivityById(id: number): RadiantQ.Gantt.Model.IActivity;
    /**
        Gets or sets a value that indicates whether activity times should be constrained based on dependencies.
        Default is true. Set this to false 
        while binding a data source with the gantt when the start times in the bound data source are known to be already constrained.
        This will greatly improve load time 
    */
    EnforceDependencyConstraints?: boolean;
    /** 
      Gets or sets a value that indicates whether newly added dependencies should be validated for appropriateness.
      For example, a task cannot have a dependency on it's parent/summary task. Default is true. Set this to false 
      while binding a data source with the gantt when the dependencies in the bound data source are known to be valid.
      This will greatly improve load time. 
    */
    ValidateDependencySetting?: boolean;
    GetResourceActivityList(resource: Resource): Array<Resource>;
}
/**
* Grid editor options.
*/
interface gridEditor {
    /**
   * start editing call back.
   */
    start? (event: any, ui: gridEditorUI): void;
    /**
   * submit call back.
   */
    submit?: any;
    /**
    * Boolean value represents whether the loaded gantt is Project Gantt.
    */
    IsProjectGantt?: boolean;
}
/**
* GridEditorUI options.
*/
interface gridEditorUI {
    /**
    * bound Oject.
    */
    data?: any;
    /**
   * grid instance.
   */
    grid?: any;
    /**
  * editor element.
  */
    input?: JQuery;
    /**
  * property name.
  */
    property?: string;
}
interface Binding {
    /**
    * Property to bind.
    */
    Property: string;
    /**
    * Converter to convert the bound value to required value.
    */
    Convert?: any;
}

interface ExpandableTextBox {
    /**
   * Converts the given value to the required value.
   */
    Converter?: any;
    /**
   * Converts back to the original value.
   */
    ConverterBack?: any;
}

/**
* GanttBase Options
*/
interface GanttBase {
    /**
    * List of tasks
    */
    DataSource?: any;
    /**
   * Specifies the StartTime of the ganttchart.
   */
    AnchorTime?: Date;
    /**
    * GanttTable
    */
    GanttTable?: JQuery;
    /**
    *To sync the chart and table row background color.
    */
    SyncRowBackgrounds?: boolean;
    GanttChartTemplateApplied? (sender: any, args?: any): void;
    /**
    * Gets or sets the TaskStartTimeProperty.
    */
    TaskStartTimeProperty?: string;
    /**
   * Gets or sets the GanttTableRowLoadedCallBack method .This method will be called when the GanttTable row loads.
    */
    GanttTableRowLoadedCallBack?: any;
    /**
    * Gets or sets the TaskItemTemplate.
    */
    TaskItemTemplate?: string;
    /**
    * Gets or sets the TaskEndTimeProperty.
    */
    TaskEndTimeProperty?: string;
    /**
    * Gets or sets the TasksListProperty.
    */
    TasksListProperty?: string;
    /**
    *Gets or sets the TaskTooltipTemplate.
    */
    TaskTooltipTemplate?: string;
    /**
    * Gets or sets the ParentTaskEndTimeProperty.
    */
    ParentTaskEndTimeProperty?: string;
    /**
    * Gets or sets the ParentTaskStartTimeProperty.
    */
    ParentTaskStartTimeProperty?: string;
    /**
    * Gets or sets the ParentTaskItemTemplate.
    */
    ParentTaskItemTemplate?: string;
    /**
    * Gets or sets the KnockoutObjectName.
   */
    KnockoutObjectName?: string;
    /**
    * The template that will be used to render the left arrow button in the browse-to task cue displayed to the left of a row, when the task is outside and to the left of the view.
       This cue will automatically display when a template is provided.
    */
    TaskBarBrowseToCueLeftTemplate?: string;
    /**
    * The template that will be used to render the right arrow button in the browse-to task cue displayed to the right of a row, when the task is outside and to the right of the view. 
        This cue will automatically display when a template is provided.
    */
    TaskBarBrowseToCueRightTemplate?: string;
    /**
    * Gets or sets the UseChartVirtualization.
    */
    UseChartVirtualization?: boolean;
    /**
  * MovingInfoPopup element.
  */
    MovingInfoPopup?: string;
    /**
  * ResizeInfoPopup element.
  */
    ResizeInfoPopup?: string;
    /**
   * if the time units in a header are shrunk to less than the specified size (while zooming out for example), the whole header will be hidden.
     Default is 10px. Value cannot be less than 10. Also, while zooming out, the user cannot shrink the time-units in the top-most header to a width
     that is smaller than this value
   */
    MinTimeUnitWidthForHeaderVisibility?: number;
    /**
   * Specifies a list of RadiantQ.Gantt.SpecialLineInfoSpecialLineInfo
       instances. The default list includes a special line for Today.
   */
    SpecialLineInfos?: any;
    /**
   *Gets or sets a property that specifies how end-user specified time values should be rounded to.
   */
    RoundTimeEditsTo?: any;
    /**
  * Gets or sets a list of RadiantQ.Windows.Controls.Gantt.TimeScaleHeaderDefinition.definitions. The 1st item will be rendered on top in the header and the last item we rendered at the bottom in the header.This list specifies the headers that are to be used in the chart view. The BaseTimeScaleUnitWidth defines the horizontal space taken by each header. Ensure that the different time scale headers are added in appropriate order. For example, days should be added after weeks and not the other way.
   */
    TimeScaleHeaders?: any;
    FilterActivites? (activity: RadiantQ.Gantt.Model.IActivity): boolean;
    /**
    * Specifies the width that will be allocated to the base time unit in the gantt chart. Default is 25.
    * The base time unit is the time-unit based on which the tasks are laid out in gantt chart and could be either Days or Hours and is specified by
    */
    BaseTimeUnitWidth?: number;
    ComputedStartTime?: Date;
    ComputedEndTime?: Date;
    /**
    * The buffer to apply before and after the chart's view span when filtering tasks to show within that span, when UseTimeRangeFilteredTasksInRows is set to true.
    */
    TimeRangeFilteredTasksTimeBuffer?: string;
    /** 
    * Gets or sets virtualization value.
    */
    UseVirtualization?: boolean;
    /**
    * Gets or sets CanUserReorderRows value.
    */
    CanUserReorderRows?: boolean;
    /**
    * Gets or sets EnableDropAsChild value.
    */
    EnableDropAsChild?: boolean;
    /**
    * Gets or sets virtualization value.
    */
    OnTaskBarLoad? (taskItemControl: any): void;
    /**
      Listen to this event and Used to customize the selected items before it dragging.
    */
    SelectedRowsDrag?: ObjectEvent;
    /**
      Listen to this event and Used to customize the dropping items on it drop.
    */
    SelectedRowsDrop?: ObjectEvent;
    /**
      Listen to this event and Used to customize the dropped items after it dropped.
    */
    SelectedRowsDropped?: ObjectEvent;
    /**
   * Specifies if realized nodes are automatically expanded. Default is true. load the tree fully-expanded or collapsed. 
   */
    AutoExpandNodes?: boolean;

    GanttTableOptions?: GanttTableOptions;
}

interface specialLine extends Array<RadiantQ.Gantt.SpecialLineInfo> {
    /**
   * Takes special line info and adds the line.
   */
    add? (value: RadiantQ.Gantt.SpecialLineInfo): void;

}
/**
* Ganttcontrol Options
*/
interface GanttControlOptions extends GanttBase {
    /**
    * Specifies the project start date. This date will be used when StartTime is not available for a task.  Set this before assigning the Source of the control.
    */
    ProjectStartDate?: Date;
    /**
    * Gets or sets the binding information that will return a value (convertible to int) from
     the source task item, indicating the id for the activity.Setting this is
     mandatory for data bound instances of the gantt control.Set this in XAML or before initializing the ItemsSource
     with a source collection.
    */
    IDBinding?: Binding;
    /**
    * Gets or sets the binding information that will return a value (convertible to int)
        from the source task item, indicating the sort order for the activity.
     Setting this is optional for data bound instances of the gantt control.

     When an activity is repositioned by the end user(or programatically) the order
     of the activity in the bound data source needs to be updated.This is possible
        only by including a field that indicates it's sort order.
        If this is not set, any reordering information will not be persisted.
    */
    SortOrderBinding?: Binding;
    /**
    * Gets or sets the binding information that will return a string value from
     the source task item, indicating the name for the activity(will be used to set IActivity.ActivityName).Setting this is
        mandatory for data bound instances of the gantt control. 
    */
    NameBinding?: Binding;
    /**
    * Gets or sets the binding information that will return a value (convertible to int) from
     the source task item, indicating the indent level for the activity.Setting this is
     mandatory for data bound instances of the gantt control. 
    */
    IndentLevelBinding?: Binding;
    /**
    * Gets or sets the binding information that will return a value (convertible to DateTime) from
     the source task item, indicating the start time for the activity(will be used to set IActivity.StartTime).Setting this is
        mandatory for data bound instances of the gantt control.
    */
    StartTimeBinding?: Binding;
    /**
    *  Gets or sets the binding information that will return a value (convertible to DateTime) from
      the source task item, indicating the preferred start time for the activity(will be used to IActivity.PreferredStartTime).Setting this is
         optional for data bound instances of the gantt control.

     The StartTime of an activity refers to the current start time which could have been computed based on the
        dependencies and parent - child hierarchies that are in the gantt.But, this property refers to the preferred
        start time for this activity.So, the gantt will try to anchor the activity to this time whenever possible.
    */
    PreferredStartTimeBinding?: Binding;
    /**
    * Gets or sets the binding information that will return a value (convertible to DateTime) from
     the source task item, indicating the preferred start time for the activity(will be used to IActivity.PreferredStartTime).Setting this is
     optional for data bound instances of the gantt control.

     The StartTime of an activity refers to the current start time which could have been computed based on the
        dependencies and parent - child hierarchies that are in the gantt.But, this property refers to the preferred
        start time for this activity.So, the gantt will try to anchor the activity to this time whenever possible.
    */
    EffortBinding?: Binding;
    /**
    * Gets or sets the binding information that will return a string value from
     the source task item, indicating the predecessors for the activity(will be used to set IActivity.PredecessorIndexString).Setting this is
     optional for data bound instances of the gantt control.
    */
    PredecessorIndicesBinding?: Binding;
    /**
    *  Gets or sets the binding information that will return a value (convertible to double) from
      the source task item, indicating the progress info for the activity(will be used to set IActivity.ProgressPercent).Setting this is
         optional for data bound instances of the gantt control. 
    */
    ProgressPercentBinding?: Binding;
    /**
    *   Gets or sets the binding information that will return a string value from
     the source task item, indicating the description for the activity(this value is currently not used
     in the implementation).Setting this is optional for data bound instances of the gantt control. 
    */
    DescriptionBinding?: Binding;
    /**
    *   The data source list containing a list of objects representing the resources
     that can be assigned to each activity. Set this before setting the Source option.It's typical to set the AssignedResourcesBinding options as well, when you set this. The ResourceNameBinding
     property defines how the name of each resource can be retrieved from this data source (if this is a list of objects, instead of a list of strings).
     Note that you can also add a list of strings for this property, in which case
     the ResourceNameBinding property need not be set
    */
    ResourceItemsSource?: any;
    /**
    *   Gets or sets the binding information that will return a string from the
     source resource item(specified in the ResourceItemsSource list) indicating the name for the resource.
     Setting this is optional.If you do not set this, the bound resource item's (if any) "toString" will be used as the resource name in the gantt.           
    */
    ResourceNameBinding?: Binding;
    /**
    * Gets or sets the binding information that will return a string from the
     source resource item(specified in the ResourceItemsSource list) indicating the ID for the resource.
     This will be used to resolve the comma - separated resource assignments string in a task.
     Setting this is optional.If you do not set this, the ResourceNameBinding will be used to resolve the assignments string instead.
    */
    ResourceIDBinding?: Binding;
    /**
    * Gets or sets the binding information that will return a WorkTimeSchedule
     instance from the source resource item(specified in the ResourceItemsSource
        list) that defines the resource's schedule. Setting this is optional. If not
         set, the resource will inherit the same schedule as the overall project.
         Typically, you could bind this to a string property in your resource type and
         convert it into a WorkTimeSchedule.

     The custom schedule can be represented as a string like this:

         new ResourceInfo() {
     ResourceID: 2, ResourceName :
         Resource 2, CustomScheduleString : MON 8:00:00 16:00:00; TUE
         8:00:00 16:00:00; WED 8:00:00 16:00:00; THU 8:00:00 16:00:00
       } 

         In which case this property would be set as:

    ResourceNameBinding = { Property: ResourceName } ResourceScheduleBinding = { Property: CustomScheduleString, Converter= {StaticResource stringToWorkTimeScheduleConverter } };

     RadiantQ.Gantt.StringToWorkTimeScheduleConverter  is a converter that will convert the string into a WorkTimeSchedule
         instance
    */
    ResourceScheduleBinding?: Binding;
    /**
    * Gets or sets the binding information that will return a string of resource names from the
     source task item, indicating the resources assigned to the corresponding
        activity. Setting this is optional.
    */
    AssignedResourcesBinding?: Binding;
    /**
    * Gets or sets a value that defines how many hours one unit of the lag string in predecessors string represents. Set this before setting the ItemsSource property. Default is 1. 
    */
    CanInsertPropertyChangeTriggeringPropertiesInData?: boolean;

    /**
     * Allows you to turn on certain highlighting behaviors as listed in GanttControlHighlightBehavior.
     */
    TimeRangeHighlightBehavior?: RadiantQ.Gantt.TimeRangeHighlightBehavior;
    /**
     * Gets or sets the WorkTimeSchedule that defines the working time schedule for the project.
     */
    WorkTimeSchedule?: RadiantQ.Gantt.WorkTimeSchedule;
    /**
     * Gets or sets a value that indicates whether activity times should be constrained based on dependencies.
         Default is true. Set this to false 
         while binding a data source with the gantt when the start times in the bound data source are known to be already constrained.
         This will greatly improve load time 
     */
    EnforceDependencyConstraints?: boolean;
    /**
    * Gets or sets a value that indicates whether newly added dependencies should be validated for appropriateness.
        For example, a task cannot have a dependency on it's parent/summary task. Default is true. Set this to false 
        while binding a data source with the gantt when the dependencies in the bound data source are known to be valid.
        This will greatly improve load time. 
    */
    ValidateDependencySetting?: boolean;
    /**
    * A custom logic that will be used, if available, to calculate the progress value of a summary bar. Set this before setting the ItemsSource property.
    */
    CustomProgressCalculationCallback? (parentActivity: RadiantQ.Gantt.Model.IActivity): number;
    /**
    * The template defined in GanttControl that lets you draw adornments over the task bar.
    */
    TaskBarBackgroundTemplate?: string;
    /**
    * Gets or sets the ProgressBarTemplate.
    */
    ProgressBarTemplate?: string;
    /**
    * The template defined in GanttControl that lets you draw Background the task bar.
    */
    TaskBarAdornerTemplate?: string;

    /**
   *Gets or sets a value that defines how many hours one unit of the lag string in predecessors string represents. Set this before setting the ItemsSource property. Default is 1. 
   */
    LagStringUnitsInHours?: any;

    /**
  *Gets or sets the width of the GanttTable area. default is 20%.
  */
    TablePanelWidth?: any;
    /**
  *Gets or sets a value that specifies whether the required efforts are editable by the end-user. Default is false.
  */
    IsEffortReadOnly?: boolean;
    /**
  *Gets or sets the binding information that will return a bool value indicating whether a task's times are editable in the table and chart.
  */
    IsTaskReadOnlyBinding?: Binding;
    /**
  * Reduces or increases the duration of the task when resources are assigned to or excluded from it. Set this before setting the ItemsSource property. Changes to this setting after
    the ItemsSource is set are ignored.
   */
    AdjustDurationOnAssignment?: boolean;
    /**
   * A set of custom ranges that will be rendered in the chart's background with each range's content defined in the CustomRangeInfo.DataTemplate. Gets or sets RadiantQ.Gantt.GanttBase.CustomChartBackgroundRanges
   */
    CustomChartBackgroundRanges?: any;
    TimeScalePagerButtonVisisbility?: boolean;
    /**
    * Will resize the chart to fit the view. Users can then use then ctrl + mouse drag the headers to pan the view and mouse drag to zoom.
    */
    ResizeToFit?: boolean;
    /**
    * This specifies how much the end-user can zoom-out using the mouse wheel or the zoom-slider.
       Default value is 100. Provide a lower value based on what and how many time scales you choose to display in the headers.
       The base time unit is the time-unit based on which the tasks are laid out in gantt chart and could be either Days or Hours and is specified by
    */
    BaseTimeUnitWidthMaximum?: number;
    /**
   * This specifies how much the end-user can zoom- in using the mouse wheel or the zoom - slider.
      Default value is 10. Provide a higher or lower value based on what and how many time scales you choose to display in the headers.
    */
    BaseTimeUnitWidthMinimum?: number;
    BeforeZooming? (sender: any, args: BeforeZoomingArgs): void;
    /**
    *Set the binding information that will return a value (convertible to
    string) from the source task item, indicating the WBS for the activity and into which the auto-generated WBS will be persisted.
    Setting this is optional.  
    *If you
    do, set this in XAML or before initializing the ItemsSource with a source collection.
    The GanttControl.ProvideWBSID handler will have to be set for the auto WBS generation to kick in.
    */
    WBSIDBinding?: Binding;
    ProvideWBSID?: any;
    FilterOptions?: RadiantQ.Gantt.Utils.FilterOptions;
}

interface BeforeZoomingArgs {
    /**
   * Boolean value specifies the value whether the chart is zoomedin.
   */
    ZoomedIn: boolean;
}

declare module RadiantQ {

    //RadiantQ.ExcelModel.ExcelModel()
    export module ExcelModel {
        export class ExcelModel {
            saveTo(tasks: Array<any>);
        }
        function ExcelTask(): void;
         
    }
    export module ProjectModel {
        function Project(tasks: any): void;
    }
    export class Culture {
       static Load(cultureName:string);
    }
    export class ValueConverter {
    }
    export function BindingOptions(property: string, mode?: any, converter?: any): void;
    export function Template(expresion: string, data?: any);
    export module Gantt {
        export class AddAction {
            constructor(ganttControl?: GanttControl, newTask?: any);
        }
        export class InsertAction {
            constructor(ganttControl?: GanttControl, selectedItem?: any, newTask?: any, asChild?: boolean);
        }
        export class DeleteAction {
            constructor(ganttControl?: GanttControl, act?: any);
        }
        export class IndentAction {
            constructor(ganttControl?: GanttControl, act?: any);
        }
        export class OutdentAction {
            constructor(ganttControl?: GanttControl, act?: any);
        }
        export class MoveSelectedItemsUpAction {
            constructor(ganttControl?: GanttControl);
        }
        export class MoveSelectedItemsDownAction {
            constructor(ganttControl?: GanttControl);
        }
        export class SetStartTimeAction {
            constructor(ganttControl?: GanttControl, activity?: any, newStartTime?: Date, oldPrefStartTime?: Date, oldStartTime?: Date, ignoreFirst?: boolean);
        }
        export class SetEndTimeAction {
            constructor(ganttControl?: GanttControl, activity?: any, newEndTime?: Date, oldPrefStartTime?: Date, oldEndTime?: Date, ignoreFirst?: boolean);
        }
        export class SetDurationAction {
            constructor(ganttControl?: GanttControl, activity?: any, newDuration?: RQTimeSpan);
        }
        export class CreateNewDependencyAction {
            constructor(model?: any, from?: any, to?: any, ignoreFirst?: boolean);
        }
        export class DeleteDependencyAction {
            constructor(model?: any, dep?: any, ignoreFirst?: boolean);
        }
        export class SetProgressValueAction {
            constructor(act?: any, newPP?: any, ignoreFirst?: boolean);
        }
        export class ExpandCollapseActivityViewAction {
            constructor(gc?: GanttControl, actView?: any, expand?: any);
        }
        export class GenericCellChangeActionInGrid {
            constructor(source?: any, propName?: any, oldValue?: any, newValue?: any, ignoreFirst?: boolean);
        }
        export class MoveRowsAction {
            constructor(gc?: GanttControl, start?: any, count?: any, end?: any);
        }    
        export class Dictionary {
            constructor();
            /**
            * To add a Item to Dictionary
            */
            Add(key: any, value: any): void;
            /**
            * To check the item is exist
            */
            Contains(value: any): boolean;
            /**
            * To remove the item by index.
            */
            Remove(value: number): void;
            /**
            * To remove the item.
            */
            Remove(value: any): void;
            /**
            * Returns the index value.
            */
            indexof(value: number): number;
            /**
           * Returns value.
           */
            GetItemByKey(value: any): any;
            /**
           * Returns values.
           */
            asArray: Array<any>;
            keys: Array<any>;
        }
        export class TimeRangeHighlightBehavior {
            /**
            * Highlights the corresponding region in the chart when the mouse hovers over a time span header.
            */
            public static HighlightInChartOnHeaderMouseHover: number;
            /**
            * None.
            */
            public static None: number;
        }
        export class DependencyType {
            /*property: FinishToStart 
     Constrains the start of the 2nd activity to be no earlier than the finish of the 1st activity.
    */
            public static FinishToStart;
            /*property: StartToStart 
             Constrains the start of the 2nd activity to be no earlier than the start of the 1st activity.
            */
            public static StartToStart;
            /*property: FinishToFinish 
             Constrains the finish of the 2nd activity to be no earlier than the finish of the 1st activity.
            */
            public static FinishToFinish;
            /*property: StartToFinish 
             Constrains the finish of the 2nd activity to be no earlier than the finish of the 1st activity.
            */
            public static StartToFinish;
            /*property: None 
              No constraint.
            */
            public static None;
        }
        export class WorkTimeSchedule {
            constructor(name?: string, scheduleProvider?: any);
            /**
            An implementation of WorkTimeScheduleProvider delegate that does not define any non-working time or days.
            Returns:
            A TimePeriodCollection that contains the working hours for the specified date.
            */
            public static Schedule24X5: Schedule;
            /**
            * A WorkTimeSchedule based on the EightDaysByFiveHoursScheduleProvider implementation.
            */
            public static Schedule8X5: Schedule;
            /**
            An implementation of WorkTimeScheduleProvider delegate that marks Saturday and Sunday as holidays and marks 8AM to 4PM as the working hours for the remaining days.
    
            Remarks:
            You can create a new instance of the WorkTimeSchedule using this schedule provider as follows:
            var eightByFiveSchedule = new WorkTimeSchedule("8X5 Schedule", new WorkTimeScheduleProvider(WorkTimeSchedule.EightHoursByFiveDaysScheduleProvider));
         
            Parameters:
            date - A date for which a TimePeriodCollection is required.
    
            Returns:
            A TimePeriodCollection that contains the working hours for the specified date.
            */
            public static EightHoursByFiveDaysScheduleProvider(date: Date): void;
        }
        export class Calendar {
            constructor(id: any, weekDays?: string, name?: string);
            /**
            Creates a schedule based on a string defining the schedule.

            Parameters: 
            scheduleDefitionString - A string defining the schedule of the form "MON 08:30:00 12:30:00, 13:30:00 17:30:00; TUE 9:30:00 5:30:00; WED.....;HOL (Culture Agnostic Date), (another one etc.)
            */
            public static CreateCalendarFromScheduleString(scheduleDefitionString: string): void;
            /**
           Creates a list based on a string defining the schedule.

           Parameters: 
           scheduleDefitionString - A string defining the schedule of the form "MON 08:30:00 12:30:00, 13:30:00 17:30:00; TUE 9:30:00 5:30:00; WED.....;HOL (Culture Agnostic Date), (another one etc.)

           Returns:
           A string that conatins the week day list.
           */
            public static CreateWeekDayList(scheduleDefitionString: string): string;
            /**
            Creates a schedule given a calendar instance.

            Parameters: 
            calendar - A calendar instance.

            Returns:  
            A newly created schedule.
            */
            public static CreateSchedule(calendar: any);
        }
        export class CalendarWithExceptions {
            constructor(baseCalendar: any, exceptionsDefinitionString: string);
            /**
            Creates a WorkTimeSchedule for the specified CalendarWithExceptions.

            Parameters: 
            expCalendar - CalendarWithExceptions.

            Returns:
            WorkTimeSchedule
            */
            public static CreateWorkTimeSchedule(expCalendar: any): WorkTimeSchedule;
        }
        export class Utils {
            public static SaveCanvasAsImage(canvas: JQuery, filename: string): void;
            public static DelayUpdates(): void;
        }
        export module Utils {
            function InjectGetAndSetOnData(object, key): void;
            class TimeComputingUtils {
                static GetTimeBreaks(viewStart: Date, viewEnd: Date, schedule: Schedule, TimeBreaks: Array<Date>);
                static ConvertTimeSpanToTimeUnits(baseScaleType: number, timespan: RQTimeSpan);
                static ConvertTimeUnitsToTimeSpan(BaseTimeScaleType: number, width: number);
                static GetTimeSpan(startDate: Date, endDate: Date);
            }
            function InsertPropertyChangedTriggeringProperty(data: any, IDProperty: any,predecessorProperty: boolean): void;
            export class FilterOptions {
                /// <summary>
                /// Specifies if summary/parent tasks should always be shown or hidden if all it's children are hidden. Default is false (summary will be hidden if all children are hidden).
                /// </summary>
                public AlwaysShowSummaryTask: boolean;
            }
        }
        export module Utils {

            /**
            * Generates image from the canvas that holds the gantt.

            Parameters:
            canvas - Holds the gantt.
            filename - Filename of the image.
            */

            /**
            * Some utility types that could be of use to you in some very special scenarios.
            */
            // public static GanttChartTimeScaleHeaderSettings(headerDefinition: TimeScaleHeaderDefinitions): HeaderSettings;

            class GanttChartTimeScaleHeaderSettings {

                constructor(headerDefinition: TimeScaleHeaderDefinitions);

                /**
                 * Specifies whether a set number of headers should be shown (as defined in MaximumTimeScaleHeadersCount). Default is true.
                 */
                public AutoHidingTimeScaleHeaders;
                /**
                * Specifies the max width for the bottom most header time unit that the user can zoom out to. Default is 35. Has to be > 10 and < 100.
                */
                BottomHeaderMaxWidth;
                /**
               * Specifies the default width with which to render the bottom most header. Default is -1. Leave it at -1, if you want this utility to pick a right value for you. Specify a very low
               * value if you want some of the bottom most headers to be hidden by default.
               */
                DefaultBottomHeaderWidth;
                /**
                * Specifies whether the gantt is project gantt.
                */
                IsProjectGantt;
                /**
               * Maximum number of headers you want to visualize at a time. Default is 2. Cannot be less than 2. During runtime, fewer headers could be shown if the users zooms-out too much. You can minimize
               * how much the user can zoom-out by specifying a higher TopHeaderMinWidth.
               */
                MaximumTimeScaleHeadersCount;
                /**
                 ResizeToFit
              */
                ResizeToFit;
                /**
                *The minimum width for the top most header, below which you cannot zoom into.Default is 40.
                */
                TopHeaderMinWidth;
                /**
                *The different time scale headers that you want to be shown for the chart. Some could be hidden based on the zoom level.
                */
                TimeScaleHeaders(value: any): any;
                /**
                *Ganttcontrol/flexyGantt element to apply this settings.
                */
                BoundGantt(value: JQuery): void;
            }

        }
        /**
        *Gets or sets a property that specifies how end-user specified time values should be rounded to.
        */
        export class RoundTimeEditsTo {
            /**
            * Specifies how user specifies times should be rounded to.
            */
            public static RoundToOptions: RoundToOptions;
        }
        /**
        * Specifies how user specifies times should be rounded to.
        */
        export class RoundToOptions {
            /**
            Specifies not to round up.
            */
            public None: Date;
            /**
            Rounds up to the next day.
            */
            public static Day: Date;
            /**
           Rounds up to the next hour.
           */
            public static Hour: RQTimeSpan;
            /**
           Rounds up to the next minute.
           */
            public static Minute: RQTimeSpan;
            /**
            Currently uses fifteen minute rounding.
            */
            public static Auto: Date;
            /**
           Rounds up to the 12AM and 12PM.
           */
            public static HalfDay: Date;
            /**
           Rounds up to the next thirty minutes.
           */
            public static ThirtyMinutes: RQTimeSpan;
            /**
           Rounds up to the next fifteen minutes.
           */
            public static FifteenMinutes: RQTimeSpan;
        }
        /**
        A list of TimePeriod instances.

        Parameters:
        collection - A set of initial values.
        */
        export class TimePeriodCollection {
            constructor(collection?: Array<RQTimeSpan>);
            /**
            Adds the specified interval to the collection

            Parameters: 
            timePeriod - The interval to add.
            */
            Add(timeperiod: any): void;
            /**
            Adds a reange of time intervals.

            Parameters: 
            timeIntervals - The range of time intervals.
            */
            AddRange(timeIntervals: number): void;
            /**
            Converts this list into a list of TimePeriod instances ascending by their Start value.
            */
            Ascending(): Array<number>;
            /**
            Converts this list into a list of TimePeriod instances descending by their Start value.
            */
            Descending(): Array<number>;
            /**
            The number of TimePeriod instances in this list.
            */
            Count(): number;
        }
        /**
        Type that specifies a time interval - start, end and duration.

        Parameters:
        start - The specified start time.
        finish - The specified finish time.(pass null when you were passing duration as arg)
        duration - The specified duration for the TimePeriod. (pass null when you have passed finsh date)
        */
        export class TimePeriod {
            constructor(start?: Date, finish?: Date, duration?: RQTimeSpan, isReadOnly?: boolean);
        }

        export class ValueConverters {
            public static SortIDAsPredIDConverter: SortIDAsPredIDConverter;
            public static ConverterUtils: ConverterUtils;

        }
        enum ChartZoomOptions {

            /* property: None 
            Turns off all zooming capabilities.
            */
            None= 0,
            /* property: ShowZoomSliderInHeader
            Shows the zoom slider in the header when the mouse moves over the header.
            */
            ShowZoomSliderInHeader= 0x01,
            /* property: MouseWheelZoomOnTimeScaleHeaders
            Zooms when using the mouse wheen on the time scale header.
            */
            MouseWheelZoomOnTimeScaleHeaders= 0x02,
            /* property: MouseWheelZoomOnGanttChart
            Zooms when mouse wheel is used on the gantt chart.
            */
            MouseWheelZoomOnGanttChart= 0x04,
            /* property: LeftMouseButtonDownDrag
            Zooms when left mouse down on the time span header and dragged.
            */
            LeftMouseButtonDownDrag= 0x08
        }
        enum TimeScaleType {
            /**
            * Divide time scale by minutes.
            */
            Minutes= 90,
            /**
            * Divide time scale by hours.
            */
            Hours= 180,
            /**
            * Divide time scale by days
            */
            Days= 270,
            /**
            * Divide time scale by weeks
            */
            Weeks= 360,
            /**
            * Dividetime scale  by months
            */
            Months= 450,
            /**
            * Divide time scale by years
            */
            Years= 540,
            /**
            * Divide time scale by custom intervals specified via the TimeScaleHeaderDefinition.ProvideCustomTimeIntervals.
             event.
            */
            Custom = 630
        }
        /**
        Defines a time-scale header for the gantt chart view.
        */
        export class TimeScaleHeaderDefinition {
            constructor();
            /**
            Gets or sets the RadiantQ.Gantt.TimeScaleType.
            */
            public Type: TimeScaleType;
            /**
            Listen to this event and provide the custom time intervals when this instance's
            <TimeScaleHeaderDefinition.Type> is set to <Custom>.
            */
            public static ProvideCustomTimeIntervals: ObjectEvent;
            /**
            Listen to this event and provide the custom text for the header when this instance's <TimeScaleHeaderDefinition.Type> is set to <Custom>. 
            */
            public ProvideCustomHeaderText: ObjectEvent;
            public TimeUnitsCache: RadiantQ.Gantt.TimeUnitsCache;
            public _name: string;
            /**
            Specifies the width that will be allocated to the base time unit in the gantt chart.
            */
            public BaseTimeUnitWidth: number;
            /**
            Returns the time-scale type of the bottom most header.
            */
            public BaseTimeScaleType: TimeScaleType;
            /**    
            Specifies the format of the header text. Refer to the Date.toString class reference for
            more info on available format strings. You can optionally specify multiple formats separated by a "|" to let the gantt decide the best fit based on the available width
            for the time unit in the time span header. The gantt will try rendering the first format and if it doesn't fit, try the next format and so on.
            Alternatively, leave this at Empty String to automatically use the appropriate text based on the current culture.      
            */
            public TextFormat: string;
            /**

            */
            public Template: string;
            /**    
            The height for this header. Default is 22 in which case the height will be calculated automatically.   
            */
            public HeaderHeight: number;
            /**
            Creates a clone of this instance, copying over the event handlers as well.  

            Returns:
            A copy of this instance.  
            */
            public Clone: any;
            /**
              header name
           */
            public name(name: string): string;
            /**
            Provide this hint to allow the gantt to intelligently determine a header's
            visibility when it's Type is set to Custom. The hint need not be
            accurate. If you are providing a custom monthly header, specify it's <EquivalentType>
            as <Months> <EquivalentUnits> to 31.
            */
            public CustomTimeScaleTypeHint: CustomTimeScaleTypeHint;
            /**
            Listen to this event and provide the custom time intervals when this instance's
            <TimeScaleHeaderDefinition.Type> is set to <Custom>.
            */
            public ProvideCustomTimeIntervals: ObjectEvent;
            /**
            * To add new TimeScaleHeaderDefinition.
            */
            public add(value: TimeScaleHeaderDefinition): TimeScaleHeaderDefinition;
            /**
            * To check the TimeScaleHeaderDefinition is exist.
            */
            public contains(value: TimeScaleHeaderDefinition): boolean;
            /**
            * To insert new TimeScaleHeaderDefinition
            */
            public insert(index: number, value: TimeScaleHeaderDefinition): void;
        }
        /**
        Specifies the type of time scale to use in the <TimeScaleHeaderDefinition>.
        */
        export class SpecialLineInfo {
            constructor();
            /**
            The tooltip for the line.
            */
            public ToolTipText: string;
            /** 
            The color for the line.
            */
            public LineColor: string;
            /**
            The DateTime at which to draw the line in the chart.
            */
            public LineDateTime: Date;
        }
        export class TimeUnitsCache {
            constructor();
            public _timeUnitsByRange: RadiantQ.Gantt.Dictionary;
            public GetRangeString: any;
            public SetTimeUnitsCacheForRange: any;
        }
        /**
        Use this to convert a "custom schedule string" to a WorkTimeSchedule instance.
        */
        export class StringToWorkTimeScheduleConverter {
            constructor();
        }
        /**
        Use this to Generate gradient image url by providing coordinate values and stops.
        */
        function GetGradientImageURL(coOrdinates: setGradientAsBackgroundCoOrdinates, stops: Array<setGradientAsBackgroundStops>);
        /**
        A collection of TimeScaleHeaderDefinition instances.
        */
        export class TimeScaleHeaderDefinitions {
            constructor();
            /**
            Returns the TimeScaleHeaderDefinition by the specified index.
      
            Parameters:

            index - An index into the array.    

            Returns:
            A TimeScaleHeaderDefinition instance by the specified index.
            */
            public getById(id: number): TimeScaleHeaderDefinition;
            /**
            Returns the TimeScaleHeaderDefinition by the specified timescale type.
      
            Parameters: 
            type -The TimeScaleType to lookup.

            Returns:
            A TimeScaleHeaderDefinition instance by the specified timescale type.
            */
            public getByType(type: TimeScaleType): TimeScaleHeaderDefinitions;
            /**
            Inserts a TimeScaleHeaderDefinition at the right position. For example, a <Day> header is always inserted after the Week header, if any and so on. 
      
            Parameters: 
            def -The header definition to insert.

            */
            public insertInOrder(def: TimeScaleHeaderDefinition): void;
            /**
            Removes the TimeScaleHeaderDefinition of the specified type.
      
            Parameters: 
            type -The TimeScaleType you want to remove.

            */
            public removeType(type: TimeScaleType): void;
            /**
            Compares the contents of one list with another and determines equality. 
      
            Parameters:

            left - instance of the  <TimeScaleHeaderDefinitions>
            right - instance of the  <TimeScaleHeaderDefinitions>
            */
            public IsContentEqual(): boolean;
            /**
           Returns the copy of the instance
      
           Returns:
           Copy of the Instance.
           */
            public Clone(): TimeScaleHeaderDefinitions;
            /**  
            To check the equality of the instance

            Returns:
            true or false
            */
            public IsEqual(): boolean;
            /**  
            To check whether the index is valid or not.

            Returns:
            true or false
            */
            public isValidateIndex(index: number): boolean;
            /**  
            To add new instance of TimeScaleHeaderDefinition.

            Returns:
            Instance of TimeScaleHeaderDefinition
            */
            public add(value: TimeScaleHeaderDefinition): TimeScaleHeaderDefinition;
            /**  
            To check the availability of the instance.

            Returns:
            true or false
            */
            public contains(value: TimeScaleHeaderDefinition): boolean;
            /**  
            To insert new instances.
            */
            public insert(index: number, value: TimeScaleHeaderDefinition): void;
            /**  
            To delete the instance.
            */
            public remove(value: TimeScaleHeaderDefinition): void;
        }
        export class CustomRangesInfos {
            constructor();
            public ProvideRepeatingCustomRanges: ObjectEvent;
            public DiscreetCustomRanges: ObservableCollection;
            public RaiseProvideRepeatingCustomRanges: any;
        }
        /**
        * Arguments for the <CustomRangesInfos.ProvideRepeatingCustomRanges> event.
        */
        export class CustomRangeInfo {
            constructor(startTime: Date, endTime: Date, dataTemplate: any);
            /**
            * StartTime of the Activity
            */
            public StartTime: Date;
            /**
            * EndTime of the Activity
            */
            public EndTime: Date;
            /**
           * DataTemplate
           */
            public DataTemplate: string;
        }
        /**
        * Provide this hint to allow the gantt to intelligently determine a header's
        visibility when it's Type is set to Custom. The hint need not be
        accurate. If you are providing a custom monthly header, specify it's <EquivalentType>
        as <Months> <EquivalentUnits> to 31.
        */
        export class CustomTimeScaleTypeHint {
            constructor(units: number, equivalentType: any);
            /**
            * The number of equivant units of EquivalentType.
            */
            public EquivalentUnits: number;
            /**  
            * The type it's equivalent to. Value, obviously, cannot be Custom.
            */
            public EquivalentType: any;
            /**
            * Creates a clone of this instance

            Returns:
            A new cloned instance.
            */
            public Clone(): CustomTimeScaleTypeHint;
            /**
            * To check the equality of the instance

            Returns:
            true or false
            */
            public IsEqual(): boolean;
        }
        /**
        Specifies the different types of TimeIndicatorLines in task bar. 
        */
        export class TimeIndicatorLines {
            /**
            * To dispaly the TimeIndicatorLines.
            */
            public static Always: number;
            /**
            * To hide the TimeIndicatorLines.
            */
            public static None: number;
            /**
            * To show the TimeIndicatorLines on taskbar hover.
            */
            public static OnHover: number;
            /**
            * To show the TimeIndicatorLines on taskbar resize.
            */
            public static OnResize: number;
        }
        export class BindingMode {
            public static OneWay: string;
            public static TwoWay: string;
        }
        /**
        Prints with the currently visible grid table and timeline in the chart passing only the 'GanttBase'. 
        */
        function RQPrint(gantt: GanttBase, opt?:any);
        
         export class PrintOptions {
           /**
           * Desires how many rows should print per page.
           */
            NoOfRowsInPage: number;
            /**
           * Hides the gantt chart and prints only the grid table.
           */
            ShowGanttTableOnly: boolean;
            /**
           * Hides the grid table and prints only the gantt chart.
           */
            ShowGanttChartOnly: boolean;
            /**
           * Prints gantt within the specified StartRowIndex.
           */
            StartRowIndex: boolean;
             /**
           * Prints gantt within the specified EndRowIndex.
           */
            EndRowIndex: boolean;
            /**
           * Gets or sets the title of the page.
           */
            Title: string;
            /**
           * Gets or sets a value that specifies the number of columns to be printed.
           */
            VisibleColumnIndices: Array<number>;
            /**
           * The start time of the view.
           */
            ViewStartTime: Date;
            /**
           * The end time of the view.
           */
            ViewEndTime: Date;
        }

        module Model {
            class IActivity {
                DataSource: any;
                /**
                * The name of this activity.
                */
                ActivityName: string;
                /**
                * The resource assignments that are made on this activity.
                */
                Assignments: string;
                /**
                * The list of child activities.
                */
                ChildActivities: Array<IActivity>;
                /**
                * If this activity has no children then this is the same as Effort. Otherwise, this is a sum of all the child activities.
                */
                CumulativeEffort: any;
                /**
                * Description of this activity.
                */
                Description: string
                DisplayIndex: number
                 Duration: any;
                /**
                * Specifies the effort required to complete this activity. A TimeSpan.Zero indicates that this activity is a milestone.
                */
                Effort: any;
                /**
                * The end time of this activity.
                */
                EndTime: any;
                /**
                * The activity's ID.
                */
                ID: number;
                IsExpanded: boolean;
                /**
                * The parent activity, if any.
                */
                Parent: RadiantQ.Gantt.Model.IActivity;
                /**
                * The string that defines the predecessor indices.
                
                 <value>
                 Input should be of the form, for example: &quot;21, 10SS, 3FS + 3&quot;, which
                 implies that there are 3 predecessors:                
                 -Activity with ID 21.
                 -Activity with ID 10. The dependency type is Start to Start.
                 -Activity with ID 3. The dependency type is Finish to Start and a lag of 3 hours.
                */
                PredecessorIndexString: string
                /**
                 The StartTime of an activity refers to the current start time which could have been computed based on the
                 dependencies and parent-child hierarchies that are in the gantt. But, this property refers to the preferred
                 start time for this activity. So, the gantt will try to anchor the activity to this time whenever possible.
                 When the end-user updates an activity's StartTime manually in the UI, this property gets updated to reflect that change.
                
                */
                 PreferredStartTime: Date;
                /**
                * The computed end-time of the progress based on the ProgressPercent property setting.
                */
                ProgressEndTime: Date;
                /**
                * The progress in percentage of the task completed.A value from 0 to 100.
                */
                ProgressPercent: number;
                /**
                * The sort order of the row corresponding to this activity, in a data table.
                */
                SortOrder: number;
                /**
                * The start time of this activity.
                */
                StartTime: Date;
                /**
                * Just a convenient property that could be bound to in Bindings. PropertyChanged event should be raised for "Times" when the activity's StartTime or EndTime changes.
                */
                Times: RadiantQ.Gantt.Model.IActivity;
                /** 
                A "new" public PropertyChanged event that reflects the protected PropertyChanged event in the base class. 
                */
                PropertyChanged: ObjectEvent;
                /** 
                Fired to notify a change in the child activities' collection. 
                */
                ChildCollectionChanged: ObjectEvent;
                IndentLevel: any;
            }

            class ResourceLoadTracker {
                constructor(model: RadiantQ.Gantt.Model.IActivity, enableRoundingToDays?: boolean);
                ResourceLoadLists: any;
            }
        }
        module View {
            class IActivityView {
                /* Group : Properties*/
                /*property: Activity 
                The underlying activity that this view represents.
                */
                Activity: RadiantQ.Gantt.Model.IActivity;
                /*property: ParentView  
                The parent IActivityView, if any.
                */
                ParentView
                /*property: ParentActivity
                The parent IActivity, if any.
                */
                ParentActivity
                /*property: IndentLevel 
                The indent level of this activity.
                */
                IndentLevel
                /*property: IsExpanded 
                Gets or sets a value that indicates if this is currently expanded or collapsed. This applies only for parent activities.
                */
                IsExpanded

                /*property: IsSelected 
                Gets or sets a value that indicates if this is currently selected.
                */
                IsSelecte
                /*property: IsReadOnly 
                Gets or sets a value indicating if the times in this task are to be made read-only.
                */
                IsReadOnly
                /*property: IsParent 
                Gets or sets a value that indicates if this activity is a parent.
                */
                IsParent
                /*property: IsRegularTask 
                Gets or sets a value that indicates if this represents a regular task (neither a summary nor a milestone).
                */
                IsRegularTask
                ReparentView(newParent: any): any;

                TableRow(value: any): any;
                ChartRow(value: any): any;
                IsMouseIn(value: any): any;
                UpdateHoverStyle(value: any): any;
                UpdateSelection(value: any): any;

            }
        }
    }
    export class FlexyGantt {
        public static RenderNonWorkingHours(divContainer: any, containerStyle: string, ganttChart: any, schedule: any, rowHeight:number): void;
        public static RenderNonWorkingHours(divContainer: any, containerStyle: string, ganttChart: any, schedule: any): void;

    }

    export module FlexyGantt {
        /**
        Specifies if the Task Bars can overlap or shrink to adjust the heights within the gantt chart rows.
        */
        export class OverlappedTasksRenderingOptimization {
            /**
            * FlexyGantt will shrink the height of the overlapping bars so that they are all visible.
            */
            public static ShrinkHeight: string;
            /**
            * No optimization is done, overlapping bars end up one over the other.
            */
            public static None: string;
        }
        export class TaskItemControl {
            public static MarginForBars: number;
            public static ParentBar_BorderBottomWidth: number;
            public static ParentBar_BorderTopWidth: number;
            public static TaskBar_BorderBottomWidth: number;
            public static TaskBar_BorderTopWidth: number;
        }
        export class ShiftTrackerGlobal {
            /**
            */
            public static CreateDependencyEvent: ObjectEvent;
            /**
            * Specifies whether or not the vertically moving the task should be enabled.If you turn this on, listen to the BeginVerticalDrag, VerticalDragOver, VerticalDragDrop events and
            * provdie the appropriate cue to the end user and also perform the actual move after the drop.
            */
            public static IncludeVerticalMovingSupport: boolean;
            /**
            *Indicates that the vertical drag just began. Cancellable. The TrackingTaskItemControl and the CurrentStartRow properites will tell you where the end user is beginning to drag.
            */
            public static BeginVerticalDrag: ObjectEvent;
            /**
            *The item is being dragged over. The TrackingTaskItemControl and the CurrentStartRow properties will tell you what is being dragged and the CurrentDropRow property will tell you where we are dragging over.
            */
            public static VerticalDragOver: ObjectEvent;
            /**
            *The item was just dropped. The TrackingTaskItemControl and the CurrentStartRow properties will tell you what is being dragged and the CurrentDropRow property will tell you where a drop just occured.
            */
            public static VerticalDragDrop: ObjectEvent;
            /**
            *The TaskItemControl instance that is currently being dragged.
            */
            public static TrackingTaskItemControl: any;
            /**
            *Returns the drop cue location co-ords in the specified co-ord system.
            */
            public static GetDropCueLocationIn(event: JQueryEventObject): FGDragEvent;
            /**
            *The TasksListControl instance which representing the destination row.
            */
            public static CurrentDropRow: FlexyNodeData;
            /**
            *The TasksListControl instance representing the row from which a bar is currently being dragged.
            */
            public static CurrentStartRow: FlexyNodeData;
            /**
            *The X value from the TaskBar Left, when the drag started.
            */
            public static deltaX: number;
            /**
            *The Y value from the TaskBar Top, when the drag started.
            */
            public static deltaY: number;
            /**
           * MinDeltaYValue.
           */
            public static MinDeltaYValue: number;
        }
    }
    var Binder: any;
    export module Default {
        export class Template {
            public static getter: any;
            public static setter: any;
            public static ProjectGanttExpandableTextBlockTemplate: any;
            public static FlexyGanttExpandableTextBlockTemplate: any;
            public static ProjectGanttExpandableTextboxEditor: any;
            public static FlexyGanttExpandableTextBoxEditor: any;
        }
    }
    export class RQ_CollectionChangeNotifier<T> implements Array<T> {
        constructor();
        constructor(data: Array<T>);
        public add(data: any): void;
        public contains(val: string): boolean;
        public push(...items: T[]): number;
        public insert(index: number, data: any): void;
        public splice(index: number, howmany: number, items: any): void;
        public merge(index: number, items: any): void;
        public pop: any;
        public remove(index: number): any;
        public remove(index: any): any;
        public clear: void;
        public length: number;
        public CollectionChanged: ObjectEvent;
        public sort(compareFn?: (a, b) => number): Array<any>;
        public concat<U extends T[]>(...items: U[]): T[];
        public concat(...items: T[]): T[];
        public join(separator?: string): string;
        public reverse(): T[];
        public shift(): T;
        public slice(start?: number, end?: number): T[];
        public sort(compareFn?: (a: T, b: T) => number): T[];
        public splice(start: number): T[];
        public splice(start: number, deleteCount: number, ...items: T[]): T[];
        public unshift(...items: T[]): number;
        public indexOf(searchElement: T, fromIndex?: number): number;
        public lastIndexOf(searchElement: T, fromIndex?: number): number;
        public every(callbackfn: (value: T, index: number, array: T[]) => boolean, thisArg?: any): boolean;
        public some(callbackfn: (value: T, index: number, array: T[]) => boolean, thisArg?: any): boolean;
        public forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
        public map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
        public filter(callbackfn: (value: T, index: number, array: T[]) => boolean, thisArg?: any): T[];
        public reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue?: T): T;
        public reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;
        public reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue?: T): T;
        public reduceRight<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;
        [n: number]: T; 
    }
    


}



declare function json2xml(eleme:any);
declare class RQTimeSpan {
    constructor(milliseconds?: number);
    constructor(days?: number, hours?: number, minutes?: number, seconds?: number, milliseconds?: number);
    /**
    * No time span is set.
    */
    public static Zero: RQTimeSpan;
    /**
    * Sets the hours timespan.
    */
    public static Zero_M(): RQTimeSpan;
    /**
    * Sets the hours timespan.
    */
    public hours: number;
    /**
    * Sets the minutes timespan.
    */
    public minutes: number;
    /**
    * Sets the seconds timespan.
    */
    public seconds: number;
    /**
    * Sets the days timespan.
    */
    public days: number;
    /**
    * Sets the totalMilliseconds timespan.
    */
    public totalMilliseconds: number;
    /**
    * Sets the Ticks timespan.
    */
    public Ticks: number;
    /**
    * Takes ticks and returns RQTimeSpan.
    */
    public static fromTicks(ticks: number): RQTimeSpan;
    /**
    * To add timespan.
    */
    public add(timeSpan: RQTimeSpan): any;
    /**
    * Takes number of days and returns RQTimeSpan.
    */
    public static FromDays(days: number): RQTimeSpan;
    /**
    * Takes timespan and returns parsed RQTimeSpan.
    */
    public static parse(timespan: string);
    /**
    * Returns total number of days.
    */
    public getTotalDays(): number;

    public getTotalMinutes(): number;
}

declare class ObservableCollection {
    constructor();
    /**
   * Occurs when an item in the collection changes, or the entire collection changes. (inherited from ObservableCollection<T>).
   */
    public CollectionChanged: ObjectEvent;
    public OnCollectionChanged(event: any, args: any): void;
    public collectionChanged(event: any, args: any): void;
    /**
    * Removes already existing items
    */
    public remove(value: number, len: number): void;
    /**
    * To inserts new items.
    */
    public insert(index: number, value: any): void;
    /**
    * To check the availability of the item.
    */
    public contains(value: any): void;
    /**
    * To replace all existing items with the new item.
    */
    public replaceAll(newItem: any): void;
    public clear(): void;
    /**
    * To add a new item.
    */
    public add(value: any): void;
    /**
    * Returns the index of the item.
    */
    public indexOf(element: any): number;
}

/**
* Converts predecessor IDs based on auto sorted activity IDs
*/
interface SortIDAsPredIDConverter {
    GC?: any;
    /**
   * Converts the given value to the required value.
   */
    Convert? (value: any, source: RadiantQ.Gantt.Model.IActivity, target?: JQuery): string;
    /**
    * Converts back to the original value.
    */
    ConvertBack? (value: any, source: RadiantQ.Gantt.Model.IActivity, target: JQuery): string;
}
interface CustomHeaderTextProviderArguments {
    dateTime: Date;
    Text?: string;
    /**
    * Content of tooltip.
    */
    TooltipText?: string;

}
interface CustomTimeIntervalsProviderArguments {
    /**
    * The start time of the view.
    */
    ViewStartTime: Date;
    /**
    * The end time of the view.
    */
    ViewEndTime: Date;
    /**
    * The time intervals for the specified time range.
    */
    TimeIntervals: Array<Date>;
}
interface Date {
    /* Returns a string representation of a date. The format of the string depends on the locale. */
    toString(format?: string): string;
    compareTo(date: Date): any;
    Date(): Date;
    getDayName(): string;
    isGreaterThan(date: Date): boolean;
    isLessThan(date: Date): boolean;
    clone(): Date;
    addHours(hours: number): Date;
    addMinutes(minutes: number): Date;
    addMonths(months: number): Date;
    equals(date: Date): Boolean;
    addTimeSpan(time: any):Date;
    addMilliseconds(ms: number);
    addDays(days: number): Date;
}
interface CustomRangesEventArguments {
    ViewStartTime: any;
    ViewEndTime: any;
    CustomRanges: Array<Object>;
}
interface Team {
    /**
    * The start time of the parent.
    */
    PStartTime: Date;
    /**
    * The end time of the parent.
    */
    PEndTime: Date;
    /**
    *  Resources assigned to team.
    */
    Resources: Array<Object>
    /*Name of the team*/
    TName: string;
}
interface ActivityChildCollectionChangedArguments {
    index: number;
    items: Array<RadiantQ.Gantt.View.IActivityView>;
}

interface Schedule {
    /**
    * Setting it to true by default greatly helps with loading large amounts of tasks.
    */
    IsCachingEnabled?: boolean;
    Name?: string;
    /**
    Returns the end time given the start and effort.

    Parameters: 
    start - The start time.
    effort - The effort.
    schedules - Constraining schedules.

    Returns:  
    The computed end time.
    */
    GetEnd? (startTime?: Date, effort?: RQTimeSpan, schedule?: Schedule): any;
    /**
    Returns the effort given the start and finish times.

    Parameters: 
    start - The start time.
    finish - The end time.
    schedules - Additional constraining schedules, if any.

    Returns:  
    The computed effort.
    */
    GetEffort? (start?: Date, finish?: Date, schedules?: Schedule): any;
}

interface TimeComputingUtils {
    GetTimeBreaks? (viewStart: Date, viewEnd: Date, schedule: Schedule, TimeBreaks: Array<Date>);
    /**
    * Converts timespan to timeunits.
    */
    ConvertTimeSpanToTimeUnits? (baseScaleType: number, timespan: RQTimeSpan): any;
    /**
    * Converts timeunits to timespan.
    */
    ConvertTimeUnitsToTimeSpan? (baseScaleType: number, viewWidth: number): any;
}

interface subscribeMethod {
    (args: any, context?: any): any;
}
declare class ObjectEvent {
    constructor(event: string);
    /**
    * To subscribe the object event.
    */
    public subscribe: subscribeMethod;
    /**
   * To unsubscribe the object event.
   */
    public unsubscribe(args: any): any;
    /**
   * To rise the object event.
   */
    public raise(sender: any, args?: any): void;
}


interface FGDragEvent {
    X: number;
    Y: number;
}

interface FlexyNodeData {
    Data(): any;
    ChartRow(): JQuery;
    _data: any;
    _displayIndex: number;
}

interface FlexyGanttOptions extends GanttBase {
    /**
   * To resolver the hierarchical, make the hierarchical list in to flat list.
   */
    resolverFunction?(data: any): any;
    /**
   * Gets or sets the width of the GanttTable area. default is 20%.
   */
    TablePanelWidth?: any;
    /**
    * Use this to specify a varyting row height for each row in the FlexyGantt's FlexyTable. The source for this binding will be a FlexyNodeData instance which has a Data property which is a reference
          to the bound object corresponding to that row.
    */
    RowHeightBinding?: Binding;
    /**
    * Specifies if the Task Bars can overlap or shrink to adjust the heights within the gantt chart rows.
    */
    OverlappedTasksRenderingOptimization?: RadiantQ.FlexyGantt.OverlappedTasksRenderingOptimization;
    /**
   * Normally all the tasks within a row are rendered in the UI even if they are out the current view. But, this would bog things down if there are thounds of tasks to show in the view. Set this to true if you want them
        to be filtered every time the chart's view span changes. Use this in conjunction with UseTimeRangeFilteredTasksInRows, TimeRangeFilteredTasksTimeBuffer and FilterTasksByTimeRange event.
   */
    UseTimeRangeFilteredTasksInRows?: boolean;
    /**
   * Listener used to determine which set of tasks fall under the current chart view span.
   */
    FilterTasksByTimeRange?: any;
    /**
  * Called after the FlatItemsSource is created.
  */
    FlatItemsSourceCreated? (sender: any, args: any): void;
    /**
   * Dependency item source.
   */
    DependencyListSource?: any;
}
interface ConverterUtils {
    GetResourcesText? (assignments: any, idorname: any): string;
    GetAssignedResourceInstances? (assignments: any): Array<any>;
    AddAssignmentToActivity? (activity: RadiantQ.Gantt.Model.IActivity, id: number): void;
    AllocationUnitText? (assign: any): string;
    ConvertResourceTextToAssignments? (resourceText: string, ganttResources: any, assignments: any): void;
    ConvertSelectedResourcesToAssignments? (selectedResources: any, assignments: any): void;
    IsContentEqual? (left: any, right: any): boolean;
    ParseAllocUnitsString? (allocunits: any): number;

}

declare module VW {
    export module Grid {
        export class GridModel {
            constructor(source);
        }
        export enum ColumnBehaviour {
            NoHorizontalScrollBar=2
        }
    }
}

declare class jsPDF {
    constructor(orientation?: any, unit?: any, format?: any);
    public addImage(image?: any, tyep?: any, x?: any, y?: any, width?: any, height?: any): void;
    public save(fileName?: any): void;
}
interface FileReader {
    EMPTY: number;
    LOADING: number;
    DONE: number;
}
declare class FGDependencyHandler {
    resolveDependencyInfo: any;
    updateDependencies: any;
    depLinesList: any;
}
