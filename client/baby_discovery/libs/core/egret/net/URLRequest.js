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
    /**
     * @class egret.URLRequest
     * @classdesc URLRequest 类可捕获单个 HTTP 请求中的所有信息。
     * @extends egret.HashObject
     * @see http://edn.egret.com/cn/index.php?g=&m=article&a=index&id=160&terms1_id=25&terms2_id=37 构建通信请求
     */
    var URLRequest = (function (_super) {
        __extends(URLRequest, _super);
        /**
         * 创建一个 egret.URLRequest 对象
         * @method egret.URLRequest#constructor
         * @param url {string} 进行网络请求的地址
         */
        function URLRequest(url) {
            if (url === void 0) { url = null; }
            _super.call(this);
            /**
             * 一个对象，它包含将随 URL 请求一起传输的数据。
             * 该属性与 method 属性配合使用。当 method 值为 GET 时，将使用 HTTP 查询字符串语法将 data 值追加到 URLRequest.url 值。
             * 当 method 值为 POST（或 GET 之外的任何值）时，将在 HTTP 请求体中传输 data 值。
             * URLRequest API 支持二进制 POST，并支持 URL 编码变量和字符串。该数据对象可以是 ByteArray、URLVariables 或 String 对象。
             * 该数据的使用方式取决于所用对象的类型：
             * 如果该对象为 ByteArray 对象，则 ByteArray 对象的二进制数据用作 POST 数据。对于 GET，不支持 ByteArray 类型的数据。
             * 如果该对象是 URLVariables 对象，并且该方法是 POST，则使用 x-www-form-urlencoded 格式对变量进行编码，并且生成的字符串会用作 POST 数据。
             * 如果该对象是 URLVariables 对象，并且该方法是 GET，则 URLVariables 对象将定义要随 URLRequest 对象一起发送的变量。
             * 否则，该对象会转换为字符串，并且该字符串会用作 POST 或 GET 数据。
             * @member {any} egret.URLRequest#data
             */
            this.data = null;
            /**
             * 请求方式，有效值为URLRequestMethod.GET 或 URLRequestMethod.POST。
             * @member {string} egret.URLRequest#method
             */
            this.method = egret.URLRequestMethod.GET;
            /**
             * 所请求的 URL。
             * @member {string} egret.URLRequest#url
             */
            this.url = "";
            this.url = url;
        }
        var __egretProto__ = URLRequest.prototype;
        return URLRequest;
    })(egret.HashObject);
    egret.URLRequest = URLRequest;
    URLRequest.prototype.__class__ = "egret.URLRequest";
})(egret || (egret = {}));
