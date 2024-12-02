/*! For license information please see modules-form-controls-date-picker-plus-ui-date-picker-plus-component-stories.dae768b4.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkplatform_ui=self.webpackChunkplatform_ui||[]).push([[3683],{"./libs/ui/src/lib/modules/form-controls/date-picker-plus/ui-date-picker-plus.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>UiDatePickerPlusComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),ng_bootstrap=__webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/fesm2020/ng-bootstrap.mjs");let UiDatePickerPlusComponent=class UiDatePickerPlusComponent{constructor(_calendar){this._calendar=_calendar,this.footerTemplate=!1,this.displayMonths=2,this.dateSelectionChange=new core.EventEmitter,this.navigation="select",this.showWeekNumbers=!1,this.outsideDays="hidden",this.hoveredDate=null,this.weekdays=common.cH.Abbreviated}set fromDate(date){this._fromDate=new ng_bootstrap.gj(date.year,date.month,date.day)}get fromDate(){return{day:this._fromDate.day,month:this._fromDate.month,year:this._fromDate.year}}set toDate(date){this._toDate=new ng_bootstrap.gj(date.year,date.month,date.day)}get toDate(){return{day:this._toDate.day,month:this._toDate.month,year:this._toDate.year}}ngOnInit(){1===this.displayMonths&&(this.toDate=new ng_bootstrap.gj(null,null,null),this.maxDays=1),void 0===this.fromDate||this.fromDate.year,this.fromDate.month,null===this.fromDate.day?this._fromDate=this._calendar.getToday():this._fromDate=new ng_bootstrap.gj(this.fromDate.year,this.fromDate.month,this.fromDate.day),2===this.displayMonths&&(void 0===this.toDate||null===this.toDate||this.toDate.year,this.toDate.month,null===this.toDate.day)?this._toDate=this._calendar.getNext(this._calendar.getToday(),"d",10):this._toDate=new ng_bootstrap.gj(this.toDate.year,this.toDate.month,this.toDate.day),this.dateSelectionChange.emit({fromDate:this.fromDate,toDate:this.toDate})}onDateSelection(date){this._fromDate&&(this._fromDate.year,this._fromDate.month,null!==this._fromDate.day)||this._toDate?!this._fromDate||(this._fromDate.year,this._fromDate.month,null===this._fromDate.day)||this._toDate&&(this._toDate.year,this._toDate.month,null!==this._toDate.day)||!date.after(this._fromDate)?(this._fromDate=new ng_bootstrap.gj(date.year,date.month,date.day),this._toDate=new ng_bootstrap.gj(null,null,null)):2===this.displayMonths?this._toDate=new ng_bootstrap.gj(date.year,date.month,date.day):(this._fromDate=new ng_bootstrap.gj(date.year,date.month,date.day),this._toDate=new ng_bootstrap.gj(null,null,null)):(this._fromDate=new ng_bootstrap.gj(date.year,date.month,date.day),this._toDate=new ng_bootstrap.gj(null,null,null)),this.dateSelectionChange.emit({fromDate:this.fromDate,toDate:this.toDate})}getFromDate(){return this._fromDate}getToDate(){return this._toDate}formatDateString(date){if(null!=date){return date.year+"-"+(date.month<=9?"0"+date.month:date.month)+"-"+(date.day<=9?"0"+date.day:date.day)}}isHovered(date){return this._fromDate&&!this._toDate&&this.hoveredDate&&date.after(this._fromDate)&&date.before(this.hoveredDate)}isInside(date){return this._toDate&&date.after(this._fromDate)&&date.before(this._toDate)}isRange(date){return date.equals(this._fromDate)||this._toDate&&date.equals(this._toDate)||this.isInside(date)||this.isHovered(date)}clear(){this._fromDate=new ng_bootstrap.gj(null,null,null),this._toDate=new ng_bootstrap.gj(null,null,null),this.dateSelectionChange.emit({fromDate:this.fromDate,toDate:this.toDate})}};UiDatePickerPlusComponent.ctorParameters=()=>[{type:ng_bootstrap.iF}],UiDatePickerPlusComponent.propDecorators={footerTemplate:[{type:core.Input}],displayMonths:[{type:core.Input}],fromDate:[{type:core.Input}],toDate:[{type:core.Input}],dateSelectionChange:[{type:core.Output}]},UiDatePickerPlusComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"ui-date-picker-plus-component",template:'    <ngb-datepicker\n        #datePicker\n        [ngClass]="{ ranged: displayMonths === 2 }"\n        (dateSelect)="onDateSelection($event)"\n        [displayMonths]="displayMonths"\n        [navigation]="navigation"\n        [showWeekNumbers]="showWeekNumbers"\n        [weekdays]="weekdays"\n        [outsideDays]="outsideDays"\n        [footerTemplate]="footerTemplate" \n        [dayTemplate]="dayTemplate"\n        strictMode=\'true\'\n    >\n        <ng-template #footerTemplate [ngIf]="footerTemplate">\n            <hr />\n            <div class="footer-controls">\n                <button class="btn btn-link btn-sm" (click)="clear()">Clear</button>\n                <button class="btn btn-link btn-sm">Apply</button>\n            </div>\n        </ng-template>\n    </ngb-datepicker>\n\n    <ng-template #dayTemplate let-date let-focused="focused">\n        <span\n            class="ngb-dp-day"\n            [class.focused]="focused"\n            [class.range]="isRange(date)"\n            [class.faded]="isHovered(date) || isInside(date)"\n            (mouseenter)="hoveredDate = date"\n            (mouseleave)="hoveredDate = null"\n        >\n            {{ date.day }}\n        </span>\n    </ng-template>\n',styles:[".footer-controls {\n  gap: 0.375rem;\n  display: flex;\n  justify-content: flex-end;\n  padding: 0px 16px 8px 16px;\n  margin-top: -8px;\n}\n\n:host ::ng-deep ngb-datepicker {\n  min-width: 15rem;\n  width: 15rem;\n  border-color: #d2d6da;\n}\n\n:host ::ng-deep ngb-datepicker .ngb-dp-month {\n  width: 15rem;\n  padding: 8px;\n}\n\n:host ::ng-deep ngb-datepicker .ngb-dp-weekday {\n  color: #7e8083;\n  font-style: normal;\n  line-height: 1.31rem;\n}\n\n:host ::ng-deep ngb-datepicker .ngb-dp-month:last-child .ngb-dp-week {\n  padding-right: 0;\n}\n\n:host ::ng-deep ngb-datepicker .ngb-dp-month + .ngb-dp-month .ngb-dp-month-name,\n:host ::ng-deep ngb-datepicker .ngb-dp-month + .ngb-dp-month .ngb-dp-week {\n  padding-left: 0;\n}\n\n:host ::ng-deep ngb-datepicker.ranged {\n  width: 30rem;\n}\n\n:host ::ng-deep ngb-datepicker.ranged .ngb-dp-months {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  flex-direction: row;\n  flex-wrap: nowrap;\n}\n\n:host ::ng-deep ngb-datepicker.ranged .ngb-dp-month {\n  width: 18.75rem;\n  padding: 8px;\n}\n\n:host ::ng-deep ngb-datepicker.ranged .ngb-dp-weekday {\n  color: #7e8083;\n  font-style: normal;\n  line-height: 1.31rem;\n}\n\n:host ::ng-deep ngb-datepicker.ranged .ngb-dp-week {\n  justify-content: space-between;\n}\n\n:host ::ng-deep ngb-datepicker.ranged .ngb-dp-month + .ngb-dp-month .ngb-dp-month-name,\n:host ::ng-deep ngb-datepicker.ranged .ngb-dp-month + .ngb-dp-month .ngb-dp-week {\n  padding-left: 0;\n}\n\n:host ::ng-deep ngb-datepicker.ranged .ngb-dp-day {\n  font-size: 14px;\n  height: 1.9rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n:host ::ng-deep ngb-datepicker.ranged .ngb-dp-day.focused {\n  background-color: #00857C;\n  color: #fff;\n  width: 2rem;\n}\n\n:host ::ng-deep ngb-datepicker.ranged .ngb-dp-day.focused:hover {\n  color: #fff;\n}\n\n:host ::ng-deep ngb-datepicker.ranged .ngb-dp-day.range {\n  background-color: #00857C;\n  color: #fff;\n}\n\n:host ::ng-deep ngb-datepicker.ranged .ngb-dp-day.range:hover {\n  border: 1px solid #00857C;\n}\n\n:host ::ng-deep ngb-datepicker.ranged .ngb-dp-day.faded {\n  background-color: #cce7e5 !important;\n  color: #000;\n  width: 2.5rem;\n}\n\n:host ::ng-deep ngb-datepicker.ranged .ngb-dp-day.faded:hover {\n  border: 1px solid #00857C;\n  background-color: #cce7e5;\n}\n\n:host ::ng-deep ngb-datepicker.ranged .ngb-dp-day :hover {\n  border: 1px solid #00857C;\n}\n\n:host ::ng-deep ngb-datepicker.ranged ngb-datepicker-navigation-select {\n  padding: 0px 4px 0px 4px;\n  gap: 8px;\n  display: flex;\n}\n\n:host ::ng-deep ngb-datepicker.ranged ngb-datepicker-navigation-select .form-select {\n  width: 12rem;\n}\n\n:host ::ng-deep ngb-datepicker.ranged .ngb-dp-navigation-chevron {\n  border-style: solid;\n  border-width: 0.1em 0.1em 0 0;\n  display: inline-block;\n  width: 0.75em;\n  height: 0.75em;\n  color: #2a2b2c;\n}\n\n:host ::ng-deep ngb-datepicker .ngb-dp-weekdays {\n  margin-bottom: 8px;\n  padding-top: 8px;\n}\n\n:host ::ng-deep ngb-datepicker .ngb-dp-month-name {\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 24px;\n  padding: 8px;\n  gap: 8px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 2.5rem;\n}\n\n:host ::ng-deep ngb-datepicker .ngb-dp-header {\n  background-color: #fff;\n  padding: 8px 8px 0px 8px;\n}\n\n:host ::ng-deep ngb-datepicker .ngb-dp-content .ngb-dp-month-name,\n:host ::ng-deep ngb-datepicker .ngb-dp-content .ngb-dp-week {\n  background-color: #fff;\n}\n\n:host ::ng-deep ngb-datepicker ngb-datepicker-navigation-select {\n  padding: 0px 4px 0px 4px;\n  display: flex;\n}\n\n:host ::ng-deep ngb-datepicker .ngb-dp-navigation-chevron {\n  border-style: solid;\n  border-width: 0.1em 0.1em 0 0;\n  display: inline-block;\n  width: 0.75em;\n  height: 0.75em;\n  color: #2a2b2c;\n}\n\n:host ::ng-deep ngb-datepicker .ngb-dp-month:first-child .ngb-dp-week {\n  padding-left: 0;\n}\n\n:host ::ng-deep ngb-datepicker .ngb-dp-months {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  flex-direction: column;\n  flex-wrap: nowrap;\n}\n\n:host ::ng-deep ngb-datepicker .ngb-dp-day {\n  font-size: 14px;\n  width: 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n:host ::ng-deep ngb-datepicker .ngb-dp-day.range {\n  background-color: #00857C;\n  color: #fff;\n}\n\n:host ::ng-deep ngb-datepicker .ngb-dp-day.range.faded {\n  background-color: #fff;\n  color: #000;\n}\n\n:host ::ng-deep ngb-datepicker .ngb-dp-day .focused {\n  background-color: #00857C;\n  color: #fff;\n  z-index: 4;\n}\n\n:host ::ng-deep ngb-datepicker .ngb-dp-day.range:hover {\n  border: 1px solid #00857C;\n}\n\n:host ::ng-deep ngb-datepicker .ngb-dp-day :hover {\n  border: 1px solid #00857C;\n}"]}),(0,tslib_es6.Sn)("design:paramtypes",[ng_bootstrap.iF])],UiDatePickerPlusComponent)},"./libs/ui/src/lib/modules/form-controls/date-picker-plus/ui-date-picker-plus.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>ui_date_picker_plus_component_stories});var client=__webpack_require__("./node_modules/@storybook/angular/dist/ts3.9/client/index.js"),ui_date_picker_plus_component=__webpack_require__("./libs/ui/src/lib/modules/form-controls/date-picker-plus/ui-date-picker-plus.component.ts"),ng_bootstrap=__webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/fesm2020/ng-bootstrap.mjs"),fesm2020_forms=__webpack_require__("./node_modules/@angular/forms/fesm2020/forms.mjs"),ngx_translate_core=__webpack_require__("./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js"),platform_browser=__webpack_require__("./node_modules/@angular/platform-browser/fesm2020/platform-browser.mjs");const u=void 0;const en=["en",[["a","p"],["AM","PM"],u],[["AM","PM"],u,u],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],u,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],u,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",u,"{1} 'at' {0}",u],[".",",",";","%","+","-","E","×","‰","∞","NaN",":"],["#,##0.###","#,##0%","¤#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",function plural(val){const i=Math.floor(Math.abs(val)),v=val.toString().replace(/^[^.]*\.?/,"").length;return 1===i&&0===v?1:5}];var browser=__webpack_require__("./node_modules/process/browser.js"),common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");(0,common.EO)(en,"en-US");const ui_date_picker_plus_component_stories={title:"Forms/DatePickerPlus",component:ui_date_picker_plus_component.Y,decorators:[(0,client.moduleMetadata)({declarations:[ui_date_picker_plus_component.Y],imports:[ng_bootstrap.UN,ng_bootstrap.IQ,fesm2020_forms.FormsModule,fesm2020_forms.ReactiveFormsModule,ngx_translate_core.h.forChild(),platform_browser.BrowserModule],providers:[{provide:core.LOCALE_ID,useValue:"en-US"}]})]},Primary=(args=>({props:args})).bind({});Primary.args={footerTemplate:!0,displayMonths:2,fromDate:null,toDate:null,dateSelectionChanged:()=>{browser.emit}}}}]);