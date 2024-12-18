define('altarede-custom-plugin:views/fields/arc-address', ['views/fields/address'], function (AddressFieldView) {

    return AddressFieldView.extend({

        detailTemplate: 'altarede-custom-plugin:fields/arc-address/detail',
        listLinkTemplate: 'altarede-custom-plugin:fields/arc-address/list-link',
        searchTemplate: 'altarede-custom-plugin:fields/arc-address/search',
        editTemplate: 'altarede-custom-plugin:fields/arc-address/edit',
        editTemplate1: 'altarede-custom-plugin:fields/arc-address/edit-1',
        editTemplate2: 'altarede-custom-plugin:fields/arc-address/edit-2',
        editTemplate3: 'altarede-custom-plugin:fields/arc-address/edit-3',
        editTemplate4: 'altarede-custom-plugin:fields/arc-address/edit-4',

        events: {
            'change [data-name$="PostalCode"]': function (e) {
                // Quando o campo CEP mudar, invoca a função para buscar o endereço
                this.fetchAddress(e);
            }
        },

        setup: function () {
            AddressFieldView.prototype.setup.call(this);
            console.log('Campo Address customizado foi configurado.');
        },

        afterRender: function () {
            AddressFieldView.prototype.afterRender.call(this);
            console.log('Campo Address customizado foi renderizado.');
        },

        fetchAddress: function (e) {
            var $input = $(e.currentTarget);
            var postalCodeField = $input.data('name');
            var postalCode = this.model.get(postalCodeField);
            console.log('Buscando endereço via API...', postalCode);

            if (postalCode) {
                fetch(`https://viacep.com.br/ws/${postalCode}/json/`)
                    .then(response => response.json())
                    .then(data => {
                      this.model.set(this.name + 'Street', data.logradouro || '');
                      this.model.set(this.name + 'Neighborhood', data.bairro || '');
                      this.model.set(this.name + 'City', data.localidade || '');
                      this.model.set(this.name + 'State', data.uf || '');
                      this.model.set(this.name + 'Ddd', data.ddd || '');
                      this.model.set(this.name + 'Complement', data.complemento || '');
                      // Como o campo country você já definiu fixo:
                      this.model.set(this.name + 'Country', 'Brasil');

                    })
                    .catch(error => {
                        console.error('Erro ao buscar o endereço:', error);
                    });
            }
        },

        fetchToModel: function () {
            AddressFieldView.prototype.fetchToModel.call(this);
        }
    });
});
