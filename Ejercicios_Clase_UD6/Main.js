function executeWidgetCode() {
    require.config({
        paths: {
            vue: "./SAeWidgets/SAeCommonUtils/scripts/vue/dist/vue", //Need this with "vue" all lower case, else Vuetify can't load correctly
            BootstrapVue:"./SAeWidgets/SAeCommonUtils/scripts/bootstrap-vue/dist/bootstrap-vue",
            vueloader: "./SAeWidgets/SAeCommonUtils/scripts/requirejs-vue", //"https://unpkg.com/requirejs-vue@1.1.5/requirejs-vue",
            CSSRoboto: "./SAeWidgets/SAeCommonUtils/fonts/Roboto",
            Sortable: "./SAeWidgets/SAeCommonUtils/scripts/Sortable.min",
            JQuery: "./SAeWidgets/SAeCommonUtils/scripts/jquery.min",
            methods: "./SAeWidgets/SAeCommonUtils/scripts/methods",
            current: "./SAeWidgets"
        }
    });
    require([
      "vue",
      "BootstrapVue",
      "Sener/Utils",
      "Sortable",
      "JQuery",
      "css!SAeWidgets/SAeCommonUtils/scripts/bootstrap/dist/css/bootstrap.min.css",
      "css!SAeWidgets/SAeCommonUtils/scripts/bootstrap-vue/dist/bootstrap-vue.min.css",
    //  "css!SAeWidgets/SAeCommonUtils/styles/PADUtils.css",
      //"css!SAeWidgets/SAeCommonUtils/styles/wux-3ds-fonticons.css",
      "css!SAeWidgets/SAeCommonUtils/styles/Main.css",
      "vueloader!SAeWidgets/SAeReports/vue/mbomCSV",
      "vueloader!SAeWidgets/SAeReports/vue/informes",
 "vueloader!SAeWidgets/SAeReports/vue/interface3DexpNavisionErp",																   
      "vueloader!SAeWidgets/SAeReports/vue/treeReport",
      "vueloader!SAeWidgets/SAeReports/vue/reportsDocsList",
	  "vueloader!SAeWidgets/SAeReports/vue/reportsDocsList2",	
    "vueloader!SAeWidgets/SAeReports/vue/reportsDataPackage",	
	"vueloader!SAeWidgets/SAeReports/vue/reportsSendERP",
	"vueloader!SAeWidgets/SAeReports/vue/reportsSendJobS",	
    "vueloader!SAeWidgets/SAeReports/vue/reportsDataPackageCompras",
"vueloader!SAeWidgets/SAeReports/vue/ManageAltSub",	
	"vueloader!SAeWidgets/SAeReports/vue/reportpartlist",
    "vueloader!SAeWidgets/SAeReports/vue/treeReportQualityWarn",																
      "vueloader!SAeWidgets/SAeCommonUtils/vue/treeTable",
    "vueloader!SAeWidgets/SAeCommonUtils/vue/treeTableDP",      
      "vueloader!SAeWidgets/SAeCommonUtils/vue/collapsedTreeTable",
    "vueloader!SAeWidgets/SAeCommonUtils/vue/collapsedTreeTableDP",
	"vueloader!SAeWidgets/SAeCommonUtils/vue/collapsedTreeTableAltSub",
	"vueloader!SAeWidgets/SAeCommonUtils/vue/collapsedTreeTableHeader",
      "vueloader!SAeWidgets/SAeCommonUtils/vue/previewData",
      "vueloader!SAeWidgets/SAeCommonUtils/vue/dropItem",
      "vueloader!SAeWidgets/SAeCommonUtils/vue/dropItemDS",
      "vueloader!SAeWidgets/SAeCommonUtils/vue/columnsTable",
      "css!CSSRoboto"
  ], function (Vue,  BootstrapVue, Utils, Sortable, JQuery ) {
    Vue.use(BootstrapVue);
    Vue.directive('sortable', {
      inserted: function (el, binding) {
        var sortable = new Sortable(el, binding.value || {});
      }
    });
    window.jQuery = jQuery;
    //  rehusable metodos
  //   Vue.mixin(methods);
    let myWidget = {
          	dataFull: [],
            // Widget Events
            onLoadWidget: function() {
                console.log("Entra onLoadWidget");
                loadURL(loadContext);
                var html = "<div id='appVue'>" +
                "<div style='height:100%;position:relative;'> </center></br><informes></informes>  </div>  </div>";
                  widget.body.innerHTML=html ;
                  //Init vue App
                  let vueApp = new Vue({
                      el: "#appVue",
                      data: {},
                      mounted: function mounted(){},
                      methods: {}
                });
        },
          onRefreshWidget: function() {
            console.log("Entra onRefreshWidget");
          }
      }
      widget.addEvent("onLoad", myWidget.onLoadWidget, myWidget);
      widget.addEvent("onRefresh", myWidget.onRefreshWidget, myWidget);
  });
}
