// CHANGE THESE VALUES TO MATCH YOUR DEVELOPER ACCOUNT
exports.PAYPAL_APP_ID = "MyApplicationId";
exports.PAYPAL_SECRET = "A8VERY8SECRET8VALUE0";

// If true, all calls to the PayPal Here API will go through this sample server. See the README for
// a discussion of this, but basically this is more secure and simpler to manage at the cost of relatively
// small additional latency (because calls come to your backend first, then to PayPal)
exports.CENTRAL_SERVER_MODE = true;

// Note that you need an entry in your hosts file for this
// and that it must match the returnUrl set on your app in
// PayPal Access
exports.MY_HOSTNAME = "http://127.0.0.1";
exports.MY_PORT = 3000;
exports.MY_APP_URL = "sdksampleapp://oauth";

// In case you want more info, modify this
exports.PAYPAL_SCOPES = "https://uri.paypal.com/services/paypalhere openid email phone profile address https://uri.paypal.com/services/paypalattributes/business";

// Live or stage?    This lets your sample server know which paypal service
// to connect to (live, sandbox, or a custom stage server)
//exports.PAYPAL_ACCESS_BASEURL = "https://www.paypal.com/webapps/";
exports.PAYPAL_ACCESS_BASEURL = "https://sandbox.paypal.com/webapps/";
