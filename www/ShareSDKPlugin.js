module.exports = {
    init: function (shareInfo, successCallback, errorCallback) {
		cordova.exec(
			successCallback,
			errorCallback,
			"ShareSDK",
			"share",
			shareInfo
		);
	}
};