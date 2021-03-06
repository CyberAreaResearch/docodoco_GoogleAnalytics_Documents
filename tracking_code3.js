<!--docodocojp-->
<script type="text/javascript" src="//api.docodoco.jp/v4/docodoco?key=*******" charset="utf-8"></script>
<script type="text/javascript" src="ディレクトリ名/docodoco_ua_plugin.js" charset="utf-8"></script>

<!--Google Analytics-->
<script>
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-1234567890-1', 'sample.jp');

ga('set', 'dimension1' , SURFPOINT.getOrgName()); //組織名
ga('set', 'dimension2' , SURFPOINT.getOrgUrl()); //組織URL
ga('set', 'dimension3' , getIndL(SURFPOINT.getOrgIndustrialCategoryL())); //業種大分類
ga('set', 'dimension4' , getEmp(SURFPOINT.getOrgEmployeesCode())); //従業員数
ga('set', 'dimension5' , getTime()); //アクセス時刻
ga('set', 'dimension6' , SURFPOINT.getIP()); //IPアドレス
ga('set', 'dimension7' , getIpo(SURFPOINT.getOrgIpoType())); //上場区分
ga('set', 'dimension8' , getCap(SURFPOINT.getOrgCapitalCode())); //資本金
ga('set', 'dimension9' , getGross(SURFPOINT.getOrgGrossCode())); //売上高
ga('set', 'dimension10' , SURFPOINT.getCountryJName()); //国名
ga('set', 'dimension11' , SURFPOINT.getPrefJName()); //都道府県名
ga('set', 'dimension12' , SURFPOINT.getLineJName()); //回線名
ga('send', 'pageview');
</script>
