const ProgressBar = require('progressbar.js');
import ScrollBar from 'smooth-scrollbar';
require('perfect-scrollbar/jquery');


let speed = navigator.appName == 'Microsoft Internet Explorer' || !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)) || (typeof $.browser !== "undefined" && $.browser.msie == 1) ? 3.4 : 1.7;

function mainSlider(e) {
    const sliderNavigation = $(".menu__navigation--list");
    const sliderWrapper = $(".content");

    sliderNavigation.on('click', 'li', function (e) {

        $(".menu__navigation--list li").removeClass("selected");
        const selectedItem = $(this);
        $(this).addClass("selected");

        let selectedPosition = selectedItem.index();

        sliderWrapper.css({
            transform: `translateX(-${801 * selectedPosition}px`
        }, 500);
    });
}

function establishProgressBar(container, value) {
    const bar = new ProgressBar.Circle((container), {
        trailColor: '#c7c7c7',
        trailWidth: 3,
        text: {
            value: '0%'
        },
        duration: 1000,
        easing: 'bounce',
        strokeWidth: 4,
        from: {color: '#fff'},
        to: {color: '#ffb400'},
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.setText((circle.value() * 100).toFixed(0) + "%");
            circle.path.setAttribute('stroke', state.color);
        }
    });
    bar.animate(value);
}

function establishLineProgressBar(container, value, color) {
    const bar = new ProgressBar.Line(container, {
        strokeWidth: 20,
        easing: 'easeInOut',
        duration: 1400,
        trailColor: "#e7e7e7",
        trailWidth: 4,
        svgStyle: {width: '100%', height: '100%'},
        text: {
            autoStyleContainer: false
        },
        from: {color: '#FFF'},
        to: {color: color},
        step: (state, bar) => {
            bar.setText(Math.round(bar.value() * 100) + '<span>%</span>');
            bar.path.setAttribute('stroke', state.color);
        }
    });

    bar.animate(value);  // Number from 0.0 to 1.0
}

function initScrollBarForTheSeciton(section){
    ScrollBar.init(document.getElementById(section), {
        damping: 0.05,
        speed: speed,
        alwaysShowTracks: true,
        overscrollEffect: "bounce",
        continuousScrolling: true
    });
}

function homePageSlider() {
    const slides = $('.slide_one__slider__slide');
    const selected = "selected";
    let iterator = $(".slide_one__slider__slide.selected").index();

    slides.each(function(index) {
        $(slides[index]).removeClass(selected);
    });

    if (iterator === slides.length - 1) {
        iterator = 0;
        $(slides[iterator]).addClass(selected);
    } else {
        iterator++;
        $(slides[iterator]).addClass(selected);
    }
}

//Line Progress Bars
//FE LINES
establishLineProgressBar("#html_line_bar", 0.95 , "#9c5c5c");
establishLineProgressBar("#css_line_bar", 0.95 , "#9c5c5c");
establishLineProgressBar("#jquery_line_bar", 0.95 , "#9c5c5c");
establishLineProgressBar("#bootstrap_line_bar", 0.9 , "#9c5c5c");
establishLineProgressBar("#materialize_line_bar", 0.9 , "#9c5c5c");
establishLineProgressBar("#ecma5_line_bar", 0.85 , "#9c5c5c");
establishLineProgressBar("#ecma67_line_bar", 0.85 , "#9c5c5c");
establishLineProgressBar("#react_line_bar", 0.8 , "#9c5c5c");
establishLineProgressBar("#gulp_line_bar", 0.8 , "#9c5c5c");
establishLineProgressBar("#jade_line_bar", 0.8 , "#9c5c5c");
establishLineProgressBar("#sass_line_bar", 0.8 , "#9c5c5c");
establishLineProgressBar("#less_line_bar", 0.8 , "#9c5c5c");
establishLineProgressBar("#vue_line_bar", 0.75 , "#9c5c5c");
establishLineProgressBar("#redux_line_bar", 0.75 , "#9c5c5c");
establishLineProgressBar("#foundation_line_bar", 0.75 , "#9c5c5c");
establishLineProgressBar("#git_line_bar", 0.75 , "#9c5c5c");
establishLineProgressBar("#chai_line_bar", 0.65 , "#9c5c5c");
establishLineProgressBar("#sinon_line_bar", 0.6 , "#9c5c5c");
establishLineProgressBar("#angular_line_bar", 0.55 , "#9c5c5c");
//END OF FE LINES

