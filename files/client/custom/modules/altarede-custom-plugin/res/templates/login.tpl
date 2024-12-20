<div class="container content">
    <div class="container-centering">
        <div id="login" class="panel panel-default block-center-sm">
            <div class="panel-heading">
                <div class="logo-container">
                    <img src="{{logoSrc}}" class="logo">
                </div>
            </div>
            <div class="panel-body{{#if anotherUser}} another-user{{/if}}">
                <form id="login-form">
                    <p class="text-center">EFETUE O LOGIN PARA ACESSAR O SISTEMA</p>

                    {{#if hasError}}
                        <div class="form-group">
                            <span class="text-danger">{{translate 'Error'}}</span>
                        </div>
                    {{/if}}

                    {{#if hasSignIn}}
                        <div class="cell" data-name="sign-in">
                            {{#if hasFallback}}
                                <div class="pull-right">
                                    <a
                                        role="button"
                                        tabindex="0"
                                        class="btn btn-link btn-icon"
                                        data-action="showFallback"
                                    >
                                        <span class="fas fa-chevron-down"></span>
                                    </a>
                                </div>
                            {{/if}}
                            <button
                                class="btn btn-default btn-x-wide"
                                id="sign-in"
                                type="button"
                            >
                                {{signInText}}
                            </button>
                        </div>
                    {{/if}}

                    <div class="form-group cell" data-name="username">
                        <label for="field-userName">{{translate 'Username'}}</label>
                        <input
                            type="text"
                            name="username"
                            id="field-userName"
                            class="form-control"
                            autocapitalize="off"
                            spellcheck="false"
                            tabindex="1"
                            autocomplete="username"
                            maxlength="255"
                        >
                    </div>

                    <div class="form-group cell" data-name="password">
                        <label for="field-password">{{translate 'Password'}}</label>
                        <input
                            type="password"
                            name="password"
                            id="field-password"
                            class="form-control"
                            tabindex="2"
                            autocomplete="current-password"
                            maxlength="255"
                        >
                    </div>

                    {{#if anotherUser}}
                        <div class="form-group cell">
                            <label>{{translate 'Log in as'}}</label>
                            <div>{{anotherUser}}</div>
                        </div>
                    {{/if}}

                    <div class="margin-top-2x cell" data-name="submit">
                        {{#if showForgotPassword}}
                            <a
                                role="button"
                                class="btn btn-link btn-text btn-text-hoverable btn-sm pull-right margin-top-sm"
                                data-action="passwordChangeRequest"
                                tabindex="4"
                            >
                                {{translate 'Forgot Password?' scope='User'}}
                            </a>
                        {{/if}}

                        <button
                            type="submit"
                            class="btn btn-primary btn-s-wide"
                            id="btn-login"
                            tabindex="3"
                        >
                            {{logInText}}
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <div class="text-center">
            <i class="fa fa-code"></i> Desenvolvido por Altarede
        </div>
    </div>
</div>
<footer>{{{footer}}}</footer>
