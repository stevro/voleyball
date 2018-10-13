/**
 * Local environment settings
 *
 * Use this file to specify configuration settings for use while developing
 * the app on your personal system.
 *
 * For more information, check out:
 * https://sailsjs.com/docs/concepts/configuration/the-local-js-file
 */

module.exports = {

  // Any configuration settings may be overridden below, whether it's built-in Sails
  // options or custom configuration specifically for your app (e.g. Stripe, Mailgun, etc.)
  custom: {
	  mailgunDomain: 'PUT_YOUR_DOMAIN',
	  mailgunSecret: 'PUT_YOUR_SECRET',
	},

  datastores: {
  	default: {
      // adapter: require('sails-mongo'),
  		url: 'PUT_YOUR_ADAPTER',
  	}
  }

};
