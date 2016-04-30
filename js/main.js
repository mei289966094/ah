// jquery获取select选择的文本与值 
// 获取select 选中的 text : $("#ddlregtype").find("option:selected").text(); 
// 获取select选中的 value: $("#ddlregtype ").val(); 
// 获取select选中的索引: $("#ddlregtype ").get(0).selectedindex; 
//定义价格
var pQt=20; //青铜价格
var pBy=35; //白银价格
var pHj=50; //黄金价格
var pBj=70; //铂金价格
var Toz5=100;//铂金1到钻石5
var Toz4=130;//钻石5到钻石4
var Toz3=160;//钻石4到钻石3
var Toz2=190;//钻石3到钻石2
var Toz1=230;//钻石2到钻石1
var xDw=150;//新号定位赛
var sq=150;//上赛季青铜白银
var hj=170;//上赛季黄金
var bj=200;//上赛季铂金
var zs=240;//上赛季钻石
var zB=150;//直播包天价格
var discount="60%";
//页面加载后动态加载价格
$(function (){


$("#result2").click(function(){

var	 num12=$("#num12").find("option:selected").text();
var key2=$("#key2 ").val();
if( num12=="新号定位赛"){
 num12=xDw;
}
else{
if( $("#num12").find("option:selected").text()=="上赛季青铜"){
 num12=xDw;
}
else
{
	if( $("#num12").find("option:selected").text()=="上赛季黄金"){
	 num12=hj;
}
else{
	if( $("#num12").find("option:selected").text()=="上赛季铂金"){
 num12=bj;
}
else{
if( $("#num12").find("option:selected").text()=="上赛季钻石"){
num12=zs;
}
else{
	if( $("#num12").find("option:selected").text()=="上赛季白银"){
 num12=xDw;
}
}	
}
}
}
}
var num12=Math.floor(num12*key2);

$(".showPrice2").html(num12).css({"font-size":"100px","color":"red","line-height":"300px","text-align":"center"});

});







	$("#priceQingtong").html(pQt);
	$("#priceBaiying").html(pBy);
	$("#priceHuangjing").html(pHj);
	$("#priceBojing").html(pBj);
	$("#zuanshi5").html(Toz5);
	$("#zuanshi4").html(Toz4);
	$("#zuanshi3").html(Toz3);
	$("#zuanshi2").html(Toz2);
	$("#dQingtong").html(sq);
	$("#dBaiying").html(sq);
	$("#dHangjin").html(hj);
	$("#dBojin").html(bj);
	$("#dZuanshi").html(zs);
	$("#xinD").html(xDw);
	$("#pBaotian").html(zB);
	$("#zJingji").html(discount);
	$("#btjg").html(zB);
	//对话框文件
	$('#question').click(function(){
  $.gDialog.alert("代练定位赛包赢八局--少于八局可协商退款--大段价格按下一段计算--比如：黄金1到铂金5，按铂金段位计算--有任何问题可以咨询QQ2048820794", {
    title: "声明",
    animateIn: "bounceIn",
    animateOut: "bounceOut"
  });
});



}
)


