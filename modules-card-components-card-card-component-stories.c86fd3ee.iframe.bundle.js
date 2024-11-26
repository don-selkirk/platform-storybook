"use strict";(self.webpackChunkplatform_ui=self.webpackChunkplatform_ui||[]).push([[658],{"./libs/ui/src/lib/modules/card/components/card/card.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>UiCardComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var UiCardTitleSizeEnum,core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),BehaviorSubject=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/BehaviorSubject.js");!function(UiCardTitleSizeEnum){UiCardTitleSizeEnum.lg="lg",UiCardTitleSizeEnum.md="md",UiCardTitleSizeEnum.sm="sm"}(UiCardTitleSizeEnum||(UiCardTitleSizeEnum={}));let UiCardComponent=class UiCardComponent{constructor(viewContainerRef,cardRef){this.viewContainerRef=viewContainerRef,this.cardRef=cardRef,this.closeButtonClick=new core.EventEmitter,this.showHeader$=new BehaviorSubject.t(!1),this.showFooter$=new BehaviorSubject.t(!1),this.showCloseButton$=new BehaviorSubject.t(!1),this.maxHeight$=new BehaviorSubject.t(0),this.titleText$=new BehaviorSubject.t(""),this.titleSize$=new BehaviorSubject.t(UiCardTitleSizeEnum.md),this.showCustomLayout$=new BehaviorSubject.t(!1),this.UiCardTitleSizeEnum=UiCardTitleSizeEnum}set showCustomLayout(val){this.showCustomLayout$.next(val)}set showHeader(val){this.showHeader$.next(val)}set showFooter(val){this.showFooter$.next(val)}set showCloseButton(val){this.showCloseButton$.next(val)}set maxHeight(val){this.maxHeight$.next(val)}set titleText(val){this.titleText$.next(val)}set titleSize(val){this.titleSize$.next(val)}ngOnInit(){}onCloseButtonClick(cardId,cardComponent){this.closeButtonClick.emit({cardId,cardComponent})}};UiCardComponent.ctorParameters=()=>[{type:core.ViewContainerRef},{type:core.ElementRef}],UiCardComponent.propDecorators={id:[{type:core.Input}],showCustomLayout:[{type:core.Input}],showHeader:[{type:core.Input}],showFooter:[{type:core.Input}],showCloseButton:[{type:core.Input}],maxHeight:[{type:core.Input}],titleText:[{type:core.Input}],titleSize:[{type:core.Input}],actionButtons:[{type:core.Input}],closeButtonClick:[{type:core.Output}]},UiCardComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"ui-card",template:'<div class="card" [id]=" id+\'_card_div\'">    \n    <ng-container>\n        <div class="card-header" *ngIf="(showCustomLayout$ | async) === false && showHeader$ | async">\n            \x3c!-- TODO: This may conflict with ACP-45727 - all modal headers are to be h4 --\x3e\n            <h5 *ngIf="(titleSize$ | async) === UiCardTitleSizeEnum.sm" class="d-inline-block">{{titleText$ | async}}</h5>\n            <h4 *ngIf="(titleSize$ | async) === UiCardTitleSizeEnum.md" class="d-inline-block">{{titleText$ | async}}</h4>\n            <h3 *ngIf="(titleSize$ | async) === UiCardTitleSizeEnum.lg" class="d-inline-block">{{titleText$ | async}}</h3>\n            <button *ngIf="showCloseButton$ | async" type="button" class="btn-close" aria-label="Close" style="float: right;" (click)="onCloseButtonClick(id, this)"></button>\n        </div> \n        <div class="card-body" [ngClass]="{\'card-body\': (showCustomLayout$ | async) === false}" [style.maxHeight]="maxHeight$.getValue() === 0 ? null : maxHeight$.getValue() + \'px\'">\n            <ng-content></ng-content>        \n        </div>    \n        <div class="card-footer" *ngIf="(showCustomLayout$ | async) === false && showFooter$ | async">\n            <ui-action-buttons-new [actionButtons]="actionButtons"></ui-action-buttons-new>\n        </div>    \n    </ng-container>\n</div>\n',styles:[""]}),(0,tslib_es6.Sn)("design:paramtypes",[core.ViewContainerRef,core.ElementRef])],UiCardComponent)},"./libs/ui/src/lib/modules/card/components/card/card.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/ts3.9/client/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Card",component:__webpack_require__("./libs/ui/src/lib/modules/card/components/card/card.component.ts").O,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[]})]},Primary=(args=>({props:args})).bind({});Primary.args={id:"",showCustomLayout:"",showHeader:"",showFooter:"",showCloseButton:"",maxHeight:"",titleText:"",titleSize:""}}}]);