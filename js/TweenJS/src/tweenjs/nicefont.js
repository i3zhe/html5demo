/*

Version: 	0.1
Author:		Mamzelle
Contact: 	mamzelle@mamzelle.ca
Website:	http://www.mamzelle.ca
Twitter:	@mamzellejuu

*/

function Line(a) {
    this.coord = a;
    this.tick = function() {
        var a = new Graphics;
        a.setStrokeStyle(1);
        a.beginStroke("#FFFFFF");
        a.moveTo(myLinesPoint[0].x, myLinesPoint[0].y);
        for (var b = 0; b < myLinesPoint.length; b++) {
            a.lineTo(myLinesPoint[b].x, myLinesPoint[b].y)
        }
        myLine = new Shape(a);
        myLine.y = 50;
        myLine.width = 500;
        myLine.height = 100;
        stage.addChild(myLine)
    }
} (function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Container;
    b.prototype.Container_initialize = b.prototype.initialize;
    b.prototype.Container_tick = b.prototype.tick;
    b.prototype.FITC_WIDTH = 75;
    b.prototype.FITC_HEIGHT = 75;
    b.prototype.currentPosition = 0;
    b.prototype.currentLine = 0;
    b.prototype.fitcLogo;
    b.prototype.featuredCtn;
    b.prototype.featured;
    b.prototype.featLine1;
    b.prototype.featLine2;
    b.prototype.featLine3;
    b.prototype.featLine4;
    b.prototype.logoCircle1;
    b.prototype.logoCircle2;
    b.prototype.logoCircle3;
    b.prototype.mamzelle;
    b.prototype.initialize = function() {
        this.Container_initialize();
        this.initVisual()
    };
    b.prototype.initVisual = function() {
        this.fitcLogo = new Container;
        this.fitcLogo.regX = this.FITC_WIDTH;
        this.fitcLogo.regY = this.FITC_HEIGHT;
        this.fitcLogo.scaleX = 0;
        this.fitcLogo.scaleY = 0;
        this.fitcLogo.x = 170;
        this.fitcLogo.y = 220;
        fitcCircle = this.drawCircleFitcLogo();
        fitcCircle.name = "Fitc Circle";
        this.fitcLogo.addChild(fitcCircle);
        this.addChild(this.fitcLogo);
        fitcVector = new FitcLogo;
        fitcVector.x = 15;
        fitcVector.y = 35;
        fitcVector.compositeOperation = "destination-out";
        this.fitcLogo.addChild(fitcVector);
        this.featuredCtn = new Container;
        this.featuredCtn.x = 281;
        this.featuredCtn.y = 204;
        this.addChild(this.featuredCtn);
        this.featured = new Featured2;
        this.featured.alpha = 0;
        this.featuredCtn.addChild(this.featured);
        this.logoCircle1 = new LogoCircle;
        this.logoCircle1.x = 404;
        this.logoCircle1.y = 238;
        this.logoCircle1.regX = 50;
        this.logoCircle1.regY = 50;
        this.logoCircle1.scaleX = 0;
        this.logoCircle1.scaleY = 0;
        this.addChild(this.logoCircle1);
        this.logoCircle2 = new LogoCircle;
        this.logoCircle2.x = 406;
        this.logoCircle2.y = 197;
        this.logoCircle2.regX = 50;
        this.logoCircle2.regY = 50;
        this.logoCircle2.scaleX = 0;
        this.logoCircle2.scaleY = 0;
        this.addChild(this.logoCircle2);
        this.logoCircle3 = new LogoCircle;
        this.logoCircle3.x = 444;
        this.logoCircle3.y = 216;
        this.logoCircle3.regX = 50;
        this.logoCircle3.regY = 50;
        this.logoCircle3.scaleX = 0;
        this.logoCircle3.scaleY = 0;
        this.addChild(this.logoCircle3);
        this.mamzelle = new Mamzelle;
        this.mamzelle.x = 480;
        this.mamzelle.y = 205;
        this.mamzelle.alpha = 0;
        this.addChild(this.mamzelle);
        this.runAnimation();
        stage.update()
    };
    b.prototype.runAnimation = function() {
        Tween.get(this.fitcLogo).to({
            scaleX: 1,
            scaleY: 1
        },
        1e3, Ease.bounceOut);
        Tween.get(this.featured).wait(1200).to({
            alpha: 1
        },
        200);
        Tween.get(this.logoCircle1).wait(1600).to({
            scaleX: 1,
            scaleY: 1
        },
        300, Ease.quadInOut);
        Tween.get(this.logoCircle2).wait(1900).to({
            scaleX: .7,
            scaleY: .7
        },
        300, Ease.quadInOut);
        Tween.get(this.logoCircle3).wait(2e3).to({
            scaleX: .5,
            scaleY: .5
        },
        300, Ease.quadInOut);
        Tween.get(this.mamzelle).wait(2300).to({
            alpha: 1
        },
        300);
        Tween.get(this).wait(4e3).to({
            alpha: 0
        },
        300).call(this.onCompletedAnimation, null, this)
    };
    b.prototype.onCompletedAnimation = function() {
        Ticker.removeListener(this);
        containerFrame.removeChild(this);
        $("body").trigger("frameCompleted")
    };
    b.prototype.drawCircleFitcLogo = function() {
        var a = StyleManager.WHITE.red;
        var b = StyleManager.WHITE.green;
        var c = StyleManager.WHITE.blue;
        var d = StyleManager.WHITE.alpha;
        var e = new Graphics;
        e.setStrokeStyle(1);
        e.beginFill(Graphics.getRGB(a, b, c, 1));
        e.drawCircle(this.FITC_WIDTH, this.FITC_WIDTH, this.FITC_WIDTH);
        var f = new Shape(e);
        f.x = 0;
        f.y = 0;
        return f
    };
    b.prototype.tick = function() {
        this.update()
    };
    b.prototype.drawLetter = function() {
        for (var a = 0; a < this.Letters_Coord.length; a++) {
            for (var b = 0; b < this.Letters_Coord[a].length; b += 5) {
                var c = b == 0 ? 0 : b - 1;
                var d = this.Letters_Coord[a];
                if (b == 0) {
                    lettersSignature.moveTo(d[c].x, d[c].y);
                    lettersSignature.lineTo(d[c].x, d[c].y)
                } else if (b == d.length - 1) {
                    lettersSignature.endFill();
                    b = 0
                } else {
                    lettersSignature.lineTo(d[c].x, d[c].y)
                }
            }
        }
    };
    b.prototype.update = function() {};
    b.prototype.myTest = function() {};
    a.Frame1 = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Container;
    b.prototype.Container_initialize = b.prototype.initialize;
    b.prototype.Container_tick = b.prototype.tick;
    b.prototype.separatorTop;
    b.prototype.separatorBottom;
    b.prototype.i;
    b.prototype.was;
    b.prototype.a;
    b.prototype.flash;
    b.prototype.developer;
    b.prototype.line1;
    b.prototype.line1_1;
    b.prototype.container1;
    b.prototype.now;
    b.prototype.likefitc;
    b.prototype.careermeet;
    b.prototype.newdemands;
    b.prototype.line2;
    b.prototype.line2_1;
    b.prototype.im;
    b.prototype.a2;
    b.prototype.frontend;
    b.prototype.developer2;
    b.prototype.separatorTop2;
    b.prototype.separatorBottom2;
    b.prototype.container1;
    b.prototype.container2;
    b.prototype.initialize = function() {
        this.Container_initialize();
        this.initVisual()
    };
    b.prototype.initVisual = function() {
        this.container1 = new Container;
        this.addChild(this.container1);
        this.separatorTop = new Separator;
        this.separatorTop.x = 393;
        this.separatorTop.y = 228;
        this.separatorTop.regX = 131;
        this.separatorTop.scaleX = 0;
        this.container1.addChild(this.separatorTop);
        this.separatorBottom = new Separator;
        this.separatorBottom.x = 393;
        this.separatorBottom.y = 228;
        this.separatorBottom.regX = 131;
        this.separatorBottom.scaleX = 0;
        this.container1.addChild(this.separatorBottom);
        this.i = new I;
        this.i.x = 333;
        this.i.y = 171;
        this.i.alpha = 0;
        this.container1.addChild(this.i);
        this.was = new Was;
        this.was.x = 356;
        this.was.y = 171;
        this.was.alpha = 0;
        this.container1.addChild(this.was);
        this.a = new A;
        this.a.x = 452;
        this.a.y = 171;
        this.a.alpha = 0;
        this.container1.addChild(this.a);
        this.flash = new Flash;
        this.flash.x = 173;
        this.flash.y = 240;
        this.flash.alpha = 0;
        this.container1.addChild(this.flash);
        this.developer = new Developer;
        this.developer.x = 340;
        this.developer.y = 240;
        this.developer.alpha = 0;
        this.container1.addChild(this.developer);
        var a = new Graphics;
        a.setStrokeStyle(2, 1, 1, 10);
        a.beginStroke(StyleManager.ORANGE.uint);
        a.moveTo(0, 0);
        a.lineTo(0, 360);
        a.closePath();
        this.line1 = new Shape(a);
        this.line1.y = 370;
        this.line1.x = 410;
        this.line1.scaleY = 0;
        this.container1.addChild(this.line1);
        this.line1_1 = new Shape(a);
        this.line1_1.y = 720;
        this.line1_1.x = 410;
        this.line1_1.regY = 360;
        this.line1_1.scaleY = 1;
        this.line1_1.alpha = 0;
        this.container1.addChild(this.line1_1);
        this.container2 = new Container;
        this.addChild(this.container2);
        this.now = new Now;
        this.now.x = 98;
        this.now.y = 140;
        this.now.alpha = 0;
        this.container2.addChild(this.now);
        this.likefitc = new LikeFITC;
        this.likefitc.x = 356;
        this.likefitc.y = 184;
        this.likefitc.alpha = 0;
        this.container2.addChild(this.likefitc);
        this.careermeet = new CareerMeet;
        this.careermeet.x = 346;
        this.careermeet.y = 238;
        this.careermeet.alpha = 0;
        this.container2.addChild(this.careermeet);
        this.newdemands = new NewDemands;
        this.newdemands.x = 336;
        this.newdemands.y = 292;
        this.newdemands.alpha = 0;
        this.container2.addChild(this.newdemands);
        this.line2 = new Shape(a);
        this.line2.y = 370;
        this.line2.x = 410;
        this.line2.scaleY = 0;
        this.container2.addChild(this.line2);
        this.line2_1 = new Shape(a);
        this.line2_1.y = 720;
        this.line2_1.x = 410;
        this.line2_1.regY = 360;
        this.line2_1.scaleY = 1;
        this.line2_1.alpha = 0;
        this.container2.addChild(this.line2_1);
        this.im = new Im;
        this.im.x = 333;
        this.im.y = 165;
        this.im.alpha = 0;
        this.addChild(this.im);
        this.a2 = new A;
        this.a2.x = 413;
        this.a2.y = 165;
        this.a2.scaleX = 1.1;
        this.a2.scaleY = 1.1;
        this.a2.alpha = 0;
        this.addChild(this.a2);
        this.frontend = new FrontEnd;
        this.frontend.x = 110;
        this.frontend.y = 235;
        this.frontend.alpha = 0;
        this.addChild(this.frontend);
        this.developer2 = new Developer;
        this.developer2.x = 380;
        this.developer2.y = 235;
        this.developer2.scaleX = .96;
        this.developer2.scaleY = .96;
        this.developer2.alpha = 0;
        this.addChild(this.developer2);
        this.separatorTop2 = new Separator;
        this.separatorTop2.x = 393;
        this.separatorTop2.y = 228;
        this.separatorTop2.regX = 131;
        this.separatorTop2.scaleX = 0;
        this.addChild(this.separatorTop2);
        this.separatorBottom2 = new Separator;
        this.separatorBottom2.x = 393;
        this.separatorBottom2.y = 228;
        this.separatorBottom2.regX = 131;
        this.separatorBottom2.scaleX = 0;
        this.addChild(this.separatorBottom2);
        this.runAnimation()
    };
    b.prototype.runAnimation = function() {
        Tween.get(this.separatorTop).to({
            scaleX: 1
        },
        550, Ease.quintInOut).wait(200).to({
            y: 118
        },
        250, Ease.quartOut);
        Tween.get(this.separatorBottom).to({
            scaleX: 1
        },
        550, Ease.quintInOut).wait(200).to({
            y: 348
        },
        250, Ease.quartOut);
        Tween.get(this.i).wait(1e3).to({
            alpha: 1
        },
        200);
        Tween.get(this.was).wait(1200).to({
            alpha: 1
        },
        200);
        Tween.get(this.a).wait(1400).to({
            alpha: 1
        },
        200);
        Tween.get(this.flash).wait(1600).to({
            alpha: 1
        },
        200);
        Tween.get(this.developer).wait(1800).to({
            alpha: 1
        },
        200);
        Tween.get(this.container1).wait(2e3).to({
            y: -600
        },
        1300, Ease.quartInOut);
        Tween.get(this.line1).wait(2e3).to({
            scaleY: 1
        },
        700, Ease.quartInOut).wait(300).to({
            alpha: 0
        });
        Tween.get(this.line1_1).wait(3e3).to({
            alpha: 1
        },
        1).to({
            scaleY: 0
        },
        400);
        var a = 1e3;
        Tween.get(this.now).wait(3200).to({
            alpha: 1
        },
        300);
        Tween.get(this.likefitc).wait(4e3).to({
            alpha: 1,
            y: 164
        },
        500, Ease.quartOut);
        Tween.get(this.careermeet).wait(4200).to({
            alpha: 1,
            y: 218
        },
        500, Ease.quartOut);
        Tween.get(this.newdemands).wait(4400).to({
            alpha: 1,
            y: 272
        },
        500, Ease.quartOut);
        Tween.get(this.container2).wait(5500 + a).to({
            y: -600
        },
        1300, Ease.quartInOut);
        Tween.get(this.line2).wait(5500 + a).to({
            scaleY: 1
        },
        700, Ease.quartInOut).wait(300).to({
            alpha: 0
        });
        Tween.get(this.line2_1).wait(6500 + a).to({
            alpha: 1
        },
        1).to({
            scaleY: 0
        },
        400);
        var b = 500;
        Tween.get(this.separatorTop2).wait(6500 + a).to({
            scaleX: 1
        },
        550, Ease.quintInOut).wait(200).to({
            y: 118
        },
        250, Ease.quartOut).wait(2e3 + b).to({
            y: 228
        },
        300, Ease.quartOut).to({
            scaleX: 0
        },
        100, Ease.quartOut);
        Tween.get(this.separatorBottom2).wait(6500 + a).to({
            scaleX: 1
        },
        550, Ease.quintInOut).wait(200).to({
            y: 348
        },
        250, Ease.quartOut).wait(2e3 + b).to({
            y: 228
        },
        300, Ease.quartOut).to({
            scaleX: 0
        },
        100, Ease.quartOut).call(this.onCompletedAnimation, null, this);
        Tween.get(this.im).wait(7600 + a).to({
            alpha: 1
        },
        200).wait(1600 + b).to({
            alpha: 0
        },
        100);
        Tween.get(this.a2).wait(7800 + a).to({
            alpha: 1
        },
        200).wait(1400 + b).to({
            alpha: 0
        },
        100);
        Tween.get(this.frontend).wait(8e3 + a).to({
            alpha: 1
        },
        200).wait(1200 + b).to({
            alpha: 0
        },
        100);
        Tween.get(this.developer2).wait(8200 + a).to({
            alpha: 1
        },
        200).wait(1e3 + b).to({
            alpha: 0
        },
        100)
    };
    b.prototype.onCompletedAnimation = function() {
        $("body").trigger("frameCompleted");
        Ticker.removeListener(this);
        containerFrame.removeChild(this)
    };
    b.prototype.tick = function() {};
    a.Frame2 = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Container;
    b.prototype.Container_initialize = b.prototype.initialize;
    b.prototype.Container_tick = b.prototype.tick;
    b.prototype.maskLine1;
    b.prototype.maskLine2;
    b.prototype.maskLine3;
    b.prototype.maskLine4;
    b.prototype.comes;
    b.prototype. in ;
    b.prototype.everything;
    b.prototype.dashline1;
    b.prototype.dashline2;
    b.prototype.dashline3;
    b.prototype.dashline4;
    b.prototype.initialize = function() {
        this.Container_initialize();
        this.initVisual()
    };
    b.prototype.initVisual = function() {
        this.scaleX = .9;
        this.scaleY = .9;
        this.x = 50;
        this.y = 10;
        this.everything = new Everything;
        this.everything.x = 180;
        this.everything.y = 110;
        this.addChild(this.everything);
        this.comes = new Comes;
        this.comes.x = 272;
        this.comes.y = 185;
        this.addChild(this.comes);
        this. in =new In;
        this. in .x = 322;
        this. in .y = 253;
        this.addChild(this. in );
        this.threes = new Threes;
        this.threes.x = 263;
        this.threes.y = 318;
        this.addChild(this.threes);
        var a = 120;
        this.dashline1 = new DashLine1;
        this.dashline1.x = 0;
        this.dashline1.y = 0;
        this.dashline2 = new DashLine2;
        this.dashline2.x = 0;
        this.dashline2.y = 0;
        this.dashline3 = new DashLine1;
        this.dashline3.x = 0;
        this.dashline3.y = 343;
        this.dashline4 = new DashLine2;
        this.dashline4.x = 502;
        this.dashline4.y = 0;
        this.dashRect = new Container;
        this.dashRect.regX = 250;
        this.dashRect.regY = 175;
        this.dashRect.x = 390;
        this.dashRect.y = 250;
        this.dashRect.scaleX = 0;
        this.dashRect.scaleY = 0;
        this.dashRect.addChild(this.dashline1);
        this.dashRect.addChild(this.dashline2);
        this.dashRect.addChild(this.dashline3);
        this.dashRect.addChild(this.dashline4);
        this.addChild(this.dashRect);
        var b = new Graphics;
        b.beginFill(Graphics.getRGB(0, 0, 0, 1));
        b.drawRect( - 20, -20, 546, 366);
        this.maskRect = new Shape(b);
        this.maskRect.regX = 250;
        this.maskRect.regY = 175;
        this.maskRect.x = 391;
        this.maskRect.y = 252;
        this.maskRect.scaleX = .01;
        this.maskRect.scaleY = .01;
        this.maskRect.compositeOperation = "destination-in";
        this.addChild(this.maskRect);
        this.runAnimation()
    };
    b.prototype.runAnimation = function() {
        Tween.get(this.dashRect).to({
            scaleX: 1,
            scaleY: 1
        },
        1e3, Ease.quartInOut).wait(1e3).to({
            scaleX: .01,
            scaleY: .01
        },
        1e3, Ease.quartInOut);
        Tween.get(this.maskRect).to({
            scaleX: 1,
            scaleY: 1
        },
        1e3, Ease.quartInOut).wait(1e3).to({
            scaleX: .01,
            scaleY: .01
        },
        1e3, Ease.quartInOut).call(this.onCompletedAnimation, null, this)
    };
    b.prototype.onCompletedAnimation = function() {
        containerFrame.removeChild(this);
        Ticker.removeListener(this);
        $("body").trigger("frameCompleted")
    };
    a.Frame3 = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Container;
    b.prototype.Container_initialize = b.prototype.initialize;
    b.prototype.Container_tick = b.prototype.tick;
    b.prototype.initialize = function() {
        this.Container_initialize();
        this.initVisual()
    };
    b.prototype.initVisual = function() {
        this.regX = 400;
        this.regY = 247;
        this.x = 400;
        this.y = 247;
        this.happened = new Happened;
        this.happened.x = 215 + 190;
        this.happened.y = 120 + 24;
        this.happened.regX = 190;
        this.happened.regY = 24;
        this.happened.scaleX = 0;
        this.happened.scaleY = 0;
        this.happened.alpha = .01;
        this.addChild(this.happened);
        this.twice = new Twice;
        this.twice.x = 105;
        this.twice.y = -200;
        this.happen = new Happen;
        this.happen.x = 254;
        this.happen.y = 120;
        this.happen.alpha = .01;
        this.addChild(this.happen);
        this.thirdtime = new ThirdTime;
        this.thirdtime.y = -200;
        var a = new Container;
        a.x = 110;
        a.y = 194;
        this.addChild(a);
        a.addChild(this.thirdtime);
        a.addChild(this.twice);
        a.clip = new Graphics;
        a.clip.drawRect( - 150, 70, 570, 204);
        this.runAnimation()
    };
    b.prototype.runAnimation = function() {
        var a = 300;
        Tween.get(this.happened).wait(a).to({
            alpha: 1,
            scaleX: 1,
            scaleY: 1
        },
        600, Ease.quadInOut).wait(2e3).to({
            alpha: 0
        },
        300);
        Tween.get(this.twice).wait(a).wait(300).to({
            y: 0
        },
        800, Ease.quadInOut).wait(1400).to({
            y: 500
        },
        800, Ease.quadInOut);
        Tween.get(this.happen).wait(a).wait(2900).to({
            alpha: 1
        },
        300).wait(1300).to({
            alpha: .01
        },
        300).call(this.onCompletedAnimation, null, this);
        Tween.get(this.thirdtime).wait(a).wait(2700).to({
            y: 0
        },
        800, Ease.quadInOut).wait(1e3).to({
            alpha: 0
        },
        300)
    };
    b.prototype.onCompletedAnimation = function() {
        containerFrame.removeChild(this);
        Ticker.removeListener(this);
        $("body").trigger("frameCompleted")
    };
    b.prototype.tick = function() {
        this.update()
    };
    b.prototype.update = function() {};
    a.Frame4 = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Container;
    b.prototype.Container_initialize = b.prototype.initialize;
    b.prototype.Container_tick = b.prototype.tick;
    b.prototype.activeMask = false;
    b.prototype.thisWord;
    b.prototype.isWord;
    b.prototype.reason;
    b.prototype.maskW1;
    b.prototype.maskW2;
    b.prototype.maskW3;
    b.prototype.maskW4;
    b.prototype.maskH1;
    b.prototype.maskH2;
    b.prototype.maskH3;
    b.prototype.maskH4;
    b.prototype.maskH5;
    b.prototype.maskH6;
    b.prototype.maskH6;
    b.prototype.maskY1;
    b.prototype.maskY2;
    b.prototype.maskY3;
    b.prototype.maskY4;
    b.prototype.maskY5;
    b.prototype.maskY6;
    b.prototype.initialize = function() {
        this.Container_initialize();
        this.initVisual()
    };
    b.prototype.initVisual = function() {
        this.thisWord = new ThisWord;
        this.thisWord.x = 327;
        this.thisWord.y = 50;
        this.thisWord.alpha = 0;
        this.addChild(this.thisWord);
        this.isWord = new IsWord;
        this.isWord.x = 427;
        this.isWord.y = 50;
        this.isWord.alpha = 0;
        this.addChild(this.isWord);
        this.reason = new ReasonReturn;
        this.reason.x = 195;
        this.reason.y = 377;
        this.reason.alpha = 0;
        this.addChild(this.reason);
        this.w_part1 = new WPart1;
        this.w_part1.x = 174;
        this.w_part1.y = 258;
        this.w_part1.alpha = 0;
        this.addChild(this.w_part1);
        this.w_part2 = new WPart2;
        this.w_part2.x = 268;
        this.w_part2.y = 157;
        this.w_part2.alpha = 0;
        this.addChild(this.w_part2);
        this.w_part3 = new WPart3;
        this.w_part3.x = 186;
        this.w_part3.y = 182;
        this.w_part3.alpha = 0;
        this.addChild(this.w_part3);
        this.w_part4 = new WPart3;
        this.w_part4.x = 229;
        this.w_part4.y = 170;
        this.w_part4.alpha = 0;
        this.addChild(this.w_part4);
        this.h_part1 = new HPart1;
        this.h_part1.x = 344;
        this.h_part1.y = 178;
        this.h_part1.alpha = 0;
        this.addChild(this.h_part1);
        this.h_part2 = new HPart2;
        this.h_part2.x = 331;
        this.h_part2.y = 277;
        this.h_part2.alpha = 0;
        this.addChild(this.h_part2);
        this.h_part3 = new HPart3;
        this.h_part3.x = 346;
        this.h_part3.y = 242;
        this.h_part3.alpha = 0;
        this.addChild(this.h_part3);
        this.h_part4 = new HPart4;
        this.h_part4.x = 346;
        this.h_part4.y = 220;
        this.h_part4.alpha = 0;
        this.addChild(this.h_part4);
        this.h_part5 = new HPart5;
        this.h_part5.x = 410;
        this.h_part5.y = 256;
        this.h_part5.alpha = 0;
        this.addChild(this.h_part5);
        this.h_part6 = new HPart6;
        this.h_part6.x = 423;
        this.h_part6.y = 153;
        this.h_part6.alpha = 0;
        this.addChild(this.h_part6);
        this.y_part1 = new YPart1;
        this.y_part1.x = 500;
        this.y_part1.y = 190;
        this.y_part1.alpha = 0;
        this.addChild(this.y_part1);
        this.y_part2 = new YPart2;
        this.y_part2.x = 488;
        this.y_part2.y = 246;
        this.y_part2.alpha = 0;
        this.addChild(this.y_part2);
        this.y_part3 = new YPart3;
        this.y_part3.x = 540;
        this.y_part3.y = 230;
        this.y_part3.alpha = 0;
        this.addChild(this.y_part3);
        this.y_part4 = new YPart4;
        this.y_part4.x = 577;
        this.y_part4.y = 171;
        this.y_part4.alpha = 0;
        this.addChild(this.y_part4);
        this.y_part5 = new YPart5;
        this.y_part5.x = 524;
        this.y_part5.y = 282;
        this.y_part5.alpha = 0;
        this.addChild(this.y_part5);
        this.y_part6 = new YPart6;
        this.y_part6.x = 538;
        this.y_part6.y = 242;
        this.y_part6.alpha = 0;
        this.addChild(this.y_part6);
        var a = 8;
        this.maskW1 = new MaskLineAngle(new Array(new Point(0, 30), new Point(38, 53)), new Array(new Point(96, 0), new Point(140, 30)), a, "vertical", "left");
        this.w_part1.clip = this.maskW1;
        this.maskW2 = new MaskLineAngle(new Array(new Point(0, 0), new Point(38, 34)), new Array(new Point(0, 104), new Point(42, 129)), a, "vertical", "left");
        this.w_part2.clip = this.maskW2;
        this.maskW3 = new MaskLineAngle(new Array(new Point(0, 0), new Point(18, 10)), new Array(new Point(0, 80), new Point(18, 75)), a, "vertical", "left");
        this.w_part3.clip = this.maskW3;
        this.maskW4 = new MaskLineAngle(new Array(new Point(0, 0), new Point(18, 10)), new Array(new Point(0, 80), new Point(18, 75)), a, "vertical", "left");
        this.w_part4.clip = this.maskW4;
        this.maskH1 = new MaskLineAngle(new Array(new Point(0, 0), new Point(37, 21)), new Array(new Point(2, 35), new Point(37, 27)), a, "vertical", "left");
        this.h_part1.clip = this.maskH1;
        this.maskH2 = new MaskLineAngle(new Array(new Point(0, 7), new Point(33, 35)), new Array(new Point(14, 0), new Point(63, 35)), a, "vertical", "left");
        this.h_part2.clip = this.maskH2;
        this.maskH3 = new MaskLineAngle(new Array(new Point(0, 0), new Point(36, 20)), new Array(new Point(0, 40), new Point(41, 66)), a, "vertical", "left");
        this.h_part3.clip = this.maskH3;
        this.maskH4 = new MaskLineAngle(new Array(new Point(0, 22), new Point(37, 46)), new Array(new Point(62, 2), new Point(60, 37)), a, "vertical", "left");
        this.h_part4.clip = this.maskH4;
        this.maskH5 = new MaskLineAngle(new Array(new Point(0, 7), new Point(36, 31)), new Array(new Point(13, 0), new Point(56, 28)), a, "vertical", "left");
        this.h_part5.clip = this.maskH5;
        this.maskH6 = new MaskLineAngle(new Array(new Point(0, 0), new Point(40, 23)), new Array(new Point(0, 110), new Point(40, 138)), a, "vertical", "left");
        this.h_part6.clip = this.maskH6;
        this.maskY1 = new MaskLineAngle(new Array(new Point(0, 0), new Point(36, 23)), new Array(new Point(0, 36), new Point(36, 37)), a, "vertical", "left");
        this.y_part1.clip = this.maskY1;
        this.maskY2 = new MaskLineAngle(new Array(new Point(0, 13), new Point(30, 34)), new Array(new Point(34, 0), new Point(34, 34)), a, "vertical", "left");
        this.y_part2.clip = this.maskY2;
        this.maskY3 = new MaskLineAngle(new Array(new Point( - 20, 12), new Point(39, 38)), new Array(new Point(36, 0), new Point(75, 27)), a, "vertical", "left");
        this.y_part3.clip = this.maskY3;
        this.maskY4 = new MaskLineAngle(new Array(new Point(0, 0), new Point(37, 20)), new Array(new Point(0, 60), new Point(37, 90)), a, "vertical", "left");
        this.y_part4.clip = this.maskY4;
        this.maskY5 = new MaskLineAngle(new Array(new Point(0, 8), new Point(34, 30)), new Array(new Point(16, 0), new Point(56, 26)), a, "vertical", "left");
        this.y_part5.clip = this.maskY5;
        this.maskY6 = new MaskLineAngle(new Array(new Point(0, 0), new Point(42, 24)), new Array(new Point(0, 42), new Point(40, 67)), a, "vertical", "left");
        this.y_part6.clip = this.maskY6;
        this.runAnimation()
    };
    b.prototype.runAnimation = function() {
        var a = 100;
        Tween.get(this.thisWord).wait(a).to({
            y: 90,
            alpha: 1
        },
        300, Ease.quadInOut).wait(300).call(this.runMaskLetter, null, this);
        Tween.get(this.isWord).wait(a).wait(300).to({
            y: 90,
            alpha: 1
        },
        300, Ease.quadInOut)
    };
    b.prototype.runMaskLetter = function() {
        this.activeMask = true;
        this.w_part1.alpha = 1;
        this.w_part2.alpha = 1;
        this.w_part3.alpha = 1;
        this.w_part4.alpha = 1;
        this.h_part1.alpha = 1;
        this.h_part2.alpha = 1;
        this.h_part3.alpha = 1;
        this.h_part4.alpha = 1;
        this.h_part5.alpha = 1;
        this.h_part6.alpha = 1;
        this.y_part1.alpha = 1;
        this.y_part2.alpha = 1;
        this.y_part3.alpha = 1;
        this.y_part4.alpha = 1;
        this.y_part5.alpha = 1;
        this.y_part6.alpha = 1
    };
    b.prototype.onCompletedAnimation = function() {
        containerFrame.removeChild(this);
        Ticker.removeListener(this);
        $("body").trigger("frameCompleted")
    };
    b.prototype.tick = function() {
        this.update()
    };
    b.prototype.isMaskAnimComplete = function() {
        if (this.maskW1.animIsCompleted && this.maskW2.animIsCompleted && this.maskW3.animIsCompleted && this.maskW4.animIsCompleted && this.maskH1.animIsCompleted && this.maskH2.animIsCompleted && this.maskH3.animIsCompleted && this.maskH4.animIsCompleted && this.maskH5.animIsCompleted && this.maskH6.animIsCompleted && this.maskY1.animIsCompleted && this.maskY2.animIsCompleted && this.maskY3.animIsCompleted && this.maskY4.animIsCompleted && this.maskY5.animIsCompleted && this.maskY6.animIsCompleted) {
            this.activeMask = false;
            this.reason.y = 370;
            Tween.get(this.reason).wait(200).to({
                y: 347,
                alpha: 1
            },
            300, Ease.quadInOut);
            Tween.get(this).wait(2500).to({
                alpha: 0
            },
            400).call(this.onCompletedAnimation, null, this)
        }
    };
    b.prototype.update = function() {
        if (this.activeMask) {
            if (!this.maskW1.animIsCompleted) {
                this.maskW1.update()
            }
            if (!this.maskW2.animIsCompleted) this.maskW2.update();
            if (!this.maskW3.animIsCompleted) this.maskW3.update();
            if (!this.maskW4.animIsCompleted) this.maskW4.update();
            if (!this.maskH1.animIsCompleted) this.maskH1.update();
            if (!this.maskH2.animIsCompleted) this.maskH2.update();
            if (!this.maskH3.animIsCompleted) this.maskH3.update();
            if (!this.maskH4.animIsCompleted) this.maskH4.update();
            if (!this.maskH5.animIsCompleted) this.maskH5.update();
            if (!this.maskH6.animIsCompleted) this.maskH6.update();
            if (!this.maskY1.animIsCompleted) this.maskY1.update();
            if (!this.maskY2.animIsCompleted) this.maskY2.update();
            if (!this.maskY3.animIsCompleted) this.maskY3.update();
            if (!this.maskY4.animIsCompleted) this.maskY4.update();
            if (!this.maskY5.animIsCompleted) this.maskY5.update();
            if (!this.maskY6.animIsCompleted) this.maskY6.update();
            this.isMaskAnimComplete()
        }
    };
    a.Frame5 = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Container;
    b.prototype.Container_initialize = b.prototype.initialize;
    b.prototype.Container_tick = b.prototype.tick;
    b.prototype.initialize = function() {
        this.Container_initialize();
        this.initVisual()
    };
    b.prototype.initVisual = function() {
        this.fioriture = new Bitmap(a.fioriture);
        this.fioriture.x = 204;
        this.fioriture.y = 180;
        this.fioriture.alpha = 0;
        this.addChild(this.fioriture);
        this.fioriture2 = new Bitmap(a.fioriture);
        this.fioriture2.x = 600;
        this.fioriture2.y = 245;
        this.fioriture2.rotation = 180;
        this.fioriture2.alpha = 0;
        this.addChild(this.fioriture2);
        this.x = -30;
        this.y = -35;
        this.scaleX = 1.1;
        this.scaleY = 1.1;
        this.everyyear = new EveryYear;
        this.everyyear.x = 104;
        this.everyyear.y = 100;
        this.everyyear.alpha = 0;
        this.addChild(this.everyyear);
        this.comeback = new ComeBack;
        this.comeback.x = 520;
        this.comeback.y = 164;
        this.comeback.alpha = 0;
        this.addChild(this.comeback);
        this.moremotivated = new MoreMotivated;
        this.moremotivated.x = 66;
        this.moremotivated.y = 222;
        this.moremotivated.alpha = 0;
        this.addChild(this.moremotivated);
        this.thanever = new ThanEver;
        this.thanever.x = 555;
        this.thanever.y = 295;
        this.thanever.alpha = 0;
        this.addChild(this.thanever);
        this.montreal = new Montreal;
        this.montreal.x = 180;
        this.montreal.y = 350;
        this.montreal.alpha = 0;
        this.addChild(this.montreal);
        this.head = new Head;
        this.head.x = 124;
        this.head.y = 102;
        this.head.alpha = 0;
        this.addChild(this.head);
        this.bursting = new Bursting;
        this.bursting.x = 500;
        this.bursting.y = 145;
        this.bursting.alpha = 0;
        this.addChild(this.bursting);
        this.with = new With;
        this.with.x = 265;
        this.with.y = 215;
        this.with.alpha = 0;
        this.addChild(this.with);
        this.newideas = new NewIdeas;
        this.newideas.x = 500;
        this.newideas.y = 254;
        this.newideas.alpha = 0;
        this.addChild(this.newideas);
        this.and = new And;
        this.and.x = 168;
        this.and.y = 304;
        this.and.alpha = 0;
        this.addChild(this.and);
        this.projects = new Projects;
        this.projects.x = 630;
        this.projects.y = 352;
        this.projects.alpha = 0;
        this.addChild(this.projects);
        this.runAnimation()
    };
    b.prototype.runAnimation = function() {
        Tween.get(this.fioriture).wait(300).to({
            alpha: 0
        },
        300, Ease.quartInOut).to({
            y: 28
        },
        500, Ease.quartInOut).wait(6500).to({
            alpha: 0
        },
        600).call(this.onCompletedAnimation, null, this);
        Tween.get(this.fioriture2).wait(300).to({
            alpha: 0
        },
        300, Ease.quartInOut).to({
            y: 460
        },
        500, Ease.quartInOut).wait(6500).to({
            alpha: 0
        },
        600);
        Tween.get(this.everyyear).to({
            x: 274
        },
        3e3, Ease.quartInOut).wait(300).to({
            x: 500
        },
        2e3, Ease.quartInOut);
        Tween.get(this.everyyear).wait(1e3).to({
            alpha: 1
        },
        300).wait(2700).to({
            alpha: 0
        },
        300);
        Tween.get(this.comeback).to({
            x: 296
        },
        3e3, Ease.quartInOut).wait(300).to({
            x: 0
        },
        2e3, Ease.quartInOut);
        Tween.get(this.comeback).wait(1e3).to({
            alpha: 1
        },
        300).wait(2700).to({
            alpha: 0
        },
        300);
        Tween.get(this.moremotivated).wait(600).to({
            x: 206
        },
        2e3, Ease.quartInOut).wait(700).to({
            x: 400
        },
        2e3, Ease.quartInOut);
        Tween.get(this.moremotivated).wait(600).wait(1e3).to({
            alpha: 1
        },
        300).wait(2200).to({
            alpha: 0
        },
        300);
        Tween.get(this.thanever).wait(600).to({
            x: 305
        },
        2e3, Ease.quartInOut).wait(800).to({
            x: 0
        },
        2e3, Ease.quartInOut);
        Tween.get(this.thanever).wait(600).wait(1e3).to({
            alpha: 1
        },
        300).wait(2200).to({
            alpha: 0
        },
        300);
        Tween.get(this.montreal).wait(900).to({
            x: 280
        },
        2e3, Ease.quartInOut).wait(400).to({
            x: 600
        },
        2e3, Ease.quartInOut);
        Tween.get(this.montreal).wait(900).wait(800).to({
            alpha: 1
        },
        300).wait(1800).to({
            alpha: 0
        },
        300);
        Tween.get(this.head).wait(3300).to({
            x: 324
        },
        3e3, Ease.quartInOut).wait(300).to({
            x: 700
        },
        2e3, Ease.quartInOut);
        Tween.get(this.head).wait(3300).wait(1e3).to({
            alpha: 1
        },
        300).wait(2700).to({
            alpha: 0
        },
        300);
        Tween.get(this.bursting).wait(3300).to({
            x: 263
        },
        3e3, Ease.quartInOut).wait(300).to({
            x: 0
        },
        2e3, Ease.quartInOut);
        Tween.get(this.bursting).wait(3300).wait(1e3).to({
            alpha: 1
        },
        300).wait(2700).to({
            alpha: 0
        },
        300);
        Tween.get(this.with).wait(3800).to({
            x: 365
        },
        2e3, Ease.quartInOut).wait(1e3).to({
            x: 600
        },
        2e3, Ease.quartInOut);
        Tween.get(this.with).wait(3800).wait(1e3).to({
            alpha: 1
        },
        300).wait(2200).to({
            alpha: 0
        },
        300);
        Tween.get(this.newideas).wait(3800).to({
            x: 300
        },
        2e3, Ease.quartInOut).wait(1e3).to({
            x: 100
        },
        2e3, Ease.quartInOut);
        Tween.get(this.newideas).wait(3800).wait(1e3).to({
            alpha: 1
        },
        300).wait(2200).to({
            alpha: 0
        },
        300);
        Tween.get(this.and).wait(4500).to({
            x: 368
        },
        1e3, Ease.quartInOut).wait(1500).to({
            x: 100
        },
        2e3, Ease.quartInOut);
        Tween.get(this.and).wait(4500).wait(600).to({
            alpha: 1
        },
        300).wait(1800).to({
            alpha: 0
        },
        300);
        Tween.get(this.projects).wait(4500).to({
            x: 330
        },
        1e3, Ease.quartInOut).wait(1500).to({
            x: 600
        },
        2e3, Ease.quartInOut);
        Tween.get(this.projects).wait(4500).wait(600).to({
            alpha: 1
        },
        300).wait(1800).to({
            alpha: 0
        },
        300)
    };
    b.prototype.deleteReference = function() {
        var a = this.getNumChildren();
        this.removeChild(this.fioriture);
        this.removeChild(this.fioriture2);
        for (var b = 0; b < a; b++) {
            containerFrame.removeChild(this.getChildAt(b))
        }
    };
    b.prototype.onCompletedAnimation = function() {
        this.deleteReference();
        stage.removeChild(this);
        Ticker.removeListener(this);
        $("body").trigger("frameCompleted")
    };
    b.prototype.tick = function() {
        this.update()
    };
    b.prototype.update = function() {};
    a.Frame6 = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Container;
    b.prototype.Container_initialize = b.prototype.initialize;
    b.prototype.Container_tick = b.prototype.tick;
    b.prototype.PIXEL_COLOR_MANIPULATION = {
        red: 145,
        green: 32,
        blue: 97,
        alpha: 255
    };
    b.prototype.RANGE_COLOR = new Array(16720639, 10169343, 16777114, 16777215, 16725116, 12987391, 16723861, 10202879, 9961471, 10172539, 16729343, 13321600, 15159916, 12069567, 16727551, 16738274, 10179839);
    b.prototype.particuleCtn;
    b.prototype.initialize = function() {
        this.Container_initialize();
        this.initVisual()
    };
    b.prototype.initVisual = function() {
        this.y = -5;
        this.x = 30;
        this.scaleX = .9;
        this.scaleY = .9;
        this.particuleCtn = new Container;
        this.addChild(this.particuleCtn);
        this.particuleBelowCtn = new Container;
        this.addChild(this.particuleBelowCtn);
        this.goingto = new GoingTo;
        this.goingto.x = 290;
        this.goingto.y = 97;
        this.goingto.alpha = 0;
        this.goingto.scaleX = .9;
        this.goingto.scaleY = .9;
        this.addChild(this.goingto);
        this.moment = new MomentOf;
        this.moment.x = 225;
        this.moment.y = 399;
        this.moment.alpha = 0;
        this.addChild(this.moment);
        this.inspiration = new Inspiration;
        this.inspiration.x = 290;
        this.inspiration.y = 433;
        this.inspiration.alpha = 0;
        this.inspiration.scaleX = .9;
        this.inspiration.scaleY = .9;
        this.addChild(this.inspiration);
        this.fitc2 = new Fitc2;
        this.fitc2.x = 145;
        this.fitc2.y = 150;
        this.fitc2.scaleX = 1.16;
        this.fitc2.scaleY = 1.16;
        stage.addChild(this.fitc2);
        stage.update();
        var a = ctx.getImageData(0, 0, canvas.width, canvas.height);
        var b = this.getPixelColor(a, canvas.width);
        stage.removeChild(this.fitc2);
        this.createPixel(b);
        this.runAnimation()
    };
    b.prototype.runAnimation = function() {
        var a = this.particuleCtn.getNumChildren();
        var b = 0;
        for (b; b < a; b++) {
            var c = this.particuleCtn.getChildAt(b);
            var d = c.x;
            var e = c.y;
            if (b % 2 == 0) {
                c.scaleX = 0;
                c.scaleY = 0;
                var f = MathUtil.random(700, 1100);
                Tween.get(c).wait(f).to({
                    scaleX: 2.5,
                    scaleY: 2.5
                },
                500, Ease.bounceInOut).to({
                    scaleX: 1.5,
                    scaleY: 1.5
                },
                500, Ease.elasticOut);
                Tween.get(c).wait(f).to({
                    alpha: 1
                },
                500, Ease.quartInOut)
            } else if (b % 5 == 0) {
                c.scaleX = 0;
                c.scaleY = 0;
                var f = MathUtil.random(1e3, 1500);
                Tween.get(c).wait(f).to({
                    scaleX: 2.5,
                    scaleY: 2.5
                },
                500, Ease.bounceInOut).to({
                    scaleX: 1.5,
                    scaleY: 1.5
                },
                500, Ease.elasticOut);
                Tween.get(c).wait(f).to({
                    alpha: 1
                },
                500, Ease.quartInOut)
            } else {
                c.alpha = 0;
                Tween.get(c).wait(1400).to({
                    alpha: 1
                },
                300, Ease.quartInOut)
            }
        }
        Tween.get(this.goingto).wait(100).to({
            alpha: 1,
            y: 83
        },
        500, Ease.quadInOut).wait(2500 + 1e3).to({
            y: 103,
            alpha: 0
        },
        300, Ease.quartInOut);
        Tween.get(this.moment).wait(2e3).call(this.cacheParticules, null, this).to({
            alpha: 1,
            y: 355
        },
        500, Ease.quadInOut).wait(900 + 1e3).to({
            y: 375,
            alpha: 0
        },
        300, Ease.quadInOut);
        Tween.get(this.inspiration).wait(2200).to({
            alpha: 1,
            y: 420
        },
        700, Ease.quartInOut).wait(700 + 1e3).to({
            alpha: 0,
            y: 440
        },
        200, Ease.quadInOut).call(this.onCompletedAnimation, null, this)
    };
    b.prototype.cacheParticules = function() {
        this.particuleCtn.cache(140, 135, 510, 200);
        Tween.get(this.particuleCtn).wait(1200 + 1e3).to({
            alpha: 0,
            y: 20
        },
        300, Ease.quadInOut)
    };
    b.prototype.createPixel = function(a) {
        var b = a.length;
        var c = this.RANGE_COLOR.length;
        var d = 0;
        for (d; d < b; d++) {
            if (d % 54 == 0) {
                var e = MathUtil.random(1, 5);
                var f = this.RANGE_COLOR[MathUtil.random(0, c)];
                var g = MathUtil.random(.5, 1);
                var h = new Graphics;
                h.setStrokeStyle(1);
                h.beginFill(Graphics.getRGB(f, g));
                h.drawCircle(0, 0, e);
                circle = new Shape(h);
                circle.x = a[d].x;
                circle.y = a[d].y;
                this.particuleCtn.addChild(circle)
            }
        }
    };
    b.prototype.getPixelColor = function(a, b) {
        var c = 0;
        var d = a.data.length;
        var e = new Array;
        var f = b - 1;
        var g = 0;
        var h = 0;
        for (c; c <= d; c += 4) {
            var i = a.data[c];
            var j = a.data[c + 1];
            var k = a.data[c + 2];
            var l = a.data[c + 3];
            if (h == f) {
                h = 0;
                g++
            } else {
                h++
            }
            if (this.PIXEL_COLOR_MANIPULATION.red == i && this.PIXEL_COLOR_MANIPULATION.green == j && this.PIXEL_COLOR_MANIPULATION.blue == k && this.PIXEL_COLOR_MANIPULATION.alpha == l) {
                e.push(new Point(h, g))
            }
        }
        return e
    };
    b.prototype.onCompletedAnimation = function() {
        containerFrame.removeChild(this);
        Ticker.removeListener(this);
        $("body").trigger("frameCompleted")
    };
    b.prototype.tick = function() {
        this.update()
    };
    b.prototype.update = function() {};
    a.Frame7 = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Container;
    b.prototype.Container_initialize = b.prototype.initialize;
    b.prototype.Container_tick = b.prototype.tick;
    b.prototype.PIXEL_COLOR_MANIPULATION = {
        red: 145,
        green: 32,
        blue: 97,
        alpha: 255
    };
    b.prototype.RANGE_COLOR = new Array(16720639, 10169343, 16777114, 16777215, 16725116, 12987391, 16723861, 10202879, 9961471, 10172539, 16729343, 13321600, 15159916, 12069567, 16727551, 16738274, 10179839);
    b.prototype.i;
    b.prototype.like;
    b.prototype.to;
    b.prototype.learn;
    b.prototype.new;
    b.prototype.things;
    b.prototype.and;
    b.prototype.improve;
    b.prototype.my;
    b.prototype.skills;
    b.prototype.initialize = function() {
        this.Container_initialize();
        this.initVisual()
    };
    b.prototype.initVisual = function() {
        this.i = new I_2;
        this.i.x = 100;
        this.i.y = 100;
        this.i.alpha = 0;
        this.addChild(this.i);
        this.like = new Like;
        this.like.x = 138;
        this.like.y = 100;
        this.like.alpha = 0;
        this.addChild(this.like);
        this.to = new To;
        this.to.x = 196;
        this.to.y = 170;
        this.to.alpha = 0;
        this.addChild(this.to);
        this.learn = new Learn;
        this.learn.x = 316;
        this.learn.y = 170;
        this.learn.alpha = 0;
        this.addChild(this.learn);
        this.new = new New;
        this.new.x = 296;
        this.new.y = 313;
        this.new.alpha = 0;
        this.addChild(this.new);
        this.things = new Things;
        this.things.x = 296;
        this.things.y = 408;
        this.things.alpha = 0;
        this.addChild(this.things);
        this.and = new And_2;
        this.and.x = 296;
        this.and.y = 515;
        this.and.alpha = 0;
        this.addChild(this.and);
        this.improve = new Improve;
        this.improve.x = 468;
        this.improve.y = 515;
        this.improve.alpha = 0;
        this.addChild(this.improve);
        this.my = new My;
        this.my.x = 731;
        this.my.y = 517;
        this.my.alpha = 0;
        this.addChild(this.my);
        this.skills = new Skills;
        this.skills.x = 685;
        this.skills.y = 604;
        this.skills.alpha = 0;
        this.addChild(this.skills);
        this.fitc = new Fitc_3;
        this.fitc.x = 795;
        this.fitc.y = 943;
        this.fitc.alpha = 0;
        this.addChild(this.fitc);
        this.isWord = new IsWord2;
        this.isWord.x = 1020;
        this.isWord.y = 943;
        this.isWord.alpha = 0;
        this.addChild(this.isWord);
        this.the = new The;
        this.the.x = 1090;
        this.the.y = 943;
        this.the.alpha = 0;
        this.addChild(this.the);
        this.place = new Place;
        this.place.x = 1185;
        this.place.y = 943;
        this.place.alpha = 0;
        this.addChild(this.place);
        this.to2 = new To2;
        this.to2.x = 1020;
        this.to2.y = 1010;
        this.to2.alpha = 0;
        this.addChild(this.to2);
        this.be = new Be;
        this.be.x = 1260;
        this.be.y = 1010;
        this.be.alpha = 0;
        this.addChild(this.be);
        this.ctnLastFrame = new Container;
        this.ctnLastFrame.scaleX = .9;
        this.ctnLastFrame.scaleY = .9;
        this.ctnLastFrame.x = 125;
        this.ctnLastFrame.y = 140;
        this.addChild(this.ctnLastFrame);
        this.please = new Please;
        this.please.x = 982;
        this.please.y = 1390;
        this.please.alpha = 0;
        this.ctnLastFrame.addChild(this.please);
        this.help = new HelpMe;
        this.help.x = 982;
        this.help.y = 1525;
        this.help.alpha = 0;
        this.ctnLastFrame.addChild(this.help);
        this.tofitc = new ToFitc;
        this.tofitc.x = 982;
        this.tofitc.y = 1660;
        this.tofitc.alpha = 0;
        this.ctnLastFrame.addChild(this.tofitc);
        this.runAnimation()
    };
    b.prototype.runAnimation = function() {
        var a = 300;
        this.x = 50;
        Tween.get(this).wait(a).to({
            x: 0
        },
        700, Ease.quartOut).to({
            y: -20
        },
        300, Ease.quartOut).to({
            x: -140
        },
        300, Ease.quartOut).to({
            y: -250
        },
        1e3, Ease.quartOut).to({
            x: -420
        },
        500, Ease.quartOut).to({
            y: -500
        },
        500, Ease.quartOut).wait(500).to({
            y: -830
        },
        500, Ease.quartOut).to({
            x: -650
        },
        900, Ease.quartOut).to({
            x: -745
        },
        500, Ease.quartOut).wait(100).to({
            y: -1290
        },
        800, Ease.quartInOut);
        Tween.get(this.i).wait(a).to({
            alpha: 1
        },
        300);
        Tween.get(this.like).wait(400 + a).to({
            alpha: 1
        },
        300);
        Tween.get(this.to).wait(700 + a).to({
            alpha: 1
        },
        300);
        Tween.get(this.learn).wait(1e3 + a).to({
            alpha: 1
        },
        300);
        Tween.get(this.new).wait(1300 + a).to({
            alpha: 1
        },
        300);
        Tween.get(this.things).wait(1600 + a).to({
            alpha: 1
        },
        300);
        Tween.get(this.and).wait(1900 + a).to({
            alpha: 1
        },
        300);
        Tween.get(this.improve).wait(2100 + a).to({
            alpha: 1
        },
        300);
        Tween.get(this.my).wait(2300 + a).to({
            alpha: 1
        },
        300);
        Tween.get(this.skills).wait(2750 + a).to({
            alpha: 1
        },
        300);
        Tween.get(this.fitc).wait(3900 + a).to({
            alpha: 1
        },
        300);
        Tween.get(this.isWord).wait(4100 + a).to({
            alpha: 1
        },
        300);
        Tween.get(this.the).wait(4400 + a).to({
            alpha: 1
        },
        300);
        Tween.get(this.place).wait(4700 + a).to({
            alpha: 1
        },
        300);
        Tween.get(this.to2).wait(5e3 + a).to({
            alpha: 1
        },
        300);
        Tween.get(this.be).wait(5300 + a).to({
            alpha: 1
        },
        300);
        Tween.get(this.please).wait(6500 + a).to({
            alpha: 1,
            y: 1340
        },
        500, Ease.quartInOut);
        Tween.get(this.help).wait(6800 + a).to({
            alpha: 1,
            y: 1495
        },
        500, Ease.quartInOut);
        Tween.get(this.tofitc).wait(7e3 + a).to({
            alpha: 1,
            y: 1620
        },
        500, Ease.quartInOut)
    };
    b.prototype.onCompletedAnimation = function() {
        containerFrame.removeChild(this);
        Ticker.removeListener(this);
        $("body").trigger("frameCompleted")
    };
    b.prototype.tick = function() {
        this.update()
    };
    b.prototype.update = function() {};
    a.Frame8 = b
})(window);
$(function() {
    function f() {
        var a = $(window).width();
        var d = $(window).height();
        var e = a / c < 1 ? 1 : a / c - .2;
        canvas.width = a;
        canvas.height = d;
        b.x = a / 2;
        b.y = d / 2;
        b.scaleX = e;
        b.scaleY = e
    }
    function e() {
        if ( !! !document.createElement("canvas").getContext) {
            var e = document.getElementById("canvasWrapper");
            e.innerHTML = "Your browser does not appear to support " + "the HTML5 Canvas element";
            return
        }
        var g = document.getElementById("stageCanvas");
        var h = g.getContext("2d");
        window.ctx = h;
        window.canvas = g;
        bounds = new Rectangle;
        bounds.width = g.width;
        bounds.height = g.height;
        a = new Stage(g);
        window.stage = a;
        b = new Container;
        b.regX = c / 2;
        b.regY = d / 2;
        window.containerFrame = b;
        a.addChild(b);
        f();
        var i = "Frame1";
        var j = new Frame1;
        b.addChild(j);
        $("body").bind("frameCompleted",
        function() {
            switch (i) {
            case "Frame1":
                i = "Frame2";
                var a = new Frame2;
                b.addChild(a);
                break;
            case "Frame2":
                i = "Frame3";
                var c = new Frame3;
                b.addChild(c);
                break;
            case "Frame3":
                i = "Frame4";
                var d = new Frame4;
                b.addChild(d);
                break;
            case "Frame4":
                i = "Frame5";
                var e = new Frame5;
                b.addChild(e);
                break;
            case "Frame5":
                i = "Frame6";
                var f = new Frame6;
                b.addChild(f);
                break;
            case "Frame6":
                i = "Frame7";
                var g = new Frame7;
                b.addChild(g);
                break;
            case "Frame7":
                i = "Frame8";
                var h = new Frame8;
                b.addChild(h);
                break
            }
        });
        $(window).resize(function() {
            f()
        });
        Ticker.setFPS(24);
        Ticker.addListener(window)
    }
    var a;
    var b;
    var c = 800;
    var d = 485;
    window.tick = function() {
        a.update()
    };
    e()
});
$(function() {
    function f() {
        var e = $(window).width();
        var f = $(window).height();
        c.width = e;
        c.height = f;
        b.clear();
        b.beginRadialGradientFill([Graphics.getRGB(0, 0, 0, 0), Graphics.getRGB(0, 0, 0, d)], [0, 1], e / 2, f / 2, 200, e / 2, f / 2, f).drawRect(0, 0, e, f);
        a.update()
    }
    function e() {
        if ( !! !document.createElement("canvas").getContext) {
            var d = document.getElementById("canvasWrapper");
            d.innerHTML = "Your browser does not appear to support " + "the HTML5 Canvas element";
            return
        }
        c = document.getElementById("backgroundGradient");
        c.width = $(window).width();
        c.height = $(window).height();
        a = new Stage(c);
        b = new Graphics;
        f();
        var e = new Shape(b);
        a.addChild(e);
        a.update();
        $(window).resize(function() {
            f()
        })
    }
    var a;
    var b;
    var c;
    var d = .4;
    e()
});
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Container;
    b.prototype.Container_initialize = b.prototype.initialize;
    b.prototype.Container_tick = b.prototype.tick;
    b.prototype.initialize = function() {
        this.Container_initialize();
        console.log("Template initialized")
    };
    b.prototype.tick = function() {};
    a.Template = b
})(window);
var RandomLine = {};
RandomLine.defaults = {
    minX: 30,
    minY: 0,
    maxX: 100,
    maxY: 5,
    numPoints: 10,
    splitLine: 0
};
RandomLine.createPoints = function(a) {
    var b = !a ? this.defaults: $.extend(this.defaults, a);
    var c = 1;
    var d = 0;
    var e = new Array;
    var f = new Array;
    for (var g = 0; g <= b.numPoints; g++) {
        var h = c == 1 ? b.maxY: b.maxY * -1;
        var i = MathUtil.random(b.minX, b.maxX);
        var j = MathUtil.random(b.minX, h);
        d = d + i;
        if (g != 0 && b.splitLine > 0) {
            var k = e[e.length - 1];
            var l = new Point(d, j);
            var m = this.splitLine(k, l, b.splitLine);
            var n = e.concat(m);
            e = n
        } else {
            e[g] = new Point(d, j)
        }
        c = c * -1
    }
    return e
};
RandomLine.splitLine = function(a, b, c) {
    var d = c;
    var e = (b.x - a.x) / d;
    var f = (b.y - a.y) / d;
    var g = new Point(e + a.x, f + a.y);
    var h = new Array(g);
    for (var i = 1; i < d; i++) {
        g = h[i - 1];
        h[i] = new Point(g.x + e, g.y + f)
    }
    return h
};
MathUtil = {};
MathUtil.random = function(a, b) {
    return Math.floor(Math.random() * (1 + b - a)) + a
};
StyleManager = {};
StyleManager.BLACK = {
    red: 0,
    green: 0,
    blue: 0,
    alpha: 255,
    uint: "#000000"
};
StyleManager.WHITE = {
    red: 255,
    green: 255,
    blue: 255,
    alpha: 255,
    uint: "#FFFFFF"
};
StyleManager.DARK_PINK = {
    red: 142,
    green: 32,
    blue: 100,
    alpha: 255,
    uint: "#8e2064"
};
StyleManager.PINK = {
    red: 255,
    green: 97,
    blue: 202,
    alpha: 255,
    uint: "#FF61CA"
};
StyleManager.ORANGE = {
    red: 246,
    green: 136,
    blue: 33,
    alpha: 255,
    uint: "#F68922"
};
StyleManager.LIGHT_PURPLE = {
    red: 216,
    green: 192,
    blue: 242,
    alpha: 255,
    uint: "#d8c2f2"
};
StyleManager.PURPLE = {
    red: 175,
    green: 139,
    blue: 203,
    alpha: 255,
    uint: "#AF8BCB"
};
StyleManager.DARK_PURPLE = {
    red: 57,
    green: 20,
    blue: 45,
    alpha: 255,
    uint: "#39142D"
};
StyleManager.BLUE = {
    red: 48,
    green: 193,
    blue: 214,
    alpha: 255,
    uint: "#0ac9dd"
};
StyleManager.LIGHT_AQUA = {
    red: 112,
    green: 198,
    blue: 163,
    alpha: 255,
    uint: "#70C6A3"
};
StyleManager.AQUA = {
    red: 49,
    green: 193,
    blue: 214,
    alpha: 255,
    uint: "#31C1D6"
};
StyleManager.YELLOW = {
    red: 254,
    green: 199,
    blue: 10,
    alpha: 255,
    uint: "#FEC70A"
};
StyleManager.GRAY = {
    red: 211,
    green: 219,
    blue: 221,
    alpha: 255,
    uint: "#D3DBDD"
};
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.WHITE.red;
        var b = StyleManager.WHITE.green;
        var c = StyleManager.WHITE.blue;
        var d = StyleManager.WHITE.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(39.5, .2);
        e.bezierCurveTo(39.4, .1, 39.3, 0, 39.2, 0);
        e.lineTo(38.9, 0);
        e.lineTo(38.5, 0);
        e.bezierCurveTo(38.4, 0, 38.2, .1, 37.9, .2);
        e.bezierCurveTo(37.6, .2, 37.4, .3, 37.3, .4);
        e.bezierCurveTo(37.2, .4, 37.1, .5, 36.8, .7);
        e.bezierCurveTo(36.5, .9, 36.3, 1.1, 36.2, 1.1);
        e.bezierCurveTo(35.9, 1.4, 35.4, 1.8, 34.7, 2.5);
        e.bezierCurveTo(33.9, 3.1, 33.1, 3.8, 32.3, 4.5);
        e.bezierCurveTo(31.5, 5.2, 30.7, 5.9, 30, 6.6);
        e.bezierCurveTo(29.3, 7.2, 28.8, 7.7, 28.5, 7.9);
        e.bezierCurveTo(28.4, 8, 28.1, 8.2, 27.8, 8.6);
        e.bezierCurveTo(27.4, 8.9, 27, 9.3, 26.6, 9.6);
        e.bezierCurveTo(26.2, 10, 25.8, 10.4, 25.4, 10.8);
        e.bezierCurveTo(25.1, 11.2, 24.8, 11.4, 24.7, 11.6);
        e.bezierCurveTo(24.5, 11.7, 24.2, 11.9, 23.8, 12.4);
        e.bezierCurveTo(23.4, 12.8, 23, 13.3, 22.5, 13.8);
        e.bezierCurveTo(22, 14.3, 21.5, 14.7, 21.1, 15.2);
        e.bezierCurveTo(20.7, 15.6, 20.4, 15.9, 20.3, 16);
        e.bezierCurveTo(20.3, 16, 20.3, 16.1, 20.2, 16.1);
        e.bezierCurveTo(20.2, 16.1, 20.1, 16.2, 20.1, 16.3);
        e.bezierCurveTo(20, 16.4, 20, 16.4, 20, 16.5);
        e.lineTo(19.9, 16.5);
        e.lineTo(19.7, 16.5);
        e.bezierCurveTo(19.6, 16.4, 19.4, 16.2, 19.1, 15.9);
        e.bezierCurveTo(18.8, 15.6, 18.5, 15.5, 18.4, 15.4);
        e.bezierCurveTo(18.3, 15.3, 18.1, 15.1, 17.8, 14.8);
        e.bezierCurveTo(17.5, 14.4, 17.2, 14.1, 16.9, 13.7);
        e.bezierCurveTo(16.6, 13.3, 16.2, 12.9, 15.9, 12.6);
        e.bezierCurveTo(15.6, 12.3, 15.4, 12.1, 15.4, 12);
        e.bezierCurveTo(15.3, 11.9, 15.1, 11.7, 14.9, 11.4);
        e.bezierCurveTo(14.7, 11.2, 14.4, 10.9, 14.2, 10.7);
        e.bezierCurveTo(13.9, 10.4, 13.7, 10.2, 13.5, 10);
        e.bezierCurveTo(13.3, 9.8, 13.2, 9.6, 13.1, 9.6);
        e.bezierCurveTo(13, 9.5, 12.9, 9.4, 12.6, 9.1);
        e.bezierCurveTo(12.4, 8.9, 12.2, 8.7, 11.9, 8.5);
        e.bezierCurveTo(11.6, 8.3, 11.4, 8, 11.1, 7.9);
        e.bezierCurveTo(10.9, 7.7, 10.7, 7.5, 10.7, 7.4);
        e.bezierCurveTo(10.6, 7.4, 10.3, 7.2, 9.8, 6.9);
        e.bezierCurveTo(9.4, 6.6, 9, 6.4, 8.8, 6.2);
        e.bezierCurveTo(8.7, 6.2, 8.5, 6, 8.2, 5.9);
        e.bezierCurveTo(7.9, 5.7, 7.7, 5.6, 7.7, 5.5);
        e.bezierCurveTo(7.6, 5.4, 7.5, 5.3, 7.3, 5.3);
        e.bezierCurveTo(7.1, 5.2, 6.9, 5.2, 6.8, 5.2);
        e.bezierCurveTo(6.7, 5.1, 6.6, 5.1, 6.3, 5);
        e.bezierCurveTo(6, 4.8, 5.8, 4.8, 5.8, 4.8);
        e.lineTo(5.1, 4.8);
        e.lineTo(4.6, 4.8);
        e.bezierCurveTo(4.4, 4.9, 4.1, 5, 3.7, 5.1);
        e.bezierCurveTo(3.3, 5.3, 3.1, 5.4, 3, 5.5);
        e.bezierCurveTo(2.9, 5.6, 2.7, 5.7, 2.5, 5.9);
        e.bezierCurveTo(2.3, 6, 2.1, 6.2, 1.9, 6.5);
        e.bezierCurveTo(1.6, 6.7, 1.4, 6.9, 1.2, 7.1);
        e.bezierCurveTo(1, 7.3, .8, 7.4, .7, 7.4);
        e.bezierCurveTo(.7, 7.6, .5, 7.9, .3, 8.2);
        e.bezierCurveTo(.1, 8.5, 0, 8.7, 0, 8.9);
        e.lineTo(0, 9.3);
        e.lineTo(0, 9.9);
        e.bezierCurveTo(0, 10, 0, 10.1, .1, 10.2);
        e.bezierCurveTo(.2, 10.4, .3, 10.5, .3, 10.6);
        e.bezierCurveTo(.4, 10.7, .5, 10.8, .7, 11.1);
        e.bezierCurveTo(1, 11.4, 1.1, 11.5, 1.1, 11.6);
        e.bezierCurveTo(1.2, 11.7, 1.3, 11.8, 1.5, 12);
        e.bezierCurveTo(1.7, 12.2, 1.8, 12.3, 1.9, 12.3);
        e.bezierCurveTo(2.1, 12.3, 2.2, 12.4, 2.3, 12.4);
        e.bezierCurveTo(2.5, 12.5, 2.6, 12.5, 2.6, 12.5);
        e.lineTo(2.8, 12.5);
        e.lineTo(3, 12.5);
        e.bezierCurveTo(3, 12.5, 3.3, 12.5, 3.6, 12.4);
        e.bezierCurveTo(3.8, 12.4, 4, 12.3, 4.1, 12.3);
        e.lineTo(4.5, 12.3);
        e.lineTo(4.6, 12.3);
        e.lineTo(4.6, 12.3);
        e.bezierCurveTo(5, 12.4, 6.1, 13, 6.5, 13.3);
        e.bezierCurveTo(6.9, 13.7, 8, 14.8, 8.5, 15.2);
        e.bezierCurveTo(8.9, 15.4, 9.1, 15.6, 9.3, 15.7);
        e.bezierCurveTo(9.3, 15.8, 9.5, 16, 9.8, 16.5);
        e.bezierCurveTo(10.2, 16.9, 10.5, 17.2, 10.7, 17.4);
        e.bezierCurveTo(10.9, 17.6, 11.2, 17.9, 11.5, 18.3);
        e.bezierCurveTo(11.9, 18.7, 12.3, 19.1, 12.6, 19.6);
        e.bezierCurveTo(13, 20, 13.3, 20.4, 13.6, 20.8);
        e.bezierCurveTo(13.9, 21.2, 14.1, 21.4, 14.2, 21.6);
        e.bezierCurveTo(14.2, 21.6, 14.2, 21.7, 14.4, 21.9);
        e.bezierCurveTo(14.5, 22, 14.5, 22.2, 14.5, 22.2);
        e.bezierCurveTo(14.5, 22.2, 14.6, 22.3, 14.6, 22.3);
        e.bezierCurveTo(14.7, 22.4, 14.7, 22.5, 14.7, 22.5);
        e.bezierCurveTo(14.7, 22.6, 14.7, 22.7, 14.6, 22.7);
        e.bezierCurveTo(14.6, 22.8, 14.5, 22.9, 14.5, 23);
        e.bezierCurveTo(14.4, 23, 14.3, 23.2, 14.1, 23.6);
        e.bezierCurveTo(13.9, 23.9, 13.6, 24.2, 13.4, 24.6);
        e.bezierCurveTo(13.2, 25, 12.9, 25.3, 12.7, 25.7);
        e.bezierCurveTo(12.5, 26, 12.3, 26.2, 12.3, 26.4);
        e.bezierCurveTo(12.2, 26.4, 12, 26.6, 11.9, 26.8);
        e.bezierCurveTo(11.8, 27.1, 11.6, 27.3, 11.4, 27.6);
        e.bezierCurveTo(11.3, 27.8, 11.1, 28, 11, 28.2);
        e.bezierCurveTo(10.8, 28.5, 10.7, 28.6, 10.7, 28.6);
        e.bezierCurveTo(10.6, 28.8, 10.4, 29.2, 10.1, 29.7);
        e.bezierCurveTo(9.8, 30.3, 9.7, 30.6, 9.6, 30.7);
        e.bezierCurveTo(9.6, 30.8, 9.5, 31, 9.3, 31.5);
        e.bezierCurveTo(9, 31.9, 8.9, 32.2, 8.8, 32.4);
        e.bezierCurveTo(8.8, 32.5, 8.7, 32.7, 8.6, 32.9);
        e.bezierCurveTo(8.5, 33.2, 8.4, 33.4, 8.4, 33.5);
        e.bezierCurveTo(8.4, 33.6, 8.3, 33.9, 8.2, 34.2);
        e.bezierCurveTo(8, 34.6, 8, 34.8, 8, 34.9);
        e.lineTo(8, 36.1);
        e.lineTo(8, 37.1);
        e.lineTo(9.3, 38.3);
        e.lineTo(9.6, 38.3);
        e.lineTo(9.9, 38.3);
        e.bezierCurveTo(10.1, 38.2, 10.4, 38.1, 10.8, 37.9);
        e.bezierCurveTo(11.2, 37.7, 11.4, 37.6, 11.5, 37.5);
        e.lineTo(13.5, 35.8);
        e.bezierCurveTo(13.5, 35.8, 13.6, 35.6, 13.8, 35.2);
        e.bezierCurveTo(14, 34.8, 14.1, 34.6, 14.2, 34.4);
        e.lineTo(14.2, 34.3);
        e.lineTo(14.2, 34.1);
        e.lineTo(14, 33.6);
        e.bezierCurveTo(14, 33.4, 13.9, 33.3, 13.9, 33.2);
        e.lineTo(13.9, 32.9);
        e.lineTo(13.9, 32.7);
        e.bezierCurveTo(13.9, 32.6, 13.9, 32.4, 14, 32.1);
        e.bezierCurveTo(14.1, 31.8, 14.1, 31.6, 14.2, 31.5);
        e.bezierCurveTo(14.2, 31.3, 14.2, 31.1, 14.4, 30.9);
        e.bezierCurveTo(14.5, 30.6, 14.5, 30.4, 14.5, 30.3);
        e.bezierCurveTo(14.6, 30.2, 14.7, 30, 14.9, 29.7);
        e.bezierCurveTo(15.1, 29.4, 15.3, 29, 15.5, 28.7);
        e.bezierCurveTo(15.7, 28.3, 15.8, 28, 16, 27.6);
        e.bezierCurveTo(16.2, 27.3, 16.4, 27.1, 16.5, 26.9);
        e.bezierCurveTo(16.6, 26.8, 16.7, 26.7, 17, 26.4);
        e.bezierCurveTo(17.2, 26.2, 17.3, 26, 17.3, 25.9);
        e.lineTo(17.4, 25.9);
        e.lineTo(17.7, 25.9);
        e.bezierCurveTo(17.7, 26, 17.8, 26.1, 18.1, 26.3);
        e.bezierCurveTo(18.3, 26.5, 18.4, 26.6, 18.4, 26.7);
        e.bezierCurveTo(18.4, 26.8, 18.6, 26.9, 18.8, 27.2);
        e.bezierCurveTo(19, 27.4, 19.3, 27.7, 19.6, 28);
        e.bezierCurveTo(19.9, 28.3, 20.1, 28.6, 20.3, 28.8);
        e.bezierCurveTo(20.6, 29.1, 20.7, 29.2, 20.8, 29.3);
        e.bezierCurveTo(20.9, 29.5, 21.1, 29.8, 21.4, 30.1);
        e.bezierCurveTo(21.7, 30.5, 22, 30.8, 22.4, 31.2);
        e.bezierCurveTo(22.7, 31.5, 23, 31.9, 23.3, 32.2);
        e.bezierCurveTo(23.5, 32.5, 23.7, 32.6, 23.8, 32.7);
        e.bezierCurveTo(23.9, 32.9, 24.2, 33.1, 24.6, 33.6);
        e.bezierCurveTo(25, 34, 25.5, 34.5, 26, 35);
        e.bezierCurveTo(26.5, 35.6, 27.1, 36.1, 27.6, 36.6);
        e.bezierCurveTo(28.2, 37.1, 28.6, 37.5, 28.9, 37.8);
        e.bezierCurveTo(29, 38.1, 29.1, 38.3, 29.3, 38.3);
        e.bezierCurveTo(29.4, 38.3, 29.6, 38.3, 29.9, 38.4);
        e.bezierCurveTo(30.1, 38.5, 30.3, 38.6, 30.4, 38.6);
        e.bezierCurveTo(30.4, 38.6, 31, 38.1, 31.9, 37.3);
        e.bezierCurveTo(33.1, 36.3, 34.1, 35.2, 34.3, 34.9);
        e.lineTo(34.3, 34.1);
        e.lineTo(34.3, 33.2);
        e.bezierCurveTo(34.1, 33, 33.9, 32.8, 33.5, 32.4);
        e.bezierCurveTo(33.1, 32, 32.7, 31.6, 32.3, 31.2);
        e.bezierCurveTo(32, 30.8, 31.6, 30.5, 31.2, 30.1);
        e.bezierCurveTo(30.8, 29.7, 30.6, 29.4, 30.4, 29.3);
        e.bezierCurveTo(30.3, 29.2, 30, 28.9, 29.6, 28.4);
        e.bezierCurveTo(29.1, 27.9, 28.7, 27.6, 28.5, 27.3);
        e.bezierCurveTo(28.4, 27.3, 28.3, 27.2, 28.1, 27);
        e.bezierCurveTo(28, 26.8, 27.8, 26.6, 27.6, 26.5);
        e.bezierCurveTo(27.5, 26.3, 27.3, 26.1, 27.1, 25.9);
        e.bezierCurveTo(27, 25.7, 26.9, 25.6, 26.9, 25.6);
        e.bezierCurveTo(26.8, 25.5, 26.7, 25.3, 26.5, 25.1);
        e.bezierCurveTo(26.3, 24.8, 26, 24.6, 25.8, 24.3);
        e.bezierCurveTo(25.6, 24, 25.3, 23.7, 25.1, 23.5);
        e.bezierCurveTo(24.9, 23.2, 24.7, 23, 24.7, 23);
        e.bezierCurveTo(24.5, 22.8, 24.3, 22.6, 24.2, 22.4);
        e.bezierCurveTo(24, 22.1, 23.8, 21.8, 23.5, 21.6);
        e.bezierCurveTo(23.3, 21.3, 23.2, 21.1, 23, 20.9);
        e.bezierCurveTo(22.9, 20.7, 22.8, 20.5, 22.7, 20.5);
        e.bezierCurveTo(22.6, 20.5, 22.6, 20.3, 22.5, 20.2);
        e.bezierCurveTo(22.4, 20, 22.3, 19.9, 22.2, 19.9);
        e.lineTo(22.2, 19.7);
        e.lineTo(22.2, 19.4);
        e.bezierCurveTo(22.3, 19.4, 22.5, 19.2, 22.7, 19);
        e.bezierCurveTo(22.8, 18.8, 23, 18.6, 23.1, 18.4);
        e.bezierCurveTo(23.1, 18.3, 23.4, 18.1, 23.8, 17.7);
        e.bezierCurveTo(24.2, 17.2, 24.5, 16.9, 24.7, 16.7);
        e.bezierCurveTo(24.7, 16.6, 24.9, 16.4, 25.1, 16.2);
        e.bezierCurveTo(25.3, 16, 25.5, 15.8, 25.7, 15.6);
        e.bezierCurveTo(25.9, 15.4, 26.1, 15.2, 26.3, 15);
        e.bezierCurveTo(26.4, 14.8, 26.5, 14.8, 26.6, 14.8);
        e.bezierCurveTo(26.7, 14.6, 26.9, 14.3, 27.3, 14);
        e.bezierCurveTo(27.7, 13.7, 27.9, 13.5, 28, 13.3);
        e.bezierCurveTo(28, 13.3, 30.2, 11.1, 30.8, 10.6);
        e.lineTo(38.1, 3.8);
        e.bezierCurveTo(38.1, 3.7, 38.2, 3.5, 38.4, 3.3);
        e.bezierCurveTo(38.7, 3, 38.8, 2.9, 38.9, 2.8);
        e.bezierCurveTo(39, 2.7, 39.1, 2.4, 39.3, 2);
        e.bezierCurveTo(39.5, 1.7, 39.7, 1.5, 39.8, 1.4);
        e.lineTo(39.8, .8);
        e.lineTo(39.8, .4);
        e.bezierCurveTo(39.7, .3, 39.6, .2, 39.5, .2);
        e.closePath();
        this.graphics = e
    };
    a.Featured = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.WHITE.red;
        var b = StyleManager.WHITE.green;
        var c = StyleManager.WHITE.blue;
        var d = StyleManager.WHITE.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.bezierCurveTo(29.6, 38.3, 29.4, 38.3, 29.3, 38.3);
        e.bezierCurveTo(29.1, 38.3, 29, 38.1, 28.9, 37.8);
        e.bezierCurveTo(28.6, 37.5, 28.2, 37.1, 27.6, 36.6);
        e.bezierCurveTo(27.1, 36.1, 26.5, 35.6, 26, 35);
        e.bezierCurveTo(25.5, 34.5, 25, 34, 24.6, 33.6);
        e.bezierCurveTo(24.2, 33.1, 23.9, 32.9, 23.8, 32.7);
        e.bezierCurveTo(23.7, 32.6, 23.5, 32.5, 23.3, 32.2);
        e.bezierCurveTo(23, 31.9, 22.7, 31.5, 22.4, 31.2);
        e.bezierCurveTo(22, 30.8, 21.7, 30.5, 21.4, 30.1);
        e.bezierCurveTo(21.1, 29.8, 20.9, 29.5, 20.8, 29.3);
        e.bezierCurveTo(20.7, 29.2, 20.6, 29.1, 20.3, 28.8);
        e.bezierCurveTo(20.1, 28.6, 19.9, 28.3, 19.6, 28);
        e.bezierCurveTo(19.3, 27.7, 19, 27.4, 18.8, 27.2);
        e.bezierCurveTo(18.6, 26.9, 18.4, 26.8, 18.4, 26.7);
        e.bezierCurveTo(18.4, 26.6, 18.3, 26.5, 18.1, 26.3);
        e.bezierCurveTo(17.8, 26.1, 17.7, 26, 17.7, 25.9);
        e.lineTo(17.4, 25.9);
        e.lineTo(17.3, 25.9);
        e.bezierCurveTo(17.3, 26, 17.2, 26.2, 17, 26.4);
        e.bezierCurveTo(16.7, 26.7, 16.6, 26.8, 16.5, 26.9);
        e.bezierCurveTo(16.4, 27.1, 16.2, 27.3, 16, 27.6);
        e.bezierCurveTo(15.8, 28, 15.7, 28.3, 15.5, 28.7);
        e.bezierCurveTo(15.3, 29, 15.1, 29.4, 14.9, 29.7);
        e.bezierCurveTo(14.7, 30, 14.6, 30.2, 14.5, 30.3);
        e.bezierCurveTo(14.5, 30.4, 14.5, 30.6, 14.4, 30.9);
        e.bezierCurveTo(14.2, 31.1, 14.2, 31.3, 14.2, 31.5);
        e.bezierCurveTo(14.1, 31.6, 14.1, 31.8, 14, 32.1);
        e.bezierCurveTo(13.9, 32.4, 13.9, 32.6, 13.9, 32.7);
        e.lineTo(13.9, 32.9);
        e.lineTo(13.9, 33.2);
        e.bezierCurveTo(13.9, 33.3, 14, 33.4, 14, 33.6);
        e.lineTo(14.2, 34.1);
        e.lineTo(14.2, 34.3);
        e.lineTo(14.2, 34.4);
        e.bezierCurveTo(14.1, 34.6, 14, 34.8, 13.8, 35.2);
        e.bezierCurveTo(13.6, 35.6, 13.5, 35.8, 13.5, 35.8);
        e.lineTo(11.5, 37.5);
        e.bezierCurveTo(11.4, 37.6, 11.2, 37.7, 10.8, 37.9);
        e.bezierCurveTo(10.4, 38.1, 10.1, 38.2, 9.9, 38.3);
        e.lineTo(9.6, 38.3);
        e.lineTo(9.3, 38.3);
        e.lineTo(8, 37.1);
        e.lineTo(8, 36.1);
        e.lineTo(8, 34.9);
        e.bezierCurveTo(8, 34.8, 8, 34.6, 8.2, 34.2);
        e.bezierCurveTo(8.3, 33.9, 8.4, 33.6, 8.4, 33.5);
        e.bezierCurveTo(8.4, 33.4, 8.5, 33.2, 8.6, 32.9);
        e.bezierCurveTo(8.7, 32.7, 8.8, 32.5, 8.8, 32.4);
        e.bezierCurveTo(8.9, 32.2, 9, 31.9, 9.3, 31.5);
        e.bezierCurveTo(9.5, 31, 9.6, 30.8, 9.6, 30.7);
        e.bezierCurveTo(9.7, 30.6, 9.8, 30.3, 10.1, 29.7);
        e.bezierCurveTo(10.4, 29.2, 10.6, 28.8, 10.7, 28.6);
        e.bezierCurveTo(10.7, 28.6, 10.8, 28.5, 11, 28.2);
        e.bezierCurveTo(11.1, 28, 11.3, 27.8, 11.4, 27.6);
        e.bezierCurveTo(11.6, 27.3, 11.8, 27.1, 11.9, 26.8);
        e.bezierCurveTo(12, 26.6, 12.2, 26.4, 12.3, 26.4);
        e.bezierCurveTo(12.4, 26.2, 12.5, 26, 12.7, 25.7);
        e.bezierCurveTo(12.9, 25.3, 13.2, 25, 13.4, 24.6);
        e.bezierCurveTo(13.6, 24.2, 13.9, 23.9, 14.1, 23.6);
        e.bezierCurveTo(14.3, 23.2, 14.4, 23, 14.5, 23);
        e.bezierCurveTo(14.5, 22.9, 14.6, 22.8, 14.6, 22.7);
        e.bezierCurveTo(14.7, 22.7, 14.7, 22.6, 14.7, 22.5);
        e.bezierCurveTo(14.7, 22.5, 14.7, 22.4, 14.6, 22.3);
        e.bezierCurveTo(14.6, 22.3, 14.5, 22.2, 14.5, 22.2);
        e.bezierCurveTo(14.5, 22.2, 14.5, 22, 14.4, 21.9);
        e.bezierCurveTo(14.2, 21.7, 14.2, 21.6, 14.2, 21.6);
        e.bezierCurveTo(14.1, 21.4, 13.9, 21.2, 13.6, 20.8);
        e.bezierCurveTo(13.3, 20.4, 13, 20, 12.6, 19.6);
        e.bezierCurveTo(12.3, 19.1, 11.9, 18.7, 11.5, 18.3);
        e.bezierCurveTo(11.2, 17.9, 10.9, 17.6, 10.7, 17.4);
        e.bezierCurveTo(10.5, 17.2, 10.2, 16.9, 9.8, 16.5);
        e.bezierCurveTo(9.5, 16, 9.3, 15.8, 9.3, 15.7);
        e.bezierCurveTo(9.1, 15.6, 8.9, 15.4, 8.6, 15.2);
        e.bezierCurveTo(8.2, 14.9, 8, 14.8, 7.8, 14.8);
        e.lineTo(7.8, 20.8);
        e.lineTo(7.3, 20.8);
        e.lineTo(6.5, 13.3);
        e.lineTo(6.1, 13.1);
        e.lineTo(5.4, 14.3);
        e.lineTo(4.6, 12.3);
        e.lineTo(4.5, 12.3);
        e.lineTo(4.1, 12.3);
        e.bezierCurveTo(4, 12.3, 3.8, 12.4, 3.6, 12.4);
        e.bezierCurveTo(3.3, 12.5, 3, 12.5, 3, 12.5);
        e.lineTo(2.9, 12.5);
        e.lineTo(2.6, 12.5);
        e.bezierCurveTo(2.6, 12.5, 2.5, 12.5, 2.3, 12.4);
        e.bezierCurveTo(2.2, 12.4, 2.1, 12.3, 1.9, 12.3);
        e.bezierCurveTo(1.8, 12.3, 1.7, 12.2, 1.5, 12);
        e.bezierCurveTo(1.3, 11.8, 1.2, 11.7, 1.1, 11.6);
        e.bezierCurveTo(1.1, 11.5, 1, 11.4, .7, 11.1);
        e.bezierCurveTo(.5, 10.8, .4, 10.7, .3, 10.6);
        e.bezierCurveTo(.3, 10.5, .2, 10.4, .1, 10.2);
        e.bezierCurveTo(0, 10.1, 0, 10, 0, 9.9);
        e.lineTo(0, 9.3);
        e.lineTo(0, 8.9);
        e.bezierCurveTo(0, 8.7, .1, 8.5, .3, 8.2);
        e.bezierCurveTo(.5, 7.9, .7, 7.6, .7, 7.4);
        e.bezierCurveTo(.8, 7.4, 1, 7.3, 1.2, 7.1);
        e.bezierCurveTo(1.4, 6.9, 1.6, 6.7, 1.9, 6.5);
        e.bezierCurveTo(2.1, 6.2, 2.3, 6, 2.5, 5.9);
        e.bezierCurveTo(2.7, 5.7, 2.9, 5.6, 3, 5.5);
        e.bezierCurveTo(3.1, 5.4, 3.3, 5.3, 3.7, 5.1);
        e.bezierCurveTo(4.1, 5, 4.4, 4.9, 4.6, 4.8);
        e.lineTo(5.1, 4.8);
        e.lineTo(5.8, 4.8);
        e.bezierCurveTo(5.8, 4.8, 6, 4.8, 6.3, 5);
        e.bezierCurveTo(6.6, 5.1, 6.7, 5.1, 6.8, 5.2);
        e.bezierCurveTo(6.9, 5.2, 7.1, 5.2, 7.3, 5.3);
        e.bezierCurveTo(7.5, 5.3, 7.6, 5.4, 7.7, 5.5);
        e.bezierCurveTo(7.7, 5.6, 7.9, 5.7, 8.2, 5.9);
        e.bezierCurveTo(8.5, 6, 8.7, 6.2, 8.8, 6.2);
        e.bezierCurveTo(9, 6.4, 9.4, 6.6, 9.8, 6.9);
        e.bezierCurveTo(10.3, 7.2, 10.6, 7.4, 10.7, 7.4);
        e.bezierCurveTo(10.7, 7.5, 10.9, 7.7, 11.1, 7.9);
        e.bezierCurveTo(11.4, 8, 11.6, 8.3, 11.9, 8.5);
        e.bezierCurveTo(12.2, 8.7, 12.4, 8.9, 12.6, 9.1);
        e.bezierCurveTo(12.9, 9.4, 13, 9.5, 13.1, 9.6);
        e.bezierCurveTo(13.2, 9.6, 13.3, 9.8, 13.5, 10);
        e.bezierCurveTo(13.7, 10.2, 13.9, 10.4, 14.2, 10.7);
        e.bezierCurveTo(14.4, 10.9, 14.7, 11.2, 14.9, 11.4);
        e.bezierCurveTo(15.1, 11.7, 15.3, 11.9, 15.4, 12);
        e.bezierCurveTo(15.4, 12.1, 15.6, 12.3, 15.9, 12.6);
        e.bezierCurveTo(16.2, 12.9, 16.6, 13.3, 16.9, 13.7);
        e.bezierCurveTo(17.2, 14.1, 17.5, 14.4, 17.8, 14.8);
        e.bezierCurveTo(18.1, 15.1, 18.3, 15.3, 18.4, 15.4);
        e.bezierCurveTo(18.5, 15.5, 18.8, 15.6, 19.1, 15.9);
        e.bezierCurveTo(19.4, 16.2, 19.6, 16.4, 19.7, 16.5);
        e.lineTo(19.9, 16.5);
        e.lineTo(20, 16.5);
        e.bezierCurveTo(20, 16.4, 20, 16.4, 20.1, 16.3);
        e.bezierCurveTo(20.1, 16.2, 20.2, 16.1, 20.2, 16.1);
        e.bezierCurveTo(20.3, 16.1, 20.3, 16, 20.3, 16);
        e.bezierCurveTo(20.4, 15.9, 20.7, 15.6, 21.1, 15.2);
        e.bezierCurveTo(21.5, 14.7, 22, 14.3, 22.5, 13.8);
        e.bezierCurveTo(23, 13.3, 23.4, 12.8, 23.8, 12.4);
        e.bezierCurveTo(24.2, 11.9, 24.5, 11.7, 24.7, 11.6);
        e.bezierCurveTo(24.8, 11.4, 25.1, 11.2, 25.4, 10.8);
        e.bezierCurveTo(25.8, 10.4, 26.2, 10, 26.6, 9.6);
        e.bezierCurveTo(27, 9.3, 27.4, 8.9, 27.8, 8.6);
        e.bezierCurveTo(28.1, 8.2, 28.4, 8, 28.5, 7.9);
        e.bezierCurveTo(28.8, 7.7, 29.3, 7.2, 30, 6.6);
        e.bezierCurveTo(30.7, 5.9, 31.5, 5.2, 32.3, 4.5);
        e.bezierCurveTo(33.1, 3.8, 33.9, 3.1, 34.7, 2.5);
        e.bezierCurveTo(35.4, 1.8, 35.9, 1.4, 36.2, 1.1);
        e.bezierCurveTo(36.3, 1.1, 36.5, .9, 36.8, .7);
        e.bezierCurveTo(37.1, .5, 37.2, .4, 37.3, .4);
        e.bezierCurveTo(37.4, .3, 37.6, .2, 37.9, .2);
        e.bezierCurveTo(38.2, .1, 38.4, 0, 38.5, 0);
        e.lineTo(38.9, 0);
        e.lineTo(39.2, 0);
        e.bezierCurveTo(39.3, 0, 39.4, .1, 39.5, .2);
        e.bezierCurveTo(39.6, .2, 39.7, .3, 39.8, .4);
        e.lineTo(39.8, .8);
        e.lineTo(39.8, 1.4);
        e.bezierCurveTo(39.7, 1.5, 39.5, 1.7, 39.3, 2);
        e.bezierCurveTo(39.1, 2.4, 39, 2.7, 38.9, 2.8);
        e.bezierCurveTo(38.8, 2.9, 38.7, 3, 38.4, 3.3);
        e.bezierCurveTo(38.2, 3.5, 38.1, 3.7, 38.1, 3.8);
        e.lineTo(30.8, 10.6);
        e.bezierCurveTo(30.7, 10.7, 30.6, 10.8, 30.6, 10.9);
        e.bezierCurveTo(30.5, 11.2, 30.4, 11.3, 30.4, 11.4);
        e.bezierCurveTo(30.3, 11.4, 30.2, 11.6, 30.2, 12);
        e.bezierCurveTo(30.1, 12.5, 30, 12.8, 29.9, 13.1);
        e.bezierCurveTo(29.9, 13.1, 29.9, 13.3, 29.9, 13.6);
        e.bezierCurveTo(29.8, 13.8, 29.8, 14.1, 29.7, 14.4);
        e.bezierCurveTo(29.7, 14.7, 29.7, 14.9, 29.6, 15.2);
        e.bezierCurveTo(29.6, 15.4, 29.6, 15.6, 29.6, 15.7);
        e.bezierCurveTo(29.6, 15.8, 29.5, 16.1, 29.4, 16.5);
        e.bezierCurveTo(29.3, 16.9, 29.3, 17.2, 29.3, 17.4);
        e.bezierCurveTo(29.2, 17.5, 29.1, 17.7, 29, 17.9);
        e.bezierCurveTo(29, 18.2, 28.9, 18.3, 28.9, 18.4);
        e.bezierCurveTo(28.9, 18.3, 28.8, 18.1, 28.7, 17.8);
        e.bezierCurveTo(28.6, 17.4, 28.5, 17.2, 28.5, 17.1);
        e.bezierCurveTo(28.5, 17, 28.4, 16.7, 28.4, 16.4);
        e.bezierCurveTo(28.3, 16, 28.3, 15.6, 28.3, 15.2);
        e.bezierCurveTo(28.2, 14.8, 28.2, 14.4, 28.1, 14);
        e.bezierCurveTo(28.1, 13.7, 28.1, 13.4, 28, 13.3);
        e.bezierCurveTo(27.9, 13.5, 27.7, 13.7, 27.3, 14);
        e.bezierCurveTo(26.9, 14.3, 26.7, 14.6, 26.6, 14.8);
        e.bezierCurveTo(26.5, 14.8, 26.4, 14.8, 26.3, 15);
        e.bezierCurveTo(26.1, 15.2, 25.9, 15.4, 25.7, 15.6);
        e.bezierCurveTo(25.5, 15.8, 25.3, 16, 25.1, 16.2);
        e.bezierCurveTo(24.9, 16.4, 24.7, 16.6, 24.7, 16.7);
        e.bezierCurveTo(24.5, 16.9, 24.2, 17.2, 23.8, 17.7);
        e.bezierCurveTo(23.4, 18.1, 23.1, 18.3, 23.1, 18.4);
        e.bezierCurveTo(23, 18.6, 22.8, 18.8, 22.7, 19);
        e.bezierCurveTo(22.5, 19.2, 22.3, 19.4, 22.2, 19.4);
        e.lineTo(22.2, 19.7);
        e.lineTo(22.2, 19.9);
        e.bezierCurveTo(22.3, 19.9, 22.4, 20, 22.5, 20.2);
        e.bezierCurveTo(22.6, 20.3, 22.6, 20.5, 22.7, 20.5);
        e.bezierCurveTo(22.8, 20.5, 22.9, 20.7, 23, 20.9);
        e.bezierCurveTo(23.2, 21.1, 23.3, 21.3, 23.5, 21.6);
        e.bezierCurveTo(23.8, 21.8, 24, 22.1, 24.2, 22.4);
        e.bezierCurveTo(24.3, 22.6, 24.5, 22.8, 24.7, 23);
        e.bezierCurveTo(24.7, 23, 24.9, 23.2, 25.1, 23.5);
        e.bezierCurveTo(25.3, 23.7, 25.6, 24, 25.8, 24.3);
        e.bezierCurveTo(26, 24.6, 26.3, 24.8, 26.5, 25.1);
        e.bezierCurveTo(26.7, 25.3, 26.8, 25.5, 26.9, 25.6);
        e.bezierCurveTo(26.9, 25.6, 27, 25.7, 27.1, 25.9);
        e.bezierCurveTo(27.3, 26.1, 27.5, 26.3, 27.6, 26.5);
        e.bezierCurveTo(27.8, 26.6, 28, 26.8, 28.1, 27);
        e.bezierCurveTo(28.3, 27.2, 28.4, 27.3, 28.5, 27.3);
        e.bezierCurveTo(28.7, 27.6, 29.1, 27.9, 29.6, 28.4);
        e.bezierCurveTo(30, 28.9, 30.3, 29.2, 30.4, 29.3);
        e.bezierCurveTo(30.6, 29.4, 30.8, 29.7, 31.2, 30.1);
        e.bezierCurveTo(31.6, 30.5, 32, 30.8, 32.4, 31.2);
        e.bezierCurveTo(32.7, 31.6, 33.1, 32, 33.5, 32.4);
        e.bezierCurveTo(33.9, 32.8, 34.1, 33, 34.3, 33.2);
        e.lineTo(34.3, 34.1);
        e.lineTo(34.3, 34.9);
        e.bezierCurveTo(34.3, 35, 34.1, 35.2, 33.8, 35.5);
        e.bezierCurveTo(33.6, 35.8, 33.4, 36, 33.4, 36.1);
        e.bezierCurveTo(33.4, 36.3, 33.4, 36.5, 33.4, 36.8);
        e.bezierCurveTo(33.4, 37.2, 33.3, 37.5, 33.3, 37.9);
        e.bezierCurveTo(33.2, 38.3, 33.2, 38.6, 33.2, 38.9);
        e.bezierCurveTo(33.1, 39.3, 33.1, 39.5, 33.1, 39.5);
        e.bezierCurveTo(33, 39.6, 32.9, 39.8, 32.8, 40);
        e.bezierCurveTo(32.7, 40.2, 32.6, 40.3, 32.5, 40.3);
        e.lineTo(32.5, 37.5);
        e.lineTo(32.1, 37.5);
        e.bezierCurveTo(32, 37.5, 31.9, 37.5, 31.9, 37.6);
        e.bezierCurveTo(31.8, 37.6, 31.7, 37.7, 31.6, 37.7);
        e.bezierCurveTo(31.5, 37.8, 31.5, 37.8, 31.4, 37.8);
        e.lineTo(31.4, 47.7);
        e.lineTo(30.8, 47.7);
        e.bezierCurveTo(30.7, 47.4, 30.6, 47, 30.6, 46.6);
        e.bezierCurveTo(30.5, 46.3, 30.5, 45.9, 30.5, 45.6);
        e.bezierCurveTo(30.4, 45.2, 30.4, 44.9, 30.4, 44.6);
        e.lineTo(30.4, 38.6);
        e.bezierCurveTo(30.3, 38.6, 30.1, 38.5, 29.9, 38.4);
        e.closePath();
        this.graphics = e
    };
    a.Featured2 = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.WHITE.red;
        var b = StyleManager.WHITE.green;
        var c = StyleManager.WHITE.blue;
        var d = StyleManager.WHITE.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(0, 0);
        e.moveTo(0, 0);
        e.lineTo(2.3, 8.4);
        e.lineTo(2.7, 8.4);
        e.lineTo(2.7, 2.3);
        e.bezierCurveTo(2.9, 2.4, .6, .4, 0, 0);
        e.closePath();
        this.graphics = e
    };
    a.FeaturedLine1 = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.WHITE.red;
        var b = StyleManager.WHITE.green;
        var c = StyleManager.WHITE.blue;
        var d = StyleManager.WHITE.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.bezierCurveTo(.6, 1.3, .2, 2, 0, 2.4);
        e.bezierCurveTo(0, 2.5, .1, 2.7, .1, 3);
        e.bezierCurveTo(.2, 3.4, .2, 3.8, .2, 4.2);
        e.bezierCurveTo(.3, 4.6, .3, 5, .3, 5.4);
        e.bezierCurveTo(.4, 5.7, .4, 6, .5, 6.1);
        e.bezierCurveTo(.5, 6.2, .5, 6.4, .7, 6.7);
        e.bezierCurveTo(.8, 7.1, .8, 7.3, .8, 7.4);
        e.bezierCurveTo(.9, 7.3, 1, 7.2, 1, 6.9);
        e.bezierCurveTo(1.1, 6.7, 1.2, 6.5, 1.3, 6.4);
        e.bezierCurveTo(1.3, 6.2, 1.3, 5.9, 1.4, 5.5);
        e.bezierCurveTo(1.5, 5.1, 1.6, 4.8, 1.6, 4.7);
        e.bezierCurveTo(1.6, 4.6, 1.6, 4.4, 1.6, 4.2);
        e.bezierCurveTo(1.7, 3.9, 1.7, 3.7, 1.7, 3.4);
        e.bezierCurveTo(1.8, 3.1, 1.8, 2.8, 1.8, 2.6);
        e.bezierCurveTo(1.9, 2.3, 1.9, 2.1, 1.9, 2.1);
        e.bezierCurveTo(2, 1.8, 2.1, 1.5, 2.2, 1);
        e.bezierCurveTo(2.2, .6, 2.3, .4, 2.4, .3);
        e.bezierCurveTo(2.4, .3, 2.5, .2, 2.5, 0);
        e.bezierCurveTo(2, .2, 1.5, .5, 1.2, .8);
        e.closePath();
        this.graphics = e
    };
    a.FeaturedLine2 = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.WHITE.red;
        var b = StyleManager.WHITE.green;
        var c = StyleManager.WHITE.blue;
        var d = StyleManager.WHITE.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(.5, .2);
        e.moveTo(.5, .2);
        e.bezierCurveTo(.3, .3, .2, .5, 0, .7);
        e.lineTo(0, 6.7);
        e.bezierCurveTo(0, 7, 0, 7.3, 0, 7.6);
        e.bezierCurveTo(.1, 8, .1, 8.3, .1, 8.7);
        e.bezierCurveTo(.2, 9.1, .3, 9.4, .4, 9.8);
        e.lineTo(1.6, 9.9);
        e.lineTo(1.6, 0);
        e.bezierCurveTo(1.5, 0, .7, .1, .5, .2);
        e.closePath();
        this.graphics = e
    };
    a.FeaturedLine3 = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.WHITE.red;
        var b = StyleManager.WHITE.green;
        var c = StyleManager.WHITE.blue;
        var d = StyleManager.WHITE.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(.5, .8);
        e.bezierCurveTo( - 0, 1, 0, 1.8, 0, 1.8);
        e.lineTo(0, 4.6);
        e.bezierCurveTo(.1, 4.6, .3, 4.5, .4, 4.3);
        e.bezierCurveTo(.6, 4.1, 1, 3.6, 1.1, 3.5);
        e.bezierCurveTo(1.1, 3.4, 1.2, 3.2, 1.2, 2.9);
        e.bezierCurveTo(1.2, 2.6, 1.3, 2.2, 1.3, 1.9);
        e.bezierCurveTo(1.4, 1.5, 1.5, 1.1, 1.5, .8);
        e.bezierCurveTo(1.5, .5, 1.5, .2, 1.5, .1);
        e.bezierCurveTo(1.5, .1, 1.6, 0, 1.6, 0);
        e.bezierCurveTo(1.3, .2, .7, .7, .5, .8);
        e.closePath();
        this.graphics = e
    };
    a.FeaturedLine4 = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Graphics;
    b.prototype.Graphics_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Graphics_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.WHITE.red;
        var b = StyleManager.WHITE.green;
        var c = StyleManager.WHITE.blue;
        var d = StyleManager.WHITE.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(45.9, .6);
        e.lineTo(41.2, .7);
        e.lineTo(41.2, .4);
        e.bezierCurveTo(41.1, .3, 41, .2, 40.9, .2);
        e.bezierCurveTo(40.8, .1, 40.7, 0, 40.6, 0);
        e.lineTo(40.3, 0);
        e.lineTo(39.9, 0);
        e.bezierCurveTo(39.8, 0, 39.6, .1, 39.3, .2);
        e.bezierCurveTo(39, .2, 38.8, .3, 38.7, .4);
        e.bezierCurveTo(38.6, .4, 38.5, .5, 38.2, .7);
        e.bezierCurveTo(37.9, .9, 37.7, 1.1, 37.6, 1.1);
        e.bezierCurveTo(37.3, 1.4, 36.8, 1.8, 36.1, 2.5);
        e.bezierCurveTo(35.3, 3.1, 34.6, 3.8, 33.7, 4.5);
        e.bezierCurveTo(32.9, 5.2, 32.1, 5.9, 31.4, 6.6);
        e.bezierCurveTo(30.7, 7.2, 30.2, 7.7, 29.9, 7.9);
        e.bezierCurveTo(29.8, 8, 29.5, 8.2, 29.2, 8.6);
        e.bezierCurveTo(28.8, 8.9, 28.4, 9.3, 28, 9.6);
        e.bezierCurveTo(27.6, 10, 27.2, 10.4, 26.8, 10.8);
        e.bezierCurveTo(26.5, 11.2, 26.2, 11.4, 26.1, 11.6);
        e.bezierCurveTo(25.9, 11.7, 25.6, 11.9, 25.2, 12.4);
        e.bezierCurveTo(24.8, 12.8, 24.4, 13.3, 23.9, 13.8);
        e.bezierCurveTo(23.4, 14.3, 22.9, 14.7, 22.5, 15.2);
        e.bezierCurveTo(22.1, 15.6, 21.9, 15.9, 21.7, 16);
        e.bezierCurveTo(21.7, 16, 21.7, 16.1, 21.6, 16.1);
        e.bezierCurveTo(21.6, 16.1, 21.5, 16.2, 21.5, 16.3);
        e.bezierCurveTo(21.5, 16.4, 21.4, 16.4, 21.4, 16.5);
        e.lineTo(21.3, 16.5);
        e.lineTo(21.1, 16.5);
        e.bezierCurveTo(21, 16.4, 20.8, 16.2, 20.5, 15.9);
        e.bezierCurveTo(20.2, 15.6, 19.9, 15.5, 19.8, 15.4);
        e.bezierCurveTo(19.7, 15.3, 19.5, 15.1, 19.2, 14.8);
        e.bezierCurveTo(18.9, 14.4, 18.6, 14.1, 18.3, 13.7);
        e.bezierCurveTo(18, 13.3, 17.6, 12.9, 17.3, 12.6);
        e.bezierCurveTo(17, 12.3, 16.8, 12.1, 16.8, 12);
        e.bezierCurveTo(16.7, 11.9, 16.5, 11.7, 16.3, 11.4);
        e.bezierCurveTo(16.1, 11.2, 15.8, 10.9, 15.6, 10.7);
        e.bezierCurveTo(15.3, 10.4, 15.1, 10.2, 14.9, 10);
        e.bezierCurveTo(14.7, 9.8, 14.6, 9.6, 14.5, 9.6);
        e.bezierCurveTo(14.4, 9.5, 14.3, 9.4, 14.1, 9.1);
        e.bezierCurveTo(13.8, 8.9, 13.6, 8.7, 13.3, 8.5);
        e.bezierCurveTo(13, 8.3, 12.8, 8, 12.5, 7.9);
        e.bezierCurveTo(12.3, 7.7, 12.1, 7.5, 12.1, 7.4);
        e.bezierCurveTo(12, 7.4, 11.7, 7.2, 11.2, 6.9);
        e.bezierCurveTo(10.8, 6.6, 10.4, 6.4, 10.2, 6.2);
        e.bezierCurveTo(10.1, 6.2, 9.9, 6, 9.6, 5.9);
        e.bezierCurveTo(9.3, 5.7, 9.1, 5.6, 9.1, 5.5);
        e.bezierCurveTo(9, 5.4, 8.9, 5.3, 8.7, 5.3);
        e.bezierCurveTo(8.5, 5.2, 8.3, 5.2, 8.2, 5.2);
        e.bezierCurveTo(8.2, 5.1, 8, 5.1, 7.7, 5);
        e.bezierCurveTo(7.7, 5, 7.6, 4.9, 7.6, 4.9);
        e.bezierCurveTo(7.4, 4.8, 7.2, 4.8, 7.2, 4.8);
        e.lineTo(7, 4.8);
        e.bezierCurveTo(6.8, 4.8, 6.5, 4.8, 6.2, 4.8);
        e.lineTo(6, 4.8);
        e.bezierCurveTo(5.9, 4.8, 5.9, 4.8, 5.8, 4.9);
        e.bezierCurveTo(5.6, 4.9, 5.4, 5, 5.1, 5.1);
        e.bezierCurveTo(4.7, 5.3, 4.5, 5.4, 4.4, 5.5);
        e.bezierCurveTo(4.3, 5.6, 4.1, 5.7, 3.9, 5.9);
        e.bezierCurveTo(3.7, 6, 3.5, 6.2, 3.3, 6.5);
        e.bezierCurveTo(3, 6.7, 2.8, 6.9, 2.6, 7.1);
        e.bezierCurveTo(2.4, 7.3, 2.2, 7.4, 2.1, 7.4);
        e.bezierCurveTo(2.1, 7.6, 2, 7.7, 1.9, 7.9);
        e.bezierCurveTo(.6, 9.3, -.4, 11, .2, 12.4);
        e.bezierCurveTo(1.3, 15.2, .2, 53.1, .2, 53.1);
        e.lineTo(33.8, 53.1);
        e.lineTo(46.4, 53.1);
        e.lineTo(45.9, .6);
        e.closePath()
    };
    a.FeaturedMask = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.DARK_PINK.red;
        var b = StyleManager.DARK_PINK.green;
        var c = StyleManager.DARK_PINK.blue;
        var d = StyleManager.DARK_PINK.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(43.7, 10.7);
        e.bezierCurveTo(38.9, 10.7, 37.8, 15.7, 37.8, 15.7);
        e.lineTo(36.4, 25.4);
        e.lineTo(52.3, 25.4);
        e.bezierCurveTo(55.2, 25.4, 57.5, 27.8, 57.5, 30.7);
        e.bezierCurveTo(57.5, 31.7, 52.5, 63.8, 52.5, 63.8);
        e.bezierCurveTo(52.3, 65.1, 51.2, 66.1, 49.9, 66.1);
        e.lineTo(43.2, 66.1);
        e.bezierCurveTo(41.9, 66.1, 41.1, 65.1, 41.2, 63.8);
        e.lineTo(45.5, 36);
        e.lineTo(34.8, 36);
        e.lineTo(32.4, 51.2);
        e.bezierCurveTo(29.5, 63.5, 18.8, 66.9, 14, 66.9);
        e.bezierCurveTo(4.9, 66.9, 1.6, 60.2, .5, 56.6);
        e.bezierCurveTo( - .6, 53, .5, 48.6, .5, 48.6);
        e.lineTo(.5, 48.6);
        e.bezierCurveTo(.7, 47.3, 1.9, 46.3, 3.2, 46.3);
        e.lineTo(9.1, 46.3);
        e.bezierCurveTo(10.4, 46.3, 11.4, 47.4, 11.1, 48.7);
        e.bezierCurveTo(10.2, 52.4, 10.5, 56.2, 15, 56.2);
        e.bezierCurveTo(18.1, 56.2, 20.7, 54.1, 21.2, 51.1);
        e.bezierCurveTo(21.4, 50, 23.5, 36, 23.5, 36);
        e.lineTo(14, 36);
        e.bezierCurveTo(12.7, 36, 11.8, 34.9, 12, 33.6);
        e.lineTo(12.9, 27.8);
        e.bezierCurveTo(13.2, 26.5, 14.4, 25.4, 15.7, 25.4);
        e.lineTo(25.1, 25.4);
        e.lineTo(26.4, 16.8);
        e.bezierCurveTo(27.3, 10.7, 32.6, 0, 45.6, 0);
        e.bezierCurveTo(53.6, 0, 58.3, 5.6, 59.7, 10.2);
        e.bezierCurveTo(60.5, 13.1, 59.4, 18.2, 59.4, 18.2);
        e.bezierCurveTo(59.2, 19.5, 58, 20.5, 56.6, 20.5);
        e.lineTo(49.8, 20.5);
        e.bezierCurveTo(48.4, 20.5, 47.5, 19.5, 47.7, 18.2);
        e.lineTo(48.1, 15.9);
        e.bezierCurveTo(48.1, 15.1, 48.6, 10.7, 43.7, 10.7);
        e.moveTo(101.6, 66.8);
        e.bezierCurveTo(90.2, 66.8, 82.2, 57.5, 83.7, 46.1);
        e.bezierCurveTo(84.5, 40.4, 87.5, 35.3, 91.7, 31.5);
        e.bezierCurveTo(88.9, 33.1, 87, 34.5, 87, 34.5);
        e.bezierCurveTo(85.9, 35.3, 84.3, 36, 83.5, 36);
        e.bezierCurveTo(82.7, 36, 77.4, 36, 77.4, 36);
        e.lineTo(73.2, 63.7);
        e.bezierCurveTo(73, 65, 71.7, 66.1, 70.4, 66.1);
        e.lineTo(63.9, 66.1);
        e.bezierCurveTo(62.6, 66.1, 61.7, 65, 61.9, 63.7);
        e.lineTo(66.1, 36);
        e.lineTo(61.2, 36);
        e.bezierCurveTo(59.9, 36, 59, 34.9, 59.2, 33.6);
        e.lineTo(60.1, 27.8);
        e.bezierCurveTo(60.3, 26.5, 61.6, 25.4, 62.9, 25.4);
        e.lineTo(67.7, 25.4);
        e.lineTo(69.6, 12.4);
        e.bezierCurveTo(69.8, 11.1, 71.1, 10, 72.4, 10);
        e.lineTo(78.9, 10);
        e.bezierCurveTo(80.2, 10, 81.1, 11.1, 80.9, 12.4);
        e.lineTo(78.9, 25.4);
        e.lineTo(114.9, 25.4);
        e.bezierCurveTo(116.2, 25.4, 117.1, 26.5, 116.9, 27.8);
        e.lineTo(115.9, 33.6);
        e.bezierCurveTo(115.7, 34.9, 114.5, 36, 113.1, 36);
        e.lineTo(105.4, 36);
        e.bezierCurveTo(100, 36.2, 95.1, 40.7, 94.3, 46.1);
        e.bezierCurveTo(93.6, 51.7, 97.5, 56.2, 103, 56.2);
        e.bezierCurveTo(110, 56.2, 113.2, 49.8, 113.3, 49.6);
        e.bezierCurveTo(113.3, 49.6, 113.3, 49.6, 113.3, 49.6);
        e.bezierCurveTo(113.8, 49, 114.6, 48.5, 115.5, 48.5);
        e.lineTo(121.8, 48.5);
        e.bezierCurveTo(123, 48.5, 123.9, 49.4, 123.7, 50.7);
        e.bezierCurveTo(123.3, 53.4, 116.4, 66.8, 101.6, 66.8);
        e.closePath();
        this.graphics = e
    };
    a.FitcLogo = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Container;
    b.prototype.Container_initialize = b.prototype.initialize;
    b.prototype.Container_tick = b.prototype.tick;
    b.prototype.initialize = function() {
        console.log("INIT FITC LOGO");
        this.Container_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.DARK_PINK.red;
        var b = StyleManager.DARK_PINK.green;
        var c = StyleManager.DARK_PINK.blue;
        var d = StyleManager.DARK_PINK.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(255, 255, 255, d));
        e.moveTo(43.7, 10.7);
        e.bezierCurveTo(38.9, 10.7, 37.8, 15.7, 37.8, 15.7);
        e.lineTo(36.4, 25.4);
        e.lineTo(52.3, 25.4);
        e.bezierCurveTo(55.2, 25.4, 57.5, 27.8, 57.5, 30.7);
        e.bezierCurveTo(57.5, 31.7, 52.5, 63.8, 52.5, 63.8);
        e.bezierCurveTo(52.3, 65.1, 51.2, 66.1, 49.9, 66.1);
        e.lineTo(43.2, 66.1);
        e.bezierCurveTo(41.9, 66.1, 41.1, 65.1, 41.2, 63.8);
        e.lineTo(45.5, 36);
        e.lineTo(34.8, 36);
        e.lineTo(32.4, 51.2);
        e.bezierCurveTo(29.5, 63.5, 18.8, 66.9, 14, 66.9);
        e.bezierCurveTo(4.9, 66.9, 1.6, 60.2, .5, 56.6);
        e.bezierCurveTo( - .6, 53, .5, 48.6, .5, 48.6);
        e.lineTo(.5, 48.6);
        e.bezierCurveTo(.7, 47.3, 1.9, 46.3, 3.2, 46.3);
        e.lineTo(9.1, 46.3);
        e.bezierCurveTo(10.4, 46.3, 11.4, 47.4, 11.1, 48.7);
        e.bezierCurveTo(10.2, 52.4, 10.5, 56.2, 15, 56.2);
        e.bezierCurveTo(18.1, 56.2, 20.7, 54.1, 21.2, 51.1);
        e.bezierCurveTo(21.4, 50, 23.5, 36, 23.5, 36);
        e.lineTo(14, 36);
        e.bezierCurveTo(12.7, 36, 11.8, 34.9, 12, 33.6);
        e.lineTo(12.9, 27.8);
        e.bezierCurveTo(13.2, 26.5, 14.4, 25.4, 15.7, 25.4);
        e.lineTo(25.1, 25.4);
        e.lineTo(26.4, 16.8);
        e.bezierCurveTo(27.3, 10.7, 32.6, 0, 45.6, 0);
        e.bezierCurveTo(53.6, 0, 58.3, 5.6, 59.7, 10.2);
        e.bezierCurveTo(60.5, 13.1, 59.4, 18.2, 59.4, 18.2);
        e.bezierCurveTo(59.2, 19.5, 58, 20.5, 56.6, 20.5);
        e.lineTo(49.8, 20.5);
        e.bezierCurveTo(48.4, 20.5, 47.5, 19.5, 47.7, 18.2);
        e.lineTo(48.1, 15.9);
        e.bezierCurveTo(48.1, 15.1, 48.6, 10.7, 43.7, 10.7);
        e.moveTo(101.6, 66.8);
        e.bezierCurveTo(90.2, 66.8, 82.2, 57.5, 83.7, 46.1);
        e.bezierCurveTo(84.5, 40.4, 87.5, 35.3, 91.7, 31.5);
        e.bezierCurveTo(88.9, 33.1, 87, 34.5, 87, 34.5);
        e.bezierCurveTo(85.9, 35.3, 84.3, 36, 83.5, 36);
        e.bezierCurveTo(82.7, 36, 77.4, 36, 77.4, 36);
        e.lineTo(73.2, 63.7);
        e.bezierCurveTo(73, 65, 71.7, 66.1, 70.4, 66.1);
        e.lineTo(63.9, 66.1);
        e.bezierCurveTo(62.6, 66.1, 61.7, 65, 61.9, 63.7);
        e.lineTo(66.1, 36);
        e.lineTo(61.2, 36);
        e.bezierCurveTo(59.9, 36, 59, 34.9, 59.2, 33.6);
        e.lineTo(60.1, 27.8);
        e.bezierCurveTo(60.3, 26.5, 61.6, 25.4, 62.9, 25.4);
        e.lineTo(67.7, 25.4);
        e.lineTo(69.6, 12.4);
        e.bezierCurveTo(69.8, 11.1, 71.1, 10, 72.4, 10);
        e.lineTo(78.9, 10);
        e.bezierCurveTo(80.2, 10, 81.1, 11.1, 80.9, 12.4);
        e.lineTo(78.9, 25.4);
        e.lineTo(114.9, 25.4);
        e.bezierCurveTo(116.2, 25.4, 117.1, 26.5, 116.9, 27.8);
        e.lineTo(115.9, 33.6);
        e.bezierCurveTo(115.7, 34.9, 114.5, 36, 113.1, 36);
        e.lineTo(105.4, 36);
        e.bezierCurveTo(100, 36.2, 95.1, 40.7, 94.3, 46.1);
        e.bezierCurveTo(93.6, 51.7, 97.5, 56.2, 103, 56.2);
        e.bezierCurveTo(110, 56.2, 113.2, 49.8, 113.3, 49.6);
        e.bezierCurveTo(113.3, 49.6, 113.3, 49.6, 113.3, 49.6);
        e.bezierCurveTo(113.8, 49, 114.6, 48.5, 115.5, 48.5);
        e.lineTo(121.8, 48.5);
        e.bezierCurveTo(123, 48.5, 123.9, 49.4, 123.7, 50.7);
        e.bezierCurveTo(123.3, 53.4, 116.4, 66.8, 101.6, 66.8);
        e.closePath();
        var f = new Shape(e);
        this.addChild(f);
        this.graphics = e
    };
    b.prototype.tick = function() {};
    a.FitcLogo2 = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.LIGHT_PURPLE.red;
        var b = StyleManager.LIGHT_PURPLE.green;
        var c = StyleManager.LIGHT_PURPLE.blue;
        var d = StyleManager.LIGHT_PURPLE.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(1, 44.9);
        e.lineTo(8.3, .8);
        e.lineTo(17.1, .8);
        e.lineTo(24.4, 44.9);
        e.lineTo(17.4, 44.9);
        e.lineTo(16, 35.4);
        e.lineTo(9.2, 35.4);
        e.lineTo(7.7, 44.9);
        e.lineTo(1, 44.9);
        e.closePath();
        e.moveTo(10, 29.1);
        e.lineTo(15.2, 29.1);
        e.lineTo(12.9, 10.7);
        e.lineTo(12.4, 10.7);
        e.lineTo(10, 29.1);
        e.closePath();
        this.graphics = e
    };
    a.A = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.LIGHT_AQUA.red;
        var b = StyleManager.LIGHT_AQUA.green;
        var c = StyleManager.LIGHT_AQUA.blue;
        var d = StyleManager.LIGHT_AQUA.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(0, 32);
        e.lineTo(5.5, .7);
        e.lineTo(11.9, .7);
        e.lineTo(12, 18);
        e.bezierCurveTo(12, 18.7, 12, 19.4, 11.9, 20.2);
        e.bezierCurveTo(11.9, 21, 11.7, 21.9, 11.6, 22.7);
        e.bezierCurveTo(11.7, 22, 11.9, 21.2, 12.1, 20.5);
        e.bezierCurveTo(12.3, 19.7, 12.6, 18.9, 12.9, 18.1);
        e.lineTo(18.9, .7);
        e.lineTo(25.5, .7);
        e.lineTo(19.9, 32);
        e.lineTo(15.4, 32);
        e.lineTo(18.9, 12.2);
        e.bezierCurveTo(19, 11.6, 19.2, 10.9, 19.4, 9.9);
        e.bezierCurveTo(19.6, 9, 19.9, 7.9, 20.2, 6.8);
        e.bezierCurveTo(20.1, 7.2, 19.9, 7.7, 19.6, 8.5);
        e.bezierCurveTo(19.2, 9.9, 18.8, 10.8, 18.7, 11.2);
        e.lineTo(11.1, 32);
        e.lineTo(8.7, 32);
        e.lineTo(8.6, 11.2);
        e.bezierCurveTo(8.6, 10.3, 8.6, 9.4, 8.6, 8.4);
        e.bezierCurveTo(8.6, 7.4, 8.6, 6.9, 8.6, 6.8);
        e.bezierCurveTo(8.5, 7.8, 8.4, 8.8, 8.3, 9.8);
        e.bezierCurveTo(8.2, 10.7, 8.1, 11.5, 8, 12.2);
        e.lineTo(4.5, 32);
        e.lineTo(0, 32);
        e.closePath();
        e.moveTo(26.5, .7);
        e.lineTo(31.4, .7);
        e.lineTo(32.3, 13.2);
        e.lineTo(32.6, 13.2);
        e.lineTo(37.8, .7);
        e.lineTo(42.7, .7);
        e.lineTo(33.8, 19);
        e.lineTo(31.6, 32);
        e.lineTo(26.7, 32);
        e.lineTo(28.9, 19.6);
        e.lineTo(26.5, .7);
        e.closePath();
        e.moveTo(47.2, 23.9);
        e.lineTo(50.1, 7.9);
        e.bezierCurveTo(50.5, 5.4, 51.5, 3.5, 53.1, 2.1);
        e.bezierCurveTo(54.7, .7, 56.7, 0, 59, 0);
        e.bezierCurveTo(61.3, 0, 62.9, .7, 64, 2.2);
        e.bezierCurveTo(65, 3.6, 65.3, 5.5, 64.9, 8);
        e.lineTo(64.4, 11);
        e.lineTo(59.4, 11);
        e.lineTo(60, 7.6);
        e.bezierCurveTo(60.2, 6.5, 60.1, 5.7, 59.8, 5.2);
        e.bezierCurveTo(59.5, 4.6, 58.9, 4.4, 58.1, 4.4);
        e.bezierCurveTo(57.3, 4.4, 56.6, 4.6, 56.1, 5.2);
        e.bezierCurveTo(55.6, 5.7, 55.2, 6.5, 55, 7.6);
        e.lineTo(52, 25.1);
        e.bezierCurveTo(51.8, 26.1, 51.8, 27, 52.2, 27.5);
        e.bezierCurveTo(52.5, 28.1, 53, 28.3, 53.9, 28.3);
        e.bezierCurveTo(54.7, 28.3, 55.4, 28.1, 55.9, 27.5);
        e.bezierCurveTo(56.4, 27, 56.7, 26.1, 56.9, 25.1);
        e.lineTo(57.7, 20.8);
        e.lineTo(62.6, 20.8);
        e.lineTo(62.1, 24.1);
        e.bezierCurveTo(61.6, 26.8, 60.6, 28.9, 59, 30.4);
        e.bezierCurveTo(57.5, 31.9, 55.5, 32.6, 53.1, 32.6);
        e.bezierCurveTo(50.7, 32.6, 49, 31.9, 48, 30.4);
        e.bezierCurveTo(47, 29, 46.7, 26.8, 47.2, 23.9);
        e.closePath();
        e.moveTo(61.7, 32);
        e.lineTo(72.4, .7);
        e.lineTo(78.7, .7);
        e.lineTo(78.3, 32);
        e.lineTo(73.3, 32);
        e.lineTo(73.5, 25.2);
        e.lineTo(68.7, 25.2);
        e.lineTo(66.4, 32);
        e.lineTo(61.7, 32);
        e.closePath();
        e.moveTo(70.1, 20.8);
        e.lineTo(73.7, 20.8);
        e.lineTo(74.4, 7.7);
        e.lineTo(74.1, 7.7);
        e.lineTo(70.1, 20.8);
        e.closePath();
        e.moveTo(87.3, 18.8);
        e.lineTo(84.9, 32);
        e.lineTo(80.1, 32);
        e.lineTo(85.6, .7);
        e.lineTo(92.7, .7);
        e.bezierCurveTo(95.4, .7, 97.2, 1.4, 98.1, 2.8);
        e.bezierCurveTo(99, 4.2, 99.2, 6.5, 98.6, 9.7);
        e.bezierCurveTo(98.3, 11.7, 97.8, 13.3, 97.1, 14.5);
        e.bezierCurveTo(96.4, 15.7, 95.4, 16.7, 94.2, 17.4);
        e.lineTo(95.2, 32);
        e.lineTo(90.2, 32);
        e.lineTo(89.6, 18.8);
        e.lineTo(87.3, 18.8);
        e.closePath();
        e.moveTo(89.7, 5.2);
        e.lineTo(88.1, 14.3);
        e.lineTo(90, 14.3);
        e.bezierCurveTo(91.1, 14.3, 91.9, 14, 92.5, 13.3);
        e.bezierCurveTo(93, 12.6, 93.4, 11.4, 93.8, 9.5);
        e.bezierCurveTo(94.1, 7.9, 94, 6.8, 93.7, 6.1);
        e.bezierCurveTo(93.3, 5.5, 92.6, 5.2, 91.4, 5.2);
        e.lineTo(89.7, 5.2);
        e.closePath();
        e.moveTo(97.8, 32);
        e.lineTo(103.3, .7);
        e.lineTo(115.9, .7);
        e.lineTo(115.1, 5.2);
        e.lineTo(107.3, 5.2);
        e.lineTo(105.9, 13.4);
        e.lineTo(111.5, 13.4);
        e.lineTo(110.7, 17.9);
        e.lineTo(105.1, 17.9);
        e.lineTo(103.4, 27.3);
        e.lineTo(111.2, 27.3);
        e.lineTo(110.4, 32);
        e.lineTo(97.8, 32);
        e.closePath();
        e.moveTo(113.2, 32);
        e.lineTo(118.7, .7);
        e.lineTo(131.3, .7);
        e.lineTo(130.5, 5.2);
        e.lineTo(122.7, 5.2);
        e.lineTo(121.3, 13.4);
        e.lineTo(126.9, 13.4);
        e.lineTo(126.1, 17.9);
        e.lineTo(120.5, 17.9);
        e.lineTo(118.8, 27.3);
        e.lineTo(126.6, 27.3);
        e.lineTo(125.8, 32);
        e.lineTo(113.2, 32);
        e.closePath();
        e.moveTo(135.7, 18.8);
        e.lineTo(133.4, 32);
        e.lineTo(128.6, 32);
        e.lineTo(134.1, .7);
        e.lineTo(141.2, .7);
        e.bezierCurveTo(143.8, .7, 145.6, 1.4, 146.6, 2.8);
        e.bezierCurveTo(147.5, 4.2, 147.7, 6.5, 147.1, 9.7);
        e.bezierCurveTo(146.8, 11.7, 146.2, 13.3, 145.6, 14.5);
        e.bezierCurveTo(144.9, 15.7, 143.9, 16.7, 142.7, 17.4);
        e.lineTo(143.7, 32);
        e.lineTo(138.7, 32);
        e.lineTo(138, 18.8);
        e.lineTo(135.7, 18.8);
        e.closePath();
        e.moveTo(138.1, 5.2);
        e.lineTo(136.5, 14.3);
        e.lineTo(138.4, 14.3);
        e.bezierCurveTo(139.5, 14.3, 140.4, 14, 140.9, 13.3);
        e.bezierCurveTo(141.5, 12.6, 141.9, 11.4, 142.2, 9.5);
        e.bezierCurveTo(142.5, 7.9, 142.5, 6.8, 142.1, 6.1);
        e.bezierCurveTo(141.8, 5.5, 141, 5.2, 139.9, 5.2);
        e.lineTo(138.1, 5.2);
        e.closePath();
        e.moveTo(153.6, 5.2);
        e.lineTo(154.4, .7);
        e.lineTo(169.3, .7);
        e.lineTo(168.5, 5.2);
        e.lineTo(163.5, 5.2);
        e.lineTo(158.8, 32);
        e.lineTo(153.9, 32);
        e.lineTo(158.6, 5.2);
        e.lineTo(153.6, 5.2);
        e.closePath();
        e.moveTo(168.8, 7.9);
        e.bezierCurveTo(169.2, 5.4, 170.2, 3.5, 171.8, 2.1);
        e.bezierCurveTo(173.4, .7, 175.4, 0, 177.7, 0);
        e.bezierCurveTo(180, 0, 181.6, .7, 182.7, 2.2);
        e.bezierCurveTo(183.7, 3.6, 184, 5.5, 183.6, 8);
        e.lineTo(180.8, 24.1);
        e.bezierCurveTo(180.3, 26.8, 179.3, 28.9, 177.7, 30.4);
        e.bezierCurveTo(176.2, 31.9, 174.2, 32.6, 171.8, 32.6);
        e.bezierCurveTo(169.4, 32.6, 167.7, 31.9, 166.7, 30.4);
        e.bezierCurveTo(165.7, 28.9, 165.4, 26.8, 165.9, 23.9);
        e.lineTo(168.8, 7.9);
        e.closePath();
        e.moveTo(175.6, 25.1);
        e.lineTo(178.7, 7.6);
        e.bezierCurveTo(178.9, 6.5, 178.8, 5.7, 178.5, 5.2);
        e.bezierCurveTo(178.2, 4.6, 177.6, 4.4, 176.8, 4.4);
        e.bezierCurveTo(176, 4.4, 175.3, 4.6, 174.8, 5.2);
        e.bezierCurveTo(174.3, 5.7, 173.9, 6.5, 173.7, 7.6);
        e.lineTo(170.7, 25.1);
        e.bezierCurveTo(170.5, 26.1, 170.5, 27, 170.9, 27.5);
        e.bezierCurveTo(171.2, 28.1, 171.8, 28.3, 172.6, 28.3);
        e.bezierCurveTo(173.4, 28.3, 174.1, 28.1, 174.6, 27.5);
        e.bezierCurveTo(175.1, 27, 175.5, 26.1, 175.6, 25.1);
        e.closePath();
        e.moveTo(191, 32);
        e.lineTo(196.5, .7);
        e.lineTo(203, .7);
        e.lineTo(203, 18);
        e.bezierCurveTo(203, 18.7, 203, 19.4, 202.9, 20.2);
        e.bezierCurveTo(202.9, 21, 202.7, 21.9, 202.6, 22.7);
        e.bezierCurveTo(202.7, 22, 202.9, 21.2, 203.1, 20.5);
        e.bezierCurveTo(203.3, 19.7, 203.6, 18.9, 203.9, 18.1);
        e.lineTo(209.9, .7);
        e.lineTo(216.5, .7);
        e.lineTo(210.9, 32);
        e.lineTo(206.4, 32);
        e.lineTo(209.9, 12.2);
        e.bezierCurveTo(210, 11.6, 210.2, 10.9, 210.4, 9.9);
        e.bezierCurveTo(210.6, 9, 210.9, 7.9, 211.2, 6.8);
        e.bezierCurveTo(211.1, 7.2, 210.9, 7.7, 210.6, 8.5);
        e.bezierCurveTo(210.2, 9.9, 209.9, 10.8, 209.7, 11.2);
        e.lineTo(202.1, 32);
        e.lineTo(199.7, 32);
        e.lineTo(199.6, 11.2);
        e.bezierCurveTo(199.6, 10.3, 199.6, 9.4, 199.6, 8.4);
        e.bezierCurveTo(199.6, 7.4, 199.6, 6.9, 199.6, 6.8);
        e.bezierCurveTo(199.5, 7.8, 199.4, 8.8, 199.3, 9.8);
        e.bezierCurveTo(199.2, 10.7, 199.1, 11.5, 199, 12.2);
        e.lineTo(195.5, 32);
        e.lineTo(191, 32);
        e.closePath();
        e.moveTo(215, 32);
        e.lineTo(220.5, .7);
        e.lineTo(233.1, .7);
        e.lineTo(232.3, 5.2);
        e.lineTo(224.5, 5.2);
        e.lineTo(223.1, 13.4);
        e.lineTo(228.7, 13.4);
        e.lineTo(227.9, 17.9);
        e.lineTo(222.3, 17.9);
        e.lineTo(220.6, 27.3);
        e.lineTo(228.4, 27.3);
        e.lineTo(227.6, 32);
        e.lineTo(215, 32);
        e.closePath();
        e.moveTo(230.4, 32);
        e.lineTo(235.9, .7);
        e.lineTo(248.5, .7);
        e.lineTo(247.7, 5.2);
        e.lineTo(240, 5.2);
        e.lineTo(238.5, 13.4);
        e.lineTo(244.1, 13.4);
        e.lineTo(243.3, 17.9);
        e.lineTo(237.7, 17.9);
        e.lineTo(236.1, 27.3);
        e.lineTo(243.9, 27.3);
        e.lineTo(243, 32);
        e.lineTo(230.4, 32);
        e.closePath();
        e.moveTo(247.8, 5.2);
        e.lineTo(248.6, .7);
        e.lineTo(263.5, .7);
        e.lineTo(262.7, 5.2);
        e.lineTo(257.7, 5.2);
        e.lineTo(252.9, 32);
        e.lineTo(248.1, 32);
        e.lineTo(252.8, 5.2);
        e.lineTo(247.8, 5.2);
        e.closePath();
        this.graphics = e
    };
    a.CareerMeet = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.BLUE.red;
        var b = StyleManager.BLUE.green;
        var c = StyleManager.BLUE.blue;
        var d = StyleManager.BLUE.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(21.3, 1.1);
        e.bezierCurveTo(28.1, 1.1, 31.4, 4.4, 31.4, 11.1);
        e.lineTo(31.4, 56.7);
        e.bezierCurveTo(31.4, 60.1, 30.3, 62.7, 27.9, 64.6);
        e.bezierCurveTo(25.6, 66.5, 22.4, 67.5, 18.4, 67.5);
        e.lineTo(5.8, 67.5);
        e.lineTo(5.8, 11);
        e.bezierCurveTo(5.8, 9.5, 5.5, 8.4, 5, 7.8);
        e.bezierCurveTo(4.4, 7.1, 3.4, 6.8, 2, 6.8);
        e.bezierCurveTo(1.9, 5, 2.4, 3.6, 3.4, 2.6);
        e.bezierCurveTo(4.5, 1.6, 6.1, 1.1, 8.4, 1.1);
        e.bezierCurveTo(10.7, 1.1, 12.3, 2.2, 13.1, 4.5);
        e.bezierCurveTo(15.8, 2.2, 18.5, 1.1, 21.3, 1.1);
        e.closePath();
        e.moveTo(19.4, 7.8);
        e.bezierCurveTo(17.5, 7.8, 15.7, 8.7, 13.9, 10.6);
        e.lineTo(13.9, 60.8);
        e.lineTo(18.6, 60.8);
        e.bezierCurveTo(20, 60.8, 21.1, 60.4, 22, 59.7);
        e.bezierCurveTo(22.9, 59, 23.4, 58, 23.4, 56.7);
        e.lineTo(23.4, 11.7);
        e.bezierCurveTo(23.4, 9.1, 22, 7.8, 19.4, 7.8);
        e.closePath();
        e.fillStyle = "rgb(48, 193, 214)";
        e.moveTo(49.9, 33);
        e.bezierCurveTo(52.4, 33, 54.2, 32.8, 55.4, 32.5);
        e.bezierCurveTo(56, 34.4, 56.3, 36.2, 56.3, 38.1);
        e.bezierCurveTo(56.3, 39.2, 55.8, 39.7, 54.8, 39.7);
        e.lineTo(48.8, 39.7);
        e.bezierCurveTo(47.4, 39.7, 46.2, 40.1, 45.4, 40.8);
        e.bezierCurveTo(44.5, 41.6, 44.1, 42.6, 44.1, 43.8);
        e.lineTo(44.1, 57.7);
        e.bezierCurveTo(44.1, 59, 44.5, 60, 45.4, 60.7);
        e.bezierCurveTo(46.2, 61.4, 47.4, 61.8, 48.8, 61.8);
        e.bezierCurveTo(50.2, 61.8, 51.4, 61.4, 52.3, 60.7);
        e.bezierCurveTo(53.2, 60, 53.6, 59, 53.6, 57.7);
        e.lineTo(53.6, 55.1);
        e.lineTo(53.3, 49.9);
        e.bezierCurveTo(54.3, 49.7, 55.2, 49.6, 56.2, 49.6);
        e.bezierCurveTo(57.1, 49.6, 58.1, 49.8, 59, 50);
        e.bezierCurveTo(60.8, 50.5, 61.7, 51.4, 61.7, 52.6);
        e.lineTo(61.7, 59.1);
        e.bezierCurveTo(61.7, 61.9, 60.5, 64.2, 58.2, 65.9);
        e.bezierCurveTo(55.9, 67.7, 52.8, 68.5, 48.9, 68.5);
        e.bezierCurveTo(44.9, 68.5, 41.8, 67.6, 39.5, 65.7);
        e.bezierCurveTo(37.2, 63.8, 36, 61.1, 36, 57.7);
        e.lineTo(36, 43.4);
        e.bezierCurveTo(36, 40.3, 37, 38, 39, 36.3);
        e.bezierCurveTo(37, 34.7, 36, 32.4, 36, 29.3);
        e.lineTo(36, 10.9);
        e.bezierCurveTo(36, 7.5, 37.2, 4.8, 39.5, 2.9);
        e.bezierCurveTo(41.8, 1, 44.9, .1, 48.8, .1);
        e.bezierCurveTo(52.6, .1, 55.6, .9, 57.9, 2.7);
        e.bezierCurveTo(60.1, 4.4, 61.3, 6.7, 61.3, 9.5);
        e.lineTo(61.3, 18);
        e.bezierCurveTo(61.3, 19.3, 60.4, 20.1, 58.6, 20.6);
        e.bezierCurveTo(57.7, 20.9, 56.7, 21, 55.7, 21);
        e.bezierCurveTo(54.8, 21, 53.8, 20.9, 52.9, 20.7);
        e.bezierCurveTo(53.1, 19.1, 53.2, 17.3, 53.2, 15.5);
        e.lineTo(53.2, 10.9);
        e.bezierCurveTo(53.2, 8.2, 51.7, 6.8, 48.7, 6.8);
        e.bezierCurveTo(47.3, 6.8, 46.1, 7.2, 45.3, 7.9);
        e.bezierCurveTo(44.5, 8.6, 44.1, 9.6, 44.1, 10.9);
        e.lineTo(44.1, 28.9);
        e.bezierCurveTo(44.1, 30.1, 44.5, 31.1, 45.3, 31.8);
        e.bezierCurveTo(46.1, 32.6, 47.1, 33, 48.4, 33);
        e.lineTo(49.9, 33);
        e.closePath();
        e.moveTo(82.8, 35.4);
        e.bezierCurveTo(84, 24.9, 84.6, 17.1, 84.6, 12);
        e.bezierCurveTo(84.6, 7, 84.3, 3.3, 83.8, 1.1);
        e.bezierCurveTo(86.4, .8, 88.8, .7, 91, .7);
        e.bezierCurveTo(92.3, .7, 92.9, 1.4, 92.9, 2.7);
        e.bezierCurveTo(92.9, 11.4, 92.2, 21.8, 90.8, 34);
        e.bezierCurveTo(89.4, 46.3, 87.7, 55.8, 85.8, 62.6);
        e.bezierCurveTo(84.8, 65.9, 83.4, 67.5, 81.5, 67.5);
        e.lineTo(75.5, 67.5);
        e.bezierCurveTo(73.4, 67.5, 71.9, 65.9, 71.2, 62.6);
        e.bezierCurveTo(67.5, 46.8, 65.7, 29.2, 65.7, 9.8);
        e.bezierCurveTo(65.7, 8.3, 65.4, 7.3, 64.8, 6.8);
        e.bezierCurveTo(64.2, 6.2, 63.2, 5.9, 61.8, 5.9);
        e.bezierCurveTo(61.8, 2, 64, .1, 68.5, .1);
        e.bezierCurveTo(72.1, .1, 73.9, 2.4, 73.9, 7.1);
        e.bezierCurveTo(73.9, 16.2, 74.4, 25.9, 75.2, 36.4);
        e.bezierCurveTo(76.1, 46.9, 77.2, 55.2, 78.7, 61.4);
        e.bezierCurveTo(80.2, 54.6, 81.6, 46, 82.8, 35.4);
        e.closePath();
        e.moveTo(110.4, 33);
        e.bezierCurveTo(112.9, 33, 114.7, 32.8, 115.9, 32.5);
        e.bezierCurveTo(116.5, 34.4, 116.7, 36.2, 116.7, 38.1);
        e.bezierCurveTo(116.7, 39.2, 116.3, 39.7, 115.3, 39.7);
        e.lineTo(109.3, 39.7);
        e.bezierCurveTo(107.9, 39.7, 106.7, 40.1, 105.9, 40.8);
        e.bezierCurveTo(105, 41.6, 104.6, 42.6, 104.6, 43.8);
        e.lineTo(104.6, 57.7);
        e.bezierCurveTo(104.6, 59, 105, 60, 105.9, 60.7);
        e.bezierCurveTo(106.7, 61.4, 107.9, 61.8, 109.3, 61.8);
        e.bezierCurveTo(110.7, 61.8, 111.9, 61.4, 112.8, 60.7);
        e.bezierCurveTo(113.6, 60, 114.1, 59, 114.1, 57.7);
        e.lineTo(114.1, 55.1);
        e.lineTo(113.8, 49.9);
        e.bezierCurveTo(114.7, 49.7, 115.7, 49.6, 116.6, 49.6);
        e.bezierCurveTo(117.6, 49.6, 118.5, 49.8, 119.5, 50);
        e.bezierCurveTo(121.3, 50.5, 122.2, 51.4, 122.2, 52.6);
        e.lineTo(122.2, 59.1);
        e.bezierCurveTo(122.2, 61.9, 121, 64.2, 118.7, 65.9);
        e.bezierCurveTo(116.4, 67.7, 113.3, 68.5, 109.3, 68.5);
        e.bezierCurveTo(105.4, 68.5, 102.3, 67.6, 100, 65.7);
        e.bezierCurveTo(97.7, 63.8, 96.5, 61.1, 96.5, 57.7);
        e.lineTo(96.5, 43.4);
        e.bezierCurveTo(96.5, 40.3, 97.5, 38, 99.5, 36.3);
        e.bezierCurveTo(97.5, 34.7, 96.5, 32.4, 96.5, 29.3);
        e.lineTo(96.5, 10.9);
        e.bezierCurveTo(96.5, 7.5, 97.7, 4.8, 100, 2.9);
        e.bezierCurveTo(102.3, 1, 105.4, .1, 109.2, .1);
        e.bezierCurveTo(113.1, .1, 116.1, .9, 118.4, 2.7);
        e.bezierCurveTo(120.6, 4.4, 121.8, 6.7, 121.8, 9.5);
        e.lineTo(121.8, 18);
        e.bezierCurveTo(121.8, 19.3, 120.9, 20.1, 119.1, 20.6);
        e.bezierCurveTo(118.1, 20.9, 117.2, 21, 116.2, 21);
        e.bezierCurveTo(115.3, 21, 114.3, 20.9, 113.4, 20.7);
        e.bezierCurveTo(113.6, 19.1, 113.7, 17.3, 113.7, 15.5);
        e.lineTo(113.7, 10.9);
        e.bezierCurveTo(113.7, 8.2, 112.2, 6.8, 109.2, 6.8);
        e.bezierCurveTo(107.8, 6.8, 106.6, 7.2, 105.8, 7.9);
        e.bezierCurveTo(105, 8.6, 104.6, 9.6, 104.6, 10.9);
        e.lineTo(104.6, 28.9);
        e.bezierCurveTo(104.6, 30.1, 105, 31.1, 105.8, 31.8);
        e.bezierCurveTo(106.5, 32.6, 107.6, 33, 108.9, 33);
        e.lineTo(110.4, 33);
        e.closePath();
        e.moveTo(141.5, 60.8);
        e.bezierCurveTo(143.9, 60.8, 145.8, 60.6, 147, 60.2);
        e.bezierCurveTo(147.5, 62.2, 147.8, 64, 147.8, 65.9);
        e.bezierCurveTo(147.8, 67, 147.3, 67.5, 146.4, 67.5);
        e.lineTo(126.2, 67.5);
        e.lineTo(126.2, 10.7);
        e.lineTo(125.8, 1.1);
        e.bezierCurveTo(128.2, .7, 130.4, .6, 132.7, .6);
        e.bezierCurveTo(133.8, .6, 134.3, 1.2, 134.3, 2.3);
        e.lineTo(134.3, 60.8);
        e.lineTo(141.5, 60.8);
        e.closePath();
        e.moveTo(149.5, 58.1);
        e.lineTo(149.5, 10.9);
        e.bezierCurveTo(149.5, 7.5, 150.7, 4.8, 153, 2.9);
        e.bezierCurveTo(155.3, 1, 158.5, .1, 162.5, .1);
        e.bezierCurveTo(166.5, .1, 169.7, .9, 171.9, 2.7);
        e.bezierCurveTo(174.1, 4.5, 175.2, 7.1, 175.2, 10.5);
        e.lineTo(175.2, 57.7);
        e.bezierCurveTo(175.2, 61.1, 174, 63.8, 171.7, 65.7);
        e.bezierCurveTo(169.3, 67.6, 166.1, 68.5, 162.1, 68.5);
        e.bezierCurveTo(158.1, 68.5, 155, 67.6, 152.8, 65.9);
        e.bezierCurveTo(150.6, 64.1, 149.5, 61.5, 149.5, 58.1);
        e.closePath();
        e.moveTo(157.6, 10.9);
        e.lineTo(157.6, 57.7);
        e.bezierCurveTo(157.6, 58.9, 158, 59.9, 158.9, 60.7);
        e.bezierCurveTo(159.7, 61.4, 160.9, 61.8, 162.3, 61.8);
        e.bezierCurveTo(163.7, 61.8, 164.9, 61.4, 165.8, 60.7);
        e.bezierCurveTo(166.7, 60, 167.1, 59, 167.1, 57.7);
        e.lineTo(167.1, 10.9);
        e.bezierCurveTo(167.1, 9.6, 166.7, 8.6, 165.8, 7.9);
        e.bezierCurveTo(164.9, 7.2, 163.7, 6.8, 162.3, 6.8);
        e.bezierCurveTo(160.9, 6.8, 159.7, 7.2, 158.9, 7.9);
        e.bezierCurveTo(158, 8.6, 157.6, 9.6, 157.6, 10.9);
        e.closePath();
        e.moveTo(184.9, 66.3);
        e.lineTo(184.9, 11);
        e.bezierCurveTo(184.9, 9.5, 184.6, 8.4, 184.1, 7.8);
        e.bezierCurveTo(183.5, 7.1, 182.5, 6.8, 181.1, 6.8);
        e.bezierCurveTo(181, 5, 181.5, 3.6, 182.5, 2.6);
        e.bezierCurveTo(183.6, 1.6, 185.2, 1.1, 187.4, 1.1);
        e.bezierCurveTo(189.7, 1.1, 191.3, 2.2, 192.2, 4.5);
        e.bezierCurveTo(194.9, 2.2, 197.6, 1.1, 200.4, 1.1);
        e.bezierCurveTo(207.2, 1.1, 210.5, 4.4, 210.5, 11.1);
        e.lineTo(210.5, 36.2);
        e.bezierCurveTo(210.5, 39.6, 209.4, 42.3, 207, 44.2);
        e.bezierCurveTo(204.7, 46.1, 201.5, 47.1, 197.5, 47.1);
        e.lineTo(193, 47.1);
        e.lineTo(193, 57.9);
        e.lineTo(193.4, 67.5);
        e.bezierCurveTo(191.1, 67.8, 188.8, 68, 186.5, 68);
        e.bezierCurveTo(185.4, 68, 184.9, 67.4, 184.9, 66.3);
        e.closePath();
        e.moveTo(198.5, 7.8);
        e.bezierCurveTo(196.6, 7.8, 194.8, 8.7, 193, 10.6);
        e.lineTo(193, 40.3);
        e.lineTo(197.7, 40.3);
        e.bezierCurveTo(199.1, 40.3, 200.3, 40, 201.1, 39.2);
        e.bezierCurveTo(202, 38.5, 202.5, 37.5, 202.5, 36.2);
        e.lineTo(202.5, 11.7);
        e.bezierCurveTo(202.5, 9.1, 201.1, 7.8, 198.5, 7.8);
        e.closePath();
        e.moveTo(217.4, 66.3);
        e.lineTo(217.4, 11);
        e.bezierCurveTo(217.4, 9.5, 217.1, 8.4, 216.6, 7.8);
        e.bezierCurveTo(216, 7.1, 215, 6.8, 213.6, 6.8);
        e.bezierCurveTo(213.5, 5, 214, 3.6, 215, 2.6);
        e.bezierCurveTo(216.1, 1.6, 217.7, 1.1, 219.9, 1.1);
        e.bezierCurveTo(222.2, 1.1, 223.8, 2.2, 224.7, 4.5);
        e.bezierCurveTo(227.4, 2.2, 230.1, 1.1, 232.9, 1.1);
        e.bezierCurveTo(239.7, 1.1, 243, 4.4, 243, 11.1);
        e.lineTo(243, 36.2);
        e.bezierCurveTo(243, 39.6, 241.9, 42.3, 239.5, 44.2);
        e.bezierCurveTo(237.2, 46.1, 234, 47.1, 229.9, 47.1);
        e.lineTo(225.5, 47.1);
        e.lineTo(225.5, 57.9);
        e.lineTo(225.9, 67.5);
        e.bezierCurveTo(223.5, 67.8, 221.3, 68, 219, 68);
        e.bezierCurveTo(217.9, 68, 217.4, 67.4, 217.4, 66.3);
        e.closePath();
        e.moveTo(231, 7.8);
        e.bezierCurveTo(229.1, 7.8, 227.3, 8.7, 225.5, 10.6);
        e.lineTo(225.5, 40.3);
        e.lineTo(230.2, 40.3);
        e.bezierCurveTo(231.6, 40.3, 232.7, 40, 233.6, 39.2);
        e.bezierCurveTo(234.5, 38.5, 235, 37.5, 235, 36.2);
        e.lineTo(235, 11.7);
        e.bezierCurveTo(235, 9.1, 233.6, 7.8, 231, 7.8);
        e.closePath();
        e.moveTo(260.7, 33);
        e.bezierCurveTo(263.2, 33, 265, 32.8, 266.2, 32.5);
        e.bezierCurveTo(266.8, 34.4, 267, 36.2, 267, 38.1);
        e.bezierCurveTo(267, 39.2, 266.6, 39.7, 265.6, 39.7);
        e.lineTo(259.6, 39.7);
        e.bezierCurveTo(258.1, 39.7, 257, 40.1, 256.2, 40.8);
        e.bezierCurveTo(255.3, 41.6, 254.9, 42.6, 254.9, 43.8);
        e.lineTo(254.9, 57.7);
        e.bezierCurveTo(254.9, 59, 255.3, 60, 256.2, 60.7);
        e.bezierCurveTo(257, 61.4, 258.1, 61.8, 259.6, 61.8);
        e.bezierCurveTo(261, 61.8, 262.2, 61.4, 263.1, 60.7);
        e.bezierCurveTo(263.9, 60, 264.4, 59, 264.4, 57.7);
        e.lineTo(264.4, 55.1);
        e.lineTo(264.1, 49.9);
        e.bezierCurveTo(265, 49.7, 266, 49.6, 266.9, 49.6);
        e.bezierCurveTo(267.9, 49.6, 268.8, 49.8, 269.8, 50);
        e.bezierCurveTo(271.6, 50.5, 272.5, 51.4, 272.5, 52.6);
        e.lineTo(272.5, 59.1);
        e.bezierCurveTo(272.5, 61.9, 271.3, 64.2, 269, 65.9);
        e.bezierCurveTo(266.7, 67.7, 263.5, 68.5, 259.6, 68.5);
        e.bezierCurveTo(255.7, 68.5, 252.6, 67.6, 250.3, 65.7);
        e.bezierCurveTo(248, 63.8, 246.8, 61.1, 246.8, 57.7);
        e.lineTo(246.8, 43.4);
        e.bezierCurveTo(246.8, 40.3, 247.8, 38, 249.8, 36.3);
        e.bezierCurveTo(247.8, 34.7, 246.8, 32.4, 246.8, 29.3);
        e.lineTo(246.8, 10.9);
        e.bezierCurveTo(246.8, 7.5, 248, 4.8, 250.3, 2.9);
        e.bezierCurveTo(252.6, 1, 255.7, .1, 259.5, .1);
        e.bezierCurveTo(263.4, .1, 266.4, .9, 268.7, 2.7);
        e.bezierCurveTo(270.9, 4.4, 272, 6.7, 272, 9.5);
        e.lineTo(272, 18);
        e.bezierCurveTo(272, 19.3, 271.2, 20.1, 269.4, 20.6);
        e.bezierCurveTo(268.4, 20.9, 267.5, 21, 266.5, 21);
        e.bezierCurveTo(265.6, 21, 264.6, 20.9, 263.7, 20.7);
        e.bezierCurveTo(263.9, 19.1, 264, 17.3, 264, 15.5);
        e.lineTo(264, 10.9);
        e.bezierCurveTo(264, 8.2, 262.5, 6.8, 259.5, 6.8);
        e.bezierCurveTo(258, 6.8, 256.9, 7.2, 256.1, 7.9);
        e.bezierCurveTo(255.3, 8.6, 254.9, 9.6, 254.9, 10.9);
        e.lineTo(254.9, 28.9);
        e.bezierCurveTo(254.9, 30.1, 255.3, 31.1, 256.1, 31.8);
        e.bezierCurveTo(256.8, 32.6, 257.9, 33, 259.2, 33);
        e.lineTo(260.7, 33);
        e.closePath();
        e.moveTo(277.1, 66.3);
        e.lineTo(277.1, 11);
        e.bezierCurveTo(277.1, 9.5, 276.8, 8.4, 276.2, 7.8);
        e.bezierCurveTo(275.7, 7.1, 274.7, 6.8, 273.3, 6.8);
        e.bezierCurveTo(273.2, 5, 273.7, 3.6, 274.7, 2.6);
        e.bezierCurveTo(275.7, 1.6, 277.4, 1.1, 279.6, 1.1);
        e.bezierCurveTo(281.9, 1.1, 283.5, 2.2, 284.4, 4.5);
        e.bezierCurveTo(287.1, 2.2, 289.8, 1.1, 292.6, 1.1);
        e.bezierCurveTo(299.3, 1.1, 302.7, 4.4, 302.7, 11.1);
        e.lineTo(302.7, 34.8);
        e.bezierCurveTo(302.7, 39.1, 300.9, 42.2, 297.3, 44);
        e.lineTo(299.4, 57.7);
        e.bezierCurveTo(299.8, 59.9, 300.8, 61, 302.6, 61);
        e.bezierCurveTo(303.1, 61, 303.8, 60.8, 304.5, 60.5);
        e.bezierCurveTo(304.8, 61.4, 304.9, 62.3, 304.9, 63.5);
        e.bezierCurveTo(304.9, 64.6, 304.4, 65.7, 303.3, 66.8);
        e.bezierCurveTo(302.1, 68, 300.7, 68.5, 298.9, 68.5);
        e.bezierCurveTo(294.9, 68.5, 292.6, 66.8, 292.1, 63.3);
        e.lineTo(289.1, 45.6);
        e.lineTo(285.1, 45.6);
        e.lineTo(285.1, 57.9);
        e.lineTo(285.5, 67.5);
        e.bezierCurveTo(283.2, 67.8, 280.9, 68, 278.7, 68);
        e.bezierCurveTo(277.6, 68, 277.1, 67.4, 277.1, 66.3);
        e.closePath();
        e.moveTo(290.6, 7.8);
        e.bezierCurveTo(288.8, 7.8, 287, 8.7, 285.1, 10.6);
        e.lineTo(285.1, 38.9);
        e.lineTo(289.8, 38.9);
        e.bezierCurveTo(291.3, 38.9, 292.4, 38.5, 293.3, 37.8);
        e.bezierCurveTo(294.2, 37.1, 294.6, 36.1, 294.6, 34.8);
        e.lineTo(294.6, 11.7);
        e.bezierCurveTo(294.6, 9.1, 293.3, 7.8, 290.6, 7.8);
        e.closePath();
        this.graphics = e
    };
    a.Developer = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.BLUE.red;
        var b = StyleManager.BLUE.green;
        var c = StyleManager.BLUE.blue;
        var d = StyleManager.BLUE.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(18, 31.9);
        e.bezierCurveTo(20.4, 31.9, 22.3, 31.8, 23.5, 31.4);
        e.bezierCurveTo(24, 33.3, 24.3, 35.2, 24.3, 37.1);
        e.bezierCurveTo(24.3, 38.1, 23.8, 38.7, 22.9, 38.7);
        e.lineTo(12.9, 38.7);
        e.lineTo(12.9, 58.8);
        e.bezierCurveTo(12.9, 60.2, 13.1, 61.2, 13.7, 61.8);
        e.bezierCurveTo(14.3, 62.4, 15.3, 62.7, 16.7, 62.7);
        e.bezierCurveTo(16.7, 66.6, 14.6, 68.5, 10.2, 68.5);
        e.bezierCurveTo(6.6, 68.5, 4.8, 66.2, 4.8, 61.5);
        e.lineTo(4.8, 11);
        e.bezierCurveTo(4.8, 9.5, 4.5, 8.4, 4, 7.8);
        e.bezierCurveTo(3.4, 7.1, 2.4, 6.8, 1, 6.8);
        e.bezierCurveTo(.9, 5, 1.4, 3.6, 2.4, 2.6);
        e.bezierCurveTo(3.5, 1.6, 4.9, 1.1, 6.8, 1.1);
        e.lineTo(19.8, 1.1);
        e.lineTo(24.9, .6);
        e.bezierCurveTo(25.5, 2.5, 25.7, 4.4, 25.7, 6.2);
        e.bezierCurveTo(25.7, 7.3, 25.3, 7.8, 24.3, 7.8);
        e.lineTo(12.9, 7.8);
        e.lineTo(12.9, 31.9);
        e.lineTo(18, 31.9);
        e.closePath();
        e.moveTo(48.1, 60.8);
        e.bezierCurveTo(50.6, 60.8, 52.4, 60.6, 53.6, 60.2);
        e.bezierCurveTo(54.2, 62.2, 54.4, 64, 54.4, 65.9);
        e.bezierCurveTo(54.4, 67, 54, 67.5, 53, 67.5);
        e.lineTo(32.9, 67.5);
        e.lineTo(32.9, 10.7);
        e.lineTo(32.5, 1.1);
        e.bezierCurveTo(34.8, .7, 37.1, .6, 39.3, .6);
        e.bezierCurveTo(40.4, .6, 41, 1.2, 41, 2.3);
        e.lineTo(41, 60.8);
        e.lineTo(48.1, 60.8);
        e.closePath();
        e.moveTo(58.5, 66.3);
        e.lineTo(58.5, 10.9);
        e.bezierCurveTo(58.5, 7.5, 59.7, 4.8, 62, 2.9);
        e.bezierCurveTo(64.3, 1, 67.5, .1, 71.5, .1);
        e.bezierCurveTo(75.5, .1, 78.6, .9, 80.9, 2.7);
        e.bezierCurveTo(83.1, 4.5, 84.2, 7.1, 84.2, 10.5);
        e.lineTo(84.2, 58.8);
        e.bezierCurveTo(84.2, 60.2, 84.5, 61.2, 85, 61.8);
        e.bezierCurveTo(85.6, 62.4, 86.6, 62.7, 88.1, 62.7);
        e.bezierCurveTo(88.1, 66.6, 85.9, 68.5, 81.5, 68.5);
        e.bezierCurveTo(77.9, 68.5, 76.1, 66.2, 76.1, 61.5);
        e.lineTo(76.1, 42);
        e.lineTo(66.6, 42);
        e.lineTo(66.6, 57.9);
        e.lineTo(67, 67.5);
        e.bezierCurveTo(64.7, 67.8, 62.4, 68, 60.2, 68);
        e.bezierCurveTo(59.1, 68, 58.5, 67.4, 58.5, 66.3);
        e.closePath();
        e.moveTo(66.6, 10.9);
        e.lineTo(66.6, 35.2);
        e.lineTo(76.1, 35.2);
        e.lineTo(76.1, 10.9);
        e.bezierCurveTo(76.1, 9.6, 75.7, 8.6, 74.8, 7.9);
        e.bezierCurveTo(73.9, 7.2, 72.7, 6.8, 71.3, 6.8);
        e.bezierCurveTo(69.9, 6.8, 68.7, 7.2, 67.9, 7.9);
        e.bezierCurveTo(67, 8.6, 66.6, 9.6, 66.6, 10.9);
        e.closePath();
        e.moveTo(91.4, 24.7);
        e.lineTo(91.4, 10.9);
        e.bezierCurveTo(91.4, 7.5, 92.6, 4.8, 94.9, 2.9);
        e.bezierCurveTo(97.2, 1, 100.3, .1, 104.3, .1);
        e.bezierCurveTo(108.2, .1, 111.3, .9, 113.6, 2.7);
        e.bezierCurveTo(115.9, 4.4, 117.1, 6.7, 117.1, 9.5);
        e.lineTo(117.1, 22.1);
        e.bezierCurveTo(117.1, 23.4, 116.2, 24.2, 114.4, 24.7);
        e.bezierCurveTo(113.5, 25, 112.5, 25.1, 111.6, 25.1);
        e.bezierCurveTo(110.6, 25.1, 109.6, 25, 108.7, 24.8);
        e.bezierCurveTo(108.9, 23.2, 109, 21.4, 109, 19.6);
        e.lineTo(109, 10.9);
        e.bezierCurveTo(109, 9.6, 108.6, 8.6, 107.7, 7.9);
        e.bezierCurveTo(106.8, 7.2, 105.6, 6.8, 104.2, 6.8);
        e.bezierCurveTo(102.8, 6.8, 101.6, 7.2, 100.8, 7.9);
        e.bezierCurveTo(99.9, 8.6, 99.5, 9.6, 99.5, 10.9);
        e.lineTo(99.5, 22.8);
        e.bezierCurveTo(99.5, 25.2, 100.3, 26.9, 101.9, 27.9);
        e.lineTo(112.7, 34.8);
        e.bezierCurveTo(115.7, 36.7, 117.3, 39.6, 117.3, 43.6);
        e.lineTo(117.3, 57.7);
        e.bezierCurveTo(117.3, 61.1, 116.1, 63.8, 113.7, 65.7);
        e.bezierCurveTo(111.3, 67.6, 108.2, 68.5, 104.3, 68.5);
        e.bezierCurveTo(100.3, 68.5, 97.2, 67.7, 94.8, 65.9);
        e.bezierCurveTo(92.4, 64.2, 91.2, 61.9, 91.2, 59.1);
        e.lineTo(91.2, 46.4);
        e.bezierCurveTo(91.2, 45.2, 92.1, 44.4, 93.9, 43.9);
        e.bezierCurveTo(94.8, 43.6, 95.8, 43.5, 96.7, 43.5);
        e.bezierCurveTo(97.7, 43.5, 98.6, 43.6, 99.6, 43.8);
        e.bezierCurveTo(99.4, 45.4, 99.3, 47.2, 99.3, 49);
        e.lineTo(99.3, 57.7);
        e.bezierCurveTo(99.3, 58.9, 99.8, 59.9, 100.7, 60.7);
        e.bezierCurveTo(101.7, 61.4, 102.9, 61.8, 104.3, 61.8);
        e.bezierCurveTo(105.7, 61.8, 106.9, 61.4, 107.8, 60.7);
        e.bezierCurveTo(108.7, 59.9, 109.2, 58.9, 109.2, 57.7);
        e.lineTo(109.2, 46.1);
        e.bezierCurveTo(109.2, 43.5, 108.3, 41.6, 106.4, 40.4);
        e.lineTo(95.6, 33.4);
        e.bezierCurveTo(92.8, 31.6, 91.4, 28.7, 91.4, 24.7);
        e.closePath();
        e.moveTo(122.7, 66.3);
        e.lineTo(122.7, 9.9);
        e.bezierCurveTo(122.7, 8.4, 122.4, 7.4, 121.8, 6.9);
        e.bezierCurveTo(121.2, 6.3, 120.2, 6, 118.8, 6);
        e.bezierCurveTo(118.8, 2.1, 121, .2, 125.4, .2);
        e.bezierCurveTo(129, .2, 130.8, 2.5, 130.8, 7.2);
        e.lineTo(130.8, 33.9);
        e.lineTo(140.3, 33.9);
        e.lineTo(140.3, 10.7);
        e.lineTo(139.9, 1.1);
        e.bezierCurveTo(142.2, .7, 144.5, .6, 146.7, .6);
        e.bezierCurveTo(147.8, .6, 148.3, 1.2, 148.3, 2.3);
        e.lineTo(148.3, 58.8);
        e.bezierCurveTo(148.3, 60.2, 148.6, 61.2, 149.2, 61.8);
        e.bezierCurveTo(149.8, 62.4, 150.8, 62.7, 152.2, 62.7);
        e.bezierCurveTo(152.2, 66.6, 150, 68.5, 145.7, 68.5);
        e.bezierCurveTo(142.1, 68.5, 140.3, 66.2, 140.3, 61.5);
        e.lineTo(140.3, 40.6);
        e.lineTo(130.8, 40.6);
        e.lineTo(130.8, 57.9);
        e.lineTo(131.2, 67.5);
        e.bezierCurveTo(128.9, 67.8, 126.6, 68, 124.3, 68);
        e.bezierCurveTo(123.2, 68, 122.7, 67.4, 122.7, 66.3);
        e.closePath();
        this.graphics = e
    };
    a.Flash = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.BLUE.red;
        var b = StyleManager.BLUE.green;
        var c = StyleManager.BLUE.blue;
        var d = StyleManager.BLUE.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(16.4, 30.7);
        e.bezierCurveTo(18.7, 30.7, 20.5, 30.6, 21.7, 30.2);
        e.bezierCurveTo(22.2, 32.1, 22.5, 33.9, 22.5, 35.7);
        e.bezierCurveTo(22.5, 36.7, 22, 37.2, 21.1, 37.2);
        e.lineTo(11.4, 37.2);
        e.lineTo(11.4, 56.6);
        e.bezierCurveTo(11.4, 58, 11.7, 59, 12.3, 59.5);
        e.bezierCurveTo(12.8, 60.1, 13.8, 60.4, 15.2, 60.4);
        e.bezierCurveTo(15.2, 64.1, 13.1, 66, 8.9, 66);
        e.bezierCurveTo(5.4, 66, 3.7, 63.7, 3.7, 59.2);
        e.lineTo(3.7, 10.5);
        e.bezierCurveTo(3.7, 9.1, 3.4, 8.1, 2.9, 7.4);
        e.bezierCurveTo(2.3, 6.8, 1.4, 6.5, 0, 6.5);
        e.bezierCurveTo( - .1, 4.8, .4, 3.4, 1.4, 2.5);
        e.bezierCurveTo(2.4, 1.5, 3.8, 1, 5.6, 1);
        e.lineTo(18.1, 1);
        e.lineTo(23.1, .5);
        e.bezierCurveTo(23.6, 2.3, 23.8, 4.1, 23.8, 5.9);
        e.bezierCurveTo(23.8, 7, 23.4, 7.5, 22.5, 7.5);
        e.lineTo(11.4, 7.5);
        e.lineTo(11.4, 30.7);
        e.lineTo(16.4, 30.7);
        e.closePath();
        e.moveTo(31.2, 63.8);
        e.lineTo(31.2, 10.5);
        e.bezierCurveTo(31.2, 9.1, 31, 8.1, 30.4, 7.4);
        e.bezierCurveTo(29.9, 6.8, 29, 6.5, 27.6, 6.5);
        e.bezierCurveTo(27.5, 4.8, 28, 3.4, 29, 2.5);
        e.bezierCurveTo(30, 1.5, 31.5, 1, 33.7, 1);
        e.bezierCurveTo(35.9, 1, 37.4, 2.1, 38.3, 4.2);
        e.bezierCurveTo(40.9, 2.1, 43.5, 1, 46.2, 1);
        e.bezierCurveTo(52.7, 1, 56, 4.2, 56, 10.6);
        e.lineTo(56, 33.5);
        e.bezierCurveTo(56, 37.6, 54.2, 40.6, 50.7, 42.4);
        e.lineTo(52.8, 55.6);
        e.bezierCurveTo(53.1, 57.7, 54.2, 58.7, 55.9, 58.7);
        e.bezierCurveTo(56.4, 58.7, 57, 58.6, 57.7, 58.3);
        e.bezierCurveTo(58, 59.1, 58.1, 60, 58.1, 61.1);
        e.bezierCurveTo(58.1, 62.2, 57.6, 63.3, 56.5, 64.4);
        e.bezierCurveTo(55.4, 65.5, 54, 66, 52.3, 66);
        e.bezierCurveTo(48.4, 66, 46.2, 64.3, 45.7, 61);
        e.lineTo(42.9, 43.9);
        e.lineTo(39, 43.9);
        e.lineTo(39, 55.8);
        e.lineTo(39.4, 65);
        e.bezierCurveTo(37.2, 65.3, 35, 65.5, 32.8, 65.5);
        e.bezierCurveTo(31.8, 65.5, 31.2, 65, 31.2, 63.8);
        e.closePath();
        e.moveTo(44.3, 7.5);
        e.bezierCurveTo(42.6, 7.5, 40.8, 8.4, 39, 10.1);
        e.lineTo(39, 37.4);
        e.lineTo(43.5, 37.4);
        e.bezierCurveTo(44.9, 37.4, 46, 37.1, 46.9, 36.4);
        e.bezierCurveTo(47.7, 35.7, 48.2, 34.7, 48.2, 33.5);
        e.lineTo(48.2, 11.2);
        e.bezierCurveTo(48.2, 8.7, 46.9, 7.5, 44.3, 7.5);
        e.closePath();
        e.moveTo(61, 56);
        e.lineTo(61, 10.4);
        e.bezierCurveTo(61, 7.2, 62.1, 4.6, 64.3, 2.8);
        e.bezierCurveTo(66.6, .9, 69.6, 0, 73.5, 0);
        e.bezierCurveTo(77.4, 0, 80.4, .9, 82.5, 2.6);
        e.bezierCurveTo(84.6, 4.3, 85.7, 6.8, 85.7, 10);
        e.lineTo(85.7, 55.6);
        e.bezierCurveTo(85.7, 58.8, 84.6, 61.4, 82.3, 63.2);
        e.bezierCurveTo(80, 65.1, 77, 66, 73.1, 66);
        e.bezierCurveTo(69.2, 66, 66.2, 65.1, 64.1, 63.4);
        e.bezierCurveTo(62, 61.7, 61, 59.2, 61, 56);
        e.closePath();
        e.moveTo(68.8, 10.4);
        e.lineTo(68.8, 55.6);
        e.bezierCurveTo(68.8, 56.7, 69.2, 57.7, 70, 58.4);
        e.bezierCurveTo(70.8, 59.1, 71.9, 59.5, 73.3, 59.5);
        e.bezierCurveTo(74.7, 59.5, 75.8, 59.2, 76.6, 58.5);
        e.bezierCurveTo(77.5, 57.8, 77.9, 56.8, 77.9, 55.6);
        e.lineTo(77.9, 10.4);
        e.bezierCurveTo(77.9, 9.2, 77.5, 8.2, 76.6, 7.5);
        e.bezierCurveTo(75.8, 6.8, 74.7, 6.5, 73.3, 6.5);
        e.bezierCurveTo(71.9, 6.5, 70.8, 6.8, 70, 7.5);
        e.bezierCurveTo(69.2, 8.2, 68.8, 9.2, 68.8, 10.4);
        e.closePath();
        e.moveTo(104.2, 7.5);
        e.bezierCurveTo(102.5, 7.5, 100.7, 8.4, 98.9, 10.1);
        e.lineTo(98.9, 55.8);
        e.lineTo(99.3, 65);
        e.bezierCurveTo(97.1, 65.3, 94.9, 65.5, 92.7, 65.5);
        e.bezierCurveTo(91.6, 65.5, 91.1, 65, 91.1, 63.8);
        e.lineTo(91.1, 10.5);
        e.bezierCurveTo(91.1, 9.1, 90.9, 8.1, 90.3, 7.4);
        e.bezierCurveTo(89.8, 6.8, 88.9, 6.5, 87.5, 6.5);
        e.bezierCurveTo(87.4, 4.8, 87.9, 3.4, 88.9, 2.5);
        e.bezierCurveTo(89.8, 1.5, 91.4, 1, 93.6, 1);
        e.bezierCurveTo(95.8, 1, 97.3, 2.1, 98.2, 4.2);
        e.bezierCurveTo(100.8, 2.1, 103.4, 1, 106.1, 1);
        e.bezierCurveTo(112.6, 1, 115.8, 4.2, 115.8, 10.6);
        e.lineTo(115.8, 56.6);
        e.bezierCurveTo(115.8, 58, 116.1, 59, 116.7, 59.5);
        e.bezierCurveTo(117.2, 60.1, 118.2, 60.4, 119.6, 60.4);
        e.bezierCurveTo(119.6, 64.1, 117.5, 66, 113.3, 66);
        e.bezierCurveTo(109.8, 66, 108.1, 63.7, 108.1, 59.2);
        e.lineTo(108.1, 11.2);
        e.bezierCurveTo(108.1, 8.7, 106.8, 7.5, 104.2, 7.5);
        e.closePath();
        e.moveTo(137.9, 1);
        e.bezierCurveTo(140.3, 1, 142.1, .8, 143.2, .5);
        e.bezierCurveTo(143.8, 2.3, 144, 4.1, 144, 5.9);
        e.bezierCurveTo(144, 7, 143.6, 7.5, 142.6, 7.5);
        e.lineTo(135, 7.5);
        e.lineTo(135, 55.8);
        e.lineTo(135.4, 65);
        e.bezierCurveTo(133.1, 65.3, 130.9, 65.5, 128.8, 65.5);
        e.bezierCurveTo(127.7, 65.5, 127.2, 65, 127.2, 63.8);
        e.lineTo(127.2, 7.5);
        e.lineTo(124.2, 7.5);
        e.bezierCurveTo(121.9, 7.5, 120.1, 7.7, 118.9, 8);
        e.bezierCurveTo(118.4, 6.1, 118.1, 4.3, 118.1, 2.6);
        e.bezierCurveTo(118.1, 1.5, 118.6, 1, 119.5, 1);
        e.lineTo(137.9, 1);
        e.closePath();
        e.moveTo(148.7, 38);
        e.bezierCurveTo(146.6, 38, 144.9, 38.2, 143.8, 38.5);
        e.bezierCurveTo(143.4, 36.8, 143.1, 35.3, 143.1, 34);
        e.bezierCurveTo(143.1, 32.8, 143.6, 32.1, 144.4, 32.1);
        e.lineTo(158, 32.1);
        e.lineTo(163.1, 31.6);
        e.bezierCurveTo(163.5, 33.3, 163.6, 34.8, 163.6, 36.1);
        e.bezierCurveTo(163.6, 37.4, 163.2, 38, 162.3, 38);
        e.lineTo(148.7, 38);
        e.closePath();
        e.moveTo(180.6, 31.7);
        e.bezierCurveTo(182.9, 31.7, 184.7, 31.6, 185.9, 31.2);
        e.bezierCurveTo(186.4, 33.1, 186.7, 34.9, 186.7, 36.6);
        e.bezierCurveTo(186.7, 37.7, 186.2, 38.2, 185.3, 38.2);
        e.lineTo(179.5, 38.2);
        e.bezierCurveTo(178.1, 38.2, 177, 38.6, 176.2, 39.3);
        e.bezierCurveTo(175.4, 40, 175, 41, 175, 42.2);
        e.lineTo(175, 55.6);
        e.bezierCurveTo(175, 56.8, 175.4, 57.8, 176.2, 58.5);
        e.bezierCurveTo(177, 59.2, 178.1, 59.5, 179.5, 59.5);
        e.bezierCurveTo(180.9, 59.5, 182, 59.2, 182.8, 58.5);
        e.bezierCurveTo(183.7, 57.8, 184.1, 56.8, 184.1, 55.6);
        e.lineTo(184.1, 53.1);
        e.lineTo(183.8, 48.1);
        e.bezierCurveTo(184.7, 47.9, 185.7, 47.8, 186.6, 47.8);
        e.bezierCurveTo(187.5, 47.8, 188.4, 47.9, 189.3, 48.2);
        e.bezierCurveTo(191, 48.6, 191.9, 49.5, 191.9, 50.6);
        e.lineTo(191.9, 56.9);
        e.bezierCurveTo(191.9, 59.6, 190.8, 61.8, 188.5, 63.5);
        e.bezierCurveTo(186.3, 65.2, 183.3, 66, 179.5, 66);
        e.bezierCurveTo(175.8, 66, 172.8, 65.1, 170.5, 63.2);
        e.bezierCurveTo(168.3, 61.4, 167.2, 58.8, 167.2, 55.6);
        e.lineTo(167.2, 41.8);
        e.bezierCurveTo(167.2, 38.8, 168.1, 36.5, 170, 35);
        e.bezierCurveTo(168.1, 33.4, 167.2, 31.1, 167.2, 28.2);
        e.lineTo(167.2, 10.4);
        e.bezierCurveTo(167.2, 7.2, 168.3, 4.6, 170.5, 2.8);
        e.bezierCurveTo(172.8, .9, 175.7, 0, 179.4, 0);
        e.bezierCurveTo(183.1, 0, 186.1, .8, 188.2, 2.5);
        e.bezierCurveTo(190.4, 4.2, 191.5, 6.4, 191.5, 9.1);
        e.lineTo(191.5, 17.3);
        e.bezierCurveTo(191.5, 18.5, 190.6, 19.3, 188.9, 19.8);
        e.bezierCurveTo(188, 20.1, 187.1, 20.2, 186.2, 20.2);
        e.bezierCurveTo(185.3, 20.2, 184.3, 20.1, 183.4, 19.9);
        e.bezierCurveTo(183.6, 18.3, 183.7, 16.6, 183.7, 14.9);
        e.lineTo(183.7, 10.4);
        e.bezierCurveTo(183.7, 7.8, 182.3, 6.5, 179.4, 6.5);
        e.bezierCurveTo(178, 6.5, 176.9, 6.8, 176.1, 7.5);
        e.bezierCurveTo(175.3, 8.2, 175, 9.2, 175, 10.4);
        e.lineTo(175, 27.8);
        e.bezierCurveTo(175, 29, 175.3, 29.9, 176.1, 30.6);
        e.bezierCurveTo(176.8, 31.4, 177.8, 31.7, 179.1, 31.7);
        e.lineTo(180.6, 31.7);
        e.closePath();
        e.moveTo(209.4, 7.5);
        e.bezierCurveTo(207.7, 7.5, 205.9, 8.4, 204.1, 10.1);
        e.lineTo(204.1, 55.8);
        e.lineTo(204.5, 65);
        e.bezierCurveTo(202.3, 65.3, 200.1, 65.5, 197.9, 65.5);
        e.bezierCurveTo(196.9, 65.5, 196.3, 65, 196.3, 63.8);
        e.lineTo(196.3, 10.5);
        e.bezierCurveTo(196.3, 9.1, 196.1, 8.1, 195.5, 7.4);
        e.bezierCurveTo(195, 6.8, 194.1, 6.5, 192.7, 6.5);
        e.bezierCurveTo(192.6, 4.8, 193.1, 3.4, 194.1, 2.5);
        e.bezierCurveTo(195, 1.5, 196.6, 1, 198.8, 1);
        e.bezierCurveTo(201, 1, 202.5, 2.1, 203.4, 4.2);
        e.bezierCurveTo(206, 2.1, 208.6, 1, 211.3, 1);
        e.bezierCurveTo(217.8, 1, 221.1, 4.2, 221.1, 10.6);
        e.lineTo(221.1, 56.6);
        e.bezierCurveTo(221.1, 58, 221.3, 59, 221.9, 59.5);
        e.bezierCurveTo(222.4, 60.1, 223.4, 60.4, 224.8, 60.4);
        e.bezierCurveTo(224.8, 64.1, 222.7, 66, 218.5, 66);
        e.bezierCurveTo(215, 66, 213.3, 63.7, 213.3, 59.2);
        e.lineTo(213.3, 11.2);
        e.bezierCurveTo(213.3, 8.7, 212, 7.5, 209.4, 7.5);
        e.closePath();
        e.moveTo(242.3, 1);
        e.bezierCurveTo(248.8, 1, 252.1, 4.2, 252.1, 10.6);
        e.lineTo(252.1, 54.6);
        e.bezierCurveTo(252.1, 57.9, 250.9, 60.4, 248.7, 62.3);
        e.bezierCurveTo(246.4, 64.1, 243.3, 65, 239.5, 65);
        e.lineTo(227.4, 65);
        e.lineTo(227.4, 10.5);
        e.bezierCurveTo(227.4, 9.1, 227.1, 8.1, 226.6, 7.4);
        e.bezierCurveTo(226, 6.8, 225.1, 6.5, 223.7, 6.5);
        e.bezierCurveTo(223.6, 4.8, 224.1, 3.4, 225.1, 2.5);
        e.bezierCurveTo(226.1, 1.5, 227.7, 1, 229.9, 1);
        e.bezierCurveTo(232.1, 1, 233.6, 2.1, 234.4, 4.2);
        e.bezierCurveTo(237, 2.1, 239.6, 1, 242.3, 1);
        e.closePath();
        e.moveTo(240.5, 7.5);
        e.bezierCurveTo(238.7, 7.5, 236.9, 8.4, 235.1, 10.1);
        e.lineTo(235.1, 58.5);
        e.lineTo(239.7, 58.5);
        e.bezierCurveTo(241, 58.5, 242.2, 58.2, 243, 57.5);
        e.bezierCurveTo(243.9, 56.8, 244.3, 55.8, 244.3, 54.6);
        e.lineTo(244.3, 11.2);
        e.bezierCurveTo(244.3, 8.7, 243, 7.5, 240.5, 7.5);
        e.closePath();
        this.graphics = e
    };
    a.FrontEnd = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.LIGHT_PURPLE.red;
        var b = StyleManager.LIGHT_PURPLE.green;
        var c = StyleManager.LIGHT_PURPLE.blue;
        var d = StyleManager.LIGHT_PURPLE.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(0, 44.9);
        e.lineTo(0, .8);
        e.lineTo(6.9, .8);
        e.lineTo(6.9, 44.9);
        e.lineTo(0, 44.9);
        e.closePath();
        this.graphics = e
    };
    a.I = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.LIGHT_PURPLE.red;
        var b = StyleManager.LIGHT_PURPLE.green;
        var c = StyleManager.LIGHT_PURPLE.blue;
        var d = StyleManager.LIGHT_PURPLE.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(0, 49);
        e.lineTo(0, 0);
        e.lineTo(7.7, 0);
        e.lineTo(7.7, 49);
        e.lineTo(0, 49);
        e.closePath();
        e.moveTo(15.3, 7.7);
        e.lineTo(15.3, 0);
        e.lineTo(22.5, 0);
        e.lineTo(22.5, 7.7);
        e.lineTo(18.6, 16.4);
        e.lineTo(15.3, 16.4);
        e.lineTo(17.8, 7.7);
        e.lineTo(15.3, 7.7);
        e.closePath();
        e.moveTo(30.2, 49);
        e.lineTo(30.2, 0);
        e.lineTo(40.3, 0);
        e.lineTo(45.2, 27.1);
        e.bezierCurveTo(45.4, 28.2, 45.5, 29.4, 45.6, 30.6);
        e.bezierCurveTo(45.7, 31.9, 45.8, 33.2, 45.8, 34.5);
        e.bezierCurveTo(45.8, 33.4, 45.9, 32.2, 46, 31);
        e.bezierCurveTo(46.1, 29.8, 46.3, 28.6, 46.5, 27.2);
        e.lineTo(51.2, 0);
        e.lineTo(61.4, 0);
        e.lineTo(61.4, 49);
        e.lineTo(54.3, 49);
        e.lineTo(54.3, 18.1);
        e.bezierCurveTo(54.3, 17.2, 54.4, 16, 54.5, 14.5);
        e.bezierCurveTo(54.6, 13, 54.7, 11.4, 54.9, 9.5);
        e.bezierCurveTo(54.8, 10.2, 54.6, 11.1, 54.5, 12.2);
        e.bezierCurveTo(54.1, 14.4, 53.9, 15.8, 53.7, 16.5);
        e.lineTo(47.6, 49);
        e.lineTo(43.8, 49);
        e.lineTo(37.9, 16.4);
        e.bezierCurveTo(37.7, 15.1, 37.4, 13.7, 37.2, 12.1);
        e.bezierCurveTo(36.9, 10.6, 36.8, 9.7, 36.7, 9.5);
        e.bezierCurveTo(36.9, 11.2, 37, 12.8, 37.1, 14.2);
        e.bezierCurveTo(37.2, 15.7, 37.2, 17, 37.2, 18.1);
        e.lineTo(37.2, 49);
        e.lineTo(30.2, 49);
        e.closePath();
        this.graphics = e
    };
    a.Im = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.LIGHT_AQUA.red;
        var b = StyleManager.LIGHT_AQUA.green;
        var c = StyleManager.LIGHT_AQUA.blue;
        var d = StyleManager.LIGHT_AQUA.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(.1, 32);
        e.lineTo(5.6, .7);
        e.lineTo(10.4, .7);
        e.lineTo(5.6, 27.4);
        e.lineTo(13.1, 27.4);
        e.lineTo(12.3, 32);
        e.lineTo(.1, 32);
        e.closePath();
        e.moveTo(14.1, 32);
        e.lineTo(19.7, .7);
        e.lineTo(24.6, .7);
        e.lineTo(19.1, 32);
        e.lineTo(14.1, 32);
        e.closePath();
        e.moveTo(23, 32);
        e.lineTo(28.5, .7);
        e.lineTo(33.4, .7);
        e.lineTo(31, 13.9);
        e.bezierCurveTo(31.3, 13.4, 31.5, 12.9, 31.6, 12.6);
        e.bezierCurveTo(31.8, 12.3, 31.9, 12, 32.1, 11.8);
        e.lineTo(38.8, .7);
        e.lineTo(43.6, .7);
        e.lineTo(36.3, 11.4);
        e.lineTo(38.7, 32);
        e.lineTo(33.7, 32);
        e.lineTo(32.4, 16.2);
        e.lineTo(30, 19.8);
        e.lineTo(27.8, 32);
        e.lineTo(23, 32);
        e.closePath();
        e.moveTo(40.3, 32);
        e.lineTo(45.8, .7);
        e.lineTo(58.4, .7);
        e.lineTo(57.6, 5.2);
        e.lineTo(49.9, 5.2);
        e.lineTo(48.4, 13.4);
        e.lineTo(54, 13.4);
        e.lineTo(53.2, 17.9);
        e.lineTo(47.6, 17.9);
        e.lineTo(46, 27.3);
        e.lineTo(53.7, 27.3);
        e.lineTo(52.9, 32);
        e.lineTo(40.3, 32);
        e.closePath();
        e.moveTo(63.9, 32);
        e.lineTo(69.4, .7);
        e.lineTo(82, .7);
        e.lineTo(81.2, 5.2);
        e.lineTo(73.4, 5.2);
        e.lineTo(72, 13.4);
        e.lineTo(77.6, 13.4);
        e.lineTo(76.8, 17.9);
        e.lineTo(71.2, 17.9);
        e.lineTo(68.7, 32);
        e.lineTo(63.9, 32);
        e.closePath();
        e.moveTo(77.8, 32);
        e.lineTo(83.3, .7);
        e.lineTo(88.2, .7);
        e.lineTo(82.7, 32);
        e.lineTo(77.8, 32);
        e.closePath();
        e.moveTo(88.6, 5.2);
        e.lineTo(89.4, .7);
        e.lineTo(104.3, .7);
        e.lineTo(103.5, 5.2);
        e.lineTo(98.5, 5.2);
        e.lineTo(93.7, 32);
        e.lineTo(88.9, 32);
        e.lineTo(93.6, 5.2);
        e.lineTo(88.6, 5.2);
        e.closePath();
        e.moveTo(100.9, 23.9);
        e.lineTo(103.8, 7.9);
        e.bezierCurveTo(104.2, 5.4, 105.2, 3.5, 106.8, 2.1);
        e.bezierCurveTo(108.4, .7, 110.4, 0, 112.7, 0);
        e.bezierCurveTo(115, 0, 116.6, .7, 117.7, 2.2);
        e.bezierCurveTo(118.7, 3.6, 119, 5.5, 118.6, 8);
        e.lineTo(118.1, 11);
        e.lineTo(113.1, 11);
        e.lineTo(113.7, 7.6);
        e.bezierCurveTo(113.9, 6.5, 113.8, 5.7, 113.5, 5.2);
        e.bezierCurveTo(113.2, 4.6, 112.6, 4.4, 111.8, 4.4);
        e.bezierCurveTo(111, 4.4, 110.3, 4.6, 109.8, 5.2);
        e.bezierCurveTo(109.3, 5.7, 108.9, 6.5, 108.7, 7.6);
        e.lineTo(105.6, 25.1);
        e.bezierCurveTo(105.5, 26.1, 105.5, 27, 105.8, 27.5);
        e.bezierCurveTo(106.2, 28.1, 106.7, 28.3, 107.6, 28.3);
        e.bezierCurveTo(108.4, 28.3, 109, 28.1, 109.6, 27.5);
        e.bezierCurveTo(110.1, 27, 110.4, 26.1, 110.6, 25.1);
        e.lineTo(111.4, 20.8);
        e.lineTo(116.3, 20.8);
        e.lineTo(115.8, 24.1);
        e.bezierCurveTo(115.3, 26.8, 114.3, 28.9, 112.7, 30.4);
        e.bezierCurveTo(111.1, 31.9, 109.2, 32.6, 106.8, 32.6);
        e.bezierCurveTo(104.4, 32.6, 102.6, 31.9, 101.7, 30.4);
        e.bezierCurveTo(100.7, 29, 100.4, 26.8, 100.9, 23.9);
        e.closePath();
        e.moveTo(117.6, 32);
        e.lineTo(118.5, 27.1);
        e.lineTo(123.1, 27.1);
        e.lineTo(122.2, 32);
        e.lineTo(118.8, 37.5);
        e.lineTo(116.6, 37.5);
        e.lineTo(119.2, 32);
        e.lineTo(117.6, 32);
        e.closePath();
        e.moveTo(134.4, 32);
        e.lineTo(139.9, .7);
        e.lineTo(144.8, .7);
        e.lineTo(139.3, 32);
        e.lineTo(134.4, 32);
        e.closePath();
        e.moveTo(158.5, 18.8);
        e.lineTo(156.1, 32);
        e.lineTo(151.3, 32);
        e.lineTo(156.8, .7);
        e.lineTo(163.9, .7);
        e.bezierCurveTo(166.6, .7, 168.4, 1.4, 169.3, 2.8);
        e.bezierCurveTo(170.2, 4.2, 170.4, 6.5, 169.8, 9.7);
        e.bezierCurveTo(169.5, 11.7, 169, 13.3, 168.3, 14.5);
        e.bezierCurveTo(167.6, 15.7, 166.7, 16.7, 165.4, 17.4);
        e.lineTo(166.4, 32);
        e.lineTo(161.4, 32);
        e.lineTo(160.8, 18.8);
        e.lineTo(158.5, 18.8);
        e.closePath();
        e.moveTo(160.9, 5.2);
        e.lineTo(159.3, 14.3);
        e.lineTo(161.2, 14.3);
        e.bezierCurveTo(162.3, 14.3, 163.1, 14, 163.7, 13.3);
        e.bezierCurveTo(164.2, 12.6, 164.6, 11.4, 165, 9.5);
        e.bezierCurveTo(165.3, 7.9, 165.2, 6.8, 164.9, 6.1);
        e.bezierCurveTo(164.5, 5.5, 163.8, 5.2, 162.6, 5.2);
        e.lineTo(160.9, 5.2);
        e.closePath();
        e.moveTo(169, 32);
        e.lineTo(174.5, .7);
        e.lineTo(187.1, .7);
        e.lineTo(186.3, 5.2);
        e.lineTo(178.5, 5.2);
        e.lineTo(177.1, 13.4);
        e.lineTo(182.7, 13.4);
        e.lineTo(181.9, 17.9);
        e.lineTo(176.3, 17.9);
        e.lineTo(174.6, 27.3);
        e.lineTo(182.4, 27.3);
        e.lineTo(181.6, 32);
        e.lineTo(169, 32);
        e.closePath();
        e.moveTo(184.4, 32);
        e.lineTo(189.9, .7);
        e.lineTo(196.8, .7);
        e.bezierCurveTo(199.4, .7, 201.3, 1.4, 202.3, 2.8);
        e.bezierCurveTo(203.3, 4.2, 203.6, 6.3, 203.1, 9.3);
        e.lineTo(200.6, 23.2);
        e.bezierCurveTo(200.1, 26.3, 199.1, 28.5, 197.6, 29.9);
        e.bezierCurveTo(196.2, 31.3, 194.1, 32, 191.5, 32);
        e.lineTo(184.4, 32);
        e.closePath();
        e.moveTo(190, 27.4);
        e.lineTo(192.4, 27.4);
        e.bezierCurveTo(193.3, 27.4, 194, 27.1, 194.5, 26.6);
        e.bezierCurveTo(195, 26, 195.3, 25.2, 195.5, 24.1);
        e.lineTo(198.2, 9);
        e.bezierCurveTo(198.4, 7.7, 198.3, 6.8, 197.7, 6.2);
        e.bezierCurveTo(197.2, 5.6, 196.3, 5.3, 195, 5.3);
        e.lineTo(193.9, 5.3);
        e.lineTo(190, 27.4);
        e.closePath();
        e.moveTo(202.6, 32);
        e.lineTo(208.1, .7);
        e.lineTo(213, .7);
        e.lineTo(207.5, 32);
        e.lineTo(202.6, 32);
        e.closePath();
        e.moveTo(218.6, 18.8);
        e.lineTo(216.2, 32);
        e.lineTo(211.4, 32);
        e.lineTo(216.9, .7);
        e.lineTo(224, .7);
        e.bezierCurveTo(226.7, .7, 228.4, 1.4, 229.4, 2.8);
        e.bezierCurveTo(230.3, 4.2, 230.5, 6.5, 229.9, 9.7);
        e.bezierCurveTo(229.6, 11.7, 229.1, 13.3, 228.4, 14.5);
        e.bezierCurveTo(227.7, 15.7, 226.7, 16.7, 225.5, 17.4);
        e.lineTo(226.5, 32);
        e.lineTo(221.5, 32);
        e.lineTo(220.8, 18.8);
        e.lineTo(218.6, 18.8);
        e.closePath();
        e.moveTo(221, 5.2);
        e.lineTo(219.3, 14.3);
        e.lineTo(221.3, 14.3);
        e.bezierCurveTo(222.4, 14.3, 223.2, 14, 223.7, 13.3);
        e.bezierCurveTo(224.3, 12.6, 224.7, 11.4, 225.1, 9.5);
        e.bezierCurveTo(225.3, 7.9, 225.3, 6.8, 225, 6.1);
        e.bezierCurveTo(224.6, 5.5, 223.9, 5.2, 222.7, 5.2);
        e.lineTo(221, 5.2);
        e.closePath();
        e.moveTo(229, 32);
        e.lineTo(234.6, .7);
        e.lineTo(247.2, .7);
        e.lineTo(246.4, 5.2);
        e.lineTo(238.6, 5.2);
        e.lineTo(237.1, 13.4);
        e.lineTo(242.7, 13.4);
        e.lineTo(241.9, 17.9);
        e.lineTo(236.4, 17.9);
        e.lineTo(234.7, 27.3);
        e.lineTo(242.5, 27.3);
        e.lineTo(241.6, 32);
        e.lineTo(229, 32);
        e.closePath();
        e.moveTo(245.3, 23.9);
        e.lineTo(248.1, 7.9);
        e.bezierCurveTo(248.6, 5.4, 249.6, 3.5, 251.2, 2.1);
        e.bezierCurveTo(252.8, .7, 254.7, 0, 257.1, 0);
        e.bezierCurveTo(259.3, 0, 261, .7, 262, 2.2);
        e.bezierCurveTo(263.1, 3.6, 263.4, 5.5, 263, 8);
        e.lineTo(262.4, 11);
        e.lineTo(257.5, 11);
        e.lineTo(258.1, 7.6);
        e.bezierCurveTo(258.3, 6.5, 258.2, 5.7, 257.9, 5.2);
        e.bezierCurveTo(257.6, 4.6, 257, 4.4, 256.2, 4.4);
        e.bezierCurveTo(255.3, 4.4, 254.7, 4.6, 254.2, 5.2);
        e.bezierCurveTo(253.6, 5.7, 253.3, 6.5, 253.1, 7.6);
        e.lineTo(250, 25.1);
        e.bezierCurveTo(249.8, 26.1, 249.9, 27, 250.2, 27.5);
        e.bezierCurveTo(250.5, 28.1, 251.1, 28.3, 251.9, 28.3);
        e.bezierCurveTo(252.8, 28.3, 253.4, 28.1, 253.9, 27.5);
        e.bezierCurveTo(254.5, 27, 254.8, 26.1, 255, 25.1);
        e.lineTo(255.8, 20.8);
        e.lineTo(260.7, 20.8);
        e.lineTo(260.1, 24.1);
        e.bezierCurveTo(259.7, 26.8, 258.6, 28.9, 257.1, 30.4);
        e.bezierCurveTo(255.5, 31.9, 253.6, 32.6, 251.2, 32.6);
        e.bezierCurveTo(248.7, 32.6, 247, 31.9, 246, 30.4);
        e.bezierCurveTo(245, 29, 244.8, 26.8, 245.3, 23.9);
        e.closePath();
        e.moveTo(264, 5.2);
        e.lineTo(264.8, .7);
        e.lineTo(279.6, .7);
        e.lineTo(278.8, 5.2);
        e.lineTo(273.8, 5.2);
        e.lineTo(269.1, 32);
        e.lineTo(264.2, 32);
        e.lineTo(269, 5.2);
        e.lineTo(264, 5.2);
        e.closePath();
        e.moveTo(275.4, 32);
        e.lineTo(281, .7);
        e.lineTo(293.6, .7);
        e.lineTo(292.8, 5.2);
        e.lineTo(285, 5.2);
        e.lineTo(283.5, 13.4);
        e.lineTo(289.1, 13.4);
        e.lineTo(288.3, 17.9);
        e.lineTo(282.7, 17.9);
        e.lineTo(281.1, 27.3);
        e.lineTo(288.9, 27.3);
        e.lineTo(288, 32);
        e.lineTo(275.4, 32);
        e.closePath();
        e.moveTo(290.9, 32);
        e.lineTo(296.4, .7);
        e.lineTo(303.2, .7);
        e.bezierCurveTo(305.9, .7, 307.7, 1.4, 308.8, 2.8);
        e.bezierCurveTo(309.8, 4.2, 310.1, 6.3, 309.5, 9.3);
        e.lineTo(307.1, 23.2);
        e.bezierCurveTo(306.5, 26.3, 305.5, 28.5, 304.1, 29.9);
        e.bezierCurveTo(302.6, 31.3, 300.6, 32, 297.9, 32);
        e.lineTo(290.9, 32);
        e.closePath();
        e.moveTo(296.5, 27.4);
        e.lineTo(298.9, 27.4);
        e.bezierCurveTo(299.8, 27.4, 300.4, 27.1, 300.9, 26.6);
        e.bezierCurveTo(301.4, 26, 301.8, 25.2, 302, 24.1);
        e.lineTo(304.7, 9);
        e.bezierCurveTo(304.9, 7.7, 304.7, 6.8, 304.2, 6.2);
        e.bezierCurveTo(303.7, 5.6, 302.8, 5.3, 301.5, 5.3);
        e.lineTo(300.4, 5.3);
        e.lineTo(296.5, 27.4);
        e.closePath();
        this.graphics = e
    };
    a.LikeFITC = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.LIGHT_AQUA.red;
        var b = StyleManager.LIGHT_AQUA.green;
        var c = StyleManager.LIGHT_AQUA.blue;
        var d = StyleManager.LIGHT_AQUA.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(1, 31.8);
        e.lineTo(6.5, .5);
        e.lineTo(10.8, .5);
        e.lineTo(13.7, 19.2);
        e.bezierCurveTo(13.7, 19.6, 13.8, 20.1, 13.8, 20.6);
        e.bezierCurveTo(13.9, 21.2, 14, 21.9, 14, 22.6);
        e.bezierCurveTo(14, 21.6, 14, 20.8, 14.1, 20);
        e.bezierCurveTo(14.1, 19.3, 14.2, 18.7, 14.2, 18.3);
        e.lineTo(17.4, .5);
        e.lineTo(21.9, .5);
        e.lineTo(16.4, 31.8);
        e.lineTo(11.8, 31.8);
        e.lineTo(9, 14.5);
        e.bezierCurveTo(9, 14.5, 9, 14.3, 9, 14.2);
        e.bezierCurveTo(8.8, 13, 8.6, 12, 8.6, 11.1);
        e.bezierCurveTo(8.6, 12.2, 8.5, 13.1, 8.5, 13.9);
        e.bezierCurveTo(8.5, 14.6, 8.4, 15.1, 8.4, 15.5);
        e.lineTo(5.5, 31.8);
        e.lineTo(1, 31.8);
        e.closePath();
        e.moveTo(20.4, 31.8);
        e.lineTo(25.9, .5);
        e.lineTo(38.5, .5);
        e.lineTo(37.7, 5);
        e.lineTo(30, 5);
        e.lineTo(28.5, 13.2);
        e.lineTo(34.1, 13.2);
        e.lineTo(33.3, 17.8);
        e.lineTo(27.7, 17.8);
        e.lineTo(26.1, 27.1);
        e.lineTo(33.8, 27.1);
        e.lineTo(33, 31.8);
        e.lineTo(20.4, 31.8);
        e.closePath();
        e.moveTo(39.1, .5);
        e.lineTo(43.7, .5);
        e.lineTo(42.6, 19.1);
        e.bezierCurveTo(42.6, 20, 42.5, 20.9, 42.4, 21.7);
        e.bezierCurveTo(42.3, 22.5, 42.2, 23.2, 42.1, 24);
        e.lineTo(42, 24.6);
        e.bezierCurveTo(42, 24.2, 42.2, 23.6, 42.3, 22.9);
        e.bezierCurveTo(42.9, 20.4, 43.3, 18.9, 43.4, 18.4);
        e.lineTo(49, .5);
        e.lineTo(53.1, .5);
        e.lineTo(52.4, 19);
        e.bezierCurveTo(52.4, 19.8, 52.3, 20.6, 52.2, 21.5);
        e.bezierCurveTo(52.1, 22.4, 52, 23.5, 51.8, 24.6);
        e.bezierCurveTo(51.8, 24.4, 51.9, 24.1, 52, 23.7);
        e.bezierCurveTo(52.6, 21.1, 53, 19.3, 53.2, 18.4);
        e.lineTo(58.4, .5);
        e.lineTo(62.9, .5);
        e.lineTo(52.6, 31.8);
        e.lineTo(48.5, 31.8);
        e.lineTo(49.1, 13.7);
        e.bezierCurveTo(49.1, 13, 49.2, 12.1, 49.3, 11.2);
        e.bezierCurveTo(49.4, 10.2, 49.5, 9.2, 49.7, 8.1);
        e.bezierCurveTo(49.3, 9.8, 49, 11.2, 48.8, 12.2);
        e.bezierCurveTo(48.5, 13.2, 48.4, 13.9, 48.3, 14.2);
        e.lineTo(42.6, 31.8);
        e.lineTo(38.6, 31.8);
        e.lineTo(39.1, .5);
        e.closePath();
        e.moveTo(67.5, 31.8);
        e.lineTo(73, .5);
        e.lineTo(77.9, .5);
        e.lineTo(72.4, 31.8);
        e.lineTo(67.5, 31.8);
        e.closePath();
        e.moveTo(76.3, 31.8);
        e.lineTo(81.8, .5);
        e.lineTo(86.2, .5);
        e.lineTo(89, 19.2);
        e.bezierCurveTo(89.1, 19.6, 89.1, 20.1, 89.2, 20.6);
        e.bezierCurveTo(89.2, 21.2, 89.3, 21.9, 89.3, 22.6);
        e.bezierCurveTo(89.3, 21.6, 89.4, 20.8, 89.4, 20);
        e.bezierCurveTo(89.4, 19.3, 89.5, 18.7, 89.5, 18.3);
        e.lineTo(92.7, .5);
        e.lineTo(97.2, .5);
        e.lineTo(91.7, 31.8);
        e.lineTo(87.2, 31.8);
        e.lineTo(84.3, 14.5);
        e.bezierCurveTo(84.3, 14.5, 84.3, 14.3, 84.3, 14.2);
        e.bezierCurveTo(84.1, 13, 84, 12, 83.9, 11.1);
        e.bezierCurveTo(83.9, 12.2, 83.9, 13.1, 83.8, 13.9);
        e.bezierCurveTo(83.8, 14.6, 83.8, 15.1, 83.7, 15.5);
        e.lineTo(80.8, 31.8);
        e.lineTo(76.3, 31.8);
        e.closePath();
        e.moveTo(95.7, 31.8);
        e.lineTo(101.3, .5);
        e.lineTo(108.1, .5);
        e.bezierCurveTo(110.8, .5, 112.6, 1.2, 113.7, 2.6);
        e.bezierCurveTo(114.7, 4, 114.9, 6.2, 114.4, 9.1);
        e.lineTo(112, 23.1);
        e.bezierCurveTo(111.4, 26.1, 110.4, 28.4, 109, 29.7);
        e.bezierCurveTo(107.5, 31.1, 105.5, 31.8, 102.8, 31.8);
        e.lineTo(95.7, 31.8);
        e.closePath();
        e.moveTo(101.3, 27.2);
        e.lineTo(103.8, 27.2);
        e.bezierCurveTo(104.6, 27.2, 105.3, 26.9, 105.8, 26.4);
        e.bezierCurveTo(106.3, 25.9, 106.7, 25, 106.9, 23.9);
        e.lineTo(109.5, 8.9);
        e.bezierCurveTo(109.8, 7.6, 109.6, 6.6, 109.1, 6);
        e.bezierCurveTo(108.6, 5.4, 107.7, 5.1, 106.3, 5.1);
        e.lineTo(105.2, 5.1);
        e.lineTo(101.3, 27.2);
        e.closePath();
        e.moveTo(119.1, .5);
        e.lineTo(124, .5);
        e.lineTo(119.7, 24.8);
        e.bezierCurveTo(119.6, 25.7, 119.7, 26.4, 120.1, 26.9);
        e.bezierCurveTo(120.4, 27.5, 121, 27.7, 121.8, 27.7);
        e.bezierCurveTo(122.5, 27.7, 123.2, 27.5, 123.7, 26.9);
        e.bezierCurveTo(124.2, 26.4, 124.6, 25.7, 124.7, 24.8);
        e.lineTo(129, .5);
        e.lineTo(133.9, .5);
        e.lineTo(129.8, 23.9);
        e.bezierCurveTo(129.3, 26.7, 128.3, 28.8, 126.8, 30.3);
        e.bezierCurveTo(125.2, 31.8, 123.3, 32.5, 120.9, 32.5);
        e.bezierCurveTo(118.5, 32.5, 116.8, 31.7, 115.7, 30.3);
        e.bezierCurveTo(114.7, 28.8, 114.5, 26.6, 115, 23.8);
        e.lineTo(119.1, .5);
        e.closePath();
        e.moveTo(132.1, 23.9);
        e.lineTo(136.9, 23.2);
        e.bezierCurveTo(136.7, 24.8, 136.8, 25.9, 137.1, 26.7);
        e.bezierCurveTo(137.5, 27.5, 138.2, 27.8, 139.2, 27.8);
        e.bezierCurveTo(140.1, 27.8, 140.9, 27.6, 141.5, 27);
        e.bezierCurveTo(142.2, 26.4, 142.6, 25.7, 142.7, 24.8);
        e.bezierCurveTo(143, 23.2, 142.1, 21.1, 140, 18.5);
        e.bezierCurveTo(139.8, 18.3, 139.7, 18.1, 139.6, 18);
        e.bezierCurveTo(137.5, 15.5, 136.2, 13.5, 135.7, 12.2);
        e.bezierCurveTo(135.2, 10.8, 135.1, 9.4, 135.4, 7.8);
        e.bezierCurveTo(135.8, 5.6, 136.8, 3.8, 138.6, 2.3);
        e.bezierCurveTo(140.3, .8, 142.2, 0, 144.3, 0);
        e.bezierCurveTo(146.3, 0, 147.9, .7, 148.9, 2.1);
        e.bezierCurveTo(150, 3.5, 150.4, 5.4, 150.1, 7.7);
        e.lineTo(145.3, 8.4);
        e.bezierCurveTo(145.5, 7, 145.4, 6, 145.1, 5.4);
        e.bezierCurveTo(144.8, 4.8, 144.2, 4.5, 143.4, 4.5);
        e.bezierCurveTo(142.6, 4.5, 141.9, 4.8, 141.3, 5.3);
        e.bezierCurveTo(140.8, 5.8, 140.4, 6.5, 140.3, 7.4);
        e.bezierCurveTo(139.9, 9.2, 141, 11.6, 143.6, 14.5);
        e.bezierCurveTo(143.7, 14.6, 143.7, 14.7, 143.8, 14.8);
        e.bezierCurveTo(145.6, 17, 146.8, 18.7, 147.2, 20.1);
        e.bezierCurveTo(147.7, 21.5, 147.8, 23, 147.5, 24.7);
        e.bezierCurveTo(147, 27, 146, 28.9, 144.3, 30.3);
        e.bezierCurveTo(142.7, 31.8, 140.7, 32.5, 138.6, 32.5);
        e.bezierCurveTo(136.2, 32.5, 134.4, 31.8, 133.3, 30.2);
        e.bezierCurveTo(132.1, 28.7, 131.8, 26.6, 132.1, 23.9);
        e.closePath();
        e.moveTo(150.7, 5);
        e.lineTo(151.5, .5);
        e.lineTo(166.3, .5);
        e.lineTo(165.5, 5);
        e.lineTo(160.5, 5);
        e.lineTo(155.8, 31.8);
        e.lineTo(150.9, 31.8);
        e.lineTo(155.7, 5);
        e.lineTo(150.7, 5);
        e.closePath();
        e.moveTo(169.2, 18.7);
        e.lineTo(166.9, 31.8);
        e.lineTo(162.1, 31.8);
        e.lineTo(167.6, .5);
        e.lineTo(174.7, .5);
        e.bezierCurveTo(177.3, .5, 179.1, 1.2, 180.1, 2.7);
        e.bezierCurveTo(181, 4.1, 181.2, 6.4, 180.6, 9.6);
        e.bezierCurveTo(180.3, 11.5, 179.8, 13.1, 179.1, 14.3);
        e.bezierCurveTo(178.4, 15.5, 177.4, 16.5, 176.2, 17.3);
        e.lineTo(177.2, 31.8);
        e.lineTo(172.2, 31.8);
        e.lineTo(171.5, 18.7);
        e.lineTo(169.2, 18.7);
        e.closePath();
        e.moveTo(171.6, 5);
        e.lineTo(170, 14.1);
        e.lineTo(171.9, 14.1);
        e.bezierCurveTo(173.1, 14.1, 173.9, 13.8, 174.4, 13.1);
        e.bezierCurveTo(175, 12.5, 175.4, 11.2, 175.7, 9.4);
        e.bezierCurveTo(176, 7.7, 176, 6.6, 175.7, 6);
        e.bezierCurveTo(175.3, 5.4, 174.6, 5, 173.4, 5);
        e.lineTo(171.6, 5);
        e.closePath();
        e.moveTo(182.2, .5);
        e.lineTo(187.1, .5);
        e.lineTo(188, 13);
        e.lineTo(188.3, 13);
        e.lineTo(193.5, .5);
        e.lineTo(198.5, .5);
        e.lineTo(189.6, 18.8);
        e.lineTo(187.3, 31.8);
        e.lineTo(182.5, 31.8);
        e.lineTo(184.7, 19.4);
        e.lineTo(182.2, .5);
        e.closePath();
        e.moveTo(202.2, 31.8);
        e.lineTo(207.7, .5);
        e.lineTo(214.5, .5);
        e.bezierCurveTo(217.2, .5, 219, 1.2, 220.1, 2.6);
        e.bezierCurveTo(221.1, 4, 221.4, 6.2, 220.8, 9.1);
        e.lineTo(218.4, 23.1);
        e.bezierCurveTo(217.8, 26.1, 216.8, 28.4, 215.4, 29.7);
        e.bezierCurveTo(213.9, 31.1, 211.9, 31.8, 209.2, 31.8);
        e.lineTo(202.2, 31.8);
        e.closePath();
        e.moveTo(207.8, 27.2);
        e.lineTo(210.2, 27.2);
        e.bezierCurveTo(211, 27.2, 211.7, 26.9, 212.2, 26.4);
        e.bezierCurveTo(212.7, 25.9, 213.1, 25, 213.3, 23.9);
        e.lineTo(215.9, 8.9);
        e.bezierCurveTo(216.2, 7.6, 216, 6.6, 215.5, 6);
        e.bezierCurveTo(215, 5.4, 214.1, 5.1, 212.7, 5.1);
        e.lineTo(211.6, 5.1);
        e.lineTo(207.8, 27.2);
        e.closePath();
        e.moveTo(220.3, 31.8);
        e.lineTo(225.9, .5);
        e.lineTo(238.5, .5);
        e.lineTo(237.7, 5);
        e.lineTo(229.9, 5);
        e.lineTo(228.4, 13.2);
        e.lineTo(234, 13.2);
        e.lineTo(233.2, 17.8);
        e.lineTo(227.6, 17.8);
        e.lineTo(226, 27.1);
        e.lineTo(233.8, 27.1);
        e.lineTo(232.9, 31.8);
        e.lineTo(220.3, 31.8);
        e.closePath();
        e.moveTo(235.8, 31.8);
        e.lineTo(241.3, .5);
        e.lineTo(247.7, .5);
        e.lineTo(247.8, 17.9);
        e.bezierCurveTo(247.8, 18.5, 247.8, 19.3, 247.7, 20.1);
        e.bezierCurveTo(247.6, 20.9, 247.5, 21.7, 247.4, 22.6);
        e.bezierCurveTo(247.5, 21.8, 247.7, 21.1, 247.9, 20.3);
        e.bezierCurveTo(248.1, 19.6, 248.3, 18.8, 248.6, 17.9);
        e.lineTo(254.7, .5);
        e.lineTo(261.2, .5);
        e.lineTo(255.7, 31.8);
        e.lineTo(251.2, 31.8);
        e.lineTo(254.7, 12.1);
        e.bezierCurveTo(254.8, 11.5, 254.9, 10.7, 255.2, 9.8);
        e.bezierCurveTo(255.4, 8.8, 255.7, 7.8, 256, 6.6);
        e.bezierCurveTo(255.9, 7, 255.7, 7.6, 255.4, 8.3);
        e.bezierCurveTo(254.9, 9.7, 254.6, 10.6, 254.5, 11);
        e.lineTo(246.9, 31.8);
        e.lineTo(244.5, 31.8);
        e.lineTo(244.4, 11);
        e.bezierCurveTo(244.4, 10.2, 244.4, 9.3, 244.4, 8.3);
        e.bezierCurveTo(244.4, 7.3, 244.4, 6.7, 244.4, 6.6);
        e.bezierCurveTo(244.3, 7.7, 244.2, 8.7, 244.1, 9.6);
        e.bezierCurveTo(244, 10.5, 243.9, 11.3, 243.7, 12.1);
        e.lineTo(240.3, 31.8);
        e.lineTo(235.8, 31.8);
        e.closePath();
        e.moveTo(257.5, 31.8);
        e.lineTo(268.2, .5);
        e.lineTo(274.5, .5);
        e.lineTo(274.1, 31.8);
        e.lineTo(269.1, 31.8);
        e.lineTo(269.4, 25);
        e.lineTo(264.5, 25);
        e.lineTo(262.3, 31.8);
        e.lineTo(257.5, 31.8);
        e.closePath();
        e.moveTo(265.9, 20.6);
        e.lineTo(269.6, 20.6);
        e.lineTo(270.2, 7.5);
        e.lineTo(269.9, 7.5);
        e.lineTo(265.9, 20.6);
        e.closePath();
        e.moveTo(276, 31.8);
        e.lineTo(281.5, .5);
        e.lineTo(285.8, .5);
        e.lineTo(288.7, 19.2);
        e.bezierCurveTo(288.7, 19.6, 288.8, 20.1, 288.8, 20.6);
        e.bezierCurveTo(288.9, 21.2, 289, 21.9, 289, 22.6);
        e.bezierCurveTo(289, 21.6, 289, 20.8, 289.1, 20);
        e.bezierCurveTo(289.1, 19.3, 289.1, 18.7, 289.2, 18.3);
        e.lineTo(292.4, .5);
        e.lineTo(296.9, .5);
        e.lineTo(291.4, 31.8);
        e.lineTo(286.8, 31.8);
        e.lineTo(284, 14.5);
        e.bezierCurveTo(284, 14.5, 284, 14.3, 283.9, 14.2);
        e.bezierCurveTo(283.7, 13, 283.6, 12, 283.6, 11.1);
        e.bezierCurveTo(283.6, 12.2, 283.5, 13.1, 283.5, 13.9);
        e.bezierCurveTo(283.5, 14.6, 283.4, 15.1, 283.4, 15.5);
        e.lineTo(280.5, 31.8);
        e.lineTo(276, 31.8);
        e.closePath();
        e.moveTo(295.4, 31.8);
        e.lineTo(300.9, .5);
        e.lineTo(307.8, .5);
        e.bezierCurveTo(310.4, .5, 312.3, 1.2, 313.3, 2.6);
        e.bezierCurveTo(314.3, 4, 314.6, 6.2, 314.1, 9.1);
        e.lineTo(311.6, 23.1);
        e.bezierCurveTo(311.1, 26.1, 310.1, 28.4, 308.6, 29.7);
        e.bezierCurveTo(307.2, 31.1, 305.1, 31.8, 302.5, 31.8);
        e.lineTo(295.4, 31.8);
        e.closePath();
        e.moveTo(301, 27.2);
        e.lineTo(303.4, 27.2);
        e.bezierCurveTo(304.3, 27.2, 305, 26.9, 305.5, 26.4);
        e.bezierCurveTo(306, 25.9, 306.3, 25, 306.5, 23.9);
        e.lineTo(309.2, 8.9);
        e.bezierCurveTo(309.4, 7.6, 309.3, 6.6, 308.8, 6);
        e.bezierCurveTo(308.2, 5.4, 307.3, 5.1, 306, 5.1);
        e.lineTo(304.9, 5.1);
        e.lineTo(301, 27.2);
        e.closePath();
        e.moveTo(313.5, 23.9);
        e.lineTo(318.3, 23.2);
        e.bezierCurveTo(318.1, 24.8, 318.2, 25.9, 318.5, 26.7);
        e.bezierCurveTo(318.9, 27.5, 319.6, 27.8, 320.6, 27.8);
        e.bezierCurveTo(321.5, 27.8, 322.3, 27.6, 322.9, 27);
        e.bezierCurveTo(323.6, 26.4, 324, 25.7, 324.1, 24.8);
        e.bezierCurveTo(324.4, 23.2, 323.5, 21.1, 321.4, 18.5);
        e.bezierCurveTo(321.2, 18.3, 321.1, 18.1, 321, 18);
        e.bezierCurveTo(318.9, 15.5, 317.6, 13.5, 317.1, 12.2);
        e.bezierCurveTo(316.6, 10.8, 316.5, 9.4, 316.8, 7.8);
        e.bezierCurveTo(317.2, 5.6, 318.2, 3.8, 320, 2.3);
        e.bezierCurveTo(321.7, .8, 323.6, 0, 325.7, 0);
        e.bezierCurveTo(327.7, 0, 329.2, .7, 330.3, 2.1);
        e.bezierCurveTo(331.4, 3.5, 331.8, 5.4, 331.5, 7.7);
        e.lineTo(326.7, 8.4);
        e.bezierCurveTo(326.9, 7, 326.8, 6, 326.5, 5.4);
        e.bezierCurveTo(326.2, 4.8, 325.6, 4.5, 324.7, 4.5);
        e.bezierCurveTo(324, 4.5, 323.3, 4.8, 322.7, 5.3);
        e.bezierCurveTo(322.2, 5.8, 321.8, 6.5, 321.7, 7.4);
        e.bezierCurveTo(321.3, 9.2, 322.4, 11.6, 324.9, 14.5);
        e.bezierCurveTo(325, 14.6, 325.1, 14.7, 325.2, 14.8);
        e.bezierCurveTo(327, 17, 328.2, 18.7, 328.6, 20.1);
        e.bezierCurveTo(329.1, 21.5, 329.1, 23, 328.8, 24.7);
        e.bezierCurveTo(328.4, 27, 327.4, 28.9, 325.7, 30.3);
        e.bezierCurveTo(324.1, 31.8, 322.1, 32.5, 320, 32.5);
        e.bezierCurveTo(317.6, 32.5, 315.8, 31.8, 314.7, 30.2);
        e.bezierCurveTo(313.5, 28.7, 313.2, 26.6, 313.5, 23.9);
        e.closePath();
        this.graphics = e
    };
    a.NewDemands = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.WHITE.red;
        var b = StyleManager.WHITE.green;
        var c = StyleManager.WHITE.blue;
        var d = StyleManager.WHITE.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(110.1, 7.5);
        e.bezierCurveTo(109.8, 9.3, 108.9, 10.8, 107.5, 12);
        e.bezierCurveTo(106, 13.3, 104.4, 13.9, 102.6, 13.9);
        e.bezierCurveTo(101, 13.9, 99.7, 13.3, 98.7, 12.2);
        e.bezierCurveTo(97.7, 11, 97.3, 9.6, 97.5, 8);
        e.bezierCurveTo(94.8, 10, 93.2, 12.4, 92.7, 15);
        e.bezierCurveTo(92.5, 16.5, 92.8, 17.6, 93.8, 18.4);
        e.bezierCurveTo(94.7, 19.1, 95.8, 19.7, 96.9, 20.2);
        e.bezierCurveTo(98, 20.7, 99.1, 21.3, 100.1, 22);
        e.bezierCurveTo(101, 22.7, 101.4, 23.7, 101.2, 25);
        e.bezierCurveTo(100.7, 27.5, 99.3, 29.1, 97, 29.8);
        e.lineTo(73.3, 164.3);
        e.lineTo(63.1, 164.3);
        e.bezierCurveTo(63.3, 163.1, 63.8, 160.4, 64.6, 156.2);
        e.bezierCurveTo(65.5, 152, 66.3, 147.6, 67.1, 142.9);
        e.bezierCurveTo(67.9, 138.3, 68.7, 134.1, 69.3, 130.2);
        e.bezierCurveTo(70, 126.4, 70.3, 124.1, 70.3, 123.4);
        e.bezierCurveTo(70.4, 120.6, 70.3, 118.1, 70.1, 115.9);
        e.bezierCurveTo(69.9, 113.6, 69.7, 111.5, 69.5, 109.3);
        e.bezierCurveTo(69.3, 107.2, 69, 105, 68.8, 102.8);
        e.bezierCurveTo(68.5, 100.6, 68.2, 98.2, 67.9, 95.5);
        e.lineTo(63.1, 40);
        e.lineTo(36.5, 191);
        e.bezierCurveTo(35.9, 194.6, 34.9, 197.9, 33.5, 201.1);
        e.bezierCurveTo(32.1, 204.2, 30.4, 207.1, 28.3, 209.5);
        e.bezierCurveTo(26.1, 211.9, 23.6, 213.8, 20.6, 215.2);
        e.bezierCurveTo(17.7, 216.6, 14.2, 217.3, 10.2, 217.3);
        e.bezierCurveTo(9.2, 217.3, 8, 217.2, 6.7, 217);
        e.bezierCurveTo(5.4, 216.8, 4.3, 216.4, 3.2, 216);
        e.bezierCurveTo(2.2, 215.6, 1.4, 214.9, .7, 214);
        e.bezierCurveTo(.1, 213.1, -.1, 212, .1, 210.7);
        e.bezierCurveTo(.3, 209.4, 1, 208.3, 2.2, 207.4);
        e.bezierCurveTo(3.4, 206.5, 4.6, 206.1, 5.7, 206.1);
        e.bezierCurveTo(7, 206.1, 8, 206.4, 8.7, 207.2);
        e.bezierCurveTo(9.4, 207.9, 10, 208.7, 10.7, 209.7);
        e.bezierCurveTo(11.3, 210.7, 11.9, 211.5, 12.5, 212.2);
        e.bezierCurveTo(13.1, 213, 14, 213.4, 15.2, 213.4);
        e.bezierCurveTo(17.1, 213.4, 18.6, 212.7, 19.8, 211.5);
        e.bezierCurveTo(20.9, 210.2, 21.9, 208.7, 22.7, 206.8);
        e.bezierCurveTo(23.4, 205, 24, 203.1, 24.3, 201.2);
        e.bezierCurveTo(24.7, 199.3, 24.9, 197.7, 25.2, 196.3);
        e.lineTo(57, 16.1);
        e.bezierCurveTo(57.3, 14.1, 57.3, 12.5, 57, 11.4);
        e.bezierCurveTo(56.7, 10.3, 55.3, 9.8, 52.7, 9.9);
        e.lineTo(50.5, 9.9);
        e.lineTo(50.8, 8.2);
        e.bezierCurveTo(53.9, 7.3, 57, 6.5, 59.9, 5.6);
        e.bezierCurveTo(62.8, 4.8, 65.8, 3.8, 68.8, 2.7);
        e.lineTo(69.4, 3.1);
        e.bezierCurveTo(69, 4, 68.8, 6.5, 69, 10.6);
        e.bezierCurveTo(69.2, 14.7, 69.5, 19.8, 69.9, 25.8);
        e.bezierCurveTo(70.3, 31.7, 70.9, 38.2, 71.5, 45.1);
        e.bezierCurveTo(72.1, 52, 72.8, 58.6, 73.4, 64.9);
        e.bezierCurveTo(74, 71.2, 74.5, 76.7, 74.9, 81.5);
        e.bezierCurveTo(75.3, 86.3, 75.6, 89.5, 75.8, 91.1);
        e.lineTo(88.4, 19.5);
        e.bezierCurveTo(89.1, 15.6, 90.5, 12.3, 92.6, 9.4);
        e.bezierCurveTo(94.7, 6.5, 97.6, 4.1, 101.3, 2.2);
        e.bezierCurveTo(101.7, 2.1, 102, 2, 102.3, 1.9);
        e.bezierCurveTo(102.6, 1.8, 102.9, 1.7, 103.2, 1.5);
        e.lineTo(103.5, 1.3);
        e.lineTo(104.8, 1.3);
        e.bezierCurveTo(106.6, 1.3, 108, 2, 109, 3.2);
        e.bezierCurveTo(110, 4.5, 110.4, 5.9, 110.1, 7.5);
        e.closePath();
        e.fillStyle = "rgb(255, 255, 255)";
        e.moveTo(131.4, 140.4);
        e.bezierCurveTo(130.2, 147.4, 127.3, 153.2, 122.7, 157.5);
        e.bezierCurveTo(118.1, 161.9, 112.1, 164, 104.7, 164);
        e.bezierCurveTo(98.7, 164, 94.1, 162.3, 91.1, 158.7);
        e.bezierCurveTo(88, 155.2, 87, 150.3, 88.1, 144.1);
        e.lineTo(108.9, 26.1);
        e.bezierCurveTo(110.2, 19, 113, 13.3, 117.6, 9);
        e.bezierCurveTo(122.1, 4.6, 128.1, 2.4, 135.6, 2.4);
        e.bezierCurveTo(141.4, 2.4, 145.9, 4.1, 149.1, 7.5);
        e.bezierCurveTo(152.3, 10.9, 153.4, 15.7, 152.3, 21.9);
        e.lineTo(131.4, 140.4);
        e.closePath();
        e.moveTo(149.3, 17.8);
        e.bezierCurveTo(149.9, 14.6, 148.9, 12, 146.5, 10.1);
        e.bezierCurveTo(145.9, 11.3, 145.1, 12.3, 144, 13);
        e.bezierCurveTo(142.8, 13.8, 141.6, 14.1, 140.5, 14.1);
        e.bezierCurveTo(139.2, 14.1, 138.1, 13.8, 137.3, 13);
        e.bezierCurveTo(136.5, 12.3, 135.7, 11.5, 135.1, 10.5);
        e.bezierCurveTo(134.5, 9.5, 133.8, 8.7, 133.1, 8);
        e.bezierCurveTo(132.5, 7.2, 131.5, 6.9, 130.4, 6.9);
        e.bezierCurveTo(128.3, 6.9, 126.6, 7.4, 125.3, 8.6);
        e.bezierCurveTo(124, 9.8, 123, 11.3, 122.3, 13);
        e.bezierCurveTo(121.5, 14.8, 121, 16.7, 120.6, 18.7);
        e.bezierCurveTo(120.3, 20.7, 120, 22.4, 119.7, 23.9);
        e.lineTo(100.3, 133.6);
        e.bezierCurveTo(102.4, 134.4, 103.2, 136, 102.8, 138.5);
        e.bezierCurveTo(102.6, 139.8, 101.9, 140.8, 100.7, 141.5);
        e.bezierCurveTo(99.6, 142.1, 98.3, 142.7, 97, 143.2);
        e.bezierCurveTo(95.6, 143.8, 94.3, 144.4, 93.2, 145.2);
        e.bezierCurveTo(92, 146, 91.3, 147.2, 91, 148.7);
        e.bezierCurveTo(90.4, 152, 91.4, 154.6, 94.1, 156.4);
        e.bezierCurveTo(94.4, 155.2, 95.2, 154.2, 96.3, 153.5);
        e.bezierCurveTo(97.5, 152.7, 98.7, 152.3, 99.8, 152.3);
        e.bezierCurveTo(101.2, 152.3, 102.2, 152.7, 103, 153.4);
        e.bezierCurveTo(103.9, 154.2, 104.6, 155, 105.3, 156);
        e.bezierCurveTo(106.1, 156.9, 106.7, 157.8, 107.4, 158.5);
        e.bezierCurveTo(108.1, 159.3, 109, 159.6, 110.2, 159.6);
        e.bezierCurveTo(112.2, 159.6, 113.9, 159, 115.1, 157.7);
        e.bezierCurveTo(116.4, 156.5, 117.4, 155, 118.1, 153.2);
        e.bezierCurveTo(118.9, 151.5, 119.4, 149.6, 119.8, 147.7);
        e.bezierCurveTo(120.1, 145.8, 120.4, 144.1, 120.6, 142.6);
        e.lineTo(140, 32.8);
        e.bezierCurveTo(137.9, 32.1, 137.1, 30.5, 137.5, 28);
        e.bezierCurveTo(137.8, 26.7, 138.5, 25.7, 139.6, 25);
        e.bezierCurveTo(140.8, 24.3, 142, 23.8, 143.4, 23.2);
        e.bezierCurveTo(144.7, 22.7, 146, 22.1, 147.1, 21.2);
        e.bezierCurveTo(148.3, 20.4, 149, 19.3, 149.3, 17.8);
        e.closePath();
        e.moveTo(232.7, 15);
        e.bezierCurveTo(231.9, 19.6, 230.1, 23.5, 227.3, 26.8);
        e.lineTo(190, 164.3);
        e.lineTo(179.8, 164.3);
        e.lineTo(183.5, 102.4);
        e.lineTo(165.5, 164.3);
        e.lineTo(155.3, 164.3);
        e.lineTo(167.2, 9.3);
        e.bezierCurveTo(166.6, 8.3, 165.8, 7.6, 164.8, 7.3);
        e.bezierCurveTo(163.9, 7, 162.8, 6.9, 161.6, 6.9);
        e.lineTo(159.1, 7.1);
        e.lineTo(159.5, 5.1);
        e.bezierCurveTo(162.4, 4.2, 165.4, 3.4, 168.3, 2.5);
        e.bezierCurveTo(171.3, 1.7, 174.2, .9, 177.2, 0);
        e.lineTo(177.6, .2);
        e.lineTo(169, 117.8);
        e.lineTo(186.2, 59);
        e.lineTo(196.4, 59);
        e.lineTo(193, 114.7);
        e.lineTo(215.9, 30.1);
        e.bezierCurveTo(219, 29.2, 221.7, 28, 223.9, 26.6);
        e.bezierCurveTo(226.1, 25.2, 227.5, 22.8, 228.1, 19.5);
        e.bezierCurveTo(228.4, 18, 228.1, 16.9, 227.2, 16.1);
        e.bezierCurveTo(226.3, 15.4, 225.3, 14.7, 224.1, 14.1);
        e.bezierCurveTo(223, 13.6, 221.9, 12.9, 221, 12.3);
        e.bezierCurveTo(220.1, 11.6, 219.8, 10.6, 220, 9.3);
        e.bezierCurveTo(220.3, 7.7, 221, 6.4, 222.2, 5.5);
        e.bezierCurveTo(223.4, 4.6, 224.9, 4.2, 226.5, 4.2);
        e.bezierCurveTo(229.5, 4.2, 231.4, 5.4, 232.2, 7.7);
        e.bezierCurveTo(233, 10.1, 233.1, 12.5, 232.7, 15);
        e.closePath();
        e.moveTo(212.2, 164);
        e.bezierCurveTo(211.7, 166.6, 210.3, 169, 207.9, 171.3);
        e.bezierCurveTo(205.5, 173.7, 203, 175.2, 200.3, 176);
        e.lineTo(197.6, 175.3);
        e.bezierCurveTo(198.9, 175.2, 200.5, 174.6, 202.2, 173.4);
        e.bezierCurveTo(204, 172.3, 205, 171, 205.2, 169.6);
        e.bezierCurveTo(205.5, 168, 205.2, 166.6, 204.3, 165.4);
        e.bezierCurveTo(203.4, 164.2, 203.1, 162.9, 203.3, 161.4);
        e.bezierCurveTo(203.5, 160.4, 204.1, 159.5, 205.1, 158.9);
        e.bezierCurveTo(206.1, 158.2, 207.1, 157.9, 207.9, 157.9);
        e.bezierCurveTo(209.6, 157.9, 210.7, 158.5, 211.5, 159.7);
        e.bezierCurveTo(212.2, 161, 212.4, 162.4, 212.2, 164);
        e.closePath();
        this.graphics = e
    };
    a.Now = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.ORANGE.red;
        var b = StyleManager.ORANGE.green;
        var c = StyleManager.ORANGE.blue;
        var d = StyleManager.ORANGE.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(290.1, 3.7);
        e.lineTo(289.6, 3.7);
        e.bezierCurveTo(289, 3.7, 288.4, 3.3, 288.1, 2.7);
        e.bezierCurveTo(287.9, 3.3, 287.3, 3.7, 286.6, 3.7);
        e.lineTo(285.6, 3.7);
        e.bezierCurveTo(285, 3.7, 284.4, 3.3, 284.1, 2.7);
        e.bezierCurveTo(283.9, 3.3, 283.3, 3.7, 282.6, 3.7);
        e.lineTo(281.6, 3.7);
        e.bezierCurveTo(281, 3.7, 280.4, 3.3, 280.1, 2.7);
        e.bezierCurveTo(279.9, 3.3, 279.3, 3.7, 278.6, 3.7);
        e.lineTo(277.6, 3.7);
        e.bezierCurveTo(277, 3.7, 276.4, 3.3, 276.1, 2.7);
        e.bezierCurveTo(275.9, 3.3, 275.3, 3.7, 274.6, 3.7);
        e.lineTo(273.6, 3.7);
        e.bezierCurveTo(273, 3.7, 272.4, 3.3, 272.1, 2.7);
        e.bezierCurveTo(271.9, 3.3, 271.3, 3.7, 270.6, 3.7);
        e.lineTo(269.6, 3.7);
        e.bezierCurveTo(269, 3.7, 268.4, 3.3, 268.1, 2.7);
        e.bezierCurveTo(267.9, 3.3, 267.3, 3.7, 266.6, 3.7);
        e.lineTo(265.6, 3.7);
        e.bezierCurveTo(265, 3.7, 264.4, 3.3, 264.1, 2.7);
        e.bezierCurveTo(263.9, 3.3, 263.3, 3.7, 262.6, 3.7);
        e.lineTo(261.6, 3.7);
        e.bezierCurveTo(261, 3.7, 260.4, 3.3, 260.1, 2.7);
        e.bezierCurveTo(259.9, 3.3, 259.3, 3.7, 258.6, 3.7);
        e.lineTo(257.6, 3.7);
        e.bezierCurveTo(257, 3.7, 256.4, 3.3, 256.1, 2.7);
        e.bezierCurveTo(255.9, 3.3, 255.3, 3.7, 254.6, 3.7);
        e.lineTo(253.6, 3.7);
        e.bezierCurveTo(253, 3.7, 252.4, 3.3, 252.1, 2.7);
        e.bezierCurveTo(251.9, 3.3, 251.3, 3.7, 250.6, 3.7);
        e.lineTo(249.6, 3.7);
        e.bezierCurveTo(249, 3.7, 248.4, 3.3, 248.1, 2.7);
        e.bezierCurveTo(247.9, 3.3, 247.3, 3.7, 246.6, 3.7);
        e.lineTo(245.6, 3.7);
        e.bezierCurveTo(245, 3.7, 244.4, 3.3, 244.1, 2.7);
        e.bezierCurveTo(243.9, 3.3, 243.3, 3.7, 242.6, 3.7);
        e.lineTo(241.6, 3.7);
        e.bezierCurveTo(241, 3.7, 240.4, 3.3, 240.1, 2.7);
        e.bezierCurveTo(239.9, 3.3, 239.3, 3.7, 238.6, 3.7);
        e.lineTo(237.6, 3.7);
        e.bezierCurveTo(237, 3.7, 236.4, 3.3, 236.1, 2.7);
        e.bezierCurveTo(235.9, 3.3, 235.3, 3.7, 234.6, 3.7);
        e.lineTo(233.6, 3.7);
        e.bezierCurveTo(233, 3.7, 232.4, 3.3, 232.1, 2.7);
        e.bezierCurveTo(231.9, 3.3, 231.3, 3.7, 230.6, 3.7);
        e.lineTo(229.6, 3.7);
        e.bezierCurveTo(229, 3.7, 228.4, 3.3, 228.1, 2.7);
        e.bezierCurveTo(227.9, 3.3, 227.3, 3.7, 226.6, 3.7);
        e.lineTo(225.6, 3.7);
        e.bezierCurveTo(225, 3.7, 224.4, 3.3, 224.1, 2.7);
        e.bezierCurveTo(223.9, 3.3, 223.3, 3.7, 222.6, 3.7);
        e.lineTo(221.6, 3.7);
        e.bezierCurveTo(221, 3.7, 220.4, 3.3, 220.1, 2.7);
        e.bezierCurveTo(219.9, 3.3, 219.3, 3.7, 218.6, 3.7);
        e.lineTo(217.6, 3.7);
        e.bezierCurveTo(217, 3.7, 216.4, 3.3, 216.1, 2.7);
        e.bezierCurveTo(215.9, 3.3, 215.3, 3.7, 214.6, 3.7);
        e.lineTo(213.6, 3.7);
        e.bezierCurveTo(213, 3.7, 212.4, 3.3, 212.1, 2.7);
        e.bezierCurveTo(211.9, 3.3, 211.3, 3.7, 210.6, 3.7);
        e.lineTo(209.6, 3.7);
        e.bezierCurveTo(209, 3.7, 208.4, 3.3, 208.1, 2.7);
        e.bezierCurveTo(207.9, 3.3, 207.3, 3.7, 206.6, 3.7);
        e.lineTo(205.6, 3.7);
        e.bezierCurveTo(205, 3.7, 204.4, 3.3, 204.1, 2.7);
        e.bezierCurveTo(203.9, 3.3, 203.3, 3.7, 202.6, 3.7);
        e.lineTo(201.6, 3.7);
        e.bezierCurveTo(201, 3.7, 200.4, 3.3, 200.1, 2.7);
        e.bezierCurveTo(199.9, 3.3, 199.3, 3.7, 198.6, 3.7);
        e.lineTo(197.6, 3.7);
        e.bezierCurveTo(197, 3.7, 196.4, 3.3, 196.1, 2.7);
        e.bezierCurveTo(195.9, 3.3, 195.3, 3.7, 194.6, 3.7);
        e.lineTo(193.6, 3.7);
        e.bezierCurveTo(193, 3.7, 192.4, 3.3, 192.1, 2.7);
        e.bezierCurveTo(191.9, 3.3, 191.3, 3.7, 190.6, 3.7);
        e.lineTo(189.6, 3.7);
        e.bezierCurveTo(189, 3.7, 188.4, 3.3, 188.1, 2.7);
        e.bezierCurveTo(187.9, 3.3, 187.3, 3.7, 186.6, 3.7);
        e.lineTo(185.6, 3.7);
        e.bezierCurveTo(185, 3.7, 184.4, 3.3, 184.1, 2.7);
        e.bezierCurveTo(183.9, 3.3, 183.3, 3.7, 182.6, 3.7);
        e.lineTo(181.6, 3.7);
        e.bezierCurveTo(181, 3.7, 180.4, 3.3, 180.1, 2.7);
        e.bezierCurveTo(179.9, 3.3, 179.3, 3.7, 178.6, 3.7);
        e.lineTo(177.6, 3.7);
        e.bezierCurveTo(177, 3.7, 176.4, 3.3, 176.1, 2.7);
        e.bezierCurveTo(175.9, 3.3, 175.3, 3.7, 174.6, 3.7);
        e.lineTo(173.6, 3.7);
        e.bezierCurveTo(173, 3.7, 172.4, 3.3, 172.1, 2.7);
        e.bezierCurveTo(171.9, 3.3, 171.3, 3.7, 170.6, 3.7);
        e.lineTo(169.6, 3.7);
        e.bezierCurveTo(169, 3.7, 168.4, 3.3, 168.1, 2.7);
        e.bezierCurveTo(167.9, 3.3, 167.3, 3.7, 166.6, 3.7);
        e.lineTo(165.6, 3.7);
        e.bezierCurveTo(165, 3.7, 164.4, 3.3, 164.1, 2.7);
        e.bezierCurveTo(163.9, 3.3, 163.3, 3.7, 162.6, 3.7);
        e.lineTo(161.6, 3.7);
        e.bezierCurveTo(161, 3.7, 160.4, 3.3, 160.1, 2.7);
        e.bezierCurveTo(159.9, 3.3, 159.3, 3.7, 158.6, 3.7);
        e.lineTo(157.6, 3.7);
        e.bezierCurveTo(157, 3.7, 156.4, 3.3, 156.1, 2.7);
        e.bezierCurveTo(155.9, 3.3, 155.3, 3.7, 154.6, 3.7);
        e.lineTo(153.6, 3.7);
        e.bezierCurveTo(153, 3.7, 152.4, 3.3, 152.1, 2.7);
        e.bezierCurveTo(151.9, 3.3, 151.3, 3.7, 150.6, 3.7);
        e.lineTo(149.6, 3.7);
        e.bezierCurveTo(149, 3.7, 148.4, 3.3, 148.1, 2.7);
        e.bezierCurveTo(147.9, 3.3, 147.3, 3.7, 146.6, 3.7);
        e.lineTo(145.6, 3.7);
        e.bezierCurveTo(145, 3.7, 144.4, 3.3, 144.1, 2.7);
        e.bezierCurveTo(143.9, 3.3, 143.3, 3.7, 142.6, 3.7);
        e.lineTo(141.6, 3.7);
        e.bezierCurveTo(141, 3.7, 140.4, 3.3, 140.1, 2.7);
        e.bezierCurveTo(139.9, 3.3, 139.3, 3.7, 138.6, 3.7);
        e.lineTo(137.6, 3.7);
        e.bezierCurveTo(137, 3.7, 136.4, 3.3, 136.1, 2.7);
        e.bezierCurveTo(135.9, 3.3, 135.3, 3.7, 134.6, 3.7);
        e.lineTo(133.6, 3.7);
        e.bezierCurveTo(133, 3.7, 132.4, 3.3, 132.1, 2.7);
        e.bezierCurveTo(131.9, 3.3, 131.3, 3.7, 130.6, 3.7);
        e.lineTo(129.6, 3.7);
        e.bezierCurveTo(129, 3.7, 128.4, 3.3, 128.1, 2.7);
        e.bezierCurveTo(127.9, 3.3, 127.3, 3.7, 126.6, 3.7);
        e.lineTo(125.6, 3.7);
        e.bezierCurveTo(125, 3.7, 124.4, 3.3, 124.1, 2.7);
        e.bezierCurveTo(123.9, 3.3, 123.3, 3.7, 122.6, 3.7);
        e.lineTo(121.6, 3.7);
        e.bezierCurveTo(121, 3.7, 120.4, 3.3, 120.1, 2.7);
        e.bezierCurveTo(119.9, 3.3, 119.3, 3.7, 118.6, 3.7);
        e.lineTo(117.6, 3.7);
        e.bezierCurveTo(117, 3.7, 116.4, 3.3, 116.1, 2.7);
        e.bezierCurveTo(115.9, 3.3, 115.3, 3.7, 114.6, 3.7);
        e.lineTo(113.6, 3.7);
        e.bezierCurveTo(113, 3.7, 112.4, 3.3, 112.1, 2.7);
        e.bezierCurveTo(111.9, 3.3, 111.3, 3.7, 110.6, 3.7);
        e.lineTo(109.6, 3.7);
        e.bezierCurveTo(109, 3.7, 108.4, 3.3, 108.1, 2.7);
        e.bezierCurveTo(107.9, 3.3, 107.3, 3.7, 106.6, 3.7);
        e.lineTo(105.6, 3.7);
        e.bezierCurveTo(105, 3.7, 104.4, 3.3, 104.1, 2.7);
        e.bezierCurveTo(103.9, 3.3, 103.3, 3.7, 102.6, 3.7);
        e.lineTo(101.6, 3.7);
        e.bezierCurveTo(101, 3.7, 100.4, 3.3, 100.1, 2.7);
        e.bezierCurveTo(99.9, 3.3, 99.3, 3.7, 98.6, 3.7);
        e.lineTo(97.6, 3.7);
        e.bezierCurveTo(97, 3.7, 96.4, 3.3, 96.1, 2.7);
        e.bezierCurveTo(95.9, 3.3, 95.3, 3.7, 94.6, 3.7);
        e.lineTo(93.6, 3.7);
        e.bezierCurveTo(93, 3.7, 92.4, 3.3, 92.1, 2.7);
        e.bezierCurveTo(91.9, 3.3, 91.3, 3.7, 90.6, 3.7);
        e.lineTo(89.6, 3.7);
        e.bezierCurveTo(89, 3.7, 88.4, 3.3, 88.1, 2.7);
        e.bezierCurveTo(87.9, 3.3, 87.3, 3.7, 86.6, 3.7);
        e.lineTo(85.6, 3.7);
        e.bezierCurveTo(85, 3.7, 84.4, 3.3, 84.1, 2.7);
        e.bezierCurveTo(83.9, 3.3, 83.3, 3.7, 82.6, 3.7);
        e.lineTo(81.6, 3.7);
        e.bezierCurveTo(81, 3.7, 80.4, 3.3, 80.1, 2.7);
        e.bezierCurveTo(79.9, 3.3, 79.3, 3.7, 78.6, 3.7);
        e.lineTo(77.6, 3.7);
        e.bezierCurveTo(77, 3.7, 76.4, 3.3, 76.1, 2.7);
        e.bezierCurveTo(75.9, 3.3, 75.3, 3.7, 74.6, 3.7);
        e.lineTo(73.6, 3.7);
        e.bezierCurveTo(73, 3.7, 72.4, 3.3, 72.1, 2.7);
        e.bezierCurveTo(71.9, 3.3, 71.3, 3.7, 70.6, 3.7);
        e.lineTo(69.6, 3.7);
        e.bezierCurveTo(69, 3.7, 68.4, 3.3, 68.1, 2.7);
        e.bezierCurveTo(67.9, 3.3, 67.3, 3.7, 66.6, 3.7);
        e.lineTo(65.6, 3.7);
        e.bezierCurveTo(65, 3.7, 64.4, 3.3, 64.1, 2.7);
        e.bezierCurveTo(63.9, 3.3, 63.3, 3.7, 62.6, 3.7);
        e.lineTo(61.6, 3.7);
        e.bezierCurveTo(61, 3.7, 60.4, 3.3, 60.1, 2.7);
        e.bezierCurveTo(59.9, 3.3, 59.3, 3.7, 58.6, 3.7);
        e.lineTo(57.6, 3.7);
        e.bezierCurveTo(57, 3.7, 56.4, 3.3, 56.1, 2.7);
        e.bezierCurveTo(55.9, 3.3, 55.3, 3.7, 54.6, 3.7);
        e.lineTo(53.6, 3.7);
        e.bezierCurveTo(53, 3.7, 52.4, 3.3, 52.1, 2.7);
        e.bezierCurveTo(51.9, 3.3, 51.3, 3.7, 50.6, 3.7);
        e.lineTo(49.6, 3.7);
        e.bezierCurveTo(49, 3.7, 48.4, 3.3, 48.1, 2.7);
        e.bezierCurveTo(47.9, 3.3, 47.3, 3.7, 46.6, 3.7);
        e.lineTo(45.6, 3.7);
        e.bezierCurveTo(45, 3.7, 44.4, 3.3, 44.1, 2.7);
        e.bezierCurveTo(43.9, 3.3, 43.3, 3.7, 42.6, 3.7);
        e.lineTo(41.6, 3.7);
        e.bezierCurveTo(41, 3.7, 40.4, 3.3, 40.1, 2.7);
        e.bezierCurveTo(39.9, 3.3, 39.3, 3.7, 38.6, 3.7);
        e.lineTo(37.6, 3.7);
        e.bezierCurveTo(37, 3.7, 36.4, 3.3, 36.1, 2.7);
        e.bezierCurveTo(35.9, 3.3, 35.3, 3.7, 34.6, 3.7);
        e.lineTo(33.6, 3.7);
        e.bezierCurveTo(33, 3.7, 32.4, 3.3, 32.1, 2.7);
        e.bezierCurveTo(31.9, 3.3, 31.3, 3.7, 30.6, 3.7);
        e.lineTo(29.6, 3.7);
        e.bezierCurveTo(29, 3.7, 28.4, 3.3, 28.1, 2.7);
        e.bezierCurveTo(27.9, 3.3, 27.3, 3.7, 26.6, 3.7);
        e.lineTo(25.6, 3.7);
        e.bezierCurveTo(25, 3.7, 24.4, 3.3, 24.1, 2.7);
        e.bezierCurveTo(23.9, 3.3, 23.3, 3.7, 22.6, 3.7);
        e.lineTo(21.6, 3.7);
        e.bezierCurveTo(21, 3.7, 20.4, 3.3, 20.1, 2.7);
        e.bezierCurveTo(19.9, 3.3, 19.3, 3.7, 18.6, 3.7);
        e.lineTo(17.6, 3.7);
        e.bezierCurveTo(17, 3.7, 16.4, 3.3, 16.1, 2.7);
        e.bezierCurveTo(15.9, 3.3, 15.3, 3.7, 14.6, 3.7);
        e.lineTo(13.6, 3.7);
        e.bezierCurveTo(13, 3.7, 12.4, 3.3, 12.1, 2.7);
        e.bezierCurveTo(11.9, 3.3, 11.3, 3.7, 10.6, 3.7);
        e.lineTo(9.6, 3.7);
        e.bezierCurveTo(9, 3.7, 8.4, 3.3, 8.1, 2.7);
        e.bezierCurveTo(7.9, 3.3, 7.3, 3.7, 6.6, 3.7);
        e.lineTo(5.6, 3.7);
        e.bezierCurveTo(5, 3.7, 4.4, 3.3, 4.1, 2.7);
        e.bezierCurveTo(3.9, 3.3, 3.3, 3.7, 2.6, 3.7);
        e.lineTo(1.6, 3.7);
        e.bezierCurveTo(.7, 3.7, 0, 2.9, 0, 2);
        e.bezierCurveTo(0, 1.1, .7, .4, 1.6, .4);
        e.lineTo(2.6, .4);
        e.bezierCurveTo(3.3, .4, 3.9, .8, 4.1, 1.4);
        e.bezierCurveTo(4.4, .8, 5, .4, 5.6, .4);
        e.lineTo(6.6, .4);
        e.bezierCurveTo(7.3, .4, 7.9, .8, 8.1, 1.4);
        e.bezierCurveTo(8.4, .8, 9, .4, 9.6, .4);
        e.lineTo(10.6, .4);
        e.bezierCurveTo(11.3, .4, 11.9, .8, 12.1, 1.4);
        e.bezierCurveTo(12.4, .8, 13, .4, 13.6, .4);
        e.lineTo(14.6, .4);
        e.bezierCurveTo(15.3, .4, 15.9, .8, 16.1, 1.4);
        e.bezierCurveTo(16.4, .8, 17, .4, 17.6, .4);
        e.lineTo(18.6, .4);
        e.bezierCurveTo(19.3, .4, 19.9, .8, 20.1, 1.4);
        e.bezierCurveTo(20.4, .8, 21, .4, 21.6, .4);
        e.lineTo(22.6, .4);
        e.bezierCurveTo(23.3, .4, 23.9, .8, 24.1, 1.4);
        e.bezierCurveTo(24.4, .8, 25, .4, 25.6, .4);
        e.lineTo(26.6, .4);
        e.bezierCurveTo(27.3, .4, 27.9, .8, 28.1, 1.4);
        e.bezierCurveTo(28.4, .8, 29, .4, 29.6, .4);
        e.lineTo(30.6, .4);
        e.bezierCurveTo(31.3, .4, 31.9, .8, 32.1, 1.4);
        e.bezierCurveTo(32.4, .8, 33, .4, 33.6, .4);
        e.lineTo(34.6, .4);
        e.bezierCurveTo(35.3, .4, 35.9, .8, 36.1, 1.4);
        e.bezierCurveTo(36.4, .8, 37, .4, 37.6, .4);
        e.lineTo(38.6, .4);
        e.bezierCurveTo(39.3, .4, 39.9, .8, 40.1, 1.4);
        e.bezierCurveTo(40.4, .8, 41, .4, 41.6, .4);
        e.lineTo(42.6, .4);
        e.bezierCurveTo(43.3, .4, 43.9, .8, 44.1, 1.4);
        e.bezierCurveTo(44.4, .8, 45, .4, 45.6, .4);
        e.lineTo(46.6, .4);
        e.bezierCurveTo(47.3, .4, 47.9, .8, 48.1, 1.4);
        e.bezierCurveTo(48.4, .8, 49, .4, 49.6, .4);
        e.lineTo(50.6, .4);
        e.bezierCurveTo(51.3, .4, 51.9, .8, 52.1, 1.4);
        e.bezierCurveTo(52.4, .8, 53, .4, 53.6, .4);
        e.lineTo(54.6, .4);
        e.bezierCurveTo(55.3, .4, 55.9, .8, 56.1, 1.4);
        e.bezierCurveTo(56.4, .8, 57, .4, 57.6, .4);
        e.lineTo(58.6, .4);
        e.bezierCurveTo(59.3, .4, 59.9, .8, 60.1, 1.4);
        e.bezierCurveTo(60.4, .8, 61, .4, 61.6, .4);
        e.lineTo(62.6, .4);
        e.bezierCurveTo(63.3, .4, 63.9, .8, 64.1, 1.4);
        e.bezierCurveTo(64.4, .8, 65, .4, 65.6, .4);
        e.lineTo(66.6, .4);
        e.bezierCurveTo(67.3, .4, 67.9, .8, 68.1, 1.4);
        e.bezierCurveTo(68.4, .8, 69, .4, 69.6, .4);
        e.lineTo(70.6, .4);
        e.bezierCurveTo(71.3, .4, 71.9, .8, 72.1, 1.4);
        e.bezierCurveTo(72.4, .8, 73, .4, 73.6, .4);
        e.lineTo(74.6, .4);
        e.bezierCurveTo(75.3, .4, 75.9, .8, 76.1, 1.4);
        e.bezierCurveTo(76.4, .8, 77, .4, 77.6, .4);
        e.lineTo(78.6, .4);
        e.bezierCurveTo(79.3, .4, 79.9, .8, 80.1, 1.4);
        e.bezierCurveTo(80.4, .8, 81, .4, 81.6, .4);
        e.lineTo(82.6, .4);
        e.bezierCurveTo(83.3, .4, 83.9, .8, 84.1, 1.4);
        e.bezierCurveTo(84.4, .8, 85, .4, 85.6, .4);
        e.lineTo(86.6, .4);
        e.bezierCurveTo(87.3, .4, 87.9, .8, 88.1, 1.4);
        e.bezierCurveTo(88.4, .8, 89, .4, 89.6, .4);
        e.lineTo(90.6, .4);
        e.bezierCurveTo(91.3, .4, 91.9, .8, 92.1, 1.4);
        e.bezierCurveTo(92.4, .8, 93, .4, 93.6, .4);
        e.lineTo(94.6, .4);
        e.bezierCurveTo(95.3, .4, 95.9, .8, 96.1, 1.4);
        e.bezierCurveTo(96.4, .8, 97, .4, 97.6, .4);
        e.lineTo(98.6, .4);
        e.bezierCurveTo(99.3, .4, 99.9, .8, 100.1, 1.4);
        e.bezierCurveTo(100.4, .8, 101, .4, 101.6, .4);
        e.lineTo(102.6, .4);
        e.bezierCurveTo(103.3, .4, 103.9, .8, 104.1, 1.4);
        e.bezierCurveTo(104.4, .8, 105, .4, 105.6, .4);
        e.lineTo(106.6, .4);
        e.bezierCurveTo(107.3, .4, 107.9, .8, 108.1, 1.4);
        e.bezierCurveTo(108.4, .8, 109, .4, 109.6, .4);
        e.lineTo(110.6, .4);
        e.bezierCurveTo(111.3, .4, 111.9, .8, 112.1, 1.4);
        e.bezierCurveTo(112.4, .8, 113, .4, 113.6, .4);
        e.lineTo(114.6, .4);
        e.bezierCurveTo(115.3, .4, 115.9, .8, 116.1, 1.4);
        e.bezierCurveTo(116.4, .8, 117, .4, 117.6, .4);
        e.lineTo(118.6, .4);
        e.bezierCurveTo(119.3, .4, 119.9, .8, 120.1, 1.4);
        e.bezierCurveTo(120.4, .8, 121, .4, 121.6, .4);
        e.lineTo(122.6, .4);
        e.bezierCurveTo(123.3, .4, 123.9, .8, 124.1, 1.4);
        e.bezierCurveTo(124.4, .8, 125, .4, 125.6, .4);
        e.lineTo(126.6, .4);
        e.bezierCurveTo(127.3, .4, 127.9, .8, 128.1, 1.4);
        e.bezierCurveTo(128.4, .8, 129, .4, 129.6, .4);
        e.lineTo(130.6, .4);
        e.bezierCurveTo(131.3, .4, 131.9, .8, 132.1, 1.4);
        e.bezierCurveTo(132.4, .8, 133, .4, 133.6, .4);
        e.lineTo(134.6, .4);
        e.bezierCurveTo(135.3, .4, 135.9, .8, 136.1, 1.4);
        e.bezierCurveTo(136.4, .8, 137, .4, 137.6, .4);
        e.lineTo(138.6, .4);
        e.bezierCurveTo(139.3, .4, 139.9, .8, 140.1, 1.4);
        e.bezierCurveTo(140.4, .8, 141, .4, 141.6, .4);
        e.lineTo(142.6, .4);
        e.bezierCurveTo(143.3, .4, 143.9, .8, 144.1, 1.4);
        e.bezierCurveTo(144.4, .8, 145, .4, 145.6, .4);
        e.lineTo(146.6, .4);
        e.bezierCurveTo(147.3, .4, 147.9, .8, 148.1, 1.4);
        e.bezierCurveTo(148.4, .8, 149, .4, 149.6, .4);
        e.lineTo(150.6, .4);
        e.bezierCurveTo(151.3, .4, 151.9, .8, 152.1, 1.4);
        e.bezierCurveTo(152.4, .8, 153, .4, 153.6, .4);
        e.lineTo(154.6, .4);
        e.bezierCurveTo(155.3, .4, 155.9, .8, 156.1, 1.4);
        e.bezierCurveTo(156.4, .8, 157, .4, 157.6, .4);
        e.lineTo(158.6, .4);
        e.bezierCurveTo(159.3, .4, 159.9, .8, 160.1, 1.4);
        e.bezierCurveTo(160.4, .8, 161, .4, 161.6, .4);
        e.lineTo(162.6, .4);
        e.bezierCurveTo(163.3, .4, 163.9, .8, 164.1, 1.4);
        e.bezierCurveTo(164.4, .8, 165, .4, 165.6, .4);
        e.lineTo(166.6, .4);
        e.bezierCurveTo(167.3, .4, 167.9, .8, 168.1, 1.4);
        e.bezierCurveTo(168.4, .8, 169, .4, 169.6, .4);
        e.lineTo(170.6, .4);
        e.bezierCurveTo(171.3, .4, 171.9, .8, 172.1, 1.4);
        e.bezierCurveTo(172.4, .8, 173, .4, 173.6, .4);
        e.lineTo(174.6, .4);
        e.bezierCurveTo(175.3, .4, 175.9, .8, 176.1, 1.4);
        e.bezierCurveTo(176.4, .8, 177, .4, 177.6, .4);
        e.lineTo(178.6, .4);
        e.bezierCurveTo(179.3, .4, 179.9, .8, 180.1, 1.4);
        e.bezierCurveTo(180.4, .8, 181, .4, 181.6, .4);
        e.lineTo(182.6, .4);
        e.bezierCurveTo(183.3, .4, 183.9, .8, 184.1, 1.4);
        e.bezierCurveTo(184.4, .8, 185, .4, 185.6, .4);
        e.lineTo(186.6, .4);
        e.bezierCurveTo(187.3, .4, 187.9, .8, 188.1, 1.4);
        e.bezierCurveTo(188.4, .8, 189, .4, 189.6, .4);
        e.lineTo(190.6, .4);
        e.bezierCurveTo(191.3, .4, 191.9, .8, 192.1, 1.4);
        e.bezierCurveTo(192.4, .8, 193, .4, 193.6, .4);
        e.lineTo(194.6, .4);
        e.bezierCurveTo(195.3, .4, 195.9, .8, 196.1, 1.4);
        e.bezierCurveTo(196.4, .8, 197, .4, 197.6, .4);
        e.lineTo(198.6, .4);
        e.bezierCurveTo(199.3, .4, 199.9, .8, 200.1, 1.4);
        e.bezierCurveTo(200.4, .8, 201, .4, 201.6, .4);
        e.lineTo(202.6, .4);
        e.bezierCurveTo(203.3, .4, 203.9, .8, 204.1, 1.4);
        e.bezierCurveTo(204.4, .8, 205, .4, 205.6, .4);
        e.lineTo(206.6, .4);
        e.bezierCurveTo(207.3, .4, 207.9, .8, 208.1, 1.4);
        e.bezierCurveTo(208.4, .8, 209, .4, 209.6, .4);
        e.lineTo(210.6, .4);
        e.bezierCurveTo(211.3, .4, 211.9, .8, 212.1, 1.4);
        e.bezierCurveTo(212.4, .8, 213, .4, 213.6, .4);
        e.lineTo(214.6, .4);
        e.bezierCurveTo(215.3, .4, 215.9, .8, 216.1, 1.4);
        e.bezierCurveTo(216.4, .8, 217, .4, 217.6, .4);
        e.lineTo(218.6, .4);
        e.bezierCurveTo(219.3, .4, 219.9, .8, 220.1, 1.4);
        e.bezierCurveTo(220.4, .8, 221, .4, 221.6, .4);
        e.lineTo(222.6, .4);
        e.bezierCurveTo(223.3, .4, 223.9, .8, 224.1, 1.4);
        e.bezierCurveTo(224.4, .8, 225, .4, 225.6, .4);
        e.lineTo(226.6, .4);
        e.bezierCurveTo(227.3, .4, 227.9, .8, 228.1, 1.4);
        e.bezierCurveTo(228.4, .8, 229, .4, 229.6, .4);
        e.lineTo(230.6, .4);
        e.bezierCurveTo(231.3, .4, 231.9, .8, 232.1, 1.4);
        e.bezierCurveTo(232.4, .8, 233, .4, 233.6, .4);
        e.lineTo(234.6, .4);
        e.bezierCurveTo(235.3, .4, 235.9, .8, 236.1, 1.4);
        e.bezierCurveTo(236.4, .8, 237, .4, 237.6, .4);
        e.lineTo(238.6, .4);
        e.bezierCurveTo(239.3, .4, 239.9, .8, 240.1, 1.4);
        e.bezierCurveTo(240.4, .8, 241, .4, 241.6, .4);
        e.lineTo(242.6, .4);
        e.bezierCurveTo(243.3, .4, 243.9, .8, 244.1, 1.4);
        e.bezierCurveTo(244.4, .8, 245, .4, 245.6, .4);
        e.lineTo(246.6, .4);
        e.bezierCurveTo(247.3, .4, 247.9, .8, 248.1, 1.4);
        e.bezierCurveTo(248.4, .8, 249, .4, 249.6, .4);
        e.lineTo(250.6, .4);
        e.bezierCurveTo(251.3, .4, 251.9, .8, 252.1, 1.4);
        e.bezierCurveTo(252.4, .8, 253, .4, 253.6, .4);
        e.lineTo(254.6, .4);
        e.bezierCurveTo(255.3, .4, 255.9, .8, 256.1, 1.4);
        e.bezierCurveTo(256.4, .8, 257, .4, 257.6, .4);
        e.lineTo(258.6, .4);
        e.bezierCurveTo(259.3, .4, 259.9, .8, 260.1, 1.4);
        e.bezierCurveTo(260.4, .8, 261, .4, 261.6, .4);
        e.lineTo(262.6, .4);
        e.bezierCurveTo(263.3, .4, 263.9, .8, 264.1, 1.4);
        e.bezierCurveTo(264.4, .8, 265, .4, 265.6, .4);
        e.lineTo(266.6, .4);
        e.bezierCurveTo(267.3, .4, 267.9, .8, 268.1, 1.4);
        e.bezierCurveTo(268.4, .8, 269, .4, 269.6, .4);
        e.lineTo(270.6, .4);
        e.bezierCurveTo(271.3, .4, 271.9, .8, 272.1, 1.4);
        e.bezierCurveTo(272.4, .8, 273, .4, 273.6, .4);
        e.lineTo(274.6, .4);
        e.bezierCurveTo(275.3, .4, 275.9, .8, 276.1, 1.4);
        e.bezierCurveTo(276.4, .8, 277, .4, 277.6, .4);
        e.lineTo(278.6, .4);
        e.bezierCurveTo(279.3, .4, 279.9, .8, 280.1, 1.4);
        e.bezierCurveTo(280.4, .8, 281, .4, 281.6, .4);
        e.lineTo(282.6, .4);
        e.bezierCurveTo(283.3, .4, 283.9, .8, 284.1, 1.4);
        e.bezierCurveTo(284.4, .8, 285, .4, 285.6, .4);
        e.lineTo(286.6, .4);
        e.bezierCurveTo(287.3, .4, 287.9, .8, 288.1, 1.4);
        e.bezierCurveTo(288.4, .8, 289, .4, 289.6, .4);
        e.lineTo(290.1, .4);
        e.bezierCurveTo(291, .4, 291.7, 1.1, 291.7, 2);
        e.bezierCurveTo(291.7, 2.9, 291, 3.7, 290.1, 3.7);
        e.closePath();
        this.graphics = e
    };
    a.Separator = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.LIGHT_PURPLE.red;
        var b = StyleManager.LIGHT_PURPLE.green;
        var c = StyleManager.LIGHT_PURPLE.blue;
        var d = StyleManager.LIGHT_PURPLE.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(1, .8);
        e.lineTo(7.5, .8);
        e.lineTo(10.5, 27);
        e.bezierCurveTo(10.7, 28.3, 10.8, 29.5, 10.8, 30.6);
        e.bezierCurveTo(10.9, 31.7, 11, 32.8, 11, 33.9);
        e.lineTo(11, 34.7);
        e.bezierCurveTo(11, 34.2, 11, 33.4, 11.1, 32.3);
        e.bezierCurveTo(11.3, 28.8, 11.4, 26.7, 11.5, 26.1);
        e.lineTo(14.9, .8);
        e.lineTo(20.7, .8);
        e.lineTo(24.3, 26.9);
        e.bezierCurveTo(24.5, 27.9, 24.6, 29.1, 24.7, 30.4);
        e.bezierCurveTo(24.7, 31.7, 24.8, 33.2, 24.8, 34.7);
        e.bezierCurveTo(24.8, 34.5, 24.8, 34, 24.8, 33.5);
        e.bezierCurveTo(25, 29.8, 25.2, 27.3, 25.3, 26.1);
        e.lineTo(28.1, .8);
        e.lineTo(34.6, .8);
        e.lineTo(27.7, 44.9);
        e.lineTo(22, 44.9);
        e.lineTo(18.3, 19.3);
        e.bezierCurveTo(18.1, 18.3, 18, 17.2, 17.9, 15.8);
        e.bezierCurveTo(17.9, 14.5, 17.8, 13, 17.8, 11.5);
        e.bezierCurveTo(17.7, 13.9, 17.6, 15.8, 17.5, 17.3);
        e.bezierCurveTo(17.4, 18.7, 17.3, 19.7, 17.3, 20.2);
        e.lineTo(13.6, 44.9);
        e.lineTo(8, 44.9);
        e.lineTo(1, .8);
        e.closePath();
        e.moveTo(35.4, 44.9);
        e.lineTo(42.6, .8);
        e.lineTo(51.5, .8);
        e.lineTo(58.8, 44.9);
        e.lineTo(51.8, 44.9);
        e.lineTo(50.4, 35.4);
        e.lineTo(43.5, 35.4);
        e.lineTo(42.1, 44.9);
        e.lineTo(35.4, 44.9);
        e.closePath();
        e.moveTo(44.4, 29.1);
        e.lineTo(49.6, 29.1);
        e.lineTo(47.3, 10.7);
        e.lineTo(46.8, 10.7);
        e.lineTo(44.4, 29.1);
        e.closePath();
        e.moveTo(60.6, 33.7);
        e.lineTo(67.1, 32.8);
        e.bezierCurveTo(67.2, 35, 67.6, 36.7, 68.4, 37.7);
        e.bezierCurveTo(69.1, 38.8, 70.2, 39.3, 71.6, 39.3);
        e.bezierCurveTo(72.9, 39.3, 73.9, 38.9, 74.6, 38.1);
        e.bezierCurveTo(75.4, 37.4, 75.8, 36.3, 75.8, 35);
        e.bezierCurveTo(75.8, 32.7, 74, 29.8, 70.3, 26.1);
        e.bezierCurveTo(70, 25.9, 69.8, 25.6, 69.7, 25.5);
        e.bezierCurveTo(66.1, 21.9, 63.8, 19.2, 62.8, 17.2);
        e.bezierCurveTo(61.7, 15.3, 61.2, 13.3, 61.2, 11.1);
        e.bezierCurveTo(61.2, 8, 62.3, 5.4, 64.3, 3.3);
        e.bezierCurveTo(66.3, 1.1, 68.8, .1, 71.8, .1);
        e.bezierCurveTo(74.7, .1, 77, 1, 78.8, 3);
        e.bezierCurveTo(80.7, 5, 81.7, 7.6, 82, 11);
        e.lineTo(75.3, 11.9);
        e.bezierCurveTo(75.2, 10, 74.9, 8.5, 74.3, 7.7);
        e.bezierCurveTo(73.7, 6.8, 72.8, 6.4, 71.6, 6.4);
        e.bezierCurveTo(70.5, 6.4, 69.6, 6.8, 69, 7.5);
        e.bezierCurveTo(68.3, 8.3, 68, 9.3, 68, 10.5);
        e.bezierCurveTo(68, 13.1, 70.1, 16.4, 74.4, 20.5);
        e.bezierCurveTo(74.6, 20.7, 74.7, 20.8, 74.8, 20.9);
        e.bezierCurveTo(77.9, 24, 80, 26.5, 81, 28.4);
        e.bezierCurveTo(81.9, 30.4, 82.4, 32.5, 82.4, 34.9);
        e.bezierCurveTo(82.4, 38.1, 81.4, 40.8, 79.4, 42.8);
        e.bezierCurveTo(77.4, 44.9, 74.9, 45.9, 71.9, 45.9);
        e.bezierCurveTo(68.5, 45.9, 65.8, 44.9, 63.8, 42.7);
        e.bezierCurveTo(61.8, 40.6, 60.8, 37.6, 60.6, 33.7);
        e.closePath();
        this.graphics = e
    };
    a.Was = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.AQUA.red;
        var b = StyleManager.AQUA.green;
        var c = StyleManager.AQUA.blue;
        var d = StyleManager.AQUA.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(0, 22.9);
        e.lineTo(0, 17.6);
        e.bezierCurveTo(0, 13, .4, 10, 1.1, 8.7);
        e.bezierCurveTo(1.9, 7.4, 3.5, 5.6, 5.9, 3.4);
        e.bezierCurveTo(8.4, 1.1, 10.2, 0, 11.4, 0);
        e.bezierCurveTo(13.4, 0, 15.8, 1.2, 18.4, 3.6);
        e.bezierCurveTo(21.1, 5.9, 22.8, 8.5, 23.5, 11.4);
        e.lineTo(17.3, 15.7);
        e.bezierCurveTo(16.7, 13.7, 15.7, 11.8, 14.4, 10.1);
        e.bezierCurveTo(13.1, 8.4, 12.2, 7.6, 11.7, 7.6);
        e.bezierCurveTo(10.7, 7.6, 9.7, 8.5, 8.5, 10.3);
        e.bezierCurveTo(8, 11, 7.7, 13.5, 7.7, 17.6);
        e.lineTo(7.7, 22.9);
        e.bezierCurveTo(7.7, 27.2, 8, 29.7, 8.5, 30.2);
        e.bezierCurveTo(9.7, 32.1, 10.7, 33, 11.7, 33);
        e.bezierCurveTo(12.2, 33, 13.1, 32.3, 14.4, 30.8);
        e.bezierCurveTo(15.7, 29.3, 16.7, 27.7, 17.3, 25.9);
        e.lineTo(23.5, 30.2);
        e.bezierCurveTo(22.8, 32.8, 21.1, 35.2, 18.4, 37.3);
        e.bezierCurveTo(15.8, 39.5, 13.4, 40.6, 11.4, 40.6);
        e.bezierCurveTo(10.2, 40.6, 8.4, 39.4, 5.9, 37.2);
        e.bezierCurveTo(3.5, 35, 1.9, 33.2, 1.1, 31.9);
        e.bezierCurveTo(.4, 30.6, 0, 27.6, 0, 22.9);
        e.closePath();
        e.moveTo(64.6, 36.9);
        e.bezierCurveTo(61.9, 39.3, 59.9, 40.6, 58.6, 40.6);
        e.bezierCurveTo(57.2, 40.6, 55.2, 39.3, 52.6, 36.9);
        e.bezierCurveTo(49.9, 34.4, 48.2, 32.5, 47.6, 30.9);
        e.bezierCurveTo(47.2, 29.9, 47, 27.5, 47, 23.6);
        e.lineTo(47, 17);
        e.bezierCurveTo(47, 13.1, 47.2, 10.6, 47.6, 9.6);
        e.bezierCurveTo(48.2, 8.1, 49.9, 6.1, 52.6, 3.7);
        e.bezierCurveTo(55.2, 1.2, 57.2, 0, 58.6, 0);
        e.bezierCurveTo(59.9, 0, 61.9, 1.2, 64.6, 3.7);
        e.bezierCurveTo(67.3, 6.1, 68.9, 8.1, 69.6, 9.6);
        e.bezierCurveTo(70, 10.6, 70.2, 13.1, 70.2, 17);
        e.lineTo(70.2, 23.6);
        e.bezierCurveTo(70.2, 27.5, 70, 29.9, 69.6, 30.9);
        e.bezierCurveTo(68.9, 32.5, 67.3, 34.4, 64.6, 36.9);
        e.closePath();
        e.moveTo(56.7, 31.4);
        e.bezierCurveTo(57.4, 32.2, 58.1, 32.5, 58.6, 32.5);
        e.bezierCurveTo(59.1, 32.5, 59.7, 32.2, 60.5, 31.4);
        e.bezierCurveTo(61.2, 30.6, 61.7, 29.9, 62, 29.2);
        e.bezierCurveTo(62.3, 28.5, 62.5, 26.6, 62.5, 23.6);
        e.lineTo(62.5, 17);
        e.bezierCurveTo(62.5, 13.9, 62.3, 12, 62, 11.3);
        e.bezierCurveTo(61.7, 10.7, 61.2, 9.9, 60.5, 9.2);
        e.bezierCurveTo(59.7, 8.4, 59.1, 8, 58.6, 8);
        e.bezierCurveTo(58.1, 8, 57.4, 8.4, 56.7, 9.2);
        e.bezierCurveTo(56, 9.9, 55.5, 10.7, 55.2, 11.3);
        e.bezierCurveTo(54.9, 12, 54.7, 13.9, 54.7, 17);
        e.lineTo(54.7, 23.6);
        e.bezierCurveTo(54.7, 26.6, 54.9, 28.5, 55.2, 29.2);
        e.bezierCurveTo(55.5, 29.9, 56, 30.6, 56.7, 31.4);
        e.closePath();
        e.moveTo(109.1, 39.9);
        e.lineTo(109.1, 11.4);
        e.bezierCurveTo(109.1, 10.7, 109, 10.2, 108.8, 9.8);
        e.bezierCurveTo(108.5, 9.3, 108.1, 8.9, 107.5, 8.3);
        e.bezierCurveTo(107, 7.7, 106.5, 7.5, 106.2, 7.5);
        e.bezierCurveTo(105.5, 7.5, 104.5, 8.2, 103.2, 9.7);
        e.bezierCurveTo(103.3, 10.6, 103.4, 11.6, 103.4, 12.7);
        e.lineTo(103.4, 39.9);
        e.lineTo(95.7, 39.9);
        e.lineTo(95.7, 15.9);
        e.bezierCurveTo(95.7, 12.7, 95.5, 10.5, 95, 9.2);
        e.bezierCurveTo(94.6, 8, 93.7, 6.5, 92.3, 4.7);
        e.lineTo(99, 0);
        e.bezierCurveTo(100.2, .9, 101.1, 1.9, 101.6, 3.1);
        e.bezierCurveTo(104.3, 1, 106.2, 0, 107.3, 0);
        e.bezierCurveTo(108.4, 0, 110.6, 1.4, 113.7, 4.3);
        e.bezierCurveTo(116.8, 1.4, 118.9, 0, 120.2, 0);
        e.bezierCurveTo(121.1, 0, 122.7, 1, 125, 2.9);
        e.bezierCurveTo(127.3, 4.9, 128.7, 6.3, 129.2, 7.1);
        e.bezierCurveTo(129.8, 7.9, 130.1, 8.9, 130.1, 10.3);
        e.lineTo(130.1, 39.9);
        e.lineTo(122.3, 39.9);
        e.lineTo(122.3, 11.4);
        e.bezierCurveTo(122.3, 10.7, 122.2, 10.1, 121.9, 9.7);
        e.bezierCurveTo(121.7, 9.3, 121.2, 8.9, 120.6, 8.3);
        e.bezierCurveTo(120, 7.7, 119.5, 7.5, 119, 7.5);
        e.bezierCurveTo(118.5, 7.5, 117.8, 8.1, 116.8, 9.3);
        e.bezierCurveTo(116.8, 9.5, 116.8, 9.8, 116.8, 10.3);
        e.lineTo(116.8, 39.9);
        e.lineTo(109.1, 39.9);
        e.closePath();
        e.moveTo(163.6, 16);
        e.lineTo(173.6, 16);
        e.lineTo(173.6, 22.8);
        e.lineTo(163.6, 22.8);
        e.lineTo(163.6, 33.1);
        e.lineTo(176.9, 33.1);
        e.lineTo(176.9, 39.9);
        e.lineTo(155.8, 39.9);
        e.lineTo(155.8, 5.4);
        e.lineTo(163.6, 0);
        e.lineTo(176.1, 0);
        e.lineTo(176.1, 6.8);
        e.lineTo(165.6, 6.8);
        e.lineTo(163.6, 8.3);
        e.lineTo(163.6, 16);
        e.closePath();
        e.moveTo(222.5, 24.1);
        e.bezierCurveTo(222.9, 24.8, 223.1, 26.1, 223.1, 28.1);
        e.bezierCurveTo(223.1, 30.1, 222.7, 31.8, 221.9, 33.2);
        e.bezierCurveTo(221.1, 34.2, 219.5, 35.7, 217.1, 37.7);
        e.bezierCurveTo(214.7, 39.6, 212.9, 40.6, 211.7, 40.6);
        e.bezierCurveTo(209.7, 40.6, 207.3, 39.5, 204.7, 37.3);
        e.bezierCurveTo(202, 35.2, 200.3, 32.8, 199.6, 30.2);
        e.lineTo(205.9, 26);
        e.bezierCurveTo(206.4, 27.7, 207.4, 29.4, 208.7, 30.8);
        e.bezierCurveTo(210, 32.3, 210.9, 33, 211.5, 33);
        e.bezierCurveTo(212, 33, 212.6, 32.8, 213.2, 32.5);
        e.bezierCurveTo(213.8, 32.1, 214.3, 31.7, 214.6, 31.4);
        e.bezierCurveTo(215.1, 30.8, 215.4, 29.8, 215.4, 28.6);
        e.bezierCurveTo(215.4, 27.3, 215.1, 26.5, 214.5, 26.2);
        e.bezierCurveTo(213.7, 25.6, 212.3, 24.7, 210.1, 23.7);
        e.bezierCurveTo(208, 22.6, 206, 21.5, 204.2, 20.3);
        e.bezierCurveTo(202.3, 19.1, 201.2, 17.9, 200.7, 16.7);
        e.bezierCurveTo(200.2, 15.6, 199.9, 14.1, 199.9, 12.2);
        e.bezierCurveTo(199.9, 10.4, 200.3, 8.8, 201.1, 7.4);
        e.bezierCurveTo(201.9, 6.3, 203.5, 4.8, 205.9, 2.9);
        e.bezierCurveTo(208.3, 1, 210.1, 0, 211.3, 0);
        e.bezierCurveTo(213.3, 0, 215.7, 1.1, 218.3, 3.2);
        e.bezierCurveTo(221, 5.4, 222.7, 7.7, 223.4, 10.3);
        e.lineTo(217.2, 14.6);
        e.bezierCurveTo(216.6, 12.9, 215.6, 11.3, 214.3, 9.8);
        e.bezierCurveTo(213, 8.3, 212.1, 7.6, 211.5, 7.6);
        e.bezierCurveTo(211, 7.6, 210.4, 7.7, 209.8, 8.1);
        e.bezierCurveTo(209.1, 8.4, 208.6, 8.8, 208.2, 9.3);
        e.bezierCurveTo(207.8, 9.8, 207.6, 10.7, 207.6, 11.9);
        e.bezierCurveTo(207.6, 13.1, 208, 13.9, 208.8, 14.3);
        e.bezierCurveTo(209.4, 14.9, 210.7, 15.7, 212.9, 16.8);
        e.bezierCurveTo(218.3, 19.8, 221.5, 22.2, 222.5, 24.1);
        this.graphics = e
    };
    a.Comes = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.AQUA.red;
        var b = StyleManager.AQUA.green;
        var c = StyleManager.AQUA.blue;
        var d = StyleManager.AQUA.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(501, 2);
        e.lineTo(496, 2);
        e.bezierCurveTo(495.4, 2, 495, 1.6, 495, 1);
        e.bezierCurveTo(495, .4, 495.4, 0, 496, 0);
        e.lineTo(501, 0);
        e.bezierCurveTo(501.6, 0, 502, .4, 502, 1);
        e.bezierCurveTo(502, 1.6, 501.6, 2, 501, 2);
        e.closePath();
        e.moveTo(492, 2);
        e.lineTo(487, 2);
        e.bezierCurveTo(486.4, 2, 486, 1.6, 486, 1);
        e.bezierCurveTo(486, .4, 486.4, 0, 487, 0);
        e.lineTo(492, 0);
        e.bezierCurveTo(492.6, 0, 493, .4, 493, 1);
        e.bezierCurveTo(493, 1.6, 492.6, 2, 492, 2);
        e.closePath();
        e.moveTo(483, 2);
        e.lineTo(478, 2);
        e.bezierCurveTo(477.4, 2, 477, 1.6, 477, 1);
        e.bezierCurveTo(477, .4, 477.4, 0, 478, 0);
        e.lineTo(483, 0);
        e.bezierCurveTo(483.6, 0, 484, .4, 484, 1);
        e.bezierCurveTo(484, 1.6, 483.6, 2, 483, 2);
        e.closePath();
        e.moveTo(474, 2);
        e.lineTo(469, 2);
        e.bezierCurveTo(468.4, 2, 468, 1.6, 468, 1);
        e.bezierCurveTo(468, .4, 468.4, 0, 469, 0);
        e.lineTo(474, 0);
        e.bezierCurveTo(474.6, 0, 475, .4, 475, 1);
        e.bezierCurveTo(475, 1.6, 474.6, 2, 474, 2);
        e.closePath();
        e.moveTo(465, 2);
        e.lineTo(460, 2);
        e.bezierCurveTo(459.4, 2, 459, 1.6, 459, 1);
        e.bezierCurveTo(459, .4, 459.4, 0, 460, 0);
        e.lineTo(465, 0);
        e.bezierCurveTo(465.6, 0, 466, .4, 466, 1);
        e.bezierCurveTo(466, 1.6, 465.6, 2, 465, 2);
        e.closePath();
        e.moveTo(456, 2);
        e.lineTo(451, 2);
        e.bezierCurveTo(450.4, 2, 450, 1.6, 450, 1);
        e.bezierCurveTo(450, .4, 450.4, 0, 451, 0);
        e.lineTo(456, 0);
        e.bezierCurveTo(456.6, 0, 457, .4, 457, 1);
        e.bezierCurveTo(457, 1.6, 456.6, 2, 456, 2);
        e.closePath();
        e.moveTo(447, 2);
        e.lineTo(442, 2);
        e.bezierCurveTo(441.4, 2, 441, 1.6, 441, 1);
        e.bezierCurveTo(441, .4, 441.4, 0, 442, 0);
        e.lineTo(447, 0);
        e.bezierCurveTo(447.6, 0, 448, .4, 448, 1);
        e.bezierCurveTo(448, 1.6, 447.6, 2, 447, 2);
        e.closePath();
        e.moveTo(438, 2);
        e.lineTo(433, 2);
        e.bezierCurveTo(432.4, 2, 432, 1.6, 432, 1);
        e.bezierCurveTo(432, .4, 432.4, 0, 433, 0);
        e.lineTo(438, 0);
        e.bezierCurveTo(438.6, 0, 439, .4, 439, 1);
        e.bezierCurveTo(439, 1.6, 438.6, 2, 438, 2);
        e.closePath();
        e.moveTo(429, 2);
        e.lineTo(424, 2);
        e.bezierCurveTo(423.4, 2, 423, 1.6, 423, 1);
        e.bezierCurveTo(423, .4, 423.4, 0, 424, 0);
        e.lineTo(429, 0);
        e.bezierCurveTo(429.6, 0, 430, .4, 430, 1);
        e.bezierCurveTo(430, 1.6, 429.6, 2, 429, 2);
        e.closePath();
        e.moveTo(420, 2);
        e.lineTo(415, 2);
        e.bezierCurveTo(414.4, 2, 414, 1.6, 414, 1);
        e.bezierCurveTo(414, .4, 414.4, 0, 415, 0);
        e.lineTo(420, 0);
        e.bezierCurveTo(420.6, 0, 421, .4, 421, 1);
        e.bezierCurveTo(421, 1.6, 420.6, 2, 420, 2);
        e.closePath();
        e.moveTo(411, 2);
        e.lineTo(406, 2);
        e.bezierCurveTo(405.4, 2, 405, 1.6, 405, 1);
        e.bezierCurveTo(405, .4, 405.4, 0, 406, 0);
        e.lineTo(411, 0);
        e.bezierCurveTo(411.6, 0, 412, .4, 412, 1);
        e.bezierCurveTo(412, 1.6, 411.6, 2, 411, 2);
        e.closePath();
        e.moveTo(402, 2);
        e.lineTo(397, 2);
        e.bezierCurveTo(396.4, 2, 396, 1.6, 396, 1);
        e.bezierCurveTo(396, .4, 396.4, 0, 397, 0);
        e.lineTo(402, 0);
        e.bezierCurveTo(402.6, 0, 403, .4, 403, 1);
        e.bezierCurveTo(403, 1.6, 402.6, 2, 402, 2);
        e.closePath();
        e.moveTo(393, 2);
        e.lineTo(388, 2);
        e.bezierCurveTo(387.4, 2, 387, 1.6, 387, 1);
        e.bezierCurveTo(387, .4, 387.4, 0, 388, 0);
        e.lineTo(393, 0);
        e.bezierCurveTo(393.6, 0, 394, .4, 394, 1);
        e.bezierCurveTo(394, 1.6, 393.6, 2, 393, 2);
        e.closePath();
        e.moveTo(384, 2);
        e.lineTo(379, 2);
        e.bezierCurveTo(378.4, 2, 378, 1.6, 378, 1);
        e.bezierCurveTo(378, .4, 378.4, 0, 379, 0);
        e.lineTo(384, 0);
        e.bezierCurveTo(384.6, 0, 385, .4, 385, 1);
        e.bezierCurveTo(385, 1.6, 384.6, 2, 384, 2);
        e.closePath();
        e.moveTo(375, 2);
        e.lineTo(370, 2);
        e.bezierCurveTo(369.4, 2, 369, 1.6, 369, 1);
        e.bezierCurveTo(369, .4, 369.4, 0, 370, 0);
        e.lineTo(375, 0);
        e.bezierCurveTo(375.6, 0, 376, .4, 376, 1);
        e.bezierCurveTo(376, 1.6, 375.6, 2, 375, 2);
        e.closePath();
        e.moveTo(366, 2);
        e.lineTo(361, 2);
        e.bezierCurveTo(360.4, 2, 360, 1.6, 360, 1);
        e.bezierCurveTo(360, .4, 360.4, 0, 361, 0);
        e.lineTo(366, 0);
        e.bezierCurveTo(366.6, 0, 367, .4, 367, 1);
        e.bezierCurveTo(367, 1.6, 366.6, 2, 366, 2);
        e.closePath();
        e.moveTo(357, 2);
        e.lineTo(352, 2);
        e.bezierCurveTo(351.4, 2, 351, 1.6, 351, 1);
        e.bezierCurveTo(351, .4, 351.4, 0, 352, 0);
        e.lineTo(357, 0);
        e.bezierCurveTo(357.6, 0, 358, .4, 358, 1);
        e.bezierCurveTo(358, 1.6, 357.6, 2, 357, 2);
        e.closePath();
        e.moveTo(348, 2);
        e.lineTo(343, 2);
        e.bezierCurveTo(342.4, 2, 342, 1.6, 342, 1);
        e.bezierCurveTo(342, .4, 342.4, 0, 343, 0);
        e.lineTo(348, 0);
        e.bezierCurveTo(348.6, 0, 349, .4, 349, 1);
        e.bezierCurveTo(349, 1.6, 348.6, 2, 348, 2);
        e.closePath();
        e.moveTo(339, 2);
        e.lineTo(334, 2);
        e.bezierCurveTo(333.4, 2, 333, 1.6, 333, 1);
        e.bezierCurveTo(333, .4, 333.4, 0, 334, 0);
        e.lineTo(339, 0);
        e.bezierCurveTo(339.6, 0, 340, .4, 340, 1);
        e.bezierCurveTo(340, 1.6, 339.6, 2, 339, 2);
        e.closePath();
        e.moveTo(330, 2);
        e.lineTo(325, 2);
        e.bezierCurveTo(324.4, 2, 324, 1.6, 324, 1);
        e.bezierCurveTo(324, .4, 324.4, 0, 325, 0);
        e.lineTo(330, 0);
        e.bezierCurveTo(330.6, 0, 331, .4, 331, 1);
        e.bezierCurveTo(331, 1.6, 330.6, 2, 330, 2);
        e.closePath();
        e.moveTo(321, 2);
        e.lineTo(316, 2);
        e.bezierCurveTo(315.4, 2, 315, 1.6, 315, 1);
        e.bezierCurveTo(315, .4, 315.4, 0, 316, 0);
        e.lineTo(321, 0);
        e.bezierCurveTo(321.6, 0, 322, .4, 322, 1);
        e.bezierCurveTo(322, 1.6, 321.6, 2, 321, 2);
        e.closePath();
        e.moveTo(312, 2);
        e.lineTo(307, 2);
        e.bezierCurveTo(306.4, 2, 306, 1.6, 306, 1);
        e.bezierCurveTo(306, .4, 306.4, 0, 307, 0);
        e.lineTo(312, 0);
        e.bezierCurveTo(312.6, 0, 313, .4, 313, 1);
        e.bezierCurveTo(313, 1.6, 312.6, 2, 312, 2);
        e.closePath();
        e.moveTo(303, 2);
        e.lineTo(298, 2);
        e.bezierCurveTo(297.4, 2, 297, 1.6, 297, 1);
        e.bezierCurveTo(297, .4, 297.4, 0, 298, 0);
        e.lineTo(303, 0);
        e.bezierCurveTo(303.6, 0, 304, .4, 304, 1);
        e.bezierCurveTo(304, 1.6, 303.6, 2, 303, 2);
        e.closePath();
        e.moveTo(294, 2);
        e.lineTo(289, 2);
        e.bezierCurveTo(288.4, 2, 288, 1.6, 288, 1);
        e.bezierCurveTo(288, .4, 288.4, 0, 289, 0);
        e.lineTo(294, 0);
        e.bezierCurveTo(294.6, 0, 295, .4, 295, 1);
        e.bezierCurveTo(295, 1.6, 294.6, 2, 294, 2);
        e.closePath();
        e.moveTo(285, 2);
        e.lineTo(280, 2);
        e.bezierCurveTo(279.4, 2, 279, 1.6, 279, 1);
        e.bezierCurveTo(279, .4, 279.4, 0, 280, 0);
        e.lineTo(285, 0);
        e.bezierCurveTo(285.6, 0, 286, .4, 286, 1);
        e.bezierCurveTo(286, 1.6, 285.6, 2, 285, 2);
        e.closePath();
        e.moveTo(276, 2);
        e.lineTo(271, 2);
        e.bezierCurveTo(270.4, 2, 270, 1.6, 270, 1);
        e.bezierCurveTo(270, .4, 270.4, 0, 271, 0);
        e.lineTo(276, 0);
        e.bezierCurveTo(276.6, 0, 277, .4, 277, 1);
        e.bezierCurveTo(277, 1.6, 276.6, 2, 276, 2);
        e.closePath();
        e.moveTo(267, 2);
        e.lineTo(262, 2);
        e.bezierCurveTo(261.4, 2, 261, 1.6, 261, 1);
        e.bezierCurveTo(261, .4, 261.4, 0, 262, 0);
        e.lineTo(267, 0);
        e.bezierCurveTo(267.6, 0, 268, .4, 268, 1);
        e.bezierCurveTo(268, 1.6, 267.6, 2, 267, 2);
        e.closePath();
        e.moveTo(258, 2);
        e.lineTo(253, 2);
        e.bezierCurveTo(252.4, 2, 252, 1.6, 252, 1);
        e.bezierCurveTo(252, .4, 252.4, 0, 253, 0);
        e.lineTo(258, 0);
        e.bezierCurveTo(258.6, 0, 259, .4, 259, 1);
        e.bezierCurveTo(259, 1.6, 258.6, 2, 258, 2);
        e.closePath();
        e.moveTo(249, 2);
        e.lineTo(244, 2);
        e.bezierCurveTo(243.4, 2, 243, 1.6, 243, 1);
        e.bezierCurveTo(243, .4, 243.4, 0, 244, 0);
        e.lineTo(249, 0);
        e.bezierCurveTo(249.6, 0, 250, .4, 250, 1);
        e.bezierCurveTo(250, 1.6, 249.6, 2, 249, 2);
        e.closePath();
        e.moveTo(240, 2);
        e.lineTo(235, 2);
        e.bezierCurveTo(234.4, 2, 234, 1.6, 234, 1);
        e.bezierCurveTo(234, .4, 234.4, 0, 235, 0);
        e.lineTo(240, 0);
        e.bezierCurveTo(240.6, 0, 241, .4, 241, 1);
        e.bezierCurveTo(241, 1.6, 240.6, 2, 240, 2);
        e.closePath();
        e.moveTo(231, 2);
        e.lineTo(226, 2);
        e.bezierCurveTo(225.4, 2, 225, 1.6, 225, 1);
        e.bezierCurveTo(225, .4, 225.4, 0, 226, 0);
        e.lineTo(231, 0);
        e.bezierCurveTo(231.6, 0, 232, .4, 232, 1);
        e.bezierCurveTo(232, 1.6, 231.6, 2, 231, 2);
        e.closePath();
        e.moveTo(222, 2);
        e.lineTo(217, 2);
        e.bezierCurveTo(216.4, 2, 216, 1.6, 216, 1);
        e.bezierCurveTo(216, .4, 216.4, 0, 217, 0);
        e.lineTo(222, 0);
        e.bezierCurveTo(222.6, 0, 223, .4, 223, 1);
        e.bezierCurveTo(223, 1.6, 222.6, 2, 222, 2);
        e.closePath();
        e.moveTo(213, 2);
        e.lineTo(208, 2);
        e.bezierCurveTo(207.4, 2, 207, 1.6, 207, 1);
        e.bezierCurveTo(207, .4, 207.4, 0, 208, 0);
        e.lineTo(213, 0);
        e.bezierCurveTo(213.6, 0, 214, .4, 214, 1);
        e.bezierCurveTo(214, 1.6, 213.6, 2, 213, 2);
        e.closePath();
        e.moveTo(204, 2);
        e.lineTo(199, 2);
        e.bezierCurveTo(198.4, 2, 198, 1.6, 198, 1);
        e.bezierCurveTo(198, .4, 198.4, 0, 199, 0);
        e.lineTo(204, 0);
        e.bezierCurveTo(204.6, 0, 205, .4, 205, 1);
        e.bezierCurveTo(205, 1.6, 204.6, 2, 204, 2);
        e.closePath();
        e.moveTo(195, 2);
        e.lineTo(190, 2);
        e.bezierCurveTo(189.4, 2, 189, 1.6, 189, 1);
        e.bezierCurveTo(189, .4, 189.4, 0, 190, 0);
        e.lineTo(195, 0);
        e.bezierCurveTo(195.6, 0, 196, .4, 196, 1);
        e.bezierCurveTo(196, 1.6, 195.6, 2, 195, 2);
        e.closePath();
        e.moveTo(186, 2);
        e.lineTo(181, 2);
        e.bezierCurveTo(180.4, 2, 180, 1.6, 180, 1);
        e.bezierCurveTo(180, .4, 180.4, 0, 181, 0);
        e.lineTo(186, 0);
        e.bezierCurveTo(186.6, 0, 187, .4, 187, 1);
        e.bezierCurveTo(187, 1.6, 186.6, 2, 186, 2);
        e.closePath();
        e.moveTo(177, 2);
        e.lineTo(172, 2);
        e.bezierCurveTo(171.4, 2, 171, 1.6, 171, 1);
        e.bezierCurveTo(171, .4, 171.4, 0, 172, 0);
        e.lineTo(177, 0);
        e.bezierCurveTo(177.6, 0, 178, .4, 178, 1);
        e.bezierCurveTo(178, 1.6, 177.6, 2, 177, 2);
        e.closePath();
        e.moveTo(168, 2);
        e.lineTo(163, 2);
        e.bezierCurveTo(162.4, 2, 162, 1.6, 162, 1);
        e.bezierCurveTo(162, .4, 162.4, 0, 163, 0);
        e.lineTo(168, 0);
        e.bezierCurveTo(168.6, 0, 169, .4, 169, 1);
        e.bezierCurveTo(169, 1.6, 168.6, 2, 168, 2);
        e.closePath();
        e.moveTo(159, 2);
        e.lineTo(154, 2);
        e.bezierCurveTo(153.4, 2, 153, 1.6, 153, 1);
        e.bezierCurveTo(153, .4, 153.4, 0, 154, 0);
        e.lineTo(159, 0);
        e.bezierCurveTo(159.6, 0, 160, .4, 160, 1);
        e.bezierCurveTo(160, 1.6, 159.6, 2, 159, 2);
        e.closePath();
        e.moveTo(150, 2);
        e.lineTo(145, 2);
        e.bezierCurveTo(144.4, 2, 144, 1.6, 144, 1);
        e.bezierCurveTo(144, .4, 144.4, 0, 145, 0);
        e.lineTo(150, 0);
        e.bezierCurveTo(150.6, 0, 151, .4, 151, 1);
        e.bezierCurveTo(151, 1.6, 150.6, 2, 150, 2);
        e.closePath();
        e.moveTo(141, 2);
        e.lineTo(136, 2);
        e.bezierCurveTo(135.4, 2, 135, 1.6, 135, 1);
        e.bezierCurveTo(135, .4, 135.4, 0, 136, 0);
        e.lineTo(141, 0);
        e.bezierCurveTo(141.6, 0, 142, .4, 142, 1);
        e.bezierCurveTo(142, 1.6, 141.6, 2, 141, 2);
        e.closePath();
        e.moveTo(132, 2);
        e.lineTo(127, 2);
        e.bezierCurveTo(126.4, 2, 126, 1.6, 126, 1);
        e.bezierCurveTo(126, .4, 126.4, 0, 127, 0);
        e.lineTo(132, 0);
        e.bezierCurveTo(132.6, 0, 133, .4, 133, 1);
        e.bezierCurveTo(133, 1.6, 132.6, 2, 132, 2);
        e.closePath();
        e.moveTo(123, 2);
        e.lineTo(118, 2);
        e.bezierCurveTo(117.4, 2, 117, 1.6, 117, 1);
        e.bezierCurveTo(117, .4, 117.4, 0, 118, 0);
        e.lineTo(123, 0);
        e.bezierCurveTo(123.6, 0, 124, .4, 124, 1);
        e.bezierCurveTo(124, 1.6, 123.6, 2, 123, 2);
        e.closePath();
        e.moveTo(114, 2);
        e.lineTo(109, 2);
        e.bezierCurveTo(108.4, 2, 108, 1.6, 108, 1);
        e.bezierCurveTo(108, .4, 108.4, 0, 109, 0);
        e.lineTo(114, 0);
        e.bezierCurveTo(114.6, 0, 115, .4, 115, 1);
        e.bezierCurveTo(115, 1.6, 114.6, 2, 114, 2);
        e.closePath();
        e.moveTo(105, 2);
        e.lineTo(100, 2);
        e.bezierCurveTo(99.4, 2, 99, 1.6, 99, 1);
        e.bezierCurveTo(99, .4, 99.4, 0, 100, 0);
        e.lineTo(105, 0);
        e.bezierCurveTo(105.6, 0, 106, .4, 106, 1);
        e.bezierCurveTo(106, 1.6, 105.6, 2, 105, 2);
        e.closePath();
        e.moveTo(96, 2);
        e.lineTo(91, 2);
        e.bezierCurveTo(90.4, 2, 90, 1.6, 90, 1);
        e.bezierCurveTo(90, .4, 90.4, 0, 91, 0);
        e.lineTo(96, 0);
        e.bezierCurveTo(96.6, 0, 97, .4, 97, 1);
        e.bezierCurveTo(97, 1.6, 96.6, 2, 96, 2);
        e.closePath();
        e.moveTo(87, 2);
        e.lineTo(82, 2);
        e.bezierCurveTo(81.4, 2, 81, 1.6, 81, 1);
        e.bezierCurveTo(81, .4, 81.4, 0, 82, 0);
        e.lineTo(87, 0);
        e.bezierCurveTo(87.6, 0, 88, .4, 88, 1);
        e.bezierCurveTo(88, 1.6, 87.6, 2, 87, 2);
        e.closePath();
        e.moveTo(78, 2);
        e.lineTo(73, 2);
        e.bezierCurveTo(72.4, 2, 72, 1.6, 72, 1);
        e.bezierCurveTo(72, .4, 72.4, 0, 73, 0);
        e.lineTo(78, 0);
        e.bezierCurveTo(78.6, 0, 79, .4, 79, 1);
        e.bezierCurveTo(79, 1.6, 78.6, 2, 78, 2);
        e.closePath();
        e.moveTo(69, 2);
        e.lineTo(64, 2);
        e.bezierCurveTo(63.4, 2, 63, 1.6, 63, 1);
        e.bezierCurveTo(63, .4, 63.4, 0, 64, 0);
        e.lineTo(69, 0);
        e.bezierCurveTo(69.6, 0, 70, .4, 70, 1);
        e.bezierCurveTo(70, 1.6, 69.6, 2, 69, 2);
        e.closePath();
        e.moveTo(60, 2);
        e.lineTo(55, 2);
        e.bezierCurveTo(54.4, 2, 54, 1.6, 54, 1);
        e.bezierCurveTo(54, .4, 54.4, 0, 55, 0);
        e.lineTo(60, 0);
        e.bezierCurveTo(60.6, 0, 61, .4, 61, 1);
        e.bezierCurveTo(61, 1.6, 60.6, 2, 60, 2);
        e.closePath();
        e.moveTo(51, 2);
        e.lineTo(46, 2);
        e.bezierCurveTo(45.4, 2, 45, 1.6, 45, 1);
        e.bezierCurveTo(45, .4, 45.4, 0, 46, 0);
        e.lineTo(51, 0);
        e.bezierCurveTo(51.6, 0, 52, .4, 52, 1);
        e.bezierCurveTo(52, 1.6, 51.6, 2, 51, 2);
        e.closePath();
        e.moveTo(42, 2);
        e.lineTo(37, 2);
        e.bezierCurveTo(36.4, 2, 36, 1.6, 36, 1);
        e.bezierCurveTo(36, .4, 36.4, 0, 37, 0);
        e.lineTo(42, 0);
        e.bezierCurveTo(42.6, 0, 43, .4, 43, 1);
        e.bezierCurveTo(43, 1.6, 42.6, 2, 42, 2);
        e.closePath();
        e.moveTo(33, 2);
        e.lineTo(28, 2);
        e.bezierCurveTo(27.4, 2, 27, 1.6, 27, 1);
        e.bezierCurveTo(27, .4, 27.4, 0, 28, 0);
        e.lineTo(33, 0);
        e.bezierCurveTo(33.6, 0, 34, .4, 34, 1);
        e.bezierCurveTo(34, 1.6, 33.6, 2, 33, 2);
        e.closePath();
        e.moveTo(24, 2);
        e.lineTo(19, 2);
        e.bezierCurveTo(18.4, 2, 18, 1.6, 18, 1);
        e.bezierCurveTo(18, .4, 18.4, 0, 19, 0);
        e.lineTo(24, 0);
        e.bezierCurveTo(24.6, 0, 25, .4, 25, 1);
        e.bezierCurveTo(25, 1.6, 24.6, 2, 24, 2);
        e.closePath();
        e.moveTo(15, 2);
        e.lineTo(10, 2);
        e.bezierCurveTo(9.4, 2, 9, 1.6, 9, 1);
        e.bezierCurveTo(9, .4, 9.4, 0, 10, 0);
        e.lineTo(15, 0);
        e.bezierCurveTo(15.6, 0, 16, .4, 16, 1);
        e.bezierCurveTo(16, 1.6, 15.6, 2, 15, 2);
        e.closePath();
        e.moveTo(6, 2);
        e.lineTo(1, 2);
        e.bezierCurveTo(.4, 2, 0, 1.6, 0, 1);
        e.bezierCurveTo(0, .4, .4, 0, 1, 0);
        e.lineTo(6, 0);
        e.bezierCurveTo(6.6, 0, 7, .4, 7, 1);
        e.bezierCurveTo(7, 1.6, 6.6, 2, 6, 2);
        e.closePath();
        this.graphics = e
    };
    a.DashLine1 = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.AQUA.red;
        var b = StyleManager.AQUA.green;
        var c = StyleManager.AQUA.blue;
        var d = StyleManager.AQUA.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(1, 340);
        e.bezierCurveTo(.4, 340, 0, 339.6, 0, 339);
        e.lineTo(0, 334);
        e.bezierCurveTo(0, 333.4, .4, 333, 1, 333);
        e.bezierCurveTo(1.6, 333, 2, 333.4, 2, 334);
        e.lineTo(2, 339);
        e.bezierCurveTo(2, 339.6, 1.6, 340, 1, 340);
        e.closePath();
        e.moveTo(1, 331);
        e.bezierCurveTo(.4, 331, 0, 330.6, 0, 330);
        e.lineTo(0, 325);
        e.bezierCurveTo(0, 324.4, .4, 324, 1, 324);
        e.bezierCurveTo(1.6, 324, 2, 324.4, 2, 325);
        e.lineTo(2, 330);
        e.bezierCurveTo(2, 330.6, 1.6, 331, 1, 331);
        e.closePath();
        e.moveTo(1, 322);
        e.bezierCurveTo(.4, 322, 0, 321.6, 0, 321);
        e.lineTo(0, 316);
        e.bezierCurveTo(0, 315.4, .4, 315, 1, 315);
        e.bezierCurveTo(1.6, 315, 2, 315.4, 2, 316);
        e.lineTo(2, 321);
        e.bezierCurveTo(2, 321.6, 1.6, 322, 1, 322);
        e.closePath();
        e.moveTo(1, 313);
        e.bezierCurveTo(.4, 313, 0, 312.6, 0, 312);
        e.lineTo(0, 307);
        e.bezierCurveTo(0, 306.4, .4, 306, 1, 306);
        e.bezierCurveTo(1.6, 306, 2, 306.4, 2, 307);
        e.lineTo(2, 312);
        e.bezierCurveTo(2, 312.6, 1.6, 313, 1, 313);
        e.closePath();
        e.moveTo(1, 304);
        e.bezierCurveTo(.4, 304, 0, 303.6, 0, 303);
        e.lineTo(0, 298);
        e.bezierCurveTo(0, 297.4, .4, 297, 1, 297);
        e.bezierCurveTo(1.6, 297, 2, 297.4, 2, 298);
        e.lineTo(2, 303);
        e.bezierCurveTo(2, 303.6, 1.6, 304, 1, 304);
        e.closePath();
        e.moveTo(1, 295);
        e.bezierCurveTo(.4, 295, 0, 294.6, 0, 294);
        e.lineTo(0, 289);
        e.bezierCurveTo(0, 288.4, .4, 288, 1, 288);
        e.bezierCurveTo(1.6, 288, 2, 288.4, 2, 289);
        e.lineTo(2, 294);
        e.bezierCurveTo(2, 294.6, 1.6, 295, 1, 295);
        e.closePath();
        e.moveTo(1, 286);
        e.bezierCurveTo(.4, 286, 0, 285.6, 0, 285);
        e.lineTo(0, 280);
        e.bezierCurveTo(0, 279.4, .4, 279, 1, 279);
        e.bezierCurveTo(1.6, 279, 2, 279.4, 2, 280);
        e.lineTo(2, 285);
        e.bezierCurveTo(2, 285.6, 1.6, 286, 1, 286);
        e.closePath();
        e.moveTo(1, 277);
        e.bezierCurveTo(.4, 277, 0, 276.6, 0, 276);
        e.lineTo(0, 271);
        e.bezierCurveTo(0, 270.4, .4, 270, 1, 270);
        e.bezierCurveTo(1.6, 270, 2, 270.4, 2, 271);
        e.lineTo(2, 276);
        e.bezierCurveTo(2, 276.6, 1.6, 277, 1, 277);
        e.closePath();
        e.moveTo(1, 268);
        e.bezierCurveTo(.4, 268, 0, 267.6, 0, 267);
        e.lineTo(0, 262);
        e.bezierCurveTo(0, 261.4, .4, 261, 1, 261);
        e.bezierCurveTo(1.6, 261, 2, 261.4, 2, 262);
        e.lineTo(2, 267);
        e.bezierCurveTo(2, 267.6, 1.6, 268, 1, 268);
        e.closePath();
        e.moveTo(1, 259);
        e.bezierCurveTo(.4, 259, 0, 258.6, 0, 258);
        e.lineTo(0, 253);
        e.bezierCurveTo(0, 252.4, .4, 252, 1, 252);
        e.bezierCurveTo(1.6, 252, 2, 252.4, 2, 253);
        e.lineTo(2, 258);
        e.bezierCurveTo(2, 258.6, 1.6, 259, 1, 259);
        e.closePath();
        e.moveTo(1, 250);
        e.bezierCurveTo(.4, 250, 0, 249.6, 0, 249);
        e.lineTo(0, 244);
        e.bezierCurveTo(0, 243.4, .4, 243, 1, 243);
        e.bezierCurveTo(1.6, 243, 2, 243.4, 2, 244);
        e.lineTo(2, 249);
        e.bezierCurveTo(2, 249.6, 1.6, 250, 1, 250);
        e.closePath();
        e.moveTo(1, 241);
        e.bezierCurveTo(.4, 241, 0, 240.6, 0, 240);
        e.lineTo(0, 235);
        e.bezierCurveTo(0, 234.4, .4, 234, 1, 234);
        e.bezierCurveTo(1.6, 234, 2, 234.4, 2, 235);
        e.lineTo(2, 240);
        e.bezierCurveTo(2, 240.6, 1.6, 241, 1, 241);
        e.closePath();
        e.moveTo(1, 232);
        e.bezierCurveTo(.4, 232, 0, 231.6, 0, 231);
        e.lineTo(0, 226);
        e.bezierCurveTo(0, 225.4, .4, 225, 1, 225);
        e.bezierCurveTo(1.6, 225, 2, 225.4, 2, 226);
        e.lineTo(2, 231);
        e.bezierCurveTo(2, 231.6, 1.6, 232, 1, 232);
        e.closePath();
        e.moveTo(1, 223);
        e.bezierCurveTo(.4, 223, 0, 222.6, 0, 222);
        e.lineTo(0, 217);
        e.bezierCurveTo(0, 216.4, .4, 216, 1, 216);
        e.bezierCurveTo(1.6, 216, 2, 216.4, 2, 217);
        e.lineTo(2, 222);
        e.bezierCurveTo(2, 222.6, 1.6, 223, 1, 223);
        e.closePath();
        e.moveTo(1, 214);
        e.bezierCurveTo(.4, 214, 0, 213.6, 0, 213);
        e.lineTo(0, 208);
        e.bezierCurveTo(0, 207.4, .4, 207, 1, 207);
        e.bezierCurveTo(1.6, 207, 2, 207.4, 2, 208);
        e.lineTo(2, 213);
        e.bezierCurveTo(2, 213.6, 1.6, 214, 1, 214);
        e.closePath();
        e.moveTo(1, 205);
        e.bezierCurveTo(.4, 205, 0, 204.6, 0, 204);
        e.lineTo(0, 199);
        e.bezierCurveTo(0, 198.4, .4, 198, 1, 198);
        e.bezierCurveTo(1.6, 198, 2, 198.4, 2, 199);
        e.lineTo(2, 204);
        e.bezierCurveTo(2, 204.6, 1.6, 205, 1, 205);
        e.closePath();
        e.moveTo(1, 196);
        e.bezierCurveTo(.4, 196, 0, 195.6, 0, 195);
        e.lineTo(0, 190);
        e.bezierCurveTo(0, 189.4, .4, 189, 1, 189);
        e.bezierCurveTo(1.6, 189, 2, 189.4, 2, 190);
        e.lineTo(2, 195);
        e.bezierCurveTo(2, 195.6, 1.6, 196, 1, 196);
        e.closePath();
        e.moveTo(1, 187);
        e.bezierCurveTo(.4, 187, 0, 186.6, 0, 186);
        e.lineTo(0, 181);
        e.bezierCurveTo(0, 180.4, .4, 180, 1, 180);
        e.bezierCurveTo(1.6, 180, 2, 180.4, 2, 181);
        e.lineTo(2, 186);
        e.bezierCurveTo(2, 186.6, 1.6, 187, 1, 187);
        e.closePath();
        e.moveTo(1, 178);
        e.bezierCurveTo(.4, 178, 0, 177.6, 0, 177);
        e.lineTo(0, 172);
        e.bezierCurveTo(0, 171.4, .4, 171, 1, 171);
        e.bezierCurveTo(1.6, 171, 2, 171.4, 2, 172);
        e.lineTo(2, 177);
        e.bezierCurveTo(2, 177.6, 1.6, 178, 1, 178);
        e.closePath();
        e.moveTo(1, 169);
        e.bezierCurveTo(.4, 169, 0, 168.6, 0, 168);
        e.lineTo(0, 163);
        e.bezierCurveTo(0, 162.4, .4, 162, 1, 162);
        e.bezierCurveTo(1.6, 162, 2, 162.4, 2, 163);
        e.lineTo(2, 168);
        e.bezierCurveTo(2, 168.6, 1.6, 169, 1, 169);
        e.closePath();
        e.moveTo(1, 160);
        e.bezierCurveTo(.4, 160, 0, 159.6, 0, 159);
        e.lineTo(0, 154);
        e.bezierCurveTo(0, 153.4, .4, 153, 1, 153);
        e.bezierCurveTo(1.6, 153, 2, 153.4, 2, 154);
        e.lineTo(2, 159);
        e.bezierCurveTo(2, 159.6, 1.6, 160, 1, 160);
        e.closePath();
        e.moveTo(1, 151);
        e.bezierCurveTo(.4, 151, 0, 150.6, 0, 150);
        e.lineTo(0, 145);
        e.bezierCurveTo(0, 144.4, .4, 144, 1, 144);
        e.bezierCurveTo(1.6, 144, 2, 144.4, 2, 145);
        e.lineTo(2, 150);
        e.bezierCurveTo(2, 150.6, 1.6, 151, 1, 151);
        e.closePath();
        e.moveTo(1, 142);
        e.bezierCurveTo(.4, 142, 0, 141.6, 0, 141);
        e.lineTo(0, 136);
        e.bezierCurveTo(0, 135.4, .4, 135, 1, 135);
        e.bezierCurveTo(1.6, 135, 2, 135.4, 2, 136);
        e.lineTo(2, 141);
        e.bezierCurveTo(2, 141.6, 1.6, 142, 1, 142);
        e.closePath();
        e.moveTo(1, 133);
        e.bezierCurveTo(.4, 133, 0, 132.6, 0, 132);
        e.lineTo(0, 127);
        e.bezierCurveTo(0, 126.4, .4, 126, 1, 126);
        e.bezierCurveTo(1.6, 126, 2, 126.4, 2, 127);
        e.lineTo(2, 132);
        e.bezierCurveTo(2, 132.6, 1.6, 133, 1, 133);
        e.closePath();
        e.moveTo(1, 124);
        e.bezierCurveTo(.4, 124, 0, 123.6, 0, 123);
        e.lineTo(0, 118);
        e.bezierCurveTo(0, 117.4, .4, 117, 1, 117);
        e.bezierCurveTo(1.6, 117, 2, 117.4, 2, 118);
        e.lineTo(2, 123);
        e.bezierCurveTo(2, 123.6, 1.6, 124, 1, 124);
        e.closePath();
        e.moveTo(1, 115);
        e.bezierCurveTo(.4, 115, 0, 114.6, 0, 114);
        e.lineTo(0, 109);
        e.bezierCurveTo(0, 108.4, .4, 108, 1, 108);
        e.bezierCurveTo(1.6, 108, 2, 108.4, 2, 109);
        e.lineTo(2, 114);
        e.bezierCurveTo(2, 114.6, 1.6, 115, 1, 115);
        e.closePath();
        e.moveTo(1, 106);
        e.bezierCurveTo(.4, 106, 0, 105.6, 0, 105);
        e.lineTo(0, 100);
        e.bezierCurveTo(0, 99.4, .4, 99, 1, 99);
        e.bezierCurveTo(1.6, 99, 2, 99.4, 2, 100);
        e.lineTo(2, 105);
        e.bezierCurveTo(2, 105.6, 1.6, 106, 1, 106);
        e.closePath();
        e.moveTo(1, 97);
        e.bezierCurveTo(.4, 97, 0, 96.6, 0, 96);
        e.lineTo(0, 91);
        e.bezierCurveTo(0, 90.4, .4, 90, 1, 90);
        e.bezierCurveTo(1.6, 90, 2, 90.4, 2, 91);
        e.lineTo(2, 96);
        e.bezierCurveTo(2, 96.6, 1.6, 97, 1, 97);
        e.closePath();
        e.moveTo(1, 88);
        e.bezierCurveTo(.4, 88, 0, 87.6, 0, 87);
        e.lineTo(0, 82);
        e.bezierCurveTo(0, 81.4, .4, 81, 1, 81);
        e.bezierCurveTo(1.6, 81, 2, 81.4, 2, 82);
        e.lineTo(2, 87);
        e.bezierCurveTo(2, 87.6, 1.6, 88, 1, 88);
        e.closePath();
        e.moveTo(1, 79);
        e.bezierCurveTo(.4, 79, 0, 78.6, 0, 78);
        e.lineTo(0, 73);
        e.bezierCurveTo(0, 72.4, .4, 72, 1, 72);
        e.bezierCurveTo(1.6, 72, 2, 72.4, 2, 73);
        e.lineTo(2, 78);
        e.bezierCurveTo(2, 78.6, 1.6, 79, 1, 79);
        e.closePath();
        e.moveTo(1, 70);
        e.bezierCurveTo(.4, 70, 0, 69.6, 0, 69);
        e.lineTo(0, 64);
        e.bezierCurveTo(0, 63.4, .4, 63, 1, 63);
        e.bezierCurveTo(1.6, 63, 2, 63.4, 2, 64);
        e.lineTo(2, 69);
        e.bezierCurveTo(2, 69.6, 1.6, 70, 1, 70);
        e.closePath();
        e.moveTo(1, 61);
        e.bezierCurveTo(.4, 61, 0, 60.6, 0, 60);
        e.lineTo(0, 55);
        e.bezierCurveTo(0, 54.4, .4, 54, 1, 54);
        e.bezierCurveTo(1.6, 54, 2, 54.4, 2, 55);
        e.lineTo(2, 60);
        e.bezierCurveTo(2, 60.6, 1.6, 61, 1, 61);
        e.closePath();
        e.moveTo(1, 52);
        e.bezierCurveTo(.4, 52, 0, 51.6, 0, 51);
        e.lineTo(0, 46);
        e.bezierCurveTo(0, 45.4, .4, 45, 1, 45);
        e.bezierCurveTo(1.6, 45, 2, 45.4, 2, 46);
        e.lineTo(2, 51);
        e.bezierCurveTo(2, 51.6, 1.6, 52, 1, 52);
        e.closePath();
        e.moveTo(1, 43);
        e.bezierCurveTo(.4, 43, 0, 42.6, 0, 42);
        e.lineTo(0, 37);
        e.bezierCurveTo(0, 36.4, .4, 36, 1, 36);
        e.bezierCurveTo(1.6, 36, 2, 36.4, 2, 37);
        e.lineTo(2, 42);
        e.bezierCurveTo(2, 42.6, 1.6, 43, 1, 43);
        e.closePath();
        e.moveTo(1, 34);
        e.bezierCurveTo(.4, 34, 0, 33.6, 0, 33);
        e.lineTo(0, 28);
        e.bezierCurveTo(0, 27.4, .4, 27, 1, 27);
        e.bezierCurveTo(1.6, 27, 2, 27.4, 2, 28);
        e.lineTo(2, 33);
        e.bezierCurveTo(2, 33.6, 1.6, 34, 1, 34);
        e.closePath();
        e.moveTo(1, 25);
        e.bezierCurveTo(.4, 25, 0, 24.6, 0, 24);
        e.lineTo(0, 19);
        e.bezierCurveTo(0, 18.4, .4, 18, 1, 18);
        e.bezierCurveTo(1.6, 18, 2, 18.4, 2, 19);
        e.lineTo(2, 24);
        e.bezierCurveTo(2, 24.6, 1.6, 25, 1, 25);
        e.closePath();
        e.moveTo(1, 16);
        e.bezierCurveTo(.4, 16, 0, 15.6, 0, 15);
        e.lineTo(0, 10);
        e.bezierCurveTo(0, 9.4, .4, 9, 1, 9);
        e.bezierCurveTo(1.6, 9, 2, 9.4, 2, 10);
        e.lineTo(2, 15);
        e.bezierCurveTo(2, 15.6, 1.6, 16, 1, 16);
        e.closePath();
        e.moveTo(1, 7);
        e.bezierCurveTo(.4, 7, 0, 6.6, 0, 6);
        e.lineTo(0, 1);
        e.bezierCurveTo(0, .4, .4, 0, 1, 0);
        e.bezierCurveTo(1.6, 0, 2, .4, 2, 1);
        e.lineTo(2, 6);
        e.bezierCurveTo(2, 6.6, 1.6, 7, 1, 7);
        e.closePath();
        this.graphics = e
    };
    a.DashLine2 = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.AQUA.red;
        var b = StyleManager.AQUA.green;
        var c = StyleManager.AQUA.blue;
        var d = StyleManager.AQUA.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(501, 2);
        e.lineTo(496, 2);
        e.bezierCurveTo(495.4, 2, 495, 1.6, 495, 1);
        e.bezierCurveTo(495, .4, 495.4, 0, 496, 0);
        e.lineTo(501, 0);
        e.bezierCurveTo(501.6, 0, 502, .4, 502, 1);
        e.bezierCurveTo(502, 1.6, 501.6, 2, 501, 2);
        e.closePath();
        e.moveTo(492, 2);
        e.lineTo(487, 2);
        e.bezierCurveTo(486.4, 2, 486, 1.6, 486, 1);
        e.bezierCurveTo(486, .4, 486.4, 0, 487, 0);
        e.lineTo(492, 0);
        e.bezierCurveTo(492.6, 0, 493, .4, 493, 1);
        e.bezierCurveTo(493, 1.6, 492.6, 2, 492, 2);
        e.closePath();
        e.moveTo(483, 2);
        e.lineTo(478, 2);
        e.bezierCurveTo(477.4, 2, 477, 1.6, 477, 1);
        e.bezierCurveTo(477, .4, 477.4, 0, 478, 0);
        e.lineTo(483, 0);
        e.bezierCurveTo(483.6, 0, 484, .4, 484, 1);
        e.bezierCurveTo(484, 1.6, 483.6, 2, 483, 2);
        e.closePath();
        e.moveTo(474, 2);
        e.lineTo(469, 2);
        e.bezierCurveTo(468.4, 2, 468, 1.6, 468, 1);
        e.bezierCurveTo(468, .4, 468.4, 0, 469, 0);
        e.lineTo(474, 0);
        e.bezierCurveTo(474.6, 0, 475, .4, 475, 1);
        e.bezierCurveTo(475, 1.6, 474.6, 2, 474, 2);
        e.closePath();
        e.moveTo(465, 2);
        e.lineTo(460, 2);
        e.bezierCurveTo(459.4, 2, 459, 1.6, 459, 1);
        e.bezierCurveTo(459, .4, 459.4, 0, 460, 0);
        e.lineTo(465, 0);
        e.bezierCurveTo(465.6, 0, 466, .4, 466, 1);
        e.bezierCurveTo(466, 1.6, 465.6, 2, 465, 2);
        e.closePath();
        e.moveTo(456, 2);
        e.lineTo(451, 2);
        e.bezierCurveTo(450.4, 2, 450, 1.6, 450, 1);
        e.bezierCurveTo(450, .4, 450.4, 0, 451, 0);
        e.lineTo(456, 0);
        e.bezierCurveTo(456.6, 0, 457, .4, 457, 1);
        e.bezierCurveTo(457, 1.6, 456.6, 2, 456, 2);
        e.closePath();
        e.moveTo(447, 2);
        e.lineTo(442, 2);
        e.bezierCurveTo(441.4, 2, 441, 1.6, 441, 1);
        e.bezierCurveTo(441, .4, 441.4, 0, 442, 0);
        e.lineTo(447, 0);
        e.bezierCurveTo(447.6, 0, 448, .4, 448, 1);
        e.bezierCurveTo(448, 1.6, 447.6, 2, 447, 2);
        e.closePath();
        e.moveTo(438, 2);
        e.lineTo(433, 2);
        e.bezierCurveTo(432.4, 2, 432, 1.6, 432, 1);
        e.bezierCurveTo(432, .4, 432.4, 0, 433, 0);
        e.lineTo(438, 0);
        e.bezierCurveTo(438.6, 0, 439, .4, 439, 1);
        e.bezierCurveTo(439, 1.6, 438.6, 2, 438, 2);
        e.closePath();
        e.moveTo(429, 2);
        e.lineTo(424, 2);
        e.bezierCurveTo(423.4, 2, 423, 1.6, 423, 1);
        e.bezierCurveTo(423, .4, 423.4, 0, 424, 0);
        e.lineTo(429, 0);
        e.bezierCurveTo(429.6, 0, 430, .4, 430, 1);
        e.bezierCurveTo(430, 1.6, 429.6, 2, 429, 2);
        e.closePath();
        e.moveTo(420, 2);
        e.lineTo(415, 2);
        e.bezierCurveTo(414.4, 2, 414, 1.6, 414, 1);
        e.bezierCurveTo(414, .4, 414.4, 0, 415, 0);
        e.lineTo(420, 0);
        e.bezierCurveTo(420.6, 0, 421, .4, 421, 1);
        e.bezierCurveTo(421, 1.6, 420.6, 2, 420, 2);
        e.closePath();
        e.moveTo(411, 2);
        e.lineTo(406, 2);
        e.bezierCurveTo(405.4, 2, 405, 1.6, 405, 1);
        e.bezierCurveTo(405, .4, 405.4, 0, 406, 0);
        e.lineTo(411, 0);
        e.bezierCurveTo(411.6, 0, 412, .4, 412, 1);
        e.bezierCurveTo(412, 1.6, 411.6, 2, 411, 2);
        e.closePath();
        e.moveTo(402, 2);
        e.lineTo(397, 2);
        e.bezierCurveTo(396.4, 2, 396, 1.6, 396, 1);
        e.bezierCurveTo(396, .4, 396.4, 0, 397, 0);
        e.lineTo(402, 0);
        e.bezierCurveTo(402.6, 0, 403, .4, 403, 1);
        e.bezierCurveTo(403, 1.6, 402.6, 2, 402, 2);
        e.closePath();
        e.moveTo(393, 2);
        e.lineTo(388, 2);
        e.bezierCurveTo(387.4, 2, 387, 1.6, 387, 1);
        e.bezierCurveTo(387, .4, 387.4, 0, 388, 0);
        e.lineTo(393, 0);
        e.bezierCurveTo(393.6, 0, 394, .4, 394, 1);
        e.bezierCurveTo(394, 1.6, 393.6, 2, 393, 2);
        e.closePath();
        e.moveTo(384, 2);
        e.lineTo(379, 2);
        e.bezierCurveTo(378.4, 2, 378, 1.6, 378, 1);
        e.bezierCurveTo(378, .4, 378.4, 0, 379, 0);
        e.lineTo(384, 0);
        e.bezierCurveTo(384.6, 0, 385, .4, 385, 1);
        e.bezierCurveTo(385, 1.6, 384.6, 2, 384, 2);
        e.closePath();
        e.moveTo(375, 2);
        e.lineTo(370, 2);
        e.bezierCurveTo(369.4, 2, 369, 1.6, 369, 1);
        e.bezierCurveTo(369, .4, 369.4, 0, 370, 0);
        e.lineTo(375, 0);
        e.bezierCurveTo(375.6, 0, 376, .4, 376, 1);
        e.bezierCurveTo(376, 1.6, 375.6, 2, 375, 2);
        e.closePath();
        e.moveTo(366, 2);
        e.lineTo(361, 2);
        e.bezierCurveTo(360.4, 2, 360, 1.6, 360, 1);
        e.bezierCurveTo(360, .4, 360.4, 0, 361, 0);
        e.lineTo(366, 0);
        e.bezierCurveTo(366.6, 0, 367, .4, 367, 1);
        e.bezierCurveTo(367, 1.6, 366.6, 2, 366, 2);
        e.closePath();
        e.moveTo(357, 2);
        e.lineTo(352, 2);
        e.bezierCurveTo(351.4, 2, 351, 1.6, 351, 1);
        e.bezierCurveTo(351, .4, 351.4, 0, 352, 0);
        e.lineTo(357, 0);
        e.bezierCurveTo(357.6, 0, 358, .4, 358, 1);
        e.bezierCurveTo(358, 1.6, 357.6, 2, 357, 2);
        e.closePath();
        e.moveTo(348, 2);
        e.lineTo(343, 2);
        e.bezierCurveTo(342.4, 2, 342, 1.6, 342, 1);
        e.bezierCurveTo(342, .4, 342.4, 0, 343, 0);
        e.lineTo(348, 0);
        e.bezierCurveTo(348.6, 0, 349, .4, 349, 1);
        e.bezierCurveTo(349, 1.6, 348.6, 2, 348, 2);
        e.closePath();
        e.moveTo(339, 2);
        e.lineTo(334, 2);
        e.bezierCurveTo(333.4, 2, 333, 1.6, 333, 1);
        e.bezierCurveTo(333, .4, 333.4, 0, 334, 0);
        e.lineTo(339, 0);
        e.bezierCurveTo(339.6, 0, 340, .4, 340, 1);
        e.bezierCurveTo(340, 1.6, 339.6, 2, 339, 2);
        e.closePath();
        e.moveTo(330, 2);
        e.lineTo(325, 2);
        e.bezierCurveTo(324.4, 2, 324, 1.6, 324, 1);
        e.bezierCurveTo(324, .4, 324.4, 0, 325, 0);
        e.lineTo(330, 0);
        e.bezierCurveTo(330.6, 0, 331, .4, 331, 1);
        e.bezierCurveTo(331, 1.6, 330.6, 2, 330, 2);
        e.closePath();
        e.moveTo(321, 2);
        e.lineTo(316, 2);
        e.bezierCurveTo(315.4, 2, 315, 1.6, 315, 1);
        e.bezierCurveTo(315, .4, 315.4, 0, 316, 0);
        e.lineTo(321, 0);
        e.bezierCurveTo(321.6, 0, 322, .4, 322, 1);
        e.bezierCurveTo(322, 1.6, 321.6, 2, 321, 2);
        e.closePath();
        e.moveTo(312, 2);
        e.lineTo(307, 2);
        e.bezierCurveTo(306.4, 2, 306, 1.6, 306, 1);
        e.bezierCurveTo(306, .4, 306.4, 0, 307, 0);
        e.lineTo(312, 0);
        e.bezierCurveTo(312.6, 0, 313, .4, 313, 1);
        e.bezierCurveTo(313, 1.6, 312.6, 2, 312, 2);
        e.closePath();
        e.moveTo(303, 2);
        e.lineTo(298, 2);
        e.bezierCurveTo(297.4, 2, 297, 1.6, 297, 1);
        e.bezierCurveTo(297, .4, 297.4, 0, 298, 0);
        e.lineTo(303, 0);
        e.bezierCurveTo(303.6, 0, 304, .4, 304, 1);
        e.bezierCurveTo(304, 1.6, 303.6, 2, 303, 2);
        e.closePath();
        e.moveTo(294, 2);
        e.lineTo(289, 2);
        e.bezierCurveTo(288.4, 2, 288, 1.6, 288, 1);
        e.bezierCurveTo(288, .4, 288.4, 0, 289, 0);
        e.lineTo(294, 0);
        e.bezierCurveTo(294.6, 0, 295, .4, 295, 1);
        e.bezierCurveTo(295, 1.6, 294.6, 2, 294, 2);
        e.closePath();
        e.moveTo(285, 2);
        e.lineTo(280, 2);
        e.bezierCurveTo(279.4, 2, 279, 1.6, 279, 1);
        e.bezierCurveTo(279, .4, 279.4, 0, 280, 0);
        e.lineTo(285, 0);
        e.bezierCurveTo(285.6, 0, 286, .4, 286, 1);
        e.bezierCurveTo(286, 1.6, 285.6, 2, 285, 2);
        e.closePath();
        e.moveTo(276, 2);
        e.lineTo(271, 2);
        e.bezierCurveTo(270.4, 2, 270, 1.6, 270, 1);
        e.bezierCurveTo(270, .4, 270.4, 0, 271, 0);
        e.lineTo(276, 0);
        e.bezierCurveTo(276.6, 0, 277, .4, 277, 1);
        e.bezierCurveTo(277, 1.6, 276.6, 2, 276, 2);
        e.closePath();
        e.moveTo(267, 2);
        e.lineTo(262, 2);
        e.bezierCurveTo(261.4, 2, 261, 1.6, 261, 1);
        e.bezierCurveTo(261, .4, 261.4, 0, 262, 0);
        e.lineTo(267, 0);
        e.bezierCurveTo(267.6, 0, 268, .4, 268, 1);
        e.bezierCurveTo(268, 1.6, 267.6, 2, 267, 2);
        e.closePath();
        e.moveTo(258, 2);
        e.lineTo(253, 2);
        e.bezierCurveTo(252.4, 2, 252, 1.6, 252, 1);
        e.bezierCurveTo(252, .4, 252.4, 0, 253, 0);
        e.lineTo(258, 0);
        e.bezierCurveTo(258.6, 0, 259, .4, 259, 1);
        e.bezierCurveTo(259, 1.6, 258.6, 2, 258, 2);
        e.closePath();
        e.moveTo(249, 2);
        e.lineTo(244, 2);
        e.bezierCurveTo(243.4, 2, 243, 1.6, 243, 1);
        e.bezierCurveTo(243, .4, 243.4, 0, 244, 0);
        e.lineTo(249, 0);
        e.bezierCurveTo(249.6, 0, 250, .4, 250, 1);
        e.bezierCurveTo(250, 1.6, 249.6, 2, 249, 2);
        e.closePath();
        e.moveTo(240, 2);
        e.lineTo(235, 2);
        e.bezierCurveTo(234.4, 2, 234, 1.6, 234, 1);
        e.bezierCurveTo(234, .4, 234.4, 0, 235, 0);
        e.lineTo(240, 0);
        e.bezierCurveTo(240.6, 0, 241, .4, 241, 1);
        e.bezierCurveTo(241, 1.6, 240.6, 2, 240, 2);
        e.closePath();
        e.moveTo(231, 2);
        e.lineTo(226, 2);
        e.bezierCurveTo(225.4, 2, 225, 1.6, 225, 1);
        e.bezierCurveTo(225, .4, 225.4, 0, 226, 0);
        e.lineTo(231, 0);
        e.bezierCurveTo(231.6, 0, 232, .4, 232, 1);
        e.bezierCurveTo(232, 1.6, 231.6, 2, 231, 2);
        e.closePath();
        e.moveTo(222, 2);
        e.lineTo(217, 2);
        e.bezierCurveTo(216.4, 2, 216, 1.6, 216, 1);
        e.bezierCurveTo(216, .4, 216.4, 0, 217, 0);
        e.lineTo(222, 0);
        e.bezierCurveTo(222.6, 0, 223, .4, 223, 1);
        e.bezierCurveTo(223, 1.6, 222.6, 2, 222, 2);
        e.closePath();
        e.moveTo(213, 2);
        e.lineTo(208, 2);
        e.bezierCurveTo(207.4, 2, 207, 1.6, 207, 1);
        e.bezierCurveTo(207, .4, 207.4, 0, 208, 0);
        e.lineTo(213, 0);
        e.bezierCurveTo(213.6, 0, 214, .4, 214, 1);
        e.bezierCurveTo(214, 1.6, 213.6, 2, 213, 2);
        e.closePath();
        e.moveTo(204, 2);
        e.lineTo(199, 2);
        e.bezierCurveTo(198.4, 2, 198, 1.6, 198, 1);
        e.bezierCurveTo(198, .4, 198.4, 0, 199, 0);
        e.lineTo(204, 0);
        e.bezierCurveTo(204.6, 0, 205, .4, 205, 1);
        e.bezierCurveTo(205, 1.6, 204.6, 2, 204, 2);
        e.closePath();
        e.moveTo(195, 2);
        e.lineTo(190, 2);
        e.bezierCurveTo(189.4, 2, 189, 1.6, 189, 1);
        e.bezierCurveTo(189, .4, 189.4, 0, 190, 0);
        e.lineTo(195, 0);
        e.bezierCurveTo(195.6, 0, 196, .4, 196, 1);
        e.bezierCurveTo(196, 1.6, 195.6, 2, 195, 2);
        e.closePath();
        e.moveTo(186, 2);
        e.lineTo(181, 2);
        e.bezierCurveTo(180.4, 2, 180, 1.6, 180, 1);
        e.bezierCurveTo(180, .4, 180.4, 0, 181, 0);
        e.lineTo(186, 0);
        e.bezierCurveTo(186.6, 0, 187, .4, 187, 1);
        e.bezierCurveTo(187, 1.6, 186.6, 2, 186, 2);
        e.closePath();
        e.moveTo(177, 2);
        e.lineTo(172, 2);
        e.bezierCurveTo(171.4, 2, 171, 1.6, 171, 1);
        e.bezierCurveTo(171, .4, 171.4, 0, 172, 0);
        e.lineTo(177, 0);
        e.bezierCurveTo(177.6, 0, 178, .4, 178, 1);
        e.bezierCurveTo(178, 1.6, 177.6, 2, 177, 2);
        e.closePath();
        e.moveTo(168, 2);
        e.lineTo(163, 2);
        e.bezierCurveTo(162.4, 2, 162, 1.6, 162, 1);
        e.bezierCurveTo(162, .4, 162.4, 0, 163, 0);
        e.lineTo(168, 0);
        e.bezierCurveTo(168.6, 0, 169, .4, 169, 1);
        e.bezierCurveTo(169, 1.6, 168.6, 2, 168, 2);
        e.closePath();
        e.moveTo(159, 2);
        e.lineTo(154, 2);
        e.bezierCurveTo(153.4, 2, 153, 1.6, 153, 1);
        e.bezierCurveTo(153, .4, 153.4, 0, 154, 0);
        e.lineTo(159, 0);
        e.bezierCurveTo(159.6, 0, 160, .4, 160, 1);
        e.bezierCurveTo(160, 1.6, 159.6, 2, 159, 2);
        e.closePath();
        e.moveTo(150, 2);
        e.lineTo(145, 2);
        e.bezierCurveTo(144.4, 2, 144, 1.6, 144, 1);
        e.bezierCurveTo(144, .4, 144.4, 0, 145, 0);
        e.lineTo(150, 0);
        e.bezierCurveTo(150.6, 0, 151, .4, 151, 1);
        e.bezierCurveTo(151, 1.6, 150.6, 2, 150, 2);
        e.closePath();
        e.moveTo(141, 2);
        e.lineTo(136, 2);
        e.bezierCurveTo(135.4, 2, 135, 1.6, 135, 1);
        e.bezierCurveTo(135, .4, 135.4, 0, 136, 0);
        e.lineTo(141, 0);
        e.bezierCurveTo(141.6, 0, 142, .4, 142, 1);
        e.bezierCurveTo(142, 1.6, 141.6, 2, 141, 2);
        e.closePath();
        e.moveTo(132, 2);
        e.lineTo(127, 2);
        e.bezierCurveTo(126.4, 2, 126, 1.6, 126, 1);
        e.bezierCurveTo(126, .4, 126.4, 0, 127, 0);
        e.lineTo(132, 0);
        e.bezierCurveTo(132.6, 0, 133, .4, 133, 1);
        e.bezierCurveTo(133, 1.6, 132.6, 2, 132, 2);
        e.closePath();
        e.moveTo(123, 2);
        e.lineTo(118, 2);
        e.bezierCurveTo(117.4, 2, 117, 1.6, 117, 1);
        e.bezierCurveTo(117, .4, 117.4, 0, 118, 0);
        e.lineTo(123, 0);
        e.bezierCurveTo(123.6, 0, 124, .4, 124, 1);
        e.bezierCurveTo(124, 1.6, 123.6, 2, 123, 2);
        e.closePath();
        e.moveTo(114, 2);
        e.lineTo(109, 2);
        e.bezierCurveTo(108.4, 2, 108, 1.6, 108, 1);
        e.bezierCurveTo(108, .4, 108.4, 0, 109, 0);
        e.lineTo(114, 0);
        e.bezierCurveTo(114.6, 0, 115, .4, 115, 1);
        e.bezierCurveTo(115, 1.6, 114.6, 2, 114, 2);
        e.closePath();
        e.moveTo(105, 2);
        e.lineTo(100, 2);
        e.bezierCurveTo(99.4, 2, 99, 1.6, 99, 1);
        e.bezierCurveTo(99, .4, 99.4, 0, 100, 0);
        e.lineTo(105, 0);
        e.bezierCurveTo(105.6, 0, 106, .4, 106, 1);
        e.bezierCurveTo(106, 1.6, 105.6, 2, 105, 2);
        e.closePath();
        e.moveTo(96, 2);
        e.lineTo(91, 2);
        e.bezierCurveTo(90.4, 2, 90, 1.6, 90, 1);
        e.bezierCurveTo(90, .4, 90.4, 0, 91, 0);
        e.lineTo(96, 0);
        e.bezierCurveTo(96.6, 0, 97, .4, 97, 1);
        e.bezierCurveTo(97, 1.6, 96.6, 2, 96, 2);
        e.closePath();
        e.moveTo(87, 2);
        e.lineTo(82, 2);
        e.bezierCurveTo(81.4, 2, 81, 1.6, 81, 1);
        e.bezierCurveTo(81, .4, 81.4, 0, 82, 0);
        e.lineTo(87, 0);
        e.bezierCurveTo(87.6, 0, 88, .4, 88, 1);
        e.bezierCurveTo(88, 1.6, 87.6, 2, 87, 2);
        e.closePath();
        e.moveTo(78, 2);
        e.lineTo(73, 2);
        e.bezierCurveTo(72.4, 2, 72, 1.6, 72, 1);
        e.bezierCurveTo(72, .4, 72.4, 0, 73, 0);
        e.lineTo(78, 0);
        e.bezierCurveTo(78.6, 0, 79, .4, 79, 1);
        e.bezierCurveTo(79, 1.6, 78.6, 2, 78, 2);
        e.closePath();
        e.moveTo(69, 2);
        e.lineTo(64, 2);
        e.bezierCurveTo(63.4, 2, 63, 1.6, 63, 1);
        e.bezierCurveTo(63, .4, 63.4, 0, 64, 0);
        e.lineTo(69, 0);
        e.bezierCurveTo(69.6, 0, 70, .4, 70, 1);
        e.bezierCurveTo(70, 1.6, 69.6, 2, 69, 2);
        e.closePath();
        e.moveTo(60, 2);
        e.lineTo(55, 2);
        e.bezierCurveTo(54.4, 2, 54, 1.6, 54, 1);
        e.bezierCurveTo(54, .4, 54.4, 0, 55, 0);
        e.lineTo(60, 0);
        e.bezierCurveTo(60.6, 0, 61, .4, 61, 1);
        e.bezierCurveTo(61, 1.6, 60.6, 2, 60, 2);
        e.closePath();
        e.moveTo(51, 2);
        e.lineTo(46, 2);
        e.bezierCurveTo(45.4, 2, 45, 1.6, 45, 1);
        e.bezierCurveTo(45, .4, 45.4, 0, 46, 0);
        e.lineTo(51, 0);
        e.bezierCurveTo(51.6, 0, 52, .4, 52, 1);
        e.bezierCurveTo(52, 1.6, 51.6, 2, 51, 2);
        e.closePath();
        e.moveTo(42, 2);
        e.lineTo(37, 2);
        e.bezierCurveTo(36.4, 2, 36, 1.6, 36, 1);
        e.bezierCurveTo(36, .4, 36.4, 0, 37, 0);
        e.lineTo(42, 0);
        e.bezierCurveTo(42.6, 0, 43, .4, 43, 1);
        e.bezierCurveTo(43, 1.6, 42.6, 2, 42, 2);
        e.closePath();
        e.moveTo(33, 2);
        e.lineTo(28, 2);
        e.bezierCurveTo(27.4, 2, 27, 1.6, 27, 1);
        e.bezierCurveTo(27, .4, 27.4, 0, 28, 0);
        e.lineTo(33, 0);
        e.bezierCurveTo(33.6, 0, 34, .4, 34, 1);
        e.bezierCurveTo(34, 1.6, 33.6, 2, 33, 2);
        e.closePath();
        e.moveTo(24, 2);
        e.lineTo(19, 2);
        e.bezierCurveTo(18.4, 2, 18, 1.6, 18, 1);
        e.bezierCurveTo(18, .4, 18.4, 0, 19, 0);
        e.lineTo(24, 0);
        e.bezierCurveTo(24.6, 0, 25, .4, 25, 1);
        e.bezierCurveTo(25, 1.6, 24.6, 2, 24, 2);
        e.closePath();
        e.moveTo(15, 2);
        e.lineTo(10, 2);
        e.bezierCurveTo(9.4, 2, 9, 1.6, 9, 1);
        e.bezierCurveTo(9, .4, 9.4, 0, 10, 0);
        e.lineTo(15, 0);
        e.bezierCurveTo(15.6, 0, 16, .4, 16, 1);
        e.bezierCurveTo(16, 1.6, 15.6, 2, 15, 2);
        e.closePath();
        e.moveTo(6, 2);
        e.lineTo(1, 2);
        e.bezierCurveTo(.4, 2, 0, 1.6, 0, 1);
        e.bezierCurveTo(0, .4, .4, 0, 1, 0);
        e.lineTo(6, 0);
        e.bezierCurveTo(6.6, 0, 7, .4, 7, 1);
        e.bezierCurveTo(7, 1.6, 6.6, 2, 6, 2);
        e.closePath();
        this.graphics = e
    };
    a.DashRect = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.YELLOW.red;
        var b = StyleManager.YELLOW.green;
        var c = StyleManager.YELLOW.blue;
        var d = StyleManager.YELLOW.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(42, 22.1);
        e.lineTo(42, 24.3);
        e.lineTo(0, 24.3);
        e.lineTo(0, 0);
        e.lineTo(40.2, 0);
        e.lineTo(40.2, 11.3);
        e.lineTo(21.1, 11.3);
        e.lineTo(21.1, 13.2);
        e.lineTo(34, 13.2);
        e.lineTo(34, 22.1);
        e.lineTo(42, 22.1);
        e.closePath();
        e.moveTo(0, 28.7);
        e.lineTo(0, 26.5);
        e.lineTo(42, 26.5);
        e.lineTo(42, 28.7);
        e.lineTo(0, 28.7);
        e.closePath();
        e.moveTo(0, 33.2);
        e.lineTo(0, 30.8);
        e.lineTo(42, 30.8);
        e.lineTo(42, 33.2);
        e.lineTo(0, 33.2);
        e.closePath();
        e.moveTo(0, 37.6);
        e.lineTo(0, 35.5);
        e.lineTo(42, 35.5);
        e.lineTo(42, 37.6);
        e.lineTo(0, 37.6);
        e.closePath();
        e.moveTo(0, 39.8);
        e.lineTo(42, 39.8);
        e.lineTo(42, 42);
        e.lineTo(0, 42);
        e.lineTo(0, 39.8);
        e.closePath();
        e.moveTo(66.7, 42);
        e.lineTo(53.8, 17.2);
        e.lineTo(63.4, 17.2);
        e.lineTo(64.5, 15.2);
        e.lineTo(52.7, 15.2);
        e.lineTo(51.6, 12.8);
        e.lineTo(65.6, 12.8);
        e.lineTo(66.7, 10.9);
        e.lineTo(50.5, 10.9);
        e.lineTo(49.4, 8.5);
        e.lineTo(67.8, 8.5);
        e.lineTo(69, 6.6);
        e.lineTo(48.4, 6.6);
        e.lineTo(47.2, 4.5);
        e.lineTo(70, 4.5);
        e.lineTo(71.1, 2.2);
        e.lineTo(46, 2.2);
        e.lineTo(45.3, .2);
        e.lineTo(88.5, .2);
        e.lineTo(66.7, 42);
        e.closePath();
        e.moveTo(133.8, 22.1);
        e.lineTo(133.8, 24.3);
        e.lineTo(91.9, 24.3);
        e.lineTo(91.9, 0);
        e.lineTo(132.1, 0);
        e.lineTo(132.1, 11.3);
        e.lineTo(112.9, 11.3);
        e.lineTo(112.9, 13.2);
        e.lineTo(125.8, 13.2);
        e.lineTo(125.8, 22.1);
        e.lineTo(133.8, 22.1);
        e.closePath();
        e.moveTo(91.9, 28.7);
        e.lineTo(91.9, 26.5);
        e.lineTo(133.8, 26.5);
        e.lineTo(133.8, 28.7);
        e.lineTo(91.9, 28.7);
        e.closePath();
        e.moveTo(91.9, 33.2);
        e.lineTo(91.9, 30.8);
        e.lineTo(133.8, 30.8);
        e.lineTo(133.8, 33.2);
        e.lineTo(91.9, 33.2);
        e.closePath();
        e.moveTo(91.9, 37.6);
        e.lineTo(91.9, 35.5);
        e.lineTo(133.8, 35.5);
        e.lineTo(133.8, 37.6);
        e.lineTo(91.9, 37.6);
        e.closePath();
        e.moveTo(91.9, 39.8);
        e.lineTo(133.8, 39.8);
        e.lineTo(133.8, 42);
        e.lineTo(91.9, 42);
        e.lineTo(91.9, 39.8);
        e.closePath();
        e.moveTo(137.2, 42);
        e.lineTo(137.2, .1);
        e.lineTo(169.1, .1);
        e.bezierCurveTo(174.8, .1, 180.4, 4.6, 180.4, 10.2);
        e.bezierCurveTo(180.4, 15.9, 178.3, 19.4, 173.3, 21.1);
        e.lineTo(180.4, 24.6);
        e.lineTo(180.4, 26.7);
        e.lineTo(148, 11.8);
        e.lineTo(148, 13.8);
        e.lineTo(180.4, 29.1);
        e.lineTo(180.4, 31);
        e.lineTo(148, 16.2);
        e.lineTo(148, 18.2);
        e.lineTo(180.4, 33.5);
        e.lineTo(180.4, 35.5);
        e.lineTo(148, 20.3);
        e.lineTo(148, 22.7);
        e.lineTo(180.4, 38);
        e.lineTo(180.4, 39.9);
        e.lineTo(148, 24.6);
        e.lineTo(148, 27);
        e.lineTo(180.4, 42);
        e.lineTo(180.4, 44.3);
        e.lineTo(175.9, 42);
        e.lineTo(137.2, 42);
        e.closePath();
        e.moveTo(207.3, 33.4);
        e.lineTo(207.3, 31.2);
        e.lineTo(183.8, 19.7);
        e.lineTo(183.8, 17.5);
        e.lineTo(207.3, 29);
        e.lineTo(207.3, 26.8);
        e.lineTo(183.8, 15.3);
        e.lineTo(183.8, 13.1);
        e.lineTo(207.3, 24.6);
        e.lineTo(207.3, 22.4);
        e.lineTo(183.8, 10.9);
        e.lineTo(183.8, 8.7);
        e.lineTo(207.3, 20.5);
        e.lineTo(207.3, 18.3);
        e.lineTo(183.8, 6.6);
        e.lineTo(183.8, 4.4);
        e.lineTo(207.3, 16);
        e.lineTo(207.3, 13.9);
        e.lineTo(183.8, 2.2);
        e.lineTo(183.8, 0);
        e.lineTo(203.8, 10);
        e.lineTo(223.6, 0);
        e.lineTo(223.6, 22.2);
        e.lineTo(214.3, 26.8);
        e.lineTo(214.3, 42);
        e.lineTo(194.1, 42);
        e.lineTo(194.1, 26.8);
        e.lineTo(207.3, 33.4);
        e.closePath();
        e.moveTo(226.7, 2.2);
        e.lineTo(226.7, .1);
        e.lineTo(270.1, .1);
        e.lineTo(270.1, 2.2);
        e.lineTo(226.7, 2.2);
        e.closePath();
        e.moveTo(226.7, 6.6);
        e.lineTo(226.7, 4.5);
        e.lineTo(270.1, 4.5);
        e.lineTo(270.1, 6.6);
        e.lineTo(226.7, 6.6);
        e.closePath();
        e.moveTo(226.7, 11.1);
        e.lineTo(226.7, 8.5);
        e.lineTo(270.1, 8.5);
        e.lineTo(270.1, 11.1);
        e.lineTo(226.7, 11.1);
        e.closePath();
        e.moveTo(226.7, 15.4);
        e.lineTo(226.7, 13);
        e.lineTo(270.1, 13);
        e.lineTo(270.1, 15.4);
        e.lineTo(226.7, 15.4);
        e.closePath();
        e.moveTo(237.7, 42);
        e.lineTo(237.7, 19.8);
        e.lineTo(226.7, 19.8);
        e.lineTo(226.7, 17.5);
        e.lineTo(270.1, 17.5);
        e.lineTo(270.1, 19.8);
        e.lineTo(259.1, 19.8);
        e.lineTo(259.1, 42);
        e.lineTo(237.7, 42);
        e.closePath();
        e.moveTo(273.4, 11.2);
        e.lineTo(273.4, .1);
        e.lineTo(294.3, .1);
        e.lineTo(294.3, 9.3);
        e.lineTo(295.8, 9.3);
        e.lineTo(295.8, .1);
        e.lineTo(316.5, .1);
        e.lineTo(316.5, 11.2);
        e.lineTo(273.4, 11.2);
        e.closePath();
        e.moveTo(273.4, 15.7);
        e.lineTo(273.4, 13.3);
        e.lineTo(316.5, 13.3);
        e.lineTo(316.5, 15.7);
        e.lineTo(273.4, 15.7);
        e.closePath();
        e.moveTo(273.4, 20);
        e.lineTo(273.4, 17.6);
        e.lineTo(316.5, 17.6);
        e.lineTo(316.5, 20);
        e.lineTo(273.4, 20);
        e.closePath();
        e.moveTo(273.4, 24.4);
        e.lineTo(273.4, 22);
        e.lineTo(316.5, 22);
        e.lineTo(316.5, 24.4);
        e.lineTo(273.4, 24.4);
        e.closePath();
        e.moveTo(273.4, 26.4);
        e.lineTo(316.5, 26.4);
        e.lineTo(316.5, 28.8);
        e.lineTo(273.4, 28.8);
        e.lineTo(273.4, 26.4);
        e.closePath();
        e.moveTo(294.3, 42);
        e.lineTo(273.4, 42);
        e.lineTo(273.4, 30.8);
        e.lineTo(316.5, 30.8);
        e.lineTo(316.5, 42);
        e.lineTo(295.8, 42);
        e.lineTo(295.8, 32.8);
        e.lineTo(294.3, 32.8);
        e.lineTo(294.3, 42);
        e.closePath();
        e.moveTo(319.9, 2);
        e.lineTo(319.9, .1);
        e.lineTo(340.7, .1);
        e.lineTo(340.7, 2);
        e.lineTo(319.9, 2);
        e.closePath();
        e.moveTo(319.9, 6.4);
        e.lineTo(319.9, 4.4);
        e.lineTo(340.7, 4.4);
        e.lineTo(340.7, 6.4);
        e.lineTo(319.9, 6.4);
        e.closePath();
        e.moveTo(319.9, 10.8);
        e.lineTo(319.9, 8.8);
        e.lineTo(340.7, 8.8);
        e.lineTo(340.7, 10.8);
        e.lineTo(319.9, 10.8);
        e.closePath();
        e.moveTo(319.9, 15.2);
        e.lineTo(319.9, 13.2);
        e.lineTo(340.7, 13.2);
        e.lineTo(340.7, 15.2);
        e.lineTo(319.9, 15.2);
        e.closePath();
        e.moveTo(319.9, 42);
        e.lineTo(319.9, 17.6);
        e.lineTo(340.7, 17.6);
        e.lineTo(340.7, 42);
        e.lineTo(319.9, 42);
        e.closePath();
        e.moveTo(342.9, .1);
        e.lineTo(362.2, 9.7);
        e.lineTo(362.2, .1);
        e.lineTo(383, .1);
        e.lineTo(383, 22.2);
        e.lineTo(342.9, 2.1);
        e.lineTo(342.9, .1);
        e.closePath();
        e.moveTo(342.9, 6.5);
        e.lineTo(342.9, 4.6);
        e.lineTo(383, 24.3);
        e.lineTo(383, 26.7);
        e.lineTo(342.9, 6.5);
        e.closePath();
        e.moveTo(342.9, 11);
        e.lineTo(342.9, 8.6);
        e.lineTo(383, 28.8);
        e.lineTo(383, 31.2);
        e.lineTo(342.9, 11);
        e.closePath();
        e.moveTo(383, 35.1);
        e.lineTo(342.9, 15.4);
        e.lineTo(342.9, 13);
        e.lineTo(383, 33.1);
        e.lineTo(383, 35.1);
        e.closePath();
        e.moveTo(383, 39.6);
        e.lineTo(342.9, 19.8);
        e.lineTo(342.9, 17.5);
        e.lineTo(383, 37.5);
        e.lineTo(383, 39.6);
        e.closePath();
        e.moveTo(342.9, 42);
        e.lineTo(342.9, 21.9);
        e.lineTo(383, 42);
        e.lineTo(383, 44);
        e.lineTo(378.6, 42);
        e.lineTo(342.9, 42);
        e.closePath();
        e.moveTo(406, 42.2);
        e.bezierCurveTo(397.3, 42.2, 386.2, 33.7, 386.2, 21.1);
        e.bezierCurveTo(386.2, 8.5, 397.3, 0, 406, 0);
        e.lineTo(426.4, 0);
        e.lineTo(426.4, 17.5);
        e.lineTo(410.5, 17.5);
        e.lineTo(426.4, 25.4);
        e.lineTo(426.4, 27.4);
        e.lineTo(406, 17);
        e.lineTo(406, 19.5);
        e.lineTo(426.4, 29.9);
        e.lineTo(426.4, 31.8);
        e.lineTo(406, 21.4);
        e.lineTo(406, 23.8);
        e.lineTo(426.4, 34.2);
        e.lineTo(426.4, 36.3);
        e.lineTo(406, 25.9);
        e.lineTo(406, 28.2);
        e.lineTo(426.4, 38.6);
        e.lineTo(426.4, 40.7);
        e.lineTo(406, 30.3);
        e.lineTo(406, 32.2);
        e.lineTo(426.4, 42.9);
        e.lineTo(426.4, 45);
        e.lineTo(406, 34.7);
        e.lineTo(406, 36.6);
        e.lineTo(426.4, 47.3);
        e.lineTo(406, 47.3);
        e.lineTo(406, 42.2);
        e.closePath();
        this.graphics = e
    };
    a.Everything = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.ORANGE.red;
        var b = StyleManager.ORANGE.green;
        var c = StyleManager.ORANGE.blue;
        var d = StyleManager.ORANGE.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(0, .8);
        e.bezierCurveTo(0, .3, .3, 0, .7, 0);
        e.lineTo(44.2, 0);
        e.bezierCurveTo(44.6, 0, 45.1, .1, 45.1, .4);
        e.lineTo(45.1, 7.8);
        e.bezierCurveTo(45.1, 8.3, 44.8, 8.4, 44.5, 8.4);
        e.lineTo(34.3, 8.4);
        e.lineTo(34.3, 25.1);
        e.lineTo(44.5, 25.1);
        e.bezierCurveTo(44.9, 25.1, 45.1, 25.3, 45.1, 25.6);
        e.lineTo(45.1, 32.7);
        e.bezierCurveTo(45.1, 33.2, 45, 33.5, 44.5, 33.5);
        e.lineTo(.9, 33.5);
        e.bezierCurveTo(.2, 33.5, 0, 33.1, 0, 32.8);
        e.lineTo(0, 25.9);
        e.bezierCurveTo(0, 25.2, .3, 25, .6, 25);
        e.lineTo(10.7, 25);
        e.lineTo(10.7, 8.4);
        e.lineTo(.8, 8.4);
        e.bezierCurveTo(.4, 8.4, 0, 8.2, 0, 7.9);
        e.lineTo(0, .8);
        e.closePath();
        e.moveTo(89.5, 0);
        e.bezierCurveTo(89.9, 0, 90.4, .2, 90.9, .5);
        e.lineTo(113.8, 19.9);
        e.lineTo(113.8, 8.4);
        e.lineTo(104, 8.4);
        e.bezierCurveTo(103.3, 8.4, 102.9, 8.2, 102.9, 7.8);
        e.lineTo(102.9, 1);
        e.bezierCurveTo(102.9, .4, 103.3, 0, 103.6, 0);
        e.lineTo(135.4, 0);
        e.bezierCurveTo(136.2, 0, 136.4, .7, 136.4, 1.1);
        e.lineTo(136.4, 7.6);
        e.bezierCurveTo(136.4, 8.2, 135.9, 8.4, 135.4, 8.4);
        e.lineTo(125.9, 8.4);
        e.lineTo(125.9, 32.2);
        e.bezierCurveTo(125.9, 33, 125.6, 33.5, 125.1, 33.5);
        e.lineTo(97.6, 33.5);
        e.bezierCurveTo(97.3, 33.5, 96.8, 33.4, 96.5, 33.1);
        e.lineTo(71.4, 11.9);
        e.lineTo(71.4, 25);
        e.lineTo(81.7, 25);
        e.bezierCurveTo(82.2, 25, 82.8, 25.2, 82.8, 25.7);
        e.lineTo(82.8, 32.5);
        e.bezierCurveTo(82.8, 33.1, 82.4, 33.5, 81.9, 33.5);
        e.lineTo(49.4, 33.5);
        e.bezierCurveTo(48.9, 33.5, 48.7, 33.1, 48.7, 32.6);
        e.lineTo(48.7, 25.8);
        e.bezierCurveTo(48.7, 25.5, 48.9, 25, 49.8, 25);
        e.lineTo(59.5, 25);
        e.lineTo(59.5, 8.4);
        e.lineTo(49.5, 8.4);
        e.bezierCurveTo(49.2, 8.4, 48.8, 8.3, 48.8, 7.6);
        e.lineTo(48.8, .7);
        e.bezierCurveTo(48.8, .2, 49.2, 0, 49.9, 0);
        e.lineTo(89.5, 0);
        e.closePath();
        this.graphics = e
    };
    a.In = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.LIGHT_PURPLE.red;
        var b = StyleManager.LIGHT_PURPLE.green;
        var c = StyleManager.LIGHT_PURPLE.blue;
        var d = StyleManager.LIGHT_PURPLE.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(7.7, 55.9);
        e.lineTo(7.7, 2.8);
        e.lineTo(0, 2.8);
        e.lineTo(0, .5);
        e.lineTo(20.7, .5);
        e.lineTo(20.7, 2.8);
        e.lineTo(13, 2.8);
        e.lineTo(13, 55.9);
        e.lineTo(7.7, 55.9);
        e.closePath();
        e.moveTo(20, 2.1);
        e.lineTo(12.2, 2.1);
        e.lineTo(12.2, 55.2);
        e.lineTo(8.4, 55.2);
        e.lineTo(8.4, 2.1);
        e.lineTo(.7, 2.1);
        e.lineTo(.7, 1.3);
        e.lineTo(20, 1.3);
        e.lineTo(20, 2.1);
        e.closePath();
        e.moveTo(56.5, 55.9);
        e.lineTo(56.5, 21.3);
        e.lineTo(48.3, 21.3);
        e.lineTo(48.3, 55.9);
        e.lineTo(43, 55.9);
        e.lineTo(43, .5);
        e.lineTo(48.3, .5);
        e.lineTo(48.3, 19);
        e.lineTo(56.5, 19);
        e.lineTo(56.5, .5);
        e.lineTo(61.9, .5);
        e.lineTo(61.9, 55.9);
        e.lineTo(56.5, 55.9);
        e.closePath();
        e.moveTo(61.1, 55.2);
        e.lineTo(57.2, 55.2);
        e.lineTo(57.2, 20.6);
        e.lineTo(47.6, 20.6);
        e.lineTo(47.6, 55.2);
        e.lineTo(43.8, 55.2);
        e.lineTo(43.8, 1.3);
        e.lineTo(47.6, 1.3);
        e.lineTo(47.6, 19.8);
        e.lineTo(57.2, 19.8);
        e.lineTo(57.2, 1.3);
        e.lineTo(61.1, 1.3);
        e.lineTo(61.1, 55.2);
        e.closePath();
        e.moveTo(132.2, 72.4);
        e.bezierCurveTo(122.7, 72.4, 115.4, 67.2, 110.4, 57);
        e.lineTo(110.4, 57);
        e.lineTo(106.3, 44.9);
        e.bezierCurveTo(104.1, 39.9, 100.9, 37.4, 96.6, 37.4);
        e.lineTo(91.1, 37.4);
        e.lineTo(91.1, 55.9);
        e.lineTo(85.8, 55.9);
        e.lineTo(85.8, .5);
        e.lineTo(96.6, .5);
        e.bezierCurveTo(102.5, .5, 107.6, 2.3, 111.8, 5.9);
        e.bezierCurveTo(116, 9.5, 118.1, 13.8, 118.1, 18.9);
        e.bezierCurveTo(118.1, 22.8, 116.7, 26.5, 113.8, 29.9);
        e.bezierCurveTo(111.3, 33.1, 108, 35.3, 104.1, 36.5);
        e.bezierCurveTo(106.5, 38, 108.6, 40.7, 110.6, 44.4);
        e.bezierCurveTo(112.1, 47.9, 113.6, 51.3, 115.1, 54.7);
        e.bezierCurveTo(117.4, 59.4, 120.3, 63.1, 123.7, 65.8);
        e.bezierCurveTo(126.8, 68.2, 130, 69.5, 133.1, 69.5);
        e.bezierCurveTo(134.6, 69.5, 135.8, 69.1, 136.9, 68.2);
        e.bezierCurveTo(138.1, 67.2, 138.7, 65.8, 138.7, 63.9);
        e.bezierCurveTo(138.7, 62.4, 138.1, 61.2, 136.7, 60.3);
        e.bezierCurveTo(135.3, 59.3, 133.7, 58.8, 132, 58.8);
        e.lineTo(131.2, 58.8);
        e.lineTo(131.2, 56.5);
        e.lineTo(132, 56.5);
        e.bezierCurveTo(134.2, 56.5, 136.2, 57.2, 138.1, 58.5);
        e.bezierCurveTo(140, 59.9, 141, 61.7, 141, 63.9);
        e.bezierCurveTo(141, 69.4, 138, 72.4, 132.2, 72.4);
        e.closePath();
        e.moveTo(96.6, 35);
        e.bezierCurveTo(101.1, 35, 105, 33.4, 108.1, 30.3);
        e.bezierCurveTo(111.2, 27.2, 112.8, 23.3, 112.8, 18.9);
        e.bezierCurveTo(112.8, 14.5, 111.2, 10.7, 108.1, 7.6);
        e.bezierCurveTo(105, 4.5, 101.1, 3, 96.6, 3);
        e.lineTo(91.1, 3);
        e.lineTo(91.1, 35);
        e.lineTo(96.6, 35);
        e.closePath();
        e.moveTo(140.3, 63.9);
        e.bezierCurveTo(140.3, 69.1, 137.6, 71.7, 132.2, 71.7);
        e.bezierCurveTo(123, 71.7, 116, 66.7, 111.1, 56.7);
        e.bezierCurveTo(109.7, 52.7, 108.3, 48.7, 107, 44.7);
        e.bezierCurveTo(104.6, 39.3, 101.2, 36.7, 96.6, 36.7);
        e.lineTo(90.3, 36.7);
        e.lineTo(90.3, 55.2);
        e.lineTo(86.5, 55.2);
        e.lineTo(86.5, 1.3);
        e.lineTo(96.6, 1.3);
        e.bezierCurveTo(102.3, 1.3, 107.2, 3, 111.3, 6.4);
        e.bezierCurveTo(115.3, 9.9, 117.3, 14.1, 117.3, 18.9);
        e.bezierCurveTo(117.3, 22.7, 116, 26.2, 113.3, 29.4);
        e.bezierCurveTo(110.4, 33, 106.7, 35.2, 102.1, 36.2);
        e.bezierCurveTo(105, 37.4, 107.6, 40.3, 109.9, 44.7);
        e.bezierCurveTo(111.4, 48.2, 112.9, 51.6, 114.4, 55);
        e.bezierCurveTo(116.8, 59.9, 119.8, 63.6, 123.3, 66.3);
        e.bezierCurveTo(126.5, 68.9, 129.8, 70.2, 133.1, 70.2);
        e.bezierCurveTo(134.8, 70.2, 136.2, 69.8, 137.4, 68.8);
        e.bezierCurveTo(138.8, 67.6, 139.5, 66, 139.5, 63.9);
        e.bezierCurveTo(139.5, 62.2, 138.7, 60.8, 137.2, 59.7);
        e.bezierCurveTo(135.6, 58.6, 133.9, 58, 132, 58);
        e.lineTo(132, 57.2);
        e.bezierCurveTo(134, 57.2, 135.9, 57.9, 137.7, 59.1);
        e.bezierCurveTo(139.4, 60.4, 140.3, 62, 140.3, 63.9);
        e.closePath();
        e.moveTo(113.5, 18.9);
        e.bezierCurveTo(113.5, 14.3, 111.9, 10.4, 108.6, 7.1);
        e.bezierCurveTo(105.3, 3.9, 101.3, 2.2, 96.6, 2.2);
        e.lineTo(90.3, 2.2);
        e.lineTo(90.3, 35.7);
        e.lineTo(96.6, 35.7);
        e.bezierCurveTo(101.3, 35.7, 105.3, 34.1, 108.6, 30.8);
        e.bezierCurveTo(111.9, 27.5, 113.5, 23.6, 113.5, 18.9);
        e.closePath();
        e.moveTo(141.9, 55.9);
        e.lineTo(141.9, .5);
        e.lineTo(156.9, .5);
        e.lineTo(156.9, 2.8);
        e.lineTo(147.2, 2.8);
        e.lineTo(147.2, 19);
        e.lineTo(158.6, 19);
        e.lineTo(158.6, 21.3);
        e.lineTo(147.2, 21.3);
        e.lineTo(147.2, 53.7);
        e.lineTo(158.6, 53.7);
        e.lineTo(158.6, 55.9);
        e.lineTo(141.9, 55.9);
        e.closePath();
        e.moveTo(157.9, 55.2);
        e.lineTo(142.7, 55.2);
        e.lineTo(142.7, 1.3);
        e.lineTo(156.2, 1.3);
        e.lineTo(156.2, 2.1);
        e.lineTo(146.5, 2.1);
        e.lineTo(146.5, 19.8);
        e.lineTo(157.9, 19.8);
        e.lineTo(157.9, 20.6);
        e.lineTo(146.5, 20.6);
        e.lineTo(146.5, 54.4);
        e.lineTo(157.9, 54.4);
        e.lineTo(157.9, 55.2);
        e.closePath();
        e.moveTo(181.1, 55.9);
        e.lineTo(181.1, .5);
        e.lineTo(196.2, .5);
        e.lineTo(196.2, 2.8);
        e.lineTo(186.4, 2.8);
        e.lineTo(186.4, 19);
        e.lineTo(197.9, 19);
        e.lineTo(197.9, 21.3);
        e.lineTo(186.4, 21.3);
        e.lineTo(186.4, 53.7);
        e.lineTo(197.9, 53.7);
        e.lineTo(197.9, 55.9);
        e.lineTo(181.1, 55.9);
        e.closePath();
        e.moveTo(197.1, 55.2);
        e.lineTo(181.9, 55.2);
        e.lineTo(181.9, 1.3);
        e.lineTo(195.4, 1.3);
        e.lineTo(195.4, 2.1);
        e.lineTo(185.7, 2.1);
        e.lineTo(185.7, 19.8);
        e.lineTo(197.1, 19.8);
        e.lineTo(197.1, 20.6);
        e.lineTo(185.7, 20.6);
        e.lineTo(185.7, 54.4);
        e.lineTo(197.1, 54.4);
        e.lineTo(197.1, 55.2);
        e.closePath();
        e.moveTo(240.1, 56.7);
        e.bezierCurveTo(234.6, 56.7, 229.8, 54.8, 225.8, 50.9);
        e.bezierCurveTo(221.9, 47.1, 219.8, 42.4, 219.8, 37);
        e.bezierCurveTo(219.8, 32.9, 221.1, 29.1, 223.5, 25.7);
        e.bezierCurveTo(225.9, 22.4, 229, 19.9, 232.9, 18.5);
        e.lineTo(233.5, 18.2);
        e.lineTo(234.5, 20.4);
        e.lineTo(233.8, 20.6);
        e.bezierCurveTo(230.3, 21.9, 227.5, 24, 225.3, 27);
        e.bezierCurveTo(223.1, 29.9, 222, 33.3, 222, 37);
        e.bezierCurveTo(222, 41.7, 223.9, 45.8, 227.5, 49.3);
        e.bezierCurveTo(231.2, 52.7, 235.4, 54.5, 240.1, 54.5);
        e.bezierCurveTo(244.2, 54.5, 247.6, 52.8, 250.6, 49.4);
        e.bezierCurveTo(253.5, 45.9, 255, 41.8, 255, 37);
        e.bezierCurveTo(255, 32.3, 253.7, 28.3, 251, 25.3);
        e.bezierCurveTo(248.4, 22.2, 245, 20.4, 240.9, 20);
        e.bezierCurveTo(237.8, 19.6, 235.2, 18.5, 233.3, 16.6);
        e.bezierCurveTo(231.4, 14.7, 230.5, 12.3, 230.6, 9.5);
        e.bezierCurveTo(230.8, 6.9, 231.7, 4.6, 233.5, 2.8);
        e.bezierCurveTo(235.3, .9, 237.5, 0, 240.1, 0);
        e.bezierCurveTo(242.8, 0, 245, .9, 246.9, 2.8);
        e.bezierCurveTo(248.7, 4.6, 249.6, 6.9, 249.6, 9.5);
        e.bezierCurveTo(249.6, 11, 249.3, 12.5, 248.5, 13.9);
        e.lineTo(248.2, 14.5);
        e.lineTo(246.4, 13.8);
        e.lineTo(246.8, 13);
        e.bezierCurveTo(247.3, 12, 247.6, 10.8, 247.6, 9.6);
        e.bezierCurveTo(247.6, 7.5, 246.9, 5.8, 245.5, 4.3);
        e.bezierCurveTo(244, 2.8, 242.3, 2.1, 240.2, 2.1);
        e.bezierCurveTo(239, 2.1, 237.9, 2.6, 237, 3.8);
        e.bezierCurveTo(236.1, 4.9, 235.7, 6.6, 235.7, 8.6);
        e.bezierCurveTo(235.7, 12.6, 237.5, 14.7, 241.5, 15.1);
        e.bezierCurveTo(246.9, 15.6, 251.5, 18, 255.1, 22.3);
        e.bezierCurveTo(258.6, 26.6, 260.4, 31.5, 260.4, 37);
        e.bezierCurveTo(260.4, 42.3, 258.4, 47, 254.5, 50.9);
        e.bezierCurveTo(250.5, 54.8, 245.7, 56.7, 240.1, 56.7);
        e.closePath();
        e.moveTo(259.7, 37);
        e.bezierCurveTo(259.7, 42.1, 257.8, 46.6, 254, 50.4);
        e.bezierCurveTo(250.1, 54.1, 245.5, 56, 240.1, 56);
        e.bezierCurveTo(234.8, 56, 230.2, 54.1, 226.3, 50.4);
        e.bezierCurveTo(222.5, 46.7, 220.6, 42.2, 220.6, 37);
        e.bezierCurveTo(220.6, 33, 221.7, 29.4, 224.1, 26.1);
        e.bezierCurveTo(226.4, 22.9, 229.4, 20.6, 233.1, 19.2);
        e.lineTo(233.5, 20);
        e.bezierCurveTo(229.9, 21.3, 227, 23.4, 224.7, 26.5);
        e.bezierCurveTo(222.4, 29.6, 221.3, 33.1, 221.3, 37);
        e.bezierCurveTo(221.3, 41.9, 223.2, 46.2, 227, 49.8);
        e.bezierCurveTo(230.8, 53.4, 235.2, 55.2, 240.1, 55.2);
        e.bezierCurveTo(244.4, 55.2, 248.1, 53.4, 251.1, 49.8);
        e.bezierCurveTo(254.2, 46.3, 255.7, 42, 255.7, 37);
        e.bezierCurveTo(255.7, 32.1, 254.4, 28, 251.6, 24.8);
        e.bezierCurveTo(248.9, 21.6, 245.3, 19.7, 241, 19.2);
        e.bezierCurveTo(238, 18.9, 235.6, 17.8, 233.9, 16.1);
        e.bezierCurveTo(232.1, 14.3, 231.3, 12.1, 231.4, 9.5);
        e.bezierCurveTo(231.5, 7.1, 232.4, 5, 234, 3.3);
        e.bezierCurveTo(235.7, 1.6, 237.7, .7, 240.1, .7);
        e.bezierCurveTo(242.6, .7, 244.6, 1.6, 246.3, 3.3);
        e.bezierCurveTo(248.1, 5, 248.9, 7.1, 248.9, 9.5);
        e.bezierCurveTo(248.9, 10.9, 248.6, 12.3, 247.8, 13.6);
        e.lineTo(247.4, 13.4);
        e.bezierCurveTo(248.1, 12.2, 248.4, 11, 248.4, 9.6);
        e.bezierCurveTo(248.4, 7.3, 247.6, 5.4, 246, 3.8);
        e.bezierCurveTo(244.4, 2.2, 242.5, 1.4, 240.2, 1.4);
        e.bezierCurveTo(238.8, 1.4, 237.5, 2, 236.5, 3.3);
        e.bezierCurveTo(235.4, 4.6, 234.9, 6.4, 234.9, 8.6);
        e.bezierCurveTo(234.9, 13, 237.1, 15.4, 241.4, 15.8);
        e.bezierCurveTo(246.6, 16.3, 251, 18.7, 254.5, 22.8);
        e.bezierCurveTo(258, 26.9, 259.7, 31.6, 259.7, 37);
        e.closePath();
        this.graphics = e
    };
    a.Threes = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.GRAY.red;
        var b = StyleManager.GRAY.green;
        var c = StyleManager.GRAY.blue;
        var d = StyleManager.GRAY.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(3.4, 51.6);
        e.lineTo(0, 51.6);
        e.lineTo(0, 3.8);
        e.lineTo(3.4, 3.8);
        e.lineTo(3.4, 51.6);
        e.closePath();
        e.moveTo(26.8, 4.5);
        e.lineTo(20, 4.5);
        e.lineTo(20, 51.6);
        e.lineTo(16.6, 51.6);
        e.lineTo(16.6, 4.5);
        e.lineTo(9.8, 4.5);
        e.lineTo(9.8, 3.8);
        e.lineTo(26.8, 3.8);
        e.lineTo(26.8, 4.5);
        e.closePath();
        e.moveTo(37.8, 6);
        e.bezierCurveTo(37.8, 9, 36.7, 11, 34.4, 12);
        e.lineTo(34.1, 11.2);
        e.bezierCurveTo(35.7, 10.6, 36.6, 9.4, 36.8, 7.8);
        e.bezierCurveTo(36.5, 8.1, 36.1, 8.2, 35.5, 8.2);
        e.bezierCurveTo(35, 8.2, 34.5, 8, 34, 7.5);
        e.bezierCurveTo(33.6, 7.1, 33.4, 6.5, 33.4, 6);
        e.bezierCurveTo(33.4, 4.4, 34.1, 3.7, 35.5, 3.7);
        e.bezierCurveTo(36.1, 3.7, 36.6, 3.9, 37.1, 4.4);
        e.bezierCurveTo(37.6, 4.8, 37.8, 5.3, 37.8, 6);
        e.closePath();
        e.moveTo(58.5, 51.6);
        e.lineTo(45, 51.6);
        e.lineTo(45, 3.8);
        e.lineTo(48.4, 3.8);
        e.lineTo(48.4, 50.9);
        e.lineTo(58.5, 50.9);
        e.lineTo(58.5, 51.6);
        e.closePath();
        e.moveTo(77.6, 51.6);
        e.lineTo(64.1, 51.6);
        e.lineTo(64.1, 3.8);
        e.lineTo(67.5, 3.8);
        e.lineTo(67.5, 50.9);
        e.lineTo(77.6, 50.9);
        e.lineTo(77.6, 51.6);
        e.closePath();
        e.moveTo(125.6, 51.6);
        e.lineTo(122.2, 51.6);
        e.lineTo(122.2, 20.9);
        e.lineTo(113.6, 20.9);
        e.lineTo(113.6, 51.6);
        e.lineTo(110.3, 51.6);
        e.lineTo(110.3, 3.8);
        e.lineTo(113.6, 3.8);
        e.lineTo(113.6, 20.2);
        e.lineTo(122.2, 20.2);
        e.lineTo(122.2, 3.8);
        e.lineTo(125.6, 3.8);
        e.lineTo(125.6, 51.6);
        e.closePath();
        e.moveTo(148.9, 51.6);
        e.lineTo(145.5, 51.6);
        e.lineTo(142.6, 35);
        e.lineTo(134.3, 35);
        e.lineTo(131.4, 51.6);
        e.lineTo(130.7, 51.6);
        e.lineTo(139.9, 0);
        e.lineTo(148.9, 51.6);
        e.closePath();
        e.moveTo(142.5, 34.3);
        e.lineTo(138.5, 11.5);
        e.lineTo(134.5, 34.3);
        e.lineTo(142.5, 34.3);
        e.closePath();
        e.moveTo(182.1, 19.4);
        e.bezierCurveTo(182.1, 23.5, 180.5, 27, 177.3, 30.1);
        e.bezierCurveTo(173.8, 33.5, 169.3, 35.2, 163.9, 35.2);
        e.lineTo(158.3, 35.2);
        e.lineTo(158.3, 51.6);
        e.lineTo(154.9, 51.6);
        e.lineTo(154.9, 3.8);
        e.lineTo(163.9, 3.8);
        e.bezierCurveTo(168.9, 3.8, 173.2, 5.4, 176.8, 8.4);
        e.bezierCurveTo(180.3, 11.5, 182.1, 15.1, 182.1, 19.4);
        e.closePath();
        e.moveTo(178.6, 19.4);
        e.bezierCurveTo(178.6, 15.4, 177.2, 11.9, 174.3, 9);
        e.bezierCurveTo(171.4, 6.1, 167.9, 4.7, 163.9, 4.7);
        e.lineTo(158.3, 4.7);
        e.lineTo(158.3, 34.3);
        e.lineTo(163.9, 34.3);
        e.bezierCurveTo(167.9, 34.3, 171.4, 32.8, 174.3, 29.9);
        e.bezierCurveTo(177.2, 27, 178.6, 23.5, 178.6, 19.4);
        e.closePath();
        e.moveTo(216.7, 19.4);
        e.bezierCurveTo(216.7, 23.5, 215, 27, 211.8, 30.1);
        e.bezierCurveTo(208.3, 33.5, 203.8, 35.2, 198.4, 35.2);
        e.lineTo(192.8, 35.2);
        e.lineTo(192.8, 51.6);
        e.lineTo(189.4, 51.6);
        e.lineTo(189.4, 3.8);
        e.lineTo(198.4, 3.8);
        e.bezierCurveTo(203.4, 3.8, 207.7, 5.4, 211.3, 8.4);
        e.bezierCurveTo(214.9, 11.5, 216.7, 15.1, 216.7, 19.4);
        e.closePath();
        e.moveTo(213.1, 19.4);
        e.bezierCurveTo(213.1, 15.4, 211.7, 11.9, 208.8, 9);
        e.bezierCurveTo(205.9, 6.1, 202.5, 4.7, 198.4, 4.7);
        e.lineTo(192.8, 4.7);
        e.lineTo(192.8, 34.3);
        e.lineTo(198.4, 34.3);
        e.bezierCurveTo(202.5, 34.3, 205.9, 32.8, 208.8, 29.9);
        e.bezierCurveTo(211.7, 27, 213.1, 23.5, 213.1, 19.4);
        e.closePath();
        e.moveTo(236.8, 51.6);
        e.lineTo(223.3, 51.6);
        e.lineTo(223.3, 3.8);
        e.lineTo(235.3, 3.8);
        e.lineTo(235.3, 4.5);
        e.lineTo(226.7, 4.5);
        e.lineTo(226.7, 20.2);
        e.lineTo(236.8, 20.2);
        e.lineTo(236.8, 20.9);
        e.lineTo(226.7, 20.9);
        e.lineTo(226.7, 50.9);
        e.lineTo(236.8, 50.9);
        e.lineTo(236.8, 51.6);
        e.closePath();
        e.moveTo(260.5, 56.7);
        e.lineTo(243, 11.1);
        e.lineTo(243, 51.6);
        e.lineTo(242.3, 51.6);
        e.lineTo(242.3, 0);
        e.lineTo(259.9, 45.4);
        e.lineTo(259.9, 3.8);
        e.lineTo(260.5, 3.8);
        e.lineTo(260.5, 56.7);
        e.closePath();
        e.moveTo(311.3, 51.6);
        e.lineTo(307.9, 51.6);
        e.lineTo(305, 35);
        e.lineTo(296.7, 35);
        e.lineTo(293.8, 51.6);
        e.lineTo(293.1, 51.6);
        e.lineTo(302.3, 0);
        e.lineTo(311.3, 51.6);
        e.closePath();
        e.moveTo(304.9, 34.3);
        e.lineTo(300.9, 11.5);
        e.lineTo(296.9, 34.3);
        e.lineTo(304.9, 34.3);
        e.closePath();
        this.graphics = e
    };
    a.Happen = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.GRAY.red;
        var b = StyleManager.GRAY.green;
        var c = StyleManager.GRAY.blue;
        var d = StyleManager.GRAY.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(3.4, 51.5);
        e.lineTo(0, 51.5);
        e.lineTo(0, 3.8);
        e.lineTo(3.4, 3.8);
        e.lineTo(3.4, 51.5);
        e.closePath();
        e.moveTo(24, 20.9);
        e.lineTo(14, 20.9);
        e.lineTo(14, 51.5);
        e.lineTo(10.6, 51.5);
        e.lineTo(10.6, 3.8);
        e.lineTo(22.6, 3.8);
        e.lineTo(22.6, 4.5);
        e.lineTo(14, 4.5);
        e.lineTo(14, 20.2);
        e.lineTo(24, 20.2);
        e.lineTo(24, 20.9);
        e.closePath();
        e.moveTo(60.1, 51.5);
        e.lineTo(56.8, 51.5);
        e.lineTo(56.8, 3.8);
        e.lineTo(60.1, 3.8);
        e.lineTo(60.1, 51.5);
        e.closePath();
        e.moveTo(83.6, 4.5);
        e.lineTo(76.7, 4.5);
        e.lineTo(76.7, 51.5);
        e.lineTo(73.4, 51.5);
        e.lineTo(73.4, 4.5);
        e.lineTo(66.6, 4.5);
        e.lineTo(66.6, 3.8);
        e.lineTo(83.6, 3.8);
        e.lineTo(83.6, 4.5);
        e.closePath();
        e.moveTo(94.5, 6);
        e.bezierCurveTo(94.5, 9, 93.4, 11, 91.1, 12);
        e.lineTo(90.8, 11.2);
        e.bezierCurveTo(92.4, 10.6, 93.3, 9.4, 93.5, 7.8);
        e.bezierCurveTo(93.2, 8.1, 92.8, 8.2, 92.2, 8.2);
        e.bezierCurveTo(91.7, 8.2, 91.2, 8, 90.7, 7.5);
        e.bezierCurveTo(90.3, 7, 90.1, 6.5, 90.1, 6);
        e.bezierCurveTo(90.1, 4.4, 90.8, 3.7, 92.2, 3.7);
        e.bezierCurveTo(92.8, 3.7, 93.3, 3.9, 93.8, 4.3);
        e.bezierCurveTo(94.3, 4.8, 94.5, 5.3, 94.5, 6);
        e.closePath();
        e.moveTo(135.9, 35.3);
        e.bezierCurveTo(135.9, 39.9, 134.2, 43.9, 130.8, 47.2);
        e.bezierCurveTo(127.4, 50.5, 123.3, 52.2, 118.6, 52.2);
        e.bezierCurveTo(113.8, 52.2, 109.7, 50.5, 106.3, 47.2);
        e.bezierCurveTo(103, 43.9, 101.3, 40, 101.3, 35.3);
        e.bezierCurveTo(101.3, 31.8, 102.3, 28.6, 104.3, 25.8);
        e.bezierCurveTo(106.4, 22.9, 109.1, 20.8, 112.4, 19.6);
        e.lineTo(112.7, 20.3);
        e.bezierCurveTo(109.5, 21.4, 106.9, 23.4, 104.9, 26.1);
        e.bezierCurveTo(102.9, 28.9, 101.9, 31.9, 101.9, 35.3);
        e.bezierCurveTo(101.9, 39.7, 103.6, 43.5, 106.9, 46.7);
        e.bezierCurveTo(110.3, 49.9, 114.2, 51.5, 118.6, 51.5);
        e.bezierCurveTo(122.3, 51.5, 125.6, 49.9, 128.3, 46.7);
        e.bezierCurveTo(131, 43.6, 132.3, 39.8, 132.3, 35.3);
        e.bezierCurveTo(132.3, 31, 131.1, 27.4, 128.7, 24.6);
        e.bezierCurveTo(126.3, 21.7, 123.2, 20.1, 119.3, 19.7);
        e.bezierCurveTo(116.7, 19.3, 114.6, 18.4, 113, 16.8);
        e.bezierCurveTo(111.4, 15.3, 110.7, 13.3, 110.8, 11);
        e.bezierCurveTo(110.9, 8.9, 111.7, 7.1, 113.2, 5.6);
        e.bezierCurveTo(114.6, 4, 116.4, 3.3, 118.6, 3.3);
        e.bezierCurveTo(120.7, 3.3, 122.5, 4, 124, 5.6);
        e.bezierCurveTo(125.6, 7.1, 126.3, 8.9, 126.3, 11);
        e.bezierCurveTo(126.3, 12.3, 126, 13.5, 125.4, 14.6);
        e.lineTo(125, 14.5);
        e.bezierCurveTo(125.6, 13.4, 125.8, 12.3, 125.8, 11.1);
        e.bezierCurveTo(125.8, 9.1, 125.1, 7.4, 123.7, 6);
        e.bezierCurveTo(122.3, 4.6, 120.6, 3.8, 118.6, 3.8);
        e.bezierCurveTo(117.3, 3.8, 116.2, 4.4, 115.3, 5.6);
        e.bezierCurveTo(114.4, 6.7, 113.9, 8.3, 113.9, 10.3);
        e.bezierCurveTo(113.9, 14.1, 115.8, 16.2, 119.7, 16.6);
        e.bezierCurveTo(124.3, 17.1, 128.2, 19.1, 131.2, 22.8);
        e.bezierCurveTo(134.3, 26.4, 135.9, 30.6, 135.9, 35.3);
        e.closePath();
        e.moveTo(184, 51.5);
        e.lineTo(180.6, 51.5);
        e.lineTo(180.6, 20.8);
        e.lineTo(172, 20.8);
        e.lineTo(172, 51.5);
        e.lineTo(168.7, 51.5);
        e.lineTo(168.7, 3.8);
        e.lineTo(172, 3.8);
        e.lineTo(172, 20.1);
        e.lineTo(180.6, 20.1);
        e.lineTo(180.6, 3.8);
        e.lineTo(184, 3.8);
        e.lineTo(184, 51.5);
        e.closePath();
        e.moveTo(207.3, 51.5);
        e.lineTo(203.8, 51.5);
        e.lineTo(200.9, 34.9);
        e.lineTo(192.7, 34.9);
        e.lineTo(189.8, 51.5);
        e.lineTo(189.1, 51.5);
        e.lineTo(198.3, 0);
        e.lineTo(207.3, 51.5);
        e.closePath();
        e.moveTo(200.9, 34.2);
        e.lineTo(196.9, 11.5);
        e.lineTo(192.9, 34.2);
        e.lineTo(200.9, 34.2);
        e.closePath();
        e.moveTo(240.4, 19.3);
        e.bezierCurveTo(240.4, 23.4, 238.8, 27, 235.6, 30.1);
        e.bezierCurveTo(232.1, 33.4, 227.6, 35.1, 222.2, 35.1);
        e.lineTo(216.6, 35.1);
        e.lineTo(216.6, 51.5);
        e.lineTo(213.2, 51.5);
        e.lineTo(213.2, 3.8);
        e.lineTo(222.2, 3.8);
        e.bezierCurveTo(227.2, 3.8, 231.5, 5.4, 235, 8.4);
        e.bezierCurveTo(238.6, 11.5, 240.4, 15.1, 240.4, 19.3);
        e.closePath();
        e.moveTo(236.9, 19.3);
        e.bezierCurveTo(236.9, 15.3, 235.5, 11.9, 232.6, 9);
        e.bezierCurveTo(229.7, 6.1, 226.2, 4.7, 222.2, 4.7);
        e.lineTo(216.6, 4.7);
        e.lineTo(216.6, 34.2);
        e.lineTo(222.2, 34.2);
        e.bezierCurveTo(226.2, 34.2, 229.7, 32.8, 232.6, 29.9);
        e.bezierCurveTo(235.5, 27, 236.9, 23.5, 236.9, 19.3);
        e.closePath();
        e.moveTo(274.9, 19.3);
        e.bezierCurveTo(274.9, 23.4, 273.3, 27, 270, 30.1);
        e.bezierCurveTo(266.5, 33.4, 262.1, 35.1, 256.6, 35.1);
        e.lineTo(251.1, 35.1);
        e.lineTo(251.1, 51.5);
        e.lineTo(247.7, 51.5);
        e.lineTo(247.7, 3.8);
        e.lineTo(256.6, 3.8);
        e.bezierCurveTo(261.6, 3.8, 265.9, 5.4, 269.5, 8.4);
        e.bezierCurveTo(273.1, 11.5, 274.9, 15.1, 274.9, 19.3);
        e.closePath();
        e.moveTo(271.3, 19.3);
        e.bezierCurveTo(271.3, 15.3, 269.9, 11.9, 267, 9);
        e.bezierCurveTo(264.2, 6.1, 260.7, 4.7, 256.6, 4.7);
        e.lineTo(251.1, 4.7);
        e.lineTo(251.1, 34.2);
        e.lineTo(256.6, 34.2);
        e.bezierCurveTo(260.7, 34.2, 264.2, 32.8, 267, 29.9);
        e.bezierCurveTo(269.9, 27, 271.3, 23.5, 271.3, 19.3);
        e.closePath();
        e.moveTo(295, 51.5);
        e.lineTo(281.5, 51.5);
        e.lineTo(281.5, 3.8);
        e.lineTo(293.5, 3.8);
        e.lineTo(293.5, 4.5);
        e.lineTo(284.9, 4.5);
        e.lineTo(284.9, 20.1);
        e.lineTo(295, 20.1);
        e.lineTo(295, 20.8);
        e.lineTo(284.9, 20.8);
        e.lineTo(284.9, 50.7);
        e.lineTo(295, 50.7);
        e.lineTo(295, 51.5);
        e.closePath();
        e.moveTo(318.6, 56.5);
        e.lineTo(301.2, 11.1);
        e.lineTo(301.2, 51.5);
        e.lineTo(300.5, 51.5);
        e.lineTo(300.5, 0);
        e.lineTo(318, 45.3);
        e.lineTo(318, 3.8);
        e.lineTo(318.6, 3.8);
        e.lineTo(318.6, 56.5);
        e.closePath();
        e.moveTo(338.7, 51.5);
        e.lineTo(325.2, 51.5);
        e.lineTo(325.2, 3.8);
        e.lineTo(337.2, 3.8);
        e.lineTo(337.2, 4.5);
        e.lineTo(328.6, 4.5);
        e.lineTo(328.6, 20.1);
        e.lineTo(338.7, 20.1);
        e.lineTo(338.7, 20.8);
        e.lineTo(328.6, 20.8);
        e.lineTo(328.6, 50.7);
        e.lineTo(338.7, 50.7);
        e.lineTo(338.7, 51.5);
        e.closePath();
        e.moveTo(378.2, 27.3);
        e.bezierCurveTo(378.2, 33.8, 375.9, 39.5, 371.2, 44.3);
        e.bezierCurveTo(366.4, 49.1, 360.7, 51.5, 354, 51.5);
        e.lineTo(344.3, 51.5);
        e.lineTo(344.3, 3.9);
        e.lineTo(353.3, 3.9);
        e.bezierCurveTo(360.1, 3.9, 366, 6.2, 370.9, 10.7);
        e.bezierCurveTo(375.8, 15.3, 378.2, 20.8, 378.2, 27.3);
        e.closePath();
        e.moveTo(374.9, 27.3);
        e.bezierCurveTo(374.9, 21, 372.7, 15.6, 368.5, 11.2);
        e.bezierCurveTo(364.3, 6.8, 359.2, 4.6, 353.3, 4.6);
        e.lineTo(347.7, 4.6);
        e.lineTo(347.7, 50.7);
        e.lineTo(354, 50.7);
        e.bezierCurveTo(359.9, 50.7, 364.8, 48.5, 368.8, 43.9);
        e.bezierCurveTo(372.9, 39.3, 374.9, 33.7, 374.9, 27.3);
        e.closePath();
        this.graphics = e
    };
    a.Happened = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.AQUA.red;
        var b = StyleManager.AQUA.green;
        var c = StyleManager.AQUA.blue;
        var d = StyleManager.AQUA.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(46.2, 12.1);
        e.lineTo(27.7, 12.1);
        e.lineTo(27.7, 139.8);
        e.lineTo(18.5, 139.8);
        e.lineTo(18.5, 12.1);
        e.lineTo(0, 12.1);
        e.lineTo(0, 10.2);
        e.lineTo(46.2, 10.2);
        e.lineTo(46.2, 12.1);
        e.closePath();
        e.moveTo(98.3, 139.8);
        e.lineTo(88.9, 139.8);
        e.lineTo(88.9, 56.6);
        e.lineTo(65.7, 56.6);
        e.lineTo(65.7, 139.8);
        e.lineTo(56.6, 139.8);
        e.lineTo(56.6, 10.2);
        e.lineTo(65.7, 10.2);
        e.lineTo(65.7, 54.7);
        e.lineTo(88.9, 54.7);
        e.lineTo(88.9, 10.2);
        e.lineTo(98.3, 10.2);
        e.lineTo(98.3, 139.8);
        e.closePath();
        e.moveTo(120.4, 139.8);
        e.lineTo(111.3, 139.8);
        e.lineTo(111.3, 10.2);
        e.lineTo(120.4, 10.2);
        e.lineTo(120.4, 139.8);
        e.closePath();
        e.moveTo(266.8, 160.6);
        e.bezierCurveTo(266.8, 173.1, 260.3, 179.4, 247.4, 179.4);
        e.bezierCurveTo(225.3, 179.4, 208.3, 167.4, 196.6, 143.4);
        e.bezierCurveTo(193.3, 133.8, 190, 124.1, 186.8, 114.5);
        e.bezierCurveTo(181.1, 101.7, 172.8, 95.3, 161.9, 95.3);
        e.lineTo(146.8, 95.3);
        e.lineTo(146.8, 139.8);
        e.lineTo(137.6, 139.8);
        e.lineTo(137.6, 10.2);
        e.lineTo(161.9, 10.2);
        e.bezierCurveTo(175.7, 10.2, 187.4, 14.4, 197.1, 22.7);
        e.bezierCurveTo(206.8, 31, 211.7, 40.9, 211.7, 52.6);
        e.bezierCurveTo(211.7, 61.6, 208.4, 70.1, 201.9, 77.9);
        e.bezierCurveTo(194.9, 86.4, 186, 91.8, 175.1, 94.2);
        e.bezierCurveTo(182, 97.1, 188.3, 103.9, 193.8, 114.7);
        e.bezierCurveTo(197.4, 122.9, 201, 131.1, 204.7, 139.4);
        e.bezierCurveTo(210.5, 151, 217.6, 160.1, 225.9, 166.6);
        e.bezierCurveTo(233.7, 172.8, 241.6, 175.9, 249.6, 175.9);
        e.bezierCurveTo(253.5, 175.9, 256.9, 174.8, 259.8, 172.5);
        e.bezierCurveTo(263.2, 169.7, 264.9, 165.7, 264.9, 160.6);
        e.bezierCurveTo(264.9, 156.5, 263, 153.1, 259.3, 150.5);
        e.bezierCurveTo(255.6, 147.9, 251.5, 146.6, 246.8, 146.6);
        e.lineTo(246.8, 144.7);
        e.bezierCurveTo(251.7, 144.7, 256.3, 146.2, 260.5, 149.2);
        e.bezierCurveTo(264.7, 152.3, 266.8, 156.1, 266.8, 160.6);
        e.closePath();
        e.moveTo(202.5, 52.6);
        e.bezierCurveTo(202.5, 41.5, 198.6, 32.1, 190.7, 24.3);
        e.bezierCurveTo(182.8, 16.5, 173.2, 12.6, 162, 12.6);
        e.lineTo(146.8, 12.6);
        e.lineTo(146.8, 93);
        e.lineTo(162, 93);
        e.bezierCurveTo(173.2, 93, 182.8, 89, 190.7, 81.2);
        e.bezierCurveTo(198.6, 73.3, 202.5, 63.8, 202.5, 52.6);
        e.closePath();
        e.moveTo(318.1, 74);
        e.bezierCurveTo(318.1, 91.9, 311.6, 107.3, 298.8, 120.3);
        e.bezierCurveTo(286, 133.3, 270.5, 139.8, 252.3, 139.8);
        e.lineTo(225.9, 139.8);
        e.lineTo(225.9, 10.6);
        e.lineTo(250.4, 10.6);
        e.bezierCurveTo(268.8, 10.6, 284.7, 16.8, 298.1, 29.1);
        e.bezierCurveTo(311.4, 41.5, 318.1, 56.5, 318.1, 74);
        e.closePath();
        e.moveTo(308.9, 74);
        e.bezierCurveTo(308.9, 57, 303.1, 42.4, 291.6, 30.5);
        e.bezierCurveTo(280.1, 18.5, 266.3, 12.6, 250.4, 12.6);
        e.lineTo(235.1, 12.6);
        e.lineTo(235.1, 137.9);
        e.lineTo(252.3, 137.9);
        e.bezierCurveTo(268.1, 137.9, 281.5, 131.6, 292.5, 119.2);
        e.bezierCurveTo(303.4, 106.7, 308.9, 91.7, 308.9, 74);
        e.closePath();
        e.moveTo(399.5, 12.1);
        e.lineTo(381, 12.1);
        e.lineTo(381, 139.8);
        e.lineTo(371.9, 139.8);
        e.lineTo(371.9, 12.1);
        e.lineTo(353.4, 12.1);
        e.lineTo(353.4, 10.2);
        e.lineTo(399.5, 10.2);
        e.lineTo(399.5, 12.1);
        e.closePath();
        e.moveTo(419.5, 139.8);
        e.lineTo(410.4, 139.8);
        e.lineTo(410.4, 10.2);
        e.lineTo(419.5, 10.2);
        e.lineTo(419.5, 139.8);
        e.closePath();
        e.moveTo(503.6, 139.8);
        e.lineTo(494.4, 139.8);
        e.lineTo(494.4, 43.2);
        e.lineTo(466.1, 153.8);
        e.lineTo(438, 44.3);
        e.lineTo(438, 139.8);
        e.lineTo(436.1, 139.8);
        e.lineTo(436.1, 0);
        e.lineTo(469.7, 131.3);
        e.lineTo(503.6, 0);
        e.lineTo(503.6, 139.8);
        e.closePath();
        e.moveTo(551.4, 139.8);
        e.lineTo(514.8, 139.8);
        e.lineTo(514.8, 10.2);
        e.lineTo(547.4, 10.2);
        e.lineTo(547.4, 12.1);
        e.lineTo(524, 12.1);
        e.lineTo(524, 54.7);
        e.lineTo(551.4, 54.7);
        e.lineTo(551.4, 56.6);
        e.lineTo(524, 56.6);
        e.lineTo(524, 137.9);
        e.lineTo(551.4, 137.9);
        e.lineTo(551.4, 139.8);
        e.closePath();
        this.graphics = e
    };
    a.ThirdTime = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.PINK.red;
        var b = StyleManager.PINK.green;
        var c = StyleManager.PINK.blue;
        var d = StyleManager.PINK.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(53.1, 4.7);
        e.lineTo(31.8, 4.7);
        e.lineTo(31.8, 151.5);
        e.lineTo(21.3, 151.5);
        e.lineTo(21.3, 4.7);
        e.lineTo(0, 4.7);
        e.lineTo(0, 2.4);
        e.lineTo(53.1, 2.4);
        e.lineTo(53.1, 4.7);
        e.closePath();
        e.moveTo(148.8, 2.4);
        e.lineTo(120.2, 163.2);
        e.lineTo(102.3, 62.2);
        e.lineTo(84.4, 163.2);
        e.lineTo(56, 2.4);
        e.lineTo(67.1, 2.4);
        e.lineTo(88.8, 127.5);
        e.lineTo(101.3, 56);
        e.lineTo(92, 2.4);
        e.lineTo(102.8, 2.4);
        e.lineTo(106.7, 25.5);
        e.lineTo(110.9, 2.4);
        e.lineTo(113.1, 2.4);
        e.lineTo(107.9, 31.6);
        e.lineTo(124.6, 127.5);
        e.lineTo(146.6, 2.4);
        e.lineTo(148.8, 2.4);
        e.closePath();
        e.moveTo(169.1, 151.5);
        e.lineTo(158.6, 151.5);
        e.lineTo(158.6, 2.4);
        e.lineTo(169.1, 2.4);
        e.lineTo(169.1, 151.5);
        e.closePath();
        e.moveTo(323.8, 118.9);
        e.bezierCurveTo(316.9, 129.9, 307.9, 138.5, 296.8, 144.9);
        e.bezierCurveTo(285.8, 151.2, 273.6, 154.4, 260.4, 154.4);
        e.bezierCurveTo(238.8, 154.4, 220.4, 147, 205, 132.3);
        e.bezierCurveTo(189.5, 117.5, 181.8, 99.6, 181.8, 78.6);
        e.bezierCurveTo(181.8, 57.2, 189.2, 38.8, 204, 23.2);
        e.bezierCurveTo(218.7, 7.8, 236.7, 0, 257.9, 0);
        e.bezierCurveTo(271.2, 0, 283.5, 3.1, 295.1, 9.2);
        e.bezierCurveTo(306.7, 15.3, 316.1, 23.7, 323.3, 34.3);
        e.lineTo(316.7, 38.2);
        e.bezierCurveTo(310.7, 27.1, 302.4, 18.3, 291.9, 11.7);
        e.bezierCurveTo(281.4, 5.2, 270.1, 2, 258.1, 2.2);
        e.bezierCurveTo(239.8, 2.5, 224.3, 10.1, 211.5, 25);
        e.bezierCurveTo(198.7, 39.8, 192.3, 57.7, 192.3, 78.6);
        e.bezierCurveTo(192.3, 99, 199, 116.3, 212.4, 130.7);
        e.bezierCurveTo(225.7, 145, 241.7, 152.2, 260.3, 152.2);
        e.bezierCurveTo(272.3, 152.2, 283.3, 148.8, 293.4, 142.1);
        e.bezierCurveTo(303.4, 135.3, 311.2, 126.2, 316.9, 114.8);
        e.lineTo(323.8, 118.9);
        e.closePath();
        e.moveTo(377.9, 151.5);
        e.lineTo(335.8, 151.5);
        e.lineTo(335.8, 2.4);
        e.lineTo(373.2, 2.4);
        e.lineTo(373.2, 4.7);
        e.lineTo(346.3, 4.7);
        e.lineTo(346.3, 53.6);
        e.lineTo(377.9, 53.6);
        e.lineTo(377.9, 55.8);
        e.lineTo(346.3, 55.8);
        e.lineTo(346.3, 149.3);
        e.lineTo(377.9, 149.3);
        e.lineTo(377.9, 151.5);
        e.closePath();
        this.graphics = e
    };
    a.Twice = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.LIGHT_PURPLE.red;
        var b = StyleManager.LIGHT_PURPLE.green;
        var c = StyleManager.LIGHT_PURPLE.blue;
        var d = StyleManager.LIGHT_PURPLE.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(0, 39.1);
        e.lineTo(0, .6);
        e.lineTo(6, .6);
        e.lineTo(6, 39.1);
        e.lineTo(0, 39.1);
        e.closePath();
        e.moveTo(12.4, 29.3);
        e.lineTo(18, 28.5);
        e.bezierCurveTo(18.1, 30.4, 18.5, 31.9, 19.1, 32.8);
        e.bezierCurveTo(19.8, 33.7, 20.7, 34.2, 22, 34.2);
        e.bezierCurveTo(23, 34.2, 23.9, 33.9, 24.6, 33.2);
        e.bezierCurveTo(25.3, 32.5, 25.6, 31.6, 25.6, 30.5);
        e.bezierCurveTo(25.6, 28.5, 24, 25.9, 20.8, 22.7);
        e.bezierCurveTo(20.6, 22.5, 20.4, 22.3, 20.3, 22.2);
        e.bezierCurveTo(17.1, 19, 15.1, 16.6, 14.3, 15);
        e.bezierCurveTo(13.4, 13.3, 12.9, 11.5, 12.9, 9.6);
        e.bezierCurveTo(12.9, 6.9, 13.8, 4.6, 15.6, 2.8);
        e.bezierCurveTo(17.4, .9, 19.6, 0, 22.1, 0);
        e.bezierCurveTo(24.6, 0, 26.7, .9, 28.3, 2.6);
        e.bezierCurveTo(29.9, 4.3, 30.8, 6.6, 31, 9.5);
        e.lineTo(25.2, 10.3);
        e.bezierCurveTo(25.1, 8.6, 24.8, 7.4, 24.3, 6.6);
        e.bezierCurveTo(23.8, 5.9, 23, 5.5, 22, 5.5);
        e.bezierCurveTo(21, 5.5, 20.2, 5.9, 19.7, 6.5);
        e.bezierCurveTo(19.1, 7.1, 18.8, 8, 18.8, 9.1);
        e.bezierCurveTo(18.8, 11.3, 20.7, 14.2, 24.4, 17.8);
        e.bezierCurveTo(24.5, 18, 24.6, 18.1, 24.7, 18.2);
        e.bezierCurveTo(27.5, 20.8, 29.2, 23, 30.1, 24.7);
        e.bezierCurveTo(31, 26.4, 31.4, 28.3, 31.4, 30.4);
        e.bezierCurveTo(31.4, 33.2, 30.5, 35.5, 28.8, 37.3);
        e.bezierCurveTo(27, 39.1, 24.8, 40, 22.2, 40);
        e.bezierCurveTo(19.2, 40, 16.9, 39, 15.2, 37.2);
        e.bezierCurveTo(13.4, 35.3, 12.5, 32.7, 12.4, 29.3);
        e.closePath();
        this.graphics = e
    };
    a.IsWord = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.LIGHT_PURPLE.red;
        var b = StyleManager.LIGHT_PURPLE.green;
        var c = StyleManager.LIGHT_PURPLE.blue;
        var d = StyleManager.LIGHT_PURPLE.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(0, 31.9);
        e.lineTo(0, .7);
        e.lineTo(4.9, .7);
        e.lineTo(4.9, 31.9);
        e.lineTo(0, 31.9);
        e.closePath();
        e.moveTo(20.5, .7);
        e.lineTo(25.3, .7);
        e.lineTo(25.3, 13.4);
        e.lineTo(30.1, 13.4);
        e.lineTo(30.1, .7);
        e.lineTo(34.9, .7);
        e.lineTo(34.9, 31.9);
        e.lineTo(30.1, 31.9);
        e.lineTo(30.1, 17.9);
        e.lineTo(25.3, 17.9);
        e.lineTo(25.3, 31.9);
        e.lineTo(20.5, 31.9);
        e.lineTo(20.5, .7);
        e.closePath();
        e.moveTo(38.5, 31.9);
        e.lineTo(43.7, .7);
        e.lineTo(49.9, .7);
        e.lineTo(55.1, 31.9);
        e.lineTo(50.1, 31.9);
        e.lineTo(49.1, 25.1);
        e.lineTo(44.3, 25.1);
        e.lineTo(43.2, 31.9);
        e.lineTo(38.5, 31.9);
        e.closePath();
        e.moveTo(44.9, 20.7);
        e.lineTo(48.6, 20.7);
        e.lineTo(46.9, 7.7);
        e.lineTo(46.6, 7.7);
        e.lineTo(44.9, 20.7);
        e.closePath();
        e.moveTo(56.7, .7);
        e.lineTo(61.4, .7);
        e.lineTo(64.2, 19.2);
        e.bezierCurveTo(64.4, 20.3, 64.6, 21.4, 64.6, 22.5);
        e.bezierCurveTo(64.7, 23.5, 64.7, 24.6, 64.7, 25.6);
        e.lineTo(64.7, 26.2);
        e.bezierCurveTo(64.8, 24.8, 64.9, 23.6, 65, 22.4);
        e.bezierCurveTo(65, 21.2, 65.2, 20.1, 65.3, 19.2);
        e.lineTo(68.1, .7);
        e.lineTo(72.8, .7);
        e.lineTo(67.3, 31.9);
        e.lineTo(62.2, 31.9);
        e.lineTo(56.7, .7);
        e.closePath();
        e.moveTo(76.6, 31.9);
        e.lineTo(76.6, .7);
        e.lineTo(89.1, .7);
        e.lineTo(89.1, 5.2);
        e.lineTo(81.4, 5.2);
        e.lineTo(81.4, 13.4);
        e.lineTo(87, 13.4);
        e.lineTo(87, 17.9);
        e.lineTo(81.4, 17.9);
        e.lineTo(81.4, 27.2);
        e.lineTo(89.1, 27.2);
        e.lineTo(89.1, 31.9);
        e.lineTo(76.6, 31.9);
        e.closePath();
        e.moveTo(100.8, 5.2);
        e.lineTo(100.8, .7);
        e.lineTo(115.7, .7);
        e.lineTo(115.7, 5.2);
        e.lineTo(110.6, 5.2);
        e.lineTo(110.6, 31.9);
        e.lineTo(105.8, 31.9);
        e.lineTo(105.8, 5.2);
        e.lineTo(100.8, 5.2);
        e.closePath();
        e.moveTo(118.2, 7.9);
        e.bezierCurveTo(118.2, 5.4, 118.9, 3.5, 120.2, 2.1);
        e.bezierCurveTo(121.5, .7, 123.4, 0, 125.7, 0);
        e.bezierCurveTo(128, 0, 129.7, .7, 131, 2.1);
        e.bezierCurveTo(132.3, 3.6, 133, 5.5, 133, 8);
        e.lineTo(133, 24);
        e.bezierCurveTo(133, 26.7, 132.3, 28.9, 131.1, 30.3);
        e.bezierCurveTo(129.8, 31.8, 127.9, 32.6, 125.6, 32.6);
        e.bezierCurveTo(123.2, 32.6, 121.3, 31.8, 120.1, 30.3);
        e.bezierCurveTo(118.8, 28.9, 118.2, 26.7, 118.2, 23.9);
        e.lineTo(118.2, 7.9);
        e.closePath();
        e.moveTo(128, 25);
        e.lineTo(128, 7.6);
        e.bezierCurveTo(128, 6.5, 127.8, 5.7, 127.4, 5.1);
        e.bezierCurveTo(127, 4.6, 126.4, 4.3, 125.6, 4.3);
        e.bezierCurveTo(124.7, 4.3, 124.1, 4.6, 123.7, 5.1);
        e.bezierCurveTo(123.3, 5.7, 123.1, 6.5, 123.1, 7.6);
        e.lineTo(123.1, 25);
        e.bezierCurveTo(123.1, 26.1, 123.3, 26.9, 123.7, 27.4);
        e.bezierCurveTo(124.1, 28, 124.7, 28.3, 125.6, 28.3);
        e.bezierCurveTo(126.4, 28.3, 127, 28, 127.4, 27.4);
        e.bezierCurveTo(127.8, 26.9, 128, 26.1, 128, 25);
        e.closePath();
        e.moveTo(152.9, 18.8);
        e.lineTo(152.9, 31.9);
        e.lineTo(148.1, 31.9);
        e.lineTo(148.1, .7);
        e.lineTo(155.1, .7);
        e.bezierCurveTo(157.8, .7, 159.7, 1.4, 160.9, 2.8);
        e.bezierCurveTo(162.1, 4.2, 162.7, 6.5, 162.7, 9.7);
        e.bezierCurveTo(162.7, 11.7, 162.4, 13.2, 161.9, 14.4);
        e.bezierCurveTo(161.5, 15.7, 160.7, 16.6, 159.6, 17.4);
        e.lineTo(163.2, 31.9);
        e.lineTo(158.2, 31.9);
        e.lineTo(155.2, 18.8);
        e.lineTo(152.9, 18.8);
        e.closePath();
        e.moveTo(152.9, 5.2);
        e.lineTo(152.9, 14.2);
        e.lineTo(154.8, 14.2);
        e.bezierCurveTo(155.9, 14.2, 156.7, 13.9, 157.1, 13.2);
        e.bezierCurveTo(157.5, 12.6, 157.8, 11.3, 157.8, 9.5);
        e.bezierCurveTo(157.8, 7.9, 157.5, 6.7, 157.1, 6.1);
        e.bezierCurveTo(156.6, 5.5, 155.8, 5.2, 154.6, 5.2);
        e.lineTo(152.9, 5.2);
        e.closePath();
        e.moveTo(167.5, 31.9);
        e.lineTo(167.5, .7);
        e.lineTo(180, .7);
        e.lineTo(180, 5.2);
        e.lineTo(172.3, 5.2);
        e.lineTo(172.3, 13.4);
        e.lineTo(177.9, 13.4);
        e.lineTo(177.9, 17.9);
        e.lineTo(172.3, 17.9);
        e.lineTo(172.3, 27.2);
        e.lineTo(180, 27.2);
        e.lineTo(180, 31.9);
        e.lineTo(167.5, 31.9);
        e.closePath();
        e.moveTo(181.9, 5.2);
        e.lineTo(181.9, .7);
        e.lineTo(196.7, .7);
        e.lineTo(196.7, 5.2);
        e.lineTo(191.7, 5.2);
        e.lineTo(191.7, 31.9);
        e.lineTo(186.9, 31.9);
        e.lineTo(186.9, 5.2);
        e.lineTo(181.9, 5.2);
        e.closePath();
        e.moveTo(199.4, .7);
        e.lineTo(204.3, .7);
        e.lineTo(204.3, 24.9);
        e.bezierCurveTo(204.3, 25.8, 204.6, 26.5, 205, 27);
        e.bezierCurveTo(205.5, 27.6, 206.1, 27.8, 206.9, 27.8);
        e.bezierCurveTo(207.7, 27.8, 208.3, 27.6, 208.7, 27);
        e.bezierCurveTo(209.1, 26.5, 209.3, 25.8, 209.3, 24.9);
        e.lineTo(209.3, .7);
        e.lineTo(214.2, .7);
        e.lineTo(214.2, 24);
        e.bezierCurveTo(214.2, 26.8, 213.6, 28.9, 212.3, 30.3);
        e.bezierCurveTo(211.1, 31.8, 209.2, 32.6, 206.9, 32.6);
        e.bezierCurveTo(204.4, 32.6, 202.6, 31.8, 201.3, 30.3);
        e.bezierCurveTo(200.1, 28.9, 199.4, 26.7, 199.4, 23.9);
        e.lineTo(199.4, .7);
        e.closePath();
        e.moveTo(224.6, 18.8);
        e.lineTo(224.6, 31.9);
        e.lineTo(219.7, 31.9);
        e.lineTo(219.7, .7);
        e.lineTo(226.8, .7);
        e.bezierCurveTo(229.5, .7, 231.4, 1.4, 232.5, 2.8);
        e.bezierCurveTo(233.7, 4.2, 234.3, 6.5, 234.3, 9.7);
        e.bezierCurveTo(234.3, 11.7, 234.1, 13.2, 233.6, 14.4);
        e.bezierCurveTo(233.1, 15.7, 232.4, 16.6, 231.3, 17.4);
        e.lineTo(234.8, 31.9);
        e.lineTo(229.8, 31.9);
        e.lineTo(226.8, 18.8);
        e.lineTo(224.6, 18.8);
        e.closePath();
        e.moveTo(224.6, 5.2);
        e.lineTo(224.6, 14.2);
        e.lineTo(226.5, 14.2);
        e.bezierCurveTo(227.6, 14.2, 228.3, 13.9, 228.8, 13.2);
        e.bezierCurveTo(229.2, 12.6, 229.4, 11.3, 229.4, 9.5);
        e.bezierCurveTo(229.4, 7.9, 229.2, 6.7, 228.7, 6.1);
        e.bezierCurveTo(228.3, 5.5, 227.5, 5.2, 226.3, 5.2);
        e.lineTo(224.6, 5.2);
        e.closePath();
        e.moveTo(239.1, 31.9);
        e.lineTo(239.1, .7);
        e.lineTo(243.4, .7);
        e.lineTo(249.5, 19.3);
        e.bezierCurveTo(249.7, 19.7, 249.8, 20.2, 250, 20.7);
        e.bezierCurveTo(250.1, 21.3, 250.3, 22, 250.5, 22.6);
        e.bezierCurveTo(250.3, 21.7, 250.2, 20.9, 250.1, 20.1);
        e.bezierCurveTo(250, 19.4, 249.9, 18.8, 249.9, 18.4);
        e.lineTo(249.9, .7);
        e.lineTo(254.4, .7);
        e.lineTo(254.4, 31.9);
        e.lineTo(249.9, 31.9);
        e.lineTo(244.1, 14.6);
        e.bezierCurveTo(244, 14.6, 244, 14.5, 243.9, 14.3);
        e.bezierCurveTo(243.5, 13.1, 243.2, 12.1, 243, 11.2);
        e.bezierCurveTo(243.2, 12.3, 243.3, 13.3, 243.4, 14);
        e.bezierCurveTo(243.5, 14.7, 243.6, 15.2, 243.6, 15.6);
        e.lineTo(243.6, 31.9);
        e.lineTo(239.1, 31.9);
        e.closePath();
        e.moveTo(267.4, 5.2);
        e.lineTo(267.4, .7);
        e.lineTo(282.2, .7);
        e.lineTo(282.2, 5.2);
        e.lineTo(277.2, 5.2);
        e.lineTo(277.2, 31.9);
        e.lineTo(272.4, 31.9);
        e.lineTo(272.4, 5.2);
        e.lineTo(267.4, 5.2);
        e.closePath();
        e.moveTo(285.3, .7);
        e.lineTo(290.1, .7);
        e.lineTo(290.1, 13.4);
        e.lineTo(294.9, 13.4);
        e.lineTo(294.9, .7);
        e.lineTo(299.7, .7);
        e.lineTo(299.7, 31.9);
        e.lineTo(294.9, 31.9);
        e.lineTo(294.9, 17.9);
        e.lineTo(290.1, 17.9);
        e.lineTo(290.1, 31.9);
        e.lineTo(285.3, 31.9);
        e.lineTo(285.3, .7);
        e.closePath();
        e.moveTo(305.5, 31.9);
        e.lineTo(305.5, .7);
        e.lineTo(310.4, .7);
        e.lineTo(310.4, 31.9);
        e.lineTo(305.5, 31.9);
        e.closePath();
        e.moveTo(314.7, 24);
        e.lineTo(319.3, 23.3);
        e.bezierCurveTo(319.4, 24.9, 319.7, 26, 320.2, 26.8);
        e.bezierCurveTo(320.7, 27.5, 321.5, 27.9, 322.5, 27.9);
        e.bezierCurveTo(323.4, 27.9, 324.1, 27.6, 324.6, 27.1);
        e.bezierCurveTo(325.2, 26.5, 325.4, 25.8, 325.4, 24.9);
        e.bezierCurveTo(325.4, 23.3, 324.2, 21.2, 321.6, 18.6);
        e.bezierCurveTo(321.4, 18.4, 321.2, 18.2, 321.1, 18.1);
        e.bezierCurveTo(318.6, 15.6, 316.9, 13.7, 316.2, 12.3);
        e.bezierCurveTo(315.5, 10.9, 315.1, 9.5, 315.1, 8);
        e.bezierCurveTo(315.1, 5.8, 315.9, 3.9, 317.3, 2.4);
        e.bezierCurveTo(318.8, .9, 320.5, .2, 322.6, .2);
        e.bezierCurveTo(324.6, .2, 326.3, .8, 327.6, 2.2);
        e.bezierCurveTo(328.9, 3.6, 329.6, 5.5, 329.8, 7.9);
        e.lineTo(325.1, 8.5);
        e.bezierCurveTo(325, 7.2, 324.8, 6.2, 324.4, 5.5);
        e.bezierCurveTo(324, 4.9, 323.3, 4.6, 322.5, 4.6);
        e.bezierCurveTo(321.7, 4.6, 321.1, 4.9, 320.6, 5.4);
        e.bezierCurveTo(320.2, 6, 319.9, 6.7, 319.9, 7.5);
        e.bezierCurveTo(319.9, 9.3, 321.4, 11.7, 324.5, 14.6);
        e.bezierCurveTo(324.6, 14.8, 324.7, 14.8, 324.7, 14.9);
        e.bezierCurveTo(327, 17.1, 328.4, 18.8, 329.1, 20.2);
        e.bezierCurveTo(329.8, 21.6, 330.1, 23.1, 330.1, 24.8);
        e.bezierCurveTo(330.1, 27.1, 329.4, 29, 328, 30.4);
        e.bezierCurveTo(326.6, 31.9, 324.8, 32.6, 322.7, 32.6);
        e.bezierCurveTo(320.3, 32.6, 318.4, 31.8, 317, 30.3);
        e.bezierCurveTo(315.6, 28.8, 314.8, 26.7, 314.7, 24);
        e.closePath();
        e.moveTo(341.2, .7);
        e.lineTo(346.1, .7);
        e.lineTo(349.2, 13.1);
        e.lineTo(349.5, 13.1);
        e.lineTo(352.5, .7);
        e.lineTo(357.4, .7);
        e.lineTo(351.8, 18.9);
        e.lineTo(351.8, 31.9);
        e.lineTo(347, 31.9);
        e.lineTo(347, 19.5);
        e.lineTo(341.2, .7);
        e.closePath();
        e.moveTo(360.3, 31.9);
        e.lineTo(360.3, .7);
        e.lineTo(372.9, .7);
        e.lineTo(372.9, 5.2);
        e.lineTo(365.1, 5.2);
        e.lineTo(365.1, 13.4);
        e.lineTo(370.7, 13.4);
        e.lineTo(370.7, 17.9);
        e.lineTo(365.1, 17.9);
        e.lineTo(365.1, 27.2);
        e.lineTo(372.9, 27.2);
        e.lineTo(372.9, 31.9);
        e.lineTo(360.3, 31.9);
        e.closePath();
        e.moveTo(375.2, 31.9);
        e.lineTo(380.4, .7);
        e.lineTo(386.7, .7);
        e.lineTo(391.8, 31.9);
        e.lineTo(386.8, 31.9);
        e.lineTo(385.9, 25.1);
        e.lineTo(381, 25.1);
        e.lineTo(380, 31.9);
        e.lineTo(375.2, 31.9);
        e.closePath();
        e.moveTo(381.6, 20.7);
        e.lineTo(385.3, 20.7);
        e.lineTo(383.6, 7.7);
        e.lineTo(383.3, 7.7);
        e.lineTo(381.6, 20.7);
        e.closePath();
        e.moveTo(400.2, 18.8);
        e.lineTo(400.2, 31.9);
        e.lineTo(395.4, 31.9);
        e.lineTo(395.4, .7);
        e.lineTo(402.4, .7);
        e.bezierCurveTo(405.1, .7, 407, 1.4, 408.2, 2.8);
        e.bezierCurveTo(409.4, 4.2, 409.9, 6.5, 409.9, 9.7);
        e.bezierCurveTo(409.9, 11.7, 409.7, 13.2, 409.2, 14.4);
        e.bezierCurveTo(408.8, 15.7, 408, 16.6, 406.9, 17.4);
        e.lineTo(410.4, 31.9);
        e.lineTo(405.5, 31.9);
        e.lineTo(402.5, 18.8);
        e.lineTo(400.2, 18.8);
        e.closePath();
        e.moveTo(400.2, 5.2);
        e.lineTo(400.2, 14.2);
        e.lineTo(402.1, 14.2);
        e.bezierCurveTo(403.2, 14.2, 404, 13.9, 404.4, 13.2);
        e.bezierCurveTo(404.8, 12.6, 405, 11.3, 405, 9.5);
        e.bezierCurveTo(405, 7.9, 404.8, 6.7, 404.4, 6.1);
        e.bezierCurveTo(403.9, 5.5, 403.1, 5.2, 401.9, 5.2);
        e.lineTo(400.2, 5.2);
        e.closePath();
        this.graphics = e
    };
    a.ReasonReturn = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.LIGHT_PURPLE.red;
        var b = StyleManager.LIGHT_PURPLE.green;
        var c = StyleManager.LIGHT_PURPLE.blue;
        var d = StyleManager.LIGHT_PURPLE.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(0, 6.2);
        e.lineTo(0, .6);
        e.lineTo(18.2, .6);
        e.lineTo(18.2, 6.2);
        e.lineTo(12.1, 6.2);
        e.lineTo(12.1, 39.1);
        e.lineTo(6.1, 39.1);
        e.lineTo(6.1, 6.2);
        e.lineTo(0, 6.2);
        e.closePath();
        e.moveTo(23.2, .6);
        e.lineTo(29, .6);
        e.lineTo(29, 16.3);
        e.lineTo(35, 16.3);
        e.lineTo(35, .6);
        e.lineTo(40.9, .6);
        e.lineTo(40.9, 39.1);
        e.lineTo(35, 39.1);
        e.lineTo(35, 21.9);
        e.lineTo(29, 21.9);
        e.lineTo(29, 39.1);
        e.lineTo(23.2, 39.1);
        e.lineTo(23.2, .6);
        e.closePath();
        e.moveTo(49.2, 39.1);
        e.lineTo(49.2, .6);
        e.lineTo(55.2, .6);
        e.lineTo(55.2, 39.1);
        e.lineTo(49.2, 39.1);
        e.closePath();
        e.moveTo(61.6, 29.3);
        e.lineTo(67.2, 28.5);
        e.bezierCurveTo(67.3, 30.4, 67.7, 31.9, 68.3, 32.8);
        e.bezierCurveTo(69, 33.7, 69.9, 34.2, 71.2, 34.2);
        e.bezierCurveTo(72.2, 34.2, 73.1, 33.9, 73.8, 33.2);
        e.bezierCurveTo(74.5, 32.5, 74.8, 31.6, 74.8, 30.5);
        e.bezierCurveTo(74.8, 28.5, 73.2, 25.9, 70, 22.7);
        e.bezierCurveTo(69.8, 22.5, 69.6, 22.3, 69.5, 22.2);
        e.bezierCurveTo(66.3, 19, 64.3, 16.6, 63.4, 15);
        e.bezierCurveTo(62.6, 13.3, 62.1, 11.5, 62.1, 9.6);
        e.bezierCurveTo(62.1, 6.9, 63, 4.6, 64.8, 2.8);
        e.bezierCurveTo(66.6, .9, 68.7, 0, 71.3, 0);
        e.bezierCurveTo(73.8, 0, 75.9, .9, 77.5, 2.6);
        e.bezierCurveTo(79.1, 4.3, 80, 6.6, 80.2, 9.5);
        e.lineTo(74.4, 10.3);
        e.bezierCurveTo(74.3, 8.6, 74, 7.4, 73.5, 6.6);
        e.bezierCurveTo(73, 5.9, 72.2, 5.5, 71.2, 5.5);
        e.bezierCurveTo(70.2, 5.5, 69.4, 5.9, 68.9, 6.5);
        e.bezierCurveTo(68.3, 7.1, 68, 8, 68, 9.1);
        e.bezierCurveTo(68, 11.3, 69.9, 14.2, 73.6, 17.8);
        e.bezierCurveTo(73.7, 18, 73.8, 18.1, 73.9, 18.2);
        e.bezierCurveTo(76.7, 20.8, 78.4, 23, 79.3, 24.7);
        e.bezierCurveTo(80.1, 26.4, 80.6, 28.3, 80.6, 30.4);
        e.bezierCurveTo(80.6, 33.2, 79.7, 35.5, 78, 37.3);
        e.bezierCurveTo(76.2, 39.1, 74, 40, 71.4, 40);
        e.bezierCurveTo(68.4, 40, 66.1, 39, 64.4, 37.2);
        e.bezierCurveTo(62.6, 35.3, 61.7, 32.7, 61.6, 29.3);
        e.closePath();
        this.graphics = e
    };
    a.ThisWord = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.DARK_PURPLE.red;
        var b = StyleManager.DARK_PURPLE.green;
        var c = StyleManager.DARK_PURPLE.blue;
        var d = StyleManager.DARK_PURPLE.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(4.9, 2.9);
        e.lineTo(37.2, 24.3);
        e.bezierCurveTo(37.4, 24.3, 37.6, 25, 37.6, 26.3);
        e.bezierCurveTo(37.6, 30.1, 32.7, 33.4, 23, 36.2);
        e.bezierCurveTo(15.1, 38.4, 9.1, 39.6, 4.9, 39.6);
        e.bezierCurveTo(4.7, 39.6, 4.3, 39.5, 3.9, 39.4);
        e.bezierCurveTo(3.4, 39.4, 3.1, 39.4, 2.8, 39.4);
        e.bezierCurveTo(.9, 29.6, 0, 17.5, 0, 2.9);
        e.lineTo(4.9, 2.9);
        e.closePath();
        this.graphics = e
    };
    a.HPart1 = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.DARK_PURPLE.red;
        var b = StyleManager.DARK_PURPLE.green;
        var c = StyleManager.DARK_PURPLE.blue;
        var d = StyleManager.DARK_PURPLE.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(14.2, 2.1);
        e.lineTo(11.4, 4);
        e.bezierCurveTo(9.7, 4.5, 6.8, 5.7, 2.8, 7.4);
        e.bezierCurveTo(1.8, 7.8, 1.1, 8.1, .6, 8.2);
        e.bezierCurveTo(.6, 8.4, .6, 8.5, .6, 8.7);
        e.bezierCurveTo(.5, 9, .4, 9.2, .4, 9.3);
        e.bezierCurveTo(.4, 9.5, .5, 9.8, .6, 10.4);
        e.lineTo(2.8, 12.5);
        e.bezierCurveTo(2.9, 12.5, 7, 15.6, 15, 21.8);
        e.bezierCurveTo(19.6, 25.4, 24.1, 28.1, 28.3, 29.9);
        e.bezierCurveTo(31.5, 31.4, 34.8, 32.1, 38.2, 32.1);
        e.bezierCurveTo(43.5, 32.1, 47.9, 31.4, 51.3, 29.9);
        e.bezierCurveTo(52.3, 29.5, 52.9, 29, 53.1, 28.3);
        e.lineTo(14.2, 2.1);
        e.closePath();
        this.graphics = e
    };
    a.HPart2 = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.DARK_PURPLE.red;
        var b = StyleManager.DARK_PURPLE.green;
        var c = StyleManager.DARK_PURPLE.blue;
        var d = StyleManager.DARK_PURPLE.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(.4, 0);
        e.lineTo(.4, 37.7);
        e.lineTo(0, 38);
        e.lineTo(38.9, 64.2);
        e.bezierCurveTo(39, 64, 39.1, 63.7, 39.1, 63.5);
        e.lineTo(39.1, 24.8);
        e.lineTo(39.3, 24.7);
        e.lineTo(.4, 0);
        e.closePath();
        this.graphics = e
    };
    a.HPart3 = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.DARK_PURPLE.red;
        var b = StyleManager.DARK_PURPLE.green;
        var c = StyleManager.DARK_PURPLE.blue;
        var d = StyleManager.DARK_PURPLE.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(61.7, 39);
        e.lineTo(61.7, 2.7);
        e.lineTo(.5, 21.8);
        e.lineTo(.5, 22.7);
        e.lineTo(39.3, 47.5);
        e.lineTo(41.3, 46.7);
        e.bezierCurveTo(42.1, 46.4, 43.2, 46, 44.5, 45.4);
        e.lineTo(57.4, 41.1);
        e.bezierCurveTo(60.2, 40.1, 61.7, 39.4, 61.7, 39);
        e.closePath();
        this.graphics = e
    };
    a.HPart4 = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.DARK_PURPLE.red;
        var b = StyleManager.DARK_PURPLE.green;
        var c = StyleManager.DARK_PURPLE.blue;
        var d = StyleManager.DARK_PURPLE.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(52.8, 28);
        e.lineTo(52.8, 27.7);
        e.lineTo(13.4, 2.5);
        e.lineTo(1.2, 8.6);
        e.lineTo(1.2, 10.8);
        e.lineTo(4.7, 12.9);
        e.bezierCurveTo(7, 14.5, 9.8, 16.3, 13, 18.3);
        e.lineTo(31.3, 30.1);
        e.bezierCurveTo(33.7, 31.7, 35.9, 32.5, 37.7, 32.5);
        e.bezierCurveTo(38, 32.5, 38.4, 32.5, 38.8, 32.5);
        e.bezierCurveTo(39.2, 32.3, 39.6, 32.2, 39.9, 32.2);
        e.bezierCurveTo(42.8, 31.8, 46.6, 30.6, 51.3, 28.6);
        e.lineTo(52.8, 28);
        e.closePath();
        this.graphics = e
    };
    a.HPart5 = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.DARK_PURPLE.red;
        var b = StyleManager.DARK_PURPLE.green;
        var c = StyleManager.DARK_PURPLE.blue;
        var d = StyleManager.DARK_PURPLE.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(39.4, 131.7);
        e.lineTo(39.4, 26.7);
        e.lineTo(35.8, 24.1);
        e.bezierCurveTo(31.5, 21.3, 25.1, 17, 16.5, 11.3);
        e.bezierCurveTo(12.7, 8.8, 9.7, 6.8, 7.2, 5.2);
        e.bezierCurveTo(6.1, 4.7, 4.7, 4, 2.9, 3.1);
        e.bezierCurveTo(2.4, 2.8, 1.6, 2.7, .8, 2.7);
        e.lineTo(.8, 106.2);
        e.lineTo(.1, 106.5);
        e.lineTo(39.4, 131.7);
        e.closePath();
        this.graphics = e
    };
    a.HPart6 = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.DARK_PURPLE.red;
        var b = StyleManager.DARK_PURPLE.green;
        var c = StyleManager.DARK_PURPLE.blue;
        var d = StyleManager.DARK_PURPLE.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(0, 33.2);
        e.lineTo(32.2, 54.7);
        e.lineTo(43, 54.7);
        e.lineTo(133.2, 26.8);
        e.lineTo(133.2, 25.7);
        e.lineTo(93.3, 1.5);
        e.lineTo(0, 31.1);
        e.lineTo(0, 33.2);
        e.closePath();
        this.graphics = e
    };
    a.WPart1 = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.DARK_PURPLE.red;
        var b = StyleManager.DARK_PURPLE.green;
        var c = StyleManager.DARK_PURPLE.blue;
        var d = StyleManager.DARK_PURPLE.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(39.1, 85.7);
        e.lineTo(37.8, 33.7);
        e.bezierCurveTo(37.7, 29.1, 37.6, 25.8, 37.6, 23.6);
        e.bezierCurveTo(37.2, 22.6, 36.4, 21.9, 35.4, 21.5);
        e.bezierCurveTo(31.1, 18.6, 24.6, 14.2, 15.9, 8.4);
        e.lineTo(3.2, 0);
        e.lineTo(0, 0);
        e.lineTo(0, 103.5);
        e.lineTo(39.7, 128.2);
        e.lineTo(39.7, 111.7);
        e.bezierCurveTo(39.7, 111.8, 39.5, 103.2, 39.1, 85.7);
        e.closePath();
        this.graphics = e
    };
    a.WPart2 = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.DARK_PURPLE.red;
        var b = StyleManager.DARK_PURPLE.green;
        var c = StyleManager.DARK_PURPLE.blue;
        var d = StyleManager.DARK_PURPLE.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(2.3, 0);
        e.bezierCurveTo(4, .9, 5.4, 1.6, 6.6, 2.1);
        e.bezierCurveTo(9.4, 3.7, 13.2, 6.2, 17.9, 9.7);
        e.lineTo(19.4, 10.7);
        e.lineTo(19.4, 75.2);
        e.bezierCurveTo(14.6, 77.5, 10.3, 78.9, 6.6, 79.5);
        e.bezierCurveTo(5, 79.9, 2.8, 80.1, .1, 80.1);
        e.lineTo(.1, 0);
        e.lineTo(2.3, 0);
        e.closePath();
        this.graphics = e
    };
    a.WPart3 = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.DARK_PURPLE.red;
        var b = StyleManager.DARK_PURPLE.green;
        var c = StyleManager.DARK_PURPLE.blue;
        var d = StyleManager.DARK_PURPLE.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(1.1, 0);
        e.bezierCurveTo(4.9, 0, 11.2, 2.9, 19.8, 8.8);
        e.bezierCurveTo(28.3, 14.7, 33.9, 19.6, 36.5, 23.6);
        e.lineTo(36.7, 24.1);
        e.bezierCurveTo(36.7, 24.3, 36.7, 24.6, 36.7, 24.7);
        e.bezierCurveTo(36.7, 26.7, 31.6, 29.4, 21.5, 32.6);
        e.bezierCurveTo(11.9, 35.7, 4.7, 37.2, 0, 37.2);
        e.lineTo(0, 0);
        e.lineTo(1.1, 0);
        e.closePath();
        this.graphics = e
    };
    a.YPart1 = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.DARK_PURPLE.red;
        var b = StyleManager.DARK_PURPLE.green;
        var c = StyleManager.DARK_PURPLE.blue;
        var d = StyleManager.DARK_PURPLE.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(.2, 11.9);
        e.lineTo(.2, 11.5);
        e.bezierCurveTo(.6, 10.5, 1.4, 9.8, 2.4, 9.5);
        e.bezierCurveTo(3.4, 9.1, 5.2, 8.5, 7.9, 7.6);
        e.bezierCurveTo(19.3, 3.9, 26.7, 1.6, 30.3, .8);
        e.bezierCurveTo(30.6, .8, 30.9, .7, 31.4, .6);
        e.bezierCurveTo(31.8, .6, 32.1, .6, 32.4, .6);
        e.lineTo(32.4, 33);
        e.lineTo(28.1, 33);
        e.lineTo(25.1, 31.1);
        e.bezierCurveTo(18.3, 26.6, 10.7, 21.5, 2.4, 15.8);
        e.lineTo(.2, 13.7);
        e.bezierCurveTo(.1, 13.1, 0, 12.7, 0, 12.6);
        e.bezierCurveTo(0, 12.4, .1, 12.2, .2, 11.9);
        e.closePath();
        this.graphics = e
    };
    a.YPart2 = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.DARK_PURPLE.red;
        var b = StyleManager.DARK_PURPLE.green;
        var c = StyleManager.DARK_PURPLE.blue;
        var d = StyleManager.DARK_PURPLE.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(38.2, .1);
        e.bezierCurveTo(33, 1.8, 24.3, 4.6, 11.9, 8.5);
        e.lineTo(7.8, 9.8);
        e.bezierCurveTo(6.4, 10.3, 4.5, 11, 2, 12);
        e.lineTo(0, 12.8);
        e.lineTo(39.6, 37.4);
        e.lineTo(39.6, 37.1);
        e.lineTo(75.9, 25.8);
        e.lineTo(38.2, .1);
        e.closePath();
        this.graphics = e
    };
    a.YPart3 = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.DARK_PURPLE.red;
        var b = StyleManager.DARK_PURPLE.green;
        var c = StyleManager.DARK_PURPLE.blue;
        var d = StyleManager.DARK_PURPLE.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(38.1, 21.8);
        e.lineTo(36, 19.6);
        e.bezierCurveTo(32, 16.9, 25.9, 13, 17.9, 7.8);
        e.bezierCurveTo(13.9, 5.3, 9.9, 2.8, 5.9, .3);
        e.lineTo(.5, .3);
        e.lineTo(.5, 60.4);
        e.bezierCurveTo(.4, 60.5, .3, 60.5, .2, 60.6);
        e.lineTo(37.9, 86.3);
        e.lineTo(38.1, 86.2);
        e.lineTo(38.1, 21.8);
        e.closePath();
        this.graphics = e
    };
    a.YPart4 = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.DARK_PURPLE.red;
        var b = StyleManager.DARK_PURPLE.green;
        var c = StyleManager.DARK_PURPLE.blue;
        var d = StyleManager.DARK_PURPLE.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(34.6, 30.2);
        e.bezierCurveTo(34.9, 30.2, 35.3, 30.3, 35.9, 30.4);
        e.bezierCurveTo(36.6, 30.4, 37.2, 30.4, 37.5, 30.4);
        e.bezierCurveTo(37.9, 30.4, 38.5, 30.4, 39.4, 30.4);
        e.bezierCurveTo(40.1, 30.3, 40.6, 30.2, 41.1, 30.2);
        e.bezierCurveTo(43.2, 29.9, 47.7, 28.7, 54.4, 26.6);
        e.bezierCurveTo(55.1, 26.4, 55.6, 26.2, 55.9, 26.1);
        e.lineTo(16.3, .2);
        e.lineTo(.5, 7.4);
        e.lineTo(34.6, 30.2);
        e.closePath();
        this.graphics = e
    };
    a.YPart5 = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.DARK_PURPLE.red;
        var b = StyleManager.DARK_PURPLE.green;
        var c = StyleManager.DARK_PURPLE.blue;
        var d = StyleManager.DARK_PURPLE.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(1.5, .3);
        e.lineTo(1.4, .3);
        e.lineTo(1.4, 41.1);
        e.lineTo(1.3, 41.2);
        e.lineTo(40.9, 67.1);
        e.bezierCurveTo(41, 67, 41.1, 67, 41.1, 66.9);
        e.lineTo(41.1, 24.9);
        e.lineTo(1.5, .3);
        e.closePath();
        this.graphics = e
    };
    a.YPart6 = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.LIGHT_AQUA.red;
        var b = StyleManager.LIGHT_AQUA.green;
        var c = StyleManager.LIGHT_AQUA.blue;
        var d = StyleManager.LIGHT_AQUA.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(11.1, 5.9);
        e.lineTo(12.7, 5.9);
        e.lineTo(14.2, 5.9);
        e.lineTo(23.2, 27.3);
        e.lineTo(21, 27.3);
        e.lineTo(18.8, 27.3);
        e.lineTo(16.7, 21.8);
        e.lineTo(8.6, 21.8);
        e.lineTo(6.5, 27.3);
        e.lineTo(4.3, 27.3);
        e.lineTo(2.1, 27.3);
        e.lineTo(11.1, 5.9);
        e.closePath();
        e.moveTo(10, 18.1);
        e.lineTo(15.3, 18.1);
        e.lineTo(12.6, 11.2);
        e.lineTo(12.6, 11.2);
        e.lineTo(10, 18.1);
        e.closePath();
        e.moveTo(28.8, 27.3);
        e.lineTo(26.8, 27.3);
        e.lineTo(24.9, 27.3);
        e.lineTo(24.9, 5.9);
        e.lineTo(27.1, 5.9);
        e.lineTo(29.4, 5.9);
        e.lineTo(38.3, 21.5);
        e.lineTo(38.3, 5.9);
        e.lineTo(40.3, 5.9);
        e.lineTo(42.3, 5.9);
        e.lineTo(42.3, 27.3);
        e.lineTo(40.1, 27.3);
        e.lineTo(37.9, 27.3);
        e.lineTo(28.8, 11.5);
        e.lineTo(28.8, 27.3);
        e.closePath();
        e.moveTo(45.5, 5.9);
        e.lineTo(47.5, 5.9);
        e.lineTo(50.4, 5.9);
        e.bezierCurveTo(54.3, 5.9, 57.3, 6.8, 59.5, 8.7);
        e.bezierCurveTo(61.7, 10.5, 62.8, 13.1, 62.8, 16.4);
        e.bezierCurveTo(62.8, 19.8, 61.7, 22.5, 59.6, 24.4);
        e.bezierCurveTo(57.5, 26.3, 54.6, 27.3, 50.9, 27.3);
        e.lineTo(47.5, 27.3);
        e.lineTo(45.5, 27.3);
        e.lineTo(45.5, 5.9);
        e.closePath();
        e.moveTo(49.5, 23.6);
        e.lineTo(50.9, 23.6);
        e.bezierCurveTo(53.4, 23.6, 55.4, 23, 56.7, 21.8);
        e.bezierCurveTo(58.1, 20.6, 58.8, 18.8, 58.8, 16.6);
        e.bezierCurveTo(58.8, 14.3, 58.1, 12.6, 56.6, 11.4);
        e.bezierCurveTo(55.2, 10.2, 53.1, 9.6, 50.4, 9.6);
        e.lineTo(49.5, 9.6);
        e.lineTo(49.5, 23.6);
        e.closePath();
        this.graphics = e
    };
    a.And = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.GRAY.red;
        var b = StyleManager.GRAY.green;
        var c = StyleManager.GRAY.blue;
        var d = StyleManager.GRAY.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(25.9, 43.9);
        e.bezierCurveTo(22.6, 47.2, 18.7, 48.8, 14.1, 48.8);
        e.lineTo(0, 48.8);
        e.bezierCurveTo(0, 41.5, 0, 34.2, 0, 26.9);
        e.bezierCurveTo(0, 19.6, 0, 12.4, 0, 5.1);
        e.lineTo(14.6, 5.1);
        e.bezierCurveTo(15.1, 5.1, 15.8, 5.2, 16.9, 5.4);
        e.bezierCurveTo(17.9, 5.5, 19, 5.9, 20.1, 6.5);
        e.bezierCurveTo(21.7, 7.2, 23.1, 8.4, 24.4, 10);
        e.bezierCurveTo(25.7, 11.6, 26.3, 13.8, 26.2, 16.7);
        e.bezierCurveTo(26.2, 17.3, 26.1, 17.9, 26, 18.5);
        e.bezierCurveTo(26, 19.1, 25.8, 19.7, 25.6, 20.2);
        e.bezierCurveTo(27.2, 21.8, 28.5, 23.6, 29.4, 25.7);
        e.bezierCurveTo(30.3, 27.7, 30.7, 29.9, 30.7, 32.2);
        e.bezierCurveTo(30.7, 36.8, 29.1, 40.7, 25.9, 43.9);
        e.closePath();
        e.moveTo(19.9, 26.8);
        e.bezierCurveTo(18.5, 25.5, 16.9, 24.4, 15.2, 23.5);
        e.bezierCurveTo(15.1, 23.5, 15.1, 23.5, 15.1, 23.4);
        e.bezierCurveTo(15.1, 23.4, 15, 23.4, 15, 23.4);
        e.bezierCurveTo(14.8, 23.3, 14.5, 23.1, 14.3, 23);
        e.bezierCurveTo(14, 22.9, 13.8, 22.7, 13.6, 22.6);
        e.bezierCurveTo(13.8, 22.3, 14, 22, 14.4, 21.7);
        e.bezierCurveTo(14.7, 21.4, 15.1, 21, 15.4, 20.6);
        e.bezierCurveTo(15.7, 20.3, 15.9, 20, 16.1, 19.7);
        e.bezierCurveTo(16.3, 19.5, 16.6, 19.2, 16.8, 18.9);
        e.bezierCurveTo(17, 18.5, 17.2, 18.2, 17.4, 17.8);
        e.bezierCurveTo(17.5, 17.4, 17.6, 17, 17.6, 16.7);
        e.bezierCurveTo(17.6, 15.9, 17.3, 15.2, 16.7, 14.6);
        e.bezierCurveTo(16.1, 14, 15.4, 13.7, 14.6, 13.7);
        e.lineTo(8.6, 13.7);
        e.lineTo(8.6, 40.2);
        e.lineTo(14.1, 40.2);
        e.bezierCurveTo(16.3, 40.2, 18.2, 39.4, 19.8, 37.9);
        e.bezierCurveTo(21.3, 36.3, 22.1, 34.4, 22.1, 32.2);
        e.bezierCurveTo(22.1, 29.8, 21.4, 28, 19.9, 26.8);
        e.closePath();
        e.moveTo(59.2, 5);
        e.lineTo(67.8, 5);
        e.lineTo(67.8, 35.3);
        e.bezierCurveTo(67.8, 39.3, 66.4, 42.7, 63.5, 45.6);
        e.bezierCurveTo(60.7, 48.4, 57.3, 49.9, 53.2, 49.9);
        e.bezierCurveTo(49.2, 49.9, 45.8, 48.4, 42.9, 45.6);
        e.bezierCurveTo(40.1, 42.7, 38.6, 39.3, 38.6, 35.3);
        e.lineTo(38.6, 5);
        e.lineTo(47.2, 5);
        e.lineTo(47.2, 35.3);
        e.bezierCurveTo(47.2, 36.9, 47.8, 38.4, 49, 39.5);
        e.bezierCurveTo(50.2, 40.7, 51.6, 41.3, 53.2, 41.3);
        e.bezierCurveTo(54.9, 41.3, 56.3, 40.7, 57.5, 39.5);
        e.bezierCurveTo(58.6, 38.4, 59.2, 36.9, 59.2, 35.3);
        e.lineTo(59.2, 5);
        e.closePath();
        e.moveTo(106.4, 48.8);
        e.lineTo(95.4, 48.8);
        e.lineTo(92, 44.4);
        e.bezierCurveTo(91.4, 44.8, 90.9, 45.1, 90.3, 45.5);
        e.bezierCurveTo(89.7, 45.8, 89.1, 46.1, 88.5, 46.3);
        e.lineTo(85.1, 38.4);
        e.bezierCurveTo(87.8, 37.3, 89.7, 35.6, 91, 33.4);
        e.bezierCurveTo(92.3, 31.3, 93, 29, 93, 26.5);
        e.bezierCurveTo(93, 24, 92.3, 21.6, 90.8, 19.3);
        e.bezierCurveTo(89.4, 17, 87.2, 15.4, 84.4, 14.4);
        e.lineTo(84.4, 48.8);
        e.lineTo(75.7, 48.8);
        e.lineTo(75.7, 5);
        e.lineTo(80.1, 5);
        e.bezierCurveTo(86.6, 5, 91.9, 7.3, 95.8, 11.7);
        e.bezierCurveTo(99.6, 16.2, 101.6, 21.2, 101.6, 26.7);
        e.bezierCurveTo(101.6, 27.1, 101.6, 27.5, 101.6, 27.9);
        e.bezierCurveTo(101.5, 28.3, 101.5, 28.7, 101.5, 29.1);
        e.bezierCurveTo(101.3, 30.7, 100.9, 32.3, 100.3, 33.8);
        e.bezierCurveTo(99.8, 35.4, 99, 36.9, 98, 38.4);
        e.lineTo(106.4, 48.8);
        e.closePath();
        e.moveTo(120.6, 16);
        e.bezierCurveTo(120.6, 16.5, 120.5, 17.1, 120.5, 17.6);
        e.bezierCurveTo(120.5, 19.1, 120.8, 20.5, 121.4, 21.9);
        e.bezierCurveTo(122, 23.3, 122.6, 24.6, 123.3, 26);
        e.bezierCurveTo(123.4, 26.2, 123.4, 26.3, 123.5, 26.5);
        e.bezierCurveTo(123.6, 26.6, 123.6, 26.7, 123.7, 26.9);
        e.bezierCurveTo(123.8, 27.1, 124, 27.3, 124.1, 27.6);
        e.bezierCurveTo(124.2, 27.9, 124.3, 28.1, 124.4, 28.4);
        e.bezierCurveTo(124.9, 29.3, 125.2, 30.3, 125.5, 31.3);
        e.bezierCurveTo(125.8, 32.3, 126, 33.3, 126.1, 34.3);
        e.bezierCurveTo(126.2, 34.6, 126.2, 34.9, 126.2, 35.3);
        e.bezierCurveTo(126.2, 35.6, 126.2, 35.9, 126.2, 36.3);
        e.bezierCurveTo(126.2, 39.7, 125.3, 43, 123.4, 46.1);
        e.bezierCurveTo(121.5, 49.2, 118.9, 51.5, 115.5, 53.1);
        e.lineTo(111.8, 45.5);
        e.bezierCurveTo(113.7, 44.6, 115.1, 43.3, 116.1, 41.6);
        e.bezierCurveTo(117.1, 39.9, 117.6, 38.1, 117.6, 36.3);
        e.bezierCurveTo(117.6, 35.9, 117.6, 35.5, 117.6, 35.2);
        e.bezierCurveTo(117.5, 34.9, 117.5, 34.5, 117.4, 34.1);
        e.bezierCurveTo(117.3, 33.8, 117.2, 33.4, 117.1, 33.1);
        e.bezierCurveTo(117, 32.7, 116.8, 32.4, 116.7, 32);
        e.lineTo(113.7, 25.8);
        e.bezierCurveTo(113.2, 24.9, 112.9, 24, 112.6, 23.1);
        e.bezierCurveTo(112.3, 22.2, 112.1, 21.3, 112, 20.5);
        e.bezierCurveTo(112, 20, 111.9, 19.6, 111.9, 19.1);
        e.bezierCurveTo(111.9, 18.7, 111.8, 18.3, 111.8, 17.8);
        e.bezierCurveTo(111.8, 14.3, 112.8, 11, 114.7, 8);
        e.bezierCurveTo(116.6, 4.9, 119.2, 2.5, 122.5, .9);
        e.lineTo(126.2, 8.7);
        e.bezierCurveTo(125, 9.3, 123.9, 10, 123.1, 11);
        e.bezierCurveTo(122.2, 12, 121.5, 13.1, 121.1, 14.4);
        e.bezierCurveTo(120.9, 14.9, 120.7, 15.4, 120.6, 16);
        e.closePath();
        e.moveTo(154.1, 5);
        e.lineTo(154.1, 13.7);
        e.lineTo(148.3, 13.7);
        e.lineTo(148.3, 48.8);
        e.lineTo(139.7, 48.8);
        e.lineTo(139.7, 13.7);
        e.lineTo(134, 13.7);
        e.lineTo(134, 5);
        e.lineTo(154.1, 5);
        e.closePath();
        e.moveTo(161.3, 48.8);
        e.lineTo(161.3, 5.1);
        e.lineTo(169.9, 5.1);
        e.lineTo(169.9, 48.8);
        e.lineTo(161.3, 48.8);
        e.closePath();
        e.moveTo(197.9, 48.8);
        e.lineTo(197.9, 28.6);
        e.bezierCurveTo(197.9, 25.2, 196.8, 22.1, 194.8, 19.4);
        e.bezierCurveTo(192.7, 16.7, 190, 15, 186.6, 14.1);
        e.lineTo(186.6, 48.8);
        e.lineTo(178.1, 48.8);
        e.lineTo(178.1, 5.1);
        e.bezierCurveTo(180.8, 5.1, 183.5, 5.2, 185.9, 5.4);
        e.bezierCurveTo(188.4, 5.6, 190.8, 6.3, 193.3, 7.4);
        e.bezierCurveTo(194, 7.8, 194.8, 8.3, 195.6, 8.8);
        e.bezierCurveTo(196.4, 9.3, 197.1, 9.8, 197.9, 10.5);
        e.lineTo(197.9, 5.1);
        e.lineTo(206.5, 5.1);
        e.lineTo(206.5, 48.8);
        e.lineTo(197.9, 48.8);
        e.closePath();
        e.moveTo(250.4, 45.3);
        e.bezierCurveTo(246.8, 48.3, 242.2, 49.9, 236.6, 49.9);
        e.bezierCurveTo(230.3, 49.9, 224.9, 47.6, 220.3, 43.2);
        e.bezierCurveTo(215.8, 38.7, 213.6, 33.3, 213.6, 26.9);
        e.bezierCurveTo(213.6, 20.6, 215.8, 15.1, 220.3, 10.6);
        e.bezierCurveTo(224.9, 6.1, 230.3, 3.9, 236.6, 3.9);
        e.bezierCurveTo(238.2, 3.9, 239.6, 4, 241.1, 4.3);
        e.bezierCurveTo(242.5, 4.6, 243.9, 5, 245.3, 5.6);
        e.lineTo(242, 13.5);
        e.bezierCurveTo(241.1, 13.2, 240.2, 12.9, 239.4, 12.7);
        e.bezierCurveTo(238.5, 12.6, 237.6, 12.5, 236.6, 12.5);
        e.bezierCurveTo(232.6, 12.5, 229.2, 13.9, 226.4, 16.7);
        e.bezierCurveTo(223.6, 19.5, 222.2, 22.9, 222.2, 26.9);
        e.bezierCurveTo(222.2, 30.9, 223.6, 34.3, 226.4, 37.1);
        e.bezierCurveTo(229.2, 40, 232.6, 41.4, 236.6, 41.4);
        e.bezierCurveTo(239.3, 41.4, 241.7, 40.7, 243.9, 39.4);
        e.bezierCurveTo(246.2, 38.1, 247.9, 36.3, 249.2, 34);
        e.lineTo(243.3, 24.1);
        e.lineTo(234.7, 24.1);
        e.lineTo(234.7, 15.6);
        e.lineTo(248.3, 15.6);
        e.lineTo(258.8, 33.4);
        e.bezierCurveTo(256.9, 38.3, 254.1, 42.2, 250.4, 45.3);
        e.closePath();
        this.graphics = e
    };
    a.Bursting = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.LIGHT_AQUA.red;
        var b = StyleManager.LIGHT_AQUA.green;
        var c = StyleManager.LIGHT_AQUA.blue;
        var d = StyleManager.LIGHT_AQUA.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(0, .5);
        e.lineTo(2.4, .5);
        e.lineTo(4.8, .5);
        e.lineTo(4.8, 26.2);
        e.lineTo(2.4, 26.2);
        e.lineTo(0, 26.2);
        e.lineTo(0, .5);
        e.closePath();
        e.moveTo(42.1, 19);
        e.bezierCurveTo(41.1, 21.4, 39.5, 23.2, 37.3, 24.6);
        e.bezierCurveTo(35.2, 26, 32.7, 26.7, 30, 26.7);
        e.bezierCurveTo(26.4, 26.7, 23.2, 25.4, 20.6, 22.8);
        e.bezierCurveTo(18.1, 20.2, 16.8, 17.1, 16.8, 13.4);
        e.bezierCurveTo(16.8, 9.7, 18.1, 6.5, 20.6, 3.9);
        e.bezierCurveTo(23.2, 1.3, 26.4, 0, 30, 0);
        e.bezierCurveTo(32.7, 0, 35.2, .7, 37.4, 2.1);
        e.bezierCurveTo(39.6, 3.6, 41.2, 5.5, 42.2, 7.8);
        e.lineTo(36.8, 7.8);
        e.bezierCurveTo(36, 6.8, 35, 6, 33.7, 5.4);
        e.bezierCurveTo(32.4, 4.7, 31.2, 4.4, 29.9, 4.4);
        e.bezierCurveTo(27.6, 4.4, 25.7, 5.3, 24, 7);
        e.bezierCurveTo(22.4, 8.7, 21.5, 10.8, 21.5, 13.2);
        e.bezierCurveTo(21.5, 15.7, 22.4, 17.9, 24.1, 19.7);
        e.bezierCurveTo(25.7, 21.4, 27.8, 22.3, 30.2, 22.3);
        e.bezierCurveTo(31.4, 22.3, 32.6, 22, 33.8, 21.4);
        e.bezierCurveTo(34.9, 20.8, 35.9, 20, 36.7, 19);
        e.lineTo(42.1, 19);
        e.closePath();
        e.moveTo(47.1, 22.8);
        e.bezierCurveTo(44.5, 20.2, 43.2, 17.1, 43.2, 13.4);
        e.bezierCurveTo(43.2, 9.7, 44.5, 6.5, 47.1, 3.9);
        e.bezierCurveTo(49.7, 1.3, 52.9, 0, 56.6, 0);
        e.bezierCurveTo(60.3, 0, 63.5, 1.3, 66.1, 3.9);
        e.bezierCurveTo(68.7, 6.5, 70, 9.7, 70, 13.4);
        e.bezierCurveTo(70, 17.1, 68.7, 20.2, 66.1, 22.8);
        e.bezierCurveTo(63.5, 25.4, 60.3, 26.7, 56.6, 26.7);
        e.bezierCurveTo(52.9, 26.7, 49.7, 25.4, 47.1, 22.8);
        e.closePath();
        e.moveTo(62.8, 19.7);
        e.bezierCurveTo(64.4, 18, 65.3, 15.9, 65.3, 13.4);
        e.bezierCurveTo(65.3, 10.9, 64.4, 8.8, 62.8, 7);
        e.bezierCurveTo(61.1, 5.3, 59, 4.4, 56.6, 4.4);
        e.bezierCurveTo(54.2, 4.4, 52.1, 5.3, 50.4, 7);
        e.bezierCurveTo(48.8, 8.8, 47.9, 10.9, 47.9, 13.4);
        e.bezierCurveTo(47.9, 15.9, 48.8, 18, 50.4, 19.7);
        e.bezierCurveTo(52.1, 21.4, 54.2, 22.3, 56.6, 22.3);
        e.bezierCurveTo(59, 22.3, 61.1, 21.4, 62.8, 19.7);
        e.closePath();
        e.moveTo(77.5, 26.2);
        e.lineTo(75.1, 26.2);
        e.lineTo(72.7, 26.2);
        e.lineTo(72.7, .5);
        e.lineTo(76, .5);
        e.lineTo(79.3, .5);
        e.lineTo(86.2, 20.1);
        e.lineTo(86.2, 20.1);
        e.lineTo(93, .5);
        e.lineTo(96.3, .5);
        e.lineTo(99.6, .5);
        e.lineTo(99.6, 26.2);
        e.lineTo(97.2, 26.2);
        e.lineTo(94.9, 26.2);
        e.lineTo(94.9, 6.7);
        e.lineTo(94.9, 6.7);
        e.lineTo(88.1, 26.2);
        e.lineTo(86.2, 26.2);
        e.lineTo(84.3, 26.2);
        e.lineTo(77.4, 6.8);
        e.lineTo(77.5, 6.8);
        e.lineTo(77.5, 26.2);
        e.closePath();
        e.moveTo(103.2, 26.2);
        e.lineTo(103.2, .5);
        e.lineTo(117.1, .5);
        e.lineTo(117.1, 2.7);
        e.lineTo(117.1, 4.9);
        e.lineTo(108, 4.9);
        e.lineTo(108, 11.3);
        e.lineTo(116.6, 11.3);
        e.lineTo(116.6, 13.5);
        e.lineTo(116.6, 15.7);
        e.lineTo(108, 15.7);
        e.lineTo(108, 21.8);
        e.lineTo(117.1, 21.8);
        e.lineTo(117.1, 24);
        e.lineTo(117.1, 26.2);
        e.lineTo(103.2, 26.2);
        e.closePath();
        e.moveTo(130, .5);
        e.lineTo(132.3, .5);
        e.lineTo(136.4, .5);
        e.bezierCurveTo(139.1, .5, 141.2, 1.1, 142.8, 2.3);
        e.bezierCurveTo(144.4, 3.5, 145.2, 5.2, 145.2, 7.2);
        e.bezierCurveTo(145.2, 9.1, 144.4, 10.7, 142.8, 11.9);
        e.lineTo(142.3, 12.2);
        e.bezierCurveTo(142.9, 12.5, 143.5, 12.8, 144, 13.2);
        e.bezierCurveTo(145.8, 14.5, 146.7, 16.2, 146.7, 18.4);
        e.bezierCurveTo(146.7, 20.8, 145.8, 22.7, 144.1, 24.1);
        e.bezierCurveTo(142.4, 25.5, 140.1, 26.2, 137.2, 26.2);
        e.lineTo(132.3, 26.2);
        e.lineTo(130, 26.2);
        e.lineTo(130, .5);
        e.closePath();
        e.moveTo(134.7, 10.5);
        e.lineTo(136.4, 10.5);
        e.bezierCurveTo(137.8, 10.5, 138.8, 10.3, 139.4, 9.8);
        e.bezierCurveTo(140.1, 9.4, 140.4, 8.7, 140.4, 7.7);
        e.bezierCurveTo(140.4, 6.8, 140.1, 6.1, 139.4, 5.6);
        e.bezierCurveTo(138.8, 5.2, 137.8, 4.9, 136.4, 4.9);
        e.lineTo(134.7, 4.9);
        e.lineTo(134.7, 10.5);
        e.closePath();
        e.moveTo(134.7, 21.8);
        e.lineTo(137.2, 21.8);
        e.bezierCurveTo(138.8, 21.8, 140, 21.5, 140.8, 20.9);
        e.bezierCurveTo(141.5, 20.4, 141.9, 19.5, 141.9, 18.4);
        e.bezierCurveTo(141.9, 17.2, 141.5, 16.4, 140.7, 15.8);
        e.bezierCurveTo(139.8, 15.2, 138.6, 15, 136.9, 15);
        e.lineTo(134.7, 15);
        e.lineTo(134.7, 21.8);
        e.closePath();
        e.moveTo(158, .5);
        e.lineTo(159.9, .5);
        e.lineTo(161.7, .5);
        e.lineTo(172.5, 26.2);
        e.lineTo(169.9, 26.2);
        e.lineTo(167.3, 26.2);
        e.lineTo(164.7, 19.6);
        e.lineTo(155, 19.6);
        e.lineTo(152.5, 26.2);
        e.lineTo(149.9, 26.2);
        e.lineTo(147.2, 26.2);
        e.lineTo(158, .5);
        e.closePath();
        e.moveTo(156.7, 15.2);
        e.lineTo(163, 15.2);
        e.lineTo(159.8, 6.9);
        e.lineTo(159.8, 6.9);
        e.lineTo(156.7, 15.2);
        e.closePath();
        e.moveTo(198.6, 19);
        e.bezierCurveTo(197.6, 21.4, 196, 23.2, 193.8, 24.6);
        e.bezierCurveTo(191.6, 26, 189.2, 26.7, 186.5, 26.7);
        e.bezierCurveTo(182.8, 26.7, 179.7, 25.4, 177.1, 22.8);
        e.bezierCurveTo(174.5, 20.2, 173.2, 17.1, 173.2, 13.4);
        e.bezierCurveTo(173.2, 9.7, 174.5, 6.5, 177.1, 3.9);
        e.bezierCurveTo(179.7, 1.3, 182.8, 0, 186.5, 0);
        e.bezierCurveTo(189.2, 0, 191.7, .7, 193.9, 2.1);
        e.bezierCurveTo(196.1, 3.6, 197.7, 5.5, 198.7, 7.8);
        e.lineTo(193.3, 7.8);
        e.bezierCurveTo(192.5, 6.8, 191.4, 6, 190.2, 5.4);
        e.bezierCurveTo(188.9, 4.7, 187.7, 4.4, 186.4, 4.4);
        e.bezierCurveTo(184.1, 4.4, 182.1, 5.3, 180.5, 7);
        e.bezierCurveTo(178.8, 8.7, 178, 10.8, 178, 13.2);
        e.bezierCurveTo(178, 15.7, 178.9, 17.9, 180.5, 19.7);
        e.bezierCurveTo(182.2, 21.4, 184.3, 22.3, 186.7, 22.3);
        e.bezierCurveTo(187.9, 22.3, 189.1, 22, 190.2, 21.4);
        e.bezierCurveTo(191.4, 20.8, 192.4, 20, 193.2, 19);
        e.lineTo(198.6, 19);
        e.closePath();
        e.moveTo(206.3, 26.2);
        e.lineTo(204, 26.2);
        e.lineTo(201.6, 26.2);
        e.lineTo(201.6, .5);
        e.lineTo(204, .5);
        e.lineTo(206.3, .5);
        e.lineTo(206.3, 11.9);
        e.lineTo(214.5, .5);
        e.lineTo(217.3, .5);
        e.lineTo(220, .5);
        e.lineTo(210.3, 13.2);
        e.lineTo(220, 26.2);
        e.lineTo(217.3, 26.2);
        e.lineTo(214.5, 26.2);
        e.lineTo(206.3, 14.9);
        e.lineTo(206.3, 14.9);
        e.lineTo(206.3, 26.2);
        e.closePath();
        this.graphics = e
    };
    a.ComeBack = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.PURPLE.red;
        var b = StyleManager.PURPLE.green;
        var c = StyleManager.PURPLE.blue;
        var d = StyleManager.PURPLE.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(12.6, 33.1);
        e.bezierCurveTo(9.1, 33.1, 6.2, 31.9, 3.7, 29.4);
        e.bezierCurveTo(1.2, 26.9, 0, 24, 0, 20.5);
        e.bezierCurveTo(0, 18.3, .5, 16.2, 1.6, 14.3);
        e.bezierCurveTo(2.7, 12.5, 4.1, 11, 5.9, 9.8);
        e.bezierCurveTo(5.7, 9.4, 5.6, 9, 5.5, 8.6);
        e.bezierCurveTo(5.4, 8.1, 5.4, 7.7, 5.4, 7.2);
        e.bezierCurveTo(5.4, 5.3, 6.1, 3.6, 7.5, 2.2);
        e.bezierCurveTo(8.9, .8, 10.6, 0, 12.6, 0);
        e.lineTo(16.2, 0);
        e.lineTo(16.2, 6.6);
        e.lineTo(12.6, 6.6);
        e.bezierCurveTo(12.4, 6.6, 12.2, 6.6, 12.1, 6.8);
        e.bezierCurveTo(12, 6.9, 11.9, 7.1, 11.9, 7.3);
        e.bezierCurveTo(11.9, 7.3, 11.9, 7.4, 11.9, 7.4);
        e.bezierCurveTo(11.9, 7.5, 12, 7.7, 12.1, 7.8);
        e.bezierCurveTo(12.2, 7.9, 12.4, 8, 12.6, 8);
        e.lineTo(16.2, 8);
        e.lineTo(16.2, 14.5);
        e.lineTo(11.9, 14.5);
        e.bezierCurveTo(10.4, 14.7, 9.1, 15.3, 8, 16.5);
        e.bezierCurveTo(7, 17.6, 6.5, 19, 6.5, 20.5);
        e.bezierCurveTo(6.5, 22.2, 7.1, 23.6, 8.3, 24.8);
        e.bezierCurveTo(9.5, 26, 11, 26.6, 12.6, 26.6);
        e.lineTo(16.2, 26.6);
        e.lineTo(16.2, 33.1);
        e.lineTo(12.6, 33.1);
        e.closePath();
        e.moveTo(37.7, 0);
        e.lineTo(44.2, 0);
        e.lineTo(44.2, 15.3);
        e.bezierCurveTo(44.2, 20.2, 42.5, 24.4, 39, 27.9);
        e.bezierCurveTo(35.5, 31.4, 31.3, 33.1, 26.4, 33.1);
        e.lineTo(22.7, 33.1);
        e.lineTo(22.7, 0);
        e.lineTo(29.2, 0);
        e.lineTo(29.2, 26.3);
        e.bezierCurveTo(31.7, 25.6, 33.8, 24.3, 35.4, 22.2);
        e.bezierCurveTo(37, 20.2, 37.7, 17.9, 37.7, 15.3);
        e.lineTo(37.7, 0);
        e.closePath();
        e.moveTo(62.3, 33.1);
        e.bezierCurveTo(58.8, 33.1, 55.8, 31.9, 53.4, 29.4);
        e.bezierCurveTo(50.9, 26.9, 49.7, 24, 49.7, 20.5);
        e.bezierCurveTo(49.7, 18.3, 50.2, 16.2, 51.3, 14.3);
        e.bezierCurveTo(52.4, 12.5, 53.8, 11, 55.6, 9.8);
        e.bezierCurveTo(55.4, 9.4, 55.3, 9, 55.2, 8.6);
        e.bezierCurveTo(55.1, 8.1, 55.1, 7.7, 55.1, 7.2);
        e.bezierCurveTo(55.1, 5.3, 55.8, 3.6, 57.2, 2.2);
        e.bezierCurveTo(58.6, .8, 60.3, 0, 62.3, 0);
        e.lineTo(65.9, 0);
        e.lineTo(65.9, 6.6);
        e.lineTo(62.3, 6.6);
        e.bezierCurveTo(62.1, 6.6, 61.9, 6.6, 61.8, 6.8);
        e.bezierCurveTo(61.7, 6.9, 61.6, 7.1, 61.6, 7.3);
        e.bezierCurveTo(61.6, 7.3, 61.6, 7.4, 61.6, 7.4);
        e.bezierCurveTo(61.6, 7.5, 61.7, 7.7, 61.8, 7.8);
        e.bezierCurveTo(61.9, 7.9, 62.1, 8, 62.3, 8);
        e.lineTo(65.9, 8);
        e.lineTo(65.9, 14.5);
        e.lineTo(61.5, 14.5);
        e.bezierCurveTo(60.1, 14.7, 58.8, 15.3, 57.7, 16.5);
        e.bezierCurveTo(56.7, 17.6, 56.2, 19, 56.2, 20.5);
        e.bezierCurveTo(56.2, 22.2, 56.8, 23.6, 58, 24.8);
        e.bezierCurveTo(59.2, 26, 60.6, 26.6, 62.3, 26.6);
        e.lineTo(65.9, 26.6);
        e.lineTo(65.9, 33.1);
        e.lineTo(62.3, 33.1);
        e.closePath();
        e.moveTo(95.6, 33.1);
        e.lineTo(87.3, 33.1);
        e.lineTo(84.7, 29.8);
        e.bezierCurveTo(84.3, 30.1, 83.9, 30.3, 83.5, 30.6);
        e.bezierCurveTo(83, 30.8, 82.6, 31, 82.1, 31.2);
        e.lineTo(79.6, 25.3);
        e.bezierCurveTo(81.5, 24.4, 83, 23.2, 84, 21.5);
        e.bezierCurveTo(85, 19.8, 85.5, 18.1, 85.5, 16.3);
        e.bezierCurveTo(85.5, 14.3, 84.9, 12.5, 83.8, 10.8);
        e.bezierCurveTo(82.7, 9.1, 81.1, 7.8, 79, 7.1);
        e.lineTo(79, 33.1);
        e.lineTo(72.4, 33.1);
        e.lineTo(72.4, 0);
        e.lineTo(75.7, 0);
        e.bezierCurveTo(80.7, 0, 84.6, 1.7, 87.6, 5.1);
        e.bezierCurveTo(90.5, 8.4, 92, 12.2, 92, 16.4);
        e.bezierCurveTo(92, 16.7, 92, 17, 92, 17.3);
        e.bezierCurveTo(92, 17.6, 91.9, 17.9, 91.9, 18.2);
        e.bezierCurveTo(91.8, 19.4, 91.5, 20.6, 91, 21.8);
        e.bezierCurveTo(90.6, 23, 90, 24.1, 89.3, 25.2);
        e.lineTo(95.6, 33.1);
        e.closePath();
        e.moveTo(109.3, 22.7);
        e.lineTo(109.3, 33.1);
        e.lineTo(102.8, 33.1);
        e.lineTo(102.8, 22.7);
        e.lineTo(94, 0);
        e.lineTo(100.9, 0);
        e.lineTo(106.1, 13.2);
        e.lineTo(111.2, 0);
        e.lineTo(118.2, 0);
        e.lineTo(109.3, 22.7);
        e.closePath();
        e.moveTo(154, 22.7);
        e.lineTo(154, 33.1);
        e.lineTo(147.5, 33.1);
        e.lineTo(147.5, 22.7);
        e.lineTo(138.6, 0);
        e.lineTo(145.6, 0);
        e.lineTo(150.8, 13.2);
        e.lineTo(155.9, 0);
        e.lineTo(162.9, 0);
        e.lineTo(154, 22.7);
        e.closePath();
        e.moveTo(175.6, 33.1);
        e.bezierCurveTo(172.1, 33.1, 169.1, 31.9, 166.7, 29.4);
        e.bezierCurveTo(164.2, 26.9, 163, 24, 163, 20.5);
        e.bezierCurveTo(163, 18.3, 163.5, 16.2, 164.6, 14.3);
        e.bezierCurveTo(165.7, 12.5, 167.1, 11, 168.9, 9.8);
        e.bezierCurveTo(168.7, 9.4, 168.6, 9, 168.5, 8.6);
        e.bezierCurveTo(168.4, 8.1, 168.4, 7.7, 168.4, 7.2);
        e.bezierCurveTo(168.4, 5.3, 169.1, 3.6, 170.5, 2.2);
        e.bezierCurveTo(171.9, .8, 173.6, 0, 175.6, 0);
        e.lineTo(179.2, 0);
        e.lineTo(179.2, 6.6);
        e.lineTo(175.6, 6.6);
        e.bezierCurveTo(175.4, 6.6, 175.2, 6.6, 175.1, 6.8);
        e.bezierCurveTo(174.9, 6.9, 174.9, 7.1, 174.9, 7.3);
        e.bezierCurveTo(174.9, 7.3, 174.9, 7.4, 174.9, 7.4);
        e.bezierCurveTo(174.9, 7.5, 175, 7.7, 175.1, 7.8);
        e.bezierCurveTo(175.2, 7.9, 175.4, 8, 175.6, 8);
        e.lineTo(179.2, 8);
        e.lineTo(179.2, 14.5);
        e.lineTo(174.8, 14.5);
        e.bezierCurveTo(173.3, 14.7, 172.1, 15.3, 171, 16.5);
        e.bezierCurveTo(170, 17.6, 169.5, 19, 169.5, 20.5);
        e.bezierCurveTo(169.5, 22.2, 170.1, 23.6, 171.3, 24.8);
        e.bezierCurveTo(172.5, 26, 173.9, 26.6, 175.6, 26.6);
        e.lineTo(179.2, 26.6);
        e.lineTo(179.2, 33.1);
        e.lineTo(175.6, 33.1);
        e.closePath();
        e.moveTo(201.6, 33.1);
        e.lineTo(201.6, 27.2);
        e.lineTo(192.2, 27.2);
        e.lineTo(192.2, 33.1);
        e.lineTo(185.7, 33.1);
        e.lineTo(185.7, 18.2);
        e.bezierCurveTo(185.7, 13.2, 187.5, 8.9, 191.1, 5.4);
        e.bezierCurveTo(194.6, 1.8, 198.9, 0, 203.9, 0);
        e.lineTo(208.1, .4);
        e.lineTo(208.1, 3.3);
        e.lineTo(208.1, 33.1);
        e.lineTo(201.6, 33.1);
        e.closePath();
        e.moveTo(201.6, 6.8);
        e.bezierCurveTo(198.9, 7.3, 196.7, 8.6, 194.9, 10.8);
        e.bezierCurveTo(193.1, 12.9, 192.2, 15.4, 192.2, 18.2);
        e.lineTo(192.2, 20.7);
        e.lineTo(201.6, 20.7);
        e.lineTo(201.6, 6.8);
        e.closePath();
        e.moveTo(237.6, 33.1);
        e.lineTo(229.3, 33.1);
        e.lineTo(226.7, 29.8);
        e.bezierCurveTo(226.3, 30.1, 225.9, 30.3, 225.5, 30.6);
        e.bezierCurveTo(225, 30.8, 224.6, 31, 224.1, 31.2);
        e.lineTo(221.6, 25.3);
        e.bezierCurveTo(223.5, 24.4, 225, 23.2, 226, 21.5);
        e.bezierCurveTo(227, 19.8, 227.5, 18.1, 227.5, 16.3);
        e.bezierCurveTo(227.5, 14.3, 226.9, 12.5, 225.9, 10.8);
        e.bezierCurveTo(224.8, 9.1, 223.1, 7.8, 221, 7.1);
        e.lineTo(221, 33.1);
        e.lineTo(214.5, 33.1);
        e.lineTo(214.5, 0);
        e.lineTo(217.7, 0);
        e.bezierCurveTo(222.7, 0, 226.6, 1.7, 229.6, 5.1);
        e.bezierCurveTo(232.5, 8.4, 234, 12.2, 234, 16.4);
        e.bezierCurveTo(234, 16.7, 234, 17, 234, 17.3);
        e.bezierCurveTo(234, 17.6, 234, 17.9, 233.9, 18.2);
        e.bezierCurveTo(233.8, 19.4, 233.5, 20.6, 233.1, 21.8);
        e.bezierCurveTo(232.6, 23, 232.1, 24.1, 231.3, 25.2);
        e.lineTo(237.6, 33.1);
        e.closePath();
        e.moveTo(244.5, 37.2);
        e.lineTo(242.4, 35.6);
        e.lineTo(244, 33.3);
        e.bezierCurveTo(243.5, 32.9, 243.1, 32.5, 242.8, 32);
        e.bezierCurveTo(242.5, 31.5, 242.4, 30.9, 242.4, 30.3);
        e.bezierCurveTo(242.4, 29.9, 242.5, 29.5, 242.6, 29.2);
        e.bezierCurveTo(242.8, 28.8, 242.9, 28.4, 243.2, 28.1);
        e.bezierCurveTo(243.5, 27.7, 243.9, 27.4, 244.3, 27.2);
        e.bezierCurveTo(244.7, 27, 245.2, 26.9, 245.6, 26.9);
        e.bezierCurveTo(245.7, 26.9, 245.7, 26.9, 245.8, 26.9);
        e.bezierCurveTo(245.8, 26.9, 245.9, 26.9, 246, 26.9);
        e.bezierCurveTo(246.4, 26.9, 246.7, 26.9, 247.1, 27);
        e.bezierCurveTo(247.5, 27.2, 247.9, 27.4, 248.2, 27.6);
        e.bezierCurveTo(248.4, 27.8, 248.5, 27.9, 248.7, 28.1);
        e.bezierCurveTo(248.8, 28.2, 248.9, 28.3, 249, 28.5);
        e.bezierCurveTo(249.2, 28.8, 249.4, 29.1, 249.4, 29.4);
        e.bezierCurveTo(249.5, 29.7, 249.6, 30, 249.6, 30.2);
        e.bezierCurveTo(249.6, 30.6, 249.5, 31, 249.4, 31.3);
        e.bezierCurveTo(249.3, 31.7, 249.1, 32, 249, 32.2);
        e.bezierCurveTo(248.9, 32.4, 248.8, 32.5, 248.7, 32.6);
        e.bezierCurveTo(248.6, 32.8, 248.5, 32.9, 248.5, 32.9);
        e.lineTo(244.5, 37.2);
        e.closePath();
        this.graphics = e
    };
    a.EveryYear = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.LIGHT_AQUA.red;
        var b = StyleManager.LIGHT_AQUA.green;
        var c = StyleManager.LIGHT_AQUA.blue;
        var d = StyleManager.LIGHT_AQUA.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(4.9, 21.9);
        e.lineTo(2.9, 21.9);
        e.lineTo(.9, 21.9);
        e.lineTo(.9, .4);
        e.lineTo(3.7, .4);
        e.lineTo(6.5, .4);
        e.lineTo(12.2, 16.7);
        e.lineTo(12.2, 16.7);
        e.lineTo(17.8, .4);
        e.lineTo(20.6, .4);
        e.lineTo(23.4, .4);
        e.lineTo(23.4, 21.9);
        e.lineTo(21.4, 21.9);
        e.lineTo(19.4, 21.9);
        e.lineTo(19.4, 5.6);
        e.lineTo(19.4, 5.6);
        e.lineTo(13.7, 21.9);
        e.lineTo(12.2, 21.9);
        e.lineTo(10.6, 21.9);
        e.lineTo(4.9, 5.6);
        e.lineTo(4.9, 5.6);
        e.lineTo(4.9, 21.9);
        e.closePath();
        e.moveTo(31.6, 13.9);
        e.lineTo(24.6, .4);
        e.lineTo(26.7, .4);
        e.lineTo(28.9, .4);
        e.lineTo(33.6, 10.4);
        e.lineTo(33.6, 10.4);
        e.lineTo(38.3, .4);
        e.lineTo(40.5, .4);
        e.lineTo(42.6, .4);
        e.lineTo(35.6, 13.9);
        e.lineTo(35.6, 21.9);
        e.lineTo(33.6, 21.9);
        e.lineTo(31.6, 21.9);
        e.lineTo(31.6, 13.9);
        e.closePath();
        e.moveTo(51.6, .4);
        e.lineTo(53.6, .4);
        e.lineTo(55.6, .4);
        e.lineTo(55.6, 9.2);
        e.lineTo(63.3, 9.2);
        e.lineTo(63.3, .4);
        e.lineTo(65.3, .4);
        e.lineTo(67.3, .4);
        e.lineTo(67.3, 21.9);
        e.lineTo(65.3, 21.9);
        e.lineTo(63.3, 21.9);
        e.lineTo(63.3, 12.9);
        e.lineTo(55.6, 12.9);
        e.lineTo(55.6, 21.9);
        e.lineTo(53.6, 21.9);
        e.lineTo(51.6, 21.9);
        e.lineTo(51.6, .4);
        e.closePath();
        e.moveTo(70.5, 21.9);
        e.lineTo(70.5, .4);
        e.lineTo(82, .4);
        e.lineTo(82, 2.3);
        e.lineTo(82, 4.1);
        e.lineTo(74.4, 4.1);
        e.lineTo(74.4, 9.4);
        e.lineTo(81.7, 9.4);
        e.lineTo(81.7, 11.2);
        e.lineTo(81.7, 13.1);
        e.lineTo(74.4, 13.1);
        e.lineTo(74.4, 18.2);
        e.lineTo(82, 18.2);
        e.lineTo(82, 20);
        e.lineTo(82, 21.9);
        e.lineTo(70.5, 21.9);
        e.closePath();
        e.moveTo(92.4, .4);
        e.lineTo(93.9, .4);
        e.lineTo(95.5, .4);
        e.lineTo(104.4, 21.9);
        e.lineTo(102.3, 21.9);
        e.lineTo(100.1, 21.9);
        e.lineTo(98, 16.3);
        e.lineTo(89.9, 16.3);
        e.lineTo(87.8, 21.9);
        e.lineTo(85.6, 21.9);
        e.lineTo(83.4, 21.9);
        e.lineTo(92.4, .4);
        e.closePath();
        e.moveTo(91.3, 12.6);
        e.lineTo(96.5, 12.6);
        e.lineTo(93.9, 5.8);
        e.lineTo(93.9, 5.8);
        e.lineTo(91.3, 12.6);
        e.closePath();
        e.moveTo(105.9, .4);
        e.lineTo(107.9, .4);
        e.lineTo(110.8, .4);
        e.bezierCurveTo(114.6, .4, 117.7, 1.4, 119.9, 3.2);
        e.bezierCurveTo(122, 5.1, 123.1, 7.7, 123.1, 10.9);
        e.bezierCurveTo(123.1, 14.3, 122.1, 17, 120, 19);
        e.bezierCurveTo(117.9, 20.9, 115, 21.9, 111.3, 21.9);
        e.lineTo(107.9, 21.9);
        e.lineTo(105.9, 21.9);
        e.lineTo(105.9, .4);
        e.closePath();
        e.moveTo(109.9, 18.2);
        e.lineTo(111.3, 18.2);
        e.bezierCurveTo(113.8, 18.2, 115.7, 17.6, 117.1, 16.3);
        e.bezierCurveTo(118.5, 15.1, 119.2, 13.4, 119.2, 11.2);
        e.bezierCurveTo(119.2, 8.9, 118.4, 7.2, 117, 6);
        e.bezierCurveTo(115.5, 4.7, 113.5, 4.1, 110.8, 4.1);
        e.lineTo(109.9, 4.1);
        e.lineTo(109.9, 18.2);
        e.closePath();
        e.moveTo(133.4, .4);
        e.lineTo(135.4, .4);
        e.lineTo(137.4, .4);
        e.lineTo(137.4, 21.9);
        e.lineTo(135.4, 21.9);
        e.lineTo(133.4, 21.9);
        e.lineTo(133.4, .4);
        e.closePath();
        e.moveTo(148.6, 6.1);
        e.bezierCurveTo(148.5, 5.3, 148.3, 4.7, 147.9, 4.3);
        e.bezierCurveTo(147.5, 3.9, 146.9, 3.7, 146.2, 3.7);
        e.bezierCurveTo(145.6, 3.7, 145, 3.9, 144.6, 4.3);
        e.bezierCurveTo(144.2, 4.7, 144, 5.3, 144, 5.9);
        e.bezierCurveTo(144, 6.6, 144.2, 7.1, 144.6, 7.5);
        e.bezierCurveTo(145, 7.9, 145.9, 8.3, 147.1, 8.7);
        e.bezierCurveTo(149.3, 9.4, 150.8, 10.3, 151.8, 11.4);
        e.bezierCurveTo(152.7, 12.4, 153.2, 13.7, 153.2, 15.4);
        e.bezierCurveTo(153.2, 17.4, 152.5, 19.1, 151.2, 20.4);
        e.bezierCurveTo(149.9, 21.7, 148.3, 22.3, 146.2, 22.3);
        e.bezierCurveTo(144.3, 22.3, 142.7, 21.7, 141.4, 20.5);
        e.bezierCurveTo(140.1, 19.3, 139.4, 17.7, 139.2, 15.8);
        e.lineTo(143.4, 15.8);
        e.bezierCurveTo(143.5, 16.7, 143.8, 17.4, 144.3, 17.9);
        e.bezierCurveTo(144.8, 18.4, 145.5, 18.6, 146.3, 18.6);
        e.bezierCurveTo(147.2, 18.6, 147.9, 18.4, 148.4, 17.9);
        e.bezierCurveTo(149, 17.4, 149.3, 16.7, 149.3, 15.9);
        e.bezierCurveTo(149.3, 15, 149, 14.4, 148.5, 13.9);
        e.bezierCurveTo(147.9, 13.4, 146.9, 12.9, 145.3, 12.4);
        e.bezierCurveTo(143.4, 11.7, 142.1, 10.9, 141.3, 10);
        e.bezierCurveTo(140.5, 9, 140.1, 7.8, 140.1, 6.2);
        e.bezierCurveTo(140.1, 4.4, 140.7, 2.9, 141.8, 1.7);
        e.bezierCurveTo(143, .6, 144.5, 0, 146.4, 0);
        e.bezierCurveTo(148.1, 0, 149.6, .6, 150.8, 1.7);
        e.bezierCurveTo(152, 2.9, 152.6, 4.4, 152.7, 6.1);
        e.lineTo(148.6, 6.1);
        e.closePath();
        this.graphics = e
    };
    a.Head = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.LIGHT_AQUA.red;
        var b = StyleManager.LIGHT_AQUA.green;
        var c = StyleManager.LIGHT_AQUA.blue;
        var d = StyleManager.LIGHT_AQUA.alpha;
        var e = StyleManager.PURPLE.red;
        var f = StyleManager.PURPLE.green;
        var g = StyleManager.PURPLE.blue;
        var h = StyleManager.PURPLE.alpha;
        var i = new Graphics;
        i.beginFill(Graphics.getRGB(a, b, c, d));
        i.moveTo(0, 1.6);
        i.lineTo(2.8, 1.6);
        i.lineTo(5.7, 1.6);
        i.lineTo(5.7, 32.3);
        i.lineTo(2.8, 32.3);
        i.lineTo(0, 32.3);
        i.lineTo(0, 1.6);
        i.closePath();
        i.moveTo(17.2, 32.3);
        i.lineTo(14.4, 32.3);
        i.lineTo(11.5, 32.3);
        i.lineTo(11.5, 1.6);
        i.lineTo(14.8, 1.6);
        i.lineTo(18.1, 1.6);
        i.lineTo(30.9, 24);
        i.lineTo(30.9, 1.6);
        i.lineTo(33.7, 1.6);
        i.lineTo(36.5, 1.6);
        i.lineTo(36.5, 32.3);
        i.lineTo(33.4, 32.3);
        i.lineTo(30.3, 32.3);
        i.lineTo(17.2, 9.6);
        i.lineTo(17.2, 32.3);
        i.closePath();
        i.beginFill(Graphics.getRGB(e, f, g, h));
        i.moveTo(76.9, 32.3);
        i.lineTo(76.9, 17.8);
        i.bezierCurveTo(76.9, 15.4, 76.2, 13.2, 74.7, 11.2);
        i.bezierCurveTo(73.2, 9.3, 71.2, 8, 68.8, 7.4);
        i.lineTo(68.8, 32.3);
        i.lineTo(62.7, 32.3);
        i.lineTo(62.7, 9.9);
        i.bezierCurveTo(62.1, 9.3, 61.3, 8.8, 60.6, 8.4);
        i.bezierCurveTo(59.8, 8, 59, 7.6, 58.1, 7.4);
        i.lineTo(58.1, 32.3);
        i.lineTo(52, 32.3);
        i.lineTo(52, 1);
        i.bezierCurveTo(52.1, 1, 52.2, 1, 52.3, 1);
        i.bezierCurveTo(52.5, 1, 52.6, 1, 52.7, 1);
        i.bezierCurveTo(53.6, 1, 54.5, 1, 55.3, 1);
        i.bezierCurveTo(56.1, 1, 56.9, 1.1, 57.8, 1.2);
        i.bezierCurveTo(58.6, 1.3, 59.4, 1.4, 60.2, 1.6);
        i.bezierCurveTo(61, 1.8, 61.8, 2.1, 62.7, 2.5);
        i.lineTo(62.7, 1);
        i.lineTo(66.2, 1);
        i.bezierCurveTo(70.9, 1, 74.8, 2.6, 78.1, 5.9);
        i.bezierCurveTo(81.4, 9.2, 83.1, 13.2, 83.1, 17.8);
        i.lineTo(83.1, 32.3);
        i.lineTo(76.9, 32.3);
        i.closePath();
        i.moveTo(115, 28.1);
        i.bezierCurveTo(111.8, 31.4, 107.9, 33, 103.4, 33);
        i.bezierCurveTo(98.8, 33, 95, 31.4, 91.7, 28.1);
        i.bezierCurveTo(88.5, 24.9, 86.8, 21, 86.8, 16.5);
        i.bezierCurveTo(86.8, 12, 88.5, 8.1, 91.7, 4.8);
        i.bezierCurveTo(95, 1.6, 98.8, 0, 103.4, 0);
        i.bezierCurveTo(107.9, 0, 111.8, 1.6, 115, 4.8);
        i.bezierCurveTo(118.3, 8.1, 119.9, 12, 119.9, 16.5);
        i.bezierCurveTo(119.9, 21, 118.3, 24.9, 115, 28.1);
        i.closePath();
        i.moveTo(110.7, 9.2);
        i.bezierCurveTo(108.7, 7.2, 106.2, 6.1, 103.4, 6.1);
        i.bezierCurveTo(100.5, 6.1, 98.1, 7.2, 96.1, 9.2);
        i.bezierCurveTo(94, 11.2, 93, 13.7, 93, 16.5);
        i.bezierCurveTo(93, 19.4, 94, 21.8, 96.1, 23.8);
        i.bezierCurveTo(98.1, 25.8, 100.5, 26.8, 103.4, 26.8);
        i.bezierCurveTo(106.2, 26.8, 108.7, 25.8, 110.7, 23.8);
        i.bezierCurveTo(112.7, 21.8, 113.7, 19.4, 113.7, 16.5);
        i.bezierCurveTo(113.7, 13.7, 112.7, 11.2, 110.7, 9.2);
        i.closePath();
        i.moveTo(137.5, 32.3);
        i.lineTo(137.5, 17.8);
        i.bezierCurveTo(137.5, 15.4, 136.8, 13.2, 135.3, 11.2);
        i.bezierCurveTo(133.8, 9.3, 131.8, 8, 129.4, 7.4);
        i.lineTo(129.4, 32.3);
        i.lineTo(123.3, 32.3);
        i.lineTo(123.3, 1);
        i.bezierCurveTo(125.3, 1, 127.1, 1, 128.9, 1.2);
        i.bezierCurveTo(130.7, 1.3, 132.4, 1.8, 134.2, 2.6);
        i.bezierCurveTo(134.7, 2.9, 135.3, 3.2, 135.8, 3.6);
        i.bezierCurveTo(136.4, 3.9, 137, 4.3, 137.5, 4.8);
        i.lineTo(137.5, 1);
        i.lineTo(143.7, 1);
        i.lineTo(143.7, 32.3);
        i.lineTo(137.5, 32.3);
        i.closePath();
        i.moveTo(161.4, .9);
        i.lineTo(161.4, 7.1);
        i.lineTo(157.2, 7.1);
        i.lineTo(157.2, 32.3);
        i.lineTo(151, 32.3);
        i.lineTo(151, 7.1);
        i.lineTo(146.9, 7.1);
        i.lineTo(146.9, .9);
        i.lineTo(161.4, .9);
        i.closePath();
        i.moveTo(186.8, 32.3);
        i.lineTo(178.9, 32.3);
        i.lineTo(176.4, 29.2);
        i.bezierCurveTo(176.1, 29.4, 175.7, 29.7, 175.3, 29.9);
        i.bezierCurveTo(174.8, 30.1, 174.4, 30.3, 174, 30.5);
        i.lineTo(171.6, 24.9);
        i.bezierCurveTo(173.4, 24, 174.8, 22.9, 175.8, 21.3);
        i.bezierCurveTo(176.7, 19.7, 177.2, 18.1, 177.2, 16.3);
        i.bezierCurveTo(177.2, 14.5, 176.7, 12.8, 175.6, 11.1);
        i.bezierCurveTo(174.6, 9.5, 173, 8.3, 171, 7.6);
        i.lineTo(171, 32.3);
        i.lineTo(164.8, 32.3);
        i.lineTo(164.8, .9);
        i.lineTo(167.9, .9);
        i.bezierCurveTo(172.6, .9, 176.4, 2.5, 179.2, 5.7);
        i.bezierCurveTo(182, 8.9, 183.4, 12.5, 183.4, 16.4);
        i.bezierCurveTo(183.4, 16.7, 183.4, 17, 183.3, 17.3);
        i.bezierCurveTo(183.3, 17.6, 183.3, 17.9, 183.3, 18.2);
        i.bezierCurveTo(183.1, 19.3, 182.9, 20.4, 182.5, 21.6);
        i.bezierCurveTo(182, 22.7, 181.5, 23.8, 180.8, 24.8);
        i.lineTo(186.8, 32.3);
        i.closePath();
        i.moveTo(199.3, 32.3);
        i.bezierCurveTo(196, 32.3, 193.2, 31.1, 190.8, 28.8);
        i.bezierCurveTo(188.5, 26.5, 187.3, 23.6, 187.3, 20.4);
        i.bezierCurveTo(187.3, 18.2, 187.8, 16.3, 188.9, 14.5);
        i.bezierCurveTo(189.9, 12.7, 191.2, 11.3, 192.9, 10.2);
        i.bezierCurveTo(192.8, 9.8, 192.7, 9.4, 192.6, 9);
        i.bezierCurveTo(192.5, 8.6, 192.4, 8.2, 192.4, 7.8);
        i.bezierCurveTo(192.4, 5.9, 193.1, 4.3, 194.4, 3);
        i.bezierCurveTo(195.8, 1.6, 197.4, 1, 199.3, 1);
        i.lineTo(202.7, 1);
        i.lineTo(202.7, 7.1);
        i.lineTo(199.3, 7.1);
        i.bezierCurveTo(199.1, 7.1, 198.9, 7.2, 198.8, 7.3);
        i.bezierCurveTo(198.7, 7.5, 198.6, 7.7, 198.6, 7.8);
        i.bezierCurveTo(198.6, 7.9, 198.6, 7.9, 198.6, 7.9);
        i.bezierCurveTo(198.6, 8.1, 198.7, 8.2, 198.8, 8.3);
        i.bezierCurveTo(198.9, 8.4, 199.1, 8.5, 199.3, 8.5);
        i.lineTo(202.7, 8.5);
        i.lineTo(202.7, 14.7);
        i.lineTo(198.6, 14.7);
        i.bezierCurveTo(197.2, 14.8, 196, 15.5, 195, 16.5);
        i.bezierCurveTo(194, 17.6, 193.5, 18.9, 193.5, 20.4);
        i.bezierCurveTo(193.5, 21.9, 194, 23.3, 195.2, 24.4);
        i.bezierCurveTo(196.4, 25.6, 197.7, 26.1, 199.3, 26.1);
        i.lineTo(202.7, 26.1);
        i.lineTo(202.7, 32.3);
        i.lineTo(199.3, 32.3);
        i.closePath();
        i.moveTo(222.3, 32.3);
        i.lineTo(222.3, 26.7);
        i.lineTo(213.3, 26.7);
        i.lineTo(213.3, 32.3);
        i.lineTo(207.2, 32.3);
        i.lineTo(207.2, 18.2);
        i.bezierCurveTo(207.2, 13.4, 208.9, 9.4, 212.2, 6);
        i.bezierCurveTo(215.6, 2.6, 219.6, 1, 224.4, 1);
        i.lineTo(228.4, 1.3);
        i.lineTo(228.4, 4.1);
        i.lineTo(228.4, 32.3);
        i.lineTo(222.3, 32.3);
        i.closePath();
        i.moveTo(222.3, 7.3);
        i.bezierCurveTo(219.7, 7.8, 217.5, 9.1, 215.8, 11.1);
        i.bezierCurveTo(214.2, 13.2, 213.3, 15.5, 213.3, 18.2);
        i.lineTo(213.3, 20.5);
        i.lineTo(222.3, 20.5);
        i.lineTo(222.3, 7.3);
        i.closePath();
        i.moveTo(232.3, 32.3);
        i.lineTo(232.3, 1);
        i.lineTo(238.4, 1);
        i.lineTo(238.4, 26.1);
        i.lineTo(245.8, 26.1);
        i.lineTo(245.8, 32.3);
        i.lineTo(232.3, 32.3);
        i.closePath();
        i.beginFill(Graphics.getRGB(a, b, c, d));
        i.moveTo(251.6, 26.8);
        i.lineTo(257.2, 26.8);
        i.lineTo(257.2, 32.3);
        i.lineTo(251.6, 32.3);
        i.lineTo(251.6, 26.8);
        i.closePath();
        this.graphics = i
    };
    a.Montreal = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.GRAY.red;
        var b = StyleManager.GRAY.green;
        var c = StyleManager.GRAY.blue;
        var d = StyleManager.GRAY.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(29.8, 38.5);
        e.lineTo(29.8, 21.3);
        e.bezierCurveTo(29.8, 18.3, 28.9, 15.7, 27.1, 13.4);
        e.bezierCurveTo(25.3, 11.1, 23, 9.6, 20.1, 8.9);
        e.lineTo(20.1, 38.5);
        e.lineTo(12.8, 38.5);
        e.lineTo(12.8, 11.8);
        e.bezierCurveTo(12, 11.1, 11.2, 10.5, 10.3, 10);
        e.bezierCurveTo(9.3, 9.5, 8.4, 9.1, 7.4, 8.9);
        e.lineTo(7.4, 38.5);
        e.lineTo(0, 38.5);
        e.lineTo(0, 1.1);
        e.bezierCurveTo(.1, 1.1, .3, 1.1, .4, 1.1);
        e.bezierCurveTo(.6, 1.1, .7, 1.1, .9, 1.1);
        e.bezierCurveTo(1.9, 1.1, 3, 1.1, 3.9, 1.2);
        e.bezierCurveTo(4.9, 1.2, 5.9, 1.3, 6.9, 1.4);
        e.bezierCurveTo(7.9, 1.5, 8.8, 1.7, 9.8, 1.9);
        e.bezierCurveTo(10.8, 2.2, 11.8, 2.6, 12.8, 3);
        e.lineTo(12.8, 1.1);
        e.lineTo(17, 1.1);
        e.bezierCurveTo(22.6, 1.1, 27.3, 3.1, 31.2, 7);
        e.bezierCurveTo(35.2, 11, 37.2, 15.7, 37.2, 21.3);
        e.lineTo(37.2, 38.5);
        e.lineTo(29.8, 38.5);
        e.closePath();
        e.moveTo(74.3, 33.6);
        e.bezierCurveTo(70.4, 37.4, 65.8, 39.4, 60.3, 39.4);
        e.bezierCurveTo(54.9, 39.4, 50.3, 37.4, 46.4, 33.6);
        e.bezierCurveTo(42.5, 29.7, 40.6, 25.1, 40.6, 19.7);
        e.bezierCurveTo(40.6, 14.3, 42.5, 9.6, 46.4, 5.8);
        e.bezierCurveTo(50.3, 1.9, 54.9, 0, 60.3, 0);
        e.bezierCurveTo(65.8, 0, 70.4, 1.9, 74.3, 5.8);
        e.bezierCurveTo(78.1, 9.6, 80, 14.3, 80, 19.7);
        e.bezierCurveTo(80, 25.1, 78.1, 29.7, 74.3, 33.6);
        e.closePath();
        e.moveTo(69.1, 11);
        e.bezierCurveTo(66.6, 8.5, 63.7, 7.3, 60.3, 7.3);
        e.bezierCurveTo(56.9, 7.3, 54, 8.5, 51.6, 11);
        e.bezierCurveTo(49.2, 13.4, 48, 16.3, 48, 19.7);
        e.bezierCurveTo(48, 23.1, 49.2, 26, 51.6, 28.4);
        e.bezierCurveTo(54, 30.8, 56.9, 32, 60.3, 32);
        e.bezierCurveTo(63.7, 32, 66.6, 30.8, 69.1, 28.4);
        e.bezierCurveTo(71.5, 26, 72.7, 23.1, 72.7, 19.7);
        e.bezierCurveTo(72.7, 16.3, 71.5, 13.4, 69.1, 11);
        e.closePath();
        e.moveTo(109.7, 38.5);
        e.lineTo(100.3, 38.5);
        e.lineTo(97.4, 34.8);
        e.bezierCurveTo(96.9, 35.1, 96.5, 35.4, 96, 35.7);
        e.bezierCurveTo(95.5, 36, 95, 36.2, 94.4, 36.4);
        e.lineTo(91.5, 29.7);
        e.bezierCurveTo(93.8, 28.7, 95.5, 27.3, 96.6, 25.4);
        e.bezierCurveTo(97.7, 23.5, 98.3, 21.6, 98.3, 19.5);
        e.bezierCurveTo(98.3, 17.3, 97.6, 15.2, 96.4, 13.3);
        e.bezierCurveTo(95.2, 11.3, 93.3, 9.9, 90.9, 9.1);
        e.lineTo(90.9, 38.5);
        e.lineTo(83.5, 38.5);
        e.lineTo(83.5, 1.1);
        e.lineTo(87.2, 1.1);
        e.bezierCurveTo(92.8, 1.1, 97.3, 3, 100.6, 6.8);
        e.bezierCurveTo(104, 10.6, 105.6, 14.9, 105.6, 19.6);
        e.bezierCurveTo(105.6, 20, 105.6, 20.3, 105.6, 20.6);
        e.bezierCurveTo(105.6, 21, 105.6, 21.3, 105.5, 21.7);
        e.bezierCurveTo(105.4, 23.1, 105, 24.4, 104.6, 25.8);
        e.bezierCurveTo(104.1, 27.1, 103.4, 28.4, 102.6, 29.6);
        e.lineTo(109.7, 38.5);
        e.closePath();
        e.moveTo(123.6, 38.6);
        e.bezierCurveTo(119.7, 38.6, 116.3, 37.2, 113.5, 34.4);
        e.bezierCurveTo(110.7, 31.6, 109.4, 28.2, 109.4, 24.3);
        e.bezierCurveTo(109.4, 21.8, 110, 19.4, 111.2, 17.3);
        e.bezierCurveTo(112.4, 15.2, 114, 13.5, 116, 12.2);
        e.bezierCurveTo(115.8, 11.7, 115.7, 11.3, 115.6, 10.8);
        e.bezierCurveTo(115.5, 10.3, 115.4, 9.8, 115.4, 9.3);
        e.bezierCurveTo(115.4, 7.1, 116.2, 5.1, 117.8, 3.5);
        e.bezierCurveTo(119.4, 1.9, 121.4, 1.1, 123.6, 1.1);
        e.lineTo(127.7, 1.1);
        e.lineTo(127.7, 8.5);
        e.lineTo(123.6, 8.5);
        e.bezierCurveTo(123.4, 8.5, 123.2, 8.6, 123, 8.8);
        e.bezierCurveTo(122.9, 8.9, 122.8, 9.1, 122.8, 9.3);
        e.bezierCurveTo(122.8, 9.4, 122.8, 9.4, 122.8, 9.4);
        e.bezierCurveTo(122.9, 9.6, 122.9, 9.8, 123.1, 9.9);
        e.bezierCurveTo(123.2, 10, 123.4, 10.1, 123.6, 10.1);
        e.lineTo(127.7, 10.1);
        e.lineTo(127.7, 17.5);
        e.lineTo(122.8, 17.5);
        e.bezierCurveTo(121.1, 17.7, 119.6, 18.4, 118.5, 19.7);
        e.bezierCurveTo(117.3, 21, 116.7, 22.6, 116.7, 24.3);
        e.bezierCurveTo(116.7, 26.2, 117.4, 27.8, 118.7, 29.2);
        e.bezierCurveTo(120.1, 30.5, 121.8, 31.2, 123.6, 31.2);
        e.lineTo(127.7, 31.2);
        e.lineTo(127.7, 38.6);
        e.lineTo(123.6, 38.6);
        e.closePath();
        e.moveTo(179.7, 38.5);
        e.lineTo(179.7, 21.3);
        e.bezierCurveTo(179.7, 18.3, 178.8, 15.7, 177.1, 13.4);
        e.bezierCurveTo(175.3, 11.1, 172.9, 9.6, 170.1, 8.9);
        e.lineTo(170.1, 38.5);
        e.lineTo(162.8, 38.5);
        e.lineTo(162.8, 11.8);
        e.bezierCurveTo(162, 11.1, 161.2, 10.5, 160.2, 10);
        e.bezierCurveTo(159.3, 9.5, 158.3, 9.1, 157.3, 8.9);
        e.lineTo(157.3, 38.5);
        e.lineTo(150, 38.5);
        e.lineTo(150, 1.1);
        e.bezierCurveTo(150.1, 1.1, 150.2, 1.1, 150.4, 1.1);
        e.bezierCurveTo(150.6, 1.1, 150.7, 1.1, 150.8, 1.1);
        e.bezierCurveTo(151.9, 1.1, 152.9, 1.1, 153.9, 1.2);
        e.bezierCurveTo(154.9, 1.2, 155.9, 1.3, 156.9, 1.4);
        e.bezierCurveTo(157.8, 1.5, 158.8, 1.7, 159.8, 1.9);
        e.bezierCurveTo(160.7, 2.2, 161.7, 2.6, 162.8, 3);
        e.lineTo(162.8, 1.1);
        e.lineTo(167, 1.1);
        e.bezierCurveTo(172.5, 1.1, 177.3, 3.1, 181.2, 7);
        e.bezierCurveTo(185.1, 11, 187.1, 15.7, 187.1, 21.3);
        e.lineTo(187.1, 38.5);
        e.lineTo(179.7, 38.5);
        e.closePath();
        e.moveTo(224.2, 33.6);
        e.bezierCurveTo(220.4, 37.4, 215.7, 39.4, 210.3, 39.4);
        e.bezierCurveTo(204.9, 39.4, 200.3, 37.4, 196.4, 33.6);
        e.bezierCurveTo(192.5, 29.7, 190.6, 25.1, 190.6, 19.7);
        e.bezierCurveTo(190.6, 14.3, 192.5, 9.6, 196.4, 5.8);
        e.bezierCurveTo(200.3, 1.9, 204.9, 0, 210.3, 0);
        e.bezierCurveTo(215.7, 0, 220.4, 1.9, 224.2, 5.8);
        e.bezierCurveTo(228.1, 9.6, 230, 14.3, 230, 19.7);
        e.bezierCurveTo(230, 25.1, 228.1, 29.7, 224.2, 33.6);
        e.closePath();
        e.moveTo(219, 11);
        e.bezierCurveTo(216.6, 8.5, 213.7, 7.3, 210.3, 7.3);
        e.bezierCurveTo(206.9, 7.3, 204, 8.5, 201.6, 11);
        e.bezierCurveTo(199.2, 13.4, 198, 16.3, 198, 19.7);
        e.bezierCurveTo(198, 23.1, 199.2, 26, 201.6, 28.4);
        e.bezierCurveTo(204, 30.8, 206.9, 32, 210.3, 32);
        e.bezierCurveTo(213.7, 32, 216.6, 30.8, 219, 28.4);
        e.bezierCurveTo(221.5, 26, 222.7, 23.1, 222.7, 19.7);
        e.bezierCurveTo(222.7, 16.3, 221.5, 13.4, 219, 11);
        e.closePath();
        e.moveTo(247.7, 1.1);
        e.lineTo(247.7, 8.5);
        e.lineTo(242.8, 8.5);
        e.lineTo(242.8, 38.6);
        e.lineTo(235.4, 38.6);
        e.lineTo(235.4, 8.5);
        e.lineTo(230.5, 8.5);
        e.lineTo(230.5, 1.1);
        e.lineTo(247.7, 1.1);
        e.closePath();
        e.moveTo(250.8, 38.5);
        e.lineTo(250.8, 1.1);
        e.lineTo(258.2, 1.1);
        e.lineTo(258.2, 38.5);
        e.lineTo(250.8, 38.5);
        e.closePath();
        e.moveTo(278.9, 1.1);
        e.lineTo(286.2, 1.1);
        e.lineTo(286.2, 18.4);
        e.bezierCurveTo(286.2, 24, 284.2, 28.7, 280.3, 32.6);
        e.bezierCurveTo(276.4, 36.6, 271.6, 38.5, 266.1, 38.5);
        e.lineTo(261.8, 38.5);
        e.lineTo(261.8, 1.1);
        e.lineTo(269.2, 1.1);
        e.lineTo(269.2, 30.8);
        e.bezierCurveTo(272, 30.1, 274.4, 28.6, 276.2, 26.3);
        e.bezierCurveTo(278, 24, 278.9, 21.3, 278.9, 18.4);
        e.lineTo(278.9, 1.1);
        e.closePath();
        e.moveTo(307.7, 38.5);
        e.lineTo(307.7, 31.8);
        e.lineTo(297, 31.8);
        e.lineTo(297, 38.5);
        e.lineTo(289.7, 38.5);
        e.lineTo(289.7, 21.7);
        e.bezierCurveTo(289.7, 16, 291.7, 11.2, 295.7, 7.2);
        e.bezierCurveTo(299.7, 3.1, 304.6, 1.1, 310.2, 1.1);
        e.lineTo(315, 1.5);
        e.lineTo(315, 4.9);
        e.lineTo(315, 38.5);
        e.lineTo(307.7, 38.5);
        e.closePath();
        e.moveTo(307.7, 8.8);
        e.bezierCurveTo(304.6, 9.4, 302, 10.9, 300, 13.3);
        e.bezierCurveTo(298, 15.7, 297, 18.5, 297, 21.7);
        e.lineTo(297, 24.5);
        e.lineTo(307.7, 24.5);
        e.lineTo(307.7, 8.8);
        e.closePath();
        e.moveTo(335.9, 1.1);
        e.lineTo(335.9, 8.5);
        e.lineTo(330.9, 8.5);
        e.lineTo(330.9, 38.6);
        e.lineTo(323.6, 38.6);
        e.lineTo(323.6, 8.5);
        e.lineTo(318.7, 8.5);
        e.lineTo(318.7, 1.1);
        e.lineTo(335.9, 1.1);
        e.closePath();
        e.moveTo(349.3, 38.6);
        e.bezierCurveTo(345.4, 38.6, 342, 37.2, 339.2, 34.4);
        e.bezierCurveTo(336.4, 31.6, 335, 28.2, 335, 24.3);
        e.bezierCurveTo(335, 21.8, 335.6, 19.4, 336.9, 17.3);
        e.bezierCurveTo(338.1, 15.2, 339.7, 13.5, 341.7, 12.2);
        e.bezierCurveTo(341.5, 11.7, 341.4, 11.3, 341.3, 10.8);
        e.bezierCurveTo(341.2, 10.3, 341.1, 9.8, 341.1, 9.3);
        e.bezierCurveTo(341.1, 7.1, 341.9, 5.1, 343.5, 3.5);
        e.bezierCurveTo(345.1, 1.9, 347, 1.1, 349.3, 1.1);
        e.lineTo(353.4, 1.1);
        e.lineTo(353.4, 8.5);
        e.lineTo(349.3, 8.5);
        e.bezierCurveTo(349, 8.5, 348.8, 8.6, 348.7, 8.8);
        e.bezierCurveTo(348.6, 8.9, 348.5, 9.1, 348.5, 9.3);
        e.bezierCurveTo(348.5, 9.4, 348.5, 9.4, 348.5, 9.4);
        e.bezierCurveTo(348.5, 9.6, 348.6, 9.8, 348.7, 9.9);
        e.bezierCurveTo(348.9, 10, 349.1, 10.1, 349.3, 10.1);
        e.lineTo(353.4, 10.1);
        e.lineTo(353.4, 17.5);
        e.lineTo(348.4, 17.5);
        e.bezierCurveTo(346.8, 17.7, 345.3, 18.4, 344.1, 19.7);
        e.bezierCurveTo(342.9, 21, 342.3, 22.6, 342.3, 24.3);
        e.bezierCurveTo(342.3, 26.2, 343, 27.8, 344.4, 29.2);
        e.bezierCurveTo(345.8, 30.5, 347.4, 31.2, 349.3, 31.2);
        e.lineTo(353.4, 31.2);
        e.lineTo(353.4, 38.6);
        e.lineTo(349.3, 38.6);
        e.closePath();
        e.moveTo(374.4, 33.1);
        e.bezierCurveTo(370.8, 36.7, 366.3, 38.5, 361.2, 38.5);
        e.lineTo(357.5, 38.6);
        e.bezierCurveTo(357.5, 32.3, 357.5, 26.1, 357.5, 19.8);
        e.bezierCurveTo(357.5, 13.6, 357.5, 7.4, 357.5, 1.1);
        e.lineTo(361.2, 1.1);
        e.bezierCurveTo(366.3, 1.1, 370.8, 3, 374.4, 6.6);
        e.bezierCurveTo(378.1, 10.3, 379.9, 14.7, 379.9, 19.9);
        e.bezierCurveTo(379.9, 25, 378.1, 29.4, 374.4, 33.1);
        e.closePath();
        e.moveTo(370.4, 13.2);
        e.bezierCurveTo(368.9, 11.2, 367.1, 9.9, 364.8, 9.1);
        e.bezierCurveTo(364.8, 10.9, 364.8, 12.7, 364.8, 14.5);
        e.bezierCurveTo(364.8, 16.3, 364.8, 18.1, 364.8, 19.9);
        e.bezierCurveTo(364.8, 21.7, 364.8, 23.4, 364.8, 25.2);
        e.bezierCurveTo(364.8, 27, 364.8, 28.8, 364.8, 30.6);
        e.bezierCurveTo(367.2, 29.8, 369, 28.4, 370.4, 26.4);
        e.bezierCurveTo(371.8, 24.5, 372.5, 22.3, 372.5, 19.9);
        e.bezierCurveTo(372.5, 17.4, 371.8, 15.1, 370.4, 13.2);
        e.closePath();
        this.graphics = e
    };
    a.MoreMotivated = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.PURPLE.red;
        var b = StyleManager.PURPLE.green;
        var c = StyleManager.PURPLE.blue;
        var d = StyleManager.PURPLE.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(17, 34.5);
        e.lineTo(17, 20);
        e.bezierCurveTo(17, 17.5, 16.2, 15.3, 14.7, 13.4);
        e.bezierCurveTo(13.2, 11.4, 11.2, 10.1, 8.8, 9.5);
        e.lineTo(8.8, 34.5);
        e.lineTo(2.7, 34.5);
        e.lineTo(2.7, 3);
        e.bezierCurveTo(4.7, 3, 6.5, 3.1, 8.3, 3.2);
        e.bezierCurveTo(10.1, 3.4, 11.9, 3.9, 13.6, 4.7);
        e.bezierCurveTo(14.2, 5, 14.7, 5.3, 15.3, 5.7);
        e.bezierCurveTo(15.9, 6, 16.4, 6.4, 17, 6.9);
        e.lineTo(17, 3);
        e.lineTo(23.2, 3);
        e.lineTo(23.2, 34.5);
        e.lineTo(17, 34.5);
        e.closePath();
        e.moveTo(39.4, 34.6);
        e.bezierCurveTo(36.1, 34.6, 33.2, 33.4, 30.9, 31);
        e.bezierCurveTo(28.5, 28.7, 27.4, 25.8, 27.4, 22.5);
        e.bezierCurveTo(27.4, 20.4, 27.9, 18.4, 28.9, 16.6);
        e.bezierCurveTo(29.9, 14.9, 31.3, 13.4, 33, 12.4);
        e.bezierCurveTo(32.8, 11.9, 32.7, 11.5, 32.6, 11.1);
        e.bezierCurveTo(32.5, 10.7, 32.5, 10.3, 32.5, 9.9);
        e.bezierCurveTo(32.5, 8, 33.2, 6.4, 34.5, 5);
        e.bezierCurveTo(35.9, 3.7, 37.5, 3, 39.4, 3);
        e.lineTo(42.8, 3);
        e.lineTo(42.8, 9.2);
        e.lineTo(39.4, 9.2);
        e.bezierCurveTo(39.2, 9.2, 39, 9.3, 38.9, 9.4);
        e.bezierCurveTo(38.8, 9.6, 38.7, 9.7, 38.7, 9.9);
        e.bezierCurveTo(38.7, 9.9, 38.7, 10, 38.7, 10);
        e.bezierCurveTo(38.7, 10.2, 38.8, 10.3, 38.9, 10.4);
        e.bezierCurveTo(39, 10.5, 39.2, 10.6, 39.4, 10.6);
        e.lineTo(42.8, 10.6);
        e.lineTo(42.8, 16.8);
        e.lineTo(38.7, 16.8);
        e.bezierCurveTo(37.3, 17, 36, 17.6, 35, 18.7);
        e.bezierCurveTo(34, 19.8, 33.5, 21.1, 33.5, 22.5);
        e.bezierCurveTo(33.5, 24.1, 34.1, 25.5, 35.3, 26.6);
        e.bezierCurveTo(36.4, 27.8, 37.8, 28.4, 39.4, 28.4);
        e.lineTo(42.8, 28.4);
        e.lineTo(42.8, 34.6);
        e.lineTo(39.4, 34.6);
        e.closePath();
        e.moveTo(79.2, 17.5);
        e.bezierCurveTo(79.2, 22.2, 77.5, 26.2, 74.2, 29.5);
        e.bezierCurveTo(70.9, 32.9, 66.9, 34.5, 62.2, 34.5);
        e.lineTo(58.6, 34.5);
        e.lineTo(58.6, 32.9);
        e.bezierCurveTo(57.5, 33.4, 56.4, 33.8, 55.2, 34.1);
        e.bezierCurveTo(54, 34.4, 52.7, 34.5, 51.5, 34.5);
        e.lineTo(47.9, 34.5);
        e.lineTo(47.9, 31.4);
        e.lineTo(47.9, 3);
        e.lineTo(54.1, 3);
        e.lineTo(54.1, 28);
        e.bezierCurveTo(54.9, 27.7, 55.7, 27.4, 56.5, 27);
        e.bezierCurveTo(57.3, 26.6, 58, 26.1, 58.6, 25.5);
        e.lineTo(58.6, 3);
        e.lineTo(64.9, 3);
        e.lineTo(64.9, 28);
        e.bezierCurveTo(67.2, 27.4, 69.1, 26.1, 70.7, 24.2);
        e.bezierCurveTo(72.2, 22.3, 73, 20.1, 73, 17.5);
        e.lineTo(73, 3);
        e.lineTo(79.2, 3);
        e.lineTo(79.2, 17.5);
        e.closePath();
        e.moveTo(93.9, 34.5);
        e.lineTo(93.9, 3);
        e.lineTo(100.1, 3);
        e.lineTo(100.1, 34.5);
        e.lineTo(93.9, 34.5);
        e.closePath();
        e.moveTo(119.6, 29.9);
        e.bezierCurveTo(116.5, 33, 112.8, 34.5, 108.4, 34.5);
        e.lineTo(105.4, 34.6);
        e.bezierCurveTo(105.4, 29.3, 105.4, 24, 105.4, 18.8);
        e.bezierCurveTo(105.4, 13.5, 105.4, 8.3, 105.4, 3);
        e.lineTo(108.4, 3);
        e.bezierCurveTo(112.8, 3, 116.5, 4.5, 119.6, 7.6);
        e.bezierCurveTo(122.7, 10.7, 124.2, 14.4, 124.2, 18.8);
        e.bezierCurveTo(124.2, 23.1, 122.7, 26.9, 119.6, 29.9);
        e.closePath();
        e.moveTo(116.2, 13.2);
        e.bezierCurveTo(115, 11.5, 113.4, 10.4, 111.5, 9.7);
        e.bezierCurveTo(111.5, 11.3, 111.5, 12.8, 111.5, 14.3);
        e.bezierCurveTo(111.5, 15.8, 111.5, 17.3, 111.5, 18.8);
        e.bezierCurveTo(111.5, 20.3, 111.5, 21.8, 111.5, 23.3);
        e.bezierCurveTo(111.5, 24.8, 111.5, 26.3, 111.5, 27.8);
        e.bezierCurveTo(113.5, 27.2, 115, 26, 116.2, 24.3);
        e.bezierCurveTo(117.4, 22.7, 118, 20.8, 118, 18.8);
        e.bezierCurveTo(118, 16.7, 117.4, 14.8, 116.2, 13.2);
        e.closePath();
        e.moveTo(140.2, 34.6);
        e.bezierCurveTo(136.9, 34.6, 134, 33.4, 131.7, 31);
        e.bezierCurveTo(129.3, 28.7, 128.1, 25.8, 128.1, 22.5);
        e.bezierCurveTo(128.1, 20.4, 128.7, 18.4, 129.7, 16.6);
        e.bezierCurveTo(130.7, 14.9, 132.1, 13.4, 133.8, 12.4);
        e.bezierCurveTo(133.6, 11.9, 133.5, 11.5, 133.4, 11.1);
        e.bezierCurveTo(133.3, 10.7, 133.3, 10.3, 133.3, 9.9);
        e.bezierCurveTo(133.3, 8, 134, 6.4, 135.3, 5);
        e.bezierCurveTo(136.7, 3.7, 138.3, 3, 140.2, 3);
        e.lineTo(143.6, 3);
        e.lineTo(143.6, 9.2);
        e.lineTo(140.2, 9.2);
        e.bezierCurveTo(140, 9.2, 139.8, 9.3, 139.7, 9.4);
        e.bezierCurveTo(139.6, 9.6, 139.5, 9.7, 139.5, 9.9);
        e.bezierCurveTo(139.5, 9.9, 139.5, 10, 139.5, 10);
        e.bezierCurveTo(139.5, 10.2, 139.6, 10.3, 139.7, 10.4);
        e.bezierCurveTo(139.8, 10.5, 140, 10.6, 140.2, 10.6);
        e.lineTo(143.6, 10.6);
        e.lineTo(143.6, 16.8);
        e.lineTo(139.5, 16.8);
        e.bezierCurveTo(138, 17, 136.8, 17.6, 135.8, 18.7);
        e.bezierCurveTo(134.8, 19.8, 134.3, 21.1, 134.3, 22.5);
        e.bezierCurveTo(134.3, 24.1, 134.9, 25.5, 136.1, 26.6);
        e.bezierCurveTo(137.2, 27.8, 138.6, 28.4, 140.2, 28.4);
        e.lineTo(143.6, 28.4);
        e.lineTo(143.6, 34.6);
        e.lineTo(140.2, 34.6);
        e.closePath();
        e.moveTo(164.2, 34.5);
        e.lineTo(164.2, 28.9);
        e.lineTo(155.2, 28.9);
        e.lineTo(155.2, 34.5);
        e.lineTo(149, 34.5);
        e.lineTo(149, 20.3);
        e.bezierCurveTo(149, 15.6, 150.7, 11.5, 154.1, 8.1);
        e.bezierCurveTo(157.5, 4.7, 161.5, 3, 166.3, 3);
        e.lineTo(170.3, 3.3);
        e.lineTo(170.3, 6.1);
        e.lineTo(170.3, 34.5);
        e.lineTo(164.2, 34.5);
        e.closePath();
        e.moveTo(164.2, 9.4);
        e.bezierCurveTo(161.6, 9.9, 159.4, 11.2, 157.7, 13.2);
        e.bezierCurveTo(156, 15.3, 155.2, 17.6, 155.2, 20.3);
        e.lineTo(155.2, 22.7);
        e.lineTo(164.2, 22.7);
        e.lineTo(164.2, 9.4);
        e.closePath();
        e.moveTo(181.3, 10.9);
        e.bezierCurveTo(181.2, 11.2, 181.2, 11.6, 181.2, 12);
        e.bezierCurveTo(181.2, 13.1, 181.4, 14.2, 181.8, 15.1);
        e.bezierCurveTo(182.3, 16.1, 182.7, 17.1, 183.2, 18.1);
        e.bezierCurveTo(183.3, 18.2, 183.3, 18.3, 183.4, 18.4);
        e.bezierCurveTo(183.4, 18.5, 183.5, 18.6, 183.5, 18.7);
        e.bezierCurveTo(183.6, 18.9, 183.7, 19.1, 183.8, 19.2);
        e.bezierCurveTo(183.9, 19.4, 184, 19.6, 184, 19.8);
        e.bezierCurveTo(184.4, 20.5, 184.6, 21.2, 184.8, 21.9);
        e.bezierCurveTo(185, 22.6, 185.2, 23.3, 185.3, 24.1);
        e.bezierCurveTo(185.3, 24.3, 185.3, 24.5, 185.3, 24.8);
        e.bezierCurveTo(185.3, 25, 185.3, 25.3, 185.3, 25.5);
        e.bezierCurveTo(185.3, 28, 184.6, 30.4, 183.3, 32.6);
        e.bezierCurveTo(181.9, 34.8, 180, 36.5, 177.6, 37.7);
        e.lineTo(175, 32.1);
        e.bezierCurveTo(176.3, 31.5, 177.3, 30.6, 178, 29.4);
        e.bezierCurveTo(178.8, 28.1, 179.1, 26.9, 179.1, 25.5);
        e.bezierCurveTo(179.1, 25.2, 179.1, 25, 179.1, 24.7);
        e.bezierCurveTo(179.1, 24.5, 179, 24.2, 179, 24);
        e.bezierCurveTo(178.9, 23.7, 178.8, 23.5, 178.7, 23.2);
        e.bezierCurveTo(178.6, 23, 178.5, 22.7, 178.4, 22.4);
        e.lineTo(176.3, 17.9);
        e.bezierCurveTo(176, 17.3, 175.7, 16.6, 175.5, 16);
        e.bezierCurveTo(175.3, 15.4, 175.2, 14.7, 175.1, 14.1);
        e.bezierCurveTo(175.1, 13.8, 175, 13.5, 175, 13.1);
        e.bezierCurveTo(175, 12.8, 175, 12.5, 175, 12.2);
        e.bezierCurveTo(175, 9.7, 175.6, 7.3, 177, 5.1);
        e.bezierCurveTo(178.4, 2.8, 180.2, 1.2, 182.7, 0);
        e.lineTo(185.3, 5.6);
        e.bezierCurveTo(184.4, 6, 183.7, 6.6, 183, 7.3);
        e.bezierCurveTo(182.4, 8, 181.9, 8.8, 181.6, 9.7);
        e.bezierCurveTo(181.5, 10.1, 181.4, 10.5, 181.3, 10.9);
        e.closePath();
        this.graphics = e
    };
    a.NewIdeas = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.PURPLE.red;
        var b = StyleManager.PURPLE.green;
        var c = StyleManager.PURPLE.blue;
        var d = StyleManager.PURPLE.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(12.4, 6.9);
        e.bezierCurveTo(14.4, 8.9, 15.4, 11.2, 15.4, 14);
        e.bezierCurveTo(15.4, 16.3, 14.6, 18.4, 13.2, 20.1);
        e.bezierCurveTo(11.8, 21.9, 10, 23.1, 7.8, 23.6);
        e.lineTo(7.8, 29.2);
        e.lineTo(2.9, 29.2);
        e.lineTo(2.9, 4);
        e.lineTo(5.3, 4);
        e.bezierCurveTo(8.1, 4, 10.5, 5, 12.4, 6.9);
        e.closePath();
        e.moveTo(9.7, 16.6);
        e.bezierCurveTo(10.2, 15.8, 10.4, 14.9, 10.4, 14);
        e.bezierCurveTo(10.4, 13, 10.2, 12.2, 9.7, 11.4);
        e.bezierCurveTo(9.2, 10.6, 8.6, 10, 7.8, 9.6);
        e.lineTo(7.8, 18.4);
        e.bezierCurveTo(8.6, 17.9, 9.2, 17.3, 9.7, 16.6);
        e.closePath();
        e.moveTo(36.6, 29.1);
        e.lineTo(30.3, 29.1);
        e.lineTo(28.3, 26.6);
        e.bezierCurveTo(28, 26.8, 27.7, 27, 27.4, 27.2);
        e.bezierCurveTo(27, 27.4, 26.7, 27.6, 26.3, 27.7);
        e.lineTo(24.4, 23.2);
        e.bezierCurveTo(25.9, 22.5, 27, 21.6, 27.8, 20.3);
        e.bezierCurveTo(28.5, 19.1, 28.9, 17.7, 28.9, 16.3);
        e.bezierCurveTo(28.9, 14.9, 28.5, 13.5, 27.6, 12.2);
        e.bezierCurveTo(26.8, 10.9, 25.6, 9.9, 23.9, 9.4);
        e.lineTo(23.9, 29.1);
        e.lineTo(19, 29.1);
        e.lineTo(19, 4);
        e.lineTo(21.5, 4);
        e.bezierCurveTo(25.2, 4, 28.2, 5.3, 30.5, 7.8);
        e.bezierCurveTo(32.7, 10.4, 33.8, 13.3, 33.8, 16.4);
        e.bezierCurveTo(33.8, 16.6, 33.8, 16.9, 33.8, 17.1);
        e.bezierCurveTo(33.8, 17.3, 33.8, 17.6, 33.8, 17.8);
        e.bezierCurveTo(33.7, 18.7, 33.4, 19.6, 33.1, 20.5);
        e.bezierCurveTo(32.8, 21.4, 32.4, 22.3, 31.8, 23.1);
        e.lineTo(36.6, 29.1);
        e.closePath();
        e.moveTo(60.2, 25.8);
        e.bezierCurveTo(57.6, 28.4, 54.5, 29.7, 50.9, 29.7);
        e.bezierCurveTo(47.3, 29.7, 44.1, 28.4, 41.6, 25.8);
        e.bezierCurveTo(39, 23.2, 37.7, 20.1, 37.7, 16.5);
        e.bezierCurveTo(37.7, 12.8, 39, 9.7, 41.6, 7.1);
        e.bezierCurveTo(44.1, 4.6, 47.3, 3.3, 50.9, 3.3);
        e.bezierCurveTo(54.5, 3.3, 57.6, 4.6, 60.2, 7.1);
        e.bezierCurveTo(62.8, 9.7, 64.1, 12.8, 64.1, 16.5);
        e.bezierCurveTo(64.1, 20.1, 62.8, 23.2, 60.2, 25.8);
        e.closePath();
        e.moveTo(56.7, 10.6);
        e.bezierCurveTo(55.1, 9, 53.2, 8.2, 50.9, 8.2);
        e.bezierCurveTo(48.6, 8.2, 46.6, 9, 45, 10.6);
        e.bezierCurveTo(43.4, 12.2, 42.6, 14.2, 42.6, 16.5);
        e.bezierCurveTo(42.6, 18.8, 43.4, 20.7, 45, 22.3);
        e.bezierCurveTo(46.6, 24, 48.6, 24.8, 50.9, 24.8);
        e.bezierCurveTo(53.2, 24.8, 55.1, 24, 56.7, 22.3);
        e.bezierCurveTo(58.4, 20.7, 59.2, 18.8, 59.2, 16.5);
        e.bezierCurveTo(59.2, 14.2, 58.4, 12.2, 56.7, 10.6);
        e.closePath();
        e.moveTo(70.5, 32.7);
        e.bezierCurveTo(69.1, 34.1, 67.4, 34.8, 65.4, 34.8);
        e.lineTo(65.4, 29.9);
        e.bezierCurveTo(66, 29.9, 66.6, 29.6, 67, 29.2);
        e.bezierCurveTo(67.5, 28.8, 67.7, 28.2, 67.7, 27.6);
        e.lineTo(67.7, 4);
        e.lineTo(72.6, 4);
        e.lineTo(72.6, 27.6);
        e.bezierCurveTo(72.6, 29.6, 71.9, 31.2, 70.5, 32.7);
        e.closePath();
        e.moveTo(86, 29.2);
        e.bezierCurveTo(83.3, 29.1, 81.1, 28.2, 79.2, 26.3);
        e.bezierCurveTo(77.3, 24.4, 76.4, 22.2, 76.4, 19.6);
        e.bezierCurveTo(76.4, 17.9, 76.8, 16.3, 77.6, 14.9);
        e.bezierCurveTo(78.4, 13.5, 79.5, 12.3, 80.9, 11.5);
        e.bezierCurveTo(80.7, 11.1, 80.7, 10.8, 80.6, 10.5);
        e.bezierCurveTo(80.5, 10.2, 80.5, 9.8, 80.5, 9.5);
        e.bezierCurveTo(80.5, 8, 81, 6.7, 82.1, 5.6);
        e.bezierCurveTo(83.2, 4.6, 84.5, 4, 86, 4);
        e.lineTo(88.7, 4);
        e.lineTo(88.7, 9);
        e.lineTo(86, 9);
        e.bezierCurveTo(85.8, 9, 85.7, 9, 85.6, 9.1);
        e.bezierCurveTo(85.5, 9.3, 85.4, 9.4, 85.4, 9.5);
        e.bezierCurveTo(85.4, 9.6, 85.4, 9.6, 85.4, 9.6);
        e.bezierCurveTo(85.5, 9.7, 85.5, 9.8, 85.6, 9.9);
        e.bezierCurveTo(85.7, 10, 85.8, 10, 86, 10);
        e.lineTo(88.7, 10);
        e.lineTo(88.7, 15);
        e.lineTo(85.4, 15);
        e.bezierCurveTo(84.3, 15.1, 83.3, 15.6, 82.5, 16.5);
        e.bezierCurveTo(81.7, 17.4, 81.3, 18.4, 81.3, 19.6);
        e.bezierCurveTo(81.3, 20.8, 81.8, 21.9, 82.7, 22.8);
        e.bezierCurveTo(83.6, 23.8, 84.7, 24.2, 86, 24.2);
        e.lineTo(88.7, 24.2);
        e.lineTo(88.7, 29.2);
        e.lineTo(86, 29.2);
        e.closePath();
        e.moveTo(110.3, 29.2);
        e.bezierCurveTo(109.1, 29.6, 107.7, 29.7, 106.4, 29.7);
        e.bezierCurveTo(102.7, 29.7, 99.6, 28.5, 97, 25.9);
        e.bezierCurveTo(94.4, 23.3, 93.2, 20.2, 93.2, 16.6);
        e.bezierCurveTo(93.2, 12.9, 94.4, 9.8, 97, 7.2);
        e.bezierCurveTo(99.6, 4.6, 102.7, 3.3, 106.4, 3.3);
        e.bezierCurveTo(107.7, 3.3, 108.9, 3.5, 110.2, 3.9);
        e.bezierCurveTo(111.4, 4.3, 112.5, 4.8, 113.6, 5.5);
        e.lineTo(110.9, 9.6);
        e.bezierCurveTo(110.2, 9.2, 109.5, 8.8, 108.8, 8.6);
        e.bezierCurveTo(108, 8.4, 107.2, 8.3, 106.4, 8.3);
        e.bezierCurveTo(104.1, 8.3, 102.1, 9.1, 100.5, 10.7);
        e.bezierCurveTo(98.9, 12.3, 98.1, 14.3, 98.1, 16.6);
        e.bezierCurveTo(98.1, 18.8, 98.9, 20.8, 100.5, 22.4);
        e.bezierCurveTo(102.1, 24.1, 104.1, 24.9, 106.4, 24.9);
        e.bezierCurveTo(107.2, 24.9, 108.1, 24.7, 108.9, 24.5);
        e.bezierCurveTo(109.7, 24.2, 110.4, 23.9, 111.1, 23.4);
        e.lineTo(113.9, 27.4);
        e.bezierCurveTo(112.8, 28.2, 111.6, 28.8, 110.3, 29.2);
        e.closePath();
        e.moveTo(128.6, 4);
        e.lineTo(128.6, 8.9);
        e.lineTo(125.3, 8.9);
        e.lineTo(125.3, 29.2);
        e.lineTo(120.4, 29.2);
        e.lineTo(120.4, 8.9);
        e.lineTo(117.1, 8.9);
        e.lineTo(117.1, 4);
        e.lineTo(128.6, 4);
        e.closePath();
        e.moveTo(136.7, 10.3);
        e.bezierCurveTo(136.7, 10.6, 136.6, 10.9, 136.6, 11.2);
        e.bezierCurveTo(136.6, 12.1, 136.8, 12.9, 137.1, 13.7);
        e.bezierCurveTo(137.5, 14.5, 137.8, 15.3, 138.2, 16);
        e.bezierCurveTo(138.3, 16.1, 138.3, 16.2, 138.4, 16.3);
        e.bezierCurveTo(138.4, 16.4, 138.4, 16.5, 138.5, 16.5);
        e.bezierCurveTo(138.5, 16.7, 138.6, 16.8, 138.7, 17);
        e.bezierCurveTo(138.7, 17.1, 138.8, 17.2, 138.9, 17.4);
        e.bezierCurveTo(139.1, 17.9, 139.3, 18.5, 139.5, 19.1);
        e.bezierCurveTo(139.7, 19.6, 139.8, 20.2, 139.9, 20.8);
        e.bezierCurveTo(139.9, 21, 139.9, 21.2, 139.9, 21.4);
        e.bezierCurveTo(139.9, 21.5, 139.9, 21.7, 139.9, 21.9);
        e.bezierCurveTo(139.9, 23.9, 139.4, 25.8, 138.3, 27.6);
        e.bezierCurveTo(137.2, 29.3, 135.7, 30.7, 133.8, 31.6);
        e.lineTo(131.7, 27.2);
        e.bezierCurveTo(132.7, 26.7, 133.5, 26, 134.1, 25);
        e.bezierCurveTo(134.7, 24, 135, 23, 135, 21.9);
        e.bezierCurveTo(135, 21.7, 135, 21.5, 134.9, 21.3);
        e.bezierCurveTo(134.9, 21.1, 134.9, 20.9, 134.8, 20.7);
        e.bezierCurveTo(134.8, 20.5, 134.7, 20.3, 134.7, 20.1);
        e.bezierCurveTo(134.6, 19.9, 134.5, 19.7, 134.4, 19.5);
        e.lineTo(132.7, 15.9);
        e.bezierCurveTo(132.5, 15.4, 132.3, 14.9, 132.1, 14.4);
        e.bezierCurveTo(131.9, 13.9, 131.8, 13.4, 131.8, 12.9);
        e.bezierCurveTo(131.7, 12.6, 131.7, 12.3, 131.7, 12.1);
        e.bezierCurveTo(131.7, 11.8, 131.7, 11.6, 131.7, 11.3);
        e.bezierCurveTo(131.7, 9.3, 132.2, 7.4, 133.3, 5.7);
        e.bezierCurveTo(134.4, 3.9, 135.9, 2.6, 137.8, 1.6);
        e.lineTo(139.9, 6.1);
        e.bezierCurveTo(139.2, 6.4, 138.6, 6.9, 138.1, 7.4);
        e.bezierCurveTo(137.6, 8, 137.2, 8.6, 136.9, 9.4);
        e.bezierCurveTo(136.8, 9.7, 136.8, 10, 136.7, 10.3);
        e.closePath();
        e.moveTo(148, 28.7);
        e.bezierCurveTo(147.5, 29.2, 146.9, 29.4, 146.1, 29.4);
        e.bezierCurveTo(145.4, 29.4, 144.7, 29.2, 144.2, 28.7);
        e.bezierCurveTo(143.7, 28.1, 143.4, 27.5, 143.4, 26.8);
        e.bezierCurveTo(143.4, 26, 143.7, 25.4, 144.2, 24.9);
        e.bezierCurveTo(144.7, 24.4, 145.4, 24.1, 146.1, 24.1);
        e.bezierCurveTo(146.9, 24.1, 147.5, 24.4, 148, 24.9);
        e.bezierCurveTo(148.5, 25.4, 148.8, 26, 148.8, 26.8);
        e.bezierCurveTo(148.8, 27.5, 148.5, 28.1, 148, 28.7);
        e.closePath();
        this.graphics = e
    };
    a.Projects = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.LIGHT_AQUA.red;
        var b = StyleManager.LIGHT_AQUA.green;
        var c = StyleManager.LIGHT_AQUA.blue;
        var d = StyleManager.LIGHT_AQUA.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(4.8, 4.4);
        e.lineTo(0, 4.4);
        e.lineTo(0, 2.2);
        e.lineTo(0, 0);
        e.lineTo(14.3, 0);
        e.lineTo(14.3, 2.2);
        e.lineTo(14.3, 4.4);
        e.lineTo(9.5, 4.4);
        e.lineTo(9.5, 25.7);
        e.lineTo(7.2, 25.7);
        e.lineTo(4.8, 25.7);
        e.lineTo(4.8, 4.4);
        e.closePath();
        e.moveTo(16.9, 0);
        e.lineTo(19.2, 0);
        e.lineTo(21.6, 0);
        e.lineTo(21.6, 10.5);
        e.lineTo(30.9, 10.5);
        e.lineTo(30.9, 0);
        e.lineTo(33.2, 0);
        e.lineTo(35.6, 0);
        e.lineTo(35.6, 25.7);
        e.lineTo(33.2, 25.7);
        e.lineTo(30.9, 25.7);
        e.lineTo(30.9, 14.9);
        e.lineTo(21.6, 14.9);
        e.lineTo(21.6, 25.7);
        e.lineTo(19.2, 25.7);
        e.lineTo(16.9, 25.7);
        e.lineTo(16.9, 0);
        e.closePath();
        e.moveTo(49.1, 0);
        e.lineTo(50.9, 0);
        e.lineTo(52.8, 0);
        e.lineTo(63.5, 25.7);
        e.lineTo(60.9, 25.7);
        e.lineTo(58.3, 25.7);
        e.lineTo(55.8, 19.1);
        e.lineTo(46, 19.1);
        e.lineTo(43.5, 25.7);
        e.lineTo(40.9, 25.7);
        e.lineTo(38.3, 25.7);
        e.lineTo(49.1, 0);
        e.closePath();
        e.moveTo(47.7, 14.7);
        e.lineTo(54.1, 14.7);
        e.lineTo(50.9, 6.4);
        e.lineTo(50.9, 6.4);
        e.lineTo(47.7, 14.7);
        e.closePath();
        e.moveTo(71, 25.7);
        e.lineTo(68.6, 25.7);
        e.lineTo(66.2, 25.7);
        e.lineTo(66.2, 0);
        e.lineTo(69, 0);
        e.lineTo(71.7, 0);
        e.lineTo(82.4, 18.8);
        e.lineTo(82.4, 0);
        e.lineTo(84.8, 0);
        e.lineTo(87.1, 0);
        e.lineTo(87.1, 25.7);
        e.lineTo(84.5, 25.7);
        e.lineTo(81.9, 25.7);
        e.lineTo(71, 6.8);
        e.lineTo(71, 25.7);
        e.closePath();
        e.moveTo(101.4, 25.7);
        e.lineTo(101.4, 0);
        e.lineTo(115.2, 0);
        e.lineTo(115.2, 2.2);
        e.lineTo(115.2, 4.4);
        e.lineTo(106.1, 4.4);
        e.lineTo(106.1, 10.8);
        e.lineTo(114.8, 10.8);
        e.lineTo(114.8, 13);
        e.lineTo(114.8, 15.2);
        e.lineTo(106.1, 15.2);
        e.lineTo(106.1, 21.3);
        e.lineTo(115.2, 21.3);
        e.lineTo(115.2, 23.5);
        e.lineTo(115.2, 25.7);
        e.lineTo(101.4, 25.7);
        e.closePath();
        e.moveTo(117.6, 0);
        e.lineTo(120.1, 0);
        e.lineTo(122.6, 0);
        e.lineTo(129.6, 19.6);
        e.lineTo(129.6, 19.6);
        e.lineTo(136.5, 0);
        e.lineTo(139, 0);
        e.lineTo(141.5, 0);
        e.lineTo(131.5, 25.7);
        e.lineTo(129.6, 25.7);
        e.lineTo(127.7, 25.7);
        e.lineTo(117.6, 0);
        e.closePath();
        e.moveTo(143.8, 25.7);
        e.lineTo(143.8, 0);
        e.lineTo(157.7, 0);
        e.lineTo(157.7, 2.2);
        e.lineTo(157.7, 4.4);
        e.lineTo(148.6, 4.4);
        e.lineTo(148.6, 10.8);
        e.lineTo(157.2, 10.8);
        e.lineTo(157.2, 13);
        e.lineTo(157.2, 15.2);
        e.lineTo(148.6, 15.2);
        e.lineTo(148.6, 21.3);
        e.lineTo(157.7, 21.3);
        e.lineTo(157.7, 23.5);
        e.lineTo(157.7, 25.7);
        e.lineTo(143.8, 25.7);
        e.closePath();
        e.moveTo(162, 0);
        e.lineTo(164.4, 0);
        e.lineTo(169.6, 0);
        e.bezierCurveTo(172.6, 0, 175, .7, 176.7, 2.1);
        e.bezierCurveTo(178.3, 3.5, 179.2, 5.4, 179.2, 7.9);
        e.bezierCurveTo(179.2, 10.8, 178.3, 12.9, 176.6, 14.3);
        e.bezierCurveTo(175.6, 15.2, 174.2, 15.9, 172.5, 16.2);
        e.lineTo(179.4, 25.7);
        e.lineTo(176.6, 25.7);
        e.lineTo(173.8, 25.7);
        e.lineTo(166.8, 15.5);
        e.lineTo(166.8, 25.7);
        e.lineTo(164.4, 25.7);
        e.lineTo(162, 25.7);
        e.lineTo(162, 0);
        e.closePath();
        e.moveTo(166.8, 12.3);
        e.lineTo(169.2, 12.3);
        e.bezierCurveTo(170.9, 12.3, 172.2, 12, 173.1, 11.4);
        e.bezierCurveTo(174, 10.7, 174.4, 9.7, 174.4, 8.4);
        e.bezierCurveTo(174.4, 7.1, 174, 6.1, 173.1, 5.4);
        e.bezierCurveTo(172.2, 4.8, 170.9, 4.4, 169.2, 4.4);
        e.lineTo(166.8, 4.4);
        e.lineTo(166.8, 12.3);
        e.closePath();
        this.graphics = e
    };
    a.ThanEver = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.LIGHT_AQUA.red;
        var b = StyleManager.LIGHT_AQUA.green;
        var c = StyleManager.LIGHT_AQUA.blue;
        var d = StyleManager.LIGHT_AQUA.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(9.1, 22.4);
        e.lineTo(2.9, .9);
        e.lineTo(4.9, .9);
        e.lineTo(7, .9);
        e.lineTo(10.8, 16.1);
        e.lineTo(10.8, 16.1);
        e.lineTo(14.4, .9);
        e.lineTo(15.9, .9);
        e.lineTo(17.3, .9);
        e.lineTo(20.9, 16.1);
        e.lineTo(20.9, 16.1);
        e.lineTo(24.8, .9);
        e.lineTo(26.8, .9);
        e.lineTo(28.8, .9);
        e.lineTo(22.6, 22.4);
        e.lineTo(21, 22.4);
        e.lineTo(19.4, 22.4);
        e.lineTo(15.8, 8);
        e.lineTo(15.8, 8);
        e.lineTo(12.3, 22.4);
        e.lineTo(10.7, 22.4);
        e.lineTo(9.1, 22.4);
        e.closePath();
        e.moveTo(30.3, .9);
        e.lineTo(32.3, .9);
        e.lineTo(34.3, .9);
        e.lineTo(34.3, 22.4);
        e.lineTo(32.3, 22.4);
        e.lineTo(30.3, 22.4);
        e.lineTo(30.3, .9);
        e.closePath();
        e.moveTo(39.9, 4.6);
        e.lineTo(35.9, 4.6);
        e.lineTo(35.9, 2.8);
        e.lineTo(35.9, .9);
        e.lineTo(47.9, .9);
        e.lineTo(47.9, 2.8);
        e.lineTo(47.9, 4.6);
        e.lineTo(43.9, 4.6);
        e.lineTo(43.9, 22.4);
        e.lineTo(41.9, 22.4);
        e.lineTo(39.9, 22.4);
        e.lineTo(39.9, 4.6);
        e.closePath();
        e.moveTo(49.4, .9);
        e.lineTo(51.4, .9);
        e.lineTo(53.4, .9);
        e.lineTo(53.4, 9.7);
        e.lineTo(61.1, 9.7);
        e.lineTo(61.1, .9);
        e.lineTo(63.1, .9);
        e.lineTo(65.1, .9);
        e.lineTo(65.1, 22.4);
        e.lineTo(63.1, 22.4);
        e.lineTo(61.1, 22.4);
        e.lineTo(61.1, 13.4);
        e.lineTo(53.4, 13.4);
        e.lineTo(53.4, 22.4);
        e.lineTo(51.4, 22.4);
        e.lineTo(49.4, 22.4);
        e.lineTo(49.4, .9);
        e.closePath();
        this.graphics = e
    };
    a.With = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = new Graphics;
        a.beginFill(Graphics.getRGB(145, 32, 97, 255));
        a.moveTo(2.3, 135.4);
        a.lineTo(2.3, 4.9);
        a.lineTo(109.6, 4.9);
        a.lineTo(109.6, 37.6);
        a.lineTo(60, 37.6);
        a.lineTo(60, 61.3);
        a.lineTo(96.8, 61.3);
        a.lineTo(96.8, 94.1);
        a.lineTo(60, 94.1);
        a.lineTo(60, 135.4);
        a.lineTo(2.3, 135.4);
        a.closePath();
        a.moveTo(119.6, 135.4);
        a.lineTo(119.6, 4.9);
        a.lineTo(177.3, 4.9);
        a.lineTo(177.3, 135.4);
        a.lineTo(119.6, 135.4);
        a.closePath();
        a.moveTo(190, 62.7);
        a.lineTo(190, 4.9);
        a.lineTo(305.9, 4.9);
        a.lineTo(305.9, 62.7);
        a.lineTo(276.9, 62.7);
        a.lineTo(276.9, 135.4);
        a.lineTo(219.1, 135.4);
        a.lineTo(219.1, 62.7);
        a.lineTo(190, 62.7);
        a.closePath();
        a.moveTo(439.9, 16.6);
        a.lineTo(415.7, 62.7);
        a.bezierCurveTo(408.7, 60.3, 400.9, 59, 392.3, 59);
        a.bezierCurveTo(380.1, 59, 373.9, 62.4, 373.9, 69);
        a.bezierCurveTo(373.9, 72.2, 375.6, 74.7, 379.1, 76.5);
        a.bezierCurveTo(382.5, 78.3, 387.4, 79.2, 393.7, 79.2);
        a.bezierCurveTo(402.2, 79.2, 409.6, 77.7, 415.7, 74.6);
        a.lineTo(439.9, 124);
        a.bezierCurveTo(433.1, 128.1, 424.8, 131.4, 415.1, 133.9);
        a.bezierCurveTo(405.5, 136.3, 396.2, 137.5, 387.4, 137.5);
        a.bezierCurveTo(365.2, 137.5, 347.5, 131.1, 334.4, 118.3);
        a.bezierCurveTo(321.2, 105.5, 314.7, 89.8, 314.7, 71.1);
        a.bezierCurveTo(314.7, 51.3, 321.5, 35, 335.2, 22.1);
        a.bezierCurveTo(348.9, 9.3, 366.3, 2.8, 387.4, 2.8);
        a.bezierCurveTo(396.5, 2.8, 405.9, 4.1, 415.6, 6.6);
        a.bezierCurveTo(425.3, 9, 433.4, 12.4, 439.9, 16.6);
        a.closePath();
        this.graphics = a
    };
    a.Fitc2 = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.WHITE.red;
        var b = StyleManager.WHITE.green;
        var c = StyleManager.WHITE.blue;
        var d = StyleManager.WHITE.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(29.9, 18.7);
        e.bezierCurveTo(29.1, 22.5, 27.2, 25.5, 24.4, 27.7);
        e.bezierCurveTo(21.6, 29.9, 18.6, 30.9, 15.3, 30.9);
        e.bezierCurveTo(14.6, 30.9, 13.9, 30.9, 13.2, 30.8);
        e.bezierCurveTo(9.1, 30.3, 5.8, 28.4, 3.2, 25.1);
        e.bezierCurveTo(1.1, 22.4, 0, 19.3, 0, 16);
        e.bezierCurveTo(0, 15.4, 0, 14.7, .1, 14);
        e.bezierCurveTo(.6, 9.9, 2.5, 6.6, 5.8, 4);
        e.bezierCurveTo(8.6, 1.9, 11.6, .8, 14.9, .8);
        e.bezierCurveTo(15.6, .8, 16.3, .8, 17, .9);
        e.bezierCurveTo(18.9, 1.2, 20.9, 1.8, 22.8, 2.9);
        e.lineTo(20.6, 5);
        e.bezierCurveTo(19.3, 4.3, 17.9, 3.9, 16.6, 3.8);
        e.bezierCurveTo(16, 3.7, 15.5, 3.7, 15, 3.7);
        e.bezierCurveTo(12.3, 3.7, 9.8, 4.5, 7.6, 6.3);
        e.bezierCurveTo(4.9, 8.3, 3.4, 11, 3, 14.4);
        e.bezierCurveTo(2.9, 14.9, 2.9, 15.5, 2.9, 16);
        e.bezierCurveTo(2.9, 18.7, 3.7, 21.1, 5.5, 23.3);
        e.bezierCurveTo(7.5, 26, 10.2, 27.5, 13.6, 28);
        e.bezierCurveTo(14.2, 28, 14.7, 28.1, 15.2, 28.1);
        e.bezierCurveTo(18, 28.1, 20.4, 27.2, 22.6, 25.5);
        e.bezierCurveTo(24.2, 24.2, 25.3, 22.9, 26, 21.4);
        e.lineTo(18.6, 21.4);
        e.lineTo(18.6, 18.7);
        e.lineTo(29.9, 18.7);
        e.closePath();
        e.moveTo(71.3, 15.9);
        e.bezierCurveTo(71.3, 20.3, 69.8, 24, 66.7, 27.1);
        e.bezierCurveTo(63.6, 30.2, 59.9, 31.7, 55.5, 31.7);
        e.bezierCurveTo(51.1, 31.7, 47.4, 30.2, 44.3, 27.1);
        e.bezierCurveTo(41.2, 24, 39.6, 20.3, 39.6, 15.9);
        e.bezierCurveTo(39.6, 11.5, 41.2, 7.8, 44.3, 4.7);
        e.bezierCurveTo(47.4, 1.6, 51.1, 0, 55.5, 0);
        e.bezierCurveTo(59.9, 0, 63.6, 1.6, 66.7, 4.7);
        e.bezierCurveTo(69.8, 7.8, 71.3, 11.5, 71.3, 15.9);
        e.closePath();
        e.moveTo(55.5, 2.9);
        e.bezierCurveTo(51.9, 2.9, 48.9, 4.2, 46.3, 6.7);
        e.bezierCurveTo(43.8, 9.3, 42.5, 12.3, 42.5, 15.9);
        e.bezierCurveTo(42.5, 19.4, 43.8, 22.5, 46.3, 25);
        e.bezierCurveTo(48.9, 27.6, 51.9, 28.9, 55.5, 28.9);
        e.bezierCurveTo(59.1, 28.9, 62.1, 27.6, 64.7, 25);
        e.bezierCurveTo(67.2, 22.5, 68.5, 19.4, 68.5, 15.9);
        e.bezierCurveTo(68.5, 12.3, 67.2, 9.3, 64.7, 6.7);
        e.bezierCurveTo(62.1, 4.2, 59.1, 2.9, 55.5, 2.9);
        e.closePath();
        e.moveTo(83.5, 30.8);
        e.lineTo(83.5, 1.1);
        e.lineTo(86.3, 1.1);
        e.lineTo(86.3, 30.8);
        e.lineTo(83.5, 30.8);
        e.closePath();
        e.moveTo(114.2, 30.8);
        e.lineTo(101.7, 9.1);
        e.lineTo(101.7, 30.8);
        e.lineTo(98.9, 30.8);
        e.lineTo(98.9, 1.3);
        e.lineTo(100.2, 1.3);
        e.lineTo(112.8, 23.1);
        e.lineTo(112.8, 1.1);
        e.lineTo(115.5, 1.1);
        e.lineTo(115.5, 30.8);
        e.lineTo(114.2, 30.8);
        e.closePath();
        e.moveTo(158.1, 18.7);
        e.bezierCurveTo(157.2, 22.5, 155.4, 25.5, 152.5, 27.7);
        e.bezierCurveTo(149.8, 29.9, 146.7, 30.9, 143.4, 30.9);
        e.bezierCurveTo(142.7, 30.9, 142.1, 30.9, 141.4, 30.8);
        e.bezierCurveTo(137.2, 30.3, 133.9, 28.4, 131.3, 25.1);
        e.bezierCurveTo(129.2, 22.4, 128.1, 19.3, 128.1, 16);
        e.bezierCurveTo(128.1, 15.4, 128.2, 14.7, 128.3, 14);
        e.bezierCurveTo(128.8, 9.9, 130.7, 6.6, 134, 4);
        e.bezierCurveTo(136.7, 1.9, 139.7, .8, 143.1, .8);
        e.bezierCurveTo(143.7, .8, 144.4, .8, 145.1, .9);
        e.bezierCurveTo(147, 1.2, 149, 1.8, 150.9, 2.9);
        e.lineTo(148.8, 5);
        e.bezierCurveTo(147.4, 4.3, 146.1, 3.9, 144.7, 3.8);
        e.bezierCurveTo(144.2, 3.7, 143.6, 3.7, 143.1, 3.7);
        e.bezierCurveTo(140.4, 3.7, 137.9, 4.5, 135.7, 6.3);
        e.bezierCurveTo(133.1, 8.3, 131.5, 11, 131.1, 14.4);
        e.bezierCurveTo(131, 14.9, 131, 15.5, 131, 16);
        e.bezierCurveTo(131, 18.7, 131.9, 21.1, 133.6, 23.3);
        e.bezierCurveTo(135.7, 26, 138.4, 27.5, 141.7, 28);
        e.bezierCurveTo(142.3, 28, 142.8, 28.1, 143.4, 28.1);
        e.bezierCurveTo(146.1, 28.1, 148.5, 27.2, 150.7, 25.5);
        e.bezierCurveTo(152.3, 24.2, 153.5, 22.9, 154.1, 21.4);
        e.lineTo(146.7, 21.4);
        e.lineTo(146.7, 18.7);
        e.lineTo(158.1, 18.7);
        e.closePath();
        e.moveTo(191.5, 3.8);
        e.lineTo(191.5, 30.8);
        e.lineTo(188.8, 30.8);
        e.lineTo(188.8, 3.8);
        e.lineTo(184.6, 3.8);
        e.lineTo(184.6, 1.1);
        e.lineTo(195.6, 1.1);
        e.lineTo(195.6, 3.8);
        e.lineTo(191.5, 3.8);
        e.closePath();
        e.moveTo(236.9, 15.9);
        e.bezierCurveTo(236.9, 20.3, 235.4, 24, 232.3, 27.1);
        e.bezierCurveTo(229.2, 30.2, 225.4, 31.7, 221, 31.7);
        e.bezierCurveTo(216.7, 31.7, 213, 30.2, 209.8, 27.1);
        e.bezierCurveTo(206.7, 24, 205.2, 20.3, 205.2, 15.9);
        e.bezierCurveTo(205.2, 11.5, 206.7, 7.8, 209.8, 4.7);
        e.bezierCurveTo(213, 1.6, 216.7, 0, 221, 0);
        e.bezierCurveTo(225.4, 0, 229.2, 1.6, 232.3, 4.7);
        e.bezierCurveTo(235.4, 7.8, 236.9, 11.5, 236.9, 15.9);
        e.closePath();
        e.moveTo(221, 2.9);
        e.bezierCurveTo(217.5, 2.9, 214.4, 4.2, 211.9, 6.7);
        e.bezierCurveTo(209.3, 9.3, 208.1, 12.3, 208.1, 15.9);
        e.bezierCurveTo(208.1, 19.4, 209.3, 22.5, 211.9, 25);
        e.bezierCurveTo(214.4, 27.6, 217.5, 28.9, 221, 28.9);
        e.bezierCurveTo(224.6, 28.9, 227.7, 27.6, 230.3, 25);
        e.bezierCurveTo(232.8, 22.5, 234.1, 19.4, 234.1, 15.9);
        e.bezierCurveTo(234.1, 12.3, 232.8, 9.3, 230.3, 6.7);
        e.bezierCurveTo(227.7, 4.2, 224.6, 2.9, 221, 2.9);
        e.closePath();
        this.graphics = e
    };
    a.GoingTo = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.WHITE.red;
        var b = StyleManager.WHITE.green;
        var c = StyleManager.WHITE.blue;
        var d = StyleManager.WHITE.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(0, 27.1);
        e.lineTo(0, .9);
        e.lineTo(2.4, .9);
        e.lineTo(2.4, 27.1);
        e.lineTo(0, 27.1);
        e.closePath();
        e.moveTo(28.7, 27.1);
        e.lineTo(17.6, 8);
        e.lineTo(17.6, 27.1);
        e.lineTo(15.3, 27.1);
        e.lineTo(15.3, 1.1);
        e.lineTo(16.4, 1.1);
        e.lineTo(27.5, 20.3);
        e.lineTo(27.5, .9);
        e.lineTo(29.8, .9);
        e.lineTo(29.8, 27.1);
        e.lineTo(28.7, 27.1);
        e.closePath();
        e.moveTo(54, 4);
        e.bezierCurveTo(53.2, 3.3, 52.4, 2.9, 51.5, 2.9);
        e.lineTo(51.4, 2.9);
        e.bezierCurveTo(50.4, 2.9, 49.6, 3.3, 49, 4);
        e.bezierCurveTo(48.3, 4.7, 48, 5.5, 48, 6.4);
        e.bezierCurveTo(48, 6.8, 48.1, 7.6, 48.3, 8.8);
        e.lineTo(50.9, 19.1);
        e.bezierCurveTo(51.2, 20.3, 51.3, 21.1, 51.3, 21.5);
        e.bezierCurveTo(51.3, 23.1, 50.7, 24.5, 49.5, 25.7);
        e.bezierCurveTo(48.4, 26.9, 47, 27.5, 45.4, 27.6);
        e.lineTo(45.1, 27.6);
        e.bezierCurveTo(43.6, 27.6, 42.2, 27, 41, 25.8);
        e.lineTo(42.7, 23.9);
        e.bezierCurveTo(43.5, 24.7, 44.4, 25.1, 45.2, 25.1);
        e.lineTo(45.4, 25.1);
        e.bezierCurveTo(46.3, 25.1, 47.1, 24.7, 47.8, 24);
        e.bezierCurveTo(48.5, 23.3, 48.8, 22.5, 48.8, 21.6);
        e.bezierCurveTo(48.8, 21.2, 48.7, 20.5, 48.4, 19.4);
        e.bezierCurveTo(46.5, 11.9, 45.5, 7.6, 45.5, 6.5);
        e.bezierCurveTo(45.5, 4.9, 46.1, 3.5, 47.2, 2.3);
        e.bezierCurveTo(48.4, 1.1, 49.7, .4, 51.4, .4);
        e.lineTo(51.6, .4);
        e.bezierCurveTo(53.1, .4, 54.5, 1, 55.8, 2.2);
        e.lineTo(54, 4);
        e.closePath();
        e.moveTo(76.3, 18.7);
        e.lineTo(76.3, 18.8);
        e.lineTo(69.2, 18.8);
        e.lineTo(69.2, 27.1);
        e.lineTo(66.8, 27.1);
        e.lineTo(66.8, .9);
        e.lineTo(76.3, .9);
        e.lineTo(76.3, 1);
        e.bezierCurveTo(78.4, 1.1, 80.3, 2, 81.9, 3.6);
        e.bezierCurveTo(83.6, 5.3, 84.5, 7.4, 84.5, 9.9);
        e.bezierCurveTo(84.5, 12.3, 83.6, 14.4, 81.9, 16.1);
        e.bezierCurveTo(80.3, 17.8, 78.4, 18.6, 76.3, 18.7);
        e.closePath();
        e.moveTo(75.4, 16.4);
        e.lineTo(75.4, 16.4);
        e.bezierCurveTo(77.4, 16.4, 79, 15.7, 80.2, 14.5);
        e.bezierCurveTo(81.5, 13.2, 82.1, 11.7, 82.1, 9.9);
        e.bezierCurveTo(82.1, 8.1, 81.5, 6.5, 80.2, 5.2);
        e.bezierCurveTo(79, 4.1, 77.7, 3.4, 76.1, 3.3);
        e.lineTo(69.2, 3.3);
        e.lineTo(69.2, 16.4);
        e.lineTo(75.4, 16.4);
        e.closePath();
        e.moveTo(96.2, 27.1);
        e.lineTo(96.2, .9);
        e.lineTo(98.5, .9);
        e.lineTo(98.5, 27.1);
        e.lineTo(96.2, 27.1);
        e.closePath();
        e.moveTo(120.8, 18.7);
        e.bezierCurveTo(120.7, 18.7, 120.6, 18.7, 120.5, 18.7);
        e.lineTo(120.5, 18.8);
        e.lineTo(113.4, 18.8);
        e.lineTo(113.4, 27.1);
        e.lineTo(111, 27.1);
        e.lineTo(111, .9);
        e.lineTo(120.5, .9);
        e.lineTo(120.5, 1);
        e.bezierCurveTo(122.6, 1.1, 124.5, 2, 126.1, 3.6);
        e.bezierCurveTo(127.8, 5.3, 128.7, 7.4, 128.7, 9.9);
        e.bezierCurveTo(128.7, 12.3, 127.8, 14.4, 126.1, 16.1);
        e.bezierCurveTo(125.1, 17.1, 124.2, 17.8, 123.2, 18.1);
        e.lineTo(128.3, 27.1);
        e.lineTo(125.6, 27.1);
        e.lineTo(120.8, 18.7);
        e.closePath();
        e.moveTo(119.7, 16.4);
        e.lineTo(119.7, 16.4);
        e.bezierCurveTo(121.6, 16.4, 123.2, 15.7, 124.4, 14.5);
        e.bezierCurveTo(125.7, 13.2, 126.3, 11.7, 126.3, 9.9);
        e.bezierCurveTo(126.3, 8.1, 125.7, 6.5, 124.4, 5.2);
        e.bezierCurveTo(123.3, 4.1, 121.9, 3.4, 120.3, 3.3);
        e.lineTo(113.4, 3.3);
        e.lineTo(113.4, 16.4);
        e.lineTo(119.7, 16.4);
        e.closePath();
        e.moveTo(144.8, 18.8);
        e.lineTo(141.9, 27.1);
        e.lineTo(139.3, 27.1);
        e.lineTo(148.8, .2);
        e.lineTo(158.2, 27.1);
        e.lineTo(155.6, 27.1);
        e.lineTo(152.7, 18.8);
        e.lineTo(144.8, 18.8);
        e.closePath();
        e.moveTo(151.9, 16.4);
        e.lineTo(148.8, 7.5);
        e.lineTo(145.6, 16.4);
        e.lineTo(151.9, 16.4);
        e.closePath();
        e.moveTo(173.5, 3.3);
        e.lineTo(173.5, 27.1);
        e.lineTo(171.1, 27.1);
        e.lineTo(171.1, 3.3);
        e.lineTo(167.4, 3.3);
        e.lineTo(167.4, .9);
        e.lineTo(177.1, .9);
        e.lineTo(177.1, 3.3);
        e.lineTo(173.5, 3.3);
        e.closePath();
        e.moveTo(188.9, 27.1);
        e.lineTo(188.9, .9);
        e.lineTo(191.2, .9);
        e.lineTo(191.2, 27.1);
        e.lineTo(188.9, 27.1);
        e.closePath();
        e.moveTo(231.6, 13.9);
        e.bezierCurveTo(231.6, 17.8, 230.2, 21.1, 227.5, 23.8);
        e.bezierCurveTo(224.8, 26.5, 221.5, 27.9, 217.7, 27.9);
        e.bezierCurveTo(213.8, 27.9, 210.5, 26.5, 207.8, 23.8);
        e.bezierCurveTo(205.1, 21.1, 203.7, 17.8, 203.7, 13.9);
        e.bezierCurveTo(203.7, 10.1, 205.1, 6.8, 207.8, 4.1);
        e.bezierCurveTo(210.5, 1.4, 213.8, 0, 217.7, 0);
        e.bezierCurveTo(221.5, 0, 224.8, 1.4, 227.5, 4.1);
        e.bezierCurveTo(230.2, 6.8, 231.6, 10.1, 231.6, 13.9);
        e.closePath();
        e.moveTo(217.7, 2.5);
        e.bezierCurveTo(214.5, 2.5, 211.8, 3.7, 209.6, 5.9);
        e.bezierCurveTo(207.4, 8.1, 206.3, 10.8, 206.3, 13.9);
        e.bezierCurveTo(206.3, 17.1, 207.4, 19.8, 209.6, 22);
        e.bezierCurveTo(211.8, 24.2, 214.5, 25.4, 217.7, 25.4);
        e.bezierCurveTo(220.8, 25.4, 223.5, 24.2, 225.8, 22);
        e.bezierCurveTo(228, 19.8, 229.1, 17.1, 229.1, 13.9);
        e.bezierCurveTo(229.1, 10.8, 228, 8.1, 225.8, 5.9);
        e.bezierCurveTo(223.5, 3.7, 220.8, 2.5, 217.7, 2.5);
        e.closePath();
        e.moveTo(257.5, 27.1);
        e.lineTo(246.5, 8);
        e.lineTo(246.5, 27.1);
        e.lineTo(244.1, 27.1);
        e.lineTo(244.1, 1.1);
        e.lineTo(245.3, 1.1);
        e.lineTo(256.3, 20.3);
        e.lineTo(256.3, .9);
        e.lineTo(258.7, .9);
        e.lineTo(258.7, 27.1);
        e.lineTo(257.5, 27.1);
        e.closePath();
        e.moveTo(272.2, 23.4);
        e.bezierCurveTo(272.5, 23.4, 272.8, 23.5, 273.1, 23.7);
        e.bezierCurveTo(273.4, 23.8, 273.6, 24, 273.8, 24.3);
        e.bezierCurveTo(273.9, 24.6, 274, 24.9, 274, 25.2);
        e.bezierCurveTo(274, 25.6, 273.9, 25.9, 273.8, 26.1);
        e.bezierCurveTo(273.6, 26.4, 273.4, 26.7, 273.1, 26.8);
        e.bezierCurveTo(272.8, 27, 272.5, 27.1, 272.2, 27.1);
        e.bezierCurveTo(271.9, 27.1, 271.6, 27, 271.3, 26.8);
        e.bezierCurveTo(271, 26.7, 270.8, 26.4, 270.6, 26.1);
        e.bezierCurveTo(270.5, 25.9, 270.4, 25.6, 270.4, 25.2);
        e.bezierCurveTo(270.4, 24.9, 270.5, 24.6, 270.6, 24.3);
        e.bezierCurveTo(270.8, 24, 271, 23.8, 271.3, 23.7);
        e.bezierCurveTo(271.6, 23.5, 271.9, 23.4, 272.2, 23.4);
        e.closePath();
        this.graphics = e
    };
    a.Inspiration = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.WHITE.red;
        var b = StyleManager.WHITE.green;
        var c = StyleManager.WHITE.blue;
        var d = StyleManager.WHITE.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(0, 27.1);
        e.lineTo(0, .9);
        e.lineTo(2.4, .9);
        e.lineTo(2.4, 27.1);
        e.lineTo(0, 27.1);
        e.closePath();
        e.moveTo(26.5, 4);
        e.bezierCurveTo(25.7, 3.3, 24.9, 2.9, 24, 2.9);
        e.lineTo(23.9, 2.9);
        e.bezierCurveTo(22.9, 2.9, 22.1, 3.3, 21.4, 4);
        e.bezierCurveTo(20.8, 4.7, 20.4, 5.5, 20.4, 6.4);
        e.bezierCurveTo(20.4, 6.8, 20.6, 7.6, 20.8, 8.8);
        e.lineTo(23.4, 19.1);
        e.bezierCurveTo(23.6, 20.3, 23.8, 21.1, 23.8, 21.5);
        e.bezierCurveTo(23.7, 23.1, 23.2, 24.5, 22, 25.7);
        e.bezierCurveTo(20.9, 26.9, 19.5, 27.5, 17.8, 27.6);
        e.lineTo(17.6, 27.6);
        e.bezierCurveTo(16.1, 27.6, 14.7, 27, 13.4, 25.8);
        e.lineTo(15.2, 23.9);
        e.bezierCurveTo(16, 24.7, 16.8, 25.1, 17.7, 25.1);
        e.lineTo(17.8, 25.1);
        e.bezierCurveTo(18.8, 25.1, 19.6, 24.7, 20.3, 24);
        e.bezierCurveTo(20.9, 23.3, 21.3, 22.5, 21.3, 21.6);
        e.bezierCurveTo(21.3, 21.2, 21.1, 20.5, 20.9, 19.4);
        e.bezierCurveTo(18.9, 11.9, 17.9, 7.6, 17.9, 6.5);
        e.bezierCurveTo(17.9, 4.9, 18.5, 3.5, 19.7, 2.3);
        e.bezierCurveTo(20.8, 1.1, 22.2, .4, 23.8, .4);
        e.lineTo(24.1, .4);
        e.bezierCurveTo(25.6, .4, 27, 1, 28.3, 2.2);
        e.lineTo(26.5, 4);
        e.closePath();
        e.moveTo(59.5, 18.8);
        e.lineTo(56.6, 27.1);
        e.lineTo(54, 27.1);
        e.lineTo(63.5, .2);
        e.lineTo(72.9, 27.1);
        e.lineTo(70.3, 27.1);
        e.lineTo(67.4, 18.8);
        e.lineTo(59.5, 18.8);
        e.closePath();
        e.moveTo(66.6, 16.4);
        e.lineTo(63.5, 7.5);
        e.lineTo(60.4, 16.4);
        e.lineTo(66.6, 16.4);
        e.closePath();
        e.moveTo(122.5, .9);
        e.lineTo(122.5, 27.1);
        e.lineTo(120.1, 27.1);
        e.lineTo(120.1, 7.7);
        e.lineTo(111.8, 22);
        e.lineTo(103.2, 7.7);
        e.lineTo(103.2, 27.1);
        e.lineTo(100.8, 27.1);
        e.lineTo(100.8, .9);
        e.lineTo(102, .9);
        e.lineTo(111.8, 17.3);
        e.lineTo(121.3, .9);
        e.lineTo(122.5, .9);
        e.closePath();
        e.moveTo(159.4, 13.9);
        e.bezierCurveTo(159.4, 17.8, 158, 21.1, 155.3, 23.8);
        e.bezierCurveTo(152.6, 26.5, 149.3, 27.9, 145.5, 27.9);
        e.bezierCurveTo(141.6, 27.9, 138.3, 26.5, 135.6, 23.8);
        e.bezierCurveTo(132.9, 21.1, 131.5, 17.8, 131.5, 13.9);
        e.bezierCurveTo(131.5, 10.1, 132.9, 6.8, 135.6, 4.1);
        e.bezierCurveTo(138.3, 1.4, 141.6, 0, 145.5, 0);
        e.bezierCurveTo(149.3, 0, 152.6, 1.4, 155.3, 4.1);
        e.bezierCurveTo(158, 6.8, 159.4, 10.1, 159.4, 13.9);
        e.closePath();
        e.moveTo(145.5, 2.5);
        e.bezierCurveTo(142.3, 2.5, 139.6, 3.7, 137.4, 5.9);
        e.bezierCurveTo(135.2, 8.1, 134.1, 10.8, 134.1, 13.9);
        e.bezierCurveTo(134.1, 17.1, 135.2, 19.8, 137.4, 22);
        e.bezierCurveTo(139.6, 24.2, 142.3, 25.4, 145.5, 25.4);
        e.bezierCurveTo(148.6, 25.4, 151.3, 24.2, 153.6, 22);
        e.bezierCurveTo(155.8, 19.8, 156.9, 17.1, 156.9, 13.9);
        e.bezierCurveTo(156.9, 10.8, 155.8, 8.1, 153.6, 5.9);
        e.bezierCurveTo(151.3, 3.7, 148.6, 2.5, 145.5, 2.5);
        e.closePath();
        e.moveTo(192.5, .9);
        e.lineTo(192.5, 27.1);
        e.lineTo(190.1, 27.1);
        e.lineTo(190.1, 7.7);
        e.lineTo(181.8, 22);
        e.lineTo(173.2, 7.7);
        e.lineTo(173.2, 27.1);
        e.lineTo(170.8, 27.1);
        e.lineTo(170.8, .9);
        e.lineTo(172, .9);
        e.lineTo(181.8, 17.3);
        e.lineTo(191.3, .9);
        e.lineTo(192.5, .9);
        e.closePath();
        e.moveTo(219.6, .9);
        e.lineTo(219.6, 3.3);
        e.lineTo(207.4, 3.3);
        e.lineTo(207.4, 16.4);
        e.lineTo(211.2, 16.4);
        e.lineTo(211.2, 18.8);
        e.lineTo(207.4, 18.8);
        e.lineTo(207.4, 24.7);
        e.lineTo(219.6, 24.7);
        e.lineTo(219.6, 27.1);
        e.lineTo(205, 27.1);
        e.lineTo(205, .9);
        e.lineTo(219.6, .9);
        e.closePath();
        e.moveTo(244.8, 27.1);
        e.lineTo(233.8, 8);
        e.lineTo(233.8, 27.1);
        e.lineTo(231.4, 27.1);
        e.lineTo(231.4, 1.1);
        e.lineTo(232.5, 1.1);
        e.lineTo(243.6, 20.3);
        e.lineTo(243.6, .9);
        e.lineTo(246, .9);
        e.lineTo(246, 27.1);
        e.lineTo(244.8, 27.1);
        e.closePath();
        e.moveTo(263.8, 3.3);
        e.lineTo(263.8, 27.1);
        e.lineTo(261.5, 27.1);
        e.lineTo(261.5, 3.3);
        e.lineTo(257.8, 3.3);
        e.lineTo(257.8, .9);
        e.lineTo(267.5, .9);
        e.lineTo(267.5, 3.3);
        e.lineTo(263.8, 3.3);
        e.closePath();
        e.moveTo(323.3, 13.9);
        e.bezierCurveTo(323.3, 17.8, 321.9, 21.1, 319.2, 23.8);
        e.bezierCurveTo(316.4, 26.5, 313.2, 27.9, 309.3, 27.9);
        e.bezierCurveTo(305.5, 27.9, 302.2, 26.5, 299.5, 23.8);
        e.bezierCurveTo(296.7, 21.1, 295.4, 17.8, 295.4, 13.9);
        e.bezierCurveTo(295.4, 10.1, 296.7, 6.8, 299.5, 4.1);
        e.bezierCurveTo(302.2, 1.4, 305.5, 0, 309.3, 0);
        e.bezierCurveTo(313.2, 0, 316.4, 1.4, 319.2, 4.1);
        e.bezierCurveTo(321.9, 6.8, 323.3, 10.1, 323.3, 13.9);
        e.closePath();
        e.moveTo(309.3, 2.5);
        e.bezierCurveTo(306.2, 2.5, 303.5, 3.7, 301.3, 5.9);
        e.bezierCurveTo(299, 8.1, 297.9, 10.8, 297.9, 13.9);
        e.bezierCurveTo(297.9, 17.1, 299, 19.8, 301.3, 22);
        e.bezierCurveTo(303.5, 24.2, 306.2, 25.4, 309.3, 25.4);
        e.bezierCurveTo(312.5, 25.4, 315.2, 24.2, 317.4, 22);
        e.bezierCurveTo(319.6, 19.8, 320.8, 17.1, 320.8, 13.9);
        e.bezierCurveTo(320.8, 10.8, 319.6, 8.1, 317.4, 5.9);
        e.bezierCurveTo(315.2, 3.7, 312.5, 2.5, 309.3, 2.5);
        e.closePath();
        e.moveTo(338.5, 18.8);
        e.lineTo(338.5, 27.1);
        e.lineTo(336.1, 27.1);
        e.lineTo(336.1, .9);
        e.lineTo(345.7, .9);
        e.lineTo(345.7, 3.3);
        e.lineTo(338.5, 3.3);
        e.lineTo(338.5, 16.4);
        e.lineTo(342.2, 16.4);
        e.lineTo(342.2, 18.8);
        e.lineTo(338.5, 18.8);
        e.closePath();
        this.graphics = e
    };
    a.MomentOf = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.ORANGE.red;
        var b = StyleManager.ORANGE.green;
        var c = StyleManager.ORANGE.blue;
        var d = StyleManager.ORANGE.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(55.2, 61.2);
        e.bezierCurveTo(53.6, 61.2, 52.3, 60.6, 51.4, 59.3);
        e.bezierCurveTo(50.5, 58.1, 50, 56.6, 50, 54.9);
        e.lineTo(50, 53.4);
        e.bezierCurveTo(44.4, 59.3, 37.7, 62.2, 29.8, 62.2);
        e.bezierCurveTo(21.8, 62.2, 15.1, 59.3, 9.6, 53.3);
        e.bezierCurveTo(4.2, 47.5, 1.5, 40.5, 1.5, 32.5);
        e.bezierCurveTo(1.5, 24.5, 4.2, 17.5, 9.7, 11.6);
        e.bezierCurveTo(15.1, 5.7, 21.8, 2.7, 29.8, 2.7);
        e.bezierCurveTo(38.1, 2.7, 45.1, 6, 50.8, 12.5);
        e.bezierCurveTo(52.1, 13.9, 53, 15.2, 53.6, 16.1);
        e.bezierCurveTo(53.8, 16.4, 53.8, 16.8, 53.8, 17.2);
        e.lineTo(53.8, 54.9);
        e.bezierCurveTo(53.8, 56.6, 54.3, 57.4, 55.1, 57.4);
        e.bezierCurveTo(55.6, 57.4, 56.1, 56.9, 56.5, 55.9);
        e.bezierCurveTo(56.9, 54.9, 57.5, 54.4, 58.3, 54.4);
        e.bezierCurveTo(59.6, 54.4, 60.3, 55, 60.3, 56.3);
        e.bezierCurveTo(60.3, 57.5, 59.7, 58.6, 58.6, 59.6);
        e.bezierCurveTo(57.5, 60.7, 56.4, 61.2, 55.2, 61.2);
        e.closePath();
        e.moveTo(50, 47.2);
        e.lineTo(50, 17.8);
        e.bezierCurveTo(47.7, 14.4, 44.7, 11.6, 41.2, 9.6);
        e.bezierCurveTo(37.7, 7.6, 33.9, 6.6, 29.8, 6.6);
        e.bezierCurveTo(22.9, 6.6, 17.1, 9.1, 12.4, 14.3);
        e.bezierCurveTo(7.7, 19.5, 5.3, 25.6, 5.3, 32.5);
        e.bezierCurveTo(5.3, 39.5, 7.6, 45.5, 12.3, 50.6);
        e.bezierCurveTo(17, 55.8, 22.9, 58.4, 29.8, 58.4);
        e.bezierCurveTo(33.9, 58.4, 37.7, 57.4, 41.2, 55.4);
        e.bezierCurveTo(44.7, 53.4, 47.7, 50.7, 50, 47.2);
        e.closePath();
        e.moveTo(71.4, 59.3);
        e.bezierCurveTo(71.4, 60.6, 70.8, 61.2, 69.5, 61.2);
        e.lineTo(66.5, 61.2);
        e.bezierCurveTo(65.3, 61.2, 64.6, 60.6, 64.6, 59.3);
        e.bezierCurveTo(64.6, 58, 65.2, 57.4, 66.5, 57.4);
        e.lineTo(67.6, 57.4);
        e.lineTo(67.6, 7.3);
        e.lineTo(66.5, 7.3);
        e.bezierCurveTo(65.3, 7.3, 64.6, 6.6, 64.6, 5.3);
        e.bezierCurveTo(64.6, 4.1, 65.2, 3.4, 66.5, 3.4);
        e.lineTo(69.5, 3.4);
        e.bezierCurveTo(70, 3.4, 70.5, 3.6, 70.9, 4);
        e.lineTo(89, 23.3);
        e.lineTo(89, 5.3);
        e.bezierCurveTo(89, 4.1, 89.6, 3.4, 90.9, 3.4);
        e.lineTo(93.9, 3.4);
        e.bezierCurveTo(95.1, 3.4, 95.8, 4.1, 95.8, 5.3);
        e.bezierCurveTo(95.8, 6.6, 95.2, 7.3, 93.9, 7.3);
        e.lineTo(92.8, 7.3);
        e.lineTo(92.8, 57.4);
        e.lineTo(93.9, 57.4);
        e.bezierCurveTo(95.1, 57.4, 95.8, 58, 95.8, 59.3);
        e.bezierCurveTo(95.8, 60.6, 95.2, 61.2, 93.9, 61.2);
        e.lineTo(90.9, 61.2);
        e.bezierCurveTo(89.6, 61.2, 89, 60.6, 89, 59.3);
        e.lineTo(89, 28.9);
        e.lineTo(71.4, 10.1);
        e.lineTo(71.4, 59.3);
        e.closePath();
        e.moveTo(101.8, 55);
        e.lineTo(101.8, 11.2);
        e.lineTo(101.5, 11.2);
        e.bezierCurveTo(101, 11.2, 100.5, 11, 100.1, 10.6);
        e.bezierCurveTo(99.7, 10.2, 99.5, 9.7, 99.5, 9.2);
        e.bezierCurveTo(99.5, 8.6, 99.8, 8.2, 100.4, 7.7);
        e.bezierCurveTo(104.5, 4.4, 109.6, 2.7, 115.7, 2.7);
        e.bezierCurveTo(123.1, 2.7, 129.3, 5.5, 134.3, 11.2);
        e.bezierCurveTo(139, 16.6, 141.4, 23, 141.4, 30.5);
        e.bezierCurveTo(141.4, 38.6, 138.7, 45.7, 133.3, 51.7);
        e.bezierCurveTo(127.7, 58, 121, 61.2, 113.1, 61.2);
        e.bezierCurveTo(108.4, 61.2, 104.6, 60.3, 101.7, 58.4);
        e.bezierCurveTo(101, 58, 100.6, 57.5, 100.6, 56.8);
        e.bezierCurveTo(100.6, 56, 101, 55.4, 101.8, 55);
        e.closePath();
        e.moveTo(105.6, 9.1);
        e.lineTo(105.6, 56.1);
        e.bezierCurveTo(107.9, 56.9, 110.4, 57.4, 113.1, 57.4);
        e.bezierCurveTo(120, 57.4, 125.8, 54.6, 130.6, 49.1);
        e.bezierCurveTo(135.3, 43.8, 137.6, 37.7, 137.6, 30.7);
        e.bezierCurveTo(137.6, 24.2, 135.6, 18.6, 131.6, 14);
        e.bezierCurveTo(127.3, 9, 122, 6.6, 115.7, 6.6);
        e.bezierCurveTo(112.2, 6.6, 108.9, 7.4, 105.6, 9.1);
        e.closePath();
        this.graphics = e
    };
    a.And_2 = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.BLUE.red;
        var b = StyleManager.BLUE.green;
        var c = StyleManager.BLUE.blue;
        var d = StyleManager.BLUE.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(97.7, 72);
        e.bezierCurveTo(94, 76, 89.3, 79.1, 83.7, 81.1);
        e.bezierCurveTo(92.5, 83.7, 99.6, 88.4, 104.8, 95.3);
        e.bezierCurveTo(110.1, 102.3, 112.7, 109.8, 112.7, 117.7);
        e.bezierCurveTo(112.7, 118.3, 112.7, 119, 112.7, 119.6);
        e.bezierCurveTo(112.7, 120.3, 112.6, 120.9, 112.5, 121.5);
        e.bezierCurveTo(112, 125.4, 110.9, 129.1, 109.1, 132.8);
        e.bezierCurveTo(107.2, 136.5, 104.6, 140.1, 101.2, 143.5);
        e.bezierCurveTo(96.4, 148.1, 91.4, 151, 86, 152.3);
        e.bezierCurveTo(80.6, 153.7, 74.8, 154.3, 68.6, 154.3);
        e.bezierCurveTo(60.6, 154.3, 52.6, 154.3, 44.7, 154.3);
        e.bezierCurveTo(36.8, 154.3, 28.9, 154.3, 21.1, 154.3);
        e.lineTo(21.1, 147.9);
        e.lineTo(37.1, 147.9);
        e.lineTo(37.1, 119.3);
        e.bezierCurveTo(27, 115.7, 18.9, 109.5, 12.8, 100.5);
        e.bezierCurveTo(6.6, 91.6, 3.6, 81.7, 3.6, 70.9);
        e.bezierCurveTo(3.6, 55.8, 8.5, 43.5, 18.4, 33.8);
        e.bezierCurveTo(28.3, 24.1, 40.8, 19.4, 55.9, 19.7);
        e.bezierCurveTo(58.1, 16.4, 60.6, 13.3, 63.2, 10.4);
        e.bezierCurveTo(65.9, 7.4, 68.6, 4.7, 71.4, 2.2);
        e.lineTo(75.9, 6.8);
        e.bezierCurveTo(73.7, 8.7, 71.8, 10.8, 70.2, 13.1);
        e.bezierCurveTo(68.7, 15.4, 67.2, 17.8, 65.7, 20.3);
        e.bezierCurveTo(76.2, 21.5, 85.1, 24.9, 92.4, 30.4);
        e.bezierCurveTo(99.7, 36, 103.4, 44.7, 103.4, 56.5);
        e.bezierCurveTo(103.4, 62.9, 101.5, 68, 97.7, 72);
        e.closePath();
        e.moveTo(50.6, 26.6);
        e.bezierCurveTo(50.3, 26.6, 50, 26.6, 49.7, 26.6);
        e.bezierCurveTo(49.4, 26.6, 49.1, 26.6, 48.8, 26.6);
        e.bezierCurveTo(48.5, 26.6, 48.2, 26.6, 47.9, 26.6);
        e.bezierCurveTo(35.5, 28, 26, 33.2, 19.5, 42.1);
        e.bezierCurveTo(13, 51, 9.9, 60.7, 10, 71.2);
        e.bezierCurveTo(10, 71.3, 10, 71.5, 10, 71.7);
        e.bezierCurveTo(10, 71.9, 10, 72.1, 10, 72.3);
        e.bezierCurveTo(10.1, 80.5, 12.5, 88.4, 17, 95.9);
        e.bezierCurveTo(21.5, 103.4, 28.2, 108.9, 37.1, 112.6);
        e.bezierCurveTo(37.1, 107, 37.1, 101.4, 37.1, 95.9);
        e.bezierCurveTo(37.1, 90.3, 37.1, 84.8, 37.1, 79.4);
        e.bezierCurveTo(37.1, 70, 38.3, 60.9, 40.8, 52);
        e.bezierCurveTo(43.3, 43, 46.9, 34.5, 51.5, 26.6);
        e.bezierCurveTo(51.2, 26.6, 50.9, 26.6, 50.6, 26.6);
        e.closePath();
        e.moveTo(44.9, 62.5);
        e.bezierCurveTo(44, 68, 43.5, 73.6, 43.5, 79.4);
        e.bezierCurveTo(43.5, 90.7, 43.5, 102.2, 43.5, 113.6);
        e.bezierCurveTo(43.5, 125.1, 43.5, 136.5, 43.5, 147.9);
        e.lineTo(47, 147.9);
        e.bezierCurveTo(47.2, 133.6, 47.3, 122, 47.3, 113.3);
        e.bezierCurveTo(47.3, 105.6, 47.3, 98.4, 47.3, 91.8);
        e.bezierCurveTo(47.3, 85.1, 47.3, 81, 47.3, 79.4);
        e.bezierCurveTo(47.3, 73, 47.4, 67.2, 47.6, 61.9);
        e.bezierCurveTo(47.8, 56.7, 48.3, 51.6, 49, 46.7);
        e.bezierCurveTo(47.3, 51.8, 45.9, 57, 44.9, 62.5);
        e.closePath();
        e.moveTo(93.9, 128.5);
        e.bezierCurveTo(95.2, 124.7, 95.9, 120.9, 95.9, 117.1);
        e.bezierCurveTo(95.9, 109.1, 93.3, 101.8, 88.1, 95.3);
        e.bezierCurveTo(82.9, 88.8, 75.7, 85.6, 66.6, 85.6);
        e.bezierCurveTo(64.4, 85.6, 62.2, 85.6, 60, 85.6);
        e.bezierCurveTo(57.9, 85.6, 55.8, 85.6, 53.7, 85.6);
        e.lineTo(53.7, 115.7);
        e.bezierCurveTo(58, 115.7, 62.2, 115.1, 66.5, 113.7);
        e.bezierCurveTo(70.7, 112.4, 74.6, 110.5, 78.1, 108);
        e.lineTo(81.9, 113.1);
        e.bezierCurveTo(77.7, 115.9, 73.3, 118.1, 68.5, 119.7);
        e.bezierCurveTo(63.6, 121.4, 58.7, 122.2, 53.7, 122.2);
        e.lineTo(53.5, 147.9);
        e.bezierCurveTo(54.4, 147.9, 55.3, 147.9, 56.1, 147.9);
        e.bezierCurveTo(57, 147.9, 57.8, 147.9, 58.6, 147.9);
        e.bezierCurveTo(59.5, 148.1, 60.3, 148.1, 61.1, 148.1);
        e.bezierCurveTo(61.9, 148.1, 62.8, 148.1, 63.7, 148.1);
        e.bezierCurveTo(68.1, 148.1, 72.4, 147.6, 76.4, 146.6);
        e.bezierCurveTo(80.5, 145.5, 84.2, 143, 87.6, 139);
        e.bezierCurveTo(90.5, 135.8, 92.5, 132.3, 93.9, 128.5);
        e.closePath();
        e.moveTo(78.8, 36.5);
        e.bezierCurveTo(74.3, 32.3, 68.6, 29.4, 61.7, 27.9);
        e.bezierCurveTo(57.8, 36, 55.5, 44.3, 54.8, 52.8);
        e.bezierCurveTo(54.1, 61.4, 53.7, 70, 53.7, 78.9);
        e.bezierCurveTo(62.6, 78.9, 70.1, 77.3, 76.2, 74);
        e.bezierCurveTo(82.4, 70.8, 85.4, 64.2, 85.4, 54.3);
        e.bezierCurveTo(85.4, 46.7, 83.2, 40.8, 78.8, 36.5);
        e.closePath();
        e.moveTo(94.6, 64.9);
        e.bezierCurveTo(96.2, 61.8, 97, 58.6, 97, 55.2);
        e.bezierCurveTo(97, 54.6, 96.9, 54, 96.9, 53.5);
        e.bezierCurveTo(96.8, 53, 96.7, 52.5, 96.7, 52.1);
        e.bezierCurveTo(96.1, 48.1, 94.7, 44.3, 92.3, 40.6);
        e.bezierCurveTo(89.9, 37, 86.9, 34.2, 83.2, 32.1);
        e.bezierCurveTo(85.9, 34.8, 87.9, 38.1, 89.4, 42);
        e.bezierCurveTo(90.9, 45.9, 91.7, 49.9, 91.9, 54.1);
        e.bezierCurveTo(91.9, 54.4, 91.9, 54.7, 91.9, 55);
        e.bezierCurveTo(91.9, 55.3, 91.9, 55.5, 91.9, 55.8);
        e.bezierCurveTo(91.9, 58.9, 91.4, 61.9, 90.6, 64.8);
        e.bezierCurveTo(89.8, 67.7, 88.6, 70.3, 87, 72.7);
        e.bezierCurveTo(90.5, 70.6, 93.1, 68, 94.6, 64.9);
        e.closePath();
        e.moveTo(100.6, 105);
        e.bezierCurveTo(101.7, 108.9, 102.3, 112.9, 102.3, 116.9);
        e.bezierCurveTo(102.3, 121.1, 101.6, 125.4, 100.3, 129.5);
        e.bezierCurveTo(99, 133.6, 97, 137.4, 94.3, 140.8);
        e.bezierCurveTo(98.3, 137.7, 101.3, 134, 103.3, 129.8);
        e.bezierCurveTo(105.3, 125.6, 106.3, 121.3, 106.3, 116.9);
        e.bezierCurveTo(106.3, 116.6, 106.3, 116.2, 106.3, 115.9);
        e.bezierCurveTo(106.3, 115.5, 106.3, 115.2, 106.3, 114.9);
        e.bezierCurveTo(106, 111, 104.9, 107.3, 103.2, 103.8);
        e.bezierCurveTo(101.4, 100.2, 98.8, 97, 95.4, 94.2);
        e.bezierCurveTo(97.8, 97.5, 99.5, 101.1, 100.6, 105);
        e.closePath();
        e.moveTo(185.6, 146.8);
        e.bezierCurveTo(177.7, 151.8, 169.1, 154.3, 160, 154.3);
        e.bezierCurveTo(154.5, 154.3, 149.1, 153.4, 143.8, 151.6);
        e.bezierCurveTo(138.4, 149.7, 133.6, 146.9, 129.3, 143.2);
        e.bezierCurveTo(125.5, 139.8, 122.5, 136.1, 120.5, 132);
        e.bezierCurveTo(118.4, 128, 117.2, 123.9, 116.9, 119.7);
        e.bezierCurveTo(116.8, 119.3, 116.7, 118.8, 116.7, 118.2);
        e.bezierCurveTo(116.7, 117.6, 116.7, 117.1, 116.7, 116.6);
        e.bezierCurveTo(116.7, 109.1, 119.1, 102, 123.8, 95.4);
        e.bezierCurveTo(128.5, 88.9, 135, 84, 143.1, 80.9);
        e.bezierCurveTo(137.9, 78.5, 133.5, 75.1, 129.9, 70.6);
        e.bezierCurveTo(126.3, 66.1, 124.5, 60.9, 124.5, 55);
        e.bezierCurveTo(124.5, 46.2, 127.8, 39.2, 134.6, 34);
        e.bezierCurveTo(141.3, 28.7, 148.6, 25.9, 156.6, 25.5);
        e.bezierCurveTo(157.1, 25.5, 157.5, 25.5, 157.9, 25.5);
        e.bezierCurveTo(158.2, 25.5, 158.6, 25.5, 159.1, 25.5);
        e.bezierCurveTo(165.6, 25.5, 171.6, 27.2, 177.2, 30.7);
        e.bezierCurveTo(182.7, 34.1, 186.2, 39.8, 187.7, 47.6);
        e.bezierCurveTo(187.8, 48.1, 187.9, 48.5, 187.9, 49);
        e.bezierCurveTo(187.9, 49.4, 187.9, 49.9, 187.9, 50.3);
        e.bezierCurveTo(187.9, 52.5, 187.3, 54.2, 186, 55.4);
        e.bezierCurveTo(184.8, 56.6, 183.3, 57.2, 181.5, 57.2);
        e.bezierCurveTo(180.9, 57.2, 180.3, 57.1, 179.8, 57);
        e.bezierCurveTo(179.3, 56.8, 178.7, 56.6, 178.2, 56.3);
        e.bezierCurveTo(177.3, 56, 176.5, 55.5, 175.7, 55);
        e.bezierCurveTo(175, 54.4, 174.3, 53.6, 173.7, 52.7);
        e.bezierCurveTo(173.3, 52, 172.9, 51.2, 172.5, 50.3);
        e.bezierCurveTo(172.1, 49.4, 171.9, 48.5, 171.7, 47.4);
        e.bezierCurveTo(171.6, 47.1, 171.5, 46.8, 171.5, 46.5);
        e.bezierCurveTo(171.5, 46.2, 171.5, 45.9, 171.5, 45.6);
        e.bezierCurveTo(171.5, 44, 171.9, 42.6, 172.8, 41.3);
        e.bezierCurveTo(173.7, 40.1, 175.2, 39.4, 177.3, 39.2);
        e.bezierCurveTo(175.2, 36.7, 172.7, 34.8, 169.7, 33.7);
        e.bezierCurveTo(166.8, 32.5, 163.7, 31.8, 160.4, 31.7);
        e.bezierCurveTo(160.1, 31.7, 159.9, 31.7, 159.6, 31.7);
        e.bezierCurveTo(159.4, 31.7, 159.1, 31.7, 158.9, 31.7);
        e.bezierCurveTo(152.8, 31.8, 148.2, 34.1, 145.2, 38.5);
        e.bezierCurveTo(142.2, 43, 140.7, 47.9, 140.7, 53.4);
        e.bezierCurveTo(140.7, 53.7, 140.7, 54, 140.7, 54.3);
        e.bezierCurveTo(140.7, 54.6, 140.7, 54.9, 140.7, 55.2);
        e.bezierCurveTo(140.8, 58.1, 141.4, 61, 142.5, 63.7);
        e.bezierCurveTo(143.7, 66.5, 145.2, 68.9, 147.3, 70.9);
        e.bezierCurveTo(148.8, 72.4, 150.6, 73.8, 152.9, 75.1);
        e.bezierCurveTo(155.1, 76.5, 157.4, 77.4, 159.7, 77.8);
        e.bezierCurveTo(160.3, 77.8, 160.9, 77.8, 161.5, 77.9);
        e.bezierCurveTo(162.1, 78, 162.7, 78, 163.3, 78);
        e.bezierCurveTo(163.6, 78, 163.8, 78, 164.1, 78);
        e.bezierCurveTo(164.3, 78, 164.5, 78, 164.6, 78);
        e.lineTo(178.2, 78);
        e.lineTo(178.2, 84.5);
        e.bezierCurveTo(177.4, 84.5, 176.7, 84.5, 175.9, 84.5);
        e.bezierCurveTo(175.2, 84.5, 174.5, 84.5, 173.9, 84.5);
        e.bezierCurveTo(168.2, 84.3, 162.7, 84.6, 157.6, 85.3);
        e.bezierCurveTo(152.5, 86.1, 147.6, 88.9, 142.9, 93.8);
        e.bezierCurveTo(140.1, 96.6, 137.9, 100, 136.4, 104);
        e.bezierCurveTo(135, 108, 134.2, 112, 134, 116);
        e.bezierCurveTo(134, 116.4, 134, 116.8, 134, 117.1);
        e.bezierCurveTo(134, 117.4, 134, 117.7, 134, 118);
        e.bezierCurveTo(134, 125.5, 136.2, 132.4, 140.6, 138.6);
        e.bezierCurveTo(144.9, 144.8, 151.4, 147.9, 160, 147.9);
        e.bezierCurveTo(168.2, 147.9, 175.6, 145.8, 182, 141.7);
        e.bezierCurveTo(188.5, 137.6, 192.7, 131.3, 194.8, 122.8);
        e.lineTo(201, 124.4);
        e.bezierCurveTo(198.6, 134.3, 193.5, 141.8, 185.6, 146.8);
        e.closePath();
        e.moveTo(126.6, 102.8);
        e.bezierCurveTo(124.3, 107.1, 123.1, 111.7, 123.1, 116.4);
        e.bezierCurveTo(123.1, 117, 123.2, 117.6, 123.2, 118.2);
        e.bezierCurveTo(123.3, 118.8, 123.4, 119.4, 123.4, 120);
        e.bezierCurveTo(123.8, 122.9, 124.7, 125.8, 126.1, 128.7);
        e.bezierCurveTo(127.5, 131.6, 129.5, 134.4, 132, 137);
        e.bezierCurveTo(130.5, 134.1, 129.4, 130.9, 128.7, 127.5);
        e.bezierCurveTo(127.9, 124.1, 127.6, 120.7, 127.6, 117.3);
        e.bezierCurveTo(127.6, 112.6, 128.3, 108, 129.8, 103.5);
        e.bezierCurveTo(131.3, 99.1, 133.4, 95.1, 136.2, 91.6);
        e.bezierCurveTo(132.1, 94.7, 128.9, 98.4, 126.6, 102.8);
        e.closePath();
        e.moveTo(135.9, 64.4);
        e.bezierCurveTo(135.1, 61.9, 134.6, 59.5, 134.4, 57);
        e.bezierCurveTo(134.3, 56.4, 134.2, 55.8, 134.2, 55.3);
        e.bezierCurveTo(134.2, 54.8, 134.2, 54.3, 134.2, 53.8);
        e.bezierCurveTo(134.2, 51.6, 134.4, 49.4, 134.9, 47.2);
        e.bezierCurveTo(135.3, 45, 135.9, 42.9, 136.7, 41);
        e.bezierCurveTo(135.2, 42.6, 134, 44.3, 133.1, 46);
        e.bezierCurveTo(132.2, 47.7, 131.6, 49.4, 131.3, 51.2);
        e.bezierCurveTo(131.2, 51.8, 131.1, 52.4, 131, 53);
        e.bezierCurveTo(130.9, 53.6, 130.9, 54.1, 130.9, 54.7);
        e.bezierCurveTo(131, 57.7, 131.8, 60.6, 133.2, 63.5);
        e.bezierCurveTo(134.6, 66.4, 136.7, 68.9, 139.3, 71.2);
        e.bezierCurveTo(137.9, 69.1, 136.7, 66.8, 135.9, 64.4);
        e.closePath();
        e.moveTo(225.8, 34.5);
        e.bezierCurveTo(225.1, 33.8, 224.3, 33.2, 223.3, 32.7);
        e.bezierCurveTo(222.3, 32.1, 221.3, 31.9, 220.1, 31.9);
        e.bezierCurveTo(219.9, 31.9, 219.8, 31.9, 219.7, 31.9);
        e.bezierCurveTo(219.7, 31.9, 219.6, 31.9, 219.4, 31.9);
        e.lineTo(219.4, 123.3);
        e.bezierCurveTo(219.4, 123.6, 219.5, 123.8, 219.7, 124.1);
        e.bezierCurveTo(220, 124.3, 220.2, 124.4, 220.5, 124.4);
        e.bezierCurveTo(220.7, 124.4, 220.8, 124.3, 221, 124.2);
        e.bezierCurveTo(221.3, 124, 221.5, 123.8, 221.7, 123.6);
        e.bezierCurveTo(222, 123.4, 222.1, 123.1, 222.3, 122.8);
        e.lineTo(225.4, 128.8);
        e.bezierCurveTo(224.2, 129.9, 223, 130.6, 221.6, 131);
        e.bezierCurveTo(220.3, 131.5, 218.8, 131.7, 217.2, 131.7);
        e.bezierCurveTo(213.5, 131.7, 210.4, 130.5, 207.9, 127.9);
        e.bezierCurveTo(205.4, 125.4, 204.1, 122.4, 204.1, 118.8);
        e.lineTo(204.1, 41);
        e.bezierCurveTo(204.1, 36.7, 205.6, 33, 208.7, 30);
        e.bezierCurveTo(211.7, 27, 215.3, 25.5, 219.4, 25.5);
        e.bezierCurveTo(221.5, 25.5, 223.5, 25.8, 225.4, 26.6);
        e.bezierCurveTo(227.3, 27.3, 229, 28.4, 230.5, 29.9);
        e.lineTo(225.8, 34.5);
        e.closePath();
        e.moveTo(221, 153.1);
        e.bezierCurveTo(219, 155, 216.8, 155.9, 214.1, 155.9);
        e.bezierCurveTo(211.3, 155.9, 208.9, 155, 207, 153.1);
        e.bezierCurveTo(205.1, 151.3, 204.1, 149, 204.1, 146.4);
        e.bezierCurveTo(204.1, 143.5, 205.1, 141.2, 207, 139.3);
        e.bezierCurveTo(208.9, 137.3, 211.3, 136.4, 214.1, 136.4);
        e.bezierCurveTo(216.8, 136.4, 219, 137.3, 221, 139.3);
        e.bezierCurveTo(222.9, 141.2, 223.9, 143.5, 223.9, 146.4);
        e.bezierCurveTo(223.9, 149, 222.9, 151.3, 221, 153.1);
        e.closePath();
        e.moveTo(213, 123.6);
        e.bezierCurveTo(213, 123.5, 213, 123.4, 213, 123.3);
        e.lineTo(213, 34.8);
        e.bezierCurveTo(212.2, 35.5, 211.6, 36.4, 211.2, 37.5);
        e.bezierCurveTo(210.8, 38.7, 210.5, 39.8, 210.5, 41);
        e.lineTo(210.5, 118.8);
        e.bezierCurveTo(210.5, 119.9, 210.8, 120.8, 211.2, 121.6);
        e.bezierCurveTo(211.6, 122.4, 212.2, 123.2, 213, 123.9);
        e.bezierCurveTo(213, 123.8, 213, 123.7, 213, 123.6);
        e.closePath();
        e.moveTo(216.4, 143.8);
        e.bezierCurveTo(215.8, 143.1, 215, 142.8, 214.1, 142.8);
        e.bezierCurveTo(213.1, 142.8, 212.2, 143.1, 211.5, 143.8);
        e.bezierCurveTo(210.9, 144.5, 210.5, 145.3, 210.5, 146.4);
        e.bezierCurveTo(210.5, 147.2, 210.9, 148, 211.5, 148.7);
        e.bezierCurveTo(212.2, 149.4, 213.1, 149.7, 214.1, 149.7);
        e.bezierCurveTo(215, 149.7, 215.8, 149.4, 216.4, 148.7);
        e.bezierCurveTo(217.1, 148, 217.4, 147.2, 217.4, 146.4);
        e.bezierCurveTo(217.4, 145.3, 217.1, 144.5, 216.4, 143.8);
        e.closePath();
        this.graphics = e
    };
    a.Be = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.YELLOW.red;
        var b = StyleManager.YELLOW.green;
        var c = StyleManager.YELLOW.blue;
        var d = StyleManager.YELLOW.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(44.4, 147.2);
        e.lineTo(16.8, 147.2);
        e.lineTo(16.8, 218.6);
        e.lineTo(2.6, 218.6);
        e.lineTo(2.6, 26.7);
        e.bezierCurveTo(2.6, 19.9, 4.5, 14.1, 8.2, 9.2);
        e.bezierCurveTo(12.4, 3.7, 17.5, 1, 23.7, 1);
        e.lineTo(44.4, 1);
        e.lineTo(44.4, 13.8);
        e.lineTo(44.4, 14.8);
        e.lineTo(23.7, 14.8);
        e.bezierCurveTo(21.9, 14.8, 20.3, 16, 18.9, 18.3);
        e.bezierCurveTo(17.5, 20.6, 16.8, 23.5, 16.8, 27);
        e.lineTo(16.8, 133);
        e.lineTo(44.4, 133);
        e.lineTo(44.4, 147.2);
        e.closePath();
        e.moveTo(62.5, 218.6);
        e.lineTo(62.5, 1);
        e.lineTo(76.7, 1);
        e.lineTo(76.7, 218.6);
        e.lineTo(62.5, 218.6);
        e.closePath();
        e.moveTo(133.7, 15.2);
        e.lineTo(119.8, 15.2);
        e.lineTo(119.8, 218.6);
        e.lineTo(106, 218.6);
        e.lineTo(106, 15.2);
        e.lineTo(91.8, 15.2);
        e.lineTo(91.8, 1);
        e.lineTo(133.7, 1);
        e.lineTo(133.7, 15.2);
        e.closePath();
        e.moveTo(193.6, 1);
        e.lineTo(193.6, 14.8);
        e.bezierCurveTo(189.9, 15.1, 186.6, 15.2, 183.7, 15.2);
        e.lineTo(172.8, 15.2);
        e.bezierCurveTo(171.1, 15.2, 169.5, 16.3, 168.1, 18.5);
        e.bezierCurveTo(166.6, 20.6, 165.9, 23.5, 165.9, 27);
        e.lineTo(165.9, 32);
        e.lineTo(165.9, 190);
        e.lineTo(165.9, 192.6);
        e.bezierCurveTo(165.9, 195.9, 166.6, 198.7, 168.1, 201);
        e.bezierCurveTo(169.5, 203.3, 171.1, 204.5, 172.8, 204.5);
        e.lineTo(193.6, 204.5);
        e.lineTo(193.6, 218.6);
        e.lineTo(172.8, 218.6);
        e.bezierCurveTo(169.8, 218.6, 166.9, 217.9, 164.1, 216.5);
        e.bezierCurveTo(161.4, 215.1, 159.1, 213, 157.4, 210.4);
        e.bezierCurveTo(153.6, 204.9, 151.8, 199.1, 151.8, 193);
        e.lineTo(151.8, 190);
        e.lineTo(151.8, 32);
        e.lineTo(151.8, 26.7);
        e.bezierCurveTo(151.8, 20.1, 153.6, 14.3, 157.4, 9.2);
        e.bezierCurveTo(159.1, 6.6, 161.4, 4.6, 164.1, 3.1);
        e.bezierCurveTo(166.9, 1.7, 169.8, 1, 172.8, 1);
        e.lineTo(193.6, 1);
        e.closePath();
        this.graphics = e
    };
    a.Fitc_3 = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.WHITE.red;
        var b = StyleManager.WHITE.green;
        var c = StyleManager.WHITE.blue;
        var d = StyleManager.WHITE.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(17.9, 1.5);
        e.lineTo(17.9, 94.8);
        e.lineTo(12, 94.8);
        e.lineTo(12, 64.2);
        e.lineTo(6.1, 64.2);
        e.lineTo(6.1, 94.8);
        e.lineTo(0, 94.8);
        e.lineTo(0, 1.5);
        e.lineTo(6.1, 1.5);
        e.lineTo(6.1, 57.9);
        e.lineTo(12, 57.9);
        e.lineTo(12, 1.5);
        e.lineTo(17.9, 1.5);
        e.closePath();
        e.moveTo(31.7, 82.5);
        e.lineTo(31.7, 83.6);
        e.bezierCurveTo(31.7, 85, 32, 86.2, 32.6, 87.2);
        e.bezierCurveTo(33.3, 88.2, 33.9, 88.7, 34.7, 88.7);
        e.lineTo(43.6, 88.7);
        e.lineTo(43.6, 94.8);
        e.lineTo(34.7, 94.8);
        e.bezierCurveTo(32.1, 94.8, 29.8, 93.6, 28.1, 91.2);
        e.bezierCurveTo(26.6, 89.2, 25.8, 86.7, 25.7, 83.8);
        e.lineTo(25.7, 82.5);
        e.lineTo(25.7, 14.8);
        e.lineTo(25.7, 12.5);
        e.bezierCurveTo(25.8, 9.5, 26.6, 7, 28.1, 5.1);
        e.bezierCurveTo(29.8, 2.7, 32.1, 1.5, 34.7, 1.5);
        e.lineTo(43.6, 1.5);
        e.lineTo(43.6, 7.2);
        e.lineTo(43.6, 7.5);
        e.bezierCurveTo(42, 7.6, 40.6, 7.6, 39.3, 7.6);
        e.lineTo(34.7, 7.6);
        e.bezierCurveTo(33.9, 7.6, 33.3, 8.1, 32.6, 9);
        e.bezierCurveTo(32, 10, 31.7, 11.2, 31.7, 12.7);
        e.lineTo(31.7, 14.8);
        e.lineTo(31.7, 57.9);
        e.lineTo(43.9, 57.9);
        e.lineTo(43.9, 64.2);
        e.lineTo(31.7, 64.2);
        e.lineTo(31.7, 82.5);
        e.closePath();
        e.moveTo(69.5, 88.7);
        e.lineTo(69.5, 94.8);
        e.lineTo(60.5, 94.8);
        e.bezierCurveTo(57.9, 94.8, 55.6, 93.6, 53.9, 91.2);
        e.bezierCurveTo(52.4, 89, 51.6, 86.5, 51.6, 83.8);
        e.lineTo(51.6, 1.5);
        e.lineTo(57.7, 1.5);
        e.lineTo(57.7, 83.6);
        e.bezierCurveTo(57.7, 85, 58, 86.2, 58.6, 87.2);
        e.bezierCurveTo(59.2, 88.2, 59.8, 88.7, 60.5, 88.7);
        e.lineTo(69.5, 88.7);
        e.closePath();
        e.moveTo(93.8, 53.2);
        e.bezierCurveTo(93.8, 55.9, 93, 58.4, 91.5, 60.6);
        e.bezierCurveTo(89.6, 63.1, 87.4, 64.3, 84.7, 64.3);
        e.lineTo(81.9, 64.3);
        e.lineTo(81.9, 94.8);
        e.lineTo(75.9, 94.8);
        e.lineTo(75.9, 1.7);
        e.lineTo(75.9, 1.5);
        e.lineTo(84.7, 1.5);
        e.bezierCurveTo(87.4, 1.5, 89.6, 2.7, 91.5, 5.1);
        e.bezierCurveTo(93, 7.1, 93.8, 9.6, 93.8, 12.5);
        e.lineTo(93.8, 53.2);
        e.closePath();
        e.moveTo(87.8, 19.7);
        e.lineTo(87.8, 12.5);
        e.bezierCurveTo(87.8, 11.1, 87.5, 9.9, 86.9, 9);
        e.bezierCurveTo(86.2, 8, 85.5, 7.5, 84.7, 7.5);
        e.lineTo(81.9, 7.5);
        e.lineTo(81.9, 58.2);
        e.bezierCurveTo(82.5, 58.2, 83, 58.2, 83.6, 58.2);
        e.bezierCurveTo(84.2, 58.1, 84.5, 58.1, 84.7, 58.1);
        e.bezierCurveTo(85.5, 58.1, 86.2, 57.6, 86.9, 56.7);
        e.bezierCurveTo(87.5, 55.7, 87.8, 54.6, 87.8, 53.2);
        e.lineTo(87.8, 19.7);
        e.closePath();
        e.moveTo(145.9, 1.5);
        e.lineTo(145.9, 94.8);
        e.lineTo(140, 94.8);
        e.lineTo(140, 7.5);
        e.bezierCurveTo(139.4, 7.5, 138.7, 7.5, 138.2, 7.5);
        e.bezierCurveTo(137.6, 7.6, 137.2, 7.6, 136.9, 7.6);
        e.bezierCurveTo(136.2, 7.6, 135.6, 8.1, 134.9, 9);
        e.bezierCurveTo(134.3, 10, 133.9, 11.2, 133.9, 12.7);
        e.lineTo(133.9, 94.8);
        e.lineTo(127.9, 94.8);
        e.lineTo(127.9, 12.7);
        e.bezierCurveTo(127.9, 11.2, 127.6, 10, 126.9, 9);
        e.bezierCurveTo(126.2, 8.1, 125.5, 7.6, 124.8, 7.6);
        e.bezierCurveTo(124.6, 7.6, 124.2, 7.6, 123.7, 7.5);
        e.bezierCurveTo(123.1, 7.5, 122.5, 7.5, 121.8, 7.5);
        e.lineTo(121.8, 94.8);
        e.lineTo(115.8, 94.8);
        e.lineTo(115.8, 1.5);
        e.lineTo(124.8, 1.5);
        e.bezierCurveTo(127, 1.5, 129.1, 2.5, 131, 4.5);
        e.bezierCurveTo(132.5, 2.5, 134.5, 1.5, 136.9, 1.5);
        e.lineTo(145.9, 1.5);
        e.closePath();
        e.moveTo(158.9, 82.5);
        e.lineTo(158.9, 83.6);
        e.bezierCurveTo(158.9, 85, 159.2, 86.2, 159.8, 87.2);
        e.bezierCurveTo(160.4, 88.2, 161.1, 88.7, 161.9, 88.7);
        e.lineTo(170.7, 88.7);
        e.lineTo(170.7, 94.8);
        e.lineTo(161.9, 94.8);
        e.bezierCurveTo(159.2, 94.8, 157, 93.6, 155.2, 91.2);
        e.bezierCurveTo(153.8, 89.2, 153, 86.7, 152.8, 83.8);
        e.lineTo(152.8, 82.5);
        e.lineTo(152.8, 14.8);
        e.lineTo(152.8, 12.5);
        e.bezierCurveTo(153, 9.5, 153.8, 7, 155.2, 5.1);
        e.bezierCurveTo(157, 2.7, 159.2, 1.5, 161.9, 1.5);
        e.lineTo(170.7, 1.5);
        e.lineTo(170.7, 7.2);
        e.lineTo(170.7, 7.5);
        e.bezierCurveTo(169.1, 7.6, 167.7, 7.6, 166.5, 7.6);
        e.lineTo(161.9, 7.6);
        e.bezierCurveTo(161.1, 7.6, 160.4, 8.1, 159.8, 9);
        e.bezierCurveTo(159.2, 10, 158.9, 11.2, 158.9, 12.7);
        e.lineTo(158.9, 14.8);
        e.lineTo(158.9, 57.9);
        e.lineTo(171, 57.9);
        e.lineTo(171, 64.2);
        e.lineTo(158.9, 64.2);
        e.lineTo(158.9, 82.5);
        e.closePath();
        e.moveTo(210.9, 50.5);
        e.lineTo(210.9, 53.2);
        e.bezierCurveTo(210.9, 56.1, 210.2, 58.6, 208.7, 60.6);
        e.bezierCurveTo(208.7, 60.7, 208.5, 60.9, 208.2, 61.2);
        e.bezierCurveTo(208.5, 61.4, 208.7, 61.6, 208.7, 61.8);
        e.bezierCurveTo(209.4, 62.8, 210, 63.9, 210.4, 65.2);
        e.bezierCurveTo(210.7, 66.5, 210.9, 67.8, 210.9, 69.2);
        e.lineTo(210.9, 94.8);
        e.lineTo(205, 94.8);
        e.lineTo(205, 69.2);
        e.bezierCurveTo(205, 67.9, 204.7, 66.8, 204.2, 65.9);
        e.bezierCurveTo(203.7, 65, 203.1, 64.5, 202.5, 64.3);
        e.lineTo(202, 64.3);
        e.lineTo(199.1, 64.3);
        e.lineTo(199.1, 94.8);
        e.lineTo(193, 94.8);
        e.lineTo(193, 1.7);
        e.lineTo(193, 1.5);
        e.lineTo(202, 1.5);
        e.bezierCurveTo(204.7, 1.5, 206.9, 2.7, 208.7, 5.1);
        e.bezierCurveTo(209.4, 6.1, 210, 7.3, 210.4, 8.5);
        e.bezierCurveTo(210.7, 9.8, 210.9, 11.1, 210.9, 12.5);
        e.lineTo(210.9, 50.5);
        e.closePath();
        e.moveTo(199.1, 7.5);
        e.lineTo(199.1, 58.1);
        e.lineTo(202, 58.1);
        e.lineTo(202.5, 58.1);
        e.bezierCurveTo(203.1, 57.9, 203.7, 57.4, 204.2, 56.5);
        e.bezierCurveTo(204.7, 55.6, 205, 54.5, 205, 53.2);
        e.lineTo(205, 19.7);
        e.lineTo(205, 12.5);
        e.bezierCurveTo(205, 11.1, 204.7, 9.9, 204, 9);
        e.bezierCurveTo(203.4, 8, 202.7, 7.5, 202, 7.5);
        e.lineTo(199.1, 7.5);
        e.closePath();
        e.moveTo(224.7, 82.5);
        e.lineTo(224.7, 83.6);
        e.bezierCurveTo(224.7, 85, 225, 86.2, 225.7, 87.2);
        e.bezierCurveTo(226.3, 88.2, 227, 88.7, 227.7, 88.7);
        e.lineTo(236.6, 88.7);
        e.lineTo(236.6, 94.8);
        e.lineTo(227.7, 94.8);
        e.bezierCurveTo(225.1, 94.8, 222.9, 93.6, 221.1, 91.2);
        e.bezierCurveTo(219.7, 89.2, 218.9, 86.7, 218.7, 83.8);
        e.lineTo(218.7, 82.5);
        e.lineTo(218.7, 14.8);
        e.lineTo(218.7, 12.5);
        e.bezierCurveTo(218.9, 9.5, 219.7, 7, 221.1, 5.1);
        e.bezierCurveTo(222.9, 2.7, 225.1, 1.5, 227.7, 1.5);
        e.lineTo(236.6, 1.5);
        e.lineTo(236.6, 7.2);
        e.lineTo(236.6, 7.5);
        e.bezierCurveTo(235, 7.6, 233.6, 7.6, 232.4, 7.6);
        e.lineTo(227.7, 7.6);
        e.bezierCurveTo(227, 7.6, 226.3, 8.1, 225.7, 9);
        e.bezierCurveTo(225, 10, 224.7, 11.2, 224.7, 12.7);
        e.lineTo(224.7, 14.8);
        e.lineTo(224.7, 57.9);
        e.lineTo(236.9, 57.9);
        e.lineTo(236.9, 64.2);
        e.lineTo(224.7, 64.2);
        e.lineTo(224.7, 82.5);
        e.closePath();
        e.moveTo(262.5, 7.6);
        e.lineTo(256.6, 7.6);
        e.lineTo(256.6, 94.8);
        e.lineTo(250.7, 94.8);
        e.lineTo(250.7, 7.6);
        e.lineTo(244.6, 7.6);
        e.lineTo(244.6, 1.5);
        e.lineTo(262.5, 1.5);
        e.lineTo(262.5, 7.6);
        e.closePath();
        e.moveTo(288.2, 1.5);
        e.lineTo(288.2, 83.8);
        e.bezierCurveTo(288.2, 86.7, 287.4, 89.1, 285.9, 90.9);
        e.bezierCurveTo(284.2, 93.5, 282, 94.8, 279.2, 94.8);
        e.bezierCurveTo(276.4, 94.8, 274.2, 93.5, 272.5, 90.9);
        e.bezierCurveTo(271, 88.9, 270.3, 86.5, 270.3, 83.8);
        e.lineTo(270.3, 1.5);
        e.lineTo(276.3, 1.5);
        e.lineTo(276.3, 32.1);
        e.lineTo(276.3, 38.1);
        e.lineTo(276.3, 83.6);
        e.bezierCurveTo(276.3, 85, 276.7, 86.2, 277.3, 87.2);
        e.bezierCurveTo(277.9, 88.2, 278.5, 88.7, 279.2, 88.7);
        e.bezierCurveTo(279.9, 88.7, 280.6, 88.2, 281.3, 87.2);
        e.bezierCurveTo(281.9, 86.2, 282.3, 85, 282.3, 83.6);
        e.lineTo(282.3, 38.1);
        e.lineTo(282.3, 32.1);
        e.lineTo(282.3, 1.5);
        e.lineTo(288.2, 1.5);
        e.closePath();
        e.moveTo(313.9, 50.5);
        e.lineTo(313.9, 53.2);
        e.bezierCurveTo(313.9, 56.1, 313.1, 58.6, 311.6, 60.6);
        e.bezierCurveTo(311.6, 60.7, 311.5, 60.9, 311.2, 61.2);
        e.bezierCurveTo(311.5, 61.4, 311.6, 61.6, 311.6, 61.8);
        e.bezierCurveTo(312.3, 62.8, 312.9, 63.9, 313.3, 65.2);
        e.bezierCurveTo(313.7, 66.5, 313.9, 67.8, 313.9, 69.2);
        e.lineTo(313.9, 94.8);
        e.lineTo(307.9, 94.8);
        e.lineTo(307.9, 69.2);
        e.bezierCurveTo(307.9, 67.9, 307.7, 66.8, 307.2, 65.9);
        e.bezierCurveTo(306.6, 65, 306, 64.5, 305.4, 64.3);
        e.lineTo(305, 64.3);
        e.lineTo(302, 64.3);
        e.lineTo(302, 94.8);
        e.lineTo(295.9, 94.8);
        e.lineTo(295.9, 1.7);
        e.lineTo(295.9, 1.5);
        e.lineTo(305, 1.5);
        e.bezierCurveTo(307.6, 1.5, 309.8, 2.7, 311.6, 5.1);
        e.bezierCurveTo(312.3, 6.1, 312.9, 7.3, 313.3, 8.5);
        e.bezierCurveTo(313.7, 9.8, 313.9, 11.1, 313.9, 12.5);
        e.lineTo(313.9, 50.5);
        e.closePath();
        e.moveTo(302, 7.5);
        e.lineTo(302, 58.1);
        e.lineTo(305, 58.1);
        e.lineTo(305.4, 58.1);
        e.bezierCurveTo(306, 57.9, 306.6, 57.4, 307.2, 56.5);
        e.bezierCurveTo(307.7, 55.6, 307.9, 54.5, 307.9, 53.2);
        e.lineTo(307.9, 19.7);
        e.lineTo(307.9, 12.5);
        e.bezierCurveTo(307.9, 11.1, 307.6, 9.9, 306.9, 9);
        e.bezierCurveTo(306.3, 8, 305.6, 7.5, 305, 7.5);
        e.lineTo(302, 7.5);
        e.closePath();
        e.moveTo(339.8, 94.8);
        e.lineTo(333.7, 94.8);
        e.lineTo(333.7, 12.7);
        e.bezierCurveTo(333.7, 11.2, 333.4, 10, 332.7, 9);
        e.bezierCurveTo(332.1, 8.1, 331.4, 7.6, 330.6, 7.6);
        e.bezierCurveTo(330.4, 7.6, 330.1, 7.6, 329.5, 7.5);
        e.bezierCurveTo(328.9, 7.5, 328.3, 7.5, 327.7, 7.5);
        e.lineTo(327.7, 94.8);
        e.lineTo(321.6, 94.8);
        e.lineTo(321.6, 1.5);
        e.lineTo(330.6, 1.5);
        e.bezierCurveTo(333.5, 1.5, 335.7, 2.8, 337.3, 5.2);
        e.bezierCurveTo(338.9, 7.4, 339.8, 9.8, 339.8, 12.5);
        e.lineTo(339.8, 94.8);
        e.closePath();
        this.graphics = e
    };
    a.HelpMe = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.YELLOW.red;
        var b = StyleManager.YELLOW.green;
        var c = StyleManager.YELLOW.blue;
        var d = StyleManager.YELLOW.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(0, 41.1);
        e.lineTo(0, 0);
        e.lineTo(3.7, 0);
        e.lineTo(3.7, 41.1);
        e.lineTo(0, 41.1);
        e.closePath();
        this.graphics = e
    };
    a.I_2 = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.ORANGE.red;
        var b = StyleManager.ORANGE.green;
        var c = StyleManager.ORANGE.blue;
        var d = StyleManager.ORANGE.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(7.3, 59.3);
        e.lineTo(4.9, 59.3);
        e.bezierCurveTo(3.7, 59.3, 3.1, 58.7, 3.1, 57.6);
        e.lineTo(3.1, 5);
        e.lineTo(2.2, 5.3);
        e.bezierCurveTo(1.2, 5.5, .6, 5.2, .3, 4.4);
        e.bezierCurveTo( - .3, 3.1, .1, 2.2, 1.5, 2);
        e.lineTo(4.5, 1.3);
        e.bezierCurveTo(5.9, 1, 6.6, 1.5, 6.6, 2.9);
        e.lineTo(6.6, 55.8);
        e.lineTo(7.3, 55.8);
        e.bezierCurveTo(8.6, 55.8, 9.2, 56.5, 9.1, 57.7);
        e.bezierCurveTo(8.9, 58.8, 8.4, 59.3, 7.3, 59.3);
        e.closePath();
        e.moveTo(20.4, 57.6);
        e.bezierCurveTo(20.4, 58.8, 19.7, 59.5, 18.5, 59.5);
        e.lineTo(15.3, 59.5);
        e.bezierCurveTo(14.1, 59.5, 13.5, 58.8, 13.4, 57.6);
        e.bezierCurveTo(13.4, 56.3, 14.1, 55.6, 15.3, 55.6);
        e.lineTo(16.6, 55.6);
        e.lineTo(16.6, 5.5);
        e.lineTo(15.3, 5.5);
        e.bezierCurveTo(14.1, 5.5, 13.5, 4.9, 13.4, 3.7);
        e.bezierCurveTo(13.4, 2.4, 14, 1.7, 15.3, 1.7);
        e.lineTo(18.6, 1.7);
        e.bezierCurveTo(19.2, 1.7, 19.8, 2, 20.3, 2.7);
        e.lineTo(30.3, 14.4);
        e.lineTo(40.6, 2.9);
        e.bezierCurveTo(41.3, 2.1, 42, 1.7, 42.7, 1.7);
        e.lineTo(45.5, 1.7);
        e.bezierCurveTo(46.8, 1.7, 47.5, 2.4, 47.4, 3.7);
        e.bezierCurveTo(47.3, 4.9, 46.7, 5.5, 45.5, 5.5);
        e.lineTo(44.4, 5.5);
        e.lineTo(44.4, 55.6);
        e.lineTo(45.5, 55.6);
        e.bezierCurveTo(47, 55.6, 47.6, 56.4, 47.3, 57.9);
        e.bezierCurveTo(47.1, 59, 46.5, 59.5, 45.5, 59.5);
        e.lineTo(42.4, 59.5);
        e.bezierCurveTo(41.2, 59.5, 40.5, 58.8, 40.5, 57.6);
        e.lineTo(40.5, 8.8);
        e.lineTo(31.7, 18.6);
        e.bezierCurveTo(31.3, 19.1, 30.8, 19.4, 30.3, 19.4);
        e.bezierCurveTo(29.8, 19.4, 29.3, 19.1, 28.8, 18.5);
        e.lineTo(20.4, 8.8);
        e.lineTo(20.4, 57.6);
        e.closePath();
        e.moveTo(57.7, 57.6);
        e.bezierCurveTo(57.7, 58.7, 57.1, 59.3, 55.9, 59.3);
        e.lineTo(52.9, 59.3);
        e.bezierCurveTo(51.9, 59.3, 51.3, 58.8, 51.1, 57.9);
        e.bezierCurveTo(50.9, 56.5, 51.5, 55.8, 52.9, 55.8);
        e.lineTo(54.2, 55.8);
        e.lineTo(54.2, 8.2);
        e.lineTo(54.1, 8.3);
        e.bezierCurveTo(53.2, 9, 52.4, 8.8, 51.8, 7.9);
        e.bezierCurveTo(51.1, 6.9, 51.2, 6.1, 52.2, 5.4);
        e.bezierCurveTo(56.6, 2.3, 61.4, 1, 66.7, 1.3);
        e.bezierCurveTo(69.9, 1.4, 72.5, 2.3, 74.5, 4);
        e.bezierCurveTo(76.8, 5.8, 78, 8.5, 78, 11.9);
        e.bezierCurveTo(78, 14.8, 77, 17.3, 74.9, 19.4);
        e.bezierCurveTo(72.9, 21.5, 70.5, 22.5, 67.6, 22.5);
        e.bezierCurveTo(64.6, 22.5, 62, 21.4, 59.9, 19);
        e.bezierCurveTo(59.1, 18.2, 59.1, 17.4, 60, 16.7);
        e.bezierCurveTo(60.9, 15.8, 61.7, 15.8, 62.5, 16.8);
        e.bezierCurveTo(63.8, 18.3, 65.5, 19, 67.6, 19);
        e.bezierCurveTo(69.5, 19, 71.2, 18.3, 72.5, 16.9);
        e.bezierCurveTo(73.8, 15.6, 74.5, 13.9, 74.5, 11.9);
        e.bezierCurveTo(74.5, 7.4, 71.8, 5, 66.5, 4.7);
        e.bezierCurveTo(63.6, 4.6, 60.7, 5.1, 57.7, 6.4);
        e.lineTo(57.7, 57.6);
        e.closePath();
        e.moveTo(88.4, 57.6);
        e.bezierCurveTo(88.4, 58.7, 87.9, 59.3, 86.7, 59.3);
        e.lineTo(83.7, 59.3);
        e.bezierCurveTo(82.4, 59.3, 81.9, 58.7, 81.9, 57.5);
        e.bezierCurveTo(82, 56.4, 82.6, 55.8, 83.7, 55.8);
        e.lineTo(85, 55.8);
        e.lineTo(85, 7.4);
        e.lineTo(84.6, 7.6);
        e.bezierCurveTo(83.6, 8.1, 82.9, 7.9, 82.3, 6.9);
        e.bezierCurveTo(81.8, 5.9, 82, 5.1, 83, 4.5);
        e.bezierCurveTo(87.5, 2.1, 92.2, 1, 97.3, 1.3);
        e.bezierCurveTo(100.6, 1.4, 103.2, 2.2, 105.3, 3.5);
        e.bezierCurveTo(107.6, 5, 108.8, 7.2, 108.8, 9.9);
        e.bezierCurveTo(108.8, 12.3, 107.8, 14.3, 105.7, 16);
        e.bezierCurveTo(103.7, 17.7, 101.3, 18.6, 98.4, 18.6);
        e.bezierCurveTo(98, 18.6, 97.7, 18.6, 97.2, 18.5);
        e.bezierCurveTo(97.3, 31.8, 99.1, 42, 102.7, 49.3);
        e.bezierCurveTo(104.9, 53.6, 107.1, 55.8, 109.4, 55.8);
        e.bezierCurveTo(110.4, 55.8, 111.4, 55.4, 112.4, 54.5);
        e.bezierCurveTo(113.3, 53.8, 114.1, 53.8, 114.9, 54.7);
        e.bezierCurveTo(115.6, 55.6, 115.6, 56.4, 114.7, 57.1);
        e.bezierCurveTo(113.1, 58.6, 111.3, 59.3, 109.4, 59.3);
        e.bezierCurveTo(105.6, 59.3, 102.3, 56.5, 99.6, 50.8);
        e.bezierCurveTo(95.7, 42.9, 93.8, 32, 93.8, 18.2);
        e.lineTo(93.8, 17.7);
        e.bezierCurveTo(92.6, 17.3, 91.6, 16.7, 90.8, 15.9);
        e.bezierCurveTo(90.1, 15.2, 89.9, 14.5, 90.5, 13.6);
        e.bezierCurveTo(90.8, 13.1, 91.3, 12.8, 91.9, 12.8);
        e.bezierCurveTo(92.3, 12.8, 92.7, 12.9, 93.1, 13.3);
        e.bezierCurveTo(94.5, 14.5, 96.3, 15.1, 98.4, 15.1);
        e.bezierCurveTo(100.2, 15.1, 101.9, 14.6, 103.2, 13.6);
        e.bezierCurveTo(104.6, 12.6, 105.3, 11.4, 105.3, 9.9);
        e.bezierCurveTo(105.3, 6.7, 102.6, 5, 97.2, 4.7);
        e.bezierCurveTo(94.3, 4.6, 91.4, 5, 88.4, 6);
        e.lineTo(88.4, 57.6);
        e.closePath();
        e.moveTo(172.8, 30.8);
        e.bezierCurveTo(172.8, 39, 170.2, 46, 164.9, 51.8);
        e.bezierCurveTo(159.6, 57.6, 153.3, 60.5, 146, 60.5);
        e.bezierCurveTo(138.5, 60.5, 132.2, 57.6, 127, 51.8);
        e.bezierCurveTo(121.7, 46, 119.1, 39, 119.1, 30.8);
        e.bezierCurveTo(119.1, 22.6, 121.8, 15.5, 127, 9.7);
        e.bezierCurveTo(132.3, 3.9, 138.6, 1, 146, 1);
        e.bezierCurveTo(153.3, 1, 159.6, 3.9, 164.9, 9.8);
        e.bezierCurveTo(170.2, 15.6, 172.8, 22.6, 172.8, 30.8);
        e.closePath();
        e.moveTo(169, 30.8);
        e.bezierCurveTo(169, 23.7, 166.7, 17.5, 162.2, 12.5);
        e.bezierCurveTo(157.7, 7.4, 152.3, 4.8, 146, 4.8);
        e.bezierCurveTo(139.6, 4.8, 134.1, 7.4, 129.7, 12.5);
        e.bezierCurveTo(125.2, 17.5, 123, 23.7, 123, 30.8);
        e.bezierCurveTo(123, 38, 125.2, 44.1, 129.7, 49.1);
        e.bezierCurveTo(134.1, 54.2, 139.6, 56.7, 146, 56.7);
        e.bezierCurveTo(152.3, 56.7, 157.7, 54.1, 162.2, 49.1);
        e.bezierCurveTo(166.7, 44, 169, 37.9, 169, 30.8);
        e.closePath();
        e.moveTo(208.1, 5.4);
        e.lineTo(205.7, 5.4);
        e.lineTo(195.2, 59);
        e.bezierCurveTo(194.9, 60.2, 194.3, 60.8, 193.3, 60.8);
        e.bezierCurveTo(192.5, 60.7, 191.9, 60.1, 191.7, 59);
        e.lineTo(181.1, 5.4);
        e.lineTo(178.6, 5.4);
        e.bezierCurveTo(177.5, 5.4, 176.9, 4.8, 176.8, 3.6);
        e.bezierCurveTo(176.8, 2.5, 177.4, 1.9, 178.6, 1.9);
        e.lineTo(182.6, 1.9);
        e.bezierCurveTo(183.5, 1.9, 184.1, 2.3, 184.3, 3.3);
        e.lineTo(193.5, 49.5);
        e.lineTo(202.5, 3.3);
        e.bezierCurveTo(202.7, 2.3, 203.3, 1.9, 204.3, 1.9);
        e.lineTo(208.1, 1.9);
        e.bezierCurveTo(209.2, 1.9, 209.8, 2.5, 209.8, 3.6);
        e.bezierCurveTo(209.8, 4.8, 209.3, 5.4, 208.1, 5.4);
        e.closePath();
        e.moveTo(235.3, 57.6);
        e.bezierCurveTo(235.3, 58.8, 234.7, 59.5, 233.4, 59.5);
        e.lineTo(215.6, 59.5);
        e.bezierCurveTo(214.4, 59.5, 213.8, 58.8, 213.8, 57.6);
        e.bezierCurveTo(213.8, 56.3, 214.7, 55.6, 216.6, 55.6);
        e.lineTo(216.6, 5.5);
        e.bezierCurveTo(214.7, 5.5, 213.8, 4.9, 213.8, 3.6);
        e.bezierCurveTo(213.8, 2.3, 214.4, 1.7, 215.6, 1.7);
        e.lineTo(233.4, 1.7);
        e.bezierCurveTo(234.7, 1.7, 235.3, 2.3, 235.3, 3.6);
        e.lineTo(235.3, 8.6);
        e.bezierCurveTo(235.3, 9.9, 234.7, 10.5, 233.4, 10.5);
        e.bezierCurveTo(232.3, 10.5, 231.6, 9.9, 231.5, 8.6);
        e.bezierCurveTo(231.5, 8.7, 231.5, 7.7, 231.5, 5.5);
        e.lineTo(220.5, 5.5);
        e.lineTo(220.5, 44.6);
        e.bezierCurveTo(220.9, 44.6, 221.3, 44.7, 221.7, 44.7);
        e.bezierCurveTo(223.6, 44.7, 225.4, 44.2, 227.2, 43.1);
        e.bezierCurveTo(229, 42.1, 229.9, 41.6, 230.1, 41.6);
        e.bezierCurveTo(231.3, 41.6, 232, 42.3, 232, 43.6);
        e.bezierCurveTo(232, 44.2, 231.7, 44.7, 231.2, 45.1);
        e.bezierCurveTo(228.1, 47.7, 224.5, 48.8, 220.5, 48.4);
        e.lineTo(220.5, 55.6);
        e.lineTo(231.5, 55.6);
        e.bezierCurveTo(231.5, 54.4, 232.1, 53.7, 233.4, 53.7);
        e.bezierCurveTo(234.4, 53.7, 235, 54.2, 235.2, 55);
        e.bezierCurveTo(235.3, 55.3, 235.3, 56.2, 235.3, 57.6);
        e.closePath();
        this.graphics = e
    };
    a.Improve = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.ORANGE.red;
        var b = StyleManager.ORANGE.green;
        var c = StyleManager.ORANGE.blue;
        var d = StyleManager.ORANGE.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(6.8, 54.1);
        e.lineTo(4.5, 54.1);
        e.bezierCurveTo(3.5, 54.1, 2.9, 53.6, 2.9, 52.5);
        e.lineTo(2.9, 3.6);
        e.lineTo(2, 3.8);
        e.bezierCurveTo(1.2, 4, .6, 3.8, .2, 3);
        e.bezierCurveTo( - .3, 1.8, .1, 1, 1.4, .7);
        e.lineTo(4.2, .1);
        e.bezierCurveTo(5.5, -.2, 6.2, .3, 6.2, 1.6);
        e.lineTo(6.2, 50.8);
        e.lineTo(6.8, 50.8);
        e.bezierCurveTo(8, 50.8, 8.5, 51.4, 8.4, 52.6);
        e.bezierCurveTo(8.3, 53.6, 7.8, 54.1, 6.8, 54.1);
        e.closePath();
        e.moveTo(47.3, 17.9);
        e.bezierCurveTo(47.3, 23.7, 45, 28.2, 40.5, 31.5);
        e.bezierCurveTo(40.1, 31.7, 39.8, 31.8, 39.5, 31.8);
        e.bezierCurveTo(38.4, 31.8, 37.9, 31.2, 37.9, 30.2);
        e.bezierCurveTo(37.9, 29.7, 38.1, 29.2, 38.5, 28.9);
        e.bezierCurveTo(42.1, 25.6, 43.9, 21.9, 43.9, 17.8);
        e.bezierCurveTo(43.9, 13.7, 42.5, 10.3, 39.7, 7.5);
        e.bezierCurveTo(36.8, 4.7, 33.3, 3.2, 29.1, 3.2);
        e.bezierCurveTo(25.1, 3.2, 21.6, 4.7, 18.6, 7.5);
        e.bezierCurveTo(15.7, 10.3, 14.2, 13.7, 14.2, 17.7);
        e.bezierCurveTo(14.2, 22.2, 16.1, 25.9, 19.8, 28.8);
        e.bezierCurveTo(23.2, 30.9, 26.6, 33, 30, 35.1);
        e.bezierCurveTo(33.7, 37.7, 35.5, 41, 35.5, 44.8);
        e.bezierCurveTo(35.5, 47.8, 34.4, 50.1, 32.2, 51.8);
        e.bezierCurveTo(30.2, 53.3, 27.6, 54.1, 24.6, 54.1);
        e.bezierCurveTo(23.5, 54.1, 22.9, 53.6, 22.9, 52.5);
        e.bezierCurveTo(22.9, 51.4, 23.5, 50.8, 24.6, 50.8);
        e.bezierCurveTo(26.7, 50.8, 28.5, 50.4, 29.8, 49.4);
        e.bezierCurveTo(31.4, 48.3, 32.2, 46.7, 32.2, 44.6);
        e.bezierCurveTo(32.2, 43.7, 32, 42.7, 31.7, 41.8);
        e.bezierCurveTo(31.1, 39.9, 28.9, 38, 25.2, 35.9);
        e.bezierCurveTo(20.5, 33.2, 17.3, 31.1, 15.8, 29.6);
        e.bezierCurveTo(12.6, 26.5, 10.9, 22.5, 10.9, 17.7);
        e.bezierCurveTo(10.9, 12.8, 12.7, 8.6, 16.3, 5.1);
        e.bezierCurveTo(19.9, 1.7, 24.2, 0, 29.1, 0);
        e.bezierCurveTo(34.2, 0, 38.5, 1.7, 42, 5.2);
        e.bezierCurveTo(45.5, 8.7, 47.3, 12.9, 47.3, 17.9);
        e.closePath();
        this.graphics = e
    };
    a.IsWord2 = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.BLUE.red;
        var b = StyleManager.BLUE.green;
        var c = StyleManager.BLUE.blue;
        var d = StyleManager.BLUE.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(23.9, 90.7);
        e.bezierCurveTo(27.5, 90.7, 30.3, 90.5, 32.1, 90);
        e.bezierCurveTo(32.9, 92.8, 33.3, 95.6, 33.3, 98.4);
        e.bezierCurveTo(33.3, 100, 32.6, 100.8, 31.2, 100.8);
        e.lineTo(1.1, 100.8);
        e.lineTo(1.1, 15.9);
        e.lineTo(.5, 1.5);
        e.bezierCurveTo(3.9, 1, 7.4, .8, 10.7, .8);
        e.bezierCurveTo(12.3, .8, 13.2, 1.6, 13.2, 3.4);
        e.lineTo(13.2, 90.7);
        e.lineTo(23.9, 90.7);
        e.closePath();
        e.moveTo(59.6, 49.2);
        e.bezierCurveTo(63.3, 49.2, 66, 48.9, 67.8, 48.4);
        e.bezierCurveTo(68.7, 51.3, 69.1, 54.1, 69.1, 56.8);
        e.bezierCurveTo(69.1, 58.5, 68.4, 59.3, 66.9, 59.3);
        e.lineTo(57.9, 59.3);
        e.bezierCurveTo(55.8, 59.3, 54.1, 59.8, 52.8, 60.9);
        e.bezierCurveTo(51.5, 62.1, 50.9, 63.5, 50.9, 65.4);
        e.lineTo(50.9, 86.2);
        e.bezierCurveTo(50.9, 88.1, 51.5, 89.6, 52.8, 90.7);
        e.bezierCurveTo(54.1, 91.7, 55.8, 92.3, 57.9, 92.3);
        e.bezierCurveTo(60.1, 92.3, 61.8, 91.7, 63.1, 90.7);
        e.bezierCurveTo(64.4, 89.6, 65.1, 88.1, 65.1, 86.2);
        e.lineTo(65.1, 82.3);
        e.lineTo(64.6, 74.5);
        e.bezierCurveTo(66.1, 74.2, 67.5, 74.1, 68.9, 74.1);
        e.bezierCurveTo(70.3, 74.1, 71.8, 74.3, 73.2, 74.7);
        e.bezierCurveTo(75.8, 75.4, 77.2, 76.7, 77.2, 78.5);
        e.lineTo(77.2, 88.3);
        e.bezierCurveTo(77.2, 92.5, 75.4, 95.9, 72, 98.4);
        e.bezierCurveTo(68.5, 101, 63.8, 102.3, 58, 102.3);
        e.bezierCurveTo(52.1, 102.3, 47.5, 100.9, 44, 98.1);
        e.bezierCurveTo(40.6, 95.2, 38.8, 91.2, 38.8, 86.2);
        e.lineTo(38.8, 64.8);
        e.bezierCurveTo(38.8, 60.2, 40.3, 56.7, 43.3, 54.2);
        e.bezierCurveTo(40.3, 51.8, 38.8, 48.3, 38.8, 43.7);
        e.lineTo(38.8, 16.2);
        e.bezierCurveTo(38.8, 11.1, 40.6, 7.1, 44, 4.3);
        e.bezierCurveTo(47.5, 1.4, 52.1, 0, 57.8, 0);
        e.bezierCurveTo(63.6, 0, 68.2, 1.3, 71.5, 3.9);
        e.bezierCurveTo(74.9, 6.5, 76.6, 9.9, 76.6, 14.1);
        e.lineTo(76.6, 26.9);
        e.bezierCurveTo(76.6, 28.7, 75.2, 30, 72.6, 30.7);
        e.bezierCurveTo(71.2, 31.1, 69.7, 31.3, 68.3, 31.3);
        e.bezierCurveTo(66.9, 31.3, 65.5, 31.2, 64, 30.9);
        e.bezierCurveTo(64.3, 28.4, 64.5, 25.8, 64.5, 23.1);
        e.lineTo(64.5, 16.2);
        e.bezierCurveTo(64.5, 12.1, 62.2, 10.1, 57.8, 10.1);
        e.bezierCurveTo(55.6, 10.1, 53.9, 10.6, 52.7, 11.7);
        e.bezierCurveTo(51.5, 12.8, 50.9, 14.3, 50.9, 16.2);
        e.lineTo(50.9, 43.1);
        e.bezierCurveTo(50.9, 44.9, 51.5, 46.4, 52.6, 47.5);
        e.bezierCurveTo(53.8, 48.6, 55.4, 49.2, 57.3, 49.2);
        e.lineTo(59.6, 49.2);
        e.closePath();
        e.moveTo(86.2, 99);
        e.lineTo(86.2, 16.2);
        e.bezierCurveTo(86.2, 11.1, 87.9, 7.1, 91.4, 4.3);
        e.bezierCurveTo(94.8, 1.4, 99.6, 0, 105.6, 0);
        e.bezierCurveTo(111.6, 0, 116.2, 1.3, 119.6, 4);
        e.bezierCurveTo(122.9, 6.6, 124.5, 10.5, 124.5, 15.6);
        e.lineTo(124.5, 87.8);
        e.bezierCurveTo(124.5, 90, 125, 91.5, 125.8, 92.3);
        e.bezierCurveTo(126.7, 93.2, 128.2, 93.6, 130.3, 93.6);
        e.bezierCurveTo(130.3, 99.4, 127.1, 102.3, 120.5, 102.3);
        e.bezierCurveTo(115.1, 102.3, 112.5, 98.8, 112.5, 91.8);
        e.lineTo(112.5, 62.6);
        e.lineTo(98.2, 62.6);
        e.lineTo(98.2, 86.5);
        e.lineTo(98.9, 100.8);
        e.bezierCurveTo(95.4, 101.3, 92, 101.6, 88.6, 101.6);
        e.bezierCurveTo(87, 101.6, 86.2, 100.7, 86.2, 99);
        e.closePath();
        e.moveTo(98.2, 16.2);
        e.lineTo(98.2, 52.5);
        e.lineTo(112.5, 52.5);
        e.lineTo(112.5, 16.2);
        e.bezierCurveTo(112.5, 14.3, 111.8, 12.8, 110.5, 11.7);
        e.bezierCurveTo(109.1, 10.6, 107.4, 10.1, 105.3, 10.1);
        e.bezierCurveTo(103.1, 10.1, 101.4, 10.6, 100.2, 11.7);
        e.bezierCurveTo(98.9, 12.8, 98.2, 14.3, 98.2, 16.2);
        e.closePath();
        e.moveTo(137, 99);
        e.lineTo(137, 16.3);
        e.bezierCurveTo(137, 14.1, 136.6, 12.5, 135.8, 11.5);
        e.bezierCurveTo(135, 10.6, 133.5, 10.1, 131.4, 10.1);
        e.bezierCurveTo(131.3, 7.4, 132, 5.3, 133.5, 3.8);
        e.bezierCurveTo(135.1, 2.3, 137.5, 1.5, 140.9, 1.5);
        e.bezierCurveTo(144.2, 1.5, 146.6, 3.2, 148, 6.6);
        e.bezierCurveTo(152, 3.2, 156.1, 1.5, 160.3, 1.5);
        e.bezierCurveTo(170.3, 1.5, 175.4, 6.5, 175.4, 16.5);
        e.lineTo(175.4, 51.9);
        e.bezierCurveTo(175.4, 58.4, 172.7, 62.9, 167.3, 65.7);
        e.lineTo(170.5, 86.2);
        e.bezierCurveTo(171, 89.4, 172.6, 91, 175.2, 91);
        e.bezierCurveTo(176, 91, 177, 90.8, 178.1, 90.4);
        e.bezierCurveTo(178.5, 91.6, 178.7, 93.1, 178.7, 94.8);
        e.bezierCurveTo(178.7, 96.5, 177.9, 98.1, 176.2, 99.8);
        e.bezierCurveTo(174.5, 101.5, 172.4, 102.3, 169.7, 102.3);
        e.bezierCurveTo(163.7, 102.3, 160.3, 99.7, 159.5, 94.6);
        e.lineTo(155.1, 68.1);
        e.lineTo(149.1, 68.1);
        e.lineTo(149.1, 86.5);
        e.lineTo(149.7, 100.8);
        e.bezierCurveTo(146.3, 101.3, 142.8, 101.6, 139.5, 101.6);
        e.bezierCurveTo(137.9, 101.6, 137, 100.7, 137, 99);
        e.closePath();
        e.moveTo(157.4, 11.6);
        e.bezierCurveTo(154.6, 11.6, 151.9, 13, 149.1, 15.7);
        e.lineTo(149.1, 58);
        e.lineTo(156.1, 58);
        e.bezierCurveTo(158.3, 58, 160, 57.5, 161.3, 56.4);
        e.bezierCurveTo(162.7, 55.4, 163.3, 53.9, 163.3, 51.9);
        e.lineTo(163.3, 17.4);
        e.bezierCurveTo(163.3, 13.5, 161.3, 11.6, 157.4, 11.6);
        e.closePath();
        e.moveTo(207.9, 11.6);
        e.bezierCurveTo(205.2, 11.6, 202.4, 13, 199.7, 15.7);
        e.lineTo(199.7, 86.5);
        e.lineTo(200.3, 100.8);
        e.bezierCurveTo(196.8, 101.3, 193.4, 101.6, 190, 101.6);
        e.bezierCurveTo(188.4, 101.6, 187.6, 100.7, 187.6, 99);
        e.lineTo(187.6, 16.3);
        e.bezierCurveTo(187.6, 14.1, 187.2, 12.5, 186.4, 11.5);
        e.bezierCurveTo(185.6, 10.6, 184.1, 10.1, 181.9, 10.1);
        e.bezierCurveTo(181.8, 7.4, 182.6, 5.3, 184.1, 3.8);
        e.bezierCurveTo(185.6, 2.3, 188.1, 1.5, 191.4, 1.5);
        e.bezierCurveTo(194.8, 1.5, 197.2, 3.2, 198.6, 6.6);
        e.bezierCurveTo(202.6, 3.2, 206.6, 1.5, 210.8, 1.5);
        e.bezierCurveTo(220.9, 1.5, 225.9, 6.5, 225.9, 16.5);
        e.lineTo(225.9, 87.8);
        e.bezierCurveTo(225.9, 90, 226.4, 91.5, 227.2, 92.3);
        e.bezierCurveTo(228.1, 93.2, 229.6, 93.6, 231.7, 93.6);
        e.bezierCurveTo(231.7, 99.4, 228.5, 102.3, 222, 102.3);
        e.bezierCurveTo(216.6, 102.3, 213.9, 98.8, 213.9, 91.8);
        e.lineTo(213.9, 17.4);
        e.bezierCurveTo(213.9, 13.5, 211.9, 11.6, 207.9, 11.6);
        e.closePath();
        this.graphics = e
    };
    a.Learn = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.YELLOW.red;
        var b = StyleManager.YELLOW.green;
        var c = StyleManager.YELLOW.blue;
        var d = StyleManager.YELLOW.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(3.7, 37.4);
        e.lineTo(15.2, 37.4);
        e.lineTo(15.2, 41.1);
        e.lineTo(0, 41.1);
        e.lineTo(0, 0);
        e.lineTo(3.7, 0);
        e.lineTo(3.7, 37.4);
        e.closePath();
        e.moveTo(32.6, 41.1);
        e.lineTo(32.6, 0);
        e.lineTo(36.3, 0);
        e.lineTo(36.3, 41.1);
        e.lineTo(32.6, 41.1);
        e.closePath();
        e.moveTo(71.9, 21.1);
        e.lineTo(60.4, 41.1);
        e.lineTo(56.8, 41.1);
        e.lineTo(56.8, 0);
        e.lineTo(60.6, 0);
        e.lineTo(60.6, 33.3);
        e.lineTo(79.8, 0);
        e.lineTo(84.1, 0);
        e.lineTo(73.9, 17.8);
        e.bezierCurveTo(77, 18.7, 79.9, 20.5, 82.6, 23.2);
        e.bezierCurveTo(86.9, 27.5, 89, 32.6, 89, 38.7);
        e.lineTo(89, 41.1);
        e.lineTo(85.2, 41.1);
        e.lineTo(85.2, 38.7);
        e.bezierCurveTo(85.2, 33.7, 83.5, 29.4, 79.9, 25.9);
        e.bezierCurveTo(77.5, 23.5, 74.8, 21.9, 71.9, 21.1);
        e.closePath();
        e.moveTo(129.3, 0);
        e.lineTo(129.3, 3.7);
        e.lineTo(110.1, 3.7);
        e.lineTo(110.1, 24.4);
        e.lineTo(116.1, 24.4);
        e.lineTo(116.1, 28.1);
        e.lineTo(110.1, 28.1);
        e.lineTo(110.1, 37.4);
        e.lineTo(129.3, 37.4);
        e.lineTo(129.3, 41.1);
        e.lineTo(106.4, 41.1);
        e.lineTo(106.4, 0);
        e.lineTo(129.3, 0);
        e.closePath();
        this.graphics = e
    };
    a.Like = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.ORANGE.red;
        var b = StyleManager.ORANGE.green;
        var c = StyleManager.ORANGE.blue;
        var d = StyleManager.ORANGE.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(9.2, 55.9);
        e.bezierCurveTo(9.2, 57.1, 8.6, 57.8, 7.3, 57.8);
        e.lineTo(4.2, 57.8);
        e.bezierCurveTo(3, 57.8, 2.3, 57.1, 2.3, 55.9);
        e.bezierCurveTo(2.3, 54.6, 2.9, 53.9, 4.2, 53.9);
        e.lineTo(5.4, 53.9);
        e.lineTo(5.4, 3.8);
        e.lineTo(4.2, 3.8);
        e.bezierCurveTo(3, 3.8, 2.3, 3.2, 2.3, 2);
        e.bezierCurveTo(2.2, .7, 2.8, 0, 4.2, 0);
        e.lineTo(7.5, 0);
        e.bezierCurveTo(8.1, 0, 8.6, .3, 9.1, 1);
        e.lineTo(19.2, 12.7);
        e.lineTo(29.4, 1.2);
        e.bezierCurveTo(30.1, .4, 30.8, 0, 31.5, 0);
        e.lineTo(34.3, 0);
        e.bezierCurveTo(35.7, 0, 36.3, .7, 36.2, 2);
        e.bezierCurveTo(36.2, 3.2, 35.5, 3.8, 34.3, 3.8);
        e.lineTo(33.2, 3.8);
        e.lineTo(33.2, 53.9);
        e.lineTo(34.3, 53.9);
        e.bezierCurveTo(35.8, 53.9, 36.4, 54.7, 36.2, 56.2);
        e.bezierCurveTo(36, 57.3, 35.4, 57.8, 34.3, 57.8);
        e.lineTo(31.3, 57.8);
        e.bezierCurveTo(30, 57.8, 29.4, 57.1, 29.4, 55.9);
        e.lineTo(29.4, 7.1);
        e.lineTo(20.6, 16.9);
        e.bezierCurveTo(20.1, 17.4, 19.6, 17.7, 19.2, 17.7);
        e.bezierCurveTo(18.6, 17.7, 18.1, 17.4, 17.7, 16.8);
        e.lineTo(9.2, 7.1);
        e.lineTo(9.2, 55.9);
        e.closePath();
        e.moveTo(58.5, 55.9);
        e.bezierCurveTo(58.5, 57, 57.9, 57.6, 56.8, 57.6);
        e.lineTo(53.8, 57.6);
        e.bezierCurveTo(52.6, 57.6, 52, 57, 52, 55.9);
        e.bezierCurveTo(52, 54.7, 52.5, 54.1, 53.8, 54.1);
        e.lineTo(55, 54.1);
        e.lineTo(55, 21.9);
        e.lineTo(44.9, 3.7);
        e.lineTo(41.9, 3.7);
        e.bezierCurveTo(40.7, 3.7, 40.1, 3.1, 40.1, 2);
        e.bezierCurveTo(40, .8, 40.6, .2, 41.9, .2);
        e.lineTo(45.8, .2);
        e.bezierCurveTo(46.5, .2, 47, .5, 47.3, 1);
        e.lineTo(56.7, 17.9);
        e.lineTo(66, 1);
        e.bezierCurveTo(66.3, .5, 66.8, .2, 67.5, .2);
        e.lineTo(71.4, .2);
        e.bezierCurveTo(72.6, .2, 73.2, .8, 73.1, 2);
        e.bezierCurveTo(73, 3.1, 72.5, 3.7, 71.4, 3.7);
        e.lineTo(68.5, 3.7);
        e.lineTo(58.5, 21.9);
        e.lineTo(58.5, 55.9);
        e.closePath();
        this.graphics = e
    };
    a.My = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.PINK.red;
        var b = StyleManager.PINK.green;
        var c = StyleManager.PINK.blue;
        var d = StyleManager.PINK.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(69.3, 70.3);
        e.lineTo(45.9, 70.3);
        e.lineTo(30.9, 48.3);
        e.lineTo(30.9, 69.8);
        e.lineTo(0, 69.8);
        e.lineTo(0, 0);
        e.lineTo(22.1, 0);
        e.lineTo(38.4, 23.6);
        e.lineTo(38.4, 0);
        e.lineTo(69.3, 0);
        e.lineTo(69.3, 70.3);
        e.closePath();
        e.moveTo(140.8, 52.3);
        e.lineTo(140.8, 69.8);
        e.lineTo(82.9, 69.8);
        e.lineTo(82.9, 0);
        e.lineTo(140.8, 0);
        e.lineTo(140.8, 17.5);
        e.lineTo(113.7, 17.5);
        e.lineTo(113.7, 26.2);
        e.lineTo(132.6, 26.2);
        e.lineTo(132.6, 43.7);
        e.lineTo(113.7, 43.7);
        e.lineTo(113.7, 52.3);
        e.lineTo(140.8, 52.3);
        e.closePath();
        e.moveTo(190.8, 69.8);
        e.lineTo(168, 69.8);
        e.lineTo(143.4, 0);
        e.lineTo(173.5, 0);
        e.lineTo(181.6, 22.8);
        e.lineTo(190.1, 0);
        e.lineTo(211.6, 0);
        e.lineTo(220.5, 22.8);
        e.lineTo(228.1, 0);
        e.lineTo(258.3, 0);
        e.lineTo(234.8, 69.8);
        e.lineTo(212, 69.8);
        e.lineTo(201, 42.2);
        e.lineTo(190.8, 69.8);
        e.closePath();
        this.graphics = e
    };
    a.New = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.PINK.red;
        var b = StyleManager.PINK.green;
        var c = StyleManager.PINK.blue;
        var d = StyleManager.PINK.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(5.9, 54.8);
        e.lineTo(5.9, 10);
        e.bezierCurveTo(5.9, 8.8, 5.7, 7.9, 5.3, 7.4);
        e.bezierCurveTo(4.8, 6.9, 4, 6.6, 2.9, 6.6);
        e.bezierCurveTo(2.8, 5.2, 3.2, 4.1, 4, 3.2);
        e.bezierCurveTo(4.9, 2.4, 6.2, 2, 8, 2);
        e.bezierCurveTo(9.8, 2, 11.1, 2.9, 11.9, 4.7);
        e.bezierCurveTo(14, 2.9, 16.3, 2, 18.5, 2);
        e.bezierCurveTo(24, 2, 26.7, 4.7, 26.7, 10.1);
        e.lineTo(26.7, 30.5);
        e.bezierCurveTo(26.7, 33.2, 25.8, 35.4, 23.9, 36.9);
        e.bezierCurveTo(22, 38.5, 19.4, 39.3, 16.1, 39.3);
        e.lineTo(12.5, 39.3);
        e.lineTo(12.5, 48);
        e.lineTo(12.8, 55.8);
        e.bezierCurveTo(10.9, 56.1, 9.1, 56.2, 7.3, 56.2);
        e.bezierCurveTo(6.4, 56.2, 5.9, 55.8, 5.9, 54.8);
        e.closePath();
        e.moveTo(16.9, 7.4);
        e.bezierCurveTo(15.5, 7.4, 14, 8.2, 12.5, 9.7);
        e.lineTo(12.5, 33.8);
        e.lineTo(16.3, 33.8);
        e.bezierCurveTo(17.4, 33.8, 18.4, 33.5, 19.1, 32.9);
        e.bezierCurveTo(19.8, 32.3, 20.2, 31.5, 20.2, 30.5);
        e.lineTo(20.2, 10.6);
        e.bezierCurveTo(20.2, 8.5, 19.1, 7.4, 16.9, 7.4);
        e.closePath();
        e.moveTo(44.2, 50.4);
        e.bezierCurveTo(46.2, 50.4, 47.7, 50.2, 48.7, 49.9);
        e.bezierCurveTo(49.1, 51.5, 49.3, 53, 49.3, 54.5);
        e.bezierCurveTo(49.3, 55.4, 48.9, 55.8, 48.2, 55.8);
        e.lineTo(31.9, 55.8);
        e.lineTo(31.9, 9.8);
        e.lineTo(31.5, 2);
        e.bezierCurveTo(33.4, 1.7, 35.2, 1.6, 37.1, 1.6);
        e.bezierCurveTo(38, 1.6, 38.4, 2, 38.4, 3);
        e.lineTo(38.4, 50.4);
        e.lineTo(44.2, 50.4);
        e.closePath();
        e.moveTo(54.3, 54.8);
        e.lineTo(54.3, 9.9);
        e.bezierCurveTo(54.3, 7.2, 55.2, 5, 57.1, 3.5);
        e.bezierCurveTo(59, 1.9, 61.6, 1.2, 64.8, 1.2);
        e.bezierCurveTo(68.1, 1.2, 70.6, 1.9, 72.4, 3.3);
        e.bezierCurveTo(74.2, 4.7, 75.1, 6.8, 75.1, 9.6);
        e.lineTo(75.1, 48.8);
        e.bezierCurveTo(75.1, 49.9, 75.3, 50.8, 75.8, 51.2);
        e.bezierCurveTo(76.3, 51.7, 77.1, 51.9, 78.2, 51.9);
        e.bezierCurveTo(78.2, 55.1, 76.5, 56.6, 72.9, 56.6);
        e.bezierCurveTo(70, 56.6, 68.5, 54.7, 68.5, 50.9);
        e.lineTo(68.5, 35.1);
        e.lineTo(60.8, 35.1);
        e.lineTo(60.8, 48);
        e.lineTo(61.2, 55.8);
        e.bezierCurveTo(59.3, 56.1, 57.4, 56.2, 55.6, 56.2);
        e.bezierCurveTo(54.7, 56.2, 54.3, 55.8, 54.3, 54.8);
        e.moveTo(60.8, 9.9);
        e.lineTo(60.8, 29.6);
        e.lineTo(68.5, 29.6);
        e.lineTo(68.5, 9.9);
        e.bezierCurveTo(68.5, 8.9, 68.2, 8.1, 67.5, 7.5);
        e.bezierCurveTo(66.7, 6.9, 65.8, 6.6, 64.6, 6.6);
        e.bezierCurveTo(63.5, 6.6, 62.6, 6.9, 61.9, 7.5);
        e.bezierCurveTo(61.2, 8.1, 60.8, 8.9, 60.8, 9.9);
        e.closePath();
        e.moveTo(100.6, 54.3);
        e.bezierCurveTo(98.7, 55.9, 96.1, 56.6, 93, 56.6);
        e.bezierCurveTo(89.8, 56.6, 87.3, 55.9, 85.5, 54.5);
        e.bezierCurveTo(83.7, 53.1, 82.8, 51, 82.8, 48.2);
        e.lineTo(82.8, 9.9);
        e.bezierCurveTo(82.8, 7.2, 83.7, 5, 85.6, 3.5);
        e.bezierCurveTo(87.5, 1.9, 90, 1.2, 93.2, 1.2);
        e.bezierCurveTo(96.4, 1.2, 98.9, 1.9, 100.8, 3.3);
        e.bezierCurveTo(102.6, 4.7, 103.6, 6.5, 103.6, 8.8);
        e.lineTo(103.6, 19);
        e.bezierCurveTo(103.6, 20, 102.9, 20.7, 101.4, 21.1);
        e.bezierCurveTo(100.6, 21.3, 99.9, 21.4, 99.1, 21.4);
        e.bezierCurveTo(98.3, 21.4, 97.6, 21.4, 96.8, 21.2);
        e.bezierCurveTo(96.9, 19.9, 97, 18.5, 97, 17);
        e.lineTo(97, 9.9);
        e.bezierCurveTo(97, 8.9, 96.7, 8.1, 96, 7.5);
        e.bezierCurveTo(95.2, 6.9, 94.3, 6.6, 93.1, 6.6);
        e.bezierCurveTo(92, 6.6, 91.1, 6.9, 90.4, 7.5);
        e.bezierCurveTo(89.7, 8.1, 89.3, 8.9, 89.3, 9.9);
        e.lineTo(89.3, 47.9);
        e.bezierCurveTo(89.3, 48.9, 89.7, 49.7, 90.4, 50.3);
        e.bezierCurveTo(91.1, 50.9, 92, 51.2, 93.1, 51.2);
        e.bezierCurveTo(94.3, 51.2, 95.2, 50.9, 96, 50.3);
        e.bezierCurveTo(96.7, 49.7, 97, 48.9, 97, 47.9);
        e.lineTo(97, 46);
        e.lineTo(96.8, 41.8);
        e.bezierCurveTo(97.6, 41.7, 98.3, 41.6, 99.1, 41.6);
        e.bezierCurveTo(99.9, 41.6, 100.6, 41.7, 101.4, 41.9);
        e.bezierCurveTo(102.9, 42.3, 103.6, 43, 103.6, 44);
        e.lineTo(103.6, 48.5);
        e.bezierCurveTo(103.6, 50.8, 102.6, 52.8, 100.6, 54.3);
        e.closePath();
        e.moveTo(121.4, 27.8);
        e.bezierCurveTo(123.4, 27.8, 124.9, 27.7, 125.9, 27.4);
        e.bezierCurveTo(126.3, 29, 126.5, 30.5, 126.5, 32);
        e.bezierCurveTo(126.5, 32.8, 126.1, 33.3, 125.4, 33.3);
        e.lineTo(120.5, 33.3);
        e.bezierCurveTo(119.3, 33.3, 118.4, 33.6, 117.7, 34.2);
        e.bezierCurveTo(117, 34.8, 116.7, 35.6, 116.7, 36.6);
        e.lineTo(116.7, 47.9);
        e.bezierCurveTo(116.7, 48.9, 117, 49.7, 117.7, 50.3);
        e.bezierCurveTo(118.4, 50.9, 119.3, 51.2, 120.5, 51.2);
        e.bezierCurveTo(121.6, 51.2, 122.6, 50.9, 123.3, 50.3);
        e.bezierCurveTo(124, 49.7, 124.4, 48.9, 124.4, 47.9);
        e.lineTo(124.4, 45.8);
        e.lineTo(124.1, 41.6);
        e.bezierCurveTo(124.9, 41.4, 125.7, 41.3, 126.4, 41.3);
        e.bezierCurveTo(127.2, 41.3, 128, 41.4, 128.7, 41.7);
        e.bezierCurveTo(130.2, 42, 130.9, 42.7, 130.9, 43.7);
        e.lineTo(130.9, 49);
        e.bezierCurveTo(130.9, 51.3, 130, 53.1, 128.1, 54.5);
        e.bezierCurveTo(126.2, 55.9, 123.7, 56.6, 120.5, 56.6);
        e.bezierCurveTo(117.3, 56.6, 114.8, 55.9, 112.9, 54.3);
        e.bezierCurveTo(111.1, 52.8, 110.1, 50.6, 110.1, 47.9);
        e.lineTo(110.1, 36.3);
        e.bezierCurveTo(110.1, 33.8, 110.9, 31.9, 112.5, 30.6);
        e.bezierCurveTo(110.9, 29.2, 110.1, 27.3, 110.1, 24.8);
        e.lineTo(110.1, 9.9);
        e.bezierCurveTo(110.1, 7.2, 111.1, 5, 112.9, 3.5);
        e.bezierCurveTo(114.8, 1.9, 117.3, 1.2, 120.4, 1.2);
        e.bezierCurveTo(123.5, 1.2, 126, 1.9, 127.8, 3.3);
        e.bezierCurveTo(129.7, 4.7, 130.6, 6.5, 130.6, 8.8);
        e.lineTo(130.6, 15.7);
        e.bezierCurveTo(130.6, 16.7, 129.9, 17.4, 128.4, 17.8);
        e.bezierCurveTo(127.6, 18, 126.9, 18.1, 126.1, 18.1);
        e.bezierCurveTo(125.3, 18.1, 124.6, 18.1, 123.8, 17.9);
        e.bezierCurveTo(123.9, 16.6, 124, 15.2, 124, 13.7);
        e.lineTo(124, 9.9);
        e.bezierCurveTo(124, 7.7, 122.8, 6.6, 120.4, 6.6);
        e.bezierCurveTo(119.2, 6.6, 118.3, 6.9, 117.7, 7.5);
        e.bezierCurveTo(117, 8.1, 116.7, 8.9, 116.7, 9.9);
        e.lineTo(116.7, 24.5);
        e.bezierCurveTo(116.7, 25.5, 117, 26.3, 117.6, 26.9);
        e.bezierCurveTo(118.2, 27.5, 119.1, 27.8, 120.1, 27.8);
        e.lineTo(121.4, 27.8);
        e.closePath();
        this.graphics = e
    };
    a.Place = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.PURPLE.red;
        var b = StyleManager.PURPLE.green;
        var c = StyleManager.PURPLE.blue;
        var d = StyleManager.PURPLE.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(70.5, 50.6);
        e.bezierCurveTo(70.5, 60.9, 66.5, 69.9, 58.3, 77.6);
        e.bezierCurveTo(49.5, 86, 38.3, 90.2, 24.6, 90.2);
        e.lineTo(10.6, 90.2);
        e.lineTo(10.6, 131.4);
        e.lineTo(2.2, 131.4);
        e.lineTo(2.2, 11.6);
        e.lineTo(24.6, 11.6);
        e.bezierCurveTo(37.2, 11.6, 48, 15.5, 57, 23.1);
        e.bezierCurveTo(66, 30.8, 70.5, 40, 70.5, 50.6);
        e.closePath();
        e.moveTo(61.7, 50.6);
        e.bezierCurveTo(61.7, 40.5, 58, 31.8, 50.8, 24.6);
        e.bezierCurveTo(43.6, 17.4, 34.9, 13.8, 24.6, 13.8);
        e.lineTo(10.6, 13.8);
        e.lineTo(10.6, 88.1);
        e.lineTo(24.6, 88.1);
        e.bezierCurveTo(34.9, 88.1, 43.6, 84.4, 50.8, 77.1);
        e.bezierCurveTo(58, 69.8, 61.7, 61, 61.7, 50.6);
        e.closePath();
        e.moveTo(113.3, 131.4);
        e.lineTo(79.4, 131.4);
        e.lineTo(79.4, 11.4);
        e.lineTo(87.9, 11.4);
        e.lineTo(87.9, 129.6);
        e.lineTo(113.3, 129.6);
        e.lineTo(113.3, 131.4);
        e.closePath();
        e.moveTo(153.3, 131.4);
        e.lineTo(119.4, 131.4);
        e.lineTo(119.4, 11.4);
        e.lineTo(149.5, 11.4);
        e.lineTo(149.5, 13.2);
        e.lineTo(127.8, 13.2);
        e.lineTo(127.8, 52.6);
        e.lineTo(153.3, 52.6);
        e.lineTo(153.3, 54.4);
        e.lineTo(127.8, 54.4);
        e.lineTo(127.8, 129.6);
        e.lineTo(153.3, 129.6);
        e.lineTo(153.3, 131.4);
        e.closePath();
        e.moveTo(202.3, 131.4);
        e.lineTo(193.6, 131.4);
        e.lineTo(186.4, 89.8);
        e.lineTo(165.7, 89.8);
        e.lineTo(158.4, 131.4);
        e.lineTo(156.6, 131.4);
        e.lineTo(179.7, 2);
        e.lineTo(202.3, 131.4);
        e.closePath();
        e.moveTo(186.2, 88.1);
        e.lineTo(176.1, 30.9);
        e.lineTo(166.1, 88.1);
        e.lineTo(186.2, 88.1);
        e.closePath();
        e.moveTo(293.7, 90.8);
        e.bezierCurveTo(293.7, 102.4, 289.4, 112.3, 280.9, 120.7);
        e.bezierCurveTo(272.4, 129, 262.1, 133.2, 250.2, 133.2);
        e.bezierCurveTo(238.2, 133.2, 228, 129, 219.4, 120.8);
        e.bezierCurveTo(210.9, 112.5, 206.6, 102.5, 206.6, 90.8);
        e.bezierCurveTo(206.6, 82, 209.2, 74, 214.4, 66.8);
        e.bezierCurveTo(219.6, 59.6, 226.3, 54.4, 234.6, 51.2);
        e.lineTo(235.4, 53);
        e.bezierCurveTo(227.4, 55.9, 220.9, 60.8, 215.8, 67.7);
        e.bezierCurveTo(210.7, 74.6, 208.2, 82.3, 208.2, 90.8);
        e.bezierCurveTo(208.2, 101.8, 212.5, 111.4, 220.9, 119.4);
        e.bezierCurveTo(229.4, 127.4, 239.1, 131.4, 250.2, 131.4);
        e.bezierCurveTo(259.6, 131.4, 267.8, 127.4, 274.6, 119.5);
        e.bezierCurveTo(281.4, 111.5, 284.9, 102, 284.9, 90.8);
        e.bezierCurveTo(284.9, 79.9, 281.8, 70.9, 275.7, 63.7);
        e.bezierCurveTo(269.6, 56.6, 261.7, 52.5, 252.2, 51.4);
        e.bezierCurveTo(245.5, 50.6, 240.1, 48.3, 236.2, 44.3);
        e.bezierCurveTo(232.3, 40.4, 230.4, 35.5, 230.7, 29.7);
        e.bezierCurveTo(230.9, 24.4, 232.9, 19.8, 236.6, 15.9);
        e.bezierCurveTo(240.3, 12.1, 244.8, 10.2, 250.2, 10.2);
        e.bezierCurveTo(255.6, 10.2, 260.2, 12.1, 264, 15.9);
        e.bezierCurveTo(267.8, 19.8, 269.7, 24.4, 269.7, 29.7);
        e.bezierCurveTo(269.7, 32.9, 268.9, 35.9, 267.3, 38.8);
        e.lineTo(266.3, 38.4);
        e.bezierCurveTo(267.8, 35.8, 268.5, 33, 268.5, 29.9);
        e.bezierCurveTo(268.5, 24.9, 266.7, 20.6, 263.2, 17);
        e.bezierCurveTo(259.6, 13.4, 255.4, 11.6, 250.4, 11.6);
        e.bezierCurveTo(247.1, 11.6, 244.3, 13.1, 242, 15.9);
        e.bezierCurveTo(239.7, 18.8, 238.6, 22.8, 238.6, 27.8);
        e.bezierCurveTo(238.6, 37.5, 243.4, 42.8, 252.9, 43.7);
        e.bezierCurveTo(264.6, 44.9, 274.3, 50.1, 282.1, 59.3);
        e.bezierCurveTo(289.8, 68.5, 293.7, 79, 293.7, 90.8);
        e.closePath();
        e.moveTo(334.3, 131.4);
        e.lineTo(300.4, 131.4);
        e.lineTo(300.4, 11.4);
        e.lineTo(330.6, 11.4);
        e.lineTo(330.6, 13.2);
        e.lineTo(308.9, 13.2);
        e.lineTo(308.9, 52.6);
        e.lineTo(334.3, 52.6);
        e.lineTo(334.3, 54.4);
        e.lineTo(308.9, 54.4);
        e.lineTo(308.9, 129.6);
        e.lineTo(334.3, 129.6);
        e.lineTo(334.3, 131.4);
        e.closePath();
        this.graphics = e
    };
    a.Please = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = 189;
        var b = 160;
        var c = 204;
        var d = 1;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(46, 147.1);
        e.bezierCurveTo(46, 151.8, 44.8, 155.8, 42.3, 159.3);
        e.bezierCurveTo(39.8, 162.7, 36.2, 165, 31.5, 166.2);
        e.bezierCurveTo(29.8, 166.6, 27.9, 166.8, 25.8, 166.8);
        e.bezierCurveTo(18.5, 166.8, 13, 164.6, 9.2, 160.3);
        e.bezierCurveTo(5.4, 155.9, 3.5, 150.2, 3.5, 143.2);
        e.lineTo(3.5, 105.7);
        e.lineTo(3.5, 105.5);
        e.lineTo(3.5, 101.5);
        e.lineTo(4.1, 101.1);
        e.bezierCurveTo(9.8, 103.1, 15.5, 104.9, 21.2, 106.3);
        e.lineTo(21.2, 108.3);
        e.bezierCurveTo(19.8, 108.2, 18.2, 108.2, 16.4, 108.5);
        e.bezierCurveTo(14.7, 108.8, 13.8, 110, 13.8, 112);
        e.lineTo(13.8, 145.6);
        e.bezierCurveTo(13.8, 146.9, 13.8, 148.5, 13.8, 150.4);
        e.bezierCurveTo(13.8, 152.3, 14, 154.2, 14.5, 156);
        e.bezierCurveTo(14.9, 157.9, 15.6, 159.4, 16.5, 160.7);
        e.bezierCurveTo(17.5, 162, 18.9, 162.6, 20.8, 162.6);
        e.bezierCurveTo(22.1, 162.6, 23.3, 162.2, 24.2, 161.5);
        e.bezierCurveTo(25.2, 160.7, 26, 159.9, 26.8, 158.9);
        e.bezierCurveTo(27.6, 157.9, 28.5, 157.1, 29.4, 156.3);
        e.bezierCurveTo(30.2, 155.6, 31.4, 155.2, 32.9, 155.2);
        e.bezierCurveTo(34, 155.2, 35.1, 155.6, 36.1, 156.3);
        e.bezierCurveTo(37.2, 157.1, 37.8, 158.1, 38.1, 159.2);
        e.bezierCurveTo(40.9, 157.3, 42.3, 154.8, 42.3, 151.6);
        e.bezierCurveTo(42.3, 150.1, 41.8, 149, 40.8, 148.2);
        e.bezierCurveTo(39.7, 147.4, 38.6, 146.7, 37.4, 146.2);
        e.bezierCurveTo(36.1, 145.7, 35, 145.1, 34, 144.5);
        e.bezierCurveTo(32.9, 143.8, 32.4, 142.8, 32.4, 141.5);
        e.bezierCurveTo(32.4, 139, 33.5, 137.4, 35.7, 136.7);
        e.lineTo(35.7, 82.4);
        e.bezierCurveTo(35.7, 81.1, 35.7, 79.5, 35.6, 77.6);
        e.bezierCurveTo(35.5, 75.7, 35.3, 73.9, 34.8, 72);
        e.bezierCurveTo(34.4, 70.2, 33.7, 68.7, 32.8, 67.4);
        e.bezierCurveTo(31.8, 66.2, 30.4, 65.6, 28.5, 65.6);
        e.bezierCurveTo(27.3, 65.6, 26.4, 65.9, 25.6, 66.7);
        e.bezierCurveTo(24.9, 67.4, 24.2, 68.2, 23.4, 69.1);
        e.bezierCurveTo(22.7, 70, 21.9, 70.8, 21, 71.6);
        e.bezierCurveTo(20.1, 72.4, 19.1, 72.8, 18, 72.8);
        e.lineTo(3.5, 72.8);
        e.lineTo(3.5, 30.1);
        e.bezierCurveTo(3.5, 23.1, 5.4, 17.4, 9.2, 13.1);
        e.bezierCurveTo(13, 8.8, 18.5, 6.6, 25.8, 6.6);
        e.bezierCurveTo(31.7, 6.6, 36.5, 8.4, 40.2, 12.1);
        e.bezierCurveTo(43.9, 15.8, 45.8, 20.5, 45.8, 26.3);
        e.bezierCurveTo(45.8, 28.8, 45.2, 31.3, 43.9, 33.7);
        e.bezierCurveTo(42.7, 36.1, 40.6, 37.3, 37.7, 37.3);
        e.bezierCurveTo(36.1, 37.3, 34.8, 36.8, 33.7, 35.9);
        e.bezierCurveTo(32.7, 34.9, 32.2, 33.7, 32.2, 32.1);
        e.bezierCurveTo(32.2, 30.8, 32.7, 29.8, 33.7, 29.1);
        e.bezierCurveTo(34.8, 28.5, 35.9, 27.9, 37.1, 27.3);
        e.bezierCurveTo(38.4, 26.7, 39.5, 26.1, 40.5, 25.3);
        e.bezierCurveTo(41.6, 24.6, 42.1, 23.5, 42.1, 22.1);
        e.bezierCurveTo(42.1, 18.9, 40.8, 16.3, 38.1, 14.4);
        e.bezierCurveTo(37.8, 15.6, 37.2, 16.6, 36.1, 17.2);
        e.bezierCurveTo(35.1, 17.9, 34, 18.2, 32.9, 18.2);
        e.bezierCurveTo(31.5, 18.2, 30.4, 17.9, 29.5, 17.1);
        e.bezierCurveTo(28.5, 16.4, 27.6, 15.6, 26.8, 14.6);
        e.bezierCurveTo(26, 13.7, 25.2, 12.8, 24.4, 12.1);
        e.bezierCurveTo(23.6, 11.4, 22.6, 11, 21.5, 11);
        e.bezierCurveTo(19.4, 11, 17.8, 11.6, 16.8, 12.9);
        e.bezierCurveTo(15.7, 14.1, 14.9, 15.6, 14.5, 17.4);
        e.bezierCurveTo(14, 19.1, 13.8, 20.9, 13.8, 22.8);
        e.bezierCurveTo(13.8, 24.7, 13.8, 26.4, 13.8, 27.8);
        e.lineTo(13.8, 65);
        e.bezierCurveTo(15, 63.5, 16.5, 62.5, 18.5, 62);
        e.bezierCurveTo(20.5, 61.5, 22.3, 61.2, 24.1, 61.2);
        e.bezierCurveTo(28, 61.2, 31.4, 61.9, 34.2, 63.4);
        e.bezierCurveTo(37, 64.9, 39.2, 66.8, 41, 69.2);
        e.bezierCurveTo(42.7, 71.6, 44, 74.4, 44.8, 77.7);
        e.bezierCurveTo(45.6, 80.9, 46, 84.3, 46, 87.8);
        e.lineTo(46, 147.1);
        e.closePath();
        e.moveTo(102.6, 192);
        e.bezierCurveTo(102.6, 195.6, 102.2, 198.9, 101.4, 202);
        e.bezierCurveTo(100.6, 205.2, 99.3, 207.9, 97.5, 210.3);
        e.bezierCurveTo(95.8, 212.8, 93.5, 214.7, 90.8, 216);
        e.bezierCurveTo(88.1, 217.4, 84.9, 218.1, 81.1, 218.1);
        e.bezierCurveTo(80.1, 218.1, 78.9, 218, 77.6, 217.8);
        e.bezierCurveTo(76.3, 217.6, 75, 217.2, 73.8, 216.8);
        e.bezierCurveTo(72.7, 216.4, 71.7, 215.7, 70.9, 214.8);
        e.bezierCurveTo(70.1, 214, 69.7, 212.9, 69.7, 211.6);
        e.bezierCurveTo(69.7, 210.2, 70.2, 209.1, 71.2, 208.3);
        e.bezierCurveTo(72.2, 207.4, 73.3, 206.9, 74.5, 206.9);
        e.bezierCurveTo(75.8, 206.9, 76.8, 207.3, 77.7, 208);
        e.bezierCurveTo(78.6, 208.8, 79.4, 209.6, 80.1, 210.6);
        e.bezierCurveTo(80.8, 211.5, 81.5, 212.4, 82.3, 213.1);
        e.bezierCurveTo(83, 213.8, 83.9, 214.2, 85.1, 214.2);
        e.bezierCurveTo(87, 214.2, 88.4, 213.6, 89.3, 212.3);
        e.bezierCurveTo(90.3, 211.1, 91, 209.6, 91.4, 207.8);
        e.bezierCurveTo(91.8, 206.1, 92.1, 204.2, 92.1, 202.3);
        e.bezierCurveTo(92.2, 200.4, 92.3, 198.8, 92.3, 197.5);
        e.lineTo(92.3, 90.8);
        e.bezierCurveTo(90.2, 90.1, 89.2, 88.5, 89.2, 86.2);
        e.bezierCurveTo(89.2, 84.9, 89.7, 83.9, 90.7, 83.2);
        e.bezierCurveTo(91.7, 82.6, 92.9, 81.9, 94.1, 81.4);
        e.bezierCurveTo(95.4, 80.8, 96.5, 80.1, 97.5, 79.4);
        e.bezierCurveTo(98.5, 78.7, 99.1, 77.6, 99.1, 76.1);
        e.bezierCurveTo(99.1, 73, 97.7, 70.5, 94.9, 68.4);
        e.bezierCurveTo(94.6, 69.6, 93.9, 70.5, 92.9, 71.3);
        e.bezierCurveTo(91.9, 72, 90.8, 72.4, 89.6, 72.4);
        e.bezierCurveTo(88.3, 72.4, 87.2, 72, 86.2, 71.3);
        e.bezierCurveTo(85.3, 70.5, 84.4, 69.7, 83.6, 68.9);
        e.bezierCurveTo(82.8, 68, 82, 67.2, 81.2, 66.5);
        e.bezierCurveTo(80.4, 65.7, 79.4, 65.4, 78.2, 65.4);
        e.bezierCurveTo(76.2, 65.4, 74.6, 65.9, 73.6, 67.1);
        e.bezierCurveTo(72.6, 68.3, 71.9, 69.7, 71.4, 71.4);
        e.bezierCurveTo(71, 73.1, 70.8, 74.9, 70.8, 76.8);
        e.bezierCurveTo(70.8, 78.7, 70.8, 80.3, 70.8, 81.8);
        e.lineTo(70.6, 166.8);
        e.lineTo(60.3, 166.8);
        e.lineTo(60.3, 19.8);
        e.bezierCurveTo(60.3, 17.7, 60, 16.2, 59.5, 15.1);
        e.bezierCurveTo(59, 14, 57.5, 13.6, 55, 13.8);
        e.lineTo(52.6, 13.8);
        e.lineTo(52.6, 11.9);
        e.bezierCurveTo(58.4, 10.4, 64.2, 8.7, 69.9, 6.6);
        e.lineTo(70.6, 7.1);
        e.lineTo(70.6, 64);
        e.bezierCurveTo(74.2, 62.1, 78.2, 61.2, 82.7, 61.2);
        e.bezierCurveTo(83.1, 61.2, 83.6, 61.2, 84, 61.3);
        e.bezierCurveTo(84.4, 61.4, 84.9, 61.4, 85.3, 61.4);
        e.bezierCurveTo(87, 61.4, 88.4, 60.8, 89.3, 59.4);
        e.bezierCurveTo(90.3, 58.1, 91, 56.6, 91.4, 54.8);
        e.bezierCurveTo(91.8, 53.1, 92.1, 51.3, 92.1, 49.4);
        e.bezierCurveTo(92.2, 47.5, 92.3, 45.9, 92.3, 44.8);
        e.lineTo(92.3, 6.8);
        e.lineTo(102.6, 6.8);
        e.lineTo(102.6, 39.5);
        e.bezierCurveTo(102.6, 43.9, 101.8, 48.3, 100.3, 52.8);
        e.bezierCurveTo(98.7, 57.2, 95.8, 60.6, 91.6, 62.9);
        e.bezierCurveTo(95.3, 64.6, 98, 66.9, 99.8, 70);
        e.bezierCurveTo(101.6, 73, 102.6, 76.5, 102.6, 80.3);
        e.lineTo(102.6, 178.2);
        e.lineTo(102.6, 192);
        e.closePath();
        e.moveTo(138.9, 163.3);
        e.bezierCurveTo(136.2, 164.1, 133.4, 164.9, 130.6, 165.7);
        e.bezierCurveTo(127.8, 166.6, 125.1, 167.6, 122.3, 168.6);
        e.lineTo(121.8, 168.2);
        e.lineTo(121.8, 36.4);
        e.bezierCurveTo(119.5, 35.4, 118.3, 33.8, 118.3, 31.6);
        e.bezierCurveTo(118.3, 30.3, 118.8, 29.3, 119.8, 28.8);
        e.bezierCurveTo(120.8, 28.2, 121.9, 27.6, 123.2, 27);
        e.bezierCurveTo(124.5, 26.4, 125.6, 25.8, 126.6, 25);
        e.bezierCurveTo(127.5, 24.3, 128, 23.3, 128, 22);
        e.bezierCurveTo(128, 19, 127, 16.8, 124.9, 15.2);
        e.bezierCurveTo(124.8, 16.8, 124.1, 18.1, 122.9, 19.2);
        e.bezierCurveTo(121.8, 20.3, 120.4, 20.9, 118.8, 20.9);
        e.bezierCurveTo(117.2, 20.9, 115.7, 20.2, 114.5, 19);
        e.bezierCurveTo(113.3, 17.8, 112.6, 16.3, 112.6, 14.7);
        e.bezierCurveTo(112.6, 13, 113.3, 11.5, 114.5, 10.3);
        e.bezierCurveTo(115.7, 9.2, 117.2, 8.6, 118.8, 8.6);
        e.bezierCurveTo(119.8, 8.6, 120.5, 8.7, 121, 8.8);
        e.lineTo(121.2, 9);
        e.lineTo(121.4, 9);
        e.bezierCurveTo(125.2, 10.6, 127.9, 12.9, 129.4, 15.9);
        e.bezierCurveTo(130.9, 18.9, 131.7, 22.4, 131.7, 26.3);
        e.lineTo(131.7, 155.7);
        e.bezierCurveTo(131.7, 157.7, 132, 159.2, 132.5, 160.3);
        e.bezierCurveTo(133, 161.3, 134.4, 161.7, 136.8, 161.6);
        e.lineTo(138.9, 161.4);
        e.lineTo(138.9, 163.3);
        e.closePath();
        e.moveTo(197.5, 157.2);
        e.bezierCurveTo(197.5, 162, 196.2, 166.2, 193.7, 169.7);
        e.bezierCurveTo(191.3, 173.2, 187.7, 175.6, 183, 176.9);
        e.lineTo(182.8, 176.9);
        e.bezierCurveTo(180.7, 177.4, 178.7, 177.6, 176.8, 177.6);
        e.bezierCurveTo(174.4, 177.6, 172.1, 177.3, 169.9, 176.8);
        e.bezierCurveTo(167.7, 176.3, 165.6, 175.5, 163.5, 174.3);
        e.bezierCurveTo(160.6, 173.3, 157.7, 172.3, 154.8, 171.4);
        e.bezierCurveTo(151.8, 170.6, 148.9, 169.7, 146, 168.8);
        e.lineTo(146, 166.8);
        e.bezierCurveTo(148.4, 167.1, 150.4, 167, 151.8, 166.5);
        e.bezierCurveTo(153.2, 166, 153.8, 164.3, 153.8, 161.4);
        e.lineTo(153.8, 15.2);
        e.bezierCurveTo(153.8, 13.1, 153.4, 11.7, 152.6, 10.8);
        e.bezierCurveTo(151.8, 9.9, 150.4, 9.5, 148.4, 9.7);
        e.lineTo(146, 9.7);
        e.lineTo(146, 7.7);
        e.bezierCurveTo(148.9, 6.8, 151.8, 6, 154.8, 5.1);
        e.bezierCurveTo(157.7, 4.2, 160.6, 3.3, 163.5, 2.2);
        e.lineTo(164.1, 2.7);
        e.lineTo(164.1, 157);
        e.bezierCurveTo(164.1, 158.3, 164.2, 159.9, 164.3, 161.7);
        e.bezierCurveTo(164.3, 163.5, 164.6, 165.3, 165, 167.1);
        e.bezierCurveTo(165.5, 168.8, 166.2, 170.3, 167.3, 171.4);
        e.bezierCurveTo(168.3, 172.6, 169.8, 173.2, 171.7, 173.2);
        e.bezierCurveTo(173, 173.2, 174.2, 172.8, 175.1, 172);
        e.bezierCurveTo(176.1, 171.2, 177, 170.3, 177.8, 169.5);
        e.bezierCurveTo(178.6, 168.6, 179.5, 167.8, 180.4, 166.9);
        e.bezierCurveTo(181.4, 166.1, 182.6, 165.7, 184.1, 165.7);
        e.bezierCurveTo(185.3, 165.7, 186.4, 166.1, 187.5, 166.9);
        e.bezierCurveTo(188.6, 167.8, 189.2, 168.7, 189.4, 169.9);
        e.bezierCurveTo(192.3, 168.2, 193.7, 165.5, 193.7, 161.8);
        e.bezierCurveTo(193.7, 160.3, 193.2, 159.2, 192.2, 158.4);
        e.bezierCurveTo(191.2, 157.6, 190, 156.9, 188.7, 156.3);
        e.bezierCurveTo(187.4, 155.7, 186.2, 155.1, 185.2, 154.5);
        e.bezierCurveTo(184.2, 153.8, 183.7, 152.8, 183.7, 151.5);
        e.bezierCurveTo(183.7, 149.9, 184.2, 148.6, 185.3, 147.7);
        e.bezierCurveTo(186.4, 146.7, 187.7, 146.2, 189.4, 146.2);
        e.bezierCurveTo(192.3, 146.2, 194.4, 147.4, 195.6, 149.9);
        e.bezierCurveTo(196.8, 152.3, 197.5, 154.7, 197.5, 157.2);
        e.closePath();
        e.moveTo(248.3, 157.2);
        e.bezierCurveTo(248.3, 162, 247.1, 166.2, 244.6, 169.7);
        e.bezierCurveTo(242.1, 173.2, 238.5, 175.6, 233.8, 176.9);
        e.lineTo(233.6, 176.9);
        e.bezierCurveTo(231.6, 177.4, 229.6, 177.6, 227.6, 177.6);
        e.bezierCurveTo(225.3, 177.6, 223, 177.3, 220.8, 176.8);
        e.bezierCurveTo(218.5, 176.3, 216.4, 175.5, 214.3, 174.3);
        e.bezierCurveTo(211.5, 173.3, 208.6, 172.3, 205.6, 171.4);
        e.bezierCurveTo(202.7, 170.6, 199.7, 169.7, 196.8, 168.8);
        e.lineTo(196.8, 166.8);
        e.bezierCurveTo(199.3, 167.1, 201.2, 167, 202.6, 166.5);
        e.bezierCurveTo(204, 166, 204.7, 164.3, 204.7, 161.4);
        e.lineTo(204.7, 15.2);
        e.bezierCurveTo(204.7, 13.1, 204.3, 11.7, 203.5, 10.8);
        e.bezierCurveTo(202.7, 9.9, 201.3, 9.5, 199.2, 9.7);
        e.lineTo(196.8, 9.7);
        e.lineTo(196.8, 7.7);
        e.bezierCurveTo(199.7, 6.8, 202.7, 6, 205.6, 5.1);
        e.bezierCurveTo(208.6, 4.2, 211.5, 3.3, 214.3, 2.2);
        e.lineTo(215, 2.7);
        e.lineTo(215, 157);
        e.bezierCurveTo(215, 158.3, 215, 159.9, 215.1, 161.7);
        e.bezierCurveTo(215.2, 163.5, 215.4, 165.3, 215.9, 167.1);
        e.bezierCurveTo(216.3, 168.8, 217.1, 170.3, 218.1, 171.4);
        e.bezierCurveTo(219.1, 172.6, 220.6, 173.2, 222.5, 173.2);
        e.bezierCurveTo(223.9, 173.2, 225, 172.8, 226, 172);
        e.bezierCurveTo(226.9, 171.2, 227.8, 170.3, 228.6, 169.5);
        e.bezierCurveTo(229.4, 168.6, 230.3, 167.8, 231.3, 166.9);
        e.bezierCurveTo(232.2, 166.1, 233.5, 165.7, 234.9, 165.7);
        e.bezierCurveTo(236.1, 165.7, 237.2, 166.1, 238.3, 166.9);
        e.bezierCurveTo(239.4, 167.8, 240.1, 168.7, 240.2, 169.9);
        e.bezierCurveTo(243.1, 168.2, 244.6, 165.5, 244.6, 161.8);
        e.bezierCurveTo(244.6, 160.3, 244.1, 159.2, 243.1, 158.4);
        e.bezierCurveTo(242, 157.6, 240.9, 156.9, 239.5, 156.3);
        e.bezierCurveTo(238.2, 155.7, 237.1, 155.1, 236, 154.5);
        e.bezierCurveTo(235, 153.8, 234.5, 152.8, 234.5, 151.5);
        e.bezierCurveTo(234.5, 149.9, 235.1, 148.6, 236.1, 147.7);
        e.bezierCurveTo(237.2, 146.7, 238.6, 146.2, 240.2, 146.2);
        e.bezierCurveTo(243.1, 146.2, 245.2, 147.4, 246.5, 149.9);
        e.bezierCurveTo(247.7, 152.3, 248.3, 154.7, 248.3, 157.2);
        e.closePath();
        e.moveTo(295.9, 147.1);
        e.bezierCurveTo(295.9, 151.8, 294.6, 155.8, 292.1, 159.3);
        e.bezierCurveTo(289.7, 162.7, 286.1, 165, 281.4, 166.2);
        e.bezierCurveTo(279.7, 166.6, 277.8, 166.8, 275.7, 166.8);
        e.bezierCurveTo(268.4, 166.8, 262.8, 164.6, 259.1, 160.3);
        e.bezierCurveTo(255.2, 155.9, 253.4, 150.2, 253.4, 143.2);
        e.lineTo(253.4, 105.7);
        e.lineTo(253.4, 105.5);
        e.lineTo(253.4, 101.5);
        e.lineTo(254, 101.1);
        e.bezierCurveTo(259.7, 103.1, 265.4, 104.9, 271.1, 106.3);
        e.lineTo(271.1, 108.3);
        e.bezierCurveTo(269.6, 108.2, 268, 108.2, 266.3, 108.5);
        e.bezierCurveTo(264.5, 108.8, 263.7, 110, 263.7, 112);
        e.lineTo(263.7, 145.6);
        e.bezierCurveTo(263.7, 146.9, 263.7, 148.5, 263.7, 150.4);
        e.bezierCurveTo(263.7, 152.3, 263.9, 154.2, 264.3, 156);
        e.bezierCurveTo(264.8, 157.9, 265.4, 159.4, 266.4, 160.7);
        e.bezierCurveTo(267.3, 162, 268.8, 162.6, 270.7, 162.6);
        e.bezierCurveTo(272, 162.6, 273.1, 162.2, 274.1, 161.5);
        e.bezierCurveTo(275, 160.7, 275.9, 159.9, 276.7, 158.9);
        e.bezierCurveTo(277.5, 157.9, 278.3, 157.1, 279.2, 156.3);
        e.bezierCurveTo(280.1, 155.6, 281.3, 155.2, 282.7, 155.2);
        e.bezierCurveTo(283.9, 155.2, 285, 155.6, 286, 156.3);
        e.bezierCurveTo(287, 157.1, 287.7, 158.1, 288, 159.2);
        e.bezierCurveTo(290.8, 157.3, 292.1, 154.8, 292.1, 151.6);
        e.bezierCurveTo(292.1, 150.1, 291.6, 149, 290.6, 148.2);
        e.bezierCurveTo(289.6, 147.4, 288.5, 146.7, 287.2, 146.2);
        e.bezierCurveTo(286, 145.7, 284.8, 145.1, 283.8, 144.5);
        e.bezierCurveTo(282.8, 143.8, 282.3, 142.8, 282.3, 141.5);
        e.bezierCurveTo(282.3, 139, 283.4, 137.4, 285.6, 136.7);
        e.lineTo(285.6, 82.4);
        e.bezierCurveTo(285.6, 81.1, 285.5, 79.5, 285.5, 77.6);
        e.bezierCurveTo(285.4, 75.7, 285.1, 73.9, 284.7, 72);
        e.bezierCurveTo(284.3, 70.2, 283.6, 68.7, 282.6, 67.4);
        e.bezierCurveTo(281.7, 66.2, 280.2, 65.6, 278.3, 65.6);
        e.bezierCurveTo(277.2, 65.6, 276.2, 65.9, 275.5, 66.7);
        e.bezierCurveTo(274.8, 67.4, 274, 68.2, 273.3, 69.1);
        e.bezierCurveTo(272.6, 70, 271.8, 70.8, 270.9, 71.6);
        e.bezierCurveTo(270, 72.4, 269, 72.8, 267.8, 72.8);
        e.lineTo(253.4, 72.8);
        e.lineTo(253.4, 30.1);
        e.bezierCurveTo(253.4, 23.1, 255.2, 17.4, 259.1, 13.1);
        e.bezierCurveTo(262.8, 8.8, 268.4, 6.6, 275.7, 6.6);
        e.bezierCurveTo(281.6, 6.6, 286.3, 8.4, 290.1, 12.1);
        e.bezierCurveTo(293.8, 15.8, 295.7, 20.5, 295.7, 26.3);
        e.bezierCurveTo(295.7, 28.8, 295, 31.3, 293.8, 33.7);
        e.bezierCurveTo(292.5, 36.1, 290.5, 37.3, 287.5, 37.3);
        e.bezierCurveTo(285.9, 37.3, 284.6, 36.8, 283.6, 35.9);
        e.bezierCurveTo(282.6, 34.9, 282.1, 33.7, 282.1, 32.1);
        e.bezierCurveTo(282.1, 30.8, 282.6, 29.8, 283.6, 29.1);
        e.bezierCurveTo(284.6, 28.5, 285.8, 27.9, 287, 27.3);
        e.bezierCurveTo(288.2, 26.7, 289.4, 26.1, 290.4, 25.3);
        e.bezierCurveTo(291.4, 24.6, 291.9, 23.5, 291.9, 22.1);
        e.bezierCurveTo(291.9, 18.9, 290.6, 16.3, 288, 14.4);
        e.bezierCurveTo(287.7, 15.6, 287, 16.6, 286, 17.2);
        e.bezierCurveTo(285, 17.9, 283.9, 18.2, 282.7, 18.2);
        e.bezierCurveTo(281.4, 18.2, 280.3, 17.9, 279.3, 17.1);
        e.bezierCurveTo(278.4, 16.4, 277.5, 15.6, 276.7, 14.6);
        e.bezierCurveTo(275.9, 13.7, 275.1, 12.8, 274.3, 12.1);
        e.bezierCurveTo(273.5, 11.4, 272.5, 11, 271.3, 11);
        e.bezierCurveTo(269.3, 11, 267.7, 11.6, 266.6, 12.9);
        e.bezierCurveTo(265.5, 14.1, 264.8, 15.6, 264.3, 17.4);
        e.bezierCurveTo(263.9, 19.1, 263.7, 20.9, 263.7, 22.8);
        e.bezierCurveTo(263.7, 24.7, 263.7, 26.4, 263.7, 27.8);
        e.lineTo(263.7, 65);
        e.bezierCurveTo(264.8, 63.5, 266.4, 62.5, 268.4, 62);
        e.bezierCurveTo(270.3, 61.5, 272.2, 61.2, 274, 61.2);
        e.bezierCurveTo(277.9, 61.2, 281.3, 61.9, 284, 63.4);
        e.bezierCurveTo(286.8, 64.9, 289.1, 66.8, 290.8, 69.2);
        e.bezierCurveTo(292.6, 71.6, 293.9, 74.4, 294.7, 77.7);
        e.bezierCurveTo(295.5, 80.9, 295.9, 84.3, 295.9, 87.8);
        e.lineTo(295.9, 147.1);
        e.closePath();
        this.graphics = e
    };
    a.Skills = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.ORANGE.red;
        var b = StyleManager.ORANGE.green;
        var c = StyleManager.ORANGE.blue;
        var d = StyleManager.ORANGE.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(14.8, 52.6);
        e.bezierCurveTo(14.8, 53.7, 14.3, 54.3, 13.2, 54.3);
        e.lineTo(10.4, 54.3);
        e.bezierCurveTo(9.3, 54.3, 8.8, 53.7, 8.8, 52.7);
        e.bezierCurveTo(8.7, 51.6, 9.2, 51, 10.4, 51);
        e.lineTo(11.6, 51);
        e.lineTo(11.6, 4.1);
        e.lineTo(5.8, 4.1);
        e.lineTo(5.8, 7.1);
        e.bezierCurveTo(5.8, 8.2, 5.2, 8.7, 4.2, 8.8);
        e.bezierCurveTo(3.1, 8.8, 2.5, 8.3, 2.5, 7.1);
        e.lineTo(2.5, 2.4);
        e.bezierCurveTo(2.5, 1.4, 3, .8, 4.1, .8);
        e.lineTo(22.7, .8);
        e.bezierCurveTo(23.8, .8, 24.3, 1.4, 24.3, 2.4);
        e.lineTo(24.3, 6.2);
        e.bezierCurveTo(24.3, 7.3, 23.8, 7.8, 22.8, 7.9);
        e.bezierCurveTo(21.6, 7.9, 21.1, 7.4, 21.1, 6.2);
        e.lineTo(21.1, 4.1);
        e.lineTo(14.8, 4.1);
        e.lineTo(14.8, 52.6);
        e.closePath();
        e.moveTo(45.7, 41.8);
        e.lineTo(32.7, 41.8);
        e.lineTo(32.7, 52.6);
        e.bezierCurveTo(32.7, 53.8, 32.1, 54.4, 30.9, 54.4);
        e.lineTo(28.1, 54.4);
        e.bezierCurveTo(27, 54.4, 26.4, 53.9, 26.4, 52.8);
        e.bezierCurveTo(26.2, 51.5, 26.8, 50.8, 28.1, 50.8);
        e.lineTo(29.1, 50.8);
        e.lineTo(29.1, 4);
        e.lineTo(28.5, 4.1);
        e.bezierCurveTo(27.4, 4.4, 26.7, 4, 26.4, 3);
        e.bezierCurveTo(26, 1.8, 26.4, 1, 27.6, .7);
        e.lineTo(30.5, .1);
        e.bezierCurveTo(30.8, 0, 31, 0, 31.2, 0);
        e.bezierCurveTo(32.2, 0, 32.7, .6, 32.7, 1.8);
        e.lineTo(32.7, 38.2);
        e.lineTo(45.7, 38.2);
        e.lineTo(45.7, 1.8);
        e.bezierCurveTo(45.7, .6, 46.2, 0, 47.2, 0);
        e.bezierCurveTo(47.4, 0, 47.6, 0, 47.8, .1);
        e.lineTo(50.7, .7);
        e.bezierCurveTo(52.1, 1.1, 52.5, 1.9, 52, 3.2);
        e.bezierCurveTo(51.6, 4.1, 50.9, 4.4, 49.9, 4.1);
        e.lineTo(49.2, 4);
        e.lineTo(49.2, 50.8);
        e.lineTo(50.3, 50.8);
        e.bezierCurveTo(51.5, 50.8, 52.1, 51.4, 52.1, 52.6);
        e.bezierCurveTo(52.1, 53.8, 51.5, 54.4, 50.3, 54.4);
        e.lineTo(47.4, 54.4);
        e.bezierCurveTo(46.2, 54.4, 45.7, 53.8, 45.7, 52.6);
        e.lineTo(45.7, 41.8);
        e.closePath();
        e.moveTo(74.3, 52.6);
        e.bezierCurveTo(74.3, 53.8, 73.7, 54.4, 72.5, 54.4);
        e.lineTo(55.9, 54.4);
        e.bezierCurveTo(54.8, 54.4, 54.2, 53.8, 54.2, 52.6);
        e.bezierCurveTo(54.2, 51.4, 55.1, 50.8, 56.9, 50.8);
        e.lineTo(56.9, 4.2);
        e.bezierCurveTo(55.1, 4.2, 54.2, 3.6, 54.2, 2.4);
        e.bezierCurveTo(54.2, 1.2, 54.8, .6, 55.9, .6);
        e.lineTo(72.5, .6);
        e.bezierCurveTo(73.7, .6, 74.3, 1.2, 74.3, 2.4);
        e.lineTo(74.3, 7.1);
        e.bezierCurveTo(74.3, 8.2, 73.7, 8.8, 72.5, 8.8);
        e.bezierCurveTo(71.5, 8.8, 70.9, 8.2, 70.7, 7.1);
        e.bezierCurveTo(70.7, 7.2, 70.7, 6.2, 70.7, 4.2);
        e.lineTo(60.5, 4.2);
        e.lineTo(60.5, 40.5);
        e.bezierCurveTo(60.9, 40.6, 61.3, 40.6, 61.6, 40.6);
        e.bezierCurveTo(63.4, 40.6, 65.1, 40.2, 66.7, 39.2);
        e.bezierCurveTo(68.4, 38.3, 69.3, 37.8, 69.4, 37.8);
        e.bezierCurveTo(70.6, 37.8, 71.2, 38.4, 71.2, 39.7);
        e.bezierCurveTo(71.2, 40.2, 71, 40.7, 70.5, 41);
        e.bezierCurveTo(67.6, 43.5, 64.3, 44.5, 60.5, 44.1);
        e.lineTo(60.5, 50.8);
        e.lineTo(70.7, 50.8);
        e.bezierCurveTo(70.7, 49.7, 71.3, 49.1, 72.5, 49.1);
        e.bezierCurveTo(73.4, 49.1, 74, 49.5, 74.2, 50.3);
        e.bezierCurveTo(74.3, 50.6, 74.3, 51.3, 74.3, 52.6);
        e.closePath();
        this.graphics = e
    };
    a.The = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.PINK.red;
        var b = StyleManager.PINK.green;
        var c = StyleManager.PINK.blue;
        var d = StyleManager.PINK.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(0, 32);
        e.lineTo(0, 1.1);
        e.lineTo(62, 1.1);
        e.lineTo(62, 32);
        e.lineTo(46.5, 32);
        e.lineTo(46.5, 70.9);
        e.lineTo(15.5, 70.9);
        e.lineTo(15.5, 32);
        e.lineTo(0, 32);
        e.closePath();
        e.moveTo(101.2, 70.9);
        e.lineTo(70.2, 70.9);
        e.lineTo(70.2, 1.1);
        e.lineTo(101.2, 1.1);
        e.lineTo(101.2, 26.7);
        e.lineTo(116.9, 26.7);
        e.lineTo(116.9, 1.1);
        e.lineTo(147.8, 1.1);
        e.lineTo(147.8, 70.9);
        e.lineTo(116.9, 70.9);
        e.lineTo(116.9, 45);
        e.lineTo(101.2, 45);
        e.lineTo(101.2, 70.9);
        e.closePath();
        e.moveTo(161.5, 70.9);
        e.lineTo(161.5, 1.1);
        e.lineTo(192.4, 1.1);
        e.lineTo(192.4, 70.9);
        e.lineTo(161.5, 70.9);
        e.closePath();
        e.moveTo(275.5, 71.4);
        e.lineTo(252.1, 71.4);
        e.lineTo(237.1, 49.4);
        e.lineTo(237.1, 70.9);
        e.lineTo(206.2, 70.9);
        e.lineTo(206.2, 1.1);
        e.lineTo(228.3, 1.1);
        e.lineTo(244.6, 24.7);
        e.lineTo(244.6, 1.1);
        e.lineTo(275.5, 1.1);
        e.lineTo(275.5, 71.4);
        e.closePath();
        e.moveTo(359.6, 9.3);
        e.lineTo(344.7, 30.3);
        e.bezierCurveTo(338.5, 27.3, 332.7, 25.8, 327.5, 25.8);
        e.bezierCurveTo(323.9, 25.8, 321.1, 26.7, 319, 28.6);
        e.bezierCurveTo(316.9, 30.4, 315.8, 32.8, 315.8, 35.8);
        e.bezierCurveTo(315.8, 41.4, 319.6, 44.3, 327, 44.3);
        e.lineTo(327, 33.3);
        e.lineTo(357.9, 33.3);
        e.lineTo(357.9, 71);
        e.bezierCurveTo(345.4, 71.7, 336.9, 72, 332.5, 72);
        e.bezierCurveTo(315.5, 72, 303.6, 68.4, 296.9, 61.1);
        e.bezierCurveTo(290.3, 53.9, 287, 45.4, 287, 35.8);
        e.bezierCurveTo(287, 29.1, 288.5, 23, 291.6, 17.5);
        e.bezierCurveTo(294.7, 11.9, 299.2, 7.6, 305, 4.6);
        e.bezierCurveTo(310.9, 1.5, 317.8, 0, 325.8, 0);
        e.bezierCurveTo(331.4, 0, 337.2, .8, 343.2, 2.4);
        e.bezierCurveTo(349.2, 4.1, 354.7, 6.4, 359.6, 9.3);
        e.closePath();
        e.moveTo(427.6, 4.7);
        e.lineTo(419.9, 26.7);
        e.bezierCurveTo(414.9, 19.9, 409.1, 16.5, 402.6, 16.5);
        e.bezierCurveTo(399, 16.5, 397.2, 17.8, 397.2, 20.6);
        e.bezierCurveTo(397.2, 21.4, 397.7, 22.3, 398.9, 23.2);
        e.bezierCurveTo(400, 24.1, 403, 25.5, 407.9, 27.3);
        e.bezierCurveTo(413.2, 29.5, 417.3, 31.4, 420.2, 33.1);
        e.bezierCurveTo(423.1, 34.8, 425.2, 37, 426.6, 39.7);
        e.bezierCurveTo(428.1, 42.4, 428.8, 45.5, 428.8, 49.1);
        e.bezierCurveTo(428.8, 56.5, 426, 62.2, 420.3, 66.2);
        e.bezierCurveTo(414.6, 70.1, 406.3, 72, 395.3, 72);
        e.bezierCurveTo(382.9, 72, 372.3, 70.3, 363.4, 66.8);
        e.lineTo(370.9, 43.4);
        e.bezierCurveTo(373.1, 46.9, 375.8, 49.6, 379.1, 51.6);
        e.bezierCurveTo(382.3, 53.6, 385.4, 54.6, 388.4, 54.6);
        e.bezierCurveTo(389.9, 54.6, 391.1, 54.2, 392.1, 53.5);
        e.bezierCurveTo(393.1, 52.7, 393.6, 51.8, 393.6, 50.7);
        e.bezierCurveTo(393.6, 49.6, 393.1, 48.6, 392.1, 47.7);
        e.bezierCurveTo(391.2, 46.8, 388.6, 45.4, 384.5, 43.8);
        e.bezierCurveTo(380.8, 42.3, 377.7, 40.8, 375.3, 39.4);
        e.bezierCurveTo(372.9, 38, 370.7, 36, 368.9, 33.3);
        e.bezierCurveTo(367.1, 30.7, 366.2, 27.4, 366.2, 23.4);
        e.bezierCurveTo(366.2, 15.7, 369.1, 9.8, 374.7, 5.9);
        e.bezierCurveTo(380.3, 2, 388.7, 0, 399.7, 0);
        e.bezierCurveTo(409.7, 0, 419, 1.6, 427.6, 4.7);
        e.closePath();
        this.graphics = e
    };
    a.Things = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.BLUE.red;
        var b = StyleManager.BLUE.green;
        var c = StyleManager.BLUE.blue;
        var d = StyleManager.BLUE.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(30.7, 1.5);
        e.bezierCurveTo(34.4, 1.5, 37.1, 1.3, 39, .8);
        e.bezierCurveTo(39.8, 3.6, 40.2, 6.4, 40.2, 9.2);
        e.bezierCurveTo(40.2, 10.8, 39.5, 11.6, 38, 11.6);
        e.lineTo(26.1, 11.6);
        e.lineTo(26.1, 86.5);
        e.lineTo(26.7, 100.8);
        e.bezierCurveTo(23.3, 101.3, 19.9, 101.6, 16.5, 101.6);
        e.bezierCurveTo(14.9, 101.6, 14.1, 100.7, 14.1, 99);
        e.lineTo(14.1, 11.6);
        e.lineTo(9.5, 11.6);
        e.bezierCurveTo(5.8, 11.6, 3.1, 11.9, 1.2, 12.4);
        e.bezierCurveTo(.4, 9.5, 0, 6.7, 0, 4);
        e.bezierCurveTo(0, 2.3, .7, 1.5, 2.1, 1.5);
        e.lineTo(30.7, 1.5);
        e.closePath();
        e.moveTo(46.4, 86.8);
        e.lineTo(46.4, 16.2);
        e.bezierCurveTo(46.4, 11.1, 48.2, 7.1, 51.6, 4.3);
        e.bezierCurveTo(55.1, 1.4, 59.8, 0, 65.8, 0);
        e.bezierCurveTo(71.8, 0, 76.5, 1.3, 79.8, 4);
        e.bezierCurveTo(83.1, 6.6, 84.8, 10.5, 84.8, 15.6);
        e.lineTo(84.8, 86.2);
        e.bezierCurveTo(84.8, 91.2, 83, 95.2, 79.5, 98.1);
        e.bezierCurveTo(76, 100.9, 71.2, 102.3, 65.2, 102.3);
        e.bezierCurveTo(59.2, 102.3, 54.6, 101, 51.3, 98.4);
        e.bezierCurveTo(48.1, 95.7, 46.4, 91.9, 46.4, 86.8);
        e.closePath();
        e.moveTo(58.5, 16.2);
        e.lineTo(58.5, 86.2);
        e.bezierCurveTo(58.5, 88, 59.1, 89.5, 60.4, 90.6);
        e.bezierCurveTo(61.7, 91.7, 63.4, 92.3, 65.5, 92.3);
        e.bezierCurveTo(67.7, 92.3, 69.4, 91.7, 70.7, 90.7);
        e.bezierCurveTo(72, 89.6, 72.7, 88.1, 72.7, 86.2);
        e.lineTo(72.7, 16.2);
        e.bezierCurveTo(72.7, 14.3, 72, 12.8, 70.7, 11.7);
        e.bezierCurveTo(69.4, 10.6, 67.7, 10.1, 65.5, 10.1);
        e.bezierCurveTo(63.4, 10.1, 61.7, 10.6, 60.4, 11.7);
        e.bezierCurveTo(59.1, 12.8, 58.5, 14.3, 58.5, 16.2);
        e.closePath();
        this.graphics = e
    };
    a.To = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.BLUE.red;
        var b = StyleManager.BLUE.green;
        var c = StyleManager.BLUE.blue;
        var d = StyleManager.BLUE.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(116.6, 13.2);
        e.bezierCurveTo(116.6, 13.6, 116.6, 13.9, 116.6, 14.2);
        e.bezierCurveTo(116.6, 21, 115, 25.7, 111.6, 28.4);
        e.bezierCurveTo(108.3, 31.1, 103.8, 32.7, 98.2, 33.3);
        e.bezierCurveTo(97.8, 33.3, 97.4, 33.3, 97, 33.3);
        e.bezierCurveTo(96.6, 33.3, 96.3, 33.3, 96, 33.3);
        e.bezierCurveTo(95.7, 33.4, 95.4, 33.5, 95, 33.5);
        e.bezierCurveTo(94.6, 33.5, 94.2, 33.5, 93.8, 33.5);
        e.bezierCurveTo(91.7, 33.4, 89.6, 33.2, 87.6, 33.1);
        e.bezierCurveTo(85.5, 32.9, 83.4, 32.8, 81.4, 32.6);
        e.bezierCurveTo(80.3, 32.6, 79.3, 32.5, 78.2, 32.4);
        e.bezierCurveTo(77.2, 32.2, 76.2, 32.2, 75.1, 32.2);
        e.lineTo(75.1, 145.8);
        e.lineTo(90.7, 145.8);
        e.lineTo(90.7, 152.2);
        e.lineTo(42.8, 152.2);
        e.lineTo(42.8, 145.8);
        e.lineTo(58.7, 145.8);
        e.lineTo(58.7, 30.8);
        e.bezierCurveTo(58.1, 30.8, 57.5, 30.8, 56.8, 30.7);
        e.bezierCurveTo(56.2, 30.7, 55.5, 30.6, 55, 30.6);
        e.bezierCurveTo(54.4, 30.5, 53.7, 30.4, 53.1, 30.4);
        e.bezierCurveTo(52.4, 30.4, 51.8, 30.4, 51.2, 30.4);
        e.bezierCurveTo(50.9, 30.4, 50.6, 30.4, 50.3, 30.4);
        e.bezierCurveTo(50, 30.4, 49.7, 30.3, 49.4, 30.2);
        e.bezierCurveTo(49, 30.2, 48.6, 30.2, 48.3, 30.2);
        e.bezierCurveTo(48, 30.2, 47.7, 30.2, 47.4, 30.2);
        e.bezierCurveTo(46.1, 30.2, 44.7, 30.2, 43.4, 30.3);
        e.bezierCurveTo(42.1, 30.4, 40.8, 30.5, 39.4, 30.8);
        e.bezierCurveTo(31.9, 31.9, 25, 34.6, 18.8, 39.2);
        e.bezierCurveTo(12.6, 43.7, 9.5, 50, 9.5, 58.1);
        e.bezierCurveTo(9.5, 58.3, 9.5, 58.4, 9.5, 58.5);
        e.bezierCurveTo(9.5, 58.5, 9.5, 58.6, 9.5, 58.8);
        e.bezierCurveTo(9.6, 64.3, 11.4, 69.3, 14.7, 74);
        e.bezierCurveTo(18, 78.6, 22.7, 81, 28.8, 81);
        e.bezierCurveTo(29.5, 81, 30.2, 80.9, 30.9, 80.6);
        e.bezierCurveTo(31.5, 80.4, 32.2, 80.2, 32.8, 79.9);
        e.bezierCurveTo(31.1, 79.4, 29.6, 78.4, 28.1, 76.8);
        e.bezierCurveTo(26.6, 75.1, 25.7, 73.4, 25.4, 71.7);
        e.bezierCurveTo(25.3, 71.5, 25.2, 71.3, 25.2, 71.1);
        e.bezierCurveTo(25.2, 70.9, 25.2, 70.6, 25.2, 70.3);
        e.bezierCurveTo(25.2, 69.6, 25.3, 68.9, 25.6, 68.2);
        e.bezierCurveTo(25.8, 67.6, 26.1, 66.9, 26.6, 66.3);
        e.bezierCurveTo(27.3, 65.6, 28.1, 65, 28.9, 64.7);
        e.bezierCurveTo(29.7, 64.3, 30.6, 64.1, 31.7, 64.1);
        e.bezierCurveTo(32, 64.1, 32.3, 64.2, 32.7, 64.2);
        e.bezierCurveTo(33, 64.3, 33.4, 64.4, 33.7, 64.6);
        e.bezierCurveTo(34.4, 64.7, 35.1, 64.9, 35.8, 65.2);
        e.bezierCurveTo(36.4, 65.5, 37.1, 66, 37.6, 66.6);
        e.bezierCurveTo(39.1, 67.7, 40.2, 69.1, 40.9, 70.5);
        e.bezierCurveTo(41.5, 72, 41.9, 73.7, 41.9, 75.4);
        e.bezierCurveTo(41.9, 78.4, 40.9, 80.9, 39.1, 82.9);
        e.bezierCurveTo(37.2, 84.9, 34.8, 86.2, 31.9, 87);
        e.bezierCurveTo(31.3, 87.1, 30.7, 87.2, 30.2, 87.3);
        e.bezierCurveTo(29.7, 87.4, 29.1, 87.4, 28.3, 87.4);
        e.bezierCurveTo(28, 87.4, 27.7, 87.4, 27.4, 87.4);
        e.bezierCurveTo(27.1, 87.4, 26.9, 87.3, 26.6, 87.2);
        e.bezierCurveTo(23.6, 86.9, 20.7, 86, 17.8, 84.4);
        e.bezierCurveTo(14.9, 82.9, 12.4, 81, 10.4, 78.8);
        e.bezierCurveTo(8.1, 76.2, 6.5, 73.5, 5.4, 70.4);
        e.bezierCurveTo(4.3, 67.4, 3.6, 64.3, 3.3, 61.2);
        e.bezierCurveTo(3.3, 60.8, 3.3, 60.4, 3.3, 60);
        e.bezierCurveTo(3.3, 59.6, 3.3, 59.2, 3.3, 58.8);
        e.bezierCurveTo(3.3, 57.8, 3.3, 56.8, 3.4, 55.9);
        e.bezierCurveTo(3.4, 55, 3.6, 54.1, 3.7, 53.2);
        e.bezierCurveTo(5.2, 44.1, 9.6, 36.9, 17, 31.7);
        e.bezierCurveTo(24.4, 26.5, 32.4, 23.2, 41, 21.7);
        e.bezierCurveTo(42.8, 21.4, 44.5, 21.2, 46.3, 21.1);
        e.bezierCurveTo(48.1, 20.9, 49.8, 20.9, 51.4, 20.9);
        e.bezierCurveTo(56, 20.9, 60.6, 20.9, 65.2, 20.9);
        e.bezierCurveTo(69.7, 20.9, 74.3, 20.9, 78.9, 21.1);
        e.bezierCurveTo(81, 21.2, 83, 21.3, 84.9, 21.4);
        e.bezierCurveTo(86.8, 21.5, 88.7, 21.5, 90.7, 21.5);
        e.bezierCurveTo(92.1, 21.5, 93.6, 21.5, 94.9, 21.4);
        e.bezierCurveTo(96.2, 21.3, 97.5, 21.2, 98.7, 21.1);
        e.bezierCurveTo(102.1, 20.6, 104.8, 19.5, 107, 17.7);
        e.bezierCurveTo(109.1, 16, 110.2, 13.2, 110.2, 9.3);
        e.bezierCurveTo(110.2, 8.9, 110.2, 8.4, 110.2, 7.9);
        e.bezierCurveTo(110.2, 7.4, 110.1, 6.8, 110, 6.2);
        e.lineTo(116.4, 5.3);
        e.bezierCurveTo(116.4, 5.8, 116.4, 6.2, 116.5, 6.5);
        e.bezierCurveTo(116.6, 6.9, 116.6, 7.2, 116.6, 7.5);
        e.bezierCurveTo(116.6, 7.8, 116.6, 8.2, 116.6, 8.5);
        e.bezierCurveTo(116.6, 8.9, 116.6, 9.2, 116.6, 9.5);
        e.bezierCurveTo(116.6, 10, 116.6, 10.4, 116.6, 10.9);
        e.bezierCurveTo(116.6, 11.3, 116.6, 11.8, 116.6, 12.2);
        e.bezierCurveTo(116.6, 12.5, 116.6, 12.8, 116.6, 13.2);
        e.closePath();
        e.moveTo(68.9, 31.5);
        e.bezierCurveTo(68.6, 31.5, 68.3, 31.5, 68, 31.5);
        e.bezierCurveTo(67.7, 31.5, 67.4, 31.4, 67.2, 31.3);
        e.bezierCurveTo(66.7, 31.3, 66.3, 31.3, 66, 31.3);
        e.bezierCurveTo(65.7, 31.3, 65.5, 31.3, 65.2, 31.3);
        e.lineTo(65.2, 145.8);
        e.lineTo(68.9, 145.8);
        e.lineTo(68.9, 31.5);
        e.closePath();
        e.moveTo(194, 133);
        e.bezierCurveTo(185.1, 146.7, 173.5, 153.5, 159.3, 153.5);
        e.bezierCurveTo(145.2, 153.5, 133.6, 146.7, 124.7, 133);
        e.bezierCurveTo(115.7, 119.3, 111.3, 104.1, 111.3, 87.4);
        e.bezierCurveTo(111.3, 70.7, 115.7, 55.5, 124.6, 41.7);
        e.bezierCurveTo(133.4, 28, 145, 21.1, 159.3, 21.1);
        e.bezierCurveTo(173.5, 21.1, 185.1, 27.9, 194, 41.6);
        e.bezierCurveTo(203, 55.3, 207.4, 70.5, 207.4, 87.4);
        e.bezierCurveTo(207.4, 104.1, 203, 119.3, 194, 133);
        e.closePath();
        e.moveTo(121.8, 109.1);
        e.bezierCurveTo(120.3, 101.9, 119.7, 94.6, 119.8, 87.2);
        e.bezierCurveTo(119.8, 79.8, 120.5, 72.5, 121.9, 65.4);
        e.bezierCurveTo(123.3, 58.3, 125.5, 51.8, 128.5, 45.7);
        e.bezierCurveTo(124.4, 51.5, 121.4, 58, 119.4, 65.2);
        e.bezierCurveTo(117.4, 72.5, 116.4, 79.9, 116.4, 87.4);
        e.bezierCurveTo(116.4, 94.9, 117.4, 102.3, 119.4, 109.6);
        e.bezierCurveTo(121.4, 116.8, 124.4, 123.3, 128.5, 129.1);
        e.bezierCurveTo(125.5, 123, 123.3, 116.4, 121.8, 109.1);
        e.closePath();
        e.moveTo(191.3, 109.9);
        e.bezierCurveTo(193.1, 102.5, 193.9, 94.9, 193.8, 87.2);
        e.bezierCurveTo(193.8, 86.7, 193.8, 86.3, 193.8, 85.9);
        e.bezierCurveTo(193.8, 85.4, 193.8, 85, 193.8, 84.5);
        e.bezierCurveTo(193.5, 77.4, 192.6, 70.4, 190.9, 63.4);
        e.bezierCurveTo(189.3, 56.5, 186.8, 50.2, 183.5, 44.6);
        e.bezierCurveTo(180.4, 39.3, 176.8, 35.1, 172.7, 31.9);
        e.bezierCurveTo(168.5, 28.8, 164.1, 27.3, 159.3, 27.3);
        e.bezierCurveTo(154.6, 27.3, 150.2, 28.8, 146, 31.9);
        e.bezierCurveTo(141.9, 35.1, 138.3, 39.3, 135.2, 44.6);
        e.bezierCurveTo(131.8, 50.5, 129.2, 57.2, 127.4, 64.7);
        e.bezierCurveTo(125.6, 72.1, 124.8, 79.8, 124.9, 87.6);
        e.bezierCurveTo(124.9, 88.1, 124.9, 88.5, 124.9, 89);
        e.bezierCurveTo(124.9, 89.4, 124.9, 89.8, 124.9, 90.3);
        e.bezierCurveTo(125.2, 97.4, 126.1, 104.4, 127.8, 111.4);
        e.bezierCurveTo(129.4, 118.3, 131.9, 124.6, 135.2, 130.2);
        e.bezierCurveTo(138.6, 135.8, 142.4, 140.1, 146.6, 143);
        e.bezierCurveTo(150.7, 145.9, 155, 147.3, 159.3, 147.3);
        e.bezierCurveTo(163.7, 147.3, 168, 145.9, 172.2, 143);
        e.bezierCurveTo(176.4, 140.1, 180.2, 135.8, 183.5, 130.2);
        e.bezierCurveTo(186.9, 124.2, 189.5, 117.4, 191.3, 109.9);
        e.closePath();
        e.moveTo(199.3, 109.4);
        e.bezierCurveTo(201.3, 102.1, 202.3, 94.7, 202.3, 87.2);
        e.bezierCurveTo(202.3, 86.7, 202.3, 86.3, 202.3, 85.9);
        e.bezierCurveTo(202.3, 85.4, 202.3, 85, 202.3, 84.5);
        e.bezierCurveTo(202.1, 77.6, 200.9, 70.7, 198.8, 64);
        e.bezierCurveTo(196.8, 57.3, 193.8, 51.2, 190.1, 45.7);
        e.bezierCurveTo(193.1, 51.8, 195.4, 58.4, 196.8, 65.7);
        e.bezierCurveTo(198.2, 72.9, 198.9, 80.2, 198.9, 87.6);
        e.bezierCurveTo(198.9, 94.9, 198.2, 102.1, 196.7, 109.3);
        e.bezierCurveTo(195.2, 116.4, 193, 123, 190.1, 129.1);
        e.bezierCurveTo(194.2, 123.2, 197.3, 116.6, 199.3, 109.4);
        e.closePath();
        this.graphics = e
    };
    a.To2 = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = StyleManager.LIGHT_AQUA.red;
        var b = StyleManager.LIGHT_AQUA.green;
        var c = StyleManager.LIGHT_AQUA.blue;
        var d = StyleManager.LIGHT_AQUA.alpha;
        var e = new Graphics;
        e.beginFill(Graphics.getRGB(a, b, c, d));
        e.moveTo(22.8, 90.9);
        e.bezierCurveTo(22.8, 92.7, 21.9, 93.7, 20, 93.7);
        e.lineTo(15.1, 93.7);
        e.bezierCurveTo(13.3, 93.7, 12.4, 92.8, 12.3, 91);
        e.bezierCurveTo(12.2, 89, 13.2, 88.1, 15.1, 88.1);
        e.lineTo(17.2, 88.1);
        e.lineTo(17.2, 7);
        e.lineTo(7.1, 7);
        e.lineTo(7.1, 12.3);
        e.bezierCurveTo(7.1, 14.1, 6.3, 15, 4.5, 15.1);
        e.bezierCurveTo(2.5, 15.2, 1.5, 14.3, 1.5, 12.3);
        e.lineTo(1.5, 4.2);
        e.bezierCurveTo(1.5, 2.3, 2.5, 1.4, 4.3, 1.4);
        e.lineTo(36.4, 1.4);
        e.bezierCurveTo(38.3, 1.4, 39.2, 2.3, 39.2, 4.2);
        e.lineTo(39.2, 10.8);
        e.bezierCurveTo(39.2, 12.6, 38.3, 13.5, 36.5, 13.6);
        e.bezierCurveTo(34.6, 13.7, 33.6, 12.7, 33.6, 10.8);
        e.lineTo(33.6, 7);
        e.lineTo(22.8, 7);
        e.lineTo(22.8, 90.9);
        e.closePath();
        e.moveTo(129.1, 47.9);
        e.bezierCurveTo(129.1, 61, 124.8, 72.3, 116.3, 81.6);
        e.bezierCurveTo(107.8, 91, 97.7, 95.6, 86, 95.6);
        e.bezierCurveTo(74, 95.6, 63.8, 91, 55.4, 81.6);
        e.bezierCurveTo(47, 72.3, 42.8, 61, 42.8, 47.9);
        e.bezierCurveTo(42.8, 34.6, 47.1, 23.3, 55.5, 14);
        e.bezierCurveTo(64, 4.7, 74.1, 0, 86, 0);
        e.bezierCurveTo(97.7, 0, 107.8, 4.7, 116.3, 14.1);
        e.bezierCurveTo(124.8, 23.5, 129.1, 34.7, 129.1, 47.9);
        e.closePath();
        e.moveTo(122.9, 47.9);
        e.bezierCurveTo(122.9, 36.4, 119.3, 26.6, 112.1, 18.4);
        e.bezierCurveTo(104.8, 10.2, 96.1, 6.2, 86, 6.2);
        e.bezierCurveTo(75.7, 6.2, 67, 10.2, 59.8, 18.4);
        e.bezierCurveTo(52.6, 26.6, 49, 36.4, 49, 47.9);
        e.bezierCurveTo(49, 59.4, 52.6, 69.2, 59.8, 77.3);
        e.bezierCurveTo(67, 85.4, 75.7, 89.5, 86, 89.5);
        e.bezierCurveTo(96.1, 89.5, 104.8, 85.4, 112.1, 77.2);
        e.bezierCurveTo(119.3, 69, 122.9, 59.3, 122.9, 47.9);
        e.closePath();
        e.moveTo(176.5, 93.9);
        e.lineTo(167.3, 93.9);
        e.bezierCurveTo(165.2, 93.9, 164.2, 92.9, 164.2, 90.9);
        e.bezierCurveTo(164.2, 88.8, 165.2, 87.8, 167.3, 87.8);
        e.lineTo(168.1, 87.8);
        e.lineTo(168.1, 7.3);
        e.lineTo(166.5, 7.3);
        e.bezierCurveTo(164.1, 7.3, 163.1, 6.1, 163.4, 3.8);
        e.bezierCurveTo(163.7, 2, 164.7, 1.1, 166.5, 1.1);
        e.lineTo(195, 1.1);
        e.bezierCurveTo(197.1, 1.1, 198.1, 2.1, 198.1, 4.2);
        e.lineTo(198.1, 12.2);
        e.bezierCurveTo(198.1, 14.3, 197, 15.4, 194.9, 15.3);
        e.bezierCurveTo(192.9, 15.2, 191.9, 14.1, 191.9, 12.2);
        e.lineTo(191.9, 7.3);
        e.lineTo(174.3, 7.3);
        e.lineTo(174.3, 70);
        e.bezierCurveTo(174.9, 70.1, 175.6, 70.1, 176.3, 70.1);
        e.bezierCurveTo(180.5, 70.1, 184.3, 68.8, 187.6, 66.1);
        e.bezierCurveTo(189.5, 64.6, 191, 64.6, 192.4, 66.2);
        e.bezierCurveTo(193.7, 67.8, 193.4, 69.3, 191.5, 70.8);
        e.bezierCurveTo(187, 74.5, 181.9, 76.3, 176.3, 76.3);
        e.bezierCurveTo(175.6, 76.3, 174.9, 76.3, 174.3, 76.2);
        e.lineTo(174.3, 87.8);
        e.lineTo(176.5, 87.8);
        e.bezierCurveTo(178.4, 87.8, 179.4, 88.7, 179.6, 90.6);
        e.bezierCurveTo(179.7, 92.8, 178.7, 93.9, 176.5, 93.9);
        e.closePath();
        e.moveTo(213.2, 93.7);
        e.lineTo(209.3, 93.7);
        e.bezierCurveTo(207.4, 93.7, 206.5, 92.7, 206.5, 90.9);
        e.lineTo(206.5, 6.4);
        e.lineTo(205, 6.9);
        e.bezierCurveTo(203.5, 7.2, 202.4, 6.8, 201.9, 5.5);
        e.bezierCurveTo(200.9, 3.3, 201.6, 2, 203.8, 1.5);
        e.lineTo(208.7, .4);
        e.bezierCurveTo(211, -0, 212.1, .8, 212.1, 3.1);
        e.lineTo(212.1, 88.1);
        e.lineTo(213.2, 88.1);
        e.bezierCurveTo(215.3, 88.1, 216.2, 89.1, 216, 91.1);
        e.bezierCurveTo(215.8, 92.8, 214.9, 93.7, 213.2, 93.7);
        e.closePath();
        e.moveTo(241.4, 90.9);
        e.bezierCurveTo(241.4, 92.7, 240.4, 93.7, 238.6, 93.7);
        e.lineTo(233.7, 93.7);
        e.bezierCurveTo(231.9, 93.7, 230.9, 92.8, 230.9, 91);
        e.bezierCurveTo(230.8, 89, 231.7, 88.1, 233.7, 88.1);
        e.lineTo(235.8, 88.1);
        e.lineTo(235.8, 7);
        e.lineTo(225.7, 7);
        e.lineTo(225.7, 12.3);
        e.bezierCurveTo(225.7, 14.1, 224.8, 15, 223, 15.1);
        e.bezierCurveTo(221.1, 15.2, 220.1, 14.3, 220.1, 12.3);
        e.lineTo(220.1, 4.2);
        e.bezierCurveTo(220.1, 2.3, 221, 1.4, 222.9, 1.4);
        e.lineTo(254.9, 1.4);
        e.bezierCurveTo(256.8, 1.4, 257.7, 2.3, 257.7, 4.2);
        e.lineTo(257.7, 10.8);
        e.bezierCurveTo(257.7, 12.6, 256.8, 13.5, 255.1, 13.6);
        e.bezierCurveTo(253.1, 13.7, 252.1, 12.7, 252.1, 10.8);
        e.lineTo(252.1, 7);
        e.lineTo(241.4, 7);
        e.lineTo(241.4, 90.9);
        e.closePath();
        e.moveTo(329, 55.3);
        e.bezierCurveTo(327, 55.3, 326, 54.3, 326, 52.4);
        e.bezierCurveTo(326, 51.7, 326.3, 51, 326.8, 50.3);
        e.bezierCurveTo(329.6, 45.3, 331.1, 40.4, 331.1, 35.4);
        e.bezierCurveTo(331.1, 27.4, 328.4, 20.5, 323, 14.8);
        e.bezierCurveTo(317.6, 9, 310.9, 6.2, 302.9, 6.2);
        e.bezierCurveTo(292.2, 6.2, 283.4, 10.4, 276.5, 18.8);
        e.bezierCurveTo(270, 26.6, 266.8, 36, 266.8, 47);
        e.bezierCurveTo(266.8, 57.9, 270.3, 67.3, 277.3, 75.3);
        e.bezierCurveTo(284.7, 83.6, 293.7, 87.8, 304.3, 87.8);
        e.bezierCurveTo(311.6, 87.8, 318.7, 85.6, 325.6, 81.2);
        e.bezierCurveTo(326.3, 80.8, 326.9, 80.6, 327.4, 80.6);
        e.bezierCurveTo(329.6, 80.6, 330.7, 81.7, 330.7, 83.9);
        e.bezierCurveTo(330.7, 84.7, 330.2, 85.5, 329.3, 86.2);
        e.bezierCurveTo(322.8, 91.4, 314.5, 93.9, 304.3, 93.9);
        e.bezierCurveTo(292, 93.9, 281.6, 89.2, 273, 79.7);
        e.bezierCurveTo(264.8, 70.4, 260.7, 59.5, 260.7, 47);
        e.bezierCurveTo(260.7, 34.3, 264.5, 23.5, 272.1, 14.4);
        e.bezierCurveTo(280.2, 4.8, 290.4, 0, 302.9, 0);
        e.bezierCurveTo(312.6, 0, 320.7, 3.4, 327.3, 10.3);
        e.bezierCurveTo(333.9, 17.2, 337.2, 25.4, 337.2, 35.1);
        e.bezierCurveTo(337.2, 37.3, 337.1, 39.5, 336.7, 41.7);
        e.bezierCurveTo(337.1, 41.4, 337.5, 41.3, 337.9, 41.3);
        e.bezierCurveTo(340, 41.3, 341, 42.4, 341, 44.7);
        e.bezierCurveTo(341, 45.5, 340.7, 46.2, 339.9, 46.9);
        e.lineTo(331.9, 53.9);
        e.bezierCurveTo(330.8, 54.8, 329.8, 55.3, 329, 55.3);
        e.closePath();
        this.graphics = e
    };
    a.ToFitc = b
})(window);
(function(a) {
    function b(a, b, c, d, e) {
        console.log("MaskLine ");
        this.initialize(a, b, c, d, e)
    }
    b.prototype = new Graphics;
    b.prototype.Graphics_initialize = b.prototype.initialize;
    b.prototype.Graphics = b.prototype.tick;
    b.prototype.initialize = function(a, b, c, d, e) {
        this.width = a;
        this.height = b;
        this.step = c;
        this.orientation = d;
        this.direction = e;
        this.currentWidth = 0;
        this.currentHeight = 0;
        this.animIsCompleted = false;
        this.Graphics_initialize()
    };
    b.prototype.tick = function() {
        this.update()
    };
    b.prototype.update = function() {
        if (this.orientation == "vertical") {
            if (this.currentWidth < this.width) {
                this.clear();
                var a = this.direction == "right" ? 0 : this.width - this.currentWidth;
                this.drawRect(a, 0, this.currentWidth, this.height);
                this.endFill();
                this.currentWidth += this.step
            } else {
                this.clear();
                var a = 0;
                this.drawRect(a, 0, this.width, this.height);
                this.endFill();
                this.animIsCompleted = true
            }
        } else if (this.orientation == "horizontal") {
            if (this.currentHeight < this.height) {
                this.clear();
                var b = this.direction == "right" ? 0 : this.height - this.currentHeight;
                this.drawRect(0, b, this.width, this.currentHeight);
                this.endFill();
                this.currentHeight += this.step
            } else {
                this.clear();
                var b = 0;
                this.drawRect(0, b, this.width, this.height);
                this.endFill();
                this.animIsCompleted = true
            }
        }
    };
    a.MaskLine = b
})(window);
(function(a) {
    function b(a, b, c, d, e) {
        this.initialize(a, b, c, d, e)
    }
    b.prototype = new Graphics;
    b.prototype.Graphics_initialize = b.prototype.initialize;
    b.prototype.Graphics = b.prototype.tick;
    b.prototype.initialize = function(a, b, c, d, e) {
        this.coord1 = a;
        this.coord2 = b;
        this.step = c;
        this.orientation = d;
        this.direction = e;
        this.currentStep = 0;
        this.animIsCompleted = false;
        this.Graphics_initialize()
    };
    b.prototype.update = function() {
        if (this.currentStep < this.step) {
            var a = this.step - this.currentStep;
            var b = new Point;
            b.x = this.coord1[1].x - (this.coord1[1].x - this.coord1[0].x) / a;
            b.y = this.coord1[1].y - (this.coord1[1].y - this.coord1[0].y) / a;
            var c = new Point;
            c.x = this.coord2[1].x - (this.coord2[1].x - this.coord2[0].x) / a;
            c.y = this.coord2[1].y - (this.coord2[1].y - this.coord2[0].y) / a;
            this.currentStep++;
            this.moveTo(this.coord1[1].x, this.coord1[1].y);
            this.lineTo(b.x, b.y);
            this.lineTo(c.x, c.y);
            this.lineTo(this.coord2[1].x, this.coord2[1].y);
            this.endFill()
        } else {
            this.animIsCompleted = true
        }
    };
    a.MaskLineAngle = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = new Graphics;
        a.beginFill(Graphics.getRGB(254, 199, 16));
        a.moveTo(52.1, 104.1);
        a.lineTo(51.8, 104.1);
        a.lineTo(51.8, 103);
        a.lineTo(52.1, 103);
        a.bezierCurveTo(52.5, 103, 52.9, 103, 53.3, 103);
        a.lineTo(53.3, 104.1);
        a.bezierCurveTo(52.9, 104.1, 52.5, 104.1, 52.1, 104.1);
        a.closePath();
        a.moveTo(50.3, 104.1);
        a.bezierCurveTo(49.8, 104.1, 49.3, 104, 48.8, 104);
        a.lineTo(48.9, 102.9);
        a.bezierCurveTo(49.4, 102.9, 49.9, 102.9, 50.4, 103);
        a.lineTo(50.3, 104.1);
        a.closePath();
        a.moveTo(54.8, 104);
        a.lineTo(54.8, 102.9);
        a.bezierCurveTo(55.2, 102.9, 55.7, 102.9, 56.2, 102.8);
        a.lineTo(56.3, 103.9);
        a.bezierCurveTo(55.8, 104, 55.3, 104, 54.8, 104);
        a.closePath();
        a.moveTo(47.3, 103.9);
        a.bezierCurveTo(46.8, 103.8, 46.3, 103.8, 45.8, 103.7);
        a.lineTo(46, 102.6);
        a.bezierCurveTo(46.5, 102.7, 46.9, 102.7, 47.4, 102.8);
        a.lineTo(47.3, 103.9);
        a.closePath();
        a.moveTo(57.8, 103.8);
        a.lineTo(57.7, 102.7);
        a.bezierCurveTo(58.2, 102.6, 58.6, 102.6, 59.1, 102.5);
        a.lineTo(59.3, 103.6);
        a.bezierCurveTo(58.8, 103.7, 58.3, 103.7, 57.8, 103.8);
        a.closePath();
        a.moveTo(44.4, 103.5);
        a.bezierCurveTo(43.9, 103.5, 43.4, 103.4, 42.9, 103.3);
        a.lineTo(43.1, 102.2);
        a.bezierCurveTo(43.5, 102.3, 44, 102.4, 44.5, 102.4);
        a.lineTo(44.4, 103.5);
        a.closePath();
        a.moveTo(60.8, 103.4);
        a.lineTo(60.6, 102.3);
        a.bezierCurveTo(61.1, 102.2, 61.5, 102.1, 62, 102);
        a.lineTo(62.2, 103.1);
        a.bezierCurveTo(61.8, 103.2, 61.3, 103.3, 60.8, 103.4);
        a.closePath();
        a.moveTo(41.4, 103);
        a.bezierCurveTo(40.9, 102.9, 40.4, 102.8, 39.9, 102.7);
        a.lineTo(40.2, 101.6);
        a.bezierCurveTo(40.7, 101.7, 41.2, 101.8, 41.6, 101.9);
        a.lineTo(41.4, 103);
        a.closePath();
        a.moveTo(63.7, 102.8);
        a.lineTo(63.5, 101.7);
        a.bezierCurveTo(63.9, 101.6, 64.4, 101.5, 64.9, 101.3);
        a.lineTo(65.2, 102.4);
        a.bezierCurveTo(64.7, 102.6, 64.2, 102.7, 63.7, 102.8);
        a.closePath();
        a.moveTo(38.5, 102.3);
        a.bezierCurveTo(38, 102.2, 37.5, 102.1, 37, 101.9);
        a.lineTo(37.4, 100.9);
        a.bezierCurveTo(37.8, 101, 38.3, 101.1, 38.8, 101.3);
        a.lineTo(38.5, 102.3);
        a.closePath();
        a.moveTo(66.6, 102);
        a.lineTo(66.3, 101);
        a.bezierCurveTo(66.8, 100.8, 67.2, 100.7, 67.7, 100.5);
        a.lineTo(68, 101.6);
        a.bezierCurveTo(67.6, 101.7, 67.1, 101.9, 66.6, 102);
        a.closePath();
        a.moveTo(35.6, 101.5);
        a.bezierCurveTo(35.1, 101.3, 34.7, 101.1, 34.2, 101);
        a.lineTo(34.6, 99.9);
        a.bezierCurveTo(35, 100.1, 35.5, 100.3, 36, 100.4);
        a.lineTo(35.6, 101.5);
        a.closePath();
        a.moveTo(69.5, 101.1);
        a.lineTo(69.1, 100.1);
        a.bezierCurveTo(69.6, 99.9, 70, 99.7, 70.5, 99.5);
        a.lineTo(70.9, 100.6);
        a.bezierCurveTo(70.4, 100.8, 69.9, 100.9, 69.5, 101.1);
        a.closePath();
        a.moveTo(32.8, 100.4);
        a.bezierCurveTo(32.3, 100.3, 31.9, 100.1, 31.4, 99.9);
        a.lineTo(31.9, 98.8);
        a.bezierCurveTo(32.3, 99, 32.8, 99.2, 33.2, 99.4);
        a.lineTo(32.8, 100.4);
        a.closePath();
        a.moveTo(72.3, 100);
        a.lineTo(71.8, 99);
        a.bezierCurveTo(72.3, 98.8, 72.7, 98.6, 73.2, 98.4);
        a.lineTo(73.6, 99.4);
        a.bezierCurveTo(73.2, 99.6, 72.7, 99.8, 72.3, 100);
        a.closePath();
        a.moveTo(30, 99.3);
        a.bezierCurveTo(29.6, 99, 29.1, 98.8, 28.7, 98.6);
        a.lineTo(29.2, 97.6);
        a.bezierCurveTo(29.6, 97.8, 30.1, 98, 30.5, 98.2);
        a.lineTo(30, 99.3);
        a.closePath();
        a.moveTo(75, 98.8);
        a.lineTo(74.5, 97.8);
        a.bezierCurveTo(74.9, 97.5, 75.4, 97.3, 75.8, 97.1);
        a.lineTo(76.3, 98.1);
        a.bezierCurveTo(75.9, 98.3, 75.5, 98.5, 75, 98.8);
        a.closePath();
        a.moveTo(27.4, 97.9);
        a.bezierCurveTo(26.9, 97.7, 26.5, 97.4, 26.1, 97.2);
        a.lineTo(26.6, 96.2);
        a.bezierCurveTo(27, 96.5, 27.5, 96.7, 27.9, 96.9);
        a.lineTo(27.4, 97.9);
        a.closePath();
        a.moveTo(77.7, 97.4);
        a.lineTo(77.1, 96.4);
        a.bezierCurveTo(77.5, 96.1, 78, 95.9, 78.4, 95.6);
        a.lineTo(78.9, 96.6);
        a.bezierCurveTo(78.5, 96.9, 78.1, 97.1, 77.7, 97.4);
        a.closePath();
        a.moveTo(24.8, 96.4);
        a.bezierCurveTo(24.3, 96.1, 23.9, 95.9, 23.5, 95.6);
        a.lineTo(24.1, 94.7);
        a.bezierCurveTo(24.5, 94.9, 24.9, 95.2, 25.4, 95.5);
        a.lineTo(24.8, 96.4);
        a.closePath();
        a.moveTo(80.2, 95.8);
        a.lineTo(79.6, 94.9);
        a.bezierCurveTo(80, 94.6, 80.4, 94.3, 80.8, 94);
        a.lineTo(81.5, 95);
        a.bezierCurveTo(81.1, 95.2, 80.6, 95.5, 80.2, 95.8);
        a.closePath();
        a.moveTo(22.3, 94.8);
        a.bezierCurveTo(21.9, 94.5, 21.4, 94.2, 21, 93.9);
        a.lineTo(21.7, 93);
        a.bezierCurveTo(22.1, 93.3, 22.5, 93.6, 22.9, 93.8);
        a.lineTo(22.3, 94.8);
        a.closePath();
        a.moveTo(82.7, 94.1);
        a.lineTo(82, 93.2);
        a.bezierCurveTo(82.4, 92.9, 82.8, 92.6, 83.2, 92.3);
        a.lineTo(83.9, 93.2);
        a.bezierCurveTo(83.5, 93.5, 83.1, 93.8, 82.7, 94.1);
        a.closePath();
        a.moveTo(19.9, 93);
        a.bezierCurveTo(19.5, 92.7, 19.1, 92.3, 18.7, 92);
        a.lineTo(19.4, 91.2);
        a.bezierCurveTo(19.8, 91.5, 20.2, 91.8, 20.5, 92.1);
        a.lineTo(19.9, 93);
        a.closePath();
        a.moveTo(85.1, 92.3);
        a.lineTo(84.4, 91.4);
        a.bezierCurveTo(84.7, 91.1, 85.1, 90.8, 85.5, 90.4);
        a.lineTo(86.2, 91.3);
        a.bezierCurveTo(85.8, 91.6, 85.4, 91.9, 85.1, 92.3);
        a.closePath();
        a.moveTo(17.6, 91);
        a.bezierCurveTo(17.2, 90.7, 16.8, 90.4, 16.4, 90);
        a.lineTo(17.2, 89.2);
        a.bezierCurveTo(17.6, 89.6, 17.9, 89.9, 18.3, 90.2);
        a.lineTo(17.6, 91);
        a.closePath();
        a.moveTo(87.3, 90.3);
        a.lineTo(86.6, 89.5);
        a.bezierCurveTo(86.9, 89.1, 87.3, 88.8, 87.6, 88.5);
        a.lineTo(88.4, 89.3);
        a.bezierCurveTo(88.1, 89.6, 87.7, 89.9, 87.3, 90.3);
        a.closePath();
        a.moveTo(15.4, 89);
        a.lineTo(14.9, 88.5);
        a.bezierCurveTo(14.7, 88.3, 14.5, 88.1, 14.3, 87.9);
        a.lineTo(15.1, 87.1);
        a.bezierCurveTo(15.3, 87.3, 15.5, 87.5, 15.7, 87.7);
        a.lineTo(16.2, 88.2);
        a.lineTo(15.4, 89);
        a.closePath();
        a.moveTo(89.5, 88.2);
        a.lineTo(88.7, 87.4);
        a.bezierCurveTo(89, 87.1, 89.3, 86.7, 89.7, 86.3);
        a.lineTo(90.5, 87.1);
        a.bezierCurveTo(90.2, 87.5, 89.8, 87.8, 89.5, 88.2);
        a.closePath();
        a.moveTo(13.3, 86.8);
        a.bezierCurveTo(13, 86.4, 12.6, 86.1, 12.3, 85.7);
        a.lineTo(13.2, 85);
        a.bezierCurveTo(13.5, 85.3, 13.8, 85.7, 14.1, 86.1);
        a.lineTo(13.3, 86.8);
        a.closePath();
        a.moveTo(91.5, 86);
        a.lineTo(90.6, 85.3);
        a.bezierCurveTo(91, 84.9, 91.3, 84.5, 91.6, 84.1);
        a.lineTo(92.4, 84.8);
        a.bezierCurveTo(92.1, 85.2, 91.8, 85.6, 91.5, 86);
        a.closePath();
        a.moveTo(11.4, 84.5);
        a.bezierCurveTo(11.1, 84.1, 10.7, 83.7, 10.4, 83.3);
        a.lineTo(11.3, 82.7);
        a.bezierCurveTo(11.6, 83.1, 11.9, 83.5, 12.2, 83.8);
        a.lineTo(11.4, 84.5);
        a.closePath();
        a.moveTo(93.4, 83.7);
        a.lineTo(92.5, 83);
        a.bezierCurveTo(92.8, 82.6, 93.1, 82.2, 93.4, 81.8);
        a.lineTo(94.3, 82.5);
        a.bezierCurveTo(94, 82.9, 93.7, 83.3, 93.4, 83.7);
        a.closePath();
        a.moveTo(9.6, 82.1);
        a.bezierCurveTo(9.3, 81.7, 9, 81.3, 8.7, 80.9);
        a.lineTo(9.6, 80.3);
        a.bezierCurveTo(9.9, 80.7, 10.2, 81.1, 10.5, 81.5);
        a.lineTo(9.6, 82.1);
        a.closePath();
        a.moveTo(95.1, 81.2);
        a.lineTo(94.2, 80.6);
        a.bezierCurveTo(94.5, 80.2, 94.8, 79.8, 95, 79.4);
        a.lineTo(96, 80);
        a.bezierCurveTo(95.7, 80.4, 95.4, 80.8, 95.1, 81.2);
        a.closePath();
        a.moveTo(7.9, 79.7);
        a.bezierCurveTo(7.6, 79.2, 7.4, 78.8, 7.1, 78.4);
        a.lineTo(8.1, 77.8);
        a.bezierCurveTo(8.3, 78.2, 8.6, 78.6, 8.8, 79.1);
        a.lineTo(7.9, 79.7);
        a.closePath();
        a.moveTo(96.7, 78.7);
        a.lineTo(95.8, 78.1);
        a.bezierCurveTo(96, 77.7, 96.3, 77.3, 96.5, 76.9);
        a.lineTo(97.5, 77.4);
        a.bezierCurveTo(97.2, 77.8, 97, 78.3, 96.7, 78.7);
        a.closePath();
        a.moveTo(6.4, 77.1);
        a.bezierCurveTo(6.1, 76.6, 5.9, 76.2, 5.7, 75.7);
        a.lineTo(6.7, 75.2);
        a.bezierCurveTo(6.9, 75.7, 7.1, 76.1, 7.3, 76.5);
        a.lineTo(6.4, 77.1);
        a.closePath();
        a.moveTo(98.2, 76.1);
        a.lineTo(97.2, 75.6);
        a.bezierCurveTo(97.4, 75.1, 97.7, 74.7, 97.9, 74.3);
        a.lineTo(98.9, 74.8);
        a.bezierCurveTo(98.7, 75.2, 98.4, 75.7, 98.2, 76.1);
        a.closePath();
        a.moveTo(5, 74.4);
        a.bezierCurveTo(4.8, 73.9, 4.6, 73.5, 4.4, 73);
        a.lineTo(5.4, 72.6);
        a.bezierCurveTo(5.6, 73, 5.8, 73.5, 6, 73.9);
        a.lineTo(5, 74.4);
        a.closePath();
        a.moveTo(99.5, 73.4);
        a.lineTo(98.5, 72.9);
        a.bezierCurveTo(98.7, 72.5, 98.9, 72.1, 99.1, 71.6);
        a.lineTo(100.1, 72);
        a.bezierCurveTo(99.9, 72.5, 99.7, 73, 99.5, 73.4);
        a.closePath();
        a.moveTo(3.8, 71.7);
        a.bezierCurveTo(3.6, 71.2, 3.4, 70.7, 3.3, 70.3);
        a.lineTo(4.3, 69.9);
        a.bezierCurveTo(4.5, 70.3, 4.6, 70.8, 4.8, 71.2);
        a.lineTo(3.8, 71.7);
        a.closePath();
        a.moveTo(100.7, 70.6);
        a.lineTo(99.6, 70.2);
        a.bezierCurveTo(99.8, 69.8, 100, 69.3, 100.1, 68.9);
        a.lineTo(101.2, 69.2);
        a.bezierCurveTo(101, 69.7, 100.8, 70.2, 100.7, 70.6);
        a.closePath();
        a.moveTo(2.8, 68.8);
        a.bezierCurveTo(2.6, 68.4, 2.4, 67.9, 2.3, 67.4);
        a.lineTo(3.4, 67.1);
        a.bezierCurveTo(3.5, 67.6, 3.6, 68, 3.8, 68.5);
        a.lineTo(2.8, 68.8);
        a.closePath();
        a.moveTo(101.7, 67.8);
        a.lineTo(100.6, 67.5);
        a.bezierCurveTo(100.7, 67, 100.9, 66.5, 101, 66.1);
        a.lineTo(102.1, 66.4);
        a.bezierCurveTo(101.9, 66.9, 101.8, 67.3, 101.7, 67.8);
        a.closePath();
        a.moveTo(1.9, 66);
        a.bezierCurveTo(1.7, 65.5, 1.6, 65, 1.5, 64.5);
        a.lineTo(2.6, 64.3);
        a.bezierCurveTo(2.7, 64.7, 2.8, 65.2, 2.9, 65.7);
        a.lineTo(1.9, 66);
        a.closePath();
        a.moveTo(102.5, 64.9);
        a.lineTo(101.4, 64.7);
        a.bezierCurveTo(101.5, 64.2, 101.6, 63.7, 101.7, 63.2);
        a.lineTo(102.8, 63.5);
        a.bezierCurveTo(102.7, 64, 102.6, 64.5, 102.5, 64.9);
        a.closePath();
        a.moveTo(1.2, 63.1);
        a.bezierCurveTo(1, 62.6, 1, 62.1, .9, 61.6);
        a.lineTo(2, 61.4);
        a.bezierCurveTo(2, 61.9, 2.1, 62.4, 2.2, 62.8);
        a.lineTo(1.2, 63.1);
        a.closePath();
        a.moveTo(103.1, 62);
        a.lineTo(102, 61.8);
        a.bezierCurveTo(102.1, 61.3, 102.2, 60.8, 102.3, 60.4);
        a.lineTo(103.4, 60.5);
        a.bezierCurveTo(103.3, 61, 103.2, 61.5, 103.1, 62);
        a.closePath();
        a.moveTo(.6, 60.1);
        a.bezierCurveTo(.5, 59.6, .5, 59.1, .4, 58.6);
        a.lineTo(1.5, 58.5);
        a.bezierCurveTo(1.6, 59, 1.6, 59.5, 1.7, 59.9);
        a.lineTo(.6, 60.1);
        a.closePath();
        a.moveTo(103.6, 59.1);
        a.lineTo(102.5, 58.9);
        a.bezierCurveTo(102.6, 58.4, 102.6, 57.9, 102.7, 57.5);
        a.lineTo(103.8, 57.6);
        a.bezierCurveTo(103.8, 58.1, 103.7, 58.6, 103.6, 59.1);
        a.closePath();
        a.moveTo(.2, 57.1);
        a.bezierCurveTo(.2, 56.6, .1, 56.1, .1, 55.6);
        a.lineTo(1.2, 55.6);
        a.bezierCurveTo(1.3, 56.1, 1.3, 56.5, 1.3, 57);
        a.lineTo(.2, 57.1);
        a.closePath();
        a.moveTo(103.9, 56.1);
        a.lineTo(102.8, 56);
        a.bezierCurveTo(102.9, 55.5, 102.9, 55, 102.9, 54.5);
        a.lineTo(104, 54.6);
        a.bezierCurveTo(104, 55.1, 104, 55.6, 103.9, 56.1);
        a.closePath();
        a.moveTo(0, 54.1);
        a.bezierCurveTo(0, 53.6, 0, 53.1, 0, 52.6);
        a.lineTo(1.1, 52.6);
        a.bezierCurveTo(1.1, 53.1, 1.1, 53.6, 1.1, 54.1);
        a.lineTo(0, 54.1);
        a.closePath();
        a.moveTo(104.1, 53.1);
        a.lineTo(103, 53.1);
        a.lineTo(103, 52);
        a.lineTo(103, 51.6);
        a.lineTo(104.1, 51.6);
        a.lineTo(104.1, 52);
        a.lineTo(104.1, 53.1);
        a.closePath();
        a.moveTo(1.1, 51.2);
        a.lineTo(0, 51.1);
        a.bezierCurveTo(0, 50.6, 0, 50.1, .1, 49.6);
        a.lineTo(1.2, 49.7);
        a.bezierCurveTo(1.1, 50.2, 1.1, 50.7, 1.1, 51.2);
        a.closePath();
        a.moveTo(102.9, 50.1);
        a.bezierCurveTo(102.9, 49.6, 102.9, 49.1, 102.9, 48.7);
        a.lineTo(104, 48.6);
        a.bezierCurveTo(104, 49.1, 104, 49.6, 104.1, 50.1);
        a.lineTo(102.9, 50.1);
        a.closePath();
        a.moveTo(1.2, 48.2);
        a.lineTo(.1, 48.2);
        a.bezierCurveTo(.2, 47.7, .2, 47.2, .3, 46.7);
        a.lineTo(1.4, 46.8);
        a.bezierCurveTo(1.3, 47.3, 1.3, 47.7, 1.2, 48.2);
        a.closePath();
        a.moveTo(102.8, 47.2);
        a.bezierCurveTo(102.7, 46.7, 102.7, 46.2, 102.6, 45.7);
        a.lineTo(103.7, 45.6);
        a.bezierCurveTo(103.8, 46.1, 103.8, 46.6, 103.9, 47.1);
        a.lineTo(102.8, 47.2);
        a.closePath();
        a.moveTo(1.5, 45.3);
        a.lineTo(.4, 45.2);
        a.bezierCurveTo(.5, 44.7, .6, 44.2, .7, 43.7);
        a.lineTo(1.8, 43.9);
        a.bezierCurveTo(1.7, 44.3, 1.6, 44.8, 1.5, 45.3);
        a.closePath();
        a.moveTo(102.4, 44.3);
        a.bezierCurveTo(102.3, 43.8, 102.2, 43.3, 102.2, 42.8);
        a.lineTo(103.3, 42.6);
        a.bezierCurveTo(103.3, 43.1, 103.4, 43.6, 103.5, 44.1);
        a.lineTo(102.4, 44.3);
        a.closePath();
        a.moveTo(2, 42.4);
        a.lineTo(.9, 42.2);
        a.bezierCurveTo(1, 41.7, 1.1, 41.2, 1.2, 40.7);
        a.lineTo(2.3, 41);
        a.bezierCurveTo(2.2, 41.5, 2.1, 41.9, 2, 42.4);
        a.closePath();
        a.moveTo(101.9, 41.4);
        a.bezierCurveTo(101.8, 40.9, 101.7, 40.4, 101.5, 40);
        a.lineTo(102.6, 39.7);
        a.bezierCurveTo(102.7, 40.2, 102.9, 40.7, 103, 41.2);
        a.lineTo(101.9, 41.4);
        a.closePath();
        a.moveTo(2.6, 39.6);
        a.lineTo(1.6, 39.3);
        a.bezierCurveTo(1.7, 38.8, 1.8, 38.3, 1.9, 37.8);
        a.lineTo(3, 38.1);
        a.bezierCurveTo(2.9, 38.6, 2.8, 39.1, 2.6, 39.6);
        a.closePath();
        a.moveTo(101.2, 38.5);
        a.bezierCurveTo(101.1, 38.1, 100.9, 37.6, 100.8, 37.1);
        a.lineTo(101.8, 36.8);
        a.bezierCurveTo(102, 37.3, 102.1, 37.8, 102.3, 38.2);
        a.lineTo(101.2, 38.5);
        a.closePath();
        a.moveTo(3.4, 36.7);
        a.lineTo(2.4, 36.4);
        a.bezierCurveTo(2.5, 35.9, 2.7, 35.5, 2.8, 35);
        a.lineTo(3.9, 35.3);
        a.bezierCurveTo(3.7, 35.8, 3.6, 36.3, 3.4, 36.7);
        a.closePath();
        a.moveTo(100.3, 35.7);
        a.bezierCurveTo(100.2, 35.3, 100, 34.8, 99.8, 34.3);
        a.lineTo(100.9, 34);
        a.bezierCurveTo(101.1, 34.4, 101.2, 34.9, 101.4, 35.4);
        a.lineTo(100.3, 35.7);
        a.closePath();
        a.moveTo(4.4, 34);
        a.lineTo(3.4, 33.6);
        a.bezierCurveTo(3.5, 33.1, 3.7, 32.6, 3.9, 32.2);
        a.lineTo(4.9, 32.6);
        a.bezierCurveTo(4.7, 33.1, 4.6, 33.5, 4.4, 34);
        a.closePath();
        a.moveTo(99.3, 33);
        a.bezierCurveTo(99.1, 32.5, 98.9, 32.1, 98.7, 31.6);
        a.lineTo(99.8, 31.2);
        a.bezierCurveTo(100, 31.6, 100.2, 32.1, 100.3, 32.6);
        a.lineTo(99.3, 33);
        a.closePath();
        a.moveTo(5.5, 31.3);
        a.lineTo(4.5, 30.8);
        a.bezierCurveTo(4.7, 30.3, 4.9, 29.9, 5.1, 29.4);
        a.lineTo(6.1, 29.9);
        a.bezierCurveTo(5.9, 30.4, 5.7, 30.8, 5.5, 31.3);
        a.closePath();
        a.moveTo(98.1, 30.3);
        a.bezierCurveTo(97.9, 29.8, 97.7, 29.4, 97.5, 29);
        a.lineTo(98.5, 28.5);
        a.bezierCurveTo(98.7, 28.9, 98.9, 29.4, 99.1, 29.8);
        a.lineTo(98.1, 30.3);
        a.closePath();
        a.moveTo(6.8, 28.6);
        a.lineTo(5.8, 28.1);
        a.bezierCurveTo(6, 27.7, 6.3, 27.2, 6.5, 26.8);
        a.lineTo(7.5, 27.3);
        a.bezierCurveTo(7.2, 27.7, 7, 28.2, 6.8, 28.6);
        a.closePath();
        a.moveTo(96.8, 27.7);
        a.bezierCurveTo(96.6, 27.2, 96.3, 26.8, 96.1, 26.4);
        a.lineTo(97, 25.8);
        a.bezierCurveTo(97.3, 26.3, 97.5, 26.7, 97.8, 27.1);
        a.lineTo(96.8, 27.7);
        a.closePath();
        a.moveTo(8.2, 26);
        a.lineTo(7.3, 25.5);
        a.bezierCurveTo(7.5, 25.1, 7.8, 24.6, 8, 24.2);
        a.lineTo(9, 24.8);
        a.bezierCurveTo(8.7, 25.2, 8.5, 25.6, 8.2, 26);
        a.closePath();
        a.moveTo(95.3, 25.1);
        a.bezierCurveTo(95.1, 24.7, 94.8, 24.3, 94.5, 23.9);
        a.lineTo(95.5, 23.3);
        a.bezierCurveTo(95.7, 23.7, 96, 24.1, 96.3, 24.6);
        a.lineTo(95.3, 25.1);
        a.closePath();
        a.moveTo(9.8, 23.6);
        a.lineTo(8.9, 22.9);
        a.bezierCurveTo(9.1, 22.5, 9.4, 22.1, 9.7, 21.7);
        a.lineTo(10.6, 22.4);
        a.bezierCurveTo(10.3, 22.8, 10.1, 23.2, 9.8, 23.6);
        a.closePath();
        a.moveTo(93.7, 22.7);
        a.bezierCurveTo(93.4, 22.3, 93.1, 21.9, 92.8, 21.5);
        a.lineTo(93.7, 20.9);
        a.bezierCurveTo(94, 21.3, 94.3, 21.7, 94.6, 22.1);
        a.lineTo(93.7, 22.7);
        a.closePath();
        a.moveTo(11.5, 21.2);
        a.lineTo(10.6, 20.5);
        a.bezierCurveTo(10.9, 20.1, 11.2, 19.7, 11.5, 19.3);
        a.lineTo(12.4, 20);
        a.bezierCurveTo(12.1, 20.4, 11.8, 20.8, 11.5, 21.2);
        a.closePath();
        a.moveTo(91.9, 20.4);
        a.bezierCurveTo(91.6, 20, 91.3, 19.6, 91, 19.2);
        a.lineTo(91.9, 18.5);
        a.bezierCurveTo(92.2, 18.9, 92.5, 19.3, 92.8, 19.7);
        a.lineTo(91.9, 20.4);
        a.closePath();
        a.moveTo(13.4, 18.9);
        a.lineTo(12.5, 18.2);
        a.bezierCurveTo(12.8, 17.8, 13.2, 17.4, 13.5, 17.1);
        a.lineTo(14.3, 17.8);
        a.bezierCurveTo(14, 18.2, 13.7, 18.5, 13.4, 18.9);
        a.closePath();
        a.moveTo(90, 18.1);
        a.bezierCurveTo(89.7, 17.8, 89.4, 17.4, 89, 17);
        a.lineTo(89.9, 16.3);
        a.bezierCurveTo(90.2, 16.6, 90.5, 17, 90.9, 17.4);
        a.lineTo(90, 18.1);
        a.closePath();
        a.moveTo(15.3, 16.7);
        a.lineTo(14.5, 16);
        a.bezierCurveTo(14.9, 15.6, 15.2, 15.2, 15.6, 14.9);
        a.lineTo(15.8, 14.7);
        a.lineTo(16.6, 15.5);
        a.lineTo(16.4, 15.7);
        a.bezierCurveTo(16, 16, 15.7, 16.4, 15.3, 16.7);
        a.closePath();
        a.moveTo(88, 16);
        a.bezierCurveTo(87.7, 15.6, 87.3, 15.3, 87, 15);
        a.lineTo(87.7, 14.2);
        a.bezierCurveTo(88.1, 14.5, 88.5, 14.9, 88.8, 15.2);
        a.lineTo(88, 16);
        a.closePath();
        a.moveTo(17.6, 14.5);
        a.lineTo(16.9, 13.7);
        a.bezierCurveTo(17.2, 13.3, 17.6, 13, 18, 12.7);
        a.lineTo(18.7, 13.5);
        a.bezierCurveTo(18.4, 13.8, 18, 14.2, 17.6, 14.5);
        a.closePath();
        a.moveTo(85.9, 14);
        a.bezierCurveTo(85.5, 13.6, 85.2, 13.3, 84.8, 13);
        a.lineTo(85.5, 12.2);
        a.bezierCurveTo(85.9, 12.5, 86.3, 12.8, 86.6, 13.1);
        a.lineTo(85.9, 14);
        a.closePath();
        a.moveTo(19.8, 12.6);
        a.lineTo(19.1, 11.7);
        a.bezierCurveTo(19.5, 11.4, 19.9, 11.1, 20.3, 10.8);
        a.lineTo(21, 11.7);
        a.bezierCurveTo(20.6, 12, 20.2, 12.3, 19.8, 12.6);
        a.closePath();
        a.moveTo(83.6, 12.1);
        a.bezierCurveTo(83.3, 11.8, 82.9, 11.5, 82.5, 11.2);
        a.lineTo(83.1, 10.3);
        a.bezierCurveTo(83.5, 10.6, 83.9, 10.9, 84.3, 11.2);
        a.lineTo(83.6, 12.1);
        a.closePath();
        a.moveTo(22.2, 10.8);
        a.lineTo(21.5, 9.9);
        a.bezierCurveTo(21.9, 9.6, 22.3, 9.3, 22.7, 9);
        a.lineTo(23.4, 9.9);
        a.bezierCurveTo(23, 10.2, 22.6, 10.5, 22.2, 10.8);
        a.closePath();
        a.moveTo(81.3, 10.3);
        a.bezierCurveTo(80.9, 10, 80.5, 9.8, 80.1, 9.5);
        a.lineTo(80.7, 8.6);
        a.bezierCurveTo(81.1, 8.8, 81.5, 9.1, 81.9, 9.4);
        a.lineTo(81.3, 10.3);
        a.closePath();
        a.moveTo(24.6, 9.1);
        a.lineTo(24, 8.2);
        a.bezierCurveTo(24.4, 7.9, 24.8, 7.7, 25.3, 7.4);
        a.lineTo(25.8, 8.3);
        a.bezierCurveTo(25.4, 8.6, 25, 8.9, 24.6, 9.1);
        a.closePath();
        a.moveTo(78.8, 8.7);
        a.bezierCurveTo(78.4, 8.4, 78, 8.2, 77.6, 7.9);
        a.lineTo(78.1, 7);
        a.bezierCurveTo(78.6, 7.2, 79, 7.5, 79.4, 7.8);
        a.lineTo(78.8, 8.7);
        a.closePath();
        a.moveTo(27.1, 7.6);
        a.lineTo(26.5, 6.6);
        a.bezierCurveTo(27, 6.4, 27.4, 6.2, 27.9, 5.9);
        a.lineTo(28.4, 6.9);
        a.bezierCurveTo(27.9, 7.1, 27.5, 7.4, 27.1, 7.6);
        a.closePath();
        a.moveTo(76.3, 7.2);
        a.bezierCurveTo(75.9, 7, 75.4, 6.8, 75, 6.5);
        a.lineTo(75.5, 5.6);
        a.bezierCurveTo(76, 5.8, 76.4, 6, 76.8, 6.3);
        a.lineTo(76.3, 7.2);
        a.closePath();
        a.moveTo(29.7, 6.2);
        a.lineTo(29.2, 5.2);
        a.bezierCurveTo(29.6, 5, 30.1, 4.8, 30.6, 4.6);
        a.lineTo(31, 5.6);
        a.bezierCurveTo(30.6, 5.8, 30.1, 6, 29.7, 6.2);
        a.closePath();
        a.moveTo(73.7, 5.9);
        a.bezierCurveTo(73.2, 5.7, 72.8, 5.5, 72.3, 5.3);
        a.lineTo(72.8, 4.3);
        a.bezierCurveTo(73.2, 4.5, 73.7, 4.7, 74.2, 4.9);
        a.lineTo(73.7, 5.9);
        a.closePath();
        a.moveTo(32.4, 5);
        a.lineTo(31.9, 4);
        a.bezierCurveTo(32.4, 3.8, 32.9, 3.6, 33.3, 3.4);
        a.lineTo(33.7, 4.5);
        a.bezierCurveTo(33.3, 4.7, 32.8, 4.8, 32.4, 5);
        a.closePath();
        a.moveTo(71, 4.7);
        a.bezierCurveTo(70.5, 4.6, 70.1, 4.4, 69.6, 4.2);
        a.lineTo(70, 3.2);
        a.bezierCurveTo(70.5, 3.3, 70.9, 3.5, 71.4, 3.7);
        a.lineTo(71, 4.7);
        a.closePath();
        a.moveTo(35.1, 4);
        a.lineTo(34.7, 2.9);
        a.bezierCurveTo(35.2, 2.8, 35.7, 2.6, 36.1, 2.5);
        a.lineTo(36.5, 3.5);
        a.bezierCurveTo(36, 3.7, 35.6, 3.8, 35.1, 4);
        a.closePath();
        a.moveTo(68.2, 3.7);
        a.bezierCurveTo(67.8, 3.6, 67.3, 3.4, 66.8, 3.3);
        a.lineTo(67.2, 2.2);
        a.bezierCurveTo(67.6, 2.4, 68.1, 2.5, 68.6, 2.7);
        a.lineTo(68.2, 3.7);
        a.closePath();
        a.moveTo(37.9, 3.1);
        a.lineTo(37.6, 2);
        a.bezierCurveTo(38.1, 1.9, 38.5, 1.8, 39, 1.6);
        a.lineTo(39.3, 2.7);
        a.bezierCurveTo(38.8, 2.8, 38.4, 3, 37.9, 3.1);
        a.closePath();
        a.moveTo(65.4, 2.9);
        a.bezierCurveTo(65, 2.8, 64.5, 2.6, 64, 2.5);
        a.lineTo(64.3, 1.4);
        a.bezierCurveTo(64.8, 1.6, 65.2, 1.7, 65.7, 1.8);
        a.lineTo(65.4, 2.9);
        a.closePath();
        a.moveTo(40.7, 2.4);
        a.lineTo(40.5, 1.3);
        a.bezierCurveTo(41, 1.2, 41.5, 1.1, 42, 1);
        a.lineTo(42.2, 2.1);
        a.bezierCurveTo(41.7, 2.2, 41.2, 2.3, 40.7, 2.4);
        a.closePath();
        a.moveTo(62.6, 2.2);
        a.bezierCurveTo(62.1, 2.1, 61.6, 2, 61.1, 1.9);
        a.lineTo(61.3, .8);
        a.bezierCurveTo(61.8, .9, 62.3, 1, 62.8, 1.1);
        a.lineTo(62.6, 2.2);
        a.closePath();
        a.moveTo(43.6, 1.8);
        a.lineTo(43.4, .7);
        a.bezierCurveTo(43.9, .6, 44.4, .5, 44.9, .5);
        a.lineTo(45.1, 1.6);
        a.bezierCurveTo(44.6, 1.6, 44.1, 1.7, 43.6, 1.8);
        a.closePath();
        a.moveTo(59.7, 1.7);
        a.bezierCurveTo(59.2, 1.6, 58.7, 1.5, 58.2, 1.5);
        a.lineTo(58.4, .4);
        a.bezierCurveTo(58.9, .4, 59.4, .5, 59.9, .6);
        a.lineTo(59.7, 1.7);
        a.closePath();
        a.moveTo(46.5, 1.4);
        a.lineTo(46.4, .3);
        a.bezierCurveTo(46.9, .2, 47.4, .2, 47.9, .2);
        a.lineTo(48, 1.3);
        a.bezierCurveTo(47.5, 1.3, 47, 1.4, 46.5, 1.4);
        a.closePath();
        a.moveTo(56.8, 1.3);
        a.bezierCurveTo(56.3, 1.3, 55.8, 1.2, 55.3, 1.2);
        a.lineTo(55.4, .1);
        a.bezierCurveTo(55.9, .1, 56.4, .2, 56.9, .2);
        a.lineTo(56.8, 1.3);
        a.closePath();
        a.moveTo(49.5, 1.2);
        a.lineTo(49.4, .1);
        a.bezierCurveTo(49.9, 0, 50.4, 0, 50.9, 0);
        a.lineTo(50.9, 1.1);
        a.bezierCurveTo(50.4, 1.1, 49.9, 1.2, 49.5, 1.2);
        a.closePath();
        a.moveTo(53.9, 1.1);
        a.bezierCurveTo(53.4, 1.1, 53, 1.1, 52.5, 1.1);
        a.lineTo(52.4, 1.1);
        a.lineTo(52.4, 0);
        a.lineTo(52.5, 0);
        a.bezierCurveTo(53, 0, 53.4, 0, 53.9, 0);
        a.lineTo(53.9, 1.1);
        a.closePath();
        a.moveTo(51.7, 95.6);
        a.bezierCurveTo(51.1, 95.6, 50.6, 95.6, 50.2, 95.6);
        a.lineTo(50.2, 95.2);
        a.bezierCurveTo(50.7, 95.3, 51.1, 95.3, 51.6, 95.3);
        a.lineTo(51.7, 95.6);
        a.closePath();
        a.moveTo(53.1, 95.6);
        a.lineTo(53.1, 95.3);
        a.bezierCurveTo(53.6, 95.3, 54.1, 95.2, 54.6, 95.2);
        a.lineTo(54.6, 95.6);
        a.bezierCurveTo(54.1, 95.6, 53.6, 95.6, 53.1, 95.6);
        a.closePath();
        a.moveTo(48.7, 95.5);
        a.bezierCurveTo(48.2, 95.5, 47.7, 95.4, 47.2, 95.4);
        a.lineTo(47.2, 95);
        a.bezierCurveTo(47.7, 95.1, 48.2, 95.1, 48.7, 95.2);
        a.lineTo(48.7, 95.5);
        a.closePath();
        a.moveTo(56.1, 95.5);
        a.lineTo(56.1, 95.1);
        a.bezierCurveTo(56.6, 95, 57.1, 95, 57.5, 94.9);
        a.lineTo(57.6, 95.3);
        a.bezierCurveTo(57.1, 95.4, 56.6, 95.4, 56.1, 95.5);
        a.closePath();
        a.moveTo(45.7, 95.2);
        a.bezierCurveTo(45.2, 95.1, 44.7, 95, 44.2, 95);
        a.lineTo(44.3, 94.6);
        a.bezierCurveTo(44.8, 94.7, 45.3, 94.8, 45.8, 94.8);
        a.lineTo(45.7, 95.2);
        a.closePath();
        a.moveTo(59.1, 95.1);
        a.lineTo(59, 94.7);
        a.bezierCurveTo(59.5, 94.6, 60, 94.5, 60.5, 94.5);
        a.lineTo(60.5, 94.8);
        a.bezierCurveTo(60, 94.9, 59.6, 95, 59.1, 95.1);
        a.closePath();
        a.moveTo(42.8, 94.7);
        a.bezierCurveTo(42.3, 94.6, 41.8, 94.5, 41.3, 94.3);
        a.lineTo(41.4, 94);
        a.bezierCurveTo(41.9, 94.1, 42.4, 94.2, 42.9, 94.3);
        a.lineTo(42.8, 94.7);
        a.closePath();
        a.moveTo(62, 94.5);
        a.lineTo(61.9, 94.1);
        a.bezierCurveTo(62.4, 94, 62.9, 93.9, 63.3, 93.8);
        a.lineTo(63.4, 94.1);
        a.bezierCurveTo(63, 94.3, 62.5, 94.4, 62, 94.5);
        a.closePath();
        a.moveTo(39.9, 93.9);
        a.bezierCurveTo(39.4, 93.8, 38.9, 93.7, 38.5, 93.5);
        a.lineTo(38.6, 93.2);
        a.bezierCurveTo(39.1, 93.3, 39.5, 93.5, 40, 93.6);
        a.lineTo(39.9, 93.9);
        a.closePath();
        a.moveTo(64.9, 93.7);
        a.lineTo(64.8, 93.4);
        a.bezierCurveTo(65.2, 93.2, 65.7, 93.1, 66.2, 92.9);
        a.lineTo(66.3, 93.3);
        a.bezierCurveTo(65.8, 93.4, 65.3, 93.6, 64.9, 93.7);
        a.closePath();
        a.moveTo(37.1, 93);
        a.bezierCurveTo(36.6, 92.9, 36.1, 92.7, 35.7, 92.5);
        a.lineTo(35.8, 92.1);
        a.bezierCurveTo(36.3, 92.3, 36.7, 92.5, 37.2, 92.7);
        a.lineTo(37.1, 93);
        a.closePath();
        a.moveTo(67.7, 92.7);
        a.lineTo(67.6, 92.4);
        a.bezierCurveTo(68, 92.2, 68.5, 92, 68.9, 91.8);
        a.lineTo(69.1, 92.2);
        a.bezierCurveTo(68.6, 92.4, 68.1, 92.6, 67.7, 92.7);
        a.closePath();
        a.moveTo(34.3, 91.9);
        a.bezierCurveTo(33.9, 91.7, 33.4, 91.5, 33, 91.3);
        a.lineTo(33.1, 90.9);
        a.bezierCurveTo(33.6, 91.2, 34, 91.4, 34.5, 91.6);
        a.lineTo(34.3, 91.9);
        a.closePath();
        a.moveTo(70.4, 91.6);
        a.lineTo(70.3, 91.2);
        a.bezierCurveTo(70.7, 91, 71.2, 90.8, 71.6, 90.6);
        a.lineTo(71.8, 90.9);
        a.bezierCurveTo(71.3, 91.1, 70.9, 91.4, 70.4, 91.6);
        a.closePath();
        a.moveTo(31.6, 90.6);
        a.bezierCurveTo(31.2, 90.4, 30.8, 90.1, 30.3, 89.9);
        a.lineTo(30.5, 89.6);
        a.bezierCurveTo(30.9, 89.8, 31.4, 90, 31.8, 90.3);
        a.lineTo(31.6, 90.6);
        a.closePath();
        a.moveTo(73.1, 90.2);
        a.lineTo(72.9, 89.9);
        a.bezierCurveTo(73.3, 89.7, 73.8, 89.4, 74.2, 89.2);
        a.lineTo(74.4, 89.5);
        a.bezierCurveTo(74, 89.7, 73.5, 90, 73.1, 90.2);
        a.closePath();
        a.moveTo(29, 89.1);
        a.bezierCurveTo(28.6, 88.9, 28.2, 88.6, 27.8, 88.3);
        a.lineTo(28, 88);
        a.bezierCurveTo(28.4, 88.3, 28.8, 88.5, 29.2, 88.8);
        a.lineTo(29, 89.1);
        a.closePath();
        a.moveTo(75.6, 88.7);
        a.lineTo(75.4, 88.4);
        a.bezierCurveTo(75.9, 88.1, 76.3, 87.8, 76.7, 87.6);
        a.lineTo(76.9, 87.9);
        a.bezierCurveTo(76.5, 88.1, 76.1, 88.4, 75.6, 88.7);
        a.closePath();
        a.moveTo(26.6, 87.5);
        a.bezierCurveTo(26.2, 87.2, 25.8, 86.9, 25.4, 86.6);
        a.lineTo(25.6, 86.3);
        a.bezierCurveTo(26, 86.6, 26.4, 86.9, 26.8, 87.2);
        a.lineTo(26.6, 87.5);
        a.closePath();
        a.moveTo(78.1, 87);
        a.lineTo(77.9, 86.7);
        a.bezierCurveTo(78.3, 86.4, 78.7, 86.1, 79, 85.8);
        a.lineTo(79.3, 86.1);
        a.bezierCurveTo(78.9, 86.4, 78.5, 86.7, 78.1, 87);
        a.closePath();
        a.moveTo(24.2, 85.6);
        a.bezierCurveTo(23.8, 85.3, 23.5, 85, 23.1, 84.7);
        a.lineTo(23.3, 84.4);
        a.bezierCurveTo(23.7, 84.7, 24.1, 85, 24.5, 85.3);
        a.lineTo(24.2, 85.6);
        a.closePath();
        a.moveTo(80.4, 85.1);
        a.lineTo(80.2, 84.8);
        a.bezierCurveTo(80.6, 84.5, 80.9, 84.2, 81.3, 83.9);
        a.lineTo(81.5, 84.1);
        a.bezierCurveTo(81.2, 84.5, 80.8, 84.8, 80.4, 85.1);
        a.closePath();
        a.moveTo(22, 83.6);
        a.bezierCurveTo(21.6, 83.3, 21.3, 83, 20.9, 82.6);
        a.lineTo(21.2, 82.3);
        a.bezierCurveTo(21.5, 82.7, 21.9, 83, 22.2, 83.4);
        a.lineTo(22, 83.6);
        a.closePath();
        a.moveTo(82.6, 83.1);
        a.lineTo(82.4, 82.8);
        a.bezierCurveTo(82.7, 82.5, 83, 82.1, 83.4, 81.8);
        a.lineTo(83.7, 82);
        a.bezierCurveTo(83.3, 82.4, 83, 82.8, 82.6, 83.1);
        a.closePath();
        a.moveTo(19.9, 81.5);
        a.bezierCurveTo(19.6, 81.1, 19.2, 80.8, 18.9, 80.4);
        a.lineTo(19.2, 80.2);
        a.bezierCurveTo(19.5, 80.5, 19.8, 80.9, 20.2, 81.3);
        a.lineTo(19.9, 81.5);
        a.closePath();
        a.moveTo(84.7, 81);
        a.lineTo(84.4, 80.7);
        a.bezierCurveTo(84.7, 80.3, 85, 80, 85.3, 79.6);
        a.lineTo(85.6, 79.8);
        a.bezierCurveTo(85.3, 80.2, 85, 80.6, 84.7, 81);
        a.closePath();
        a.moveTo(18, 79.3);
        a.bezierCurveTo(17.7, 78.9, 17.4, 78.5, 17.1, 78.1);
        a.lineTo(17.4, 77.9);
        a.bezierCurveTo(17.6, 78.3, 17.9, 78.6, 18.3, 79);
        a.lineTo(18, 79.3);
        a.closePath();
        a.moveTo(86.6, 78.7);
        a.lineTo(86.3, 78.4);
        a.bezierCurveTo(86.6, 78, 86.9, 77.6, 87.1, 77.2);
        a.lineTo(87.4, 77.5);
        a.bezierCurveTo(87.2, 77.9, 86.9, 78.3, 86.6, 78.7);
        a.closePath();
        a.moveTo(16.2, 76.9);
        a.bezierCurveTo(15.9, 76.5, 15.6, 76.1, 15.4, 75.6);
        a.lineTo(15.7, 75.4);
        a.bezierCurveTo(15.9, 75.8, 16.2, 76.3, 16.5, 76.7);
        a.lineTo(16.2, 76.9);
        a.closePath();
        a.moveTo(88.3, 76.2);
        a.lineTo(88, 76);
        a.bezierCurveTo(88.3, 75.6, 88.5, 75.2, 88.8, 74.8);
        a.lineTo(89.1, 75);
        a.bezierCurveTo(88.8, 75.4, 88.6, 75.8, 88.3, 76.2);
        a.closePath();
        a.moveTo(14.6, 74.4);
        a.bezierCurveTo(14.3, 73.9, 14.1, 73.5, 13.8, 73.1);
        a.lineTo(14.2, 72.9);
        a.bezierCurveTo(14.4, 73.3, 14.6, 73.8, 14.9, 74.2);
        a.lineTo(14.6, 74.4);
        a.closePath();
        a.moveTo(89.9, 73.7);
        a.lineTo(89.5, 73.5);
        a.bezierCurveTo(89.8, 73.1, 90, 72.7, 90.3, 72.2);
        a.lineTo(90.6, 72.4);
        a.bezierCurveTo(90.4, 72.9, 90.1, 73.3, 89.9, 73.7);
        a.closePath();
        a.moveTo(13.1, 71.8);
        a.bezierCurveTo(12.9, 71.3, 12.7, 70.9, 12.5, 70.4);
        a.lineTo(12.8, 70.3);
        a.bezierCurveTo(13, 70.7, 13.2, 71.2, 13.5, 71.6);
        a.lineTo(13.1, 71.8);
        a.closePath();
        a.moveTo(91.3, 71.1);
        a.lineTo(90.9, 70.9);
        a.bezierCurveTo(91.1, 70.5, 91.4, 70, 91.6, 69.6);
        a.lineTo(91.9, 69.7);
        a.bezierCurveTo(91.7, 70.2, 91.5, 70.6, 91.3, 71.1);
        a.closePath();
        a.moveTo(11.9, 69.1);
        a.bezierCurveTo(11.7, 68.6, 11.5, 68.1, 11.3, 67.7);
        a.lineTo(11.7, 67.6);
        a.bezierCurveTo(11.8, 68, 12, 68.5, 12.2, 68.9);
        a.lineTo(11.9, 69.1);
        a.closePath();
        a.moveTo(92.5, 68.4);
        a.lineTo(92.1, 68.2);
        a.bezierCurveTo(92.3, 67.8, 92.5, 67.3, 92.7, 66.9);
        a.lineTo(93, 67);
        a.bezierCurveTo(92.8, 67.5, 92.7, 67.9, 92.5, 68.4);
        a.closePath();
        a.moveTo(10.8, 66.3);
        a.bezierCurveTo(10.6, 65.8, 10.5, 65.3, 10.3, 64.9);
        a.lineTo(10.7, 64.8);
        a.bezierCurveTo(10.8, 65.2, 11, 65.7, 11.2, 66.2);
        a.lineTo(10.8, 66.3);
        a.closePath();
        a.moveTo(93.5, 65.6);
        a.lineTo(93.1, 65.5);
        a.bezierCurveTo(93.3, 65, 93.4, 64.5, 93.6, 64.1);
        a.lineTo(93.9, 64.2);
        a.bezierCurveTo(93.8, 64.6, 93.6, 65.1, 93.5, 65.6);
        a.closePath();
        a.moveTo(9.9, 63.4);
        a.bezierCurveTo(9.8, 63, 9.7, 62.5, 9.6, 62);
        a.lineTo(9.9, 61.9);
        a.bezierCurveTo(10, 62.4, 10.2, 62.9, 10.3, 63.3);
        a.lineTo(9.9, 63.4);
        a.closePath();
        a.moveTo(94.3, 62.7);
        a.lineTo(94, 62.6);
        a.bezierCurveTo(94.1, 62.2, 94.2, 61.7, 94.3, 61.2);
        a.lineTo(94.7, 61.3);
        a.bezierCurveTo(94.6, 61.8, 94.4, 62.2, 94.3, 62.7);
        a.closePath();
        a.moveTo(9.3, 60.5);
        a.bezierCurveTo(9.2, 60, 9.1, 59.6, 9, 59.1);
        a.lineTo(9.4, 59);
        a.bezierCurveTo(9.4, 59.5, 9.5, 60, 9.6, 60.5);
        a.lineTo(9.3, 60.5);
        a.closePath();
        a.moveTo(95, 59.8);
        a.lineTo(94.6, 59.7);
        a.bezierCurveTo(94.7, 59.3, 94.8, 58.8, 94.8, 58.3);
        a.lineTo(95.2, 58.3);
        a.bezierCurveTo(95.1, 58.8, 95, 59.3, 95, 59.8);
        a.closePath();
        a.moveTo(8.8, 57.6);
        a.bezierCurveTo(8.7, 57.1, 8.7, 56.6, 8.6, 56.1);
        a.lineTo(9, 56.1);
        a.bezierCurveTo(9, 56.6, 9.1, 57.1, 9.2, 57.5);
        a.lineTo(8.8, 57.6);
        a.closePath();
        a.moveTo(95.4, 56.9);
        a.lineTo(95, 56.8);
        a.bezierCurveTo(95.1, 56.3, 95.1, 55.8, 95.1, 55.4);
        a.lineTo(95.5, 55.4);
        a.bezierCurveTo(95.5, 55.9, 95.4, 56.4, 95.4, 56.9);
        a.closePath();
        a.moveTo(8.5, 54.6);
        a.bezierCurveTo(8.5, 54.1, 8.5, 53.6, 8.4, 53.1);
        a.lineTo(8.8, 53.1);
        a.bezierCurveTo(8.8, 53.6, 8.9, 54.1, 8.9, 54.6);
        a.lineTo(8.5, 54.6);
        a.closePath();
        a.moveTo(95.6, 53.9);
        a.lineTo(95.2, 53.9);
        a.bezierCurveTo(95.3, 53.4, 95.3, 52.9, 95.3, 52.5);
        a.lineTo(95.3, 52.4);
        a.lineTo(95.6, 52.4);
        a.lineTo(95.6, 52.5);
        a.bezierCurveTo(95.6, 52.9, 95.6, 53.4, 95.6, 53.9);
        a.closePath();
        a.moveTo(8.4, 51.6);
        a.bezierCurveTo(8.4, 51.1, 8.5, 50.6, 8.5, 50.2);
        a.lineTo(8.8, 50.2);
        a.bezierCurveTo(8.8, 50.7, 8.8, 51.1, 8.8, 51.6);
        a.lineTo(8.4, 51.6);
        a.closePath();
        a.moveTo(95.3, 50.9);
        a.bezierCurveTo(95.2, 50.4, 95.2, 49.9, 95.2, 49.4);
        a.lineTo(95.6, 49.4);
        a.bezierCurveTo(95.6, 49.9, 95.6, 50.4, 95.6, 50.9);
        a.lineTo(95.3, 50.9);
        a.closePath();
        a.moveTo(8.9, 48.7);
        a.lineTo(8.6, 48.7);
        a.bezierCurveTo(8.6, 48.2, 8.7, 47.7, 8.7, 47.2);
        a.lineTo(9.1, 47.2);
        a.bezierCurveTo(9, 47.7, 9, 48.2, 8.9, 48.7);
        a.closePath();
        a.moveTo(95.1, 48);
        a.bezierCurveTo(95, 47.5, 95, 47, 94.9, 46.5);
        a.lineTo(95.3, 46.5);
        a.bezierCurveTo(95.4, 46.9, 95.4, 47.4, 95.5, 47.9);
        a.lineTo(95.1, 48);
        a.closePath();
        a.moveTo(9.3, 45.8);
        a.lineTo(8.9, 45.7);
        a.bezierCurveTo(9, 45.2, 9, 44.7, 9.1, 44.2);
        a.lineTo(9.5, 44.3);
        a.bezierCurveTo(9.4, 44.8, 9.3, 45.3, 9.3, 45.8);
        a.closePath();
        a.moveTo(94.7, 45);
        a.bezierCurveTo(94.6, 44.6, 94.5, 44.1, 94.5, 43.6);
        a.lineTo(94.8, 43.5);
        a.bezierCurveTo(94.9, 44, 95, 44.5, 95.1, 45);
        a.lineTo(94.7, 45);
        a.closePath();
        a.moveTo(9.8, 42.9);
        a.lineTo(9.4, 42.8);
        a.bezierCurveTo(9.5, 42.3, 9.6, 41.8, 9.8, 41.3);
        a.lineTo(10.1, 41.4);
        a.bezierCurveTo(10, 41.9, 9.9, 42.4, 9.8, 42.9);
        a.closePath();
        a.moveTo(94.1, 42.1);
        a.bezierCurveTo(94, 41.7, 93.9, 41.2, 93.8, 40.7);
        a.lineTo(94.1, 40.6);
        a.bezierCurveTo(94.3, 41.1, 94.4, 41.6, 94.5, 42.1);
        a.lineTo(94.1, 42.1);
        a.closePath();
        a.moveTo(10.5, 40);
        a.lineTo(10.1, 39.9);
        a.bezierCurveTo(10.3, 39.4, 10.4, 38.9, 10.6, 38.5);
        a.lineTo(10.9, 38.6);
        a.bezierCurveTo(10.8, 39.1, 10.6, 39.5, 10.5, 40);
        a.closePath();
        a.moveTo(93.4, 39.3);
        a.bezierCurveTo(93.2, 38.8, 93.1, 38.4, 92.9, 37.9);
        a.lineTo(93.3, 37.8);
        a.bezierCurveTo(93.4, 38.2, 93.6, 38.7, 93.7, 39.2);
        a.lineTo(93.4, 39.3);
        a.closePath();
        a.moveTo(11.4, 37.2);
        a.lineTo(11.1, 37.1);
        a.bezierCurveTo(11.2, 36.6, 11.4, 36.1, 11.6, 35.7);
        a.lineTo(12, 35.8);
        a.bezierCurveTo(11.8, 36.3, 11.6, 36.7, 11.4, 37.2);
        a.closePath();
        a.moveTo(92.4, 36.5);
        a.bezierCurveTo(92.2, 36, 92, 35.6, 91.9, 35.1);
        a.lineTo(92.2, 35);
        a.bezierCurveTo(92.4, 35.4, 92.6, 35.9, 92.8, 36.4);
        a.lineTo(92.4, 36.5);
        a.closePath();
        a.moveTo(12.5, 34.5);
        a.lineTo(12.2, 34.3);
        a.bezierCurveTo(12.4, 33.8, 12.6, 33.4, 12.8, 33);
        a.lineTo(13.2, 33.1);
        a.bezierCurveTo(12.9, 33.6, 12.7, 34, 12.5, 34.5);
        a.closePath();
        a.moveTo(91.2, 33.8);
        a.bezierCurveTo(91, 33.3, 90.8, 32.9, 90.6, 32.5);
        a.lineTo(90.9, 32.3);
        a.bezierCurveTo(91.2, 32.7, 91.4, 33.2, 91.6, 33.6);
        a.lineTo(91.2, 33.8);
        a.closePath();
        a.moveTo(13.8, 31.8);
        a.lineTo(13.5, 31.6);
        a.bezierCurveTo(13.7, 31.2, 14, 30.8, 14.2, 30.3);
        a.lineTo(14.5, 30.5);
        a.bezierCurveTo(14.3, 30.9, 14.1, 31.4, 13.8, 31.8);
        a.closePath();
        a.moveTo(89.9, 31.2);
        a.bezierCurveTo(89.7, 30.7, 89.4, 30.3, 89.2, 29.9);
        a.lineTo(89.5, 29.7);
        a.bezierCurveTo(89.7, 30.1, 90, 30.5, 90.2, 31);
        a.lineTo(89.9, 31.2);
        a.closePath();
        a.moveTo(15.3, 29.2);
        a.lineTo(15, 29);
        a.bezierCurveTo(15.2, 28.6, 15.5, 28.2, 15.8, 27.8);
        a.lineTo(16.1, 28);
        a.bezierCurveTo(15.8, 28.4, 15.6, 28.8, 15.3, 29.2);
        a.closePath();
        a.moveTo(88.4, 28.6);
        a.bezierCurveTo(88.1, 28.2, 87.8, 27.8, 87.6, 27.4);
        a.lineTo(87.9, 27.2);
        a.bezierCurveTo(88.2, 27.6, 88.4, 28, 88.7, 28.4);
        a.lineTo(88.4, 28.6);
        a.closePath();
        a.moveTo(16.9, 26.8);
        a.lineTo(16.6, 26.6);
        a.bezierCurveTo(16.9, 26.2, 17.2, 25.8, 17.5, 25.4);
        a.lineTo(17.8, 25.6);
        a.bezierCurveTo(17.5, 26, 17.2, 26.4, 16.9, 26.8);
        a.closePath();
        a.moveTo(86.7, 26.2);
        a.bezierCurveTo(86.4, 25.8, 86.1, 25.4, 85.8, 25);
        a.lineTo(86.1, 24.8);
        a.bezierCurveTo(86.4, 25.2, 86.7, 25.6, 87, 26);
        a.lineTo(86.7, 26.2);
        a.closePath();
        a.moveTo(18.8, 24.5);
        a.lineTo(18.5, 24.2);
        a.bezierCurveTo(18.8, 23.8, 19.1, 23.5, 19.4, 23.1);
        a.lineTo(19.7, 23.3);
        a.bezierCurveTo(19.4, 23.7, 19.1, 24.1, 18.8, 24.5);
        a.closePath();
        a.moveTo(84.9, 23.9);
        a.bezierCurveTo(84.5, 23.5, 84.2, 23.2, 83.9, 22.8);
        a.lineTo(84.1, 22.5);
        a.bezierCurveTo(84.5, 22.9, 84.8, 23.3, 85.1, 23.7);
        a.lineTo(84.9, 23.9);
        a.closePath();
        a.moveTo(20.7, 22.2);
        a.lineTo(20.5, 22);
        a.bezierCurveTo(20.8, 21.6, 21.2, 21.3, 21.5, 20.9);
        a.lineTo(21.8, 21.2);
        a.bezierCurveTo(21.4, 21.5, 21.1, 21.9, 20.7, 22.2);
        a.closePath();
        a.moveTo(82.9, 21.7);
        a.bezierCurveTo(82.5, 21.4, 82.2, 21, 81.8, 20.7);
        a.lineTo(82.1, 20.4);
        a.bezierCurveTo(82.4, 20.8, 82.8, 21.1, 83.1, 21.5);
        a.lineTo(82.9, 21.7);
        a.closePath();
        a.moveTo(22.8, 20.2);
        a.lineTo(22.5, 20);
        a.bezierCurveTo(22.9, 19.6, 23.3, 19.3, 23.6, 19);
        a.lineTo(23.9, 19.2);
        a.bezierCurveTo(23.5, 19.6, 23.1, 19.9, 22.8, 20.2);
        a.closePath();
        a.moveTo(80.7, 19.7);
        a.bezierCurveTo(80.3, 19.4, 80, 19, 79.6, 18.7);
        a.lineTo(79.8, 18.4);
        a.bezierCurveTo(80.2, 18.8, 80.6, 19.1, 81, 19.4);
        a.lineTo(80.7, 19.7);
        a.closePath();
        a.moveTo(25, 18.3);
        a.lineTo(24.8, 18);
        a.bezierCurveTo(25.2, 17.7, 25.6, 17.4, 26, 17.1);
        a.lineTo(26.2, 17.4);
        a.bezierCurveTo(25.8, 17.7, 25.4, 18, 25, 18.3);
        a.closePath();
        a.moveTo(78.4, 17.8);
        a.bezierCurveTo(78, 17.5, 77.7, 17.2, 77.3, 16.9);
        a.lineTo(77.5, 16.6);
        a.bezierCurveTo(77.9, 16.9, 78.3, 17.2, 78.7, 17.5);
        a.lineTo(78.4, 17.8);
        a.closePath();
        a.moveTo(27.4, 16.5);
        a.lineTo(27.2, 16.2);
        a.bezierCurveTo(27.6, 15.9, 28, 15.7, 28.4, 15.4);
        a.lineTo(28.6, 15.7);
        a.bezierCurveTo(28.2, 16, 27.8, 16.3, 27.4, 16.5);
        a.closePath();
        a.moveTo(76, 16.1);
        a.bezierCurveTo(75.6, 15.8, 75.2, 15.5, 74.8, 15.3);
        a.lineTo(75, 15);
        a.bezierCurveTo(75.4, 15.2, 75.8, 15.5, 76.2, 15.8);
        a.lineTo(76, 16.1);
        a.closePath();
        a.moveTo(29.9, 14.9);
        a.lineTo(29.7, 14.6);
        a.bezierCurveTo(30.1, 14.4, 30.5, 14.1, 31, 13.9);
        a.lineTo(31.1, 14.2);
        a.bezierCurveTo(30.7, 14.4, 30.3, 14.7, 29.9, 14.9);
        a.closePath();
        a.moveTo(73.5, 14.5);
        a.bezierCurveTo(73.1, 14.3, 72.7, 14, 72.2, 13.8);
        a.lineTo(72.4, 13.5);
        a.bezierCurveTo(72.8, 13.7, 73.3, 13.9, 73.7, 14.2);
        a.lineTo(73.5, 14.5);
        a.closePath();
        a.moveTo(32.4, 13.5);
        a.lineTo(32.3, 13.2);
        a.bezierCurveTo(32.7, 12.9, 33.2, 12.7, 33.6, 12.5);
        a.lineTo(33.8, 12.9);
        a.bezierCurveTo(33.3, 13.1, 32.9, 13.3, 32.4, 13.5);
        a.closePath();
        a.moveTo(70.9, 13.1);
        a.bezierCurveTo(70.5, 12.9, 70, 12.7, 69.6, 12.5);
        a.lineTo(69.7, 12.2);
        a.bezierCurveTo(70.2, 12.4, 70.6, 12.6, 71.1, 12.8);
        a.lineTo(70.9, 13.1);
        a.closePath();
        a.moveTo(35.1, 12.2);
        a.lineTo(35, 11.9);
        a.bezierCurveTo(35.4, 11.7, 35.9, 11.5, 36.3, 11.3);
        a.lineTo(36.5, 11.7);
        a.bezierCurveTo(36, 11.9, 35.6, 12.1, 35.1, 12.2);
        a.closePath();
        a.moveTo(68.2, 11.9);
        a.bezierCurveTo(67.8, 11.8, 67.3, 11.6, 66.8, 11.4);
        a.lineTo(67, 11.1);
        a.bezierCurveTo(67.4, 11.2, 67.9, 11.4, 68.4, 11.6);
        a.lineTo(68.2, 11.9);
        a.closePath();
        a.moveTo(37.9, 11.2);
        a.lineTo(37.7, 10.8);
        a.bezierCurveTo(38.2, 10.7, 38.7, 10.5, 39.2, 10.4);
        a.lineTo(39.3, 10.7);
        a.bezierCurveTo(38.8, 10.9, 38.3, 11, 37.9, 11.2);
        a.closePath();
        a.moveTo(65.4, 10.9);
        a.bezierCurveTo(65, 10.8, 64.5, 10.6, 64, 10.5);
        a.lineTo(64.1, 10.1);
        a.bezierCurveTo(64.6, 10.3, 65.1, 10.4, 65.6, 10.6);
        a.lineTo(65.4, 10.9);
        a.closePath();
        a.moveTo(40.7, 10.3);
        a.lineTo(40.6, 10);
        a.bezierCurveTo(41.1, 9.8, 41.6, 9.7, 42, 9.6);
        a.lineTo(42.1, 10);
        a.bezierCurveTo(41.6, 10.1, 41.2, 10.2, 40.7, 10.3);
        a.closePath();
        a.moveTo(62.6, 10.1);
        a.bezierCurveTo(62.1, 10, 61.7, 9.9, 61.2, 9.8);
        a.lineTo(61.2, 9.4);
        a.bezierCurveTo(61.7, 9.5, 62.2, 9.6, 62.7, 9.8);
        a.lineTo(62.6, 10.1);
        a.closePath();
        a.moveTo(43.6, 9.6);
        a.lineTo(43.5, 9.3);
        a.bezierCurveTo(44, 9.2, 44.5, 9.1, 45, 9);
        a.lineTo(45, 9.4);
        a.bezierCurveTo(44.5, 9.5, 44.1, 9.5, 43.6, 9.6);
        a.closePath();
        a.moveTo(59.7, 9.5);
        a.bezierCurveTo(59.2, 9.4, 58.8, 9.3, 58.3, 9.3);
        a.lineTo(58.3, 8.9);
        a.bezierCurveTo(58.8, 9, 59.3, 9, 59.8, 9.1);
        a.lineTo(59.7, 9.5);
        a.closePath();
        a.moveTo(46.5, 9.2);
        a.lineTo(46.4, 8.8);
        a.bezierCurveTo(46.9, 8.7, 47.4, 8.7, 47.9, 8.6);
        a.lineTo(48, 9);
        a.bezierCurveTo(47.5, 9.1, 47, 9.1, 46.5, 9.2);
        a.closePath();
        a.moveTo(56.8, 9.1);
        a.bezierCurveTo(56.3, 9, 55.8, 9, 55.3, 8.9);
        a.lineTo(55.4, 8.6);
        a.bezierCurveTo(55.9, 8.6, 56.3, 8.7, 56.8, 8.7);
        a.lineTo(56.8, 9.1);
        a.closePath();
        a.moveTo(49.4, 8.9);
        a.lineTo(49.4, 8.5);
        a.bezierCurveTo(49.9, 8.5, 50.4, 8.5, 50.9, 8.5);
        a.lineTo(50.9, 8.8);
        a.bezierCurveTo(50.4, 8.8, 49.9, 8.9, 49.4, 8.9);
        a.closePath();
        a.moveTo(53.9, 8.9);
        a.bezierCurveTo(53.4, 8.8, 52.9, 8.8, 52.5, 8.8);
        a.lineTo(52.4, 8.8);
        a.lineTo(52.4, 8.4);
        a.lineTo(52.5, 8.4);
        a.bezierCurveTo(52.9, 8.5, 53.4, 8.5, 53.9, 8.5);
        a.lineTo(53.9, 8.9);
        a.closePath();
        a.beginFill(Graphics.getRGB(254, 199, 16));
        a.moveTo(52.4, 11.9);
        a.bezierCurveTo(30.2, 11.7, 12.1, 29.5, 11.9, 51.7);
        a.bezierCurveTo(11.7, 73.9, 29.5, 92, 51.7, 92.2);
        a.bezierCurveTo(73.9, 92.4, 92, 74.6, 92.2, 52.4);
        a.bezierCurveTo(92.4, 30.2, 74.6, 12.1, 52.4, 11.9);
        a.closePath();
        a.moveTo(51.7, 88.6);
        a.bezierCurveTo(31.6, 88.4, 15.3, 71.8, 15.5, 51.7);
        a.bezierCurveTo(15.7, 31.6, 32.2, 15.3, 52.4, 15.5);
        a.bezierCurveTo(72.5, 15.7, 88.8, 32.3, 88.6, 52.4);
        a.bezierCurveTo(88.4, 72.5, 71.8, 88.8, 51.7, 88.6);
        a.closePath();
        a.beginStroke(Graphics.getRGB(239, 71, 34));
        a.beginFill(Graphics.getRGB(239, 71, 34));
        a.moveTo(52.3, 21);
        a.bezierCurveTo(35.2, 20.8, 21.2, 34.6, 21, 51.8);
        a.bezierCurveTo(20.8, 68.9, 34.6, 82.9, 51.8, 83.1);
        a.bezierCurveTo(68.9, 83.3, 82.9, 69.5, 83.1, 52.3);
        a.bezierCurveTo(83.3, 35.2, 69.5, 21.2, 52.3, 21);
        a.closePath();
        a.moveTo(51.8, 77.6);
        a.bezierCurveTo(37.7, 77.5, 26.3, 65.9, 26.5, 51.8);
        a.bezierCurveTo(26.6, 37.7, 38.2, 26.3, 52.3, 26.5);
        a.bezierCurveTo(66.4, 26.6, 77.7, 38.2, 77.6, 52.3);
        a.bezierCurveTo(77.5, 66.4, 65.9, 77.8, 51.8, 77.6);
        a.closePath();
        a.beginFill(Graphics.getRGB(254, 199, 16));
        a.beginStroke(Graphics.getRGB(254, 199, 16));
        a.moveTo(52.2, 33.8);
        a.bezierCurveTo(42.1, 33.7, 33.9, 41.8, 33.8, 51.9);
        a.bezierCurveTo(33.7, 61.9, 41.8, 70.2, 51.9, 70.3);
        a.bezierCurveTo(61.9, 70.4, 70.2, 62.3, 70.3, 52.2);
        a.bezierCurveTo(70.4, 42.2, 62.3, 33.9, 52.2, 33.8);
        a.closePath();
        a.moveTo(52, 61.2);
        a.bezierCurveTo(46.9, 61.1, 42.9, 57, 42.9, 52);
        a.bezierCurveTo(43, 46.9, 47.1, 42.9, 52.1, 42.9);
        a.bezierCurveTo(57.2, 43, 61.2, 47.1, 61.2, 52.1);
        a.bezierCurveTo(61.1, 57.2, 57, 61.2, 52, 61.2);
        a.closePath();
        this.graphics = a
    };
    a.LogoCircle = b
})(window);
(function(a) {
    function b() {
        this.initialize()
    }
    b.prototype = new Shape;
    b.prototype.Shape_initialize = b.prototype.initialize;
    b.prototype.initialize = function() {
        this.Shape_initialize();
        this.drawVector()
    };
    b.prototype.drawVector = function() {
        var a = new Graphics;
        a.beginFill(Graphics.getRGB(243, 120, 118));
        a.moveTo(0, 48.9);
        a.lineTo(0, -0);
        a.lineTo(10.1, -0);
        a.lineTo(15, 27.1);
        a.bezierCurveTo(15.2, 28.2, 15.4, 29.3, 15.5, 30.6);
        a.bezierCurveTo(15.6, 31.8, 15.6, 33.1, 15.6, 34.4);
        a.bezierCurveTo(15.6, 33.3, 15.7, 32.1, 15.8, 30.9);
        a.bezierCurveTo(15.9, 29.7, 16.1, 28.5, 16.3, 27.1);
        a.lineTo(21, -0);
        a.lineTo(31.2, -0);
        a.lineTo(31.2, 48.9);
        a.lineTo(24.2, 48.9);
        a.lineTo(24.2, 18);
        a.bezierCurveTo(24.2, 17.1, 24.2, 16, 24.3, 14.5);
        a.bezierCurveTo(24.4, 13, 24.6, 11.3, 24.7, 9.5);
        a.bezierCurveTo(24.6, 10.1, 24.5, 11.1, 24.3, 12.2);
        a.bezierCurveTo(23.9, 14.4, 23.7, 15.8, 23.5, 16.4);
        a.lineTo(17.4, 48.9);
        a.lineTo(13.6, 48.9);
        a.lineTo(7.7, 16.4);
        a.bezierCurveTo(7.5, 15.1, 7.3, 13.7, 7, 12.1);
        a.bezierCurveTo(6.7, 10.5, 6.6, 9.7, 6.5, 9.5);
        a.bezierCurveTo(6.7, 11.2, 6.8, 12.7, 6.9, 14.2);
        a.bezierCurveTo(7, 15.6, 7, 16.9, 7, 18);
        a.lineTo(7, 48.9);
        a.lineTo(0, 48.9);
        a.closePath();
        a.moveTo(35.4, 48.9);
        a.lineTo(43.5, -0);
        a.lineTo(53.3, -0);
        a.lineTo(61.3, 48.9);
        a.lineTo(53.6, 48.9);
        a.lineTo(52.1, 38.3);
        a.lineTo(44.5, 38.3);
        a.lineTo(42.8, 48.9);
        a.lineTo(35.4, 48.9);
        a.closePath();
        a.moveTo(45.4, 31.3);
        a.lineTo(51.1, 31.3);
        a.lineTo(48.6, 10.9);
        a.lineTo(48.1, 10.9);
        a.lineTo(45.4, 31.3);
        a.closePath();
        a.moveTo(65.6, 48.9);
        a.lineTo(65.6, -0);
        a.lineTo(75.7, -0);
        a.lineTo(80.6, 27.1);
        a.bezierCurveTo(80.8, 28.2, 81, 29.3, 81.1, 30.6);
        a.bezierCurveTo(81.2, 31.8, 81.2, 33.1, 81.2, 34.4);
        a.bezierCurveTo(81.2, 33.3, 81.3, 32.1, 81.4, 30.9);
        a.bezierCurveTo(81.5, 29.7, 81.7, 28.5, 81.9, 27.1);
        a.lineTo(86.7, -0);
        a.lineTo(96.8, -0);
        a.lineTo(96.8, 48.9);
        a.lineTo(89.8, 48.9);
        a.lineTo(89.8, 18);
        a.bezierCurveTo(89.8, 17.1, 89.8, 16, 89.9, 14.5);
        a.bezierCurveTo(90, 13, 90.2, 11.3, 90.3, 9.5);
        a.bezierCurveTo(90.2, 10.1, 90.1, 11.1, 89.9, 12.2);
        a.bezierCurveTo(89.5, 14.4, 89.3, 15.8, 89.2, 16.4);
        a.lineTo(83, 48.9);
        a.lineTo(79.2, 48.9);
        a.lineTo(73.3, 16.4);
        a.bezierCurveTo(73.1, 15.1, 72.9, 13.7, 72.6, 12.1);
        a.bezierCurveTo(72.3, 10.5, 72.2, 9.7, 72.1, 9.5);
        a.bezierCurveTo(72.3, 11.2, 72.4, 12.7, 72.5, 14.2);
        a.bezierCurveTo(72.6, 15.6, 72.7, 16.9, 72.7, 18);
        a.lineTo(72.7, 48.9);
        a.lineTo(65.6, 48.9);
        a.closePath();
        a.moveTo(101.2, 48.9);
        a.lineTo(101.2, 41.4);
        a.lineTo(114.8, 7.5);
        a.lineTo(102.3, 7.5);
        a.lineTo(102.3, -0);
        a.lineTo(123, -0);
        a.lineTo(123, 7.1);
        a.lineTo(109.3, 41.4);
        a.lineTo(123, 41.4);
        a.lineTo(123, 48.9);
        a.lineTo(101.2, 48.9);
        a.closePath();
        a.moveTo(126.5, 48.9);
        a.lineTo(126.5, -0);
        a.lineTo(146.1, -0);
        a.lineTo(146.1, 7);
        a.lineTo(134, 7);
        a.lineTo(134, 19.9);
        a.lineTo(142.8, 19.9);
        a.lineTo(142.8, 26.9);
        a.lineTo(134, 26.9);
        a.lineTo(134, 41.5);
        a.lineTo(146.1, 41.5);
        a.lineTo(146.1, 48.9);
        a.lineTo(126.5, 48.9);
        a.closePath();
        a.moveTo(152, 48.9);
        a.lineTo(152, -0);
        a.lineTo(159.5, -0);
        a.lineTo(159.5, 41.8);
        a.lineTo(171.2, 41.8);
        a.lineTo(171.2, 48.9);
        a.lineTo(152, 48.9);
        a.closePath();
        a.moveTo(175.4, 48.9);
        a.lineTo(175.4, -0);
        a.lineTo(182.9, -0);
        a.lineTo(182.9, 41.8);
        a.lineTo(194.6, 41.8);
        a.lineTo(194.6, 48.9);
        a.lineTo(175.4, 48.9);
        a.closePath();
        a.moveTo(198.8, 48.9);
        a.lineTo(198.8, -0);
        a.lineTo(218.4, -0);
        a.lineTo(218.4, 7);
        a.lineTo(206.3, 7);
        a.lineTo(206.3, 19.9);
        a.lineTo(215.1, 19.9);
        a.lineTo(215.1, 26.9);
        a.lineTo(206.3, 26.9);
        a.lineTo(206.3, 41.5);
        a.lineTo(218.4, 41.5);
        a.lineTo(218.4, 48.9);
        a.lineTo(198.8, 48.9);
        a.closePath();
        this.graphics = a
    };
    a.Mamzelle = b
})(window)