jQuery.sap.require("sap.ui.demo.Resume.util.Formatter");

sap.ui.controller("sap.ui.demo.Resume.view.Detail", {

	handleNavButtonPress : function (evt) {
		this.nav.back("Master");
	}
});
