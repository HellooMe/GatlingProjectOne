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
        "total": "275",
        "ok": "1402",
        "ko": "275"
    },
    "maxResponseTime": {
        "total": "4058",
        "ok": "4058",
        "ko": "1045"
    },
    "meanResponseTime": {
        "total": "1703",
        "ok": "2935",
        "ko": "471"
    },
    "standardDeviation": {
        "total": "1337",
        "ok": "721",
        "ko": "150"
    },
    "percentiles1": {
        "total": "1224",
        "ok": "3097",
        "ko": "437"
    },
    "percentiles2": {
        "total": "3097",
        "ok": "3412",
        "ko": "532"
    },
    "percentiles3": {
        "total": "3791",
        "ok": "3917",
        "ko": "787"
    },
    "percentiles4": {
        "total": "3973",
        "ok": "3999",
        "ko": "1015"
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
    "count": 250,
    "percentage": 50
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
        "total": "1402",
        "ok": "1402",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4058",
        "ok": "4058",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2935",
        "ok": "2935",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "721",
        "ok": "721",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3097",
        "ok": "3097",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3412",
        "ok": "3412",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3917",
        "ok": "3917",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3999",
        "ok": "3999",
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
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 250,
    "percentage": 100
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
        "total": "275",
        "ok": "-",
        "ko": "275"
    },
    "maxResponseTime": {
        "total": "1045",
        "ok": "-",
        "ko": "1045"
    },
    "meanResponseTime": {
        "total": "471",
        "ok": "-",
        "ko": "471"
    },
    "standardDeviation": {
        "total": "150",
        "ok": "-",
        "ko": "150"
    },
    "percentiles1": {
        "total": "437",
        "ok": "-",
        "ko": "437"
    },
    "percentiles2": {
        "total": "532",
        "ok": "-",
        "ko": "532"
    },
    "percentiles3": {
        "total": "787",
        "ok": "-",
        "ko": "787"
    },
    "percentiles4": {
        "total": "1015",
        "ok": "-",
        "ko": "1015"
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
