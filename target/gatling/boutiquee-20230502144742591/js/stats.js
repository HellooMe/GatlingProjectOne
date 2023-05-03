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
        "total": "273",
        "ok": "862",
        "ko": "273"
    },
    "maxResponseTime": {
        "total": "3771",
        "ok": "3771",
        "ko": "1406"
    },
    "meanResponseTime": {
        "total": "1655",
        "ok": "2827",
        "ko": "483"
    },
    "standardDeviation": {
        "total": "1272",
        "ok": "673",
        "ko": "186"
    },
    "percentiles1": {
        "total": "913",
        "ok": "3137",
        "ko": "403"
    },
    "percentiles2": {
        "total": "3137",
        "ok": "3324",
        "ko": "574"
    },
    "percentiles3": {
        "total": "3445",
        "ok": "3476",
        "ko": "826"
    },
    "percentiles4": {
        "total": "3525",
        "ok": "3639",
        "ko": "903"
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
    "count": 5,
    "percentage": 1
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 245,
    "percentage": 49
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
        "total": "862",
        "ok": "862",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3771",
        "ok": "3771",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2827",
        "ok": "2827",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "673",
        "ok": "673",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3137",
        "ok": "3137",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3324",
        "ok": "3324",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3476",
        "ok": "3476",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3639",
        "ok": "3639",
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
    "count": 5,
    "percentage": 2
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 245,
    "percentage": 98
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
        "total": "273",
        "ok": "-",
        "ko": "273"
    },
    "maxResponseTime": {
        "total": "1406",
        "ok": "-",
        "ko": "1406"
    },
    "meanResponseTime": {
        "total": "483",
        "ok": "-",
        "ko": "483"
    },
    "standardDeviation": {
        "total": "186",
        "ok": "-",
        "ko": "186"
    },
    "percentiles1": {
        "total": "403",
        "ok": "-",
        "ko": "403"
    },
    "percentiles2": {
        "total": "574",
        "ok": "-",
        "ko": "574"
    },
    "percentiles3": {
        "total": "826",
        "ok": "-",
        "ko": "826"
    },
    "percentiles4": {
        "total": "903",
        "ok": "-",
        "ko": "903"
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
