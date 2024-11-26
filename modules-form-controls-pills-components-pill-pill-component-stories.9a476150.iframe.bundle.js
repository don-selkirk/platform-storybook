"use strict";(self.webpackChunkplatform_ui=self.webpackChunkplatform_ui||[]).push([[7378],{"./libs/ui/src/lib/modules/form-controls/pills/components/pill/pill.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>UiPillComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),pill_color_enum=__webpack_require__("./libs/ui/src/lib/modules/form-controls/pills/enums/pill-color.enum.ts"),pill_size_enum=__webpack_require__("./libs/ui/src/lib/modules/form-controls/pills/enums/pill-size.enum.ts");let UiPillComponent=class UiPillComponent{constructor(){this.xButtonClick=new core.EventEmitter,this.color=pill_color_enum.E.neutral,this.size=pill_size_enum.C.md,this.hasCloseButton=!1,this.noHover=!0,this.isTooltipDisabled=!0}ngOnInit(){this.generatedId="pill-inner-"+this.id}ngAfterViewInit(){setTimeout((()=>{this.checkColumnWidth()}),100)}checkColumnWidth(){this.pill&&this.pill.nativeElement.firstChild.offsetWidth>=this.pill.nativeElement.firstChild.scrollWidth?this.isTooltipDisabled=!0:this.isTooltipDisabled=!1}onResize(){this.checkColumnWidth()}onCloseClick(){this.pill.nativeElement.remove(),this.xButtonClick.emit(this)}};UiPillComponent.ctorParameters=()=>[],UiPillComponent.propDecorators={pill:[{type:core.ViewChild,args:["pill"]}],xButtonClick:[{type:core.Output}],pillText:[{type:core.Input}],color:[{type:core.Input}],size:[{type:core.Input}],hasCloseButton:[{type:core.Input}],noHover:[{type:core.Input}],icon:[{type:core.Input}],value:[{type:core.Input}],id:[{type:core.Input}],onResize:[{type:core.HostListener,args:["window:resize"]}]},UiPillComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"ui-pill",template:'<span class="pill">\n    <span\n        #pill\n        class="badge {{ color }} rounded-pill {{ size }} float-start"\n        [ngClass]="{ noHover: noHover === true }"\n        *ngIf="pillText !== undefined || null"\n        [id]="id"\n        [ngbTooltip]="pillText"\n        [disableTooltip]="isTooltipDisabled"\n    >\n        <span class="pill-inner" [id]="generatedId">\n            <i *ngIf="icon !== undefined" class="bi {{ icon }}"></i>\n            <span class="pill-text">{{ pillText }}</span>\n        </span>\n        <i *ngIf="hasCloseButton === true" class="bi bi-x-lg" (click)="onCloseClick()"></i>\n    </span>\n</span>\n',styles:[""]}),(0,tslib_es6.Sn)("design:paramtypes",[])],UiPillComponent)},"./libs/ui/src/lib/modules/form-controls/pills/enums/pill-color.enum.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var UiPillColorEnum;__webpack_require__.d(__webpack_exports__,{E:()=>UiPillColorEnum}),function(UiPillColorEnum){UiPillColorEnum.neutral="badge-neutral",UiPillColorEnum.category1="badge-category-1",UiPillColorEnum.category2="badge-category-2",UiPillColorEnum.category3="badge-category-3",UiPillColorEnum.category4="badge-category-4",UiPillColorEnum.category5="badge-category-5",UiPillColorEnum.category6="badge-category-6",UiPillColorEnum.success="badge-success",UiPillColorEnum.warning="badge-warning",UiPillColorEnum.danger="badge-danger",UiPillColorEnum.info="badge-info",UiPillColorEnum.extreme="badge-extreme"}(UiPillColorEnum||(UiPillColorEnum={}))},"./libs/ui/src/lib/modules/form-controls/pills/enums/pill-size.enum.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var UiPillSizeEnum;__webpack_require__.d(__webpack_exports__,{C:()=>UiPillSizeEnum}),function(UiPillSizeEnum){UiPillSizeEnum.sm="sm",UiPillSizeEnum.md="md",UiPillSizeEnum.lg="lg"}(UiPillSizeEnum||(UiPillSizeEnum={}))},"./libs/ui/src/lib/modules/form-controls/pills/components/pill/pill.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/ts3.9/client/index.js"),_pill_component__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./libs/ui/src/lib/modules/form-controls/pills/components/pill/pill.component.ts"),_enums_pill_color_enum__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/ui/src/lib/modules/form-controls/pills/enums/pill-color.enum.ts"),_enums_pill_size_enum__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./libs/ui/src/lib/modules/form-controls/pills/enums/pill-size.enum.ts"),_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/fesm2020/ng-bootstrap.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Pill",component:_pill_component__WEBPACK_IMPORTED_MODULE_1__.t,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({declarations:[_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.md],imports:[]})]},Primary=(args=>({props:args})).bind({});Primary.args={pillText:"Text",color:_enums_pill_color_enum__WEBPACK_IMPORTED_MODULE_2__.E.neutral,size:_enums_pill_size_enum__WEBPACK_IMPORTED_MODULE_3__.C.md,hasCloseButton:!1,noHover:!0,icon:"bi-house",value:"",id:"pillId"}}}]);