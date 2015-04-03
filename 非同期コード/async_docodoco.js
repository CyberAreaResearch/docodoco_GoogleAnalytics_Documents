setTimeout(function() {

  // 処理完了待ちの最大ループ回数
  var __loop_Count = 100;

  // どこどこJPにアクセスしJavaScriptを取得→実行、 "SURFPOINT"オブジェクトを定義する
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.charset = 'utf-8';
  script.src =  location.protocol + '//api.docodoco.jp/v4/docodoco?key=***********';
  document.getElementsByTagName('head')[0].appendChild(script);


  // 必要に応じてコード→日本語変換処理ライブラリを読み込み
  // ライブラリを読み込まない場合は「変換関数が定義済みか」チェックをしてはいけない
  // http://api.docodoco.jp/docodoco_ua_plugin.js
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.charset = 'utf-8';
  script.src = './docodoco_ua_plugin.js';
  document.getElementsByTagName('head')[0].appendChild(script);
  // 日本語変換処理ここまで

  timerID = setInterval(function(){

    //ループカウントを減らして0になったら時間切れ
    __loop_Count--;
    if(__loop_Count == 0){
      // ループを抜ける
      clearInterval(timerID);
      timerID = null;
    }

    // "SURFPOINT"オブジェクトが定義済みか and 変換関数が定義済みか をチェック
    if((typeof SURFPOINT !== "undefined") && (typeof getTime !== "undefined")){

      // Googleアナリティクスのトラッキングコード
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-12345678-9', 'sample.jp');

      ga('set', 'dimension1' , SURFPOINT.getOrgName()); //組織名
      ga('set', 'dimension2' , SURFPOINT.getOrgUrl()); //組織 URL
      ga('set', 'dimension3' , getIndL(SURFPOINT.getOrgIndustrialCategoryL())); //業種大分類
      ga('set', 'dimension4' , getEmp(SURFPOINT.getOrgEmployeesCode())); //従業員数
      ga('set', 'dimension5' , getTime()); //アクセス時刻
      ga('set', 'dimension6' , SURFPOINT.getIP()); //IP アドレス
      ga('set', 'dimension7' , getIpo(SURFPOINT.getOrgIpoType())); //上場区分
      ga('set', 'dimension8' , getCap(SURFPOINT.getOrgCapitalCode())); //資本金
      ga('set', 'dimension9' , getGross(SURFPOINT.getOrgGrossCode())); //売上高
      ga('set', 'dimension10' , SURFPOINT.getCountryJName()); //国名
      ga('set', 'dimension11' , SURFPOINT.getPrefJName()); //都道府県名
      ga('set', 'dimension12' , SURFPOINT.getLineJName()); //回線名
      ga('set', 'dimension13' , SURFPOINT.getDomainName()); //ドメイン名
      ga('set', 'dimension14' , SURFPOINT.getBCFlag()); //Bフラグ
      ga('send', 'pageview');
      // Googleアナリティクスのトラッキングコード ここまで

      // ここまで処理が進んだらループを抜けてよい
      clearInterval(timerID);
      timerID = null;
    }

  }, 50); // "SURFPOINT"オブジェクト定義されていない場合の待ち時間ms
}, 0); // 初回ループ開始までの待ち時間ms
