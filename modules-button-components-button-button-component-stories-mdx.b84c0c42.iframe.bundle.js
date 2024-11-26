"use strict";(self.webpackChunkplatform_ui=self.webpackChunkplatform_ui||[]).push([[7114,4684],{"./libs/ui/src/lib/modules/button/components/button/button.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>UiButtonComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),action_button_type_enum=__webpack_require__("./libs/ui/src/lib/modules/button/enums/action-button-type.enum.ts"),action_button_size_enum=__webpack_require__("./libs/ui/src/lib/modules/button/enums/action-button-size.enum.ts"),action_button_icon_location_enum=__webpack_require__("./libs/ui/src/lib/modules/button/enums/action-button-icon-location.enum.ts");let UiButtonComponent=class UiButtonComponent{constructor(){this.text="",this.tooltipText="",this.type=action_button_type_enum.a.PRIMARY,this.size=action_button_size_enum.J.MEDIUM,this.iconLocation=action_button_icon_location_enum.A.prefix,this.icon="",this.disabled=!1,this.inversed=!1}ngOnInit(){}};UiButtonComponent.propDecorators={id:[{type:core.Input}],text:[{type:core.Input}],tooltipText:[{type:core.Input}],type:[{type:core.Input}],size:[{type:core.Input}],iconLocation:[{type:core.Input}],icon:[{type:core.Input}],disabled:[{type:core.Input}],inversed:[{type:core.Input}],clicked:[{type:core.Input}]},UiButtonComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"ui-button",template:'<button\n    [id]="\'button_\' + id"\n    class="btn {{ type }} {{ size }}"\n    [disabled]="disabled"\n    attr.aria-labelledby="{{ text }}"\n    ngbTooltip="{{tooltipText | translate}}"\n    [ngClass]="{ \'btn-inversed\': inversed === true && type === \'btn-primary\', disabled: disabled === true }"\n    (click)="(clicked !== undefined) ? clicked(this) : null "\n>\n    <ng-container *ngIf="iconLocation === \'prefix\'">\n        <i class="bi {{icon}}"></i>\n        {{ text | translate }}\n    </ng-container>\n    <ng-container *ngIf="iconLocation === \'suffix\'">\n        {{ text | translate }}\n        <i class="bi {{icon}}"></i>\n    </ng-container>\n</button>\n',styles:[""]})],UiButtonComponent)},"./libs/ui/src/lib/modules/button/enums/action-button-icon-location.enum.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var UiButtonIconLocationEnum;__webpack_require__.d(__webpack_exports__,{A:()=>UiButtonIconLocationEnum}),function(UiButtonIconLocationEnum){UiButtonIconLocationEnum.suffix="suffix",UiButtonIconLocationEnum.prefix="prefix"}(UiButtonIconLocationEnum||(UiButtonIconLocationEnum={}))},"./libs/ui/src/lib/modules/button/enums/action-button-size.enum.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var UiButtonSizeEnum;__webpack_require__.d(__webpack_exports__,{J:()=>UiButtonSizeEnum}),function(UiButtonSizeEnum){UiButtonSizeEnum.SMALL="btn-sm",UiButtonSizeEnum.MEDIUM="btn-md"}(UiButtonSizeEnum||(UiButtonSizeEnum={}))},"./libs/ui/src/lib/modules/button/enums/action-button-type.enum.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var UiButtonTypeEnum;__webpack_require__.d(__webpack_exports__,{a:()=>UiButtonTypeEnum}),function(UiButtonTypeEnum){UiButtonTypeEnum.PRIMARY="btn-primary",UiButtonTypeEnum.OUTLINE_PRIMARY="btn-outline-primary",UiButtonTypeEnum.LINK="btn-link",UiButtonTypeEnum.LINK_DANGER="btn-link-danger",UiButtonTypeEnum.DANGER="btn-danger",UiButtonTypeEnum.OUTLINE_DANGER="btn-outline-danger",UiButtonTypeEnum.SEPERATOR="btn-seperator"}(UiButtonTypeEnum||(UiButtonTypeEnum={}))},"./libs/ui/src/lib/modules/button/components/button/button.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>__WEBPACK_DEFAULT_EXPORT__});var tslib__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/ts3.9/client/index.js"),_geometricpanda_storybook_addon_badges__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@geometricpanda/storybook-addon-badges/dist/esm/index.js"),_storybook_testing_library__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/testing-library/dist/index.mjs"),_storybook_jest__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@storybook/jest/dist/index.mjs"),_button_component__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./libs/ui/src/lib/modules/button/components/button/button.component.ts"),_enums_action_button_type_enum__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./libs/ui/src/lib/modules/button/enums/action-button-type.enum.ts"),_enums_action_button_size_enum__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./libs/ui/src/lib/modules/button/enums/action-button-size.enum.ts"),_enums_action_button_icon_location_enum__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./libs/ui/src/lib/modules/button/enums/action-button-icon-location.enum.ts"),_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js"),_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/fesm2020/ng-bootstrap.mjs");const meta={title:"Components/Button",component:_button_component__WEBPACK_IMPORTED_MODULE_3__.E,args:{id:"btn-id-123",text:"This is a button",tooltipText:"Tooltip text",type:_enums_action_button_type_enum__WEBPACK_IMPORTED_MODULE_4__.a.PRIMARY,size:_enums_action_button_size_enum__WEBPACK_IMPORTED_MODULE_5__.J.MEDIUM,iconLocation:_enums_action_button_icon_location_enum__WEBPACK_IMPORTED_MODULE_6__.A.prefix,icon:"bi-balloon",disabled:!1,inversed:!1,clicked:e=>{console.debug("Button [clicked] was fired!",e.target)}},decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({declarations:[_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.md],imports:[_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.h.forRoot({loader:{provide:_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.Wr,useClass:_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.dx}})]})],parameters:{badges:[_geometricpanda_storybook_addon_badges__WEBPACK_IMPORTED_MODULE_1__.yq.STABLE],actions:{handles:["click"]},design:{type:"figma",url:"https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File"}}},__WEBPACK_DEFAULT_EXPORT__=meta,Primary={args:Object.assign(Object.assign({},meta.args),{type:_enums_action_button_type_enum__WEBPACK_IMPORTED_MODULE_4__.a.PRIMARY}),play:({canvasElement})=>(0,tslib__WEBPACK_IMPORTED_MODULE_9__.sH)(void 0,void 0,void 0,(function*(){const clickSpy=_storybook_jest__WEBPACK_IMPORTED_MODULE_10__.F.spyOn(console,"debug"),canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_2__.ux)(canvasElement);yield _storybook_testing_library__WEBPACK_IMPORTED_MODULE_2__.Q4.click(canvas.getByRole("button"),{delay:50}),yield(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_10__.E)(clickSpy).toHaveBeenCalled(),yield _storybook_testing_library__WEBPACK_IMPORTED_MODULE_2__.Q4.hover(canvas.getByRole("button"),{delay:500}),yield(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_10__.E)(canvas.getByRole("tooltip")).toBeTruthy(),yield(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_10__.E)(canvas.getByText("Tooltip text")).toBeTruthy()}))}},"./node_modules/@storybook/addon-docs/dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W8:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.Meta,gG:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.Story,hT:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.AddContext,mO:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.Wrapper});var _blocks__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/blocks/index.js")},"./libs/ui/src/lib/modules/button/components/button/button.component.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>button_button_component_stories,parameters:()=>parameters,parseChangelogToList:()=>parseChangelogToList,parseChangelogToTable:()=>parseChangelogToTable});__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.string.link.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/react/index.js");var esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),storybook_addon_badges_dist_esm=__webpack_require__("./node_modules/@geometricpanda/storybook-addon-badges/dist/esm/index.js"),button_component=(__webpack_require__("./libs/ui/src/lib/modules/button/components/button/button.component.stories.ts"),__webpack_require__("./libs/ui/src/lib/modules/button/components/button/button.component.ts"));const button_changelog_namespaceObject=JSON.parse('[{"date":"2024-04-30","change":"recent change","link":"https://somewhere.in/Jira-or-Github"},{"date":"2023-03-03","change":"another change","link":"https://somewhere.in/Jira-or-Github"},{"date":"2021-01-25","change":"Add button component","link":"https://somewhere.in/Jira-or-Github"}]');var _excluded=["components"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var parseChangelogToList=function parseChangelogToList(changes){return(0,esm.yg)("ul",null,changes.map((function(log){return(0,esm.yg)("li",null,(0,esm.yg)("strong",null,log.date),": ",log.change," [",(0,esm.yg)("a",{href:log.link},"link"),"]")})))},parseChangelogToTable=function parseChangelogToTable(changes){return(0,esm.yg)("table",null,(0,esm.yg)("thead",null,(0,esm.yg)("tr",null,(0,esm.yg)("th",null,"Date"),(0,esm.yg)("th",null,"Change"),(0,esm.yg)("th",null,"Link"))),(0,esm.yg)("tbody",null,changes.map((function(log){return(0,esm.yg)("tr",null,(0,esm.yg)("td",null,log.date),(0,esm.yg)("td",null,log.change),(0,esm.yg)("td",null,(0,esm.yg)("a",{href:log.link},"link")))}))))},parameters={badges:[storybook_addon_badges_dist_esm.yq.STABLE]},layoutProps={parseChangelogToList,parameters};function MDXContent(_ref){var components=_ref.components,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.indexOf(n)>=0)continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);return(0,esm.yg)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,esm.yg)(dist_esm.W8,{title:"Components/Button",component:button_component.E,parameters,mdxType:"Meta"}),(0,esm.yg)("h1",{id:"buttons"},"Buttons"),(0,esm.yg)("h2",{id:"description"},"Description"),(0,esm.yg)("p",null,"Ui-button is a wrapped component that can be used in forms or other components. It is a simple button with text and other optional configurations."),(0,esm.yg)("h3",{id:"quick-start"},"Quick start:"),(0,esm.yg)("br",null),(0,esm.yg)(dist_esm.gG,{id:"components-button--primary",mdxType:"Story"}),(0,esm.yg)("pre",null,(0,esm.yg)("code",{parentName:"pre",className:"language-html"},'<ui-button \n    [id]="componentId"\n    [text]="\'This is a button\'"\n    [tooltipText]="\'This is a tooltip!\'"\n    [icon]="\'bi-balloon\'"\n></ui-button>\n')),(0,esm.yg)("h2",{id:"change-logs"},"Change logs"),(0,esm.yg)(dist_esm.mO,{mdxType:"Wrapper"},parseChangelogToList(button_changelog_namespaceObject)),(0,esm.yg)(dist_esm.mO,{mdxType:"Wrapper"},parseChangelogToTable(button_changelog_namespaceObject)),(0,esm.yg)("h2",{id:"related"},"Related"),(0,esm.yg)("ul",null,(0,esm.yg)("li",{parentName:"ul"},(0,esm.yg)("a",{parentName:"li",href:"?path=/docs/components-action-buttons-new--primary"},"Action Buttons"))),(0,esm.yg)("h2",{id:"diagrams-or-references"},"Diagrams or References"),(0,esm.yg)("ul",null,(0,esm.yg)("li",{parentName:"ul"},(0,esm.yg)("a",{parentName:"li",href:"https://www.figma.com/file/QJ8Hcf6Sut2eAP0AHq0zA0/Meridian---Core-Components?node-id=0%3A",target:"_blank",rel:"nofollow noopener noreferrer"},"Meridian buttons (Figma)"),"**")))}MDXContent.isMDXComponent=!0;var __page=function __page(){throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};var componentMeta={title:"Components/Button",parameters,component:button_component.E,includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return(0,esm.yg)(dist_esm.hT,{mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},(0,esm.yg)(MDXContent,null))}});const button_button_component_stories=componentMeta},"./node_modules/core-js/modules/es.string.link.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var $=__webpack_require__("./node_modules/core-js/internals/export.js"),createHTML=__webpack_require__("./node_modules/core-js/internals/create-html.js");$({target:"String",proto:!0,forced:__webpack_require__("./node_modules/core-js/internals/string-html-forced.js")("link")},{link:function link(url){return createHTML(this,"a","href",url)}})}}]);