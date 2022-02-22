/*!
 * Cropper v3.0.0
 */
layui.define(['jquery','cropper'],function (exports) {
    var $ = layui.jquery
    var html =
        // "<link rel=\"stylesheet\" href=\"/static/plugins/lay-module/cropper/cropper.css\">\n" +
        "<div class=\"layui-fluid showImgEdit\" style=\"display: none;padding-top: 10px;\">\n" +
        "    <div class=\"layui-form-item\">\n" +
        "        <div class=\"layui-input-inline layui-btn-container\" style=\"width: auto;\">\n" +
        "            <label for=\"cropper_avatarImgUpload\" class=\"layui-btn layui-btn-primary\">\n" +
        "                <i class=\"layui-icon\">&#xe67c;</i>上传\n" +
        "            </label>\n" +
        "            <input class=\"layui-upload-file\" id=\"cropper_avatarImgUpload\" type=\"file\" value=\"选择图片\" name=\"file\">\n" +
        "        </div>\n" +
        "        <div class=\"layui-form-mid layui-word-aux\"> 300x300px,大小2M</div>\n" +
        "    </div>\n" +
        "    <div class=\"layui-row layui-col-space15\">\n" +
        "        <div class=\"layui-col-xs9\">\n" +
        "            <div class=\"readyimg\" style=\"height:450px;background-color: rgb(247, 247, 247);\">\n" +
        "                <img src=\"\" >\n" +
        "            </div>\n" +
        "        </div>\n" +
        "        <div class=\"layui-col-xs3\">\n" +
        "            <div class=\"img-preview\" style=\"border:1px solid green;width:200px;height:200px;overflow:hidden\">\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "    <div class=\"layui-row layui-col-space15\">\n" +
        "        <div class=\"layui-col-xs9\">\n" +
        "            <div class=\"layui-row\">\n" +
        "                <div class=\"layui-col-xs6\">\n" +
        "                    <button type=\"button\" class=\"layui-btn layui-icon layui-icon-left\" cropper-event=\"rotate\" data-option=\"-15\" title=\"Rotate -90 degrees\"> 向左旋转</button>\n" +
        "                    <button type=\"button\" class=\"layui-btn layui-icon layui-icon-right\" cropper-event=\"rotate\" data-option=\"15\" title=\"Rotate 90 degrees\"> 向右旋转</button>\n" +
        "                </div>\n" +
        "                <div class=\"layui-col-xs6\" style=\"text-align: right;\">\n" +
        "                    <button type=\"button\" class=\"layui-btn layui-icon layui-icon-snowflake\n\" cropper-event=\"move\" title=\"移动\"></button>\n" +
        "                    <button type=\"button\" class=\"layui-btn layui-icon layui-icon-addition\" cropper-event=\"large\" title=\"放大图片\"></button>\n" +
        "                    <button type=\"button\" class=\"layui-btn layui-icon layui-icon-subtraction\n\" cropper-event=\"small\" title=\"缩小图片\"></button>\n" +
        "                    <button type=\"button\" class=\"layui-btn layui-icon layui-icon-refresh\" cropper-event=\"reset\" title=\"重置图片\"></button>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "        <div class=\"layui-col-xs3\">\n" +
        "            <button class=\"layui-btn layui-btn-fluid\" cropper-event=\"confirmSave\" type=\"button\"> 保存修改</button>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "\n" +
        "</div>";
    var obj = {
        render: function(e){
            $('body').append(html);
            var self = this,
                elem = e.elem,
                saveW = e.saveW,
                saveH = e.saveH,
                mark = e.mark,
                area = e.area,
                url = e.url,
                done = e.done;
            var content = $('.showImgEdit')
                ,image = $(".showImgEdit .readyimg img")
                ,preview = '.showImgEdit .img-preview'
                ,file = $(".showImgEdit input[name='file']")
                , options = {aspectRatio: mark,preview: preview,viewMode:1};
            $(elem).on('click',function () {
                layer.open({
                    type: 1
                    , content: content
                    , area: area
                    ,move:true
                    , success: function () {
                        image.cropper(options);
                    }
                    , cancel: function (index) {
                        content.css('display','none')
                        image.cropper('destroy');
                        layer.close(index);
                    }
                });
            });
            $(".layui-btn").on('click',function () {
                var event = $(this).attr("cropper-event");
                //监听确认保存图像
                if(event === 'confirmSave'){
                    image.cropper("getCroppedCanvas",{
                        width: saveW,
                        height: saveH
                    }).toBlob(function(blob){
                        var formData=new FormData();
                        formData.append('file',blob,'fun-avatar.png');
                        $.ajax({
                            method:"post",
                            url: url, //用于文件上传的服务器端请求地址
                            data: formData,
                            processData: false,
                            contentType: false,
                            success:function(result){
                               if(result.code > 0){
                           //      layer.msg(result.msg,{icon: 1});
                                    layer.closeAll('page');
                                    $('.showImgEdit').hide()
                                   // }else if(result.code <= 0){
                               //      layer.alert(result.msg,{icon: 2});
                                }
                                return done(result);
                            }
                        });
                    });
                    //监听旋转
                }else if(event === 'rotate'){
                    var option = $(this).data('option');
                    image.cropper('rotate', option);
                    //重设图片
                }else if(event === 'reset'){
                    image.cropper('reset');
                } else if (event === 'large') {
                    image.cropper('zoom', 0.1);
                }
                else if (event === 'small') {
                    image.cropper('zoom', -0.1);
                }
                else if (event === 'setDragMode') {
                    image.cropper('setDragMode', "move");
                }
                else if (event === 'setDragMode1') {
                    image.cropper('setDragMode', "crop");
                }
                //文件选择
                file.change(function () {
                    var r= new FileReader();
                    var f=this.files[0];
                    r.readAsDataURL(f);
                    r.onload=function (e) {
                        image.cropper('destroy').attr('src', this.result).cropper(options);
                    };
                });
            });
        }

    };
    exports('croppers', obj);
});