<textarea
    class="form-control auto-height"
    data-name="{{name}}Street"
    rows="1" placeholder="{{translate 'Street'}}"
    autocomplete="espo-street"
    maxlength="{{streetMaxLength}}"
    style="resize: none;"
>{{streetValue}}</textarea>

<!-- Número e Complemento -->
<div class="row" style="margin-top:5px;">
    <div class="col-sm-4 col-xs-4">
        <input type="text" class="form-control" data-name="{{name}}Number" value="{{numberValue}}" placeholder="Número" maxlength="50">
    </div>
    <div class="col-sm-8 col-xs-8">
        <input type="text" class="form-control" data-name="{{name}}Complement" value="{{complementValue}}" placeholder="Complemento" maxlength="100">
    </div>
</div>

<!-- Bairro -->
<div class="row" style="margin-top:5px;">
    <div class="col-sm-12 col-xs-12">
        <input type="text" class="form-control" data-name="{{name}}Neighborhood" value="{{neighborhoodValue}}" placeholder="Bairro" maxlength="100">
    </div>
</div>

<!-- Cidade e Estado -->
<div class="row" style="margin-top:5px;">
    <div class="col-sm-6 col-xs-6">
        <input type="text" class="form-control" data-name="{{name}}City" value="{{cityValue}}" placeholder="{{translate 'City'}}" autocomplete="espo-city" maxlength="{{cityMaxLength}}">
    </div>
    <div class="col-sm-6 col-xs-6">
        <input type="text" class="form-control" data-name="{{name}}State" value="{{stateValue}}" placeholder="{{translate 'State'}}" autocomplete="espo-state" maxlength="{{stateMaxLength}}">
    </div>
</div>

<!-- CEP e País -->
<div class="row" style="margin-top:5px;">
    <div class="col-sm-6 col-xs-6">
        <input type="text" class="form-control" data-name="{{name}}PostalCode" value="{{postalCodeValue}}" placeholder="{{translate 'PostalCode'}}" autocomplete="espo-postalCode" maxlength="{{postalCodeMaxLength}}" spellcheck="false">
    </div>
    <div class="col-sm-2 col-xs-2">
        <input type="text" class="form-control" data-name="{{name}}Ddd" value="{{dddValue}}" placeholder="DDD" maxlength="2">
    </div>
    <div class="col-sm-4 col-xs-4">
        <input type="text" class="form-control" data-name="{{name}}Country" value="{{countryValue}}" placeholder="{{translate 'Country'}}" autocomplete="espo-country" maxlength="{{countryMaxLength}}">
    </div>
</div>
