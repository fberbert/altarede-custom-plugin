define('altarede-custom-plugin:views/fields/url', 'views/fields/url', function (UrlFieldView) {

    return UrlFieldView.extend({

        // Especifique seu template customizado, se necessário
      detailTemplate: 'altarede-custom-plugin:fields/url/detail',
      listTemplate: 'altarede-custom-plugin:fields/url/list',

        setup: function () {
            // Chamando o método setup original
            UrlFieldView.prototype.setup.call(this);

            // Adicione lógica adicional aqui, se necessário
            // console.log('Campo URL customizado foi configurado 2.');
        },

        afterRender: function () {
            // Chamando o método afterRender original
            UrlFieldView.prototype.afterRender.call(this);

            // Adicione lógica adicional pós-renderização, se necessário
            // console.log('Campo URL customizado foi renderizado 2.');
        }
    });
});
