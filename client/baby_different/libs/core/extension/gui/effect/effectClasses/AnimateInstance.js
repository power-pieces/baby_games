//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-2015, Egret Technology Inc.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var egret;
(function (egret) {
    var gui;
    (function (gui) {
        /**
         * @class egret.gui.AnimateInstance
         * @classdesc
         * AnimateInstance 类用于实现 Animate 效果的实例类
         * @extends egret.gui.EffectInstance
         */
        var AnimateInstance = (function (_super) {
            __extends(AnimateInstance, _super);
            /**
             * @method egret.gui.AnimateInstance#constructor
             */
            function AnimateInstance(target) {
                _super.call(this, target);
                /**
                 * 样式属性的字典
                 */
                this.isStyleMap = {};
                this._seekTime = 0;
                this.numUpdateListeners = 0;
            }
            var __egretProto__ = AnimateInstance.prototype;
            Object.defineProperty(__egretProto__, "motionPaths", {
                /**
                 * MotionPath 对象集，它定义随着时间的推移 Animation 将设置动画的属性和值。
                 * @member egret.gui.AnimateInstance#motionPaths
                 */
                get: function () {
                    return this._motionPaths;
                },
                set: function (value) {
                    if (!this._motionPaths)
                        this._motionPaths = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(__egretProto__, "easer", {
                /**
                 * 此效果的缓动行为
                 * @member egret.gui.AnimateInstance#easer
                 */
                get: function () {
                    return this._easer;
                },
                set: function (value) {
                    this._easer = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(__egretProto__, "interpolator", {
                /**
                 * Animation 实例所用的插补器，用于计算属性的开始值和结束值之间的值。
                 * @member egret.gui.AnimateInstance#interpolator
                 */
                get: function () {
                    return this._interpolator;
                },
                set: function (value) {
                    this._interpolator = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(__egretProto__, "repeatBehavior", {
                /**
                 * 设置重复动画的行为。
                 * 重复动画已将 repeatCount 属性设置为 0 或某个大于 1 的值。
                 * 此值应该为 RepeatBehavior.LOOP（意味着每次动画按相同的顺序重复）
                 * 或 RepeatBehavior.REVERSE（意味着对于每个迭代，动画都倒转方向）。
                 * @member egret.gui.AnimateInstance#repeatBehavior
                 */
                get: function () {
                    return this._repeatBehavior;
                },
                set: function (value) {
                    this._repeatBehavior = value;
                },
                enumerable: true,
                configurable: true
            });
            __egretProto__._setPlayReversed = function (value) {
                _super.prototype._setPlayReversed.call(this, value);
                if (value && this.animation)
                    this.animation.reverse();
                this.reverseAnimation = value;
            };
            Object.defineProperty(__egretProto__, "playheadTime", {
                /**
                 *  @inheritDoc
                 */
                get: function () {
                    return this.animation ? this.animation.playheadTime : this._seekTime;
                },
                set: function (value) {
                    if (this.animation)
                        this.animation.playheadTime = value;
                    this._seekTime = value;
                },
                enumerable: true,
                configurable: true
            });
            /**
             * @inheritDoc
             */
            __egretProto__.pause = function () {
                _super.prototype.pause.call(this);
                if (this.animation)
                    this.animation.pause();
            };
            /**
             * @inheritDoc
             */
            __egretProto__.stop = function () {
                _super.prototype.stop.call(this);
                if (this.animation)
                    this.animation.stop();
            };
            /**
             * @inheritDoc
             */
            __egretProto__.resume = function () {
                _super.prototype.resume.call(this);
                if (this.animation)
                    this.animation.resume();
            };
            /**
             * @inheritDoc
             */
            __egretProto__.reverse = function () {
                _super.prototype.reverse.call(this);
                if (this.animation)
                    this.animation.reverse();
                this.reverseAnimation = !this.reverseAnimation;
            };
            /**
             * @inheritDoc
             */
            __egretProto__.end = function () {
                if (this.animation) {
                    this.animation.end();
                    this.animation = null;
                }
                _super.prototype.end.call(this);
            };
            /**
             * @inheritDoc
             */
            __egretProto__.startEffect = function () {
                //TODO?
                this.play();
            };
            /**
             * @inheritDoc
             */
            __egretProto__.play = function () {
                _super.prototype.play.call(this);
                if (!this.motionPaths || this.motionPaths.length == 0) {
                    var timer = new egret.Timer(this.duration, 1);
                    timer.addEventListener(egret.TimerEvent.TIMER, this.noopAnimationHandler, this);
                    timer.start();
                    return;
                }
                this.isStyleMap = new Array(this.motionPaths.length);
                var addWidthMP;
                var addHeightMP;
                var i = 0;
                var j = 0;
                for (i = 0; i < this.motionPaths.length; ++i) {
                    var mp = (this.motionPaths[i]);
                    var keyframes = mp.keyframes;
                    if (!keyframes)
                        continue;
                    if (this.interpolator)
                        mp.interpolator = this.interpolator;
                    if (this.duration > 0)
                        for (j = 0; j < keyframes.length; ++j)
                            if (!isNaN(keyframes[j].time))
                                this.duration = Math.max(this.duration, keyframes[j].time);
                }
                if (addWidthMP)
                    this.motionPaths.push(new gui.SimpleMotionPath("width"));
                if (addHeightMP)
                    this.motionPaths.push(new gui.SimpleMotionPath("height"));
                this.animation = new gui.Animation(this.animationUpdate, this);
                this.animation.duration = this.duration;
                this.animation.startFunction = this.animationStart;
                this.animation.endFunction = this.animationEnd;
                this.animation.stopFunction = this.animationStop;
                this.animation.repeatFunction = this.animationRepeat;
                this.animation.motionPaths = this.motionPaths;
                if (this.reverseAnimation)
                    this.animation.playReversed = true;
                this.animation.interpolator = this.interpolator;
                this.animation.repeatCount = this.repeatCount;
                this.animation.repeatDelay = this.repeatDelay;
                this.animation.repeatBehavior = this.repeatBehavior;
                this.animation.easer = this.easer;
                this.animation.startDelay = this.startDelay;
                this.animation.play();
                if (this._seekTime > 0)
                    this.animation.playheadTime = this._seekTime;
            };
            /**
             * 应用动画对应的属性值
             * @method egret.gui.AnimateInstance#applyValues
             */
            __egretProto__.applyValues = function (anim) {
                for (var i = 0; i < this.motionPaths.length; ++i) {
                    var prop = this.motionPaths[i].property;
                    this.setValue(prop, anim.currentValue[prop]);
                }
            };
            __egretProto__._isValidValue = function (value) {
                return (typeof (value) == "number" && !isNaN(value)) || (!(typeof (value) == "number") && value !== null);
            };
            /**
             * 遍历motionPaths，用计算的值替换null。
             */
            __egretProto__.finalizeValues = function () {
                var j = 0;
                var prevValue;
                for (var i = 0; i < this.motionPaths.length; ++i) {
                    var motionPath = (this.motionPaths[i]);
                    var keyframes = motionPath.keyframes;
                    if (!keyframes || keyframes.length == 0)
                        continue;
                    if (!this._isValidValue(keyframes[0].value)) {
                        if (keyframes.length > 0 && this._isValidValue(keyframes[1].valueBy) && this._isValidValue(keyframes[1].value)) {
                            keyframes[0].value = motionPath.interpolator.decrement(keyframes[1].value, keyframes[1].valueBy);
                        }
                        else {
                            keyframes[0].value = this.getCurrentValue(motionPath.property);
                        }
                    }
                    prevValue = keyframes[0].value;
                    for (j = 1; j < keyframes.length; ++j) {
                        var kf = (keyframes[j]);
                        if (!this._isValidValue(kf.value)) {
                            if (this._isValidValue(kf.valueBy))
                                kf.value = motionPath.interpolator.increment(prevValue, kf.valueBy);
                            else {
                                if (j <= (keyframes.length - 2) && this._isValidValue(keyframes[j + 1].value) && this._isValidValue(keyframes[j + 1].valueBy)) {
                                    kf.value = motionPath.interpolator.decrement(keyframes[j + 1].value, keyframes[j + 1].valueBy);
                                }
                                else {
                                    kf.value = prevValue;
                                }
                            }
                        }
                        prevValue = kf.value;
                    }
                }
            };
            __egretProto__.animationStart = function (animation) {
                if (this.disableLayout) {
                    this.cacheConstraints();
                }
                else if (this.disabledConstraintsMap) {
                    for (var constraint in this.disabledConstraintsMap)
                        this.cacheConstraint(constraint);
                    this.disabledConstraintsMap = null;
                }
                this.finalizeValues();
            };
            __egretProto__.animationUpdate = function (animation) {
                this.applyValues(animation);
                if (this.numUpdateListeners > 0) {
                    var event = new gui.EffectEvent(gui.EffectEvent.EFFECT_UPDATE);
                    event.effectInstance = this;
                    this.dispatchEvent(event);
                }
            };
            __egretProto__.animationRepeat = function (animation) {
                var event = new gui.EffectEvent(gui.EffectEvent.EFFECT_REPEAT);
                event.effectInstance = this;
                this.dispatchEvent(event);
            };
            __egretProto__.animationCleanup = function () {
                if (this.disableLayout) {
                    this.reenableConstraints();
                }
            };
            __egretProto__.animationEnd = function (animation) {
                this.animationCleanup();
                this.finishEffect();
            };
            __egretProto__.animationStop = function (animation) {
                this.animationCleanup();
            };
            __egretProto__.noopAnimationHandler = function (event) {
                this.finishEffect();
            };
            __egretProto__.addEventListener = function (type, listener, thisObject, useCapture, priority) {
                if (useCapture === void 0) { useCapture = false; }
                if (priority === void 0) { priority = 0; }
                _super.prototype.addEventListener.call(this, type, listener, thisObject, useCapture, priority);
                if (type == gui.EffectEvent.EFFECT_UPDATE)
                    ++this.numUpdateListeners;
            };
            __egretProto__.removeEventListener = function (type, listener, useCapture) {
                if (useCapture === void 0) { useCapture = false; }
                _super.prototype.removeEventListener.call(this, type, listener, this, useCapture);
                if (type == gui.EffectEvent.EFFECT_UPDATE)
                    --this.numUpdateListeners;
            };
            /**
             * 恢复布局属性
             */
            __egretProto__.reenableConstraint = function (name) {
                var value = this.constraintsHolder[name];
                if (value !== undefined) {
                    if (name in this.target)
                        this.target[name] = value;
                    else
                        this.target.setStyle(name, value);
                    delete this.constraintsHolder[name];
                }
                return value;
            };
            /**
             * 恢复所有布局属性
             */
            __egretProto__.reenableConstraints = function () {
                if (this.constraintsHolder) {
                    var left = this.reenableConstraint("left");
                    var right = this.reenableConstraint("right");
                    var top = this.reenableConstraint("top");
                    var bottom = this.reenableConstraint("bottom");
                    this.reenableConstraint("horizontalCenter");
                    this.reenableConstraint("verticalCenter");
                    this.constraintsHolder = null;
                    if (left != undefined && right != undefined && "explicitWidth" in this.target)
                        this.target.width = this.oldWidth;
                    if (top != undefined && bottom != undefined && "explicitHeight" in this.target)
                        this.target.height = this.oldHeight;
                }
            };
            /**
             * 缓存布局属性
             */
            __egretProto__.cacheConstraint = function (name) {
                var isProperty = (name in this.target);
                var value;
                if (isProperty)
                    value = this.target[name];
                else
                    value = this.target.getStyle(name);
                if (!isNaN(value) && value != null) {
                    if (!this.constraintsHolder)
                        this.constraintsHolder = {};
                    this.constraintsHolder[name] = value;
                    if (isProperty)
                        this.target[name] = NaN;
                    else if ("setStyle" in this.target)
                        this.target.setStyle(name, undefined);
                }
                return value;
            };
            /**
             * 缓存所有布局属性
             */
            __egretProto__.cacheConstraints = function () {
                var left = this.cacheConstraint("left");
                var right = this.cacheConstraint("right");
                var top = this.cacheConstraint("top");
                var bottom = this.cacheConstraint("bottom");
                this.cacheConstraint("verticalCenter");
                this.cacheConstraint("horizontalCenter");
                if (left != undefined && right != undefined && "explicitWidth" in this.target) {
                    var w = this.target.width;
                    this.oldWidth = this.target.explicitWidth;
                    this.target.width = w;
                }
                if (top != undefined && bottom != undefined && "explicitHeight" in this.target) {
                    var h = this.target.height;
                    this.oldHeight = this.target.explicitHeight;
                    this.target.height = h;
                }
            };
            __egretProto__._setupStyleMapEntry = function (property) {
                if (this.isStyleMap[property] == undefined) {
                    if (property in this.target) {
                        this.isStyleMap[property] = false;
                    }
                    else {
                        try {
                            this.target.getStyle(property);
                            this.isStyleMap[property] = true;
                        }
                        catch (err) {
                            egret.$error(3014);
                        }
                    }
                }
            };
            __egretProto__.setValue = function (property, value) {
                this._setupStyleMapEntry(property);
                if (!this.isStyleMap[property])
                    this.target[property] = value;
                else
                    this.target.setStyle(property, value);
            };
            __egretProto__.getCurrentValue = function (property) {
                this._setupStyleMapEntry(property);
                if (!this.isStyleMap[property])
                    return this.target[property];
                else
                    return this.target.getStyle(property);
            };
            return AnimateInstance;
        })(gui.EffectInstance);
        gui.AnimateInstance = AnimateInstance;
        AnimateInstance.prototype.__class__ = "egret.gui.AnimateInstance";
    })(gui = egret.gui || (egret.gui = {}));
})(egret || (egret = {}));
