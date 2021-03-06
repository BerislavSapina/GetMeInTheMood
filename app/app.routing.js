"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var login_component_1 = require('./login/login.component');
var register_component_1 = require('./register/register.component');
var create_playlist_component_1 = require('./create-playlist/create-playlist.component');
var appRoutes = [
    { path: 'create-playlist', component: create_playlist_component_1.CreatePlaylistComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: '', component: dashboard_component_1.DashboardComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map