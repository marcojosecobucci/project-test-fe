report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\backstop_default_Login_Page_0_document_0_phone.png",
        "test": "..\\bitmaps_test\\20220429-164250\\backstop_default_Login_Page_0_document_0_phone.png",
        "selector": "document",
        "fileName": "backstop_default_Login_Page_0_document_0_phone.png",
        "label": "Login Page",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://localhost:4200",
        "referenceUrl": "http://localhost:4200",
        "expect": 0,
        "viewportLabel": "phone",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 120,
            "height": 0
          },
          "rawMisMatchPercentage": 1.2593993325917687,
          "misMatchPercentage": "1.26",
          "analysisTime": 21
        },
        "diffImage": "..\\bitmaps_test\\20220429-164250\\failed_diff_backstop_default_Login_Page_0_document_0_phone.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\backstop_default_Login_Page_0_document_1_tablet.png",
        "test": "..\\bitmaps_test\\20220429-164250\\backstop_default_Login_Page_0_document_1_tablet.png",
        "selector": "document",
        "fileName": "backstop_default_Login_Page_0_document_1_tablet.png",
        "label": "Login Page",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://localhost:4200",
        "referenceUrl": "http://localhost:4200",
        "expect": 0,
        "viewportLabel": "tablet",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 0.8829752604166666,
          "misMatchPercentage": "0.88",
          "analysisTime": 23
        },
        "diffImage": "..\\bitmaps_test\\20220429-164250\\failed_diff_backstop_default_Login_Page_0_document_1_tablet.png"
      },
      "status": "fail"
    }
  ],
  "id": "backstop_default"
});