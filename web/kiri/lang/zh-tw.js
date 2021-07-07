// 英文。其他語言地圖將遵循英語內容
// 映射缺少的鍵/值對
kiri.lang['zh-tw'] = {
    // 通用鍵及菜單
    animate:        "動畫",       // CAM動畫按鈕
    arrange:        "排列",       // 對工作區對象排版
    axis:           "軸",         // 左側對象比例彈出菜單
    clear:          "清除",       // 清空工作區（移除所有對象）
    copy:           "複製",
    delete:         "刪除",
    detail:         "詳情",
    done:           "完成",
    enable:         "開啟",
    export:         "匯出",
    files:          "檔案",
    help:           "幫助",
    ghost:          "透明",       // 左側渲染彈出菜單（線框）
    hide:           "隱藏",       //  左側渲染彈出菜單（不可見）
    home:           "主界面",
    import:         "匯入",
    language:       "語言",
    machine:        "設備",       // 設備或機器
    metric:         "單位",
    name:           "名稱",
    prefs:          "偏好",       // 左側菜單“偏好設定”
    preview:        "預覽",
    recent:         "最近",
    render:         "渲染",       // 左側渲染彈出菜單
    reset:          "重設",
    rotate:         "旋轉",       // 左側旋轉彈出菜單
    save:           "保存",
    scale:          "比例",       // 左側對象比例彈出菜單
    setup:          "設置",
    settings:       "設定",
    size:           "大小",
    slice:          "切片",
    solid:          "實心",       // 瀏覽類型彈出菜單
    start:          "開始",
    tool:           "工具",
    tools:          "工具欄",     // CAM 工具菜單按鈕
    top:            "頂面",
    type:           "類型",       // CAM 工具類型
    version:        "版本",
    view:           "視圖",       // 左側瀏覽彈出菜單
    wire:           "線框",       // 左側渲染彈出菜單

    acct_xpo:       ["備份您的設備及","設備配置檔案，","可選擇包括工作區、","對象及位置。"],

    //右鍵內容菜單
    rc_clws:        "清楚工作區",
    rc_xpws:        "匯出工作區",
    rc_lafl:        "平鋪",
    rc_mirr:        "鏡像",
    rc_dupl:        "拷貝",
    rc_xstl:        "匯出為STL",

    //設備菜單及相關對話框
    dm_sldt:        "選擇設備類型",
    dm_stdd:        "標準設備",
    dm_mydd:        "我的設備",
    dm_seld:        "所選設備",
    dm_rcnt:        "最近使用檔案",
    dm_savs:        "預存設定",
    dm_appp:        "應用偏好設定",

    // CAM工具對話框
    td_tyem:        "立",        // 立銑刀
    td_tybm:        "球",        // 球刀
    td_tytm:        "錐",        // 錐度銑刀
    td_tonm:        "工具#",
    td_shft:        "軸",        // 立銑刀軸規格
    td_flut:        "槽",        //  立銑刀槽規格
    td_tapr:        "錐",        // 立銑刀錐規格

    // 設備對話組
    dv_gr_dev:      "設備",
    dv_gr_ext:      "噴頭",
    dv_gr_out:      "輸出",
    dv_gr_gco:      "gcode宏",

    // 設備對話 (_s = label, _l = hover help)
    dv_name_s:      "名稱",
    dv_name_l:      "設備名稱",
    dv_fila_s:      "耗材",
    dv_fila_l:      "直徑以mm為單位",
    dv_nozl_s:      "噴嘴",
    dv_nozl_l:      "直徑以mm為單位",
    dv_bedw_s:      "寬度",
    dv_bedw_l:      "工作區單位",
    dv_bedd_s:      "深度",
    dv_bedd_l:      "工作區單位",
    dv_bedh_s:      "高度",
    dv_bedh_l:      ["最大建模高度","工作區單位數"],
    dv_spmx_s:      "最大轉軸",
    dv_spmx_l:      ["最大轉軸轉速","0為禁用"],
    dv_xtab_s:      "絕對位置",
    dv_xtab_l:      "噴頭以絕對位置運動",
    dv_orgc_s:      "原點",
    dv_orgc_l:      "機床原點",
    // dv_orgt_s:      "頂部原點",
    // dv_orgt_l:      "z部分頂部原點",
    dv_bedc_s:      "圓形機床",
    dv_bedc_l:      "設備機床為圓形",
    dv_belt_s:      "履帶機床",
    dv_belt_l:      "持續列印機床",
    dv_retr_s:      "韌體回抽",
    dv_retr_l:      ["設備韌體支持G10/G11"],
    dv_fanp_s:      "風扇強度",
    dv_fanp_l:      "設定冷卻風扇強度",
    dv_prog_s:      "程序",
    dv_prog_l:      "各程序輸出 %",
    dv_layr_s:      "層",
    dv_layr_l:      ["在各層變換時","進行輸出"],
    dv_tksp_s:      "符號間隔",
    dv_tksp_l:      ["在gcode軸參數間","添加空隙","G0X0Y0X0","vs","G0 X0 Y0 Z0"],
    dv_strc_s:      "刪除註解",
    dv_strc_l:      ["刪除gcode註解","註解以;開頭"],
    dv_fext_s:      "副檔名",
    dv_fext_l:      "副檔名",
    dv_dwll_s:      "暫停",
    dv_dwll_l:      "gcode暫停腳本",
    dv_tool_s:      "更換工具",
    dv_tool_l:      "工具更換腳本",
    dv_sspd_s:      "轉軸轉速",
    dv_sspd_l:      "設定轉軸轉速",
    dv_paus_s:      "暫停",
    dv_paus_l:      "gcode 暫停腳本",
    dv_head_s:      "起始G-code",
    dv_head_l:      "gcode header腳本",
    dv_foot_s:      "結束G-code",
    dv_foot_l:      "gcode footer腳本",
    dv_pext_s:      "外部",
    dv_pext_l:      ["gcode 腳本在列印","外部線條之前執行"],
    dv_pint_s:      "內部",
    dv_pint_l:      ["gcode 腳本在列印","內部線條之前執行"],
    dv_lzon_s:      "雷射 啟用",
    dv_lzon_l:      "gcode 雷射啟用腳本",
    dv_lzof_s:      "雷射 禁用",
    dv_lzof_l:      "gcode 雷射禁用腳本",
    dv_exts_s:      "選中",
    dv_exts_l:      "gcode 運行以啟用改噴頭",
    dv_dext_s:      "取消勾選",
    dv_dext_l:      "啟用另一噴頭前運行gcode",
    dv_extd_s:      "取消勾選",
    dv_extd_l:      "取消選中該噴頭的gcode",
    dv_exox_s:      "偏移 x",
    dv_exox_l:      "噴嘴偏移 x",
    dv_exoy_s:      "偏移 y",
    dv_exoy_l:      "噴嘴偏移 y",

    // 模式
    mo_menu:        "模式",
    mo_fdmp:        "FDM列印",
    mo_slap:        "SLA模式",
    mo_lazr:        "雷射切割",
    mo_cncm:        "CNC銑刀",

    // 設定
    su_menu:        "設定",
    su_devi:        "設備",
    su_tool:        "工具",
    su_locl:        "本地",
    su_xprt:        "匯出",
    su_help:        "幫助",

    //載入
    fe_menu:        "檔案",
    fn_recn:        "最近檔案",
    fn_impo:        "匯入",

    // 功能
    fn_menu:        "動作",
    fn_arra:        "排布",
    fn_slic:        "切片",
    fn_prev:        "預覽",
    fn_expo:        "匯出",

    // 視圖
    vu_menu:        "視圖",
    vu_home:        "首頁",
    vu_rset:        "重設",
    vu_sptp:        "上視圖",
    vu_spfr:        "前視圖",
    vu_splt:        "左視圖",
    vu_sprt:        "右視圖",

    // 工作區
    ws_menu:        "預覽",
    ws_save:        "保存",
    ws_cler:        "清除",

    // 設定
    op_menu:        "界面",
    op_disp:        "顯示",
    op_xprt_s:      "專家模式",
    op_xprt_l:      "顯示更多設定選項",
    op_decl_s:      "顯示印花",
    op_decl_l:      "顯示設備印花及logo",
    op_dang_s:      "實驗",
    op_dang_l:      "顯示實驗參數",
    op_hopo_s:      "懸停彈出",
    op_hopo_l:      ["啟用菜單懸停","啟用"],
    op_dark_s:      "暗色模式",
    op_dark_l:      "暗色界面",
    op_comp_s:      "緊湊UI",
    op_comp_l:      ["緊湊的用戶界面","適用於小屏幕","及平板"],
    op_shor_s:      "顯示原點",
    op_shor_l:      "顯示設備或程序原點",
    op_shru_s:      "顯示標尺",
    op_shru_l:      ["在主要參考線上","顯示軸標尺"],
    op_sped_s:      "顯示速度",
    op_sped_l:      ["在預覽模式下","以色碼顯示速度"],
    op_auto_s:      "自動排版",
    op_auto_l:      ["添加新項目時","自動進行排版"],
    op_free_s:      "自定義布局",
    op_free_l:      ["允許拖放布局","雷射模式下不產生影響"],
    op_spcr_s:      "間距",
    op_spcr_l:      ["自動排版時","以工作區單位表示的","對象間距"],
    op_orth_s:      "正交",
    op_orth_l:      ["正交顯示","需要刷新頁面"],
    op_invr_s:      "反向縮放",
    op_invr_l:      ["反轉鼠標滾輪","滾動縮放"],
    op_save_s:      "自動保存",
    op_save_l:      ["在應用重新加載之間","保存工作區內的對象"],
    op_line_s:      "線條類型",
    op_line_l:      ["路徑渲染用的線條類型","影響3D性能","路徑：3D最佳","平面：2D適用","線條 = 1D 最速"],
    op_unit_s:      "單位",
    op_unit_l:      ["工作區單位影響","速度與距離"],
    op_anim_s:      "動畫",
    op_anim_l:      ["動畫網格密度","高數值為高密度","占用更多內存","且更慢"],

    lo_menu:        "布局",

    pt_menu:        "部件",
    pt_deci_s:      "抽取",
    pt_deci_l:      ["在匯入時啟用或禁用點抽取","以加快切片速度","並減少耗用內存"],
    pt_qual_s:      "品質",
    pt_qual_l:      ["切片過程中","維持的細節程度","越低速度越快"],
    pt_heal_s:      "修復網格",
    pt_heal_l:      ["嘗試修復","非流形網格","延長切片耗時"],

    xp_menu:        "輸出",

    //設定
    se_menu:        "設定",
    se_load:        "載入",
    se_save:        "儲存",

    // FDM 切片
    sl_menu:        "層",
    sl_lahi_s:      "高度",
    sl_lahi_l:      ["各切片層高度","以mm為單位"],
    ad_minl_s:      "最小高度",
    ad_minl_l:      ["適應性最小層高","以mm為單位","不能為零"],
    sl_ltop_s:      "頂部層數",
    sl_ltop_l:      ["在列印頂部","執行的層數"],
    sl_lsld_s:      "固體層",
    sl_lsld_l:      ["根據圖層增量計算的","實心填充區域。見","層彈出菜單"],
    sl_lbot_s:      "底部層數",
    sl_lbot_l:      ["在列印底部","執行的層數"],
    ad_adap_s:      "適應性",
    ad_adap_l:      ["使用適應性層高","其中‘層高’代表最大值","‘最小層’代表最小值"],

    // FDM 外殼
    sl_shel_s:      "外殼圈數",
    sl_shel_l:      ["需生成的","牆壁線條圈數"],
    sl_ordr_s:      "外殼順序",
    sl_ordr_l:      ["輸出外殼順序","由內至外","或由外至內","影響表面品質"],
    sl_strt_s:      "層始點",
    sl_strt_l:      ["層的始發點","最終 = 最終層截止處","中心 = 部件中心","原點 = 設備原點"],
    ad_thin_s:      "薄壁",
    ad_thin_l:      ["檢測並填補","外殼間隙"],

    // FDM 填充
    fi_menu:        "填充",
    fi_type:        "填充類型",
    fi_pcnt_s:      "填充密度",
    fi_pcnt_l:      ["填充密度","0.0 - 1.0"],
    fi_angl_s:      "固體開始",
    fi_angl_l:      ["起始角度","給以下每一層","增加90度","僅適用於固體層"],
    fi_wdth_s:      "固體寬度",
    fi_wdth_l:      ["固體填充線寬","數值為噴頭寬度的一部分","< 1時密度更高","適用於表面處理","0.0 - 1.0"],
    fi_over_s:      "外殼重疊",
    fi_over_l:      ["與外殼及其他填充重疊","數值為噴頭直徑的一部分","0.0 - 2.0"],
    // fi_rate_s:      "列印速度",
    fi_rate_l:      ["耗材擠出速度","設為0以使用默認","輸出列印速度"],

    // FDM 第一層
    fl_menu:        "底層",
    fl_lahi_s:      "層高",
    fl_lahi_l:      ["每一切片厚度的","以mm為單位","應該≥切片厚度"],
    fl_rate_s:      "外殼速度",
    fl_rate_l:      ["外殼列印最大速度","以毫米/分鐘錶示"],
    fl_frat_s:      "填充速度",
    fl_frat_l:      ["填充列印最大速度","以毫米/分鐘錶示"],
    fl_mult_s:      "流量係數",
    fl_mult_l:      ["擠出倍數","0.0 - 2.0"],
    fl_sfac_s:      "寬度係數",
    fl_sfac_l:      ["噴頭大小倍數","改變線的間隔"],
    fl_skrt_s:      "邊緣數",
    fl_skrt_l:      ["需生成的首層偏移","邊緣數"],
    fl_skro_s:      "邊緣偏移",
    fl_skro_l:      ["距離部件的裙邊偏移","以mm為單位"],
    fl_nozl_s:      "列印溫度",
    fl_nozl_l:      ["以攝氏度表示","該數值為0時","使用的輸出設定"],
    fl_bedd_s:      "熱床溫度",
    fl_bedd_l:      ["以攝氏度表示","該數值為0時","使用的輸出設定"],
    fr_spac_s:      "底座空隙",
    fr_spac_l:      ["第一層和底座之間的","額外空隙","以mm為單位"],
    fr_nabl_s:      "啟用底座",
    fr_nabl_l:      ["在模型下方創建底座","以增強粘附性","使用裙邊偏移並","禁用裙邊輸出"],

    // FDM 列印帶專用 皮帶印表機 履帶
    fl_zoff_s:      "列印帶偏移",
    fl_zoff_l:      ["最低擠出","列印帶偏移高度","以mm為單位"],
    fl_brim_s:      "邊緣尺寸",
    fl_brim_l:      ["在部件底部增加裙邊","尺寸為寬度以mm為單位","設為0以禁用"],
    fl_brin_s:      "內襯邊緣",
    fl_brin_l:      ["向零件內部添加邊緣","內部空隙存在時","以mm為單位","0 為禁用"],
    fl_brmn_s:      "裙邊觸發",
    fl_brmn_l:      ["僅在面向列印帶的區域比","該數值短時增加裙邊","數值以mm為單位表示","0 為禁用"],
    fl_brco_s:      "brim comb",
    fl_brco_l:      ["add brim gaps","every n lines","0 to disable"],
    fl_brgp_s:      "邊緣間隙",
    fl_brgp_l:      ["邊緣和零件之間的間距","以mm為單位"],
    fl_bled_s:      "固定錨點",
    fl_bled_l:      ["開始列印時","在皮帶上增加固定錨點","以mm為單位"],
    fl_blmp_s:      "錨點凸出",
    fl_blmp_l:      ["在其開頭添加凹凸","以幫助固定錨點脫落","在皮帶末端脫落","以mm為單位"],

    // FDM 支撐
    sp_menu:        "支撐",
    sp_detect:      "檢測",
    sp_dens_s:      "密度",
    sp_dens_l:      ["分數 0.0 - 1.0","建議值 0.15","0為禁用"],
    sp_size_s:      "柱子尺寸",
    sp_size_l:      ["柱寬","以mm為單位"],
    sp_offs_s:      "部件偏移",
    sp_offs_l:      ["部件偏移","以mm為單位"],
    sp_gaps_s:      "空隙層",
    sp_gaps_l:      ["從部件偏移的","層數"],
    sp_span_s:      "最大範圍",
    sp_span_l:      ["觸發生成新支撐柱的","不受支撐的範圍距離","以mm為單位"],
    sp_angl_s:      "最大角度",
    sp_angl_l:      ["需要生成支撐柱前的","最大懸空角度"],
    sp_area_s:      "最小區域",
    sp_area_l:      ["支撐柱所需的","最小區域","以mm為單位"],
    sp_xpnd_s:      "擴張",
    sp_xpnd_l:      ["支撐區域從","部件邊緣擴張的","以mm為單位"],
    sp_nozl_s:      "噴頭",
    sp_nozl_l:      ["在多噴頭系統中","擠出支撐材料的","噴頭"],
    sp_auto_s:      "自動",
    sp_auto_l:      ["啟用生成支撐","使用切片當時幾何","支撐只會在","切片完成後生成"],

    // LASER 切片
    ls_offs_s:      "偏移",
    ls_offs_l:      ["調整雷射寬度","以mm為單位"],
    ls_lahi_s:      "高度",
    ls_lahi_l:      ["層高","以mm為單位","0 = 自動/測量"],
    ls_lahm_s:      "最小值",
    ls_lahm_l:      ["最小層高","將以該厚度","並入自動切片","（以毫米計算）"],
    ls_sngl_s:      "單層",
    ls_sngl_l:      ["僅以特定層高","切割一層"],

    // CNC 通用術語
    cc_tool:        "工具",
    cc_offs_s:      "偏移",
    cc_offs_l:      ["將工具中心從","所選路徑偏移"],
    cc_spnd_s:      "轉軸轉速",
    cc_spnd_l:      ["轉軸速","以 轉/分鐘 表示"],
    cc_sovr_s:      "步過",
    cc_sovr_l:      ["工具直徑的","一部分"],
    cc_sdwn_s:      "降壓",
    cc_sdwn_l:      ["每次通過後","降低的深度","以工作區單位表示","設為0以禁用"],
    cc_feed_s:      "輸入率",
    cc_feed_l:      ["最大切割速率","以 工作區單位/分鐘 表示"],
    cc_plng_s:      "切入率",
    cc_plng_l:      ["最大z軸速度","以 工作區單位/分鐘 表示"],
    cc_sngl_s:      "僅選取線條",
    cc_sngl_l:      ["僅選中單側邊","不選中相鄰多邊形"],

    // CNC 通用
    cc_menu:        "限值",
    cc_flip:        "翻轉",
    cc_rapd_s:      "xy輸入",
    cc_rapd_l:      ["最大 xy 移動輸入","以 工作區單位/分鐘 表示"],
    cc_rzpd_s:      "z 輸入",
    cc_rzpd_l:      ["最大 z 移動輸入","以 工作區單位/分鐘 表示"],

    cc_loff_s:      "偏移",
    cc_loff_l:      ["實行水平通過所需","與庫存面間的距離","以工作區單位表示"],

    // CNC 粗加工
    cr_menu:        "粗加工",
    cr_lsto_s:      "庫存面距離",
    cr_lsto_l:      ["為最終通過留下的","距離垂直庫存面的水平偏移","以工作區單位表示"],
    cr_ease_s:      "漸緩",
    cr_ease_l:      ["切入切割將","螺旋下降或","沿線性路徑漸緩"],
    cr_clrt_s:      "清理頂面",
    cr_clrt_l:      ["在部件的邊界區域","進行一次清理","清理位置為 z = 0"],
    cr_clrp_s:      "清理缺口",
    cr_clrp_l:      ["將口袋內側磨平","而不是僅清理輪廓"],
    cr_clrf_s:      "清理表面",
    cr_clrf_l:      ["內插降壓以","清除所有檢測到的平坦區域"],
    cr_olin_s:      "僅內部",
    cr_olin_l:      ["限制對內部邊界","的切割"],

    // CNC OUTLINE
    co_menu:        "輪廓",
    co_dogb_s:      "狗骨頭",
    co_dogb_l:      ["在內角插入","狗骨頭切割"],
    co_wide_s:      "寬切除",
    co_wide_l:      ["加寬外部切割路徑","以對硬材料進行深切割"],
    co_olin_s:      "僅內部",
    co_olin_l:      ["限制對內部邊界","的切割"],
    co_olot_s:      "僅外部",
    co_olot_l:      ["限制對外部邊界","的切割","此處可以視作","投影輪廓"],
    co_omit_s:      "略過",
    co_omit_l:      "消除孔洞",
    co_olen_s:      "啟用",
    co_olen_l:      "啟用輪廓切割",

    // CNC 輪廓
    cn_menu:        "邊界",
    cf_angl_s:      "最大角度",
    cf_angl_l:      ["比該數值更大的角度","將視為垂直"],
    cf_curv_s:      "僅弧面",
    cf_curv_l:      ["限制對弧面的","線性清理"],
    cf_olin_s:      "僅內部",
    cf_olin_l:      ["限制對內部邊界","的切割"],
    cf_linx_s:      "啟用 y 通過",
    cf_linx_l:      "線性y軸修整",
    cf_liny_s:      "啟用 x 通過",
    cf_liny_l:      "線性x軸修整",

    // CNC 追蹤
    cu_menu:        "追蹤",
    cu_type_s:      "類型",
    cu_type_l:      ["跟蹤 = 工具頭追蹤線條","向右或向左 = 工具頭","根據工具範圍跟蹤線條"],

    // CNC 鑽孔
    cd_menu:        "鑽孔",
    cd_axis:        "軸",
    cd_points:      "點",
    cd_plpr_s:      "切入 每",
    cd_plpr_l:      ["兩次暫停間的","最深切入","以工作區單位表示","設為0以禁用"],
    cd_dwll_s:      "暫停時間",
    cd_dwll_l:      ["兩次切入銑削間","的暫停時間","以微秒表示"],
    cd_lift_s:      "鑽頭提升",
    cd_lift_l:      ["暫停時間後","兩次切入間的提升距離","以工作區單位表示","設為0以禁用"],
    cd_regi_s:      "定位",
    cd_regi_l:      ["為雙面部件","鑽定位孔","獨立於鑽孔啟用","但使用同樣的","工具和設定"],

    // CNC CUTOUT TABS
    ct_menu:        "標籤",
    ct_angl_s:      "角度",
    ct_angl_l:      ["標籤間隔的起始角度","度數 （0-360）"],
    ct_numb_s:      "數量",
    ct_numb_l:      ["使用的標籤數","將在部件周圍","均勻分布"],
    ct_wdth_s:      "寬度",
    ct_wdth_l:      "以工作區單位表示的寬度",
    ct_hght_s:      "高度",
    ct_hght_l:      "以工作區單位表示的寬度",
    ct_dpth_s:      "深度",
    ct_dpth_l:      ["以工作區單位表示的","標籤從部件表面","投射的深度"],
    ct_midl_s:      "中位線",
    ct_midl_l:      ["處理雙面部件時","使用標籤的中位線","而非z底部"],
    ct_nabl_s:      "自動",
    ct_nabl_l:      ["使用數量和角度偏移","自動生成從部件中心","投影的徑向標籤"],

    // 輸出
    ou_menu:        "輸出",

    // 雷射刀
    dk_menu:        "刀",
    dk_dpth_s:      "切割深度",
    dk_dpth_l:      ["最終切割深度","以mm為單位"],
    dk_pass_s:      "切割次數",
    dk_pass_l:      ["實現切割深度的","切割次數"],
    dk_offs_s:      "刀尖偏移",
    dk_offs_l:      ["刀尖至工具中心","的距離","以mm為單位"],

    // 輸出 雷射
    ou_spac_s:      "間距",
    ou_spac_l:      ["層輸出間距","以mm為單位"],
    ou_scal_s:      "倍增",
    ou_scal_l:      "乘數 （0.1至100）",
    ou_powr_s:      "功率",
    ou_powr_l:      ["0 - 100","代表%"],
    ou_sped_s:      "速度",
    ou_sped_l:      "毫米/分鐘",
    ou_mrgd_s:      "合併",
    ou_mrgd_l:      ["合併所有層","並用色碼表示","層疊深度"],
    ou_grpd_s:      "組合",
    ou_grpd_l:      ["將各層保留為","統一分組","而不是獨立的","多邊形"],
    ou_layr_s:      "層順序",
    ou_layr_l:      ["輸出層順序","從右上到","左下"],
    ou_layo_s:      "層色",
    ou_layo_l:      ["被合併覆蓋後的","各Z係數","輸出層的顏色"],
    ou_drkn_s:      "拖動雷射刀",
    ou_drkn_l:      ["在gcode中啟用","拖動輸出","切割半徑","藉由切入","加到邊角上"],

    // 輸出 FDM
    ou_nozl_s:      "噴嘴加熱溫度",
    ou_nozl_l:      "攝氏度",
    ou_bedd_s:      "熱床溫度",
    ou_bedd_l:      "攝氏度",
    ou_feed_s:      "列印速度",
    ou_feed_l:      ["最大列印速度","毫米/分鐘"],
    ou_fini_s:      "完成速度",
    ou_fini_l:      ["最外殼速度","毫米/分鐘"],
    ou_move_s:      "移動速度",
    ou_move_l:      ["不列印時的移動速度","毫米/分鐘","0 = 啟用G0動作"],
    ou_shml_s:      "外殼參數",
    ou_flml_s:      "實體參數",
    ou_spml_s:      "填充參數",
    ou_exml_l:      ["噴嘴乘數","0.0 - 2.0"],
    ou_fans_s:      "風扇速度",
    ou_fans_l:      "0 - 255",

    // 輸出 CAM
    ou_toll_s:      "容錯",
    ou_toll_l:      ["表面精確度","以工作區單位表示","數值越小速度越慢","且占用更多內存","0 = 基於動畫偏好","自動計算"],
    ou_zanc_s:      "z 錨點",
    ou_zanc_l:      ["控制當庫存Z超過部件Z時","的部件位置"],
    ou_ztof_s:      "z 偏移",
    ou_ztof_l:      ["以工作區單位表示的","Z錨點偏移","在錨點位於中央時","不產生影響"],
    ou_zbot_s:      "z 底部",
    ou_zbot_l:      ["用於限制切割深度的","距離部件底部的偏移","以工作區單位表示"],
    ou_zclr_s:      "z 安全區",
    ou_zclr_l:      ["從部件頂部的","安全移動區偏移","以工作區單位表示"],
    ou_ztru_s:      "z 穿透",
    ou_ztru_l:      ["向下延伸切口","以工作區單位表示"],
    ou_conv_s:      "傳統",
    ou_conv_l:      ["銑削方向","取消勾選以設為‘爬升’"],
    ou_depf_s:      "深度優先",
    ou_depf_l:      ["用深度優先","優化腔銑"],

    // CAM STOCK
    cs_menu:        "庫存",
    cs_wdth_s:      "寬度",
    cs_wdth_l:      ["以工作區單位表示的寬度 (x)","0 默認為部件尺寸"],
    cs_dpth_s:      "深度",
    cs_dpth_l:      ["以工作區單位表示的深度 (y)","0 默認為部件尺寸"],
    cs_hght_s:      "高度",
    cs_hght_l:      ["以工作區單位表示的高度 (z) ","0 默認為部件尺寸"],
    cs_offs_s:      "偏移",
    cs_offs_l:      ["用寬度、深度、高度","作為從平台最大部件","尺寸的偏移值"],
    cs_clip_s:      "夾到",
    cs_clip_l:      ["粗加工和輪廓","將切割路徑夾到","定義的庫存"],
    cs_offe_s:      "啟用",
    cs_offe_l:      "啟用銑削庫存",

    // 零點 (CAM & 雷射)
    or_bnds_s:      "零點邊界",
    or_bnds_l:      ["零點相對於","所有對象的邊界"],
    or_cntr_s:      "原始零點",
    or_cntr_l:      "以中心為零點",
    or_topp_s:      "原始頂部",
    or_topp_l:      "以對象頂部為原始頂部",

    // FDM 高級
    ad_menu:        "專家",
    ad_rdst_s:      "回抽距離",
    ad_rdst_l:      ["長動作耗材回抽量","以毫米表示"],
    ad_rrat_s:      "回抽速率",
    ad_rrat_l:      ["耗材回抽速率","以 毫米/秒 表示"],
    ad_rdwl_s:      "啟用暫停",
    ad_wpln_s:      "回抽掃動",
    ad_wpln_l:      ["回抽後的","非列印移動","以mm為單位"],
    ad_rdwl_l:      ["重新啟用耗材和動作","的間隔","毫秒數"],
    ad_scst_s:      "外殼滑過",
    ad_scst_l:      ["外圍外殼","非列印端","以mm為單位"],
    ad_msol_s:      "最小固體",
    ad_msol_l:      ["維持固體所需的","最小區域（平方毫米）","必須>0.1"],
    ad_mins_s:      "最小速度",
    ad_mins_l:      ["短距離的","最小速度"],
    ad_spol_s:      "短路徑",
    ad_spol_l:      ["比這更短的多邊形","的列印速度將","降低到最小速度","以毫米表示"],
    ad_arct_s:      "拱形容忍",
    ad_arct_l:      ["將多麵線轉換為拱形","配對拱形點時的","中心漂移容忍度","採用約0.15的數值","數值以毫米表示","設為0以禁用"],
    ad_zhop_s:      "z 跳躍距離",
    ad_zhop_l:      ["回抽過程中","z的提升高度","以mm為單位","設為0以禁用"],
    ad_abkl_s:      "防反衝",
    ad_abkl_l:      ["為取得更好的平面效果","使用微動作以抵消","固體層輸出中的反衝","以毫米表示","設為0以禁用","若您的韌體包含M425","請將腳本置入gcode header","並將數值保留為0"],
    ad_lbir_s:      "皮帶優先",
    ad_lbir_l:      ["列印時外殼始終接觸皮帶"],
    ad_lret_s:      "層回抽",
    ad_lret_l:      ["在層與層之間","強制回收耗材"],
    ad_play_s:      "層拋光",
    ad_play_l:      ["一次性給指定的","#層拋光"],
    ad_pspd_s:      "拋光速度",
    ad_pspd_l:      ["拋光速度","以毫米/分鐘錶示"],

    // CAM 專家
    cx_fast_s:      "跳過陰影",
    cx_fast_l:      ["禁用懸掛檢測","可提升速度並減少","複雜模型的內存占用","但不與懸掛兼容","如果上陰影時切片懸浮","請嘗試啟用"],

    // FDM GCODE
    ag_menu:        "gcode",
    ag_nozl_s:      "噴頭",
    ag_nozl_l:      "選擇輸出噴口或噴頭",
    ag_peel_s:      "防翹邊",
    ag_peel_l:      ["從列印帶Z位置開始","階段性將列印物從列印帶上取下","然後放回以去除黏連","並防止滾動瑕疵"],
    ag_paws_s:      "暫停層",
    ag_paws_l:      ["用逗號隔開的層","在各層前添加暫停指令"],
    ag_loop_s:      "循環層",
    ag_loop_l:      ["使用以下格式的層重複範圍","首層-末層-次數，首層-末層-次數，……","忽略次數 = 1"],

    // SLA 菜單
    sa_menu:        "切片",
    sa_lahe_s:      "層高",
    sa_lahe_l:      ["層高","以mm為單位"],
    sa_shel_s:      "空殼",
    sa_shel_l:      ["殼厚以mm為單位","為層高倍數","0為實心（禁用）"],
    sa_otop_s:      "打開頂部",
    sa_otop_l:      ["如果外殼已啟用","則形成開放頂部"],
    sa_obas_s:      "打開底面",
    sa_obas_l:      ["若外殼已啟用","則形成開放底面","支撐將禁用該功能"],

    sa_layr_m:      "層",
    sa_lton_s:      "曝光時間",
    sa_lton_l:      ["層曝光","秒數"],
    sa_ltof_s:      "燈滅時間",
    sa_ltof_l:      ["層燈滅","秒數"],
    sa_pldi_s:      "剝離距離",
    sa_pldi_l:      ["剝離距離","以mm為單位"],
    sa_pllr_s:      "剝離提升速率",
    sa_pllr_l:      ["剝離提升速率","以 毫米/秒 表示"],
    sa_pldr_s:      "剝離跌落速度",
    sa_pldr_l:      ["剝離跌落速度","以 毫米/秒 表示"],

    sa_base_m:      "底面",
    sa_balc_s:      "層數",
    sa_balc_l:      ["底層","層數"],
    sa_bltn_l:      ["底層曝光","秒數"],
    sa_bltf_l:      ["底層燈滅","秒數"],

    sa_infl_m:      "填充",
    sa_ifdn_s:      "密度",
    sa_ifdn_l:      ["要求外殼的","填充百分比","0 = 禁用","有效範圍 0.0 - 1.0"],
    sa_iflw_s:      "線寬",
    sa_iflw_l:      ["剖麵線寬度","以mm為單位"],

    sa_supp_m:      "支撐",
    sa_slyr_s:      "底面層",
    sa_slyr_l:      ["底面支撐層","數值範圍0-10"],
    sa_slgp_s:      "空隙層",
    sa_slgp_l:      ["支架和物品底部","間的層數"],
    sa_sldn_s:      "密度",
    sa_sldn_l:      ["用於計算","支撐柱的數量","0.0-1.0 （0 = 禁用）"],
    sa_slsz_s:      "尺寸",
    sa_slsz_l:      ["支撐柱的","最大尺寸","以mm為單位"],
    sa_slpt_s:      "點",
    sa_slpt_l:      ["各支撐柱","內的點數","以毫米表示"],
    sl_slen_l:      "啟用支撐",

    sa_outp_m:      "輸出",
    sa_opzo_s:      "z 偏移",
    sa_opzo_l:      ["z 層偏移","一般始終保持在0.0","0.0-1.0 毫米"],
    sa_opaa_s:      "抗鋸齒",
    sa_opaa_l:      ["啟動抗鋸齒","檔案體積增加","可能模糊細節"]
};
