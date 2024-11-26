"use strict";(self.webpackChunkplatform_ui=self.webpackChunkplatform_ui||[]).push([[3354],{"./libs/ui/src/lib/modules/form-controls/checkbox/checkbox.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>UiCheckboxComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),form_control_base_component=__webpack_require__("./libs/ui/src/lib/modules/form-controls/form-control-base/form-control-base.component.ts");let UiCheckboxComponent=class UiCheckboxComponent extends form_control_base_component.I{constructor(){super(...arguments),this.inline=!1,this.showPointer=!0}};UiCheckboxComponent.propDecorators={options:[{type:core.Input}],inline:[{type:core.Input}],showPointer:[{type:core.Input}]},UiCheckboxComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"ui-checkbox",template:'\n\n<div *ngIf="form !== undefined" class="pt-1">\n\n    <div class="form-check " [ngClass]="{ \'form-check-inline\': inline === true }">\n         <input\n            [id]="id + \'_Checkbox\'"\n            [name]="formControlName"\n            type="checkbox"\n            class="form-check-input"\n            [ngModel]="value"\n            [placeholder]="placeholder"\n            [disabled]="disabled"\n            (ngModelChange)="onChange($event)"\n            [ngClass]="{\'pointer\' : !disabled && showPointer}"\n        />\n\n        <label\n            [id]="id + \'_Label\'"\n            [for]="id + \'_Checkbox\'"\n            class="form-check-label d-inline-block"\n            [ngClass]="{\'pointer\' : !disabled && showPointer}"\n            >\n            {{label}}\n            <span [id]="id + \'_RequiredAsterisk\'" *ngIf="form.controls[formControlName].hasValidator(Validators.requiredTrue)">*</span>\n        </label>\n        <i *ngIf="showInfoIcon && infoText !== \'\'" class="bi bi-question-circle-fill d-inline-block" placement="top" [ngbTooltip]="infoText"></i>\n\n    </div>\n\n    <div class="error-text d-inline-block ps-1" style="margin-top: 0px;" *ngIf="form.controls[formControlName].invalid && showErrorValidation">\n        <div *ngIf="form.controls[formControlName].errors">\n            <div [id]="id + \'_RequiredTrueErrorText\'" *ngIf="form.controls[formControlName].errors.requiredTrue">\n                {{ \'COMMON.REQUIRED_FIELD\' | translate }}\n            </div>\n            <div [id]="id + \'_RequiredErrorText\'" *ngIf="form.controls[formControlName].errors.required">\n                {{ \'COMMON.REQUIRED_FIELD\' | translate }}\n            </div>\n        </div>\n    </div>\n    <div [id]="id + \'_HelpText\'" *ngIf="showHelpText && helpText !== \'\'" id="" class="help-text">{{helpText}}</div>\n\n</div>\n',styles:[".form-check-inline {\n  width: max-content;\n  margin-right: 0.5rem;\n}"]})],UiCheckboxComponent)},"./libs/ui/src/lib/modules/form-controls/form-base/form-base.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>UiFormBaseComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),fesm2020_forms=__webpack_require__("./node_modules/@angular/forms/fesm2020/forms.mjs"),Subject=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subject.js");let UiFormBaseComponent=class UiFormBaseComponent{constructor(){this.formStatusChange=new core.EventEmitter,this.formClosed=new core.EventEmitter,this.formSubmitted=new core.EventEmitter,this.payload={},this.modeChanged=!1,this.showSuccessValidation=!1,this.showErrorValidation=!0,this.showHelpText=!0,this.showInfoIcon=!0,this.Validators=fesm2020_forms.Validators,this._ngUnsubscribe=new Subject.B,this._editMode=!1}set editMode(value){this._editMode=value,!0===this._editMode?this.enableAllInputs():this.disableAllInputs()}get editMode(){return this._editMode}ngOnInit(){}ngOnDestroy(){this._ngUnsubscribe.next(null),this._ngUnsubscribe.complete()}createForm(formControls){this.form=new fesm2020_forms.FormGroup({});for(const[key,value]of Object.entries(formControls)){const newControl=new fesm2020_forms.FormControl(value.value,{validators:value.validators});this.form.setControl(key,newControl)}this.editMode=!1}setValues(FormValues){Object.keys(this.form.controls).forEach((key=>{this.form.controls[key].setValue(FormValues[key])}))}viewForm(){this.editMode=!1}editForm(){this._initialValues=JSON.parse(JSON.stringify(this.form.value)),this.editMode=!0}clearForm(){this._initialValues=JSON.parse(JSON.stringify(this.form.value)),this.form.reset(),this.payload={}}cancelForm(){this.form.reset(this._initialValues),this.payload={},this.editMode=!1}closeForm(){this.editMode=!1,this.formClosed.emit()}submitForm(){return Object.keys(this.form.controls).forEach((key=>{this.payload[key]=this.form.controls[key].value})),this.editMode=!1,this.formSubmitted.emit(this.form.value),this.form.value}onClearBtnClick(){this.clearForm()}onEditBtnClick(){this.editForm()}onCancelBtnClick(){this.cancelForm()}onCloseBtnClick(){this.closeForm()}onSaveBtnClick(){this.submitForm()}onFormOptionsChanged(e){this.showInfoIcon=e.showInfoIcon,this.showHelpText=e.showHelpText}disableAllInputs(){if(void 0!==this.form)for(const control in this.form.controls)this.form.controls.hasOwnProperty(control)&&this.form.controls[control].disable()}enableAllInputs(){if(void 0!==this.form)for(const control in this.form.controls)this.form.controls.hasOwnProperty(control)&&(void 0!==this.formControls[control].config&&void 0!==this.formControls[control].config.forceDisabled?!1===this.formControls[control].config.forceDisabled&&(this.form.controls[control].enable(),this.form.controls[control].markAsUntouched()):(this.form.controls[control].enable(),this.form.controls[control].markAsUntouched()))}};UiFormBaseComponent.ctorParameters=()=>[],UiFormBaseComponent.propDecorators={actionBtnsRef:[{type:core.ViewChild,args:["actionBtnsRef"]}],formStatusChange:[{type:core.Output}],formClosed:[{type:core.Output}],formSubmitted:[{type:core.Output}],editMode:[{type:core.Input,args:["editMode"]}]},UiFormBaseComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"ui-form-base",template:"<p>Implement your form template in your extended component.</p>\n",styles:[""]}),(0,tslib_es6.Sn)("design:paramtypes",[])],UiFormBaseComponent)},"./libs/ui/src/lib/modules/form-controls/form-control-base/form-control-base.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>UiFormControlBaseComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),fesm2020_forms=__webpack_require__("./node_modules/@angular/forms/fesm2020/forms.mjs");__webpack_require__("./libs/ui/src/lib/modules/form-controls/form-base/form-base.component.ts");let UiFormControlBaseComponent=class UiFormControlBaseComponent{constructor(ngControl){this.ngControl=ngControl,this.forceDisabled=!1,this.label="",this.placeholder="",this.prefixIcon="",this.suffixIcon="",this.prefixText="",this.suffixText="",this.helpText="",this.showHelpText=!0,this.showSuccessValidation=!1,this.showErrorValidation=!0,this.showInfoIcon=!0,this.infoText="",this.patternErrorText="",this.errorStrings={},this.valueChange=new core.EventEmitter,this.value="",this.defaultErrorStrings={},this.Validators=fesm2020_forms.Validators,this.ngControl&&(this.ngControl.valueAccessor=this)}set config(config){if(this._config=config,void 0!==config)for(const[key,value]of Object.entries(this._config))null!==value&&""!==value&&(this[key]=value)}get config(){return this._config}ngOnInit(){void 0!==this.formComponent&&void 0!==this.formComponent.formControls[this.formControlName].config&&(this.config=this.formComponent.formControls[this.formControlName].config),void 0!==this.form&&(this._subscription=this.form.controls[this.formControlName].valueChanges.subscribe((e=>{this.form.controls[this.formControlName].setValue(e,{emitEvent:!1})}))),this.defaultErrorStrings={minlength:{stringCode:"COMMON.MIN_LENGTH_OF"},maxlength:{stringCode:"COMMON.MAX_LENGTH_OF"},required:{stringCode:"COMMON.FIELD_IS_REQUIRED"},email:{stringCode:"COMMON.ENTER_VALID_EMAIL"},pattern:{stringCode:this.patternErrorText}},this.setErrorString()}setErrorString(){void 0!==this.form&&null!==this.form.controls[this.formControlName].errors&&(this.errorStrings=this.defaultErrorStrings,void 0!==this.config&&void 0!==this.config.errorStrings&&(this.errorStrings=Object.assign(Object.assign({},this.defaultErrorStrings),this.config.errorStrings)))}ngOnDestroy(){var _a;null===(_a=this._subscription)||void 0===_a||_a.unsubscribe()}writeValue(value){this.value=value,this.setErrorString()}setDisabledState(isDisabled){this.disabled=isDisabled}registerOnChange(fn){this.onChange=fn}registerOnTouched(fn){this.onTouched=fn}onChange(e){}onTouched(){}};UiFormControlBaseComponent.ctorParameters=()=>[{type:fesm2020_forms.NgControl,decorators:[{type:core.Self},{type:core.Optional}]}],UiFormControlBaseComponent.propDecorators={formControlName:[{type:core.Input,args:["formControlName"]}],id:[{type:core.Input}],disabled:[{type:core.Input}],forceDisabled:[{type:core.Input}],label:[{type:core.Input}],placeholder:[{type:core.Input}],type:[{type:core.Input}],form:[{type:core.Input}],formComponent:[{type:core.Input}],prefixIcon:[{type:core.Input}],suffixIcon:[{type:core.Input}],prefixText:[{type:core.Input}],suffixText:[{type:core.Input}],helpText:[{type:core.Input}],showHelpText:[{type:core.Input}],showSuccessValidation:[{type:core.Input}],showErrorValidation:[{type:core.Input}],showInfoIcon:[{type:core.Input}],infoText:[{type:core.Input}],patternErrorText:[{type:core.Input}],errorStrings:[{type:core.Input}],config:[{type:core.Input}],valueChange:[{type:core.Output}]},UiFormControlBaseComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"ui-form-control-base",template:'<div *ngIf="form !== undefined">\n\n    \x3c!-- Label --\x3e\n    <label [id]="id + \'_Label\'" for="formControlName">\n        {{label}}\n        \x3c!-- Required Asterix --\x3e\n        <span [id]="id + \'_RequiredAsterisk\'" *ngIf="form.controls[formControlName].hasValidator(Validators.required)">*</span>\n    </label>\n\n    \x3c!-- Info Icon with Tooltip (infoText) --\x3e\n    <i [id]="id + \'_InfoIcon\'" *ngIf="showInfoIcon && infoText !== \'\'" class="bi bi-question-circle-fill" placement="top" [ngbTooltip]="infoText"></i>\n\n    <div class="input-group">\n\n        \x3c!-- Prefix Icon --\x3e\n        <span *ngIf="prefixIcon !== \'\'" class="input-group-text">\n            <i [id]="id + \'_PrefixIcon\'" class="bi" aria-hidden="true" [ngClass]="prefixIcon"></i>\n        </span>\n\n        \x3c!-- Prefix Text --\x3e\n        <span [id]="id + \'_PrefixText\'" *ngIf="prefixText !== \'\'" class="input-group-text">\n            {{prefixText}}\n        </span>\n\n        <div #contentWrapper class="w-100">\n            <ng-content></ng-content>\n        </div>\n\n        \x3c!-- Suffix Icon --\x3e\n        <span [id]="id + \'_SuffixIcon\'" *ngIf="suffixIcon !== \'\'" class="input-group-text">\n            <i class="bi" aria-hidden="true" [ngClass]="suffixIcon"></i>\n        </span>\n\n        \x3c!-- Suffix Text --\x3e\n        <span [id]="id + \'_SuffixText\'" *ngIf="suffixText !== \'\'" class="input-group-text">\n            {{suffixText}}\n        </span>\n\n    </div>\n\n    <div class="feedback">\n\n        \x3c!-- Success Feedback Text --\x3e\n        <div [id]="id + \'_SuccessText\'" class="success-text" *ngIf="form.controls[formControlName].valid && showSuccessValidation">\n            {{ \'COMMON.LOOKS_GOOD\' | translate }}\n        </div>\n\n        \x3c!-- Error Feedback Text --\x3e\n        <div class="error-text" *ngIf="form.controls[formControlName].invalid && form.controls[formControlName].touched && showErrorValidation">\n            <div *ngFor="let item of form.controls[formControlName].errors | keyvalue">\n                \x3c!-- If errorString have NO parameters --\x3e\n                <ng-container *ngIf="defaultErrorStrings[item.key] !== undefined && defaultErrorStrings[item.key].stringParams === undefined">\n                    {{errorStrings[item.key].stringCode | translate: form.controls[formControlName].errors[item.key] }}\n                </ng-container>\n                \x3c!-- If errorString HAVE parameters --\x3e\n                <ng-container *ngIf="errorStrings[item.key] !== undefined && errorStrings[item.key].stringParams !== undefined">\n                 {{errorStrings[item.key].stringCode | translate: concatErrors(form.controls[formControlName].errors[item.key], errorStrings[item.key].stringParams) }}\n                </ng-container>\n            </div>\n        </div>\n\n        \x3c!-- Help Text --\x3e\n        \x3c!-- Show only if Error Feedback Text is hidden  --\x3e\n        <div *ngIf="!(form.controls[formControlName].invalid && form.controls[formControlName].touched && showErrorValidation)">\n            <div [id]="id + \'_HelpText\'" *ngIf="showHelpText && helpText !== \'\'" class="help-text">{{helpText}}</div>\n        </div>\n    </div>\n</div>\n',styles:[""]}),(0,tslib_es6.Sn)("design:paramtypes",[fesm2020_forms.NgControl])],UiFormControlBaseComponent)},"./libs/ui/src/lib/modules/form-controls/checkbox/checkbox.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/ts3.9/client/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Forms/Checkbox",component:__webpack_require__("./libs/ui/src/lib/modules/form-controls/checkbox/checkbox.component.ts").j,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[]})]},Primary=(args=>({props:args})).bind({});Primary.args={inline:!1,showPointer:!0}}}]);