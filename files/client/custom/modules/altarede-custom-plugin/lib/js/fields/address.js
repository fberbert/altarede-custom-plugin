define('altarede-custom-plugin:views/fields/address', ['views/fields/address'], function (AddressFieldView) {

    return AddressFieldView.extend({

        // Templates personalizados
        detailTemplate: 'altarede-custom-plugin:fields/address/detail',
        listLinkTemplate: 'altarede-custom-plugin:fields/address/list-link',
        searchTemplate: 'altarede-custom-plugin:fields/address/search',
        editTemplate: 'altarede-custom-plugin:fields/address/edit',
        editTemplate1: 'altarede-custom-plugin:fields/address/edit-1',
        editTemplate2: 'altarede-custom-plugin:fields/address/edit-2',
        editTemplate3: 'altarede-custom-plugin:fields/address/edit-3',
        editTemplate4: 'altarede-custom-plugin:fields/address/edit-4',
        events: {
            'change [data-name$="PostalCode"]': function (e) {
                // Quando o campo CEP mudar, invoca a função
                this.fetchAddress(e);
            }
        },

        setup: function () {
            // Chamando o método setup original
            AddressFieldView.prototype.setup.call(this);

            // Lógica personalizada para setup
            console.log('Campo Address customizado foi configurado.');
        },

        afterRender: function () {
            // Chamando o método afterRender original
            AddressFieldView.prototype.afterRender.call(this);

            // Lógica adicional pós-renderização
            console.log('Campo Address customizado foi renderizado.');
        },

        fetchAddress: function (e) {
            // Função para buscar o endereço via API baseado no CEP
            var $input = $(e.currentTarget);
            var postalCodeField = $input.data('name');
            var postalCode = this.model.get(postalCodeField);
            console.log('Buscando endereço via API...' + postalCode);
            if (postalCode) {
                fetch(`https://viacep.com.br/ws/${postalCode}/json/`)
                    .then(response => response.json())
                    .then(data => {
                        this.model.set(this.name + 'Street', data.logradouro || '');
                        this.model.set(this.name + 'City', data.localidade || '');
                        this.model.set(this.name + 'State', data.uf || '');
                        this.model.set(this.name + 'Country', 'Brasil');
                    })
                    .catch(error => {
                        console.error('Erro ao buscar o endereço:', error);
                    });
            }
        }
    });
});
