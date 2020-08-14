$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/BuyProduct.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: chilkakalpesh@gmail.com"
    }
  ],
  "line": 2,
  "name": "Tests and verifies End to End Checkout flow",
  "description": "",
  "id": "tests-and-verifies-end-to-end-checkout-flow",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Verify user is successfully able to purchase Pillow using correct Credit Card payment details",
  "description": "",
  "id": "tests-and-verifies-end-to-end-checkout-flow;verify-user-is-successfully-able-to-purchase-pillow-using-correct-credit-card-payment-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User proceeds for Checkout",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Enters valid Credit Card payment details as \u003cCardNumber\u003e and \u003cExpriyDate\u003e and \u003cCVVNumber\u003e and \u003cBanksOTP\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Verify payment is successfully completed",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "tests-and-verifies-end-to-end-checkout-flow;verify-user-is-successfully-able-to-purchase-pillow-using-correct-credit-card-payment-details;",
  "rows": [
    {
      "cells": [
        "CardNumber",
        "ExpriyDate",
        "CVVNumber",
        "BanksOTP"
      ],
      "line": 12,
      "id": "tests-and-verifies-end-to-end-checkout-flow;verify-user-is-successfully-able-to-purchase-pillow-using-correct-credit-card-payment-details;;1"
    },
    {
      "cells": [
        "4811 1111 1111 1114",
        "12/24",
        "123",
        "112233"
      ],
      "line": 13,
      "id": "tests-and-verifies-end-to-end-checkout-flow;verify-user-is-successfully-able-to-purchase-pillow-using-correct-credit-card-payment-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Verify user is successfully able to purchase Pillow using correct Credit Card payment details",
  "description": "",
  "id": "tests-and-verifies-end-to-end-checkout-flow;verify-user-is-successfully-able-to-purchase-pillow-using-correct-credit-card-payment-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User proceeds for Checkout",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Enters valid Credit Card payment details as 4811 1111 1111 1114 and 12/24 and 123 and 112233",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Verify payment is successfully completed",
  "keyword": "Then "
});
formatter.match({
  "location": "BuyProductStepDefinations.user_is_on_the_homepage()"
});
formatter.result({
  "duration": 5283018167,
  "status": "passed"
});
formatter.match({
  "location": "BuyProductStepDefinations.user_proceeds_for_checkout()"
});
formatter.result({
  "duration": 8521226646,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4811 1111 1111 1114",
      "offset": 44
    },
    {
      "val": "12/24",
      "offset": 68
    },
    {
      "val": "123",
      "offset": 78
    },
    {
      "val": "112233",
      "offset": 86
    }
  ],
  "location": "BuyProductStepDefinations.enters_valid_credit_card_payment_details_as_and_and_and(String,String,String,String)"
});
formatter.result({
  "duration": 14570210614,
  "status": "passed"
});
formatter.match({
  "location": "BuyProductStepDefinations.verify_payment_is_successfully_completed()"
});
formatter.result({
  "duration": 36057270,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Verify user is successfully able to purchase Pillow using correct Credit Card payment details",
  "description": "",
  "id": "tests-and-verifies-end-to-end-checkout-flow;verify-user-is-successfully-able-to-purchase-pillow-using-correct-credit-card-payment-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "User is on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "User proceeds for Checkout",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Enters valid Credit Card payment details as \u003cCardNumber\u003e and \u003cExpriyDate\u003e and \u003cCVVNumber\u003e and \u003cBanksOTP\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Verify payment is Failed",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "tests-and-verifies-end-to-end-checkout-flow;verify-user-is-successfully-able-to-purchase-pillow-using-correct-credit-card-payment-details;",
  "rows": [
    {
      "cells": [
        "CardNumber",
        "ExpriyDate",
        "CVVNumber",
        "BanksOTP"
      ],
      "line": 24,
      "id": "tests-and-verifies-end-to-end-checkout-flow;verify-user-is-successfully-able-to-purchase-pillow-using-correct-credit-card-payment-details;;1"
    },
    {
      "cells": [
        "4911 1111 1111 1113",
        "02/21",
        "123",
        "112233"
      ],
      "line": 25,
      "id": "tests-and-verifies-end-to-end-checkout-flow;verify-user-is-successfully-able-to-purchase-pillow-using-correct-credit-card-payment-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 25,
  "name": "Verify user is successfully able to purchase Pillow using correct Credit Card payment details",
  "description": "",
  "id": "tests-and-verifies-end-to-end-checkout-flow;verify-user-is-successfully-able-to-purchase-pillow-using-correct-credit-card-payment-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "User is on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "User proceeds for Checkout",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Enters valid Credit Card payment details as 4911 1111 1111 1113 and 02/21 and 123 and 112233",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Verify payment is Failed",
  "keyword": "Then "
});
formatter.match({
  "location": "BuyProductStepDefinations.user_is_on_the_homepage()"
});
formatter.result({
  "duration": 5009206582,
  "status": "passed"
});
formatter.match({
  "location": "BuyProductStepDefinations.user_proceeds_for_checkout()"
});
formatter.result({
  "duration": 8455087749,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4911 1111 1111 1113",
      "offset": 44
    },
    {
      "val": "02/21",
      "offset": 68
    },
    {
      "val": "123",
      "offset": 78
    },
    {
      "val": "112233",
      "offset": 86
    }
  ],
  "location": "BuyProductStepDefinations.enters_valid_credit_card_payment_details_as_and_and_and(String,String,String,String)"
});
formatter.result({
  "duration": 14747581782,
  "status": "passed"
});
formatter.match({
  "location": "BuyProductStepDefinations.verify_payment_is_failed()"
});
formatter.result({
  "duration": 58453704,
  "status": "passed"
});
});