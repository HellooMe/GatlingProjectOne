var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "500",
        "ok": "250",
        "ko": "250"
    },
    "minResponseTime": {
        "total": "270",
        "ok": "909",
        "ko": "270"
    },
    "maxResponseTime": {
        "total": "3677",
        "ok": "3677",
        "ko": "1232"
    },
    "meanResponseTime": {
        "total": "1557",
        "ok": "2687",
        "ko": "428"
    },
    "standardDeviation": {
        "total": "1207",
        "ok": "581",
        "ko": "152"
    },
    "percentiles1": {
        "total": "1012",
        "ok": "2788",
        "ko": "391"
    },
    "percentiles2": {
        "total": "2787",
        "ok": "3098",
        "ko": "466"
    },
    "percentiles3": {
        "total": "3353",
        "ok": "3437",
        "ko": "659"
    },
    "percentiles4": {
        "total": "3564",
        "ok": "3612",
        "ko": "1133"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 9,
    "percentage": 2
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 241,
    "percentage": 48
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 250,
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "100",
        "ok": "50",
        "ko": "50"
    }
},
contents: {
"req_t10-home-3fd76": {
        type: "REQUEST",
        name: "T10_Home",
path: "T10_Home",
pathFormatted: "req_t10-home-3fd76",
stats: {
    "name": "T10_Home",
    "numberOfRequests": {
        "total": "250",
        "ok": "250",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "909",
        "ok": "909",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3677",
        "ok": "3677",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2687",
        "ok": "2687",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "581",
        "ok": "581",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2788",
        "ok": "2788",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3098",
        "ok": "3098",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3437",
        "ok": "3437",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3612",
        "ok": "3612",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 9,
    "percentage": 4
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 241,
    "percentage": 96
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "50",
        "ok": "50",
        "ko": "-"
    }
}
    },"req_t20-home-5c057": {
        type: "REQUEST",
        name: "T20_Home",
path: "T20_Home",
pathFormatted: "req_t20-home-5c057",
stats: {
    "name": "T20_Home",
    "numberOfRequests": {
        "total": "250",
        "ok": "0",
        "ko": "250"
    },
    "minResponseTime": {
        "total": "270",
        "ok": "-",
        "ko": "270"
    },
    "maxResponseTime": {
        "total": "1232",
        "ok": "-",
        "ko": "1232"
    },
    "meanResponseTime": {
        "total": "428",
        "ok": "-",
        "ko": "428"
    },
    "standardDeviation": {
        "total": "152",
        "ok": "-",
        "ko": "152"
    },
    "percentiles1": {
        "total": "391",
        "ok": "-",
        "ko": "391"
    },
    "percentiles2": {
        "total": "466",
        "ok": "-",
        "ko": "466"
    },
    "percentiles3": {
        "total": "659",
        "ok": "-",
        "ko": "659"
    },
    "percentiles4": {
        "total": "1133",
        "ok": "-",
        "ko": "1133"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 250,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "50",
        "ok": "-",
        "ko": "50"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
