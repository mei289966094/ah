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
}
)
