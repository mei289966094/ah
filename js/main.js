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
//页面加载后执行函数
$(function (){

//绑定点击计算代练定位赛
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
//end


//将价格加载到表格中
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
//end

	//对话框文件
	$('#question').click(function(){
  	$.gDialog.alert("代练定位赛包赢八局--少于八局可协商退款--大段价格按下一段计算--比如：黄金1到铂金5，按铂金段位计算--有任何问题可以咨询QQ2048820794", {
    title: "声明",
    animateIn: "bounceIn",
    animateOut: "bounceOut"
  });
});
//end
//补分提示对话框
	$('#showBf').click(function(){
  $.gDialog.alert("补分就是赢一局加胜点少于15点", {
    title: "补分说明",
    animateIn: "bounceIn",
    animateOut: "bounceOut"
  });
});
//end
//绑定点击代练段位价格
$("#result0").click(function(){
var num10=$("#num10").find("option:selected").text();
var num20=$("#num20").find("option:selected").text();
var bufen=$("#bufen").val();
if(num10=="青铜5"){
	num10=pQt;
}
else{
	if(num10=="青铜4"){
		num10=pQt*2;
	}
	else{
		if(num10=="青铜3"){
		num10=pQt*3;
	}
	else{
		if(num10=="青铜2"){
		num10=pQt*4;
	}
	else{
		if(num10=="青铜1"){
		num10=pQt*5;
	}
	else{
		if(num10=="白银5"){
		num10=pQt*5+pBy;
	}
	else{
			if(num10=="白银4"){
		num10=pQt*5+pBy*2;
	}
	else{
			if(num10=="白银3"){
		num10=pQt*5+pBy*3;
	}
	else{
		if(num10=="白银2"){
		num10=pQt*5+pBy*4;
	}
	else{
		if(num10=="白银1"){
		num10=pQt*5+pBy*5;
	}
	else{
		if(num10=="黄金5"){
		num10=pQt*5+pBy*5+pHj;
	}
	else{
		if(num10=="黄金4"){
		num10=pQt*5+pBy*5+pHj*2;
	}
	else{
			if(num10=="黄金3"){
		num10=pQt*5+pBy*5+pHj*3;
	}
	else{
			if(num10=="黄金2"){
		num10=pQt*5+pBy*5+pHj*4;
	}
	else{
		if(num10=="黄金1"){
		num10=pQt*5+pBy*5+pHj*5;
	}
	else{
		if(num10=="铂金5"){
		num10=pQt*5+pBy*5+pHj*5+pBj;
	}
	else{
		if(num10=="铂金4"){
		num10=pQt*5+pBy*5+pHj*5+pBj*2;
	}
	else{
		if(num10=="铂金3"){
		num10=pQt*5+pBy*5+pHj*5+pBj*3;
	}
	else{
		if(num10=="铂金2"){
		num10=pQt*5+pBy*5+pHj*5+pBj*4;
	}
	else{
		if(num10=="铂金1"){
		num10=pQt*5+pBy*5+pHj*5+pBj*5;
	}
	else{
		if(num10=="钻石5"){
		num10=pQt*5+pBy*5+pHj*5+pBj*5+Toz5;
	}
	else{
		if(num10=="钻石4"){
		num10=pQt*5+pBy*5+pHj*5+pBj*5+Toz5+Toz4;
	}
	if(num10=="钻石3"){
		num10=pQt*5+pBy*5+pHj*5+pBj*5+Toz5+Toz4+Toz3;
	}
	else{
		if(num10=="钻石2"){
		num10=pQt*5+pBy*5+pHj*5+pBj*5+Toz5+Toz4+Toz3+Toz2;
	}
	else{
		if(num10=="钻石1"){
		num10=pQt*5+pBy*5+pHj*5+pBj*5+Toz5+Toz4+Toz3+Toz2+Toz1;
	}
	}
	}
	}
	}
	}
	}
	}
	}
	}
	}
	}
	}
	}
	}
	}
	}
	}
	}
	}
	}
	}

	}
	}

if(num20=="青铜5"){
	num20=pQt;
}
else{
	if(num20=="青铜4"){
		num20=pQt*2;
	}
	else{
		if(num20=="青铜3"){
		num20=pQt*3;
	}
	else{
		if(num20=="青铜2"){
		num20=pQt*4;
	}
	else{
		if(num20=="青铜1"){
		num20=pQt*5;
	}
	else{
		if(num20=="白银5"){
		num20=pQt*5+pBy;
	}
	else{
			if(num20=="白银4"){
		num20=pQt*5+pBy*2;
	}
	else{
			if(num20=="白银3"){
		num20=pQt*5+pBy*3;
	}
	else{
		if(num20=="白银2"){
		num20=pQt*5+pBy*4;
	}
	else{
		if(num20=="白银1"){
		num20=pQt*5+pBy*5;
	}
	else{
		if(num20=="黄金5"){
		num20=pQt*5+pBy*5+pHj;
	}
	else{
		if(num20=="黄金4"){
		num20=pQt*5+pBy*5+pHj*2;
	}
	else{
			if(num20=="黄金3"){
		num20=pQt*5+pBy*5+pHj*3;
	}
	else{
			if(num20=="黄金2"){
		num20=pQt*5+pBy*5+pHj*4;
	}
	else{
		if(num20=="黄金1"){
		num20=pQt*5+pBy*5+pHj*5;
	}
	else{
		if(num20=="铂金5"){
		num20=pQt*5+pBy*5+pHj*5+pBj;
	}
	else{
		if(num20=="铂金4"){
		num20=pQt*5+pBy*5+pHj*5+pBj*2;
	}
	else{
		if(num20=="铂金3"){
		num20=pQt*5+pBy*5+pHj*5+pBj*3;
	}
	else{
		if(num20=="铂金2"){
		num20=pQt*5+pBy*5+pHj*5+pBj*4;
	}
	else{
		if(num20=="铂金1"){
		num20=pQt*5+pBy*5+pHj*5+pBj*5;
	}
	else{
		if(num20=="钻石5"){
		num20=pQt*5+pBy*5+pHj*5+pBj*5+Toz5;
	}
	else{
		if(num20=="钻石4"){
		num20=pQt*5+pBy*5+pHj*5+pBj*5+Toz5+Toz4;
	}
	if(num20=="钻石3"){
		num20=pQt*5+pBy*5+pHj*5+pBj*5+Toz5+Toz4+Toz3;
	}
	else{
		if(num20=="钻石2"){
		num20=pQt*5+pBy*5+pHj*5+pBj*5+Toz5+Toz4+Toz3+Toz2;
	}
	else{
		if(num20=="钻石1"){
		num20=pQt*5+pBy*5+pHj*5+pBj*5+Toz5+Toz4+Toz3+Toz2+Toz1;
	}
	}
	}
	}
	}
	}
	}
	}
	}
	}
	}
	}
	}
	}
	}
	}
	}
	}
	}
	}
	}
	}

	}
	}

if(num10>=num20){
	$.gDialog.alert("难道您要掉段吗？？？真的要掉段，请联系客服吧！", {
    title: "请重新选择",
    animateIn: "bounceIn",
    animateOut: "bounceOut"
  });
}
//计算不算补分时的价格
var key0=$("#key0").val();

var num0=Math.floor((num20-num10)*key0);

//判断是否补分
 if(bufen=="++"&&(num10<=(pQt*5))){
 	num0=num0+pQt;
 }
 else{
 	if(bufen=="++"&&(num10<=(pQt*5+pBy*5))){
 	num0=num0+pBy;
 }
 else{
 	if(bufen=="++"&&(num10<=(pQt*5+pBy*5+pHj*5))){
 	num0=num0+pHj;
 }
 else{
 	if(bufen=="++"&&(num10<=(pQt*5+pBy*5+pHj*5+pBj*5))){
 	num0=num0+pBj;
 }
 else{
 	if(bufen=="++"&&(num10<=(pQt*5+pBy*5+pHj*5+pBj*5+Toz5))){
 	num0=num0+Toz5;
 }
 else{
 	if(bufen=="++"&&(num10<=(pQt*5+pBy*5+pHj*5+pBj*5+Toz5+Toz4))){
 	num0=num0+Toz4;
 }
 else{
 	if(bufen=="++"&&(num10<=(pQt*5+pBy*5+pHj*5+pBj*5+Toz5+Toz4+Toz3))){
 	num0=num0+Toz3;
 }
 else{
 	if(bufen=="++"&&(num10<=(pQt*5+pBy*5+pHj*5+pBj*5+Toz5+Toz4+Toz3+Toz2))){
 	num0=num0+Toz2;
 }
 else{
 	if(bufen=="++"&&(num10<=(pQt*5+pBy*5+pHj*5+pBj*5+Toz5+Toz4+Toz3+Toz2+Toz1))){
 	num0=num0+Toz1;
 }
 }
 }
 }
 }
 }
 }
 }
 }



$(".showPrice3").html(num0).css({"font-size":"100px","color":"red","line-height":"300px","text-align":"center"});

});








//___________________________________________________
}
)


