"use strict";(self.webpackChunkplatform_ui=self.webpackChunkplatform_ui||[]).push([[3094],{"./libs/ui/src/lib/modules/grid/components/dropdown-renderer/dropdown-renderer.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>dropdown_renderer_component_stories});var client=__webpack_require__("./node_modules/@storybook/angular/dist/ts3.9/client/index.js"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),Subscription=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subscription.js");let UiDropdownRendererComponent=class UiDropdownRendererComponent{constructor(){this.selectedOption={},this.itemsArray=[{id:1,label:"Item 1"},{id:2,label:"Item 2"},{id:3,label:"Item 3"}],this._subscriptions=new Subscription.yU,this.onChange=e=>{}}refresh(params){return!0}ngOnDestroy(){this._subscriptions.unsubscribe()}agInit(params){this.params=params,this.selectedItemId=params.selectedItemId,this.itemsArray=params.itemsArray,this.selectedOption=this.itemsArray.find((item=>item.id===params.selectedItemId)),this.onChange=params.onChange}selectOption(option){this.selectedOption=option,this.onChange(option)}};UiDropdownRendererComponent.ctorParameters=()=>[],UiDropdownRendererComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"ui-dropdown-renderer",template:'\n<div ngbDropdown class="d-inline-block" container="body" >\n    <div ngbDropdownToggle>\n        {{selectedOption[\'label\'] | translate: selectedOption[\'labelParams\']}}\n    </div>\n    <div ngbDropdownMenu aria-labelledby="dropdownBasic1">\n        <button *ngFor="let item of itemsArray" [ngClass]="{\'active\': selectedOption === item}" ngbDropdownItem (click)="selectOption(item)">{{item.label | translate: item.labelParams}}</button>\n    </div>\n</div>',styles:[""]}),(0,tslib_es6.Sn)("design:paramtypes",[])],UiDropdownRendererComponent);const dropdown_renderer_component_stories={title:"Grids/DropdownRenderer",component:UiDropdownRendererComponent,decorators:[(0,client.moduleMetadata)({imports:[]})]},Primary=(args=>({props:args})).bind({});Primary.args={}}}]);