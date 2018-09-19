$(window).load(function () {
    $("#oc-inivoslider1").nivoSlider({
        effect: "random",
        slices: 15,
        boxCols: 8,
        boxRows: 4,
        manualAdvance: false,
        animSpeed: 500,
        pauseTime: 5000,
        startSlide: 0,
        controlNav: true,
        directionNav: true,
        controlNavThumbs: false,
        pauseOnHover: true,
        prevText: '<i class="ion-ios-arrow-left"></i>',
        nextText: '<i class="ion-ios-arrow-right"></i>',
        afterLoad: function () {
            $(".oc-loading").css("display", "none");
            $(".timeloading").css("animation-duration", " 5000ms ");
        }
    });
});

$(document).ready(function () {
    $("#product_module921 .tt-product").owlCarousel({
        loop: false,
        margin: 0,
        nav: true,
        dots: false,
        autoplay: false,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        autoplaySpeed: 1000,
        navSpeed: 1000,
        dotsSpeed: 1000,
        lazyLoad: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            480: {
                items: 1,
                nav: false
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1200: {
                items: 1
            },
            1600: {
                items: 1
            }
        },
        onInitialized: function () {
            var count = $("#product_module921 .tt-product .owl-item.active").length;
            if (count == 1) {
                $("#product_module921 .tt-product .owl-item").removeClass("first");
                $("#product_module921 .tt-product .active").addClass("first");
            } else {
                $("#product_module921 .tt-product .owl-item").removeClass("first");
                $("#product_module921 .tt-product .owl-item.active:first").addClass(
                    "first"
                );
            }
        },
        onTranslated: function () {
            var count = $("#product_module921 .tt-product .owl-item.active").length;
            if (count == 1) {
                $("#product_module921 .tt-product .owl-item").removeClass("first");
                $("#product_module921 .tt-product .active").addClass("first");
            } else {
                $("#product_module921 .tt-product .owl-item").removeClass("first");
                $("#product_module921 .tt-product .owl-item.active:first").addClass(
                    "first"
                );
            }
        }
    });
    // hide #back-top first
    $("#back-top").hide();
    // fade in #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > $("body").height() / 3) {
                $("#back-top").fadeIn();
            } else {
                $("#back-top").fadeOut();
            }
        });
        // scroll body to 0px on click
        $("#back-top").click(function () {
            $("body,html").animate({scrollTop: 0}, 800);
            return false;
        });
    });

    /* ********* */

    // function email_subscribe() {
    //     $.ajax({
    //         type: 'post',
    //         url: 'index.php?route=extension/module/newslettersubscribe/subscribe',
    //         dataType: 'html',
    //         data: $("#subscribe-normal").serialize(),
    //         success: function (html) {
    //             try {
    //                 eval(html);
    //             }
    //             catch (e) {
    //             }
    //         }
    //     });
    // }
    // function email_unsubscribe() {
    //     $.ajax({
    //         type: 'post',
    //         url: 'index.php?route=extension/module/newslettersubscribe/unsubscribe',
    //         dataType: 'html',
    //         data: $("#subscribe").serialize(),
    //         success: function (html) {
    //             try {
    //                 eval(html);
    //             } catch (e) {
    //             }
    //         }
    //     });
    //     $('html, body').delay(1500).animate({ scrollTop: 0 }, 'slow');
    // }

    // $('#subscribe_email').keypress(function (e) {
    //     if (e.which == 13) {
    //         e.preventDefault();
    //         email_subscribe();
    //     }
    //     var name = $(this).val();
    //     $('#subscribe_name').val(name);
    // });
    // $('#subscribe_email').change(function () {
    //     var name = $(this).val();
    //     $('#subscribe_name').val(name);
    // });

    /* ********** */

    $("#banner0").swiper({
        slidesPerView: 6,
        spaceBetween: 0,
        autoplay: false,
        loop: false,
        autoplayDisableOnInteraction: false,
        // Responsive breakpoints
        breakpoints: {
            479: {
                slidesPerView: 2
            },
            767: {
                slidesPerView: 3
            },
            991: {
                slidesPerView: 4
            },
            1200: {
                slidesPerView: 6
            }
        }
    });

    //testimonial
    $("#slides").owlCarousel({
        autoPlay: 1,

        loop: false,
        margin: 0,
        navSpeed: 3000,
        dotsSpeed: 3000,
        autoplaySpeed: 3000,
        nav: false,
        dots: false,
        lazyLoad: true,
        navText: [
            '<i class="ion-ios-arrow-left"></i>',
            '<i class="ion-ios-arrow-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    });

    // Blog Slider
    $(".articles-container").owlCarousel({
        autoPlay: false,
        items: 2,
        margin: 0,
        loop: true,
        navSpeed: 1000,
        dotsSpeed: 1000,
        autoplaySpeed: 1000,
        nav: true,
        dots: false,
        navText: [
            '<i class="ion-chevron-left"></i>',
            '<i class="ion-chevron-right"></i>'
        ],
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            480: {
                items: 2,
                nav: false
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1200: {
                items: 2
            }
        }
    });
});

// register page code

// Sort the custom fields
$("#account .form-group[data-sort]")
    .detach()
    .each(function () {
        if (
            $(this).attr("data-sort") >= 0 &&
            $(this).attr("data-sort") <= $("#account .form-group").length
        ) {
            $("#account .form-group")
                .eq($(this).attr("data-sort"))
                .before(this);
        }

        if ($(this).attr("data-sort") > $("#account .form-group").length) {
            $("#account .form-group:last").after(this);
        }

        if ($(this).attr("data-sort") == $("#account .form-group").length) {
            $("#account .form-group:last").after(this);
        }

        if ($(this).attr("data-sort") < -$("#account .form-group").length) {
            $("#account .form-group:first").before(this);
        }
    });

$("input[name='customer_group_id']").on("change", function () {
    $.ajax({
        url:
            "index.php?route=account/register/customfield&customer_group_id=" +
            this.value,
        dataType: "json",
        success: function (json) {
            $(".custom-field").hide();
            $(".custom-field").removeClass("required");

            for (i = 0; i < json.length; i++) {
                custom_field = json[i];

                $("#custom-field" + custom_field["custom_field_id"]).show();

                if (custom_field["required"]) {
                    $("#custom-field" + custom_field["custom_field_id"]).addClass(
                        "required"
                    );
                }
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            // alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
        }
    });
});

$("input[name='customer_group_id']:checked").trigger("change");

$("button[id^='button-custom-field']").on("click", function () {
    var element = this;

    $("#form-upload").remove();

    $("body").prepend(
        '<form enctype="multipart/form-data" id="form-upload" style="display: none;"><input type="file" name="file" /></form>'
    );

    $("#form-upload input[name='file']").trigger("click");

    if (typeof timer != "undefined") {
        clearInterval(timer);
    }

    timer = setInterval(function () {
        if ($("#form-upload input[name='file']").val() != "") {
            clearInterval(timer);

            $.ajax({
                url: "index.php?route=tool/upload",
                type: "post",
                dataType: "json",
                data: new FormData($("#form-upload")[0]),
                cache: false,
                contentType: false,
                processData: false,
                beforeSend: function () {
                    $(element).button("loading");
                },
                complete: function () {
                    $(element).button("reset");
                },
                success: function (json) {
                    $(element)
                        .parent()
                        .find(".text-danger")
                        .remove();

                    if (json["error"]) {
                        $(node)
                            .parent()
                            .find("input")
                            .after('<div class="text-danger">' + json["error"] + "</div>");
                    }

                    if (json["success"]) {
                        alert(json["success"]);

                        $(element)
                            .parent()
                            .find("input")
                            .val(json["code"]);
                    }
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    alert(
                        thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText
                    );
                }
            });
        }
    }, 500);
});

$(".date").datetimepicker({
    language: "en-gb",
    pickTime: false
});

$(".time").datetimepicker({
    language: "en-gb",
    pickDate: false
});

$(".datetime").datetimepicker({
    language: "en-gb",
    pickDate: true,
    pickTime: true
});

// search page

$("#button-search").bind("click", function () {
    url = "index.php?route=product/search";
    var search = $("#content input[name='search']").prop("value");
    if (search) {
        url += "&search=" + encodeURIComponent(search);
    }
    var category_id = $("#content select[name='category_id']").prop("value");
    if (category_id > 0) {
        url += "&category_id=" + encodeURIComponent(category_id);
    }
    var sub_category = $("#content input[name='sub_category']:checked").prop(
        "value"
    );
    if (sub_category) {
        url += "&sub_category=true";
    }
    var filter_description = $("#content input[name='description']:checked").prop(
        "value"
    );
    if (filter_description) {
        url += "&description=true";
    }
    location = url;
});
$("#content input[name='search']").bind("keydown", function (e) {
    if (e.keyCode == 13) {
        $("#button-search").trigger("click");
    }
});
$("select[name='category_id']").on("change", function () {
    if (this.value == "0") {
        $("input[name='sub_category']").prop("disabled", true);
    } else {
        $("input[name='sub_category']").prop("disabled", false);
    }
});
$("select[name='category_id']").trigger("change");

// one category page

var filter_url = "";
var ids = [];
var min_price = parseFloat("80");
var max_price = parseFloat("1000");
var current_min_price = parseFloat($("#price-from").val());
var current_max_price = parseFloat($("#price-to").val());

$("#slider-price").slider({
    range: true,
    min: min_price,
    max: max_price,
    values: [current_min_price, current_max_price],
    slide: function (event, ui) {
        $("#price-from").val(ui.values[0]);
        $("#price-to").val(ui.values[1]);
        current_min_price = ui.values[0];
        current_max_price = ui.values[1];
    },
    stop: function (event, ui) {
        filter_url = $(".price-url").val();
        filter_url += "&price=" + current_min_price + "," + current_max_price;
        ocfilter.filter(filter_url);
    }
});

$(".a-filter").click(function () {
    var id = $(this).attr("name");
    var filter_ids;
    filter_url = $(".filter-url").val();
    if ($(this).hasClass("add-filter") == true) {
        ids.push(id);
    } else if ($(this).hasClass("remove-filter") == true) {
        ids = $.grep(ids, function (value) {
            return value != id;
        });
    }
    filter_ids = ids.join(",");
    filter_url += "&filter=" + filter_ids;
    ocfilter.filter(filter_url);
});

$(".clear-filter").click(function () {
    ids = [];
});

$(document).ajaxComplete(function () {
    var current_min_price = parseFloat($("#price-from").val());
    var current_max_price = parseFloat($("#price-to").val());

    $("#slider-price").slider({
        range: true,
        min: min_price,
        max: max_price,
        values: [current_min_price, current_max_price],
        slide: function (event, ui) {
            $("#price-from").val(ui.values[0]);
            $("#price-to").val(ui.values[1]);
            current_min_price = ui.values[0];
            current_max_price = ui.values[1];
        },
        stop: function (event, ui) {
            filter_url = $(".price-url").val();
            filter_url += "&price=" + current_min_price + "," + current_max_price;
            ocfilter.filter(filter_url);
        }
    });

    $(".a-filter").click(function () {
        var id = $(this).attr("name");
        var filter_ids = "";
        filter_url = $(".filter-url").val();

        if ($(this).hasClass("add-filter") == true) {
            ids.push(id);
        } else if ($(this).hasClass("remove-filter") == true) {
            ids = $.grep(ids, function (value) {
                return value != id;
            });
        }
        filter_ids = ids.join(",");
        filter_url += "&filter=" + filter_ids;
        ocfilter.filter(filter_url);
    });

    $(".clear-filter").click(function () {
        ids = [];
    });
});

// single product

$(".related-container").owlCarousel({
    nav: true,
    dots: false,
    navSpeed: 1000,
    margin: 0,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        480: {
            items: 2,
            nav: false
        },
        768: {
            items: 3
        },
        992: {
            items: 4
        },
        1200: {
            items: 4
        }
    },
    onInitialized: function () {
        owlAction();
    },
    onTranslated: function () {
        owlAction();
    }
});

function owlAction() {
    $(".related-container .owl-item").removeClass("first");
    $(".related-container .owl-item").removeClass("last");
    $(".related-container .owl-item").removeClass("before-active");
    $(".related-container .owl-item.active:first").addClass("first");
    $(".related-container .owl-item.active:last").addClass("last");
    $(".related-container .owl-item.active:first")
        .prev()
        .addClass("before-active");
}

$("select[name='recurring_id'], input[name=\"quantity\"]").change(function () {
    $.ajax({
        url: "index.php?route=product/product/getRecurringDescription",
        type: "post",
        data: $(
            "input[name='product_id'], input[name='quantity'], select[name='recurring_id']"
        ),
        dataType: "json",
        beforeSend: function () {
            $("#recurring-description").html("");
        },
        success: function (json) {
            $(".alert-dismissible, .text-danger").remove();

            if (json["success"]) {
                $("#recurring-description").html(json["success"]);
            }
        }
    });
});

$("#button-cart").on("click", function () {
    $.ajax({
        url: "index.php?route=checkout/cart/add",
        type: "post",
        data: $(
            "#product input[type='text'], #product input[type='hidden'], #product input[type='radio']:checked, #product input[type='checkbox']:checked, #product select, #product textarea"
        ),
        dataType: "json",
        beforeSend: function () {
            $("#button-cart").button("loading");
        },
        complete: function () {
            $("#button-cart").button("reset");
        },
        success: function (json) {
            $(".alert-dismissible, .text-danger").remove();
            $(".form-group").removeClass("has-error");

            if (json["error"]) {
                if (json["error"]["option"]) {
                    for (i in json["error"]["option"]) {
                        var element = $("#input-option" + i.replace("_", "-"));

                        if (element.parent().hasClass("input-group")) {
                            element
                                .parent()
                                .after(
                                    '<div class="text-danger">' +
                                    json["error"]["option"][i] +
                                    "</div>"
                                );
                        } else {
                            element.after(
                                '<div class="text-danger">' +
                                json["error"]["option"][i] +
                                "</div>"
                            );
                        }
                    }
                }

                if (json["error"]["recurring"]) {
                    $("select[name='recurring_id']").after(
                        '<div class="text-danger">' + json["error"]["recurring"] + "</div>"
                    );
                }

                // Highlight any found errors
                $(".text-danger")
                    .parent()
                    .addClass("has-error");
            }

            if (json["success"]) {
                $(".breadcrumb").after(
                    '<div class="alert alert-success alert-dismissible">' +
                    json["success"] +
                    '<button type="button" class="close" data-dismiss="alert">&times;</button></div>'
                );

                $("#cart > button").html(
                    '<span id="cart-total">' + json["total"] + "</span>"
                );

                $("html, body").animate({scrollTop: 0}, "slow");

                $("#cart > ul").load("index.php?route=common/cart/info ul li");
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
        }
    });
});
$(".date").datetimepicker({
    language: "en-gb",
    pickTime: false
});

$(".datetime").datetimepicker({
    language: "en-gb",
    pickDate: true,
    pickTime: true
});

$(".time").datetimepicker({
    language: "en-gb",
    pickDate: false
});

$("button[id^='button-upload']").on("click", function () {
    var node = this;

    $("#form-upload").remove();

    $("body").prepend(
        '<form enctype="multipart/form-data" id="form-upload" style="display: none;"><input type="file" name="file" /></form>'
    );

    $("#form-upload input[name='file']").trigger("click");

    if (typeof timer != "undefined") {
        clearInterval(timer);
    }

    timer = setInterval(function () {
        if ($("#form-upload input[name='file']").val() != "") {
            clearInterval(timer);

            $.ajax({
                url: "index.php?route=tool/upload",
                type: "post",
                dataType: "json",
                data: new FormData($("#form-upload")[0]),
                cache: false,
                contentType: false,
                processData: false,
                beforeSend: function () {
                    $(node).button("loading");
                },
                complete: function () {
                    $(node).button("reset");
                },
                success: function (json) {
                    $(".text-danger").remove();

                    if (json["error"]) {
                        $(node)
                            .parent()
                            .find("input")
                            .after('<div class="text-danger">' + json["error"] + "</div>");
                    }

                    if (json["success"]) {
                        alert(json["success"]);

                        $(node)
                            .parent()
                            .find("input")
                            .val(json["code"]);
                    }
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    alert(
                        thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText
                    );
                }
            });
        }
    }, 500);
});
$("#review").delegate(".pagination a", "click", function (e) {
    e.preventDefault();

    $("#review").fadeOut("slow");

    $("#review").load(this.href);

    $("#review").fadeIn("slow");
});

$("#review").load("index.php?route=product/product/review&product_id=57");

$("#button-review").on("click", function () {
    $.ajax({
        url: "index.php?route=product/product/write&product_id=57",
        type: "post",
        dataType: "json",
        data: $("#form-review").serialize(),
        beforeSend: function () {
            $("#button-review").button("loading");
        },
        complete: function () {
            $("#button-review").button("reset");
        },
        success: function (json) {
            $(".alert-dismissible").remove();

            if (json["error"]) {
                $("#review").after(
                    '<div class="alert alert-danger alert-dismissible"><i class="fa fa-exclamation-circle"></i> ' +
                    json["error"] +
                    "</div>"
                );
            }

            if (json["success"]) {
                $("#review").after(
                    '<div class="alert alert-success alert-dismissible"><i class="fa fa-check-circle"></i> ' +
                    json["success"] +
                    "</div>"
                );

                $("input[name='name']").val("");
                $("textarea[name='text']").val("");
                $("input[name='rating']:checked").prop("checked", false);
            }
        }
    });
});
