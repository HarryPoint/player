/**
 * Created by vokee on 2017/3/11.
 */
function floatPlayer(url) {
    layui.use('layer', function() {
        let $ = layui.jquery, layer = layui.layer;
        layer.open({
            type: 2,
            title: 'Vokee Player',
            shadeClose: true,
            shade: false,
            maxmin: true, //开启最大化最小化按钮
            area: ['893px', '600px'],
            content: api(url)
            //content: '//www.vinth.wang'
        });
    })
};
function api(url) {return 'http://api.47ks.com/webcloud/?v=' + url;}