//DB LINES
establishLineProgressBar("#sql_line_bar", 0.85, '#ffb400');
establishLineProgressBar("#mysql_line_bar", 0.85, '#ffb400');
establishLineProgressBar("#plsql_line_bar", 0.75, '#ffb400');
establishLineProgressBar("#db2_line_bar", 0.75, '#ffb400');
establishLineProgressBar("#oracle_line_bar", 0.7, '#ffb400');
establishLineProgressBar("#server_line_bar", 0.7, '#ffb400');
establishLineProgressBar("#tsql_line_bar", 0.5, '#ffb400');
//END OF DB LINES

//BE LINES
establishLineProgressBar("#node_line_bar", 0.75 , "#9c5c5c");
establishLineProgressBar("#asp_line_bar", 0.7 , "#9c5c5c");
establishLineProgressBar("#express_line_bar", 0.65 , "#9c5c5c");
establishLineProgressBar("#koa_line_bar", 0.65 , "#9c5c5c");
establishLineProgressBar("#mocha_line_bar", 0.65 , "#9c5c5c");
establishLineProgressBar("#mongo_line_bar", 0.65 , "#9c5c5c");
establishLineProgressBar("#mongoose_line_bar", 0.65 , "#9c5c5c");
establishLineProgressBar("#orm_line_bar", 0.6 , "#9c5c5c");
establishLineProgressBar("#javaee_line_bar", 0.45 , "#9c5c5c");
//END OF BE LINES

//DEVOPS LINES
establishLineProgressBar("#npm_line_bar", 0.95, '#ffb400');
establishLineProgressBar("#bower_line_bar", 0.95, '#ffb400');
establishLineProgressBar("#docker_line_bar", 0.75, '#ffb400');
establishLineProgressBar("#boot_line_bar", 0.7, '#ffb400');
establishLineProgressBar("#compose_line_bar", 0.65, '#ffb400');
establishLineProgressBar("#kubernetes_line_bar", 0.55, '#ffb400');
establishLineProgressBar("#swarm_line_bar", 0.5, '#ffb400');
//END OF DEVOPS LINES

//Languages lines
establishLineProgressBar("#js_line_bar", 0.9 , "#9c5c5c");
establishLineProgressBar("#java_line_bar", 0.75 , "#9c5c5c");
establishLineProgressBar("#cs_line_bar", 0.7 , "#9c5c5c");
establishLineProgressBar("#perl_line_bar", 0.55 , "#9c5c5c");
establishLineProgressBar("#cplus_line_bar", 0.45 , "#9c5c5c");
establishLineProgressBar("#shell_line_bar", 0.45 , "#9c5c5c");
establishLineProgressBar("#php_line_bar", 0.45 , "#9c5c5c");
//End of languages line

//End of Line progress Bars

//Radial Progress Bars
establishProgressBar("#front_end_pb", 0.9);
establishProgressBar("#back_end_pb", 0.6);
establishProgressBar("#db_dev_pb", 0.7);
establishProgressBar("#prod_eng_pb", 0.6);
//End of Radial Progress Bars

initScrollBarForTheSeciton("slide_two");
initScrollBarForTheSeciton("slide_three");
initScrollBarForTheSeciton("slide_four");
initScrollBarForTheSeciton("slide_five");
initScrollBarForTheSeciton("slide_six");
initScrollBarForTheSeciton("slide_seven");

mainSlider();

setInterval(function() {
    homePageSlider();
}, 8000);

let i = 1;
setInterval(() => {
    const colorArray = ["#ffb400","#fff","rgba(100, 0, 0, 0.5)"];
    $(".slide_one__cover__description--intro").css({
        'text-shadow': (i%2 === 0) ? `0 0 10px #ffb400` : "none"
    });
    i++;
}, 750);
