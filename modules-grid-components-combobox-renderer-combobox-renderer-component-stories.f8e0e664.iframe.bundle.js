"use strict";(self.webpackChunkplatform_ui=self.webpackChunkplatform_ui||[]).push([[2398],{"./libs/ui/src/lib/modules/grid/components/combobox-renderer/combobox-renderer.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>combobox_renderer_component_stories});var client=__webpack_require__("./node_modules/@storybook/angular/dist/ts3.9/client/index.js"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),ngx_translate_core=__webpack_require__("./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js"),dropdown_plus_component=__webpack_require__("./libs/ui/src/lib/modules/form-controls/dropdown-plus/dropdown-plus.component.ts");let UiComboboxRendererComponent=class UiComboboxRendererComponent{constructor(_translateService){this._translateService=_translateService,this.menuOpen=!1,this.cellLabel="",this.selectedOptions=[],this._options=[]}agInit(params){var _a,_b;this._columnHeader=params.colDef.headerName,this._columnField=params.colDef.field,this._options=params.options,this.rowNode=params.node,this.placeholderValue=null!==(_b=null!==(_a=params.placeholderValue)&&void 0!==_a?_a:params.colDef.cellRendererParams.placeholderValue)&&void 0!==_b?_b:null,this.defaultValue=void 0!==params.defaultValue?params.defaultValue:void 0!==params.colDef.cellRendererParams.defaultValue?params.colDef.cellRendererParams.defaultValue:null;const initParamValue=params.getValue();initParamValue&&""!==initParamValue?(this.cellValue=initParamValue,this.cellValue=this._options.filter((option=>{if(initParamValue.includes(option.id))return option.value=!0,option}))):this.cellValue=null===this.defaultValue?[]:this.defaultValue,setTimeout((()=>{var _a,_b,_c,_d,_e,_f,_g,_h;this.dropdownRef=this.comboboxDropdownPlusRef.createComponent(dropdown_plus_component.Z).instance,this.dropdownRef.externalTriggerEleId=this.rowNode.id+"_trigger",this.dropdownRef.view=null,this.dropdownRef.showSearch=null===(_b=null!==(_a=params.showSearch)&&void 0!==_a?_a:params.colDef.cellRendererParams.showSearch)||void 0===_b||_b,this.dropdownRef.showSelectClearBtns=null===(_d=null!==(_c=params.showSelectClearBtns)&&void 0!==_c?_c:params.colDef.cellRendererParams.showSelectClearBtns)||void 0===_d||_d,this.dropdownRef.maxItemsShown=null!==(_f=null!==(_e=params.maxItemsToShow)&&void 0!==_e?_e:params.colDef.cellRendererParams.maxItemsToShow)&&void 0!==_f?_f:3,this.dropdownRef.multiSelect=null===(_h=null!==(_g=params.multiSelect)&&void 0!==_g?_g:params.colDef.cellRendererParams.multiSelect)||void 0===_h||_h,this.dropdownRef.small=!0,this.dropdownRef.options=this._options,this.dropdownRef.id=this.rowNode.id,this.dropdownRef.selectionChange.subscribe((event=>{this._onSelectionChange(event)})),this.dropdownRef.openChange.subscribe((event=>{this.menuOpen=!this.menuOpen})),setTimeout((()=>{this.dropdownRef.nbgDropdown.display="dynamic",this.dropdownRef.nbgDropdown.placement="bottom-start",this.dropdownRef.nbgDropdown.container="body",this.dropdownRef.nbgDropdown.dropdownClass=this.rowNode.id+"_drop-wrapper",this.dropdownRef.ngbDropPanel&&this.dropdownRef.ngbDropPanel.nativeElement&&(this.dropdownRef.ngbDropPanel.nativeElement.className+=" combobox-renderer-dropdown small",this.dropdownRef.multiSelect&&(this.dropdownRef.ngbDropPanel.nativeElement.className+=" multi-select")),this.selectedOptions=this.cellValue,this.dropdownRef.selectedOptions=this.dropdownRef.selectedList=this.selectedOptions,this.cellLabel=this._getLabelFromValues(this.cellValue)}))}))}ngOnDestroy(){this.dropdownRef&&this.dropdownRef.selectionChange.unsubscribe()}ngAfterViewInit(){}onTriggerClick(event){this.dropdownRef.nbgDropdown.open();const triggerEle=document.getElementById(this.dropdownRef.externalTriggerEleId);if(void 0!==this.dropdownRef.externalTriggerEleId&&null!==this.dropdownRef.externalTriggerEleId&&null!=triggerEle){const dropPanelWrapper=document.getElementById(this.dropdownRef.id+"_drop-panel").parentElement,position=triggerEle.getBoundingClientRect();dropPanelWrapper.style.top=position.top+triggerEle.offsetTop+triggerEle.offsetHeight+this.dropdownRef.paddingTop+"px",dropPanelWrapper.style.left=position.left+triggerEle.offsetLeft+"px"}this.dropdownRef.triggerClicked.emit({id:this.dropdownRef.id,open:this.menuOpen,selectedOptions:this.selectedOptions})}refresh(params){return!0}_getCellValue(){let cellDisplayValue="";for(const option of this.cellValue)cellDisplayValue+=option.id+",";return cellDisplayValue.trim().replace(/,$/,"")}_onSelectionChange(event){setTimeout((()=>{this.cellLabel=this._getLabelFromValues(event.selectedOptions),this.selectedOptions=this.cellValue=event.selectedOptions,this.dropdownRef.selectedList=this.dropdownRef.selectedOptions=this.selectedOptions;const newValue=this._getCellValue();this.rowNode.setDataValue(this._columnField,newValue)}))}_getLabelFromValues(selectedOptions){return 0!==selectedOptions.length&&selectedOptions?selectedOptions.length===this.dropdownRef.options.length?this._translateService.instant("COMMON.ALL"):1===selectedOptions.length?selectedOptions[0].label:selectedOptions.length>=1?this._columnHeader:this._translateService.instant("COMMON.NO_DATA_TO_DISPLAY"):this.defaultValue&&""!==this.defaultValue.label?this.defaultValue.label:this.placeholderValue&&""!==this.placeholderValue?this.placeholderValue:this._translateService.instant("COMMON.NONE")}};UiComboboxRendererComponent.ctorParameters=()=>[{type:ngx_translate_core.c$}],UiComboboxRendererComponent.propDecorators={comboboxDropdownPlusRef:[{type:core.ViewChild,args:["comboboxDropdownPlusRef",{read:core.ViewContainerRef}]}],dropdownRef:[{type:core.ViewChild,args:["dropdownRef"]}]},UiComboboxRendererComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"ui-combobox-renderer",template:'<div class="combobox-wrapper">\n    <ng-container #comboboxDropdownPlusRef></ng-container>\n    <div\n        class="d-flex justify-content-between align-items-center combobox-cell-trigger"\n        [id]="rowNode.id + \'_trigger\'"\n        (click)="onTriggerClick($event)"\n        [ngClass]="{ open: menuOpen === true, \'option-selected\': selectedOptions.length !== 0 }"\n    >\n        <div class="label d-inline-block text-truncate">\n            {{ cellLabel | translate }}\n            <span *ngIf="selectedOptions.length > 1"> ({{ selectedOptions.length }})</span>\n        </div>\n        <div>\n            <i \n                class="bi ms-1 d-inline-block anim"\n                [ngClass]="menuOpen ? \'bi-caret-up-fill\' : \'bi-caret-down-fill\'"\n            >\n            </i>\n        </div>\n    </div>\n</div>\n',styles:[""]}),(0,tslib_es6.Sn)("design:paramtypes",[ngx_translate_core.c$])],UiComboboxRendererComponent);const combobox_renderer_component_stories={title:"Grids/ComboboxRenderer",component:UiComboboxRendererComponent,decorators:[(0,client.moduleMetadata)({imports:[]})]},Primary=(args=>({props:args})).bind({});Primary.args={}}}]);