$(document).ready(function () {
    $(".edit_img").hover(
        function () {
            $(".m5,.hover1").fadeIn();


        },
        function () {
            $(".m5,.hover1").fadeOut();
        }
    );
    $(".edit_img_part2").hover(
        function () {
            $(".m5_part2,.hover1_part2").fadeIn();


        },
        function () {
            $(".m5_part2,.hover1_part2").fadeOut();
        }
    );
    $(".edit_img2").hover(
        function () {
            $(".m6,.hover2").fadeIn();
        },
        function () {
            $(".m6,.hover2").fadeOut();
        }
    );
    $(".edit_img2_part2").hover(
        function () {
            $(".m6_part2,.hover2_part2").fadeIn();
        },
        function () {
            $(".m6_part2,.hover2_part2").fadeOut();
        }
    );
    $(".edit_img3").hover(
        function () {
            $(".m7,.hover3").fadeIn();
        },
        function () {
            $(".m7,.hover3").fadeOut();
        }
    );
    $(".edit_img3_part2").hover(
        function () {
            $(".m6_part3,.hover2_part3").fadeIn();
        },
        function () {
            $(".m6_part3,.hover2_part3").fadeOut();
        }
    );
    $(".edit_img4").hover(
        function () {
            $(".m9,.hover4").fadeIn();
        },
        function () {
            $(".m9,.hover4").fadeOut();
        }
    );
    $(".edit_img3_part3").hover(
        function () {
            $(".m6_part4,.hover2_part4").fadeIn();
        },
        function () {
            $(".m6_part4,.hover2_part4").fadeOut();
        }
    );
    $(".edit_img3_part4").hover(
        function () {
            $(".m6_part5,.hover2_part5").fadeIn();
        },
        function () {
            $(".m6_part5,.hover2_part5").fadeOut();
        }
    );
    $(".edit_img4_part4").hover(
        function () {
            $(".m7_part5,.hover2_part6").fadeIn();
        },
        function () {
            $(".m7_part5,.hover2_part6").fadeOut();
        }
    );
    $(".edit_img4_part5").hover(
        function () {
            $(".m8_part5,.hover3_part6").fadeIn();
        },
        function () {
            $(".m8_part5,.hover3_part6").fadeOut();
        }
    );
    $(".edit_img4_part6").hover(
        function () {
            $(".m8_part6,.hover3_part7").fadeIn();
        },
        function () {
            $(".m8_part6,.hover3_part7").fadeOut();
        }
    );
    $(".l1,.detail_new").hover(
        function () {
            $(".detail_new").show();
        },
        function () {
            $(".detail_new").hide();
        }
    );
    $(".l2,.detail_clothing").hover(
        function () {
            $(".detail_clothing").show();
        },
        function () {
            $(".detail_clothing").hide();
        }
    );
    $(".l3,.edit_dresses").hover(
        function () {
            $(".edit_dresses").show();
        },
        function () {
            $(".edit_dresses").hide();
        }
    );
    $(".l4,.edit_tops").hover(
        function () {
            $(".edit_tops").show();
        },
        function () {
            $(".edit_tops").hide();
        }
    );
    $(".l5,.edit_shoes").hover(
        function () {
            $(".edit_shoes").show();
        },
        function () {
            $(".edit_shoes").hide();
        }
    );
    $(".l6,.edit_accessors").hover(
        function () {
            $(".edit_accessors").show();
        },
        function () {
            $(".edit_accessors").hide();
        }
    );
    $(".l7,.edit_sale").hover(
        function () {
            $(".edit_sale").show();
        },
        function () {
            $(".edit_sale").hide();
        }
    );
    $(".view").click(function () {
        $(".view").hide();
        $("#loader_container").show();
    });

    $(".view1").click(function(){
        $(".subscribe").animate({
        top:'2506px'
        },2000)
                $(".subscribe").animate({
            width: '500px'
        }, 2000);
                $(".subscribe").animate({
            height: '400px'
        }, 2000);
        $(".subscribe").animate({
                    borderRadius: '10px'
                }, 2000, function () {
                            $(".sub").fadeIn(2000, function () {
                                $(".follow").fadeIn(2000, function () {
                                    $(".input_email").fadeIn(2000, function () {
                                        $(".input_password").fadeIn(2000, function () {
                                            $(".input_checkbox").fadeIn(2000, function () {
                                                $(".remember").fadeIn(2000, function () {
                                                    $(".loin").fadeIn(2000, function () {
                                                        $(".create").fadeIn(2000);
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        });
                        $(".create").click(function () {
                                    $(".hide_last").fadeOut(2000, function () {
                                        $(".sub1").fadeIn(2000, function () {
                                            $(".follow1").fadeIn(2000, function () {
                                                $(".input_email1").fadeIn(2000, function () {
                                                    $(".input_password1").fadeIn(2000, function () {
                                                        $(".input_password2").fadeIn(2000, function () {
                                                            $(".loin1").fadeIn(2000)
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                                $(".loin").click(function () {
                                            $(".subscribe").fadeOut(2000)
                                        })
                                        $(".loin1").click(function () {
                                            $(".subscribe").fadeOut(2000)
                                        })
                                    })
    $(".select").click(function () {
        $(".ul_last").slideToggle();
    });
    $(".icon-sort-down.custom").click(function () {
        $(".ul_last1").slideToggle();
    });
    $(".select h2.about").on("click",function(){
        $(".select ul.ul_about").slideToggle();
    })
        $(".select h2.help").on("click",function(){
        $(".select ul.ul_help").slideToggle();
    })
                $(".select h2.stay").on("click",function(){
        $(".select ul.ul_stay").slideToggle();
    })

        $(".select h2.delivery").on("click",function(){
        $(".select ul.ul_delivery").slideToggle();
    })

    $(".menu .list ul li").on("click",function(){
        $(this).addClass("active").siblings(".menu .list ul li").removeClass("active")
    })
    $(".menu .list svg.fa-times").on("click",function(){
        $(this).parent().fadeOut()
    })
    $(".menu svg.fa-bars").on("click",function(){
        $(".menu .list").fadeIn()
    })
    $(".menu ul li.activation").on("click",function(){
        $(".menu ul li.activation svg").toggleClass("fa-arrow-down").toggleClass("fa-arrow-up");
        $(".menu ul .nav.nv1").slideToggle()
    })
    $(".menu ul li.activation2").on("click",function(){
        $(".menu ul li.activation2 svg").toggleClass("fa-arrow-down").toggleClass("fa-arrow-up");
        $(".menu ul .nav.nv2").slideToggle()
    })
    $(".menu ul li.activation3").on("click",function(){
        $(".menu ul li.activation3 svg").toggleClass("fa-arrow-down").toggleClass("fa-arrow-up");
        $(".menu ul .nav.nv3").slideToggle()
    })
    $(".menu ul li.activation4").on("click",function(){
        $(".menu ul li.activation4 svg").toggleClass("fa-arrow-down").toggleClass("fa-arrow-up");
        $(".menu ul .nav.nv4").slideToggle()
    })
    $(".menu ul li.activation5").on("click",function(){
        $(".menu ul li.activation5 svg").toggleClass("fa-arrow-down").toggleClass("fa-arrow-up");
        $(".menu ul .nav.nv5").slideToggle()
    })
    $(".menu ul li.activation6").on("click",function(){
        $(".menu ul li.activation6 svg").toggleClass("fa-arrow-down").toggleClass("fa-arrow-up");
        $(".menu ul .nav.nv6").slideToggle()
    })
    $(".menu ul li.activation7").on("click",function(){
        $(".menu ul li.activation7 svg").toggleClass("fa-arrow-down").toggleClass("fa-arrow-up");
        $(".menu ul .nav.nv7").slideToggle()
    })
    $(".icon svg:last-of-type").on("click",function(){
        $(".menu .list").slideToggle()
    })
});
