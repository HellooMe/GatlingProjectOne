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
        "total": "269",
        "ok": "651",
        "ko": "269"
    },
    "maxResponseTime": {
        "total": "3630",
        "ok": "3630",
        "ko": "896"
    },
    "meanResponseTime": {
        "total": "1402",
        "ok": "2433",
        "ko": "370"
    },
    "standardDeviation": {
        "total": "1144",
        "ok": "694",
        "ko": "96"
    },
    "percentiles1": {
        "total": "753",
        "ok": "2434",
        "ko": "356"
    },
    "percentiles2": {
        "total": "2429",
        "ok": "3028",
        "ko": "385"
    },
    "percentiles3": {
        "total": "3247",
        "ok": "3476",
        "ko": "508"
    },
    "percentiles4": {
        "total": "3584",
        "ok": "3608",
        "ko": "797"
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
    "count": 8,
    "percentage": 2
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 234,
    "percentage": 47
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
        "total": "651",
        "ok": "651",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3630",
        "ok": "3630",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2433",
        "ok": "2433",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "694",
        "ok": "694",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2434",
        "ok": "2434",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3028",
        "ok": "3028",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3476",
        "ok": "3476",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3608",
        "ok": "3608",
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
    "count": 8,
    "percentage": 3
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 234,
    "percentage": 94
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
        "total": "269",
        "ok": "-",
        "ko": "269"
    },
    "maxResponseTime": {
        "total": "896",
        "ok": "-",
        "ko": "896"
    },
    "meanResponseTime": {
        "total": "370",
        "ok": "-",
        "ko": "370"
    },
    "standardDeviation": {
        "total": "96",
        "ok": "-",
        "ko": "96"
    },
    "percentiles1": {
        "total": "356",
        "ok": "-",
        "ko": "356"
    },
    "percentiles2": {
        "total": "385",
        "ok": "-",
        "ko": "385"
    },
    "percentiles3": {
        "total": "508",
        "ok": "-",
        "ko": "508"
    },
    "percentiles4": {
        "total": "797",
        "ok": "-",
        "ko": "797"
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
