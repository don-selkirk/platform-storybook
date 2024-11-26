"use strict";(self.webpackChunkplatform_ui=self.webpackChunkplatform_ui||[]).push([[5601],{"./libs/ui/src/lib/modules/form/form-control-base/form-control-base.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>UiFormControlBaseComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),fesm2020_forms=__webpack_require__("./node_modules/@angular/forms/fesm2020/forms.mjs");__webpack_require__("./libs/ui/src/lib/modules/form/form-base/form-base.component.ts");let UiFormControlBaseComponent=class UiFormControlBaseComponent{constructor(ngControl){this.ngControl=ngControl,this.forceDisabled=!1,this.label="",this.placeholder="",this.prefixIcon="",this.suffixIcon="",this.prefixText="",this.suffixText="",this.helpText="",this.showHelpText=!0,this.showSuccessValidation=!1,this.showErrorValidation=!0,this.showInfoIcon=!0,this.infoText="",this.patternErrorText="",this.errorStrings={},this.setValueOnChange=!0,this.valueChange=new core.EventEmitter,this.value="",this.defaultErrorStrings={},this.Validators=fesm2020_forms.Validators,this.ngControl&&(this.ngControl.valueAccessor=this)}set config(config){if(this._config=config,void 0!==config)for(const[key,value]of Object.entries(this._config))null!==value&&""!==value&&(this[key]=value)}get config(){return this._config}ngOnInit(){void 0!==this.formComponent&&void 0!==this.formComponent.formControls[this.formControlName].config&&(this.config=this.formComponent.formControls[this.formControlName].config),void 0!==this.form&&(this._subscription=this.form.controls[this.formControlName].valueChanges.subscribe((e=>{this.setValueOnChange&&this.form.controls[this.formControlName].setValue(e,{emitEvent:!1})}))),this.defaultErrorStrings={minlength:{stringCode:"COMMON.MIN_LENGTH_OF"},maxlength:{stringCode:"COMMON.MAX_LENGTH_OF"},min:{stringCode:"COMMON.MIN_VALUE_OF"},max:{stringCode:"COMMON.MAX_VALUE_OF"},required:{stringCode:"COMMON.FIELD_IS_REQUIRED"},email:{stringCode:"COMMON.ENTER_VALID_EMAIL"},pattern:{stringCode:this.patternErrorText}},this.setErrorString()}setErrorString(){this.errorStrings=Object.assign(Object.assign({},this.defaultErrorStrings),this.errorStrings),void 0!==this.form&&null!==this.form.controls[this.formControlName].errors&&void 0!==this.config&&void 0!==this.config.errorStrings&&(this.errorStrings=Object.assign(Object.assign({},this.errorStrings),this.config.errorStrings))}ngOnDestroy(){var _a;null===(_a=this._subscription)||void 0===_a||_a.unsubscribe()}writeValue(value){this.value=value,this.setErrorString()}setDisabledState(isDisabled){this.disabled=isDisabled}registerOnChange(fn){this.onChange=fn}registerOnTouched(fn){this.onTouched=fn}onChange(e){}onTouched(){}concatErrors(arr1,arr2){return arr1?arr2?Object.assign(Object.assign({},arr1),arr2):arr1:arr2}};UiFormControlBaseComponent.ctorParameters=()=>[{type:fesm2020_forms.NgControl,decorators:[{type:core.Self},{type:core.Optional}]}],UiFormControlBaseComponent.propDecorators={formControlName:[{type:core.Input,args:["formControlName"]}],id:[{type:core.Input}],disabled:[{type:core.Input}],forceDisabled:[{type:core.Input}],label:[{type:core.Input}],placeholder:[{type:core.Input}],type:[{type:core.Input}],form:[{type:core.Input}],formComponent:[{type:core.Input}],prefixIcon:[{type:core.Input}],suffixIcon:[{type:core.Input}],prefixText:[{type:core.Input}],suffixText:[{type:core.Input}],helpText:[{type:core.Input}],showHelpText:[{type:core.Input}],showSuccessValidation:[{type:core.Input}],showErrorValidation:[{type:core.Input}],showInfoIcon:[{type:core.Input}],infoText:[{type:core.Input}],patternErrorText:[{type:core.Input}],errorStrings:[{type:core.Input}],content:[{type:core.Input}],tag:[{type:core.Input}],setValueOnChange:[{type:core.Input}],config:[{type:core.Input}],valueChange:[{type:core.Output}]},UiFormControlBaseComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"ui-form-control-base",template:'<div *ngIf="form !== undefined">\n\n    \x3c!-- Label --\x3e\n    <label [id]="id + \'_Label\'" for="formControlName">\n        {{label}}\n        \x3c!-- Required Asterix --\x3e\n        <span [id]="id + \'_RequiredAsterisk\'" *ngIf="form.controls[formControlName].hasValidator(Validators.required)">*</span>\n    </label>\n\n    \x3c!-- Info Icon with Tooltip (infoText) --\x3e\n    <i [id]="id + \'_InfoIcon\'" *ngIf="showInfoIcon && infoText !== \'\'" class="bi bi-question-circle-fill" placement="top" [ngbTooltip]="infoText"></i>\n\n    <div class="input-group">\n\n        \x3c!-- Prefix Icon --\x3e\n        <span *ngIf="prefixIcon !== \'\'" class="input-group-text">\n            <i [id]="id + \'_PrefixIcon\'" class="bi" aria-hidden="true" [ngClass]="prefixIcon"></i>\n        </span>\n\n        \x3c!-- Prefix Text --\x3e\n        <span [id]="id + \'_PrefixText\'" *ngIf="prefixText !== \'\'" class="input-group-text">\n            {{prefixText}}\n        </span>\n\n        <div #contentWrapper class="w-100">\n            <ng-content></ng-content>\n        </div>\n\n        \x3c!-- Suffix Icon --\x3e\n        <span [id]="id + \'_SuffixIcon\'" *ngIf="suffixIcon !== \'\'" class="input-group-text">\n            <i class="bi" aria-hidden="true" [ngClass]="suffixIcon"></i>\n        </span>\n\n        \x3c!-- Suffix Text --\x3e\n        <span [id]="id + \'_SuffixText\'" *ngIf="suffixText !== \'\'" class="input-group-text">\n            {{suffixText}}\n        </span>\n\n    </div>\n\n    <div class="feedback">\n\n        \x3c!-- Success Feedback Text --\x3e\n        <div [id]="id + \'_SuccessText\'" class="success-text" *ngIf="form.controls[formControlName].valid && showSuccessValidation">\n            {{ \'COMMON.LOOKS_GOOD\' | translate }}\n        </div>\n\n        \x3c!-- Error Feedback Text --\x3e\n        <div class="error-text" *ngIf="form.controls[formControlName].invalid && form.controls[formControlName].touched && showErrorValidation">\n            <div *ngFor="let item of form.controls[formControlName].errors | keyvalue">\n                <ng-container *ngIf="errorStrings[item.key] !== undefined">\n                    {{errorStrings[item.key].stringCode | translate: concatErrors(errorStrings[item.key].stringParams, form.controls[formControlName].errors[item.key]) }} \n                </ng-container>\n            </div>\n        </div>\n\n        \x3c!-- Help Text --\x3e\n        \x3c!-- Show only if Error Feedback Text is hidden  --\x3e\n        <div *ngIf="!(form.controls[formControlName].invalid && form.controls[formControlName].touched && showErrorValidation)">\n            <div [id]="id + \'_HelpText\'" *ngIf="showHelpText && helpText !== \'\'" class="help-text">{{helpText}}</div>\n        </div>\n    </div>\n</div>',styles:[""]}),(0,tslib_es6.Sn)("design:paramtypes",[fesm2020_forms.NgControl])],UiFormControlBaseComponent)},"./libs/ui/src/lib/modules/form/rich-text-editor/rich-text-editor.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>rich_text_editor_component_stories});var client=__webpack_require__("./node_modules/@storybook/angular/dist/ts3.9/client/index.js"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),quill=__webpack_require__("./node_modules/quill/dist/quill.js"),sanitize_html=__webpack_require__("./node_modules/sanitize-html/index.js"),sanitize_html_default=__webpack_require__.n(sanitize_html);const Quill=quill,Clipboard=Quill.import("modules/clipboard"),Delta=Quill.import("delta");class UiPasteClipboard extends Clipboard{onPaste(e){if(e.defaultPrevented||!this.quill.isEnabled())return;const range=this.quill.getSelection();let delta=(new Delta).retain(range.index);if(e&&e.clipboardData&&e.clipboardData.types&&e.clipboardData.getData){const text=(e.originalEvent||e).clipboardData.getData("text/html")||(e.originalEvent||e).clipboardData.getData("text/plain"),newEl=document.createElement("div");newEl.id="paste-"+this.quill.id,newEl.innerHTML=text,newEl.querySelectorAll("span").forEach((el=>{let newHtml=el.innerHTML;"underline"!==el.style.textDecoration&&"underline"!==el.style.textDecorationLine||(newHtml="<u>"+newHtml+"</u>"),"700"===el.style.fontWeight&&(newHtml="<strong>"+newHtml+"</strong>"),"italic"===el.style.fontStyle&&(newHtml="<em>"+newHtml+"</em>"),el.outerHTML=newHtml}));const unsanitizedText=sanitize_html_default()(newEl.innerHTML,{allowedTags:["i","em","strong","u","a","small","p","h4","h5","sup","sub","ol","ul","li","br"],transformTags:{h1:"h4",h2:"h4",h3:"h5"},allowedAttributes:{a:["href","target: blank"]},allowedClasses:[]});newEl.remove();const cleanedText=this.convert(unsanitizedText);return e.stopPropagation(),e.preventDefault(),delta=delta.concat(cleanedText).delete(range.length),this.quill.updateContents(delta,Quill.sources.USER),this.quill.setSelection(delta.length()-range.length,Quill.sources.SILENT),!1}}}var form_control_base_component=__webpack_require__("./libs/ui/src/lib/modules/form/form-control-base/form-control-base.component.ts");let UiRichTextEditorComponent=class UiRichTextEditorComponent extends form_control_base_component.I{constructor(){super(...arguments),this.Quill=quill}ngOnInit(){this.showSuccessValidation=!1,this.modules={toolbar:!1},this.Quill.register("modules/clipboard",UiPasteClipboard)}getSanitizedValue(){return this.sanitizedValue}onChangeEditor($event){this.sanitizedValue=$event.text.trim(),this.valueChange.emit($event)}};UiRichTextEditorComponent.propDecorators={editor:[{type:core.ViewChild,args:["editor"]}]},UiRichTextEditorComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"ui-rich-text-editor",template:'<ng-container [formGroup]="form"\n    >\x3c!-- This formGroup is required to remove formGroup missing error--\x3e\n    <ui-form-control-base\n        [label]="label"\n        [formControlName]="formControlName"\n        [form]="form"\n        [placeholder]="placeholder"\n        [showHelpText]="showHelpText"\n        [showSuccessValidation]="showSuccessValidation"\n        [showInfoIcon]="showInfoIcon"\n        [infoText]="infoText"\n        [helpText]="helpText"\n        [setValueOnChange]="false"\n    >\n        <div class="rich-text-editor-container">\n            <ui-rich-text-editor-toolbar [editor]="editor"></ui-rich-text-editor-toolbar>\n            <quill-editor\n                #editor\n                id="editor"\n                [formControlName]="formControlName"\n                [ngClass]="{\n                    \'is-invalid\': form.controls[formControlName].invalid && form.controls[formControlName].touched && showErrorValidation,\n                    \'is-valid\': form.controls[formControlName].valid && showSuccessValidation\n                }"\n                [placeholder]="\'COMMON.TEXT_EDITOR.TYPE_IMPORTANT_INFO_HERE\' | translate"\n                [modules]="modules"\n                (onContentChanged)="onChangeEditor($event)"\n            >\n            </quill-editor>\n        </div>\n    </ui-form-control-base>\n</ng-container>\n',styles:[""]})],UiRichTextEditorComponent);var ngx_translate_core=__webpack_require__("./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js"),ngx_quill=__webpack_require__("./node_modules/ngx-quill/fesm2020/ngx-quill.mjs"),rich_text_editor_toolbar_component=__webpack_require__("./libs/ui/src/lib/modules/form/rich-text-editor/components/toolbar/rich-text-editor-toolbar.component.ts"),ng_bootstrap=__webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/fesm2020/ng-bootstrap.mjs");const rich_text_editor_component_stories={title:"Forms/RichTextEditor",component:UiRichTextEditorComponent,subcomponents:{UiRichTextEditorToolbarComponent:rich_text_editor_toolbar_component.B},decorators:[(0,client.moduleMetadata)({declarations:[UiRichTextEditorComponent,rich_text_editor_toolbar_component.B],imports:[ng_bootstrap.UN,ngx_quill.Qs,ngx_translate_core.h.forRoot({loader:{provide:ngx_translate_core.Wr,useClass:ngx_translate_core.dx}})]})]},Primary=(args=>({props:args})).bind({});Primary.args={id:"rich-text-editor",form:"form",label:"Rich Text Editor",placeholder:"Enter text here",disabled:!1,required:!1,formControlName:"quill",UiRichTextEditorToolbarComponent:rich_text_editor_toolbar_component.B,editor:ngx_quill.i9,Quill:quill}}}]);