        function getElementsByClassName(className,context){
        context = context || document;       //如果有指定从某个元素里寻找，则会比每次都遍历document快得多
         
        if(context.getElementsByClassName){                               //如果浏览器支持原生的方法，则直接用原生的方法，为什么？你有把握你写的方法比原生提供的好吗？
            return context.getElementsByClassName(className);
        }
         
        var nodes = context.getElementsByTagName('*');         //遍历
        var rets = [];                                                     //存放匹配到的节点
        for(var i = 0; i < nodes.length; i++){
            if(hasClass(className,nodes[i])){                      //hasClass派上用场了
                rets.push(nodes[i]);
            }
        }
        return rets;
        }
		//获取浏览器页面可见高度和宽度
        var _PageHeight = document.documentElement.clientHeight ||document.clientHeight,
            _PageWidth = document.documentElement.clientWidth || document.clientWidth;

        //计算loading框距离顶部和左部的距离（loading框的宽度为55px，高度为55px）
        var _LoadingTop = _PageHeight > 30 ? (_PageHeight - 30) / 2 : 0,
            _LoadingLeft = _PageWidth > 30 ? (_PageWidth - 30) / 2 : 0;

        //在页面未加载完毕之前显示的内容
        var _LoadingHtml = '<div id="loadingDiv" style="-moz-transition:0.5s ease;-webkit-transition:0.5s ease;-o-transition:0.5s ease;-ms-transition:0.5s ease;transition:0.5s ease;position:fixed;left:0;top:0;width:100%;height:100%;background:#000;opacity:1;filter:alpha(opacity=100);z-index:100;"><div style="position:relative;top:'+_LoadingTop+'px;margin:0 auto;cursor1:wait;width:30px;height:30px;background:#000 url(./content/spin.gif) no-repeat scroll;"></div></div>';
        
        //呈现loading效果
        document.write(_LoadingHtml);

        //监听加载状态改变
        document.onreadystatechange = completeLoading;
 
        //加载完成时移除loading效果
        function completeLoading() {
                var oSc = document.getElementsByClassName("sc","iframe");
                for(var i = 0 ; i < oSc.length ; i++){
                    oSc[i].readyState = "complete";
                    }
            if (document.readyState == "complete") {
                var loadingMask = document.getElementById('loadingDiv');
                loadingMask.style.opacity = 0;
                loadingMask.style.filter = 'alpha(opacity=0)';
                loadingMask.style['z-index'] = -100;
                //loadingMask.parentNode.removeChild(loadingMask);
            }
        }