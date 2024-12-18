define('altarede-custom-plugin:views/fields/address', ['views/fields/address'], function (AddressFieldView) {

    console.log('Custom address.js loaded');
    return AddressFieldView.extend({

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
                // Quando o campo CEP mudar, invoca a função para buscar o endereço
                this.fetchAddress(e);
            }
        },

        data: function () {
            var data = AddressFieldView.prototype.data.call(this);

            // Adicionar subcampos customizados
            data.numberValue = this.model.get(this.name + 'Number') || '';
            data.complementValue = this.model.get(this.name + 'Complement') || '';
            data.neighborhoodValue = this.model.get(this.name + 'Neighborhood') || '';
            data.dddValue = this.model.get(this.name + 'Ddd') || '';

            return data;
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

            if (postalCode) {
                console.log('Buscando endereço via API...', postalCode);
                fetch(`https://viacep.com.br/ws/${postalCode}/json/`)
                    .then(response => response.json())
                    .then(data => {
                      this.model.set(this.name + 'Street', data.logradouro || '');
                      this.model.set(this.name + 'Neighborhood', data.bairro || '');
                      this.model.set(this.name + 'City', data.localidade || '');
                      this.model.set(this.name + 'State', data.uf || '');
                      this.model.set(this.name + 'Ddd', data.ddd || '');
                      // this.model.set(this.name + 'Complement', data.complemento || '');
                      // Como o campo country você já definiu fixo:
                      this.model.set(this.name + 'Country', 'Brasil');
                      console.log('Bairro:', data.bairro, ' campo:', this.name + 'Neighborhood');

                      // Atualiza a view com os novos valores
                      this.reRender();

                    })
                    .catch(error => {
                        console.error('Erro ao buscar o endereço:', error);
                    });
            }
        },

        fetchToModel: function () {
            // Primeiro chama o método original para lidar com subcampos padrão
            AddressFieldView.prototype.fetchToModel.call(this);

            // Agora, pega os valores dos subcampos adicionais do DOM
            var number = this.$('[data-name="' + this.name + 'Number"]').val();
            var complement = this.$('[data-name="' + this.name + 'Complement"]').val();
            var neighborhood = this.$('[data-name="' + this.name + 'Neighborhood"]').val();
            var ddd = this.$('[data-name="' + this.name + 'Ddd"]').val();

            // Define os valores no model
            this.model.set(this.name + 'Number', number);
            this.model.set(this.name + 'Complement', complement);
            this.model.set(this.name + 'Neighborhood', neighborhood);
            this.model.set(this.name + 'Ddd', ddd);

            console.log('Valores dos subcampos customizados:', number, complement, neighborhood, ddd);
        }
    });
});
