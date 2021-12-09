var CurrencyHelper;
(function (CurrencyHelper) {
    var raw = "{\"date\":\"2021-12-08\",\"rates\":{\"AED\":[0.5781000388396091,2],\"AFN\":[15.149774179399945,2],\"ALL\":[16.891373632158917,2],\"AMD\":[77.4050642108691,2],\"ANG\":[0.2831136954598101,2],\"AOA\":[88.80428421110618,2],\"ARS\":[15.957364568653718,2],\"AUD\":[0.2206806624070935,2],\"AWG\":[0.2833916392337231,2],\"AZN\":[0.26716588696906707,2],\"BAM\":[0.2729211221230274,2],\"BBD\":[0.3171811229737334,2],\"BDT\":[13.474619187045839,2],\"BGN\":[0.2726587978687723,2],\"BHD\":[0.059345807100326824,3],\"BIF\":[312.97545922433744,2],\"BMD\":[0.15739608661302573,2],\"BND\":[0.21473687733726238,2],\"BOB\":[1.0832326548372049,2],\"BRL\":[0.8834479810724891,2],\"BSD\":[0.15709750275956472,2],\"BTC\":[0.0000031203861926235426,7],\"BTN\":[11.846605996919328,2],\"BWP\":[1.8437760746613039,2],\"BYN\":[0.4013255672709701,2],\"BYR\":[3084.962885789933,2],\"BZD\":[0.31665089606534536,2],\"CAD\":[0.1990730094003011,2],\"CDF\":[315.1069290002182,2],\"CHF\":[0.14537142729636574,2],\"CLF\":[0.004791427115067746,4],\"CLP\":[132.2095071274518,2],\"COP\":[615.5728647105543,2],\"CRC\":[99.47054026105518,2],\"CUC\":[0.15739608661302573,2],\"CUP\":[4.170995807135192,2],\"CVE\":[15.387930295104324,2],\"CZK\":[3.551326787545943,2],\"DJF\":[27.96580092224896,2],\"DKK\":[1.0370921753876814,2],\"DOP\":[8.894370069653297,2],\"DZD\":[21.91103051872843,2],\"EGP\":[2.4793986206011702,2],\"ERN\":[2.3609898312743227,2],\"ETB\":[7.565328710699301,2],\"EUR\":[0.13945999694582606,2],\"FJD\":[0.33582106724551863,2],\"FKP\":[0.11732839273050819,2],\"GBP\":[0.11887890897655189,2],\"GEL\":[0.48714102125161163,2],\"GGP\":[0.11732839273050819,2],\"GHS\":[0.9622672848463464,2],\"GIP\":[0.11732839273050819,2],\"GMD\":[8.26310829835793,2],\"GNF\":[1492.483699427447,2],\"GTQ\":[1.214413469604345,2],\"GYD\":[32.87475390540289,2],\"HKD\":[1.227251738543187,2],\"HNL\":[3.79476941335455,2],\"HRK\":[1.0488242476307488,2],\"HTG\":[15.865880623637214,2],\"HUF\":[51.19228381782898,2],\"IDR\":[2259.341823704434,2],\"ILS\":[0.4906648964544389,2],\"IMP\":[0.11732839273050819,2],\"INR\":[11.888361296224886,2],\"IQD\":[229.1975067341746,2],\"IRR\":[6649.983792377536,2],\"ISK\":[20.525980212021032,2],\"JEP\":[0.11732839273050819,2],\"JMD\":[24.35252600405968,2],\"JOD\":[0.11162587345539338,2],\"JPY\":[17.86468907742331,2],\"KES\":[17.762108300449828,2],\"KGS\":[13.346730325506606,2],\"KHR\":[639.6164215541004,2],\"KMF\":[68.88436813813234,2],\"KPW\":[141.65651421132236,2],\"KRW\":[185.35118565402902,2],\"KWD\":[0.04765933827626049,3],\"KYD\":[0.1309052418131752,2],\"KZT\":[68.6889220648726,2],\"LAK\":[1716.5608523237172,2],\"LBP\":[237.55790386046192,2],\"LKR\":[31.850369464396913,2],\"LRD\":[22.326659940046145,2],\"LSL\":[2.5010426726671655,2],\"LTL\":[0.4647496030619837,2],\"LVL\":[0.09520724801496126,3],\"LYD\":[0.7228475221096392,2],\"MAD\":[1.4509716526637206,2],\"MDL\":[2.7687412968245653,2],\"MGA\":[624.0361333879086,2],\"MKD\":[8.600069590538476,2],\"MMK\":[279.61858416027303,2],\"MNT\":[449.87236411889523,2],\"MOP\":[1.2615017191931124,2],\"MRO\":[56.19036833477093,2],\"MUR\":[6.845083372672674,2],\"MVR\":[2.4149540165525067,2],\"MWK\":[128.24759686019763,2],\"MXN\":[3.3091892283887567,2],\"MYR\":[0.6654743766661111,2],\"MZN\":[10.046530270140988,2],\"NAD\":[2.5021181881636116,2],\"NGN\":[64.5653829606381,2],\"NIO\":[5.534265390979587,2],\"NOK\":[1.4147070328979159,2],\"NPR\":[18.95249727530031,2],\"NZD\":[0.23205446191800733,2],\"OMR\":[0.06060610709272625,3],\"PAB\":[0.1570959686995983,2],\"PEN\":[0.6418724457029934,2],\"PGK\":[0.5515707030806016,2],\"PHP\":[7.917810924319941,2],\"PKR\":[27.77335323892357,2],\"PLN\":[0.6403662777359785,2],\"PYG\":[1070.9223057200215,2],\"QAR\":[0.5730800367895472,2],\"RON\":[0.6899618786098348,2],\"RSD\":[16.395031319228817,2],\"RUB\":[11.603788570277032,2],\"RWF\":[162.77737219711557,2],\"SAR\":[0.590480181688484,2],\"SBD\":[1.2708656212280431,2],\"SCR\":[2.0555651860431228,2],\"SDG\":[68.86226958593629,2],\"SEK\":[1.4282750960007753,2],\"SGD\":[0.21483533609510616,2],\"SHP\":[0.21679753825213394,2],\"SLL\":[1751.8182024582613,2],\"SOS\":[91.91926828128803,2],\"SRD\":[3.381418350006938,2],\"STD\":[3257.780776555101,2],\"SVC\":[1.3745040628183611,2],\"SYP\":[197.81278736603997,2],\"SZL\":[2.503453657094365,2],\"THB\":[5.280401756359201,2],\"TJS\":[1.7737043991958739,2],\"TMT\":[0.5524601789411221,2],\"TND\":[0.45479550631997845,2],\"TOP\":[0.3603109400091904,2],\"TRY\":[2.1477479651043194,2],\"TTD\":[1.0677965250752561,2],\"TWD\":[4.366560839772317,2],\"TZS\":[362.3256646140479,2],\"UAH\":[4.293604434270063,2],\"UGX\":[560.8678350160344,2],\"USD\":[0.15739608661302573,2],\"UYU\":[6.938489215907086,2],\"UZS\":[1693.8090381234822,2],\"VEF\":[33656035702.69337,2],\"VND\":[3612.2397055162705,2],\"VUV\":[17.52126841656422,2],\"WST\":[0.40350700054319666,2],\"XAF\":[91.53335792477947,2],\"XAG\":[0.0070180454263048045,4],\"XAU\":[0.00008813871806976206,6],\"XCD\":[0.42537070210438155,2],\"XDR\":[0.11237198443905355,2],\"XOF\":[91.53416944250169,2],\"XPF\":[16.770621496503388,2],\"YER\":[39.38831157873597,2],\"ZAR\":[2.4864329828471172,2],\"ZMK\":[1416.753833999371,2],\"ZMW\":[2.7412513606065954,2],\"ZWL\":[50.68146890425584,2]}}";
    var data;
    function initialize() {
        data = JSON.parse(raw);
    }
    CurrencyHelper.initialize = initialize;
    function getData() {
        return data;
    }
    CurrencyHelper.getData = getData;
})(CurrencyHelper || (CurrencyHelper = {}));