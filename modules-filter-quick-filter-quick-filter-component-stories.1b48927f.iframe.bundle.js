"use strict";(self.webpackChunkplatform_ui=self.webpackChunkplatform_ui||[]).push([[8029],{"./libs/ui/src/lib/modules/filter/quick-filter/quick-filter.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>UiQuickFilterComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),dropdown_plus_component=__webpack_require__("./libs/ui/src/lib/modules/form-controls/dropdown-plus/dropdown-plus.component.ts"),ngx_translate_core=__webpack_require__("./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");let UiQuickFilterComponent=class UiQuickFilterComponent{constructor(_translateService){this._translateService=_translateService,this.small=!1,this.showSearch=!1,this.multiSelect=!0,this.showSelectClearBtns=!1,this.triggerLabel="",this.selectedOptions=[],this.selectionChange=new core.EventEmitter,this.openChange=new core.EventEmitter,this.triggerClicked=new core.EventEmitter,this.searchChange=new core.EventEmitter,this.options=[],this.menuOpen=!1,this._label="",this._disabled=!1}set label(label){this._label=label,this.triggerLabel=label}get label(){return this._label}set disabled(val){this._disabled=val}get disabled(){return this._disabled}set setOptions(options){this.options=options,setTimeout((()=>{this.onSelectionChange({id:this.id,selectedOptions:this.options.filter((option=>!0===option.value))})}))}ngOnInit(){this._subscription=this._translateService.onLangChange.subscribe((event=>{this.updateTriggerLabel()}))}ngOnDestroy(){this._subscription.unsubscribe()}onSelectionChange(event){this.selectedOptions=event.selectedOptions,this.updateTriggerLabel(),this.selectionChange.emit(event)}updateTriggerLabel(){0===this.selectedOptions.length?this.triggerLabel=this._label:1===this.selectedOptions.length?this.triggerLabel=this.selectedOptions[0].label:this.triggerLabel=this._label}clearSelection(){this.dropdownRef.clearSelection()}unSelectItem(itemId){this.dropdownRef.unSelectItem(itemId)}onOpenChange(event){this.menuOpen=event.open,this.openChange.emit(event)}onTriggerClicked(event){this.triggerClicked.emit(event)}onSearchChange(){}};UiQuickFilterComponent.ctorParameters=()=>[{type:ngx_translate_core.c$}],UiQuickFilterComponent.propDecorators={id:[{type:core.Input}],small:[{type:core.Input}],showSearch:[{type:core.Input}],multiSelect:[{type:core.Input}],showSelectClearBtns:[{type:core.Input}],label:[{type:core.Input}],disabled:[{type:core.Input}],setOptions:[{type:core.Input}],selectionChange:[{type:core.Output}],openChange:[{type:core.Output}],triggerClicked:[{type:core.Output}],searchChange:[{type:core.Output}],dropdownRef:[{type:core.ViewChild,args:[dropdown_plus_component.Z]}]},UiQuickFilterComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"ui-quick-filter",template:'<div\n    class="d-flex align-items-center quick-filter"\n    [id]="id + \'_trigger\'"\n    [ngClass]="{ open: menuOpen === true, \'option-selected\': selectedOptions?.length !== 0, disabled: disabled, small: small === true }"\n    (click)="dropdownRef.triggerClick()"\n>\n    <div [id]="id + \'_triggerLabel\'" class="label d-inline-block text-truncate">\n        <span *ngIf="this.selectedOptions.length === 0">{{ \'COMMON.ALL\' | translate }}</span>\n        {{ triggerLabel | translate: triggerLabelParams }}\n        <span *ngIf="this.selectedOptions.length > 1"> ({{ this.selectedOptions.length }})</span>\n    </div>\n    <div>\n        <i\n            class="bi ms-1 d-inline-block anim"\n            [id]="id + \'_triggerIcon\'"\n            [ngClass]="{ \'bi-caret-down-fill\': selectedOptions.length === 0, \'bi-filter\': selectedOptions.length !== 0 }"\n        >\n        </i>\n    </div>\n</div>\n<ui-dropdown-plus\n    #dropdownRef\n    [id]="id"\n    [view]="\'none\'"\n    [externalTriggerEleId]="id + \'_trigger\'"\n    [animIcon]="true"\n    [setOptions]="options"\n    [disabled]="disabled"\n    [small]="small"\n    [paddingTop]="3"\n    [showSearch]="showSearch"\n    [multiSelect]="multiSelect"\n    [showSelectClearBtns]="showSelectClearBtns"\n    (selectionChange)="onSelectionChange($event)"\n    (openChange)="onOpenChange($event)"\n    (triggerClicked)="onTriggerClicked($event)"\n    (searchChange)="onSearchChange()"\n>\n</ui-dropdown-plus>\n',styles:[".quick-filter {\n  cursor: pointer;\n  font-weight: bold;\n}\n.quick-filter.open {\n  color: #00857C;\n  border-bottom: 1px solid #00857C;\n  margin-bottom: -1px;\n}\n.quick-filter:hover {\n  color: #00857C;\n  border-bottom: 1px solid #00857C;\n  margin-bottom: -1px;\n}\n.quick-filter.option-selected {\n  color: #00857C;\n}\n.quick-filter.option-selected.disabled {\n  color: #a8abae;\n  cursor: default;\n}\n.quick-filter.disabled {\n  color: #a8abae;\n  cursor: default;\n}\n.quick-filter.disabled:hover {\n  border-bottom: none;\n  margin-bottom: 0;\n}\n.quick-filter.open .bi {\n  transform: rotate(180deg);\n  margin-bottom: 4px;\n}\n.quick-filter.open .bi.anim {\n  transition: 150ms ease-in-out;\n}\n.quick-filter .bi {\n  transform: rotate(0deg);\n}\n.quick-filter .bi.anim {\n  transition: 150ms ease-in-out;\n}\n.quick-filter .btn.trigger.no-border {\n  border: none;\n  box-shadow: none !important;\n  padding-left: 0px;\n  padding-right: 0px;\n}\n.quick-filter .btn.hi-lite {\n  border: 1px solid #00857C;\n}\n.quick-filter .btn.btn-link {\n  padding: 0;\n}\n.quick-filter .btn.btn-link:hover {\n  text-decoration: underline;\n}\n.quick-filter .btn.btn-link:focus {\n  text-decoration: underline;\n  color: #006a63;\n}"]}),(0,tslib_es6.Sn)("design:paramtypes",[ngx_translate_core.c$])],UiQuickFilterComponent)},"./libs/ui/src/lib/modules/filter/quick-filter/quick-filter.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/ts3.9/client/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Grids/QuickFilter",component:__webpack_require__("./libs/ui/src/lib/modules/filter/quick-filter/quick-filter.component.ts").L,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[]})]},Primary=(args=>({props:args})).bind({});Primary.args={id:"",small:!1,showSearch:!1,multiSelect:!0,showSelectClearBtns:!1,label:"",disabled:"",setOptions:""}}}]);