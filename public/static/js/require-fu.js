define(['jquery', 'xmSelect', 'iconPicker', 'cityPicker', 'inputTags', 'timePicker', 'regionCheckBox','multiSelect', 'upload','selectN','selectPlus'
], function($, xmSelect, iconPicker, cityPicker, inputTags, timePicker, regionCheckBox, multiSelect, Upload, selectN,selectPlus) {
    var Fu = {
        init: {},
        events: {
            selectplus:function() {
                var selectplus ={},list = document.querySelectorAll("*[lay-filter='selectPlus']");
                if (list.length > 0) {
                    selectPlus = layui.selectPlus || parent.layui.xmSelect;
                    $.each(list, function(i) {
                        var id = $(this).prop('id'), name = $(this).attr('name') || 'id',
                            url = $(this).data('url')|| $(this).data('request'),
                            data = $(this).data('data')||　[], type = $(this).attr('multiple')?'checkbox':'radio',
                            method = $(this).data('method')?$(this).data('method'):'get',
                            values = $(this).data('value')?$(this).data('value'):'',
                            attr = $(this).data('attr'), attr = typeof attr ==='string' ?attr.split(','):['id','title'],
                            where = $(this).data('where'), delimiter = $(this).data('delimiter') || ',',
                            fielddelimiter = $(this).data('fielddelimiter') || '、',
                            options = {
                                el: '#' + id, data:data, url: url, type: type,  name: name,
                                field: attr, values: values, method: method, where: where,
                                delimiter: delimiter, fielddelimiter: fielddelimiter,
                            }
                        selectplus[i] = selectPlus.render(options);
                    })
                }
            },
            selectn:function() {
                var selectn ={},list = document.querySelectorAll("*[lay-filter='selectN']");
                if (list.length > 0) {
                    selectN = layui.selectN || parent.layui.selectN;
                    $.each(list, function(i) {
                        var id = $(this).prop('id'), name = $(this).attr('name') || 'id',
                            url = $(this).data('url') || $(this).data('request'),
                            data = $(this).data('data')||　'',
                            method = $(this).data('method')?$(this).data('method'):'get',
                            last = $(this).data('last')?$(this).data('last'):'',
                            values = $(this).data('value')?$(this).data('value'):'',
                            search = $(this).data('search')?$(this).data('search'):'',
                            attr = $(this).data('attr'), attr= typeof attr ==='string' ?attr.split(','):['id','title'],
                            num = $(this).data('num')?$(this).data('num'):3,
                            pid = $(this).data('pid') ||　'pid',
                            delimiter = $(this).data('delimiter') || ',',
                            options = {
                                elem: '#' + id, data: data, url: url, name: name,pid:pid,formFilter:id,
                                field: attr, selected: values, method: method,search:search,num:num,
                                delimiter: delimiter,last:last
                            };
                        selectn[i] =  selectN(options);
                    })
                }
            },
            xmSelect: function() {
                var xmselect ={},list = document.querySelectorAll("*[lay-filter='xmSelect']");
                if (list.length > 0) {
                    $.each(list, function(i) {
                        var id = $(this).prop('id'),
                            url = $(this).data('url')|| $(this).data('request'), lang = $(this).data('lang'), value = $(this).data('value'),
                            data = $(this).data('data')||　[], parentfield = $(this).data('parentfield') || 'pid',
                            tips = $(this).data('tips') ||  '请选择', searchTips = $(this).data('searchtips') || '请选择',
                            empty = $(this).data('empty') || '呀,没有数据', height = $(this).data('height') || 'auto',
                            paging = $(this).data('paging'), pageSize = $(this).data('pageSize'),
                            remoteMethod = $(this).data('remotemethod'), content = $(this).data('content') || '',
                            radio = $(this).data('radio'), disabled = $(this).data('disabled'),
                            clickClose = $(this).data('clickClose'), prop = $(this).data('prop') || $(this).data('attr'),
                            max = $(this).data('max'), create = $(this).data('create'), repeat = !! $(this).data('repeat'),
                            theme = $(this).data('theme') || '#6739b6', name = $(this).attr('name') || $(this).data('name') || 'pid',
                            style = $(this).data('style') || {}, cascader = $(this).data('cascader') ? {show: true, indent: 200, strict: false} : false,
                            layVerify = $(this).attr('lay-verify') || '', layReqText = $(this).data('reqtext') || '';
                        var size = $(this).data('size') || 'medium' ;toolbar = $(this).data('toolbar') || {show: true, list: ['ALL', 'CLEAR', 'REVERSE']}
                        var filterable = !! ($(this).data('filterable') === undefined || $(this).data('filterable'));
                        var remoteSearch = !!($(this).data('remotesearch') !== undefined && $(this).data('remotesearch'));
                        var pageRemote = (!($(this).data('pageremote') === undefined || $(this).data('pageremote'))), props, propArr, options;
                        var tree = $(this).data('tree');
                        if(typeof tree ==='object'){
                            tree = tree;
                        }else{
                            tree = tree ?{show: true,showFolderIcon: true, showLine: true, indent: 20, expandedKeys: [], strict: false, simple: false, clickExpand: true, clickCheck: true, }:false;
                        }
                        if (typeof value != 'object' && value) {
                            value = typeof value === "number" ? [value] : value.split(',')
                        };props = {
                            name: 'title',
                            value: "id"
                        };if (prop) {
                            propArr = prop.split(',');
                            props.name = propArr[0];
                            props.value = propArr[1]
                        };lang = lang ? lang : 'zh';paging = paging === undefined || paging !== 'false';
                        pageSize = pageSize ? pageSize : 10;radio = !! radio;disabled = !! disabled;max = max ? max : 0;
                        clickClose = clickClose ? clickClose : false;create = !create ?
                            function(val) {
                                return {
                                    name: val,
                                    value: val
                                }
                            } : eval(create)?eval(create):false;
                        xmSelect = window.xmSelect ? window.xmSelect : parent.window.xmSelect;
                        options = {
                            el: '#' + id, language: lang, data: data, initValue: value, name: name,
                            tips: tips, empty: empty, filterable: filterable, searchTips: searchTips,
                            prop: props, disabled: disabled, remoteSearch: remoteSearch,
                            remoteMethod: function(val, cb, show) {
                                if (remoteMethod !== undefined) {
                                    eval(remoteMethod)
                                } else {
                                    var formatFilter = {},
                                        formatOp = {};
                                    formatFilter[name] = val;
                                    formatOp[name] = '%*%';
                                    Fun.ajax({
                                        url: Fun.url(url ? url : window.location.href),
                                        data: {
                                            filter: JSON.stringify(formatFilter),
                                            op: JSON.stringify(formatOp)
                                        }
                                    }, function(res) {
                                        cb(res.data)
                                    }, function(res) {
                                        cb([])
                                    })
                                }
                            },
                            paging: paging, pageSize: pageSize, autoRow: true, size: size,
                            repeat: repeat, height: height, max: max,
                            pageRemote: pageRemote, toolbar: toolbar, theme: {
                                color: theme,
                            }, radio: radio, layVerify: layVerify, clickClose: clickClose,
                            maxMethod: function(val) {
                                console.log(val)
                            }, on: function(data) {
                                console.log(data)
                            }, create: create,
                        }
                        if (tree) options.tree = tree;
                        if (cascader) options.cascader = cascader;
                        if (style) options.style = style;
                        if (layReqText) options.layReqText = layReqText;
                        if (content) options.content = content;
                        xmselect[i] = xmSelect.render(options)
                        if(data.toString()==='' && url){
                            Fun.ajax({
                                method:'GET',
                                url:Fun.url(url),
                                data:{selectFields:props,tree:tree||false,parentField:parentfield}
                            },function (res) {
                                xmselect[i].update({
                                    data: res.data,
                                    autoRow: true,
                                })
                            },function(res){
                                console.log(res);
                            })
                        }
                    })
                }
            },
            editor: function() {
                var list = document.querySelectorAll("*[lay-filter='editor']");
                if (list.length > 0) {
                    $.each(list, function() {
                        if ($(this).data('editor') === 2 || $(this).data('editor') === '2') {
                            var id = $(this).prop('id');
                            var name = $(this).prop('name');
                            $(this).html(Config.formData[name]);
                            window['editor' + id] = layui.layedit.build(id, {
                                height: 350,
                                uploadImage: {
                                    url: Fun.url(Upload.init.requests.upload_url) + '?editor=layedit',
                                    type: 'post'
                                }
                            })
                        }
                    })
                }
            },
            tags: function() {
                var list = document.querySelectorAll("*[lay-filter='tags']");
                if (list.length > 0) {
                    $.each(list, function() {
                        var _that = $(this),
                            content = [];
                        var tag = _that.parents('.tags').find('input[type="hidden"]').val();
                        if (tag) content = tag.substring(0, tag.length - 1).split(',');
                        var id = _that.prop('id');
                        var inputTags = layui.inputTags ? layui.inputTags : parent.layui.inputTags;
                        inputTags.render({
                            elem: '#' + id,
                            content: content,
                            done: function(value) {}
                        })
                    })
                }
            },
            icon: function() {
                var list = document.querySelectorAll("*[lay-filter='iconPickers']");
                if (list.length > 0) {
                    $.each(list, function() {
                        var _that = $(this);
                        var id = _that.prop('id');
                        layui.iconPicker.render({
                            elem: '#' + id,
                            type: 'fontClass',
                            search: true,
                            page: true,
                            limit: 12,
                            click: function(data) {
                                _that.prev("input[type='hidden']").val(data.icon)
                            },
                            success: function(d) {}
                        })
                    })
                }
            },
            color: function() {
                var list = document.querySelectorAll("*[lay-filter='colorPicker']");
                if (list.length > 0) {
                    $.each(list, function() {
                        var _that = $(this);
                        var id = _that.prop('id');
                        var color = _that.prev('input').val();
                        layui.colorpicker.render({
                            elem: '#' + id,
                            color: color,
                            predefine: true,
                            colors: ['#F00', '#0F0', '#00F', 'rgb(255, 69, 0)', 'rgba(255, 69, 0, 0.5)'],
                            size: 'lg',
                            change: function(color) {},
                            done: function(color) {
                                _that.prev('input[type="hidden"]').val(color)
                            }
                        })
                    })
                }
            },
            regionCheck: function() {
                var list = document.querySelectorAll("*[lay-filter='regionCheck']");
                if (list.length > 0) {
                    $.each(list, function() {
                        var _that = $(this);
                        var id = _that.prop('id'),
                            name = _that.prop('name');
                        layui.regionCheckBox.render({
                            elem: '#' + id,
                            name: name,
                            value: ['北京', '内蒙古', '江西-九江'],
                            width: '550px',
                            border: true,
                            ready: function() {
                                _that.prev('input[type="hidden"]').val(getAllChecked())
                            },
                            change: function(result) {
                                _that.prev('input[type="hidden"]').val(getAllChecked())
                            }
                        });
                        function getAllChecked() {
                            var all = '';
                            $("input:checkbox[name='" + name + "']:checked").each(function() {
                                all += $(this).val() + ','
                            });
                            return all.substring(0, all.length - 1)
                        }
                    })
                }
            },
            city: function() {
                var list = document.querySelectorAll("*[lay-filter='cityPicker']");
                if (list.length > 0) {
                    cityPicker = layui.cityPicker;
                    $.each(list, function() {
                        var id = $(this).prop('id'),
                            name = $(this).prop('name');
                        var provinceId = $(this).data('provinceid'),
                            cityId = $(this).data('cityid');
                        var province, city, district;
                        if (Config.formData[name]) {
                            var cityValue = Config.formData[name];
                            province = cityValue.split('/')[0]; city = cityValue.split('/')[1];district = cityValue.split('/')[2];
                        }
                        var districtId = $(this).data('districtid');
                        currentPicker = new cityPicker("#" + id, {
                            provincename: provinceId,
                            cityname: cityId,
                            districtname: districtId,
                            level: 'districtId',
                            province: province,
                            city: city,
                            district: district
                        });
                        var str = '';
                        if (Config.formData.hasOwnProperty(provinceId)) {
                            str += ChineseDistricts[886][Config.formData[provinceId]]
                        }
                        if (Config.formData.hasOwnProperty(cityId) && Config.formData[[cityId]] && Config.formData.hasOwnProperty(provinceId)) {
                            str += '/' + ChineseDistricts[Config.formData[provinceId]][Config.formData[cityId]]
                        }
                        if (Config.formData.hasOwnProperty(cityId) && Config.formData[districtId] && Config.formData.hasOwnProperty(districtId)) {
                            str += '/' + ChineseDistricts[Config.formData[cityId]][Config.formData[districtId]]
                        }
                        if (!str) {
                            str = Config.formData.hasOwnProperty(name) ? Config.formData['name'] : ''
                        }
                        currentPicker.setValue(Config.formData[name] ? Config.formData[name] : str)
                    })
                }
            },
            timepicker: function() {
                var list = document.querySelectorAll("*[lay-filter='timePicker']");
                if (list.length > 0) {
                    $.each(list, function() {
                        var id = $(this).prop('id');
                        layui.timePicker.render({
                            elem: '#' + id,
                            trigger: 'click',
                            options: {
                                timeStamp: false,
                                format: 'YYYY-MM-DD HH:ss:mm',
                            },
                        })
                    })
                }
            },
            date: function() {
                var list = document.querySelectorAll("*[lay-filter='date']");
                if (list.length > 0) {
                    $.each(list, function() {
                        var format = $(this).data('format'),
                            type = $(this).data('type'),
                            range = $(this).data('range');
                        if (type === undefined || type === '' || type == null) {
                            type = 'datetime'
                        }
                        var options = {
                            elem: this,
                            type: type,
                            trigger: 'click',
                            calendar: true,
                            theme: '#393D49'
                        };
                        if (format !== undefined && format !== '' && format != null) {
                            options['format'] = format
                        }
                        if (range !== undefined) {
                            if (range != null || range === '') {
                                range = '-'
                            }
                            options['range'] = range
                        }
                        laydate = layui.laydate ? layui.laydate : parent.layui.laydate;
                        laydate.render(options)
                    })
                }
            },
            addInput: function() {
                $(document).on('click', ".addInput", function() {
                    var name = $(this).data('name'), verify = $(this).data('verify'),
                        num = $(this).parents('.layui-form-item').siblings('.layui-form-item').length + 1;
                    var str = '<div class="layui-form-item">' + '<label class="layui-form-label"></label>' + '<div class="layui-input-inline">' + '<input type="text" name="' + name + '[key][' + num + ']" placeholder="key" class="layui-input input-double-width">' + '</div>' + '<div class="layui-input-inline">\n' + '<input type="text" id="" name="' + name + '[value][' + num + ']" lay-verify="'+verify+'" placeholder="value" autocomplete="off" class="layui-input input-double-width">\n' + '</div>' + '<div class="layui-input-inline">' + '<button data-name="' + name + '" type="button" class="layui-btn layui-btn-danger layui-btn-sm removeInupt"><i class="layui-icon">&#xe67e;</i></button>' + '</div>' + '</div>';
                    $(this).parents('.layui-form-item').after(str)
                })
            },
            removeInupt: function() {
                $(document).on('click', ".removeInupt", function() {
                    var parentEle = $(this).parent().parent();
                    parentEle.remove()
                })
            },
            bindevent: function() {}
        },
        api: {
            bindEvent: function() {
                var events = Fu.events;
                events.icon();
                events.xmSelect();
                events.color();
                events.tags();
                events.city();
                events.date();
                events.timepicker();
                events.editor();
                events.regionCheck();
                events.addInput();
                events.selectplus();
                events.selectn();
                events.removeInupt();
                events.bindevent()
            }
        }
    };
    return Fu
})