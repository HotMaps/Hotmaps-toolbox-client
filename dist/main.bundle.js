webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes__ = __webpack_require__("../../../../../src/app/routes.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/**
 * Created by lesly on 09.06.17.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Improvement of coding style : 
// leaving one empty line between third party imports and application imports
// listing import lines alphabetized by the module



var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__routes__["a" /* routes */])],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_leaflet__ = __webpack_require__("../../../../leaflet/dist/leaflet-src.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reflect_metadata__ = __webpack_require__("../../../../reflect-metadata/Reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reflect_metadata___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_reflect_metadata__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8____ = __webpack_require__("../../../../../src/app/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_searchbar_searchbar_component__ = __webpack_require__("../../../../../src/app/pages/searchbar/searchbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_toolbar_toolbar_component__ = __webpack_require__("../../../../../src/app/pages/toolbar/toolbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_map__ = __webpack_require__("../../../../../src/app/pages/map/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng_recaptcha__ = __webpack_require__("../../../../ng-recaptcha/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng_recaptcha___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ng_recaptcha__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng_recaptcha_forms__ = __webpack_require__("../../../../ng-recaptcha/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng_recaptcha_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_ng_recaptcha_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__features_layers__ = __webpack_require__("../../../../../src/app/features/layers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__features_population_services_population_service__ = __webpack_require__("../../../../../src/app/features/population/services/population.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__features_side_panel_side_panel_service__ = __webpack_require__("../../../../../src/app/features/side-panel/side-panel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__features_selection_tools__ = __webpack_require__("../../../../../src/app/features/selection-tools/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__features_feedback___ = __webpack_require__("../../../../../src/app/features/feedback/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__features_selection_scale__ = __webpack_require__("../../../../../src/app/features/selection-scale/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__features_summary_result_summary_result_component__ = __webpack_require__("../../../../../src/app/features/summary-result/summary-result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__features_summary_result_summary_result_cell__ = __webpack_require__("../../../../../src/app/features/summary-result/summary-result-cell/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__features_side_panel_right_side_panel_right_side_panel_component__ = __webpack_require__("../../../../../src/app/features/side-panel/right-side-panel/right-side-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__features_side_panel_left_side_panel_left_side_panel_component__ = __webpack_require__("../../../../../src/app/features/side-panel/left-side-panel/left-side-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_nav_component_navigation_bar_component__ = __webpack_require__("../../../../../src/app/pages/nav/component/navigation-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_nav_service_navigation_bar_service__ = __webpack_require__("../../../../../src/app/pages/nav/service/navigation-bar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__features_layers_interaction_layers_interaction_cell_layers_interaction_cell_component__ = __webpack_require__("../../../../../src/app/features/layers-interaction/layers-interaction-cell/layers-interaction-cell.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__features_summary_result_summary_result_service__ = __webpack_require__("../../../../../src/app/features/summary-result/summary-result.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__features_layers_interaction_layers_interaction_service__ = __webpack_require__("../../../../../src/app/features/layers-interaction/layers-interaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_app_shared_services_interaction_service__ = __webpack_require__("../../../../../src/app/shared/services/interaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__features_feedback_mail_service__ = __webpack_require__("../../../../../src/app/features/feedback/mail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_app_features_side_panel__ = __webpack_require__("../../../../../src/app/features/side-panel/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__features_selection_tools_component_selection_tool_component__ = __webpack_require__("../../../../../src/app/features/selection-tools/component/selection-tool.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__features_graph_heat_load_component___ = __webpack_require__("../../../../../src/app/features/graph/heat-load/component/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__features_graph_heat_load_heat_load_service__ = __webpack_require__("../../../../../src/app/features/graph/heat-load/heat-load.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__features_graph_chart_chart_component__ = __webpack_require__("../../../../../src/app/features/graph/chart/chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__features_graph_duration_curve_duration_curve_component__ = __webpack_require__("../../../../../src/app/features/graph/duration-curve/duration-curve.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__features_graph_duration_curve_duration_curve_service__ = __webpack_require__("../../../../../src/app/features/graph/duration-curve/duration-curve.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__features_export_data_component_export_data_component__ = __webpack_require__("../../../../../src/app/features/export-data/component/export-data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__features_export_data_service_export_data_service__ = __webpack_require__("../../../../../src/app/features/export-data/service/export-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42_app_features_selection_tools_service_selection_tool_utils_service__ = __webpack_require__("../../../../../src/app/features/selection-tools/service/selection-tool-utils.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__features_graph_electricity_mix_component_electricity_mix_component__ = __webpack_require__("../../../../../src/app/features/graph/electricity-mix/component/electricity-mix.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__features_graph_electricity_mix_service_electricity_mix_service__ = __webpack_require__("../../../../../src/app/features/graph/electricity-mix/service/electricity-mix.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__features_calculation_module_component_calculation_module_component__ = __webpack_require__("../../../../../src/app/features/calculation-module/component/calculation-module.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__features_calculation_module_service_calculation_module_service__ = __webpack_require__("../../../../../src/app/features/calculation-module/service/calculation-module.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__features_calculation_module_service_calcultation_module_status_service__ = __webpack_require__("../../../../../src/app/features/calculation-module/service/calcultation-module-status.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__features_calculation_module_service_calculation_test_service__ = __webpack_require__("../../../../../src/app/features/calculation-module/service/calculation-test.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__features_calculation_module_cm_layers_service__ = __webpack_require__("../../../../../src/app/features/calculation-module/cm-layers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__features_result_manager_component_result_manager_component__ = __webpack_require__("../../../../../src/app/features/result-manager/component/result-manager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__features_user_management__ = __webpack_require__("../../../../../src/app/features/user-management/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__features_user_management_service_user_management_service__ = __webpack_require__("../../../../../src/app/features/user-management/service/user-management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__features_user_management_service_user_management_status_service__ = __webpack_require__("../../../../../src/app/features/user-management/service/user-management-status.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__features_user_management_account_account_component__ = __webpack_require__("../../../../../src/app/features/user-management/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__features_user_management_activate_activate_component__ = __webpack_require__("../../../../../src/app/features/user-management/activate/activate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__features_layer_tool_layer_tool_component__ = __webpack_require__("../../../../../src/app/features/layer-tool/layer-tool.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__features_welcome_page_welcome_page_component__ = __webpack_require__("../../../../../src/app/features/welcome-page/welcome-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__shared_services_upload_service__ = __webpack_require__("../../../../../src/app/shared/services/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__shared_services_snapshot_service__ = __webpack_require__("../../../../../src/app/shared/services/snapshot.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__features_user_management_account_upload_upload_component__ = __webpack_require__("../../../../../src/app/features/user-management/account/upload/upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__features_side_panel_left_side_panel_personnal_layers_personnal_layers_component__ = __webpack_require__("../../../../../src/app/features/side-panel/left-side-panel/personnal-layers/personnal-layers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__features_layer_tool_custom_symbology_custom_symbology_component__ = __webpack_require__("../../../../../src/app/features/layer-tool/custom-symbology/custom-symbology.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__features_side_panel_folder_panel_folder_panel_component__ = __webpack_require__("../../../../../src/app/features/side-panel/folder-panel/folder-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__features_side_panel_save_panel_save_panel_component__ = __webpack_require__("../../../../../src/app/features/side-panel/save-panel/save-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__features_feedback_feedback_service__ = __webpack_require__("../../../../../src/app/features/feedback/feedback.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__features_summary_result_summary_result_container_summary_result_container_component__ = __webpack_require__("../../../../../src/app/features/summary-result/summary-result-container/summary-result-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__features_gdpr_gdpr_component__ = __webpack_require__("../../../../../src/app/features/gdpr/gdpr.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// Improvement of coding style :
// leaving one empty line between third party imports and application imports
// listing import lines alphabetized by the module





































































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["b" /* NoopAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_8____["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_15_ng_recaptcha_forms__["RecaptchaFormsModule"],
            __WEBPACK_IMPORTED_MODULE_14_ng_recaptcha__["RecaptchaModule"].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8____["b" /* AppComponent */]],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8____["b" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__pages_searchbar_searchbar_component__["a" /* SearchBarComponent */],
            __WEBPACK_IMPORTED_MODULE_11__pages_toolbar_toolbar_component__["a" /* ToolbarComponent */],
            __WEBPACK_IMPORTED_MODULE_12__pages_map__["a" /* MapComponent */],
            __WEBPACK_IMPORTED_MODULE_24__features_side_panel_right_side_panel_right_side_panel_component__["a" /* RightSideComponent */],
            __WEBPACK_IMPORTED_MODULE_26__pages_nav_component_navigation_bar_component__["a" /* NavigationBarComponent */],
            __WEBPACK_IMPORTED_MODULE_22__features_summary_result_summary_result_component__["a" /* SummaryResultComponent */],
            __WEBPACK_IMPORTED_MODULE_23__features_summary_result_summary_result_cell__["a" /* SummaryResultCellComponent */],
            __WEBPACK_IMPORTED_MODULE_28__features_layers_interaction_layers_interaction_cell_layers_interaction_cell_component__["a" /* DataInteractionCellComponent */],
            __WEBPACK_IMPORTED_MODULE_25__features_side_panel_left_side_panel_left_side_panel_component__["a" /* LeftSideComponent */],
            __WEBPACK_IMPORTED_MODULE_50__features_result_manager_component_result_manager_component__["a" /* ResultManagerComponent */],
            __WEBPACK_IMPORTED_MODULE_33_app_features_side_panel__["a" /* TopSideComponent */],
            __WEBPACK_IMPORTED_MODULE_13__shared__["UppercaseFirstLetterPipe"],
            __WEBPACK_IMPORTED_MODULE_13__shared__["NumberFormatPipe"],
            __WEBPACK_IMPORTED_MODULE_13__shared__["LayerNamePipe"],
            __WEBPACK_IMPORTED_MODULE_13__shared__["BusinessNamePipe"],
            __WEBPACK_IMPORTED_MODULE_20__features_feedback___["FeedbackComponent"],
            __WEBPACK_IMPORTED_MODULE_35__features_graph_heat_load_component___["a" /* HeatLoadChartComponent */],
            __WEBPACK_IMPORTED_MODULE_34__features_selection_tools_component_selection_tool_component__["a" /* SelectionToolComponent */],
            __WEBPACK_IMPORTED_MODULE_37__features_graph_chart_chart_component__["a" /* ChartComponent */],
            __WEBPACK_IMPORTED_MODULE_38__features_graph_duration_curve_duration_curve_component__["a" /* DurationCurveComponent */],
            __WEBPACK_IMPORTED_MODULE_40__features_export_data_component_export_data_component__["a" /* ExportDataComponent */],
            __WEBPACK_IMPORTED_MODULE_43__features_graph_electricity_mix_component_electricity_mix_component__["a" /* ElectricityMixComponent */],
            __WEBPACK_IMPORTED_MODULE_45__features_calculation_module_component_calculation_module_component__["a" /* CalculationModuleComponent */],
            __WEBPACK_IMPORTED_MODULE_51__features_user_management__["a" /* UserManagementComponent */],
            __WEBPACK_IMPORTED_MODULE_51__features_user_management__["b" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_51__features_user_management__["c" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_51__features_user_management__["d" /* RecoveryComponent */],
            __WEBPACK_IMPORTED_MODULE_54__features_user_management_account_account_component__["a" /* AccountComponent */],
            __WEBPACK_IMPORTED_MODULE_55__features_user_management_activate_activate_component__["a" /* ActivateComponent */],
            __WEBPACK_IMPORTED_MODULE_56__features_layer_tool_layer_tool_component__["a" /* LayerToolComponent */],
            __WEBPACK_IMPORTED_MODULE_57__features_welcome_page_welcome_page_component__["a" /* WelcomePageComponent */],
            __WEBPACK_IMPORTED_MODULE_60__features_user_management_account_upload_upload_component__["a" /* UploadComponent */],
            __WEBPACK_IMPORTED_MODULE_61__features_side_panel_left_side_panel_personnal_layers_personnal_layers_component__["a" /* PersonnalLayersComponent */],
            __WEBPACK_IMPORTED_MODULE_62__features_layer_tool_custom_symbology_custom_symbology_component__["a" /* CustomSymbologyComponent */],
            __WEBPACK_IMPORTED_MODULE_64__features_side_panel_save_panel_save_panel_component__["a" /* SavePanelComponent */],
            __WEBPACK_IMPORTED_MODULE_63__features_side_panel_folder_panel_folder_panel_component__["a" /* FolderPanelComponent */],
            __WEBPACK_IMPORTED_MODULE_66__features_summary_result_summary_result_container_summary_result_container_component__["a" /* SummaryResultContainerComponent */],
            __WEBPACK_IMPORTED_MODULE_67__features_gdpr_gdpr_component__["a" /* GdprComponent */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_30__features_layers_interaction_layers_interaction_service__["a" /* DataInteractionService */],
            __WEBPACK_IMPORTED_MODULE_17__features_population_services_population_service__["a" /* PopulationService */],
            __WEBPACK_IMPORTED_MODULE_13__shared__["GeocodingService"],
            __WEBPACK_IMPORTED_MODULE_12__pages_map__["b" /* MapService */],
            __WEBPACK_IMPORTED_MODULE_13__shared__["Logger"],
            __WEBPACK_IMPORTED_MODULE_13__shared__["LoaderService"],
            __WEBPACK_IMPORTED_MODULE_13__shared__["ToasterService"],
            __WEBPACK_IMPORTED_MODULE_13__shared__["GlobalErrorHandler"],
            __WEBPACK_IMPORTED_MODULE_13__shared__["Helper"],
            __WEBPACK_IMPORTED_MODULE_18__features_side_panel_side_panel_service__["a" /* SidePanelService */],
            __WEBPACK_IMPORTED_MODULE_27__pages_nav_service_navigation_bar_service__["a" /* NavigationBarService */],
            __WEBPACK_IMPORTED_MODULE_16__features_layers__["LayersService"],
            __WEBPACK_IMPORTED_MODULE_19__features_selection_tools__["a" /* SelectionToolService */],
            __WEBPACK_IMPORTED_MODULE_19__features_selection_tools__["b" /* SelectionToolButtonStateService */],
            __WEBPACK_IMPORTED_MODULE_13__shared__["BusinessInterfaceRenderService"],
            __WEBPACK_IMPORTED_MODULE_29__features_summary_result_summary_result_service__["a" /* SummaryResultService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common__["DecimalPipe"],
            __WEBPACK_IMPORTED_MODULE_32__features_feedback_mail_service__["a" /* MailService */],
            __WEBPACK_IMPORTED_MODULE_21__features_selection_scale__["a" /* SelectionScaleService */],
            __WEBPACK_IMPORTED_MODULE_31_app_shared_services_interaction_service__["a" /* InteractionService */],
            __WEBPACK_IMPORTED_MODULE_36__features_graph_heat_load_heat_load_service__["a" /* HeatLoadAggregateService */],
            __WEBPACK_IMPORTED_MODULE_42_app_features_selection_tools_service_selection_tool_utils_service__["a" /* SelectionToolUtils */],
            __WEBPACK_IMPORTED_MODULE_41__features_export_data_service_export_data_service__["a" /* ExportDataService */],
            __WEBPACK_IMPORTED_MODULE_39__features_graph_duration_curve_duration_curve_service__["a" /* DurationCurveService */],
            __WEBPACK_IMPORTED_MODULE_44__features_graph_electricity_mix_service_electricity_mix_service__["a" /* ElectricityMixService */],
            __WEBPACK_IMPORTED_MODULE_46__features_calculation_module_service_calculation_module_service__["a" /* CalculationModuleService */],
            __WEBPACK_IMPORTED_MODULE_47__features_calculation_module_service_calcultation_module_status_service__["a" /* CalculationModuleStatusService */],
            __WEBPACK_IMPORTED_MODULE_48__features_calculation_module_service_calculation_test_service__["a" /* CalculationHeatLoadDividedService */],
            __WEBPACK_IMPORTED_MODULE_49__features_calculation_module_cm_layers_service__["a" /* CMLayersService */],
            __WEBPACK_IMPORTED_MODULE_52__features_user_management_service_user_management_service__["a" /* UserManagementService */],
            __WEBPACK_IMPORTED_MODULE_53__features_user_management_service_user_management_status_service__["a" /* UserManagementStatusService */],
            __WEBPACK_IMPORTED_MODULE_58__shared_services_upload_service__["a" /* UploadService */],
            __WEBPACK_IMPORTED_MODULE_59__shared_services_snapshot_service__["a" /* SnapshotService */],
            __WEBPACK_IMPORTED_MODULE_65__features_feedback_feedback_service__["a" /* FeedbackService */]
        ],
        schemas: [
            __WEBPACK_IMPORTED_MODULE_3__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/component/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n/* Add a black background color to the top navigation */\n.navbar {\n\n  background-color: #333;\n\n  height: 65px;\n  transition: width 0.4s ease-in-out;\n  font-family:Arial;\n  font-size:12px;\n\n\n  padding:10px;\n  background-color: #333333;\n  color:#ffffff;\n  border-radius: 0px;\n\n  border-bottom-color:#000000;\n\n\n}\n\n/* Style the links inside the navigation bar */\n.navbar a {\n  transition: width 0.4s ease-in-out;\n  float: right;\n  display: block;\n  color: #f2f2f2;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n  font-size: 18px;\n  font-family: Helvetica Neue;\n}\n\n/* Change the color of links on hover */\n.navbar a:hover {\n  background-color: #ddd;\n  color: black;\n}\n.navbar li\n{\n  display:inline;\n}\n/* Add a color to the active/current link */\n.navbar a.active {\n  background-color: #4CAF50;\n  color: white;\n}\n.img {\n  top: 0px;\n}\n\n\n/* handle spinner for the app */\n\n\n.tootlbar-icon {\n  padding: 0 14px;\n}\n\n.tootlbar-spacer {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n\n.loader-app{ \n  position: absolute; \n  z-index: 4000; \n  height: 94vh; \n  width: 100%; \n  background-color: rgba(255, 255, 255, 0.2); \n  margin-top: 6vh; \n} \n \n.loader-app > div { \n  position: absolute; \n  left: 50%; \n  top: 50%; \n  margin: -60px 0px 0px -60px; \n  color: black; \n} \n\n/* Absolute Center Spinner */\n/* .loading {\n  position: fixed;\n  z-index: 999;\n  height: 2em;\n  width: 2em;\n  overflow: show;\n  margin: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n} */\n\n/* Transparent Overlay */\n/* .loading:before {\n  content: '';\n  display: block;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0,0,0,0.3);\n} */\n\n/* :not(:required) hides these rules from IE9 and below */\n/* .loading:not(:required) {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n} */\n\n/* .loading:not(:required):after {\n  content: '';\n  display: block;\n  font-size: 10px;\n  width: 1em;\n  height: 1em;\n  margin-top: -0.5em;\n  -webkit-animation: spinner 1500ms infinite linear;\n  -moz-animation: spinner 1500ms infinite linear;\n  -ms-animation: spinner 1500ms infinite linear;\n  -o-animation: spinner 1500ms infinite linear;\n  animation: spinner 1500ms infinite linear;\n  border-radius: 0.5em;\n  -webkit-box-shadow: rgba(0, 0, 0, 0.75) 1.5em 0 0 0, rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0, rgba(0, 0, 0, 0.75) -1.1em 1.1em 0 0, rgba(0, 0, 0, 0.5) -1.5em 0 0 0, rgba(0, 0, 0, 0.5) -1.1em -1.1em 0 0, rgba(0, 0, 0, 0.75) 0 -1.5em 0 0, rgba(0, 0, 0, 0.75) 1.1em -1.1em 0 0;\n  box-shadow: rgba(0, 0, 0, 0.75) 1.5em 0 0 0, rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0, rgba(0, 0, 0, 0.75) -1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) -1.5em 0 0 0, rgba(0, 0, 0, 0.75) -1.1em -1.1em 0 0, rgba(0, 0, 0, 0.75) 0 -1.5em 0 0, rgba(0, 0, 0, 0.75) 1.1em -1.1em 0 0;\n} */\n\n/* Animation */\n\n@-webkit-keyframes spinner {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n@keyframes spinner {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n:host {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-height: 0;\n  min-width: 0;\n}\n\n.title {\n  height: 40px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-color: #2C3E50;\n  color: #ECF0F1;\n}\n\n.container {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n\n.content {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  min-width: 0;\n  min-height: 0;\n  padding: 8px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet>\n  <htm-welcome-page *ngIf=\"isMap\"></htm-welcome-page>\n  <span *ngIf=\"showLoader\" class=\"loader-app\">\n    <div uk-spinner=\"ratio:4\"></div>\n  </span>\n</router-outlet>"

/***/ }),

/***/ "../../../../../src/app/component/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_loader_service__ = __webpack_require__("../../../../../src/app/shared/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_logger_service__ = __webpack_require__("../../../../../src/app/shared/services/logger.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(loaderService, logger, router) {
        this.loaderService = loaderService;
        this.logger = logger;
        this.router = router;
        this.isMap = false;
    }
    AppComponent.prototype.ngAfterContentInit = function () {
        this.notifyLoaderService();
    };
    /**
     * subcribe the status of the loader service
     * AppComponent own general loading
     */
    AppComponent.prototype.notifyLoaderService = function () {
        var _this = this;
        this.loaderService.getStatus().subscribe(function (val) {
            _this.showLoader = val;
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.logger.log('AppComponent/ngOnDestroy');
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (val) {
            return _this.isMap = (val.url === '/' || val.url === '/map');
        });
        if (this.router.url === '/register') {
            // console.log('isRegisterRoute')
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/component/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/app.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_loader_service__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_loader_service__["a" /* LoaderService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_logger_service__["a" /* Logger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_logger_service__["a" /* Logger */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__("../../../../../src/app/component/app.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/features/calculation-module/cm-layers.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_features_calculation_module_service_calculation_module_service__ = __webpack_require__("../../../../../src/app/features/calculation-module/service/calculation-module.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_shpjs__ = __webpack_require__("../../../../shpjs/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_shpjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_shpjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CMLayersService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CMLayersService = (function (_super) {
    __extends(CMLayersService, _super);
    // private layerAdded;
    function CMLayersService(http, logger, loaderService, toasterService, helper, calculationModuleService) {
        var _this = _super.call(this, http, logger, loaderService, toasterService) || this;
        _this.helper = helper;
        _this.calculationModuleService = calculationModuleService;
        _this.layersCM = new L.FeatureGroup();
        _this.cmLayersArray = new __WEBPACK_IMPORTED_MODULE_3__shared__["Dictionary"]([{ key: null, value: null }]);
        return _this;
    }
    CMLayersService.prototype.getLayersCM = function () {
        return this.layersCM;
    };
    CMLayersService.prototype.getLayerArray = function () {
        return this.cmLayersArray;
    };
    CMLayersService.prototype.addOrRemoveLayerWithAction = function (directory, type, map) {
        if (!this.cmLayersArray.containsKey(directory)) {
            this.addLayerWithAction(directory, type);
        }
        else {
            this.removelayer(directory, type);
        }
        map.fireEvent('didUpdateLayers', this.cmLayersArray);
    };
    CMLayersService.prototype.addLayerWithActionRaster = function (directory) {
        var self = this;
        var layer;
        layer = L.tileLayer(__WEBPACK_IMPORTED_MODULE_0_app_shared__["apiUrl"] + '/cm/tiles/' + directory + '/{z}/{x}/{y}/', {
            zIndex: __WEBPACK_IMPORTED_MODULE_0_app_shared__["cm_layers_order"],
            tms: true
        });
        layer.addTo(self.layersCM);
        self.cmLayersArray.add(directory, layer);
    };
    CMLayersService.prototype.addLayerWithActionVector = function (directory) {
        var _this = this;
        var self = this;
        __WEBPACK_IMPORTED_MODULE_5_shpjs__(__WEBPACK_IMPORTED_MODULE_0_app_shared__["apiUrl"] + '/cm/files/' + directory).then(function (data) {
            var layer;
            layer = new L.GeoJSON(data, {
                onEachFeature: _this.onEachFeature,
                style: function (feature) {
                    var color = __WEBPACK_IMPORTED_MODULE_0_app_shared__["default_color_shpfile"];
                    var fillColor = __WEBPACK_IMPORTED_MODULE_0_app_shared__["default_fillColor_shpfile"];
                    var fillOpacity = __WEBPACK_IMPORTED_MODULE_0_app_shared__["default_fillOpacity_shpfile"];
                    if (!_this.helper.isNullOrUndefined(feature.properties['color']))
                        color = feature.properties['color'];
                    if (!_this.helper.isNullOrUndefined(feature.properties['fillColor']))
                        fillColor = feature.properties['fillColor'];
                    if (!_this.helper.isNullOrUndefined(feature.properties['opacity']))
                        color = feature.properties['opacity'];
                    return {
                        color: color,
                        fillColor: fillColor,
                        fillOpacity: fillOpacity
                    };
                }
            });
            layer.addTo(self.layersCM);
            self.cmLayersArray.add(directory, layer);
        });
    };
    CMLayersService.prototype.addLayerWithAction = function (directory, type) {
        // let layerAdded:any;
        if (type === __WEBPACK_IMPORTED_MODULE_0_app_shared__["raster_type_name"]) {
            this.addLayerWithActionRaster(directory);
        }
        else if (type === __WEBPACK_IMPORTED_MODULE_0_app_shared__["vector_type_name"]) {
            this.addLayerWithActionVector(directory);
        }
    };
    CMLayersService.prototype.onEachFeature = function (feature, layer) {
        var html = '';
        Object.keys(feature.properties).map(function (prop) {
            if (prop != 'color' && prop != 'fillColor' && prop != 'opacity') {
                html += '<bold>' + prop + ':</bold>';
                html += '<span>' + feature.properties[prop] + '</span><br />';
            }
        });
        layer.bindPopup(html);
    };
    CMLayersService.prototype.removelayer = function (id, type) {
        // we get the layer we want to remove
        var layer = this.cmLayersArray.value(id);
        if (type === __WEBPACK_IMPORTED_MODULE_0_app_shared__["vector_type_name"]) {
            layer.clearLayers();
        }
        else if (type === __WEBPACK_IMPORTED_MODULE_0_app_shared__["raster_type_name"]) {
            this.layersCM.removeLayer(layer);
        }
        // we remove this layer from map
        // we destroy the layer
        this.cmLayersArray.remove(id);
    };
    CMLayersService.prototype.clearAll = function () {
        this.logger.log('Clear all is called');
        this.layersCM.clearLayers();
    };
    return CMLayersService;
}(__WEBPACK_IMPORTED_MODULE_3__shared__["APIService"]));
CMLayersService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared__["Logger"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared__["Logger"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared__["LoaderService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared__["LoaderService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared__["ToasterService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared__["ToasterService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0_app_shared__["Helper"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_app_shared__["Helper"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4_app_features_calculation_module_service_calculation_module_service__["a" /* CalculationModuleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_features_calculation_module_service_calculation_module_service__["a" /* CalculationModuleService */]) === "function" && _f || Object])
], CMLayersService);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=cm-layers.service.js.map

/***/ }),

/***/ "../../../../../src/app/features/calculation-module/component/calculation-module.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".uk-container {\n  margin: 5px;\n  padding: 5px;\n}\noption {\n  background: #333333;\n  color:white\n}\n\n.component > input {\n  width: 100%;\n}\n\n.uk-offcanvas-bar {\n  width: 401px;\n  top: 48px;\n  background-color:#333333;\n}\n.uk-button {\n  width: 100%;\n}\n.waitingbox, .waitingboxcomponents {\n  height: 150px;\n  width: 100%;\n  position: relative;\n}\n\n.spinner {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  color: black;\n  margin: 15px 15px 15px -25px;\n}\n.waitingboxcomponents > .spinner {\n  color: white !important;\n}\n#box-components {\n  width: 0 !important;\n}\n.values {\n  font-size: 12px;\n}\n.cm_title{\n  color: white;\n  margin-bottom: 0;\n}\n.description {\n  font-style: italic;\n}\n.component_title {\n  color: white;\n  font-size: 18px;\n}\n.api-inprogress {\n  background: rgb(255, 0, 0);\n}\n.unclickable {\n  cursor: wait;\n}\n.input_title{\n  margin-bottom: 0px;\n  text-transform: uppercase;\n}\n.no-data {\n  text-transform: uppercase;\n  color:red;\n}\n\n\n.input-prefix input {\n  height:30px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/calculation-module/component/calculation-module.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"calculationModules?.length >= 1\">\n\n  <div [@cmTrigger]=\"expandedState\">\n    <span *ngIf=\"expanded && calculationModules\" [@titleTextTrigger]=\"'in'\">\n      <ul uk-accordion *ngFor=\"let i of categories\">\n        <li class=\"uk-open\">\n          <h3 class=\"uk-accordion-title\">\n            {{i}}\n          </h3>\n          <div class=\"uk-accordion-content\">\n            <ng-container *ngFor=\"let cm of calculationModules\">\n              <span *ngIf=\"i === cm.category && cm.isReadable\">\n                <div class=\"uk-container\">\n                  <div class=\"uk-offcanvas-content\">\n  \n                    <button class=\"uk-button uk-button-default uk-margin-small-right\" [class.api-inprogress]=\"cm.isApiRequestInTreatment\"\n                      type=\"button\" (click)=\"selectCM(cm)\">\n                      <ng-container *ngIf=\"cm.isApiRequestInTreatment\">Refresh</ng-container> {{cm.cm_name}}\n                    </button>\n                  </div>\n                </div>\n              </span>\n            </ng-container>\n          </div>\n        </li>\n      </ul>\n    </span>\n  </div>\n  <div *ngIf=\"waitingCM\" class=\"waitingbox\">\n    <div class=\"spinner\" uk-spinner></div>\n  </div>\n  \n  <div class=\"uk-offcanvas-content\">\n    <div id=\"box-components\" uk-offcanvas=\"overlay: false; bg-close: false;esc-close:false;\">\n      <div class=\"uk-offcanvas-bar\">\n        <div *ngIf=\"cmSelected\">\n          <button class=\"uk-offcanvas-close\" type=\"button\" (click)=\"toggleCMPanel(false)\" uk-close></button>\n  \n          <h3 class=\"cm_title\"> {{cmSelected.cm_name}}</h3>\n          <span class=\"uk-margin input-prefix\">\n              <input class=\"uk-input\" maxlength=\"15\" type=\"text\" placeholder=\"Name of calculation module session\" [(ngModel)]=\"prefix_cm\" />\n            </span><br />\n          <span class=\"uk-margin description\">{{cmSelected.cm_description}}</span><br />\n          <span class=\"uk-margin description-link\" *ngIf=\"cmSelected.description_link\">\n              <a class=\"uk-link-heading\" href=\"{{cmSelected.description_link}}\" target=\"_blank\">More description...</a>\n          </span><br />\n          <span class=\"uk-margin\" *ngIf=\"cmSelected.status_id\">id of request: {{cmSelected.status_id}}</span>\n          <div *ngIf=\"waitingCM\" class=\"waitingboxcomponents\">\n            <div class=\"spinner\" uk-spinner></div>\n          </div>\n  \n          <ng-container *ngIf=\"!waitingCM\">\n  \n          <div class=\"component uk-margin\" *ngFor=\"let input_cat of inputs_categories; let i=index\">\n              <ul uk-accordion *ngIf=\"input_cat.contains_component\">\n                <li class=\"\" [class.uk-open]=\"i===0\">\n                  <a class=\"uk-heading-bullet uk-accordion-title input_title\" href=\"#\">{{input_cat.name}} </a>\n                  <div class=\"uk-accordion-content\">\n                      <div class=\"component uk-margin\" *ngFor=\"let component of getComponentFiltered(input_cat.id)\">\n                          <span class=\"\">{{component.input_name}} - (value: {{component.input_value}}{{component.input_unit}})</span>\n                          <div class=\"uk-form-controls\">\n                            <ng-container *ngIf=\"component.input_type == type_input || component.input_type == type_range\">\n                                <input class=\"uk-{{component.input_type}}\" id=\"{{component.input_parameter_name}}\" value=\"{{component.input_value}}\"\n                                type=\"{{component.input_type}}\" min=\"{{component.input_min}}\" max=\"{{component.input_max}}\"\n                                placeholder=\"{{component.input_name}}\" (change)=\"changeValueFromInput($event, component)\" />\n                                <span class=\"values\">\n                                  Min: {{component.input_min}}{{component.input_unit}}; \n                                  Max: {{component.input_max}}{{component.input_unit}};\n                                  </span>\n                            </ng-container>\n                            <ng-container *ngIf=\"component.input_type == type_radio\">\n                              <ng-container *ngFor=\"let value of component.input_default_value; let i = index\">\n                                <label style=\"cursor: pointer;\"><input class=\"uk-{{component.input_type}}\" name=\"{{component.input_name}}\" id=\"{{component.input_name}}\" value=\"{{value}}\"\n                                type=\"{{component.input_type}}\" (change)=\"changeValueFromInputArray($event, component)\" [checked]=\"i===0\"/> {{value}}</label>\n                              </ng-container> \n                            </ng-container>\n                            <ng-container *ngIf=\"component.input_type == type_select\">\n                                <select class=\"uk-{{select}}\" (change)=\"changeValueFromInputArray($event, component)\">\n                                  <option *ngFor=\"let value of component.input_default_value\" value=\"{{value}}\">{{value}}</option>\n                                </select>\n                            </ng-container>\n                            <!-- <ng-container *ngIf=\"component.input_type == 'checkbox'\">\n                                <label style=\"cursor: pointer;\"><input class=\"uk-{{component.input_type}}\" name=\"{{component.input_name}}\" id=\"{{component.input_name}}\" value=\"{{value}}\"\n                                  type=\"{{component.input_type}}\" (change)=\"changeValue($event, component)\"/>{{value}}</label>\n                            </ng-container> -->\n                        </div>\n                      </div>\n                  </div>\n                </li>\n              </ul>\n            </div> \n  \n            <div *ngIf=\"layersFromType.length >= 1\" class=\"uk-margin\">\n              <div *ngFor=\"let layersTable of layersFromType\">\n                <h4 class=\"uk-heading-bullet main_title input_title\">Input type selection</h4>\n                <span>Type: {{layersTable.layerType}}</span>\n                <select class=\"uk-select\" [(ngModel)]=\"layersTable.layerSelected\" (change)=\"setLayerNeeded()\">\n                  <ng-container *ngFor=\"let layer of layersTable.layers\">\n                    <option *ngIf=\"!layer.name.includes('layers of')\" [ngValue]=\"layer\"> <!-- TODO: to be modified when generated layers will be handled -->\n                      {{layer.name}}\n                    </option>\n                  </ng-container>\n                </select>\n              </div>\n            </div>\n            <button class=\"uk-button uk-button-primary\" [class.unclickable]=\"cmRunning\" (click)=\"!cmRunning ? runCM() : null\">\n              <span *ngIf=\"!cmRunning\">Run CM</span>\n              <span *ngIf=\"cmRunning\" uk-spinner></span>\n            </button>\n  \n            <div class=\"uk-margin\"></div>\n            <progress id=\"js-progressbar\" class=\"uk-progress\" value=\"{{progress}}\" max=\"100\"></progress>\n  \n  \n  \n          </ng-container>\n        </div>\n      </div>\n  \n    </div>\n  </div>\n</div>\n<div *ngIf=\"calculationModules?.length === 0\">\n  <span class=\"no-data\">No calculation module runs. <br/> Please, try later!</span>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/features/calculation-module/component/calculation-module.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_features_layers_interaction_layers_interaction_service__ = __webpack_require__("../../../../../src/app/features/layers-interaction/layers-interaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_helper__ = __webpack_require__("../../../../../src/app/shared/helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_calculation_module_service__ = __webpack_require__("../../../../../src/app/features/calculation-module/service/calculation-module.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_calcultation_module_status_service__ = __webpack_require__("../../../../../src/app/features/calculation-module/service/calcultation-module-status.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_uikit__ = __webpack_require__("../../../../uikit/dist/js/uikit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_uikit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_uikit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_services_interaction_service__ = __webpack_require__("../../../../../src/app/shared/services/interaction.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculationModuleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CalculationModuleComponent = (function () {
    function CalculationModuleComponent(calculationModuleService, calculationModuleStatusService, interactionService, dataInteractionService, helper, logger, toasterService) {
        this.calculationModuleService = calculationModuleService;
        this.calculationModuleStatusService = calculationModuleStatusService;
        this.interactionService = interactionService;
        this.dataInteractionService = dataInteractionService;
        this.helper = helper;
        this.logger = logger;
        this.toasterService = toasterService;
        this.inputs_categories = __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["_33" /* inputs_categories */];
        this.type_select = 'select';
        this.type_input = 'input';
        this.type_radio = 'radio';
        this.type_range = 'range';
        this.type_checkbox = 'checkbox';
        this.progress = 0;
        this.waitingCM = false;
        this.layersFromType = [];
        this.prefix_cm = '';
    }
    CalculationModuleComponent.prototype.ngOnInit = function () {
        this.subscribeEvents();
        this.updateCMs();
        this.logger.log('ngOnInit called');
    };
    CalculationModuleComponent.prototype.ngOnChanges = function (changes) {
        this.logger.log('ngOnChanges called');
    };
    CalculationModuleComponent.prototype.ngOnDestroy = function () {
        this.logger.log('ngOnDestroy called');
    };
    CalculationModuleComponent.prototype.subscribeEvents = function () {
        var _this = this;
        var self = this;
        this.calculationModuleStatusService.getWaitingSatus().subscribe(function (value) {
            self.waitingCM = value;
        });
        this.calculationModuleStatusService.getCmAnimationStatus().subscribe(function (data) {
            _this.progress = data;
            if (_this.progress !== 0) {
                _this.cmRunning = true;
                _this.interactionService.setCmRunning(_this.cmRunning);
            }
            else {
                /* if (!this.helper.isNullOrUndefined(this.cmSelected)) {
                  this.calculationModuleStatusService.undefinedCmRunned();
                } */
                _this.cmRunning = false;
                _this.interactionService.setCmRunning(_this.cmRunning);
            }
            _this.logger.log('CM progress:' + _this.progress);
            _this.logger.log('CM getCurrentIdCM:' + _this.interactionService.getCurrentIdCM());
        });
        this.calculationModuleStatusService.getStatusCMPanel().subscribe(function (value) {
            if (value === true) {
                __WEBPACK_IMPORTED_MODULE_6_uikit__["offcanvas"]('#box-components').show();
                _this.logger.log('cm box is shown');
            }
            else if (value === false) {
                __WEBPACK_IMPORTED_MODULE_6_uikit__["offcanvas"]('#box-components').hide();
                _this.cmHidePanel();
            }
        });
    };
    CalculationModuleComponent.prototype.isCmsReadable = function () {
        if (!this.helper.isNullOrUndefined(this.calculationModules)) {
            this.calculationModules.map(function (cm) {
                cm['isReadable'] = true;
            });
        }
    };
    CalculationModuleComponent.prototype.resetCM = function () {
        this.cmSelected.status_id = '';
        this.cmSelected.isApiRequestInTreatment = false;
        this.calculationModuleStatusService.undefinedCmRunned();
    };
    CalculationModuleComponent.prototype.updateCMs = function () {
        var _this = this;
        this.interactionService.deleteCMTask();
        this.calculationModuleService.getCalculationModuleServices().then(function (result) {
            _this.calculationModules = [];
            _this.calculationModules = result;
            _this.setWaiting(false);
        }).then(function () {
            _this.isCmsReadable();
            _this.calculationModuleService.getCalculationModuleCategories(_this.calculationModules).then(function (categories) {
                _this.categories = [];
                _this.categories = categories;
            });
        });
    };
    CalculationModuleComponent.prototype.changeValueFromInputArray = function (event, component) {
        component.input_value = event.target.value;
    };
    CalculationModuleComponent.prototype.changeValueFromInput = function (event, component) {
        var newValue = event.target.value;
        if ((newValue >= +component.input_min) && (newValue <= +component.input_max)) {
            component.input_value = event.target.value;
        }
        else {
            event.target.value = component.input_value;
        }
    };
    CalculationModuleComponent.prototype.runCM = function () {
        var _this = this;
        this.cmSelected['cm_prefix'] = this.prefix_cm;
        this.prefix_cm = '';
        this.components.forEach(function (comp) {
            if (!_this.helper.isNullOrUndefined(comp.selected_value)) {
                comp.input_value = comp.selected_value;
            }
        });
        this.cmRunning = true;
        this.interactionService.setCmRunning(this.cmRunning);
        this.calculationModuleStatusService.setCmRunned(this.cmSelected, this.components);
    };
    CalculationModuleComponent.prototype.setWaiting = function (val) {
        this.calculationModuleStatusService.setWaitingStatus(val);
    };
    CalculationModuleComponent.prototype.setComponentCategory = function () {
        var _this = this;
        this.inputs_categories.map(function (input) {
            input.contains_component = false;
            if (_this.components.filter(function (x) { return x.input_priority === input.id; }).length >= 1) {
                input.contains_component = true;
            }
        });
    };
    CalculationModuleComponent.prototype.getComponentFiltered = function (id) {
        return this.components.filter(function (x) { return x.input_priority === id; });
    };
    CalculationModuleComponent.prototype.validateAuthorizedScale = function (cm) {
        var _this = this;
        if (!this.helper.isNullOrUndefined(cm.authorized_scale) && cm.authorized_scale.length >= 1) {
            if (cm.authorized_scale.filter(function (x) { return x === _this.scaleLevel; }).length >= 1) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return true;
        }
    };
    CalculationModuleComponent.prototype.selectCM = function (cm) {
        var _this = this;
        if (this.validateAuthorizedScale(cm)) {
            this.toggleCMPanel(true);
            this.setWaiting(true);
            this.cmSelected = cm;
            this.layersFromType = [];
            if (!this.helper.isNullOrUndefined(cm.type_layer_needed)) {
                cm.type_layer_needed.map(function (layerType) {
                    _this.dataInteractionService.getLayersFromType(layerType).then(function (data) {
                        if (data.length >= 1) {
                            _this.layersFromType.push({ layerType: layerType, layers: data, layerSelected: data[0] });
                        }
                        else {
                            _this.layersFromType.push({ layerType: layerType, layers: [{ workspaceName: layerType, name: layerType }], layerSelected: layerType });
                        }
                    }).then(function () {
                        _this.setLayerNeeded();
                    });
                });
            }
            this.calculationModuleService.getCalculationModuleComponents(cm.cm_id).then(function (values) {
                _this.components = values;
                _this.components.forEach(function (comp) {
                    comp['input_default_value'] = comp.input_value;
                    if (typeof comp.input_value == 'object') {
                        comp.input_value = comp.input_value[0];
                    }
                });
            }).then(function () {
                _this.setComponentCategory();
            }).then(function () {
                _this.setWaiting(false);
            });
        }
        else {
            var scale_authorized = cm.authorized_scale.toString().replace(/,/g, ', ');
            this.toasterService.showToaster('Invalid scale level selected. <br/> Only <strong>' + scale_authorized + '</strong> can be choosen');
        }
    };
    CalculationModuleComponent.prototype.cmHidePanel = function () {
        this.setWaiting(true);
        this.calculationModuleStatusService.undefinedCmRunned();
        this.cmRunning = false;
        this.interactionService.setCmRunning(this.cmRunning);
        this.cmSelected = undefined;
        this.components = undefined;
        this.logger.log('cm box is hided');
        this.setWaiting(false);
    };
    CalculationModuleComponent.prototype.toggleCMPanel = function (value) {
        this.calculationModuleStatusService.setStatusCMPanel(value);
    };
    CalculationModuleComponent.prototype.getLayersFromType = function (layer) {
        this.dataInteractionService.getLayersFromType(layer);
    };
    CalculationModuleComponent.prototype.setLayerNeeded = function () {
        var _this = this;
        this.cmSelected.layers_needed = [];
        console.log(this.layersFromType);
        console.log(this.cmSelected);
        this.layersFromType.map(function (layer) {
            _this.cmSelected.layers_needed.push({ id: layer.layerSelected.id, name: layer.layerSelected.name, workspaceName: layer.layerSelected.workspaceName, layer_type: layer.layerSelected.layer_type });
        });
    };
    return CalculationModuleComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CalculationModuleComponent.prototype, "layersSelected", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CalculationModuleComponent.prototype, "expanded", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CalculationModuleComponent.prototype, "expandedState", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CalculationModuleComponent.prototype, "scaleLevel", void 0);
CalculationModuleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'htm-cms',
        template: __webpack_require__("../../../../../src/app/features/calculation-module/component/calculation-module.component.html"),
        styles: [__webpack_require__("../../../../../src/app/features/calculation-module/component/calculation-module.component.css")],
        animations: [
            // Formulare trigger
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["trigger"])('cmTrigger', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["state"])('expanded', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["style"])({ opacity: 1 })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["state"])('collapsed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["style"])({ opacity: 0 })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["transition"])('collapsed => expanded', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["animate"])('200ms 150ms linear')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["transition"])('expanded => collapsed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["animate"])('100ms linear'))
            ]),
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__service_calculation_module_service__["a" /* CalculationModuleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_calculation_module_service__["a" /* CalculationModuleService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__service_calcultation_module_status_service__["a" /* CalculationModuleStatusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__service_calcultation_module_status_service__["a" /* CalculationModuleStatusService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8__shared_services_interaction_service__["a" /* InteractionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__shared_services_interaction_service__["a" /* InteractionService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_app_features_layers_interaction_layers_interaction_service__["a" /* DataInteractionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_features_layers_interaction_layers_interaction_service__["a" /* DataInteractionService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__shared_helper__["a" /* Helper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_helper__["a" /* Helper */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__shared_services__["a" /* Logger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__shared_services__["a" /* Logger */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__shared_services__["d" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__shared_services__["d" /* ToasterService */]) === "function" && _g || Object])
], CalculationModuleComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=calculation-module.component.js.map

/***/ }),

/***/ "../../../../../src/app/features/calculation-module/component/mock-calculation.data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_features_layers_interaction_layers_interaction_data__ = __webpack_require__("../../../../../src/app/features/layers-interaction/layers-interaction.data.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return mockComponents; });

var cms = [
    {
        category: "Buildings",
        cm_id: 1,
        layers_needed: "[u'heat_tot_curr_density']",
        type_layer_needed: ["heat", __WEBPACK_IMPORTED_MODULE_0_app_features_layers_interaction_layers_interaction_data__["b" /* gfa_type */]],
        authorized_scale: ["NUTS 3", "Hectare"],
        cm_description: "this computation module allows to divide the HDM",
        cm_name: "calculation_module_test",
        cm_url: "https://172.26.0.2:80/",
        updatedAt: "2018-10-08 08:24:25.769397",
        createdAt: "2018-10-08 08:24:25.769399"
    },
    {
        category: "Buildings",
        cm_id: 2,
        layers_needed: "[u'heat_tot_curr_density']",
        type_needed: ["heat"],
        type_layer_needed: ["heat"],
        cm_description: "This computation module calculates district heating potential within the selected region",
        cm_name: "District Heating Potential",
        cm_url: "https://172.26.0.4:80/",
        updatedAt: "2018-10-08 08:24:25.796067",
        createdAt: "2018-10-08 08:24:25.796069"
    }
];
var mockComponents = [
    {
        input_id: "1",
        input_name: "Gross floor area",
        input_type: "input",
        input_parameter_name: "gfa",
        input_value: "100",
        input_priority: "0",
        input_unit: "m2",
        input_min: "0",
        input_max: "10000",
        createdAt: "2018-11-26 09:22:55.441705",
        updatedAt: "2018-11-26 09:22:55.441704",
        cm_id: "5"
    },
    {
        input_id: "2",
        input_name: "Interest rate",
        input_type: "input",
        input_parameter_name: "r",
        input_value: "0.05",
        input_priority: "0",
        input_unit: "",
        input_min: "0",
        input_max: "1",
        createdAt: "2018-11-26 09:22:55.441705",
        updatedAt: "2018-11-26 09:22:55.441704",
        cm_id: "5"
    },
    {
        input_id: "3",
        input_name: "Sector",
        input_type: "radio",
        input_parameter_name: "sector",
        input_value: ["service", "residential"],
        input_priority: "0",
        input_unit: "",
        input_min: "",
        input_max: "",
        createdAt: "2018-11-26 09:22:55.441705",
        updatedAt: "2018-11-26 09:22:55.441704",
        cm_id: "5"
    },
    {
        input_id: "4",
        input_name: "Building type",
        input_type: "select",
        input_parameter_name: "building_type",
        input_value: ["service", "new SFH", "new MFH"],
        input_priority: "0",
        input_unit: "",
        input_min: "",
        input_max: "",
        createdAt: "2018-11-26 09:22:55.441705",
        updatedAt: "2018-11-26 09:22:55.441704",
        cm_id: "5"
    },
    {
        input_id: "5",
        input_name: "Demand type",
        input_type: "select",
        input_parameter_name: "demand_type",
        input_value: ["heating", "cooling"],
        input_priority: "0",
        input_unit: "",
        input_min: "",
        input_max: "",
        createdAt: "2018-11-26 09:22:55.441705",
        updatedAt: "2018-11-26 09:22:55.441704",
        cm_id: "5"
    },
    {
        input_id: "6",
        input_name: "Year",
        input_type: "select",
        input_parameter_name: "year",
        input_value: ["2015", "2020", "2030", "2050"],
        input_priority: "0",
        input_unit: "",
        input_min: "",
        input_max: "",
        createdAt: "2018-11-26 09:22:55.441705",
        updatedAt: "2018-11-26 09:22:55.441704",
        cm_id: "5"
    }
];
//# sourceMappingURL=mock-calculation.data.js.map

/***/ }),

/***/ "../../../../../src/app/features/calculation-module/service/calculation-module.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_logger_service__ = __webpack_require__("../../../../../src/app/shared/services/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_loader_service__ = __webpack_require__("../../../../../src/app/shared/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_shared_data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services_toaster_service__ = __webpack_require__("../../../../../src/app/shared/services/toaster.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__component_mock_calculation_data__ = __webpack_require__("../../../../../src/app/features/calculation-module/component/mock-calculation.data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculationModuleService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Improvement of coding style :
// leaving one empty line between third party imports and application imports
// listing import lines alphabetized by the module










var CalculationModuleService = (function (_super) {
    __extends(CalculationModuleService, _super);
    function CalculationModuleService(http, logger, loaderService, toasterService, helper) {
        var _this = _super.call(this, http, logger, loaderService, toasterService) || this;
        _this.helper = helper;
        _this.categories = new Set();
        return _this;
    }
    CalculationModuleService.prototype.getcalculationModuleServicesPromise = function () {
        return Promise.resolve(this.getCalculationModuleServices());
    };
    CalculationModuleService.prototype.getCalculationModuleServices = function () {
        return _super.prototype.POST.call(this, '', __WEBPACK_IMPORTED_MODULE_6_app_shared_data_service__["a" /* apiUrl */] + '/cm/list');
    };
    CalculationModuleService.prototype.getMockCalculationModules = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_8__component_mock_calculation_data__["a" /* cms */]);
    };
    CalculationModuleService.prototype.getMockCalculationModuleComponents = function (id) {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_8__component_mock_calculation_data__["b" /* mockComponents */]);
    };
    CalculationModuleService.prototype.getCalculationModuleComponents = function (cmId) {
        this.logger.log('getCalculationModuleComponents');
        var payload = { cm_id: '' + cmId };
        return _super.prototype.POST.call(this, payload, __WEBPACK_IMPORTED_MODULE_6_app_shared_data_service__["a" /* apiUrl */] + '/cm/user-interface/');
    };
    CalculationModuleService.prototype.getCalculationModuleCategories = function (cms) {
        var _this = this;
        this.categories.clear();
        cms.forEach(function (cm) {
            if (cm.isReadable) {
                _this.categories.add(cm.category);
            }
        });
        return Promise.resolve(Array.from(this.categories.values()));
    };
    CalculationModuleService.prototype.getCMInformations = function (payload) {
        this.logger.log('compute-async/data ' + JSON.stringify(payload));
        return _super.prototype.POST.call(this, payload, __WEBPACK_IMPORTED_MODULE_6_app_shared_data_service__["a" /* apiUrl */] + '/cm/compute-async/');
    };
    CalculationModuleService.prototype.getStatusOfCM = function (status_id) {
        this.logger.log('getStatusOfCM()' + __WEBPACK_IMPORTED_MODULE_6_app_shared_data_service__["a" /* apiUrl */] + '/cm/status/' + status_id);
        if (this.helper.isNullOrUndefined(status_id)) {
            this.logger.log('is  undefine');
        }
        else {
            this.logger.log('is  ok undefine');
        }
        return _super.prototype.GET.call(this, __WEBPACK_IMPORTED_MODULE_6_app_shared_data_service__["a" /* apiUrl */] + '/cm/status/' + status_id).toPromise().then(function (response) { return response; })
            .catch(this.handleError.bind(this));
    };
    CalculationModuleService.prototype.deleteCM = function (id) {
        this.logger.log('deleteCM()' + __WEBPACK_IMPORTED_MODULE_6_app_shared_data_service__["a" /* apiUrl */] + id);
        return _super.prototype.DELETE.call(this, __WEBPACK_IMPORTED_MODULE_6_app_shared_data_service__["a" /* apiUrl */] + '/cm/delete/' + id);
    };
    return CalculationModuleService;
}(__WEBPACK_IMPORTED_MODULE_5__shared_services_api_service__["a" /* APIService */]));
CalculationModuleService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_logger_service__["a" /* Logger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_logger_service__["a" /* Logger */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_loader_service__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_loader_service__["a" /* LoaderService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__shared_services_toaster_service__["a" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__shared_services_toaster_service__["a" /* ToasterService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_9__shared__["Helper"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__shared__["Helper"]) === "function" && _e || Object])
], CalculationModuleService);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=calculation-module.service.js.map

/***/ }),

/***/ "../../../../../src/app/features/calculation-module/service/calculation-test.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_logger_service__ = __webpack_require__("../../../../../src/app/shared/services/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_loader_service__ = __webpack_require__("../../../../../src/app/shared/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_toaster_service__ = __webpack_require__("../../../../../src/app/shared/services/toaster.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculationHeatLoadDividedService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Improvement of coding style :
// leaving one empty line between third party imports and application imports
// listing import lines alphabetized by the module







var CalculationHeatLoadDividedService = (function (_super) {
    __extends(CalculationHeatLoadDividedService, _super);
    function CalculationHeatLoadDividedService(http, logger, loaderService, toasterService) {
        return _super.call(this, http, logger, loaderService, toasterService) || this;
    }
    CalculationHeatLoadDividedService.prototype.getCMResult = function (summaryResult, cm) {
        var cmResult = {};
        summaryResult.layers.map(function (layerResult) {
            if (layerResult.name === 'heat_tot_curr_density') {
                cmResult =
                    {
                        values: [
                            { unit: 'MWh', name: 'heat_consumption', value: String((layerResult.values[0].value / cm.component[0].value)) },
                            { unit: 'MWh/ha', name: 'heat_density', value: String(((layerResult.values[0].value / cm.component[0].value) / layerResult.values[2].value)) },
                            { unit: 'cells', name: 'count_cell_heat', value: String(layerResult.values[2].value) }
                        ],
                        name: cm.cm.id
                    };
                // layerResult.values[0].value
            }
        });
        return Promise.resolve(cmResult);
    };
    return CalculationHeatLoadDividedService;
}(__WEBPACK_IMPORTED_MODULE_5__shared_services_api_service__["a" /* APIService */]));
CalculationHeatLoadDividedService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_logger_service__["a" /* Logger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_logger_service__["a" /* Logger */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_loader_service__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_loader_service__["a" /* LoaderService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__shared_services_toaster_service__["a" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_services_toaster_service__["a" /* ToasterService */]) === "function" && _d || Object])
], CalculationHeatLoadDividedService);

var _a, _b, _c, _d;
//# sourceMappingURL=calculation-test.service.js.map

/***/ }),

/***/ "../../../../../src/app/features/calculation-module/service/calcultation-module-status.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculationModuleStatusService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CalculationModuleStatusService = (function () {
    function CalculationModuleStatusService() {
        this.waitingCM = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](true);
        this.cmRunned = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.panelIsOpen = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.cmAnimationStatus = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](0);
    }
    CalculationModuleStatusService.prototype.getWaitingSatus = function () {
        return this.waitingCM;
    };
    CalculationModuleStatusService.prototype.setWaitingStatus = function (value) {
        this.waitingCM.next(value);
    };
    CalculationModuleStatusService.prototype.setCmRunned = function (cm, components) {
        var calculationmodule = { 'cm': cm, 'component': components };
        this.cmRunned.next(calculationmodule);
    };
    CalculationModuleStatusService.prototype.getCmRunned = function () {
        return this.cmRunned;
    };
    CalculationModuleStatusService.prototype.undefinedCmRunned = function () {
        this.cmRunned.next(null);
    };
    CalculationModuleStatusService.prototype.getStatusCMPanel = function () {
        return this.panelIsOpen;
    };
    CalculationModuleStatusService.prototype.setStatusCMPanel = function (value) {
        this.panelIsOpen.next(value);
    };
    CalculationModuleStatusService.prototype.setCmAnimationStatus = function (value) {
        this.cmAnimationStatus.next(value);
    };
    CalculationModuleStatusService.prototype.getCmAnimationStatus = function () {
        return this.cmAnimationStatus;
    };
    return CalculationModuleStatusService;
}());
CalculationModuleStatusService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], CalculationModuleStatusService);

//# sourceMappingURL=calcultation-module-status.service.js.map

/***/ }),

/***/ "../../../../../src/app/features/export-data/component/export-data.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".divButtonExport{\n  /*position:absolute;*/\n  float: right;\n  bottom:0;\n  right:0;\n  margin-right: 10px;\n  margin-bottom: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/export-data/component/export-data.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"tabSelected === 'indicator'\" style=\"padding: 10px;\">\n  <button id=\"exportBtnIndicator\" class=\"uk-button uk-button-secondary\" [disabled]=\"!indicatorState\" (click)=\"exportIndicators()\">Export indicator</button>\n</div>\n\n<div *ngIf=\"tabSelected === 'charts'\" style=\"padding: 10px;\">\n  <button id=\"exportBtnGraph\" class=\"uk-button uk-button-secondary\" [disabled]=\"!graphState\" (click)=\"exportGraphic()\">Export graphs</button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/features/export-data/component/export-data.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_helper__ = __webpack_require__("../../../../../src/app/shared/helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_logger_service__ = __webpack_require__("../../../../../src/app/shared/services/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_export_data_service__ = __webpack_require__("../../../../../src/app/features/export-data/service/export-data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExportDataComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExportDataComponent = (function () {
    function ExportDataComponent(exportDataService, logger, helper) {
        this.exportDataService = exportDataService;
        this.logger = logger;
        this.helper = helper;
        this.displayButton = false;
    }
    ExportDataComponent.prototype.ngOnInit = function () {
    };
    ExportDataComponent.prototype.ngOnChanges = function (changes) {
    };
    ExportDataComponent.prototype.ngOnDestroy = function () {
        this.logger.log('ExportDataComponent/ngOnDestroy');
    };
    ExportDataComponent.prototype.exportIndicators = function () {
        var arraytmp = this.helper.summaryResultToCSV(this.indicators);
        this.exportData(arraytmp);
    };
    ExportDataComponent.prototype.exportGraphic = function () {
        var arraytmp = this.helper.chartsToCSV(this.graphics);
        this.exportData(arraytmp);
    };
    ExportDataComponent.prototype.exportData = function (result) {
        this.exportDataService.exportData(result, this.tabSelected);
    };
    return ExportDataComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ExportDataComponent.prototype, "graphics", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ExportDataComponent.prototype, "indicators", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ExportDataComponent.prototype, "indicatorState", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ExportDataComponent.prototype, "graphState", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ExportDataComponent.prototype, "tabSelected", void 0);
ExportDataComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'htm-export-data',
        template: __webpack_require__("../../../../../src/app/features/export-data/component/export-data.component.html"),
        styles: [__webpack_require__("../../../../../src/app/features/export-data/component/export-data.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__service_export_data_service__["a" /* ExportDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_export_data_service__["a" /* ExportDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_logger_service__["a" /* Logger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_logger_service__["a" /* Logger */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__shared_helper__["a" /* Helper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_helper__["a" /* Helper */]) === "function" && _c || Object])
], ExportDataComponent);

var _a, _b, _c;
//# sourceMappingURL=export-data.component.js.map

/***/ }),

/***/ "../../../../../src/app/features/export-data/service/export-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_csv_Angular2_csv__ = __webpack_require__("../../../../angular2-csv/Angular2-csv.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_csv_Angular2_csv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_csv_Angular2_csv__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_helper__ = __webpack_require__("../../../../../src/app/shared/helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_logger_service__ = __webpack_require__("../../../../../src/app/shared/services/logger.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExportDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExportDataService = (function () {
    function ExportDataService(helper, logger) {
        this.helper = helper;
        this.logger = logger;
    }
    ExportDataService.prototype.exportData = function (data, tabSelectedName) {
        var options = {
            fieldSeparator: ',',
            quoteStrings: '"',
            decimalseparator: '.',
            showLabels: true,
            showTitle: false,
            useBom: true
        };
        this.logger.log('ExportDataService/exportData');
        this.logger.log('data' + JSON.stringify(data));
        new __WEBPACK_IMPORTED_MODULE_0_angular2_csv_Angular2_csv__["Angular2Csv"](data, 'report_' + tabSelectedName + this.helper.generateRandomName(), options);
    };
    return ExportDataService;
}());
ExportDataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_helper__["a" /* Helper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_helper__["a" /* Helper */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_logger_service__["a" /* Logger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_logger_service__["a" /* Logger */]) === "function" && _b || Object])
], ExportDataService);

var _a, _b;
//# sourceMappingURL=export-data.service.js.map

/***/ }),

/***/ "../../../../../src/app/features/feedback/component/feedback.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form {\n\n}\n\nform > fieldset {\n    padding: 10px;\n}\n.input-file{\n    padding-left: 35px !important;\n}\ntextarea {\n    resize: none;\n}\n\ninput.ng-invalid, textarea.ng-invalid, select.ng-invalid{\n    border: 1px solid rgb(226, 7, 7);\n}\n\ninput.ng-valid, textarea.ng-valid{\n    border: 1px solid rgba(78, 78, 78, 0.19);\n}\n.loader-container{\n    z-index: 20000;\n    position: absolute;\n    width: 100%;\n    height: 578px;\n    top: 50px;\n    background-color: rgba(78, 78, 78, 0.19);\n}\n.loader-container .loader {\n    position: absolute;\n    top: 45%;\n    left: 45%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/feedback/component/feedback.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@feedbackTrigger]=\"expandedState\">\n    <form *ngIf='!submited' #form='ngForm' (ngSubmit)='submit(form)' enctype=\"multipart/form-data\" method=\"post\" novalidate>\n        <fieldset class='uk-fieldset'>\n            <div class='uk-margin-small'><input name='name' class='uk-input uk-form-small' type='text' placeholder='Firstname / Lastname' ngModel #names='ngModel' required ></div>\n            <div class='uk-margin-small'><input name='mail' class='uk-input uk-form-small' type='text' placeholder='Mail' required email ngModel #mail='ngModel'></div>\n            <div class='uk-margin-small'><input name='company' class='uk-input uk-form-small' type='text' placeholder='Company' required company ngModel #company='ngModel'></div>\n            <!-- <div class='uk-margin-small uk-grid-small uk-child-width-auto uk-grid'>\n                <label><input class='uk-radio' type='radio' name='categorie' value='Issue' ngModel #categorie='ngModel' required> Issue</label>\n                <label><input class='uk-radio' type='radio' name='categorie' value='Improvement' ngModel #categorie='ngModel'> Improvement</label>\n            </div> -->\n            <div class='uk-margin-small'>\n                <select class='uk-select uk-form-small' name=\"type\" [(ngModel)]=\"type\" required>\n                    <option [ngValue]=\"null\" >Select feedback type...</option>\n                    <option *ngFor=\"let issue_type of issue_type\" [ngValue]=\"issue_type\">\n                        {{issue_type.name}}\n                    </option>\n                </select>\n            </div>\n            <div class='uk-margin-small'>\n                <select class='uk-select uk-form-small' name=\"level\" [(ngModel)]=\"level\" required>\n                    <option [ngValue]=\"null\">Select feedback level...</option>\n                    <option *ngFor=\"let issue_level of issue_levels\" [ngValue]=\"issue_level\">\n                        {{issue_level.name}}\n                    </option>\n                </select>\n            </div>\n            <div class='uk-margin-small'><input name='title' class='uk-input uk-form-small' type='text' placeholder='Title' ngModel #title='ngModel' required ></div>\n            <div class='uk-margin-small'><textarea name='description' class='uk-textarea uk-form-small' rows='3' placeholder='Description' ngModel #description='ngModel' required></textarea></div>\n            <div class='uk-margin-small'>\n                <div class=\"uk-width-1-1 uk-inline\" uk-form-custom=\"target: true\">\n                    <input type=\"file\" name=\"picture\" #file_input (change)=\"onUploadFile(file_input.files)\" accept=\"image/*\">\n                    <input #file_string class=\"uk-input input-file  uk-form-small\" type=\"text\" placeholder=\"Select / drag&drop file\" disabled>\n                    <span class=\"uk-form-icon\" uk-icon=\"icon: upload\"></span>\n                </div>\n            </div>\n            <div class='uk-margin-small'>\n                <re-captcha siteKey=\"6Ldb7zcUAAAAADpGmUYGHKDq4HnQ-WqzfqissGje\" name=\"captcha\" [(ngModel)]=\"captcha\" required></re-captcha>\n            </div>\n            <div class='uk-margin-small'>\n                <button class='uk-button uk-button-default uk-width-1-1' type='submit' [disabled]='!form.valid'>\n                    Submit\n                </button>\n                <button class='uk-button uk-button-default uk-width-1-1'(click)=\"close($event)\" type='close'>\n                  close\n                </button>\n            </div>\n        </fieldset>\n    </form>\n    <ng-container *ngIf='feedbackLoader'>\n        <div class=\"loader-container\">\n            <div class=\"loader\" uk-spinner></div>\n        </div>\n    </ng-container>\n    <ng-container *ngIf='submited'>\n        <div class='uk-padding-small'>\n            Your request has been succesfull sent to administrators. It will be processed in the shortest time. <br />\n            Thanks Hotmappers !\n            <div class='uk-margin'><button class='uk-button uk-button-default uk-width-1-1' (click)='makeNewRequest()'>New request</button>\n              <button class='uk-button uk-button-default uk-width-1-1' (click)=\"close($event)\" type='close'>\n                close\n              </button></div>\n        </div>\n    </ng-container>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/features/feedback/component/feedback.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_interaction_service__ = __webpack_require__("../../../../../src/app/shared/services/interaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_features_feedback_data_taiga__ = __webpack_require__("../../../../../src/app/features/feedback/data-taiga.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__feedback_service__ = __webpack_require__("../../../../../src/app/features/feedback/feedback.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FeedbackComponent = (function () {
    function FeedbackComponent(interactionService, feedbackService, helper) {
        this.interactionService = interactionService;
        this.feedbackService = feedbackService;
        this.helper = helper;
        this.issue_levels = __WEBPACK_IMPORTED_MODULE_2_app_features_feedback_data_taiga__["a" /* issue_levels */];
        this.issue_type = __WEBPACK_IMPORTED_MODULE_2_app_features_feedback_data_taiga__["b" /* issue_type */];
        this.type = null;
        this.level = null;
        this.submited = false;
        this.feedbackLoader = false;
    }
    FeedbackComponent.prototype.ngOnInit = function () {
        this.type = null;
        this.level = null;
    };
    FeedbackComponent.prototype.ngOnDestroy = function () {
    };
    FeedbackComponent.prototype.resetForm = function (f) {
        this.file_input.nativeElement.value = "";
        this.file_string.nativeElement.value = "";
        f.reset();
    };
    FeedbackComponent.prototype.makeNewRequest = function () {
        this.submited = false;
    };
    FeedbackComponent.prototype.submit = function (f) {
        // this.feedbackLoader = true;
        if (f.valid) {
            this.sendRequest(f);
        }
        else {
            this.feedbackLoader = false;
            this.submited = false;
        }
    };
    FeedbackComponent.prototype.close = function () {
        this.interactionService.closeTopPanel();
        this.interactionService.disableStateOpenWithFunction('send_mail');
    };
    FeedbackComponent.prototype.onUploadFile = function (files) {
        this.files = files[0];
    };
    FeedbackComponent.prototype.showError = function () {
        this.interactionService.showToaster('Unable to send the issue! Please, try later or send a mail to administrator');
    };
    FeedbackComponent.prototype.sendRequest = function (f) {
        var _this = this;
        this.feedbackLoader = true;
        var fd = new FormData();
        if (!this.helper.isNullOrUndefined(this.files)) {
            fd.append('file', this.files, this.files.name);
        }
        fd.append('firstname', f.value['name']);
        fd.append('email', f.value['mail']);
        fd.append('company', f.value['company']);
        fd.append('feedback_type', f.value['type'].name);
        fd.append('feedback_priority', f.value['level'].name);
        fd.append('title', f.value['title']);
        fd.append('description', f.value['description']);
        this.feedbackService.sendFeedback(fd).then(function (val) {
            _this.feedbackLoader = false;
            _this.resetForm(f);
            _this.close();
            _this.interactionService.showToaster(val.message);
        }).catch(function (e) {
            _this.feedbackLoader = false;
        });
    };
    return FeedbackComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], FeedbackComponent.prototype, "expandedState", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('file_input'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], FeedbackComponent.prototype, "file_input", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('file_string'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
], FeedbackComponent.prototype, "file_string", void 0);
FeedbackComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'htm-feedback',
        template: __webpack_require__("../../../../../src/app/features/feedback/component/feedback.component.html"),
        styles: [__webpack_require__("../../../../../src/app/features/feedback/component/feedback.component.css")],
        animations: [
            // Formulare trigger
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('feedbackTrigger', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('expanded', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1 })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('collapsed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0 })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('collapsed => expanded', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('200ms 150ms linear')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('expanded => collapsed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('100ms linear'))
            ]),
        ]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_interaction_service__["a" /* InteractionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_interaction_service__["a" /* InteractionService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__feedback_service__["a" /* FeedbackService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__feedback_service__["a" /* FeedbackService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_app_shared__["Helper"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_shared__["Helper"]) === "function" && _e || Object])
], FeedbackComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=feedback.component.js.map

/***/ }),

/***/ "../../../../../src/app/features/feedback/data-taiga.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return issue_levels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return issue_type; });
var issue_levels = [
    { name: 'low', id: 1 },
    { name: 'normal', id: 2 },
    { name: 'high', id: 3 }
];
var issue_type = [
    { name: 'Bug', id: 1 },
    { name: 'Question', id: 2 },
    { name: 'Enhancement', id: 3 }
];
//# sourceMappingURL=data-taiga.js.map

/***/ }),

/***/ "../../../../../src/app/features/feedback/feedback.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_logger_service__ = __webpack_require__("../../../../../src/app/shared/services/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_loader_service__ = __webpack_require__("../../../../../src/app/shared/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_toaster_service__ = __webpack_require__("../../../../../src/app/shared/services/toaster.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Improvement of coding style :
// leaving one empty line between third party imports and application imports
// listing import lines alphabetized by the module







var FeedbackService = (function (_super) {
    __extends(FeedbackService, _super);
    function FeedbackService(http, logger, loaderService, toasterService) {
        return _super.call(this, http, logger, loaderService, toasterService) || this;
    }
    FeedbackService.prototype.sendFeedback = function (data) {
        return _super.prototype.POSTunStringify.call(this, data, __WEBPACK_IMPORTED_MODULE_6__shared_data_service__["a" /* apiUrl */] + __WEBPACK_IMPORTED_MODULE_6__shared_data_service__["b" /* user_endpoint */] + 'feedback', { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]() });
        //return this.http.post(, data);
    };
    return FeedbackService;
}(__WEBPACK_IMPORTED_MODULE_4__shared_services_api_service__["a" /* APIService */]));
FeedbackService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_logger_service__["a" /* Logger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_logger_service__["a" /* Logger */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_loader_service__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_loader_service__["a" /* LoaderService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_toaster_service__["a" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_services_toaster_service__["a" /* ToasterService */]) === "function" && _d || Object])
], FeedbackService);

var _a, _b, _c, _d;
//# sourceMappingURL=feedback.service.js.map

/***/ }),

/***/ "../../../../../src/app/features/feedback/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mail_service__ = __webpack_require__("../../../../../src/app/features/feedback/mail.service.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__platforms_utils__ = __webpack_require__("../../../../../src/app/features/feedback/platforms.utils.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__properties_utils__ = __webpack_require__("../../../../../src/app/features/feedback/properties.utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__properties_utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__properties_utils__);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__properties_utils__, "FeedbackComponent")) __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__properties_utils__["FeedbackComponent"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_feedback_component__ = __webpack_require__("../../../../../src/app/features/feedback/component/feedback.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function() { return __WEBPACK_IMPORTED_MODULE_3__component_feedback_component__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/features/feedback/mail.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__platforms_utils__ = __webpack_require__("../../../../../src/app/features/feedback/platforms.utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MailService = (function () {
    function MailService(logger) {
        this.logger = logger;
        this.properties = {};
    }
    /**
    * Send the email
    */
    MailService.prototype.sendEmail = function () {
        this.initService();
        window.open(this.url, 'newwindow', 'width=1070, height=600');
        // event.preventDefault();
    };
    MailService.prototype.initService = function () {
        if (!this.url) {
            this.platform = __WEBPACK_IMPORTED_MODULE_1__platforms_utils__["a" /* platforms */]['mail'];
            this.fetchProperties();
            this.constructUrl();
        }
    };
    /**
    * Fetch properties for the mail
    */
    MailService.prototype.fetchProperties = function () {
        this.properties.url = this.properties.url || this.getMetaContent('og:url') || window.location.href.toString();
        this.properties.title = this.properties.title || this.getMetaContent('og:title') || document.title;
        this.properties.description = this.properties.description || this.getMetaContent('og:description');
        this.properties.image = this.properties.image || this.getMetaContent('og:image');
        this.properties.via = this.properties.via || this.getMetaContent('n2s:via');
        this.properties.hashtags = this.properties.hashtags || this.getMetaContent('n2s:hashtags');
        // Improvement of coding style : (with codelyzer)
        // Identifier 'p' is never reassigned; use 'const' instead of 'let' (also 'val' and 'key')
        for (var p in this.properties) {
            if (this.properties.hasOwnProperty(p)) {
                this.properties[p] = encodeURIComponent(this.properties[p]);
            }
        }
    };
    /**
    * Construct the url for the mail
    */
    MailService.prototype.constructUrl = function () {
        this.url = this.platform.url + this.properties.url;
        if (this.platform.properties) {
            for (var key in this.platform.properties) {
                // if the property has been found.
                var val = this.properties[this.platform.properties[key]];
                if (val) {
                    this.url += "&" + key + "=" + val;
                }
            }
        }
    };
    MailService.prototype.getMetaContent = function (property) {
        var elem = document.querySelector("meta[property='" + property + "']");
        // Improvement of coding style : (with codelyzer)
        // if statements must be braced
        if (elem)
            return elem.getAttribute('content');
        return '';
    };
    return MailService;
}());
MailService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["Logger"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["Logger"]) === "function" && _a || Object])
], MailService);

var _a;
//# sourceMappingURL=mail.service.js.map

/***/ }),

/***/ "../../../../../src/app/features/feedback/platforms.utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return platforms; });
var platforms = {
    twitter: {
        name: 'twitter',
        url: 'https://twitter.com/intent/tweet?url=',
        logoOfficial: 'twitter',
        logo: 'twitter',
        text: 'Tweet',
        properties: {
            text: 'title',
            via: 'via',
            hashtags: 'hashtags'
        }
    },
    googlePlus: {
        name: 'google-plus',
        url: 'https://plus.google.com/share?url=',
        logoOfficial: 'google-plus',
        logo: 'google-plus',
        text: 'Share',
    },
    facebook: {
        name: 'facebook',
        url: 'https://www.facebook.com/sharer/sharer.php?u=',
        logoOfficial: 'facebook',
        logo: 'facebook',
        text: 'Share',
    },
    reddit: {
        name: 'reddit',
        url: 'https://www.reddit.com/submit?url=',
        logoOfficial: 'reddit-alien',
        logo: 'reddit',
        text: 'Submit',
        properties: {
            title: 'title'
        }
    },
    pinterest: {
        name: 'pinterest',
        url: 'https://pinterest.com/pin/create/button/?url=',
        logoOfficial: 'pinterest-p',
        logo: 'pinterest-lean',
        text: 'Pin',
        properties: {
            description: 'title',
            media: 'image'
        }
    },
    linkedin: {
        name: 'linkedin',
        url: 'https://www.linkedin.com/shareArticle?mini=true&url=',
        logoOfficial: 'linkedin',
        logo: 'linkedin2',
        text: 'Share',
        properties: {
            title: 'title'
        }
    },
    stumbleUpon: {
        name: 'stumbleUpon',
        url: 'https://www.stumbleupon.com/submit?url=',
        logoOfficial: 'stumbleupon',
        logo: 'stumbleupon',
        text: 'stumbleupon',
        properties: {
            title: 'title'
        }
    },
    tumblr: {
        name: 'tumblr',
        url: 'https://www.tumblr.com/share/link?url=',
        logoOfficial: 'tumblr',
        logo: 'tumblr2',
        text: 'Share',
        properties: {
            title: 'title',
            caption: 'description'
        }
    },
    mail: {
        name: 'mail',
        url: 'mailto:hotmaps2020@gmail.com?subject=',
        logoOfficial: 'envelope',
        logo: 'mail',
        text: 'Mail',
    }
};
//# sourceMappingURL=platforms.utils.js.map

/***/ }),

/***/ "../../../../../src/app/features/feedback/properties.utils.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=properties.utils.js.map

/***/ }),

/***/ "../../../../../src/app/features/gdpr/gdpr.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 style=\"text-align: center\">Privacy terms</h2>\n\n<div class=\"section\">\n  <h3 class=\"title\">Who is collecting the data ?</h3>\n  <div class=\"text\">\n    <p>Data is stored by <a href=\"https://www.hevs.ch/\">HES-SO Valais-Wallis</a> and is not given to third parties.</p>\n  </div>\n</div>\n\n<div class=\"section\">\n  <h3 class=\"title\">What data is being collected ?</h3>\n  <div class=\"text\">\n    <p>The personal data we store, are:</p>\n    <ul>\n      <li>Your name</li>\n      <li>Your email address</li>\n      <li>Any uploaded data through the toolbox</li>\n    </ul>\n  </div>\n</div>\n\n<div class=\"section\">\n  <h3 class=\"title\">How will the information be used ?</h3>\n  <div class=\"text\">\n    <p>\n      We use this information to identify different activities you perform on this website.\n    </p>\n    <p>\n      You can view or modify this data at any time by visiting your user profile.\n    </p>\n  </div>\n</div>\n<div class=\"section\">\n  <h3 class=\"title\">How long will the data be stored for ?</h3>\n  <div class=\"text\">\n    <p>\n      We store this data as long as your account is not removed.\n      You can remove your account and thereby all your personal data at any time in your user profile.\n    </p>\n  </div>\n</div>\n<div class=\"section\">\n  <h3 class=\"title\">How can I raise a complaint ?</h3>\n  <div class=\"text\">\n    <p>\n      You can complain about privacy violations at <a href=\"https://www.dsb.gv.at\"\n                                                      target=\"_blank\">https://www.dsb.gv.at</a>\n    </p>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/features/gdpr/gdpr.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.section {\n  padding-bottom: 35px;\n}\ndiv.section h3.title {\n  line-height: 15px;\n}\ndiv.section .text {\n  padding-left: 15px;\n}\ndiv.section p {\n  line-height: normal;\n  margin: 0;\n}\ndiv.section ul {\n  margin: 5px 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/gdpr/gdpr.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GdprComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GdprComponent = (function () {
    function GdprComponent() {
    }
    GdprComponent.prototype.ngOnInit = function () { };
    return GdprComponent;
}());
GdprComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'htm-gdpr',
        template: __webpack_require__("../../../../../src/app/features/gdpr/gdpr.component.html"),
        styles: [__webpack_require__("../../../../../src/app/features/gdpr/gdpr.component.less")]
    }),
    __metadata("design:paramtypes", [])
], GdprComponent);

//# sourceMappingURL=gdpr.component.js.map

/***/ }),

/***/ "../../../../../src/app/features/graph/chart/chart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n    position: relative;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    width: 100%;\n    height: 100%;\n}\n\n.spinner{\n  width: 100%;\n  text-align: center;\n  position: absolute;\n  top: 30%;\n}\n.wrapper-chart {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/graph/chart/chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"title\" *ngIf=\"title\">\n  <h5 class=\"uk-card-title\" style=\"float:left;margin: 10px;\">{{title}}</h5>\n</div>\n<div class=\"wrapper-chart\">\n  <canvas #canvas></canvas>\n  <div class=\"spinner\" *ngIf=\"isLoading\" uk-spinner=\"ratio: 3\"></div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/features/graph/chart/chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_js__ = __webpack_require__("../../../../chart.js/src/chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChartComponent = (function () {
    function ChartComponent(logger) {
        this.logger = logger;
        this.type = 'line';
        this.isLoading = true;
    }
    ChartComponent.prototype.ngOnInit = function () {
        this.logger.log('ChartComponent/ngOnInit()');
    };
    ChartComponent.prototype.ngOnChanges = function () {
        this.logger.log('ChartComponent/ngOnChange()');
        this.createChart();
    };
    ChartComponent.prototype.ngAfterViewInit = function () {
        this.createChart();
    };
    ChartComponent.prototype.createChart = function () {
        this.resetChart();
        this.logger.log('this.type =' + this.type);
        this.chart = new __WEBPACK_IMPORTED_MODULE_1_chart_js__["Chart"](this.canvas.nativeElement.getContext('2d'), {
            type: this.type,
            data: {
                labels: this.labels,
                datasets: this.datasets
            },
            labels: this.labels,
            options: this.options
        });
    };
    ChartComponent.prototype.resetChart = function () {
        if (this.chart) {
            this.chart.destroy();
            this.chart = void 0;
        }
    };
    return ChartComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('canvas'),
    __metadata("design:type", Object)
], ChartComponent.prototype, "canvas", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ChartComponent.prototype, "datasets", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ChartComponent.prototype, "labels", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ChartComponent.prototype, "type", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ChartComponent.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ChartComponent.prototype, "options", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ChartComponent.prototype, "isLoading", void 0);
ChartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'htm-chart',
        template: __webpack_require__("../../../../../src/app/features/graph/chart/chart.component.html"),
        styles: [__webpack_require__("../../../../../src/app/features/graph/chart/chart.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_shared__["Logger"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_shared__["Logger"]) === "function" && _a || Object])
], ChartComponent);

var _a;
//# sourceMappingURL=chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/features/graph/duration-curve/duration-curve.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".htm-card {\n    padding: 10px;\n}\n.spinner {\n    position: absolute; \n    left: 50%; \n    top: 50%; \n    color: black; \n}\n.activebutton{\n    background-color: #1e87f0;\n    color: white;\n}\n.waitingbox {\n    height: 290px;\n    width: 100%;\n    position: relative;\n}\n.title {\n    height: 50px;\n    width: 100%;\n    position: relative;\n}\n.date-visu{\n    text-align: center;\n    margin-bottom: 10px;\n}\n.right{\n    float: right;\n}\n.left{\n    float: left;\n}\n.date-visu > .right, .date-visu > .left {\n    cursor: pointer;\n}\n.date-visu > span {\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/graph/duration-curve/duration-curve.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"uk-card uk-card-body htm-card\">\n  <div class=\"title\">\n    <h5 class=\"uk-card-title\" style=\"float:left;margin-bottom: 0px;\">{{subtitle}} </h5>\n  </div>\n  <div class=\"lineargraph\" *ngIf=\"!loadingData\">\n    <htm-chart [datasets]=\"datasets\" [labels]=\"labels\" [options]=\"options\" [type]=\"type\"></htm-chart>\n  </div>\n</div>\n<!-- <div *ngIf=\"loadingData\" class=\"waitingbox\">\n  <div class=\"spinner\" uk-spinner></div>\n</div>\n -->\n"

/***/ }),

/***/ "../../../../../src/app/features/graph/duration-curve/duration-curve.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_logger_service__ = __webpack_require__("../../../../../src/app/shared/services/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_services_interaction_service__ = __webpack_require__("../../../../../src/app/shared/services/interaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DurationCurveComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DurationCurveComponent = (function () {
    function DurationCurveComponent(logger, helper, interactionService) {
        this.logger = logger;
        this.helper = helper;
        this.interactionService = interactionService;
        this.type = 'line';
        this.labels = [];
        this.subtitle = 'Duration curve';
        this.loadingData = false;
    }
    DurationCurveComponent.prototype.ngOnInit = function () {
        this.logger.log('DurationCurveComponent/ngOnInit');
        // this.update();
    };
    DurationCurveComponent.prototype.ngOnDestroy = function () {
        this.logger.log('DurationCurveComponent/ngOnDestroy');
    };
    DurationCurveComponent.prototype.ngOnChanges = function (changes) {
        this.logger.log('DurationCurveComponent/ngOnChanges');
        this.update();
    };
    DurationCurveComponent.prototype.update = function () {
        var _this = this;
        this.logger.log('DurationCurveComponent/update');
        var isHectare = false;
        var payload;
        if (this.scaleLevel === '-1') {
            isHectare = true;
            payload = this.helper.createDCPayloadHectares(__WEBPACK_IMPORTED_MODULE_4__shared_data_service__["_35" /* constant_year_duration_curve */], this.durationCurvePayload.areas);
        }
        else {
            payload = this.helper.createDCPayloadNuts(__WEBPACK_IMPORTED_MODULE_4__shared_data_service__["_35" /* constant_year_duration_curve */], this.durationCurvePayload.nuts);
        }
        this.loadingData = true;
        this.interactionService.getDurationCurveWithPayload(payload, isHectare).then(function (result) {
            // this.datasets = this.interactionService.transformDurationCurveData(result);
            _this.labels = _this.helper.createDurationCurveLabels(_this.labels);
            _this.options = __WEBPACK_IMPORTED_MODULE_4__shared_data_service__["_36" /* duration_curve_graph_options */];
        }).then(function () {
            _this.loadingData = false;
        });
    };
    return DurationCurveComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], DurationCurveComponent.prototype, "expanded", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DurationCurveComponent.prototype, "durationCurvePayload", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DurationCurveComponent.prototype, "scaleLevel", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DurationCurveComponent.prototype, "heatloadStatus", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], DurationCurveComponent.prototype, "areas", void 0);
DurationCurveComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'htm-duration-curve',
        template: __webpack_require__("../../../../../src/app/features/graph/duration-curve/duration-curve.component.html"),
        styles: [__webpack_require__("../../../../../src/app/features/graph/duration-curve/duration-curve.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_logger_service__["a" /* Logger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_logger_service__["a" /* Logger */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_shared__["Helper"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_shared__["Helper"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_shared_services_interaction_service__["a" /* InteractionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_shared_services_interaction_service__["a" /* InteractionService */]) === "function" && _c || Object])
], DurationCurveComponent);

var _a, _b, _c;
//# sourceMappingURL=duration-curve.component.js.map

/***/ }),

/***/ "../../../../../src/app/features/graph/duration-curve/duration-curve.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_logger_service__ = __webpack_require__("../../../../../src/app/shared/services/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_loader_service__ = __webpack_require__("../../../../../src/app/shared/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_toaster_service__ = __webpack_require__("../../../../../src/app/shared/services/toaster.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DurationCurveService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DurationCurveService = (function (_super) {
    __extends(DurationCurveService, _super);
    function DurationCurveService(http, logger, loaderService, toasterService, helper) {
        var _this = _super.call(this, http, logger, loaderService, toasterService) || this;
        _this.helper = helper;
        _this.chartDataset = { label: 'HeatLoad', data: [], borderColor: '#2889DF', fill: false }; // "fill: false" if the grey filling isn't good
        _this.formattedValues = [];
        return _this;
    }
    DurationCurveService.prototype.getDurationCurveWithPayload = function (payload, isHectare) {
        if (isHectare === false) {
            this.logger.log('DurationCurveService/getDurationCurveWithPayload = ' + JSON.stringify(payload));
            return _super.prototype.POST.call(this, payload, __WEBPACK_IMPORTED_MODULE_8__shared_data_service__["a" /* apiUrl */] + __WEBPACK_IMPORTED_MODULE_8__shared_data_service__["P" /* postDurationCurveNutsLau */]);
        }
        else {
            this.logger.log('DurationCurveService/getDurationCurveWithPayload = ' + JSON.stringify(payload));
            return _super.prototype.POST.call(this, payload, __WEBPACK_IMPORTED_MODULE_8__shared_data_service__["a" /* apiUrl */] + __WEBPACK_IMPORTED_MODULE_8__shared_data_service__["Q" /* postDurationCurveHectares */]);
        }
    };
    DurationCurveService.prototype.formatDataset = function () {
        this.chartDataset.data = [];
        this.formattedValues = [];
    };
    DurationCurveService.prototype.transformData = function (data) {
        this.formatDataset();
        for (var i = 0; i < data["points"].length; ++i) {
            this.formattedValues[i] = data["points"][i]['Y'];
        }
        this.chartDataset.data = this.formattedValues;
        return this.chartDataset;
    };
    DurationCurveService.prototype.getDefaultDatasetDurationCurve = function () {
        return this.chartDataset;
    };
    return DurationCurveService;
}(__WEBPACK_IMPORTED_MODULE_5__shared_services_api_service__["a" /* APIService */]));
DurationCurveService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_logger_service__["a" /* Logger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_logger_service__["a" /* Logger */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_loader_service__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_loader_service__["a" /* LoaderService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__shared_services_toaster_service__["a" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_services_toaster_service__["a" /* ToasterService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__shared__["Helper"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__shared__["Helper"]) === "function" && _e || Object])
], DurationCurveService);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=duration-curve.service.js.map

/***/ }),

/***/ "../../../../../src/app/features/graph/electricity-mix/component/electricity-mix.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".htm-card {\n  padding: 10px;\n}\n.spinner {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  color: black;\n}\n.activebutton{\n  background-color: #1e87f0;\n  color: white;\n}\n.waitingbox {\n  /*height: 30.05vh;*/\n  height: 290px;\n  width: 100%;\n  position: relative;\n}\n.title {\n  height: 50px;\n  width: 100%;\n  position: relative;\n}\n.date-visu{\n  text-align: center;\n  margin-bottom: 10px;\n}\n.right{\n  float: right;\n}\n.left{\n  float: left;\n}\n.date-visu > .right, .date-visu > .left {\n  cursor: pointer;\n}\n.date-visu > span {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.header-energy-mix > th{\n  color:white;\n  background-color:black;\n  text-align: center;\n  border-right: 1px solid #f5f5f5;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/graph/electricity-mix/component/electricity-mix.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"uk-table uk-table-divider uk-table-small\">\n<thead>\n<tr class=\"header-energy-mix\">\n  <th class=\"uk-table-shrink\">Data on NUTS0</th>\n</tr>\n</thead>\n  </table>\n<div class=\"uk-card uk-card-body htm-card\" *ngIf=\"!nodata\">\n  <div class=\"title\">\n    <h5 class=\"uk-card-title\" style=\"float:left;margin-bottom: 0px;\">{{subtitle}} </h5>\n  </div>\n  <div class=\"lineargraph\">\n    <htm-chart [datasets]=\"datasets\" [labels]=\"labels\" [options]=\"options\" [type]=\"type\"></htm-chart>\n  </div>\n</div>\n<!-- <div *ngIf=\"loadingData\" class=\"waitingbox\">\n  <div class=\"spinner\" uk-spinner></div>\n</div> -->\n"

/***/ }),

/***/ "../../../../../src/app/features/graph/electricity-mix/component/electricity-mix.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_services_interaction_service__ = __webpack_require__("../../../../../src/app/shared/services/interaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_logger_service__ = __webpack_require__("../../../../../src/app/shared/services/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElectricityMixComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ElectricityMixComponent = (function () {
    function ElectricityMixComponent(logger, interactionService) {
        this.logger = logger;
        this.interactionService = interactionService;
        this.subtitle = 'Electricity generation mix';
        this.type = 'pie';
    }
    ElectricityMixComponent.prototype.ngOnInit = function () {
        this.options = __WEBPACK_IMPORTED_MODULE_3__shared_data_service__["_34" /* energy_mix_options */];
        /* this.update(); */
    };
    ElectricityMixComponent.prototype.ngOnChanges = function (changes) {
    };
    return ElectricityMixComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ElectricityMixComponent.prototype, "labels", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ElectricityMixComponent.prototype, "datasets", void 0);
ElectricityMixComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'htm-electricity-mix',
        template: __webpack_require__("../../../../../src/app/features/graph/electricity-mix/component/electricity-mix.component.html"),
        styles: [__webpack_require__("../../../../../src/app/features/graph/electricity-mix/component/electricity-mix.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_logger_service__["a" /* Logger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_logger_service__["a" /* Logger */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_app_shared_services_interaction_service__["a" /* InteractionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_shared_services_interaction_service__["a" /* InteractionService */]) === "function" && _b || Object])
], ElectricityMixComponent);

var _a, _b;
//# sourceMappingURL=electricity-mix.component.js.map

/***/ }),

/***/ "../../../../../src/app/features/graph/electricity-mix/service/electricity-mix.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_services_logger_service__ = __webpack_require__("../../../../../src/app/shared/services/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_services_loader_service__ = __webpack_require__("../../../../../src/app/shared/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_shared_services_toaster_service__ = __webpack_require__("../../../../../src/app/shared/services/toaster.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_shared_data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElectricityMixService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ElectricityMixService = (function (_super) {
    __extends(ElectricityMixService, _super);
    function ElectricityMixService(http, logger, loaderService, toasterService, helper) {
        var _this = _super.call(this, http, logger, loaderService, toasterService) || this;
        _this.helper = helper;
        return _this;
    }
    ElectricityMixService.prototype.getElectricityMix = function (payload) {
        this.logger.log(__WEBPACK_IMPORTED_MODULE_7_app_shared_data_service__["a" /* apiUrl */] + __WEBPACK_IMPORTED_MODULE_7_app_shared_data_service__["N" /* postHeatLoadProfileHectares */]);
        return _super.prototype.POST.call(this, payload, __WEBPACK_IMPORTED_MODULE_7_app_shared_data_service__["a" /* apiUrl */] + __WEBPACK_IMPORTED_MODULE_7_app_shared_data_service__["O" /* getElectricityMixFromNuts0 */]);
    };
    return ElectricityMixService;
}(__WEBPACK_IMPORTED_MODULE_1__shared_services_api_service__["a" /* APIService */]));
ElectricityMixService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_shared_services_logger_service__["a" /* Logger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_shared_services_logger_service__["a" /* Logger */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_app_shared_services_loader_service__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_shared_services_loader_service__["a" /* LoaderService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_app_shared_services_toaster_service__["a" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_shared_services_toaster_service__["a" /* ToasterService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6_app_shared__["Helper"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_app_shared__["Helper"]) === "function" && _e || Object])
], ElectricityMixService);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=electricity-mix.service.js.map

/***/ }),

/***/ "../../../../../src/app/features/graph/heat-load/component/heat-load-chart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".htm-card {\n    padding: 10px;\n}\n.spinner {\n    position: absolute; \n    left: 50%; \n    top: 50%; \n    color: black; \n}\n.activebutton{\n    background-color: #1e87f0;\n    color: white;\n}\n.waitingbox {\n    /*height: 30.05vh;*/\n    height: 290px;\n    width: 100%;\n    position: relative;\n}\n.title {\n    height: 50px;\n    width: 100%;\n    position: relative;\n}\n.date-visu{\n    text-align: center;\n    margin-bottom: 10px;\n}\n.right{\n    float: right;\n}\n.left{\n    float: left;\n}\n.date-visu > .right, .date-visu > .left {\n    cursor: pointer;\n}\n.date-visu > span {\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/graph/heat-load/component/heat-load-chart.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"uk-card uk-card-body htm-card\" *ngIf=\"!nodata\">\n  <div class=\"title\">\n    <h5 class=\"uk-card-title\" style=\"float:left;margin-bottom: 0px;\">{{subtitle}} </h5>\n    <div class=\"uk-button-group date-buttons\" style=\"float:right;\">\n      <button *ngFor=\"let button of buttons_date_type\"\n        (click)=\"changeHeatloadType(button)\"\n        class=\"uk-button uk-button-default uk-button-small\" [class.activebutton]=\"button.selected\"\n        [class.uk-active]=\"button.selected\">\n        {{button.name}}\n      </button>\n    </div>\n  </div>\n  <div class=\"date-visu\">\n    <span class=\"center\">\n      <select class=\"uk-select\" (change)=\"onSelectChange($event)\">\n          <option *ngFor=\"let option of selectedButton.options\" [selected]=\"selectedButton.date === option.id\" [value]=\"option.id\">{{option.name}}</option>\n      </select>\n    </span>\n  </div>\n  <div class=\"lineargraph\">\n    <htm-chart [datasets]=\"datasets\" [labels]=\"labels\" [options]=\"options\" [type]=\"type\" [isLoading]=\"isLoading\"></htm-chart>\n  </div>\n</div>\n<!-- <div *ngIf=\"loadingData\" class=\"waitingbox\">\n  <div class=\"spinner\" uk-spinner></div>\n</div> -->\n"

/***/ }),

/***/ "../../../../../src/app/features/graph/heat-load/component/heat-load-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_logger_service__ = __webpack_require__("../../../../../src/app/shared/services/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_services_interaction_service__ = __webpack_require__("../../../../../src/app/shared/services/interaction.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeatLoadChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HeatLoadChartComponent = (function () {
    function HeatLoadChartComponent(logger, helper, interactionService) {
        this.logger = logger;
        this.helper = helper;
        this.interactionService = interactionService;
        this.isLoading = true;
        this.dateHeatload = { year: 2010, month: 1, day: 1 };
        this.subtitle = __WEBPACK_IMPORTED_MODULE_2_app_shared__["heatloadprofile"];
        this.type = 'line';
        this.default_year = 2010;
    }
    HeatLoadChartComponent.prototype.ngOnInit = function () {
        this.logger.log('HeatLoadChartComponent/ngOnInit');
        this.initComponent();
        this.update();
    };
    HeatLoadChartComponent.prototype.ngOnDestroy = function () {
        this.logger.log('HeatLoadChartComponent/ngOnDestroy');
        this.unselectButtons();
        // this.initComponent();
    };
    HeatLoadChartComponent.prototype.ngOnChanges = function (changes) {
        this.logger.log('HeatLoadChartComponent/ngOnChanges');
        this.update();
    };
    HeatLoadChartComponent.prototype.initComponent = function () {
        this.buttons_date_type = __WEBPACK_IMPORTED_MODULE_2_app_shared__["buttons_heat_load"];
        this.selectedButton = this.buttons_date_type[0];
        this.titleDate = this.selectedButton.date;
        this.selectedButton.selected = true;
        this.setOptionsInButtons();
    };
    HeatLoadChartComponent.prototype.setOptionsInButtons = function () {
        var _this = this;
        var month = this.buttons_date_type[1].date, year = this.buttons_date_type[0].date;
        this.buttons_date_type.map(function (button) {
            button.options = [];
            var maxDate;
            if (button.api_ref === __WEBPACK_IMPORTED_MODULE_2_app_shared__["heat_load_api_day"]) {
                maxDate = _this.getDaysInMonth(month, year);
            }
            else {
                maxDate = button.max;
            }
            for (var i = button.min; i <= maxDate; i++) {
                var dateToPush = void 0;
                if (button.api_ref === __WEBPACK_IMPORTED_MODULE_2_app_shared__["heat_load_api_month"]) {
                    dateToPush = _this.helper.getMonthString(i, 0);
                }
                else {
                    dateToPush = i;
                }
                button.options.push({ name: dateToPush, id: i });
            }
        });
    };
    HeatLoadChartComponent.prototype.getDaysInMonth = function (month, year) {
        return new Date(year, month, 0).getDate();
    };
    HeatLoadChartComponent.prototype.onSelectChange = function (event) {
        this.selectedButton.date = +event.target.value;
        this.update();
    };
    HeatLoadChartComponent.prototype.changeHeatloadType = function (button) {
        this.unselectButtons();
        button.selected = true;
        this.selectedButton = button;
        this.setOptionsInButtons();
        this.update();
    };
    HeatLoadChartComponent.prototype.unselectButtons = function () {
        this.buttons_date_type.map(function (but) {
            but.selected = false;
        });
    };
    HeatLoadChartComponent.prototype.decrementDate = function () {
        if (this.selectedButton.api_ref === __WEBPACK_IMPORTED_MODULE_2_app_shared__["heat_load_api_year"]) {
        }
        else if (this.selectedButton.date !== 1) {
            this.selectedButton.date--;
            this.update();
        }
    };
    HeatLoadChartComponent.prototype.incrementDate = function () {
        if ((this.selectedButton.api_ref === __WEBPACK_IMPORTED_MODULE_2_app_shared__["heat_load_api_month"]) && (this.selectedButton.date === 12)) {
        }
        else if ((this.selectedButton.api_ref === __WEBPACK_IMPORTED_MODULE_2_app_shared__["heat_load_api_day"]) && (this.selectedButton.date === 30)) {
        }
        else if (this.selectedButton.api_ref === __WEBPACK_IMPORTED_MODULE_2_app_shared__["heat_load_api_year"]) {
        }
        else {
            this.selectedButton.date++;
            this.update();
        }
    };
    HeatLoadChartComponent.prototype.defineTitleDate = function (value) {
        this.titleDate = value;
    };
    HeatLoadChartComponent.prototype.getCurrentDateFormated = function (button) {
        if (this.selectedButton.api_ref === __WEBPACK_IMPORTED_MODULE_2_app_shared__["heat_load_api_month"]) {
            return this.helper.getMonthString(button.date, 0);
        }
        else {
            return button.name + ' ' + button.date;
        }
    };
    HeatLoadChartComponent.prototype.update = function () {
        var _this = this;
        this.interactionService.setHeatLoadData(null);
        this.datasets = null;
        if (this.buttons_date_type !== undefined) {
            var isHectare = false;
            this.isLoading = true;
            var payload = void 0;
            if (!this.helper.isNullOrUndefined(this.heatLoadPayload)) {
                if (!this.helper.isNullOrUndefined(this.heatLoadPayload.areas)) {
                    isHectare = true;
                    payload = this.helper.createHLPayloadHectares(this.selectedButton.api_ref, this.buttons_date_type, this.heatLoadPayload.areas);
                }
                else {
                    payload = this.helper.createHLPayloadNuts(this.selectedButton.api_ref, this.buttons_date_type, this.heatLoadPayload.nuts);
                }
                payload['scale_level'] = this.heatLoadPayload.scale_level;
            }
            this.interactionService.getHeatLoad(payload, this.selectedButton.api_ref, isHectare).then(function (result) {
                _this.loadProfileData = [];
                _this.loadProfileData = _this.interactionService.formatHeatLoadForChartjs(result, _this.selectedButton.api_ref);
                _this.datasets = _this.loadProfileData[0];
                _this.labels = _this.loadProfileData[1];
                _this.options = __WEBPACK_IMPORTED_MODULE_3__shared_data_service__["_37" /* heat_load_graph_options */];
                _this.interactionService.setHeatLoadData({ dataset: _this.datasets, labels: _this.labels });
            }).then(function () {
                _this.isLoading = false;
            }).catch(function (e) {
                _this.logger.log(JSON.stringify(e));
                _this.isLoading = false;
            });
        }
    };
    return HeatLoadChartComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], HeatLoadChartComponent.prototype, "heatLoadPayload", void 0);
HeatLoadChartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'htm-heat-load-chart',
        template: __webpack_require__("../../../../../src/app/features/graph/heat-load/component/heat-load-chart.component.html"),
        styles: [__webpack_require__("../../../../../src/app/features/graph/heat-load/component/heat-load-chart.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_logger_service__["a" /* Logger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_logger_service__["a" /* Logger */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_shared__["Helper"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_shared__["Helper"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_app_shared_services_interaction_service__["a" /* InteractionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_shared_services_interaction_service__["a" /* InteractionService */]) === "function" && _c || Object])
], HeatLoadChartComponent);

var _a, _b, _c;
//# sourceMappingURL=heat-load-chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/features/graph/heat-load/component/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__heat_load_chart_component__ = __webpack_require__("../../../../../src/app/features/graph/heat-load/component/heat-load-chart.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__heat_load_chart_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/features/graph/heat-load/heat-load.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_logger_service__ = __webpack_require__("../../../../../src/app/shared/services/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_loader_service__ = __webpack_require__("../../../../../src/app/shared/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services_toaster_service__ = __webpack_require__("../../../../../src/app/shared/services/toaster.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeatLoadAggregateService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var HeatLoadAggregateService = (function (_super) {
    __extends(HeatLoadAggregateService, _super);
    function HeatLoadAggregateService(http, logger, loaderService, toasterService, helper) {
        var _this = _super.call(this, http, logger, loaderService, toasterService) || this;
        _this.helper = helper;
        _this.multiDatasets = [
            { label: 'Min', data: [], borderColor: '#2889DF', fill: false },
            { label: 'Max', data: [], borderColor: '#2889DF', fill: false },
            { label: 'Average', data: [], borderColor: '#d94f5c', fill: false }
        ];
        _this.singleDataset = [
            { label: 'Value', data: [], borderColor: '#2889DF', fill: false }
        ];
        _this.formattedValues = [];
        _this.heatLoadData = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        _this.labels = [];
        return _this;
    }
    HeatLoadAggregateService.prototype.setHeatLoadData = function (data) {
        this.heatLoadData.next(data);
    };
    HeatLoadAggregateService.prototype.getHeatLoadData = function () {
        return this.heatLoadData;
    };
    HeatLoadAggregateService.prototype.getHeatLoad = function (payload, type_api_ref, isHectare) {
        if (isHectare === false) {
            this.logger.log('postHeatLoadProfileNutsLau ' + __WEBPACK_IMPORTED_MODULE_8__shared_data_service__["a" /* apiUrl */] + __WEBPACK_IMPORTED_MODULE_8__shared_data_service__["R" /* postHeatLoadProfileNutsLau */] + '/' + type_api_ref + ' ; payload:' + JSON.stringify(payload));
            return _super.prototype.POST.call(this, payload, __WEBPACK_IMPORTED_MODULE_8__shared_data_service__["a" /* apiUrl */] + __WEBPACK_IMPORTED_MODULE_8__shared_data_service__["R" /* postHeatLoadProfileNutsLau */]);
        }
        else {
            this.logger.log('postHeatLoadProfileHectares ' + __WEBPACK_IMPORTED_MODULE_8__shared_data_service__["a" /* apiUrl */] + __WEBPACK_IMPORTED_MODULE_8__shared_data_service__["N" /* postHeatLoadProfileHectares */] + type_api_ref + ' ; payload:' + JSON.stringify(payload));
            this.logger.log(__WEBPACK_IMPORTED_MODULE_8__shared_data_service__["a" /* apiUrl */] + __WEBPACK_IMPORTED_MODULE_8__shared_data_service__["N" /* postHeatLoadProfileHectares */]);
            return _super.prototype.POST.call(this, payload, __WEBPACK_IMPORTED_MODULE_8__shared_data_service__["a" /* apiUrl */] + __WEBPACK_IMPORTED_MODULE_8__shared_data_service__["N" /* postHeatLoadProfileHectares */]);
        }
    };
    HeatLoadAggregateService.prototype.heatLoadMultiDataset = function (data) {
        var _this = this;
        data.values.map(function (value) {
            _this.multiDatasets[0].data.push(value.min);
            _this.multiDatasets[1].data.push(value.max);
            _this.multiDatasets[2].data.push(value.average);
        });
        this.formattedValues.push(this.multiDatasets);
    };
    HeatLoadAggregateService.prototype.heatLoadSingleDataset = function (data) {
        var _this = this;
        data.values.map(function (value) {
            _this.singleDataset[0].data.push(value.value);
        });
        this.formattedValues.push(this.singleDataset);
    };
    HeatLoadAggregateService.prototype.heatLoadLabelsYear = function (data) {
        var _this = this;
        data.values.map(function (value) {
            _this.labels.push(_this.helper.getMonthString(value.month, 0));
        });
    };
    HeatLoadAggregateService.prototype.heatLoadLabelsMonth = function (data) {
        var _this = this;
        data.values.map(function (value) {
            _this.labels.push(value.granularity + ' ' + value.day);
        });
    };
    HeatLoadAggregateService.prototype.heatLoadLabelsDay = function (data) {
        var _this = this;
        data.values.map(function (value) {
            _this.labels.push(value.granularity + ' ' + value.hour_of_day);
        });
    };
    HeatLoadAggregateService.prototype.formatDataset = function () {
        this.multiDatasets[0].data = [];
        this.multiDatasets[1].data = [];
        this.multiDatasets[2].data = [];
        this.singleDataset[0].data = [];
        this.labels = [];
        this.formattedValues = [];
    };
    HeatLoadAggregateService.prototype.formatHeatLoadForChartjs = function (data, api_ref) {
        this.formatDataset();
        if (api_ref === 'day') {
            this.heatLoadLabelsDay(data);
            this.heatLoadSingleDataset(data);
        }
        else if (api_ref === 'month') {
            this.heatLoadLabelsMonth(data);
            this.heatLoadMultiDataset(data);
        }
        else if (api_ref === 'year') {
            this.heatLoadLabelsYear(data);
            this.heatLoadMultiDataset(data);
        }
        this.formattedValues.push(this.labels);
        return this.formattedValues;
    };
    return HeatLoadAggregateService;
}(__WEBPACK_IMPORTED_MODULE_6__shared_services_api_service__["a" /* APIService */]));
HeatLoadAggregateService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_logger_service__["a" /* Logger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_logger_service__["a" /* Logger */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_loader_service__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_services_loader_service__["a" /* LoaderService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__shared_services_toaster_service__["a" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__shared_services_toaster_service__["a" /* ToasterService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_9_app_shared__["Helper"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9_app_shared__["Helper"]) === "function" && _e || Object])
], HeatLoadAggregateService);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=heat-load.service.js.map

/***/ }),

/***/ "../../../../../src/app/features/layer-tool/custom-symbology/custom-symbology.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".color-box {\n  height: 12px;\n  width: 50px;\n  float: left;\n  position: absolute;\n  left: 80px;\n}\n.symbolgy {\n  float: left;\n  margin:1px;\n  width: 100%;\n  position: relative;\n  height: 14px;\n  overflow: hidden;\n}\n.label {\n  text-align: left;\n  font-size: 12px;\n  line-height: 12px;\n  position: absolute;\n  left: 134px;\n  white-space: nowrap;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/layer-tool/custom-symbology/custom-symbology.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"symbolgies\">\n  <div class=\"symbolgy\" *ngFor=\"let symb of symbolgies\">\n    <div class=\"color-box\" [style.background-color]=\"'rgba(' + symb.red +',' + symb.green +',' +symb.blue +',' + symb.opacity +')'\"></div>\n    <div class=\"label\">\n        {{symb.value}}: {{symb.label}}\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/features/layer-tool/custom-symbology/custom-symbology.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomSymbologyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomSymbologyComponent = (function () {
    function CustomSymbologyComponent(helper) {
        this.helper = helper;
    }
    CustomSymbologyComponent.prototype.ngOnInit = function () {
        if (!this.helper.isNullOrUndefined(this.symbolgies)) {
            this.symbolgies.sort(function (a, b) {
                if (+a.value > +b.value)
                    return 1;
                if (+a.value < +b.value)
                    return -1;
                return 0;
            });
        }
    };
    return CustomSymbologyComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], CustomSymbologyComponent.prototype, "symbolgies", void 0);
CustomSymbologyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'htm-custom-symbology',
        template: __webpack_require__("../../../../../src/app/features/layer-tool/custom-symbology/custom-symbology.component.html"),
        styles: [__webpack_require__("../../../../../src/app/features/layer-tool/custom-symbology/custom-symbology.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_shared__["Helper"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_shared__["Helper"]) === "function" && _a || Object])
], CustomSymbologyComponent);

var _a;
//# sourceMappingURL=custom-symbology.component.js.map

/***/ }),

/***/ "../../../../../src/app/features/layer-tool/layer-tool.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tool-container {\n  margin:10px;\n}\n.tool-container > span {\n  cursor: pointer;\n  color: white;\n}\n.uk-button-primary {\n  background: #0f7ae5b3;\n}\n.uk-card-body {\n  padding: 10px;\n}\n.card-content {\n  text-align: center;\n  word-wrap: break-word;\n\n}\n\n.icon-download {\n  height: 20px;\n}\n\nbutton {\n  cursor: pointer;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/layer-tool/layer-tool.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tool-container\">\n  <button [class.uk-button-primary]=\"isLegendDisplayed\" class=\"uk-icon-button uk-button-default\" uk-icon=\"paint-bucket\" (click)=\"toggleLegend()\" uk-tooltip=\"title: Layer symbology; pos: bottom\"></button>\n  <button [class.uk-button-primary]=\"isInfoDisplayed\" class=\"uk-icon-button uk-button-default\" uk-icon=\"info\" (click)=\"toggleInformations()\" uk-tooltip=\"title: Informations; pos: bottom\"></button>\n  \n  <button [hidden]=\"!hasZoneSelected\" class=\"uk-icon-button uk-button-default\" (click)=\"export()\" uk-tooltip=\"title: Download layer selection; pos: bottom\">\n    <img class=\"icon-download\" src=\"../../../assets/logo_download_selection.svg\" />\n  </button>\n  <a *ngIf=\"dataInteraction.download_url\" href=\"{{ dataInteraction.download_url }}\">\n    <button  class=\"uk-icon-button uk-button-default\" uk-tooltip=\"title: Download default dataset; pos: bottom\">\n    <img class=\"icon-download\" src=\"../../../assets/logo_download_all.svg\" />\n  </button></a>  \n  <div *ngIf=\"loading\" uk-spinner></div>\n</div>\n\n<!--\n  Layer legend\n-->\n<div [hidden]=\"!isLegendDisplayed\" class=\"uk-card uk-card-default uk-card-body\">\n  <h3 class=\"uk-card-title\">Symbology</h3>\n  <div class=\"card-content\">\n    <ng-container *ngIf=\"dataInteraction.custom_symbology\">\n      <htm-custom-symbology [symbolgies]=\"dataInteraction.custom_symbology\"></htm-custom-symbology>\n    </ng-container>\n    <ng-container *ngIf=\"!dataInteraction.custom_symbology\">\n      <img [hidden]=\"!displayLegend\" src=\"{{imageUrl}}{{dataInteraction.layer_type}}\" (load)=\"endLoadLegend()\" />\n      <div *ngIf=\"!displayLegend\" class=\"loader\" uk-spinner></div>\n    </ng-container>\n  </div>\n</div>\n<div *ngIf=\"isLegendDisplayed\" class=\"uk-margin\"></div>\n<!--\n  Layer informations\n-->\n<div *ngIf=\"isInfoDisplayed\" class=\"uk-card uk-card-default uk-card-body\">\n  <h3 class=\"uk-card-title\">Informations</h3>\n  <div *ngIf=\"dataInteraction.description\" class=\"card-content\">\n    <p>\n      {{dataInteraction.description}}\n    </p>\n  </div>\n</div>\n<div *ngIf=\"isInfoDisplayed\" class=\"uk-margin\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/features/layer-tool/layer-tool.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layers_interaction_layers_interaction_class__ = __webpack_require__("../../../../../src/app/features/layers-interaction/layers-interaction.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_pages_map__ = __webpack_require__("../../../../../src/app/pages/map/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_services_upload_service__ = __webpack_require__("../../../../../src/app/shared/services/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayerToolComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LayerToolComponent = (function () {
    function LayerToolComponent(mapService, uploadService) {
        this.mapService = mapService;
        this.uploadService = uploadService;
        this.imageUrl = __WEBPACK_IMPORTED_MODULE_4__shared_data_service__["_28" /* urlLegend */];
        this.isLegendDisplayed = false;
        this.isInfoDisplayed = false;
        this.displayLegend = false;
        this.loading = false;
        this.hasZoneSelected = false;
    }
    LayerToolComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.mapService.getLoadResultbuttonState()) {
            this.mapService.getLoadResultbuttonState().subscribe(function (value) { return _this.hasZoneSelected = value
                && [__WEBPACK_IMPORTED_MODULE_4__shared_data_service__["q" /* nuts3 */], __WEBPACK_IMPORTED_MODULE_4__shared_data_service__["e" /* lau2 */], __WEBPACK_IMPORTED_MODULE_4__shared_data_service__["d" /* hectare */]].indexOf(_this.mapService.getScaleValue()) > -1; });
        }
    };
    LayerToolComponent.prototype.toggleLegend = function () {
        this.isLegendDisplayed = !this.isLegendDisplayed;
    };
    LayerToolComponent.prototype.toggleInformations = function () {
        this.isInfoDisplayed = !this.isInfoDisplayed;
    };
    LayerToolComponent.prototype.endLoadLegend = function () {
        this.displayLegend = true;
    };
    LayerToolComponent.prototype.export = function () {
        var _this = this;
        this.loading = true;
        this.uploadService.export(this.dataInteraction.workspaceName)
            .then(function (data) {
            if (data.url != "") {
                //window.open(data.url); //POPUP blocker
                var a = document.createElement('a');
                a.href = data.url;
                a.download = data.filename;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(data.url);
            }
            _this.loading = false;
        });
    };
    return LayerToolComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__layers_interaction_layers_interaction_class__["a" /* DataInteractionClass */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layers_interaction_layers_interaction_class__["a" /* DataInteractionClass */]) === "function" && _a || Object)
], LayerToolComponent.prototype, "dataInteraction", void 0);
LayerToolComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'htm-layer-tool',
        template: __webpack_require__("../../../../../src/app/features/layer-tool/layer-tool.component.html"),
        styles: [__webpack_require__("../../../../../src/app/features/layer-tool/layer-tool.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_pages_map__["b" /* MapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_pages_map__["b" /* MapService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_shared_services_upload_service__["a" /* UploadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_shared_services_upload_service__["a" /* UploadService */]) === "function" && _c || Object])
], LayerToolComponent);

var _a, _b, _c;
//# sourceMappingURL=layer-tool.component.js.map

/***/ }),

/***/ "../../../../../src/app/features/layers-interaction/layers-interaction-cell/layers-interaction-cell.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n:host {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    min-height: 0;\n    min-width: 0;\n    /*max-height: 48px;*/\n    padding: 3px;\n    font-family: 'Hind', sans-serif;\n\n}\n.spinner{\n  float: right;\n  line-height: 27px;\n}\n.custom-tooltip {\n  opacity: 0;\n  z-index:0;\n  top: -20px;\n  right: 0px;\n  padding: 2px;\n  position: absolute;\n  color: white;\n  font-size: 9px;\n  background-color: #333333;\n  border-radius:5px;\n  transition: visibility 0s, opacity 0.2s linear;\n}\n.details:hover .custom-tooltip{\n  opacity: 1;\n  z-index:2000;\n\n}\n.isSelected{\n    color:white;\n    background-color: #2889DF;\n}\n.details {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    margin-left: 2px;\n    width: 100%;\n}\n.notifications {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  overflow-y: auto;\n}\n.legend {\n  text-align: center;\n}\n.legend-div {\n  padding: 5px;\n}\n.uk-accordion-content, .uk-accordion{\n  margin: 0px !important;\n}\n.icon {\n}\n.flaticon-signs-1::before {\n  margin: 0px;\n}\n.message {\n\n}\n\n.date {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    font-size: 0.6em;\n    color: #444444;\n}\nbutton{\n    padding: 0 5px;\n    text-align: left;\n    /* font-size: 0.675rem; */\n}\n\ninput:checked{\n    border-color: green !important;\n}\n\ninput{\n    margin: 0px 5px;\n}\n.uk-button-secondary{\n    background-color: #333333;\n}\n\n.uk-accordion-title::after {\n  display: none;\n}\n\n.wait {\n  cursor: wait;\n}\n.uk-button {\n  line-height: 28px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/layers-interaction/layers-interaction-cell/layers-interaction-cell.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"expanded\" [@visibleTrigger]=\"'visible'\" class=\"details\">\n  <div style=\"position:relative\">\n    <div class=\"custom-tooltip\" *ngIf=\"dataInteraction.isLoading\">\n      {{dataInteraction.name}} layer is loading\n    </div>\n    <button type=\"button\" [class.wait]=\"interactionService.getSummaryResultState()\" name={{dataInteraction.workspaceName}}\n      class=\"uk-button uk-button-default uk-width-1-1 button-layer\" (click)=\"showRemoveLayer($event)\" [class.uk-button-secondary]=\"dataInteraction.isSelected\">\n      <input class=\"uk-checkbox\" type=\"checkbox\" [checked]=\"dataInteraction.isSelected\">\n      {{dataInteraction.name}}\n      <div *ngIf=\"dataInteraction.isLoading\" class=\"spinner\" uk-spinner=\"ratio:0.5\" ></div>\n    </button>\n  </div>\n  <htm-layer-tool *ngIf=\"dataInteraction.isSelected\" [dataInteraction]=\"dataInteraction\"></htm-layer-tool>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/features/layers-interaction/layers-interaction-cell/layers-interaction-cell.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_map_map_service__ = __webpack_require__("../../../../../src/app/pages/map/map.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layers_interaction_class__ = __webpack_require__("../../../../../src/app/features/layers-interaction/layers-interaction.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_interaction_service__ = __webpack_require__("../../../../../src/app/shared/services/interaction.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataInteractionCellComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DataInteractionCellComponent = (function () {
    function DataInteractionCellComponent(mapService, interactionService) {
        this.mapService = mapService;
        this.interactionService = interactionService;
        this.loading = true;
        this.cm_cat = __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["v" /* calculation_module_category */];
    }
    DataInteractionCellComponent.prototype.ngOnInit = function () {
    };
    DataInteractionCellComponent.prototype.endLoad = function () {
        this.loading = false;
    };
    DataInteractionCellComponent.prototype.showRemoveLayer = function (e) {
        if (this.interactionService.getSummaryResultState() === false) {
            this.dataInteraction.isSelected = !this.dataInteraction.isSelected;
            if (this.dataInteraction.category === __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["v" /* calculation_module_category */]) {
                this.mapService.displayCustomLayerFromCM(this.dataInteraction.cm_id, this.dataInteraction.type_of_layer);
            }
            else {
                var order = __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["Z" /* layers_order */];
                if (this.dataInteraction.order) {
                    order = this.dataInteraction.order;
                }
                this.mapService.showOrRemoveLayer(this.dataInteraction.workspaceName, order);
                if (this.dataInteraction.zoomLevel > 0) {
                    this.mapService.checkZoomLevelLayer(this.dataInteraction.workspaceName, this.dataInteraction.zoomLevel);
                }
                this.mapService.setLayersSubject();
            }
        }
    };
    DataInteractionCellComponent.prototype.getIdSubtringing = function (id) {
        return id.substring(0, 5);
    };
    return DataInteractionCellComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__layers_interaction_class__["a" /* DataInteractionClass */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__layers_interaction_class__["a" /* DataInteractionClass */]) === "function" && _a || Object)
], DataInteractionCellComponent.prototype, "dataInteraction", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], DataInteractionCellComponent.prototype, "expanded", void 0);
DataInteractionCellComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'layers-interaction-cell',
        template: __webpack_require__("../../../../../src/app/features/layers-interaction/layers-interaction-cell/layers-interaction-cell.component.html"),
        styles: [__webpack_require__("../../../../../src/app/features/layers-interaction/layers-interaction-cell/layers-interaction-cell.component.css")],
        animations: [
            // Define an animation that adjusts the opactiy when a new item is created
            //  in the DOM. We use the 'visible' string as the hard-coded value in the
            //  trigger.
            //
            // When an item is added we wait for 300ms, and then increase the opacity to 1
            //  over a 200ms time interval. When the item is removed we don't delay anything
            //  and use a 200ms interval.
            //
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["trigger"])('visibleTrigger', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["state"])('visible', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ opacity: '1' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["transition"])('void => *', [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ opacity: '0' }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["animate"])('200ms 300ms')]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["transition"])('* => void', [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["animate"])('200ms', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ opacity: '0' }))])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__pages_map_map_service__["a" /* MapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__pages_map_map_service__["a" /* MapService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_interaction_service__["a" /* InteractionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_interaction_service__["a" /* InteractionService */]) === "function" && _c || Object])
], DataInteractionCellComponent);

var _a, _b, _c;
//# sourceMappingURL=layers-interaction-cell.component.js.map

/***/ }),

/***/ "../../../../../src/app/features/layers-interaction/layers-interaction.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataInteractionClass; });
var DataInteractionClass = (function () {
    function DataInteractionClass() {
    }
    return DataInteractionClass;
}());

//# sourceMappingURL=layers-interaction.class.js.map

/***/ }),

/***/ "../../../../../src/app/features/layers-interaction/layers-interaction.data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* unused harmony export potential_type */
/* unused harmony export wwtp_type */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return gfa_type; });
/* unused harmony export industry_type */
/* unused harmony export population_type */
/* unused harmony export building_volume_type */
/* unused harmony export gitlabUrl */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataInteractionArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return cm_default_layer; });
// TODO: LAYER INTERACTION SERVICE
// Default layer id are defined to 0 by default 
// In this dictionnary, We can have calculation module


var potential_type = 'potential';
var wwtp_type = 'wwtp';
var gfa_type = 'gross_floor_area';
var industry_type = 'industy';
var population_type = 'population';
var building_volume_type = 'building_volumes';
var gitlabUrl = 'https://gitlab.com/hotmaps/';
var DataInteractionArray = [
    // Buildings
    { id: __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["r" /* idDefaultLayer */], name: 'Heat density total', category: 'Buildings', isSelected: true,
        workspaceName: 'heat_tot_curr_density', zoomLevel: 0, ref: ['overall', 'demand'], styleName: 'heat_tot_curr_density', layer_type: __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["s" /* defaultLayerType */],
        download_url: gitlabUrl + '/heat/heat_tot_curr_density/raw/master/data/heat_tot_curr_density.tif',
        description: 'Information on the layer can be found here: ' + gitlabUrl + '/heat/heat_tot_curr_density/blob/master/README.md', isLoading: false },
    { id: __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["r" /* idDefaultLayer */], name: 'Heat density residential sector', category: 'Buildings', isSelected: false,
        workspaceName: 'heat_res_curr_density', zoomLevel: 0, ref: ['overall', 'demand'], styleName: 'heat_tot_curr_density', layer_type: __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["s" /* defaultLayerType */],
        download_url: gitlabUrl + '/heat/heat_res_curr_density/raw/master/data/heat_res_curr_density.tif',
        description: 'Information on the layer can be found here: ' + gitlabUrl + '/heat/heat_res_curr_density/blob/master/README.md', isLoading: false },
    { id: __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["r" /* idDefaultLayer */], name: 'Heat density non-residential sector', category: 'Buildings', isSelected: false,
        workspaceName: 'heat_nonres_curr_density', zoomLevel: 0, ref: ['overall', 'demand'], styleName: 'heat_tot_curr_density', layer_type: __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["s" /* defaultLayerType */],
        download_url: gitlabUrl + '/heat/heat_nonres_curr_density/raw/master/data/heat_nonres_curr_density.tif',
        description: 'Information on the layer can be found here: ' + gitlabUrl + '/heat/heat_nonres_curr_density/blob/master/README.md', isLoading: false },
    { id: __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["r" /* idDefaultLayer */], name: 'Cooling density total', category: 'Buildings', isSelected: false,
        workspaceName: 'cool_tot_curr_density', zoomLevel: 0, ref: ['overall', 'demand'], styleName: 'cool_density', layer_type: 'cooling',
        download_url: gitlabUrl + '/heat/cool_tot_curr_density/blob/master/data/cool_tot_curr_density.tif',
        description: 'Information on the layer can be found here: ' + gitlabUrl + '/heat/cool_tot_curr_density/blob/master/README.md', isLoading: false },
    { id: __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["r" /* idDefaultLayer */], name: 'Gross floor area total', category: 'Buildings', isSelected: false,
        workspaceName: 'gfa_tot_curr_density', zoomLevel: 0, ref: ['overall', 'buildings'], styleName: 'gfa_tot_curr_density', layer_type: gfa_type,
        download_url: gitlabUrl + '/gfa_tot_curr_density/blob/master/data/gfa_tot_curr_density.tif',
        description: 'Information on the layer can be found here: ' + gitlabUrl + '/gfa_tot_curr_density/blob/master/README.md', isLoading: false },
    { id: __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["r" /* idDefaultLayer */], name: 'Gross floor area residential', category: 'Buildings', isSelected: false,
        workspaceName: 'gfa_res_curr_density', zoomLevel: 0, ref: ['overall', 'buildings'], styleName: 'gfa_tot_curr_density', layer_type: gfa_type,
        download_url: gitlabUrl + '/gfa_res_curr_density/blob/master/data/gfa_res_curr_density.tif',
        description: 'Information on the layer can be found here: ' + gitlabUrl + '/gfa_res_curr_density/blob/master/README.md', isLoading: false },
    { id: __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["r" /* idDefaultLayer */], name: 'Gross floor area non-residential', category: 'Buildings', isSelected: false,
        workspaceName: 'gfa_nonres_curr_density', zoomLevel: 0, ref: ['overall', 'buildings'], styleName: 'gfa_tot_curr_density', layer_type: gfa_type,
        download_url: gitlabUrl + '/gfa_nonres_curr_density/blob/master/data/gfa_nonres_curr_density.tif',
        description: 'Information on the layer can be found here: ' + gitlabUrl + '/gfa_nonres_curr_density/blob/master/README.md', isLoading: false },
    { id: __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["r" /* idDefaultLayer */], name: 'Building volumes total', category: 'Buildings', isSelected: false,
        workspaceName: 'vol_tot_curr_density', zoomLevel: 0, ref: ['overall', 'buildings'], styleName: 'vol_tot_curr_density', layer_type: building_volume_type,
        download_url: gitlabUrl + '/vol_tot_curr_density/blob/master/data/vol_tot_curr_density.tif',
        description: 'Information on the layer can be found here: ' + gitlabUrl + '/vol_tot_curr_density/blob/master/README.md', isLoading: false },
    { id: __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["r" /* idDefaultLayer */], name: 'Building volumes residential', category: 'Buildings', isSelected: false,
        workspaceName: 'vol_res_curr_density', zoomLevel: 0, ref: ['overall', 'buildings'], styleName: 'vol_tot_curr_density', layer_type: building_volume_type,
        download_url: gitlabUrl + '/vol_res_curr_density/blob/master/data/vol_res_curr_density.tif',
        description: 'Information on the layer can be found here: ' + gitlabUrl + '/vol_res_curr_density/blob/master/README.md', isLoading: false },
    { id: __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["r" /* idDefaultLayer */], name: 'Building volumes non-residential', category: 'Buildings', isSelected: false,
        workspaceName: 'vol_nonres_curr_density', zoomLevel: 0, ref: ['overall', 'buildings'], styleName: 'vol_tot_curr_density', layer_type: building_volume_type,
        download_url: gitlabUrl + '/vol_nonres_curr_density/blob/master/data/vol_nonres_curr_density.tif',
        description: 'Information on the layer can be found here: ' + gitlabUrl + '/vol_nonres_curr_density/blob/master/README.md', isLoading: false },
    // Industry
    { id: __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["r" /* idDefaultLayer */], name: 'Industrial Sites Emissions', category: 'Industry', isSelected: false,
        workspaceName: 'industrial_database_emissions', zoomLevel: 0, ref: ['overall', 'industry'], styleName: 'industrial_emissions', layer_type: 'industrial_database_emissions', order: __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["t" /* industry_layer_order */],
        download_url: gitlabUrl + '/industrial_sites/industrial_sites_Industrial_Database/blob/master/data/Industrial_Database.csv',
        description: 'Information on the layer can be found here: ' + gitlabUrl + '/industrial_sites/industrial_sites_Industrial_Database/blob/master/README.md', isLoading: false },
    { id: __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["r" /* idDefaultLayer */], name: 'Industrial Sites Excess Heat', category: 'Industry', isSelected: false,
        workspaceName: 'industrial_database_excess_heat', zoomLevel: 0, ref: ['overall', 'industry'], styleName: 'industrial_excess_heat', layer_type: 'industrial_database_excess_heat', order: __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["t" /* industry_layer_order */],
        download_url: gitlabUrl + '/industrial_sites/industrial_sites_Industrial_Database/blob/master/data/Industrial_Database.csv',
        description: 'Information on the layer can be found here: ' + gitlabUrl + '/industrial_sites/industrial_sites_Industrial_Database/blob/master/README.md', isLoading: false },
    { id: __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["r" /* idDefaultLayer */], name: 'Industrial Sites Company Name', category: 'Industry', isSelected: false,
        workspaceName: 'industrial_database_compagnyname', zoomLevel: 0, ref: ['overall', 'industry'], styleName: 'industrial_compagny_name', layer_type: 'industrial_database_compagnyname', order: __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["t" /* industry_layer_order */],
        download_url: gitlabUrl + '/industrial_sites/industrial_sites_Industrial_Database/blob/master/data/Industrial_Database.csv',
        description: 'Information on the layer can be found here: ' + gitlabUrl + '/industrial_sites/industrial_sites_Industrial_Database/blob/master/README.md', isLoading: false },
    { id: __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["r" /* idDefaultLayer */], name: 'Industrial Sites Subsector', category: 'Industry', isSelected: false,
        workspaceName: 'industrial_database_subsector', zoomLevel: 0, ref: ['overall', 'industry'], styleName: 'industrial_subsector', layer_type: 'industrial_database_subsector', order: __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["t" /* industry_layer_order */],
        download_url: gitlabUrl + '/industrial_sites/industrial_sites_Industrial_Database/blob/master/data/Industrial_Database.csv',
        description: 'Information on the layer can be found here: ' + gitlabUrl + '/industrial_sites/industrial_sites_Industrial_Database/blob/master/README.md', isLoading: false },
    // Population
    { id: 14, name: 'Population total', category: 'Population', isSelected: false,
        workspaceName: 'pop_tot_curr_density', zoomLevel: 0, ref: ['overall', 'demand'], styleName: 'pop_tot_curr_density', layer_type: 'pop_tot_curr_density',
        download_url: gitlabUrl + '/pop_tot_curr_density/blob/master/data/pop_tot_curr_density.tif',
        description: 'Information on the layer can be found here: ' + gitlabUrl + '/pop_tot_curr_density/blob/master/README.md', isLoading: false },
    // Potentials
    { id: __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["r" /* idDefaultLayer */], name: 'Waste Water Treatment Plants - Power', category: 'R.E.S. Potential', isSelected: false,
        workspaceName: 'wwtp_power', zoomLevel: __WEBPACK_IMPORTED_MODULE_1__shared_data_service__["u" /* zoomLevelDetectChange */], ref: ['overall', 'potential'], styleName: 'default', layer_type: 'wwtp_power',
        download_url: gitlabUrl + '/potential/WWTP/blob/master/data/2015/WWTP_2015.csv',
        description: 'Information on the layer can be found here: ' + gitlabUrl + '/potential/WWTP/blob/master/README.md', isLoading: false },
    { id: __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["r" /* idDefaultLayer */], name: 'Waste Water Treatment Plants - Capacity', category: 'R.E.S. Potential', isSelected: false,
        workspaceName: 'wwtp_capacity', zoomLevel: __WEBPACK_IMPORTED_MODULE_1__shared_data_service__["u" /* zoomLevelDetectChange */], ref: ['overall', 'potential'], styleName: 'wwtp_capacity', layer_type: 'wwtp_capacity',
        download_url: gitlabUrl + '/potential/WWTP/blob/master/data/2015/WWTP_2015.csv',
        description: 'Information on the layer can be found here: ' + gitlabUrl + '/potential/WWTP/blob/master/README.md', isLoading: false },
    { id: __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["r" /* idDefaultLayer */], name: 'Agricultural residues', category: 'R.E.S. Potential', isSelected: false,
        workspaceName: 'agricultural_residues_view', zoomLevel: 0, ref: ['overall', 'potential'], styleName: 'agriculture', layer_type: 'agricultural_residues_view',
        download_url: gitlabUrl + '/potential/potential_biomass/blob/master/data/agricultural_residues.csv',
        description: 'Information on the layer can be found here: ' + gitlabUrl + '/potential/potential_biomass/blob/master/README.md', isLoading: false },
    { id: __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["r" /* idDefaultLayer */], name: 'Livestock effluents', category: 'R.E.S. Potential', isSelected: false,
        workspaceName: 'livestock_effluents_view', zoomLevel: 0, ref: ['overall', 'potential'], styleName: 'livestock', layer_type: 'livestock_effluents_view',
        download_url: gitlabUrl + '/potential/potential_biomass/blob/master/data/livestock_effluents.csv',
        description: 'Information on the layer can be found here: ' + gitlabUrl + '/potential/potential_biomass/blob/master/README.md', isLoading: false },
    { id: __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["r" /* idDefaultLayer */], name: 'Forest residues', category: 'R.E.S. Potential', isSelected: false,
        workspaceName: 'potential_forest', zoomLevel: 0, ref: ['overall', 'potential'], styleName: 'forest', layer_type: 'potential_forest',
        download_url: gitlabUrl + '/potential_biomass/blob/master/data/forest_residues.csv',
        description: 'Information on the layer can be found here: ' + gitlabUrl + '/potential_biomass/blob/master/README.md', isLoading: false },
    { id: __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["r" /* idDefaultLayer */], name: 'Municipal solid waste', category: 'R.E.S. Potential', isSelected: false,
        workspaceName: 'potential_municipal_solid_waste', zoomLevel: 0, ref: ['overall', 'potential'], styleName: 'municipal_waste', layer_type: 'potential_municipal_solid_waste',
        download_url: gitlabUrl + '/potential/potential_municipal_solid_waste/blob/master/data/solid_waste.csv',
        description: 'Information on the layer can be found here: ' + gitlabUrl + '/potential/potential_municipal_solid_waste/blob/master/README.md', isLoading: false },
    { id: __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["r" /* idDefaultLayer */], name: 'Wind potential at 50 meters', category: 'R.E.S. Potential', isSelected: false,
        workspaceName: 'wind_50m', zoomLevel: 0, ref: ['overall', 'potential'], styleName: 'wind', layer_type: 'wind_50m',
        download_url: gitlabUrl + '/potential/potential_wind/blob/master/data/wind_50m.tif',
        description: 'Information on the layer can be found here: ' + gitlabUrl + '/potential/potential_wind/blob/master/README.md', isLoading: false },
    { id: __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["r" /* idDefaultLayer */], name: 'Solar radiation on building footprint', category: 'R.E.S. Potential', isSelected: false,
        workspaceName: 'solar_optimal_total', zoomLevel: 0, ref: ['overall', 'potential'], styleName: 'solar_optimal_total', layer_type: 'solar_optimal_total',
        download_url: gitlabUrl + '/potential/potential_solar/blob/master/data/solar_opt.tif',
        description: 'Information on the layer can be found here: ' + gitlabUrl + '/potential/potential_solar/blob/master/README.md', isLoading: false },
    // shallow geothermal vector layer
    { id: __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["r" /* idDefaultLayer */], name: 'Geothermal potential Heat Conductivity ', category: 'R.E.S. Potential', isSelected: false,
        workspaceName: 'shallow_geothermal_potential', zoomLevel: 0, ref: ['overall', 'potential'] /*['no_showed']*/, styleName: 'shallow_geothermal_potential', layer_type: 'shallow_geothermal_potential',
        description: 'Information on the layer can be found here: ' + gitlabUrl + '/potential/potential_shallowgeothermal/blob/master/README.md', isLoading: false },
    // I would suggest to only show on of the geothermal layers - in DB integrated as vector and raster - which one do we need for the indicator?
    /*  {id: idDefaultLayer, name: 'Geothermal Potential Hc Class ', category: 'R.E.S. Potential', isSelected: false,
        workspaceName: 'potential_shallowgeothermal_hc_class', zoomLevel: 0, ref: ['overall', 'potential'], styleName: 'potential_shallowgeothermal_hc_class', layer_type: defaultLayerType,
      description: 'Information on the layer can be found here: ' + gitlabUrl + '/potential/potential_shallowgeothermal/blob/master/README.md'}, isLoading:false},*/
    // Climate
    { id: __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["r" /* idDefaultLayer */], name: 'Average temperature', category: 'Climate', isSelected: false,
        workspaceName: 'land_surface_temperature', zoomLevel: 0, ref: ['overall', 'climate'], styleName: 'temp_v2', layer_type: 'land_surface_temperature',
        download_url: gitlabUrl + '/climate/climate_land_surface_temperature/blob/master/data/eurolst_mean.tif',
        description: 'Information on the layer can be found here: ' + gitlabUrl + '/climate/climate_land_surface_temperature/blob/master/README.md', isLoading: false },
    { id: __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["r" /* idDefaultLayer */], name: 'Cooling degree days', category: 'Climate', isSelected: false,
        workspaceName: 'cdd_curr', zoomLevel: 0, ref: ['overall', 'climate'], styleName: 'cdd_curr_tif', layer_type: 'cdd_curr',
        download_url: gitlabUrl + '/climate/CDD_ha_curr/blob/master/data/CDD_curr.tif',
        description: 'Information on the layer can be found here: ' + gitlabUrl + '/climate/CDD_ha_curr/blob/master/README.md', isLoading: false },
    { id: __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["r" /* idDefaultLayer */], name: 'Heating degree days', category: 'Climate', isSelected: false,
        workspaceName: 'hdd_curr', zoomLevel: 0, ref: ['overall', 'climate'], styleName: 'hdd_curr_tif', layer_type: 'hdd_curr',
        download_url: gitlabUrl + '/climate/HDD_ha_curr/blob/master/data/HDD_curr.tif',
        description: 'Information on the layer can be found here: ' + gitlabUrl + '/climate/HDD_ha_curr/blob/master/README.md', isLoading: false },
    { id: __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["r" /* idDefaultLayer */], name: 'Solar radiation', category: 'Climate', isSelected: false,
        workspaceName: 'solar_radiation', zoomLevel: 0, ref: ['overall', 'climate'], styleName: 'solar_optimal_total', layer_type: 'climate_solar_radiation',
        download_url: gitlabUrl + '/climate/climate_solar_radiation/blob/master/data/output_solar_radiation.tif',
        description: 'Information on the layer can be found here: ' + gitlabUrl + '/climate/climate_solar_radiation/blob/master/README.md', isLoading: false },
    { id: __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["r" /* idDefaultLayer */], name: 'Wind speed', category: 'Climate', isSelected: false,
        workspaceName: 'output_wind_speed', zoomLevel: 0, ref: ['overall', 'climate'], styleName: 'wind', layer_type: 'output_wind_speed',
        download_url: gitlabUrl + '/climate/climate_wind_speed/blob/master/data/EU_wind_speed_average.tif',
        description: 'Information on the layer can be found here: ' + gitlabUrl + '/climate/climate_wind_speed/blob/master/README.md', isLoading: false },
    // Electricity
    { id: __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["r" /* idDefaultLayer */], name: 'Electricity CO2 emissions - country average', category: 'Electricity', isSelected: false,
        workspaceName: 'yearly_co2_emission', zoomLevel: 0, ref: ['overall', 'electricity'], styleName: 'yearly_co2_emission', layer_type: 'yearly_co2_emission',
        download_url: gitlabUrl + '/load_electricity/electricity_emissions_hourly/blob/master/data/Emissions_hourly.csv',
        description: 'Information on the layer can be found here: ' + gitlabUrl + '/load_electricity/electricity_emissions_hourly/blob/master/README.md', isLoading: false },
];
var cm_default_layer = {
    id: __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["r" /* idDefaultLayer */], name: '',
    category: __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["v" /* calculation_module_category */],
    isSelected: true,
    workspaceName: '',
    zoomLevel: 0, ref: ['overall', __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["v" /* calculation_module_category */]],
    styleName: '',
    layer_type: __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["v" /* calculation_module_category */],
    cm_id: '',
    isLoading: false
};
//# sourceMappingURL=layers-interaction.data.js.map

/***/ }),

/***/ "../../../../../src/app/features/layers-interaction/layers-interaction.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layers_interaction_data__ = __webpack_require__("../../../../../src/app/features/layers-interaction/layers-interaction.data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_logger_service__ = __webpack_require__("../../../../../src/app/shared/services/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_loader_service__ = __webpack_require__("../../../../../src/app/shared/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services_toaster_service__ = __webpack_require__("../../../../../src/app/shared/services/toaster.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_helper__ = __webpack_require__("../../../../../src/app/shared/helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_business_business_service__ = __webpack_require__("../../../../../src/app/shared/business/business.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataInteractionService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Improvement of coding style :
// leaving one empty line between third party imports and application imports
// listing import lines alphabetized by the module











var DataInteractionService = (function (_super) {
    __extends(DataInteractionService, _super);
    function DataInteractionService(http, logger, loaderService, toasterService, helper, business) {
        var _this = _super.call(this, http, logger, loaderService, toasterService) || this;
        _this.helper = helper;
        _this.business = business;
        return _this;
    }
    /* getModulesServices(): Promise<ModulesService[]> {
      return this.http.get(this.servicesUrl)
        .toPromise()
        .then(response => response.json().data as ModulesService[])
        .catch(this.handleError);
    }*/
    DataInteractionService.prototype.getDataInteractionServices = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_3__layers_interaction_data__["a" /* DataInteractionArray */]);
    };
    DataInteractionService.prototype.getDataArrayServices = function () {
        return __WEBPACK_IMPORTED_MODULE_3__layers_interaction_data__["a" /* DataInteractionArray */];
    };
    DataInteractionService.prototype.layerExists = function (layer) {
        var arr_size = __WEBPACK_IMPORTED_MODULE_3__layers_interaction_data__["a" /* DataInteractionArray */].filter(function (x) { return x.id === layer.id; }).length;
        if (arr_size === 0) {
            return false;
        }
        else {
            return true;
        }
    };
    DataInteractionService.prototype.removeLayer = function (id) {
        console.log(this.getDataArrayServices());
        __WEBPACK_IMPORTED_MODULE_3__layers_interaction_data__["a" /* DataInteractionArray */].splice(__WEBPACK_IMPORTED_MODULE_3__layers_interaction_data__["a" /* DataInteractionArray */].findIndex(function (x) { return x.id === id; }), 1);
        console.log(this.getDataArrayServices());
    };
    DataInteractionService.prototype.addNewLayer = function (name, id, layer_type) {
        console.log(this.getDataArrayServices());
        var newLayerAdded = __WEBPACK_IMPORTED_MODULE_3__layers_interaction_data__["a" /* DataInteractionArray */].push(Object.assign({}, __WEBPACK_IMPORTED_MODULE_3__layers_interaction_data__["a" /* DataInteractionArray */][0]));
        __WEBPACK_IMPORTED_MODULE_3__layers_interaction_data__["a" /* DataInteractionArray */][newLayerAdded - 1].name = name;
        __WEBPACK_IMPORTED_MODULE_3__layers_interaction_data__["a" /* DataInteractionArray */][newLayerAdded - 1].id = id;
        __WEBPACK_IMPORTED_MODULE_3__layers_interaction_data__["a" /* DataInteractionArray */][newLayerAdded - 1].layer_type = layer_type;
        __WEBPACK_IMPORTED_MODULE_3__layers_interaction_data__["a" /* DataInteractionArray */][newLayerAdded - 1].ref = ['overall'];
        __WEBPACK_IMPORTED_MODULE_3__layers_interaction_data__["a" /* DataInteractionArray */][newLayerAdded - 1].category = '';
        __WEBPACK_IMPORTED_MODULE_3__layers_interaction_data__["a" /* DataInteractionArray */][newLayerAdded - 1].isSelected = false;
        __WEBPACK_IMPORTED_MODULE_3__layers_interaction_data__["a" /* DataInteractionArray */][newLayerAdded - 1].download_url = '';
        __WEBPACK_IMPORTED_MODULE_3__layers_interaction_data__["a" /* DataInteractionArray */][newLayerAdded - 1].description = '';
        console.log(this.getDataArrayServices());
    };
    DataInteractionService.prototype.addNewCMLayer = function (name, id, symbology_layer_type, type_of_layer, symb, layer_id) {
        if (layer_id === void 0) { layer_id = 0; }
        var newLayerAdded = __WEBPACK_IMPORTED_MODULE_3__layers_interaction_data__["a" /* DataInteractionArray */].push(Object.assign({}, __WEBPACK_IMPORTED_MODULE_3__layers_interaction_data__["c" /* cm_default_layer */]));
        __WEBPACK_IMPORTED_MODULE_3__layers_interaction_data__["a" /* DataInteractionArray */][newLayerAdded - 1].name = name;
        __WEBPACK_IMPORTED_MODULE_3__layers_interaction_data__["a" /* DataInteractionArray */][newLayerAdded - 1].workspaceName = name;
        __WEBPACK_IMPORTED_MODULE_3__layers_interaction_data__["a" /* DataInteractionArray */][newLayerAdded - 1].cm_id = id;
        __WEBPACK_IMPORTED_MODULE_3__layers_interaction_data__["a" /* DataInteractionArray */][newLayerAdded - 1].type_of_layer = type_of_layer;
        __WEBPACK_IMPORTED_MODULE_3__layers_interaction_data__["a" /* DataInteractionArray */][newLayerAdded - 1].layer_type = symbology_layer_type;
        __WEBPACK_IMPORTED_MODULE_3__layers_interaction_data__["a" /* DataInteractionArray */][newLayerAdded - 1].custom_symbology = symb;
        __WEBPACK_IMPORTED_MODULE_3__layers_interaction_data__["a" /* DataInteractionArray */][newLayerAdded - 1].id = layer_id;
    };
    DataInteractionService.prototype.getReadableName = function (layerName) {
        this.logger.log('DataInteractionService/getReadableName layerName=' + layerName);
        var layer = this.getDataArrayServices().filter(function (x) { return x.workspaceName === layerName; })[0];
        if (this.helper.isNullOrUndefined(layer)) {
            var layer_new = this.business.getReadableName(layerName);
            if (this.helper.isNullOrUndefined(layer_new)) {
                return layerName;
            }
            else {
                return layer_new;
            }
        }
        return layer.name;
    };
    DataInteractionService.prototype.getModulesServicesWithNewService = function (newService) {
        var servicesArray = __WEBPACK_IMPORTED_MODULE_3__layers_interaction_data__["a" /* DataInteractionArray */];
        servicesArray.push(newService);
        return Promise.resolve(servicesArray);
    };
    DataInteractionService.prototype.getModulesServicesSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            // Simulate server latency with 2 second delay
            setTimeout(function () { return resolve(_this.getDataInteractionServices()); }, 2000);
        });
    };
    DataInteractionService.prototype.getRefFromLayerName = function (name) {
        this.logger.log('getRefFromLayerName/name:' + name);
        var layer = this.getLayersTabs().filter(function (x) { return x.workspaceName === name; })[0];
        if (this.helper.isNullOrUndefined(layer)) {
            return ["overall"];
        }
        return layer.ref;
    };
    DataInteractionService.prototype.getLayersTabs = function () {
        return __WEBPACK_IMPORTED_MODULE_3__layers_interaction_data__["a" /* DataInteractionArray */];
    };
    DataInteractionService.prototype.getSplittedResults = function (results) {
        this.logger.log('go inside  getSplittedResults+ ' + results);
        var newResults = this.helper.createSplittedResultsModel();
        var rLayers = results.layers;
        this.logger.log('rLayers ' + rLayers);
        this.logger.log('rLayers ' + JSON.stringify(rLayers));
        var rNoDataLayers = results.no_data_layers;
        // returns null if results is empty
        if (this.helper.isNullOrUndefined(rLayers) && this.helper.isNullOrUndefined(rNoDataLayers)) {
            return null;
        }
        for (var j = 0; j < __WEBPACK_IMPORTED_MODULE_10__shared_data_service__["j" /* summay_drop_down_buttons */].length; j++) {
            for (var i = 0; i < rLayers.length; i++) {
                if (this.getRefFromLayerName(results.layers[i].name).includes(__WEBPACK_IMPORTED_MODULE_10__shared_data_service__["j" /* summay_drop_down_buttons */][j]["ref"])) {
                    var ref = __WEBPACK_IMPORTED_MODULE_10__shared_data_service__["j" /* summay_drop_down_buttons */][j]["ref"];
                    newResults[ref]["layers"].push(results.layers[i]);
                    this.logger.log('rLayers ' + rLayers);
                }
            }
            for (var i = 0; i < rNoDataLayers.length; i++) {
                if (this.getRefFromLayerName(results.no_data_layers[i]).includes(__WEBPACK_IMPORTED_MODULE_10__shared_data_service__["j" /* summay_drop_down_buttons */][j]["ref"])) {
                    var ref = __WEBPACK_IMPORTED_MODULE_10__shared_data_service__["j" /* summay_drop_down_buttons */][j]["ref"];
                    newResults[ref]["no_data_layers"].push(results.no_data_layers[i]);
                }
            }
        }
        this.logger.log(' newResults rLayers ' + JSON.stringify(newResults));
        this.logger.log(' newResults rLayers ' + newResults);
        return newResults;
    };
    DataInteractionService.prototype.getLayersFromType = function (layer) {
        return this.getDataInteractionServices().then(function (data) {
            console.log(layer, data);
            return data.filter(function (x) { return x.layer_type === layer; });
        });
    };
    DataInteractionService.prototype.setLoadingLayerInterraction = function (layer) {
        this.getDataInteractionServices().then(function (data) {
            data.filter(function (x) { return x.workspaceName === layer; })[0].isLoading = true;
        });
    };
    DataInteractionService.prototype.unsetLoadingLayerInterraction = function (layer) {
        this.getDataInteractionServices().then(function (data) {
            data.filter(function (x) { return x.workspaceName === layer; })[0].isLoading = false;
        });
    };
    return DataInteractionService;
}(__WEBPACK_IMPORTED_MODULE_6__shared_services_api_service__["a" /* APIService */]));
DataInteractionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_logger_service__["a" /* Logger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_logger_service__["a" /* Logger */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_loader_service__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_services_loader_service__["a" /* LoaderService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__shared_services_toaster_service__["a" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__shared_services_toaster_service__["a" /* ToasterService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8__shared_helper__["a" /* Helper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__shared_helper__["a" /* Helper */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_9__shared_business_business_service__["a" /* BusinessInterfaceRenderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__shared_business_business_service__["a" /* BusinessInterfaceRenderService */]) === "function" && _f || Object])
], DataInteractionService);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=layers-interaction.service.js.map

/***/ }),

/***/ "../../../../../src/app/features/layers/class/geojson.class.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=geojson.class.js.map

/***/ }),

/***/ "../../../../../src/app/features/layers/class/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__geojson_class__ = __webpack_require__("../../../../../src/app/features/layers/class/geojson.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__geojson_class___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__geojson_class__);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__geojson_class__, "LayersService")) __webpack_require__.d(__webpack_exports__, "LayersService", function() { return __WEBPACK_IMPORTED_MODULE_0__geojson_class__["LayersService"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layer_class__ = __webpack_require__("../../../../../src/app/features/layers/class/layer.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layer_class___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__layer_class__);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__layer_class__, "LayersService")) __webpack_require__.d(__webpack_exports__, "LayersService", function() { return __WEBPACK_IMPORTED_MODULE_1__layer_class__["LayersService"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/features/layers/class/layer.class.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=layer.class.js.map

/***/ }),

/***/ "../../../../../src/app/features/layers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__class__ = __webpack_require__("../../../../../src/app/features/layers/class/index.ts");
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__class__, "LayersService")) __webpack_require__.d(__webpack_exports__, "LayersService", function() { return __WEBPACK_IMPORTED_MODULE_0__class__["LayersService"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("../../../../../src/app/features/layers/services/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "LayersService", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/features/layers/mock/wwtp.data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return wwtp_data; });
var wwtp_data = {
    "type": "FeatureCollection",
    "totalFeatures": 40,
    "features": [
        {
            "type": "Feature",
            "id": "wwtp.26580",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3565033.3517,
                    2943442.0108
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 26580,
                "capacity": 8200,
                "power": 528.4444444,
                "unit": "kW",
                "date": "2015-01-01Z",
                "bbox": [
                    3565033.3517,
                    2943442.0108,
                    3565033.3517,
                    2943442.0108
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.27477",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3581357.4351,
                    2942445.5501
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 27477,
                "capacity": 20000,
                "power": 1288.888889,
                "unit": "kW",
                "date": "2015-01-01Z",
                "bbox": [
                    3581357.4351,
                    2942445.5501,
                    3581357.4351,
                    2942445.5501
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.27540",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3648556.8435,
                    2927578.9586
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 27540,
                "capacity": 4400,
                "power": 283.5555556,
                "unit": "kW",
                "date": "2015-01-01Z",
                "bbox": [
                    3648556.8435,
                    2927578.9586,
                    3648556.8435,
                    2927578.9586
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.27599",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3582413.0166,
                    2953191.8309
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 27599,
                "capacity": 4000,
                "power": 257.7777778,
                "unit": "kW",
                "date": "2015-01-01Z",
                "bbox": [
                    3582413.0166,
                    2953191.8309,
                    3582413.0166,
                    2953191.8309
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.27634",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3646613.8906,
                    2941289.4053
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 27634,
                "capacity": 5000,
                "power": 322.2222222,
                "unit": "kW",
                "date": "2015-01-01Z",
                "bbox": [
                    3646613.8906,
                    2941289.4053,
                    3646613.8906,
                    2941289.4053
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.27641",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3577213.2335,
                    2944092.956
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 27641,
                "capacity": 4600,
                "power": 296.4444444,
                "unit": "kW",
                "date": "2015-01-01Z",
                "bbox": [
                    3577213.2335,
                    2944092.956,
                    3577213.2335,
                    2944092.956
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.27684",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3637222.3484,
                    2930279.5954
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 27684,
                "capacity": 20000,
                "power": 1288.888889,
                "unit": "kW",
                "date": "2015-01-01Z",
                "bbox": [
                    3637222.3484,
                    2930279.5954,
                    3637222.3484,
                    2930279.5954
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.27753",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3591618.6529,
                    2952432.7355
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 27753,
                "capacity": 3000,
                "power": 193.3333333,
                "unit": "kW",
                "date": "2015-01-01Z",
                "bbox": [
                    3591618.6529,
                    2952432.7355,
                    3591618.6529,
                    2952432.7355
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.27779",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3571286.4886,
                    2949639.2413
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 27779,
                "capacity": 332000,
                "power": 21395.55556,
                "unit": "kW",
                "date": "2015-01-01Z",
                "bbox": [
                    3571286.4886,
                    2949639.2413,
                    3571286.4886,
                    2949639.2413
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.28028",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3567073.8349,
                    2939586.5685
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 28028,
                "capacity": 6500,
                "power": 418.8888889,
                "unit": "kW",
                "date": "2015-01-01Z",
                "bbox": [
                    3567073.8349,
                    2939586.5685,
                    3567073.8349,
                    2939586.5685
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.28248",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3602552.4357,
                    2925885.3523
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 28248,
                "capacity": 4000,
                "power": 257.7777778,
                "unit": "kW",
                "date": "2015-01-01Z",
                "bbox": [
                    3602552.4357,
                    2925885.3523,
                    3602552.4357,
                    2925885.3523
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.28370",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3587853.4732,
                    2935699.7798
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 28370,
                "capacity": 10000,
                "power": 644.4444444,
                "unit": "kW",
                "date": "2015-01-01Z",
                "bbox": [
                    3587853.4732,
                    2935699.7798,
                    3587853.4732,
                    2935699.7798
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.28386",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3610438.4905,
                    2941921.9251
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 28386,
                "capacity": 70000,
                "power": 4511.111111,
                "unit": "kW",
                "date": "2015-01-01Z",
                "bbox": [
                    3610438.4905,
                    2941921.9251,
                    3610438.4905,
                    2941921.9251
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.28677",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3573993.7843,
                    2925026.9267
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 28677,
                "capacity": 3000,
                "power": 193.3333333,
                "unit": "kW",
                "date": "2015-01-01Z",
                "bbox": [
                    3573993.7843,
                    2925026.9267,
                    3573993.7843,
                    2925026.9267
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.28902",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3581521.2134,
                    2948223.5299
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 28902,
                "capacity": 6000,
                "power": 386.6666667,
                "unit": "kW",
                "date": "2015-01-01Z",
                "bbox": [
                    3581521.2134,
                    2948223.5299,
                    3581521.2134,
                    2948223.5299
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.28922",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3576103.4993,
                    2954885.5511
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 28922,
                "capacity": 9500,
                "power": 612.2222222,
                "unit": "kW",
                "date": "2015-01-01Z",
                "bbox": [
                    3576103.4993,
                    2954885.5511,
                    3576103.4993,
                    2954885.5511
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.28941",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3620848.9816,
                    2924751.7549
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 28941,
                "capacity": 18000,
                "power": 1160,
                "unit": "kW",
                "date": "2015-01-01Z",
                "bbox": [
                    3620848.9816,
                    2924751.7549,
                    3620848.9816,
                    2924751.7549
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.29056",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3589247.0947,
                    2929146.9037
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 29056,
                "capacity": 18000,
                "power": 1160,
                "unit": "kW",
                "date": "2015-01-01Z",
                "bbox": [
                    3589247.0947,
                    2929146.9037,
                    3589247.0947,
                    2929146.9037
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.29260",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3645070.7262,
                    2932014.9209
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 29260,
                "capacity": 3000,
                "power": 193.3333333,
                "unit": "kW",
                "date": "2015-01-01Z",
                "bbox": [
                    3645070.7262,
                    2932014.9209,
                    3645070.7262,
                    2932014.9209
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.29489",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3562358.211,
                    2947625.8346
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 29489,
                "capacity": 20000,
                "power": 1288.888889,
                "unit": "kW",
                "date": "2015-01-01Z",
                "bbox": [
                    3562358.211,
                    2947625.8346,
                    3562358.211,
                    2947625.8346
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.50647",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3565033.3517,
                    2943442.0108
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 50647,
                "capacity": 8200,
                "power": 528.4444444,
                "unit": "kW",
                "date": "2012-01-01Z",
                "bbox": [
                    3565033.3517,
                    2943442.0108,
                    3565033.3517,
                    2943442.0108
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.51544",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3581357.4351,
                    2942445.5501
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 51544,
                "capacity": 20000,
                "power": 1288.888889,
                "unit": "kW",
                "date": "2012-01-01Z",
                "bbox": [
                    3581357.4351,
                    2942445.5501,
                    3581357.4351,
                    2942445.5501
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.51607",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3648556.8435,
                    2927578.9586
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 51607,
                "capacity": 4400,
                "power": 283.5555556,
                "unit": "kW",
                "date": "2012-01-01Z",
                "bbox": [
                    3648556.8435,
                    2927578.9586,
                    3648556.8435,
                    2927578.9586
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.51666",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3582413.0166,
                    2953191.8309
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 51666,
                "capacity": 4000,
                "power": 257.7777778,
                "unit": "kW",
                "date": "2012-01-01Z",
                "bbox": [
                    3582413.0166,
                    2953191.8309,
                    3582413.0166,
                    2953191.8309
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.51701",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3646613.8906,
                    2941289.4053
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 51701,
                "capacity": 5000,
                "power": 322.2222222,
                "unit": "kW",
                "date": "2012-01-01Z",
                "bbox": [
                    3646613.8906,
                    2941289.4053,
                    3646613.8906,
                    2941289.4053
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.51708",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3577213.2335,
                    2944092.956
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 51708,
                "capacity": 4600,
                "power": 296.4444444,
                "unit": "kW",
                "date": "2012-01-01Z",
                "bbox": [
                    3577213.2335,
                    2944092.956,
                    3577213.2335,
                    2944092.956
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.51751",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3637222.3484,
                    2930279.5954
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 51751,
                "capacity": 20000,
                "power": 1288.888889,
                "unit": "kW",
                "date": "2012-01-01Z",
                "bbox": [
                    3637222.3484,
                    2930279.5954,
                    3637222.3484,
                    2930279.5954
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.51820",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3591618.6529,
                    2952432.7355
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 51820,
                "capacity": 3000,
                "power": 193.3333333,
                "unit": "kW",
                "date": "2012-01-01Z",
                "bbox": [
                    3591618.6529,
                    2952432.7355,
                    3591618.6529,
                    2952432.7355
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.51846",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3571286.4886,
                    2949639.2413
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 51846,
                "capacity": 332000,
                "power": 21395.55556,
                "unit": "kW",
                "date": "2012-01-01Z",
                "bbox": [
                    3571286.4886,
                    2949639.2413,
                    3571286.4886,
                    2949639.2413
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.52095",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3567073.8349,
                    2939586.5685
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 52095,
                "capacity": 6500,
                "power": 418.8888889,
                "unit": "kW",
                "date": "2012-01-01Z",
                "bbox": [
                    3567073.8349,
                    2939586.5685,
                    3567073.8349,
                    2939586.5685
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.52315",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3602552.4357,
                    2925885.3523
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 52315,
                "capacity": 4000,
                "power": 257.7777778,
                "unit": "kW",
                "date": "2012-01-01Z",
                "bbox": [
                    3602552.4357,
                    2925885.3523,
                    3602552.4357,
                    2925885.3523
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.52437",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3587853.4732,
                    2935699.7798
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 52437,
                "capacity": 10000,
                "power": 644.4444444,
                "unit": "kW",
                "date": "2012-01-01Z",
                "bbox": [
                    3587853.4732,
                    2935699.7798,
                    3587853.4732,
                    2935699.7798
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.52453",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3610438.4905,
                    2941921.9251
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 52453,
                "capacity": 70000,
                "power": 4511.111111,
                "unit": "kW",
                "date": "2012-01-01Z",
                "bbox": [
                    3610438.4905,
                    2941921.9251,
                    3610438.4905,
                    2941921.9251
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.52744",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3573993.7843,
                    2925026.9267
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 52744,
                "capacity": 3000,
                "power": 193.3333333,
                "unit": "kW",
                "date": "2012-01-01Z",
                "bbox": [
                    3573993.7843,
                    2925026.9267,
                    3573993.7843,
                    2925026.9267
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.52969",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3581521.2134,
                    2948223.5299
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 52969,
                "capacity": 6000,
                "power": 386.6666667,
                "unit": "kW",
                "date": "2012-01-01Z",
                "bbox": [
                    3581521.2134,
                    2948223.5299,
                    3581521.2134,
                    2948223.5299
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.52989",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3576103.4993,
                    2954885.5511
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 52989,
                "capacity": 9500,
                "power": 612.2222222,
                "unit": "kW",
                "date": "2012-01-01Z",
                "bbox": [
                    3576103.4993,
                    2954885.5511,
                    3576103.4993,
                    2954885.5511
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.53008",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3620848.9816,
                    2924751.7549
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 53008,
                "capacity": 18000,
                "power": 1160,
                "unit": "kW",
                "date": "2012-01-01Z",
                "bbox": [
                    3620848.9816,
                    2924751.7549,
                    3620848.9816,
                    2924751.7549
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.53123",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3589247.0947,
                    2929146.9037
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 53123,
                "capacity": 18000,
                "power": 1160,
                "unit": "kW",
                "date": "2012-01-01Z",
                "bbox": [
                    3589247.0947,
                    2929146.9037,
                    3589247.0947,
                    2929146.9037
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.53327",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3645070.7262,
                    2932014.9209
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 53327,
                "capacity": 3000,
                "power": 193.3333333,
                "unit": "kW",
                "date": "2012-01-01Z",
                "bbox": [
                    3645070.7262,
                    2932014.9209,
                    3645070.7262,
                    2932014.9209
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.53556",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3562358.211,
                    2947625.8346
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 53556,
                "capacity": 20000,
                "power": 1288.888889,
                "unit": "kW",
                "date": "2012-01-01Z",
                "bbox": [
                    3562358.211,
                    2947625.8346,
                    3562358.211,
                    2947625.8346
                ]
            }
        }
    ],
    "crs": {
        "type": "name",
        "properties": {
            "name": "urn:ogc:def:crs:EPSG::3035"
        }
    },
    "bbox": [
        3562358.211,
        2924751.7549,
        3648556.8435,
        2954885.5511
    ]
};
//# sourceMappingURL=wwtp.data.js.map

/***/ }),

/***/ "../../../../../src/app/features/layers/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layers_service__ = __webpack_require__("../../../../../src/app/features/layers/services/layers.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__layers_service__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/features/layers/services/layers.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mock_wwtp_data__ = __webpack_require__("../../../../../src/app/features/layers/mock/wwtp.data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_class_dictionary_class__ = __webpack_require__("../../../../../src/app/shared/class/dictionary.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_proj4leaflet__ = __webpack_require__("../../../../proj4leaflet/src/proj4leaflet.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_proj4leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_proj4leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_proj4__ = __webpack_require__("../../../../proj4/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_features_layers_interaction_layers_interaction_service__ = __webpack_require__("../../../../../src/app/features/layers-interaction/layers-interaction.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayersService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Improvement of coding style :
// leaving one empty line between third party imports and application imports
// listing import lines alphabetized by the module












var proj4 = __WEBPACK_IMPORTED_MODULE_7_proj4__["default"];
var LayersService = (function (_super) {
    __extends(LayersService, _super);
    function LayersService(http, logger, loaderService, toasterService, 
        // private interactionService: InteractionService,
        // private populationService: PopulationService,
        dataInteractionService, helper, businessInterfaceRenderService) {
        var _this = _super.call(this, http, logger, loaderService, toasterService) || this;
        _this.dataInteractionService = dataInteractionService;
        _this.helper = helper;
        _this.businessInterfaceRenderService = businessInterfaceRenderService;
        // Improvement of coding style :
        // place private members after public members, alphabetized
        _this.layers = new L.FeatureGroup();
        _this.current_nuts_level = '0';
        _this.heatmapOption = {
            layers: 'hotmaps:' + __WEBPACK_IMPORTED_MODULE_8__shared_data_service__["Y" /* defaultLayer */],
            format: __WEBPACK_IMPORTED_MODULE_8__shared_data_service__["T" /* formatImage */], transparent: true, version: '1.3.0',
            zIndex: __WEBPACK_IMPORTED_MODULE_8__shared_data_service__["Z" /* layers_order */]
        };
        _this.layersArray = new __WEBPACK_IMPORTED_MODULE_1__shared_class_dictionary_class__["a" /* Dictionary */]([
            {
                key: __WEBPACK_IMPORTED_MODULE_8__shared_data_service__["Y" /* defaultLayer */], value: _this.getTilayer(_this.heatmapOption, __WEBPACK_IMPORTED_MODULE_8__shared_data_service__["Y" /* defaultLayer */])
            },
        ]);
        _this.popup = L.popup();
        return _this;
    }
    // Improvement of coding style :
    // put constructor in top of all methods
    LayersService.prototype.getLayers = function () {
        return this.layers;
    };
    LayersService.prototype.getLayerArray = function () {
        return this.layersArray;
    };
    LayersService.prototype.setCurrentNutsLevel = function (nutsLevel) {
        this.current_nuts_level = this.businessInterfaceRenderService.convertNutsToApiName(nutsLevel);
    };
    LayersService.prototype.setupDefaultLayer = function () {
        var layer = this.layersArray.value(__WEBPACK_IMPORTED_MODULE_8__shared_data_service__["Y" /* defaultLayer */]);
        this.logger.log(layer.toString());
        this.layers.addLayer(layer);
    };
    LayersService.prototype.handleClickHectare = function (data) {
        this.logger.log(JSON.stringify(data));
        /* this.interactionService.setSummaryResultData(data)
        this.interactionService.openRightPanel();
        this.interactionService.enableButtonWithId('load_result') */
        // this.interactionService.enableDisplayLoader()
        this.loaderService.display(false);
    };
    LayersService.prototype.getIsReadyToShowFeatureInfo = function () {
        var readyToShow = false;
        if (this.layersArray.keys().length > 0) {
            readyToShow = true;
        }
        return readyToShow;
    };
    LayersService.prototype.addLayerWithOrder = function (map, layer) {
        this.layers.addLayer(layer);
        this.logger.log(layer);
        this.logger.log(this.layers.getLayers().toString());
    };
    LayersService.prototype.showOrRemoveLayer = function (action, map, order) {
        this.logger.log('didUptateLayer');
        if (!this.layersArray.containsKey(action)) {
            this.addLayerWithAction(action, map, order);
        }
        else {
            this.removelayer(action, map);
        }
        map.fireEvent('didUpdateLayers', this.layersArray);
    };
    LayersService.prototype.addLayerWithAction = function (action, map, order) {
        this.logger.log('action:' + action);
        var layer;
        var option = {
            layers: 'hotmaps:' + action,
            format: __WEBPACK_IMPORTED_MODULE_8__shared_data_service__["T" /* formatImage */],
            transparent: true,
            version: '1.3.0',
            srs: 'EPSG:4326',
            zIndex: order
        };
        layer = this.getTilayer(option, action);
        this.layers.addLayer(layer);
        this.layersArray.add(action, layer);
    };
    LayersService.prototype.getTilayer = function (option, action) {
        var self = this;
        var wms_request = L.tileLayer.wms(__WEBPACK_IMPORTED_MODULE_8__shared_data_service__["g" /* geoserverUrl */], option);
        wms_request.on('load', function (data) {
            self.dataInteractionService.unsetLoadingLayerInterraction(action);
            // loader.display(false)
        });
        wms_request.on('tileunload', function () { });
        wms_request.on('tileloadstart', function (data) {
            self.dataInteractionService.setLoadingLayerInterraction(action);
        });
        wms_request.on('tileerror', function (data) {
            self.dataInteractionService.unsetLoadingLayerInterraction(action);
            self.toasterService.showToaster('Error loading tiles for ' + action);
        });
        wms_request.on('loading', function () { });
        return wms_request;
    };
    LayersService.prototype.removelayer = function (action, map) {
        this.dataInteractionService.unsetLoadingLayerInterraction(action);
        // we get the layer we want to remove
        var layer = this.layersArray.value(action);
        // we remove this layer from map
        this.layers.removeLayer(layer);
        // we destroy the layer
        this.layersArray.remove(action);
    };
    LayersService.prototype.setupZoomLayerGroup = function (map) {
        this.zoom_layerGroup = new L.LayerGroup();
        this.zoom_layerGroup.addTo(map);
    };
    LayersService.prototype.erroxFix = function (error) {
        this.handleError.bind(this);
        this.loaderService.display(false);
        this.toasterService.showToaster(error);
        console.error('An error occurred', error); // for demo purposes only
    };
    LayersService.prototype.choosePopup = function (map, res, latlng, action) {
        if (this.layersArray.containsKey(__WEBPACK_IMPORTED_MODULE_8__shared_data_service__["Y" /* defaultLayer */])) {
            this.addPopupHeatmap(map, res, latlng);
        }
        else if (action === __WEBPACK_IMPORTED_MODULE_8__shared_data_service__["_0" /* wwtpLayerName */]) {
            this.addPopupWWTP(map, res, latlng);
        }
        else if (action === __WEBPACK_IMPORTED_MODULE_8__shared_data_service__["_1" /* populationLayerName */] + '_' + __WEBPACK_IMPORTED_MODULE_8__shared_data_service__["w" /* constant_year */]) {
            this.addPopupHectare(map, res, latlng);
        }
    };
    /* handlePopulation(map, data: any, latlng: LatLng) {
      const populationSelected = data;
      this.populationService.showPopulationSelectedLayer(populationSelected, map, latlng, this.popup);
      this.loaderService.display(false);
  
    } */
    /* selectAreaWithNuts(map, data: any, latlng: LatLng) {
      const populationSelected = data;
      this.populationService.showPopulationSelectedLayer(populationSelected, map, latlng, this.popup);
      this.loaderService.display(false);
    } */
    LayersService.prototype.addPopupHectare = function (map, data, latlng) {
        this.loaderService.display(false);
        var population_density = data.features[0].properties.population_density;
        this.logger.log('LayersService/addPopupHectare/population_density  ' + population_density);
        this.popup.setLatLng(latlng)
            .setContent('<h5>Population</h5> <ul class="uk-list uk-list-divider">' +
            ' <li>Population density: ' + this.helper.round(population_density) + ' ' + __WEBPACK_IMPORTED_MODULE_8__shared_data_service__["_2" /* unit_population */] + '</li> </ul>')
            .openOn(map);
    };
    LayersService.prototype.addPopupHeatmap = function (map, data, latlng) {
        this.loaderService.display(false);
        var heat_density = data.features[0].properties.heat_density;
        this.popup.setLatLng(latlng)
            .setContent('<h5>Heat map</h5> <ul class="uk-list uk-list-divider">' +
            ' <li>Heat demand: ' + this.helper.round(heat_density) + ' ' + __WEBPACK_IMPORTED_MODULE_8__shared_data_service__["_3" /* unit_heat_density */] + '</li> </ul>')
            .openOn(map);
    };
    LayersService.prototype.addPopupWWTP = function (map, data, latlng) {
        this.loaderService.display(false);
        var capacity = data.features[0].properties.capacity;
        var power = data.features[0].properties.power;
        var date = data.features[0].properties.date.split('Z')[0];
        var unit = data.features[0].properties.unit;
        this.popup.setLatLng(latlng).setContent('<h5>' + __WEBPACK_IMPORTED_MODULE_8__shared_data_service__["_4" /* business_name_wwtp */] + '</h5> <ul class="uk-list uk-list-divider">' +
            '<li>Capacity: ' + capacity + ' ' + __WEBPACK_IMPORTED_MODULE_8__shared_data_service__["_5" /* unit_capacity */] + '</li><li>Power: ' + this.helper.round(power) + ' ' + unit + '</li>' +
            '<li>Reference date: ' + date + '</li></ul>').openOn(map);
    };
    LayersService.prototype.showLayerDependingZoom = function (action, map, zoomLevel) {
        var mapZoomLevel = map.getZoom();
        this.logger.log('mapZoomLevel ' + mapZoomLevel + ', zoomLevel ' + zoomLevel);
        if (this.layersArray.containsKey(action) === true) {
            if (mapZoomLevel >= zoomLevel) {
                var layer = this.layersArray.value(action);
                this.layers.removeLayer(layer);
                this.showWwtpWithMarker(map);
            }
            else if (mapZoomLevel < zoomLevel) {
                if (!this.layersArray.containsKey(action)) {
                    this.addLayerWithAction(action, map, zoomLevel);
                }
                else {
                    var layer = this.layersArray.value(action);
                    this.layers.addLayer(layer);
                }
                this.removeWwtpWithMarker(map);
            }
        }
        else {
            this.removeWwtpWithMarker(map);
        }
    };
    LayersService.prototype.transformLatLngToEpsg = function (latlng, epsgString) {
        return proj4(epsgString).forward([latlng.lng, latlng.lat]);
    };
    LayersService.prototype.getTranformedBoundingBox = function (map, epsgString) {
        var coordinate = [];
        var bound = map.getBounds();
        var northEastTransformed = this.transformLatLngToEpsg(bound.getNorthEast(), epsgString);
        var southWestTransformed = this.transformLatLngToEpsg(bound.getSouthWest(), epsgString);
        coordinate.push(southWestTransformed[1], southWestTransformed[0]);
        coordinate.push(northEastTransformed[1], northEastTransformed[0]);
        return coordinate;
    };
    LayersService.prototype.showWwtpWithMarker = function (map) {
        var _this = this;
        this.logger.log('showWwtpWithMarker');
        var epsg = '3035';
        var coordinate = this.getTranformedBoundingBox(map, __WEBPACK_IMPORTED_MODULE_9__shared__["proj3035"]);
        var url = __WEBPACK_IMPORTED_MODULE_8__shared_data_service__["g" /* geoserverUrl */] + '?service=wfs' +
            '&version=2.0.0' +
            '&request=GetFeature' +
            '&typeNames=hotmaps:' + __WEBPACK_IMPORTED_MODULE_8__shared_data_service__["_0" /* wwtpLayerName */] +
            '&srsName=EPSG:' + epsg +
            '&bbox=' + coordinate.toString() +
            '&outputFormat=application/json';
        this.logger.log(coordinate.toString());
        this.logger.log(url);
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_0__mock_wwtp_data__["a" /* wwtp_data */]).then(function (res) {
            _this.addPOIToMapRegular(res, map);
        });
        /* this.http.get(url).map((data: Response) => data.json() as any)
            .subscribe(res => this.addPOIToMap(res, map), err => this.handleError.bind(this)); */
        /* Promise.resolve(wwtp_data).then((data) => { */
    };
    LayersService.prototype.addPOIToMap = function (data, map) {
        var _this = this;
        data.features.forEach(function (element) {
            var point = element.geometry.coordinates;
            var pointProj = proj4(__WEBPACK_IMPORTED_MODULE_9__shared__["proj3035"]).inverse([point[0], point[1]]);
            var marker = L.marker(L.latLng(pointProj[1], pointProj[0]), {
                icon: L.icon({
                    iconUrl: '../../assets/leaflet-images/marker-icon.png',
                    iconSize: [28, 40],
                    iconAnchor: [14, 20]
                })
            });
            _this.zoom_layerGroup.addLayer(marker);
        });
        this.zoom_layerGroup.addTo(map);
    };
    LayersService.prototype.addPOIToMapRegular = function (data, map) {
        proj4.defs('urn:ogc:def:crs:EPSG::3035', __WEBPACK_IMPORTED_MODULE_9__shared__["proj3035"]);
        // this.zoom_layerGroup =  L.Proj.geoJson(data)
        function onEachFeature(feature, layer) {
            if (feature.properties) {
                layer.setIcon(L.icon({
                    iconUrl: '../../assets/leaflet-images/marker-icon.png',
                    iconSize: [28, 40],
                    iconAnchor: [14, 20]
                }));
            }
        }
        this.zoom_layerGroup = L.Proj.geoJson(data, {
            onEachFeature: onEachFeature
        }).addTo(map);
        this.zoom_layerGroup.addTo(map);
    };
    LayersService.prototype.removeWwtpWithMarker = function (map) {
        this.logger.log('removeWwtpWithMarker');
        this.zoom_layerGroup.removeFrom(map);
    };
    return LayersService;
}(__WEBPACK_IMPORTED_MODULE_9__shared__["APIService"]));
LayersService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_9__shared__["Logger"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__shared__["Logger"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_9__shared__["LoaderService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__shared__["LoaderService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_9__shared__["ToasterService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__shared__["ToasterService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_10_app_features_layers_interaction_layers_interaction_service__["a" /* DataInteractionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10_app_features_layers_interaction_layers_interaction_service__["a" /* DataInteractionService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_9__shared__["Helper"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__shared__["Helper"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_9__shared__["BusinessInterfaceRenderService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__shared__["BusinessInterfaceRenderService"]) === "function" && _g || Object])
], LayersService);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=layers.service.js.map

/***/ }),

/***/ "../../../../../src/app/features/population/services/population.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_loader_service__ = __webpack_require__("../../../../../src/app/shared/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_logger_service__ = __webpack_require__("../../../../../src/app/shared/services/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services_toaster_service__ = __webpack_require__("../../../../../src/app/shared/services/toaster.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_services_api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_helper__ = __webpack_require__("../../../../../src/app/shared/helper.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopulationService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Improvement of coding style :
// leaving one empty line between third party imports and application imports
// listing import lines alphabetized by the module










var PopulationService = (function (_super) {
    __extends(PopulationService, _super);
    function PopulationService(http, logger, loaderService, toasterService, helper) {
        var _this = _super.call(this, http, logger, loaderService, toasterService) || this;
        _this.helper = helper;
        return _this;
    }
    /**
    * Get the population with payloads
    */
    /*getPopulationWithPayloads(payload: Payload): Promise<Population> {
      return super.POST(payload, apiUrl + postPopulationDensityInArea);
    }*/
    /**
    * Show the population selected layer
    */
    PopulationService.prototype.showPopulationSelectedLayer = function (populationSelected, map, latlng, popup) {
        this.logger.log('PopulationService/showPopulationSelectedLayer');
        var geometrie = populationSelected.features[0].geometry;
        // remove the layer if there is one
        this.removePopulationSelectedlayer(map);
        // add the selected area to the map
        this.populationSelectedLayer = L.vectorGrid.slicer(geometrie);
        this.populationSelectedLayer.addTo(map);
        this.loaderService.display(false);
        // add the popup area to the map
        // this.addPopupHectare(populationSelected, map, latlng, popup);
    };
    /**
    * Add the Nuts popup
    */
    PopulationService.prototype.addPopupNuts = function (data, map, latlng, popup) {
        var stat_levl_ = data.features[0].properties.stat_levl_;
        var nuts_id = data.features[0].properties.nuts_id;
        var name = data.features[0].properties.name;
        var value = data.features[0].properties.value;
        var date = data.features[0].properties.date.split('Z')[0];
        // Improvement of coding style : (with codelyzer)
        // Line 73 exceeds maximum line length of 140
        popup.setLatLng(latlng).setContent('<h5>' + __WEBPACK_IMPORTED_MODULE_4__shared_data_service__["_27" /* business_name_population */] + '</h5> <ul class="uk-list uk-list-divider">' +
            '<li>nuts id: ' + nuts_id + '</li><li>nuts level: ' + stat_levl_ + '</li><li>name: ' + name + '</li>' +
            '<li>Population: ' + this.helper.round(value) + ' ' + __WEBPACK_IMPORTED_MODULE_4__shared_data_service__["_2" /* unit_population */] + '</li><li>Reference date: ' + date + '</li></ul>').openOn(map);
        this.logger.log('PopulationService/addPopup/popup/added');
    };
    /**
    * Remove the population selected layer
    */
    PopulationService.prototype.removePopulationSelectedlayer = function (map) {
        if (this.populationSelectedLayer) {
            this.logger.log('MapService/removelayer');
            map.removeLayer(this.populationSelectedLayer);
            delete this.populationSelectedLayer;
        }
    };
    return PopulationService;
}(__WEBPACK_IMPORTED_MODULE_8__shared_services_api_service__["a" /* APIService */]));
PopulationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__shared_services_logger_service__["a" /* Logger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_services_logger_service__["a" /* Logger */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_loader_service__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_services_loader_service__["a" /* LoaderService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__shared_services_toaster_service__["a" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__shared_services_toaster_service__["a" /* ToasterService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_9__shared_helper__["a" /* Helper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__shared_helper__["a" /* Helper */]) === "function" && _e || Object])
], PopulationService);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=population.service.js.map

/***/ }),

/***/ "../../../../../src/app/features/result-manager/component/result-manager.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".uk-tab > .uk-disabled > a {\n  color: rgba(214, 56, 56, 0.32) !important;\n}\n.uk-tab{\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n    margin-bottom: 5px;\n}\n.spinner{\n  width: 100%;\n  text-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/result-manager/component/result-manager.component.html":
/***/ (function(module, exports) {

module.exports = "<span class=\"center\">\n  <div *ngIf=\"!noIndicator\" style=\"padding: 10px;\">\n    <select class=\"uk-select\" (ngModelChange)=\"changeResultsDisplay($event)\" [(ngModel)]=\"selectedButton\">\n      <ng-container *ngFor=\"let button of dropdown_btns\">\n        <option *ngIf=\"button.display\" [selected]=\"button.ref === selectedButton.ref\"  [ngValue]=\"button\">{{button.name}}</option>\n      </ng-container>\n    </select>\n  </div>\n</span>\n<ul class=\"uk-tab\" data-uk-tab=\"{connect:'#my-id3'}\">\n  <li id=\"tab1\" (click)=\"tabSwitch(tab1)\">\n    <a href=\"\">INDICATORS</a>\n  </li>\n  <li id=\"tab2\" [class.uk-disabled]=\"result.graphics.length === 0 && !durationCurvePayload && !heatLoadPayload\" (click)=\"tabSwitch(tab2)\">\n    <a href=\"\">GRAPHICS</a>\n  </li>\n\n</ul>\n<ul id=\"my-id3\" class=\"uk-switcher results-container\">\n  <li>\n    <div *ngIf=\"result.indicators\">\n      <htm-summary-result [summaryResult]=\"result.indicators\" [refSelected]=\"selectedButton.ref\"></htm-summary-result>\n    </div>\n    <div class=\"spinner\" *ngIf=\"indicatorLoading || indicatorPersoLoading\" uk-spinner=\"ratio: 3\"></div>\n  </li>\n  <li class=\"charts-tab\">\n\n    <div *ngIf=\"result.graphics\">\n      <div *ngFor=\"let graphic of result.graphics\">\n        <ng-container *ngIf=\"graphic.category == 'heatload'\">\n          <htm-heat-load-chart [heatLoadPayload]=\"heatLoadPayload\"></htm-heat-load-chart>\n        </ng-container>\n        <ng-container *ngIf=\"graphic.category == 'energy_mix'\">\n          <htm-electricity-mix [datasets]=\"graphic.data\" [labels]=\"graphic.labels\"></htm-electricity-mix>\n        </ng-container>\n        <ng-container *ngIf=\"graphic.category == cm_catedory || graphic.category == 'duration_curve'\">\n          <htm-chart [datasets]=\"graphic.data\" [type]=\"graphic.type\" [title]=\"graphic.name\" [labels]=\"graphic.labels\" [options]=\"graphic.options\" [isLoading]=\"graphic.isLoading\"></htm-chart>\n        </ng-container>\n      </div>\n    </div>\n    <!-- <div class=\"spinner\" *ngIf=\"result.graphics.length === 0 && !durationCurvePayload && !heatLoadPayload\" uk-spinner=\"ratio: 3\"></div> -->\n  </li>\n</ul>\n<div>\n  <htm-export-data [graphics]=\"result.graphics\" [indicators]=\"result.indicators\" \n      [graphState]=\"graphicsExportButtonState\" [indicatorState]=\"indicatorExportButtonState\" [tabSelected]=\"tabSelected\"></htm-export-data>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/features/result-manager/component/result-manager.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_services_logger_service__ = __webpack_require__("../../../../../src/app/shared/services/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_services_interaction_service__ = __webpack_require__("../../../../../src/app/shared/services/interaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layers_interaction_layers_interaction_service__ = __webpack_require__("../../../../../src/app/features/layers-interaction/layers-interaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_map__ = __webpack_require__("../../../../../src/app/pages/map/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultManagerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ResultManagerComponent = (function () {
    function ResultManagerComponent(helper, interactionService, logger, dataInteractionService, mapService) {
        this.helper = helper;
        this.interactionService = interactionService;
        this.logger = logger;
        this.dataInteractionService = dataInteractionService;
        this.mapService = mapService;
        this.graphicsExportButtonState = false;
        this.indicatorExportButtonState = false;
        this.indicatorLoading = false;
        this.indicatorPersoLoading = false;
        this.progressCmAnimation = 0;
        this.updateExportButton = false;
        this.noIndicator = true;
        this.tab1 = __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["_43" /* tab1_datapanel */];
        this.tab2 = __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["_44" /* tab2_datapanel */];
        this.cm_catedory = __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["v" /* calculation_module_category */];
        this.tabSelected = this.tab1;
        this.dropdown_btns = __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["j" /* summay_drop_down_buttons */];
        this.selectedButton = this.dropdown_btns[0];
        this.result = {
            indicators: { summaryResult: null, personnalLayerResult: null, cmResult: null },
            graphics: null, raster_layers: null, vector_layers: null
        };
    }
    ResultManagerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.interactionService.getHeatLoadData().subscribe(function (heatload) {
            if (!_this.helper.isNullOrUndefined(heatload)) {
                _this.heatLoadData = heatload;
                _this.heatloadGraph.data = _this.heatLoadData.dataset;
                _this.heatloadGraph.labels = _this.heatLoadData.labels;
            }
        });
    };
    ResultManagerComponent.prototype.ngOnDestroy = function () { };
    ResultManagerComponent.prototype.ngOnChanges = function () {
        this.resetResult();
        if (!this.helper.isNullOrUndefined(this.cmPayload)) {
            this.updateCMResult();
        }
        if (!this.helper.isNullOrUndefined(this.summaryPayload)) {
            this.updateSummaryResult();
        }
        if (!this.helper.isNullOrUndefined(this.heatLoadPayload)) {
            this.updateHeatLoadResult();
        }
        if (!this.helper.isNullOrUndefined(this.energyMixPayload)) {
            this.updateEnergyMixResult();
        }
        if (!this.helper.isNullOrUndefined(this.durationCurvePayload)) {
            this.updateDurationCurveResult();
        }
        if (!this.helper.isNullOrUndefined(this.personnalLayerPayload)) {
            this.updatePersonnalLayersResult();
        }
    };
    ResultManagerComponent.prototype.updateCMResult = function () {
        var _this = this;
        var self = this;
        if (!this.helper.isNullOrUndefined(this.status_id)) {
            self.interactionService.deleteCM(this.status_id);
        }
        self.interactionService.getCMInformations(this.cmPayload).then(function (data) {
            self.logger.log('data.status_id ' + data.status_id);
            self.status_id = data.status_id;
            self.interactionService.setCurrentIdCM(self.status_id);
            self.getStatusOfCM();
        }).catch(function (err) {
            _this.stopAnimation();
            self.logger.log('there is an error ');
            self.logger.log(err);
        });
    };
    ResultManagerComponent.prototype.updatePersonnalLayersResult = function () {
        if (this.helper.isNullOrUndefined(this.personnalLayerPayload)) {
            return;
        }
        var self = this;
        self.indicatorPersoLoading = true;
        self.interactionService.getSummaryPersonnalLayers(self.personnalLayerPayload).then(function (result) {
            self.setSummaryResult(result, 'personnalLayerResult');
            self.getIndicatorsCatergories();
            self.indicatorPersoLoading = false;
        }).catch(function (e) {
            // self.indicatorExportButtonState = false
            self.indicatorPersoLoading = false;
            self.logger.log(JSON.stringify(e));
        });
    };
    ResultManagerComponent.prototype.killAnimation = function () {
        this.progressCmAnimation = 0;
        this.interactionService.setCMAnimationStatus(this.progressCmAnimation);
        this.interactionService.setCmRunningProgess(this.progressCmAnimation);
    };
    ResultManagerComponent.prototype.updateSummaryResult = function () {
        var _this = this;
        var self = this;
        self.indicatorLoading = true;
        if (this.scaleLevel === '-1') {
            self.interactionService.getSummaryResultWithMultiAreas(self.summaryPayload).then(function (result) {
                // this.resetIndicators();
                self.setSummaryResult(result, 'summaryResult');
                self.getIndicatorsCatergories();
                self.indicatorLoading = false;
            }).catch(function (e) {
                // this.resetIndicators();
                self.indicatorExportButtonState = false;
                self.indicatorLoading = false;
                self.logger.log(JSON.stringify(e));
            });
        }
        else {
            self.interactionService.getSummaryResultWithIds(self.summaryPayload).then(function (result) {
                //this.resetIndicators();
                self.setSummaryResult(result, 'summaryResult');
                self.getIndicatorsCatergories();
                self.indicatorLoading = false;
            }).catch(function (e) {
                _this.resetIndicators();
                self.indicatorExportButtonState = false;
                self.indicatorLoading = false;
                self.logger.log(JSON.stringify(e));
            });
        }
    };
    ResultManagerComponent.prototype.setSummaryResult = function (result, type) {
        this.result.indicators[type] = result;
        this.indicatorExportButtonState = true;
    };
    ResultManagerComponent.prototype.updateEnergyMixResult = function () {
        var self = this;
        var graphic = self.addGraphic(__WEBPACK_IMPORTED_MODULE_0__shared_data_service__["_45" /* energy_mix_title */], 'pie', [], [], __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["_34" /* energy_mix_options */], __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["_46" /* energy_mix_graph_category */], true);
        self.interactionService.getElectricityMix(self.energyMixPayload).then(function (result) {
            graphic.isLoading = false;
            graphic.data = result.datasets;
            graphic.labels = result.labels;
            self.graphicsExportButtonState = true;
        }).catch(function (e) {
            self.graphicsExportButtonState = false;
            self.logger.log('error');
            self.logger.log(JSON.stringify(e));
        });
    };
    ResultManagerComponent.prototype.updateHeatLoadResult = function () {
        this.heatloadGraph = this.addGraphic(__WEBPACK_IMPORTED_MODULE_0__shared_data_service__["_38" /* heatloadprofile */], 'line', [], [], __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["_37" /* heat_load_graph_options */], 'heatload', true);
    };
    ResultManagerComponent.prototype.updateDurationCurveResult = function () {
        var _this = this;
        var self = this;
        var graphic = self.addGraphic(__WEBPACK_IMPORTED_MODULE_0__shared_data_service__["_47" /* duration_curve_graph_title */], 'line', [], [], __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["_36" /* duration_curve_graph_options */], __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["_48" /* duration_curve_graph_category */], true);
        var isHectare;
        if (this.scaleLevel === '-1') {
            isHectare = true;
        }
        else {
            isHectare = false;
        }
        self.interactionService.getDurationCurveWithPayload(this.durationCurvePayload, isHectare).then(function (result) {
            var dataset = _this.interactionService.getDefaultDatasetDurationCurve();
            dataset.data = [];
            var labels = [];
            result.points.map(function (point) {
                dataset.data.push(point.Y);
                labels.push('');
            });
            graphic.isLoading = false;
            graphic.data = [dataset];
            graphic.labels = labels;
            self.graphicsExportButtonState = true;
        }).catch(function (e) {
            self.graphicsExportButtonState = false;
            self.logger.log('error');
            self.logger.log(JSON.stringify(e));
        });
    };
    ResultManagerComponent.prototype.processAndShowCmResult = function (data) {
        var _this = this;
        var response = JSON.parse(data["_body"]);
        if (response["state"] === 'SUCCESS') {
            this.stopAnimation();
            this.logger.log('status' + response["status"]);
            var name_of_result_1 = this.cmPayload.cm_name;
            if (!this.helper.isNullOrUndefined(response.status.result.raster_layers)) {
                response.status.result.raster_layers.map(function (raster) {
                    var symb;
                    if (raster.type === 'custom') {
                        symb = raster.symbology;
                    }
                    _this.dataInteractionService.addNewCMLayer(raster.name, raster.path, raster.type, __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["L" /* raster_type_name */], symb);
                    _this.mapService.displayCustomLayerFromCM(raster.path, __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["L" /* raster_type_name */]);
                });
            }
            if (!this.helper.isNullOrUndefined(response.status.result.vector_layers)) {
                response.status.result.vector_layers.map(function (vector) {
                    var symb;
                    if (vector.type == 'custom') {
                        symb = vector.symbology;
                    }
                    _this.dataInteractionService.addNewCMLayer(vector.name, vector.path, vector.type, __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["M" /* vector_type_name */], symb);
                    _this.mapService.displayCustomLayerFromCM(vector.path, __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["M" /* vector_type_name */]);
                });
            }
            if (!this.helper.isNullOrUndefined(response.status.result.indicator) && response.status.result.indicator.length >= 1) {
                this.result.indicators.cmResult = { 'layers': [{
                            name: name_of_result_1, values: response.status.result.indicator, category: ['overall', __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["v" /* calculation_module_category */]]
                        }] };
                this.indicatorExportButtonState = true;
            }
            this.indicatorLoading = false;
            if (!this.helper.isNullOrUndefined(response.status.result.graphics) && response.status.result.graphics.length >= 1) {
                response.status.result.graphics.map(function (graphic) {
                    var option_calculation_module = { scales: {
                            yAxes: [{ scaleLabel: { display: true, labelString: graphic.yLabel }, ticks: { min: 0 } }],
                            xAxes: [{ scaleLabel: { display: true, labelString: graphic.xLabel }, ticks: { autoSkip: false, min: 0 } }]
                        }
                    };
                    var graph = _this.addGraphic(name_of_result_1, graphic.type, graphic.data.datasets, graphic.data.labels, option_calculation_module, __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["v" /* calculation_module_category */], false);
                });
                this.graphicsExportButtonState = true;
            }
            this.getIndicatorsCatergories();
        }
        else {
            this.logger.log('animationTimeout');
            this.animationTimeout = setTimeout(function () {
                _this.getStatusOfCM();
                _this.runAnimation();
            }, 1000);
        }
    };
    ResultManagerComponent.prototype.getStatusOfCM = function () {
        var _this = this;
        var self = this;
        this.indicatorLoading = true;
        this.logger.log('this.interactionService.getCurrentIdCM()' + this.interactionService.getCurrentIdCM());
        if (this.interactionService.getCurrentIdCM() != null) {
            this.interactionService.getStatusAndCMResult(this.interactionService.getCurrentIdCM()).then(function (data) {
                _this.processAndShowCmResult(data);
            }).catch(function (err) {
                _this.animationTimeout = setTimeout(function () {
                    _this.stopAnimation();
                }, 1000);
                _this.indicatorLoading = false;
                _this.interactionService.setCMAnimationStatus(null);
                _this.logger.log('there is an error ');
                _this.logger.log(err);
            });
        }
        else {
            this.logger.log('EVERYTHING SHOULD HAVE STOP');
            this.animationTimeout = setTimeout(function () {
                _this.stopAnimation();
            }, 1000);
            this.indicatorLoading = false;
            this.interactionService.setCMAnimationStatus(null);
            this.interactionService.setStatusCMPanel(false);
        }
    };
    ResultManagerComponent.prototype.StopIfRunning = function () {
    };
    ResultManagerComponent.prototype.stopAllAnimation = function () {
        this.interactionService.setCMAnimationStatus(0);
        if (!this.helper.isNullOrUndefined(this.animationTimeout)) {
            clearTimeout(this.animationTimeout);
        }
        if (!this.helper.isNullOrUndefined(this.status_id)) {
            this.interactionService.deleteCM(this.status_id);
        }
        this.killAnimation();
    };
    ResultManagerComponent.prototype.runAnimation = function () {
        if (this.progressCmAnimation === 100) {
            this.progressCmAnimation = 10;
        }
        else {
            this.progressCmAnimation += 10;
        }
        this.interactionService.setCMAnimationStatus(this.progressCmAnimation);
        this.interactionService.setCmRunningProgess(this.progressCmAnimation);
    };
    ResultManagerComponent.prototype.stopAnimation = function () {
        if (!this.helper.isNullOrUndefined(this.animationTimeout)) {
            clearTimeout(this.animationTimeout);
        }
        if (!this.helper.isNullOrUndefined(this.status_id)) {
            this.interactionService.deleteCM(this.status_id);
        }
        this.killAnimation();
    };
    ResultManagerComponent.prototype.getIndicatorsCatergories = function () {
        var _this = this;
        this.resetButtonsDiplay();
        for (var _i = 0, _a = Object.keys(this.result.indicators); _i < _a.length; _i++) {
            var key = _a[_i];
            if (this.helper.isNullOrUndefined(this.result.indicators[key])) {
                continue;
            }
            var lay = this.result.indicators[key].layers;
            if (lay.length === 0) {
                this.noIndicator = true;
            }
            else {
                lay.map(function (layer) {
                    if (!_this.helper.isNullOrUndefined(layer.name)) {
                        var refToDisplay = [];
                        if (_this.helper.isNullOrUndefined(layer.category)) {
                            refToDisplay = _this.dataInteractionService.getRefFromLayerName(layer.name);
                            layer.category = refToDisplay;
                        }
                        else {
                            refToDisplay = layer.category;
                        }
                        _this.logger.log("refToDisplay:" + refToDisplay);
                        refToDisplay.map(function (ref) {
                            _this.dropdown_btns.filter(function (x) { return x.ref === ref; })[0].display = true;
                        });
                    }
                });
                this.noIndicator = false;
            }
        }
        this.selectedButton = this.dropdown_btns[0];
        this.selectedButton.selected = true;
    };
    ResultManagerComponent.prototype.addGraphic = function (name, type, data, labels, options, category, isLoading) {
        var graphic = { name: name, type: type, data: data, labels: labels, options: options, category: category, isLoading: isLoading };
        this.result.graphics.push(graphic);
        return graphic;
    };
    ResultManagerComponent.prototype.changeResultsDisplay = function (button) {
        this.selectedButton = button;
    };
    ResultManagerComponent.prototype.resetButtonsDiplay = function () {
        this.dropdown_btns.map(function (btn) {
            btn.display = false;
        });
    };
    ResultManagerComponent.prototype.resetResult = function () {
        this.graphicsExportButtonState = false;
        this.indicatorExportButtonState = false;
        this.resetIndicators();
        this.result.graphics = [];
        this.result.raster_layers = [];
        this.result.vector_layers = [];
    };
    ResultManagerComponent.prototype.resetIndicators = function () {
        this.indicatorExportButtonState = false;
        this.result.indicators = { personnalLayerResult: null, summaryResult: null, cmResult: null };
    };
    ResultManagerComponent.prototype.tabSwitch = function (tabName) {
        this.tabSelected = tabName;
    };
    return ResultManagerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ResultManagerComponent.prototype, "cmPayload", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ResultManagerComponent.prototype, "summaryPayload", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ResultManagerComponent.prototype, "energyMixPayload", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ResultManagerComponent.prototype, "heatLoadPayload", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ResultManagerComponent.prototype, "durationCurvePayload", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ResultManagerComponent.prototype, "personnalLayerPayload", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ResultManagerComponent.prototype, "scaleLevel", void 0);
ResultManagerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'htm-result-manager',
        template: __webpack_require__("../../../../../src/app/features/result-manager/component/result-manager.component.html"),
        styles: [__webpack_require__("../../../../../src/app/features/result-manager/component/result-manager.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_app_shared__["Helper"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_shared__["Helper"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_shared_services_interaction_service__["a" /* InteractionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_shared_services_interaction_service__["a" /* InteractionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_app_shared_services_logger_service__["a" /* Logger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_shared_services_logger_service__["a" /* Logger */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__layers_interaction_layers_interaction_service__["a" /* DataInteractionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__layers_interaction_layers_interaction_service__["a" /* DataInteractionService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__pages_map__["b" /* MapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__pages_map__["b" /* MapService */]) === "function" && _e || Object])
], ResultManagerComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=result-manager.component.js.map

/***/ }),

/***/ "../../../../../src/app/features/selection-scale/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selection_scale_data__ = __webpack_require__("../../../../../src/app/features/selection-scale/selection-scale.data.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selection_scale_service__ = __webpack_require__("../../../../../src/app/features/selection-scale/selection-scale.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__selection_scale_service__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/features/selection-scale/selection-scale.data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectionScaleClassArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return hectareOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return nuts0LayerOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return nuts1LayerOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return nuts2LayerOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return nuts3LayerOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return lau2LayerOption; });

var SelectionScaleClassArray = [
    { id: 1, name: 'nonuts' },
    { id: 2, name: 'nuts1', },
    { id: 3, name: 'nuts2' },
    { id: 4, name: 'nuts3' },
    { id: 5, name: 'lau1' },
    { id: 6, name: 'lau2' },
    { id: 6, name: 'hectare' },
];
// NUTS geometry is taken from the population layer but we don't use other data
var action = 'nuts';
var date_filter = " AND year='2013-01-01'";
var hectareOption = {
    layers: 'hotmaps:' + action + 0,
    format: __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["T" /* formatImage */],
    transparent: true,
    version: '1.3.0',
    cql_filter: 'stat_levl_ = ' + 1 + date_filter,
    srs: 'EPSG:4326',
    zIndex: __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["U" /* scale_layer_order */]
};
var nuts0LayerOption = {
    layers: 'hotmaps:' + action,
    format: __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["T" /* formatImage */],
    transparent: true,
    version: '1.3.0',
    cql_filter: 'stat_levl_ = ' + 0 + date_filter,
    srs: 'EPSG:4326',
    zIndex: __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["U" /* scale_layer_order */]
};
var nuts1LayerOption = {
    layers: 'hotmaps:' + action,
    format: __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["T" /* formatImage */],
    transparent: true,
    version: '1.3.0',
    cql_filter: 'stat_levl_ = ' + 1 + date_filter,
    srs: 'EPSG:4326',
    zIndex: __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["U" /* scale_layer_order */]
};
var nuts2LayerOption = {
    layers: 'hotmaps:' + action,
    format: __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["T" /* formatImage */],
    transparent: true,
    version: '1.3.0',
    cql_filter: 'stat_levl_ = ' + 2 + date_filter,
    srs: 'EPSG:4326',
    zIndex: __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["U" /* scale_layer_order */]
};
var nuts3LayerOption = {
    layers: 'hotmaps:' + action,
    format: __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["T" /* formatImage */],
    transparent: true,
    version: '1.3.0',
    cql_filter: 'stat_levl_ =' + 3 + date_filter,
    srs: 'EPSG:4326',
    zIndex: __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["U" /* scale_layer_order */]
};
var lau2LayerOption = {
    layers: 'hotmaps:' + __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["f" /* lau2name */],
    format: __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["T" /* formatImage */],
    transparent: true,
    version: '1.3.0',
    zIndex: __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["U" /* scale_layer_order */]
};
/* *

loading  Event  Fired when the grid layer starts loading tiles.
tileunload   TileEvent  Fired when a tile is removed (e.g. when a tile goes off the screen).
tileloadstart  TileEvent  Fired when a tile is requested and starts loading.
tileerror  TileErrorEvent   Fired when there is an error loading a tile.
tileload   TileEvent  Fired when a tile loads.
load   Event  Fired when the grid layer loaded all visible tiles.

* */
//# sourceMappingURL=selection-scale.data.js.map

/***/ }),

/***/ "../../../../../src/app/features/selection-scale/selection-scale.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selection_scale_data__ = __webpack_require__("../../../../../src/app/features/selection-scale/selection-scale.data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_logger_service__ = __webpack_require__("../../../../../src/app/shared/services/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_loader_service__ = __webpack_require__("../../../../../src/app/shared/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services_toaster_service__ = __webpack_require__("../../../../../src/app/shared/services/toaster.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectionScaleService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var SelectionScaleService = (function (_super) {
    __extends(SelectionScaleService, _super);
    function SelectionScaleService(http, logger, loaderService, toasterService) {
        var _this = _super.call(this, http, logger, loaderService, toasterService) || this;
        _this.scaleValue = __WEBPACK_IMPORTED_MODULE_8__shared_data_service__["S" /* initial_scale_value */];
        // scale value subject
        _this.scaleValueSubject = new __WEBPACK_IMPORTED_MODULE_9_rxjs__["BehaviorSubject"](__WEBPACK_IMPORTED_MODULE_8__shared_data_service__["q" /* nuts3 */]);
        return _this;
    }
    SelectionScaleService.prototype.ngOnInit = function () {
        this.changeScale();
    };
    /**
     * Get and change the selected scale value
     */
    SelectionScaleService.prototype.changeScale = function () {
        this.scaleValueSubject.next(this.scaleValue);
    };
    SelectionScaleService.prototype.getDataInteractionServices = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_3__selection_scale_data__["a" /* SelectionScaleClassArray */]);
    };
    SelectionScaleService.prototype.getScaleValue = function () {
        return this.scaleValue;
    };
    SelectionScaleService.prototype.setScaleValue = function (scaleValue) {
        this.scaleValue = scaleValue;
    };
    SelectionScaleService.prototype.getDataArrayServices = function () {
        return __WEBPACK_IMPORTED_MODULE_3__selection_scale_data__["a" /* SelectionScaleClassArray */];
    };
    SelectionScaleService.prototype.getModulesServicesWithNewService = function (newService) {
        var servicesArray = __WEBPACK_IMPORTED_MODULE_3__selection_scale_data__["a" /* SelectionScaleClassArray */];
        servicesArray.push(newService);
        return Promise.resolve(servicesArray);
    };
    SelectionScaleService.prototype.getModulesServicesSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            // Simulate server latency with 2 second delay
            setTimeout(function () { return resolve(_this.getDataInteractionServices()); }, 2000);
        });
    };
    SelectionScaleService.prototype.getTilayer = function (option, loader) {
        var wms_request = L.tileLayer.wms(__WEBPACK_IMPORTED_MODULE_8__shared_data_service__["g" /* geoserverUrl */], option);
        wms_request.on('load', function () {
            // loader.display(false)
        });
        wms_request.on('tileunload', function () { });
        wms_request.on('tileloadstart', function () {
            // loader.display(true)
        });
        wms_request.on('tileerror', function () {
            // loader.display(false)
        });
        wms_request.on('loading', function () { });
        return wms_request;
    };
    SelectionScaleService.prototype.getSelectionScaleMenu = function (map, loader) {
        var nuts0Layer = this.getTilayer(__WEBPACK_IMPORTED_MODULE_3__selection_scale_data__["b" /* nuts0LayerOption */], loader);
        var nuts1Layer = this.getTilayer(__WEBPACK_IMPORTED_MODULE_3__selection_scale_data__["c" /* nuts1LayerOption */], loader);
        var nuts2Layer = this.getTilayer(__WEBPACK_IMPORTED_MODULE_3__selection_scale_data__["d" /* nuts2LayerOption */], loader);
        var nuts3Layer = this.getTilayer(__WEBPACK_IMPORTED_MODULE_3__selection_scale_data__["e" /* nuts3LayerOption */], loader);
        var lau2Layer = this.getTilayer(__WEBPACK_IMPORTED_MODULE_3__selection_scale_data__["f" /* lau2LayerOption */], loader);
        var hectareLayer = this.getTilayer(__WEBPACK_IMPORTED_MODULE_3__selection_scale_data__["g" /* hectareOption */], loader);
        var SelectionScale = {
            'NUTS 0': nuts0Layer,
            'NUTS 1': nuts1Layer,
            'NUTS 2': nuts2Layer,
            'NUTS 3': nuts3Layer,
            'LAU 2': lau2Layer,
            'Hectare': hectareLayer,
        };
        var overlayMaps = {};
        var control = L.control.layers(SelectionScale, overlayMaps, { collapsed: false });
        control.addTo(map);
        map.scaleControl = control;
        map.addLayer(SelectionScale[__WEBPACK_IMPORTED_MODULE_8__shared_data_service__["S" /* initial_scale_value */]]); // # Add this if you want to show, comment this if you want to hide it.-
    };
    SelectionScaleService.prototype.getIdFromNuts = function (nuts_lvl) {
        var SelectionScale = {
            'NUTS 0': 0,
            'NUTS 1': 1,
            'NUTS 2': 2,
            'NUTS 3': 3,
            'LAU 2': 4,
            'Hectare': 5,
        };
        return SelectionScale[nuts_lvl];
    };
    SelectionScaleService.prototype.getInitialScale = function () {
        return __WEBPACK_IMPORTED_MODULE_8__shared_data_service__["S" /* initial_scale_value */];
    };
    return SelectionScaleService;
}(__WEBPACK_IMPORTED_MODULE_6__shared_services_api_service__["a" /* APIService */]));
SelectionScaleService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_logger_service__["a" /* Logger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_logger_service__["a" /* Logger */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_loader_service__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_services_loader_service__["a" /* LoaderService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__shared_services_toaster_service__["a" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__shared_services_toaster_service__["a" /* ToasterService */]) === "function" && _d || Object])
], SelectionScaleService);

var _a, _b, _c, _d;
//# sourceMappingURL=selection-scale.service.js.map

/***/ }),

/***/ "../../../../../src/app/features/selection-tools/component/selection-button.data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return stButtons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return defaultElementSelected; });
var stButtons = [
    { id: '1', type: 'click', isChecked: true },
    { id: '2', type: 'rectangle', isChecked: false },
    { id: '3', type: 'circle', isChecked: false },
    { id: '4', type: 'polygon', isChecked: false }
];
var defaultElementSelected = 'Elements selected';
//# sourceMappingURL=selection-button.data.js.map

/***/ }),

/***/ "../../../../../src/app/features/selection-tools/component/selection-tool.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n:host {\n    /*display: flex;\n    flex-direction: column;\n    min-width: 0;\n    min-height: 0;\n    overflow: hidden;*/\n    z-index: 401;\n\n    float:left;\n    position: absolute;\n\n    margin-top: 8px;\n    margin-left: 8px;\n\n}\n\n/* SELECTIONS TOOLS CONTAINER */\n#selection-tools-box{\n    /*border: 1px solid #000000;*/\n    background-color: white;\n    width: 30px;\n    border-radius: 4px;\n}\n\n#click{\n    background-image: url(" + __webpack_require__("../../../../../src/assets/icons/cursor.svg") + ");\n    background-size: 18px 18px;\n    background-repeat:no-repeat;\n    background-position: center;\n}\n\n#rectangle{\n    background-image: url(" + __webpack_require__("../../../../../src/assets/icons/square.svg") + ");\n    background-size: 14px 14px;\n    background-repeat:no-repeat;\n    background-position: center;\n}\n\n#circle{\n    background-image: url(" + __webpack_require__("../../../../../src/assets/icons/circle.svg") + ");\n    background-size: 16px 16px;\n    background-repeat:no-repeat;\n    background-position: center;\n}\n\n#polygon{\n    background-image: url(" + __webpack_require__("../../../../../src/assets/icons/polygon.svg") + ");\n    background-size: 18px 18px;\n    background-repeat:no-repeat;\n    background-position: center;\n}\n\n.radio-custom {\n    opacity: 0;\n    position: absolute;\n\n}\n\n.radio-custom, .radio-custom-label {\n    display: inline-block;\n    vertical-align: middle;\n    margin: 3px;\n    cursor: pointer;\n}\n\n.radio-custom-label {\n    position: relative;\n\n}\n\n.radio-custom + .radio-custom-label:before {\n    content: '';\n    display: inline-block;\n    vertical-align: middle;\n    width: 18px;\n    height: 20px;\n    padding: 2px;\n    border: 1px solid white;\n}\n\n.radio-custom:checked + .radio-custom-label:before {\n    /*background: #ccc;*/\n    border: 1px solid #545454;\n}\n\n\n/* INFOS CONTAINER */\np {\n    font-size: 15px;\n    text-align:left;\n    margin-bottom: -10px;\n}\n\nspan {\n    float: right;\n}\n\n.containers {\n    /*flex: 1;\n    display: flex;\n    flex-direction: column;\n    min-height: 0;\n    min-width: 0;*/\n}\n\n#info-box{\n    /*border: 1px solid #000000;*/\n    margin-top: 8px;\n    height: 100%;\n    width: 250px;\n    background-color: white;\n    padding:8px;\n    border-radius: 4px;\n}\n\n.divButtons{\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    margin-top: 20px;\n}\n\n.uk-button{\n    font-size: 12px;\n    width:100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/selection-tools/component/selection-tool.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"containers\" [@containerTrigger]>\n    <div id=\"selection-tools-box\">\n      <div *ngFor=\"let button of stButtons\">\n          <input id=\"radio-{{button.id}}\" class=\"radio-custom\" name=\"radio-group\" type=\"radio\" [checked]=\"button.isChecked\" (click)=\"drawTool(button)\">\n          <label [@elementsTrigger]=\"'in'\" id=\"{{button.type}}\" for=\"radio-{{button.id}}\" class=\"radio-custom-label\"></label>\n      </div>\n    </div>\n    <div id=\"info-box\">\n      <div class=\"uk-container uk-padding-remove\">\n        <div>\n          <p [@elementsTrigger]=\"'in'\">{{elementSelected}}<span>{{nbElementsSelected}}</span></p>\n          <p [@elementsTrigger]=\"'in'\">Scale<span>{{scaleSelected}}</span></p>\n        </div>\n        <div class=\"divButtons\">\n          <button id=\"loadBtn\" class=\"uk-button uk-button-primary uk-button-small\" [disabled]=\"isLoaBtnDisabled\" \n          [@elementsTrigger]=\"'in'\" (click)=\"loadResultsButton()\">Load results</button>\n          <button id=\"clearBtn\" class=\"uk-button uk-button-danger uk-button-small\" [disabled]=\"isClearBtnDisabled\" \n          [@elementsTrigger]=\"'in'\" (click)=\"clearLayers()\">{{setClearButtonText()}}</button>\n        </div>\n      </div>\n    </div>\n\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/features/selection-tools/component/selection-tool.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_map_map_service__ = __webpack_require__("../../../../../src/app/pages/map/map.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_features_selection_tools_component_selection_button_data__ = __webpack_require__("../../../../../src/app/features/selection-tools/component/selection-button.data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_logger_service__ = __webpack_require__("../../../../../src/app/shared/services/logger.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectionToolComponent; });
/**
 * Created by Dany on 20.12.17.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SelectionToolComponent = (function () {
    function SelectionToolComponent(mapService, logger, helper) {
        this.mapService = mapService;
        this.logger = logger;
        this.helper = helper;
        this.nbElementsSelected = 0;
        this.isHectarSelected = false;
        this.isLoaBtnDisabled = true;
        this.isClearBtnDisabled = true;
        this.stButtons = __WEBPACK_IMPORTED_MODULE_3_app_features_selection_tools_component_selection_button_data__["a" /* stButtons */];
        this.elementSelected = __WEBPACK_IMPORTED_MODULE_3_app_features_selection_tools_component_selection_button_data__["b" /* defaultElementSelected */];
    }
    SelectionToolComponent.prototype.ngOnInit = function () {
        this.subscribeMapService();
        this.scaleSelected = this.mapService.getScaleValue();
    };
    SelectionToolComponent.prototype.ngOnDestroy = function () {
        this.logger.log('SelectionToolComponent/ngOnDestroy');
        this.subscription.unsubscribe();
        this.subscriptionNbNutsSelected.unsubscribe();
    };
    SelectionToolComponent.prototype.subscribeMapService = function () {
        var _this = this;
        if (!this.helper.isNullOrUndefined(this.mapService.getNutsSelectedSubject())) {
            this.subscriptionNbNutsSelected = this.mapService.getNutsSelectedSubject().subscribe(function (value) {
                _this.nbElementsSelected = value;
            });
        }
        if (!this.helper.isNullOrUndefined(this.mapService.getScaleValueSubject())) {
            this.subscription = this.mapService.getScaleValueSubject().subscribe(function (value) {
                _this.scaleSelected = value;
                if (value === __WEBPACK_IMPORTED_MODULE_2_app_shared__["hectare"]) {
                    _this.elementSelected = 'Zones selected';
                }
                else {
                    _this.elementSelected = __WEBPACK_IMPORTED_MODULE_3_app_features_selection_tools_component_selection_button_data__["b" /* defaultElementSelected */];
                }
            });
        }
        if (!this.helper.isNullOrUndefined(this.mapService.getNbOfLayersSelected())) {
            this.mapService.getNbOfLayersSelected().subscribe(function (value) {
                _this.logger.log('layerSelected =' + value);
                _this.layerSelected = value;
            });
        }
        if (!this.helper.isNullOrUndefined(this.mapService.getNutsSelectedSubject())) {
            this.subscriptionNbNutsSelected = this.mapService.getNutsSelectedSubject().subscribe(function (value) {
                _this.logger.log('nbElementsSelected =' + value);
                _this.nbElementsSelected = value;
            });
        }
        // subscribing to click event subject of MapService
        if (!this.helper.isNullOrUndefined(this.mapService.clickEventSubjectObs)) {
            this.mapService.clickEventSubjectObs.subscribe(function () {
                _this.cursorClick(); // call cursor click method when we click anywhere in the map
            });
        }
        if (!this.helper.isNullOrUndefined(this.mapService.drawCreatedSubjectObs)) {
            this.mapService.drawCreatedSubjectObs.subscribe(function () {
                _this.cursorClick();
            });
        }
        if (!this.helper.isNullOrUndefined(this.mapService.getClearAllButtonSubject())) {
            this.mapService.getClearAllButtonSubject().subscribe(function (value) {
                _this.isClearBtnDisabled = !value;
            });
        }
        if (!this.helper.isNullOrUndefined(this.mapService.getLoadResultbuttonState())) {
            this.mapService.getLoadResultbuttonState().subscribe(function (value) {
                _this.isLoaBtnDisabled = !value;
            });
        }
    };
    SelectionToolComponent.prototype.cursorClick = function () {
        var map = this.mapService.getMap();
        this.mapService.clickSelection(map);
        this.stButtons[0].isChecked = true;
    };
    /**
     * Draw method of the activated selection tool
     */
    SelectionToolComponent.prototype.drawTool = function (button) {
        if (button.type === 'click') {
            this.cursorClick();
        }
        else {
            var map = this.mapService.getMap();
            this.mapService.activateDrawTool(map, button.type);
            this.stButtons[0].isChecked = false;
        }
    };
    /**
     * Load the results of the selection
     */
    SelectionToolComponent.prototype.loadResultsButton = function () {
        var map = this.mapService.getMap();
        this.mapService.loadResultNuts(map);
    };
    /**
     * Clear all informations in the info box
     */
    SelectionToolComponent.prototype.clearAllButton = function () {
        var map = this.mapService.getMap();
        this.mapService.clearAll(map);
        this.cursorClick();
    };
    SelectionToolComponent.prototype.setClearButtonText = function () {
        var zoneString = ' zones';
        if (this.layerSelected === 1 || this.nbElementsSelected === 1) {
            zoneString = ' zone';
        }
        if (this.layerSelected >= 1) {
            return 'Clear ' + this.layerSelected + zoneString;
        }
        else if (this.layerSelected === 0) {
            return 'Clear ' + this.nbElementsSelected + zoneString;
        }
    };
    SelectionToolComponent.prototype.clearLayers = function () {
        if (this.layerSelected >= 1) {
            this.mapService.deleteSelectedAreas();
        }
        else {
            this.mapService.clearAll(this.mapService.getMap());
            this.cursorClick();
        }
        if (this.nbElementsSelected == 0) {
            this.mapService.clearAll(this.mapService.getMap());
            this.cursorClick();
        }
    };
    return SelectionToolComponent;
}());
SelectionToolComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'htm-selection-tool',
        template: __webpack_require__("../../../../../src/app/features/selection-tools/component/selection-tool.component.html"),
        styles: [__webpack_require__("../../../../../src/app/features/selection-tools/component/selection-tool.component.css")],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('containerTrigger', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])(":enter", [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0 }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(250, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1 }))
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])(":leave", [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(250, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0 }))
                ])
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('elementsTrigger', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: '1' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('void => *', [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: '0' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('100ms 200ms')
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('* => void', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('50ms', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: '0' }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__pages_map_map_service__["a" /* MapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__pages_map_map_service__["a" /* MapService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_logger_service__["a" /* Logger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_logger_service__["a" /* Logger */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_app_shared__["Helper"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_shared__["Helper"]) === "function" && _c || Object])
], SelectionToolComponent);

var _a, _b, _c;
//# sourceMappingURL=selection-tool.component.js.map

/***/ }),

/***/ "../../../../../src/app/features/selection-tools/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service___ = __webpack_require__("../../../../../src/app/features/selection-tools/service/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__service___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__service___["b"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/features/selection-tools/service/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selection_tool_button_state_service__ = __webpack_require__("../../../../../src/app/features/selection-tools/service/selection-tool-button-state.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__selection_tool_button_state_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selection_tool_service__ = __webpack_require__("../../../../../src/app/features/selection-tools/service/selection-tool.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__selection_tool_service__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/features/selection-tools/service/selection-tool-button-state.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectionToolButtonStateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SelectionToolButtonStateService = (function () {
    function SelectionToolButtonStateService() {
        this.status = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](false);
    }
    SelectionToolButtonStateService.prototype.enable = function (value) {
        this.status.next(value);
    };
    return SelectionToolButtonStateService;
}());
SelectionToolButtonStateService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], SelectionToolButtonStateService);

//# sourceMappingURL=selection-tool-button-state.service.js.map

/***/ }),

/***/ "../../../../../src/app/features/selection-tools/service/selection-tool-utils.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectionToolUtils; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SelectionToolUtils = (function () {
    function SelectionToolUtils(helper) {
        this.helper = helper;
    }
    SelectionToolUtils.prototype.getLocationsFromCicle = function (layer) {
        return this.helper.getLocationsFromCicle(layer);
    };
    SelectionToolUtils.prototype.getIdSelectionFromLayer = function (layer) {
        return this.getSelectionIdFromLayer(layer);
    };
    SelectionToolUtils.prototype.getSelectionIdFromLayer = function (layer) {
        var id_selection = this.helper.getNUTSIDFromGeoJsonLayer(layer);
        if (this.helper.isNullOrUndefined(id_selection) === true) {
            id_selection = this.helper.getLAU2IDFromGeoJsonLayer(layer);
            if (this.helper.isNullOrUndefined(id_selection) === true) {
                return null;
            }
            return id_selection;
        }
        return id_selection;
    };
    SelectionToolUtils.prototype.layersAsLayer = function (layers) {
        var hasLayer = false;
        if (layers.getLayers().length > 0) {
            hasLayer = true;
        }
        return hasLayer;
    };
    return SelectionToolUtils;
}());
SelectionToolUtils = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_shared__["Helper"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_shared__["Helper"]) === "function" && _a || Object])
], SelectionToolUtils);

var _a;
//# sourceMappingURL=selection-tool-utils.service.js.map

/***/ }),

/***/ "../../../../../src/app/features/selection-tools/service/selection-tool.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_proj4__ = __webpack_require__("../../../../proj4/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_business_business_service__ = __webpack_require__("../../../../../src/app/shared/business/business.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_shared_services_interaction_service__ = __webpack_require__("../../../../../src/app/shared/services/interaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_features_selection_tools_service_selection_tool_utils_service__ = __webpack_require__("../../../../../src/app/features/selection-tools/service/selection-tool-utils.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectionToolService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by lesly on 27.05.17.
 */


var proj4 = __WEBPACK_IMPORTED_MODULE_1_proj4__["default"];









var SelectionToolService = (function (_super) {
    __extends(SelectionToolService, _super);
    function SelectionToolService(http, logger, loaderService, toasterService, helper, businessInterfaceRenderService, interactionService, selectionToolUtils) {
        var _this = _super.call(this, http, logger, loaderService, toasterService) || this;
        _this.helper = helper;
        _this.businessInterfaceRenderService = businessInterfaceRenderService;
        _this.interactionService = interactionService;
        _this.selectionToolUtils = selectionToolUtils;
        _this.nutsIds = new Set;
        _this.multiSelectionLayers = new L.FeatureGroup();
        _this.controlMultiLayer = new L.FeatureGroup();
        _this.scaleValue = __WEBPACK_IMPORTED_MODULE_3__shared_data_service__["S" /* initial_scale_value */];
        _this.isDrawer = false;
        _this.isPolygonDrawer = false;
        _this.nbNutsSelectedSubject = new __WEBPACK_IMPORTED_MODULE_8_rxjs_BehaviorSubject__["BehaviorSubject"](0);
        _this.buttonLoadResultStatus = new __WEBPACK_IMPORTED_MODULE_8_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        _this.buttonClearAll = new __WEBPACK_IMPORTED_MODULE_8_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        _this.nutsIdsSubject = new __WEBPACK_IMPORTED_MODULE_8_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        _this.locationsSubject = new __WEBPACK_IMPORTED_MODULE_8_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        _this.areasSubject = new __WEBPACK_IMPORTED_MODULE_8_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        _this.nbOfLayersSelected = new __WEBPACK_IMPORTED_MODULE_8_rxjs_BehaviorSubject__["BehaviorSubject"](0);
        return _this;
    }
    SelectionToolService.prototype.setIsPolygonDrawer = function (value) {
        this.isPolygonDrawer = value;
    };
    SelectionToolService.prototype.getNutsSelectedSubject = function () {
        return this.nbNutsSelectedSubject;
    };
    SelectionToolService.prototype.getMultiSelectionLayers = function () {
        return this.multiSelectionLayers;
    };
    SelectionToolService.prototype.setLoadresultButton = function (value) {
        this.buttonLoadResultStatus.next(value);
    };
    SelectionToolService.prototype.getControlMultiLayer = function () {
        return this.controlMultiLayer;
    };
    SelectionToolService.prototype.setButtonClearAll = function (value) {
        this.buttonClearAll.next(value);
    };
    SelectionToolService.prototype.drawCreated = function (e, map, nuts_lvl) {
        var event = e;
        var type = event.layerType, layer = event.layer;
        var controlIntersectContainsHectar = false;
        this.isActivate = false;
        this.isPolygonDrawer = false;
        var location = '';
        this.logger.log('scale lvl ' + nuts_lvl);
        // enable buttons when layer is created
        if (nuts_lvl === 5) {
            controlIntersectContainsHectar = this.helper.controlDrawedLayer(this.multiSelectionLayers, layer);
            if (!controlIntersectContainsHectar) {
                location = this.helper.convertPostGisLatLongToLocationString(this.helper.getLocationsFromLayer(layer));
                this.drawHectaresLoadingResult(map, layer);
            }
        }
        else {
            location = this.helper.convertLatLongToLocationString(this.helper.getLocationsFromLayer(layer));
        }
        if (nuts_lvl === 4) {
            this.getNutID(location, map, nuts_lvl, __WEBPACK_IMPORTED_MODULE_2__shared__["lau2name"]);
        }
        else if (nuts_lvl === 5) { }
        else {
            this.getNutID(location, map, nuts_lvl, 'population');
        }
    };
    SelectionToolService.prototype.setScaleValue = function (scaleValue) {
        this.scaleValue = scaleValue;
    };
    SelectionToolService.prototype.getScaleValue = function () {
        return this.scaleValue;
    };
    SelectionToolService.prototype.loadResultNuts = function (map) {
        var layerNameArray = [];
        for (var i = 0; i < this.interactionService.getLayerArray().keys().length; i++) {
            layerNameArray.push(this.interactionService.getLayerArray().keys()[i] +
                this.businessInterfaceRenderService.getNutsTosuffix(this.scaleValue));
        }
        this.logger.log('layerNameArray ' + layerNameArray);
        this.getStatistics();
        this.setAreas();
    };
    SelectionToolService.prototype.enableNavigationService = function () {
        this.interactionService.enableButtonWithId('selection');
    };
    SelectionToolService.prototype.removeLayerFromMultiSelectionLayers = function (layer) {
        this.logger.log('SelectionToolService/removeLayerFromMultiSelectionLayers');
        // if the nut
        var self = this;
        var id_selection = self.selectionToolUtils.getSelectionIdFromLayer(layer);
        this.nutsIds.delete(id_selection);
        var indexToRemove = 999;
        for (var i = 0; i < this.multiSelectionLayers.getLayers().length; i++) {
            var iDInMultiSelectionLayers = self.selectionToolUtils.getSelectionIdFromLayer(this.multiSelectionLayers.getLayers()[i]);
            if (id_selection === iDInMultiSelectionLayers) {
                indexToRemove = i;
                break;
            }
        }
        if (indexToRemove !== 999) {
            this.multiSelectionLayers.removeLayer(this.multiSelectionLayers.getLayers()[indexToRemove]);
            this.controlMultiLayer.removeLayer(this.controlMultiLayer.getLayers()[indexToRemove]);
        }
        this.updateSelectionToolAction();
    };
    SelectionToolService.prototype.containLayer = function (layer) {
        if (!this.helper.isNullOrUndefined(layer._leaflet_id)) {
            if (this.nutsIds.has(this.selectionToolUtils.getIdSelectionFromLayer(layer))) {
                return 0;
            }
            else {
                return 1;
            }
        }
        else {
            return 2;
        }
    };
    SelectionToolService.prototype.toggleActivateTool = function (val) {
        this.isActivate = val;
    };
    SelectionToolService.prototype.clearAll = function (map) {
        this.logger.log('Clear all is called from selection tool');
        this.nbOfLayersSelected.next(0);
        // ================
        if (this.isDrawer) {
            this.theDrawer.disable(); // Disable the actual drawer anyway and
            this.isPolygonDrawer = false;
        }
        this.interactionService.disableStateOpenWithFunction('right');
        this.interactionService.disableButtonWithId('load_result');
        this.interactionService.closeRightPanel();
        // remove all layers selected
        this.multiSelectionLayers.clearLayers();
        this.controlMultiLayer.clearLayers();
        // remove all nutsID selected
        this.nutsIds.clear();
        this.updateSelectionToolAction();
        this.interactionService.deleteCMTask();
        // close opened CM
        // this.interactionService.setStatusCMPanel(false)
    };
    // Summary result show result
    SelectionToolService.prototype.getStatisticsFromLayer = function (locations, layers, map) {
        var self = this;
        self.locationsSubject.next(locations);
        self.getStatistics();
    };
    SelectionToolService.prototype.getStatistics = function () {
        this.interactionService.openRightPanel();
        this.interactionService.enableButtonWithId('load_result');
        this.interactionService.enableStateOpenWithFunction('right');
    };
    SelectionToolService.prototype.toggleControl = function (map) {
        if (this.isDrawer) {
            this.theDrawer.disable(); // Disable the actual drawer
        }
        else {
            this.isDrawer = true;
        }
    };
    SelectionToolService.prototype.activateClickSelectionTool = function () {
        if (this.isDrawer) {
            this.getDrawer().disable(); // disable the current drawer before creating a new one
        }
        this.isPolygonDrawer = false;
    };
    SelectionToolService.prototype.activateDrawTool = function (map, tool) {
        if (this.isDrawer) {
            this.getDrawer().disable(); // disable the current drawer before creating a new one
        }
        // TODO: Modifier et mettre dans tableau
        switch (tool) {
            case 'rectangle':
                this.theDrawer = new L.Draw.Rectangle(map);
                this.isPolygonDrawer = false;
                break;
            case 'circle':
                this.theDrawer = new L.Draw.Circle(map);
                this.isPolygonDrawer = false;
                break;
            case 'polygon':
                this.theDrawer = new L.Draw.Polygon(map);
                this.isPolygonDrawer = true;
                break;
            default:
                break;
        }
        this.theDrawer.enable();
        this.isDrawer = true;
        //this.isPolygonDrawer = true;
    };
    SelectionToolService.prototype.getDrawer = function () {
        return this.theDrawer;
    };
    SelectionToolService.prototype.getPolygonDrawerState = function () {
        return this.isPolygonDrawer;
    };
    SelectionToolService.prototype.getNutID = function (location, map, nuts_lvl, stringLayerType) {
        var _this = this;
        this.loaderService.display(true);
        this.logger.log('getNutID');
        var epsg = '4326';
        var coordinate = location;
        var url = __WEBPACK_IMPORTED_MODULE_2__shared__["geoserverUrl"] + '?service=wfs' +
            '&version=2.0.0' +
            '&request=GetFeature' +
            '&srsName=EPSG:' + epsg +
            '&typeNames=hotmaps:' + stringLayerType +
            '&outputFormat=application/json' +
            '&CQL_FILTER= (WITHIN(geom,polygon((' + coordinate.toString() + '))))';
        if (nuts_lvl === 4) { }
        else {
            url += 'AND stat_levl_=' + nuts_lvl + 'AND date=2015-01-01Z';
        }
        this.logger.log(url);
        this.GET(url).map(function (res) { return res.json(); })
            .subscribe(function (res) { return _this.drawResultBeforeLoadingResult(res); }, function (err) { return _super.prototype.handleError.call(_this, err); });
    };
    SelectionToolService.prototype.updateSelectionToolAction = function () {
        if (this.nutsIds.size > 0) {
            this.setButtonsSelectionToolState(true);
        }
        else {
            // disable buttons after clear
            this.setButtonsSelectionToolState(false);
        }
        this.nbNutsSelectedSubject.next(this.nutsIds.size);
        this.nutsIdsSubject.next(Array.from(this.nutsIds));
    };
    SelectionToolService.prototype.setButtonsSelectionToolState = function (value) {
        this.setLoadresultButton(value);
        this.setButtonClearAll(value);
    };
    SelectionToolService.prototype.updateSelectionToolActionHectare = function () {
        if (this.areasSubject.getValue().length > 0) {
            this.setButtonsSelectionToolState(true);
        }
        else {
            // disable buttons after clear
            this.setButtonsSelectionToolState(false);
        }
    };
    SelectionToolService.prototype.setAreas = function () {
        this.areasSubject.next(this.multiSelectionLayers.getLayers());
    };
    SelectionToolService.prototype.setLayerDependingCircleForControl = function (layer) {
        var layerInMultiSelection;
        if (layer instanceof L.Circle) {
            layerInMultiSelection = L.polygon([this.helper.getLocationsFromCicle(layer)]);
        }
        else {
            layerInMultiSelection = layer;
        }
        layerInMultiSelection._leaflet_id = layer._leaflet_id;
        return layerInMultiSelection;
    };
    SelectionToolService.prototype.drawHectaresLoadingResult = function (map, layer) {
        if (this.multiSelectionLayers.hasLayer(layer) === false) {
            var layerTemp = this.setLayerDependingCircleForControl(layer);
            this.controlMultiLayer.addLayer(layerTemp);
            this.multiSelectionLayers.addLayer(layer);
            this.areasSubject.next(this.multiSelectionLayers.getLayers());
            this.logger.log('result is ' + this.areasSubject.getValue().length);
            this.nbNutsSelectedSubject.next(this.areasSubject.getValue().length);
            this.updateSelectionToolActionHectare();
            this.loaderService.display(false);
            var self_1 = this;
            layer.on('click', function () {
                if (layer.options.fillColor === null) {
                    layer.setStyle({
                        'fillColor': 'red'
                    });
                    self_1.nbOfLayersSelected.next(self_1.nbOfLayersSelected.value + 1);
                }
                else {
                    layer.setStyle({
                        'fillColor': null
                    });
                    self_1.nbOfLayersSelected.next(self_1.nbOfLayersSelected.value - 1);
                }
                /* const self = this;
                if (layer.editing.enabled()) {
                  layer.editing.disable();
                  self.updateControlLayers(layer);
                  map.fire('draw:editstop');
                } else {
                  layer.editing.enable();
                  map.fire('draw:editstart');
                } */
            });
        }
    };
    SelectionToolService.prototype.drawResultBeforeLoadingResult = function (result) {
        this.logger.log('result is ' + result);
        this.logger.log('result is ' + result.features);
        /*if (result.features.length === 0) {
          this.toasterService.showToaster('We encountered a problem, there is no data for this area');
        }*/
        if (this.helper.isNullOrUndefined(result) === false) {
            for (var _i = 0, _a = result.features; _i < _a.length; _i++) {
                var feature = _a[_i];
                var selection_id = void 0;
                if (this.helper.isNullOrUndefined(feature.properties.nuts_id) === false) {
                    selection_id = feature.properties.nuts_id;
                }
                else {
                    selection_id = feature.properties.comm_id;
                }
                if (this.nutsIds.has(selection_id) === false) {
                    this.nutsIds.add(selection_id);
                    var areaNutsSelectedLayer = L.geoJson(feature);
                    this.multiSelectionLayers.addLayer(areaNutsSelectedLayer);
                }
            }
            var self = this;
        }
        this.updateSelectionToolAction();
        this.loaderService.display(false);
    };
    SelectionToolService.prototype.addToMultiSelectionLayers = function (layer) {
        if (this.helper.isNullOrUndefined(layer) === false) {
            var selection_id = this.selectionToolUtils.getSelectionIdFromLayer(layer);
            if (this.nutsIds.has(selection_id) === false) {
                this.nutsIds.add(selection_id);
                this.multiSelectionLayers.addLayer(layer);
                this.updateSelectionToolAction();
            }
        }
    };
    SelectionToolService.prototype.addHectareToMultiSelectionLayers = function (layer) {
        if (this.helper.isNullOrUndefined(layer) === false) {
            this.multiSelectionLayers.addLayer(layer);
        }
    };
    SelectionToolService.prototype.deleteSelectedAreas = function () {
        var _this = this;
        this.multiSelectionLayers.getLayers().map(function (layer) {
            if (layer.options.fillColor === 'red') {
                _this.multiSelectionLayers.removeLayer(layer);
                _this.controlMultiLayer.removeLayer(layer);
            }
        });
        this.nbOfLayersSelected.next(0);
        this.setAreas();
        this.nbNutsSelectedSubject.next(this.areasSubject.getValue().length);
    };
    return SelectionToolService;
}(__WEBPACK_IMPORTED_MODULE_6__shared_services__["f" /* APIService */]));
SelectionToolService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["Logger"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["Logger"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["LoaderService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["LoaderService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__shared_services__["d" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_services__["d" /* ToasterService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["Helper"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["Helper"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__shared_business_business_service__["a" /* BusinessInterfaceRenderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_business_business_service__["a" /* BusinessInterfaceRenderService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5_app_shared_services_interaction_service__["a" /* InteractionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_shared_services_interaction_service__["a" /* InteractionService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_9_app_features_selection_tools_service_selection_tool_utils_service__["a" /* SelectionToolUtils */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9_app_features_selection_tools_service_selection_tool_utils_service__["a" /* SelectionToolUtils */]) === "function" && _h || Object])
], SelectionToolService);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=selection-tool.service.js.map

/***/ }),

/***/ "../../../../../src/app/features/side-panel/folder-panel/folder-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 100%;\" #mainDiv>\n  <div class=\"uk-container uk-card-default\">\n\n    <div class=\"uk-card-default\">\n      <div class=\"title-panel\">\n        <h2 class=\"uk-modal-title\">Snapshots</h2>\n        <i class=\"flaticon-cross\" (click)=\"close()\"></i>\n      </div>\n        <table class=\"uk-table\" [style.width.px]=\"tblBody.offsetWidth\">\n            <thead>\n                <tr>\n                    <th>Name</th>\n                    <th>Description</th>\n                    <th class=\"uk-text-right\">Last date</th>\n                    <th class=\"uk-text-center\">\n                        <i class=\"iButton\" (click)=\"refresh()\">&#8635;</i>\n                    </th>\n                </tr>\n            </thead>\n        </table>\n        <div class=\"uk-overflow-auto\" [style.max-height.px]=\"mainDiv.offsetHeight/2\">\n            <table class=\"uk-table uk-table-hover uk-table-striped\" #tblBody>\n                <tbody>\n                    <tr *ngFor=\"let snapshot of snapshots\">\n                        <td>{{ snapshot.name }}</td>\n                        <td>{{ snapshot.description }}</td>\n                        <td class=\"uk-text-right\">{{ snapshot.date | date:'yyyy/MM/dd' }}</td>\n                        <td class=\"uk-text-center\"><i class=\"flaticon-success iButton\" (click)=\"apply(snapshot)\"></i></td>\n                        <td class=\"uk-text-center\"><i class=\"flaticon-trash iButton\" (click)=\"delete(snapshot)\"></i></td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/features/side-panel/folder-panel/folder-panel.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  z-index: 1025;\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\ndiv.uk-container {\n  padding: 7px;\n}\ni.iButton {\n  cursor: pointer;\n  margin-left: 0;\n}\ni.iButton:hover {\n  color: black;\n}\ni.iButton::before {\n  margin-left: 0;\n}\ntable {\n  margin: 0;\n  table-layout: fixed;\n}\ntd p {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\nth:nth-child(1),\ntd:nth-child(1) {\n  width: 30%;\n}\nth:nth-child(2),\ntd:nth-child(2) {\n  width: 30%;\n}\ntd:nth-child(3),\nth:nth-child(3) {\n  width: 20%;\n}\nth:nth-child(4) {\n  width: 20%;\n}\ntd:nth-child(4),\ntd:nth-child(5) {\n  width: 10%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/side-panel/folder-panel/folder-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_services_snapshot_service__ = __webpack_require__("../../../../../src/app/shared/services/snapshot.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_interaction_service__ = __webpack_require__("../../../../../src/app/shared/services/interaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FolderPanelComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FolderPanelComponent = (function () {
    function FolderPanelComponent(snapshotService, interactionService, loaderService) {
        this.snapshotService = snapshotService;
        this.interactionService = interactionService;
        this.loaderService = loaderService;
        this.snapshots = [];
    }
    FolderPanelComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    FolderPanelComponent.prototype.refresh = function () {
        var _this = this;
        if (this.snapshotService.list)
            this.snapshotService.list().then(function (snapshots) { return _this.snapshots = snapshots; });
    };
    FolderPanelComponent.prototype.apply = function (snapshot) {
        var _this = this;
        this.loaderService.display(true);
        this.close();
        this.snapshotService.apply(snapshot, function () {
            _this.loaderService.display(false);
        });
    };
    FolderPanelComponent.prototype.delete = function (snapshot) {
        var _this = this;
        this.snapshotService.delete(snapshot).then(function () {
            return _this.refresh();
        });
    };
    FolderPanelComponent.prototype.close = function () {
        this.interactionService.closeFolderPanel();
    };
    return FolderPanelComponent;
}());
FolderPanelComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'htm-folder-panel',
        template: __webpack_require__("../../../../../src/app/features/side-panel/folder-panel/folder-panel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/features/side-panel/save-panel/save-panel.component.less"), __webpack_require__("../../../../../src/app/features/side-panel/folder-panel/folder-panel.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_shared_services_snapshot_service__["a" /* SnapshotService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_shared_services_snapshot_service__["a" /* SnapshotService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_interaction_service__["a" /* InteractionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_interaction_service__["a" /* InteractionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services__["c" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services__["c" /* LoaderService */]) === "function" && _c || Object])
], FolderPanelComponent);

var _a, _b, _c;
//# sourceMappingURL=folder-panel.component.js.map

/***/ }),

/***/ "../../../../../src/app/features/side-panel/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__side_panel_component__ = __webpack_require__("../../../../../src/app/features/side-panel/side-panel.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__left_side_panel__ = __webpack_require__("../../../../../src/app/features/side-panel/left-side-panel/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__left_side_panel__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__right_side_panel__ = __webpack_require__("../../../../../src/app/features/side-panel/right-side-panel/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__right_side_panel__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__side_panel_service__ = __webpack_require__("../../../../../src/app/features/side-panel/side-panel.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__side_panel_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__top_side_panel__ = __webpack_require__("../../../../../src/app/features/side-panel/top-side-panel/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__top_side_panel__["a"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/features/side-panel/left-side-panel/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__left_side_panel_component__ = __webpack_require__("../../../../../src/app/features/side-panel/left-side-panel/left-side-panel.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__left_side_panel_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/features/side-panel/left-side-panel/left-side-panel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n:host {\n    border-right: 1px solid #000000;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    min-width: 0;\n    min-height: 0;\n    overflow: hidden;\n}\n\ni {\n    font-size: 1.5em;\n}\n\n.container-panel-left {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    min-height: 0;\n    min-width: 0;\n}\n\n.title-panel-left {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    color: #d3d3d3;\n    padding: 0 8px 0 8px;\n    height: 50px;\n    background-color: #333333;\n}\n\n.title-panel-left span {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  font-family: 'Roboto', sans-serif;\n  font-size: 1.5em;\n  text-align: center;\n  text-transform: uppercase;\n  line-height: 50px;\n}\n\n.title-panel-left--collapsed {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n}\n\n.notifications {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    overflow-y: auto;\n    padding: 10px;\n}\n\na {\n    text-decoration: none;\n}\n.title-panel-left>a{\n    line-height: 50px;\n}\na:hover {\n    cursor: pointer;\n}\n\n.uk-accordion-content{\n    margin-top:10px;\n}\n.uk-tab > * > a {\n  color: black !important;\n}\n.uk-tab > .uk-disabled > a {\n  color: rgba(214, 56, 56, 0.32) !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/side-panel/left-side-panel/left-side-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-panel-left\" [@panelWidthTrigger]=\"expandedState\">\n    <div class=\"title-panel-left\" [@titleColorTrigger]=\"expandedState\">\n        <span *ngIf=\"expanded\" [@titleTextTrigger]=\"'in'\">{{title}}</span>\n        <a [@iconTrigger]=\"expandedState\" class=\"link\" (click)=\"toggleExpandedState(''); closePanel('left')\">\n          <i class=\"flaticon-cross\" aria-hidden=\"true\"></i>\n        </a>\n    </div>\n\n  <div class=\"notifications\">\n    <ul class=\"uk-flex-center\" uk-tab id=\"uk-tab-left-panel\">\n      <li class=\"uk-active layers-tab\"><a href=\"\">layers</a></li>\n      <li [class.uk-disabled]=\"!isZoneSelected\"><a href=\"\" (click)=\"updateCmss()\">Calculation modules</a></li>\n    </ul>\n    <ul id=\"my-id3\" class=\"uk-switcher\">\n      <li>\n          <span *ngIf=\"expanded\" [@titleTextTrigger]=\"'in'\">\n            <htm-personnal-layers *ngIf=\"isConnected\"></htm-personnal-layers>\n              <ul uk-accordion *ngFor=\"let i of category\">\n                  <li class=\"uk-open\">\n                    <h3 class=\"uk-accordion-title\">\n                      {{i}}\n                    </h3>\n                    <div class=\"uk-accordion-content\">\n                      <ng-container *ngFor=\"let n of layers\" >\n                        <span *ngIf=\"i === n.category\">\n                          <layers-interaction-cell (click)=\"updateCmss()\" [dataInteraction]=\"n\" [expanded]=\"expanded\" disabled=\"true\"></layers-interaction-cell>\n                        </span>\n                      </ng-container>\n                    </div>\n\n                  </li>\n              </ul>\n            </span>\n      </li>\n      <li [hidden]=\"!isZoneSelected\">\n          <htm-cms [expandedState]=\"expandedState\" [expanded]=\"expanded\" [layersSelected]=\"layersSelected\" [scaleLevel]=\"scaleLevel\"></htm-cms>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/features/side-panel/left-side-panel/left-side-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_features_calculation_module_component_calculation_module_component__ = __webpack_require__("../../../../../src/app/features/calculation-module/component/calculation-module.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__side_panel_component__ = __webpack_require__("../../../../../src/app/features/side-panel/side-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layers_interaction_layers_interaction_service__ = __webpack_require__("../../../../../src/app/features/layers-interaction/layers-interaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_shared_services_interaction_service__ = __webpack_require__("../../../../../src/app/shared/services/interaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services_logger_service__ = __webpack_require__("../../../../../src/app/shared/services/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_map_map_service__ = __webpack_require__("../../../../../src/app/pages/map/map.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_uikit__ = __webpack_require__("../../../../uikit/dist/js/uikit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_uikit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_uikit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_features_user_management__ = __webpack_require__("../../../../../src/app/features/user-management/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeftSideComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var LeftSideComponent = (function (_super) {
    __extends(LeftSideComponent, _super);
    function LeftSideComponent(dataInteractionService, logger, interactionService, mapService, userStatusService) {
        var _this = _super.call(this, interactionService) || this;
        _this.dataInteractionService = dataInteractionService;
        _this.logger = logger;
        _this.interactionService = interactionService;
        _this.mapService = mapService;
        _this.userStatusService = userStatusService;
        _this.layersSelected = [];
        _this.nbElementsSelected = 0;
        _this.category = [];
        _this.isZoneSelected = false;
        _this.isConnected = false;
        _this.expanded = false;
        _this.expandedState = 'collapsed';
        return _this;
    }
    LeftSideComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.mapService.getNutsSelectedSubject()) {
            this.mapService.getNutsSelectedSubject().subscribe(function (value) {
                _this.scaleLevel = _this.mapService.getScaleValue();
                if (value === 0) {
                    __WEBPACK_IMPORTED_MODULE_9_uikit__["tab"]('#uk-tab-left-panel').show(0);
                    _this.isZoneSelected = false;
                }
                else {
                    if (_this.scaleLevel === __WEBPACK_IMPORTED_MODULE_10__shared_data_service__["d" /* hectare */]) {
                        _this.isZoneSelected = true;
                    }
                    else {
                        _this.isZoneSelected = true;
                    }
                }
                _this.nbElementsSelected = value;
                _this.logger.log('LeftSideComponent/this.nbElementsSelected = ' + _this.nbElementsSelected);
            });
            this.mapService.getLayerArray().subscribe(function () {
                _this.layersSelected = _this.mapService.setLayerWithoutSuffix();
                _this.logger.log('LeftSideComponent/this.layersSelected = ' + _this.layersSelected);
            });
            this.userStatusService.getIsUserLogged().subscribe(function (value) { return _this.isConnected = value; });
        }
        this.userStatusService.getIsUserLogged().subscribe(function (value) { return _this.isConnected = value; });
        this.dataInteractionService.getDataInteractionServices().then(function (layers) { return _this.getLayerAndCategory(layers); });
    };
    LeftSideComponent.prototype.updateCmss = function () {
        this.calculationModuleComponent.updateCMs();
    };
    LeftSideComponent.prototype.getLayerAndCategory = function (layers) {
        this.logger.log(' layerr = ' + JSON.stringify(layers));
        this.layers = layers;
        this.category = layers.map(function (item) { return item.category; })
            .filter(function (value, index, self) { return self.indexOf(value) === index; });
        this.category.push(__WEBPACK_IMPORTED_MODULE_0__shared_data_service__["v" /* calculation_module_category */]);
    };
    LeftSideComponent.prototype.ngOnDestroy = function () {
    };
    return LeftSideComponent;
}(__WEBPACK_IMPORTED_MODULE_3__side_panel_component__["a" /* SideComponent */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", Object)
], LeftSideComponent.prototype, "areas", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_app_features_calculation_module_component_calculation_module_component__["a" /* CalculationModuleComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_features_calculation_module_component_calculation_module_component__["a" /* CalculationModuleComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_features_calculation_module_component_calculation_module_component__["a" /* CalculationModuleComponent */]) === "function" && _a || Object)
], LeftSideComponent.prototype, "calculationModuleComponent", void 0);
LeftSideComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'htm-left-side-panel',
        template: __webpack_require__("../../../../../src/app/features/side-panel/left-side-panel/left-side-panel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/features/side-panel/left-side-panel/left-side-panel.component.css")],
        animations: [
            // Define the animation used on the containing dev where the width of the
            //  panel is determined. Here we define the expanded width to be 300px, and
            //  the collapsed width to be 38px.
            //
            // When expanding the panel we transition over a 200ms interval.
            //
            // When collapsing the panel we again use 200ms for the transition, but
            //  we add a delay of 200ms to allow some other animations to complete before
            //  shrinking the panel down.
            //
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["trigger"])('panelWidthTrigger', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["state"])('expanded', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["style"])({ width: __WEBPACK_IMPORTED_MODULE_6_app_shared__["leftPanelSize"] + 'px' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["state"])('collapsed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["style"])({ width: '0px' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["transition"])('collapsed => expanded', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["animate"])('200ms ease-in')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["transition"])('expanded => collapsed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["animate"])('200ms 200ms ease-out'))
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["trigger"])('titleColorTrigger', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["state"])('collapsed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["style"])({ backgroundColor: '#FFFFFF', color: '#d3d3d3' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["state"])('expanded', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["style"])({ backgroundColor: '#333333', color: '#FFFFFF' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["transition"])('collapsed => expanded', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["animate"])('200ms ease-in')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["transition"])('expanded => collapsed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["animate"])('200ms 200ms ease-out'))
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["trigger"])('titleTextTrigger', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["state"])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["style"])({ opacity: '1' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["transition"])('void => *', [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["style"])({ opacity: '0' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["animate"])('100ms 300ms')
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["transition"])('* => void', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["animate"])('50ms', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["style"])({ opacity: '0' }))
                ])
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["trigger"])('iconTrigger', [
                // state('collapsed', style({ transform: 'rotate(180deg)' })),
                // state('collapsed', style({ transform: 'rotate(180deg)' })),
                //   state('expanded', style({ transform: 'rotate(0deg)' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["transition"])('collapsed => expanded', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["animate"])('200ms ease-in')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["transition"])('expanded => collapsed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["animate"])('200ms ease-out'))
            ])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__layers_interaction_layers_interaction_service__["a" /* DataInteractionService */]],
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__layers_interaction_layers_interaction_service__["a" /* DataInteractionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__layers_interaction_layers_interaction_service__["a" /* DataInteractionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__shared_services_logger_service__["a" /* Logger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__shared_services_logger_service__["a" /* Logger */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_app_shared_services_interaction_service__["a" /* InteractionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_shared_services_interaction_service__["a" /* InteractionService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8__pages_map_map_service__["a" /* MapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__pages_map_map_service__["a" /* MapService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_11_app_features_user_management__["e" /* UserManagementStatusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11_app_features_user_management__["e" /* UserManagementStatusService */]) === "function" && _f || Object])
], LeftSideComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=left-side-panel.component.js.map

/***/ }),

/***/ "../../../../../src/app/features/side-panel/left-side-panel/personnal-layers/personnal-layers.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input {\n    margin: 0px 5px;\n}\n\nbutton {\n    padding: 0 5px;\n    line-height: 28px;\n    text-align: left;\n}\n\nspan {\n    width: calc(100% - 30px);\n    position: absolute;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n}\n\n.layers {\n    padding: 3px;\n}\n\n.button-secondary {\n    background-color: #333333;\n    color: white;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/side-panel/left-side-panel/personnal-layers/personnal-layers.component.html":
/***/ (function(module, exports) {

module.exports = "<ul uk-accordion>\n    <li class=\"uk-open\">\n        <h3 class=\"uk-accordion-title\">Personal layer</h3>\n        <div class=\"uk-accordion-content\" style=\"position: relative; width: 100%;\">\n            <ng-container *ngFor=\"let layer of layers\">\n                <div class=\"layers\" (click)=\"actionLayer(layer)\">\n                    <button type=\"button\" class=\"uk-button uk-button-default uk-width-1-1\" [class.button-secondary]=\"layer.checked\">\n                        <input class=\"uk-checkbox\" type=\"checkbox\" [checked]=\"layer.checked\"><span>{{ layer.name }}</span>\n                    </button>\n                </div>\n            </ng-container>\n        </div>\n    </li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/features/side-panel/left-side-panel/personnal-layers/personnal-layers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_services_upload_service__ = __webpack_require__("../../../../../src/app/shared/services/upload.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonnalLayersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PersonnalLayersComponent = (function () {
    function PersonnalLayersComponent(uploadService) {
        this.uploadService = uploadService;
        this.layers = [];
    }
    PersonnalLayersComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.uploadService.getUploadedFiles) {
            this.uploadService.getUploadedFiles().subscribe(function (files) {
                _this.layers = files.map(function (file) {
                    // To keep selected layers as selected
                    _this.layers.forEach(function (layer) {
                        if (layer.id === file.id)
                            file.checked = layer.checked;
                    });
                    return file;
                });
            });
        }
    };
    PersonnalLayersComponent.prototype.actionLayer = function (layer) {
        if (layer.checked) {
            this.uploadService.remove(layer);
            layer.checked = false;
        }
        else {
            this.uploadService.show(layer);
            layer.checked = true;
        }
    };
    return PersonnalLayersComponent;
}());
PersonnalLayersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'htm-personnal-layers',
        template: __webpack_require__("../../../../../src/app/features/side-panel/left-side-panel/personnal-layers/personnal-layers.component.html"),
        styles: [__webpack_require__("../../../../../src/app/features/side-panel/left-side-panel/personnal-layers/personnal-layers.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_shared_services_upload_service__["a" /* UploadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_shared_services_upload_service__["a" /* UploadService */]) === "function" && _a || Object])
], PersonnalLayersComponent);

var _a;
//# sourceMappingURL=personnal-layers.component.js.map

/***/ }),

/***/ "../../../../../src/app/features/side-panel/right-side-panel/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__right_side_panel_component__ = __webpack_require__("../../../../../src/app/features/side-panel/right-side-panel/right-side-panel.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__right_side_panel_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/features/side-panel/right-side-panel/right-side-panel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n:host {\n  border-right: 1px solid #000000;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 0;\n  min-height: 0;\n  overflow:auto;\n  max-height: 94vh;\n}\n\n.content-right-panel{\n    max-height: 89vh;\n    overflow-y: auto;\n    overflow-x: hidden;\n}\ni {\n    font-size: 1.5em;\n}\n\n.uk-tab{\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n    margin-bottom: 5px;\n}\n.container-panel-right {\n    /*flex: 1;\n    display: flex;*/\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    min-height: 0;\n    min-width: 0;\n}\n\n.title-panel-right  {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    color: #d3d3d3;;\n    padding: 0 8px 0 8px;\n    height: 50px;\n    background-color: #333333;\n}\n\n.title-panel-right  span {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    font-family: 'Roboto', sans-serif;\n    font-size: 1.5em;\n    text-align: center;\n    text-transform: uppercase;\n    line-height: 50px;\n}\n\n.title-panel-right \\--collapsed {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n}\n\n.notifications {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    overflow-y: auto;\n}\n.uk-accordion-content{\n  margin-top:10px;\n}\na {\n    text-decoration: none;\n\n}\n.title-panel-right>a{\n    line-height: 50px;\n}\n\na:hover {\n    cursor: pointer;\n}\n\n.export-tab1{\n  bottom: 0;\n  right: 0;\n}\n\n.export-tab2{\n  bottom: 0;\n  float: right;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/side-panel/right-side-panel/right-side-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-panel-right \" [@panelWidthTrigger]=\"expandedState\" [hidden]=\"!expanded\">\n\n  <div class=\"title-panel-right\" [@titleColorTrigger]=\"expandedState\">\n    <a [@iconTrigger]=\"expandedState\" class=\"link\" (click)=\"toggleExpandedState('right'); closePanel('right')\">\n      <i class=\"flaticon-cross\" aria-hidden=\"true\"></i>\n    </a>\n    <span *ngIf=\"expanded\" [@titleTextTrigger]=\"'in'\">{{title}}</span>\n  </div>\n\n  <div class=\"results-container\">\n    <htm-result-manager [personnalLayerPayload]=\"personnalLayerPayload\" [summaryPayload]=\"summaryPayload\" [cmPayload]=\"cmPayload\" [energyMixPayload]=\"energyMixPayload\" [heatLoadPayload]=\"heatLoadPayload\" [durationCurvePayload]=\"durationCurvePayload\" [scaleLevel]=\"scaleLevel\"></htm-result-manager>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/features/side-panel/right-side-panel/right-side-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__side_panel_component__ = __webpack_require__("../../../../../src/app/features/side-panel/side-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_services_interaction_service__ = __webpack_require__("../../../../../src/app/shared/services/interaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_logger_service__ = __webpack_require__("../../../../../src/app/shared/services/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layers_interaction_layers_interaction_service__ = __webpack_require__("../../../../../src/app/features/layers-interaction/layers-interaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RightSideComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// TODO: Improvement of coding style :
// TODO: leaving one empty line between third party imports and application imports
// TODO: listing import lines alphabetized by the module








var RightSideComponent = (function (_super) {
    __extends(RightSideComponent, _super);
    function RightSideComponent(interactionService, helper, logger, dataInteractionService) {
        var _this = _super.call(this, interactionService) || this;
        _this.interactionService = interactionService;
        _this.helper = helper;
        _this.logger = logger;
        _this.dataInteractionService = dataInteractionService;
        // Components status
        _this.heatloadStatus = false;
        _this.electricityMixStatus = false;
        _this.durationCurveStatus = false;
        _this.summaryResultStatus = false;
        _this.loadingData = false;
        return _this;
    }
    RightSideComponent.prototype.ngOnInit = function () { };
    RightSideComponent.prototype.ngOnDestroy = function () { };
    RightSideComponent.prototype.ngOnChanges = function () {
        this.logger.log('RightSidePanelComponent/ngOnChanges');
        if (this.expanded === true) {
            this.setSatusResults();
            this.updateAll();
        }
        else {
            this.resetPayloads();
        }
    };
    RightSideComponent.prototype.resetPayloads = function () {
        this.cmPayload = null;
        this.summaryPayload = null;
        this.energyMixPayload = null;
        this.heatLoadPayload = null;
        this.durationCurvePayload = null;
        this.personnalLayerPayload = null;
    };
    RightSideComponent.prototype.setSatusResults = function () {
        if ((this.scaleLevel === '4') || (this.scaleLevel === '3') || (this.scaleLevel === '2') || (this.scaleLevel === '-1')) {
            this.heatloadStatus = true;
            this.durationCurveStatus = true;
        }
        else {
            this.heatloadStatus = false;
            this.durationCurveStatus = false;
        }
        if (this.scaleLevel === '0') {
            this.electricityMixStatus = true;
        }
        else {
            this.electricityMixStatus = false;
        }
        this.summaryResultStatus = true;
    };
    RightSideComponent.prototype.updateAll = function () {
        if (this.summaryResultStatus && this.scaleLevel !== '-1') {
            this.setSummaryPayloadIds();
        }
        else if (this.summaryResultStatus && this.scaleLevel === '-1') {
            this.setSummaryPayloadArea();
        }
        else {
            this.summaryPayload = null;
        }
        if (this.heatloadStatus && this.scaleLevel !== '-1') {
            this.setHeatloadPayloadIds();
        }
        else if (this.heatloadStatus && this.scaleLevel === '-1') {
            this.setHeatloadPayloadAreas();
        }
        else {
            this.heatLoadPayload = null;
        }
        if (this.durationCurveStatus && this.scaleLevel !== '-1') {
            this.setDurationCurveIds();
        }
        else if (this.durationCurveStatus && this.scaleLevel === '-1') {
            this.setDurationCurveAreas();
        }
        else {
            this.durationCurvePayload = null;
        }
        if (this.electricityMixStatus) {
            this.setElectricityMixPayload();
        }
        else {
            this.energyMixPayload = null;
        }
        if (Object.keys(this.personnalLayers).length >= 1) {
            this.setPersonnalLayerPayload();
        }
        else {
            this.personnalLayerPayload = null;
        }
        if (this.cmRunned) {
            this.setCMPayload();
        }
        else {
            this.cmPayload = null;
        }
    };
    // Create payloads
    RightSideComponent.prototype.setCMPayload = function () {
        var payloadTmp;
        var cm_name = '';
        if (this.scaleLevel !== '-1') {
            payloadTmp = { nuts: this.summaryPayload.nuts, year: this.summaryPayload.year, layers_needed: this.cmRunned.cm.layers_needed, type_layer_needed: this.cmRunned.cm.type_layer_needed, vectors_needed: this.cmRunned.cm.vectors_needed };
            this.logger.log('this.cmRunned.cm.type_layer_needed ' + this.cmRunned.cm.type_layer_needed);
        }
        else if (this.scaleLevel === '-1') {
            payloadTmp = { areas: this.summaryPayload.areas, year: this.summaryPayload.year, layers_needed: this.cmRunned.cm.layers_needed, type_layer_needed: this.cmRunned.cm.type_layer_needed, vectors_needed: this.cmRunned.cm.vectors_needed };
            this.logger.log('this.cmRunned.cm.type_layer_needed ' + this.cmRunned.cm.type_layer_needed);
        }
        if (!this.helper.isNullOrUndefined(this.cmRunned.cm.cm_prefix) && this.cmRunned.cm.cm_prefix != '') {
            cm_name += this.cmRunned.cm.cm_prefix + ' - ';
        }
        cm_name += this.cmRunned.cm.cm_name;
        this.cmPayload = Object.assign({
            url_file: 0, scalevalue: this.helper.getScaleLevelPay(this.scaleLevel),
            inputs: this.cmRunned.component, cm_id: '' + this.cmRunned.cm.cm_id, cm_name: cm_name
        }, { payload: payloadTmp });
    };
    RightSideComponent.prototype.setPersonnalLayerPayload = function () {
        this.personnalLayerPayload = { 'layers': [], scale_level: this.helper.getScaleLevelPay(this.scaleLevel), areas: (this.scaleLevel === '-1') ? this.helper.getAreasForPayload(this.areas) : this.nutsIds };
        for (var key in this.personnalLayers) {
            this.personnalLayerPayload['layers'].push(this.personnalLayers[key]);
        }
    };
    RightSideComponent.prototype.setSummaryPayloadIds = function () {
        var payload = { layers: this.layers, year: __WEBPACK_IMPORTED_MODULE_6__shared_data_service__["w" /* constant_year */], scale_level: this.interactionService.getScaleLevel(), nuts: this.nutsIds };
        /* if (this.helper.isPayloadIncomplete(payload) && Object.keys(this.personnalLayers).length == 0) {
          this.interactionService.disableRightPanel();
          return;
        } */
        this.summaryPayload = payload;
    };
    RightSideComponent.prototype.setSummaryPayloadArea = function () {
        var areas = this.helper.getAreasForPayload(this.areas);
        /*this.logger.log('RightSidePanelComponent/areas()' + JSON.stringify(areas))
         if (areas.length === 0) {
          this.logger.log('RightSidePanelComponent/areas().lenght === 0')
          this.setIsDataRunning(false);
          return
        }; */
        this.summaryPayload = { layers: this.layers, year: __WEBPACK_IMPORTED_MODULE_6__shared_data_service__["w" /* constant_year */], scale_level: this.interactionService.getScaleLevel(), areas: areas };
    };
    RightSideComponent.prototype.setElectricityMixPayload = function () {
        this.energyMixPayload = { nuts: this.nutsIds };
    };
    RightSideComponent.prototype.setHeatloadPayloadAreas = function () {
        this.heatLoadPayload = { areas: this.helper.getAreasForPayload(this.areas), scale_level: this.interactionService.getScaleLevel() };
    };
    RightSideComponent.prototype.setHeatloadPayloadIds = function () {
        this.heatLoadPayload = { nuts: this.nutsIds, scale_level: this.interactionService.getScaleLevel() };
    };
    RightSideComponent.prototype.setDurationCurveIds = function () {
        this.durationCurvePayload = { nuts: this.nutsIds, year: __WEBPACK_IMPORTED_MODULE_6__shared_data_service__["_35" /* constant_year_duration_curve */], scale_level: this.interactionService.getScaleLevel() };
    };
    RightSideComponent.prototype.setDurationCurveAreas = function () {
        this.durationCurvePayload = { areas: this.helper.getAreasForPayload(this.areas), year: __WEBPACK_IMPORTED_MODULE_6__shared_data_service__["_35" /* constant_year_duration_curve */], };
    };
    return RightSideComponent;
}(__WEBPACK_IMPORTED_MODULE_1__side_panel_component__["a" /* SideComponent */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], RightSideComponent.prototype, "nutsIds", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], RightSideComponent.prototype, "layers", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], RightSideComponent.prototype, "scaleLevel", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], RightSideComponent.prototype, "locationsSelection", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], RightSideComponent.prototype, "areas", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], RightSideComponent.prototype, "cmRunned", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], RightSideComponent.prototype, "personnalLayers", void 0);
RightSideComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'htm-right-side-panel',
        template: __webpack_require__("../../../../../src/app/features/side-panel/right-side-panel/right-side-panel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/features/side-panel/right-side-panel/right-side-panel.component.css")],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('panelWidthTrigger', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('expanded', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ width: __WEBPACK_IMPORTED_MODULE_3_app_shared__["rightPanelSize"] + 'px', display: 'block' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('collapsed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ width: '0px', display: 'none' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('collapsed => expanded', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('200ms ease-in')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('expanded => collapsed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('200ms 200ms ease-out'))
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('titleColorTrigger', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('collapsed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ backgroundColor: '#FFFFFF', color: '#d3d3d3' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('expanded', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ backgroundColor: '#333333', color: '#FFFFFF' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('collapsed => expanded', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('200ms ease-in')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('expanded => collapsed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('200ms 200ms ease-out'))
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('titleTextTrigger', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: '1' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('void => *', [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: '0' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('100ms 300ms')
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('* => void', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('50ms', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: '0' }))
                ])
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('iconTrigger', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('collapsed => expanded', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('200ms ease-in')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('expanded => collapsed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('200ms ease-out'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_shared_services_interaction_service__["a" /* InteractionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_shared_services_interaction_service__["a" /* InteractionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_shared__["Helper"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_shared__["Helper"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_logger_service__["a" /* Logger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_logger_service__["a" /* Logger */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__layers_interaction_layers_interaction_service__["a" /* DataInteractionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__layers_interaction_layers_interaction_service__["a" /* DataInteractionService */]) === "function" && _d || Object])
], RightSideComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=right-side-panel.component.js.map

/***/ }),

/***/ "../../../../../src/app/features/side-panel/save-panel/save-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"title-panel\">\n  <h2 class=\"uk-modal-title\">Save</h2>\n  <i class=\"flaticon-cross\" (click)=\"close()\"></i>\n</div>\n<div class=\"uk-container uk-card-default\">\n  <form (ngSubmit)=\"save()\" #saveForm=\"ngForm\">\n    <table class=\"uk-table\">\n      <tr>\n        <td class=\"uk-text-right\">\n          <label>Name: </label>\n        </td>\n        <td>\n          <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"uk-input\" required />\n        </td>\n      </tr>\n      <tr>\n        <td class=\"uk-text-right\">\n          <label>Description: </label>\n        </td>\n        <td>\n          <textarea id=\"description\" [(ngModel)]=\"description\" name=\"description\" class=\"uk-textarea\"></textarea>\n        </td>\n      </tr>\n      <tr>\n        <td colspan=\"2\" class=\"uk-text-center\">\n            <button type=\"submit\" [disabled]=\"!saveForm.form.valid\" class=\"uk-button uk-button-default\">Submit</button>\n        </td>\n      </tr>\n    </table>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/features/side-panel/save-panel/save-panel.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  z-index: 1050;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  border: black 1px solid;\n}\ndiv.title-panel {\n  background-color: #333;\n  position: relative;\n  padding: 5px 15px;\n  line-height: 50px;\n}\ndiv.title-panel h2 {\n  margin: 0;\n  color: white;\n  text-transform: uppercase;\n  text-align: center;\n  font-size: 1.5em;\n}\ndiv.title-panel i {\n  position: absolute;\n  right: 10px;\n  top: 0;\n  cursor: pointer;\n  color: #1e87f0;\n}\ndiv.title-panel i:hover {\n  color: #0f6ecd;\n}\ntable {\n  margin: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/side-panel/save-panel/save-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_services_interaction_service__ = __webpack_require__("../../../../../src/app/shared/services/interaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_services_snapshot_service__ = __webpack_require__("../../../../../src/app/shared/services/snapshot.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SavePanelComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SavePanelComponent = (function () {
    function SavePanelComponent(snapshotService, interactionService) {
        this.snapshotService = snapshotService;
        this.interactionService = interactionService;
        this.name = "";
    }
    SavePanelComponent.prototype.ngOnInit = function () { };
    SavePanelComponent.prototype.save = function () {
        var _this = this;
        this.snapshotService.add(this.name, this.description).then(function (success) {
            if (success) {
                _this.name = "";
                _this.description = null;
                _this.interactionService.closeSavePanel();
            }
        });
    };
    SavePanelComponent.prototype.close = function () {
        this.interactionService.closeSavePanel();
    };
    return SavePanelComponent;
}());
SavePanelComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'htm-save-panel',
        template: __webpack_require__("../../../../../src/app/features/side-panel/save-panel/save-panel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/features/side-panel/save-panel/save-panel.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_shared_services_snapshot_service__["a" /* SnapshotService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_shared_services_snapshot_service__["a" /* SnapshotService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_app_shared_services_interaction_service__["a" /* InteractionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_shared_services_interaction_service__["a" /* InteractionService */]) === "function" && _b || Object])
], SavePanelComponent);

var _a, _b;
//# sourceMappingURL=save-panel.component.js.map

/***/ }),

/***/ "../../../../../src/app/features/side-panel/side-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_services_interaction_service__ = __webpack_require__("../../../../../src/app/shared/services/interaction.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Improvement of coding style :
// leaving one empty line between third party imports and application imports
// listing import lines alphabetized by the module


var SideComponent = (function () {
    function SideComponent(interactionService) {
        this.interactionService = interactionService;
        // Improvement of coding style :
        // place private members after public members, alphabetized
        this.expanded = false;
        this.title = 'SideComponent title';
        this.expandedState = 'collapsed';
    }
    SideComponent.prototype.setTitle = function (title) {
        this.title = title;
    };
    SideComponent.prototype.getTitle = function () {
        return this.title;
    };
    SideComponent.prototype.ngOnInit = function () {
    };
    SideComponent.prototype.ngOnDestroy = function () {
    };
    SideComponent.prototype.toggleExpandedState = function () {
        this.expandedState = this.expanded ? 'collapsed' : 'expanded';
        this.expanded = !this.expanded;
    };
    SideComponent.prototype.disableButtons = function (functionString) {
    };
    // Improvement of coding style :
    // display what ? The name of the method should describes his intent
    SideComponent.prototype.display = function (val) {
        if (val) {
            this.expandedState = 'expanded';
            this.expanded = true;
        }
        else {
            this.expandedState = 'collapsed';
            this.expanded = false;
        }
    };
    SideComponent.prototype.closePanel = function (functionString) {
        this.interactionService.disableStateOpenWithFunction(functionString);
    };
    return SideComponent;
}());
SideComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({}),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_shared_services_interaction_service__["a" /* InteractionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_shared_services_interaction_service__["a" /* InteractionService */]) === "function" && _a || Object])
], SideComponent);

var _a;
//# sourceMappingURL=side-panel.component.js.map

/***/ }),

/***/ "../../../../../src/app/features/side-panel/side-panel.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidePanelService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Improvement of coding style : 
// leaving one empty line between third party imports and application imports
// listing import lines alphabetized by the module


var SidePanelService = (function () {
    function SidePanelService() {
        // Improvement of coding style : 
        // place private members after public members, alphabetized
        // status for left panel
        this.leftPanelStatus = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        // status for right panel
        this.rightPanelStatus = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        this.topPanelStatus = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        this.rightToggleExpandedStatus = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        this.folderPanelStatus = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        this.savePanelStatus = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](false);
    }
    SidePanelService.prototype.topPanelexpandedCollapsed = function () {
        this.topPanelStatus.next(true);
    };
    SidePanelService.prototype.closeTopPanelexpandedCollapsed = function () {
        this.topPanelStatus.next(false);
    };
    SidePanelService.prototype.openLeftPanel = function () {
        this.leftPanelStatus.next(true);
    };
    SidePanelService.prototype.openTopPanel = function () {
        this.topPanelStatus.next(true);
    };
    SidePanelService.prototype.closeTopPanel = function () {
        this.topPanelStatus.next(false);
    };
    SidePanelService.prototype.openRightPanel = function () {
        this.rightPanelStatus.next(true);
    };
    SidePanelService.prototype.closeRightPanel = function () {
        this.rightPanelStatus.next(false);
    };
    SidePanelService.prototype.closeLeftPanel = function () {
        this.leftPanelStatus.next(false);
    };
    SidePanelService.prototype.setFolderPanelStatus = function (toOpen) {
        if (toOpen === void 0) { toOpen = false; }
        this.folderPanelStatus.next(toOpen);
    };
    SidePanelService.prototype.setSavePanelStatus = function (toOpen) {
        if (toOpen === void 0) { toOpen = false; }
        this.savePanelStatus.next(toOpen);
    };
    return SidePanelService;
}());
SidePanelService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], SidePanelService);

//# sourceMappingURL=side-panel.service.js.map

/***/ }),

/***/ "../../../../../src/app/features/side-panel/top-side-panel/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__top_side_panel_component__ = __webpack_require__("../../../../../src/app/features/side-panel/top-side-panel/top-side-panel.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__top_side_panel_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/features/side-panel/top-side-panel/top-side-panel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n:host {\n    border-right: 1px solid #000000;\n    width: 400px;\n    position: absolute;\n    left: calc(50% - 200px);\n    background: white;\n    z-index: 4001;\n}\n\ni {\n    font-size: 1.5em;\n}\n\n.container-panel-top {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    min-height: 0;\n    min-width: 0;\n}\n\n.title-panel-top {\n    text-align: center;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    color: #d3d3d3;\n    padding: 0 8px 0 8px;\n    height: 50px;\n    background-color: #333333;\n    z-index: 405;\n}\n\n.title-panel-top span {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  font-family: 'Roboto', sans-serif;\n  font-size: 1.5em;\n  text-align: center;\n  text-transform: uppercase;\n  line-height: 50px;\n}\n\n.title-panel-top--collapsed {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n}\n\n.notifications {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    overflow-y: auto;\n    padding: 10px;\n}\n\na {\n    text-decoration: none;\n}\n.title-panel-top>a{\n    line-height: 50px;\n}\na:hover {\n    cursor: pointer;\n}\n\n.uk-accordion-content{\n    margin-top:10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/side-panel/top-side-panel/top-side-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='container-panel-top ' [@panelHeightTrigger]='expandedState'>\n    <div class='title-panel-top ' [@titleColorTrigger]='expandedState'>\n      <span *ngIf='expanded' [@titleTextTrigger]='in'>{{title}}</span>\n    </div>\n    <htm-feedback [expandedState]='expandedState'></htm-feedback>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/features/side-panel/top-side-panel/top-side-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__side_panel_component__ = __webpack_require__("../../../../../src/app/features/side-panel/side-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_services_interaction_service__ = __webpack_require__("../../../../../src/app/shared/services/interaction.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopSideComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TopSideComponent = (function (_super) {
    __extends(TopSideComponent, _super);
    function TopSideComponent(interactionService) {
        var _this = _super.call(this, interactionService) || this;
        _this.interactionService = interactionService;
        return _this;
    }
    TopSideComponent.prototype.ngOnInit = function () {
    };
    TopSideComponent.prototype.ngOnDestroy = function () {
    };
    return TopSideComponent;
}(__WEBPACK_IMPORTED_MODULE_1__side_panel_component__["a" /* SideComponent */]));
TopSideComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'htm-top-side-panel',
        template: __webpack_require__("../../../../../src/app/features/side-panel/top-side-panel/top-side-panel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/features/side-panel/top-side-panel/top-side-panel.component.css")],
        animations: [
            // Trigger of height
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('panelHeightTrigger', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('expanded', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ height: '627px', top: '57px' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('collapsed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ height: '0px', display: 'none' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('collapsed => expanded', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('200ms ease-in')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('expanded => collapsed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('200ms ease-out'))
            ]),
            // trigger of title Color
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('titleColorTrigger', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('collapsed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ backgroundColor: '#FFFFFF', color: '#d3d3d3' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('expanded', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ backgroundColor: '#333333', color: '#FFFFFF' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('collapsed => expanded', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('200ms ease-in')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('expanded => collapsed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('200ms ease-out'))
            ]),
            // trigger of title
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('titleTextTrigger', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: '1' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('void => *', [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: '0' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('100ms 200ms')
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('* => void', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('50ms', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: '0' }))
                ])
            ]),
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_shared_services_interaction_service__["a" /* InteractionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_shared_services_interaction_service__["a" /* InteractionService */]) === "function" && _a || Object])
], TopSideComponent);

var _a;
//# sourceMappingURL=top-side-panel.component.js.map

/***/ }),

/***/ "../../../../../src/app/features/summary-result/summary-result-cell/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__summary_result_cell_component__ = __webpack_require__("../../../../../src/app/features/summary-result/summary-result-cell/summary-result-cell.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__summary_result_cell_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/features/summary-result/summary-result-cell/summary-result-cell.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n:host {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    min-height: 0;\n    min-width: 0;\n    max-height: 48px;\n    padding: 3px;\n    font-family: 'Hind', sans-serif;\n\n}\n.isSelected{\n    color:white;\n    background-color: #2889DF;\n}\n.details {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    margin-left: 8px;\n}\n.notifications {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  overflow-y: auto;\n}\n\n.icon {\n}\n\n.message {\n\n}\n\n.date {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    font-size: 0.6em;\n    color: #444444;\n}\nbutton{\n    padding: 0 5px;\n    /* font-size: 0.675rem; */\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/summary-result/summary-result-cell/summary-result-cell.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"expanded\" [@visibleTrigger]=\"'visible'\" class=\"details\">\n    <!--  <form class=\"uk-form\">\n     <label > -->\n  <span class=\"uk-label\">{{summaryResult.information}}</span>\n  <span class=\"uk-label\">{{summaryResult.value}}</span>\n  <span class=\"uk-label\">{{summaryResult.unit}}</span>\n      <!-- </label>\n    </form>-->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/features/summary-result/summary-result-cell/summary-result-cell.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_map_map_service__ = __webpack_require__("../../../../../src/app/pages/map/map.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__summary_result_class__ = __webpack_require__("../../../../../src/app/features/summary-result/summary-result.class.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummaryResultCellComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Improvement of coding style : 
// leaving one empty line between third party imports and application imports
// listing import lines alphabetized by the module



var SummaryResultCellComponent = (function () {
    function SummaryResultCellComponent(mapService) {
        this.mapService = mapService;
    }
    SummaryResultCellComponent.prototype.ngOnInit = function () {
    };
    return SummaryResultCellComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__summary_result_class__["a" /* SummaryResultClass */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__summary_result_class__["a" /* SummaryResultClass */]) === "function" && _a || Object)
], SummaryResultCellComponent.prototype, "summaryResult", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], SummaryResultCellComponent.prototype, "expanded", void 0);
SummaryResultCellComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'htm-summary-result-cell',
        template: __webpack_require__("../../../../../src/app/features/summary-result/summary-result-cell/summary-result-cell.component.html"),
        styles: [__webpack_require__("../../../../../src/app/features/summary-result/summary-result-cell/summary-result-cell.component.css")],
        animations: [
            // Define an animation that adjusts the opactiy when a new item is created
            //  in the DOM. We use the 'visible' string as the hard-coded value in the
            //  trigger.
            //
            // When an item is added we wait for 300ms, and then increase the opacity to 1
            //  over a 200ms time interval. When the item is removed we don't delay anything
            //  and use a 200ms interval.
            //
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('visibleTrigger', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('visible', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: '1' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('void => *', [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: '0' }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('200ms 300ms')]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('* => void', [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('200ms', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: '0' }))])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__pages_map_map_service__["a" /* MapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__pages_map_map_service__["a" /* MapService */]) === "function" && _b || Object])
], SummaryResultCellComponent);

var _a, _b;
//# sourceMappingURL=summary-result-cell.component.js.map

/***/ }),

/***/ "../../../../../src/app/features/summary-result/summary-result-container/summary-result-container.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.table-level-one>th{\n    text-align: center;\n  }\n  .table-level-one{\n    background-color: #f5f5f5;\n  }\n  .table-level-two>td{\n    border-right: 1px solid #f5f5f5;\n  }\n  .table-level-two-nodata{\n    border-right: 1px solid #f5f5f5;\n    text-align: center;\n    font-style: italic;\n  }\n  .warning > th {\n    color: red\n  }\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/summary-result/summary-result-container/summary-result-container.component.html":
/***/ (function(module, exports) {

module.exports = "\n<ng-container *ngFor=\"let layer of results.layers\">\n    <ng-container *ngIf=\"layer.category.indexOf(refSelected) > -1\">\n\n        <tr class=\"table-level-one\">\n            <th colspan=\"2\">{{layer.name | layername}}</th>\n        </tr>\n        <tr *ngFor=\"let value of layer.values\" class=\"table-level-two\">\n            <td>{{value.name | businessname}}</td>\n            <td height=\"20\" class=\"uk-align-left uk-align-center\" *ngIf=\"value.value\">\n                {{value.value | number: '1.0-2' | numberformat }} {{ value.unit | businessname}}\n            </td>\n            <td *ngIf=\"!value.value\">Not available</td>\n        </tr>\n    </ng-container>\n</ng-container>\n<ng-container *ngFor=\"let layer of results.no_data_layers\">\n    <tr class=\"table-level-one warning\">\n        <th colspan=\"2\"><span uk-icon=\"warning\"></span> No data for \"{{layer | layername}}\"</th>\n    </tr>\n</ng-container>\n<ng-container *ngFor=\"let layer of results.no_table_layers\">\n    <tr class=\"table-level-one warning\">\n        <th colspan=\"2\"><span uk-icon=\"warning\"></span> No table for \"{{layer | layername}}\"</th>\n    </tr>\n</ng-container>"

/***/ }),

/***/ "../../../../../src/app/features/summary-result/summary-result-container/summary-result-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummaryResultContainerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SummaryResultContainerComponent = (function () {
    function SummaryResultContainerComponent() {
    }
    SummaryResultContainerComponent.prototype.ngOnInit = function () { };
    return SummaryResultContainerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('results'),
    __metadata("design:type", Object)
], SummaryResultContainerComponent.prototype, "results", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('refSelected'),
    __metadata("design:type", Object)
], SummaryResultContainerComponent.prototype, "refSelected", void 0);
SummaryResultContainerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: '[htm-summary-result-container]',
        template: __webpack_require__("../../../../../src/app/features/summary-result/summary-result-container/summary-result-container.component.html"),
        styles: [__webpack_require__("../../../../../src/app/features/summary-result/summary-result-container/summary-result-container.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SummaryResultContainerComponent);

//# sourceMappingURL=summary-result-container.component.js.map

/***/ }),

/***/ "../../../../../src/app/features/summary-result/summary-result.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Layer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummaryResultClass; });
var Layer = (function () {
    function Layer() {
    }
    return Layer;
}());

var SummaryResultClass = (function () {
    function SummaryResultClass() {
    }
    return SummaryResultClass;
}());

//# sourceMappingURL=summary-result.class.js.map

/***/ }),

/***/ "../../../../../src/app/features/summary-result/summary-result.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n:host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 0;\n  min-height: 0;\n  overflow: hidden;\n}\n.uk-table{\n  margin-top: 0px;\n}\n.waitingbox {\n  height: 150px;\n  width: 100%;\n  position: relative;\n}\n/* .wait-graph-container{\n  background-color: rgba(71, 71, 71, 0.3);\n  position: relative;\n} */\n\n.spinner {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  color: black;\n  margin: 15px 15px 15px -25px;\n}\ni {\n  font-size: 1.5em;\n}\n\n.container-panel-right {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-height: 0;\n  min-width: 0;\n}\n\n.title-panel-right  {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  color: #d3d3d3;;\n  padding: 0 8px 0 8px;\n  height: 50px;\n}\n\n.title-panel-right  span {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  font-family: 'Hind', sans-serif;\n  font-size: 1.5em;\n  padding: 0 8px 0 8px;\n}\n\n.title-panel-right \\--collapsed {\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n.header-summary{\n  color: #d3d3d3;\n  background:#333333;\n\n}\n.header-summary > th{\n  color:white;\n  border-right: 1px solid #f5f5f5;\n}\n.notifications {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  overflow-y: auto;\n}\n.uk-accordion-content{\n  margin-top:10px;\n}\n\n.uk-card-default{\n\n  margin-top:10px;\n  width: 380px;\n}\na {\n  text-decoration: none;\n  margin-top: 6px;\n}\n\na:hover {\n  cursor: pointer;\n}\n\n.htm-card{\n  padding: 10px;\n}\n\n\n.date-visu{\n    text-align: center;\n    margin-bottom: 10px;\n}\n.right{\n    float: right;\n}\n.left{\n    float: left;\n}\n.date-visu > .right, .date-visu > .left {\n    cursor: pointer;\n}\n.date-visu > span {\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n.activebutton{\n    background-color: #1e87f0;\n    color: white;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/summary-result/summary-result.component.html":
/***/ (function(module, exports) {

module.exports = "<span>\n  <div class=\"uk-card uk-card-body htm-card\" [hidden]=\"loadingData\">\n    <table class=\"uk-table uk-table-divider uk-table-small\">\n      <thead>\n        <tr class=\"header-summary\">\n          <th class=\"uk-table-shrink\">Information</th>\n          <th class=\"uk-table-shrink\">Value</th>\n        </tr>\n      </thead>\n<!--       <tbody> -->\n        <ng-container *ngIf=\"summaryResult.summaryResult\">\n          <tbody htm-summary-result-container [results]=\"summaryResult.summaryResult\" [refSelected]=\"refSelected\"></tbody>\n        </ng-container>\n        <ng-container *ngIf=\"summaryResult.cmResult\">\n          <tbody htm-summary-result-container [results]=\"summaryResult.cmResult\" [refSelected]=\"refSelected\"></tbody>\n        </ng-container>\n        <ng-container *ngIf=\"summaryResult.personnalLayerResult\">\n          <tbody htm-summary-result-container [results]=\"summaryResult.personnalLayerResult\" [refSelected]=\"refSelected\"></tbody>\n        </ng-container>\n<!--       </tbody> -->\n    </table>\n  </div>\n</span>\n<div *ngIf=\"loadingData\" class=\"waitingbox\">\n  <div class=\"spinner\" uk-spinner></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/features/summary-result/summary-result.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__summary_result_service__ = __webpack_require__("../../../../../src/app/features/summary-result/summary-result.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_logger_service__ = __webpack_require__("../../../../../src/app/shared/services/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_interaction_service__ = __webpack_require__("../../../../../src/app/shared/services/interaction.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummaryResultComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SummaryResultComponent = (function () {
    // @Input() loadingData;
    // private buttonRef = default_drop_down_button;
    function SummaryResultComponent(logger, helper, interactionService) {
        this.logger = logger;
        this.helper = helper;
        this.interactionService = interactionService;
    }
    SummaryResultComponent.prototype.ngOnInit = function () {
        this.logger.log('SummaryResultComponent/ngOnInit');
        this.logger.log('SummaryResult ' + JSON.stringify(this.summaryResult));
    };
    SummaryResultComponent.prototype.ngOnChanges = function (changes) {
        this.logger.log('SummaryResultComponent/ngOnChanges');
        this.logger.log('SummaryResult ' + JSON.stringify(this.summaryResult));
    };
    SummaryResultComponent.prototype.ngOnDestroy = function () {
    };
    return SummaryResultComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SummaryResultComponent.prototype, "summaryResult", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SummaryResultComponent.prototype, "refSelected", void 0);
SummaryResultComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'htm-summary-result',
        template: __webpack_require__("../../../../../src/app/features/summary-result/summary-result.component.html"),
        styles: [__webpack_require__("../../../../../src/app/features/summary-result/summary-result.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__summary_result_service__["a" /* SummaryResultService */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_logger_service__["a" /* Logger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_logger_service__["a" /* Logger */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_shared__["Helper"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_shared__["Helper"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_interaction_service__["a" /* InteractionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_interaction_service__["a" /* InteractionService */]) === "function" && _c || Object])
], SummaryResultComponent);

var _a, _b, _c;
//# sourceMappingURL=summary-result.component.js.map

/***/ }),

/***/ "../../../../../src/app/features/summary-result/summary-result.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_logger_service__ = __webpack_require__("../../../../../src/app/shared/services/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_loader_service__ = __webpack_require__("../../../../../src/app/shared/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_toaster_service__ = __webpack_require__("../../../../../src/app/shared/services/toaster.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummaryResultService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SummaryResultService = (function (_super) {
    __extends(SummaryResultService, _super);
    function SummaryResultService(http, logger, loaderService, toasterService) {
        return _super.call(this, http, logger, loaderService, toasterService) || this;
    }
    SummaryResultService.prototype.getSummaryResultWithIds = function (payload) {
        this.logger.log('SummaryResultService/getSummaryResultWithIds = ' + JSON.stringify(payload));
        return _super.prototype.POST.call(this, payload, __WEBPACK_IMPORTED_MODULE_7__shared_data_service__["a" /* apiUrl */] + __WEBPACK_IMPORTED_MODULE_7__shared_data_service__["V" /* postStatsLayersNutsLau */]);
    };
    SummaryResultService.prototype.getSummaryResultWithMultiAreas = function (payload) {
        this.logger.log('SummaryResultService/getSummaryResultWithMultiAreas = ' + JSON.stringify(payload));
        return _super.prototype.POST.call(this, payload, __WEBPACK_IMPORTED_MODULE_7__shared_data_service__["a" /* apiUrl */] + __WEBPACK_IMPORTED_MODULE_7__shared_data_service__["W" /* postStatsLayersHectares */]);
    };
    SummaryResultService.prototype.getSummaryResultPersonnalLayers = function (payload) {
        this.logger.log('SummaryResultService/getSummaryResultPersonnalLayers = ' + JSON.stringify(payload));
        return _super.prototype.POST.call(this, payload, __WEBPACK_IMPORTED_MODULE_7__shared_data_service__["a" /* apiUrl */] + __WEBPACK_IMPORTED_MODULE_7__shared_data_service__["X" /* postStatsPersonalLayer */]);
    };
    return SummaryResultService;
}(__WEBPACK_IMPORTED_MODULE_5__shared_services_api_service__["a" /* APIService */]));
SummaryResultService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_logger_service__["a" /* Logger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_logger_service__["a" /* Logger */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_loader_service__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_loader_service__["a" /* LoaderService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__shared_services_toaster_service__["a" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_services_toaster_service__["a" /* ToasterService */]) === "function" && _d || Object])
], SummaryResultService);

var _a, _b, _c, _d;
//# sourceMappingURL=summary-result.service.js.map

/***/ }),

/***/ "../../../../../src/app/features/user-management/account/account.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".piechart_container {\n  width: 50%;\n}\n.uk-grid-small {\n  margin-left: 0px;\n  margin-bottom: 10px;\n}\n.uk-card-body {\n  padding: 20px 20px;\n}\n.profil-information > .title {\n  text-align: center;\n  text-transform: uppercase;\n  margin: 10px;\n}\n.uk-card-badge {\n  width:50px;\n}\n.uk-card-badge > span {\n  float: right;\n  cursor: pointer;\n}\n.uk-card\n.uk-button {\n  width: 100%;\n}\n.disableEdit {\n  color: red;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/user-management/account/account.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"uk-modal-title\">Welcome {{username}}</h2>\n\n<div class=\"uk-child-width-1-2@m uk-grid-match\" uk-grid>\n  <div>\n    <div class=\"uk-card uk-card-default uk-card-body\">\n      <h3>User diskspace</h3>\n      <div style=\"position:relative; height:215px\">\n        <htm-chart [type]=\"'pie'\" [labels]=\"diskspaceLabels\" [options]=\"diskspaceOptions\" [datasets]=\"diskspaceDataset\"\n          [isLoading]=\"false\"></htm-chart>\n      </div>\n    </div>\n  </div>\n  <div>\n    <div class=\"uk-card uk-card-default uk-card-body\">\n      <h3>Informations\n        <span [hidden]=\"isEditable\" class=\"uk-margin-small-right\" uk-icon=\"icon: pencil\" (click)=\"toggleEditing()\"></span>\n        <span [hidden]=\"!isEditable\" class=\"uk-margin-small-right\" uk-icon=\"icon: ban\" (click)=\"disableEditing()\"></span>\n      </h3>\n      <div>\n        <div class=\"profil-information\">\n          <h5 class=\"title\">Firstname</h5>\n          <input class=\"uk-input\" type=\"text\" [class.uk-disabled]=\"!isEditable\" placeholder=\"Firstname\" [(ngModel)]=\"firstname\"\n            [value]=\"firstname\" required />\n        </div>\n        <div class=\"profil-information\">\n          <h5 class=\"title\">Lastname</h5>\n          <input class=\"uk-input\" [class.uk-disabled]=\"!isEditable\" type=\"text\" placeholder=\"Lastname\" [(ngModel)]=\"lastname\"\n            [value]=\"lastname\" required />\n        </div>\n        <div *ngIf=\"isEditable\" class=\"uk-margin\"></div>\n        <button *ngIf=\"isEditable\" class=\"uk-button uk-button-primary\" (click)=\"updateProfile()\">Update profile</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"uk-child-width-2-2@m uk-grid-match\" uk-grid>\n  <div>\n    <app-upload></app-upload>\n  </div>\n</div>\n<button class=\"uk-button uk-button-primary\" (click)=\"logout()\">Logout</button>\n<button class=\"uk-button uk-button-danger\" (click)=\"delete()\">Delete account</button>"

/***/ }),

/***/ "../../../../../src/app/features/user-management/account/account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_user_management_status_service__ = __webpack_require__("../../../../../src/app/features/user-management/service/user-management-status.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_user_management_service__ = __webpack_require__("../../../../../src/app/features/user-management/service/user-management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_component_waiting_status__ = __webpack_require__("../../../../../src/app/shared/component/waiting-status.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_shared_services_interaction_service__ = __webpack_require__("../../../../../src/app/shared/services/interaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_shared_services_upload_service__ = __webpack_require__("../../../../../src/app/shared/services/upload.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AccountComponent = (function (_super) {
    __extends(AccountComponent, _super);
    function AccountComponent(userManagementService, userManagementStatusService, toasterService, interactionService, uploadService) {
        var _this = _super.call(this) || this;
        _this.userManagementService = userManagementService;
        _this.userManagementStatusService = userManagementStatusService;
        _this.toasterService = toasterService;
        _this.interactionService = interactionService;
        _this.uploadService = uploadService;
        _this.firstname = '';
        _this.lastname = '';
        _this.isEditable = false;
        _this.diskspaceLabels = __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["_29" /* labels_diskspacechart */];
        _this.diskspaceOptions = __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["_30" /* diskspacechart_options */];
        return _this;
    }
    AccountComponent.prototype.ngOnInit = function () {
        this.getAcountInformation();
    };
    AccountComponent.prototype.logout = function () {
        var _this = this;
        this.setWaitingStatus(true);
        this.userManagementService.userLogout(this.token).then(function (data) {
            _this.toasterService.showToaster(data.message);
            _this.userManagementStatusService.setUsername(null);
            _this.userManagementStatusService.setUserIsLoggedOut();
            _this.userManagementStatusService.setUserToken(null);
            _this.uploadService.removeAll();
            _this.interactionService.disableButtonWithId('save');
            _this.interactionService.disableButtonWithId('folder');
        }).catch(function () {
            _this.setWaitingStatus(false);
        });
    };
    AccountComponent.prototype.setUserIsLoggedOut = function () {
        this.setWaitingStatus(false);
        this.userManagementStatusService.setUserIsLoggedOut();
    };
    AccountComponent.prototype.getAcountInformation = function () {
        var _this = this;
        this.getUserInformations();
        if (this.userManagementService.getDiskSpace)
            this.userManagementService.getDiskSpace(this.token).then(function (data) {
                _this.diskspaceMax = data.max_size;
                _this.diskspaceUsed = data.used_size;
                _this.diskspaceDataset = [{
                        label: 'Account disk',
                        backgroundColor: [__WEBPACK_IMPORTED_MODULE_0__shared_data_service__["_31" /* color_usedspace */], __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["_32" /* color_unusedspace */]],
                        data: [_this.diskspaceUsed, _this.diskspaceMax - _this.diskspaceUsed]
                    }];
            });
    };
    AccountComponent.prototype.getAcountFileList = function () {
        this.userManagementService.getAcountFileList(this.token).then(function (data) {
        });
    };
    AccountComponent.prototype.toggleEditing = function () {
        this.isEditable = !this.isEditable;
    };
    AccountComponent.prototype.disableEditing = function () {
        this.getUserInformations();
        this.toggleEditing();
    };
    AccountComponent.prototype.getUserInformations = function () {
        var _this = this;
        if (this.userManagementService.getUserInformations)
            this.userManagementService.getUserInformations(this.token).then(function (data) {
                _this.firstname = data.first_name;
                _this.lastname = data.last_name;
            });
    };
    AccountComponent.prototype.updateProfile = function () {
        var _this = this;
        var payload = { token: this.token, last_name: this.lastname, first_name: this.firstname };
        this.userManagementService.userUpdateProfile(payload).then(function (data) {
            _this.toasterService.showToaster(data.message);
            _this.getUserInformations();
            _this.toggleEditing();
        });
    };
    return AccountComponent;
}(__WEBPACK_IMPORTED_MODULE_4_app_shared_component_waiting_status__["a" /* WaitingStatusComponent */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", Object)
], AccountComponent.prototype, "username", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", Object)
], AccountComponent.prototype, "token", void 0);
AccountComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'htm-account',
        template: __webpack_require__("../../../../../src/app/features/user-management/account/account.component.html"),
        styles: [__webpack_require__("../../../../../src/app/features/user-management/account/account.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__service_user_management_service__["a" /* UserManagementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_user_management_service__["a" /* UserManagementService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__service_user_management_status_service__["a" /* UserManagementStatusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_user_management_status_service__["a" /* UserManagementStatusService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_app_shared__["ToasterService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_shared__["ToasterService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6_app_shared_services_interaction_service__["a" /* InteractionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_app_shared_services_interaction_service__["a" /* InteractionService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7_app_shared_services_upload_service__["a" /* UploadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_app_shared_services_upload_service__["a" /* UploadService */]) === "function" && _e || Object])
], AccountComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=account.component.js.map

/***/ }),

/***/ "../../../../../src/app/features/user-management/account/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__account_component__ = __webpack_require__("../../../../../src/app/features/user-management/account/account.component.ts");
/* unused harmony namespace reexport */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/features/user-management/account/upload/upload.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "i.iButton {\n    cursor: pointer;\n    margin-left: 0;\n}\ni.iButton:hover {\n    color: black;\n}\ni.iButton::before {\n    margin-left: 0;\n}\n\n#uploadBtn {\n    color: red;\n    cursor: default;\n}\n#uploadBtn:hover {\n    cursor: not-allowed;\n}\n#uploadBtn.active {\n    color: green;\n    cursor: pointer;\n}\n#uploadBtn.active:hover {\n    color: lightgreen;\n}\n\ntable {\n    margin: 0;\n    table-layout: fixed;\n}\n\ntd p {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n}\n\nth:nth-child(1), td:nth-child(1),\nth:nth-child(2), td:nth-child(2) {\n    width: 34%;\n}\nth:nth-child(3), td:nth-child(3) {\n    width: 16%;\n}\nth:nth-child(4), {\n    width: 16%;\n}\ntd:nth-child(4), td:nth-child(5) {\n    width: 8%;\n}\n.info-box p {\n    margin:0px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/user-management/account/upload/upload.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-card uk-card-default uk-overflow-container\">\n  <table class=\"uk-table\" [style.width.px]=\"tblBody.offsetWidth\">\n    <thead>\n      <tr>\n        <th>Filename</th>\n        <th>Layer</th>\n        <th class=\"uk-text-right\">Size (kB)</th>\n        <th class=\"uk-text-center\" colspan=\"2\">\n          <i class=\"iButton\" (click)=\"getFiles()\">&#8635;</i>\n        </th>\n      </tr>\n    </thead>\n  </table>\n\n  <div class=\"uk-overflow-auto uk-height-small\">\n    <table class=\"uk-table uk-table-hover uk-table-striped\" #tblBody>\n      <tbody>\n        <tr *ngFor=\"let upFile of uploadedFiles\">\n          <td>\n            <p title=\"{{ upFile.name }}\">{{ upFile.name }}</p>\n          </td>\n          <td>\n            <p title=\"{{ getLayerName(upFile.layer) }}\">{{ getLayerName(upFile.layer) }}</p>\n          </td>\n          <td class=\"uk-text-right\">{{ upFile.size * 1000 | number:'1.1-1' }}</td>\n          <td class=\"uk-text-center\"><i class=\"flaticon-import iButton\" (click)=\"download(upFile)\"></i></td>\n          <td class=\"uk-text-center\"><i class=\"flaticon-trash iButton\" (click)=\"delete(upFile)\"></i></td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div class=\"uk-grid-small uk-margin-small\" uk-grid>\n    <!--     <p *ngIf=\"isFileOk\" title=\"{{ file2Up.name }}\">{{ file2Up.name }}</p>\n -->\n    <div class=\"uk-width-1-2@s\">\n      <select class=\"uk-select\" [(ngModel)]=\"selectedLayer\">\n        <option *ngFor=\"let layer of layers\" [ngValue]=\"layer\" >[{{ layer.category }}] {{ layer.name }}\n        </option>\n      </select>\n\n    </div>\n    <div class=\"uk-width-1-2@s\">\n      <div class=\"uk-width-1-1@s\" uk-form-custom=\"target: true\">\n        <input type=\"file\" accept=\".tif,.csv\" (change)=\"onFileChange($event)\" #inputFile>\n        <input class=\"uk-input\" type=\"text\" placeholder=\"Select file\" #inputFile2>\n      </div>\n\n    </div>\n    <div class=\"uk-width-1-2@s info-box\">\n      <!-- <p *ngIf=\"isFileOk\" title=\"{{ file2Up.name }}\">Name:</p>\n      <p *ngIf=\"isFileOk\" title=\"{{ file2Up.name }}\">{{ file2Up.name }}</p> -->\n      <p *ngIf=\"isFileOk\">Size: {{ file2Up.size / 1000 | number:'1.1-1' }} KB</p>\n    </div>\n    <div class=\"uk-width-1-2@s\">\n      <button class=\"uk-button uk-button-primary uk-width-1-1@s\" [disabled]=\"!isFileOk || !selectedLayer\"\n        (click)=\"fileUpload()\" uk-icon=\"upload\">\n<!--         <span *ngIf=\"!isUploading\" uk-icon=\"upload\"></span>\n -->        <span *ngIf=\"!isUploading\" >Upload layer</span>\n\n        <span *ngIf=\"isUploading\" uk-spinner></span>\n      </button>\n    </div>\n    <!-- <i class=\"flaticon-export iButton\" (click)=\"inputFile.click()\"></i> -->\n\n    <!--     <input type=\"file\" accept=\".tif,.csv\" (change)=\"onFileChange($event)\" style=\"display:none\" #inputFile>\n -->\n    <!--  <i class=\"iButton\" [class.flaticon-plus]=\"!isUploading\" [class.active]=\"isFileOk && selectedLayer\" id=\"uploadBtn\"\n      (click)=\"fileUpload()\">\n      <div *ngIf=\"isUploading\" uk-spinner></div>\n    </i> -->\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/features/user-management/account/upload/upload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_upload_service__ = __webpack_require__("../../../../../src/app/shared/services/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_features_layers_interaction_layers_interaction_service__ = __webpack_require__("../../../../../src/app/features/layers-interaction/layers-interaction.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UploadComponent = (function () {
    function UploadComponent(upService, layerService) {
        this.upService = upService;
        this.layerService = layerService;
        this.isFileOk = false;
        this.isUploading = false; // Temporary until api do this async
        this.uploadedFiles = [];
        this.layers = [];
        //selectedLayer: string = null;
        this.selectedLayer = null;
    }
    UploadComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.layerService.getDataInteractionServices)
            this.layerService.getDataInteractionServices().then(function (layers) { return _this.layers = layers; });
        this.getFiles();
        if (this.upService.getUploadedFiles)
            this.upService.getUploadedFiles().subscribe(function (files) { return _this.uploadedFiles = files; });
    };
    /**
     * Get the layer name from the layer workspacename
     * @param layer
     * @returns
     */
    UploadComponent.prototype.getLayerName = function (layer) {
        for (var i in this.layers)
            if (this.layers[i].workspaceName == layer)
                return this.layers[i].name;
        return layer;
    };
    UploadComponent.prototype.getFiles = function () {
        if (this.upService.list)
            this.upService.list();
    };
    UploadComponent.prototype.delete = function (id) {
        this.upService.delete(id);
    };
    UploadComponent.prototype.download = function (upFile) {
        this.upService.download(upFile).then(function (url) {
            // window.open(url); //POPUP blocker
            var a = document.createElement('a');
            a.href = url;
            a.download = upFile.name;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        });
    };
    UploadComponent.prototype.onFileChange = function (event) {
        if (event.target.files && event.target.files.length) {
            this.file2Up = event.target.files[0];
            this.isFileOk = true;
        }
        else
            this.isFileOk = false;
    };
    UploadComponent.prototype.fileUpload = function () {
        var _this = this;
        if (!(this.isFileOk && this.selectedLayer))
            return;
        this.isUploading = true;
        this.upService.add(this.file2Up, this.selectedLayer).then(function (success) {
            if (success) {
                _this.file2Up = null;
                _this.isFileOk = false;
                _this.selectedLayer = null;
                _this.inputFile2.nativeElement.value = "";
                _this.inputFile.nativeElement.value = "";
            }
            else
                _this.isFileOk = true;
            _this.isUploading = false;
        });
    };
    return UploadComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputFile2'),
    __metadata("design:type", Object)
], UploadComponent.prototype, "inputFile2", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputFile'),
    __metadata("design:type", Object)
], UploadComponent.prototype, "inputFile", void 0);
UploadComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-upload',
        template: __webpack_require__("../../../../../src/app/features/user-management/account/upload/upload.component.html"),
        styles: [__webpack_require__("../../../../../src/app/features/user-management/account/upload/upload.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_upload_service__["a" /* UploadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_upload_service__["a" /* UploadService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_features_layers_interaction_layers_interaction_service__["a" /* DataInteractionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_features_layers_interaction_layers_interaction_service__["a" /* DataInteractionService */]) === "function" && _b || Object])
], UploadComponent);

var _a, _b;
//# sourceMappingURL=upload.component.js.map

/***/ }),

/***/ "../../../../../src/app/features/user-management/activate/activate.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/user-management/activate/activate.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"uk-modal-title\">USER ACTIVATION</h2>\n<input class=\"uk-input\" id=\"login-password\" type=\"text\" placeholder=\"Token\" (keyup.enter)=\"activateUser()\" [(ngModel)]=\"token_activation\" [value]=\"token_activation\" required />\n<button class=\"uk-button uk-button-primary\" (click)=\"activateUser()\">Activate account</button>\n\n"

/***/ }),

/***/ "../../../../../src/app/features/user-management/activate/activate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_component_waiting_status__ = __webpack_require__("../../../../../src/app/shared/component/waiting-status.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_toaster_service__ = __webpack_require__("../../../../../src/app/shared/services/toaster.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_user_management_service__ = __webpack_require__("../../../../../src/app/features/user-management/service/user-management.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivateComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ActivateComponent = (function (_super) {
    __extends(ActivateComponent, _super);
    function ActivateComponent(userManagementService, toasterService) {
        var _this = _super.call(this) || this;
        _this.userManagementService = userManagementService;
        _this.toasterService = toasterService;
        return _this;
    }
    ActivateComponent.prototype.ngOnInit = function () {
    };
    ActivateComponent.prototype.activateUser = function () {
        var _this = this;
        var payload = { token: this.token_activation };
        this.userManagementService.userRegisterActivate(payload).then(function (data) {
            _this.toasterService.showToaster(data.message);
            _this.token_activation = '';
            window.location.href = '';
        });
    };
    return ActivateComponent;
}(__WEBPACK_IMPORTED_MODULE_0__shared_component_waiting_status__["a" /* WaitingStatusComponent */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ActivateComponent.prototype, "token_activation", void 0);
ActivateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'htm-activate',
        template: __webpack_require__("../../../../../src/app/features/user-management/activate/activate.component.html"),
        styles: [__webpack_require__("../../../../../src/app/features/user-management/activate/activate.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__service_user_management_service__["a" /* UserManagementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_user_management_service__["a" /* UserManagementService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_toaster_service__["a" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_toaster_service__["a" /* ToasterService */]) === "function" && _b || Object])
], ActivateComponent);

var _a, _b;
//# sourceMappingURL=activate.component.js.map

/***/ }),

/***/ "../../../../../src/app/features/user-management/activate/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__activate_component__ = __webpack_require__("../../../../../src/app/features/user-management/activate/activate.component.ts");
/* unused harmony namespace reexport */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/features/user-management/component/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_management_component__ = __webpack_require__("../../../../../src/app/features/user-management/component/user-management.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__user_management_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/features/user-management/component/user-management.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* :host {\n  position: absolute;\n  right: 20px;\n} */\n.isLoggedIn {\n  color:white !important;\n}\n.isLoggedOut {\n  color:#999!important;\n}\n.link-right {\n  float: right;\n  line-height: 50px;\n}\n.uk-icon-link {\n  line-height: 50px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/user-management/component/user-management.component.html":
/***/ (function(module, exports) {

module.exports = "<div [class.isLoggedIn]=\"isLoggedIn\" [class.isLoggedOut]=\"!isLoggedIn\">\n  <a href=\"#modal-login\" *ngIf=\"!isLoggedIn\" class=\"uk-icon-link\"  uk-icon=\"user\" uk-toggle><span class=\"link-right\">Connect</span></a>\n  <a href=\"#modal-account\" *ngIf=\"isLoggedIn\" class=\"uk-icon-link\"  uk-icon=\"user\" uk-toggle><span class=\"link-right\">Account</span></a>\n</div>\n<div id=\"modal-login\" uk-modal>\n  <div class=\"uk-modal-dialog uk-modal-body\">\n    <button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>\n    <htm-login *ngIf=\"!isLoggedIn\"></htm-login>\n  </div>\n</div>\n<div id=\"modal-register\" uk-modal>\n  <div class=\"uk-modal-dialog uk-modal-body\">\n    <button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>\n    <htm-register [token_activation]=\"token_activation\"></htm-register>\n  </div>\n</div>\n<div id=\"modal-recover\" uk-modal>\n  <div class=\"uk-modal-dialog uk-modal-body\">\n    <button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>\n    <htm-recovery [token_recover]=\"token_recover\" [submitedRecover]=\"submitedRecover\"></htm-recovery>\n  </div>\n</div>\n<div id=\"modal-account\" uk-modal>\n  <div class=\"uk-modal-dialog uk-modal-body\">\n    <button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>\n    <htm-account *ngIf=\"isLoggedIn\" [username]=\"username\" [token]=\"token\"></htm-account>\n  </div>\n</div>\n<div id=\"modal-activate\" uk-modal>\n  <div *ngIf=\"token_activation\" class=\"uk-modal-dialog uk-modal-body\">\n    <button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>\n    <htm-activate  [token_activation]=\"token_activation\"></htm-activate>\n  </div>\n</div>\n\n<div id=\"modal-gdpr\" uk-modal=\"stack: true;\">\n  <div class=\"uk-modal-dialog\">\n    <button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>\n    <div class=\"uk-modal-body\">\n      <htm-gdpr></htm-gdpr>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/features/user-management/component/user-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_user_management_status_service__ = __webpack_require__("../../../../../src/app/features/user-management/service/user-management-status.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_uikit__ = __webpack_require__("../../../../uikit/dist/js/uikit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_uikit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_uikit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserManagementComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserManagementComponent = (function () {
    function UserManagementComponent(userManagementStatusService, route) {
        this.userManagementStatusService = userManagementStatusService;
        this.route = route;
        this.username = '';
        this.token = '';
        this.token_activation = '';
        this.token_recover = '';
        this.submitedRecover = false;
    }
    UserManagementComponent.prototype.ngOnInit = function () {
        this.subscribe();
    };
    UserManagementComponent.prototype.subscribe = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params.token_activation) {
                _this.token_activation = params.token_activation;
                __WEBPACK_IMPORTED_MODULE_2_uikit__["modal"]('#modal-activate').show();
            }
            else if (params.token_recover) {
                _this.token_recover = params.token_recover;
                _this.submitedRecover = true;
                __WEBPACK_IMPORTED_MODULE_2_uikit__["modal"]('#modal-recover').show();
            }
        });
        if (this.userManagementStatusService.getIsUserLogged) {
            this.userManagementStatusService.getIsUserLogged().subscribe(function (data) {
                _this.isLoggedIn = data;
                if (_this.isLoggedIn)
                    _this.closeLogin();
                else
                    _this.closeAccount();
            });
        }
        if (this.userManagementStatusService.getUserToken)
            this.userManagementStatusService.getUserToken().subscribe(function (data) { return _this.token = data; });
        if (this.userManagementStatusService.getUsername)
            this.userManagementStatusService.getUsername().subscribe(function (data) { return _this.username = data; });
    };
    UserManagementComponent.prototype.closeAccount = function () {
        __WEBPACK_IMPORTED_MODULE_2_uikit__["modal"]('#modal-account').hide();
    };
    UserManagementComponent.prototype.closeLogin = function () {
        __WEBPACK_IMPORTED_MODULE_2_uikit__["modal"]('#modal-login').hide();
    };
    return UserManagementComponent;
}());
UserManagementComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'htm-user-management',
        template: __webpack_require__("../../../../../src/app/features/user-management/component/user-management.component.html"),
        styles: [__webpack_require__("../../../../../src/app/features/user-management/component/user-management.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_user_management_status_service__["a" /* UserManagementStatusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_user_management_status_service__["a" /* UserManagementStatusService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], UserManagementComponent);

var _a, _b;
//# sourceMappingURL=user-management.component.js.map

/***/ }),

/***/ "../../../../../src/app/features/user-management/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component__ = __webpack_require__("../../../../../src/app/features/user-management/component/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login__ = __webpack_require__("../../../../../src/app/features/user-management/login/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__login__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__("../../../../../src/app/features/user-management/register/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__register__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account__ = __webpack_require__("../../../../../src/app/features/user-management/account/index.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__recovery__ = __webpack_require__("../../../../../src/app/features/user-management/recovery/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__recovery__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__activate__ = __webpack_require__("../../../../../src/app/features/user-management/activate/index.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_user_management_service__ = __webpack_require__("../../../../../src/app/features/user-management/service/user-management.service.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_user_management_status_service__ = __webpack_require__("../../../../../src/app/features/user-management/service/user-management-status.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_7__service_user_management_status_service__["a"]; });








//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/features/user-management/login/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_component__ = __webpack_require__("../../../../../src/app/features/user-management/login/login.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__login_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/features/user-management/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/user-management/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"uk-modal-title\">LOGIN</h2>\n<p>\n  <input class=\"uk-input\" id=\"login-mail\" type=\"email\" placeholder=\"Email\" (keyup.enter)=\"connect()\" [(ngModel)]=\"username\" [value]=\"username\" required/>\n</p>\n<p>\n  <input class=\"uk-input\" id=\"login-password\" type=\"password\" placeholder=\"Password\" (keyup.enter)=\"connect()\" [(ngModel)]=\"password\" [value]=\"password\" required />\n</p>\n<p>\n  <button class=\"uk-button uk-button-default uk-modal-close\" type=\"button\">Cancel</button>\n  <button class=\"uk-button uk-button-primary\" (click)=\"!waitingStatus ? connect() : null\">\n      <span *ngIf=\"!waitingStatus\">Connect</span>\n      <span *ngIf=\"waitingStatus\" uk-spinner></span>\n  </button>\n  <!-- <button class=\"uk-button uk-button-primary\" (click)=\"logout()\">logout</button> -->\n</p>\n<p>\n  <a href=\"#modal-register\" class=\"uk-button uk-button-link\"  uk-toggle>Register</a>\n</p>\n<p>\n  <a href=\"#modal-recover\" class=\"uk-button uk-button-link\" uk-toggle>Recover</a>\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/features/user-management/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_user_management_service__ = __webpack_require__("../../../../../src/app/features/user-management/service/user-management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_user_management_status_service__ = __webpack_require__("../../../../../src/app/features/user-management/service/user-management-status.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_component_waiting_status__ = __webpack_require__("../../../../../src/app/shared/component/waiting-status.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_shared_services_interaction_service__ = __webpack_require__("../../../../../src/app/shared/services/interaction.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function (_super) {
    __extends(LoginComponent, _super);
    function LoginComponent(userManagementService, userManagementStatusService, toasterService, interactionService) {
        var _this = _super.call(this) || this;
        _this.userManagementService = userManagementService;
        _this.userManagementStatusService = userManagementStatusService;
        _this.toasterService = toasterService;
        _this.interactionService = interactionService;
        _this.username = '';
        _this.password = '';
        _this.token = '';
        return _this;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.connect = function () {
        var _this = this;
        this.setWaitingStatus(true);
        var payload = { password: this.password, email: this.username };
        this.userManagementService.userLogin(payload).then(function (data) {
            _this.token = data.token;
            _this.toasterService.showToaster(data.message);
            _this.setUserIsLoggedIn();
        }).catch(function () {
            _this.setWaitingStatus(false);
        });
    };
    LoginComponent.prototype.setUserIsLoggedIn = function () {
        this.userManagementStatusService.setUserToken(this.token);
        this.userManagementStatusService.setUserIsLoggedIn();
        this.userManagementStatusService.setUsername(this.username);
        this.interactionService.enableButtonWithId('save');
        this.interactionService.enableButtonWithId('folder');
        this.setWaitingStatus(false);
    };
    return LoginComponent;
}(__WEBPACK_IMPORTED_MODULE_3__shared_component_waiting_status__["a" /* WaitingStatusComponent */]));
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'htm-login',
        template: __webpack_require__("../../../../../src/app/features/user-management/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/features/user-management/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_user_management_service__["a" /* UserManagementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_user_management_service__["a" /* UserManagementService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_user_management_status_service__["a" /* UserManagementStatusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_user_management_status_service__["a" /* UserManagementStatusService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_app_shared__["ToasterService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_shared__["ToasterService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_app_shared_services_interaction_service__["a" /* InteractionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_shared_services_interaction_service__["a" /* InteractionService */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/features/user-management/recovery/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__recovery_component__ = __webpack_require__("../../../../../src/app/features/user-management/recovery/recovery.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__recovery_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/features/user-management/recovery/recovery.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/user-management/recovery/recovery.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"uk-modal-title\">RECOVER ACCOUNT</h2>\n<p *ngIf=\"!submitedRecover\">\n  <input class=\"uk-input\" type=\"text\" placeholder=\"Email address\" (keyup.enter)=\"!waitingStatus ? recoverAccountAsk() : null\" [(ngModel)]=\"email\" [value]=\"email\" required />\n</p>\n<p *ngIf=\"!submitedRecover\">\n  <button class=\"uk-button uk-button-default uk-modal-close\" type=\"button\">Cancel</button>\n  <button class=\"uk-button uk-button-primary\" type=\"button\" (click)=\"!waitingStatus ? recoverAccountAsk() : null\">\n      <span *ngIf=\"!waitingStatus\">Recover account</span>\n      <span *ngIf=\"waitingStatus\" uk-spinner></span>\n  </button>\n</p>\n\n<p *ngIf=\"submitedRecover\">\n  Enter your new password\n</p>\n<p *ngIf=\"submitedRecover\">\n <input class=\"uk-input\" type=\"password\" placeholder=\"New password\" (keyup.enter)=\"!waitingStatus ? recoverAccount() : null\" [(ngModel)]=\"new_password\" [value]=\"new_password\" required />\n</p>\n<p *ngIf=\"submitedRecover\">\n  <button class=\"uk-button uk-button-default uk-modal-close\" type=\"button\">Cancel</button>\n  <button class=\"uk-button uk-button-primary\" type=\"button\" (click)=\"!waitingStatus ? recoverAccount() : null\">\n    <span *ngIf=\"!waitingStatus\">Submit</span>\n    <span *ngIf=\"waitingStatus\" uk-spinner></span>\n  </button>\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/features/user-management/recovery/recovery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_shared_component_waiting_status__ = __webpack_require__("../../../../../src/app/shared/component/waiting-status.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_user_management_service__ = __webpack_require__("../../../../../src/app/features/user-management/service/user-management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_uikit__ = __webpack_require__("../../../../uikit/dist/js/uikit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_uikit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_uikit__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecoveryComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RecoveryComponent = (function (_super) {
    __extends(RecoveryComponent, _super);
    function RecoveryComponent(toasterService, userManagementService) {
        var _this = _super.call(this) || this;
        _this.toasterService = toasterService;
        _this.userManagementService = userManagementService;
        _this.submitedRecover = false;
        _this.email = '';
        _this.new_password = '';
        return _this;
    }
    RecoveryComponent.prototype.ngOnInit = function () { };
    RecoveryComponent.prototype.recoverAccountAsk = function () {
        var _this = this;
        this.setWaitingStatus(true);
        var payload = { email: this.email };
        this.userManagementService.userRecoverAsk(payload).then(function () {
            _this.setWaitingStatus(false);
            _this.resetRecoverComponent();
            _this.toasterService.showToaster('Check your email address (' + _this.email + ') to change your password!');
            __WEBPACK_IMPORTED_MODULE_4_uikit__["modal"]('#modal-recover').hide();
        }).catch(function () {
            _this.setWaitingStatus(false);
            _this.submitedRecover = false;
        });
    };
    RecoveryComponent.prototype.recoverAccount = function () {
        var _this = this;
        this.setWaitingStatus(true);
        var payload = { token: this.token_recover, password: this.new_password };
        this.userManagementService.userRecover(payload).then(function (data) {
            _this.resetRecoverComponent();
            _this.toasterService.showToaster(data.message);
            _this.setWaitingStatus(false);
            _this.submitedRecover = false;
            window.location.href = '';
        }).catch(function () {
            _this.setWaitingStatus(false);
        });
    };
    RecoveryComponent.prototype.resetRecoverComponent = function () {
        this.email = '';
        this.new_password = '';
        this.token_recover = '';
    };
    return RecoveryComponent;
}(__WEBPACK_IMPORTED_MODULE_0_app_shared_component_waiting_status__["a" /* WaitingStatusComponent */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", Object)
], RecoveryComponent.prototype, "submitedRecover", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", Object)
], RecoveryComponent.prototype, "token_recover", void 0);
RecoveryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'htm-recovery',
        template: __webpack_require__("../../../../../src/app/features/user-management/recovery/recovery.component.html"),
        styles: [__webpack_require__("../../../../../src/app/features/user-management/recovery/recovery.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_app_shared__["ToasterService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_shared__["ToasterService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__service_user_management_service__["a" /* UserManagementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_user_management_service__["a" /* UserManagementService */]) === "function" && _b || Object])
], RecoveryComponent);

var _a, _b;
//# sourceMappingURL=recovery.component.js.map

/***/ }),

/***/ "../../../../../src/app/features/user-management/register/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__register_component__ = __webpack_require__("../../../../../src/app/features/user-management/register/register.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__register_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/features/user-management/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/user-management/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"uk-modal-title\">REGISTER</h2>\n<form [formGroup]=\"reactiveForm\">\n  <p>\n    <input class=\"uk-input\" id=\"form-horizontal-text1\" type=\"text\" placeholder=\"Firstname\" formControlName=\"firstname\"\n           required/>\n  </p>\n  <p>\n    <input class=\"uk-input\" id=\"form-horizontal-text2\" type=\"text\" placeholder=\"Lastname\" formControlName=\"lastname\"\n           required/>\n  </p>\n  <p>\n    <input class=\"uk-input\" id=\"form-horizontal-text3\" type=\"email\" placeholder=\"Email\" formControlName=\"email\" required/>\n  </p>\n  <p>\n    <input class=\"uk-input\" id=\"form-horizontal-text4\" type=\"password\" placeholder=\"Password\" formControlName=\"password\"\n           required/>\n  </p>\n\n  <p style=\"padding-left: 25px;\">\n    <label>\n      <input class=\"uk-checkbox\" type=\"checkbox\" [checked]=\"gdpr\" (change)=\"gdpr = !gdpr\" />\n      I have read and understood the <a href=\"#modal-gdpr\" uk-toggle>privacy terms</a>.\n    </label>\n  </p>\n\n  <div class='uk-margin-small'>\n    <re-captcha siteKey=\"6Ldb7zcUAAAAADpGmUYGHKDq4HnQ-WqzfqissGje\" formControlName=\"recaptchaReactive\"></re-captcha>\n  </div>\n  <p>\n    <button class=\"uk-button uk-button-default uk-modal-close\" type=\"button\">Cancel</button>\n    <button class=\"uk-button uk-button-primary\" type=\"button\" [disabled]=\"reactiveForm.invalid || !gdpr\" (click)=\"!waitingStatus ? createAccount() : null\">\n      <span *ngIf=\"!waitingStatus\">Create account</span>\n      <span *ngIf=\"waitingStatus\" uk-spinner></span>\n    </button>\n  </p>\n\n</form>\n\n"

/***/ }),

/***/ "../../../../../src/app/features/user-management/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_component_waiting_status__ = __webpack_require__("../../../../../src/app/shared/component/waiting-status.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_toaster_service__ = __webpack_require__("../../../../../src/app/shared/services/toaster.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_user_management_service__ = __webpack_require__("../../../../../src/app/features/user-management/service/user-management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_uikit__ = __webpack_require__("../../../../uikit/dist/js/uikit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_uikit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_uikit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = (function (_super) {
    __extends(RegisterComponent, _super);
    function RegisterComponent(userManagementService, toasterService) {
        var _this = _super.call(this) || this;
        _this.userManagementService = userManagementService;
        _this.toasterService = toasterService;
        _this.email = '';
        _this.password = '';
        _this.lastname = '';
        _this.firstname = '';
        _this.gdpr = false;
        return _this;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.reactiveForm = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormGroup"]({
            recaptchaReactive: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required),
            firstname: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required),
            lastname: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required),
            password: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required),
            email: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required),
        });
    };
    RegisterComponent.prototype.createAccount = function () {
        var _this = this;
        this.setWaitingStatus(true);
        var payload = {
            email: this.reactiveForm.get('email').value, password: this.reactiveForm.get('password').value,
            first_name: this.reactiveForm.get('firstname').value, last_name: this.reactiveForm.get('lastname').value
        };
        this.userManagementService.userRegister(payload).then(function (data) {
            _this.toasterService.showToaster(data.message + '. <br />An email has been sent to your mail address (' + _this.email + '). <br />Please press the link in the mail to activate your account.');
            _this.closePanel();
            _this.resetProcess();
        }).catch(function () {
            _this.resetProcess();
        });
    };
    RegisterComponent.prototype.resetProcess = function () {
        this.resetRegisterForm();
        this.setWaitingStatus(false);
    };
    RegisterComponent.prototype.closePanel = function () {
        __WEBPACK_IMPORTED_MODULE_4_uikit__["modal"]('#modal-register').hide();
    };
    RegisterComponent.prototype.activateUser = function () {
        var _this = this;
        var payload = { token: this.token_activation };
        this.userManagementService.userRegisterActivate(payload).then(function (data) {
            _this.toasterService.showToaster(data.message);
            _this.token_activation = '';
        });
        this.closePanel();
        // this.location.replaceState('/map')
    };
    RegisterComponent.prototype.resetRegisterForm = function () {
        this.reactiveForm.reset();
        this.reactiveForm.controls.recaptchaReactive.reset();
    };
    return RegisterComponent;
}(__WEBPACK_IMPORTED_MODULE_0__shared_component_waiting_status__["a" /* WaitingStatusComponent */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", Object)
], RegisterComponent.prototype, "token_activation", void 0);
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'htm-register',
        template: __webpack_require__("../../../../../src/app/features/user-management/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/features/user-management/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__service_user_management_service__["a" /* UserManagementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_user_management_service__["a" /* UserManagementService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_toaster_service__["a" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_toaster_service__["a" /* ToasterService */]) === "function" && _b || Object])
], RegisterComponent);

var _a, _b;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/features/user-management/service/user-management-status.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserManagementStatusService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var UserManagementStatusService = (function () {
    function UserManagementStatusService() {
        this.isUserLogged = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["BehaviorSubject"](false);
        this.userToken = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["BehaviorSubject"](null);
        this.username = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["BehaviorSubject"](null);
    }
    UserManagementStatusService.prototype.getUserToken = function () {
        return this.userToken;
    };
    UserManagementStatusService.prototype.getIsUserLogged = function () {
        return this.isUserLogged;
    };
    UserManagementStatusService.prototype.getUsername = function () {
        return this.username;
    };
    UserManagementStatusService.prototype.setUserIsLoggedIn = function () {
        this.isUserLogged.next(true);
    };
    UserManagementStatusService.prototype.setUserIsLoggedOut = function () {
        this.isUserLogged.next(false);
    };
    UserManagementStatusService.prototype.setUsername = function (username) {
        this.username.next(username);
    };
    UserManagementStatusService.prototype.setUserToken = function (token) {
        this.userToken.next(token);
    };
    return UserManagementStatusService;
}());
UserManagementStatusService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
], UserManagementStatusService);

//# sourceMappingURL=user-management-status.service.js.map

/***/ }),

/***/ "../../../../../src/app/features/user-management/service/user-management.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserManagementService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserManagementService = (function (_super) {
    __extends(UserManagementService, _super);
    function UserManagementService(http, logger, loaderService, toasterService) {
        return _super.call(this, http, logger, loaderService, toasterService) || this;
    }
    UserManagementService.prototype.userRegister = function (payload) {
        return _super.prototype.POST.call(this, payload, __WEBPACK_IMPORTED_MODULE_2_app_shared_data_service__["a" /* apiUrl */] + __WEBPACK_IMPORTED_MODULE_2_app_shared_data_service__["x" /* post_user_register */]);
    };
    UserManagementService.prototype.userRegisterActivate = function (payload) {
        return _super.prototype.POST.call(this, payload, __WEBPACK_IMPORTED_MODULE_2_app_shared_data_service__["a" /* apiUrl */] + __WEBPACK_IMPORTED_MODULE_3__shared_data_service__["y" /* post_user_register_activate */]);
    };
    UserManagementService.prototype.userLogin = function (payload) {
        return _super.prototype.POST.call(this, payload, __WEBPACK_IMPORTED_MODULE_2_app_shared_data_service__["a" /* apiUrl */] + __WEBPACK_IMPORTED_MODULE_3__shared_data_service__["z" /* post_user_login */]);
    };
    UserManagementService.prototype.userLogout = function (token) {
        return _super.prototype.POST.call(this, this.getTokenPayload(token), __WEBPACK_IMPORTED_MODULE_2_app_shared_data_service__["a" /* apiUrl */] + __WEBPACK_IMPORTED_MODULE_3__shared_data_service__["A" /* post_user_logout */]);
    };
    UserManagementService.prototype.userDelete = function (token) {
        return _super.prototype.DELETE.call(this, __WEBPACK_IMPORTED_MODULE_2_app_shared_data_service__["a" /* apiUrl */] + "/users", {
            body: { token: token }
        }).toPromise();
    };
    UserManagementService.prototype.userRecover = function (payload) {
        return _super.prototype.POST.call(this, payload, __WEBPACK_IMPORTED_MODULE_2_app_shared_data_service__["a" /* apiUrl */] + __WEBPACK_IMPORTED_MODULE_3__shared_data_service__["B" /* post_user_recovery */]);
    };
    UserManagementService.prototype.userRecoverAsk = function (payload) {
        return _super.prototype.POST.call(this, payload, __WEBPACK_IMPORTED_MODULE_2_app_shared_data_service__["a" /* apiUrl */] + __WEBPACK_IMPORTED_MODULE_3__shared_data_service__["C" /* post_user_recovery_ask */]);
    };
    UserManagementService.prototype.getDiskSpace = function (token) {
        return _super.prototype.POST.call(this, this.getTokenPayload(token), __WEBPACK_IMPORTED_MODULE_2_app_shared_data_service__["a" /* apiUrl */] + __WEBPACK_IMPORTED_MODULE_2_app_shared_data_service__["D" /* get_diskspace_endpoint */]);
    };
    UserManagementService.prototype.getAcountFileList = function (token) {
        return _super.prototype.POST.call(this, this.getTokenPayload(token), __WEBPACK_IMPORTED_MODULE_2_app_shared_data_service__["a" /* apiUrl */] + __WEBPACK_IMPORTED_MODULE_2_app_shared_data_service__["E" /* get_filelist_endpoint */]);
    };
    UserManagementService.prototype.getUserInformations = function (token) {
        return _super.prototype.POST.call(this, this.getTokenPayload(token), __WEBPACK_IMPORTED_MODULE_2_app_shared_data_service__["a" /* apiUrl */] + __WEBPACK_IMPORTED_MODULE_2_app_shared_data_service__["F" /* get_userinformation_endpoint */]);
    };
    UserManagementService.prototype.userUpdateProfile = function (payload) {
        return _super.prototype.POST.call(this, payload, __WEBPACK_IMPORTED_MODULE_2_app_shared_data_service__["a" /* apiUrl */] + __WEBPACK_IMPORTED_MODULE_2_app_shared_data_service__["G" /* get_userupdateprofile_endpoint */]);
    };
    UserManagementService.prototype.getTokenPayload = function (token) {
        return { token: token };
    };
    return UserManagementService;
}(__WEBPACK_IMPORTED_MODULE_4__shared_services_api_service__["a" /* APIService */]));
UserManagementService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_app_shared__["Logger"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_shared__["Logger"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_app_shared__["LoaderService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_shared__["LoaderService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_app_shared__["ToasterService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_shared__["ToasterService"]) === "function" && _d || Object])
], UserManagementService);

var _a, _b, _c, _d;
//# sourceMappingURL=user-management.service.js.map

/***/ }),

/***/ "../../../../../src/app/features/welcome-page/welcome-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".logo-container{\n  height: 50%;\n}\n.main-container {\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n.logo-container > img {\n  max-width: 50%;\n}\n.hotmaps > img {\n  float:right;\n}\n.logos{\n    position: relative;\n    height: 300px;\n}\n.hotmaps {\n  float: left\n}\n.parteners {\n  float: right;\n}\n\n.europe-logo {\n  position: relative;\n  float: left;\n  height: 100px;\n  width: 100%\n}\n\n\n.europe-logo > img {\n  height: 100%;\n  margin-left:-7px;\n  margin-top:-7px;\n  float: left;\n}\n.europe-logo > span {\n  position: absolute;\n  top:33%\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/welcome-page/welcome-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"modal-full\" class=\"uk-modal-full\" uk-modal>\n  <div class=\"uk-modal-dialog\">\n    <button\n      class=\"uk-modal-close-full uk-close-large\"\n      type=\"button\"\n      uk-close\n    ></button>\n    <div class=\"uk-grid-collapse uk-child-width-1-1@s uk-flex-middle\" uk-grid>\n      <!-- <div class=\"uk-background-cover\" uk-height-viewport>\n            </div> -->\n      <div class=\"uk-padding-large main-container\">\n        <div class=\"uk-column-1-2\">\n          <div class=\"logo-container hotmaps\">\n            <img src=\"../../../assets/first-page/hotmaps_logo.png\" />\n          </div>\n          <div class=\"logo-container parteners\">\n            <img src=\"../../../assets/first-page/parteners.png\" />\n          </div>\n        </div>\n        <p>\n          The <strong>Hotmaps</strong> project aims at designing a toolbox to support public authorities, energy agencies and urban planners in strategic heating and cooling planning on local, regional and national levels, and in line with EU policies.\n          More information on the project can be found here: <a class=\"uk-link-heading\" href=\"http://www.hotmaps-project.eu\" target=\"_blank\">www.hotmaps-project.eu</a>\n        </p>\n        <p>\n          Here we present the beta-version of the <strong>Hotmaps toolbox</strong>. In the following year the tool will be updated and new releases will be available. In this version the basic functionalities for mapping heating and cooling in EU members are available. In addition also the first calculation models are available – more functionalities including additional calculation models and the possibility to save and load the status of your work on the toolbox will be available in the final release of the tool.\n        </p>\n        <ul class=\"uk-list uk-list-bullet\">\n          <li>\n              <strong>Open source:</strong> The developed tool and all related modules run without requiring any other commercial tool or software. Use of and access to Source Code is subject to Open Source Licenses. The datasets that are used in the tool can be found at <a class=\"uk-link-heading\" href=\"https://gitlab.com/hotmaps\" target=\"_blank\">www.gitlab.com/hotmaps</a>. The source code of the tool can be accessed via <a class=\"uk-link-heading\" href=\"https://github.com/HotMaps\" target=\"_blank\">www.github.com/hotmaps</a>.\n          </li>\n          <li><strong>Feedback and contributions:</strong> We are happy to receive feedback on the tool. Please use the feedback-button in the toolbox to let us know your opinions and suggestions for the tool. Hotmaps also invites other developers to contribute with additional calculation modules or datasets that can be integrated in the toolbox. Please also get in contact with us if you want to take part in the future development of the toolbox. </li>\n        </ul>\n        <p>\n            <strong>Disclaimer:</strong> The data and tools provided on this website are indicative and for research purposes only. No responsibility is taken for the accuracy of included data, figures and results or for using them for unintended purposes.\n        </p>\n        <p>\n            <strong>Data privacy:</strong> By clicking OK below, you accept that this website may use cookies..\n        </p>\n        <div class=\"europe-logo\">\n            <img src=\"../../../assets/first-page/co-funded-h2020-horiz_en.png\" />\n\n            <span>\n              This project has received funding from the European Union’s Horizon 2020 research and innovation programme under grant agreement No. 723677.\n            </span>\n        </div>\n        <p class=\"uk-text-right\">\n          <button class=\"uk-button uk-button-primary uk-modal-close\" type=\"button\">OK</button>\n        </p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/features/welcome-page/welcome-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_uikit__ = __webpack_require__("../../../../uikit/dist/js/uikit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_uikit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_uikit__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WelcomePageComponent = (function () {
    function WelcomePageComponent() {
    }
    WelcomePageComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_1_uikit__["modal"]('#modal-full').show();
    };
    return WelcomePageComponent;
}());
WelcomePageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'htm-welcome-page',
        template: __webpack_require__("../../../../../src/app/features/welcome-page/welcome-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/features/welcome-page/welcome-page.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WelcomePageComponent);

//# sourceMappingURL=welcome-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_routing_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component__ = __webpack_require__("../../../../../src/app/component/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__component__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/pages/map/basemap.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return basemap; });
/**
 * Created by lesly on 14.06.17.
 */
/**
 * Created by lesly on 14.06.17.
 */ var basemap = {
    OSM: L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>,' +
            ' Tiles courtesy of <a href="https://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'
    }),
    Esri: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC,' +
            ' USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan,'
    }),
    // Improvement of coding style : (with codelyzer)
    // Exceeds maximum line length of 140
    Hybrid: L.tileLayer('https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC,' +
            ' USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan,'
    }),
    CartoDB: L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy;' +
            ' <a href="https://cartodb.com/attributions">CartoDB</a>'
    }),
};
//# sourceMappingURL=basemap.js.map

/***/ }),

/***/ "../../../../../src/app/pages/map/component/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__map_component__ = __webpack_require__("../../../../../src/app/pages/map/component/map.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__map_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/pages/map/component/map.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"title-map\">\n  <htm-user-management></htm-user-management>\n  <hmt-search-bar></hmt-search-bar>\n  <htm-nav-bar [leftPanel]=\"leftPanelComponent\" [rightPanel]=\"rightPanelComponent\"></htm-nav-bar>\n  <div class=\"hotmaps-logo\">\n    <a href=\"https://www.hotmaps-project.eu/\" target=\"_blank\">\n      <img src=\"../../../assets/first-page/hotmaps_logo_oneline.svg\"/>\n\n    </a>\n  </div>\n\n  <div class=\"wiki-logo\">\n    <a href=\"https://github.com/HotMaps/hotmaps_wiki/wiki\" target=\"_blank\">\n      <img src=\"../../../assets/first-page/logo_wiki.svg\"/>\n      <span>WIKI</span>\n    </a>\n  </div>\n\n  <!-- <i  (click)=\"toggleLeftExpandedState('Layers')\"></i>\n  <i class=\"icon-nav flaticon-vector\"></i>\n  <i class=\"icon-nav flaticon-folder-2\"></i>\n  <i class=\"icon-nav flaticon-pie-chart-1\" (click)=\"toggleRightExpandedState('Load result')\"></i>\n  <i class=\"icon-nav flaticon-cloud-computing\"></i>\n  <i class=\"icon-nav flaticon-interface-1\" (click)=\"toggleLeftExpandedState('Calculation modules')\"></i>\n  <i class=\"icon-nav flaticon-technology-2\"></i>\n  <i class=\"icon-nav flaticon-comparison-1\"></i>\n  <i class=\"icon-nav flaticon-database-7\"></i> -->\n</div>\n<div class=\"container-map\">\n  <htm-top-side-panel></htm-top-side-panel>\n  <htm-folder-panel *ngIf=\"folderPanelShow\"></htm-folder-panel>\n  <htm-save-panel *ngIf=\"savePanelShow\"></htm-save-panel>\n\n  <htm-left-side-panel [hidden]=\"!openLeftSidebar\"></htm-left-side-panel>\n\n  <div id=\"map\" [style.pointer-events]=\"folderPanelShow || savePanelShow ? 'none' : 'all'\">\n    <htm-selection-tool *ngIf=\"selectionToolShow\" onclick=\"event.stopPropagation();\"></htm-selection-tool>\n\n    <!--<hmt-toolbar></hmt-toolbar> -->\n    <!-- <div class=\"zoom-level-box\">\n       {{zoomlevel}}\n     </div> -->\n  </div>\n\n  <htm-right-side-panel [hidden]=\"!openRightSidebar\" [nutsIds]=\"nutsIds\" [layers]=\"layers\"\n    [personnalLayers]=\"personnalLayers\" [scaleLevel]=\"scaleLevel\" [locationsSelection]=\"locationsSelection\"\n    [areas]=\"areas\" [cmRunned]=\"cmRunned\">\n  </htm-right-side-panel>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/map/component/map.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-height: 0;\n  min-width: 0;\n}\n.zoom-level-box {\n  z-index: 20000;\n  width: 26px;\n  height: 26px;\n  position: absolute;\n  top: 10px;\n  right: 46px;\n  background-color: white;\n  border-radius: 5px;\n  line-height: 26px;\n  text-align: center;\n  font-size: 18px;\n  color: black;\n}\n.button-navbar {\n  height: 30px;\n  width: 30px;\n  margin: 10px;\n  border-bottom-color: #000000;\n}\n.leaflet-bottom .eu_logo {\n  display: none;\n}\n.hotmaps-logo {\n  position: absolute;\n  right: 10px;\n  height: 35px;\n}\n.hotmaps-logo > a,\n.hotmaps-logo img {\n  height: 100%;\n}\n.wiki-logo {\n  position: absolute;\n  right: 200px;\n  height: 35px;\n}\n.wiki-logo > a,\n.wiki-logo img {\n  height: 90%;\n}\n.wiki-logo > a,\n.wiki-logo span {\n  color: #ffffff;\n  font-size: 16px;\n  padding: 5px;\n  text-decoration: none;\n  vertical-align: sub;\n}\n.title-map {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  z-index: 1000;\n  /*min-height: 6vh;*/\n  height: 48px;\n  transition: width 0.4s ease-in-out;\n  font-family: Arial;\n  font-size: 12px;\n  padding: 10px;\n  background-color: #333333;\n  color: #ffffff;\n  border-radius: 0px;\n  border-bottom: solid 1px white;\n}\n#map {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  /*justify-content: center; disable this to display selection tools to the left*/\n  min-width: 0;\n  min-height: 0;\n  top: 0px;\n  left: 0%;\n  bottom: 0;\n  width: 100%;\n  /* Annuler la sélection dans la container map */\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.container-map {\n  height: calc(100vh - 48px);\n  min-height: calc(100vh - 48px);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  position: relative;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/map/component/map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__features_side_panel_top_side_panel_top_side_panel_component__ = __webpack_require__("../../../../../src/app/features/side-panel/top-side-panel/top-side-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_leaflet_draw__ = __webpack_require__("../../../../leaflet-draw/dist/leaflet.draw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_leaflet_draw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_leaflet_draw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__basemap__ = __webpack_require__("../../../../../src/app/pages/map/basemap.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__features_side_panel__ = __webpack_require__("../../../../../src/app/features/side-panel/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__map_service__ = __webpack_require__("../../../../../src/app/pages/map/map.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__searchbar__ = __webpack_require__("../../../../../src/app/pages/searchbar/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_features_selection_tools__ = __webpack_require__("../../../../../src/app/features/selection-tools/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_shared_services_interaction_service__ = __webpack_require__("../../../../../src/app/shared/services/interaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_shared_services_upload_service__ = __webpack_require__("../../../../../src/app/shared/services/upload.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var MapComponent = (function () {
    function MapComponent(mapService, logger, panelService, uploadService, selectionToolButtonStateService, selectionToolService, interactionService) {
        this.mapService = mapService;
        this.logger = logger;
        this.panelService = panelService;
        this.uploadService = uploadService;
        this.selectionToolButtonStateService = selectionToolButtonStateService;
        this.selectionToolService = selectionToolService;
        this.interactionService = interactionService;
        this.isSelectionToolVisible = false;
        this.selectionToolShow = false;
        this.folderPanelShow = false;
        this.savePanelShow = false;
        // management of initial status of sidebar
        this.openRightSidebar = false;
        this.openRightToggleExpanded = false;
        this.openLeftSidebar = false;
        this.openTopSidebar = false;
    }
    MapComponent.prototype.ngAfterContentInit = function () {
        this.notifySubscription();
        this.leftPanelComponent.setTitle('Layers');
        this.rightPanelComponent.setTitle('Results');
        this.topSideComponent.setTitle('Feedback');
        // this.mapService.getGridTest();
    };
    MapComponent.prototype.ngOnDestroy = function () {
        this.map.remove();
    };
    MapComponent.prototype.notifySubscription = function () {
        var _this = this;
        if (this.uploadService.getActivePersonalLayers) {
            this.uploadService.getActivePersonalLayers().subscribe(function (lay) {
                _this.personnalLayers = Object.assign({}, lay);
            });
        }
        if (this.mapService.getScaleValueSubject() !== null) {
            this.mapService.getScaleValueSubject().subscribe(function (scaleLevel) {
                _this.scaleLevel = _this.mapService.getNutsBusiness(scaleLevel);
                _this.mapService.setLayersSubject();
            });
        }
        this.interactionService.getCMRunned().subscribe(function (value) {
            _this.cmRunned = value;
            if (value !== null) {
                _this.interactionService.openRightPanel();
            }
        });
        if (this.mapService.getLayerArray() !== null) {
            this.mapService.getLayerArray().subscribe(function (data) {
                _this.layers = data;
            });
        }
        this.selectionToolService.areasSubject.subscribe(function (areas) {
            _this.areas = areas;
        });
        this.selectionToolService.nutsIdsSubject.subscribe(function (data) {
            _this.nutsIds = data;
        });
        this.selectionToolService.locationsSubject.subscribe(function (data) {
            _this.locationsSelection = data;
        });
        this.panelService.rightToggleExpandedStatus.subscribe(function (val) {
            if (_this.openRightToggleExpanded === false) {
                _this.openRightToggleExpanded = true;
            }
            else {
                _this.rightPanelComponent.toggleExpandedState();
                _this.openRightSidebar = val;
            }
        });
        if (this.mapService.getZoomLevel() !== null) {
            this.mapService.getZoomLevel().subscribe(function (zoomlevel) {
                _this.zoomlevel = zoomlevel;
            });
        }
        this.panelService.topPanelStatus.subscribe(function (val) {
            if (_this.openTopSidebar === false) {
                _this.openTopSidebar = true;
            }
            else {
                _this.topSideComponent.toggleExpandedState();
                _this.openTopSidebar = val;
            }
        });
        this.selectionToolButtonStateService.status.subscribe(function (val) {
            _this.logger.log('mapComponent/selectionTool: ' + val);
            if (val) {
                _this.interactionService.enableStateOpenWithFunction('selection');
                _this.selectionToolShow = true;
            }
            else {
                _this.interactionService.disableStateOpenWithFunction('selection');
                _this.selectionToolShow = false;
            }
        });
        this.panelService.rightPanelStatus.subscribe(function (val) {
            _this.openRightSidebar = val;
            _this.rightPanelComponent.display(val);
        });
        this.panelService.leftPanelStatus.subscribe(function (val) {
            _this.openLeftSidebar = val;
            _this.leftPanelComponent.display(val);
        });
        this.panelService.folderPanelStatus.subscribe(function (val) {
            _this.folderPanelShow = val;
        });
        this.panelService.savePanelStatus.subscribe(function (val) {
            _this.savePanelShow = val;
        });
    };
    MapComponent.prototype.ngOnInit = function () {
        // mapService get an instance of the maps and can work on it
        this.mapService.setupMapservice(this.createMap(__WEBPACK_IMPORTED_MODULE_4__basemap__["a" /* basemap */]));
        this.initializeNavigator();
        this.map.invalidateSize();
    };
    MapComponent.prototype.initializeNavigator = function () {
        this.searchBarComponent.Initialize();
    };
    // main method create and display map (main purpose of this component)
    MapComponent.prototype.createMap = function (basemap) {
        // setup  the map from leaflet
        var self = this;
        this.map = L.map('map', __WEBPACK_IMPORTED_MODULE_1__shared_data_service__["_24" /* map_options */]);
        var eu_logo = L.control({ position: 'bottomright', onAdd: function () { } });
        eu_logo.onAdd = function () {
            var div = L.DomUtil.create('div', 'eu_logo');
            div.style = 'background:rgba(255, 255, 255, 0.7); padding:5px';
            div.innerHTML = "<div style='float: right;height: " + __WEBPACK_IMPORTED_MODULE_1__shared_data_service__["_25" /* eu_logo_height */] + "px;'><img src='" + __WEBPACK_IMPORTED_MODULE_1__shared_data_service__["_26" /* eu_logo_path */] + "' style='height:100%' /></div><div style='float:right; width:200px'><span style='font-size: 10px;'> This project has received funding from the European Union’s Horizon 2020 research and innovation programme under grant agreement No. 723677.</span> </div>";
            return div;
        };
        this.map.addControl(eu_logo);
        L.control.zoom({ position: 'topright' });
        var measureOption = { localization: 'en', position: 'topleft', primaryLengthUnit: 'kilometers', secondaryLengthUnit: 'miles',
            activeColor: '#ABE67E', primaryAreaUnit: 'hectares', completedColor: '#C8F2BE',
            popupOptions: { className: 'leaflet-measure-resultpopup', autoPanPadding: [10, 10] } };
        // L.control.layers(this.mapService.baseMaps).addTo(this.map);
        L.Map = L.Map.extend({
            openPopup: function (popup) {
                this.closePopup();
                this._popup = popup;
                self.logger.log('MapComponent/popup ' + popup);
                return this.addLayer(popup).fire('popupopen', {
                    popup: this._popup
                });
            }
        });
        L.Control = L.Control.extend({
            delete: function (popup) {
                this._popup = popup;
                return this.addLayer(popup).fire('popupDelete', {
                    popup: this._popup
                });
            }
        });
        L.control.scale().addTo(this.map);
        // L.control.measure(measureOption).addTo(this.map);
        // this.mapService.addDrawerControl(this.map);
        return this.map;
    };
    /*showControls() {
      this.mapService.addDrawControls();
    }*/
    MapComponent.prototype.getMap = function () {
        return this.map;
    };
    return MapComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_8__searchbar__["a" /* SearchBarComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8__searchbar__["a" /* SearchBarComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__searchbar__["a" /* SearchBarComponent */]) === "function" && _a || Object)
], MapComponent.prototype, "searchBarComponent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__features_side_panel__["b" /* RightSideComponent */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__features_side_panel__["b" /* RightSideComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__features_side_panel__["b" /* RightSideComponent */]) === "function" && _b || Object)
], MapComponent.prototype, "rightPanelComponent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__features_side_panel__["c" /* LeftSideComponent */]),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__features_side_panel__["c" /* LeftSideComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__features_side_panel__["c" /* LeftSideComponent */]) === "function" && _c || Object)
], MapComponent.prototype, "leftPanelComponent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_0__features_side_panel_top_side_panel_top_side_panel_component__["a" /* TopSideComponent */]),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__features_side_panel_top_side_panel_top_side_panel_component__["a" /* TopSideComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__features_side_panel_top_side_panel_top_side_panel_component__["a" /* TopSideComponent */]) === "function" && _d || Object)
], MapComponent.prototype, "topSideComponent", void 0);
MapComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'htm-map',
        template: __webpack_require__("../../../../../src/app/pages/map/component/map.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/map/component/map.component.less")],
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__map_service__["a" /* MapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__map_service__["a" /* MapService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__shared__["Logger"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared__["Logger"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__features_side_panel__["d" /* SidePanelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__features_side_panel__["d" /* SidePanelService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_11_app_shared_services_upload_service__["a" /* UploadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11_app_shared_services_upload_service__["a" /* UploadService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_9_app_features_selection_tools__["b" /* SelectionToolButtonStateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9_app_features_selection_tools__["b" /* SelectionToolButtonStateService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_9_app_features_selection_tools__["a" /* SelectionToolService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9_app_features_selection_tools__["a" /* SelectionToolService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_10_app_shared_services_interaction_service__["a" /* InteractionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10_app_shared_services_interaction_service__["a" /* InteractionService */]) === "function" && _l || Object])
], MapComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
//# sourceMappingURL=map.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/map/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component__ = __webpack_require__("../../../../../src/app/pages/map/component/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map_service__ = __webpack_require__("../../../../../src/app/pages/map/map.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__map_service__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/pages/map/map.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__features_calculation_module_cm_layers_service__ = __webpack_require__("../../../../../src/app/features/calculation-module/cm-layers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_business_business_service__ = __webpack_require__("../../../../../src/app/shared/business/business.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__basemap__ = __webpack_require__("../../../../../src/app/pages/map/basemap.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__features_selection_tools__ = __webpack_require__("../../../../../src/app/features/selection-tools/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__features_selection_scale__ = __webpack_require__("../../../../../src/app/features/selection-scale/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__features_layers__ = __webpack_require__("../../../../../src/app/features/layers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_services_toaster_service__ = __webpack_require__("../../../../../src/app/shared/services/toaster.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_services_loader_service__ = __webpack_require__("../../../../../src/app/shared/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_services_logger_service__ = __webpack_require__("../../../../../src/app/shared/services/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_services_api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__features_selection_tools_service_selection_tool_button_state_service__ = __webpack_require__("../../../../../src/app/features/selection-tools/service/selection-tool-button-state.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_helper__ = __webpack_require__("../../../../../src/app/shared/helper.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Created by lesly on 27.05.17.
 */















var MapService = (function (_super) {
    __extends(MapService, _super);
    function MapService(http, logger, loaderService, toasterService, layersService, selectionScaleService, cmLayerService, selectionToolService, helper, businessInterfaceRenderService, selectionToolButtonStateService) {
        var _this = _super.call(this, http, logger, loaderService, toasterService) || this;
        _this.layersService = layersService;
        _this.selectionScaleService = selectionScaleService;
        _this.cmLayerService = cmLayerService;
        _this.selectionToolService = selectionToolService;
        _this.helper = helper;
        _this.businessInterfaceRenderService = businessInterfaceRenderService;
        _this.selectionToolButtonStateService = selectionToolButtonStateService;
        _this.zoomlevel = new __WEBPACK_IMPORTED_MODULE_13_rxjs_BehaviorSubject__["BehaviorSubject"](__WEBPACK_IMPORTED_MODULE_3__shared_data_service__["_6" /* defaultZoomLevel */]);
        _this.layerArray = new __WEBPACK_IMPORTED_MODULE_13_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        // TODO: A modifier
        _this.clickEventSubject = new __WEBPACK_IMPORTED_MODULE_14_rxjs_Subject__["Subject"](); // Observable source for click
        _this.clickEventSubjectObs = _this.clickEventSubject.asObservable(); // Observable stream
        _this.drawCreatedSubject = new __WEBPACK_IMPORTED_MODULE_14_rxjs_Subject__["Subject"]();
        _this.drawCreatedSubjectObs = _this.drawCreatedSubject.asObservable();
        _this.baseMaps = __WEBPACK_IMPORTED_MODULE_4__basemap__["a" /* basemap */];
        return _this;
    }
    MapService.prototype.ngOnInit = function () {
        this.logger.log('MapService/ngOnInit()');
        this.layerArray.next(this.layersService.getLayerArray().keys());
    };
    MapService.prototype.ngOnDestroy = function () {
        this.logger.log('MapService/ngOnDestroy()');
    };
    MapService.prototype.getSubscribtionNutsIds = function () {
        return this.selectionToolService.nutsIdsSubject.asObservable();
    };
    MapService.prototype.getNbOfLayersSelected = function () {
        return this.selectionToolService.nbOfLayersSelected;
    };
    /**
    * Update the clickCursorSubject
    */
    MapService.prototype.clickCursorUpdate = function () {
        this.clickEventSubject.next();
    };
    /**
    * Update the drawCreatedSubject
    */
    MapService.prototype.drawCreatedUpdate = function () {
        this.drawCreatedSubject.next();
    };
    MapService.prototype.getMap = function () {
        return this.map;
    };
    // Retrive all map events
    MapService.prototype.retriveMapEvent = function () {
        var self = this;
        this.map.on(__WEBPACK_IMPORTED_MODULE_3__shared_data_service__["_7" /* MAPCLICK */], function (event) { self.onClickEvent(self, event); });
        this.map.on(__WEBPACK_IMPORTED_MODULE_3__shared_data_service__["_8" /* MAPLAYERCHANCE */], function (event) { self.onBaselayerChange(self, event); });
        this.map.on(__WEBPACK_IMPORTED_MODULE_3__shared_data_service__["_9" /* MAPZOOMSTART */], function () { self.onZoomStart(self); });
        this.map.on(__WEBPACK_IMPORTED_MODULE_3__shared_data_service__["_10" /* MAPZOOMEND */], function () { self.onZoomEnd(self); });
        this.map.on(__WEBPACK_IMPORTED_MODULE_3__shared_data_service__["_11" /* MAPLAYERSCONTROLEVENT */], function () { self.onLayersControlEvent(self); });
        this.map.on(__WEBPACK_IMPORTED_MODULE_3__shared_data_service__["_12" /* MAPLAYERADD */], function (e) { self.onLayerAdd(self, e); });
        this.map.on(__WEBPACK_IMPORTED_MODULE_3__shared_data_service__["_13" /* MAPDIDIUPDATELAYER */], function (event) { self.onDidUpdateLayers(self, event); });
        this.map.on(__WEBPACK_IMPORTED_MODULE_3__shared_data_service__["_14" /* MAPOVERLAYADD */], function () { self.onOverLayAdd(self); });
        this.map.on(__WEBPACK_IMPORTED_MODULE_3__shared_data_service__["_15" /* MAPDRAWCREATED */], function (e) { self.onDrawCreated(self, e); });
        this.map.on(__WEBPACK_IMPORTED_MODULE_3__shared_data_service__["_16" /* MAPDRAWEDITED */], function () { self.onDrawEdited(self); });
        this.map.on(__WEBPACK_IMPORTED_MODULE_3__shared_data_service__["_17" /* MAPDRAWSTART */], function () { self.onDrawStart(self); });
        this.map.on(__WEBPACK_IMPORTED_MODULE_3__shared_data_service__["_18" /* MAPDRAWEDITSTART */], function () { self.onDrawEditStart(self); });
        this.map.on(__WEBPACK_IMPORTED_MODULE_3__shared_data_service__["_19" /* MAPDRAWEDITSTOP */], function (e) { self.onDrawEditStop(self, e); });
        this.map.on(__WEBPACK_IMPORTED_MODULE_3__shared_data_service__["_20" /* MAPDRAWDELETED */], function () { self.onDrawDeleted(self); });
    };
    // Event functions
    MapService.prototype.onDrawCreated = function (self, e) {
        self.logger.log('MapService/onDrawCreated');
        var scale_lvl = self.selectionScaleService.getIdFromNuts(self.selectionScaleService.getScaleValue());
        self.selectionToolService.drawCreated(e, this.map, scale_lvl);
        self.selectionToolService.setIsPolygonDrawer(false);
        self.drawCreatedUpdate();
    };
    MapService.prototype.onDrawEdited = function (self) {
        self.logger.log('MapService/onDrawEdited');
    };
    MapService.prototype.onDrawStart = function (self) {
        self.logger.log('MapService/DrawStart');
        self.selectionToolService.toggleActivateTool(true);
        this.selectionToolService.setButtonClearAll(true); // enable button when the drawing starts
    };
    MapService.prototype.onDrawEditStart = function (self) {
        self.logger.log('MapService/DrawEditStart');
        self.selectionToolService.toggleActivateTool(true);
    };
    MapService.prototype.onDrawEditStop = function (self, e) {
        self.logger.log('MapService/DrawEditStop');
        self.selectionToolService.setAreas();
        self.selectionToolService.toggleActivateTool(false);
    };
    MapService.prototype.onDrawDeleted = function (self) {
        self.logger.log('MapService/DrawDeleted');
        self.selectionToolService.clearAll(self.map);
    };
    MapService.prototype.onLayersControlEvent = function (self) { };
    MapService.prototype.onLayerAdd = function (self, e) {
        // const name = e.layer.wmsParams.layers;
        // self.logger.log('MapService/onLayerAdd '+ name);
        //  self.logger.log(e);
        //e.layer.bringToFront();
        self.logger.logObj(e);
    };
    MapService.prototype.onOverLayAdd = function (self) { };
    MapService.prototype.onMeasureStart = function (self) { };
    MapService.prototype.onZoomStart = function (self) {
    };
    MapService.prototype.onZoomEnd = function (self) {
        this.zoomlevel.next(self.map.getZoom());
    };
    MapService.prototype.onDidUpdateLayers = function (self, e) {
        self.logger.log('MapService/onDidUpdateLayers-----' + e);
    };
    MapService.prototype.onBaselayerChange = function (self, e) {
        self.logger.log('baselayerchange');
        // in this part we manage the selection scale then we refresh the layers
        var scaleLevel = e.name;
        self.logger.log('baselayerchange ' + scaleLevel);
        if (scaleLevel !== 'OSM' && scaleLevel !== 'Satellite') {
            self.selectionToolService.clearAll(self.map);
            self.selectionScaleService.setScaleValue(scaleLevel);
            self.selectionToolService.setScaleValue(scaleLevel);
            self.layersService.setCurrentNutsLevel(scaleLevel);
        }
        // changes the actual scale
        this.selectionScaleService.changeScale();
    };
    MapService.prototype.onClickEvent = function (self, e) {
        if (self.getScaleValue() === __WEBPACK_IMPORTED_MODULE_3__shared_data_service__["d" /* hectare */]) {
            return;
        }
        if (self.selectionToolService.getPolygonDrawerState()) {
            return;
        }
        self.selectionToolService.activateClickSelectionTool();
        self.logger.log('MapService/click');
        self.selectionToolButtonStateService.enable(true); // opens the selection tools
        // automatic cursor tool selection doesn't work if polygon draw is activated
        if (!self.selectionToolService.getPolygonDrawerState()) {
            self.logger.log('self.selectionToolService.getPolygonDrawerState()');
            self.clickCursorUpdate(); // automatic cursor tool selection
        }
        // check if the selection toul is activate
        self.logger.log('MapService/Scale' + self.selectionScaleService.getScaleValue());
        if (self.selectionScaleService.getScaleValue() === __WEBPACK_IMPORTED_MODULE_3__shared_data_service__["d" /* hectare */]) {
            if (self.layersService.getIsReadyToShowFeatureInfo() === true) {
                self.getHectareGeometryFromClick(e.latlng, self.selectionScaleService.getScaleValue());
            }
        }
        else if (self.selectionScaleService.getScaleValue() === __WEBPACK_IMPORTED_MODULE_3__shared_data_service__["e" /* lau2 */]) {
            self.selectionToolService.enableNavigationService();
            self.getNutsGeometryFromLau2(e.latlng, self.selectionScaleService.getScaleValue());
        }
        else {
            self.selectionToolService.enableNavigationService();
            self.getNutsGeometryFromNuts(e.latlng, self.selectionScaleService.getScaleValue());
        }
    };
    MapService.prototype.getZoomLevel = function () {
        return this.zoomlevel;
    };
    MapService.prototype.deleteSelectedAreas = function () {
        this.selectionToolService.deleteSelectedAreas();
    };
    MapService.prototype.toggleDrawControls = function () {
        this.selectionToolService.toggleControl(this.map);
    };
    // NUTS management
    MapService.prototype.getNutsGeometryFromNuts = function (latlng, nuts_level) {
        this.logger.log('MapService/getNutsGeometryFromNuts()/');
        var current_nuts_level = this.businessInterfaceRenderService.convertNutsToApiName(nuts_level);
        var bbox = latlng.toBounds(__WEBPACK_IMPORTED_MODULE_3__shared_data_service__["_21" /* clickAccuracy */]).toBBoxString();
        bbox = bbox + '&CQL_FILTER=' + 'stat_levl_=' + current_nuts_level + ' AND ' + 'date=' + '2015' + '-01-01Z';
        var action = 'population';
        var url = __WEBPACK_IMPORTED_MODULE_3__shared_data_service__["_22" /* geoserverGetFeatureInfoUrl */]
            + action + '&STYLES&LAYERS=hotmaps:' + action + '&INFO_FORMAT=application/json&FEATURE_COUNT=50' +
            '&X=50&Y=50&SRS=EPSG:4326&WIDTH=101&HEIGHT=101&BBOX=' + bbox;
        this.logger.log('url ' + url);
        return this.getAreaFromScale(url);
    };
    // LAU management;
    MapService.prototype.getNutsGeometryFromLau2 = function (latlng, nuts_level) {
        var bbox = latlng.toBounds(__WEBPACK_IMPORTED_MODULE_3__shared_data_service__["_21" /* clickAccuracy */]).toBBoxString();
        var action = __WEBPACK_IMPORTED_MODULE_3__shared_data_service__["f" /* lau2name */];
        var url = __WEBPACK_IMPORTED_MODULE_3__shared_data_service__["_22" /* geoserverGetFeatureInfoUrl */]
            + action + '&STYLES&LAYERS=hotmaps:' + action + '&INFO_FORMAT=application/json&FEATURE_COUNT=50' +
            '&X=50&Y=50&SRS=EPSG:4326&WIDTH=101&HEIGHT=101&BBOX=' + bbox;
        this.logger.log('lau2name url' + url);
        return this.getAreaFromScale(url);
    };
    /*postHectareCentroid(payload: any): Promise<any> {
      return this.POST(payload, apiUrl + postForOneHectareCentroid);
    }*/
    MapService.prototype.getAreaFromScale = function (url) {
        var _this = this;
        return this.http.get(url).map(function (res) { return res.json(); })
            .subscribe(function (res) { return _this.selectAreaWithNuts(res); }, function (err) { return _super.prototype.handleError.call(_this, err); });
    };
    MapService.prototype.getNutsBusiness = function (scaleLevel) {
        return this.businessInterfaceRenderService.convertNutsToApiName(scaleLevel);
    };
    MapService.prototype.selectAreaWithHectare = function (areaSelected) {
        // test if polygon tool is activated in order to avoid selecting a nuts during a polygon drawing
        if (!this.selectionToolService.getPolygonDrawerState()) {
            this.logger.log('MapService/selectAreaWithNuts()');
            var areaSelectedLayer = false;
            if (this.areaNutsSelectedLayer) {
                areaSelectedLayer = true; // true if an area nuts is selected
            }
            var lng = areaSelected.coordinates[0];
            var lat = areaSelected.coordinates[1];
            var point = L.latLng(lat, lng);
            var selection_id = point;
            var layer = new L.Rectangle(point.toBounds(100));
            this.selectionToolService.addHectareToMultiSelectionLayers(layer);
        }
    };
    MapService.prototype.selectAreaWithNuts = function (areaSelected) {
        // test if polygon tool is activated in order to avoid selecting a nuts during a polygon drawing
        if (!this.selectionToolService.getPolygonDrawerState()) {
            this.logger.log('MapService/selectAreaWithNuts()');
            var areaSelectedLayer = false;
            if (this.areaNutsSelectedLayer) {
                areaSelectedLayer = true; // true if an area nuts is selected
            }
            // remove the layer if there is one
            this.removeAreaSelectedlayer();
            // create an other selection only if this is a new area or if no area is actually selected (highlighted)
            var areaNutsSelectedLayer = L.geoJSON(areaSelected);
            if (this.selectionToolService.containLayer(areaNutsSelectedLayer) == 0) {
                this.selectionToolService.removeLayerFromMultiSelectionLayers(areaNutsSelectedLayer);
            }
            else if (this.selectionToolService.containLayer(areaNutsSelectedLayer) == 1) {
                this.selectionToolService.addToMultiSelectionLayers(areaNutsSelectedLayer);
            }
            else {
                return;
            }
        }
    };
    MapService.prototype.createSelection = function () {
        // this.selectionToolService.manageEditOrCreateLayer(this.areaNutsSelectedLayer, this.map);
    };
    MapService.prototype.removeAreaSelectedlayer = function () {
        if (this.areaNutsSelectedLayer) {
            this.logger.log('MapService/removeAreaSelectedlayer');
            this.map.removeLayer(this.areaNutsSelectedLayer);
            delete this.areaNutsSelectedLayer;
            // disable buttons when layer is removed
            this.selectionToolService.setButtonClearAll(false);
            this.selectionToolService.setLoadresultButton(false);
        }
    };
    MapService.prototype.getSelectionScaleMenu = function () {
        this.selectionScaleService.getSelectionScaleMenu(this.map, this.loaderService);
    };
    MapService.prototype.showOrRemoveLayer = function (action, order) {
        this.layersService.showOrRemoveLayer(action, this.map, order);
    };
    MapService.prototype.setupMapservice = function (map) {
        this.logger.log('MapService/setupMapservice');
        // set the map to the services that needs to get an instance
        this.map = map;
        this.getSelectionScaleMenu();
        this.addLayersControl();
        this.retriveMapEvent();
        this.layersService.getLayers().addTo(this.map);
        this.cmLayerService.getLayersCM().addTo(this.map);
        this.selectionToolService.getMultiSelectionLayers().addTo(this.map);
        this.layersService.setupDefaultLayer();
    };
    MapService.prototype.addLayersControl = function () {
        var overlayMaps = {};
        var baseLayers = {
            OSM: L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                zIndex: __WEBPACK_IMPORTED_MODULE_3__shared_data_service__["_23" /* maps_order */],
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>,' +
                    ' Tiles courtesy of <a href="https://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'
            }),
            // Improvement of coding style : (with codelyzer)
            // Exceeds maximum line length of 140
            Satellite: L.tileLayer('https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}', {
                zIndex: __WEBPACK_IMPORTED_MODULE_3__shared_data_service__["_23" /* maps_order */],
                attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC,' +
                    ' USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan,'
            }),
        };
        var control = L.control.layers(baseLayers, overlayMaps, { collapsed: false });
        control.addTo(this.map);
        this.map.addLayer(baseLayers.Satellite);
    };
    MapService.prototype.checkZoomLevelLayer = function (action, zoomLevel) {
        // this.layersService.showLayerDependingZoom(action, this.map, zoomLevel);
    };
    /**
     * Activate the drawing tool
     */
    MapService.prototype.activateDrawTool = function (map, tool) {
        this.selectionToolService.activateDrawTool(map, tool);
    };
    /**
     * Activate the selection tool
     */
    MapService.prototype.clickSelection = function (map) {
        this.selectionToolService.activateClickSelectionTool();
    };
    /**
     * Load the nuts selection results
     */
    MapService.prototype.loadResultNuts = function (map) {
        this.selectionToolService.loadResultNuts(map);
    };
    /**
     * Clear the selection(s)
     */
    MapService.prototype.clearAll = function (map) {
        this.selectionToolService.clearAll(map);
        // this.cmLayerService.clearAll();
    };
    /**
     * Get the nutsSelected Subject of SelectionToolService
     */
    MapService.prototype.getNutsSelectedSubject = function () {
        return this.selectionToolService.getNutsSelectedSubject();
    };
    /**
     * Get the EnableLoadResultSubjectObs of SelectionToolService
     */
    MapService.prototype.getLoadResultbuttonState = function () {
        return this.selectionToolService.buttonLoadResultStatus;
    };
    /**
     * Get the DisbleClearAllSubjectObs of SelectionToolService
     */
    MapService.prototype.getClearAllButtonSubject = function () {
        return this.selectionToolService.buttonClearAll;
    };
    /**
     * Get the ScaleValueSubject of SelectionScaleService
     */
    MapService.prototype.getScaleValueSubject = function () {
        return this.selectionScaleService.scaleValueSubject;
    };
    /**
     * Get the ScaleValue of SelectionScaleService
     */
    MapService.prototype.getScaleValue = function () {
        return this.selectionScaleService.getScaleValue();
    };
    MapService.prototype.setLayersSubject = function () {
        var _this = this;
        var layers = [];
        this.layersService.getLayerArray().keys().map(function (layersName) {
            layers.push(layersName + _this.businessInterfaceRenderService.getNutsTosuffix(_this.selectionScaleService.getScaleValue()));
        });
        this.layerArray.next(layers);
    };
    MapService.prototype.getLayerArray = function () {
        return this.layerArray;
    };
    MapService.prototype.setLayerWithoutSuffix = function () {
        var _this = this;
        var layers = [];
        this.layersService.getLayerArray().keys().map(function (layerName) {
            layers.push(layerName.replace(_this.businessInterfaceRenderService.getNutsTosuffix(_this.selectionScaleService.getScaleValue()), ''));
        });
        return layers;
    };
    MapService.prototype.displayCustomLayerFromCM = function (directory, type) {
        this.cmLayerService.addOrRemoveLayerWithAction(directory, type, this.map);
    };
    MapService.prototype.removeCMLayer = function () {
        // this.cmLayerService.clearAll()
    };
    return MapService;
}(__WEBPACK_IMPORTED_MODULE_12__shared_services_api_service__["a" /* APIService */]));
MapService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_11__shared_services_logger_service__["a" /* Logger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__shared_services_logger_service__["a" /* Logger */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_10__shared_services_loader_service__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__shared_services_loader_service__["a" /* LoaderService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_9__shared_services_toaster_service__["a" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__shared_services_toaster_service__["a" /* ToasterService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__features_layers__["LayersService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__features_layers__["LayersService"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__features_selection_scale__["a" /* SelectionScaleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__features_selection_scale__["a" /* SelectionScaleService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__features_calculation_module_cm_layers_service__["a" /* CMLayersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__features_calculation_module_cm_layers_service__["a" /* CMLayersService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5__features_selection_tools__["a" /* SelectionToolService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__features_selection_tools__["a" /* SelectionToolService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_16__shared_helper__["a" /* Helper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_16__shared_helper__["a" /* Helper */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_2__shared_business_business_service__["a" /* BusinessInterfaceRenderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_business_business_service__["a" /* BusinessInterfaceRenderService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_15__features_selection_tools_service_selection_tool_button_state_service__["a" /* SelectionToolButtonStateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_15__features_selection_tools_service_selection_tool_button_state_service__["a" /* SelectionToolButtonStateService */]) === "function" && _l || Object])
], MapService);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
//# sourceMappingURL=map.service.js.map

/***/ }),

/***/ "../../../../../src/app/pages/nav/component/navigation-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".disabledButton{\ncolor:grey;\ncursor: initial;\n}\n\n.icon-nav>i:before {\nfont-size: 30px;\nmargin: 10px;\n}\n\n.icon-nav>i:hover{\ncolor:#2889DF;\ncursor: pointer;\n}\n\n.disabledButton:hover{\ncolor:grey !important;\ncursor: initial !important;\n}\n\n.clickedButton{\ncolor:#2889DF !important;\n}\n\n.icon-nav{\n    float: left;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/nav/component/navigation-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let button of navButtons\" class=\"icon-nav\">\n        <i class=\"{{button.iconClass}}\" title=\"{{button.title}}\" uk-tooltip=\"pos: bottom\"\n        [class.disabledButton]=\"!button.enable\"\n        [class.clickedButton]=\"button.stateOpen\"\n        (click)=\"button.enable ? toggleExpandedState(button) : null\"></i>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/nav/component/navigation-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__features_side_panel__ = __webpack_require__("../../../../../src/app/features/side-panel/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_services_interaction_service__ = __webpack_require__("../../../../../src/app/shared/services/interaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__features_selection_tools_service_selection_tool_button_state_service__ = __webpack_require__("../../../../../src/app/features/selection-tools/service/selection-tool-button-state.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__features_selection_tools_service_selection_tool_service__ = __webpack_require__("../../../../../src/app/features/selection-tools/service/selection-tool.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_map_map_service__ = __webpack_require__("../../../../../src/app/pages/map/map.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NavigationBarComponent = (function () {
    function NavigationBarComponent(interactionService, selectionToolButtonStateService, selectionToolService, mapService) {
        this.interactionService = interactionService;
        this.selectionToolButtonStateService = selectionToolButtonStateService;
        this.selectionToolService = selectionToolService;
        this.mapService = mapService;
    }
    NavigationBarComponent.prototype.ngOnInit = function () {
        // you must allow the change of states
        this.navButtons = this.interactionService.getNavButtons();
    };
    NavigationBarComponent.prototype.toggleExpandedState = function (button) {
        var functionName = button.buttonFunction;
        var isOpen = button.stateOpen;
        if (isOpen)
            this.interactionService.disableStateOpenWithFunction(functionName);
        else
            this.interactionService.enableStateOpenWithFunction(functionName);
        switch (functionName) {
            case 'left':
                if (isOpen)
                    this.interactionService.closeLeftPanel();
                else
                    this.interactionService.openLeftPanel();
                break;
            case 'right':
                if (isOpen)
                    this.interactionService.closeRightPanel();
                else
                    this.interactionService.openRightPanel();
                break;
            case 'selection':
                if (isOpen)
                    this.selectionToolButtonStateService.enable(false);
                else
                    this.selectionToolButtonStateService.enable(true);
                break;
            case 'send_mail':
                if (isOpen)
                    this.interactionService.closeTopPanel();
                else
                    this.interactionService.openTopPanel();
                break;
            case 'save':
                this.interactionService.actionSavePanel(!isOpen);
                break;
            case 'folder':
                this.interactionService.actionFolderPanel(!isOpen);
                break;
        }
    };
    return NavigationBarComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__features_side_panel__["c" /* LeftSideComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__features_side_panel__["c" /* LeftSideComponent */]) === "function" && _a || Object)
], NavigationBarComponent.prototype, "leftPanel", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__features_side_panel__["b" /* RightSideComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__features_side_panel__["b" /* RightSideComponent */]) === "function" && _b || Object)
], NavigationBarComponent.prototype, "rightPanel", void 0);
NavigationBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'htm-nav-bar',
        template: __webpack_require__("../../../../../src/app/pages/nav/component/navigation-bar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/nav/component/navigation-bar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_app_shared_services_interaction_service__["a" /* InteractionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_shared_services_interaction_service__["a" /* InteractionService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__features_selection_tools_service_selection_tool_button_state_service__["a" /* SelectionToolButtonStateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__features_selection_tools_service_selection_tool_button_state_service__["a" /* SelectionToolButtonStateService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__features_selection_tools_service_selection_tool_service__["a" /* SelectionToolService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__features_selection_tools_service_selection_tool_service__["a" /* SelectionToolService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__pages_map_map_service__["a" /* MapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__pages_map_map_service__["a" /* MapService */]) === "function" && _f || Object])
], NavigationBarComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=navigation-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/nav/service/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__navigation_bar_service__ = __webpack_require__("../../../../../src/app/pages/nav/service/navigation-bar.service.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navigation_buttons_data__ = __webpack_require__("../../../../../src/app/pages/nav/service/navigation-buttons.data.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__navigation_buttons_data__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/pages/nav/service/navigation-bar.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1____ = __webpack_require__("../../../../../src/app/pages/nav/service/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationBarService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Improvement of coding style :
// listing import lines alphabetized by the module



var NavigationBarService = (function () {
    function NavigationBarService(logger) {
        this.logger = logger;
        // Improvement of coding style :
        // place private members after public members, alphabetized
        this.properties = {};
    }
    NavigationBarService.prototype.getButtonWithId = function (id) {
        return this.getButtons().filter(function (x) { return x.id === id; })[0];
    };
    NavigationBarService.prototype.getButtonWithFunction = function (functionString) {
        return this.getButtons().filter(function (x) { return x.buttonFunction == functionString; });
    };
    NavigationBarService.prototype.enableOpenStateWithId = function (buttonid) {
        var button = this.getButtonWithId(buttonid);
        button.stateOpen = true;
    };
    NavigationBarService.prototype.disableOpenStateWithId = function (buttonid) {
        var button = this.getButtonWithId(buttonid);
        button.stateOpen = false;
    };
    NavigationBarService.prototype.enableOpenStateWithFunction = function (functionString) {
        var buttons = this.getButtonWithFunction(functionString);
        buttons.forEach(function (button) {
            button.stateOpen = true;
        });
    };
    NavigationBarService.prototype.disableOpenStateWithFunction = function (functionString) {
        var buttons = this.getButtonWithFunction(functionString);
        buttons.forEach(function (button) {
            button.stateOpen = false;
        });
    };
    NavigationBarService.prototype.enableButton = function (id) {
        var button = this.getButtonWithId(id);
        button.enable = true;
    };
    NavigationBarService.prototype.disableButton = function (id) {
        var button = this.getButtonWithId(id);
        button.enable = false;
    };
    // Disable all button depending the function string
    NavigationBarService.prototype.disableButtons = function (functionString) {
        var buttons = this.getButtons().filter(function (x) { return x.buttonFunction === functionString; });
        buttons.forEach(function (button) {
            button.enable = false;
        });
    };
    // Enable all button depending the function string
    NavigationBarService.prototype.enableButtons = function (functionString) {
        var buttons = this.getButtonWithFunction(functionString);
        buttons.forEach(function (button) {
            button.enable = true;
        });
    };
    NavigationBarService.prototype.getButtons = function () {
        return __WEBPACK_IMPORTED_MODULE_1____["a" /* navigationButtons */];
    };
    return NavigationBarService;
}());
NavigationBarService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["Logger"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["Logger"]) === "function" && _a || Object])
], NavigationBarService);

var _a;
//# sourceMappingURL=navigation-bar.service.js.map

/***/ }),

/***/ "../../../../../src/app/pages/nav/service/navigation-buttons.data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return navigationButtons; });
var navigationButtons = [
    { id: 'layers', title: 'Layers', buttonFunction: 'left', iconClass: 'flaticon-layers-1', enable: true, stateOpen: false },
    { id: 'selection', title: 'Selection tool', buttonFunction: 'selection', iconClass: 'flaticon-vector', enable: true, stateOpen: false },
    { id: 'load_result', title: 'Show results', buttonFunction: 'right', iconClass: 'flaticon-pie-chart-1', enable: false, stateOpen: false },
    { id: 'feedback', title: 'Feedback', buttonFunction: 'send_mail', iconClass: 'flaticon-send', enable: true, stateOpen: false },
    { id: 'save', title: 'Save', buttonFunction: 'save', iconClass: 'flaticon-technology-2', enable: false, stateOpen: false },
    { id: 'folder', title: 'Folder', buttonFunction: 'folder', iconClass: 'flaticon-folder-2', enable: false, stateOpen: false },
];
//# sourceMappingURL=navigation-buttons.data.js.map

/***/ }),

/***/ "../../../../../src/app/pages/searchbar/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__searchbar_component__ = __webpack_require__("../../../../../src/app/pages/searchbar/searchbar.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__searchbar_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/pages/searchbar/searchbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"search-bar\">\n    <i class=\"icon-search fa fa-search\"></i>\n    <input id=\"place-input\" class=\"on-map\" type=\"text\" placeholder=\"Go to place...\"\n        [(ngModel)]=\"address\" (keyup.enter)=\"goto()\" />\n</div>\n\n<!--<button id=\"goto\" class=\"btn btn-primary on-map\" href=\"#\" title=\"Goto Place\" (click)=\"goto()\"></button>-->"

/***/ }),

/***/ "../../../../../src/app/pages/searchbar/searchbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input {\n  width: 130px;\n  height: 30px;\n  z-index: 1;\n  font-size: 16px;\n  vertical-align: middle;\n  padding: 5px 16px;\n  color: white;\n  margin: 10px;\n  background: none;\n  border: none;\n  border-bottom: white 1px solid;\n  transition: 1s; }\n\ninput:focus {\n  width: 245px;\n  transition: 1s; }\n\n#goto {\n  margin: 0px 0 0 7px;\n  width: 30px;\n  height: 30px;\n  outline: none;\n  opacity: 1;\n  background: white; }\n\n.icon-search {\n  position: absolute;\n  top: 33%;\n  left: 12px; }\n\n.search-bar {\n  position: relative; }\n\n.fa-search::before {\n  font-size: x-small; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/searchbar/searchbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_geocoding_service__ = __webpack_require__("../../../../../src/app/shared/services/geocoding.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_map_service__ = __webpack_require__("../../../../../src/app/pages/map/map.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_logger_service__ = __webpack_require__("../../../../../src/app/shared/services/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_loader_service__ = __webpack_require__("../../../../../src/app/shared/services/loader.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchBarComponent; });
/**
 * Created by lesly on 31.05.17.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Improvement of coding style : 
// leaving one empty line between third party imports and application imports
// listing import lines alphabetized by the module





var SearchBarComponent = (function () {
    function SearchBarComponent(geocoder, mapService, logger, loaderService) {
        this.geocoder = geocoder;
        this.mapService = mapService;
        this.logger = logger;
        this.loaderService = loaderService;
        this.address = '';
    }
    // Improvement of coding style : 
    // use lower camel case to name methods 
    // this method doesn't do anything, we can delete it
    SearchBarComponent.prototype.Initialize = function () {
    };
    SearchBarComponent.prototype.ngOnInit = function () {
        this.map = this.mapService.getMap();
    };
    SearchBarComponent.prototype.goto = function () {
        var _this = this;
        this.logger.log('NavigatorComponent/goto()');
        if (!this.address) {
            return;
        }
        this.loaderService.display(true);
        this.logger.log('NavigatorComponent/goto()/this.address!=null' + this.address);
        this.geocoder.geocode(this.address)
            .subscribe(function (location) {
            _this.logger.log('location' + _this.address + ' ' + JSON.stringify(location));
            _this.map.fitBounds(location.viewBounds, {});
            _this.address = location.address;
            _this.loaderService.display(false);
        }, function (error) { return _this.loaderService.display(false); });
    };
    SearchBarComponent.prototype.searchDestinationFrom = function (address) {
        var _this = this;
        this.logger.log('NavigatorComponent/goto()');
        if (!address) {
            return;
        }
        this.loaderService.display(true);
        this.logger.log('NavigatorComponent/goto()/this.address!=null' + this.address);
        this.geocoder.geocode(address)
            .subscribe(function (location) {
            _this.map.fitBounds(location.viewBounds, {});
            _this.address = location.address;
            _this.loaderService.display(false);
        }, function (error) { return _this.loaderService.display(false); });
    };
    return SearchBarComponent;
}());
SearchBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'hmt-search-bar',
        template: __webpack_require__("../../../../../src/app/pages/searchbar/searchbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/searchbar/searchbar.component.scss")],
        providers: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_geocoding_service__["a" /* GeocodingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_geocoding_service__["a" /* GeocodingService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__map_map_service__["a" /* MapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__map_map_service__["a" /* MapService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_logger_service__["a" /* Logger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_logger_service__["a" /* Logger */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_loader_service__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_loader_service__["a" /* LoaderService */]) === "function" && _d || Object])
], SearchBarComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=searchbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/toolbar/toolbar.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<button id=\"add-marker\" class=\"btn btn-default on-map\" [class.btn-primary]=\"editing\"\n        title=\"Add markers by clicking on the map\" (click)=\"toggleEditing()\" btnCheckbox>\n  <i class=\"fa fa-map-marker\"></i>\n</button>\n\n<button id=\"remove-marker\" class=\"btn btn-default on-map\" [class.btn-primary]=\"removing\"\n        title=\"Remove markers by clicking on them\" (click)=\"toggleRemoving()\" btnCheckbox>\n  <i class=\"fa fa-trash\"></i>\n</button>\n\n<button id=\"toggle-layer\" class=\"btn btn-default on-map\" [class.btn-primary]=\"airportLayerAdded\"\n        title=\"Toggle the airport layer\" (click)=\"toggleAirPortLayer()\" btnCheckbox>\n  <i class=\"fa fa-plane\"></i>\n</button>\n\n-->\n"

/***/ }),

/***/ "../../../../../src/app/pages/toolbar/toolbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css"), "");

// module
exports.push([module.i, "#add-marker {\n  margin: 20px 0 0 370px; }\n\n#remove-marker {\n  margin: 20px 0 0 410px; }\n\n#toggle-layer {\n  margin: 20px 0 0 450px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/toolbar/toolbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map_map_service__ = __webpack_require__("../../../../../src/app/pages/map/map.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_logger_service__ = __webpack_require__("../../../../../src/app/shared/services/logger.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarComponent; });
/**
 * Created by lesly on 27.05.17.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Improvement of coding style : 
// leaving one empty line between third party imports and application imports
// listing import lines alphabetized by the module



var ToolbarComponent = (function () {
    function ToolbarComponent(mapService, logger) {
        this.mapService = mapService;
        this.logger = logger;
        this.editing = false;
        this.logger = logger;
        this.removing = false;
        this.markerCount = 0;
    }
    ToolbarComponent.prototype.ngOnInit = function () {
        this.logger.log('ToolbarComponent/ngOnInit');
        /*     this.mapService.disableMouseEvent('add-marker');
            this.mapService.disableMouseEvent('remove-marker');
            this.mapService.disableMouseEvent('toggle-layer'); */
    };
    // Improvement of coding style : 
    // use lower camel case to name methods 
    ToolbarComponent.prototype.Initialize = function () {
        this.logger.log('ToolbarComponent/Initialize');
        /*  this.mapService.map.on('click', (e: MouseEvent) => {
      
            if (this.editing) {
              this.logger.log('ToolbarComponent/click');
              let marker = L.marker(e.latlng, {
                icon: L.icon({
                  iconUrl: '../../../node_modules/leaflet/dist/images/marker-icon.png',
                  shadowUrl: '../../../node_modules/leaflet/dist/images/marker-shadow.png'
                }),
                draggable: true
              })
                .bindPopup('Marker #' + (this.markerCount + 1).toString(), {
                  offset: L.point(12, 6)
                })
                .addTo(this.mapService.map)
                .openPopup();
      
              this.markerCount += 1;
      
              marker.on('click', (event: MouseEvent) => {
                if (this.removing) {
                  this.mapService.map.removeLayer(marker);
                  this.markerCount -= 1;
                }
              });
            }
          });*/
    };
    ToolbarComponent.prototype.toggleEditing = function () {
        this.editing = !this.editing;
        if (this.editing && this.removing) {
            this.removing = false;
        }
    };
    ToolbarComponent.prototype.toggleRemoving = function () {
        this.removing = !this.removing;
        if (this.editing && this.removing) {
            this.editing = false;
        }
    };
    return ToolbarComponent;
}());
ToolbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'hmt-toolbar',
        template: __webpack_require__("../../../../../src/app/pages/toolbar/toolbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/toolbar/toolbar.component.scss")],
        providers: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__map_map_service__["a" /* MapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__map_map_service__["a" /* MapService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_logger_service__["a" /* Logger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_logger_service__["a" /* Logger */]) === "function" && _b || Object])
], ToolbarComponent);

var _a, _b;
//# sourceMappingURL=toolbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__features_user_management_recovery_recovery_component__ = __webpack_require__("../../../../../src/app/features/user-management/recovery/recovery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_map_component_map_component__ = __webpack_require__("../../../../../src/app/pages/map/component/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__features_user_management_activate_activate_component__ = __webpack_require__("../../../../../src/app/features/user-management/activate/activate.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });



var routes = [
    { path: '', redirectTo: '/map', pathMatch: 'full' },
    { path: 'map', component: __WEBPACK_IMPORTED_MODULE_1__pages_map_component_map_component__["a" /* MapComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_1__pages_map_component_map_component__["a" /* MapComponent */], children: [
            { path: ':token_activation', component: __WEBPACK_IMPORTED_MODULE_2__features_user_management_activate_activate_component__["a" /* ActivateComponent */] },
        ] },
    { path: 'recover', component: __WEBPACK_IMPORTED_MODULE_1__pages_map_component_map_component__["a" /* MapComponent */], children: [
            { path: ':token_recover', component: __WEBPACK_IMPORTED_MODULE_0__features_user_management_recovery_recovery_component__["a" /* RecoveryComponent */] },
        ] },
];
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ "../../../../../src/app/shared/business/NutsRenderClass.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__business_class__ = __webpack_require__("../../../../../src/app/shared/business/business.class.ts");
/* unused harmony export NutsRenderClass */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var NutsRenderClass = (function (_super) {
    __extends(NutsRenderClass, _super);
    function NutsRenderClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NutsRenderClass;
}(__WEBPACK_IMPORTED_MODULE_0__business_class__["a" /* BusinessInterfaceRenderClass */]));

//# sourceMappingURL=NutsRenderClass.js.map

/***/ }),

/***/ "../../../../../src/app/shared/business/business.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessInterfaceRenderClass; });
/**
 * Created by lesly on 11.07.17.
 */
var BusinessInterfaceRenderClass = (function () {
    function BusinessInterfaceRenderClass() {
    }
    return BusinessInterfaceRenderClass;
}());

//# sourceMappingURL=business.class.js.map

/***/ }),

/***/ "../../../../../src/app/shared/business/business.data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessInterfaceRenderArray; });
var heat_tot_curr_density = 'heat_tot_curr_density';
var gfa_tot_curr_density = 'gfa_tot_curr_density';
var gfa_res_curr_density = 'gfa_res_curr_density';
var gfa_nonres_curr_density = 'gfa_nonres_curr_density';
var heat_res_curr_density = 'heat_res_curr_density';
var heat_nonres_curr_density = 'heat_nonres_curr_density';
var solar_optimal_total = 'solar_optimal_total';
var vol_tot_curr_density = 'vol_tot_curr_density';
var vol_res_curr_density = 'vol_res_curr_density';
var cool_tot_curr_density = 'cool_tot_curr_density';
var vol_nonres_curr_density = 'vol_nonres_curr_density';
var pop_tot_curr_density = 'pop_tot_curr_density';
var wwtp_capacity = 'wwtp_capacity';
var wwtp_power = 'wwtp_power';
var potential_forest = 'potential_forest';
var livestock_effluents_view = 'livestock_effluents_view';
var potential_municipal_solid_waste = 'potential_municipal_solid_waste';
var output_wind_speed = 'output_wind_speed';
var wind_50m = 'wind_50m';
var potential_potential_shallowgeothermal = 'shallow_geothermal_potential';
var yearly_co2_emission = 'yearly_co2_emission';
var hdd_curr = 'hdd_curr';
var cdd_curr = 'cdd_curr';
var land_surface_temperature = 'land_surface_temperature';
var agricultural_residues_view = 'agricultural_residues_view';
var solar_radiation = 'solar_radiation';
var BusinessInterfaceRenderArray = [
    // Buildings
    { id: 17, api_name: heat_tot_curr_density + '_consumption', business_name: 'Heat demand total' },
    { id: 17, api_name: heat_tot_curr_density + '_count_cell', business_name: 'Counted Cells' },
    { id: 17, api_name: heat_tot_curr_density + '_consumption_min', business_name: 'Heat density min' },
    { id: 17, api_name: heat_tot_curr_density + '_consumption_max', business_name: 'Heat density max' },
    { id: 17, api_name: heat_tot_curr_density + '_density', business_name: 'Average heat density' },
    { id: 17, api_name: heat_tot_curr_density + '_' + heat_tot_curr_density + '_per_' + pop_tot_curr_density, business_name: 'Heat demand per person' },
    { id: 17, api_name: heat_res_curr_density + '_consumption', business_name: 'Heat demand total' },
    { id: 17, api_name: heat_res_curr_density + '_count_cell', business_name: 'Counted Cells' },
    { id: 17, api_name: heat_res_curr_density + '_density', business_name: 'Average heat density' },
    { id: 17, api_name: heat_res_curr_density + '_' + heat_res_curr_density + '_per_' + pop_tot_curr_density, business_name: 'Heat demand per person' },
    { id: 17, api_name: heat_nonres_curr_density + '_consumption', business_name: 'Heat demand total' },
    { id: 17, api_name: heat_nonres_curr_density + '_count_cell', business_name: 'Counted Cells' },
    { id: 17, api_name: heat_nonres_curr_density + '_density', business_name: 'Average heat density' },
    { id: 17, api_name: heat_nonres_curr_density + '_' + heat_nonres_curr_density + '_per_' + pop_tot_curr_density, business_name: 'Heat demand per person' },
    { id: 17, api_name: cool_tot_curr_density + '_consumption', business_name: 'Theoretical cooling needs total' },
    { id: 17, api_name: cool_tot_curr_density + '_count_cell', business_name: 'Counted Cells' },
    { id: 17, api_name: cool_tot_curr_density + '_consumption_min', business_name: 'Cooling density min' },
    { id: 17, api_name: cool_tot_curr_density + '_consumption_max', business_name: 'Cooling density max' },
    { id: 17, api_name: cool_tot_curr_density + '_density', business_name: 'Average cooling density' },
    { id: 17, api_name: cool_tot_curr_density + '_' + cool_tot_curr_density + '_per_' + pop_tot_curr_density, business_name: 'Theoretical cooling needs per person' },
    ////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Gross floor Area
    { id: 175, api_name: gfa_tot_curr_density + '_total', business_name: 'Gross floor area' },
    { id: 176, api_name: gfa_tot_curr_density + '_density', business_name: 'Gross floor area density' },
    { id: 177, api_name: gfa_tot_curr_density + '_count_cell', business_name: 'Counted cells' },
    { id: 17, api_name: gfa_tot_curr_density + '_' + gfa_tot_curr_density + '_per_' + pop_tot_curr_density, business_name: 'GFA per person' },
    { id: 175, api_name: gfa_res_curr_density + '_total', business_name: 'Gross floor area' },
    { id: 176, api_name: gfa_res_curr_density + '_density', business_name: 'Gross floor area density' },
    { id: 177, api_name: gfa_res_curr_density + '_count_cell', business_name: 'Counted cells' },
    { id: 17, api_name: gfa_res_curr_density + '_' + gfa_res_curr_density + '_per_' + pop_tot_curr_density, business_name: 'GFA per person' },
    { id: 175, api_name: gfa_nonres_curr_density + '_total', business_name: 'Gross floor area' },
    { id: 176, api_name: gfa_nonres_curr_density + '_density', business_name: 'Gross floor area density' },
    { id: 177, api_name: gfa_nonres_curr_density + '_count_cell', business_name: 'Counted cells' },
    { id: 17, api_name: gfa_nonres_curr_density + '_' + gfa_nonres_curr_density + '_per_' + pop_tot_curr_density, business_name: 'GFA per person' },
    //////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Building volume
    { id: 175, api_name: vol_tot_curr_density + '_total', business_name: 'Building volume' },
    { id: 176, api_name: vol_tot_curr_density + '_density', business_name: 'Building volume density' },
    { id: 177, api_name: vol_tot_curr_density + '_count_cell', business_name: 'Counted cells' },
    { id: 17, api_name: vol_tot_curr_density + '_' + vol_tot_curr_density + '_per_' + pop_tot_curr_density, business_name: 'Building volume per person' },
    { id: 175, api_name: vol_res_curr_density + '_total', business_name: 'Building volume' },
    { id: 176, api_name: vol_res_curr_density + '_density', business_name: 'Building volume density' },
    { id: 177, api_name: vol_res_curr_density + '_count_cell', business_name: 'Counted cells' },
    { id: 17, api_name: vol_res_curr_density + '_' + vol_res_curr_density + '_per_' + pop_tot_curr_density, business_name: 'Building volume per person' },
    { id: 175, api_name: vol_nonres_curr_density + '_total', business_name: 'Building volume' },
    { id: 176, api_name: vol_nonres_curr_density + '_density', business_name: 'Building volume density' },
    { id: 177, api_name: vol_nonres_curr_density + '_count_cell', business_name: 'Counted cells' },
    { id: 17, api_name: vol_nonres_curr_density + '_' + vol_nonres_curr_density + '_per_' + pop_tot_curr_density, business_name: 'Building volume per person' },
    ////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Industry
    { id: 178, api_name: 'industrial_database_emissions_value', business_name: 'CO₂ emissions of energy intensive industries' },
    { id: 178, api_name: 'industrial_database_excess_heat_value1', business_name: 'excess heat potential [100°C - 200°C]' },
    { id: 178, api_name: 'industrial_database_excess_heat_value2', business_name: 'excess heat potential [200°C - 500°C]' },
    { id: 178, api_name: 'industrial_database_excess_heat_value3', business_name: 'excess heat potential [ > 500°C]' },
    { id: 178, api_name: 'industrial_database_excess_heat_total', business_name: 'Total excess heat potential of energy-intensive industries' },
    ////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Population
    { id: 179, api_name: pop_tot_curr_density + '_population', business_name: 'Total population' },
    { id: 179, api_name: pop_tot_curr_density + '_density', business_name: 'Average population density' },
    { id: 179, api_name: pop_tot_curr_density + '_count_cell', business_name: 'Counted cells' },
    ////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Potentials
    { id: 176, api_name: wwtp_capacity + '_capacity', business_name: 'Waste water treatment capacity' },
    { id: 176, api_name: wwtp_power + '_power', business_name: 'Average excess heat power from waste water treatment' },
    { id: 176, api_name: solar_optimal_total + '_average', business_name: 'Average solar radiation' },
    { id: 176, api_name: solar_optimal_total + '_min', business_name: 'Minimum solar radiation' },
    { id: 176, api_name: solar_optimal_total + '_max', business_name: 'Maximum solar radiation' },
    { id: 176, api_name: solar_optimal_total + '_cells', business_name: 'Counted cells' },
    { id: 176, api_name: solar_optimal_total + '_potential_5_percent', business_name: 'Restricted solar thermal potential estimate (5%)' },
    { id: 176, api_name: wind_50m + '_average', business_name: 'Average wind speed' },
    { id: 176, api_name: wind_50m + '_min', business_name: 'Minimum wind speed' },
    { id: 176, api_name: wind_50m + '_max', business_name: 'Maximum wind speed' },
    { id: 176, api_name: wind_50m + '_cells', business_name: 'Counted cells' },
    { id: 175, api_name: potential_potential_shallowgeothermal + '_value', business_name: 'Average heat conductivity' },
    { id: 176, api_name: potential_municipal_solid_waste + '_val', business_name: 'Potential from Waste - maximum resolution: NUTS3' },
    { id: 176, api_name: agricultural_residues_view + '_NUTS_potential', business_name: 'Potential from agricultural residues - maximum resolution: NUTS3' },
    { id: 176, api_name: agricultural_residues_view + '_agriculture_pp', business_name: 'Potential from agricultural residues per capita' },
    { id: 176, api_name: livestock_effluents_view + '_NUTS_potential', business_name: 'Potential from livestock effluents - maximum resolution: NUTS3' },
    { id: 176, api_name: livestock_effluents_view + '_livestock_effluents_pp', business_name: 'Potential from livestock_effluents_view per capita' },
    { id: 176, api_name: potential_forest + '_average', business_name: 'Average potential from forest resdiues' },
    { id: 176, api_name: potential_forest + '_value', business_name: 'Potential from forest resdiues' },
    { id: 176, api_name: potential_forest + '_cells', business_name: 'Counted cells' },
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Climate
    { id: 175, api_name: cdd_curr + '_average', business_name: 'Average CDD' },
    { id: 176, api_name: cdd_curr + '_max', business_name: 'Maximum CDD' },
    { id: 176, api_name: cdd_curr + '_min', business_name: 'Minimum CDD' },
    { id: 177, api_name: cdd_curr + '_cells', business_name: 'Counted cells' },
    { id: 175, api_name: hdd_curr + '_average', business_name: 'Average HDD' },
    { id: 176, api_name: hdd_curr + '_max', business_name: 'Maximum HDD' },
    { id: 176, api_name: hdd_curr + '_min', business_name: 'Minimum HDD' },
    { id: 177, api_name: hdd_curr + '_cells', business_name: 'Counted cells' },
    { id: 175, api_name: land_surface_temperature + '_average', business_name: 'Average Temperature' },
    { id: 176, api_name: land_surface_temperature + '_maximum', business_name: 'Maximum Temperature' },
    { id: 176, api_name: land_surface_temperature + '_minimum', business_name: 'Minimum Temperature' },
    { id: 177, api_name: land_surface_temperature + '_cells', business_name: 'Counted cells' },
    { id: 176, api_name: solar_radiation + '_average', business_name: 'Average solar radiation' },
    { id: 176, api_name: solar_radiation + '_min', business_name: 'Minimum solar radiation' },
    { id: 176, api_name: solar_radiation + '_max', business_name: 'Maximum solar radiation' },
    { id: 176, api_name: solar_radiation + '_cells', business_name: 'Counted cells' },
    { id: 176, api_name: solar_radiation + '_total_radiation', business_name: 'Total radiation on surface' },
    { id: 176, api_name: output_wind_speed + '_average', business_name: 'Average wind speed' },
    { id: 176, api_name: output_wind_speed + '_min', business_name: 'Minimum wind speed' },
    { id: 176, api_name: output_wind_speed + '_max', business_name: 'Maximum wind speed' },
    { id: 176, api_name: output_wind_speed + '_cells', business_name: 'Counted cells' },
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Electricity
    { id: 176, api_name: yearly_co2_emission + '_density', business_name: 'Average CO2 emissions on NUTS0' },
];
//# sourceMappingURL=business.data.js.map

/***/ }),

/***/ "../../../../../src/app/shared/business/business.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__business_data__ = __webpack_require__("../../../../../src/app/shared/business/business.data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nuts_data__ = __webpack_require__("../../../../../src/app/shared/business/nuts.data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helper__ = __webpack_require__("../../../../../src/app/shared/helper.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessInterfaceRenderService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BusinessInterfaceRenderService = (function () {
    function BusinessInterfaceRenderService(helper) {
        this.helper = helper;
    }
    BusinessInterfaceRenderService.prototype.getReadableName = function (name) {
        var business = this.getBusiness().filter(function (x) { return x.api_name === name; })[0];
        if (this.helper.isNullOrUndefined(business)) {
            return name;
        }
        return business.business_name;
    };
    // transform Nuts Value to readable name for the API
    BusinessInterfaceRenderService.prototype.convertNutsToApiName = function (name) {
        var business = this.getNuts().filter(function (x) { return x.business_name === name; })[0];
        if (this.helper.isNullOrUndefined(business)) {
            return name;
        }
        return business.api_name;
    };
    BusinessInterfaceRenderService.prototype.getNutsTosuffix = function (name) {
        var business = this.getNuts().filter(function (x) { return x.business_name === name; })[0];
        if (this.helper.isNullOrUndefined(business)) {
            return name;
        }
        return business.suffix;
    };
    BusinessInterfaceRenderService.prototype.getBusiness = function () {
        return __WEBPACK_IMPORTED_MODULE_1__business_data__["a" /* BusinessInterfaceRenderArray */];
    };
    BusinessInterfaceRenderService.prototype.getNuts = function () {
        return __WEBPACK_IMPORTED_MODULE_2__nuts_data__["a" /* NutsRenderArray */];
    };
    return BusinessInterfaceRenderService;
}());
BusinessInterfaceRenderService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__helper__["a" /* Helper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__helper__["a" /* Helper */]) === "function" && _a || Object])
], BusinessInterfaceRenderService);

var _a;
//# sourceMappingURL=business.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/business/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__business_class__ = __webpack_require__("../../../../../src/app/shared/business/business.class.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__business_data__ = __webpack_require__("../../../../../src/app/shared/business/business.data.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__business_service__ = __webpack_require__("../../../../../src/app/shared/business/business.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__business_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nuts_data__ = __webpack_require__("../../../../../src/app/shared/business/nuts.data.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__nuts_data__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__NutsRenderClass__ = __webpack_require__("../../../../../src/app/shared/business/NutsRenderClass.ts");
/* unused harmony namespace reexport */





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/business/nuts.data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NutsRenderArray; });

var NutsRenderArray = [
    { id: 0, api_name: '0', business_name: __WEBPACK_IMPORTED_MODULE_0__data_service__["n" /* nuts0 */], suffix: '' },
    { id: 1, api_name: '1', business_name: __WEBPACK_IMPORTED_MODULE_0__data_service__["o" /* nuts1 */], suffix: '' },
    { id: 2, api_name: '2', business_name: __WEBPACK_IMPORTED_MODULE_0__data_service__["p" /* nuts2 */], suffix: '' },
    { id: 3, api_name: '3', business_name: __WEBPACK_IMPORTED_MODULE_0__data_service__["q" /* nuts3 */], suffix: '' },
    { id: 4, api_name: '4', business_name: __WEBPACK_IMPORTED_MODULE_0__data_service__["e" /* lau2 */], suffix: '' },
    { id: 5, api_name: '-1', business_name: __WEBPACK_IMPORTED_MODULE_0__data_service__["d" /* hectare */], suffix: '' },
];
//# sourceMappingURL=nuts.data.js.map

/***/ }),

/***/ "../../../../../src/app/shared/class/dictionary.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dictionary; });
var Dictionary = (function () {
    function Dictionary(init) {
        this._keys = [];
        this._values = [];
        for (var x = 0; x < init.length; x++) {
            this[init[x].key] = init[x].value;
            this._keys.push(init[x].key);
            this._values.push(init[x].value);
        }
    }
    Dictionary.prototype.add = function (key, value) {
        this[key] = value;
        this._keys.push(key);
        this._values.push(value);
    };
    Dictionary.prototype.value = function (key) {
        var index = this._keys.indexOf(key, 0);
        return this._values[index];
    };
    Dictionary.prototype.remove = function (key) {
        var index = this._keys.indexOf(key, 0);
        this._keys.splice(index, 1);
        this._values.splice(index, 1);
        delete this[key];
    };
    Dictionary.prototype.keys = function () {
        return this._keys;
    };
    Dictionary.prototype.containsKey = function (key) {
        if (typeof this[key] === 'undefined') {
            return false;
        }
        return true;
    };
    return Dictionary;
}());

//# sourceMappingURL=dictionary.class.js.map

/***/ }),

/***/ "../../../../../src/app/shared/class/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__location__ = __webpack_require__("../../../../../src/app/shared/class/location/index.ts");
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__location__, "UppercaseFirstLetterPipe")) __webpack_require__.d(__webpack_exports__, "UppercaseFirstLetterPipe", function() { return __WEBPACK_IMPORTED_MODULE_0__location__["UppercaseFirstLetterPipe"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__location__, "NumberFormatPipe")) __webpack_require__.d(__webpack_exports__, "NumberFormatPipe", function() { return __WEBPACK_IMPORTED_MODULE_0__location__["NumberFormatPipe"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__location__, "LayerNamePipe")) __webpack_require__.d(__webpack_exports__, "LayerNamePipe", function() { return __WEBPACK_IMPORTED_MODULE_0__location__["LayerNamePipe"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__location__, "BusinessNamePipe")) __webpack_require__.d(__webpack_exports__, "BusinessNamePipe", function() { return __WEBPACK_IMPORTED_MODULE_0__location__["BusinessNamePipe"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__location__, "GeocodingService")) __webpack_require__.d(__webpack_exports__, "GeocodingService", function() { return __WEBPACK_IMPORTED_MODULE_0__location__["GeocodingService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__location__, "Logger")) __webpack_require__.d(__webpack_exports__, "Logger", function() { return __WEBPACK_IMPORTED_MODULE_0__location__["Logger"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__location__, "LoaderService")) __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return __WEBPACK_IMPORTED_MODULE_0__location__["LoaderService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__location__, "ToasterService")) __webpack_require__.d(__webpack_exports__, "ToasterService", function() { return __WEBPACK_IMPORTED_MODULE_0__location__["ToasterService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__location__, "GlobalErrorHandler")) __webpack_require__.d(__webpack_exports__, "GlobalErrorHandler", function() { return __WEBPACK_IMPORTED_MODULE_0__location__["GlobalErrorHandler"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__location__, "Helper")) __webpack_require__.d(__webpack_exports__, "Helper", function() { return __WEBPACK_IMPORTED_MODULE_0__location__["Helper"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__location__, "Dictionary")) __webpack_require__.d(__webpack_exports__, "Dictionary", function() { return __WEBPACK_IMPORTED_MODULE_0__location__["Dictionary"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__location__, "apiUrl")) __webpack_require__.d(__webpack_exports__, "apiUrl", function() { return __WEBPACK_IMPORTED_MODULE_0__location__["apiUrl"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__location__, "cm_layers_order")) __webpack_require__.d(__webpack_exports__, "cm_layers_order", function() { return __WEBPACK_IMPORTED_MODULE_0__location__["cm_layers_order"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__location__, "default_color_shpfile")) __webpack_require__.d(__webpack_exports__, "default_color_shpfile", function() { return __WEBPACK_IMPORTED_MODULE_0__location__["default_color_shpfile"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__location__, "default_fillColor_shpfile")) __webpack_require__.d(__webpack_exports__, "default_fillColor_shpfile", function() { return __WEBPACK_IMPORTED_MODULE_0__location__["default_fillColor_shpfile"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__location__, "default_fillOpacity_shpfile")) __webpack_require__.d(__webpack_exports__, "default_fillOpacity_shpfile", function() { return __WEBPACK_IMPORTED_MODULE_0__location__["default_fillOpacity_shpfile"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__location__, "raster_type_name")) __webpack_require__.d(__webpack_exports__, "raster_type_name", function() { return __WEBPACK_IMPORTED_MODULE_0__location__["raster_type_name"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__location__, "vector_type_name")) __webpack_require__.d(__webpack_exports__, "vector_type_name", function() { return __WEBPACK_IMPORTED_MODULE_0__location__["vector_type_name"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__location__, "APIService")) __webpack_require__.d(__webpack_exports__, "APIService", function() { return __WEBPACK_IMPORTED_MODULE_0__location__["APIService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__location__, "lau2name")) __webpack_require__.d(__webpack_exports__, "lau2name", function() { return __WEBPACK_IMPORTED_MODULE_0__location__["lau2name"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__location__, "geoserverUrl")) __webpack_require__.d(__webpack_exports__, "geoserverUrl", function() { return __WEBPACK_IMPORTED_MODULE_0__location__["geoserverUrl"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__location__, "proj3035")) __webpack_require__.d(__webpack_exports__, "proj3035", function() { return __WEBPACK_IMPORTED_MODULE_0__location__["proj3035"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__location__, "hectare")) __webpack_require__.d(__webpack_exports__, "hectare", function() { return __WEBPACK_IMPORTED_MODULE_0__location__["hectare"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__location__, "heatloadprofile")) __webpack_require__.d(__webpack_exports__, "heatloadprofile", function() { return __WEBPACK_IMPORTED_MODULE_0__location__["heatloadprofile"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__location__, "buttons_heat_load")) __webpack_require__.d(__webpack_exports__, "buttons_heat_load", function() { return __WEBPACK_IMPORTED_MODULE_0__location__["buttons_heat_load"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__location__, "heat_load_api_day")) __webpack_require__.d(__webpack_exports__, "heat_load_api_day", function() { return __WEBPACK_IMPORTED_MODULE_0__location__["heat_load_api_day"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__location__, "heat_load_api_month")) __webpack_require__.d(__webpack_exports__, "heat_load_api_month", function() { return __WEBPACK_IMPORTED_MODULE_0__location__["heat_load_api_month"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__location__, "heat_load_api_year")) __webpack_require__.d(__webpack_exports__, "heat_load_api_year", function() { return __WEBPACK_IMPORTED_MODULE_0__location__["heat_load_api_year"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__location__, "leftPanelSize")) __webpack_require__.d(__webpack_exports__, "leftPanelSize", function() { return __WEBPACK_IMPORTED_MODULE_0__location__["leftPanelSize"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__location__, "rightPanelSize")) __webpack_require__.d(__webpack_exports__, "rightPanelSize", function() { return __WEBPACK_IMPORTED_MODULE_0__location__["rightPanelSize"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dictionary_class__ = __webpack_require__("../../../../../src/app/shared/class/dictionary.class.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "Dictionary", function() { return __WEBPACK_IMPORTED_MODULE_1__dictionary_class__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/class/location/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__latLng_interface__ = __webpack_require__("../../../../../src/app/shared/class/location/latLng.interface.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__latLng_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__latLng_interface__);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__latLng_interface__, "UppercaseFirstLetterPipe")) __webpack_require__.d(__webpack_exports__, "UppercaseFirstLetterPipe", function() { return __WEBPACK_IMPORTED_MODULE_0__latLng_interface__["UppercaseFirstLetterPipe"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__latLng_interface__, "NumberFormatPipe")) __webpack_require__.d(__webpack_exports__, "NumberFormatPipe", function() { return __WEBPACK_IMPORTED_MODULE_0__latLng_interface__["NumberFormatPipe"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__latLng_interface__, "LayerNamePipe")) __webpack_require__.d(__webpack_exports__, "LayerNamePipe", function() { return __WEBPACK_IMPORTED_MODULE_0__latLng_interface__["LayerNamePipe"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__latLng_interface__, "BusinessNamePipe")) __webpack_require__.d(__webpack_exports__, "BusinessNamePipe", function() { return __WEBPACK_IMPORTED_MODULE_0__latLng_interface__["BusinessNamePipe"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__latLng_interface__, "GeocodingService")) __webpack_require__.d(__webpack_exports__, "GeocodingService", function() { return __WEBPACK_IMPORTED_MODULE_0__latLng_interface__["GeocodingService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__latLng_interface__, "Logger")) __webpack_require__.d(__webpack_exports__, "Logger", function() { return __WEBPACK_IMPORTED_MODULE_0__latLng_interface__["Logger"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__latLng_interface__, "LoaderService")) __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return __WEBPACK_IMPORTED_MODULE_0__latLng_interface__["LoaderService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__latLng_interface__, "ToasterService")) __webpack_require__.d(__webpack_exports__, "ToasterService", function() { return __WEBPACK_IMPORTED_MODULE_0__latLng_interface__["ToasterService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__latLng_interface__, "GlobalErrorHandler")) __webpack_require__.d(__webpack_exports__, "GlobalErrorHandler", function() { return __WEBPACK_IMPORTED_MODULE_0__latLng_interface__["GlobalErrorHandler"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__latLng_interface__, "Helper")) __webpack_require__.d(__webpack_exports__, "Helper", function() { return __WEBPACK_IMPORTED_MODULE_0__latLng_interface__["Helper"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__latLng_interface__, "Dictionary")) __webpack_require__.d(__webpack_exports__, "Dictionary", function() { return __WEBPACK_IMPORTED_MODULE_0__latLng_interface__["Dictionary"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__latLng_interface__, "apiUrl")) __webpack_require__.d(__webpack_exports__, "apiUrl", function() { return __WEBPACK_IMPORTED_MODULE_0__latLng_interface__["apiUrl"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__latLng_interface__, "cm_layers_order")) __webpack_require__.d(__webpack_exports__, "cm_layers_order", function() { return __WEBPACK_IMPORTED_MODULE_0__latLng_interface__["cm_layers_order"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__latLng_interface__, "default_color_shpfile")) __webpack_require__.d(__webpack_exports__, "default_color_shpfile", function() { return __WEBPACK_IMPORTED_MODULE_0__latLng_interface__["default_color_shpfile"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__latLng_interface__, "default_fillColor_shpfile")) __webpack_require__.d(__webpack_exports__, "default_fillColor_shpfile", function() { return __WEBPACK_IMPORTED_MODULE_0__latLng_interface__["default_fillColor_shpfile"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__latLng_interface__, "default_fillOpacity_shpfile")) __webpack_require__.d(__webpack_exports__, "default_fillOpacity_shpfile", function() { return __WEBPACK_IMPORTED_MODULE_0__latLng_interface__["default_fillOpacity_shpfile"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__latLng_interface__, "raster_type_name")) __webpack_require__.d(__webpack_exports__, "raster_type_name", function() { return __WEBPACK_IMPORTED_MODULE_0__latLng_interface__["raster_type_name"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__latLng_interface__, "vector_type_name")) __webpack_require__.d(__webpack_exports__, "vector_type_name", function() { return __WEBPACK_IMPORTED_MODULE_0__latLng_interface__["vector_type_name"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__latLng_interface__, "APIService")) __webpack_require__.d(__webpack_exports__, "APIService", function() { return __WEBPACK_IMPORTED_MODULE_0__latLng_interface__["APIService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__latLng_interface__, "lau2name")) __webpack_require__.d(__webpack_exports__, "lau2name", function() { return __WEBPACK_IMPORTED_MODULE_0__latLng_interface__["lau2name"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__latLng_interface__, "geoserverUrl")) __webpack_require__.d(__webpack_exports__, "geoserverUrl", function() { return __WEBPACK_IMPORTED_MODULE_0__latLng_interface__["geoserverUrl"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__latLng_interface__, "proj3035")) __webpack_require__.d(__webpack_exports__, "proj3035", function() { return __WEBPACK_IMPORTED_MODULE_0__latLng_interface__["proj3035"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__latLng_interface__, "hectare")) __webpack_require__.d(__webpack_exports__, "hectare", function() { return __WEBPACK_IMPORTED_MODULE_0__latLng_interface__["hectare"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__latLng_interface__, "heatloadprofile")) __webpack_require__.d(__webpack_exports__, "heatloadprofile", function() { return __WEBPACK_IMPORTED_MODULE_0__latLng_interface__["heatloadprofile"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__latLng_interface__, "buttons_heat_load")) __webpack_require__.d(__webpack_exports__, "buttons_heat_load", function() { return __WEBPACK_IMPORTED_MODULE_0__latLng_interface__["buttons_heat_load"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__latLng_interface__, "heat_load_api_day")) __webpack_require__.d(__webpack_exports__, "heat_load_api_day", function() { return __WEBPACK_IMPORTED_MODULE_0__latLng_interface__["heat_load_api_day"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__latLng_interface__, "heat_load_api_month")) __webpack_require__.d(__webpack_exports__, "heat_load_api_month", function() { return __WEBPACK_IMPORTED_MODULE_0__latLng_interface__["heat_load_api_month"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__latLng_interface__, "heat_load_api_year")) __webpack_require__.d(__webpack_exports__, "heat_load_api_year", function() { return __WEBPACK_IMPORTED_MODULE_0__latLng_interface__["heat_load_api_year"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__latLng_interface__, "leftPanelSize")) __webpack_require__.d(__webpack_exports__, "leftPanelSize", function() { return __WEBPACK_IMPORTED_MODULE_0__latLng_interface__["leftPanelSize"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__latLng_interface__, "rightPanelSize")) __webpack_require__.d(__webpack_exports__, "rightPanelSize", function() { return __WEBPACK_IMPORTED_MODULE_0__latLng_interface__["rightPanelSize"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__location__ = __webpack_require__("../../../../../src/app/shared/class/location/location.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__location_class__ = __webpack_require__("../../../../../src/app/shared/class/location/location.class.ts");
/* unused harmony namespace reexport */



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/class/location/latLng.interface.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=latLng.interface.js.map

/***/ }),

/***/ "../../../../../src/app/shared/class/location/location.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationClass; });
var LocationClass = (function () {
    function LocationClass() {
    }
    return LocationClass;
}());

//# sourceMappingURL=location.class.js.map

/***/ }),

/***/ "../../../../../src/app/shared/class/location/location.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Location */
/**
 * Created by lesly on 11.07.17.
 */
var Location = (function () {
    function Location() {
    }
    return Location;
}());

//# sourceMappingURL=location.js.map

/***/ }),

/***/ "../../../../../src/app/shared/class/month.data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MONTHNAME; });
var MONTHNAME = [
    { id: 1, month: 'January' },
    { id: 2, month: 'February' },
    { id: 3, month: 'March' },
    { id: 4, month: 'April' },
    { id: 5, month: 'May' },
    { id: 6, month: 'June' },
    { id: 7, month: 'July' },
    { id: 8, month: 'August' },
    { id: 9, month: 'September' },
    { id: 10, month: 'October' },
    { id: 11, month: 'November' },
    { id: 12, month: 'December' }
];
//# sourceMappingURL=month.data.js.map

/***/ }),

/***/ "../../../../../src/app/shared/component/waiting-status.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WaitingStatusComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WaitingStatusComponent = (function () {
    function WaitingStatusComponent() {
        this.waitingStatus = false;
    }
    WaitingStatusComponent.prototype.setWaitingStatus = function (value) {
        this.waitingStatus = value;
    };
    return WaitingStatusComponent;
}());
WaitingStatusComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({})
], WaitingStatusComponent);

//# sourceMappingURL=waiting-status.js.map

/***/ }),

/***/ "../../../../../src/app/shared/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_map_basemap__ = __webpack_require__("../../../../../src/app/pages/map/basemap.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_leaflet_draw__ = __webpack_require__("../../../../leaflet-draw/dist/leaflet.draw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_leaflet_draw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_leaflet_draw__);
/* unused harmony export geoserverProdUrl_old */
/* unused harmony export geoserverProdUrl_old2 */
/* unused harmony export geoserverProdUrl */
/* unused harmony export geoserverDevUrl */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return geocodeUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return geoserverUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return getIpUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return getLocationFromIp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return apiUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return defaultLayer; });
/* unused harmony export styleNameHeat */
/* unused harmony export heat_type */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return defaultLayerType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return idDefaultLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_0", function() { return wwtpLayerName; });
/* unused harmony export urlTaigaFeedback */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_28", function() { return urlLegend; });
/* unused harmony export timeOutAjaxRequest */
/* unused harmony export unit_heatload_profil */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return formatImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_22", function() { return geoserverGetFeatureInfoUrl; });
/* unused harmony export nuts_level */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_1", function() { return populationLayerName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return postStatsLayersHectares; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X", function() { return postStatsPersonalLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V", function() { return postStatsLayersNutsLau; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return postHeatLoadProfileHectares; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return postHeatLoadProfileNutsLau; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return postDurationCurveHectares; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return postDurationCurveNutsLau; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return getElectricityMixFromNuts0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return user_endpoint; });
/* unused harmony export upload_endpoint */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return post_user_register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return post_user_register_activate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return post_user_recovery_ask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return post_user_recovery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return post_user_logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return post_user_login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return get_userinformation_endpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return get_userupdateprofile_endpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return get_diskspace_endpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return get_filelist_endpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_38", function() { return heatloadprofile; });
/* unused harmony export Durationcurve */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_45", function() { return energy_mix_title; });
/* unused harmony export set404url */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return proj3035; });
/* unused harmony export proj4326 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_40", function() { return heat_load_api_day; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_42", function() { return heat_load_api_year; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_41", function() { return heat_load_api_month; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_39", function() { return buttons_heat_load; });
/* unused harmony export default_drop_down_button */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return calculation_module_category; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return raster_type_name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return vector_type_name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return summay_drop_down_buttons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return industry_layer_order; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return scale_layer_order; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return cm_layers_order; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return layers_order; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_23", function() { return maps_order; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return timeOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_21", function() { return clickAccuracy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return zoomLevelDetectChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return constant_year; });
/* unused harmony export constant_year_sp_wwtp */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_35", function() { return constant_year_duration_curve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_4", function() { return business_name_wwtp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_27", function() { return business_name_population; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_5", function() { return unit_capacity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_3", function() { return unit_heat_density; });
/* unused harmony export unit_shape_area */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_2", function() { return unit_population; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return round_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_6", function() { return defaultZoomLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_24", function() { return map_options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return lau2name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return nuts0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return nuts1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return nuts2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return nuts3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return lau2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hectare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return initial_scale_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_16", function() { return MAPDRAWEDITED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_17", function() { return MAPDRAWSTART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_20", function() { return MAPDRAWDELETED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_19", function() { return MAPDRAWEDITSTOP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_18", function() { return MAPDRAWEDITSTART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_15", function() { return MAPDRAWCREATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_7", function() { return MAPCLICK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_8", function() { return MAPLAYERCHANCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_9", function() { return MAPZOOMSTART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_10", function() { return MAPZOOMEND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_11", function() { return MAPLAYERSCONTROLEVENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_12", function() { return MAPLAYERADD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_13", function() { return MAPDIDIUPDATELAYER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_14", function() { return MAPOVERLAYADD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_50", function() { return rightPanelSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_49", function() { return leftPanelSize; });
/* unused harmony export default_tab_datapanel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_43", function() { return tab1_datapanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_44", function() { return tab2_datapanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_26", function() { return eu_logo_path; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_25", function() { return eu_logo_height; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_47", function() { return duration_curve_graph_title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_48", function() { return duration_curve_graph_category; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_36", function() { return duration_curve_graph_options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_37", function() { return heat_load_graph_options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_46", function() { return energy_mix_graph_category; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_34", function() { return energy_mix_options; });
/* unused harmony export clculation_module_graph_options */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return default_color_shpfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return default_fillColor_shpfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return default_fillOpacity_shpfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_31", function() { return color_usedspace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_32", function() { return color_unusedspace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_29", function() { return labels_diskspacechart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_30", function() { return diskspacechart_options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_33", function() { return inputs_categories; });


/**
 * Created by lesly on 07.07.17.
 */
// Improvement of coding style :
// leaving one empty line between third party imports and application imports
// listing import lines alphabetized by the module
var prodUrl = 'https://api.hotmaps.hevs.ch/api'; // 'https://hotmaps.hevs.ch:9006/api';
var devUrl = 'https://api.hotmapsdev.hevs.ch/api'; // 'https://hotmapsdev.hevs.ch:9006/api';
var localApiUrl = 'http://localhost:5000/api';
var geoserverProdUrl_old = 'http://hotmaps.hevs.ch:9009/geoserver/hotmaps/wms';
var geoserverProdUrl_old2 = 'http://geoserver.hotmaps.hevs.ch/geoserver/hotmaps/wms';
var geoserverProdUrl = 'https://geoserver.hotmaps.hevs.ch/geoserver/hotmaps/wms';
var geoserverDevUrl = 'https://geoserver.hotmapsdev.hevs.ch/geoserver/hotmaps/wms';
var geocodeUrl = 'https://nominatim.openstreetmap.org/search?q='; // prefer
// prefer
var geoserverUrl = geoserverDevUrl;
var getIpUrl = 'https://ipv4.myexternalip.com/json'; // prefer
// prefer
var getLocationFromIp = 'http://hotmaps.hevs.ch:9005/api/';
var apiUrl = devUrl;
var defaultLayer = 'heat_tot_curr_density';
var styleNameHeat = 'heat_tot_curr_density';
var heat_type = 'heat';
var defaultLayerType = heat_type;
var idDefaultLayer = 0;
var wwtpLayerName = 'wwtp';
var urlTaigaFeedback = 'http://hotmaps.hevs.ch:8585/feedback-taiga/send-taiga-issue.php';
var urlLegend = geoserverUrl + '?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=50&HEIGHT=10&STRICT=false&style=';
var timeOutAjaxRequest = 10000;
var unit_heatload_profil = 'MW';
var formatImage = 'image/png8';
// layer_name
var geoserverGetFeatureInfoUrl = geoserverUrl + '?' +
    'SERVICE=WMS&VERSION=1.1.1&REQUEST=GetFeatureInfo&FORMAT=image/png&TRANSPARENT=true&QUERY_LAYERS=hotmaps:';
var nuts_level = '3';
var populationLayerName = 'pop_tot_curr_density';
var postStatsLayersHectares = '/stats/layers/hectares';
var postStatsPersonalLayer = '/stats/personnal-layers';
var postStatsLayersNutsLau = '/stats/layers/nuts-lau';
var postHeatLoadProfileHectares = '/heat-load-profile/hectares';
var postHeatLoadProfileNutsLau = '/heat-load-profile/nuts-lau';
var postDurationCurveHectares = '/heat-load-profile/duration-curve/hectares';
var postDurationCurveNutsLau = '/heat-load-profile/duration-curve/nuts-lau';
var getElectricityMixFromNuts0 = '/stats/energy-mix/nuts-lau';
// User management endpoints
var user_endpoint = '/users/';
var upload_endpoint = '/upload/';
var post_user_register = user_endpoint + 'register';
var post_user_register_activate = user_endpoint + 'register/activate';
var post_user_recovery_ask = user_endpoint + 'recovery/ask';
var post_user_recovery = user_endpoint + 'recovery';
var post_user_logout = user_endpoint + 'logout';
var post_user_login = user_endpoint + 'login';
var get_userinformation_endpoint = user_endpoint + 'information';
var get_userupdateprofile_endpoint = user_endpoint + 'profile/update';
var get_diskspace_endpoint = user_endpoint + 'space_used';
var get_filelist_endpoint = upload_endpoint + 'list';
// title
var heatloadprofile = 'Heatload profile';
var Durationcurve = 'Duration curve';
var energy_mix_title = 'Electricity generation mix';
var set404url = 'set404url';
// Projection data string
var proj3035 = '+proj=laea +lat_0=52 +lon_0=10 +x_0=43f21000 +y_0=3210000 +ellps=GRS80 +units=m +no_defs';
var proj4326 = '+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs';
// Heat load profil
var heat_load_api_day = 'day';
var heat_load_api_year = 'year';
var heat_load_api_month = 'month';
var buttons_heat_load = [
    { name: 'Year', api_ref: heat_load_api_year, selected: true, date: 2010, min: 2010, max: 2010, options: [] },
    { name: 'Month', api_ref: heat_load_api_month, selected: false, date: 1, min: 1, max: 12, options: [] },
    { name: 'Day', api_ref: heat_load_api_day, selected: false, date: 1, min: 1, max: 31, options: [] },
];
var default_drop_down_button = 'overall';
var calculation_module_category = 'Calculation module';
var raster_type_name = 'raster';
var vector_type_name = 'vector';
var summay_drop_down_buttons = [
    { name: 'Overall', ref: default_drop_down_button, selected: true, display: false },
    { name: 'Demand', ref: 'demand', selected: false, display: false },
    { name: 'Potentials', ref: 'potential', selected: false, display: false },
    { name: 'Climate', ref: 'climate', selected: false, display: false },
    { name: 'Buildings', ref: 'buildings', selected: false, display: false },
    { name: 'Heat Supply', ref: 'heat_supply', selected: false, display: false },
    { name: 'Industry', ref: 'industry', selected: false, display: false },
    { name: 'Electricity', ref: 'electricity', selected: false, display: false },
    { name: 'Calculation module', ref: calculation_module_category, selected: false, display: false }
];
// Layer order number
/*
  More the number is big, more hight is the layer on the toolbox
*/
var industry_layer_order = 6;
var scale_layer_order = 5;
var cm_layers_order = 4;
var layers_order = 3;
var maps_order = 1;
// layers constant
var timeOut = 200000;
// layers constant
var clickAccuracy = 100;
var zoomLevelDetectChange = 10;
var constant_year = 2012;
var constant_year_sp_wwtp = 2015;
var constant_year_duration_curve = 2010;
var business_name_wwtp = 'Waste Water treatment plants';
var business_name_population = 'Population';
var unit_capacity = 'population equivalent';
var unit_heat_density = 'MWh/ha';
var unit_shape_area = 'm2';
var unit_population = 'person/ha';
var round_value = '1.2-2';
var defaultZoomLevel = 5;
var map_options = {
    zoomControl: false,
    center: L.latLng(47.33249406663852, 0.6976318359375),
    zoom: defaultZoomLevel,
    minZoom: 4,
    maxZoom: 17,
    zoomAnimationThreshold: 3,
    layers: [__WEBPACK_IMPORTED_MODULE_0__pages_map_basemap__["a" /* basemap */].Esri]
};
var lau2name = 'tbl_lau1_2';
// Scale Value
var nuts0 = 'NUTS 0';
var nuts1 = 'NUTS 1';
var nuts2 = 'NUTS 2';
var nuts3 = 'NUTS 3';
var lau2 = 'LAU 2';
var hectare = 'Hectare';
var initial_scale_value = nuts3;
// Event variable
var MAPDRAWEDITED = L.Draw.Event.EDITED;
var MAPDRAWSTART = L.Draw.Event.DRAWSTART;
var MAPDRAWDELETED = L.Draw.Event.DELETED;
var MAPDRAWEDITSTOP = L.Draw.Event.EDITSTOP;
var MAPDRAWEDITSTART = L.Draw.Event.EDITSTART;
var MAPDRAWCREATED = L.Draw.Event.CREATED;
var MAPCLICK = 'click';
var MAPLAYERCHANCE = 'baselayerchange';
var MAPZOOMSTART = 'zoomstart';
var MAPZOOMEND = 'zoomend';
var MAPLAYERSCONTROLEVENT = 'LayersControlEvent';
var MAPLAYERADD = 'layeradd';
var MAPDIDIUPDATELAYER = 'didUpdateLayers';
var MAPOVERLAYADD = 'overlayadd';
var rightPanelSize = 600;
var leftPanelSize = 400;
// tab values
var default_tab_datapanel = 'indicator';
var tab1_datapanel = default_tab_datapanel;
var tab2_datapanel = 'charts';
var eu_logo_path = '/assets/first-page/co-funded-h2020-horiz_en.png';
var eu_logo_height = 70;
// Duration curve graph data
var duration_curve_graph_title = 'Duration curve';
var duration_curve_graph_category = 'duration_curve';
var duration_curve_graph_options = {
    legend: {
        display: false
    },
    /* elements:{
      point:{
        radius:0
      }
    }, */
    tooltips: { enabled: false },
    hover: { mode: null },
    scales: {
        yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Heat Power (MW)'
                }
            }],
        xAxes: [{
                ticks: { display: false },
                scaleLabel: {
                    display: true,
                    labelString: 'Yearly duration'
                },
                gridLines: {
                    color: "#FFFFFF"
                }
            }]
    }
};
// Heat Load graph data
var heat_load_graph_options = {
    scales: {
        yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Heat Power (MW)'
                }
            }]
    }
};
var energy_mix_graph_category = 'duration_curve';
var energy_mix_options = {
    position: 'right',
    responsive: true,
    legend: {
        display: true,
        position: 'right'
    }
};
var clculation_module_graph_options = {
    scales: {
        yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: ''
                }
            }],
        xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: ''
                }
            }]
    }
};
var default_color_shpfile = '#FFA500';
var default_fillColor_shpfile = '#FFA500';
var default_fillOpacity_shpfile = 0.5;
var color_usedspace = '#123';
var color_unusedspace = '#321';
var labels_diskspacechart = ['Used space', 'Unused space'];
var diskspacechart_options = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
        display: true,
    },
    tooltips: {
        callbacks: {
            label: function (tlt, data) {
                return data.labels[tlt.index] + ': ' + data.datasets[0].data[tlt.index] + ' MB';
            }
        }
    }
};
var inputs_categories = [
    { id: '0', name: 'Inputs', contains_component: false },
    { id: '1', name: 'Basic inputs', contains_component: false },
    { id: '2', name: 'Advanced inputs: (Level 1)', contains_component: false },
    { id: '3', name: 'Advanced inputs: (Level 2)', contains_component: false },
    { id: '4', name: 'Advanced inputs: (Level 3)', contains_component: false },
];
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/helper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_class_month_data__ = __webpack_require__("../../../../../src/app/shared/class/month.data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_proj4__ = __webpack_require__("../../../../proj4/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__turf_boolean_contains__ = __webpack_require__("../../../../@turf/boolean-contains/main.es.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Helper; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var proj4 = __WEBPACK_IMPORTED_MODULE_5_proj4__["default"];
var Helper = (function () {
    function Helper(logger, decimalPipe) {
        this.logger = logger;
        this.decimalPipe = decimalPipe;
        this.monthData = __WEBPACK_IMPORTED_MODULE_4_app_shared_class_month_data__["a" /* MONTHNAME */];
    }
    // check if unfined or not
    Helper.prototype.isNullOrUndefined = function (x) {
        var result = false;
        if (x == null) {
            result = true;
        }
        if (x === null) {
            result = true;
        }
        if (typeof x === 'undefined') {
            result = true;
        }
        return result;
    };
    // convert getlatLong() form path leaflet to array of location[]
    Helper.prototype.convertLatLongToLocation = function (latlng) {
        var n = 0;
        var locations = [];
        do {
            var loc = {
                lat: latlng[n].lat,
                lng: latlng[n].lng
            };
            locations.push(loc);
            n++;
        } while (!this.isNullOrUndefined(latlng[n]));
        return locations;
    };
    Helper.prototype.convertListLatLongToLocation = function (latlngArray) {
        var locations = [];
        var latlng = latlngArray[0][0];
        for (var i = 0; i < latlng.length; i++) {
            var loc = {
                lat: latlng[i][1],
                lng: latlng[i][0]
            };
            locations.push(loc);
        }
        return locations;
    };
    Helper.prototype.convertLatLongToLocationString = function (latlng) {
        var n = 0;
        var locations = '';
        do {
            var loc_1 = latlng[n].lat + ' ' + latlng[n].lng + ',';
            locations = locations + loc_1;
            n++;
        } while (!this.isNullOrUndefined(latlng[n]));
        var loc = latlng[0].lat + ' ' + latlng[0].lng;
        locations = locations + loc;
        return locations;
    };
    Helper.prototype.convertPostGisLatLongToLocationString = function (latlng) {
        var n = 0;
        var locations = '';
        do {
            var loc_2 = latlng[n].lng + ' ' + latlng[n].lat + ',';
            locations = locations + loc_2;
            n++;
        } while (!this.isNullOrUndefined(latlng[n]));
        var loc = latlng[0].lng + ' ' + latlng[0].lat;
        locations = locations + loc;
        return locations;
    };
    Helper.prototype.convertPointToGeoJSONFormat = function (latlng) {
        var n = 0;
        var locations = [];
        do {
            var loc = [];
            loc.push(latlng[n].lng, latlng[n].lat);
            locations.push(loc);
            n++;
        } while (!this.isNullOrUndefined(latlng[n]));
        return locations;
    };
    Helper.prototype.createGeodesicPolygon = function (origin, radius, sides, rotation) {
        var latlon = origin; //leaflet equivalent
        var angle;
        var new_lonlat, geom_point;
        var points = [];
        for (var i = 0; i < sides; i++) {
            angle = (i * 360 / sides) + rotation;
            new_lonlat = this.destinationVincenty(latlon, angle, radius);
            geom_point = L.latLng(new_lonlat.lng, new_lonlat.lat);
            points.push(geom_point);
        }
        return points;
    };
    Helper.prototype.destinationVincenty = function (lonlat, brng, dist) {
        var VincentyConstants = {
            a: 6378137,
            b: 6356752.3142,
            f: 1 / 298.257223563
        };
        var u = L.Util;
        var ct = VincentyConstants;
        var a = ct.a, b = ct.b, f = ct.f;
        var lon1 = lonlat.lng;
        var lat1 = lonlat.lat;
        var s = dist;
        var pi = Math.PI;
        var alpha1 = brng * pi / 180; //converts brng degrees to radius
        var sinAlpha1 = Math.sin(alpha1);
        var cosAlpha1 = Math.cos(alpha1);
        var tanU1 = (1 - f) * Math.tan(lat1 * pi / 180 /* converts lat1 degrees to radius */);
        var cosU1 = 1 / Math.sqrt((1 + tanU1 * tanU1)), sinU1 = tanU1 * cosU1;
        var sigma1 = Math.atan2(tanU1, cosAlpha1);
        var sinAlpha = cosU1 * sinAlpha1;
        var cosSqAlpha = 1 - sinAlpha * sinAlpha;
        var uSq = cosSqAlpha * (a * a - b * b) / (b * b);
        var A = 1 + uSq / 16384 * (4096 + uSq * (-768 + uSq * (320 - 175 * uSq)));
        var B = uSq / 1024 * (256 + uSq * (-128 + uSq * (74 - 47 * uSq)));
        var sigma = s / (b * A), sigmaP = 2 * Math.PI;
        while (Math.abs(sigma - sigmaP) > 1e-12) {
            var cos2SigmaM = Math.cos(2 * sigma1 + sigma);
            var sinSigma = Math.sin(sigma);
            var cosSigma = Math.cos(sigma);
            var deltaSigma = B * sinSigma * (cos2SigmaM + B / 4 * (cosSigma * (-1 + 2 * cos2SigmaM * cos2SigmaM) -
                B / 6 * cos2SigmaM * (-3 + 4 * sinSigma * sinSigma) * (-3 + 4 * cos2SigmaM * cos2SigmaM)));
            sigmaP = sigma;
            sigma = s / (b * A) + deltaSigma;
        }
        var tmp = sinU1 * sinSigma - cosU1 * cosSigma * cosAlpha1;
        var lat2 = Math.atan2(sinU1 * cosSigma + cosU1 * sinSigma * cosAlpha1, (1 - f) * Math.sqrt(sinAlpha * sinAlpha + tmp * tmp));
        var lambda = Math.atan2(sinSigma * sinAlpha1, cosU1 * cosSigma - sinU1 * sinSigma * cosAlpha1);
        var C = f / 16 * cosSqAlpha * (4 + f * (4 - 3 * cosSqAlpha));
        var lam = lambda - (1 - C) * f * sinAlpha *
            (sigma + C * sinSigma * (cos2SigmaM + C * cosSigma * (-1 + 2 * cos2SigmaM * cos2SigmaM)));
        var revAz = Math.atan2(sinAlpha, -tmp); // final bearing
        var lamFunc = lon1 + (lam * 180 / pi); //converts lam radius to degrees
        var lat2a = lat2 * 180 / pi; //converts lat2a radius to degrees
        return L.latLng(lamFunc, lat2a);
    };
    Helper.prototype.latLngsToCoords = function (arrLatlng) {
        var self = this;
        var coords = [];
        arrLatlng.forEach(function (latlng) {
            coords.push([latlng.lng, latlng.lat]);
        }, this);
        return coords;
    };
    Helper.prototype.round = function (num) {
        if (this.isNullOrUndefined(num) === true) {
            return num;
        }
        ;
        return this.decimalPipe.transform(num, __WEBPACK_IMPORTED_MODULE_3__data_service__["h" /* round_value */]);
    };
    Helper.prototype.formatDataLoadProfil = function (data) {
        var _this = this;
        var formattedValues = [];
        var labels = [];
        var DataValues = [];
        data.values.map(function (value) {
            labels.push(_this.getMonthString(_this.getDate(value).getMonth(), 1));
            DataValues.push(Math.round(value.max));
        });
        formattedValues.push(labels, DataValues);
        return formattedValues;
    };
    Helper.prototype.getDate = function (heatload) {
        var date = new Date(heatload.year + '-' + heatload.month + '-01');
        return date;
    };
    Helper.prototype.getMonthString = function (numberOfMonth, index) {
        var month = __WEBPACK_IMPORTED_MODULE_4_app_shared_class_month_data__["a" /* MONTHNAME */].filter(function (m) { return m.id === numberOfMonth + index; })[0];
        return month.month;
    };
    Helper.prototype.getLocationsFromPolygon = function (layer) {
        var rectangle = layer;
        var latlng = rectangle.latLngs ? rectangle.latLngs : rectangle.getLatLngs()[0];
        var locations = this.convertLatLongToLocation(latlng);
        this.logger.log('locations [] ' + locations);
        return locations;
    };
    Helper.prototype.getLocationsFromGeoJsonLayer = function (layer) {
        var geojsonLayer = layer;
        var geoJson = geojsonLayer.toGeoJSON();
        this.logger.log('geoJson latlng ' + geoJson.features[0].geometry.coordinates);
        var latlng = geoJson.features[0].geometry.coordinates;
        var locations = this.convertListLatLongToLocation(latlng);
        this.logger.log('locations [] ' + locations);
        return locations;
    };
    Helper.prototype.transformLatLngToEpsg = function (latlng, epsgString) {
        return proj4(epsgString).forward([latlng.lng, latlng.lat]);
    };
    Helper.prototype.transformLatLngToEpsg3035 = function (latlng) {
        return proj4(__WEBPACK_IMPORTED_MODULE_3__data_service__["i" /* proj3035 */]).forward([latlng.lng, latlng.lat]);
    };
    Helper.prototype.getTranformedBoundingBox = function (map, epsgString) {
        var coordinate = [];
        var bound = map.getBounds();
        var northEastTransformed = this.transformLatLngToEpsg(bound.getNorthEast(), epsgString);
        var southWestTransformed = this.transformLatLngToEpsg(bound.getSouthWest(), epsgString);
        coordinate.push(southWestTransformed[1], southWestTransformed[0]);
        coordinate.push(northEastTransformed[1], northEastTransformed[0]);
        return coordinate;
    };
    Helper.prototype.getNUTSIDFromGeoJsonLayer = function (layer) {
        var geojsonLayer = layer;
        var geoJson = geojsonLayer.toGeoJSON();
        if (!this.isNullOrUndefined(geoJson.features[0])) {
            var nuts_id = geoJson.features[0].properties.nuts_id;
            return nuts_id;
        }
        else {
            return null;
        }
    };
    Helper.prototype.getLAU2IDFromGeoJsonLayer = function (layer) {
        var geojsonLayer = layer;
        var geoJson = geojsonLayer.toGeoJSON();
        if (!this.isNullOrUndefined(geoJson.features[0])) {
            var lau2_id = geoJson.features[0].properties.comm_id;
            return lau2_id;
        }
        else {
            return null;
        }
    };
    Helper.prototype.getLocationsFromLayer = function (layer) {
        if (layer instanceof L.Circle) {
            return this.getLocationsFromCicle(layer);
        }
        else if (layer instanceof L.Polygon) {
            return this.getLocationsFromPolygon(layer);
        }
        else if (layer instanceof L.latLng) {
            return this.getLocationsFromPolygon(layer);
        }
        else {
            return this.getLocationsFromGeoJsonLayer(layer);
        }
    };
    Helper.prototype.getLocationsFromCicle = function (layer) {
        var circle = layer;
        var origin = circle.latLng ? circle.latLng : circle.getLatLng(); // center of drawn circle
        var radius = circle.radius ? circle.radius : circle.getRadius(); // radius of drawn circle
        var polys = this.createGeodesicPolygon(origin, radius, 60, 360); // these are the points that make up the circle
        var locations = [];
        for (var i = 0; i < polys.length; i++) {
            var loc = {
                lat: polys[i].lat,
                lng: polys[i].lng
            };
            locations.push(loc);
        }
        return locations;
    };
    Helper.prototype.getAreasForPayload = function (areas) {
        var _this = this;
        var ar = [];
        areas.map(function (layer) {
            var points = [];
            if (layer instanceof L.Circle || layer.radius) {
                ar.push({ points: _this.getLocationsFromCicle(layer) });
            }
            else {
                ar.push({ points: _this.getLocationsFromPolygon(layer) });
            }
        });
        return ar;
    };
    Helper.prototype.checkIntersect = function (l1, l2) {
        var intersects = false;
        for (var i = 0; i <= l1.coordinates.length - 2; ++i) {
            for (var j = 0; j <= l2.coordinates.length - 2; ++j) {
                var a1Latlon = L.latLng(l1.coordinates[i][1], l1.coordinates[i][0]), a2Latlon = L.latLng(l1.coordinates[i + 1][1], l1.coordinates[i + 1][0]), b1Latlon = L.latLng(l2.coordinates[j][1], l2.coordinates[j][0]), b2Latlon = L.latLng(l2.coordinates[j + 1][1], l2.coordinates[j + 1][0]), a1 = L.Projection.SphericalMercator.project(a1Latlon), a2 = L.Projection.SphericalMercator.project(a2Latlon), b1 = L.Projection.SphericalMercator.project(b1Latlon), b2 = L.Projection.SphericalMercator.project(b2Latlon), ua_t = (b2.x - b1.x) * (a1.y - b1.y) - (b2.y - b1.y) * (a1.x - b1.x), ub_t = (a2.x - a1.x) * (a1.y - b1.y) - (a2.y - a1.y) * (a1.x - b1.x), u_b = (b2.y - b1.y) * (a2.x - a1.x) - (b2.x - b1.x) * (a2.y - a1.y);
                if (u_b != 0) {
                    var ua = ua_t / u_b, ub = ub_t / u_b;
                    if (0 <= ua && ua <= 1 && 0 <= ub && ub <= 1) {
                        intersects = true;
                    }
                }
            }
        }
        return intersects;
    };
    Helper.prototype.lineify = function (inputGeom) {
        var outputLines = {
            "type": "GeometryCollection",
            "geometries": []
        };
        switch (inputGeom.type) {
            case "GeometryCollection":
                for (var i in inputGeom.geometries) {
                    var geomLines = this.lineify(inputGeom.geometries[i]);
                    if (geomLines) {
                        for (var j in geomLines.geometries) {
                            outputLines.geometries.push(geomLines.geometries[j]);
                        }
                    }
                    else {
                        outputLines = null;
                    }
                }
                break;
            case "Feature":
                var geomLines = this.lineify(inputGeom.geometry);
                if (geomLines) {
                    for (var j in geomLines.geometries) {
                        outputLines.geometries.push(geomLines.geometries[j]);
                    }
                }
                else {
                    outputLines = null;
                }
                break;
            case "FeatureCollection":
                for (var i in inputGeom.features) {
                    var geomLines = this.lineify(inputGeom.features[i].geometry);
                    if (geomLines) {
                        for (var j in geomLines.geometries) {
                            outputLines.geometries.push(geomLines.geometries[j]);
                        }
                    }
                    else {
                        outputLines = null;
                    }
                }
                break;
            case "LineString":
                outputLines.geometries.push(inputGeom);
                break;
            case "MultiLineString":
            case "Polygon":
                for (var i in inputGeom.coordinates) {
                    outputLines.geometries.push({
                        "type": "LineString",
                        "coordinates": inputGeom.coordinates[i]
                    });
                }
                break;
            case "MultiPolygon":
                for (var i in inputGeom.coordinates) {
                    for (var j in inputGeom.coordinates[i]) {
                        outputLines.geometries.push({
                            "type": "LineString",
                            "coordinates": inputGeom.coordinates[i][j]
                        });
                    }
                }
                break;
            default:
                outputLines = null;
        }
        return outputLines;
    };
    Helper.prototype.controlDrawedLayer = function (baseLayer, drawLayer) {
        var _this = this;
        var drawJson;
        if (drawLayer instanceof L.Circle) {
            drawJson = this.circleToGeoJSON(drawLayer);
        }
        else {
            drawJson = drawLayer.toGeoJSON();
        }
        var baseJson = baseLayer.toGeoJSON(), baseLines = this.lineify(baseJson), drawLines = this.lineify(drawJson), pointCrossed = false;
        baseJson.features.map(function (feature) {
            if (_this.testSpatial(feature, drawJson) === true) {
                pointCrossed = true;
            }
        });
        if (baseLines && drawLines) {
            for (var i in drawLines.geometries) {
                for (var j in baseLines.geometries) {
                    if (pointCrossed === true) {
                        return pointCrossed;
                    }
                    ;
                    pointCrossed = this.checkIntersect(drawLines.geometries[i], baseLines.geometries[j]);
                }
            }
        }
        return pointCrossed;
    };
    Helper.prototype.getScaleLevelPay = function (scaleLevel) {
        var payloadScale = '';
        if (scaleLevel === '2' || scaleLevel === '3' || scaleLevel === '0' || scaleLevel === '1') {
            payloadScale = 'nuts';
        }
        else if (scaleLevel === '4') {
            payloadScale = 'lau';
        }
        else {
            payloadScale = 'hectare';
        }
        return payloadScale;
    };
    Helper.prototype.testSpatial = function (baseJson, drawJson) {
        return __WEBPACK_IMPORTED_MODULE_6__turf_boolean_contains__["a" /* default */](drawJson, baseJson);
    };
    Helper.prototype.circleToGeoJSON = function (layer) {
        return {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Polygon",
                "coordinates": [this.latLngsToCoords(this.getLocationsFromCicle(layer))]
            }
        };
    };
    Helper.prototype.chartsToCSV = function (graphs) {
        var arraytmp = [];
        var header = {
            "1": "serie",
            "2": "label",
            "3": "value",
        };
        arraytmp.push(header);
        graphs.map(function (graph) {
            arraytmp.push({ name: graph.name });
            var labels = graph.labels;
            graph.data.map(function (data) {
                data.data.map(function (d, currIndex) {
                    arraytmp.push({ serie: data.label, label: graph.labels[currIndex], value: d });
                });
            });
        });
        return arraytmp;
    };
    Helper.prototype.summaryResultToCSV = function (input) {
        var array = [];
        var header = {
            "1": "indicator",
            "2": "value",
            "3": "unit",
        };
        array.push(header);
        for (var _i = 0, _a = Object.keys(input); _i < _a.length; _i++) {
            var res = _a[_i];
            if (this.isNullOrUndefined(input[res])) {
                continue;
            }
            for (var _b = 0, _c = input[res].layers; _b < _c.length; _b++) {
                var entry = _c[_b];
                array.push({ name: entry.name });
                for (var _d = 0, _e = entry.values; _d < _e.length; _d++) {
                    var entry_in_entry = _e[_d];
                    array.push({ indicator: entry_in_entry.name, value: entry_in_entry.value, unit: entry_in_entry.unit });
                }
            }
        }
        return array;
    };
    Helper.prototype.keysFromJson = function (jsonData) {
        var val = jsonData[0];
        var header = {};
        for (var j in val) {
            var sub_key = j;
            var sub_val = val[j];
            header[j] = j;
        }
        return header;
    };
    Helper.prototype.resultToCSV = function (input) {
        this.logger.log('Helper/resultToCSV');
        var csvResult = input;
        var header = this.keysFromJson(input);
        var array = [];
        array.push(header);
        for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
            var entry = input_1[_i];
            array.push(entry);
        }
        return array;
    };
    Helper.prototype.generateRandomName = function () {
        // Math.random should be unique because of its seeding algorithm.
        // Convert it to base 36 (numbers + letters), and grab the first 9 characters
        // after the decimal.
        return '_' + Math.random().toString(36).substr(2, 9);
    };
    Helper.prototype.createDurationCurveLabels = function (array) {
        for (var i = 0; i <= 8760; ++i) {
            array[i] = i;
        }
        return array;
    };
    Helper.prototype.createSplittedResultsModel = function () {
        var splittedResultsArray = [];
        for (var j = 0; j < __WEBPACK_IMPORTED_MODULE_3__data_service__["j" /* summay_drop_down_buttons */].length; j++) {
            var refName = __WEBPACK_IMPORTED_MODULE_3__data_service__["j" /* summay_drop_down_buttons */][j]["ref"];
            var p = {
                "layers": [],
                "no_data_layers": []
            };
            splittedResultsArray[refName] = [];
            splittedResultsArray[refName] = p;
        }
        return splittedResultsArray;
    };
    Helper.prototype.isResultEmpty = function (result) {
        if (result.layers == 0 && result.no_data_layers == 0) {
            return true;
        }
        else {
            return false;
        }
    };
    Helper.prototype.isResultDataEmpty = function (result) {
        if (result.layers == 0) {
            return true;
        }
        else {
            return false;
        }
    };
    Helper.prototype.isPayloadIncomplete = function (payload) {
        for (var key in payload) {
            if (payload[key] == 0) {
                return true;
            }
        }
        return false;
    };
    Helper.prototype.createHLPayloadHectares = function (type, buttonArray, areas) {
        var payload;
        if (type === 'day') {
            payload = {
                'year': buttonArray[0].date,
                'month': buttonArray[1].date,
                'day': buttonArray[2].date,
                'areas': areas
            };
        }
        if (type === 'month') {
            payload = {
                'year': buttonArray[0].date,
                'month': buttonArray[1].date,
                'areas': areas
            };
        }
        if (type === 'year') {
            payload = {
                'year': buttonArray[0].date,
                'areas': areas
            };
        }
        return payload;
    };
    Helper.prototype.createHLPayloadNuts = function (type, buttonArray, nuts) {
        var payload;
        if (type == 'day') {
            payload = {
                'year': buttonArray[0].date,
                'month': buttonArray[1].date,
                'day': buttonArray[2].date,
                'nuts': nuts
            };
        }
        if (type === 'month') {
            payload = {
                'year': buttonArray[0].date,
                'month': buttonArray[1].date,
                'nuts': nuts
            };
        }
        if (type === 'year') {
            payload = {
                'year': buttonArray[0].date,
                'nuts': nuts
            };
        }
        return payload;
    };
    Helper.prototype.createDCPayloadHectares = function (year, areas) {
        var payload = {
            'year': year,
            'areas': areas
        };
        return payload;
    };
    Helper.prototype.createDCPayloadNuts = function (year, nuts) {
        var payload = {
            'year': year,
            'nuts': nuts
        };
        return payload;
    };
    Helper.prototype.getScaleLevelPaylaod = function (scaleLevel) {
        var payloadScale = '';
        if (scaleLevel.startsWith('NUTS')) {
            payloadScale = 'nuts';
        }
        else if (scaleLevel.startsWith('LAU')) {
            payloadScale = 'lau';
        }
        else {
            payloadScale = 'hectare';
        }
        return payloadScale;
    };
    return Helper;
}());
Helper = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services__["a" /* Logger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services__["a" /* Logger */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["DecimalPipe"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["DecimalPipe"]) === "function" && _b || Object])
], Helper);

var _a, _b;
//# sourceMappingURL=helper.js.map

/***/ }),

/***/ "../../../../../src/app/shared/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__business__ = __webpack_require__("../../../../../src/app/shared/business/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "BusinessInterfaceRenderService", function() { return __WEBPACK_IMPORTED_MODULE_0__business__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class__ = __webpack_require__("../../../../../src/app/shared/class/index.ts");
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__class__, "UppercaseFirstLetterPipe")) __webpack_require__.d(__webpack_exports__, "UppercaseFirstLetterPipe", function() { return __WEBPACK_IMPORTED_MODULE_1__class__["UppercaseFirstLetterPipe"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__class__, "NumberFormatPipe")) __webpack_require__.d(__webpack_exports__, "NumberFormatPipe", function() { return __WEBPACK_IMPORTED_MODULE_1__class__["NumberFormatPipe"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__class__, "LayerNamePipe")) __webpack_require__.d(__webpack_exports__, "LayerNamePipe", function() { return __WEBPACK_IMPORTED_MODULE_1__class__["LayerNamePipe"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__class__, "BusinessNamePipe")) __webpack_require__.d(__webpack_exports__, "BusinessNamePipe", function() { return __WEBPACK_IMPORTED_MODULE_1__class__["BusinessNamePipe"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__class__, "GeocodingService")) __webpack_require__.d(__webpack_exports__, "GeocodingService", function() { return __WEBPACK_IMPORTED_MODULE_1__class__["GeocodingService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__class__, "Logger")) __webpack_require__.d(__webpack_exports__, "Logger", function() { return __WEBPACK_IMPORTED_MODULE_1__class__["Logger"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__class__, "LoaderService")) __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return __WEBPACK_IMPORTED_MODULE_1__class__["LoaderService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__class__, "ToasterService")) __webpack_require__.d(__webpack_exports__, "ToasterService", function() { return __WEBPACK_IMPORTED_MODULE_1__class__["ToasterService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__class__, "GlobalErrorHandler")) __webpack_require__.d(__webpack_exports__, "GlobalErrorHandler", function() { return __WEBPACK_IMPORTED_MODULE_1__class__["GlobalErrorHandler"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__class__, "Helper")) __webpack_require__.d(__webpack_exports__, "Helper", function() { return __WEBPACK_IMPORTED_MODULE_1__class__["Helper"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__class__, "Dictionary")) __webpack_require__.d(__webpack_exports__, "Dictionary", function() { return __WEBPACK_IMPORTED_MODULE_1__class__["Dictionary"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__class__, "apiUrl")) __webpack_require__.d(__webpack_exports__, "apiUrl", function() { return __WEBPACK_IMPORTED_MODULE_1__class__["apiUrl"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__class__, "cm_layers_order")) __webpack_require__.d(__webpack_exports__, "cm_layers_order", function() { return __WEBPACK_IMPORTED_MODULE_1__class__["cm_layers_order"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__class__, "default_color_shpfile")) __webpack_require__.d(__webpack_exports__, "default_color_shpfile", function() { return __WEBPACK_IMPORTED_MODULE_1__class__["default_color_shpfile"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__class__, "default_fillColor_shpfile")) __webpack_require__.d(__webpack_exports__, "default_fillColor_shpfile", function() { return __WEBPACK_IMPORTED_MODULE_1__class__["default_fillColor_shpfile"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__class__, "default_fillOpacity_shpfile")) __webpack_require__.d(__webpack_exports__, "default_fillOpacity_shpfile", function() { return __WEBPACK_IMPORTED_MODULE_1__class__["default_fillOpacity_shpfile"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__class__, "raster_type_name")) __webpack_require__.d(__webpack_exports__, "raster_type_name", function() { return __WEBPACK_IMPORTED_MODULE_1__class__["raster_type_name"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__class__, "vector_type_name")) __webpack_require__.d(__webpack_exports__, "vector_type_name", function() { return __WEBPACK_IMPORTED_MODULE_1__class__["vector_type_name"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__class__, "APIService")) __webpack_require__.d(__webpack_exports__, "APIService", function() { return __WEBPACK_IMPORTED_MODULE_1__class__["APIService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__class__, "lau2name")) __webpack_require__.d(__webpack_exports__, "lau2name", function() { return __WEBPACK_IMPORTED_MODULE_1__class__["lau2name"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__class__, "geoserverUrl")) __webpack_require__.d(__webpack_exports__, "geoserverUrl", function() { return __WEBPACK_IMPORTED_MODULE_1__class__["geoserverUrl"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__class__, "proj3035")) __webpack_require__.d(__webpack_exports__, "proj3035", function() { return __WEBPACK_IMPORTED_MODULE_1__class__["proj3035"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__class__, "hectare")) __webpack_require__.d(__webpack_exports__, "hectare", function() { return __WEBPACK_IMPORTED_MODULE_1__class__["hectare"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__class__, "heatloadprofile")) __webpack_require__.d(__webpack_exports__, "heatloadprofile", function() { return __WEBPACK_IMPORTED_MODULE_1__class__["heatloadprofile"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__class__, "buttons_heat_load")) __webpack_require__.d(__webpack_exports__, "buttons_heat_load", function() { return __WEBPACK_IMPORTED_MODULE_1__class__["buttons_heat_load"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__class__, "heat_load_api_day")) __webpack_require__.d(__webpack_exports__, "heat_load_api_day", function() { return __WEBPACK_IMPORTED_MODULE_1__class__["heat_load_api_day"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__class__, "heat_load_api_month")) __webpack_require__.d(__webpack_exports__, "heat_load_api_month", function() { return __WEBPACK_IMPORTED_MODULE_1__class__["heat_load_api_month"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__class__, "heat_load_api_year")) __webpack_require__.d(__webpack_exports__, "heat_load_api_year", function() { return __WEBPACK_IMPORTED_MODULE_1__class__["heat_load_api_year"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__class__, "leftPanelSize")) __webpack_require__.d(__webpack_exports__, "leftPanelSize", function() { return __WEBPACK_IMPORTED_MODULE_1__class__["leftPanelSize"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__class__, "rightPanelSize")) __webpack_require__.d(__webpack_exports__, "rightPanelSize", function() { return __WEBPACK_IMPORTED_MODULE_1__class__["rightPanelSize"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes__ = __webpack_require__("../../../../../src/app/shared/pipes/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "UppercaseFirstLetterPipe", function() { return __WEBPACK_IMPORTED_MODULE_2__pipes__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "NumberFormatPipe", function() { return __WEBPACK_IMPORTED_MODULE_2__pipes__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "LayerNamePipe", function() { return __WEBPACK_IMPORTED_MODULE_2__pipes__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "BusinessNamePipe", function() { return __WEBPACK_IMPORTED_MODULE_2__pipes__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "GeocodingService", function() { return __WEBPACK_IMPORTED_MODULE_3__services__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return __WEBPACK_IMPORTED_MODULE_3__services__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return __WEBPACK_IMPORTED_MODULE_3__services__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "ToasterService", function() { return __WEBPACK_IMPORTED_MODULE_3__services__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "GlobalErrorHandler", function() { return __WEBPACK_IMPORTED_MODULE_3__services__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "APIService", function() { return __WEBPACK_IMPORTED_MODULE_3__services__["f"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "apiUrl", function() { return __WEBPACK_IMPORTED_MODULE_4__data_service__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "cm_layers_order", function() { return __WEBPACK_IMPORTED_MODULE_4__data_service__["H"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "default_color_shpfile", function() { return __WEBPACK_IMPORTED_MODULE_4__data_service__["I"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "default_fillColor_shpfile", function() { return __WEBPACK_IMPORTED_MODULE_4__data_service__["J"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "default_fillOpacity_shpfile", function() { return __WEBPACK_IMPORTED_MODULE_4__data_service__["K"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "raster_type_name", function() { return __WEBPACK_IMPORTED_MODULE_4__data_service__["L"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "vector_type_name", function() { return __WEBPACK_IMPORTED_MODULE_4__data_service__["M"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "lau2name", function() { return __WEBPACK_IMPORTED_MODULE_4__data_service__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "geoserverUrl", function() { return __WEBPACK_IMPORTED_MODULE_4__data_service__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "proj3035", function() { return __WEBPACK_IMPORTED_MODULE_4__data_service__["i"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "hectare", function() { return __WEBPACK_IMPORTED_MODULE_4__data_service__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "heatloadprofile", function() { return __WEBPACK_IMPORTED_MODULE_4__data_service__["_38"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "buttons_heat_load", function() { return __WEBPACK_IMPORTED_MODULE_4__data_service__["_39"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "heat_load_api_day", function() { return __WEBPACK_IMPORTED_MODULE_4__data_service__["_40"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "heat_load_api_month", function() { return __WEBPACK_IMPORTED_MODULE_4__data_service__["_41"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "heat_load_api_year", function() { return __WEBPACK_IMPORTED_MODULE_4__data_service__["_42"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "leftPanelSize", function() { return __WEBPACK_IMPORTED_MODULE_4__data_service__["_49"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "rightPanelSize", function() { return __WEBPACK_IMPORTED_MODULE_4__data_service__["_50"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helper__ = __webpack_require__("../../../../../src/app/shared/helper.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "Helper", function() { return __WEBPACK_IMPORTED_MODULE_5__helper__["a"]; });






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/pipes/business-name.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__business_business_service__ = __webpack_require__("../../../../../src/app/shared/business/business.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessNamePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Improvement of coding style :
// leaving one empty line between third party imports and application imports
// listing import lines alphabetized by the module


var BusinessNamePipe = (function () {
    function BusinessNamePipe(businessService) {
        this.businessService = businessService;
    }
    BusinessNamePipe.prototype.transform = function (value, args) {
        if (value === null) {
            return 'Nothing to transform';
        }
        value = this.businessService.getReadableName(value);
        return value;
    };
    return BusinessNamePipe;
}());
BusinessNamePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'businessname'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__business_business_service__["a" /* BusinessInterfaceRenderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__business_business_service__["a" /* BusinessInterfaceRenderService */]) === "function" && _a || Object])
], BusinessNamePipe);

var _a;
//# sourceMappingURL=business-name.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/shared/pipes/date-format.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* unused harmony export DateFormatPipe */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DateFormatPipe = (function () {
    function DateFormatPipe() {
    }
    DateFormatPipe.prototype.transform = function (date) {
    };
    return DateFormatPipe;
}());
DateFormatPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'date-format'
    })
], DateFormatPipe);

//# sourceMappingURL=date-format.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/shared/pipes/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__business_name_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/business-name.pipe.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__business_name_pipe__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__date_format_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/date-format.pipe.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layer_name_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/layer-name.pipe.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__layer_name_pipe__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__number_format_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/number-format.pipe.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__number_format_pipe__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__uppercase_first_letter_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/uppercase-first-letter.pipe.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__uppercase_first_letter_pipe__["a"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/pipes/layer-name.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__features_layers_interaction_layers_interaction_service__ = __webpack_require__("../../../../../src/app/features/layers-interaction/layers-interaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_logger_service__ = __webpack_require__("../../../../../src/app/shared/services/logger.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayerNamePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Improvement of coding style :
// leaving one empty line between third party imports and application imports



var LayerNamePipe = (function () {
    function LayerNamePipe(dataInteractionService, logger) {
        this.dataInteractionService = dataInteractionService;
        this.logger = logger;
    }
    LayerNamePipe.prototype.transform = function (value, args) {
        this.logger.log('LayerNamePipe/transform value ? ' + value);
        if (value === null) {
            return 'Nothing to transform';
        }
        var valueTransformed = this.dataInteractionService.getReadableName(value);
        this.logger.log('LayerNamePipe/transform valueTransformed ? ' + valueTransformed);
        return valueTransformed;
    };
    return LayerNamePipe;
}());
LayerNamePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'layername'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__features_layers_interaction_layers_interaction_service__["a" /* DataInteractionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__features_layers_interaction_layers_interaction_service__["a" /* DataInteractionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_logger_service__["a" /* Logger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_logger_service__["a" /* Logger */]) === "function" && _b || Object])
], LayerNamePipe);

var _a, _b;
//# sourceMappingURL=layer-name.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/shared/pipes/number-format.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NumberFormatPipe; });
/*
Author: Albain Dufils
Date: 28.09.2017
Description:
This pipe is used to format number with the correct format

*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NumberFormatPipe = (function () {
    function NumberFormatPipe() {
    }
    NumberFormatPipe.prototype.transform = function (value, args) {
        var val_trans = value.split(',').join(' ').split('.').join('.');
        return val_trans;
    };
    return NumberFormatPipe;
}());
NumberFormatPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'numberformat'
    })
], NumberFormatPipe);

//# sourceMappingURL=number-format.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/shared/pipes/uppercase-first-letter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UppercaseFirstLetterPipe; });
/*
        Author: Albain Dufils
        Date: 28.09.2017
        Description:
            This pipe is used to format string to:
                the first letter in uppercase
                the rest in lowercase

*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UppercaseFirstLetterPipe = (function () {
    function UppercaseFirstLetterPipe() {
    }
    UppercaseFirstLetterPipe.prototype.transform = function (value, args) {
        if (value === null) {
            return 'Nothing to transform';
        }
        return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    };
    return UppercaseFirstLetterPipe;
}());
UppercaseFirstLetterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'uppercaseFirstLetter'
    })
], UppercaseFirstLetterPipe);

//# sourceMappingURL=uppercase-first-letter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_timeout__ = __webpack_require__("../../../../rxjs/add/operator/timeout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APIService; });
/**
 * Created by lesly on 19.07.17.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// Improvement of coding style :
// leaving one empty line between third party imports and application imports
// listing import lines alphabetized by the module







var APIService = (function () {
    function APIService(http, logger, loaderService, toasterService) {
        this.http = http;
        this.logger = logger;
        this.loaderService = loaderService;
        this.toasterService = toasterService;
        this.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
        this.http = http;
        this.logger = logger;
        this.loaderService = loaderService;
        this.toasterService = toasterService;
    }
    APIService.prototype.handleError = function (error) {
        this.loaderService.display(false);
        var message;
        if (this.isNullOrUndefined(error.json().message)) {
            message = 'UNKNOWN ERROR';
        }
        else {
            this.logger.log('APIService/handleError nnn' + error.json().message);
            message = error.json().message;
            message = ', ' + message;
            var status = error.json().error.status;
            var statusText = error.json().error.statusText;
            message = statusText + ' ' + message;
        }
        this.toasterService.showToaster(message);
        this.logger.log('An error occurred: ' + message); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    APIService.prototype.isNullOrUndefined = function (x) {
        var result = false;
        if (x == null) {
            result = true;
        }
        if (x === null) {
            result = true;
        }
        if (typeof x === 'undefined') {
            result = true;
        }
        return result;
    };
    APIService.prototype.POST = function (payload, url, request, toJson) {
        if (request === void 0) { request = {}; }
        if (toJson === void 0) { toJson = true; }
        if (!request.headers)
            request.headers = this.headers;
        return this.http
            .post(url, JSON.stringify(payload), request)
            .timeout(__WEBPACK_IMPORTED_MODULE_5__data_service__["c" /* timeOut */])
            .toPromise()
            .then(function (response) { return toJson ? response.json() : response; })
            .catch(this.handleError.bind(this));
    };
    APIService.prototype.POSTunStringify = function (payload, url, request, toJson) {
        if (request === void 0) { request = {}; }
        if (toJson === void 0) { toJson = true; }
        if (!request.headers)
            request.headers = this.headers;
        return this.http
            .post(url, payload, request)
            .timeout(__WEBPACK_IMPORTED_MODULE_5__data_service__["c" /* timeOut */])
            .toPromise()
            .then(function (response) { return toJson ? response.json() : response; })
            .catch(this.handleError.bind(this));
    };
    APIService.prototype.GET = function (url, request) {
        if (request === void 0) { request = {}; }
        return this.http.get(url, request);
    };
    APIService.prototype.DELETE = function (url, request) {
        if (request === void 0) { request = {}; }
        return this.http.delete(url, request);
    };
    APIService.prototype.pGET = function (url, request) {
        if (request === void 0) { request = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http
                            .get(url, request)
                            .toPromise()
                            .then(function (response) { return response; })
                            .catch(this.handleError.bind(this))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    APIService.prototype.getJSONFromFille = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.http.get(url)
                        .toPromise()
                        .then(function (response) { return response.json(); })];
            });
        });
    };
    return APIService;
}());

//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/error-handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toaster_service__ = __webpack_require__("../../../../../src/app/shared/services/toaster.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loader_service__ = __webpack_require__("../../../../../src/app/shared/services/loader.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalErrorHandler; });
/**
 * Created by lesly on 13.07.17.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Improvement of coding style : 
// leaving one empty line between third party imports and application imports



var GlobalErrorHandler = (function () {
    function GlobalErrorHandler(injector) {
        this.injector = injector;
    }
    GlobalErrorHandler.prototype.handleError = function (error) {
        var loaderService = this.injector.get(__WEBPACK_IMPORTED_MODULE_2__loader_service__["a" /* LoaderService */]);
        loaderService.display(false);
        var message = error.message ? error.message : error.toString();
        var toasterService = this.injector.get(__WEBPACK_IMPORTED_MODULE_1__toaster_service__["a" /* ToasterService */]);
        toasterService.showToaster(message);
        // IMPORTANT: Rethrow the error otherwise it gets swallowed
        throw error;
    };
    return GlobalErrorHandler;
}());
GlobalErrorHandler = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]) === "function" && _a || Object])
], GlobalErrorHandler);

var _a;
//# sourceMappingURL=error-handler.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/geocoding.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class_location_location_class__ = __webpack_require__("../../../../../src/app/shared/class/location/location.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loader_service__ = __webpack_require__("../../../../../src/app/shared/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__logger_service__ = __webpack_require__("../../../../../src/app/shared/services/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeocodingService; });
/**
 * Created by lesly on 27.05.17.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Improvement of coding style : 
// listing import lines alphabetized by the module










var GeocodingService = (function () {
    function GeocodingService(http, logger, loaderService) {
        this.logger = logger;
        this.loaderService = loaderService;
        this.http = http;
        this.logger = logger;
    }
    GeocodingService.prototype.geocode = function (address) {
        var _this = this;
        this.logger.log('GeocodingService/geocode()');
        this.loaderService.display(true);
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_7__data_service__["k" /* geocodeUrl */] + encodeURIComponent(address) + "&format=json&polygon=1&addressdetails=1")
            .map(function (res) { return res.json(); })
            .map(function (result) {
            //if (result.status !== 'OK') { throw new Error('unable to geocode address'); }
            var location = new __WEBPACK_IMPORTED_MODULE_1__class_location_location_class__["a" /* LocationClass */]();
            location.address = result[0].display_name;
            location.latitude = result[0].lat;
            location.longitude = result[0].lon;
            var viewPort = result[0].boundingbox;
            location.viewBounds = L.latLngBounds({
                lat: viewPort[0],
                lng: viewPort[2]
            }, {
                lat: viewPort[1],
                lng: viewPort[3]
            });
            _this.loaderService.display(false);
            return location;
        });
    };
    GeocodingService.prototype.getCurrentLocation = function () {
        var _this = this;
        this.logger.log('GeocodingService/getCurrentLocation()');
        // this.loaderService.display(true);
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_7__data_service__["l" /* getIpUrl */])
            .map(function (res) { return res.json().ip; })
            .flatMap(function (ip) { return _this.http.get(__WEBPACK_IMPORTED_MODULE_7__data_service__["m" /* getLocationFromIp */] + ip); })
            .map(function (res) { return res.json(); })
            .map(function (result) {
            var location = new __WEBPACK_IMPORTED_MODULE_1__class_location_location_class__["a" /* LocationClass */]();
            location.address = result.city + ', ' + result.region_code + ' ' + result.zip_code + ', ' + result.country_code;
            location.latitude = result.latitude;
            location.longitude = result.longitude;
            //   this.loaderService.display(false);
            return location;
        });
    };
    GeocodingService.prototype.handleError = function (error) {
        this.logger.log('GeocodingService/handleError() err : ' + error);
        this.loaderService.display(false);
        return Promise.reject(error.message || error);
    };
    return GeocodingService;
}());
GeocodingService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__logger_service__["a" /* Logger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__logger_service__["a" /* Logger */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__loader_service__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__loader_service__["a" /* LoaderService */]) === "function" && _c || Object])
], GeocodingService);

var _a, _b, _c;
//# sourceMappingURL=geocoding.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__geocoding_service__ = __webpack_require__("../../../../../src/app/shared/services/geocoding.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__geocoding_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loader_service__ = __webpack_require__("../../../../../src/app/shared/services/loader.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__loader_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toaster_service__ = __webpack_require__("../../../../../src/app/shared/services/toaster.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__toaster_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__api_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__error_handler__ = __webpack_require__("../../../../../src/app/shared/services/error-handler.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__error_handler__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__logger_service__ = __webpack_require__("../../../../../src/app/shared/services/logger.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__logger_service__["a"]; });






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/interaction.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_features_selection_scale__ = __webpack_require__("../../../../../src/app/features/selection-scale/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toaster_service__ = __webpack_require__("../../../../../src/app/shared/services/toaster.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__features_summary_result_summary_result_service__ = __webpack_require__("../../../../../src/app/features/summary-result/summary-result.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_nav_service_navigation_bar_service__ = __webpack_require__("../../../../../src/app/pages/nav/service/navigation-bar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__logger_service__ = __webpack_require__("../../../../../src/app/shared/services/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__features_side_panel_side_panel_service__ = __webpack_require__("../../../../../src/app/features/side-panel/side-panel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_features_layers__ = __webpack_require__("../../../../../src/app/features/layers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__features_graph_heat_load_heat_load_service__ = __webpack_require__("../../../../../src/app/features/graph/heat-load/heat-load.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__features_export_data_service_export_data_service__ = __webpack_require__("../../../../../src/app/features/export-data/service/export-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__features_graph_duration_curve_duration_curve_service__ = __webpack_require__("../../../../../src/app/features/graph/duration-curve/duration-curve.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__features_layers_interaction_layers_interaction_service__ = __webpack_require__("../../../../../src/app/features/layers-interaction/layers-interaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__features_graph_electricity_mix_service_electricity_mix_service__ = __webpack_require__("../../../../../src/app/features/graph/electricity-mix/service/electricity-mix.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__features_calculation_module_service_calculation_test_service__ = __webpack_require__("../../../../../src/app/features/calculation-module/service/calculation-test.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__features_calculation_module_service_calculation_module_service__ = __webpack_require__("../../../../../src/app/features/calculation-module/service/calculation-module.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_app_features_calculation_module_service_calcultation_module_status_service__ = __webpack_require__("../../../../../src/app/features/calculation-module/service/calcultation-module-status.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InteractionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// TODO: Improvement of coding style :
// TODO: leaving one empty line between third party imports and application imports
// TODO: listing import lines alphabetized by the module














var InteractionService = (function () {
    function InteractionService(logger, sidePanelService, toasterService, navigationBarService, summaryResultService, layerService, exportDataService, heatLoadAggregateService, durationCurveService, dataInteractionService, electricityMixService, calculationModuleStatusService, calculationModuleService, calculationHeatLoadDividedService, selectionScaleService) {
        this.logger = logger;
        this.sidePanelService = sidePanelService;
        this.toasterService = toasterService;
        this.navigationBarService = navigationBarService;
        this.summaryResultService = summaryResultService;
        this.layerService = layerService;
        this.exportDataService = exportDataService;
        this.heatLoadAggregateService = heatLoadAggregateService;
        this.durationCurveService = durationCurveService;
        this.dataInteractionService = dataInteractionService;
        this.electricityMixService = electricityMixService;
        this.calculationModuleStatusService = calculationModuleStatusService;
        this.calculationModuleService = calculationModuleService;
        this.calculationHeatLoadDividedService = calculationHeatLoadDividedService;
        this.selectionScaleService = selectionScaleService;
        this.summaryResultState = false;
        this.electricityGenerationResultState = false;
        this.currentCMiD = null;
        this.cmRunning = false;
        this.cmRunningProgess = 0;
    }
    InteractionService.prototype.getScaleLevel = function () {
        return this.selectionScaleService.getScaleValue();
    };
    InteractionService.prototype.showToaster = function (msg) {
        this.toasterService.showToaster(msg);
    };
    InteractionService.prototype.getLayerArray = function () {
        return this.layerService.getLayerArray();
    };
    /*     setLoadingLayerInterraction(layer) {
          this.dataInteractionService.setLoadingLayerInterraction(layer)
        }
        unsetLoadingLayerInterraction(layer) {
          this.dataInteractionService.unsetLoadingLayerInterraction(layer)
    
        } */
    // interface for export data service
    InteractionService.prototype.setSummaryResultState = function (val) {
        this.summaryResultState = val;
    };
    InteractionService.prototype.setElectricityGenerationMixResultState = function (val) {
        this.electricityGenerationResultState = val;
    };
    InteractionService.prototype.getElectricityGenerationMixResultState = function () {
        return this.electricityGenerationResultState;
    };
    InteractionService.prototype.getSummaryResultState = function () {
        return this.summaryResultState;
    };
    InteractionService.prototype.enableStateOpenWithFunction = function (functionString) {
        this.navigationBarService.enableOpenStateWithFunction(functionString);
    };
    InteractionService.prototype.disableStateOpenWithFunction = function (functionString) {
        this.navigationBarService.disableOpenStateWithFunction(functionString);
    };
    InteractionService.prototype.enableButtonWithId = function (buttonString) {
        this.navigationBarService.enableButton(buttonString);
    };
    InteractionService.prototype.disableButtonWithId = function (buttonString) {
        this.navigationBarService.disableButton(buttonString);
    };
    InteractionService.prototype.disableAllButtonsWithFunction = function (functionString) {
        this.navigationBarService.disableButton(functionString);
    };
    InteractionService.prototype.enableAllButtonsWithFunction = function (functionString) {
        this.navigationBarService.enableButtons(functionString);
    };
    // RIGHT PANEL
    InteractionService.prototype.openRightPanel = function () {
        this.sidePanelService.openRightPanel();
    };
    InteractionService.prototype.openTopPanel = function () {
        this.sidePanelService.topPanelexpandedCollapsed();
    };
    InteractionService.prototype.closeTopPanel = function () {
        this.logger.log('InteractionService/closeTopPanel');
        this.sidePanelService.topPanelexpandedCollapsed();
    };
    InteractionService.prototype.closeRightPanel = function () {
        this.sidePanelService.closeRightPanel();
    };
    InteractionService.prototype.disableRightPanel = function () {
        this.sidePanelService.closeRightPanel();
        this.disableButtonWithId('load_result');
        this.disableStateOpenWithFunction('right');
    };
    // Folder Panel
    InteractionService.prototype.actionFolderPanel = function (toOpen) {
        if (toOpen === void 0) { toOpen = false; }
        if (toOpen)
            this.closeSavePanel();
        this.sidePanelService.setFolderPanelStatus(toOpen);
        this.navigationBarService.getButtonWithId('folder').stateOpen = toOpen;
    };
    InteractionService.prototype.openFolderPanel = function () {
        this.actionFolderPanel(true);
    };
    InteractionService.prototype.closeFolderPanel = function () {
        this.actionFolderPanel(false);
    };
    // Save Panel
    InteractionService.prototype.actionSavePanel = function (toOpen) {
        if (toOpen === void 0) { toOpen = false; }
        if (toOpen)
            this.closeFolderPanel();
        this.sidePanelService.setSavePanelStatus(toOpen);
        this.navigationBarService.getButtonWithId('save').stateOpen = toOpen;
    };
    InteractionService.prototype.openSavePanel = function () {
        this.actionSavePanel(true);
    };
    InteractionService.prototype.closeSavePanel = function () {
        this.actionSavePanel(false);
    };
    // LEFT PANEL
    InteractionService.prototype.openLeftPanel = function () {
        this.sidePanelService.openLeftPanel();
    };
    InteractionService.prototype.closeLeftPanel = function () {
        this.sidePanelService.closeLeftPanel();
    };
    InteractionService.prototype.disableLeftPanel = function () {
        this.sidePanelService.closeLeftPanel();
    };
    InteractionService.prototype.getNavButtons = function () {
        return this.navigationBarService.getButtons();
    };
    InteractionService.prototype.getSummaryResultWithIds = function (payload) {
        return this.summaryResultService.getSummaryResultWithIds(payload);
    };
    InteractionService.prototype.getSummaryResultWithMultiAreas = function (payload) {
        return this.summaryResultService.getSummaryResultWithMultiAreas(payload);
    };
    InteractionService.prototype.getSummaryPersonnalLayers = function (payload) {
        return this.summaryResultService.getSummaryResultPersonnalLayers(payload);
    };
    InteractionService.prototype.getHeatLoad = function (payload, type_api_ref, isHectare) {
        return this.heatLoadAggregateService.getHeatLoad(payload, type_api_ref, isHectare);
    };
    InteractionService.prototype.getHeatLoadData = function () {
        return this.heatLoadAggregateService.getHeatLoadData();
    };
    InteractionService.prototype.setHeatLoadData = function (data) {
        return this.heatLoadAggregateService.setHeatLoadData(data);
    };
    InteractionService.prototype.formatHeatLoadForChartjs = function (data, api_ref) {
        return this.heatLoadAggregateService.formatHeatLoadForChartjs(data, api_ref);
    };
    InteractionService.prototype.getDurationCurveWithPayload = function (payload, isHectare) {
        return this.durationCurveService.getDurationCurveWithPayload(payload, isHectare);
    };
    InteractionService.prototype.transformDurationCurveData = function (data) {
        return this.durationCurveService.transformData(data);
    };
    InteractionService.prototype.getDefaultDatasetDurationCurve = function () {
        return this.durationCurveService.getDefaultDatasetDurationCurve();
    };
    InteractionService.prototype.getSplittedResults = function (results) {
        return this.dataInteractionService.getSplittedResults(results);
    };
    InteractionService.prototype.getChien = function (r) {
        return this.dataInteractionService.getSplittedResults(r);
    };
    InteractionService.prototype.getElectricityMix = function (payload) {
        return this.electricityMixService.getElectricityMix(payload);
    };
    InteractionService.prototype.enableOpenStateWithId = function (id) {
        this.navigationBarService.enableOpenStateWithId(id);
    };
    InteractionService.prototype.disableOpenStateWithId = function (id) {
        this.navigationBarService.disableOpenStateWithId(id);
    };
    InteractionService.prototype.getCMResult = function (summaryResult, cm) {
        return this.calculationHeatLoadDividedService.getCMResult(summaryResult, cm);
    };
    InteractionService.prototype.setCMResult = function (summaryResult, cm) {
        return this.calculationHeatLoadDividedService.getCMResult(summaryResult, cm);
    };
    InteractionService.prototype.getCMInformations = function (payload) {
        return this.calculationModuleService.getCMInformations(payload);
    };
    InteractionService.prototype.getStatusAndCMResult = function (id) {
        return this.calculationModuleService.getStatusOfCM(id);
    };
    /* getCMResultMockData() {
      return this.calculationModuleService.getCMResultMockData()

    } */
    InteractionService.prototype.getCMRunned = function () {
        return this.calculationModuleStatusService.getCmRunned();
    };
    InteractionService.prototype.setStatusCMPanel = function (value) {
        return this.calculationModuleStatusService.setStatusCMPanel(value);
    };
    InteractionService.prototype.setCMAnimationStatus = function (value) {
        this.calculationModuleStatusService.setCmAnimationStatus(value);
    };
    InteractionService.prototype.getCMAnimationStatus = function () {
        this.calculationModuleStatusService.getCmAnimationStatus();
    };
    InteractionService.prototype.undefinedCmRunned = function () {
        this.calculationModuleStatusService.undefinedCmRunned();
    };
    InteractionService.prototype.deleteCM = function (id) {
        return this.calculationModuleService.deleteCM(id);
    };
    InteractionService.prototype.getCmRunning = function () {
        return this.cmRunning;
    };
    InteractionService.prototype.setCmRunning = function (cmRunning) {
        this.cmRunning = cmRunning;
    };
    InteractionService.prototype.getCurrentIdCM = function () {
        return this.currentCMiD;
    };
    InteractionService.prototype.setCurrentIdCM = function (currentCMiD) {
        this.currentCMiD = currentCMiD;
    };
    InteractionService.prototype.getcmRunningProgess = function () {
        return this.cmRunningProgess;
    };
    InteractionService.prototype.setCmRunningProgess = function (cmRunningProgess) {
        this.cmRunningProgess = cmRunningProgess;
    };
    InteractionService.prototype.getStatusCMPanel = function () {
        return this.calculationModuleStatusService.getStatusCMPanel();
    };
    InteractionService.prototype.deleteCMTask = function () {
        var _this = this;
        if (this.getcmRunningProgess() > 0 && this.currentCMiD != null) {
            var currentCMiD = this.currentCMiD;
            this.setCurrentIdCM(null);
            return this.calculationModuleService.deleteCM(currentCMiD).toPromise().then(function (response) {
                _this.logger.log('CMMMMM REMOVEEEED');
                _this.currentCMiD = null;
            })
                .catch(function () { });
        }
        if (this.getStatusCMPanel().value == true) {
            this.setStatusCMPanel(false);
        }
    };
    return InteractionService;
}());
InteractionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__logger_service__["a" /* Logger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__logger_service__["a" /* Logger */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__features_side_panel_side_panel_service__["a" /* SidePanelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__features_side_panel_side_panel_service__["a" /* SidePanelService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__toaster_service__["a" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__toaster_service__["a" /* ToasterService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__pages_nav_service_navigation_bar_service__["a" /* NavigationBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__pages_nav_service_navigation_bar_service__["a" /* NavigationBarService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__features_summary_result_summary_result_service__["a" /* SummaryResultService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__features_summary_result_summary_result_service__["a" /* SummaryResultService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7_app_features_layers__["LayersService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_app_features_layers__["LayersService"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_9__features_export_data_service_export_data_service__["a" /* ExportDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__features_export_data_service_export_data_service__["a" /* ExportDataService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8__features_graph_heat_load_heat_load_service__["a" /* HeatLoadAggregateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__features_graph_heat_load_heat_load_service__["a" /* HeatLoadAggregateService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_10__features_graph_duration_curve_duration_curve_service__["a" /* DurationCurveService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__features_graph_duration_curve_duration_curve_service__["a" /* DurationCurveService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_11__features_layers_interaction_layers_interaction_service__["a" /* DataInteractionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__features_layers_interaction_layers_interaction_service__["a" /* DataInteractionService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_12__features_graph_electricity_mix_service_electricity_mix_service__["a" /* ElectricityMixService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__features_graph_electricity_mix_service_electricity_mix_service__["a" /* ElectricityMixService */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_15_app_features_calculation_module_service_calcultation_module_status_service__["a" /* CalculationModuleStatusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_15_app_features_calculation_module_service_calcultation_module_status_service__["a" /* CalculationModuleStatusService */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_14__features_calculation_module_service_calculation_module_service__["a" /* CalculationModuleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_14__features_calculation_module_service_calculation_module_service__["a" /* CalculationModuleService */]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_13__features_calculation_module_service_calculation_test_service__["a" /* CalculationHeatLoadDividedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13__features_calculation_module_service_calculation_test_service__["a" /* CalculationHeatLoadDividedService */]) === "function" && _p || Object, typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_0_app_features_selection_scale__["a" /* SelectionScaleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_app_features_selection_scale__["a" /* SelectionScaleService */]) === "function" && _q || Object])
], InteractionService);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
//# sourceMappingURL=interaction.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/loader.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by lesly on 19.06.17.
 */


var LoaderService = (function () {
    function LoaderService() {
        this.status = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](false);
    }
    LoaderService.prototype.display = function (value) {
        this.status.next(value);
    };
    LoaderService.prototype.getStatus = function () {
        return this.status;
    };
    return LoaderService;
}());
LoaderService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], LoaderService);

//# sourceMappingURL=loader.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/logger.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Logger; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by lesly on 09.06.17.
 */


var Logger = (function () {
    function Logger() {
        this.logs = []; // capture logs for testing
        this.str = '';
    }
    Logger.prototype.log = function (message) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])() === true) {
            this.logs.push(message);
            console.log(message);
        }
    };
    Logger.prototype.logObj = function (obj) {
        var output = '';
        console.log(output);
        // Improvement of coding style : (with codelyzer)
        // for (... in ...) statements must be filtered with an if statement
        // Identifier 'property' is never reassigned; use 'const' instead of 'let'
        for (var property in obj) {
            console.log(output);
            output += property + ': ' + obj[property] + '; ';
        }
        this.logs.push(output);
        console.log(output);
    };
    Logger.prototype.logJson = function (obj) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])() === true) {
            this.logs.push('JSON representation: ' + JSON.stringify(obj));
        }
    };
    Logger.prototype.describeProperties = function (object) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])() === true) {
            for (var prop in object) {
                // object[prop]
                this.logs.push(object[prop]);
                break;
            }
        }
    };
    return Logger;
}());
Logger = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], Logger);

//# sourceMappingURL=logger.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/snapshot.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_features_user_management__ = __webpack_require__("../../../../../src/app/features/user-management/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_pages_map__ = __webpack_require__("../../../../../src/app/pages/map/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_features_selection_tools__ = __webpack_require__("../../../../../src/app/features/selection-tools/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__toaster_service__ = __webpack_require__("../../../../../src/app/shared/services/toaster.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__helper__ = __webpack_require__("../../../../../src/app/shared/helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__business__ = __webpack_require__("../../../../../src/app/shared/business/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__features_layers_interaction_layers_interaction_data__ = __webpack_require__("../../../../../src/app/features/layers-interaction/layers-interaction.data.ts");
/* unused harmony export snapshotUrl */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SnapshotService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var snapshotUrl = __WEBPACK_IMPORTED_MODULE_8__data_service__["a" /* apiUrl */] + '/snapshot/';
var SnapshotService = (function () {
    function SnapshotService(http, userStatus, mapService, slcToolsService, helper, toasterService) {
        var _this = this;
        this.http = http;
        this.userStatus = userStatus;
        this.mapService = mapService;
        this.slcToolsService = slcToolsService;
        this.helper = helper;
        this.toasterService = toasterService;
        this.userStatus.getUserToken().subscribe(function (value) {
            _this.userToken = value;
        });
    }
    /**
     * Use toaster to show message of success and error
     * @param res Response of the api
     * @param success true from then, false from catch
     */
    SnapshotService.prototype.showMsg = function (res, success) {
        this.toasterService.showToaster(res.json()["message"]);
        return success;
    };
    /**
     * Add a new snapshot
     * @param name
     * @param description
     * @returns Promise with success of the procedure
     */
    SnapshotService.prototype.add = function (name, description) {
        var _this = this;
        if (description === void 0) { description = ""; }
        var scale = this.slcToolsService.getScaleValue();
        var config = {
            name: name,
            description: description,
            date: new Date(),
            scale: scale,
            zones: scale !== __WEBPACK_IMPORTED_MODULE_8__data_service__["d" /* hectare */] ? this.slcToolsService.nutsIdsSubject.getValue()
                : this.slcToolsService.areasSubject.getValue().map(function (area) {
                    if (area instanceof L.Circle) {
                        var circle = area;
                        var radius = circle.getRadius();
                        circle = circle.toGeoJSON();
                        circle.properties.radius = radius;
                        return circle;
                    }
                    else
                        return area.toGeoJSON();
                }),
            layers: this.mapService.getLayerArray().getValue(),
            center: this.mapService.getMap().getCenter(),
            zoom: this.mapService.getZoomLevel().getValue()
        };
        return this.http.post(snapshotUrl + 'add', {
            token: this.userToken, config: JSON.stringify(config)
        }).toPromise()
            .then(function (response) { return _this.showMsg(response, true); })
            .catch(function (response) { return _this.showMsg(response, false); });
    };
    SnapshotService.prototype.apply = function (snapshot, callback) {
        var _this = this;
        var mapService = this.mapService;
        var map = mapService.getMap();
        // remove all
        mapService.clearAll(map);
        // de/enable layers
        var layers2Toggle = [];
        {
            var lay_1 = snapshot.layers.concat(mapService.getLayerArray().getValue());
            for (var i = 0; i < lay_1.length; i++) {
                var add = true;
                for (var j = 0; j < lay_1.length; j++) {
                    if (j == i)
                        continue;
                    if (lay_1[i] == lay_1[j]) {
                        add = false;
                        break;
                    }
                }
                if (add) {
                    __WEBPACK_IMPORTED_MODULE_10__features_layers_interaction_layers_interaction_data__["a" /* DataInteractionArray */].forEach(function (dataInteraction) {
                        if (dataInteraction.workspaceName === lay_1[i])
                            layers2Toggle.push(dataInteraction);
                    });
                }
            }
        }
        layers2Toggle.forEach(function (layer) { return mapService.showOrRemoveLayer(layer.workspaceName, layer.order); });
        __WEBPACK_IMPORTED_MODULE_10__features_layers_interaction_layers_interaction_data__["a" /* DataInteractionArray */].forEach(function (dataInteraction) {
            dataInteraction.isSelected = false;
            snapshot.layers.forEach(function (layer) {
                if (dataInteraction.workspaceName === layer)
                    dataInteraction.isSelected = true;
            });
        });
        var nutLvl = __WEBPACK_IMPORTED_MODULE_9__business__["a" /* NutsRenderArray */].find(function (nut) { return nut.business_name == snapshot.scale; });
        // To change scale
        var control = map.scaleControl;
        control.getContainer().getElementsByTagName('input')[nutLvl.id].click();
        map.flyTo(snapshot.center, snapshot.zoom);
        if (nutLvl) {
            if (nutLvl.business_name != __WEBPACK_IMPORTED_MODULE_8__data_service__["d" /* hectare */]) {
                // Working but a little slow
                var isLau2 = nutLvl.business_name == __WEBPACK_IMPORTED_MODULE_8__data_service__["e" /* lau2 */];
                var nameId = isLau2 ? 'comm_id' : 'nuts_id';
                var layer = isLau2 ? __WEBPACK_IMPORTED_MODULE_8__data_service__["f" /* lau2name */] : 'population';
                var date_filter = isLau2 ? '' : 'date=\'2013-01-01\' AND ';
                var stat_level_filter = isLau2 ? '' : ' AND stat_levl_=' + nutLvl.api_name;
                var nuts_ids = nameId + "='" + snapshot.zones.join("' OR " + nameId + "='") + "'";
                var url = __WEBPACK_IMPORTED_MODULE_8__data_service__["g" /* geoserverUrl */] + '?service=WFS&version=2.0.0&request=GetFeature' +
                    ("&typeNames=hotmaps:" + layer + "&outputFormat=application/json") +
                    ("&cql_filter=" + date_filter + "(" + nuts_ids + ")" + stat_level_filter);
                this.http.get(url).map(function (res) { return res.json(); })
                    .subscribe(function (res) {
                    res.features.forEach(function (geo) { return mapService.selectAreaWithNuts(geo); });
                    if (callback)
                        callback();
                }, function (err) {
                    console.error(err);
                    if (callback)
                        callback();
                });
            }
            else {
                snapshot.zones.forEach(function (zone) {
                    var shape = L.geoJSON(zone, {
                        pointToLayer: function (feature, latlng) {
                            if (feature.properties.radius)
                                return new L.Circle(latlng, feature.properties.radius);
                        }
                    });
                    if (zone.properties.radius) {
                        shape.radius = zone.properties.radius;
                        shape.latLng = L.GeoJSON.coordsToLatLng(zone.geometry.coordinates);
                    }
                    else
                        shape.latLngs = L.GeoJSON.coordsToLatLngs(zone.geometry.coordinates[0]);
                    _this.slcToolsService.drawHectaresLoadingResult(map, shape);
                });
                if (callback)
                    callback();
            }
        }
    };
    /**
     * Get the list of the snapshots
     * @returns Promise with the snapshots
     */
    SnapshotService.prototype.list = function () {
        return this.http.post(snapshotUrl + 'list', { token: this.userToken })
            .toPromise().then(function (response) {
            var snaps = response.json()["snapshots"];
            var snapshots = [];
            for (var i in snaps) {
                var snap = JSON.parse(snaps[i]["config"]);
                snap.id = snaps[i]['id'];
                snapshots.push(snap);
            }
            return snapshots;
        });
    };
    /* TODO
    update() {
  
    }*/
    /**
     * Delete a snapshot
     * @param id id of the snapshot to delete
     * @returns Promise with success of the procedure
     */
    SnapshotService.prototype.delete = function (id) {
        var _this = this;
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_util__["isNumber"])(id))
            id = id.id;
        return this.http.delete(snapshotUrl + 'delete', {
            body: { token: this.userToken, id: id }
        }).toPromise()
            .then(function (response) { return _this.showMsg(response, true); })
            .catch(function (response) { return _this.showMsg(response, false); });
    };
    return SnapshotService;
}());
SnapshotService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_features_user_management__["e" /* UserManagementStatusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_features_user_management__["e" /* UserManagementStatusService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_app_pages_map__["b" /* MapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_pages_map__["b" /* MapService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_app_features_selection_tools__["a" /* SelectionToolService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_features_selection_tools__["a" /* SelectionToolService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__helper__["a" /* Helper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__helper__["a" /* Helper */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__toaster_service__["a" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__toaster_service__["a" /* ToasterService */]) === "function" && _f || Object])
], SnapshotService);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=snapshot.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/toaster.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_uikit__ = __webpack_require__("../../../../uikit/dist/js/uikit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_uikit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_uikit__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToasterService; });
/**
 * Created by lesly on 14.07.17.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Improvement of coding style :
// leaving one empty line between third party imports and application imports


/* import { MdSnackBar } from '@angular/material';
 */
var ToasterService = (function () {
    function ToasterService() {
    }
    ToasterService.prototype.showToaster = function (msg) {
        __WEBPACK_IMPORTED_MODULE_1_uikit__["notification"].closeAll();
        __WEBPACK_IMPORTED_MODULE_1_uikit__["notification"]({ message: msg, pos: 'bottom-center', timeout: 3000 });
    };
    return ToasterService;
}());
ToasterService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ToasterService);

//# sourceMappingURL=toaster.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/upload.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_features_user_management_service_user_management_status_service__ = __webpack_require__("../../../../../src/app/features/user-management/service/user-management-status.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_features_selection_tools__ = __webpack_require__("../../../../../src/app/features/selection-tools/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_pages_map__ = __webpack_require__("../../../../../src/app/pages/map/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__toaster_service__ = __webpack_require__("../../../../../src/app/shared/services/toaster.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__helper__ = __webpack_require__("../../../../../src/app/shared/helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__logger_service__ = __webpack_require__("../../../../../src/app/shared/services/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__loader_service__ = __webpack_require__("../../../../../src/app/shared/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_app_features_layers_interaction_layers_interaction_service__ = __webpack_require__("../../../../../src/app/features/layers-interaction/layers-interaction.service.ts");
/* unused harmony export uploadUrl */
/* unused harmony export LayersExportInfo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var uploadUrl = __WEBPACK_IMPORTED_MODULE_8__data_service__["a" /* apiUrl */] + '/upload/';
// To integrate in DataInteractionArray?
// datatype is needed, schema (temporary) too
// Data Given
var LayersExportInfo = { "default": { "schema": "", "data_type": "raster" }, "heat_tot_curr_density": { "schema": "geo", "data_type": "raster" }, "heat_res_curr_density": { "schema": "geo", "data_type": "raster" }, "heat_nonres_curr_density": { "schema": "geo", "data_type": "raster" }, "gfa_tot_curr_density": { "schema": "geo", "data_type": "raster" }, "gfa_res_curr_density": { "schema": "geo", "data_type": "raster" }, "gfa_nonres_curr_density": { "schema": "geo", "data_type": "raster" }, "vol_tot_curr_density": { "schema": "geo", "data_type": "raster" }, "vol_res_curr_density": { "schema": "geo", "data_type": "raster" }, "vol_nonres_curr_density": { "schema": "geo", "data_type": "raster" }, "industrial_database_emissions": { "schema": "public", "data_type": "csv" }, "industrial_database_excess_heat": { "schema": "public", "data_type": "csv" }, "industrial_database_companyname": { "schema": "public", "data_type": "csv" }, "industrial_database_subsector": { "schema": "public", "data_type": "csv" }, "pop_tot_curr_density": { "schema": "geo", "data_type": "raster" }, "wwtp_power": { "schema": "public", "data_type": "csv" }, "wwtp_capacity": { "schema": "public", "data_type": "csv" }, "agricultural_residues_view": { "schema": "geo", "data_type": "csv" }, "livestock_effluents_view": { "schema": "geo", "data_type": "csv" }, "potential_forest": { "schema": "geo", "data_type": "raster" }, "potential_municipal_solid_waste": { "schema": "public", "data_type": "csv" }, "wind_50m": { "schema": "geo", "data_type": "raster" }, "solar_optimal_total": { "schema": "geo", "data_type": "raster" }, "shallow_geothermal_potential": { "schema": "geo", "data_type": "csv" }, "land_surface_temperature": { "schema": "geo", "data_type": "raster" }, "cdd_curr": { "schema": "geo", "data_type": "raster" }, "hdd_curr": { "schema": "geo", "data_type": "raster" }, "solar_radiation": { "schema": "geo", "data_type": "raster" }, "output_wind_speed": { "schema": "geo", "data_type": "raster" }, "yearly_co2_emission": { "schema": "public", "data_type": "csv" } };
var UploadService = (function (_super) {
    __extends(UploadService, _super);
    function UploadService(userStatus, slcToolsService, helper, mapService, dataInsteractionService, http, logger, loaderService, toasterService) {
        var _this = _super.call(this, http, logger, loaderService, toasterService) || this;
        _this.userStatus = userStatus;
        _this.slcToolsService = slcToolsService;
        _this.helper = helper;
        _this.mapService = mapService;
        _this.dataInsteractionService = dataInsteractionService;
        _this.http = http;
        _this.logger = logger;
        _this.loaderService = loaderService;
        _this.toasterService = toasterService;
        // For Show and Remove
        _this.activeLayers = {};
        _this.uploadedFiles = new __WEBPACK_IMPORTED_MODULE_9_rxjs__["BehaviorSubject"]([]);
        _this.activePersonalLayers = new __WEBPACK_IMPORTED_MODULE_9_rxjs__["BehaviorSubject"]({});
        _this.userStatus.getUserToken().subscribe(function (value) { return _this.userToken = value; });
        return _this;
    }
    /**
     * To refresh the list automatically
     */
    UploadService.prototype.getUploadedFiles = function () {
        return this.uploadedFiles;
    };
    UploadService.prototype.getActivePersonalLayers = function () {
        return this.activePersonalLayers;
    };
    /**
     * Use toaster to show message of success and error
     * @param res Response of the api
     * @param success true from then, false from catch
     */
    UploadService.prototype.showMsg = function (res, success) {
        this.list();
        this.toasterService.showToaster(res["message"]);
        return success;
    };
    /**
     * Add a file to the uploaded files
     * @param file file to add
     * @param layer layer of the file
     * @returns Promise with success of the procedure
     */
    UploadService.prototype.add = function (file, layer) {
        var _this = this;
        var form = new FormData();
        form.append('token', this.userToken);
        form.append('name', file.name);
        form.append('file', file, file.name);
        form.append('layer', layer.workspaceName);
        form.append('layer_type', layer.layer_type);
        return _super.prototype.POSTunStringify.call(this, form, uploadUrl + 'add', { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]() })
            .then(function (response) { return _this.showMsg(response, true); })
            .catch(function (response) { return _this.showMsg(response, false); });
    };
    /**
     * Delete an uploaded file
     * @param id id of the file to delete
     * @returns Promise with success of the procedure
     */
    UploadService.prototype.delete = function (id) {
        var _this = this;
        this.remove(id); // remove first
        this.dataInsteractionService.removeLayer(id);
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_util__["isNumber"])(id))
            id = id.id;
        return _super.prototype.DELETE.call(this, uploadUrl + 'delete', {
            body: { token: this.userToken, id: id }
        }).toPromise()
            .then(function (response) { return _this.showMsg(response.json(), true); })
            .catch(function (response) { return _this.showMsg(response.json(), false); });
    };
    /**
     * Create an url to download a uploaded file
     * @param id
     * @param filename name of the file to download
     * @returns Promise with the url to download
     */
    UploadService.prototype.download = function (id) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_util__["isNumber"])(id))
            id = id.id;
        return _super.prototype.POSTunStringify.call(this, {
            token: this.userToken, id: id
        }, uploadUrl + 'download', { responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* ResponseContentType */].Blob, headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]() }).then(function (data) { return URL.createObjectURL(data); }).catch(function (err) {
            return ""; // If file dont exist
        });
    };
    /**
     * Get the list of the uploaded files
     * @returns Promise with the files
     */
    UploadService.prototype.list = function () {
        var _this = this;
        return _super.prototype.POSTunStringify.call(this, { token: this.userToken }, uploadUrl + 'list')
            .then(function (response) {
            _this.addLayersToDatainteraction(response["uploads"]);
            _this.uploadedFiles.next(response["uploads"]);
            return _this.getUploadedFiles().getValue();
        });
    };
    UploadService.prototype.addLayersToDatainteraction = function (uploads) {
        var _this = this;
        uploads.map(function (upload) {
            if (!_this.dataInsteractionService.layerExists(upload)) {
                console.log(upload, 'Layer added to LayerInteractionData');
                _this.dataInsteractionService.addNewLayer(upload.name, upload.id, upload.layer_type);
            }
        });
    };
    /**
     * Show the layer on the map
     * @param id
     */
    UploadService.prototype.show = function (id) {
        var _this = this;
        var upFile = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_util__["isNumber"])(id)
            ? this.getUploadedFiles().getValue().filter(function (upload) { return upload.id == id; })[0] : id;
        if (upFile.id in this.activeLayers) {
            this.toasterService.showToaster('Layer already active');
            return;
        }
        var payload = {
            id: upFile.id,
            user_token: this.userToken,
            layer_id: upFile.layer,
            layer_name: upFile.name
        };
        this.activePersonalLayers.value[upFile.id] = payload;
        this.activePersonalLayers.next(this.activePersonalLayers.value);
        if (upFile.name.endsWith('.tif')) {
            this.activeLayers[upFile.id] = L.tileLayer(uploadUrl + 'tiles/{token}/{upload_id}/{z}/{x}/{y}', {
                token: this.userToken,
                upload_id: upFile.id,
                tms: true,
                maxNativeZoom: 11
            }).addTo(this.mapService.getMap());
        }
        else if (upFile.name.endsWith('.csv')) {
            this.http.get(uploadUrl + 'csv/' + this.userToken + '/' + upFile.id).subscribe(function (geoData) {
                _this.activeLayers[upFile.id] = L.geoJson(geoData.json(), {
                    pointToLayer: function (feature, latlng) {
                        if (feature.geometry.type == "Point")
                            return new L.CircleMarker(latlng, {
                                fillColor: feature.style.fill,
                                color: feature.style.stroke,
                                fillOpacity: 1,
                                weight: 1,
                                // https://github.com/Leaflet/Leaflet/issues/2824
                                radius: +feature.style.size
                            });
                    }
                }).addTo(_this.mapService.getMap());
            });
        }
    };
    /**
     * Remove the layer from the map
     * @param id
     */
    UploadService.prototype.remove = function (id) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_util__["isNumber"])(id))
            id = id.id;
        if (!(id in this.activeLayers))
            return; // if the layer wasn't active
        this.activeLayers[id].removeFrom(this.mapService.getMap());
        delete this.activeLayers[id];
        delete this.activePersonalLayers.value[id];
        this.activePersonalLayers.next(this.activePersonalLayers.value);
    };
    /**
     * Remove all active layers
     */
    UploadService.prototype.removeAll = function () {
        console.log(this.uploadedFiles.value);
        for (var up in this.uploadedFiles.value) {
            this.dataInsteractionService.removeLayer(this.uploadedFiles.value[up].id);
            // this.remove(parseInt(i));
        }
        this.activePersonalLayers.next({});
        this.uploadedFiles.next([]);
    };
    /**
     * Export a file from selected area of the map
     * @param layer chosen layer
     * @param schema the schema to export (for later)
     * @param year the year to export
     * @returns Promise with the url to download and a filename
     */
    UploadService.prototype.export = function (layer, schema, year) {
        var _this = this;
        var scale = this.slcToolsService.getScaleValue();
        var layerExportInfo = LayersExportInfo[layer] != null ? LayersExportInfo[layer] : LayersExportInfo["default"];
        var nutsOrAreas;
        var isNuts = true;
        if (year == null)
            year = __WEBPACK_IMPORTED_MODULE_8__data_service__["w" /* constant_year */];
        if (schema == null)
            schema = layerExportInfo.schema;
        if (scale === __WEBPACK_IMPORTED_MODULE_8__data_service__["e" /* lau2 */] || scale === __WEBPACK_IMPORTED_MODULE_8__data_service__["q" /* nuts3 */]) {
            layer += '_' + scale.toLowerCase().replace(' ', ''); // To change in API ?
            nutsOrAreas = this.slcToolsService.nutsIdsSubject.getValue();
        }
        else if (scale === __WEBPACK_IMPORTED_MODULE_8__data_service__["d" /* hectare */]) {
            layer += '_ha';
            nutsOrAreas = this.helper.getAreasForPayload(this.slcToolsService.areasSubject.getValue());
            isNuts = false;
        }
        return _super.prototype.POSTunStringify.call(this, (_a = {
                layers: layer
            },
            _a[isNuts ? 'nuts' : 'areas'] = nutsOrAreas,
            _a.schema = schema,
            _a.year = year.toString(),
            _a), uploadUrl + ("export/" + layerExportInfo.data_type + "/" + (isNuts ? 'nuts' : 'hectare')), { responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* ResponseContentType */].Blob }, false).then(function (data) {
            return { url: URL.createObjectURL(data.blob()), filename: layer + ("." + (layerExportInfo.data_type != 'csv' ? 'tif' : 'csv')) };
        }).catch(function () {
            _this.toasterService.showToaster("Sorry, We can't export this layer yet");
            return { url: '', filename: '' };
        });
        var _a;
    };
    return UploadService;
}(__WEBPACK_IMPORTED_MODULE_10__api_service__["a" /* APIService */]));
UploadService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_features_user_management_service_user_management_status_service__["a" /* UserManagementStatusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_features_user_management_service_user_management_status_service__["a" /* UserManagementStatusService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_features_selection_tools__["a" /* SelectionToolService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_features_selection_tools__["a" /* SelectionToolService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__helper__["a" /* Helper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__helper__["a" /* Helper */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_app_pages_map__["b" /* MapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_pages_map__["b" /* MapService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_13_app_features_layers_interaction_layers_interaction_service__["a" /* DataInteractionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13_app_features_layers_interaction_layers_interaction_service__["a" /* DataInteractionService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_11__logger_service__["a" /* Logger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__logger_service__["a" /* Logger */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_12__loader_service__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__loader_service__["a" /* LoaderService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_5__toaster_service__["a" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__toaster_service__["a" /* ToasterService */]) === "function" && _j || Object])
], UploadService);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=upload.service.js.map

/***/ }),

/***/ "../../../../../src/assets/icons/circle.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "circle.df926cb12474ff14262c.svg";

/***/ }),

/***/ "../../../../../src/assets/icons/cursor.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cursor.b4161d2aa14d89efbf4d.svg";

/***/ }),

/***/ "../../../../../src/assets/icons/polygon.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "polygon.9ac264441c3af7e1f589.svg";

/***/ }),

/***/ "../../../../../src/assets/icons/square.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "square.ff851f9fc445783d0e66.svg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/*
Improvement of coding style that don’t concern a file in particular :

1. Services folder : too many files. Consider creating sub-folders when a folder reaches seven or more files

2. Entire app: Hide distracting, irrevelant files such as generated .js an .js.map files

3. Is the difference between the features and the pages folder noticeable ?

4. No SharedModule ? No CoreModule ?

5. General : put spaces between different groups of elements (between properties and methods for example)

6. uikit folder has nothing to do in the src folder. All coding that you didn’t write should not cluttering src

7. Not all ngOnInit() are implemented
*/
/// <reference path="typings.d.ts"/>




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]).then(function (success) { return console.log("Bootstrap success"); })
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n/* You can add global styles to this file, and also import other style files */\n\nh1 {\n  color: #369;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 250%;\n}\n*{\n  box-sizing: border-box;\n}\n.on-map {\n\n\n}\n\n.leaflet-clickable {\n  cursor: crosshair !important;\n}\n.leaflet-container {\n  cursor: default;\n}\n.axis {\n  font: 10px sans-serif;\n}\n\n.axis path,\n.axis line {\n  fill: none;\n  stroke: #000;\n  shape-rendering: crispEdges;\n}\n\n.axis-title {\n  fill: none;\n  stroke: black;\n  stroke-width: 0.5px;\n}\n\n\n.axis--x path {\n  /*display: none;*/\n}\n\n.line {\n  fill: none;\n  stroke: steelblue;\n  stroke-width: 1.5px;\n}\nh2, h3 {\n  color: #444;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: lighter;\n}\n\nbody, input[text], button {\n  color: #888;\n  font-family: Cambria, Georgia;\n}\n/* . . . */\n/* everywhere else */\n* {\n  font-family: 'Roboto', sans-serif;\n}\n\n\n/* preloader*/\n\n\n\n@-webkit-keyframes sk-rotateplane {\n  0% { -webkit-transform: perspective(120px) }\n  50% { -webkit-transform: perspective(120px) rotateY(180deg) }\n  100% { -webkit-transform: perspective(120px) rotateY(180deg)  rotateX(180deg) }\n}\n\n@keyframes sk-rotateplane {\n  0% {\n    transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg)\n  } 50% {\n      transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n      -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg)\n    } 100% {\n        transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n        -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n      }\n}\n.loading{\n  background-color: #d35400;\n}\n\n/* preloader 2*/\n\n/* ==========================================================================\n   Chrome Frame prompt\n   ========================================================================== */\n\n.chromeframe {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n\n/* ==========================================================================\n   Author's custom styles\n   ========================================================================== */\np {\n  line-height: 1.33em;\n  color: #7E7E7E;\n}\nh1 {\n  color: #EEEEEE;\n}\n\n#loader-wrapper {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n}\n#loader {\n  display: block;\n  position: relative;\n  left: 50%;\n  top: 50%;\n  width: 150px;\n  height: 150px;\n  margin: -75px 0 0 -75px;\n  border-radius: 50%;\n  border: 3px solid transparent;\n  border-top-color: #3498db;\n\n  -webkit-animation: spin 2s linear infinite; /* Chrome, Opera 15+, Safari 5+ */\n  animation: spin 2s linear infinite; /* Chrome, Firefox 16+, IE 10+, Opera */\n\n  z-index: 1001;\n}\n\n#loader:before {\n  content: \"\";\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  right: 5px;\n  bottom: 5px;\n  border-radius: 50%;\n  border: 3px solid transparent;\n  border-top-color: #e74c3c;\n\n  -webkit-animation: spin 1s linear infinite; /* Chrome, Opera 15+, Safari 5+ */\n  animation: spin 1s linear infinite; /* Chrome, Firefox 16+, IE 10+, Opera */\n}\n\n#loader:after {\n  content: \"\";\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n  border-radius: 50%;\n  border: 3px solid transparent;\n  border-top-color: #f9c922;\n\n  -webkit-animation: spin 1.5s linear infinite; /* Chrome, Opera 15+, Safari 5+ */\n  animation: spin 1.5s linear infinite; /* Chrome, Firefox 16+, IE 10+, Opera */\n}\n\n@-webkit-keyframes spin {\n  0%   {\n    -webkit-transform: rotate(0deg);  /* Chrome, Opera 15+, Safari 3.1+ */  /* IE 9 */\n    transform: rotate(0deg);  /* Firefox 16+, IE 10+, Opera */\n  }\n  100% {\n    -webkit-transform: rotate(360deg);  /* Chrome, Opera 15+, Safari 3.1+ */  /* IE 9 */\n    transform: rotate(360deg);  /* Firefox 16+, IE 10+, Opera */\n  }\n}\n@keyframes spin {\n  0%   {\n    -webkit-transform: rotate(0deg);  /* Chrome, Opera 15+, Safari 3.1+ */  /* IE 9 */\n    transform: rotate(0deg);  /* Firefox 16+, IE 10+, Opera */\n  }\n  100% {\n    -webkit-transform: rotate(360deg);  /* Chrome, Opera 15+, Safari 3.1+ */  /* IE 9 */\n    transform: rotate(360deg);  /* Firefox 16+, IE 10+, Opera */\n  }\n}\n\n#loader-wrapper .loader-section {\n  position: fixed;\n  top: 0;\n  width: 51%;\n  height: 100%;\n  background: #222222;\n  z-index: 1000;\n  -webkit-transform: translateX(0);  /* Chrome, Opera 15+, Safari 3.1+ */  /* IE 9 */\n  transform: translateX(0);  /* Firefox 16+, IE 10+, Opera */\n}\n\n#loader-wrapper .loader-section.section-left {\n  left: 0;\n}\n\n#loader-wrapper .loader-section.section-right {\n  right: 0;\n}\n\n/* Loaded */\n.loaded #loader-wrapper .loader-section.section-left {\n  -webkit-transform: translateX(-100%);  /* Chrome, Opera 15+, Safari 3.1+ */  /* IE 9 */\n  transform: translateX(-100%);  /* Firefox 16+, IE 10+, Opera */\n  transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000);\n}\n\n.loaded #loader-wrapper .loader-section.section-right {\n  -webkit-transform: translateX(100%);  /* Chrome, Opera 15+, Safari 3.1+ */  /* IE 9 */\n  transform: translateX(100%);  /* Firefox 16+, IE 10+, Opera */\n  transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000);\n}\n\n.loaded #loader {\n  opacity: 0;\n  transition: all 0.3s ease-out;\n}\n.loaded #loader-wrapper {\n  visibility: hidden;\n\n  -webkit-transform: translateY(-100%);  /* Chrome, Opera 15+, Safari 3.1+ */  /* IE 9 */\n  transform: translateY(-100%);  /* Firefox 16+, IE 10+, Opera */\n  transition: all 0.3s 1s ease-out;\n}\n\n/* JavaScript Turned Off */\n.no-js #loader-wrapper {\n  display: none;\n}\n.no-js h1 {\n  color: #222222;\n}\n\n#content {\n  margin: 0 auto;\n  padding-bottom: 50px;\n  width: 80%;\n  max-width: 978px;\n}\n\n\n\n\n\n\n/* ==========================================================================\n   Helper classes\n   ========================================================================== */\n\n/*\n * Image replacement\n */\n\n.ir {\n  background-color: transparent;\n  border: 0;\n  overflow: hidden;\n  /* IE 6/7 fallback */\n  *text-indent: -9999px;\n}\n\n.ir:before {\n  content: \"\";\n  display: block;\n  width: 0;\n  height: 150%;\n}\n\n/*\n * Hide from both screenreaders and browsers: h5bp.com/u\n */\n\n.hidden {\n  display: none !important;\n  visibility: hidden;\n}\n\n/*\n * Hide only visually, but have it available for screenreaders: h5bp.com/v\n */\n\n.visuallyhidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n/*\n * Extends the .visuallyhidden class to allow the element to be focusable\n * when navigated to via the keyboard: h5bp.com/p\n */\n\n.visuallyhidden.focusable:active,\n.visuallyhidden.focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n/*\n * Hide visually and from screenreaders, but maintain layout\n */\n\n.invisible {\n  visibility: hidden;\n}\n\n/*\n * Clearfix: contain floats\n *\n * For modern browsers\n * 1. The space content is one way to avoid an Opera bug when the\n *    `contenteditable` attribute is included anywhere else in the document.\n *    Otherwise it causes space to appear at the top and bottom of elements\n *    that receive the `clearfix` class.\n * 2. The use of `table` rather than `block` is only necessary if using\n *    `:before` to contain the top-margins of child elements.\n */\n\n.clearfix:before,\n.clearfix:after {\n  content: \" \"; /* 1 */\n  display: table; /* 2 */\n}\n\n.clearfix:after {\n  clear: both;\n}\n\n/*\n * For IE 6/7 only\n * Include this rule to trigger hasLayout and contain floats.\n */\n\n.clearfix {\n  *zoom: 1;\n}\n\n/* ==========================================================================\n   EXAMPLE Media Queries for Responsive Design.\n   These examples override the primary ('mobile first') styles.\n   Modify as content requires.\n   ========================================================================== */\n\n@media only screen and (min-width: 35em) {\n  /* Style adjustments for viewports that meet the condition */\n}\n\n@media print,\n(-webkit-min-device-pixel-ratio: 1.25),\n(min-resolution: 120dpi) {\n  /* Style adjustments for high resolution devices */\n}\n\n/* ==========================================================================\n   Print styles.\n   Inlined to avoid required HTTP connection: h5bp.com/r\n   ========================================================================== */\n\n@media print {\n  * {\n    background: transparent !important;\n    color: #000 !important; /* Black prints faster: h5bp.com/s */\n    box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n\n  a[href]:after {\n    content: \" (\" attr(href) \")\";\n  }\n\n  abbr[title]:after {\n    content: \" (\" attr(title) \")\";\n  }\n\n  /*\n   * Don't show links for images, or javascript/internal links\n   */\n\n  .ir a:after,\n  a[href^=\"javascript:\"]:after,\n  a[href^=\"#\"]:after {\n    content: \"\";\n  }\n\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  thead {\n    display: table-header-group; /* h5bp.com/t */\n  }\n\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n  }\n\n  @page {\n    margin: 0.5cm;\n  }\n\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n}\n\n/*\n\tOk so you have made it this far, that means you are very keen to on my code.\n\tAnyway I don't really mind it. This is a great way to learn so you actually doing the right thing:)\n\tFollow me @ihatetomatoes\n*/\n", ""]);

// exports


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-il": "../../../../moment/locale/en-il.js",
	"./en-il.js": "../../../../moment/locale/en-il.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mn": "../../../../moment/locale/mn.js",
	"./mn.js": "../../../../moment/locale/mn.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./tg": "../../../../moment/locale/tg.js",
	"./tg.js": "../../../../moment/locale/tg.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./ug-cn": "../../../../moment/locale/ug-cn.js",
	"./ug-cn.js": "../../../../moment/locale/ug-cn.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[3]);
//# sourceMappingURL=main.bundle.js.map