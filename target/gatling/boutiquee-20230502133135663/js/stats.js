var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "500",
        "ok": "19",
        "ko": "481"
    },
    "minResponseTime": {
        "total": "281",
        "ok": "11841",
        "ko": "281"
    },
    "maxResponseTime": {
        "total": "60005",
        "ok": "56234",
        "ko": "60005"
    },
    "meanResponseTime": {
        "total": "14330",
        "ok": "23735",
        "ko": "13958"
    },
    "standardDeviation": {
        "total": "6247",
        "ok": "17470",
        "ko": "4988"
    },
    "percentiles1": {
        "total": "13254",
        "ok": "13269",
        "ko": "12976"
    },
    "percentiles2": {
        "total": "17303",
        "ok": "29857",
        "ko": "17298"
    },
    "percentiles3": {
        "total": "20847",
        "ok": "56041",
        "ko": "20835"
    },
    "percentiles4": {
        "total": "33284",
        "ok": "56195",
        "ko": "20866"
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
    "count": 19,
    "percentage": 4
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 481,
    "percentage": 96
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8.197",
        "ok": "0.311",
        "ko": "7.885"
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
        "ok": "19",
        "ko": "231"
    },
    "minResponseTime": {
        "total": "11841",
        "ok": "11841",
        "ko": "12061"
    },
    "maxResponseTime": {
        "total": "60005",
        "ok": "56234",
        "ko": "60005"
    },
    "meanResponseTime": {
        "total": "18533",
        "ok": "23735",
        "ko": "18105"
    },
    "standardDeviation": {
        "total": "6188",
        "ok": "17470",
        "ko": "3732"
    },
    "percentiles1": {
        "total": "17303",
        "ok": "13269",
        "ko": "17308"
    },
    "percentiles2": {
        "total": "20691",
        "ok": "29857",
        "ko": "20690"
    },
    "percentiles3": {
        "total": "20863",
        "ok": "56041",
        "ko": "20856"
    },
    "percentiles4": {
        "total": "55951",
        "ok": "56195",
        "ko": "20872"
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
    "count": 19,
    "percentage": 8
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 231,
    "percentage": 92
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4.098",
        "ok": "0.311",
        "ko": "3.787"
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
        "total": "281",
        "ok": "-",
        "ko": "281"
    },
    "maxResponseTime": {
        "total": "17088",
        "ok": "-",
        "ko": "17088"
    },
    "meanResponseTime": {
        "total": "10126",
        "ok": "-",
        "ko": "10126"
    },
    "standardDeviation": {
        "total": "2105",
        "ok": "-",
        "ko": "2105"
    },
    "percentiles1": {
        "total": "10010",
        "ok": "-",
        "ko": "10010"
    },
    "percentiles2": {
        "total": "10014",
        "ok": "-",
        "ko": "10014"
    },
    "percentiles3": {
        "total": "14536",
        "ok": "-",
        "ko": "14536"
    },
    "percentiles4": {
        "total": "17001",
        "ok": "-",
        "ko": "17001"
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
        "total": "4.098",
        "ok": "-",
        "ko": "4.098"
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
