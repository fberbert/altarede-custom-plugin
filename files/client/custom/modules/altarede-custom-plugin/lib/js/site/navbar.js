define('altarede-custom-plugin:views/site/navbar', 'views/site/navbar', function (Dep) {

    return Dep.extend({

        // Especifique seu template customizado, se necessário
        template: 'altarede-custom-plugin:site/navbar',

        data: function () {
            // Chama o método data original
            var data = Dep.prototype.data.call(this);

            // Adiciona a propriedade isAdmin ao objeto de dados
            data.isAdmin = this.getUser().isAdmin(); // Assume que isAdmin() retorna um booleano

            return data;
        },

    });
});
