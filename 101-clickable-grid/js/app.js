var ClickAble = {
    _template:'<div class="flex"></div>',
    _templateWrap:'<div class="box" ></div>',
    render:function(data){ //��Ⱦ
        var _this = this;
        var result = $(_this._template);
        result.text(data);
        return result;
    },
    logic:function(num){
        var _this = this;
        for(var j = 0;j<num;j++){
            var _wrap = $(_this._templateWrap);
            for(var i = 1;i<=num;i++){
                _wrap.append(_this.render(i+j*num));
            }
            $("#clickable-grid").append(_wrap);
        }
    },
    init:function(num){ //��ʼ��
        this.logic(num);  //ִ���߼�
        $("#clickable-grid").on('click','.flex',function(){  //��ÿһ�����Ӱ󶨵���¼�
            console.log($(this).text());
        })
    }
};

