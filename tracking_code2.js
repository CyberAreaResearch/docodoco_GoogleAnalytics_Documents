<!--docodocojp-->
<script type="text/javascript" src="//api.docodoco.jp/v4/docodoco?key=*******" charset="utf-8"></script>
<script type="text/javascript" src="ディレクトリ名/docodoco_ua_plugin.js" charset="utf-8"></script>

<!--dataLayer-->
<script>
dataLayer.push({
'dimension1' : SURFPOINT.getOrgName(), //組織名
'dimension2' : SURFPOINT.getOrgUrl(), //組織URL
'dimension3' : getIndL(SURFPOINT.getOrgIndustrialCategoryL()), //業種大分類
'dimension4' : getEmp(SURFPOINT.getOrgEmployeesCode()), //従業員数
'dimension5' : getTime(), //アクセス時刻
'dimension6' : SURFPOINT.getIP(), //IP アドレス
'dimension7' : getIpo(SURFPOINT.getOrgIpoType()), //上場区分
'dimension8' : getCap(SURFPOINT.getOrgCapitalCode()), //資本金
'dimension9' : getGross(SURFPOINT.getOrgGrossCode()), //売上高
'dimension10' : SURFPOINT.getCountryJName(), //国名
'dimension11' : SURFPOINT.getPrefJName(), //都道府県名
'dimension12' : SURFPOINT.getLineJName(), //回線名
'event' :'docodoco' //イベントトリガー
});
</script>
