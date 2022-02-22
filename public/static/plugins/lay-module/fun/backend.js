    layui.define(['layer','element','dropdown'], function (exports) {
        var $ = layui.$, element = layui.element, layer = layui.layer,dropdown = layui.dropdown;
        element.init();
        if (!/http(s*):\/\//.test(location.href)) {
            let tips = "请先将项目部署至web容器（Apache/Tomcat/Nginx/IIS/等），否则部分数据将无法显示";
            return Fun.toastr.alert(tips);
        }
        var $document = $(document), $container = $('#fun-app'), FUN_APP = 'fun-app',
            THIS = 'layui-this', SIDE_SHRINK = 'layui-side-shrink',
            //主题配置
            THEME = [
                {
                    headerBg: '#fff',
                    headerfontColor: '#595959',
                    headerBgThis: '#772c6a',
                    headerBgLogo: '#0c0c0c',
                    headerLogofontColor: '#fff',
                    menuLeftBg: '#23262e',
                    menuLeftBgThis: '#772c6a',
                    menuLeftBgHover: '#772c6a',
                    menuLeftDlBg: 'rgba(0,0,0,.3)',
                    menuLeftfontColor: 'rgba(255,255,255,.7)',
                    menuLeftfontColorHover: '#fff',
                }, {
                    headerBg: '#fff',
                    headerfontColor: '#595959',
                    headerBgThis: '#197971',
                    headerBgLogo: '#0c0c0c',
                    headerLogofontColor: '#fff',
                    menuLeftBg: '#23262e',
                    menuLeftBgThis: '#20b598',
                    menuLeftBgHover: '#20b598',
                    menuLeftDlBg: 'rgba(0,0,0,.3)',
                    menuLeftfontColor: 'rgba(255,255,255,.7)',
                    menuLeftfontColorHover: '#fff',

                }, {
                    headerBg: '#fff',
                    headerfontColor: '#595959',
                    headerBgThis: '#722ed1',
                    headerBgLogo: '#0c0c0c',
                    headerLogofontColor: '#fff',
                    menuLeftBg: '#23262e',
                    menuLeftBgThis: '#722ed1',
                    menuLeftBgHover: '#722ed1',
                    menuLeftDlBg: 'rgba(0,0,0,.3)',
                    menuLeftfontColor: 'rgba(255,255,255,.7)',
                    menuLeftfontColorHover: '#fff',

                }, {
                    headerBg: '#fff',
                    headerfontColor: '#595959',
                    headerBgThis: '#772c6a',
                    headerBgLogo: '#fff',
                    headerLogofontColor: '#595959',
                    menuLeftBg: '#23262e',
                    menuLeftBgThis: '#772c6a',
                    menuLeftBgHover: '#772c6a',
                    menuLeftDlBg: 'rgba(0,0,0,.3)',
                    menuLeftfontColor: 'rgba(255,255,255,.7)',
                    menuLeftfontColorHover: '#fff',
                }, {
                    headerBg: '#fff',
                    headerfontColor: '#595959',
                    headerBgThis: '#197971',
                    headerBgLogo: '#fff',
                    headerLogofontColor: '#595959',
                    menuLeftBg: '#23262e',
                    menuLeftBgThis: '#20b598',
                    menuLeftBgHover: '#20b598',
                    menuLeftDlBg: 'rgba(0,0,0,.3)',
                    menuLeftfontColor: 'rgba(255,255,255,.7)',
                    menuLeftfontColorHover: '#fff',
                }, {
                    headerBg: '#fff',
                    headerfontColor: '#595959',
                    headerBgThis: '#722ed1',
                    headerBgLogo: '#fff',
                    headerLogofontColor: '#595959',
                    menuLeftBg: '#23262e',
                    menuLeftBgThis: '#722ed1',
                    menuLeftBgHover: '#722ed1',
                    menuLeftDlBg: 'rgba(0,0,0,.3)',
                    menuLeftfontColor: 'rgba(255,255,255,.7)',
                    menuLeftfontColorHover: '#fff',
                }, {
                    headerBg: '#20b598',
                    headerfontColor: '#fff',
                    headerBgThis: '#197971',
                    headerBgLogo: '#0c0c0c',
                    headerLogofontColor: '#fff',
                    menuLeftBg: '#23262e',
                    menuLeftBgThis: '#20b598',
                    menuLeftBgHover: '#20b598',
                    menuLeftDlBg: 'rgba(0,0,0,.3)',
                    menuLeftfontColor: 'rgba(255,255,255,.7)',
                    menuLeftfontColorHover: '#fff',
                }, {
                    headerBg: '#20b598',
                    headerfontColor: '#fff',
                    headerBgThis: '#197971',
                    headerBgLogo: '#20b598',
                    headerLogofontColor: '#fff',
                    menuLeftBg: '#2f4056',
                    menuLeftBgThis: '#20b598',
                    menuLeftBgHover: '#20b598',
                    menuLeftDlBg: 'rgba(0,0,0,.3)',
                    menuLeftfontColor: 'rgba(255,255,255,.7)',
                    menuLeftfontColorHover: '#fff',
                }, {
                    headerBg: '#00a65a',
                    headerBgThis: '#197971',
                    headerBgLogo: '#00a65a',
                    headerLogofontColor: '#fff',
                    menuLeftBg: '#222d32',
                    menuLeftBgThis: '#00a65a',
                    menuLeftBgHover: '#00a65a',
                    menuLeftDlBg: 'rgba(0,0,0,.3)',
                    menuLeftfontColor: 'rgba(255,255,255,.7)',
                    menuLeftfontColorHover: '#fff',
                }, {
                    headerBg: '#722ed1',
                    headerfontColor: '#fff',
                    headerBgThis: '#197971',
                    headerBgLogo: '#722ed1',
                    headerLogofontColor: '#fff',
                    menuLeftBg: '#2f4056',
                    menuLeftBgThis: '#722ed1',
                    menuLeftBgHover: '#722ed1',
                    menuLeftDlBg: 'rgba(0,0,0,.3)',
                    menuLeftfontColor: 'rgba(255,255,255,.7)',
                    menuLeftfontColorHover: '#fff',
                }, {
                    headerBg: '#23262e',
                    headerfontColor: '#fff',
                    headerBgThis: '#0c0c0c',
                    headerBgLogo: '#0c0c0c',
                    headerLogofontColor: '#fff',
                    menuLeftBg: '#23262e',
                    menuLeftBgThis: '#20b598',
                    menuLeftBgHover: '#3b3f4b',
                    menuLeftDlBg: 'rgba(0,0,0,.3)',
                    menuLeftfontColor: 'rgba(255,255,255,.7)',
                    menuLeftfontColorHover: '#fff',
                }, {
                    headerBg: '#ffa4d1',
                    headerfontColor: '#fff',
                    headerBgThis: '#bf7b9d',
                    headerBgLogo: '#e694bd',
                    headerLogofontColor: '#fff',
                    menuLeftBg: '#1f1f1f',
                    menuLeftBgThis: '#ffa4d1',
                    menuLeftBgHover: '#ffa4d1',
                    menuLeftDlBg: 'rgba(0,0,0,.3)',
                    menuLeftfontColor: 'rgba(255,255,255,.7)',
                    menuLeftfontColorHover: '#fff',
                }, {
                    headerBg: '#1e9fff',
                    headerfontColor: '#fff',
                    headerBgThis: '#0069b7',
                    headerBgLogo: '#0c0c0c',
                    headerLogofontColor: '#fff',
                    menuLeftBg: '#1f1f1f',
                    menuLeftBgThis: '#1e9fff',
                    menuLeftBgHover: '#1e9fff',
                    menuLeftDlBg: 'rgba(0,0,0,.3)',
                    menuLeftfontColor: 'rgba(255,255,255,.7)',
                    menuLeftfontColorHover: '#fff',
                }, {
                    headerBg: '#963885',
                    headerfontColor: '#fff',
                    headerBgThis: '#772c6a',
                    headerBgLogo: '#243346',
                    headerLogofontColor: '#fff',
                    menuLeftBg: '#191a23',
                    menuLeftBgThis: '#963885',
                    menuLeftBgHover: '#963885',
                    menuLeftDlBg: 'rgba(0,0,0,.3)',
                    menuLeftfontColor: 'rgba(255,255,255,.7)',
                    menuLeftfontColorHover: '#fff',
                }, {
                    headerBg: '#963885',
                    headerfontColor: '#fff',
                    headerBgThis: '#772c6a',
                    headerBgLogo: '#772c6a',
                    headerLogofontColor: '#fff',
                    menuLeftBg: '#191a23',
                    menuLeftBgThis: '#963885',
                    menuLeftBgHover: '#963885',
                    menuLeftDlBg: 'rgba(0,0,0,.3)',
                    menuLeftfontColor: 'rgba(255,255,255,.7)',
                    menuLeftfontColorHover: '#fff',
                }, {
                    headerBg: '#1e9fff',
                    headerfontColor: '#fff',
                    headerBgThis: '#0069b7',
                    headerBgLogo: '#0069b7',
                    headerLogofontColor: '#fff',
                    menuLeftBg: '#1f1f1f',
                    menuLeftBgThis: '#1e9fff',
                    menuLeftBgHover: '#1e9fff',
                    menuLeftDlBg: 'rgba(0,0,0,.3)',
                    menuLeftfontColor: 'rgba(255,255,255,.7)',
                    menuLeftfontColorHover: '#fff',
                }, {
                    headerBg: '#ffb800',
                    headerfontColor: '#fff',
                    headerBgThis: '#d09600',
                    headerBgLogo: '#243346',
                    headerLogofontColor: '#fff',
                    menuLeftBg: '#2f4056',
                    menuLeftBgThis: '#ffb800',
                    menuLeftBgHover: '#ffb800',
                    menuLeftDlBg: 'rgba(0,0,0,.3)',
                    menuLeftfontColor: 'rgba(255,255,255,.7)',
                    menuLeftfontColorHover: '#fff',
                }, {
                    headerBg: '#ffb800',
                    headerfontColor: '#fff',
                    headerBgThis: '#d09600',
                    headerBgLogo: '#d09600',
                    headerLogofontColor: '#fff',
                    menuLeftBg: '#2f4056',
                    menuLeftBgThis: '#ffb800',
                    menuLeftBgHover: '#ffb800',
                    menuLeftDlBg: 'rgba(0,0,0,.3)',
                    menuLeftfontColor: 'rgba(255,255,255,.7)',
                    menuLeftfontColorHover: '#fff',
                }, {
                    headerBg: '#e82121',
                    headerfontColor: '#fff',
                    headerBgThis: '#ae1919',
                    headerBgLogo: '#0c0c0c',
                    headerLogofontColor: '#fff',
                    menuLeftBg: '#1f1f1f',
                    menuLeftBgThis: '#e82121',
                    menuLeftBgHover: '#e82121',
                    menuLeftDlBg: 'rgba(0,0,0,.3)',
                    menuLeftfontColor: 'rgba(255,255,255,.7)',
                    menuLeftfontColorHover: '#fff',
                }, {
                    headerBg: '#e82121',
                    headerfontColor: '#fff',
                    headerBgThis: '#ae1919',
                    headerBgLogo: '#d91f1f',
                    headerLogofontColor: '#fff',
                    menuLeftBg: '#1f1f1f',
                    menuLeftBgThis: '#e82121',
                    menuLeftBgHover: '#e82121',
                    menuLeftDlBg: 'rgba(0,0,0,.3)',
                    menuLeftfontColor: 'rgba(255,255,255,.7)',
                    menuLeftfontColorHover: '#fff',
                }, {
                    headerBg: '#e82121',
                    headerfontColor: '#fff',
                    headerBgThis: '#ae1919',
                    headerBgLogo: '#772c6a',
                    headerLogofontColor: '#fff',
                    menuLeftBg: '#1f1f1f',
                    menuLeftBgThis: '#e82121',
                    menuLeftBgHover: '#e82121',
                    menuLeftDlBg: 'rgba(0,0,0,.3)',
                    menuLeftfontColor: 'rgba(255,255,255,.7)',
                    menuLeftfontColorHover: '#fff',
                },
            ];
        var Backend = {
            /*** 版本*/
            v: '2.0.0',
            /**
             * @param options
             */
            render: function (options) {
                options.refreshUrl = options.refreshUrl || Fun.url('ajax/clearcache');
                options.themeid = options.themeid || 0;
                options.maxTabs = options.maxTabs || 15;
                THEME = options.theme ?options.theme:THEME;
                Backend.initTabs({
                    filter: 'layui-layout-tabs',
                    maxTabs: options.maxTabs,
                });
                Backend.hideLoading(options.loadingTime);
                Backend.initBodyTheme();
                Backend.initBgColor();
                Backend.api.bindEvent();
            },
            initBodyTheme:function (name='setTab',type=1){
                $('.layui-side-menu .layui-nav-item').removeClass('layui-nav-hover');
                $('.layui-side-menu .layui-nav-item').find('dl').removeClass('layui-nav-child-drop').removeAttr('style');
                if($('.layui-layout-admin .layui-nav-header').length>0){
                    height = $('.layui-nav-header ul').height();//横屏
                    $('.layui-layout-admin .layui-pagetabs').attr('style','top:'+(60+height)+'px!important;');
                    $('.layui-layout-admin .layui-body').attr('style','padding-bottom:'+(20+height)+'px!important;');
                }
                value = Fun.api.getStorage(name);
                if(value && value==1) {
                    $('.layui-tabs-control.layui-icon-prev,.layui-tabs-control.layui-icon-next,.layui-tabs-control.layui-icon-down,#layui-tab-header').removeClass(
                        'layui-hide');
                    $('#layui-app-body').animate({
                        top: 40
                    }, 100);
                }else if(value && value==2){
                    $('.layui-tabs-control.layui-icon-prev,.layui-tabs-control.layui-icon-next,.layui-tabs-control.layui-icon-down,#layui-tab-header').addClass(
                        'layui-hide');
                    $('#layui-app-body').animate({
                        top: 0
                    }, 100);
                }
                return false ;
            },
            //加载层,锁屏
            hideLoading: function (time) {
                time = time || 350;
                var colorId = Backend.getColorId();
                var bg = THEME[colorId]['menuLeftBgThis'];
                if (colorId) {
                    $(document).find('.fun-loading').find('span').css('background-color', THEME[colorId]['menuLeftBgHover']);
                }
                setTimeout(function () {
                    //判断是否锁定了界面
                    $(document).find('.fun-loading').fadeOut();
                    if (Fun.api.getStorage('BackendLock')) {
                        layer.prompt({
                            btn: [__('Unlock Now')],
                            title: [__('Input Password'), 'background:' + bg + ';color:' + THEME[colorId]['menuLeftfontColor']],
                            closeBtn: 0,
                            formType: 1,
                            success: function (layero, index) {
                                layero.find('.layui-layer-btn0').css('background', bg)
                            }
                        }, function (value, index) {
                            if (value.length < 1) {
                                Fun.toastr.error(__('Input Password'));
                                return false;
                            } else {
                                if (value === Fun.api.getStorage('BackendLock')) {
                                    Fun.toastr.close(index);
                                    //清除密码
                                    Fun.api.setStorage('BackendLock', null);
                                    Fun.toastr.success(__('Unlock Success'))
                                } else {
                                    Fun.toastr.error(__('Password Error'));
                                    return false;
                                }
                            }
                        });
                    }
                }, time)
            },
            /** tab*/
            initTabs: function (options) {
                options.filter = options.filter || null;
                options.maxTabs = options.maxTabs || 15;
                Backend.listenScroll();
                Backend.listenSwitch(options);
                Backend.listenTabs(options);
                Backend.listenDeltab(options);
                Backend.listenFrameTheme();
            },
            //全屏
            fullScreen: function () {
                var ele = document.documentElement
                    , reqFullScreen = ele.requestFullScreen || ele.webkitRequestFullScreen
                    || ele.mozRequestFullScreen || ele.msRequestFullscreen;
                if (typeof reqFullScreen !== 'undefined' && reqFullScreen) {
                    reqFullScreen.call(ele);
                }
            }
            //退出全屏
            , exitScreen: function () {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            },
            checkScreen: function () {
                //屏幕类型 大小
                var ua = navigator.userAgent.toLocaleLowerCase();
                var pl = navigator.platform.toLocaleLowerCase();
                var isAndroid = (/android/i).test(ua) || ((/iPhone|iPod|iPad/i).test(ua) && (/linux/i).test(pl))
                    || (/ucweb.*linux/i.test(ua));
                var isIOS = (/iPhone|iPod|iPad/i).test(ua) && !isAndroid;
                var isWinPhone = (/Windows Phone|ZuneWP7/i).test(ua);
                var $win = $(window);
                var width = $win.width();
                return !(!isAndroid && !isIOS && !isWinPhone && width > 768);
            },
            //侧边
            sideFlexible: function () {
                //侧边伸缩
                $container.toggleClass(SIDE_SHRINK);
                $container.toggleClass(FUN_APP);
                $('.layui-header #layui-header-nav-pc,.layui-header #layui-header-nav-mobile').toggleClass('layui-layout-nav');
                $('.layui-side-shrink .layui-side-menu .layui-nav-item').removeClass("layui-nav-hover");
            },
            listenTabs: function (options) {
                var funTabInfo = layui.sessionData("funTabInfo");
                var tabLayId = layui.sessionData('tabLayId');
                var layId = tabLayId.id;
                if (layId === null || layId === undefined) return false;
                if (funTabInfo) {
                    $("#layui-side-left-menu [data-url]").each(function () {
                        var layId_this = $(this).attr('lay-id');
                        // if (funTabInfo[layId_this]){
                        if (layId_this === layId) {
                            var text = $(this).data('tips') || $(this).attr('title'),
                                url = $(this).data('url'), icon = $(this).find('i').attr('class');
                            $(this).parents('.layui-nav-item').addClass('active');
                            Backend.addTab({
                                layId: layId_this,
                                url: url,
                                text: text,
                                icon: icon,
                                maxTabs: options.maxTabs,
                            });
                            element.tabChange('layui-layout-tabs', layId);
                        }
                    });
                }
            },
            /**
             * 删除tab窗口
             * @param layId
             * @param isParent
             */
            delTab: function (layId, isParent) {

                var funTabInfo = layui.sessionData("funTabInfo");
                if (funTabInfo != null) {
                    layui.sessionData("funTabInfo", {key: layId, remove: true})
                }
                if (isParent === true) {
                    parent.layui.element.tabDelete('layui-tabs', layId);
                } else {
                    element.tabDelete('layui-layout-tabs', layId);
                }
                layId = $('#layui-app-tabs .layui-tab .layui-tab-title').find('.layui-this').attr('lay-id');
                Backend.changeSessioinTabId(layId);
                $('#layui-nav-righmenu').remove();
            },
            /**
             * 增加tab
             */
            addTab: function (options) {
                options.layId = options.layId || null;
                options.url = options.url || null;
                options.text = options.text || null;
                options.icon = options.icon || null;
                options.iframe = options.iframe || null;
                if (top.window.$("#layui-app-tabs .layui-tab .layui-tab-title li").length >= options.maxTabs) {
                    Fun.toastr.error(__('window is create by maxnum'));
                    return false;
                }
                Backend.changeSessioinTabId(options.layId);
                layui.sessionData('funTabInfo', {
                    key: options.layId,
                    value: options.layId,
                });
                var ele = element;
                if (options.iframe) ele = top.layui.element;
                var checkLayId = Backend.checkLayId(options.layId), loadindex;
                if (!checkLayId) {
                    loadindex = layer.load();
                    ele.tabAdd('layui-layout-tabs', {
                        title: ' <i class="' + options.icon + '"></i><cite>' + options.text + '</cite>' //标题
                        ,
                        content: '<iframe id="'+options.layId+'" width="100%" height="100%" frameborder="no" src="' + options.url + '"></iframe>'
                        ,
                        id: options.layId,
                    });
                } else {
                    loadindex = layer.load();
                    top.window.$("#layui-app-tabs .layui-tab-content .layui-show").find("iframe")[0].contentWindow.location.reload();
                }
                $('#layui-nav-righmenu').remove();
                layer.close(loadindex);
                ele.tabChange('layui-layout-tabs', options.layId);
            },
            //切换id
            changeSessioinTabId: function (layId) {
                if (layId) {
                    layui.sessionData('tabLayId', {key: 'id', value: layId})
                } else {
                    layui.sessionData('tabLayId', null);
                }
            },
            /**
             * 判断tab窗口
             */
            checkLayId: function (layId) {
                // 判断选项卡上是否有
                var checkId = false;
                top.window.$("#layui-app-tabs .layui-tab .layui-tab-title li").each(function () {
                    var checklayId = $(this).attr('lay-id');
                    if (checklayId != null && checklayId === layId) {
                        checkId = true;
                    }
                });
                return checkId !== false;
            },
            /**
             * 获取颜色缓存
             */
            getColorId:function(){
                var colorId = Fun.api.getStorage('funColorId');colorId = colorId?colorId:0;
                return colorId;
            },
            /**
             * 构建背景颜色选择
             * @returns {string}
             */
            buildBgColorHtml: function () {
                var html = '';
                var colorId = Backend.getColorId();
                $.each(THEME, function (key, val) {
                    if (key === colorId) {
                        html += '<li class="layui-this" lay-event="setThemeColor" data-color="' + key + '">\n';
                    } else {
                        html += '<li  lay-event="setThemeColor" data-color="' + key + '">\n';
                    }
                    html += '<a href="javascript:;" data-skin="skin-blue" style="" class="clearfix full-opacity-hover">\n' +
                        '<div><span style="display:block; width: 20%; float: left; height: 12px; background: ' + val.headerBgLogo + ';"></span><span style="display:block; width: 80%; float: left; height: 12px; background: ' + val.headerBg + ';"></span></div>\n' +
                        '<div><span style="display:block; width: 20%; float: left; height: 40px; background: ' + val.menuLeftBg + ';"></span><span style="display:block; width: 80%; float: left; height: 40px; background: #f4f5f7;"></span></div>\n' +
                        '</a>\n' +
                        '</li>';
                });
                return html;
            },

            /**
             * 初始化背景色
             */
            initBgColor: function () {
                var colorId = Backend.getColorId();
                var themeData = THEME[colorId];
                var styleHtml = '.layui-layout-admin .layui-header ul li a{color:' + themeData.headerfontColor + '!important;}' +
                    '.layui-layout-admin .layui-header{background-color:' + themeData.headerBg + '!important;}\n' +
                    '.layui-header>ul>.layui-nav-item.layui-this:hover{color:' + themeData.headerBgThis + '!important;}\n' +
                    // '.layui-header .layui-nav .layui-nav-child dd.layui-this a{background-color:' + themeData.headerBg + '!important;}\n' +
                    '.layui-layout-admin .layui-logo {background-color:' + themeData.headerBgLogo + '!important;}\n' +
                    '.layui-layout-admin .layui-logo{color:' + themeData.headerfontColor + '!important;}\n' +
                    '.layui-layout-admin .layui-logo cite{color:' + themeData.headerLogofontColor + '!important;}\n' +
                    '.layui-layout-admin .layui-side-scroll .layui-nav-tree .layui-nav-item a{color:' + themeData.menuLeftfontColor + '}\n' +
                    '.layui-layout-admin .layui-side-scroll .layui-nav-tree .layui-nav-item>a:hover{color:' + themeData.menuLeftfontColorHover + '!important;}\n' +
                    '.layui-layout-admin .layui-side-scroll .layui-nav-tree .layui-nav-item>a:hover{background-color:' + themeData.menuLeftBgHover + '!important;}\n' +
                    '.layui-layout-admin .layui-side-scroll .layui-nav-tree .layui-nav-item>.layui-nav-child:before{background-color:' + themeData.menuLeftBg + '!important;}\n' +
                    '.layui-layout-admin .layui-side-scroll .layui-nav-tree>.layui-nav-item>a:before{background-color:' + themeData.menuLeftBgHover + '!important;}\n' +
                    '.layui-side.layui-bg-black,.layui-side.layui-bg-black>.layui-side-scroll>ul {background-color:' + themeData.menuLeftBg + '!important;}\n' +
                    '.layui-side-scroll .layui-nav .layui-nav-child a:hover:not(.layui-this){background-color:' + themeData.menuLeftBgHover + '!important;}\n' +
                    '.layui-layout-admin .layui-nav-tree .layui-this,.layui-layout-admin .layui-nav-tree .layui-this>a,' +
                    '.layui-layout-admin .layui-nav-tree .layui-nav-child dd.layui-this,.layui-layout-admin .layui-nav-tree .layui-nav-child dd.layui-this a {background-color: ' + themeData.menuLeftBgThis + ' !important;}\n' +
                    '.layui-pagetabs .layui-tab-title li:hover,.layui-pagetabs .layui-tab-title li.layui-this{ color:' + themeData.menuLeftBgThis + '!important;}\n' +
                    '.layui-layout-admin .layui-nav-tree .layui-nav-bar{background:' + themeData.menuLeftBgThis + '!important;}\n';
                $('#fun-bg-color').html(styleHtml);
                Backend.listenFrameTheme();
            },
            /**
             * 监听tab切换
             * @param options
             */
            listenSwitch: function (options) {
                options.filter = options.filter || null;
                element.on('tab(' + options.filter + ')', function () {
                    var layId = $(this).attr('lay-id');
                    Backend.changeSessioinTabId(layId);
                    Backend.listenSwitchIframe(layId);
                    Backend.scrollPostion();
                });
            },
            //监听主题
            listenFrameTheme(){
                Fun.api.setFrameTheme();
            },
            /**
             * 监听tab删除
             * @param options
             */
            listenDeltab: function (options) {
                options.filter = options.filter || null;
                element.on('tabDelete(' + options.filter + ')', function () {
                    var layId = $(this).parent().attr('lay-id');
                    Backend.delTab(layId);
                });
            },
            /**
             * 监听左右滚动
             */
            listenScroll: function (type) {
                var tabNav = $('#layui-app-tabs .layui-tab  .layui-tab-title');
                var left = tabNav.scrollLeft();
                if (type === 'left') {
                    tabNav.animate({
                        scrollLeft: left - 550
                    }, 100);
                } else {
                    tabNav.animate({
                        scrollLeft: left + 550
                    }, 100);
                }
            },
            /**
             * 监听切换
             * @param layId
             */
            listenSwitchIframe: function (layId) {
                /**
                 * 左侧菜单的样式和多级菜单的展开
                 */
                $("#layui-side-left-menu").find("li,dd").removeClass("layui-this").removeClass("layui-nav-itemed");//关闭所有展开的菜单
                $("#layui-side-left-menu > li dl.layui-nav-child").removeAttr('style');
                $("#layui-side-left-menu a[data-url]").each(function () {
                    if ($(this).attr('lay-id') === layId) {
                        $(this).parents("dd").addClass("layui-nav-itemed");
                        $(this).parents("li").addClass("layui-nav-itemed");
                        $(this).parent().removeClass("layui-nav-itemed").addClass("layui-this");
                    }
                })
            },
            /**
             * 自动定位
             */
            scrollPostion: function () {
                var tabNav = $('#layui-app-tabs .layui-tab .layui-tab-title');
                var autoLeft = 0;
                tabNav.children("li").each(function () {
                    if ($(this).hasClass('layui-this')) {
                        return false;
                    } else {
                        autoLeft += $(this).outerWidth();
                    }
                });
                tabNav.animate({
                    scrollLeft: autoLeft - tabNav.width() / 4
                }, 200);
            },
            events: {
                //弹出主题面板
                opentheme: function () {
                    var loading = layer.load(0, {shade: false, time: 2 * 1000});
                    var clientHeight = (document.documentElement.clientHeight) - 60;
                    var bgColorHtml = Backend.buildBgColorHtml();
                    var anims = [0, 1, 2, 3, 4, 5, 6];
                    var anim = anims[Math.floor(Math.random() * anims.length + 1) - 1];
                    var html = '<style>.layui-text-left{text-align: left;padding:padding-right: 0px}' +
                        '.layui-form-item .layui-quote-nm{margin:10px;border-left: 5px solid #772c6a!important;}' +
                        '</style><div class="layui-fun-color">\n' +
                        '<div class="color-title">\n' +
                        '<span>' + __('Theme Color') + '</span>\n' +
                        '</div>\n' +
                        '<div class="color-content">\n' +
                        '<ul style="border-bottom: 1px solid #e8e8e8;">\n' + bgColorHtml + '</ul>\n' +
                        '</div>'+
                        '<form class="layui-form" lay-filter="form" action="">\n' +
                        ' <div class="layui-form-item">\n' +
                        '        <label class="layui-form-label" style="text-align: left;width: auto;">菜单导航：</label>\n' +
                        '        <div class="layui-input-inline" style="width: auto;">\n' +
                        '            <input lay-filter="setTheme" type="radio" value="1" title="侧边" name="site_theme">' +
                        '            <input lay-filter="setTheme" type="radio" value="2" title="水平" name="site_theme">' +
                        '            <input lay-filter="setTheme" type="radio" value="3" title="顶部" name="site_theme">' +
                        '        </div>\n' +
                        '</div>'+
                        ' <div class="layui-form-item">\n' +
                        '        <label class="layui-form-label" style="text-align: left;width: auto;">选项卡：</label>\n' +
                        '        <div class="layui-input-inline" style="width: auto;">\n' +
                        '            <input lay-filter="setTab" type="radio" value="1" title="显示" name="setTab">' +
                        '            <input lay-filter="setTab" type="radio" value="2" title="隐藏" name="setTab">' +
                        '        </div>\n' +
                        '</div>'+
                        ' <div class="layui-form-item">\n' +
                        '        <label class="layui-form-label" style="text-align: left;width: auto;">页面主题：</label>\n' +
                        '        <div class="layui-input-inline" style="width: auto;">\n' +
                        '            <input lay-filter="setFrameTheme" type="radio" value="1" title="开启" name="setFrameTheme">' +
                        '            <input lay-filter="setFrameTheme" type="radio" value="" title="关闭" name="setFrameTheme">' +
                        '        </div>\n' +
                        '</div>'+
                        '</form>'+
                        '<fieldset class="layui-elem-field layui-field-title layui-text-left" >\n' +
                        '              <legend class="">版权信息</legend>\n' +
                        '            </fieldset><div class="layui-form-item" style="">\n' +
                        '                <blockquote class="layui-elem-quote layui-text-left layui-quote-nm" >\n' +
                        '                    <i class="layui-icon layui-icon-about"></i>\n' +
                        '                    <span class="layui-font-12">&nbsp; 版权归FunAdmin所有<br>\n' +
                        '                        如遇到问题，请点击 <a href="http://www.funadmin.com/" target="_blank" style="color: red">官方文档</a> 查看源码说明！\n' +
                        '                    </span>\n' +
                        '                </blockquote>\n' +
                        '            </div>';
                    layer.open({
                        type: 1,
                        title: false,
                        closeBtn: 0,
                        shade: 0.2,
                        anim: anim,
                        shadeClose: true,
                        isOutAnim: true,
                        id: 'layui-fun-color',
                        area: ['360px', clientHeight + 'px'],
                        offset: 'rb',
                        content: html,
                    });
                    data = {
                        'site_theme':Fun.api.getStorage('siteTheme'),
                        'setTab':Fun.api.getStorage('setTab'),
                        'setFrameTheme':Fun.api.getStorage('setFrameTheme'),
                    }
                    data.site_theme?data.site_theme:1;
                    layui.form.val("form", data);
                    layui.form.render()
                    layer.close(loading);
                },
                /**
                 * 设置颜色配置
                 */
                setThemeColor: function (othis) {
                    var colorId = othis.attr('data-color');
                    $('.layui-fun-color .color-content ul .layui-this').attr('class', '');
                    $(this).attr('class', 'layui-this');
                    Fun.api.setStorage('funColorId',colorId);
                    Backend.initBgColor();
                },
                /**
                 * 锁定屏幕
                 */
                lockScreen: function () {
                    var colorId = Backend.getColorId();
                    layer.prompt({
                        btn: [__('Lock Now')],
                        title: [__('Set Password To Lock Screen'), 'background:' + THEME[colorId]['menuLeftBgThis'] + ';color:' + THEME[colorId]['menuLeftfontColor']],
                        formType: 1,
                        success: function (layero, index) {
                            layero.find('.layui-layer-btn0').css('background', THEME[colorId]['menuLeftBgThis'])
                        },yes:function(index, prompt) {
                            var value=(prompt.find(".layui-layer-input").val())
                            if (value.length < 1) {
                                Fun.toastr.error(__('Input Password'));
                                return false;
                            } else {
                                Fun.api.setStorage('BackendLock',value);
                                layer.close(index);
                                layer.prompt({
                                    btn: [__('Unlock')],
                                    title: [__('Input Password'), 'background:' + THEME[colorId]['menuLeftBgThis'] + ';color:' + THEME[colorId]['menuLeftfontColor']],
                                    closeBtn: 0,
                                    formType: 1,
                                    success: function (layero, index) {
                                        layero.find('.layui-layer-btn0').css('background', THEME[colorId]['menuLeftBgThis'])
                                    }
                                }, function (value, index) {
                                    if (value.length < 1) {
                                        Fun.toastr.error(__('Input Password'));
                                        return false;
                                    } else {
                                        if (value === Fun.api.getStorage('BackendLock')) {
                                            layer.close(index);
                                            $(".yy").hide();
                                            //清除密码
                                            Fun.api.setStorage('BackendLock', null);
                                            Fun.toastr.success(__('Unlock Success'));
                                        } else {
                                            Fun.toastr.error(__('Password Error'));
                                            return false;
                                        }
                                    }
                                });
                            }
                        }
                    }, function (value, index) {

                    });
                },
                //伸缩
                flexible: function () {
                    Backend.sideFlexible();
                },
                rightPage: function () {
                    Backend.listenScroll('right')
                },
                leftPage: function () {
                    Backend.listenScroll('left')
                },
                showtips: function (othis, type) {
                    if ($container.hasClass(SIDE_SHRINK)) {
                        if (type === 1) {
                            if(othis.children('dl').length>0) return false;
                            let tip = othis.data('tips') || othis.children('a').data('tips');
                            layer.tips(tip, othis,{time: 1000});
                        } else {
                            layer.close();
                        }
                    }
                }
                //全屏
                , fullscreen: function (othis) {
                    var SCREEN_FULL = 'layui-icon-screen-full'
                        , SCREEN_REST = 'layui-icon-screen-restore'
                        , iconElem = othis.children("i");
                    if (iconElem.hasClass(SCREEN_FULL)) {
                        Backend.fullScreen();
                        iconElem.addClass(SCREEN_REST).removeClass(SCREEN_FULL);
                    } else {
                        Backend.exitScreen();
                        iconElem.addClass(SCREEN_FULL).removeClass(SCREEN_REST);
                    }
                }
                //遮罩
                , shade: function () {
                    Backend.sideFlexible();
                },
                clear: function (othis) {  //清除缓存
                    layui.sessionData('funTabInfo',
                        {
                            key: 'fun-safe',
                            value: '',
                        });
                    layui.sessionData('funTabInfo',
                        {
                            key: 'fun-info',
                            value: '',
                        });
                    var url = othis.data('ajax') ? othis.data('ajax') : Backend.refreshUrl;
                    Fun.ajax({url: url}, function (res) {
                        Fun.toastr.success(res.msg);
                        $("#layui-app-tabs .layui-tab-content .layui-show").find("iframe")[0].contentWindow.location.reload();
                    }, function (res) {
                        Fun.toastr.error(res.msg);
                        $("#layui-app-tabs .layui-tab-content .layui-show").find("iframe")[0].contentWindow.location.reload();
                    })
                },
                refresh: function () {  //刷新
                    Fun.toastr.success(__('Refresh Success'));
                    Fun.toastr.loading('', setTimeout(function () {
                            $("#layui-app-tabs .layui-tab-content .layui-show").find("iframe")[0].contentWindow.location.reload();
                            Fun.toastr.close();
                        }, 1200)
                    );
                }
                //关闭当前标签页
                , closeThisTabs: function () {
                    var layId = $("#layui-app-tabs .layui-tab .layui-tab-title li.layui-this").attr('lay-id');
                    if (layId) {
                        Backend.delTab(layId)
                    }
                }
                //关闭其它标签页
                , closeOtherTabs: function (type) {
                    $("#layui-app-tabs .layui-tab .layui-tab-title li").each(function (key, val) {
                        var layId = $(val).attr('lay-id');
                        if (type === 'all' && layId) {
                            Backend.delTab(layId);
                        } else {
                            if (layId && !$(this).hasClass(THIS)) {
                                Backend.delTab(layId);
                            }
                        }
                    });
                }
                //关闭全部标签页
                , closeAllTabs: function () {
                    Backend.events.closeOtherTabs('all');
                },
                /**
                 * 退出登陆
                 * @param othis
                 */
                logout: function (othis) {
                    var url = othis.data('ajax');
                    Fun.toastr.confirm(__('Are you sure todo this'), function () {
                        Fun.ajax({url: url, method: 'post'}, function (res) {
                            if (res.code > 0) {
                                Fun.toastr.success(res.msg, setTimeout(function () {
                                    window.location = res.url;
                                }, 2000))
                            } else {
                                Fun.toastr.error(res.msg)
                            }
                        })
                    })
                },
                /**
                 * 语言设置
                 * @param othis
                 */
                langset: function (othis) {
                    var url = othis.data('ajax');
                    Fun.ajax({url: url}, function (res) {
                        Fun.toastr.success(res.msg, setTimeout(function () {
                            window.location.reload();
                        }, 1500))
                    }, function (res) {
                        Fun.toastr.error(res.msg)
                    })
                }
            },
            /**
             * 监听事件
             */
            api: {
                bindEvent: function () {
                    layui.form.on('radio(setTheme)', function (data) {
                        url = Fun.url('ajax/setConfig');
                        code = $(data.elem).attr('name');
                        Fun.ajax({url: url,data:{value:data.value,code:code}}, function (res) {
                            Fun.toastr.success(res.msg, function () {
                                Fun.api.setStorage('siteTheme', data.value)
                                window.location.reload();
                            });
                        }, function (res) {
                            Fun.toastr.error(res.msg);
                        })
                    });
                    layui.form.on('radio(setTab)', function (data) {
                        name = $(data.elem).attr('name');
                        v = Fun.api.getStorage(name)
                        if(v  && v ===data.value){
                            return false;
                        }else{
                            Fun.api.setStorage(name, data.value)
                            Backend.initBodyTheme(name,value);
                        }
                    });
                    layui.form.on('radio(setFrameTheme)', function (data) {
                        Fun.api.setStorage('setFrameTheme',data.value)
                        window.location.reload();
                    });
                    //监听导航点击菜单点击*/
                    // 主题三
                    $document.on('click','.layui-header .layui-layout-center li a',function (){
                        var id  = $(this).attr('menu-id');
                        if(id){
                            var index = layui.layer.load()
                            if(Backend.checkScreen()){
                                if($(window).width()>768  && $(window).width()<=1024){
                                    $container.hasClass(SIDE_SHRINK)? $container.toggleClass(SIDE_SHRINK):$container.toggleClass(FUN_APP);
                                }else{
                                    $container.toggleClass(SIDE_SHRINK);
                                    $container.toggleClass(FUN_APP);
                                    $(this).parents('li').children('.layui-nav-child').removeClass('layui-show')
                                }
                            }
                            $('.layui-side-menu').find('.layui-nav-tree[menu-id="'+id+'"]').removeClass('layui-hide');
                            $('.layui-side-menu').find('.layui-nav-tree[menu-id="'+id+'"]').siblings('ul').not('[data-rel="external"]').addClass('layui-hide');
                            layui.layer.close(index)
                        }
                    })
                    //主题2
                    $document.on('mouseover click','.layui-nav-header .layui-nav li>a',function (){
                        $(this).parent('li').siblings().children('.layui-nav-child').removeClass('layui-show');
                    })
                    $document.on('click', '*[lay-id]', function () {
                        var _that = $(this),target = _that.prop('target')
                            , url = _that.data('url') ? _that.data('url') : _that.data('iframe')
                            , layId = _that.attr('data-id'), text = _that.data('tips') || $(this).attr('title')
                            , icon = _that.find('i').attr('class'), iframe = !!_that.has('data-iframe');
                        layId = layId ? layId : url;
                        _that.siblings('li').removeClass('layui-this');
                        var parent = _that.parent();
                        var parents = _that.parents('.layui-nav-header')
                        var sp = parent.siblings('li');
                        var c = parent.siblings('li.active').children('.layui-nav-child')
                        if(!_that.data("url") && parents.length>0){
                            return false;
                        }
                        if (!_that.data("url")) {
                            var child = parent.children('.layui-nav-child');
                            var height = child.height();
                            // 检测屏幕是否是展开状态
                            if (!Backend.checkScreen() && $('.' + SIDE_SHRINK).length > 0) {
                                return false;
                            }
                            child.css({display: "block"});
                            if (parent.hasClass("layui-nav-itemed")) {
                                parent.addClass('active');
                                parent.height('auto');
                                if(sp.hasClass('active')){
                                    c.css('display','block');
                                    c.animate({height:0},function(){c.removeAttr('style')});
                                    parent.siblings('li.active').animate({height: 'auto'},function (){parent.siblings('li.active').removeClass('active')});
                                }
                                child.height(0);
                                child.animate({height: height + "px"}, function () {
                                    child.css({height: "auto"});
                                });
                            } else {
                                parent.removeClass('active');
                                child.animate({height: 0}, function () {
                                    child.removeAttr("style");
                                });
                            }
                        } else {
                            parent.addClass('active');
                            if(sp.hasClass('active')){
                                c.animate({height:0},function(){c.removeAttr('style')});

                                parent.siblings('li.active').not('[menu-id]').animate({height: '55px'},function (){
                                    parent.siblings('li.active').removeClass('active')});

                            }
                            if (target === '_blank') {
                                window.open(url, "_blank");
                                return false;
                            }
                            let options = {layId: layId, text: text, url: url, icon: icon, iframe: iframe};
                            Backend.addTab(options);
                            if (Backend.checkScreen()) {
                                $container.removeClass(SIDE_SHRINK).addClass('fun-app')
                            }
                            c.attr('style','display:block!important;');
                            Backend.listenFrameTheme();
                        }
                    });
                    //点击事件
                    $document.on('click', '*[lay-event]', function () {
                        var _that = $(this)
                            , attrEvent = _that.attr('lay-event');
                        Backend.events[attrEvent] && Backend.events[attrEvent].call(this, _that);
                    });
                    //鼠标放上
                    $document.on("mouseenter", ".layui-side-shrink .layui-nav-tree>.layui-nav-item,.layui-side-shrink .layui-nav-itemed", function () {
                        var _that = $(this);
                        if (!Backend.checkScreen()) {
                            var top = _that.offset().top;
                            _that.removeClass('layui-nav-itemed');
                            _that.addClass('layui-nav-hover');
                            _that.children('dl').addClass('layui-nav-child-drop');
                            _that.children('dl').css('top', top + 'px');
                            Backend.events.showtips(_that,1)
                        }
                    }).on("mouseleave", ".layui-side-shrink .layui-nav-tree>.layui-nav-item", function () {
                        var _that = $(this);
                        _that.removeClass('layui-nav-hover');
                        _that.find('dl').removeClass('layui-nav-child-drop');
                        _that.find('dl').removeAttr('style');
                        Backend.events.showtips(_that,2)
                    });
                    //鼠标放上
                    $document.on("mouseenter", ".layui-side-shrink .layui-side-menu .layui-nav-hover dd", function () {
                        var _that = $(this);
                        if (!Backend.checkScreen()) {
                            if (_that.find('dl')) {
                                var top = _that.offset().top;
                                var left = _that.offset().left + _that.width();
                                _that.children('dl').addClass('layui-nav-child-drop');
                                _that.children('dl').css('top', top + 'px');
                                _that.children('dl').css('left', +left + 'px');
                            }
                        }
                    }).on("mouseleave", ".layui-side-shrink .layui-side-menu .layui-nav-child-drop," +
                        ".layui-side-shrink .layui-side-menu .layui-nav-child-drop>dd", function () {
                        var _that = $(this);
                        _that.find('dl').removeClass('layui-nav-child-drop');
                        _that.siblings('dd').children('dl').removeClass('layui-nav-child-drop');
                        _that.find('dl').removeAttr('style');
                    });
                    //鼠标右键盘
                    layui.dropdown.render({
                        elem: '#layui-tab-header' //也可绑定到 document，从而重置整个右键
                        ,trigger: 'contextmenu' //contextmenu
                        ,isAllowSpread: false //禁止菜单组展开收缩
                        ,style: 'width: 130px' //定义宽度，默认自适应
                        ,id: 'layui-tab-header-menu' //定义唯一索引
                        ,data: [{
                            title: '<a href="javascript:;" lay-event="refresh"><i class="layui-icon layui-icon-refresh"></i>  刷新当前页</a>'
                            ,id: 'refresh'
                        }, {type:'-'},{
                            title: '<a href="javascript:;" lay-event="closeThisTabs">&nbsp;<i class="layui-icon layui-icon-close-fill"></i>  关闭当前页</a>'
                            ,id: 'closeThisTabs'
                        },{type:'-'},{
                            title: '<a href="javascript:;" lay-event="closeOtherTabs">&nbsp;<i class="layui-icon layui-icon-unlink"></i>  关闭其它页</a>'
                            ,id: 'closeOtherTabs'
                        },{type:'-'},{
                            title: '<a href="javascript:;" lay-event="closeAllTabs">&nbsp;<i class="layui-icon layui-icon-close"></i>  关闭全部页</a>'
                            ,id: 'closeAllTabs'
                        }
                        ]
                    });
                    // //关闭右键菜单
                    $document.on('click', '.layui-body,.layui-header,.layui-side-menu,#layui-app-tabs .layui-tab,.layui-right-shade', function () {
                        $('.layui-dropdown').remove();
                    });
                    $(window).on("resize", function () {
                        Backend.initBodyTheme();
                    });
                },
            }
        };
        exports("Backend", Backend);
    });