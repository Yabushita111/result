// index.htmlに追加する場所を指定
let start = document.getElementById("start");

// ranking.txtに合わせて下が最新
// スコアとそれに対応するgameIDを管理
let solo_score_ranking = [ 
    //[["",0,0,0,0,0,0,0,0,0,0,0,0],['','','','','','','','','','','','']]
    [['team2', 0, '3', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ['', 'c0770a18-3bdf-4024-a003-e44540cfd2fc', '', '', '', '', '', '', '', '', '', '']],
    [['team2', 0, '5', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ['', 'df9f056a-1292-40b5-a3e3-d6f163a05cb0', '', '', '', '', '', '', '', '', '', '']],
    [['team2', 0, '20', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ['', '8044f0cf-836f-47cd-afe7-0a8e2c2a7c6e', '', '', '', '', '', '', '', '', '', '']],
    [['team10', 0, '20', 0, 0, 0, 0, 0, 0, 0, '26', 0, 0], ['', '8044f0cf-836f-47cd-afe7-0a8e2c2a7c6e', '', '', '', '', '', '', '', 'fad33b65-5b79-4572-8917-77e1285ba731', '', '']],
    [['team10', 0, '20', 0, 0, 0, 0, 0, 0, 0, '10', 0, 0], ['', '8044f0cf-836f-47cd-afe7-0a8e2c2a7c6e', '', '', '', '', '', '', '', 'ceebd239-f1f3-4f08-8ea7-7da51e2c3a51', '', '']],
    [['team10', 0, '20', 0, 0, 0, 0, 0, 0, 0, '10', 0, 0], ['', '8044f0cf-836f-47cd-afe7-0a8e2c2a7c6e', '', '', '', '', '', '', '', '8f51a857-dc69-4073-8a87-666ced4130f5', '', '']],
    [['team7', 0, '20', 0, 0, 0, 0, '5', 0, 0, '10', 0, 0], ['', '8044f0cf-836f-47cd-afe7-0a8e2c2a7c6e', '', '', '', '', 'dcde6a3e-e768-48ef-b96a-66ee8bf7c074', '', '', '8f51a857-dc69-4073-8a87-666ced4130f5', '', '']],
    [['team10', 0, '20', 0, 0, 0, 0, '5', 0, 0, '3', 0, 0], ['', '8044f0cf-836f-47cd-afe7-0a8e2c2a7c6e', '', '', '', '', 'dcde6a3e-e768-48ef-b96a-66ee8bf7c074', '', '', '9e28be0c-3b1b-4991-846c-63d175b5af32', '', '']],
    [['team7', 0, '20', 0, 0, 0, 0, '31', 0, 0, '3', 0, 0], ['', '8044f0cf-836f-47cd-afe7-0a8e2c2a7c6e', '', '', '', '', 'e2130017-aa16-4ade-b0db-c06939c88a47', '', '', '9e28be0c-3b1b-4991-846c-63d175b5af32', '', '']],
    [['team7', 0, '20', 0, 0, 0, 0, '5', 0, 0, '3', 0, 0], ['', '8044f0cf-836f-47cd-afe7-0a8e2c2a7c6e', '', '', '', '', '2931d9aa-1d4b-4caa-98bc-938736352664', '', '', '9e28be0c-3b1b-4991-846c-63d175b5af32', '', '']],
    [['team7', 0, '20', 0, 0, 0, 0, '10', 0, 0, '3', 0, 0], ['', '8044f0cf-836f-47cd-afe7-0a8e2c2a7c6e', '', '', '', '', '90cd8241-1948-4a40-90c0-db7f66e062ec', '', '', '9e28be0c-3b1b-4991-846c-63d175b5af32', '', '']],
    [['team10', 0, '20', 0, 0, 0, 0, '10', 0, 0, '15', 0, 0], ['', '8044f0cf-836f-47cd-afe7-0a8e2c2a7c6e', '', '', '', '', '90cd8241-1948-4a40-90c0-db7f66e062ec', '', '', '832ee02e-beee-41e2-9b14-dd70c02f9c50', '', '']],
    [['team8', 0, '20', 0, 0, 0, 0, '10', '27', 0, '15', 0, 0], ['', '8044f0cf-836f-47cd-afe7-0a8e2c2a7c6e', '', '', '', '', '90cd8241-1948-4a40-90c0-db7f66e062ec', 'f2efdba0-d8f6-4f64-a296-feeaa1c6daa0', '', '832ee02e-beee-41e2-9b14-dd70c02f9c50', '', '']]
] // end ranking score


colorlist = ["#FF0000", "#FF7F50", "#FF00FF", "#7FFF00", "#006400", "#00FFFF", "#0000FF", "#4B0082", "#FFFF00", "#A52A2A", "#000000", "#808000"]


// 1コミットに関するページの処理開始
for(let num_commit =0; num_commit<solo_score_ranking.length; num_commit++){
    // コミットしたチーム名と掲載する画像を指定
    let team_chart_main = document.createElement('main')
    let team_name_h2 = document.createElement('h2');
    let team_name = solo_score_ranking[num_commit][0][0]
    let team_num = Number(team_name.slice(4))-1;
    let team_name_font = document.createElement('font')
    team_name_font.color = colorlist[team_num];
    team_name_font.textContent = team_name;
    team_name_h2.textContent = " commited";
    team_name_h2.prepend(team_name_font);
    let chart_box = document.createElement('p');
    chart_box.style = "text-align:center";
    let chart = document.createElement('img');
    chart.src = 'chart-log/' + solo_score_ranking[num_commit][1][team_num] + ".png";

    // コミットしたチーム名とチャートを表示
    start.after(team_chart_main);
    team_chart_main.appendChild(team_name_h2);
    team_name_h2.after(chart_box)
    chart_box.appendChild(chart);

    // 表の作成
    let table = document.createElement("table")
    table.align = "center"
    let table_team_tr = document.createElement("tr")
    let table_score_tr = document.createElement("tr")
    let table_team_th_line = document.createElement("th")
    table_team_th_line.class = "line"
    let table_score_th = document.createElement("th")
    table_score_th.textContent = "score"

    let table_team_th = new Array(13);
    let table_score_td = new Array(13);
    let table_score_a = new Array(13);

    //team名を管理
    for (let i = 1; i <= 12; i++) {
        table_team_th[i] = document.createElement("th")
        //スコアが3つずつある場合の分割
        //table_team_th[i].colSpan = "3"
        table_score_td[i] = document.createElement("td")
        // スコアが存在する場合はリンクを作成
        if (solo_score_ranking[num_commit][1][i-1] != ''){
            table_score_a[i] = document.createElement("a")
            table_score_a[i].href = "http://localhost:8080/" + solo_score_ranking[num_commit][1][i-1]
            //table_score_a[i].href = "https://tyr.ics.es.osaka-u.ac.jp/board/" + solo_score_ranking[num_commit][1][i-1]
            table_score_a[i].target = "_blank"
            table_score_a[i].textContent = String(solo_score_ranking[num_commit][0][i])
            table_score_td[i].appendChild(table_score_a[i])
        }
        else{
            table_score_td[i].textContent = String(solo_score_ranking[num_commit][0][i])
        }
        table_team_th[i].textContent = "team" + String(i)
    }

    // 表の表示
    // チーム名の表示
    chart_box.after(table)
    table.appendChild(table_team_tr)
    table_team_tr.appendChild(table_team_th_line)
    table_team_th_line.after(table_team_th[1])
    for(let i =2; i <= 12; i++){
        table_team_th[i-1].after(table_team_th[i])
    }
    // スコアの表示
    table_team_tr.after(table_score_tr)
    table_score_tr.appendChild(table_score_th)
    table_score_th.after(table_score_td[1])
    for(let i =2; i <= 12; i++){
        table_score_td[i-1].after(table_score_td[i])
    }
    //スコア分割test
    // let tmp = new Array(24)
    // for (let i = 0; i<24; i++){
    //     tmp[i] = document.createElement("td")
    //     tmp[i].textContent = '0'
    //     table_score_td[12].after(tmp[i])
    // }
    //test
}



