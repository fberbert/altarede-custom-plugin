define('altarede-custom-plugin:views/login', 'views/login', function (Dep) {

    return Dep.extend({

        template: 'altarede-custom-plugin:login',

        data: function () {
            return{        
              logoSrc: this.getLogoSrc(),
              showForgotPassword: this.getConfig().get('passwordRecoveryEnabled'),
              applicationName: this.getConfig().get('applicationName')
           };          
        }

    });
});
