
var  str=window.location.href;


if((str.indexOf("youku")!=-1||str.indexOf("v.qq")!=-1||str.indexOf("iqiyi")!=-1||str.indexOf("mgtv")!=-1)&&str.indexOf("url=")==-1 &&str.indexOf("m1380")==-1)
{
   $("body").append(css());
		function css(){
				
			$("body").append("<div class='leftNav-item'>		<ul>			<li>				<i class='fa fa-location-arrow' >点击播放</i>				<input id='url' value='点击播放'  target='_blank' class='rota'>			</li>           <li lay-data='img' data-fooc='images/zizhu.png'>				<i class='fa fa-money'>搜索本剧</i><input id='tb_jad6' value='搜索本剧'  target='_blank' class='rota'>			</li> 			<li lay-data='img' data-fooc='images/zizhu.png'>		<i class='fa fa-money'>教程指导</i><a href='http://vip.78ka.cc/howToUse/' target='_blank' class='rota'>教程指导</a>			</li> 		<li lay-data='img' data-fooc='images/zizhu.png'>			<i class='fa fa-money'>打赏小二</i><a href='http://tb.jad6.com/images/zizhu.png' target='_blank' class='rota'>打赏小二</a>			</li> 		</ul>	</div>");

}
}


 $("#tb_jad6").click(function() {
              var aaaa = document.title;
			  if(aaaa.indexOf(" ")!=-1){aaaa=aaaa.match(/(.*) /)[1];}
			  if(aaaa.indexOf("-电影")!=-1){aaaa=aaaa.match(/(.*)\-电影/)[1];}  
			  if(aaaa.indexOf("-电视")!=-1){aaaa=aaaa.match(/(.*)\-电视/)[1];} 
			  if(aaaa.indexOf("-视频")!=-1){aaaa=aaaa.match(/(.*)\-视频/)[1];} 
			  if(aaaa.indexOf("- 视频")!=-1){aaaa=aaaa.match(/(.*)\- 视频/)[1];}
			  if(aaaa.indexOf("-")!=-1){aaaa=aaaa.match(/(.*)\-/)[1];}   
			  if(aaaa.indexOf("_电影")!=-1){aaaa=aaaa.match(/(.*)\_电影/)[1];}  
			  if(aaaa.indexOf("_电视")!=-1){aaaa=aaaa.match(/(.*)\_电视/)[1];} 
			  if(aaaa.indexOf("_视频")!=-1){aaaa=aaaa.match(/(.*)\_视频/)[1];} 
			  if(aaaa.indexOf("_")!=-1){aaaa=aaaa.match(/(.*)\_/)[1];}       
              var Url2 = aaaa;
              var oInput = document.createElement('input');
              oInput.value = Url2;
              document.body.appendChild(oInput);
              oInput.select();
              document.execCommand("Copy");
              oInput.className = 'oInput';
              oInput.style.display = 'none';
             // var conf = confirm("成功复制本页标题！现在转到优惠券搜索主页么？-->");
             // if (conf == true) {
				//cc=encodeURI("https://so.youku.com/search_video/q_"+aaaa );	
				
				if(str.indexOf("youku")!=-1)
				{	
				cc="https://so.youku.com/search_video/q_"+aaaa;		
				}
				if(str.indexOf("v.qq")!=-1)
				{	
				cc="https://v.qq.com/x/search/?q="+aaaa;		
				}
				if(str.indexOf("iqiyi")!=-1)
				{	
				cc="https://so.iqiyi.com/so/q_"+aaaa;		
				}
				if(str.indexOf("mgtv")!=-1)
				{	
				cc="https://so.mgtv.com/so?k="+aaaa;		
				}
					
                var winHandler = window.open();
                winHandler.location = cc;
            //  }
            })

            //  }
 $("#url").click(function() {//alert('jfdsjfkdsjf')
              
			  var aaaa = document.title;
			  if(aaaa.indexOf(" ")!=-1){aaaa=aaaa.match(/(.*) /)[1];}
			  if(aaaa.indexOf("-电影")!=-1){aaaa=aaaa.match(/(.*)\-电影/)[1];}  
			  if(aaaa.indexOf("-电视")!=-1){aaaa=aaaa.match(/(.*)\-电视/)[1];} 
			  if(aaaa.indexOf("-视频")!=-1){aaaa=aaaa.match(/(.*)\-视频/)[1];} 
			  if(aaaa.indexOf("- 视频")!=-1){aaaa=aaaa.match(/(.*)\- 视频/)[1];}
			  if(aaaa.indexOf("-")!=-1){aaaa=aaaa.match(/(.*)\-/)[1];}   
			  if(aaaa.indexOf("_电影")!=-1){aaaa=aaaa.match(/(.*)\_电影/)[1];}  
			  if(aaaa.indexOf("_电视")!=-1){aaaa=aaaa.match(/(.*)\_电视/)[1];} 
			  if(aaaa.indexOf("_视频")!=-1){aaaa=aaaa.match(/(.*)\_视频/)[1];} 
			  if(aaaa.indexOf("_")!=-1){aaaa=aaaa.match(/(.*)\_/)[1];}       
              var Url2 = aaaa;
              var oInput = document.createElement('input');
              oInput.value = Url2;
              document.body.appendChild(oInput);
              oInput.select();
              document.execCommand("Copy");
              oInput.className = 'oInput';
              oInput.style.display = 'none';
	
				var  url="http://vip.78ka.cc/film/play.html?url="+str+"&++"+aaaa;					
                var winHandler = window.open();
                winHandler.location = url;
            //  }
            })
  


