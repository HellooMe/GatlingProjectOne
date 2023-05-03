package botiqueClass;

import io.gatling.javaapi.core.*;
import io.gatling.javaapi.http.*;

import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.*;

public class Boutiquee extends Simulation {

    private HttpProtocolBuilder httpProtocol = http
            .baseUrl("https://onlineboutique.dev/");
    ScenarioBuilder myScenario = scenario("Online Boutique Home Page")
            .exec(http("To_Home")
                    .get("/")
                    //.check(
                            //status().is(200),
                           // status().in(200, 202)// Gatling will perform implicit check for 2XX or 304
                            //currentLocation().saveAs("url"),
                           // responseTimeInMillis().lte(1000)
                            //header("DNT").is("1"),

                    //)
            );


    ScenarioBuilder multipleRequests = scenario("MultipleRequests")
            .exec(http("T10_Home").get("/product/OLJCESPC7Z"))
            .exec(http("T20_Home").get("/checkout"));



    {
        // load simulation
        setUp(
                //myScenario.injectOpen(atOnceUsers(250)),
                multipleRequests.injectOpen(atOnceUsers(250))
        ).protocols(httpProtocol);
    }
}


