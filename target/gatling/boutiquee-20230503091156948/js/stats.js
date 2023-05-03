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
        "total": "278",
        "ok": "642",
        "ko": "278"
    },
    "maxResponseTime": {
        "total": "3541",
        "ok": "3541",
        "ko": "827"
    },
    "meanResponseTime": {
        "total": "1491",
        "ok": "2604",
        "ko": "378"
    },
    "standardDeviation": {
        "total": "1206",
        "ok": "646",
        "ko": "111"
    },
    "percentiles1": {
        "total": "710",
        "ok": "2636",
        "ko": "345"
    },
    "percentiles2": {
        "total": "2636",
        "ok": "3112",
        "ko": "407"
    },
    "percentiles3": {
        "total": "3394",
        "ok": "3487",
        "ko": "594"
    },
    "percentiles4": {
        "total": "3525",
        "ok": "3528",
        "ko": "742"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 8,
    "percentage": 2
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 1,
    "percentage": 0
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
        "total": "125",
        "ok": "62.5",
        "ko": "62.5"
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
        "total": "642",
        "ok": "642",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3541",
        "ok": "3541",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2604",
        "ok": "2604",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "646",
        "ok": "646",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2636",
        "ok": "2636",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3112",
        "ok": "3112",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3487",
        "ok": "3487",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3528",
        "ok": "3528",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 8,
    "percentage": 3
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 1,
    "percentage": 0
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
        "total": "62.5",
        "ok": "62.5",
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
        "total": "278",
        "ok": "-",
        "ko": "278"
    },
    "maxResponseTime": {
        "total": "827",
        "ok": "-",
        "ko": "827"
    },
    "meanResponseTime": {
        "total": "378",
        "ok": "-",
        "ko": "378"
    },
    "standardDeviation": {
        "total": "111",
        "ok": "-",
        "ko": "111"
    },
    "percentiles1": {
        "total": "345",
        "ok": "-",
        "ko": "345"
    },
    "percentiles2": {
        "total": "407",
        "ok": "-",
        "ko": "407"
    },
    "percentiles3": {
        "total": "594",
        "ok": "-",
        "ko": "594"
    },
    "percentiles4": {
        "total": "742",
        "ok": "-",
        "ko": "742"
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
        "total": "62.5",
        "ok": "-",
        "ko": "62.5"
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
