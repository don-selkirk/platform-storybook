"use strict";(self.webpackChunkplatform_ui=self.webpackChunkplatform_ui||[]).push([[6750],{"./libs/ui/src/lib/modules/grid/components/pill-renderer/pill-renderer.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{xm:()=>UiPillClassEnum,Wj:()=>UiPillRendererComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var UiBadgeTypeEnum,UiPackageEnum,UiPackageClassEnum,UiStatusEnum,UiStatusClassEnum,UiIdentifierEnum,UiIdentifierClassEnum,UiPillEnum,UiPillClassEnum,core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");!function(UiBadgeTypeEnum){UiBadgeTypeEnum.status="status",UiBadgeTypeEnum.package="package",UiBadgeTypeEnum.notification="notification",UiBadgeTypeEnum.identifier="identifier",UiBadgeTypeEnum.pill="pill"}(UiBadgeTypeEnum||(UiBadgeTypeEnum={})),function(UiPackageEnum){UiPackageEnum.gold="gold",UiPackageEnum.silver="silver",UiPackageEnum.platinum="platinum"}(UiPackageEnum||(UiPackageEnum={})),function(UiPackageClassEnum){UiPackageClassEnum.gold="dot-gold",UiPackageClassEnum.silver="dot-silver",UiPackageClassEnum.platinum="dot-platinum"}(UiPackageClassEnum||(UiPackageClassEnum={})),function(UiStatusEnum){UiStatusEnum.neutral="neutral",UiStatusEnum.success="success",UiStatusEnum.info="info",UiStatusEnum.danger="danger",UiStatusEnum.caution="caution",UiStatusEnum.warning="warning",UiStatusEnum.tertiary="tertiary",UiStatusEnum.dimgrey="dimgrey"}(UiStatusEnum||(UiStatusEnum={})),function(UiStatusClassEnum){UiStatusClassEnum.neutral="dot-neutral",UiStatusClassEnum.success="dot-success",UiStatusClassEnum.caution="dot-caution",UiStatusClassEnum.warning="dot-warning",UiStatusClassEnum.danger="dot-danger",UiStatusClassEnum.info="dot-info",UiStatusClassEnum.tertiary="dot-tertiary",UiStatusClassEnum.dimgrey="dot-dimgrey"}(UiStatusClassEnum||(UiStatusClassEnum={})),function(UiIdentifierEnum){UiIdentifierEnum.neutral="neutral",UiIdentifierEnum.category1="category1",UiIdentifierEnum.category2="category2",UiIdentifierEnum.category3="category3",UiIdentifierEnum.category4="category4",UiIdentifierEnum.category5="category5",UiIdentifierEnum.category6="category6"}(UiIdentifierEnum||(UiIdentifierEnum={})),function(UiIdentifierClassEnum){UiIdentifierClassEnum.Neutral="identifier-neutral",UiIdentifierClassEnum.category1="identifier-category-1",UiIdentifierClassEnum.category2="identifier-category-2",UiIdentifierClassEnum.category3="identifier-category-3",UiIdentifierClassEnum.category4="identifier-category-4",UiIdentifierClassEnum.category5="identifier-category-5",UiIdentifierClassEnum.category6="identifier-category-6"}(UiIdentifierClassEnum||(UiIdentifierClassEnum={})),function(UiPillEnum){UiPillEnum.neutral="neutral",UiPillEnum.category1="category1",UiPillEnum.category2="category2",UiPillEnum.category3="category3",UiPillEnum.category4="category4",UiPillEnum.category5="category5",UiPillEnum.category6="category6",UiPillEnum.success="success",UiPillEnum.warning="warning",UiPillEnum.danger="danger",UiPillEnum.info="info",UiPillEnum.extreme="extreme"}(UiPillEnum||(UiPillEnum={})),function(UiPillClassEnum){UiPillClassEnum.neutral="badge-neutral",UiPillClassEnum.category1="badge-category-1",UiPillClassEnum.category2="badge-category-2",UiPillClassEnum.category3="badge-category-3",UiPillClassEnum.category4="badge-category-4",UiPillClassEnum.category5="badge-category-5",UiPillClassEnum.category6="badge-category-6",UiPillClassEnum.success="badge-success",UiPillClassEnum.warning="badge-warning",UiPillClassEnum.danger="badge-danger",UiPillClassEnum.info="badge-info",UiPillClassEnum.extreme="badge-extreme"}(UiPillClassEnum||(UiPillClassEnum={}));let UiPillRendererComponent=class UiPillRendererComponent{constructor(){this.pillClasses=[],this.pillText="",this.pillTextTranslationId="",this.color="",this.type="",this.cls=""}refresh(params){return this.update(params),!0}ngOnInit(){}agInit(params){this.update(params)}ngOnDestroy(){}clickedHandler(e){void 0!==this.params.clicked&&this.params.clicked(this.params.value)}update(params){this.params=params,this.pillClasses=params.pillClasses,this.pillText=params.pillText,this.pillTextTranslationId=params.pillTextTranslationId,this.type=params.type,this.color=params.color,this.cls="",this.type===UiBadgeTypeEnum.status&&(this.cls=UiStatusClassEnum[this.color]),this.type===UiBadgeTypeEnum.package&&(this.cls=UiPackageClassEnum[this.color]),this.type===UiBadgeTypeEnum.pill&&(this.cls=UiPillClassEnum[this.color]),this.type,UiBadgeTypeEnum.notification,this.type,UiBadgeTypeEnum.identifier}};UiPillRendererComponent.ctorParameters=()=>[],UiPillRendererComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"ui-pill-renderer",template:'\x3c!-- Status --\x3e\n<div class="" (click)="clickedHandler($event)" *ngIf="type=== \'status\'">\n    <span class="dot sm" [ngClass]="cls"></span>\n    <span class="dot-text sm">\n        <ng-container *ngIf="pillText !== \'\'">\n            {{pillText | translate}}\n        </ng-container>\n    </span>\n</div>\n\n\x3c!-- Pill --\x3e\n<div (click)="clickedHandler($event)" *ngIf="type=== \'pill\'">\n    <span class="badge rounded-pill noHover sm" [ngClass]="cls">\n        <ng-container *ngIf="pillText !== \'\'">\n            {{pillText | translate}}\n        </ng-container>\n    </span>\n</div>\n\n\x3c!-- Package --\x3e\n<div (click)="clickedHandler($event)" *ngIf="type=== \'package\'">\n    <span class="dot md" [ngClass]="cls"></span>\n    <span class="package-text">\n        <ng-container *ngIf="pillText !== \'\'">\n            {{pillText | translate}}\n        </ng-container>\n    </span>\n</div>\n\n\x3c!-- Notification --\x3e\n<div (click)="clickedHandler($event)" *ngIf="type === \'notification\'">\n    <span class="dot-notification sm">\n        <ng-container *ngIf="pillText !== \'\'">\n            {{pillText | translate}}\n        </ng-container>\n    </span>\n</div>\n\n\x3c!-- Identifier --\x3e\n<div (click)="clickedHandler($event)" *ngIf="type === \'identifier\'">\n    <span class="identifier identifier-neutral sm">\n        <ng-container *ngIf="pillText !== \'\'">\n            {{pillText | translate}}\n        </ng-container>\n    </span>\n</div>',styles:[""]}),(0,tslib_es6.Sn)("design:paramtypes",[])],UiPillRendererComponent)},"./libs/ui/src/lib/modules/grid/components/pill-renderer/pill-renderer.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/ts3.9/client/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Grids/PillRenderer",component:__webpack_require__("./libs/ui/src/lib/modules/grid/components/pill-renderer/pill-renderer.component.ts").Wj,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[]})]},Primary=(args=>({props:args})).bind({});Primary.args={}}}]);