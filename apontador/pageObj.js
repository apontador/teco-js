(function (apt, $) {
    "use strict";
    var cookie_prefix = "";

    function parse_cookie(data) {
        return JSON.parse(atob(data));
    }

    function fill_profile_photo(profile_photo, data) {
        profile_photo.small = data.small || profile_photo.small;
        profile_photo.medium = data.medium || profile_photo.medium;
        profile_photo.big = data.big || profile_photo.big;
    }

    function fill_user(user, data) {
        user.logged = !!(data.id);
        user.id = data.id;

        if (typeof data.profile === "object"
                && typeof data.profile.profilePhoto === "object") {

            fill_profile_photo(user.profilePhoto, data.profile.profilePhoto);
        }
    }

    function get_default_user_data() {
        return {
            "id": 0,
            "profilePhoto": {
                "small": "/apontador_v8/images/accounts/user48.gif",
                "medium": "/apontador_v8/images/accounts/user64.gif",
                "big": "/apontador_v8/images/accounts/user200.gif"
            }
        };
    }

    apt.pageObj = {
        "load": function (errorCallback) {
            if (typeof COOKIE_PREFIX === "string") {
                cookie_prefix = COOKIE_PREFIX;
            }

            this.user.load(errorCallback);
        }
    };

    apt.pageObj.user = {
        "load": function (error_callback) {
            var cookie_data = $.cookie(cookie_prefix + "loggedApt"),
                user_data = get_default_user_data();

            try {
                user_data = parse_cookie(cookie_data);
            } catch (e) {
                if (typeof error_callback === "function") {
                    error_callback(e);
                }
            }

            fill_user(this, user_data);
        }
    };
}(APT, jQuery));

var pageObj = APT.pageObj;
